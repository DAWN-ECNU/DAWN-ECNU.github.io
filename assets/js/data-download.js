/* Save cross-origin course datasets without opening their raw text in a tab. */
(() => {
  "use strict";

  const links = Array.from(document.querySelectorAll("a[data-download-file]"));
  let active = false;

  const megabytes = (bytes) => `${(bytes / 1024 / 1024).toFixed(1)} MB`;

  async function readFile(response, signal, status) {
    if (!response.body) return response.blob();

    const total = Number(response.headers.get("Content-Length")) || 0;
    const reader = response.body.getReader();
    const chunks = [];
    let received = 0;
    let lastUpdate = 0;

    try {
      while (true) {
        if (signal.aborted) throw new DOMException("Cancelled", "AbortError");
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
        received += value.byteLength;
        if (Date.now() - lastUpdate > 1000) {
          const progress = total > 0 ? `${megabytes(received)} / ${megabytes(total)}` : megabytes(received);
          status.textContent = `正在下载：${progress}`;
          lastUpdate = Date.now();
        }
      }
    } finally {
      reader.releaseLock();
    }

    return new Blob(chunks, { type: "application/octet-stream" });
  }

  for (const link of links) {
    link.addEventListener("click", async (event) => {
      // A Download link always saves the file, including keyboard activation.
      event.preventDefault();
      if (active) return;

      const status = document.getElementById(link.getAttribute("aria-describedby"));
      const cancel = link.parentElement.querySelector(".btn-data-cancel");
      const controller = new AbortController();
      const originalLabel = link.textContent;
      const cancelDownload = () => controller.abort();

      active = true;
      for (const item of links) item.setAttribute("aria-disabled", "true");
      link.setAttribute("aria-busy", "true");
      link.textContent = "下载中…";
      status.textContent = "正在连接下载；大文件可能需要较长时间。";
      cancel.hidden = false;
      cancel.addEventListener("click", cancelDownload);

      try {
        const response = await fetch(link.href, { signal: controller.signal, credentials: "omit" });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        if ((response.headers.get("Content-Type") || "").includes("text/html")) {
          throw new Error("Received a web page instead of a data file");
        }

        const blob = await readFile(response, controller.signal, status);
        if (controller.signal.aborted) throw new DOMException("Cancelled", "AbortError");
        const objectUrl = URL.createObjectURL(blob);
        const saveLink = document.createElement("a");
        saveLink.href = objectUrl;
        saveLink.download = link.download || decodeURIComponent(new URL(link.href).pathname.split("/").pop());
        saveLink.hidden = true;
        document.body.appendChild(saveLink);
        try {
          saveLink.click();
        } finally {
          saveLink.remove();
          // Keep the Blob available while the browser starts saving the file.
          setTimeout(() => URL.revokeObjectURL(objectUrl), 60000);
        }
        status.textContent = "已发起文件保存，请查看浏览器的下载列表。";
      } catch (error) {
        status.textContent = controller.signal.aborted ? "已取消下载，可重新点击 Download。" : "下载失败，请检查网络后重新点击 Download。";
      } finally {
        active = false;
        for (const item of links) item.removeAttribute("aria-disabled");
        link.removeAttribute("aria-busy");
        link.textContent = originalLabel;
        if (document.activeElement === cancel) link.focus();
        cancel.hidden = true;
        cancel.removeEventListener("click", cancelDownload);
      }
    });
  }
})();
