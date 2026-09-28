(()=>{var sE=Object.create;var ov=Object.defineProperty;var rE=Object.getOwnPropertyDescriptor;var aE=Object.getOwnPropertyNames;var oE=Object.getPrototypeOf,lE=Object.prototype.hasOwnProperty;var Xi=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var cE=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of aE(t))!lE.call(e,s)&&s!==n&&ov(e,s,{get:()=>t[s],enumerable:!(i=rE(t,s))||i.enumerable});return e};var Qr=(e,t,n)=>(n=e!=null?sE(oE(e)):{},cE(t||!e||!e.__esModule?ov(n,"default",{value:e,enumerable:!0}):n,e));var vv=Xi(zt=>{"use strict";var up=Symbol.for("react.transitional.element"),uE=Symbol.for("react.portal"),hE=Symbol.for("react.fragment"),fE=Symbol.for("react.strict_mode"),dE=Symbol.for("react.profiler"),pE=Symbol.for("react.consumer"),mE=Symbol.for("react.context"),gE=Symbol.for("react.forward_ref"),_E=Symbol.for("react.suspense"),vE=Symbol.for("react.memo"),fv=Symbol.for("react.lazy"),yE=Symbol.for("react.activity"),lv=Symbol.iterator;function xE(e){return e===null||typeof e!="object"?null:(e=lv&&e[lv]||e["@@iterator"],typeof e=="function"?e:null)}var dv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pv=Object.assign,mv={};function Ja(e,t,n){this.props=e,this.context=t,this.refs=mv,this.updater=n||dv}Ja.prototype.isReactComponent={};Ja.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ja.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function gv(){}gv.prototype=Ja.prototype;function hp(e,t,n){this.props=e,this.context=t,this.refs=mv,this.updater=n||dv}var fp=hp.prototype=new gv;fp.constructor=hp;pv(fp,Ja.prototype);fp.isPureReactComponent=!0;var cv=Array.isArray;function cp(){}var Se={H:null,A:null,T:null,S:null},_v=Object.prototype.hasOwnProperty;function dp(e,t,n){var i=n.ref;return{$$typeof:up,type:e,key:t,ref:i!==void 0?i:null,props:n}}function SE(e,t){return dp(e.type,t,e.props)}function pp(e){return typeof e=="object"&&e!==null&&e.$$typeof===up}function ME(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var uv=/\/+/g;function lp(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ME(""+e.key):t.toString(36)}function bE(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(cp,cp):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Za(e,t,n,i,s){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(r){case"bigint":case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case up:case uE:a=!0;break;case fv:return a=e._init,Za(a(e._payload),t,n,i,s)}}if(a)return s=s(e),a=i===""?"."+lp(e,0):i,cv(s)?(n="",a!=null&&(n=a.replace(uv,"$&/")+"/"),Za(s,t,n,"",function(c){return c})):s!=null&&(pp(s)&&(s=SE(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(uv,"$&/")+"/")+a)),t.push(s)),1;a=0;var o=i===""?".":i+":";if(cv(e))for(var l=0;l<e.length;l++)i=e[l],r=o+lp(i,l),a+=Za(i,t,n,r,s);else if(l=xE(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,r=o+lp(i,l++),a+=Za(i,t,n,r,s);else if(r==="object"){if(typeof e.then=="function")return Za(bE(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return a}function bu(e,t,n){if(e==null)return e;var i=[],s=0;return Za(e,i,"","",function(r){return t.call(n,r,s++)}),i}function TE(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var hv=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},EE={map:bu,forEach:function(e,t,n){bu(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return bu(e,function(){t++}),t},toArray:function(e){return bu(e,function(t){return t})||[]},only:function(e){if(!pp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};zt.Activity=yE;zt.Children=EE;zt.Component=Ja;zt.Fragment=hE;zt.Profiler=dE;zt.PureComponent=hp;zt.StrictMode=fE;zt.Suspense=_E;zt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Se;zt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Se.H.useMemoCache(e)}};zt.cache=function(e){return function(){return e.apply(null,arguments)}};zt.cacheSignal=function(){return null};zt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=pv({},e.props),s=e.key;if(t!=null)for(r in t.key!==void 0&&(s=""+t.key),t)!_v.call(t,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&t.ref===void 0||(i[r]=t[r]);var r=arguments.length-2;if(r===1)i.children=n;else if(1<r){for(var a=Array(r),o=0;o<r;o++)a[o]=arguments[o+2];i.children=a}return dp(e.type,s,i)};zt.createContext=function(e){return e={$$typeof:mE,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:pE,_context:e},e};zt.createElement=function(e,t,n){var i,s={},r=null;if(t!=null)for(i in t.key!==void 0&&(r=""+t.key),t)_v.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var o=Array(a),l=0;l<a;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in a=e.defaultProps,a)s[i]===void 0&&(s[i]=a[i]);return dp(e,r,s)};zt.createRef=function(){return{current:null}};zt.forwardRef=function(e){return{$$typeof:gE,render:e}};zt.isValidElement=pp;zt.lazy=function(e){return{$$typeof:fv,_payload:{_status:-1,_result:e},_init:TE}};zt.memo=function(e,t){return{$$typeof:vE,type:e,compare:t===void 0?null:t}};zt.startTransition=function(e){var t=Se.T,n={};Se.T=n;try{var i=e(),s=Se.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(cp,hv)}catch(r){hv(r)}finally{t!==null&&n.types!==null&&(t.types=n.types),Se.T=t}};zt.unstable_useCacheRefresh=function(){return Se.H.useCacheRefresh()};zt.use=function(e){return Se.H.use(e)};zt.useActionState=function(e,t,n){return Se.H.useActionState(e,t,n)};zt.useCallback=function(e,t){return Se.H.useCallback(e,t)};zt.useContext=function(e){return Se.H.useContext(e)};zt.useDebugValue=function(){};zt.useDeferredValue=function(e,t){return Se.H.useDeferredValue(e,t)};zt.useEffect=function(e,t){return Se.H.useEffect(e,t)};zt.useEffectEvent=function(e){return Se.H.useEffectEvent(e)};zt.useId=function(){return Se.H.useId()};zt.useImperativeHandle=function(e,t,n){return Se.H.useImperativeHandle(e,t,n)};zt.useInsertionEffect=function(e,t){return Se.H.useInsertionEffect(e,t)};zt.useLayoutEffect=function(e,t){return Se.H.useLayoutEffect(e,t)};zt.useMemo=function(e,t){return Se.H.useMemo(e,t)};zt.useOptimistic=function(e,t){return Se.H.useOptimistic(e,t)};zt.useReducer=function(e,t,n){return Se.H.useReducer(e,t,n)};zt.useRef=function(e){return Se.H.useRef(e)};zt.useState=function(e){return Se.H.useState(e)};zt.useSyncExternalStore=function(e,t,n){return Se.H.useSyncExternalStore(e,t,n)};zt.useTransition=function(){return Se.H.useTransition()};zt.version="19.2.0"});var wl=Xi((gO,yv)=>{"use strict";yv.exports=vv()});var Rv=Xi(we=>{"use strict";function vp(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<Tu(s,t))e[i]=t,e[n]=s,n=i;else break t}}function Wi(e){return e.length===0?null:e[0]}function Au(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,r=s>>>1;i<r;){var a=2*(i+1)-1,o=e[a],l=a+1,c=e[l];if(0>Tu(o,n))l<s&&0>Tu(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[a]=n,i=a);else if(l<s&&0>Tu(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function Tu(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}we.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(xv=performance,we.unstable_now=function(){return xv.now()}):(mp=Date,Sv=mp.now(),we.unstable_now=function(){return mp.now()-Sv});var xv,mp,Sv,fs=[],Js=[],AE=1,gi=null,pn=3,yp=!1,Cl=!1,Rl=!1,xp=!1,Tv=typeof setTimeout=="function"?setTimeout:null,Ev=typeof clearTimeout=="function"?clearTimeout:null,Mv=typeof setImmediate<"u"?setImmediate:null;function Eu(e){for(var t=Wi(Js);t!==null;){if(t.callback===null)Au(Js);else if(t.startTime<=e)Au(Js),t.sortIndex=t.expirationTime,vp(fs,t);else break;t=Wi(Js)}}function Sp(e){if(Rl=!1,Eu(e),!Cl)if(Wi(fs)!==null)Cl=!0,Qa||(Qa=!0,Ka());else{var t=Wi(Js);t!==null&&Mp(Sp,t.startTime-e)}}var Qa=!1,Dl=-1,Av=5,wv=-1;function Cv(){return xp?!0:!(we.unstable_now()-wv<Av)}function gp(){if(xp=!1,Qa){var e=we.unstable_now();wv=e;var t=!0;try{t:{Cl=!1,Rl&&(Rl=!1,Ev(Dl),Dl=-1),yp=!0;var n=pn;try{e:{for(Eu(e),gi=Wi(fs);gi!==null&&!(gi.expirationTime>e&&Cv());){var i=gi.callback;if(typeof i=="function"){gi.callback=null,pn=gi.priorityLevel;var s=i(gi.expirationTime<=e);if(e=we.unstable_now(),typeof s=="function"){gi.callback=s,Eu(e),t=!0;break e}gi===Wi(fs)&&Au(fs),Eu(e)}else Au(fs);gi=Wi(fs)}if(gi!==null)t=!0;else{var r=Wi(Js);r!==null&&Mp(Sp,r.startTime-e),t=!1}}break t}finally{gi=null,pn=n,yp=!1}t=void 0}}finally{t?Ka():Qa=!1}}}var Ka;typeof Mv=="function"?Ka=function(){Mv(gp)}:typeof MessageChannel<"u"?(_p=new MessageChannel,bv=_p.port2,_p.port1.onmessage=gp,Ka=function(){bv.postMessage(null)}):Ka=function(){Tv(gp,0)};var _p,bv;function Mp(e,t){Dl=Tv(function(){e(we.unstable_now())},t)}we.unstable_IdlePriority=5;we.unstable_ImmediatePriority=1;we.unstable_LowPriority=4;we.unstable_NormalPriority=3;we.unstable_Profiling=null;we.unstable_UserBlockingPriority=2;we.unstable_cancelCallback=function(e){e.callback=null};we.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Av=0<e?Math.floor(1e3/e):5};we.unstable_getCurrentPriorityLevel=function(){return pn};we.unstable_next=function(e){switch(pn){case 1:case 2:case 3:var t=3;break;default:t=pn}var n=pn;pn=t;try{return e()}finally{pn=n}};we.unstable_requestPaint=function(){xp=!0};we.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=pn;pn=e;try{return t()}finally{pn=n}};we.unstable_scheduleCallback=function(e,t,n){var i=we.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:AE++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,vp(Js,e),Wi(fs)===null&&e===Wi(Js)&&(Rl?(Ev(Dl),Dl=-1):Rl=!0,Mp(Sp,n-i))):(e.sortIndex=s,vp(fs,e),Cl||yp||(Cl=!0,Qa||(Qa=!0,Ka()))),e};we.unstable_shouldYield=Cv;we.unstable_wrapCallback=function(e){var t=pn;return function(){var n=pn;pn=t;try{return e.apply(this,arguments)}finally{pn=n}}}});var Uv=Xi((vO,Dv)=>{"use strict";Dv.exports=Rv()});var Ov=Xi(bn=>{"use strict";var wE=wl();function Lv(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ks(){}var Mn={d:{f:Ks,r:function(){throw Error(Lv(522))},D:Ks,C:Ks,L:Ks,m:Ks,X:Ks,S:Ks,M:Ks},p:0,findDOMNode:null},CE=Symbol.for("react.portal");function RE(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:CE,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var Ul=wE.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function wu(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Mn;bn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Lv(299));return RE(e,t,null,n)};bn.flushSync=function(e){var t=Ul.T,n=Mn.p;try{if(Ul.T=null,Mn.p=2,e)return e()}finally{Ul.T=t,Mn.p=n,Mn.d.f()}};bn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Mn.d.C(e,t))};bn.prefetchDNS=function(e){typeof e=="string"&&Mn.d.D(e)};bn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=wu(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Mn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:r}):n==="script"&&Mn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};bn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=wu(t.as,t.crossOrigin);Mn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Mn.d.M(e)};bn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=wu(n,t.crossOrigin);Mn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};bn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=wu(t.as,t.crossOrigin);Mn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Mn.d.m(e)};bn.requestFormReset=function(e){Mn.d.r(e)};bn.unstable_batchedUpdates=function(e,t){return e(t)};bn.useFormState=function(e,t,n){return Ul.H.useFormState(e,t,n)};bn.useFormStatus=function(){return Ul.H.useHostTransitionStatus()};bn.version="19.2.0"});var Pv=Xi((xO,Iv)=>{"use strict";function Nv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nv)}catch(e){console.error(e)}}Nv(),Iv.exports=Ov()});var ZM=Xi(jh=>{"use strict";var Qe=Uv(),lx=wl(),DE=Pv();function Z(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function cx(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _c(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ux(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function hx(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Bv(e){if(_c(e)!==e)throw Error(Z(188))}function UE(e){var t=e.alternate;if(!t){if(t=_c(e),t===null)throw Error(Z(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var r=s.alternate;if(r===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===r.child){for(r=s.child;r;){if(r===n)return Bv(s),e;if(r===i)return Bv(s),t;r=r.sibling}throw Error(Z(188))}if(n.return!==i.return)n=s,i=r;else{for(var a=!1,o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a){for(o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a)throw Error(Z(189))}}if(n.alternate!==i)throw Error(Z(190))}if(n.tag!==3)throw Error(Z(188));return n.stateNode.current===n?e:t}function fx(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=fx(e),t!==null)return t;e=e.sibling}return null}var Te=Object.assign,LE=Symbol.for("react.element"),Cu=Symbol.for("react.transitional.element"),Fl=Symbol.for("react.portal"),io=Symbol.for("react.fragment"),dx=Symbol.for("react.strict_mode"),nm=Symbol.for("react.profiler"),px=Symbol.for("react.consumer"),xs=Symbol.for("react.context"),Qm=Symbol.for("react.forward_ref"),im=Symbol.for("react.suspense"),sm=Symbol.for("react.suspense_list"),jm=Symbol.for("react.memo"),Qs=Symbol.for("react.lazy"),rm=Symbol.for("react.activity"),OE=Symbol.for("react.memo_cache_sentinel"),zv=Symbol.iterator;function Ll(e){return e===null||typeof e!="object"?null:(e=zv&&e[zv]||e["@@iterator"],typeof e=="function"?e:null)}var NE=Symbol.for("react.client.reference");function am(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===NE?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case io:return"Fragment";case nm:return"Profiler";case dx:return"StrictMode";case im:return"Suspense";case sm:return"SuspenseList";case rm:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Fl:return"Portal";case xs:return e.displayName||"Context";case px:return(e._context.displayName||"Context")+".Consumer";case Qm:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case jm:return t=e.displayName||null,t!==null?t:am(e.type)||"Memo";case Qs:t=e._payload,e=e._init;try{return am(e(t))}catch{}}return null}var Vl=Array.isArray,Ut=lx.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie=DE.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ia={pending:!1,data:null,method:null,action:null},om=[],so=-1;function Ki(e){return{current:e}}function rn(e){0>so||(e.current=om[so],om[so]=null,so--)}function ye(e,t){so++,om[so]=e.current,e.current=t}var Ji=Ki(null),ic=Ki(null),lr=Ki(null),oh=Ki(null);function lh(e,t){switch(ye(lr,t),ye(ic,e),ye(Ji,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Wy(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Wy(t),e=NM(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}rn(Ji),ye(Ji,e)}function bo(){rn(Ji),rn(ic),rn(lr)}function lm(e){e.memoizedState!==null&&ye(oh,e);var t=Ji.current,n=NM(t,e.type);t!==n&&(ye(ic,e),ye(Ji,n))}function ch(e){ic.current===e&&(rn(Ji),rn(ic)),oh.current===e&&(rn(oh),pc._currentValue=ia)}var bp,Fv;function $r(e){if(bp===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);bp=t&&t[1]||"",Fv=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+bp+e+Fv}var Tp=!1;function Ep(e,t){if(!e||Tp)return"";Tp=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var f=function(){throw Error()};if(Object.defineProperty(f.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(f,[])}catch(p){var h=p}Reflect.construct(e,[],f)}else{try{f.call()}catch(p){h=p}e.call(f.prototype)}}else{try{throw Error()}catch(p){h=p}(f=e())&&typeof f.catch=="function"&&f.catch(function(){})}}catch(p){if(p&&h&&typeof p.stack=="string")return[p.stack,h.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),a=r[0],o=r[1];if(a&&o){var l=a.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var u=`
`+l[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=s);break}}}finally{Tp=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?$r(n):""}function IE(e,t){switch(e.tag){case 26:case 27:case 5:return $r(e.type);case 16:return $r("Lazy");case 13:return e.child!==t&&t!==null?$r("Suspense Fallback"):$r("Suspense");case 19:return $r("SuspenseList");case 0:case 15:return Ep(e.type,!1);case 11:return Ep(e.type.render,!1);case 1:return Ep(e.type,!0);case 31:return $r("Activity");default:return""}}function Vv(e){try{var t="",n=null;do t+=IE(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var cm=Object.prototype.hasOwnProperty,$m=Qe.unstable_scheduleCallback,Ap=Qe.unstable_cancelCallback,PE=Qe.unstable_shouldYield,BE=Qe.unstable_requestPaint,Qn=Qe.unstable_now,zE=Qe.unstable_getCurrentPriorityLevel,mx=Qe.unstable_ImmediatePriority,gx=Qe.unstable_UserBlockingPriority,uh=Qe.unstable_NormalPriority,FE=Qe.unstable_LowPriority,_x=Qe.unstable_IdlePriority,VE=Qe.log,HE=Qe.unstable_setDisableYieldValue,vc=null,jn=null;function ir(e){if(typeof VE=="function"&&HE(e),jn&&typeof jn.setStrictMode=="function")try{jn.setStrictMode(vc,e)}catch{}}var $n=Math.clz32?Math.clz32:XE,GE=Math.log,kE=Math.LN2;function XE(e){return e>>>=0,e===0?32:31-(GE(e)/kE|0)|0}var Ru=256,Du=262144,Uu=4194304;function ta(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ph(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,r=e.suspendedLanes,a=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~r,i!==0?s=ta(i):(a&=o,a!==0?s=ta(a):n||(n=o&~e,n!==0&&(s=ta(n))))):(o=i&~r,o!==0?s=ta(o):a!==0?s=ta(a):n||(n=i&~e,n!==0&&(s=ta(n)))),s===0?0:t!==0&&t!==s&&(t&r)===0&&(r=s&-s,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:s}function yc(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function WE(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vx(){var e=Uu;return Uu<<=1,(Uu&62914560)===0&&(Uu=4194304),e}function wp(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xc(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function qE(e,t,n,i,s,r){var a=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=a&~n;0<n;){var u=31-$n(n),f=1<<u;o[u]=0,l[u]=-1;var h=c[u];if(h!==null)for(c[u]=null,u=0;u<h.length;u++){var p=h[u];p!==null&&(p.lane&=-536870913)}n&=~f}i!==0&&yx(e,i,0),r!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=r&~(a&~t))}function yx(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-$n(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function xx(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-$n(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function Sx(e,t){var n=t&-t;return n=(n&42)!==0?1:tg(n),(n&(e.suspendedLanes|t))!==0?0:n}function tg(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function eg(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Mx(){var e=ie.p;return e!==0?e:(e=window.event,e===void 0?32:WM(e.type))}function Hv(e,t){var n=ie.p;try{return ie.p=e,t()}finally{ie.p=n}}var Sr=Math.random().toString(36).slice(2),ln="__reactFiber$"+Sr,In="__reactProps$"+Sr,No="__reactContainer$"+Sr,um="__reactEvents$"+Sr,YE="__reactListeners$"+Sr,ZE="__reactHandles$"+Sr,Gv="__reactResources$"+Sr,Sc="__reactMarker$"+Sr;function ng(e){delete e[ln],delete e[In],delete e[um],delete e[YE],delete e[ZE]}function ro(e){var t=e[ln];if(t)return t;for(var n=e.parentNode;n;){if(t=n[No]||n[ln]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ky(e);e!==null;){if(n=e[ln])return n;e=Ky(e)}return t}e=n,n=e.parentNode}return null}function Io(e){if(e=e[ln]||e[No]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Hl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(Z(33))}function go(e){var t=e[Gv];return t||(t=e[Gv]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function sn(e){e[Sc]=!0}var bx=new Set,Tx={};function da(e,t){To(e,t),To(e+"Capture",t)}function To(e,t){for(Tx[e]=t,e=0;e<t.length;e++)bx.add(t[e])}var JE=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),kv={},Xv={};function KE(e){return cm.call(Xv,e)?!0:cm.call(kv,e)?!1:JE.test(e)?Xv[e]=!0:(kv[e]=!0,!1)}function qu(e,t,n){if(KE(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Lu(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function ds(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function vi(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ex(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function QE(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,r=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(a){n=""+a,r.call(this,a)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function hm(e){if(!e._valueTracker){var t=Ex(e)?"checked":"value";e._valueTracker=QE(e,t,""+e[t])}}function Ax(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Ex(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function hh(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var jE=/[\n"\\]/g;function Si(e){return e.replace(jE,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function fm(e,t,n,i,s,r,a,o){e.name="",a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"?e.type=a:e.removeAttribute("type"),t!=null?a==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+vi(t)):e.value!==""+vi(t)&&(e.value=""+vi(t)):a!=="submit"&&a!=="reset"||e.removeAttribute("value"),t!=null?dm(e,a,vi(t)):n!=null?dm(e,a,vi(n)):i!=null&&e.removeAttribute("value"),s==null&&r!=null&&(e.defaultChecked=!!r),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+vi(o):e.removeAttribute("name")}function wx(e,t,n,i,s,r,a,o){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){hm(e);return}n=n!=null?""+vi(n):"",t=t!=null?""+vi(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.name=a),hm(e)}function dm(e,t,n){t==="number"&&hh(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function _o(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+vi(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Cx(e,t,n){if(t!=null&&(t=""+vi(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+vi(n):""}function Rx(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(Z(92));if(Vl(i)){if(1<i.length)throw Error(Z(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=vi(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),hm(e)}function Eo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $E=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Wv(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||$E.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Dx(e,t,n){if(t!=null&&typeof t!="object")throw Error(Z(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&Wv(e,s,i)}else for(var r in t)t.hasOwnProperty(r)&&Wv(e,r,t[r])}function ig(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tA=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),eA=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yu(e){return eA.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ss(){}var pm=null;function sg(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ao=null,vo=null;function qv(e){var t=Io(e);if(t&&(e=t.stateNode)){var n=e[In]||null;t:switch(e=t.stateNode,t.type){case"input":if(fm(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Si(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[In]||null;if(!s)throw Error(Z(90));fm(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Ax(i)}break t;case"textarea":Cx(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&_o(e,!!n.multiple,t,!1)}}}var Cp=!1;function Ux(e,t,n){if(Cp)return e(t,n);Cp=!0;try{var i=e(t);return i}finally{if(Cp=!1,(ao!==null||vo!==null)&&(Zh(),ao&&(t=ao,e=vo,vo=ao=null,qv(t),e)))for(t=0;t<e.length;t++)qv(e[t])}}function sc(e,t){var n=e.stateNode;if(n===null)return null;var i=n[In]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Z(231,t,typeof n));return n}var As=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mm=!1;if(As)try{ja={},Object.defineProperty(ja,"passive",{get:function(){mm=!0}}),window.addEventListener("test",ja,ja),window.removeEventListener("test",ja,ja)}catch{mm=!1}var ja,sr=null,rg=null,Zu=null;function Lx(){if(Zu)return Zu;var e,t=rg,n=t.length,i,s="value"in sr?sr.value:sr.textContent,r=s.length;for(e=0;e<n&&t[e]===s[e];e++);var a=n-e;for(i=1;i<=a&&t[n-i]===s[r-i];i++);return Zu=s.slice(e,1<i?1-i:void 0)}function Ju(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ou(){return!0}function Yv(){return!1}function Pn(e){function t(n,i,s,r,a){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=r,this.target=a,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Ou:Yv,this.isPropagationStopped=Yv,this}return Te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ou)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ou)},persist:function(){},isPersistent:Ou}),t}var pa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bh=Pn(pa),Mc=Te({},pa,{view:0,detail:0}),nA=Pn(Mc),Rp,Dp,Ol,zh=Te({},Mc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ag,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ol&&(Ol&&e.type==="mousemove"?(Rp=e.screenX-Ol.screenX,Dp=e.screenY-Ol.screenY):Dp=Rp=0,Ol=e),Rp)},movementY:function(e){return"movementY"in e?e.movementY:Dp}}),Zv=Pn(zh),iA=Te({},zh,{dataTransfer:0}),sA=Pn(iA),rA=Te({},Mc,{relatedTarget:0}),Up=Pn(rA),aA=Te({},pa,{animationName:0,elapsedTime:0,pseudoElement:0}),oA=Pn(aA),lA=Te({},pa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cA=Pn(lA),uA=Te({},pa,{data:0}),Jv=Pn(uA),hA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pA(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=dA[e])?!!t[e]:!1}function ag(){return pA}var mA=Te({},Mc,{key:function(e){if(e.key){var t=hA[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ju(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fA[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ag,charCode:function(e){return e.type==="keypress"?Ju(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ju(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gA=Pn(mA),_A=Te({},zh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kv=Pn(_A),vA=Te({},Mc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ag}),yA=Pn(vA),xA=Te({},pa,{propertyName:0,elapsedTime:0,pseudoElement:0}),SA=Pn(xA),MA=Te({},zh,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bA=Pn(MA),TA=Te({},pa,{newState:0,oldState:0}),EA=Pn(TA),AA=[9,13,27,32],og=As&&"CompositionEvent"in window,Xl=null;As&&"documentMode"in document&&(Xl=document.documentMode);var wA=As&&"TextEvent"in window&&!Xl,Ox=As&&(!og||Xl&&8<Xl&&11>=Xl),Qv=" ",jv=!1;function Nx(e,t){switch(e){case"keyup":return AA.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ix(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var oo=!1;function CA(e,t){switch(e){case"compositionend":return Ix(t);case"keypress":return t.which!==32?null:(jv=!0,Qv);case"textInput":return e=t.data,e===Qv&&jv?null:e;default:return null}}function RA(e,t){if(oo)return e==="compositionend"||!og&&Nx(e,t)?(e=Lx(),Zu=rg=sr=null,oo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ox&&t.locale!=="ko"?null:t.data;default:return null}}var DA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $v(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!DA[e.type]:t==="textarea"}function Px(e,t,n,i){ao?vo?vo.push(i):vo=[i]:ao=i,t=Rh(t,"onChange"),0<t.length&&(n=new Bh("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Wl=null,rc=null;function UA(e){UM(e,0)}function Fh(e){var t=Hl(e);if(Ax(t))return e}function ty(e,t){if(e==="change")return t}var Bx=!1;As&&(As?(Iu="oninput"in document,Iu||(Lp=document.createElement("div"),Lp.setAttribute("oninput","return;"),Iu=typeof Lp.oninput=="function"),Nu=Iu):Nu=!1,Bx=Nu&&(!document.documentMode||9<document.documentMode));var Nu,Iu,Lp;function ey(){Wl&&(Wl.detachEvent("onpropertychange",zx),rc=Wl=null)}function zx(e){if(e.propertyName==="value"&&Fh(rc)){var t=[];Px(t,rc,e,sg(e)),Ux(UA,t)}}function LA(e,t,n){e==="focusin"?(ey(),Wl=t,rc=n,Wl.attachEvent("onpropertychange",zx)):e==="focusout"&&ey()}function OA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fh(rc)}function NA(e,t){if(e==="click")return Fh(t)}function IA(e,t){if(e==="input"||e==="change")return Fh(t)}function PA(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ei=typeof Object.is=="function"?Object.is:PA;function ac(e,t){if(ei(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!cm.call(t,s)||!ei(e[s],t[s]))return!1}return!0}function ny(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function iy(e,t){var n=ny(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=ny(n)}}function Fx(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fx(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vx(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=hh(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=hh(e.document)}return t}function lg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var BA=As&&"documentMode"in document&&11>=document.documentMode,lo=null,gm=null,ql=null,_m=!1;function sy(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_m||lo==null||lo!==hh(i)||(i=lo,"selectionStart"in i&&lg(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ql&&ac(ql,i)||(ql=i,i=Rh(gm,"onSelect"),0<i.length&&(t=new Bh("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=lo)))}function jr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var co={animationend:jr("Animation","AnimationEnd"),animationiteration:jr("Animation","AnimationIteration"),animationstart:jr("Animation","AnimationStart"),transitionrun:jr("Transition","TransitionRun"),transitionstart:jr("Transition","TransitionStart"),transitioncancel:jr("Transition","TransitionCancel"),transitionend:jr("Transition","TransitionEnd")},Op={},Hx={};As&&(Hx=document.createElement("div").style,"AnimationEvent"in window||(delete co.animationend.animation,delete co.animationiteration.animation,delete co.animationstart.animation),"TransitionEvent"in window||delete co.transitionend.transition);function ma(e){if(Op[e])return Op[e];if(!co[e])return e;var t=co[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Hx)return Op[e]=t[n];return e}var Gx=ma("animationend"),kx=ma("animationiteration"),Xx=ma("animationstart"),zA=ma("transitionrun"),FA=ma("transitionstart"),VA=ma("transitioncancel"),Wx=ma("transitionend"),qx=new Map,vm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vm.push("scrollEnd");function Bi(e,t){qx.set(e,t),da(t,[e])}var fh=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},_i=[],uo=0,cg=0;function Vh(){for(var e=uo,t=cg=uo=0;t<e;){var n=_i[t];_i[t++]=null;var i=_i[t];_i[t++]=null;var s=_i[t];_i[t++]=null;var r=_i[t];if(_i[t++]=null,i!==null&&s!==null){var a=i.pending;a===null?s.next=s:(s.next=a.next,a.next=s),i.pending=s}r!==0&&Yx(n,s,r)}}function Hh(e,t,n,i){_i[uo++]=e,_i[uo++]=t,_i[uo++]=n,_i[uo++]=i,cg|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function ug(e,t,n,i){return Hh(e,t,n,i),dh(e)}function ga(e,t){return Hh(e,null,null,t),dh(e)}function Yx(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,r=e.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(s=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,s&&t!==null&&(s=31-$n(n),e=r.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),r):null}function dh(e){if(50<ec)throw ec=0,Fm=null,Error(Z(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ho={};function HA(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(e,t,n,i){return new HA(e,t,n,i)}function hg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bs(e,t){var n=e.alternate;return n===null?(n=Jn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Zx(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ku(e,t,n,i,s,r){var a=0;if(i=e,typeof e=="function")hg(e)&&(a=1);else if(typeof e=="string")a=Xw(e,n,Ji.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case rm:return e=Jn(31,n,t,s),e.elementType=rm,e.lanes=r,e;case io:return sa(n.children,s,r,t);case dx:a=8,s|=24;break;case nm:return e=Jn(12,n,t,s|2),e.elementType=nm,e.lanes=r,e;case im:return e=Jn(13,n,t,s),e.elementType=im,e.lanes=r,e;case sm:return e=Jn(19,n,t,s),e.elementType=sm,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xs:a=10;break t;case px:a=9;break t;case Qm:a=11;break t;case jm:a=14;break t;case Qs:a=16,i=null;break t}a=29,n=Error(Z(130,e===null?"null":typeof e,"")),i=null}return t=Jn(a,n,t,s),t.elementType=e,t.type=i,t.lanes=r,t}function sa(e,t,n,i){return e=Jn(7,e,i,t),e.lanes=n,e}function Np(e,t,n){return e=Jn(6,e,null,t),e.lanes=n,e}function Jx(e){var t=Jn(18,null,null,0);return t.stateNode=e,t}function Ip(e,t,n){return t=Jn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ry=new WeakMap;function Mi(e,t){if(typeof e=="object"&&e!==null){var n=ry.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Vv(t)},ry.set(e,t),t)}return{value:e,source:t,stack:Vv(t)}}var fo=[],po=0,ph=null,oc=0,yi=[],xi=0,_r=null,qi=1,Yi="";function vs(e,t){fo[po++]=oc,fo[po++]=ph,ph=e,oc=t}function Kx(e,t,n){yi[xi++]=qi,yi[xi++]=Yi,yi[xi++]=_r,_r=e;var i=qi;e=Yi;var s=32-$n(i)-1;i&=~(1<<s),n+=1;var r=32-$n(t)+s;if(30<r){var a=s-s%5;r=(i&(1<<a)-1).toString(32),i>>=a,s-=a,qi=1<<32-$n(t)+s|n<<s|i,Yi=r+e}else qi=1<<r|n<<s|i,Yi=e}function fg(e){e.return!==null&&(vs(e,1),Kx(e,1,0))}function dg(e){for(;e===ph;)ph=fo[--po],fo[po]=null,oc=fo[--po],fo[po]=null;for(;e===_r;)_r=yi[--xi],yi[xi]=null,Yi=yi[--xi],yi[xi]=null,qi=yi[--xi],yi[xi]=null}function Qx(e,t){yi[xi++]=qi,yi[xi++]=Yi,yi[xi++]=_r,qi=t.id,Yi=t.overflow,_r=e}var cn=null,be=null,Kt=!1,cr=null,bi=!1,ym=Error(Z(519));function vr(e){var t=Error(Z(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw lc(Mi(t,e)),ym}function ay(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[ln]=e,t[In]=i,n){case"dialog":Xt("cancel",t),Xt("close",t);break;case"iframe":case"object":case"embed":Xt("load",t);break;case"video":case"audio":for(n=0;n<fc.length;n++)Xt(fc[n],t);break;case"source":Xt("error",t);break;case"img":case"image":case"link":Xt("error",t),Xt("load",t);break;case"details":Xt("toggle",t);break;case"input":Xt("invalid",t),wx(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Xt("invalid",t);break;case"textarea":Xt("invalid",t),Rx(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||OM(t.textContent,n)?(i.popover!=null&&(Xt("beforetoggle",t),Xt("toggle",t)),i.onScroll!=null&&Xt("scroll",t),i.onScrollEnd!=null&&Xt("scrollend",t),i.onClick!=null&&(t.onclick=Ss),t=!0):t=!1,t||vr(e,!0)}function oy(e){for(cn=e.return;cn;)switch(cn.tag){case 5:case 31:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:cn=cn.return}}function $a(e){if(e!==cn)return!1;if(!Kt)return oy(e),Kt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Xm(e.type,e.memoizedProps)),n=!n),n&&be&&vr(e),oy(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Z(317));be=Jy(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Z(317));be=Jy(e)}else t===27?(t=be,Mr(e.type)?(e=Zm,Zm=null,be=e):be=t):be=cn?Ei(e.stateNode.nextSibling):null;return!0}function la(){be=cn=null,Kt=!1}function Pp(){var e=cr;return e!==null&&(On===null?On=e:On.push.apply(On,e),cr=null),e}function lc(e){cr===null?cr=[e]:cr.push(e)}var xm=Ki(null),_a=null,Ms=null;function $s(e,t,n){ye(xm,t._currentValue),t._currentValue=n}function Ts(e){e._currentValue=xm.current,rn(xm)}function Sm(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Mm(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var r=s.dependencies;if(r!==null){var a=s.child;r=r.firstContext;t:for(;r!==null;){var o=r;r=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){r.lanes|=n,o=r.alternate,o!==null&&(o.lanes|=n),Sm(r.return,n,e),i||(a=null);break t}r=o.next}}else if(s.tag===18){if(a=s.return,a===null)throw Error(Z(341));a.lanes|=n,r=a.alternate,r!==null&&(r.lanes|=n),Sm(a,n,e),a=null}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}}function Po(e,t,n,i){e=null;for(var s=t,r=!1;s!==null;){if(!r){if((s.flags&524288)!==0)r=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var a=s.alternate;if(a===null)throw Error(Z(387));if(a=a.memoizedProps,a!==null){var o=s.type;ei(s.pendingProps.value,a.value)||(e!==null?e.push(o):e=[o])}}else if(s===oh.current){if(a=s.alternate,a===null)throw Error(Z(387));a.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(pc):e=[pc])}s=s.return}e!==null&&Mm(t,e,n,i),t.flags|=262144}function mh(e){for(e=e.firstContext;e!==null;){if(!ei(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ca(e){_a=e,Ms=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function un(e){return jx(_a,e)}function Pu(e,t){return _a===null&&ca(e),jx(e,t)}function jx(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ms===null){if(e===null)throw Error(Z(308));Ms=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ms=Ms.next=t;return n}var GA=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},kA=Qe.unstable_scheduleCallback,XA=Qe.unstable_NormalPriority,qe={$$typeof:xs,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pg(){return{controller:new GA,data:new Map,refCount:0}}function bc(e){e.refCount--,e.refCount===0&&kA(XA,function(){e.controller.abort()})}var Yl=null,bm=0,Ao=0,yo=null;function WA(e,t){if(Yl===null){var n=Yl=[];bm=0,Ao=Fg(),yo={status:"pending",value:void 0,then:function(i){n.push(i)}}}return bm++,t.then(ly,ly),t}function ly(){if(--bm===0&&Yl!==null){yo!==null&&(yo.status="fulfilled");var e=Yl;Yl=null,Ao=0,yo=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function qA(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var cy=Ut.S;Ut.S=function(e,t){fM=Qn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&WA(e,t),cy!==null&&cy(e,t)};var ra=Ki(null);function mg(){var e=ra.current;return e!==null?e:me.pooledCache}function Qu(e,t){t===null?ye(ra,ra.current):ye(ra,t.pool)}function $x(){var e=mg();return e===null?null:{parent:qe._currentValue,pool:e}}var Bo=Error(Z(460)),gg=Error(Z(474)),Gh=Error(Z(542)),gh={then:function(){}};function uy(e){return e=e.status,e==="fulfilled"||e==="rejected"}function tS(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ss,Ss),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,fy(e),e;default:if(typeof t.status=="string")t.then(Ss,Ss);else{if(e=me,e!==null&&100<e.shellSuspendCounter)throw Error(Z(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,fy(e),e}throw aa=t,Bo}}function ea(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(aa=n,Bo):n}}var aa=null;function hy(){if(aa===null)throw Error(Z(459));var e=aa;return aa=null,e}function fy(e){if(e===Bo||e===Gh)throw Error(Z(483))}var xo=null,cc=0;function Bu(e){var t=cc;return cc+=1,xo===null&&(xo=[]),tS(xo,e,t)}function Nl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function zu(e,t){throw t.$$typeof===LE?Error(Z(525)):(e=Object.prototype.toString.call(t),Error(Z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function eS(e){function t(d,v){if(e){var y=d.deletions;y===null?(d.deletions=[v],d.flags|=16):y.push(v)}}function n(d,v){if(!e)return null;for(;v!==null;)t(d,v),v=v.sibling;return null}function i(d){for(var v=new Map;d!==null;)d.key!==null?v.set(d.key,d):v.set(d.index,d),d=d.sibling;return v}function s(d,v){return d=bs(d,v),d.index=0,d.sibling=null,d}function r(d,v,y){return d.index=y,e?(y=d.alternate,y!==null?(y=y.index,y<v?(d.flags|=67108866,v):y):(d.flags|=67108866,v)):(d.flags|=1048576,v)}function a(d){return e&&d.alternate===null&&(d.flags|=67108866),d}function o(d,v,y,x){return v===null||v.tag!==6?(v=Np(y,d.mode,x),v.return=d,v):(v=s(v,y),v.return=d,v)}function l(d,v,y,x){var T=y.type;return T===io?u(d,v,y.props.children,x,y.key):v!==null&&(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Qs&&ea(T)===v.type)?(v=s(v,y.props),Nl(v,y),v.return=d,v):(v=Ku(y.type,y.key,y.props,null,d.mode,x),Nl(v,y),v.return=d,v)}function c(d,v,y,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=Ip(y,d.mode,x),v.return=d,v):(v=s(v,y.children||[]),v.return=d,v)}function u(d,v,y,x,T){return v===null||v.tag!==7?(v=sa(y,d.mode,x,T),v.return=d,v):(v=s(v,y),v.return=d,v)}function f(d,v,y){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Np(""+v,d.mode,y),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Cu:return y=Ku(v.type,v.key,v.props,null,d.mode,y),Nl(y,v),y.return=d,y;case Fl:return v=Ip(v,d.mode,y),v.return=d,v;case Qs:return v=ea(v),f(d,v,y)}if(Vl(v)||Ll(v))return v=sa(v,d.mode,y,null),v.return=d,v;if(typeof v.then=="function")return f(d,Bu(v),y);if(v.$$typeof===xs)return f(d,Pu(d,v),y);zu(d,v)}return null}function h(d,v,y,x){var T=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return T!==null?null:o(d,v,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Cu:return y.key===T?l(d,v,y,x):null;case Fl:return y.key===T?c(d,v,y,x):null;case Qs:return y=ea(y),h(d,v,y,x)}if(Vl(y)||Ll(y))return T!==null?null:u(d,v,y,x,null);if(typeof y.then=="function")return h(d,v,Bu(y),x);if(y.$$typeof===xs)return h(d,v,Pu(d,y),x);zu(d,y)}return null}function p(d,v,y,x,T){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return d=d.get(y)||null,o(v,d,""+x,T);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Cu:return d=d.get(x.key===null?y:x.key)||null,l(v,d,x,T);case Fl:return d=d.get(x.key===null?y:x.key)||null,c(v,d,x,T);case Qs:return x=ea(x),p(d,v,y,x,T)}if(Vl(x)||Ll(x))return d=d.get(y)||null,u(v,d,x,T,null);if(typeof x.then=="function")return p(d,v,y,Bu(x),T);if(x.$$typeof===xs)return p(d,v,y,Pu(v,x),T);zu(v,x)}return null}function _(d,v,y,x){for(var T=null,w=null,E=v,C=v=0,S=null;E!==null&&C<y.length;C++){E.index>C?(S=E,E=null):S=E.sibling;var M=h(d,E,y[C],x);if(M===null){E===null&&(E=S);break}e&&E&&M.alternate===null&&t(d,E),v=r(M,v,C),w===null?T=M:w.sibling=M,w=M,E=S}if(C===y.length)return n(d,E),Kt&&vs(d,C),T;if(E===null){for(;C<y.length;C++)E=f(d,y[C],x),E!==null&&(v=r(E,v,C),w===null?T=E:w.sibling=E,w=E);return Kt&&vs(d,C),T}for(E=i(E);C<y.length;C++)S=p(E,d,C,y[C],x),S!==null&&(e&&S.alternate!==null&&E.delete(S.key===null?C:S.key),v=r(S,v,C),w===null?T=S:w.sibling=S,w=S);return e&&E.forEach(function(U){return t(d,U)}),Kt&&vs(d,C),T}function g(d,v,y,x){if(y==null)throw Error(Z(151));for(var T=null,w=null,E=v,C=v=0,S=null,M=y.next();E!==null&&!M.done;C++,M=y.next()){E.index>C?(S=E,E=null):S=E.sibling;var U=h(d,E,M.value,x);if(U===null){E===null&&(E=S);break}e&&E&&U.alternate===null&&t(d,E),v=r(U,v,C),w===null?T=U:w.sibling=U,w=U,E=S}if(M.done)return n(d,E),Kt&&vs(d,C),T;if(E===null){for(;!M.done;C++,M=y.next())M=f(d,M.value,x),M!==null&&(v=r(M,v,C),w===null?T=M:w.sibling=M,w=M);return Kt&&vs(d,C),T}for(E=i(E);!M.done;C++,M=y.next())M=p(E,d,C,M.value,x),M!==null&&(e&&M.alternate!==null&&E.delete(M.key===null?C:M.key),v=r(M,v,C),w===null?T=M:w.sibling=M,w=M);return e&&E.forEach(function(I){return t(d,I)}),Kt&&vs(d,C),T}function m(d,v,y,x){if(typeof y=="object"&&y!==null&&y.type===io&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Cu:t:{for(var T=y.key;v!==null;){if(v.key===T){if(T=y.type,T===io){if(v.tag===7){n(d,v.sibling),x=s(v,y.props.children),x.return=d,d=x;break t}}else if(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Qs&&ea(T)===v.type){n(d,v.sibling),x=s(v,y.props),Nl(x,y),x.return=d,d=x;break t}n(d,v);break}else t(d,v);v=v.sibling}y.type===io?(x=sa(y.props.children,d.mode,x,y.key),x.return=d,d=x):(x=Ku(y.type,y.key,y.props,null,d.mode,x),Nl(x,y),x.return=d,d=x)}return a(d);case Fl:t:{for(T=y.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){n(d,v.sibling),x=s(v,y.children||[]),x.return=d,d=x;break t}else{n(d,v);break}else t(d,v);v=v.sibling}x=Ip(y,d.mode,x),x.return=d,d=x}return a(d);case Qs:return y=ea(y),m(d,v,y,x)}if(Vl(y))return _(d,v,y,x);if(Ll(y)){if(T=Ll(y),typeof T!="function")throw Error(Z(150));return y=T.call(y),g(d,v,y,x)}if(typeof y.then=="function")return m(d,v,Bu(y),x);if(y.$$typeof===xs)return m(d,v,Pu(d,y),x);zu(d,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,v!==null&&v.tag===6?(n(d,v.sibling),x=s(v,y),x.return=d,d=x):(n(d,v),x=Np(y,d.mode,x),x.return=d,d=x),a(d)):n(d,v)}return function(d,v,y,x){try{cc=0;var T=m(d,v,y,x);return xo=null,T}catch(E){if(E===Bo||E===Gh)throw E;var w=Jn(29,E,null,d.mode);return w.lanes=x,w.return=d,w}}}var ua=eS(!0),nS=eS(!1),js=!1;function _g(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Tm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ur(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function hr(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ne&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=dh(e),Yx(e,null,n),t}return Hh(e,i,t,n),dh(e)}function Zl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,xx(e,n)}}function Bp(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var a={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?s=r=a:r=r.next=a,n=n.next}while(n!==null);r===null?s=r=t:r=r.next=t}else s=r=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Em=!1;function Jl(){if(Em){var e=yo;if(e!==null)throw e}}function Kl(e,t,n,i){Em=!1;var s=e.updateQueue;js=!1;var r=s.firstBaseUpdate,a=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?r=c:a.next=c,a=l;var u=e.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==a&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(r!==null){var f=s.baseState;a=0,u=c=l=null,o=r;do{var h=o.lane&-536870913,p=h!==o.lane;if(p?(Zt&h)===h:(i&h)===h){h!==0&&h===Ao&&(Em=!0),u!==null&&(u=u.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var _=e,g=o;h=t;var m=n;switch(g.tag){case 1:if(_=g.payload,typeof _=="function"){f=_.call(m,f,h);break t}f=_;break t;case 3:_.flags=_.flags&-65537|128;case 0:if(_=g.payload,h=typeof _=="function"?_.call(m,f,h):_,h==null)break t;f=Te({},f,h);break t;case 2:js=!0}}h=o.callback,h!==null&&(e.flags|=64,p&&(e.flags|=8192),p=s.callbacks,p===null?s.callbacks=[h]:p.push(h))}else p={lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,a|=h;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;p=o,o=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);u===null&&(l=f),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=u,r===null&&(s.shared.lanes=0),xr|=a,e.lanes=a,e.memoizedState=f}}function iS(e,t){if(typeof e!="function")throw Error(Z(191,e));e.call(t)}function sS(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)iS(n[e],t)}var wo=Ki(null),_h=Ki(0);function dy(e,t){e=Ds,ye(_h,e),ye(wo,t),Ds=e|t.baseLanes}function Am(){ye(_h,Ds),ye(wo,wo.current)}function vg(){Ds=_h.current,rn(wo),rn(_h)}var ni=Ki(null),Ti=null;function tr(e){var t=e.alternate;ye(He,He.current&1),ye(ni,e),Ti===null&&(t===null||wo.current!==null||t.memoizedState!==null)&&(Ti=e)}function wm(e){ye(He,He.current),ye(ni,e),Ti===null&&(Ti=e)}function rS(e){e.tag===22?(ye(He,He.current),ye(ni,e),Ti===null&&(Ti=e)):er(e)}function er(){ye(He,He.current),ye(ni,ni.current)}function Zn(e){rn(ni),Ti===e&&(Ti=null),rn(He)}var He=Ki(0);function vh(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||qm(n)||Ym(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ws=0,Ft=null,he=null,Xe=null,yh=!1,So=!1,ha=!1,xh=0,uc=0,Mo=null,YA=0;function Pe(){throw Error(Z(321))}function yg(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ei(e[n],t[n]))return!1;return!0}function xg(e,t,n,i,s,r){return ws=r,Ft=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ut.H=e===null||e.memoizedState===null?PS:Ug,ha=!1,r=n(i,s),ha=!1,So&&(r=oS(t,n,i,s)),aS(e),r}function aS(e){Ut.H=hc;var t=he!==null&&he.next!==null;if(ws=0,Xe=he=Ft=null,yh=!1,uc=0,Mo=null,t)throw Error(Z(300));e===null||Ye||(e=e.dependencies,e!==null&&mh(e)&&(Ye=!0))}function oS(e,t,n,i){Ft=e;var s=0;do{if(So&&(Mo=null),uc=0,So=!1,25<=s)throw Error(Z(301));if(s+=1,Xe=he=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}Ut.H=BS,r=t(n,i)}while(So);return r}function ZA(){var e=Ut.H,t=e.useState()[0];return t=typeof t.then=="function"?Tc(t):t,e=e.useState()[0],(he!==null?he.memoizedState:null)!==e&&(Ft.flags|=1024),t}function Sg(){var e=xh!==0;return xh=0,e}function Mg(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function bg(e){if(yh){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}yh=!1}ws=0,Xe=he=Ft=null,So=!1,uc=xh=0,Mo=null}function Tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?Ft.memoizedState=Xe=e:Xe=Xe.next=e,Xe}function Ge(){if(he===null){var e=Ft.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=Xe===null?Ft.memoizedState:Xe.next;if(t!==null)Xe=t,he=e;else{if(e===null)throw Ft.alternate===null?Error(Z(467)):Error(Z(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},Xe===null?Ft.memoizedState=Xe=e:Xe=Xe.next=e}return Xe}function kh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Tc(e){var t=uc;return uc+=1,Mo===null&&(Mo=[]),e=tS(Mo,e,t),t=Ft,(Xe===null?t.memoizedState:Xe.next)===null&&(t=t.alternate,Ut.H=t===null||t.memoizedState===null?PS:Ug),e}function Xh(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Tc(e);if(e.$$typeof===xs)return un(e)}throw Error(Z(438,String(e)))}function Tg(e){var t=null,n=Ft.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Ft.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=kh(),Ft.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=OE;return t.index++,n}function Cs(e,t){return typeof t=="function"?t(e):t}function ju(e){var t=Ge();return Eg(t,he,e)}function Eg(e,t,n){var i=e.queue;if(i===null)throw Error(Z(311));i.lastRenderedReducer=n;var s=e.baseQueue,r=i.pending;if(r!==null){if(s!==null){var a=s.next;s.next=r.next,r.next=a}t.baseQueue=s=r,i.pending=null}if(r=e.baseState,s===null)e.memoizedState=r;else{t=s.next;var o=a=null,l=null,c=t,u=!1;do{var f=c.lane&-536870913;if(f!==c.lane?(Zt&f)===f:(ws&f)===f){var h=c.revertLane;if(h===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),f===Ao&&(u=!0);else if((ws&h)===h){c=c.next,h===Ao&&(u=!0);continue}else f={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,a=r):l=l.next=f,Ft.lanes|=h,xr|=h;f=c.action,ha&&n(r,f),r=c.hasEagerState?c.eagerState:n(r,f)}else h={lane:f,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=h,a=r):l=l.next=h,Ft.lanes|=f,xr|=f;c=c.next}while(c!==null&&c!==t);if(l===null?a=r:l.next=o,!ei(r,e.memoizedState)&&(Ye=!0,u&&(n=yo,n!==null)))throw n;e.memoizedState=r,e.baseState=a,e.baseQueue=l,i.lastRenderedState=r}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function zp(e){var t=Ge(),n=t.queue;if(n===null)throw Error(Z(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,r=t.memoizedState;if(s!==null){n.pending=null;var a=s=s.next;do r=e(r,a.action),a=a.next;while(a!==s);ei(r,t.memoizedState)||(Ye=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,i]}function lS(e,t,n){var i=Ft,s=Ge(),r=Kt;if(r){if(n===void 0)throw Error(Z(407));n=n()}else n=t();var a=!ei((he||s).memoizedState,n);if(a&&(s.memoizedState=n,Ye=!0),s=s.queue,Ag(hS.bind(null,i,s,e),[e]),s.getSnapshot!==t||a||Xe!==null&&Xe.memoizedState.tag&1){if(i.flags|=2048,Co(9,{destroy:void 0},uS.bind(null,i,s,n,t),null),me===null)throw Error(Z(349));r||(ws&127)!==0||cS(i,t,n)}return n}function cS(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ft.updateQueue,t===null?(t=kh(),Ft.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function uS(e,t,n,i){t.value=n,t.getSnapshot=i,fS(t)&&dS(e)}function hS(e,t,n){return n(function(){fS(t)&&dS(e)})}function fS(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ei(e,n)}catch{return!0}}function dS(e){var t=ga(e,2);t!==null&&Nn(t,e,2)}function Cm(e){var t=Tn();if(typeof e=="function"){var n=e;if(e=n(),ha){ir(!0);try{n()}finally{ir(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cs,lastRenderedState:e},t}function pS(e,t,n,i){return e.baseState=n,Eg(e,he,typeof i=="function"?i:Cs)}function JA(e,t,n,i,s){if(qh(e))throw Error(Z(485));if(e=t.action,e!==null){var r={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(a){r.listeners.push(a)}};Ut.T!==null?n(!0):r.isTransition=!1,i(r),n=t.pending,n===null?(r.next=t.pending=r,mS(t,r)):(r.next=n.next,t.pending=n.next=r)}}function mS(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var r=Ut.T,a={};Ut.T=a;try{var o=n(s,i),l=Ut.S;l!==null&&l(a,o),py(e,t,o)}catch(c){Rm(e,t,c)}finally{r!==null&&a.types!==null&&(r.types=a.types),Ut.T=r}}else try{r=n(s,i),py(e,t,r)}catch(c){Rm(e,t,c)}}function py(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){my(e,t,i)},function(i){return Rm(e,t,i)}):my(e,t,n)}function my(e,t,n){t.status="fulfilled",t.value=n,gS(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,mS(e,n)))}function Rm(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,gS(t),t=t.next;while(t!==i)}e.action=null}function gS(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function _S(e,t){return t}function gy(e,t){if(Kt){var n=me.formState;if(n!==null){t:{var i=Ft;if(Kt){if(be){e:{for(var s=be,r=bi;s.nodeType!==8;){if(!r){s=null;break e}if(s=Ei(s.nextSibling),s===null){s=null;break e}}r=s.data,s=r==="F!"||r==="F"?s:null}if(s){be=Ei(s.nextSibling),i=s.data==="F!";break t}}vr(i)}i=!1}i&&(t=n[0])}}return n=Tn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_S,lastRenderedState:t},n.queue=i,n=OS.bind(null,Ft,i),i.dispatch=n,i=Cm(!1),r=Dg.bind(null,Ft,!1,i.queue),i=Tn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=JA.bind(null,Ft,s,r,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function _y(e){var t=Ge();return vS(t,he,e)}function vS(e,t,n){if(t=Eg(e,t,_S)[0],e=ju(Cs)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Tc(t)}catch(a){throw a===Bo?Gh:a}else i=t;t=Ge();var s=t.queue,r=s.dispatch;return n!==t.memoizedState&&(Ft.flags|=2048,Co(9,{destroy:void 0},KA.bind(null,s,n),null)),[i,r,e]}function KA(e,t){e.action=t}function vy(e){var t=Ge(),n=he;if(n!==null)return vS(t,n,e);Ge(),t=t.memoizedState,n=Ge();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Co(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Ft.updateQueue,t===null&&(t=kh(),Ft.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function yS(){return Ge().memoizedState}function $u(e,t,n,i){var s=Tn();Ft.flags|=e,s.memoizedState=Co(1|t,{destroy:void 0},n,i===void 0?null:i)}function Wh(e,t,n,i){var s=Ge();i=i===void 0?null:i;var r=s.memoizedState.inst;he!==null&&i!==null&&yg(i,he.memoizedState.deps)?s.memoizedState=Co(t,r,n,i):(Ft.flags|=e,s.memoizedState=Co(1|t,r,n,i))}function yy(e,t){$u(8390656,8,e,t)}function Ag(e,t){Wh(2048,8,e,t)}function QA(e){Ft.flags|=4;var t=Ft.updateQueue;if(t===null)t=kh(),Ft.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function xS(e){var t=Ge().memoizedState;return QA({ref:t,nextImpl:e}),function(){if((ne&2)!==0)throw Error(Z(440));return t.impl.apply(void 0,arguments)}}function SS(e,t){return Wh(4,2,e,t)}function MS(e,t){return Wh(4,4,e,t)}function bS(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function TS(e,t,n){n=n!=null?n.concat([e]):null,Wh(4,4,bS.bind(null,t,e),n)}function wg(){}function ES(e,t){var n=Ge();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&yg(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function AS(e,t){var n=Ge();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&yg(t,i[1]))return i[0];if(i=e(),ha){ir(!0);try{e()}finally{ir(!1)}}return n.memoizedState=[i,t],i}function Cg(e,t,n){return n===void 0||(ws&1073741824)!==0&&(Zt&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=pM(),Ft.lanes|=e,xr|=e,n)}function wS(e,t,n,i){return ei(n,t)?n:wo.current!==null?(e=Cg(e,n,i),ei(e,t)||(Ye=!0),e):(ws&42)===0||(ws&1073741824)!==0&&(Zt&261930)===0?(Ye=!0,e.memoizedState=n):(e=pM(),Ft.lanes|=e,xr|=e,t)}function CS(e,t,n,i,s){var r=ie.p;ie.p=r!==0&&8>r?r:8;var a=Ut.T,o={};Ut.T=o,Dg(e,!1,t,n);try{var l=s(),c=Ut.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=qA(l,i);Ql(e,t,u,ti(e))}else Ql(e,t,i,ti(e))}catch(f){Ql(e,t,{then:function(){},status:"rejected",reason:f},ti())}finally{ie.p=r,a!==null&&o.types!==null&&(a.types=o.types),Ut.T=a}}function jA(){}function Dm(e,t,n,i){if(e.tag!==5)throw Error(Z(476));var s=RS(e).queue;CS(e,s,t,ia,n===null?jA:function(){return DS(e),n(i)})}function RS(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ia,baseState:ia,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cs,lastRenderedState:ia},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cs,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function DS(e){var t=RS(e);t.next===null&&(t=e.alternate.memoizedState),Ql(e,t.next.queue,{},ti())}function Rg(){return un(pc)}function US(){return Ge().memoizedState}function LS(){return Ge().memoizedState}function $A(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=ti();e=ur(n);var i=hr(t,e,n);i!==null&&(Nn(i,t,n),Zl(i,t,n)),t={cache:pg()},e.payload=t;return}t=t.return}}function tw(e,t,n){var i=ti();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},qh(e)?NS(t,n):(n=ug(e,t,n,i),n!==null&&(Nn(n,e,i),IS(n,t,i)))}function OS(e,t,n){var i=ti();Ql(e,t,n,i)}function Ql(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(qh(e))NS(t,s);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var a=t.lastRenderedState,o=r(a,n);if(s.hasEagerState=!0,s.eagerState=o,ei(o,a))return Hh(e,t,s,0),me===null&&Vh(),!1}catch{}if(n=ug(e,t,s,i),n!==null)return Nn(n,e,i),IS(n,t,i),!0}return!1}function Dg(e,t,n,i){if(i={lane:2,revertLane:Fg(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},qh(e)){if(t)throw Error(Z(479))}else t=ug(e,n,i,2),t!==null&&Nn(t,e,2)}function qh(e){var t=e.alternate;return e===Ft||t!==null&&t===Ft}function NS(e,t){So=yh=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function IS(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,xx(e,n)}}var hc={readContext:un,use:Xh,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useLayoutEffect:Pe,useInsertionEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useSyncExternalStore:Pe,useId:Pe,useHostTransitionStatus:Pe,useFormState:Pe,useActionState:Pe,useOptimistic:Pe,useMemoCache:Pe,useCacheRefresh:Pe};hc.useEffectEvent=Pe;var PS={readContext:un,use:Xh,useCallback:function(e,t){return Tn().memoizedState=[e,t===void 0?null:t],e},useContext:un,useEffect:yy,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,$u(4194308,4,bS.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $u(4194308,4,e,t)},useInsertionEffect:function(e,t){$u(4,2,e,t)},useMemo:function(e,t){var n=Tn();t=t===void 0?null:t;var i=e();if(ha){ir(!0);try{e()}finally{ir(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Tn();if(n!==void 0){var s=n(t);if(ha){ir(!0);try{n(t)}finally{ir(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=tw.bind(null,Ft,e),[i.memoizedState,e]},useRef:function(e){var t=Tn();return e={current:e},t.memoizedState=e},useState:function(e){e=Cm(e);var t=e.queue,n=OS.bind(null,Ft,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:wg,useDeferredValue:function(e,t){var n=Tn();return Cg(n,e,t)},useTransition:function(){var e=Cm(!1);return e=CS.bind(null,Ft,e.queue,!0,!1),Tn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Ft,s=Tn();if(Kt){if(n===void 0)throw Error(Z(407));n=n()}else{if(n=t(),me===null)throw Error(Z(349));(Zt&127)!==0||cS(i,t,n)}s.memoizedState=n;var r={value:n,getSnapshot:t};return s.queue=r,yy(hS.bind(null,i,r,e),[e]),i.flags|=2048,Co(9,{destroy:void 0},uS.bind(null,i,r,n,t),null),n},useId:function(){var e=Tn(),t=me.identifierPrefix;if(Kt){var n=Yi,i=qi;n=(i&~(1<<32-$n(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=xh++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=YA++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Rg,useFormState:gy,useActionState:gy,useOptimistic:function(e){var t=Tn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Dg.bind(null,Ft,!0,n),n.dispatch=t,[e,t]},useMemoCache:Tg,useCacheRefresh:function(){return Tn().memoizedState=$A.bind(null,Ft)},useEffectEvent:function(e){var t=Tn(),n={impl:e};return t.memoizedState=n,function(){if((ne&2)!==0)throw Error(Z(440));return n.impl.apply(void 0,arguments)}}},Ug={readContext:un,use:Xh,useCallback:ES,useContext:un,useEffect:Ag,useImperativeHandle:TS,useInsertionEffect:SS,useLayoutEffect:MS,useMemo:AS,useReducer:ju,useRef:yS,useState:function(){return ju(Cs)},useDebugValue:wg,useDeferredValue:function(e,t){var n=Ge();return wS(n,he.memoizedState,e,t)},useTransition:function(){var e=ju(Cs)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:Tc(e),t]},useSyncExternalStore:lS,useId:US,useHostTransitionStatus:Rg,useFormState:_y,useActionState:_y,useOptimistic:function(e,t){var n=Ge();return pS(n,he,e,t)},useMemoCache:Tg,useCacheRefresh:LS};Ug.useEffectEvent=xS;var BS={readContext:un,use:Xh,useCallback:ES,useContext:un,useEffect:Ag,useImperativeHandle:TS,useInsertionEffect:SS,useLayoutEffect:MS,useMemo:AS,useReducer:zp,useRef:yS,useState:function(){return zp(Cs)},useDebugValue:wg,useDeferredValue:function(e,t){var n=Ge();return he===null?Cg(n,e,t):wS(n,he.memoizedState,e,t)},useTransition:function(){var e=zp(Cs)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:Tc(e),t]},useSyncExternalStore:lS,useId:US,useHostTransitionStatus:Rg,useFormState:vy,useActionState:vy,useOptimistic:function(e,t){var n=Ge();return he!==null?pS(n,he,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Tg,useCacheRefresh:LS};BS.useEffectEvent=xS;function Fp(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Te({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Um={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=ti(),s=ur(i);s.payload=t,n!=null&&(s.callback=n),t=hr(e,s,i),t!==null&&(Nn(t,e,i),Zl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=ti(),s=ur(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=hr(e,s,i),t!==null&&(Nn(t,e,i),Zl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ti(),i=ur(n);i.tag=2,t!=null&&(i.callback=t),t=hr(e,i,n),t!==null&&(Nn(t,e,n),Zl(t,e,n))}};function xy(e,t,n,i,s,r,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,a):t.prototype&&t.prototype.isPureReactComponent?!ac(n,i)||!ac(s,r):!0}function Sy(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Um.enqueueReplaceState(t,t.state,null)}function fa(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Te({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function zS(e){fh(e)}function FS(e){console.error(e)}function VS(e){fh(e)}function Sh(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function My(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Lm(e,t,n){return n=ur(n),n.tag=3,n.payload={element:null},n.callback=function(){Sh(e,t)},n}function HS(e){return e=ur(e),e.tag=3,e}function GS(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var r=i.value;e.payload=function(){return s(r)},e.callback=function(){My(t,n,i)}}var a=n.stateNode;a!==null&&typeof a.componentDidCatch=="function"&&(e.callback=function(){My(t,n,i),typeof s!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function ew(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Po(t,n,s,!0),n=ni.current,n!==null){switch(n.tag){case 31:case 13:return Ti===null?Ah():n.alternate===null&&Be===0&&(Be=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===gh?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Kp(e,i,s)),!1;case 22:return n.flags|=65536,i===gh?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Kp(e,i,s)),!1}throw Error(Z(435,n.tag))}return Kp(e,i,s),Ah(),!1}if(Kt)return t=ni.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==ym&&(e=Error(Z(422),{cause:i}),lc(Mi(e,n)))):(i!==ym&&(t=Error(Z(423),{cause:i}),lc(Mi(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=Mi(i,n),s=Lm(e.stateNode,i,s),Bp(e,s),Be!==4&&(Be=2)),!1;var r=Error(Z(520),{cause:i});if(r=Mi(r,n),tc===null?tc=[r]:tc.push(r),Be!==4&&(Be=2),t===null)return!0;i=Mi(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=Lm(n.stateNode,i,e),Bp(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(fr===null||!fr.has(r))))return n.flags|=65536,s&=-s,n.lanes|=s,s=HS(s),GS(s,e,n,i),Bp(n,s),!1}n=n.return}while(n!==null);return!1}var Lg=Error(Z(461)),Ye=!1;function on(e,t,n,i){t.child=e===null?nS(t,null,n,i):ua(t,e.child,n,i)}function by(e,t,n,i,s){n=n.render;var r=t.ref;if("ref"in i){var a={};for(var o in i)o!=="ref"&&(a[o]=i[o])}else a=i;return ca(t),i=xg(e,t,n,a,r,s),o=Sg(),e!==null&&!Ye?(Mg(e,t,s),Rs(e,t,s)):(Kt&&o&&fg(t),t.flags|=1,on(e,t,i,s),t.child)}function Ty(e,t,n,i,s){if(e===null){var r=n.type;return typeof r=="function"&&!hg(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,kS(e,t,r,i,s)):(e=Ku(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Og(e,s)){var a=r.memoizedProps;if(n=n.compare,n=n!==null?n:ac,n(a,i)&&e.ref===t.ref)return Rs(e,t,s)}return t.flags|=1,e=bs(r,i),e.ref=t.ref,e.return=t,t.child=e}function kS(e,t,n,i,s){if(e!==null){var r=e.memoizedProps;if(ac(r,i)&&e.ref===t.ref)if(Ye=!1,t.pendingProps=i=r,Og(e,s))(e.flags&131072)!==0&&(Ye=!0);else return t.lanes=e.lanes,Rs(e,t,s)}return Om(e,t,n,i,s)}function XS(e,t,n,i){var s=i.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~r}else i=0,t.child=null;return Ey(e,t,r,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Qu(t,r!==null?r.cachePool:null),r!==null?dy(t,r):Am(),rS(t);else return i=t.lanes=536870912,Ey(e,t,r!==null?r.baseLanes|n:n,n,i)}else r!==null?(Qu(t,r.cachePool),dy(t,r),er(t),t.memoizedState=null):(e!==null&&Qu(t,null),Am(),er(t));return on(e,t,s,n),t.child}function Gl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ey(e,t,n,i,s){var r=mg();return r=r===null?null:{parent:qe._currentValue,pool:r},t.memoizedState={baseLanes:n,cachePool:r},e!==null&&Qu(t,null),Am(),rS(t),e!==null&&Po(e,t,i,!0),t.childLanes=s,null}function th(e,t){return t=Mh({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Ay(e,t,n){return ua(t,e.child,null,n),e=th(t,t.pendingProps),e.flags|=2,Zn(t),t.memoizedState=null,e}function nw(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Kt){if(i.mode==="hidden")return e=th(t,i),t.lanes=536870912,Gl(null,e);if(wm(t),(e=be)?(e=PM(e,bi),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:_r!==null?{id:qi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},n=Jx(e),n.return=t,t.child=n,cn=t,be=null)):e=null,e===null)throw vr(t);return t.lanes=536870912,null}return th(t,i)}var r=e.memoizedState;if(r!==null){var a=r.dehydrated;if(wm(t),s)if(t.flags&256)t.flags&=-257,t=Ay(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(Z(558));else if(Ye||Po(e,t,n,!1),s=(n&e.childLanes)!==0,Ye||s){if(i=me,i!==null&&(a=Sx(i,n),a!==0&&a!==r.retryLane))throw r.retryLane=a,ga(e,a),Nn(i,e,a),Lg;Ah(),t=Ay(e,t,n)}else e=r.treeContext,be=Ei(a.nextSibling),cn=t,Kt=!0,cr=null,bi=!1,e!==null&&Qx(t,e),t=th(t,i),t.flags|=4096;return t}return e=bs(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function eh(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(Z(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Om(e,t,n,i,s){return ca(t),n=xg(e,t,n,i,void 0,s),i=Sg(),e!==null&&!Ye?(Mg(e,t,s),Rs(e,t,s)):(Kt&&i&&fg(t),t.flags|=1,on(e,t,n,s),t.child)}function wy(e,t,n,i,s,r){return ca(t),t.updateQueue=null,n=oS(t,i,n,s),aS(e),i=Sg(),e!==null&&!Ye?(Mg(e,t,r),Rs(e,t,r)):(Kt&&i&&fg(t),t.flags|=1,on(e,t,n,r),t.child)}function Cy(e,t,n,i,s){if(ca(t),t.stateNode===null){var r=ho,a=n.contextType;typeof a=="object"&&a!==null&&(r=un(a)),r=new n(i,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Um,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=i,r.state=t.memoizedState,r.refs={},_g(t),a=n.contextType,r.context=typeof a=="object"&&a!==null?un(a):ho,r.state=t.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(Fp(t,n,a,i),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(a=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),a!==r.state&&Um.enqueueReplaceState(r,r.state,null),Kl(t,i,r,s),Jl(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){r=t.stateNode;var o=t.memoizedProps,l=fa(n,o);r.props=l;var c=r.context,u=n.contextType;a=ho,typeof u=="object"&&u!==null&&(a=un(u));var f=n.getDerivedStateFromProps;u=typeof f=="function"||typeof r.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,u||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o||c!==a)&&Sy(t,r,i,a),js=!1;var h=t.memoizedState;r.state=h,Kl(t,i,r,s),Jl(),c=t.memoizedState,o||h!==c||js?(typeof f=="function"&&(Fp(t,n,f,i),c=t.memoizedState),(l=js||xy(t,n,l,i,h,c,a))?(u||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),r.props=i,r.state=c,r.context=a,i=l):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,Tm(e,t),a=t.memoizedProps,u=fa(n,a),r.props=u,f=t.pendingProps,h=r.context,c=n.contextType,l=ho,typeof c=="object"&&c!==null&&(l=un(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Sy(t,r,i,l),js=!1,h=t.memoizedState,r.state=h,Kl(t,i,r,s),Jl();var p=t.memoizedState;a!==f||h!==p||js||e!==null&&e.dependencies!==null&&mh(e.dependencies)?(typeof o=="function"&&(Fp(t,n,o,i),p=t.memoizedState),(u=js||xy(t,n,u,i,h,p,l)||e!==null&&e.dependencies!==null&&mh(e.dependencies))?(c||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,p,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,p,l)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),r.props=i,r.state=p,r.context=l,i=u):(typeof r.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),i=!1)}return r=i,eh(e,t),i=(t.flags&128)!==0,r||i?(r=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&i?(t.child=ua(t,e.child,null,s),t.child=ua(t,null,n,s)):on(e,t,n,s),t.memoizedState=r.state,e=t.child):e=Rs(e,t,s),e}function Ry(e,t,n,i){return la(),t.flags|=256,on(e,t,n,i),t.child}var Vp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hp(e){return{baseLanes:e,cachePool:$x()}}function Gp(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Kn),e}function WS(e,t,n){var i=t.pendingProps,s=!1,r=(t.flags&128)!==0,a;if((a=r)||(a=e!==null&&e.memoizedState===null?!1:(He.current&2)!==0),a&&(s=!0,t.flags&=-129),a=(t.flags&32)!==0,t.flags&=-33,e===null){if(Kt){if(s?tr(t):er(t),(e=be)?(e=PM(e,bi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:_r!==null?{id:qi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},n=Jx(e),n.return=t,t.child=n,cn=t,be=null)):e=null,e===null)throw vr(t);return Ym(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,s?(er(t),s=t.mode,o=Mh({mode:"hidden",children:o},s),i=sa(i,s,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=Hp(n),i.childLanes=Gp(e,a,n),t.memoizedState=Vp,Gl(null,i)):(tr(t),Nm(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(r)t.flags&256?(tr(t),t.flags&=-257,t=kp(e,t,n)):t.memoizedState!==null?(er(t),t.child=e.child,t.flags|=128,t=null):(er(t),o=i.fallback,s=t.mode,i=Mh({mode:"visible",children:i.children},s),o=sa(o,s,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,ua(t,e.child,null,n),i=t.child,i.memoizedState=Hp(n),i.childLanes=Gp(e,a,n),t.memoizedState=Vp,t=Gl(null,i));else if(tr(t),Ym(o)){if(a=o.nextSibling&&o.nextSibling.dataset,a)var c=a.dgst;a=c,i=Error(Z(419)),i.stack="",i.digest=a,lc({value:i,source:null,stack:null}),t=kp(e,t,n)}else if(Ye||Po(e,t,n,!1),a=(n&e.childLanes)!==0,Ye||a){if(a=me,a!==null&&(i=Sx(a,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,ga(e,i),Nn(a,e,i),Lg;qm(o)||Ah(),t=kp(e,t,n)}else qm(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,be=Ei(o.nextSibling),cn=t,Kt=!0,cr=null,bi=!1,e!==null&&Qx(t,e),t=Nm(t,i.children),t.flags|=4096);return t}return s?(er(t),o=i.fallback,s=t.mode,l=e.child,c=l.sibling,i=bs(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=bs(c,o):(o=sa(o,s,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,Gl(null,i),i=t.child,o=e.child.memoizedState,o===null?o=Hp(n):(s=o.cachePool,s!==null?(l=qe._currentValue,s=s.parent!==l?{parent:l,pool:l}:s):s=$x(),o={baseLanes:o.baseLanes|n,cachePool:s}),i.memoizedState=o,i.childLanes=Gp(e,a,n),t.memoizedState=Vp,Gl(e.child,i)):(tr(t),n=e.child,e=n.sibling,n=bs(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(a=t.deletions,a===null?(t.deletions=[e],t.flags|=16):a.push(e)),t.child=n,t.memoizedState=null,n)}function Nm(e,t){return t=Mh({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Mh(e,t){return e=Jn(22,e,null,t),e.lanes=0,e}function kp(e,t,n){return ua(t,e.child,null,n),e=Nm(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dy(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Sm(e.return,t,n)}function Xp(e,t,n,i,s,r){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:r}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=s,a.treeForkCount=r)}function qS(e,t,n){var i=t.pendingProps,s=i.revealOrder,r=i.tail;i=i.children;var a=He.current,o=(a&2)!==0;if(o?(a=a&1|2,t.flags|=128):a&=1,ye(He,a),on(e,t,i,n),i=Kt?oc:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dy(e,n,t);else if(e.tag===19)Dy(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&vh(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Xp(t,!1,s,n,r,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&vh(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Xp(t,!0,n,null,r,i);break;case"together":Xp(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function Rs(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),xr|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Po(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(Z(153));if(t.child!==null){for(e=t.child,n=bs(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=bs(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Og(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&mh(e)))}function iw(e,t,n){switch(t.tag){case 3:lh(t,t.stateNode.containerInfo),$s(t,qe,e.memoizedState.cache),la();break;case 27:case 5:lm(t);break;case 4:lh(t,t.stateNode.containerInfo);break;case 10:$s(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,wm(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(tr(t),t.flags|=128,null):(n&t.child.childLanes)!==0?WS(e,t,n):(tr(t),e=Rs(e,t,n),e!==null?e.sibling:null);tr(t);break;case 19:var s=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Po(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return qS(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ye(He,He.current),i)break;return null;case 22:return t.lanes=0,XS(e,t,n,t.pendingProps);case 24:$s(t,qe,e.memoizedState.cache)}return Rs(e,t,n)}function YS(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ye=!0;else{if(!Og(e,n)&&(t.flags&128)===0)return Ye=!1,iw(e,t,n);Ye=(e.flags&131072)!==0}else Ye=!1,Kt&&(t.flags&1048576)!==0&&Kx(t,oc,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=ea(t.elementType),t.type=e,typeof e=="function")hg(e)?(i=fa(e,i),t.tag=1,t=Cy(null,t,e,i,n)):(t.tag=0,t=Om(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===Qm){t.tag=11,t=by(null,t,e,i,n);break t}else if(s===jm){t.tag=14,t=Ty(null,t,e,i,n);break t}}throw t=am(e)||e,Error(Z(306,t,""))}}return t;case 0:return Om(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=fa(i,t.pendingProps),Cy(e,t,i,s,n);case 3:t:{if(lh(t,t.stateNode.containerInfo),e===null)throw Error(Z(387));i=t.pendingProps;var r=t.memoizedState;s=r.element,Tm(e,t),Kl(t,i,null,n);var a=t.memoizedState;if(i=a.cache,$s(t,qe,i),i!==r.cache&&Mm(t,[qe],n,!0),Jl(),i=a.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:a.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=Ry(e,t,i,n);break t}else if(i!==s){s=Mi(Error(Z(424)),t),lc(s),t=Ry(e,t,i,n);break t}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,be=Ei(e.firstChild),cn=t,Kt=!0,cr=null,bi=!0,n=nS(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(la(),i===s){t=Rs(e,t,n);break t}on(e,t,i,n)}t=t.child}return t;case 26:return eh(e,t),e===null?(n=jy(t.type,null,t.pendingProps,null))?t.memoizedState=n:Kt||(n=t.type,e=t.pendingProps,i=Dh(lr.current).createElement(n),i[ln]=t,i[In]=e,hn(i,n,e),sn(i),t.stateNode=i):t.memoizedState=jy(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return lm(t),e===null&&Kt&&(i=t.stateNode=BM(t.type,t.pendingProps,lr.current),cn=t,bi=!0,s=be,Mr(t.type)?(Zm=s,be=Ei(i.firstChild)):be=s),on(e,t,t.pendingProps.children,n),eh(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Kt&&((s=i=be)&&(i=Uw(i,t.type,t.pendingProps,bi),i!==null?(t.stateNode=i,cn=t,be=Ei(i.firstChild),bi=!1,s=!0):s=!1),s||vr(t)),lm(t),s=t.type,r=t.pendingProps,a=e!==null?e.memoizedProps:null,i=r.children,Xm(s,r)?i=null:a!==null&&Xm(s,a)&&(t.flags|=32),t.memoizedState!==null&&(s=xg(e,t,ZA,null,null,n),pc._currentValue=s),eh(e,t),on(e,t,i,n),t.child;case 6:return e===null&&Kt&&((e=n=be)&&(n=Lw(n,t.pendingProps,bi),n!==null?(t.stateNode=n,cn=t,be=null,e=!0):e=!1),e||vr(t)),null;case 13:return WS(e,t,n);case 4:return lh(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ua(t,null,i,n):on(e,t,i,n),t.child;case 11:return by(e,t,t.type,t.pendingProps,n);case 7:return on(e,t,t.pendingProps,n),t.child;case 8:return on(e,t,t.pendingProps.children,n),t.child;case 12:return on(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,$s(t,t.type,i.value),on(e,t,i.children,n),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,ca(t),s=un(s),i=i(s),t.flags|=1,on(e,t,i,n),t.child;case 14:return Ty(e,t,t.type,t.pendingProps,n);case 15:return kS(e,t,t.type,t.pendingProps,n);case 19:return qS(e,t,n);case 31:return nw(e,t,n);case 22:return XS(e,t,n,t.pendingProps);case 24:return ca(t),i=un(qe),e===null?(s=mg(),s===null&&(s=me,r=pg(),s.pooledCache=r,r.refCount++,r!==null&&(s.pooledCacheLanes|=n),s=r),t.memoizedState={parent:i,cache:s},_g(t),$s(t,qe,s)):((e.lanes&n)!==0&&(Tm(e,t),Kl(t,null,null,n),Jl()),s=e.memoizedState,r=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),$s(t,qe,i)):(i=r.cache,$s(t,qe,i),i!==s.cache&&Mm(t,[qe],n,!0))),on(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(Z(156,t.tag))}function ps(e){e.flags|=4}function Wp(e,t,n,i,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(_M())e.flags|=8192;else throw aa=gh,gg}else e.flags&=-16777217}function Uy(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!VM(t))if(_M())e.flags|=8192;else throw aa=gh,gg}function Fu(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?vx():536870912,e.lanes|=t,Ro|=t)}function Il(e,t){if(!Kt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function sw(e,t,n){var i=t.pendingProps;switch(dg(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return Me(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Ts(qe),bo(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&($a(t)?ps(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Pp())),Me(t),null;case 26:var s=t.type,r=t.memoizedState;return e===null?(ps(t),r!==null?(Me(t),Uy(t,r)):(Me(t),Wp(t,s,null,i,n))):r?r!==e.memoizedState?(ps(t),Me(t),Uy(t,r)):(Me(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&ps(t),Me(t),Wp(t,s,e,i,n)),null;case 27:if(ch(t),n=lr.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ps(t);else{if(!i){if(t.stateNode===null)throw Error(Z(166));return Me(t),null}e=Ji.current,$a(t)?ay(t,e):(e=BM(s,i,n),t.stateNode=e,ps(t))}return Me(t),null;case 5:if(ch(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ps(t);else{if(!i){if(t.stateNode===null)throw Error(Z(166));return Me(t),null}if(r=Ji.current,$a(t))ay(t,r);else{var a=Dh(lr.current);switch(r){case 1:r=a.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:r=a.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":r=a.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":r=a.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":r=a.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof i.is=="string"?a.createElement("select",{is:i.is}):a.createElement("select"),i.multiple?r.multiple=!0:i.size&&(r.size=i.size);break;default:r=typeof i.is=="string"?a.createElement(s,{is:i.is}):a.createElement(s)}}r[ln]=t,r[In]=i;t:for(a=t.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=r;t:switch(hn(r,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&ps(t)}}return Me(t),Wp(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&ps(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(Z(166));if(e=lr.current,$a(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=cn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[ln]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||OM(e.nodeValue,n)),e||vr(t,!0)}else e=Dh(e).createTextNode(i),e[ln]=t,t.stateNode=e}return Me(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=$a(t),n!==null){if(e===null){if(!i)throw Error(Z(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Z(557));e[ln]=t}else la(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),e=!1}else n=Pp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Zn(t),t):(Zn(t),null);if((t.flags&128)!==0)throw Error(Z(558))}return Me(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=$a(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(Z(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Z(317));s[ln]=t}else la(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),s=!1}else s=Pp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Zn(t),t):(Zn(t),null)}return Zn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Fu(t,t.updateQueue),Me(t),null);case 4:return bo(),e===null&&Vg(t.stateNode.containerInfo),Me(t),null;case 10:return Ts(t.type),Me(t),null;case 19:if(rn(He),i=t.memoizedState,i===null)return Me(t),null;if(s=(t.flags&128)!==0,r=i.rendering,r===null)if(s)Il(i,!1);else{if(Be!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=vh(e),r!==null){for(t.flags|=128,Il(i,!1),e=r.updateQueue,t.updateQueue=e,Fu(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Zx(n,e),n=n.sibling;return ye(He,He.current&1|2),Kt&&vs(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Qn()>Th&&(t.flags|=128,s=!0,Il(i,!1),t.lanes=4194304)}else{if(!s)if(e=vh(r),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Fu(t,e),Il(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!Kt)return Me(t),null}else 2*Qn()-i.renderingStartTime>Th&&n!==536870912&&(t.flags|=128,s=!0,Il(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Qn(),e.sibling=null,n=He.current,ye(He,s?n&1|2:n&1),Kt&&vs(t,i.treeForkCount),e):(Me(t),null);case 22:case 23:return Zn(t),vg(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),n=t.updateQueue,n!==null&&Fu(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&rn(ra),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ts(qe),Me(t),null;case 25:return null;case 30:return null}throw Error(Z(156,t.tag))}function rw(e,t){switch(dg(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ts(qe),bo(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ch(t),null;case 31:if(t.memoizedState!==null){if(Zn(t),t.alternate===null)throw Error(Z(340));la()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Zn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Z(340));la()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return rn(He),null;case 4:return bo(),null;case 10:return Ts(t.type),null;case 22:case 23:return Zn(t),vg(),e!==null&&rn(ra),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ts(qe),null;case 25:return null;default:return null}}function ZS(e,t){switch(dg(t),t.tag){case 3:Ts(qe),bo();break;case 26:case 27:case 5:ch(t);break;case 4:bo();break;case 31:t.memoizedState!==null&&Zn(t);break;case 13:Zn(t);break;case 19:rn(He);break;case 10:Ts(t.type);break;case 22:case 23:Zn(t),vg(),e!==null&&rn(ra);break;case 24:Ts(qe)}}function Ec(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var r=n.create,a=n.inst;i=r(),a.destroy=i}n=n.next}while(n!==s)}}catch(o){oe(t,t.return,o)}}function yr(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var r=s.next;i=r;do{if((i.tag&e)===e){var a=i.inst,o=a.destroy;if(o!==void 0){a.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(u){oe(s,l,u)}}}i=i.next}while(i!==r)}}catch(u){oe(t,t.return,u)}}function JS(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{sS(t,n)}catch(i){oe(e,e.return,i)}}}function KS(e,t,n){n.props=fa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){oe(e,t,i)}}function jl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(s){oe(e,t,s)}}function Zi(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){oe(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){oe(e,t,s)}else n.current=null}function QS(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){oe(e,e.return,s)}}function qp(e,t,n){try{var i=e.stateNode;Ew(i,e.type,n,t),i[In]=t}catch(s){oe(e,e.return,s)}}function jS(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Mr(e.type)||e.tag===4}function Yp(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||jS(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Mr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Im(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ss));else if(i!==4&&(i===27&&Mr(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Im(e,t,n),e=e.sibling;e!==null;)Im(e,t,n),e=e.sibling}function bh(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Mr(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(bh(e,t,n),e=e.sibling;e!==null;)bh(e,t,n),e=e.sibling}function $S(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);hn(t,i,n),t[ln]=e,t[In]=n}catch(r){oe(e,e.return,r)}}var ys=!1,We=!1,Zp=!1,Ly=typeof WeakSet=="function"?WeakSet:Set,nn=null;function aw(e,t){if(e=e.containerInfo,Gm=Nh,e=Vx(e),lg(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break t}var a=0,o=-1,l=-1,c=0,u=0,f=e,h=null;e:for(;;){for(var p;f!==n||s!==0&&f.nodeType!==3||(o=a+s),f!==r||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===e)break e;if(h===n&&++c===s&&(o=a),h===r&&++u===i&&(l=a),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(km={focusedElem:e,selectionRange:n},Nh=!1,nn=t;nn!==null;)if(t=nn,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,nn=e;else for(;nn!==null;){switch(t=nn,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,n=t,s=r.memoizedProps,r=r.memoizedState,i=n.stateNode;try{var _=fa(n.type,s);e=i.getSnapshotBeforeUpdate(_,r),i.__reactInternalSnapshotBeforeUpdate=e}catch(g){oe(n,n.return,g)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Wm(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Wm(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(Z(163))}if(e=t.sibling,e!==null){e.return=t.return,nn=e;break}nn=t.return}}function tM(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:gs(e,n),i&4&&Ec(5,n);break;case 1:if(gs(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(a){oe(n,n.return,a)}else{var s=fa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(a){oe(n,n.return,a)}}i&64&&JS(n),i&512&&jl(n,n.return);break;case 3:if(gs(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{sS(e,t)}catch(a){oe(n,n.return,a)}}break;case 27:t===null&&i&4&&$S(n);case 26:case 5:gs(e,n),t===null&&i&4&&QS(n),i&512&&jl(n,n.return);break;case 12:gs(e,n);break;case 31:gs(e,n),i&4&&iM(e,n);break;case 13:gs(e,n),i&4&&sM(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=mw.bind(null,n),Ow(e,n))));break;case 22:if(i=n.memoizedState!==null||ys,!i){t=t!==null&&t.memoizedState!==null||We,s=ys;var r=We;ys=i,(We=t)&&!r?_s(e,n,(n.subtreeFlags&8772)!==0):gs(e,n),ys=s,We=r}break;case 30:break;default:gs(e,n)}}function eM(e){var t=e.alternate;t!==null&&(e.alternate=null,eM(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ng(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ce=null,Ln=!1;function ms(e,t,n){for(n=n.child;n!==null;)nM(e,t,n),n=n.sibling}function nM(e,t,n){if(jn&&typeof jn.onCommitFiberUnmount=="function")try{jn.onCommitFiberUnmount(vc,n)}catch{}switch(n.tag){case 26:We||Zi(n,t),ms(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:We||Zi(n,t);var i=Ce,s=Ln;Mr(n.type)&&(Ce=n.stateNode,Ln=!1),ms(e,t,n),nc(n.stateNode),Ce=i,Ln=s;break;case 5:We||Zi(n,t);case 6:if(i=Ce,s=Ln,Ce=null,ms(e,t,n),Ce=i,Ln=s,Ce!==null)if(Ln)try{(Ce.nodeType===9?Ce.body:Ce.nodeName==="HTML"?Ce.ownerDocument.body:Ce).removeChild(n.stateNode)}catch(r){oe(n,t,r)}else try{Ce.removeChild(n.stateNode)}catch(r){oe(n,t,r)}break;case 18:Ce!==null&&(Ln?(e=Ce,Yy(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Oo(e)):Yy(Ce,n.stateNode));break;case 4:i=Ce,s=Ln,Ce=n.stateNode.containerInfo,Ln=!0,ms(e,t,n),Ce=i,Ln=s;break;case 0:case 11:case 14:case 15:yr(2,n,t),We||yr(4,n,t),ms(e,t,n);break;case 1:We||(Zi(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&KS(n,t,i)),ms(e,t,n);break;case 21:ms(e,t,n);break;case 22:We=(i=We)||n.memoizedState!==null,ms(e,t,n),We=i;break;default:ms(e,t,n)}}function iM(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Oo(e)}catch(n){oe(t,t.return,n)}}}function sM(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Oo(e)}catch(n){oe(t,t.return,n)}}function ow(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ly),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ly),t;default:throw Error(Z(435,e.tag))}}function Vu(e,t){var n=ow(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=gw.bind(null,e,i);i.then(s,s)}})}function Dn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],r=e,a=t,o=a;t:for(;o!==null;){switch(o.tag){case 27:if(Mr(o.type)){Ce=o.stateNode,Ln=!1;break t}break;case 5:Ce=o.stateNode,Ln=!1;break t;case 3:case 4:Ce=o.stateNode.containerInfo,Ln=!0;break t}o=o.return}if(Ce===null)throw Error(Z(160));nM(r,a,s),Ce=null,Ln=!1,r=s.alternate,r!==null&&(r.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)rM(t,e),t=t.sibling}var Pi=null;function rM(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Dn(t,e),Un(e),i&4&&(yr(3,e,e.return),Ec(3,e),yr(5,e,e.return));break;case 1:Dn(t,e),Un(e),i&512&&(We||n===null||Zi(n,n.return)),i&64&&ys&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=Pi;if(Dn(t,e),Un(e),i&512&&(We||n===null||Zi(n,n.return)),i&4){var r=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,s=s.ownerDocument||s;e:switch(i){case"title":r=s.getElementsByTagName("title")[0],(!r||r[Sc]||r[ln]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=s.createElement(i),s.head.insertBefore(r,s.querySelector("head > title"))),hn(r,i,n),r[ln]=e,sn(r),i=r;break t;case"link":var a=tx("link","href",s).get(i+(n.href||""));if(a){for(var o=0;o<a.length;o++)if(r=a[o],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(o,1);break e}}r=s.createElement(i),hn(r,i,n),s.head.appendChild(r);break;case"meta":if(a=tx("meta","content",s).get(i+(n.content||""))){for(o=0;o<a.length;o++)if(r=a[o],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(o,1);break e}}r=s.createElement(i),hn(r,i,n),s.head.appendChild(r);break;default:throw Error(Z(468,i))}r[ln]=e,sn(r),i=r}e.stateNode=i}else ex(s,e.type,e.stateNode);else e.stateNode=$y(s,i,e.memoizedProps);else r!==i?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,i===null?ex(s,e.type,e.stateNode):$y(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&qp(e,e.memoizedProps,n.memoizedProps)}break;case 27:Dn(t,e),Un(e),i&512&&(We||n===null||Zi(n,n.return)),n!==null&&i&4&&qp(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Dn(t,e),Un(e),i&512&&(We||n===null||Zi(n,n.return)),e.flags&32){s=e.stateNode;try{Eo(s,"")}catch(_){oe(e,e.return,_)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,qp(e,s,n!==null?n.memoizedProps:s)),i&1024&&(Zp=!0);break;case 6:if(Dn(t,e),Un(e),i&4){if(e.stateNode===null)throw Error(Z(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(_){oe(e,e.return,_)}}break;case 3:if(sh=null,s=Pi,Pi=Uh(t.containerInfo),Dn(t,e),Pi=s,Un(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Oo(t.containerInfo)}catch(_){oe(e,e.return,_)}Zp&&(Zp=!1,aM(e));break;case 4:i=Pi,Pi=Uh(e.stateNode.containerInfo),Dn(t,e),Un(e),Pi=i;break;case 12:Dn(t,e),Un(e);break;case 31:Dn(t,e),Un(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Vu(e,i)));break;case 13:Dn(t,e),Un(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Yh=Qn()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Vu(e,i)));break;case 22:s=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=ys,u=We;if(ys=c||s,We=u||l,Dn(t,e),We=u,ys=c,Un(e),i&8192)t:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||l||ys||We||na(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(r=l.stateNode,s)a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none";else{o=l.stateNode;var f=l.memoizedProps.style,h=f!=null&&f.hasOwnProperty("display")?f.display:null;o.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(_){oe(l,l.return,_)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=s?"":l.memoizedProps}catch(_){oe(l,l.return,_)}}}else if(t.tag===18){if(n===null){l=t;try{var p=l.stateNode;s?Zy(p,!0):Zy(l.stateNode,!1)}catch(_){oe(l,l.return,_)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Vu(e,n))));break;case 19:Dn(t,e),Un(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Vu(e,i)));break;case 30:break;case 21:break;default:Dn(t,e),Un(e)}}function Un(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(jS(i)){n=i;break}i=i.return}if(n==null)throw Error(Z(160));switch(n.tag){case 27:var s=n.stateNode,r=Yp(e);bh(e,r,s);break;case 5:var a=n.stateNode;n.flags&32&&(Eo(a,""),n.flags&=-33);var o=Yp(e);bh(e,o,a);break;case 3:case 4:var l=n.stateNode.containerInfo,c=Yp(e);Im(e,c,l);break;default:throw Error(Z(161))}}catch(u){oe(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function aM(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;aM(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function gs(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)tM(e,t.alternate,t),t=t.sibling}function na(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:yr(4,t,t.return),na(t);break;case 1:Zi(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&KS(t,t.return,n),na(t);break;case 27:nc(t.stateNode);case 26:case 5:Zi(t,t.return),na(t);break;case 22:t.memoizedState===null&&na(t);break;case 30:na(t);break;default:na(t)}e=e.sibling}}function _s(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=e,r=t,a=r.flags;switch(r.tag){case 0:case 11:case 15:_s(s,r,n),Ec(4,r);break;case 1:if(_s(s,r,n),i=r,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(c){oe(i,i.return,c)}if(i=r,s=i.updateQueue,s!==null){var o=i.stateNode;try{var l=s.shared.hiddenCallbacks;if(l!==null)for(s.shared.hiddenCallbacks=null,s=0;s<l.length;s++)iS(l[s],o)}catch(c){oe(i,i.return,c)}}n&&a&64&&JS(r),jl(r,r.return);break;case 27:$S(r);case 26:case 5:_s(s,r,n),n&&i===null&&a&4&&QS(r),jl(r,r.return);break;case 12:_s(s,r,n);break;case 31:_s(s,r,n),n&&a&4&&iM(s,r);break;case 13:_s(s,r,n),n&&a&4&&sM(s,r);break;case 22:r.memoizedState===null&&_s(s,r,n),jl(r,r.return);break;case 30:break;default:_s(s,r,n)}t=t.sibling}}function Ng(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&bc(n))}function Ig(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&bc(e))}function Ii(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)oM(e,t,n,i),t=t.sibling}function oM(e,t,n,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:Ii(e,t,n,i),s&2048&&Ec(9,t);break;case 1:Ii(e,t,n,i);break;case 3:Ii(e,t,n,i),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&bc(e)));break;case 12:if(s&2048){Ii(e,t,n,i),e=t.stateNode;try{var r=t.memoizedProps,a=r.id,o=r.onPostCommit;typeof o=="function"&&o(a,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){oe(t,t.return,l)}}else Ii(e,t,n,i);break;case 31:Ii(e,t,n,i);break;case 13:Ii(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,a=t.alternate,t.memoizedState!==null?r._visibility&2?Ii(e,t,n,i):$l(e,t):r._visibility&2?Ii(e,t,n,i):(r._visibility|=2,eo(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),s&2048&&Ng(a,t);break;case 24:Ii(e,t,n,i),s&2048&&Ig(t.alternate,t);break;default:Ii(e,t,n,i)}}function eo(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,a=t,o=n,l=i,c=a.flags;switch(a.tag){case 0:case 11:case 15:eo(r,a,o,l,s),Ec(8,a);break;case 23:break;case 22:var u=a.stateNode;a.memoizedState!==null?u._visibility&2?eo(r,a,o,l,s):$l(r,a):(u._visibility|=2,eo(r,a,o,l,s)),s&&c&2048&&Ng(a.alternate,a);break;case 24:eo(r,a,o,l,s),s&&c&2048&&Ig(a.alternate,a);break;default:eo(r,a,o,l,s)}t=t.sibling}}function $l(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:$l(n,i),s&2048&&Ng(i.alternate,i);break;case 24:$l(n,i),s&2048&&Ig(i.alternate,i);break;default:$l(n,i)}t=t.sibling}}var kl=8192;function to(e,t,n){if(e.subtreeFlags&kl)for(e=e.child;e!==null;)lM(e,t,n),e=e.sibling}function lM(e,t,n){switch(e.tag){case 26:to(e,t,n),e.flags&kl&&e.memoizedState!==null&&Ww(n,Pi,e.memoizedState,e.memoizedProps);break;case 5:to(e,t,n);break;case 3:case 4:var i=Pi;Pi=Uh(e.stateNode.containerInfo),to(e,t,n),Pi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=kl,kl=16777216,to(e,t,n),kl=i):to(e,t,n));break;default:to(e,t,n)}}function cM(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];nn=i,hM(i,e)}cM(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)uM(e),e=e.sibling}function uM(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&yr(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,nh(e)):Pl(e);break;default:Pl(e)}}function nh(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];nn=i,hM(i,e)}cM(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:yr(8,t,t.return),nh(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,nh(t));break;default:nh(t)}e=e.sibling}}function hM(e,t){for(;nn!==null;){var n=nn;switch(n.tag){case 0:case 11:case 15:yr(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:bc(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,nn=i;else t:for(n=e;nn!==null;){i=nn;var s=i.sibling,r=i.return;if(eM(i),i===n){nn=null;break t}if(s!==null){s.return=r,nn=s;break t}nn=r}}}var lw={getCacheForType:function(e){var t=un(qe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return un(qe).controller.signal}},cw=typeof WeakMap=="function"?WeakMap:Map,ne=0,me=null,Wt=null,Zt=0,ae=0,Yn=null,rr=!1,zo=!1,Pg=!1,Ds=0,Be=0,xr=0,oa=0,Bg=0,Kn=0,Ro=0,tc=null,On=null,Pm=!1,Yh=0,fM=0,Th=1/0,Eh=null,fr=null,Ke=0,dr=null,Do=null,Es=0,Bm=0,zm=null,dM=null,ec=0,Fm=null;function ti(){return(ne&2)!==0&&Zt!==0?Zt&-Zt:Ut.T!==null?Fg():Mx()}function pM(){if(Kn===0)if((Zt&536870912)===0||Kt){var e=Du;Du<<=1,(Du&3932160)===0&&(Du=262144),Kn=e}else Kn=536870912;return e=ni.current,e!==null&&(e.flags|=32),Kn}function Nn(e,t,n){(e===me&&(ae===2||ae===9)||e.cancelPendingCommit!==null)&&(Uo(e,0),ar(e,Zt,Kn,!1)),xc(e,n),((ne&2)===0||e!==me)&&(e===me&&((ne&2)===0&&(oa|=n),Be===4&&ar(e,Zt,Kn,!1)),Qi(e))}function mM(e,t,n){if((ne&6)!==0)throw Error(Z(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||yc(e,t),s=i?fw(e,t):Jp(e,t,!0),r=i;do{if(s===0){zo&&!i&&ar(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!uw(n)){s=Jp(e,t,!1),r=!1;continue}if(s===2){if(r=t,e.errorRecoveryDisabledLanes&r)var a=0;else a=e.pendingLanes&-536870913,a=a!==0?a:a&536870912?536870912:0;if(a!==0){t=a;t:{var o=e;s=tc;var l=o.current.memoizedState.isDehydrated;if(l&&(Uo(o,a).flags|=256),a=Jp(o,a,!1),a!==2){if(Pg&&!l){o.errorRecoveryDisabledLanes|=r,oa|=r,s=4;break t}r=On,On=s,r!==null&&(On===null?On=r:On.push.apply(On,r))}s=a}if(r=!1,s!==2)continue}}if(s===1){Uo(e,0),ar(e,t,0,!0);break}t:{switch(i=e,r=s,r){case 0:case 1:throw Error(Z(345));case 4:if((t&4194048)!==t)break;case 6:ar(i,t,Kn,!rr);break t;case 2:On=null;break;case 3:case 5:break;default:throw Error(Z(329))}if((t&62914560)===t&&(s=Yh+300-Qn(),10<s)){if(ar(i,t,Kn,!rr),Ph(i,0,!0)!==0)break t;Es=t,i.timeoutHandle=IM(Oy.bind(null,i,n,On,Eh,Pm,t,Kn,oa,Ro,rr,r,"Throttled",-0,0),s);break t}Oy(i,n,On,Eh,Pm,t,Kn,oa,Ro,rr,r,null,-0,0)}}break}while(!0);Qi(e)}function Oy(e,t,n,i,s,r,a,o,l,c,u,f,h,p){if(e.timeoutHandle=-1,f=t.subtreeFlags,f&8192||(f&16785408)===16785408){f={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ss},lM(t,r,f);var _=(r&62914560)===r?Yh-Qn():(r&4194048)===r?fM-Qn():0;if(_=qw(f,_),_!==null){Es=r,e.cancelPendingCommit=_(Iy.bind(null,e,t,r,n,i,s,a,o,l,u,f,null,h,p)),ar(e,r,a,!c);return}}Iy(e,t,r,n,i,s,a,o,l)}function uw(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],r=s.getSnapshot;s=s.value;try{if(!ei(r(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ar(e,t,n,i){t&=~Bg,t&=~oa,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var r=31-$n(s),a=1<<r;i[r]=-1,s&=~a}n!==0&&yx(e,n,t)}function Zh(){return(ne&6)===0?(Ac(0,!1),!1):!0}function zg(){if(Wt!==null){if(ae===0)var e=Wt.return;else e=Wt,Ms=_a=null,bg(e),xo=null,cc=0,e=Wt;for(;e!==null;)ZS(e.alternate,e),e=e.return;Wt=null}}function Uo(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Cw(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Es=0,zg(),me=e,Wt=n=bs(e.current,null),Zt=t,ae=0,Yn=null,rr=!1,zo=yc(e,t),Pg=!1,Ro=Kn=Bg=oa=xr=Be=0,On=tc=null,Pm=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-$n(i),r=1<<s;t|=e[s],i&=~r}return Ds=t,Vh(),n}function gM(e,t){Ft=null,Ut.H=hc,t===Bo||t===Gh?(t=hy(),ae=3):t===gg?(t=hy(),ae=4):ae=t===Lg?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Yn=t,Wt===null&&(Be=1,Sh(e,Mi(t,e.current)))}function _M(){var e=ni.current;return e===null?!0:(Zt&4194048)===Zt?Ti===null:(Zt&62914560)===Zt||(Zt&536870912)!==0?e===Ti:!1}function vM(){var e=Ut.H;return Ut.H=hc,e===null?hc:e}function yM(){var e=Ut.A;return Ut.A=lw,e}function Ah(){Be=4,rr||(Zt&4194048)!==Zt&&ni.current!==null||(zo=!0),(xr&134217727)===0&&(oa&134217727)===0||me===null||ar(me,Zt,Kn,!1)}function Jp(e,t,n){var i=ne;ne|=2;var s=vM(),r=yM();(me!==e||Zt!==t)&&(Eh=null,Uo(e,t)),t=!1;var a=Be;t:do try{if(ae!==0&&Wt!==null){var o=Wt,l=Yn;switch(ae){case 8:zg(),a=6;break t;case 3:case 2:case 9:case 6:ni.current===null&&(t=!0);var c=ae;if(ae=0,Yn=null,mo(e,o,l,c),n&&zo){a=0;break t}break;default:c=ae,ae=0,Yn=null,mo(e,o,l,c)}}hw(),a=Be;break}catch(u){gM(e,u)}while(!0);return t&&e.shellSuspendCounter++,Ms=_a=null,ne=i,Ut.H=s,Ut.A=r,Wt===null&&(me=null,Zt=0,Vh()),a}function hw(){for(;Wt!==null;)xM(Wt)}function fw(e,t){var n=ne;ne|=2;var i=vM(),s=yM();me!==e||Zt!==t?(Eh=null,Th=Qn()+500,Uo(e,t)):zo=yc(e,t);t:do try{if(ae!==0&&Wt!==null){t=Wt;var r=Yn;e:switch(ae){case 1:ae=0,Yn=null,mo(e,t,r,1);break;case 2:case 9:if(uy(r)){ae=0,Yn=null,Ny(t);break}t=function(){ae!==2&&ae!==9||me!==e||(ae=7),Qi(e)},r.then(t,t);break t;case 3:ae=7;break t;case 4:ae=5;break t;case 7:uy(r)?(ae=0,Yn=null,Ny(t)):(ae=0,Yn=null,mo(e,t,r,7));break;case 5:var a=null;switch(Wt.tag){case 26:a=Wt.memoizedState;case 5:case 27:var o=Wt;if(a?VM(a):o.stateNode.complete){ae=0,Yn=null;var l=o.sibling;if(l!==null)Wt=l;else{var c=o.return;c!==null?(Wt=c,Jh(c)):Wt=null}break e}}ae=0,Yn=null,mo(e,t,r,5);break;case 6:ae=0,Yn=null,mo(e,t,r,6);break;case 8:zg(),Be=6;break t;default:throw Error(Z(462))}}dw();break}catch(u){gM(e,u)}while(!0);return Ms=_a=null,Ut.H=i,Ut.A=s,ne=n,Wt!==null?0:(me=null,Zt=0,Vh(),Be)}function dw(){for(;Wt!==null&&!PE();)xM(Wt)}function xM(e){var t=YS(e.alternate,e,Ds);e.memoizedProps=e.pendingProps,t===null?Jh(e):Wt=t}function Ny(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=wy(n,t,t.pendingProps,t.type,void 0,Zt);break;case 11:t=wy(n,t,t.pendingProps,t.type.render,t.ref,Zt);break;case 5:bg(t);default:ZS(n,t),t=Wt=Zx(t,Ds),t=YS(n,t,Ds)}e.memoizedProps=e.pendingProps,t===null?Jh(e):Wt=t}function mo(e,t,n,i){Ms=_a=null,bg(t),xo=null,cc=0;var s=t.return;try{if(ew(e,s,t,n,Zt)){Be=1,Sh(e,Mi(n,e.current)),Wt=null;return}}catch(r){if(s!==null)throw Wt=s,r;Be=1,Sh(e,Mi(n,e.current)),Wt=null;return}t.flags&32768?(Kt||i===1?e=!0:zo||(Zt&536870912)!==0?e=!1:(rr=e=!0,(i===2||i===9||i===3||i===6)&&(i=ni.current,i!==null&&i.tag===13&&(i.flags|=16384))),SM(t,e)):Jh(t)}function Jh(e){var t=e;do{if((t.flags&32768)!==0){SM(t,rr);return}e=t.return;var n=sw(t.alternate,t,Ds);if(n!==null){Wt=n;return}if(t=t.sibling,t!==null){Wt=t;return}Wt=t=e}while(t!==null);Be===0&&(Be=5)}function SM(e,t){do{var n=rw(e.alternate,e);if(n!==null){n.flags&=32767,Wt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Wt=e;return}Wt=e=n}while(e!==null);Be=6,Wt=null}function Iy(e,t,n,i,s,r,a,o,l){e.cancelPendingCommit=null;do Kh();while(Ke!==0);if((ne&6)!==0)throw Error(Z(327));if(t!==null){if(t===e.current)throw Error(Z(177));if(r=t.lanes|t.childLanes,r|=cg,qE(e,n,r,a,o,l),e===me&&(Wt=me=null,Zt=0),Do=t,dr=e,Es=n,Bm=r,zm=s,dM=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,_w(uh,function(){return AM(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Ut.T,Ut.T=null,s=ie.p,ie.p=2,a=ne,ne|=4;try{aw(e,t,n)}finally{ne=a,ie.p=s,Ut.T=i}}Ke=1,MM(),bM(),TM()}}function MM(){if(Ke===1){Ke=0;var e=dr,t=Do,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=Ut.T,Ut.T=null;var i=ie.p;ie.p=2;var s=ne;ne|=4;try{rM(t,e);var r=km,a=Vx(e.containerInfo),o=r.focusedElem,l=r.selectionRange;if(a!==o&&o&&o.ownerDocument&&Fx(o.ownerDocument.documentElement,o)){if(l!==null&&lg(o)){var c=l.start,u=l.end;if(u===void 0&&(u=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(u,o.value.length);else{var f=o.ownerDocument||document,h=f&&f.defaultView||window;if(h.getSelection){var p=h.getSelection(),_=o.textContent.length,g=Math.min(l.start,_),m=l.end===void 0?g:Math.min(l.end,_);!p.extend&&g>m&&(a=m,m=g,g=a);var d=iy(o,g),v=iy(o,m);if(d&&v&&(p.rangeCount!==1||p.anchorNode!==d.node||p.anchorOffset!==d.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=f.createRange();y.setStart(d.node,d.offset),p.removeAllRanges(),g>m?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(f=[],p=o;p=p.parentNode;)p.nodeType===1&&f.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<f.length;o++){var x=f[o];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}Nh=!!Gm,km=Gm=null}finally{ne=s,ie.p=i,Ut.T=n}}e.current=t,Ke=2}}function bM(){if(Ke===2){Ke=0;var e=dr,t=Do,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Ut.T,Ut.T=null;var i=ie.p;ie.p=2;var s=ne;ne|=4;try{tM(e,t.alternate,t)}finally{ne=s,ie.p=i,Ut.T=n}}Ke=3}}function TM(){if(Ke===4||Ke===3){Ke=0,BE();var e=dr,t=Do,n=Es,i=dM;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ke=5:(Ke=0,Do=dr=null,EM(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(fr=null),eg(n),t=t.stateNode,jn&&typeof jn.onCommitFiberRoot=="function")try{jn.onCommitFiberRoot(vc,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Ut.T,s=ie.p,ie.p=2,Ut.T=null;try{for(var r=e.onRecoverableError,a=0;a<i.length;a++){var o=i[a];r(o.value,{componentStack:o.stack})}}finally{Ut.T=t,ie.p=s}}(Es&3)!==0&&Kh(),Qi(e),s=e.pendingLanes,(n&261930)!==0&&(s&42)!==0?e===Fm?ec++:(ec=0,Fm=e):ec=0,Ac(0,!1)}}function EM(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,bc(t)))}function Kh(){return MM(),bM(),TM(),AM()}function AM(){if(Ke!==5)return!1;var e=dr,t=Bm;Bm=0;var n=eg(Es),i=Ut.T,s=ie.p;try{ie.p=32>n?32:n,Ut.T=null,n=zm,zm=null;var r=dr,a=Es;if(Ke=0,Do=dr=null,Es=0,(ne&6)!==0)throw Error(Z(331));var o=ne;if(ne|=4,uM(r.current),oM(r,r.current,a,n),ne=o,Ac(0,!1),jn&&typeof jn.onPostCommitFiberRoot=="function")try{jn.onPostCommitFiberRoot(vc,r)}catch{}return!0}finally{ie.p=s,Ut.T=i,EM(e,t)}}function Py(e,t,n){t=Mi(n,t),t=Lm(e.stateNode,t,2),e=hr(e,t,2),e!==null&&(xc(e,2),Qi(e))}function oe(e,t,n){if(e.tag===3)Py(e,e,n);else for(;t!==null;){if(t.tag===3){Py(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(fr===null||!fr.has(i))){e=Mi(n,e),n=HS(2),i=hr(t,n,2),i!==null&&(GS(n,i,t,e),xc(i,2),Qi(i));break}}t=t.return}}function Kp(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new cw;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(Pg=!0,s.add(n),e=pw.bind(null,e,t,n),t.then(e,e))}function pw(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,me===e&&(Zt&n)===n&&(Be===4||Be===3&&(Zt&62914560)===Zt&&300>Qn()-Yh?(ne&2)===0&&Uo(e,0):Bg|=n,Ro===Zt&&(Ro=0)),Qi(e)}function wM(e,t){t===0&&(t=vx()),e=ga(e,t),e!==null&&(xc(e,t),Qi(e))}function mw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),wM(e,n)}function gw(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(Z(314))}i!==null&&i.delete(t),wM(e,n)}function _w(e,t){return $m(e,t)}var wh=null,no=null,Vm=!1,Ch=!1,Qp=!1,or=0;function Qi(e){e!==no&&e.next===null&&(no===null?wh=no=e:no=no.next=e),Ch=!0,Vm||(Vm=!0,yw())}function Ac(e,t){if(!Qp&&Ch){Qp=!0;do for(var n=!1,i=wh;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var r=0;else{var a=i.suspendedLanes,o=i.pingedLanes;r=(1<<31-$n(42|e)+1)-1,r&=s&~(a&~o),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,By(i,r))}else r=Zt,r=Ph(i,i===me?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(r&3)===0||yc(i,r)||(n=!0,By(i,r));i=i.next}while(n);Qp=!1}}function vw(){CM()}function CM(){Ch=Vm=!1;var e=0;or!==0&&ww()&&(e=or);for(var t=Qn(),n=null,i=wh;i!==null;){var s=i.next,r=RM(i,t);r===0?(i.next=null,n===null?wh=s:n.next=s,s===null&&(no=n)):(n=i,(e!==0||(r&3)!==0)&&(Ch=!0)),i=s}Ke!==0&&Ke!==5||Ac(e,!1),or!==0&&(or=0)}function RM(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var a=31-$n(r),o=1<<a,l=s[a];l===-1?((o&n)===0||(o&i)!==0)&&(s[a]=WE(o,t)):l<=t&&(e.expiredLanes|=o),r&=~o}if(t=me,n=Zt,n=Ph(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ae===2||ae===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Ap(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||yc(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Ap(i),eg(n)){case 2:case 8:n=gx;break;case 32:n=uh;break;case 268435456:n=_x;break;default:n=uh}return i=DM.bind(null,e),n=$m(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Ap(i),e.callbackPriority=2,e.callbackNode=null,2}function DM(e,t){if(Ke!==0&&Ke!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Kh()&&e.callbackNode!==n)return null;var i=Zt;return i=Ph(e,e===me?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(mM(e,i,t),RM(e,Qn()),e.callbackNode!=null&&e.callbackNode===n?DM.bind(null,e):null)}function By(e,t){if(Kh())return null;mM(e,t,!0)}function yw(){Rw(function(){(ne&6)!==0?$m(mx,vw):CM()})}function Fg(){if(or===0){var e=Ao;e===0&&(e=Ru,Ru<<=1,(Ru&261888)===0&&(Ru=256)),or=e}return or}function zy(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Yu(""+e)}function Fy(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function xw(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var r=zy((s[In]||null).action),a=i.submitter;a&&(t=(t=a[In]||null)?zy(t.formAction):a.getAttribute("formAction"),t!==null&&(r=t,a=null));var o=new Bh("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(or!==0){var l=a?Fy(s,a):new FormData(s);Dm(n,{pending:!0,data:l,method:s.method,action:r},null,l)}}else typeof r=="function"&&(o.preventDefault(),l=a?Fy(s,a):new FormData(s),Dm(n,{pending:!0,data:l,method:s.method,action:r},r,l))},currentTarget:s}]})}}for(Hu=0;Hu<vm.length;Hu++)Gu=vm[Hu],Vy=Gu.toLowerCase(),Hy=Gu[0].toUpperCase()+Gu.slice(1),Bi(Vy,"on"+Hy);var Gu,Vy,Hy,Hu;Bi(Gx,"onAnimationEnd");Bi(kx,"onAnimationIteration");Bi(Xx,"onAnimationStart");Bi("dblclick","onDoubleClick");Bi("focusin","onFocus");Bi("focusout","onBlur");Bi(zA,"onTransitionRun");Bi(FA,"onTransitionStart");Bi(VA,"onTransitionCancel");Bi(Wx,"onTransitionEnd");To("onMouseEnter",["mouseout","mouseover"]);To("onMouseLeave",["mouseout","mouseover"]);To("onPointerEnter",["pointerout","pointerover"]);To("onPointerLeave",["pointerout","pointerover"]);da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));da("onBeforeInput",["compositionend","keypress","textInput","paste"]);da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fc));function UM(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var r=void 0;if(t)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==r&&s.isPropagationStopped())break t;r=o,s.currentTarget=c;try{r(s)}catch(u){fh(u)}s.currentTarget=null,r=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==r&&s.isPropagationStopped())break t;r=o,s.currentTarget=c;try{r(s)}catch(u){fh(u)}s.currentTarget=null,r=l}}}}function Xt(e,t){var n=t[um];n===void 0&&(n=t[um]=new Set);var i=e+"__bubble";n.has(i)||(LM(t,e,2,!1),n.add(i))}function jp(e,t,n){var i=0;t&&(i|=4),LM(n,e,i,t)}var ku="_reactListening"+Math.random().toString(36).slice(2);function Vg(e){if(!e[ku]){e[ku]=!0,bx.forEach(function(n){n!=="selectionchange"&&(Sw.has(n)||jp(n,!1,e),jp(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ku]||(t[ku]=!0,jp("selectionchange",!1,t))}}function LM(e,t,n,i){switch(WM(t)){case 2:var s=Jw;break;case 8:s=Kw;break;default:s=Xg}n=s.bind(null,t,n,e),s=void 0,!mm||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function $p(e,t,n,i,s){var r=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===s)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&a.stateNode.containerInfo===s)return;a=a.return}for(;o!==null;){if(a=ro(o),a===null)return;if(l=a.tag,l===5||l===6||l===26||l===27){i=r=a;continue t}o=o.parentNode}}i=i.return}Ux(function(){var c=r,u=sg(n),f=[];t:{var h=qx.get(e);if(h!==void 0){var p=Bh,_=e;switch(e){case"keypress":if(Ju(n)===0)break t;case"keydown":case"keyup":p=gA;break;case"focusin":_="focus",p=Up;break;case"focusout":_="blur",p=Up;break;case"beforeblur":case"afterblur":p=Up;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Zv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=sA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=yA;break;case Gx:case kx:case Xx:p=oA;break;case Wx:p=SA;break;case"scroll":case"scrollend":p=nA;break;case"wheel":p=bA;break;case"copy":case"cut":case"paste":p=cA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Kv;break;case"toggle":case"beforetoggle":p=EA}var g=(t&4)!==0,m=!g&&(e==="scroll"||e==="scrollend"),d=g?h!==null?h+"Capture":null:h;g=[];for(var v=c,y;v!==null;){var x=v;if(y=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||y===null||d===null||(x=sc(v,d),x!=null&&g.push(dc(v,x,y))),m)break;v=v.return}0<g.length&&(h=new p(h,_,null,n,u),f.push({event:h,listeners:g}))}}if((t&7)===0){t:{if(h=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",h&&n!==pm&&(_=n.relatedTarget||n.fromElement)&&(ro(_)||_[No]))break t;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?ro(_):null,_!==null&&(m=_c(_),g=_.tag,_!==m||g!==5&&g!==27&&g!==6)&&(_=null)):(p=null,_=c),p!==_)){if(g=Zv,x="onMouseLeave",d="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(g=Kv,x="onPointerLeave",d="onPointerEnter",v="pointer"),m=p==null?h:Hl(p),y=_==null?h:Hl(_),h=new g(x,v+"leave",p,n,u),h.target=m,h.relatedTarget=y,x=null,ro(u)===c&&(g=new g(d,v+"enter",_,n,u),g.target=y,g.relatedTarget=m,x=g),m=x,p&&_)e:{for(g=Mw,d=p,v=_,y=0,x=d;x;x=g(x))y++;x=0;for(var T=v;T;T=g(T))x++;for(;0<y-x;)d=g(d),y--;for(;0<x-y;)v=g(v),x--;for(;y--;){if(d===v||v!==null&&d===v.alternate){g=d;break e}d=g(d),v=g(v)}g=null}else g=null;p!==null&&Gy(f,h,p,g,!1),_!==null&&m!==null&&Gy(f,m,_,g,!0)}}t:{if(h=c?Hl(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var w=ty;else if($v(h))if(Bx)w=IA;else{w=OA;var E=LA}else p=h.nodeName,!p||p.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?c&&ig(c.elementType)&&(w=ty):w=NA;if(w&&(w=w(e,c))){Px(f,w,n,u);break t}E&&E(e,h,c),e==="focusout"&&c&&h.type==="number"&&c.memoizedProps.value!=null&&dm(h,"number",h.value)}switch(E=c?Hl(c):window,e){case"focusin":($v(E)||E.contentEditable==="true")&&(lo=E,gm=c,ql=null);break;case"focusout":ql=gm=lo=null;break;case"mousedown":_m=!0;break;case"contextmenu":case"mouseup":case"dragend":_m=!1,sy(f,n,u);break;case"selectionchange":if(BA)break;case"keydown":case"keyup":sy(f,n,u)}var C;if(og)t:{switch(e){case"compositionstart":var S="onCompositionStart";break t;case"compositionend":S="onCompositionEnd";break t;case"compositionupdate":S="onCompositionUpdate";break t}S=void 0}else oo?Nx(e,n)&&(S="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(Ox&&n.locale!=="ko"&&(oo||S!=="onCompositionStart"?S==="onCompositionEnd"&&oo&&(C=Lx()):(sr=u,rg="value"in sr?sr.value:sr.textContent,oo=!0)),E=Rh(c,S),0<E.length&&(S=new Jv(S,e,null,n,u),f.push({event:S,listeners:E}),C?S.data=C:(C=Ix(n),C!==null&&(S.data=C)))),(C=wA?CA(e,n):RA(e,n))&&(S=Rh(c,"onBeforeInput"),0<S.length&&(E=new Jv("onBeforeInput","beforeinput",null,n,u),f.push({event:E,listeners:S}),E.data=C)),xw(f,e,c,n,u)}UM(f,t)})}function dc(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Rh(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,r=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||r===null||(s=sc(e,n),s!=null&&i.unshift(dc(e,s,r)),s=sc(e,t),s!=null&&i.push(dc(e,s,r))),e.tag===3)return i;e=e.return}return[]}function Mw(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Gy(e,t,n,i,s){for(var r=t._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=sc(n,r),c!=null&&a.unshift(dc(n,c,l))):s||(c=sc(n,r),c!=null&&a.push(dc(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var bw=/\r\n?/g,Tw=/\u0000|\uFFFD/g;function ky(e){return(typeof e=="string"?e:""+e).replace(bw,`
`).replace(Tw,"")}function OM(e,t){return t=ky(t),ky(e)===t}function ue(e,t,n,i,s,r){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Eo(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Eo(e,""+i);break;case"className":Lu(e,"class",i);break;case"tabIndex":Lu(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Lu(e,n,i);break;case"style":Dx(e,i,r);break;case"data":if(t!=="object"){Lu(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Yu(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&ue(e,t,"name",s.name,s,null),ue(e,t,"formEncType",s.formEncType,s,null),ue(e,t,"formMethod",s.formMethod,s,null),ue(e,t,"formTarget",s.formTarget,s,null)):(ue(e,t,"encType",s.encType,s,null),ue(e,t,"method",s.method,s,null),ue(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Yu(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Ss);break;case"onScroll":i!=null&&Xt("scroll",e);break;case"onScrollEnd":i!=null&&Xt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Z(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(Z(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Yu(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Xt("beforetoggle",e),Xt("toggle",e),qu(e,"popover",i);break;case"xlinkActuate":ds(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":ds(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":ds(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":ds(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":ds(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":ds(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":ds(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":ds(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":ds(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":qu(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=tA.get(n)||n,qu(e,n,i))}}function Hm(e,t,n,i,s,r){switch(n){case"style":Dx(e,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Z(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(Z(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Eo(e,i):(typeof i=="number"||typeof i=="bigint")&&Eo(e,""+i);break;case"onScroll":i!=null&&Xt("scroll",e);break;case"onScrollEnd":i!=null&&Xt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Ss);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Tx.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),r=e[In]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,s),typeof i=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,s);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):qu(e,n,i)}}}function hn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Xt("error",e),Xt("load",e);var i=!1,s=!1,r;for(r in n)if(n.hasOwnProperty(r)){var a=n[r];if(a!=null)switch(r){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(Z(137,t));default:ue(e,t,r,a,n,null)}}s&&ue(e,t,"srcSet",n.srcSet,n,null),i&&ue(e,t,"src",n.src,n,null);return;case"input":Xt("invalid",e);var o=r=a=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var u=n[i];if(u!=null)switch(i){case"name":s=u;break;case"type":a=u;break;case"checked":l=u;break;case"defaultChecked":c=u;break;case"value":r=u;break;case"defaultValue":o=u;break;case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(Z(137,t));break;default:ue(e,t,i,u,n,null)}}wx(e,r,o,l,c,a,s,!1);return;case"select":Xt("invalid",e),i=a=r=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":r=o;break;case"defaultValue":a=o;break;case"multiple":i=o;default:ue(e,t,s,o,n,null)}t=r,n=a,e.multiple=!!i,t!=null?_o(e,!!i,t,!1):n!=null&&_o(e,!!i,n,!0);return;case"textarea":Xt("invalid",e),r=s=i=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":i=o;break;case"defaultValue":s=o;break;case"children":r=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(Z(91));break;default:ue(e,t,a,o,n,null)}Rx(e,i,s,r);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":ue(e,t,l,i,n,null));return;case"dialog":Xt("beforetoggle",e),Xt("toggle",e),Xt("cancel",e),Xt("close",e);break;case"iframe":case"object":Xt("load",e);break;case"video":case"audio":for(i=0;i<fc.length;i++)Xt(fc[i],e);break;case"image":Xt("error",e),Xt("load",e);break;case"details":Xt("toggle",e);break;case"embed":case"source":case"link":Xt("error",e),Xt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(Z(137,t));default:ue(e,t,c,i,n,null)}return;default:if(ig(t)){for(u in n)n.hasOwnProperty(u)&&(i=n[u],i!==void 0&&Hm(e,t,u,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&ue(e,t,o,i,n,null))}function Ew(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,r=null,a=null,o=null,l=null,c=null,u=null;for(p in n){var f=n[p];if(n.hasOwnProperty(p)&&f!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=f;default:i.hasOwnProperty(p)||ue(e,t,p,null,i,f)}}for(var h in i){var p=i[h];if(f=n[h],i.hasOwnProperty(h)&&(p!=null||f!=null))switch(h){case"type":r=p;break;case"name":s=p;break;case"checked":c=p;break;case"defaultChecked":u=p;break;case"value":a=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(Z(137,t));break;default:p!==f&&ue(e,t,h,p,i,f)}}fm(e,a,o,l,c,u,r,s);return;case"select":p=a=o=h=null;for(r in n)if(l=n[r],n.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(r)||ue(e,t,r,null,i,l)}for(s in i)if(r=i[s],l=n[s],i.hasOwnProperty(s)&&(r!=null||l!=null))switch(s){case"value":h=r;break;case"defaultValue":o=r;break;case"multiple":a=r;default:r!==l&&ue(e,t,s,r,i,l)}t=o,n=a,i=p,h!=null?_o(e,!!n,h,!1):!!i!=!!n&&(t!=null?_o(e,!!n,t,!0):_o(e,!!n,n?[]:"",!1));return;case"textarea":p=h=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ue(e,t,o,null,i,s)}for(a in i)if(s=i[a],r=n[a],i.hasOwnProperty(a)&&(s!=null||r!=null))switch(a){case"value":h=s;break;case"defaultValue":p=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(Z(91));break;default:s!==r&&ue(e,t,a,s,i,r)}Cx(e,h,p);return;case"option":for(var _ in n)h=n[_],n.hasOwnProperty(_)&&h!=null&&!i.hasOwnProperty(_)&&(_==="selected"?e.selected=!1:ue(e,t,_,null,i,h));for(l in i)h=i[l],p=n[l],i.hasOwnProperty(l)&&h!==p&&(h!=null||p!=null)&&(l==="selected"?e.selected=h&&typeof h!="function"&&typeof h!="symbol":ue(e,t,l,h,i,p));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var g in n)h=n[g],n.hasOwnProperty(g)&&h!=null&&!i.hasOwnProperty(g)&&ue(e,t,g,null,i,h);for(c in i)if(h=i[c],p=n[c],i.hasOwnProperty(c)&&h!==p&&(h!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(Z(137,t));break;default:ue(e,t,c,h,i,p)}return;default:if(ig(t)){for(var m in n)h=n[m],n.hasOwnProperty(m)&&h!==void 0&&!i.hasOwnProperty(m)&&Hm(e,t,m,void 0,i,h);for(u in i)h=i[u],p=n[u],!i.hasOwnProperty(u)||h===p||h===void 0&&p===void 0||Hm(e,t,u,h,i,p);return}}for(var d in n)h=n[d],n.hasOwnProperty(d)&&h!=null&&!i.hasOwnProperty(d)&&ue(e,t,d,null,i,h);for(f in i)h=i[f],p=n[f],!i.hasOwnProperty(f)||h===p||h==null&&p==null||ue(e,t,f,h,i,p)}function Xy(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Aw(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],r=s.transferSize,a=s.initiatorType,o=s.duration;if(r&&o&&Xy(a)){for(a=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var u=l.transferSize,f=l.initiatorType;u&&Xy(f)&&(l=l.responseEnd,a+=u*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(r+a)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Gm=null,km=null;function Dh(e){return e.nodeType===9?e:e.ownerDocument}function Wy(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function NM(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Xm(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var tm=null;function ww(){var e=window.event;return e&&e.type==="popstate"?e===tm?!1:(tm=e,!0):(tm=null,!1)}var IM=typeof setTimeout=="function"?setTimeout:void 0,Cw=typeof clearTimeout=="function"?clearTimeout:void 0,qy=typeof Promise=="function"?Promise:void 0,Rw=typeof queueMicrotask=="function"?queueMicrotask:typeof qy<"u"?function(e){return qy.resolve(null).then(e).catch(Dw)}:IM;function Dw(e){setTimeout(function(){throw e})}function Mr(e){return e==="head"}function Yy(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),Oo(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")nc(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,nc(n);for(var r=n.firstChild;r;){var a=r.nextSibling,o=r.nodeName;r[Sc]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=a}}else n==="body"&&nc(e.ownerDocument.body);n=s}while(n);Oo(t)}function Zy(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Wm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Wm(n),ng(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Uw(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Sc])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Ei(e.nextSibling),e===null)break}return null}function Lw(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ei(e.nextSibling),e===null))return null;return e}function PM(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ei(e.nextSibling),e===null))return null;return e}function qm(e){return e.data==="$?"||e.data==="$~"}function Ym(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ow(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Ei(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Zm=null;function Jy(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Ei(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Ky(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function BM(e,t,n){switch(t=Dh(n),e){case"html":if(e=t.documentElement,!e)throw Error(Z(452));return e;case"head":if(e=t.head,!e)throw Error(Z(453));return e;case"body":if(e=t.body,!e)throw Error(Z(454));return e;default:throw Error(Z(451))}}function nc(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ng(e)}var Ai=new Map,Qy=new Set;function Uh(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Us=ie.d;ie.d={f:Nw,r:Iw,D:Pw,C:Bw,L:zw,m:Fw,X:Hw,S:Vw,M:Gw};function Nw(){var e=Us.f(),t=Zh();return e||t}function Iw(e){var t=Io(e);t!==null&&t.tag===5&&t.type==="form"?DS(t):Us.r(e)}var Fo=typeof document>"u"?null:document;function zM(e,t,n){var i=Fo;if(i&&typeof t=="string"&&t){var s=Si(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),Qy.has(s)||(Qy.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),hn(t,"link",e),sn(t),i.head.appendChild(t)))}}function Pw(e){Us.D(e),zM("dns-prefetch",e,null)}function Bw(e,t){Us.C(e,t),zM("preconnect",e,t)}function zw(e,t,n){Us.L(e,t,n);var i=Fo;if(i&&e&&t){var s='link[rel="preload"][as="'+Si(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+Si(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+Si(n.imageSizes)+'"]')):s+='[href="'+Si(e)+'"]';var r=s;switch(t){case"style":r=Lo(e);break;case"script":r=Vo(e)}Ai.has(r)||(e=Te({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Ai.set(r,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(wc(r))||t==="script"&&i.querySelector(Cc(r))||(t=i.createElement("link"),hn(t,"link",e),sn(t),i.head.appendChild(t)))}}function Fw(e,t){Us.m(e,t);var n=Fo;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+Si(i)+'"][href="'+Si(e)+'"]',r=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Vo(e)}if(!Ai.has(r)&&(e=Te({rel:"modulepreload",href:e},t),Ai.set(r,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Cc(r)))return}i=n.createElement("link"),hn(i,"link",e),sn(i),n.head.appendChild(i)}}}function Vw(e,t,n){Us.S(e,t,n);var i=Fo;if(i&&e){var s=go(i).hoistableStyles,r=Lo(e);t=t||"default";var a=s.get(r);if(!a){var o={loading:0,preload:null};if(a=i.querySelector(wc(r)))o.loading=5;else{e=Te({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Ai.get(r))&&Hg(e,n);var l=a=i.createElement("link");sn(l),hn(l,"link",e),l._p=new Promise(function(c,u){l.onload=c,l.onerror=u}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,ih(a,t,i)}a={type:"stylesheet",instance:a,count:1,state:o},s.set(r,a)}}}function Hw(e,t){Us.X(e,t);var n=Fo;if(n&&e){var i=go(n).hoistableScripts,s=Vo(e),r=i.get(s);r||(r=n.querySelector(Cc(s)),r||(e=Te({src:e,async:!0},t),(t=Ai.get(s))&&Gg(e,t),r=n.createElement("script"),sn(r),hn(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(s,r))}}function Gw(e,t){Us.M(e,t);var n=Fo;if(n&&e){var i=go(n).hoistableScripts,s=Vo(e),r=i.get(s);r||(r=n.querySelector(Cc(s)),r||(e=Te({src:e,async:!0,type:"module"},t),(t=Ai.get(s))&&Gg(e,t),r=n.createElement("script"),sn(r),hn(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(s,r))}}function jy(e,t,n,i){var s=(s=lr.current)?Uh(s):null;if(!s)throw Error(Z(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Lo(n.href),n=go(s).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Lo(n.href);var r=go(s).hoistableStyles,a=r.get(e);if(a||(s=s.ownerDocument||s,a={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,a),(r=s.querySelector(wc(e)))&&!r._p&&(a.instance=r,a.state.loading=5),Ai.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ai.set(e,n),r||kw(s,e,n,a.state))),t&&i===null)throw Error(Z(528,""));return a}if(t&&i!==null)throw Error(Z(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Vo(n),n=go(s).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(Z(444,e))}}function Lo(e){return'href="'+Si(e)+'"'}function wc(e){return'link[rel="stylesheet"]['+e+"]"}function FM(e){return Te({},e,{"data-precedence":e.precedence,precedence:null})}function kw(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),hn(t,"link",n),sn(t),e.head.appendChild(t))}function Vo(e){return'[src="'+Si(e)+'"]'}function Cc(e){return"script[async]"+e}function $y(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Si(n.href)+'"]');if(i)return t.instance=i,sn(i),i;var s=Te({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),sn(i),hn(i,"style",s),ih(i,n.precedence,e),t.instance=i;case"stylesheet":s=Lo(n.href);var r=e.querySelector(wc(s));if(r)return t.state.loading|=4,t.instance=r,sn(r),r;i=FM(n),(s=Ai.get(s))&&Hg(i,s),r=(e.ownerDocument||e).createElement("link"),sn(r);var a=r;return a._p=new Promise(function(o,l){a.onload=o,a.onerror=l}),hn(r,"link",i),t.state.loading|=4,ih(r,n.precedence,e),t.instance=r;case"script":return r=Vo(n.src),(s=e.querySelector(Cc(r)))?(t.instance=s,sn(s),s):(i=n,(s=Ai.get(r))&&(i=Te({},n),Gg(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),sn(s),hn(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(Z(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,ih(i,n.precedence,e));return t.instance}function ih(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,r=s,a=0;a<i.length;a++){var o=i[a];if(o.dataset.precedence===t)r=o;else if(r!==s)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Hg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Gg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var sh=null;function tx(e,t,n){if(sh===null){var i=new Map,s=sh=new Map;s.set(n,i)}else s=sh,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var r=n[s];if(!(r[Sc]||r[ln]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var a=r.getAttribute(t)||"";a=e+a;var o=i.get(a);o?o.push(r):i.set(a,[r])}}return i}function ex(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Xw(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function VM(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Ww(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=Lo(i.href),r=t.querySelector(wc(s));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Lh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=r,sn(r);return}r=t.ownerDocument||t,i=FM(i),(s=Ai.get(s))&&Hg(i,s),r=r.createElement("link"),sn(r);var a=r;a._p=new Promise(function(o,l){a.onload=o,a.onerror=l}),hn(r,"link",i),n.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Lh.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var em=0;function qw(e,t){return e.stylesheets&&e.count===0&&rh(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&rh(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&em===0&&(em=62500*Aw());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&rh(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>em?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function Lh(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)rh(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Oh=null;function rh(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Oh=new Map,t.forEach(Yw,e),Oh=null,Lh.call(e))}function Yw(e,t){if(!(t.state.loading&4)){var n=Oh.get(e);if(n)var i=n.get(null);else{n=new Map,Oh.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<s.length;r++){var a=s[r];(a.nodeName==="LINK"||a.getAttribute("media")!=="not all")&&(n.set(a.dataset.precedence,a),i=a)}i&&n.set(null,i)}s=t.instance,a=s.getAttribute("data-precedence"),r=n.get(a)||i,r===i&&n.set(null,s),n.set(a,s),this.count++,i=Lh.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),r?r.parentNode.insertBefore(s,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var pc={$$typeof:xs,Provider:null,Consumer:null,_currentValue:ia,_currentValue2:ia,_threadCount:0};function Zw(e,t,n,i,s,r,a,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wp(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wp(0),this.hiddenUpdates=wp(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=r,this.onRecoverableError=a,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function HM(e,t,n,i,s,r,a,o,l,c,u,f){return e=new Zw(e,t,n,a,l,c,u,f,o),t=1,r===!0&&(t|=24),r=Jn(3,null,null,t),e.current=r,r.stateNode=e,t=pg(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:i,isDehydrated:n,cache:t},_g(r),e}function GM(e){return e?(e=ho,e):ho}function kM(e,t,n,i,s,r){s=GM(s),i.context===null?i.context=s:i.pendingContext=s,i=ur(t),i.payload={element:n},r=r===void 0?null:r,r!==null&&(i.callback=r),n=hr(e,i,t),n!==null&&(Nn(n,e,t),Zl(n,e,t))}function nx(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function kg(e,t){nx(e,t),(e=e.alternate)&&nx(e,t)}function XM(e){if(e.tag===13||e.tag===31){var t=ga(e,67108864);t!==null&&Nn(t,e,67108864),kg(e,67108864)}}function ix(e){if(e.tag===13||e.tag===31){var t=ti();t=tg(t);var n=ga(e,t);n!==null&&Nn(n,e,t),kg(e,t)}}var Nh=!0;function Jw(e,t,n,i){var s=Ut.T;Ut.T=null;var r=ie.p;try{ie.p=2,Xg(e,t,n,i)}finally{ie.p=r,Ut.T=s}}function Kw(e,t,n,i){var s=Ut.T;Ut.T=null;var r=ie.p;try{ie.p=8,Xg(e,t,n,i)}finally{ie.p=r,Ut.T=s}}function Xg(e,t,n,i){if(Nh){var s=Jm(i);if(s===null)$p(e,t,i,Ih,n),sx(e,i);else if(jw(s,e,t,n,i))i.stopPropagation();else if(sx(e,i),t&4&&-1<Qw.indexOf(e)){for(;s!==null;){var r=Io(s);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var a=ta(r.pendingLanes);if(a!==0){var o=r;for(o.pendingLanes|=2,o.entangledLanes|=2;a;){var l=1<<31-$n(a);o.entanglements[1]|=l,a&=~l}Qi(r),(ne&6)===0&&(Th=Qn()+500,Ac(0,!1))}}break;case 31:case 13:o=ga(r,2),o!==null&&Nn(o,r,2),Zh(),kg(r,2)}if(r=Jm(i),r===null&&$p(e,t,i,Ih,n),r===s)break;s=r}s!==null&&i.stopPropagation()}else $p(e,t,i,null,n)}}function Jm(e){return e=sg(e),Wg(e)}var Ih=null;function Wg(e){if(Ih=null,e=ro(e),e!==null){var t=_c(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=ux(t),e!==null)return e;e=null}else if(n===31){if(e=hx(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ih=e,null}function WM(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(zE()){case mx:return 2;case gx:return 8;case uh:case FE:return 32;case _x:return 268435456;default:return 32}default:return 32}}var Km=!1,pr=null,mr=null,gr=null,mc=new Map,gc=new Map,nr=[],Qw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sx(e,t){switch(e){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":mc.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":gc.delete(t.pointerId)}}function Bl(e,t,n,i,s,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[s]},t!==null&&(t=Io(t),t!==null&&XM(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function jw(e,t,n,i,s){switch(t){case"focusin":return pr=Bl(pr,e,t,n,i,s),!0;case"dragenter":return mr=Bl(mr,e,t,n,i,s),!0;case"mouseover":return gr=Bl(gr,e,t,n,i,s),!0;case"pointerover":var r=s.pointerId;return mc.set(r,Bl(mc.get(r)||null,e,t,n,i,s)),!0;case"gotpointercapture":return r=s.pointerId,gc.set(r,Bl(gc.get(r)||null,e,t,n,i,s)),!0}return!1}function qM(e){var t=ro(e.target);if(t!==null){var n=_c(t);if(n!==null){if(t=n.tag,t===13){if(t=ux(n),t!==null){e.blockedOn=t,Hv(e.priority,function(){ix(n)});return}}else if(t===31){if(t=hx(n),t!==null){e.blockedOn=t,Hv(e.priority,function(){ix(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ah(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Jm(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);pm=i,n.target.dispatchEvent(i),pm=null}else return t=Io(n),t!==null&&XM(t),e.blockedOn=n,!1;t.shift()}return!0}function rx(e,t,n){ah(e)&&n.delete(t)}function $w(){Km=!1,pr!==null&&ah(pr)&&(pr=null),mr!==null&&ah(mr)&&(mr=null),gr!==null&&ah(gr)&&(gr=null),mc.forEach(rx),gc.forEach(rx)}function Xu(e,t){e.blockedOn===t&&(e.blockedOn=null,Km||(Km=!0,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,$w)))}var Wu=null;function ax(e){Wu!==e&&(Wu=e,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,function(){Wu===e&&(Wu=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(Wg(i||n)===null)continue;break}var r=Io(n);r!==null&&(e.splice(t,3),t-=3,Dm(r,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function Oo(e){function t(l){return Xu(l,e)}pr!==null&&Xu(pr,e),mr!==null&&Xu(mr,e),gr!==null&&Xu(gr,e),mc.forEach(t),gc.forEach(t);for(var n=0;n<nr.length;n++){var i=nr[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<nr.length&&(n=nr[0],n.blockedOn===null);)qM(n),n.blockedOn===null&&nr.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],r=n[i+1],a=s[In]||null;if(typeof r=="function")a||ax(n);else if(a){var o=null;if(r&&r.hasAttribute("formAction")){if(s=r,a=r[In]||null)o=a.formAction;else if(Wg(s)!==null)continue}else o=a.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),ax(n)}}}function YM(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(a){return s=a})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function qg(e){this._internalRoot=e}Qh.prototype.render=qg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Z(409));var n=t.current,i=ti();kM(n,i,e,t,null,null)};Qh.prototype.unmount=qg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;kM(e.current,2,null,e,null,null),Zh(),t[No]=null}};function Qh(e){this._internalRoot=e}Qh.prototype.unstable_scheduleHydration=function(e){if(e){var t=Mx();e={blockedOn:null,target:e,priority:t};for(var n=0;n<nr.length&&t!==0&&t<nr[n].priority;n++);nr.splice(n,0,e),n===0&&qM(e)}};var ox=lx.version;if(ox!=="19.2.0")throw Error(Z(527,ox,"19.2.0"));ie.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Z(188)):(e=Object.keys(e).join(","),Error(Z(268,e)));return e=UE(t),e=e!==null?fx(e):null,e=e===null?null:e.stateNode,e};var tC={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:Ut,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(zl=__REACT_DEVTOOLS_GLOBAL_HOOK__,!zl.isDisabled&&zl.supportsFiber))try{vc=zl.inject(tC),jn=zl}catch{}var zl;jh.createRoot=function(e,t){if(!cx(e))throw Error(Z(299));var n=!1,i="",s=zS,r=FS,a=VS;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=HM(e,1,!1,null,null,n,i,null,s,r,a,YM),e[No]=t.current,Vg(e),new qg(t)};jh.hydrateRoot=function(e,t,n){if(!cx(e))throw Error(Z(299));var i=!1,s="",r=zS,a=FS,o=VS,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(a=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=HM(e,1,!0,t,n??null,i,s,l,r,a,o,YM),t.context=GM(null),n=t.current,i=ti(),i=tg(i),s=ur(i),s.callback=null,hr(n,s,i),n=i,t.current.lanes=n,xc(t,n),Qi(t),e[No]=t.current,Vg(e),new Qh(t)};jh.version="19.2.0"});var QM=Xi((MO,KM)=>{"use strict";function JM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(JM)}catch(e){console.error(e)}}JM(),KM.exports=ZM()});var GT=Xi(np=>{"use strict";var qL=Symbol.for("react.transitional.element"),YL=Symbol.for("react.fragment");function HT(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var s in t)s!=="key"&&(n[s]=t[s])}else n=t;return t=n.ref,{$$typeof:qL,type:e,key:i,ref:t!==void 0?t:null,props:n}}np.Fragment=YL;np.jsx=HT;np.jsxs=HT});var yu=Xi((_B,kT)=>{"use strict";kT.exports=GT()});var Zr=Qr(wl()),JT=Qr(QM());function Ls(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a1(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var Vn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Nc={duration:.5,overwrite:!1,delay:0},u0,fn,Re,Ci=1e8,_e=1/Ci,t0=Math.PI*2,eC=t0/4,nC=0,o1=Math.sqrt,iC=Math.cos,sC=Math.sin,je=function(t){return typeof t=="string"},ze=function(t){return typeof t=="function"},Ns=function(t){return typeof t=="number"},cf=function(t){return typeof t>"u"},ts=function(t){return typeof t=="object"},Fn=function(t){return t!==!1},h0=function(){return typeof window<"u"},$h=function(t){return ze(t)||je(t)},l1=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},gn=Array.isArray,rC=/random\([^)]+\)/g,aC=/,\s*/g,jM=/(?:-?\.?\d|\.)+/gi,f0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Sa=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Yg=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,d0=/[+-]=-?[.\d]+/,oC=/[^,'"\[\]\s]+/gi,lC=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Oe,ji,e0,p0,si={},sf={},c1,u1=function(t){return(sf=Go(t,si))&&_n},uf=function(t,n){return console.warn("Invalid property",t,"set to",n,"Missing plugin? gsap.registerPlugin()")},Ic=function(t,n){return!n&&console.warn(t)},h1=function(t,n){return t&&(si[t]=n)&&sf&&(sf[t]=n)||si},Pc=function(){return 0},cC={suppressEvents:!0,isStart:!0,kill:!1},tf={suppressEvents:!0,kill:!1},uC={suppressEvents:!0},m0={},Tr=[],n0={},f1,Bn={},Zg={},$M=30,ef=[],g0="",_0=function(t){var n=t[0],i,s;if(ts(n)||ze(n)||(t=[t]),!(i=(n._gsap||{}).harness)){for(s=ef.length;s--&&!ef[s].targetTest(n););i=ef[s]}for(s=t.length;s--;)t[s]&&(t[s]._gsap||(t[s]._gsap=new S0(t[s],i)))||t.splice(s,1);return t},Er=function(t){return t._gsap||_0(Ri(t))[0]._gsap},v0=function(t,n,i){return(i=t[n])&&ze(i)?t[n]():cf(i)&&t.getAttribute&&t.getAttribute(n)||i},En=function(t,n){return(t=t.split(",")).forEach(n)||t},Fe=function(t){return Math.round(t*1e5)/1e5||0},Le=function(t){return Math.round(t*1e7)/1e7||0},Ma=function(t,n){var i=n.charAt(0),s=parseFloat(n.substr(2));return t=parseFloat(t),i==="+"?t+s:i==="-"?t-s:i==="*"?t*s:t/s},hC=function(t,n){for(var i=n.length,s=0;t.indexOf(n[s])<0&&++s<i;);return s<i},rf=function(){var t=Tr.length,n=Tr.slice(0),i,s;for(n0={},Tr.length=0,i=0;i<t;i++)s=n[i],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},y0=function(t){return!!(t._initted||t._startAt||t.add)},d1=function(t,n,i,s){Tr.length&&!fn&&rf(),t.render(n,i,s||!!(fn&&n<0&&y0(t))),Tr.length&&!fn&&rf()},p1=function(t){var n=parseFloat(t);return(n||n===0)&&(t+"").match(oC).length<2?n:je(t)?t.trim():t},m1=function(t){return t},ri=function(t,n){for(var i in n)i in t||(t[i]=n[i]);return t},fC=function(t){return function(n,i){for(var s in i)s in n||s==="duration"&&t||s==="ease"||(n[s]=i[s])}},Go=function(t,n){for(var i in n)t[i]=n[i];return t},t1=function e(t,n){for(var i in n)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=ts(n[i])?e(t[i]||(t[i]={}),n[i]):n[i]);return t},af=function(t,n){var i={},s;for(s in t)s in n||(i[s]=t[s]);return i},Uc=function(t){var n=t.parent||Oe,i=t.keyframes?fC(gn(t.keyframes)):ri;if(Fn(t.inherit))for(;n;)i(t,n.vars.defaults),n=n.parent||n._dp;return t},dC=function(t,n){for(var i=t.length,s=i===n.length;s&&i--&&t[i]===n[i];);return i<0},g1=function(t,n,i,s,r){i===void 0&&(i="_first"),s===void 0&&(s="_last");var a=t[s],o;if(r)for(o=n[r];a&&a[r]>o;)a=a._prev;return a?(n._next=a._next,a._next=n):(n._next=t[i],t[i]=n),n._next?n._next._prev=n:t[s]=n,n._prev=a,n.parent=n._dp=t,n},hf=function(t,n,i,s){i===void 0&&(i="_first"),s===void 0&&(s="_last");var r=n._prev,a=n._next;r?r._next=a:t[i]===n&&(t[i]=a),a?a._prev=r:t[s]===n&&(t[s]=r),n._next=n._prev=n.parent=null},Ar=function(t,n){t.parent&&(!n||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},va=function(t,n){if(t&&(!n||n._end>t._dur||n._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},pC=function(t){for(var n=t.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return t},i0=function(t,n,i,s){return t._startAt&&(fn?t._startAt.revert(tf):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(n,!0,s))},mC=function e(t){return!t||t._ts&&e(t.parent)},e1=function(t){return t._repeat?ko(t._tTime,t=t.duration()+t._rDelay)*t:0},ko=function(t,n){var i=Math.floor(t=Le(t/n));return t&&i===t?i-1:i},of=function(t,n){return(t-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},ff=function(t){return t._end=Le(t._start+(t._tDur/Math.abs(t._ts||t._rts||_e)||0))},df=function(t,n){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=Le(i._time-(t._ts>0?n/t._ts:((t._dirty?t.totalDuration():t._tDur)-n)/-t._ts)),ff(t),i._dirty||va(i,t)),t},_1=function(t,n){var i;if((n._time||!n._dur&&n._initted||n._start<t._time&&(n._dur||!n.add))&&(i=of(t.rawTime(),n),(!n._dur||Fc(0,n.totalDuration(),i)-n._tTime>_e)&&n.render(i,!0)),va(t,n)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-_e}},$i=function(t,n,i,s){return n.parent&&Ar(n),n._start=Le((Ns(i)?i:i||t!==Oe?wi(t,i,n):t._time)+n._delay),n._end=Le(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),g1(t,n,"_first","_last",t._sort?"_start":0),s0(n)||(t._recent=n),s||_1(t,n),t._ts<0&&df(t,t._tTime),t},v1=function(t,n){return(si.ScrollTrigger||uf("scrollTrigger",n))&&si.ScrollTrigger.create(n,t)},y1=function(t,n,i,s,r){if(T0(t,n,r),!t._initted)return 1;if(!i&&t._pt&&!fn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&f1!==zn.frame)return Tr.push(t),t._lazy=[r,s],1},gC=function e(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||e(n))},s0=function(t){var n=t.data;return n==="isFromStart"||n==="isStart"},_C=function(t,n,i,s){var r=t.ratio,a=n<0||!n&&(!t._start&&gC(t)&&!(!t._initted&&s0(t))||(t._ts<0||t._dp._ts<0)&&!s0(t))?0:1,o=t._rDelay,l=0,c,u,f;if(o&&t._repeat&&(l=Fc(0,t._tDur,n),u=ko(l,o),t._yoyo&&u&1&&(a=1-a),u!==ko(t._tTime,o)&&(r=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==r||fn||s||t._zTime===_e||!n&&t._zTime){if(!t._initted&&y1(t,n,s,i,l))return;for(f=t._zTime,t._zTime=n||(i?_e:0),i||(i=n&&!f),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;n<0&&i0(t,n,i,!0),t._onUpdate&&!i&&ii(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&ii(t,"onRepeat"),(n>=t._tDur||n<0)&&t.ratio===a&&(a&&Ar(t,1),!i&&!fn&&(ii(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=n)},vC=function(t,n,i){var s;if(i>n)for(s=t._first;s&&s._start<=i;){if(s.data==="isPause"&&s._start>n)return s;s=s._next}else for(s=t._last;s&&s._start>=i;){if(s.data==="isPause"&&s._start<n)return s;s=s._prev}},Xo=function(t,n,i,s){var r=t._repeat,a=Le(n)||0,o=t._tTime/t._tDur;return o&&!s&&(t._time*=a/t._dur),t._dur=a,t._tDur=r?r<0?1e10:Le(a*(r+1)+t._rDelay*r):a,o>0&&!s&&df(t,t._tTime=t._tDur*o),t.parent&&ff(t),i||va(t.parent,t),t},n1=function(t){return t instanceof mn?va(t):Xo(t,t._dur)},yC={_start:0,endTime:Pc,totalDuration:Pc},wi=function e(t,n,i){var s=t.labels,r=t._recent||yC,a=t.duration()>=Ci?r.endTime(!1):t._dur,o,l,c;return je(n)&&(isNaN(n)||n in s)?(l=n.charAt(0),c=n.substr(-1)==="%",o=n.indexOf("="),l==="<"||l===">"?(o>=0&&(n=n.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(n.substr(1))||0)*(c?(o<0?r:i).totalDuration()/100:1)):o<0?(n in s||(s[n]=a),s[n]):(l=parseFloat(n.charAt(o-1)+n.substr(o+1)),c&&i&&(l=l/100*(gn(i)?i[0]:i).totalDuration()),o>1?e(t,n.substr(0,o-1),i)+l:a+l)):n==null?a:+n},Lc=function(t,n,i){var s=Ns(n[1]),r=(s?2:1)+(t<2?0:1),a=n[r],o,l;if(s&&(a.duration=n[1]),a.parent=i,t){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Fn(l.vars.inherit)&&l.parent;a.immediateRender=Fn(o.immediateRender),t<2?a.runBackwards=1:a.startAt=n[r-1]}return new ke(n[0],a,n[r+1])},wr=function(t,n){return t||t===0?n(t):n},Fc=function(t,n,i){return i<t?t:i>n?n:i},dn=function(t,n){return!je(t)||!(n=lC.exec(t))?"":n[1]},xC=function(t,n,i){return wr(i,function(s){return Fc(t,n,s)})},r0=[].slice,x1=function(t,n){return t&&ts(t)&&"length"in t&&(!n&&!t.length||t.length-1 in t&&ts(t[0]))&&!t.nodeType&&t!==ji},SC=function(t,n,i){return i===void 0&&(i=[]),t.forEach(function(s){var r;return je(s)&&!n||x1(s,1)?(r=i).push.apply(r,Ri(s)):i.push(s)})||i},Ri=function(t,n,i){return Re&&!n&&Re.selector?Re.selector(t):je(t)&&!i&&(e0||!Wo())?r0.call((n||p0).querySelectorAll(t),0):gn(t)?SC(t,i):x1(t)?r0.call(t,0):t?[t]:[]},a0=function(t){return t=Ri(t)[0]||Ic("Invalid scope")||{},function(n){var i=t.current||t.nativeElement||t;return Ri(n,i.querySelectorAll?i:i===t?Ic("Invalid scope")||p0.createElement("div"):t)}},S1=function(t){return t.sort(function(){return .5-Math.random()})},M1=function(t){if(ze(t))return t;var n=ts(t)?t:{each:t},i=ya(n.ease),s=n.from||0,r=parseFloat(n.base)||0,a={},o=s>0&&s<1,l=isNaN(s)||o,c=n.axis,u=s,f=s;return je(s)?u=f={center:.5,edges:.5,end:1}[s]||0:!o&&l&&(u=s[0],f=s[1]),function(h,p,_){var g=(_||n).length,m=a[g],d,v,y,x,T,w,E,C,S;if(!m){if(S=n.grid==="auto"?0:(n.grid||[1,Ci])[1],!S){for(E=-Ci;E<(E=_[S++].getBoundingClientRect().left)&&S<g;);S<g&&S--}for(m=a[g]=[],d=l?Math.min(S,g)*u-.5:s%S,v=S===Ci?0:l?g*f/S-.5:s/S|0,E=0,C=Ci,w=0;w<g;w++)y=w%S-d,x=v-(w/S|0),m[w]=T=c?Math.abs(c==="y"?x:y):o1(y*y+x*x),T>E&&(E=T),T<C&&(C=T);s==="random"&&S1(m),m.max=E-C,m.min=C,m.v=g=(parseFloat(n.amount)||parseFloat(n.each)*(S>g?g-1:c?c==="y"?g/S:S:Math.max(S,g/S))||0)*(s==="edges"?-1:1),m.b=g<0?r-g:r,m.u=dn(n.amount||n.each)||0,i=i&&g<0?NC(i):i}return g=(m[h]-m.min)/m.max||0,Le(m.b+(i?i(g):g)*m.v)+m.u}},o0=function(t){var n=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var s=Le(Math.round(parseFloat(i)/t)*t*n);return(s-s%1)/n+(Ns(i)?0:dn(i))}},b1=function(t,n){var i=gn(t),s,r;return!i&&ts(t)&&(s=i=t.radius||Ci,t.values?(t=Ri(t.values),(r=!Ns(t[0]))&&(s*=s)):t=o0(t.increment)),wr(n,i?ze(t)?function(a){return r=t(a),Math.abs(r-a)<=s?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=Ci,u=0,f=t.length,h,p;f--;)r?(h=t[f].x-o,p=t[f].y-l,h=h*h+p*p):h=Math.abs(t[f]-o),h<c&&(c=h,u=f);return u=!s||c<=s?t[u]:a,r||u===a||Ns(a)?u:u+dn(a)}:o0(t))},T1=function(t,n,i,s){return wr(gn(t)?!n:i===!0?!!(i=0):!s,function(){return gn(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(s=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(n-t+i*.99))/i)*i*s)/s})},MC=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return function(s){return n.reduce(function(r,a){return a(r)},s)}},bC=function(t,n){return function(i){return t(parseFloat(i))+(n||dn(i))}},TC=function(t,n,i){return A1(t,n,0,1,i)},E1=function(t,n,i){return wr(i,function(s){return t[~~n(s)]})},EC=function e(t,n,i){var s=n-t;return gn(t)?E1(t,e(0,t.length),n):wr(i,function(r){return(s+(r-t)%s)%s+t})},AC=function e(t,n,i){var s=n-t,r=s*2;return gn(t)?E1(t,e(0,t.length-1),n):wr(i,function(a){return a=(r+(a-t)%r)%r||0,t+(a>s?r-a:a)})},qo=function(t){return t.replace(rC,function(n){var i=n.indexOf("[")+1,s=n.substring(i||7,i?n.indexOf("]"):n.length-1).split(aC);return T1(i?s:+s[0],i?0:+s[1],+s[2]||1e-5)})},A1=function(t,n,i,s,r){var a=n-t,o=s-i;return wr(r,function(l){return i+((l-t)/a*o||0)})},wC=function e(t,n,i,s){var r=isNaN(t+n)?0:function(p){return(1-p)*t+p*n};if(!r){var a=je(t),o={},l,c,u,f,h;if(i===!0&&(s=1)&&(i=null),a)t={p:t},n={p:n};else if(gn(t)&&!gn(n)){for(u=[],f=t.length,h=f-2,c=1;c<f;c++)u.push(e(t[c-1],t[c]));f--,r=function(_){_*=f;var g=Math.min(h,~~_);return u[g](_-g)},i=n}else s||(t=Go(gn(t)?[]:{},t));if(!u){for(l in n)M0.call(o,t,l,"get",n[l]);r=function(_){return w0(_,o)||(a?t.p:t)}}}return wr(i,r)},i1=function(t,n,i){var s=t.labels,r=Ci,a,o,l;for(a in s)o=s[a]-n,o<0==!!i&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},ii=function(t,n,i){var s=t.vars,r=s[n],a=Re,o=t._ctx,l,c,u;if(r)return l=s[n+"Params"],c=s.callbackScope||t,i&&Tr.length&&rf(),o&&(Re=o),u=l?r.apply(c,l):r.call(c),Re=a,u},Rc=function(t){return Ar(t),t.scrollTrigger&&t.scrollTrigger.kill(!!fn),t.progress()<1&&ii(t,"onInterrupt"),t},Ho,w1=[],C1=function(t){if(t)if(t=!t.name&&t.default||t,h0()||t.headless){var n=t.name,i=ze(t),s=n&&!i&&t.init?function(){this._props=[]}:t,r={init:Pc,render:w0,add:M0,kill:XC,modifier:kC,rawVars:0},a={targetTest:0,get:0,getSetter:pf,aliases:{},register:0};if(Wo(),t!==s){if(Bn[n])return;ri(s,ri(af(t,r),a)),Go(s.prototype,Go(r,af(t,a))),Bn[s.prop=n]=s,t.targetTest&&(ef.push(s),m0[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}h1(n,s),t.register&&t.register(_n,s,An)}else w1.push(t)},ge=255,Dc={aqua:[0,ge,ge],lime:[0,ge,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ge],navy:[0,0,128],white:[ge,ge,ge],olive:[128,128,0],yellow:[ge,ge,0],orange:[ge,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ge,0,0],pink:[ge,192,203],cyan:[0,ge,ge],transparent:[ge,ge,ge,0]},Jg=function(t,n,i){return t+=t<0?1:t>1?-1:0,(t*6<1?n+(i-n)*t*6:t<.5?i:t*3<2?n+(i-n)*(2/3-t)*6:n)*ge+.5|0},R1=function(t,n,i){var s=t?Ns(t)?[t>>16,t>>8&ge,t&ge]:0:Dc.black,r,a,o,l,c,u,f,h,p,_;if(!s){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Dc[t])s=Dc[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+r+r+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return s=parseInt(t.substr(1,6),16),[s>>16,s>>8&ge,s&ge,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),s=[t>>16,t>>8&ge,t&ge]}else if(t.substr(0,3)==="hsl"){if(s=_=t.match(jM),!n)l=+s[0]%360/360,c=+s[1]/100,u=+s[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,s.length>3&&(s[3]*=1),s[0]=Jg(l+1/3,r,a),s[1]=Jg(l,r,a),s[2]=Jg(l-1/3,r,a);else if(~t.indexOf("="))return s=t.match(f0),i&&s.length<4&&(s[3]=1),s}else s=t.match(jM)||Dc.transparent;s=s.map(Number)}return n&&!_&&(r=s[0]/ge,a=s[1]/ge,o=s[2]/ge,f=Math.max(r,a,o),h=Math.min(r,a,o),u=(f+h)/2,f===h?l=c=0:(p=f-h,c=u>.5?p/(2-f-h):p/(f+h),l=f===r?(a-o)/p+(a<o?6:0):f===a?(o-r)/p+2:(r-a)/p+4,l*=60),s[0]=~~(l+.5),s[1]=~~(c*100+.5),s[2]=~~(u*100+.5)),i&&s.length<4&&(s[3]=1),s},D1=function(t){var n=[],i=[],s=-1;return t.split(Os).forEach(function(r){var a=r.match(Sa)||[];n.push.apply(n,a),i.push(s+=a.length+1)}),n.c=i,n},s1=function(t,n,i){var s="",r=(t+s).match(Os),a=n?"hsla(":"rgba(",o=0,l,c,u,f;if(!r)return t;if(r=r.map(function(h){return(h=R1(h,n,1))&&a+(n?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(u=D1(t),l=i.c,l.join(s)!==u.c.join(s)))for(c=t.replace(Os,"1").split(Sa),f=c.length-1;o<f;o++)s+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:i).shift());if(!c)for(c=t.split(Os),f=c.length-1;o<f;o++)s+=c[o]+r[o];return s+c[f]},Os=(function(){var e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Dc)e+="|"+t+"\\b";return new RegExp(e+")","gi")})(),CC=/hsl[a]?\(/,x0=function(t){var n=t.join(" "),i;if(Os.lastIndex=0,Os.test(n))return i=CC.test(n),t[1]=s1(t[1],i),t[0]=s1(t[0],i,D1(t[1])),!0},Bc,zn=(function(){var e=Date.now,t=500,n=33,i=e(),s=i,r=1e3/240,a=r,o=[],l,c,u,f,h,p,_=function g(m){var d=e()-s,v=m===!0,y,x,T,w;if((d>t||d<0)&&(i+=d-n),s+=d,T=s-i,y=T-a,(y>0||v)&&(w=++f.frame,h=T-f.time*1e3,f.time=T=T/1e3,a+=y+(y>=r?4:r-y),x=1),v||(l=c(g)),x)for(p=0;p<o.length;p++)o[p](T,h,w,m)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){c1&&(!e0&&h0()&&(ji=e0=window,p0=ji.document||{},si.gsap=_n,(ji.gsapVersions||(ji.gsapVersions=[])).push(_n.version),u1(sf||ji.GreenSockGlobals||!ji.gsap&&ji||{}),w1.forEach(C1)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,a-f.time*1e3+1|0)},Bc=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Bc=0,c=Pc},lagSmoothing:function(m,d){t=m||1/0,n=Math.min(d||33,t)},fps:function(m){r=1e3/(m||240),a=f.time*1e3+r},add:function(m,d,v){var y=d?function(x,T,w,E){m(x,T,w,E),f.remove(y)}:m;return f.remove(m),o[v?"unshift":"push"](y),Wo(),y},remove:function(m,d){~(d=o.indexOf(m))&&o.splice(d,1)&&p>=d&&p--},_listeners:o},f})(),Wo=function(){return!Bc&&zn.wake()},Qt={},RC=/^[\d.\-M][\d.\-,\s]/,DC=/["']/g,UC=function(t){for(var n={},i=t.substr(1,t.length-3).split(":"),s=i[0],r=1,a=i.length,o,l,c;r<a;r++)l=i[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),n[s]=isNaN(c)?c.replace(DC,"").trim():+c,s=l.substr(o+1).trim();return n},LC=function(t){var n=t.indexOf("(")+1,i=t.indexOf(")"),s=t.indexOf("(",n);return t.substring(n,~s&&s<i?t.indexOf(")",i+1):i)},OC=function(t){var n=(t+"").split("("),i=Qt[n[0]];return i&&n.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[UC(n[1])]:LC(t).split(",").map(p1)):Qt._CE&&RC.test(t)?Qt._CE("",t):i},NC=function(t){return function(n){return 1-t(1-n)}},ya=function(t,n){return t&&(ze(t)?t:Qt[t]||OC(t))||n},ba=function(t,n,i,s){i===void 0&&(i=function(l){return 1-n(1-l)}),s===void 0&&(s=function(l){return l<.5?n(l*2)/2:1-n((1-l)*2)/2});var r={easeIn:n,easeOut:i,easeInOut:s},a;return En(t,function(o){Qt[o]=si[o]=r,Qt[a=o.toLowerCase()]=i;for(var l in r)Qt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Qt[o+"."+l]=r[l]}),r},U1=function(t){return function(n){return n<.5?(1-t(1-n*2))/2:.5+t((n-.5)*2)/2}},Kg=function e(t,n,i){var s=n>=1?n:1,r=(i||(t?.3:.45))/(n<1?n:1),a=r/t0*(Math.asin(1/s)||0),o=function(u){return u===1?1:s*Math.pow(2,-10*u)*sC((u-a)*r)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:U1(o);return r=t0/r,l.config=function(c,u){return e(t,c,u)},l},Qg=function e(t,n){n===void 0&&(n=1.70158);var i=function(a){return a?--a*a*((n+1)*a+n)+1:0},s=t==="out"?i:t==="in"?function(r){return 1-i(1-r)}:U1(i);return s.config=function(r){return e(t,r)},s};En("Linear,Quad,Cubic,Quart,Quint,Strong",function(e,t){var n=t<5?t+1:t;ba(e+",Power"+(n-1),t?function(i){return Math.pow(i,n)}:function(i){return i},function(i){return 1-Math.pow(1-i,n)},function(i){return i<.5?Math.pow(i*2,n)/2:1-Math.pow((1-i)*2,n)/2})});Qt.Linear.easeNone=Qt.none=Qt.Linear.easeIn;ba("Elastic",Kg("in"),Kg("out"),Kg());(function(e,t){var n=1/t,i=2*n,s=2.5*n,r=function(o){return o<n?e*o*o:o<i?e*Math.pow(o-1.5/t,2)+.75:o<s?e*(o-=2.25/t)*o+.9375:e*Math.pow(o-2.625/t,2)+.984375};ba("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);ba("Expo",function(e){return Math.pow(2,10*(e-1))*e+e*e*e*e*e*e*(1-e)});ba("Circ",function(e){return-(o1(1-e*e)-1)});ba("Sine",function(e){return e===1?1:-iC(e*eC)+1});ba("Back",Qg("in"),Qg("out"),Qg());Qt.SteppedEase=Qt.steps=si.SteppedEase={config:function(t,n){t===void 0&&(t=1);var i=1/t,s=t+(n?0:1),r=n?1:0,a=1-_e;return function(o){return((s*Fc(0,a,o)|0)+r)*i}}};Nc.ease=Qt["quad.out"];En("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(e){return g0+=e+","+e+"Params,"});var S0=function(t,n){this.id=nC++,t._gsap=this,this.target=t,this.harness=n,this.get=n?n.get:v0,this.set=n?n.getSetter:pf},zc=(function(){function e(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,Xo(this,+n.duration,1,1),this.data=n.data,Re&&(this._ctx=Re,Re.data.push(this)),Bc||zn.wake()}var t=e.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,Xo(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,s){if(Wo(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(df(this,i),!r._dp||r.parent||_1(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&$i(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===_e||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),d1(this,i,s)),this},t.time=function(i,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+e1(this))%(this._dur+this._rDelay)||(i?this._dur:0),s):this._time},t.totalProgress=function(i,s){return arguments.length?this.totalTime(this.totalDuration()*i,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+e1(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,s){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,s):this._repeat?ko(this._tTime,r)+1:1},t.timeScale=function(i,s){if(!arguments.length)return this._rts===-_e?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?of(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-_e?0:this._rts,this.totalTime(Fc(-Math.abs(this._delay),this.totalDuration(),r),s!==!1),ff(this),pC(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Wo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==_e&&(this._tTime-=_e)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=Le(i);var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&$i(s,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(Fn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var s=this.parent||this._dp;return s?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?of(s.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=uC);var s=fn;return fn=i,y0(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),fn=s,this},t.globalTime=function(i){for(var s=this,r=arguments.length?i:s.rawTime();s;)r=s._start+r/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(i):r},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,n1(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var s=this._time;return this._rDelay=i,n1(this),s?this.time(s):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,s){return this.totalTime(wi(this,i),Fn(s))},t.restart=function(i,s){return this.play().totalTime(i?-this._delay:0,Fn(s)),this._dur||(this._zTime=-_e),this},t.play=function(i,s){return i!=null&&this.seek(i,s),this.reversed(!1).paused(!1)},t.reverse=function(i,s){return i!=null&&this.seek(i||this.totalDuration(),s),this.reversed(!0).paused(!1)},t.pause=function(i,s){return i!=null&&this.seek(i,s),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-_e:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-_e,this},t.isActive=function(){var i=this.parent||this._dp,s=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=s&&r<this.endTime(!0)-_e)},t.eventCallback=function(i,s,r){var a=this.vars;return arguments.length>1?(s?(a[i]=s,r&&(a[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=s)):delete a[i],this):a[i]},t.then=function(i){var s=this,r=s._prom;return new Promise(function(a){var o=ze(i)?i:m1,l=function(){var u=s.then;s.then=null,r&&r(),ze(o)&&(o=o(s))&&(o.then||o===s)&&(s.then=u),a(o),s.then=u};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?l():s._prom=l})},t.kill=function(){Rc(this)},e})();ri(zc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-_e,_prom:0,_ps:!1,_rts:1});var mn=(function(e){a1(t,e);function t(i,s){var r;return i===void 0&&(i={}),r=e.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=Fn(i.sortChildren),Oe&&$i(i.parent||Oe,Ls(r),s),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&v1(Ls(r),i.scrollTrigger),r}var n=t.prototype;return n.to=function(s,r,a){return Lc(0,arguments,this),this},n.from=function(s,r,a){return Lc(1,arguments,this),this},n.fromTo=function(s,r,a,o){return Lc(2,arguments,this),this},n.set=function(s,r,a){return r.duration=0,r.parent=this,Uc(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new ke(s,r,wi(this,a),1),this},n.call=function(s,r,a){return $i(this,ke.delayedCall(0,s,r),a)},n.staggerTo=function(s,r,a,o,l,c,u){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new ke(s,a,wi(this,l)),this},n.staggerFrom=function(s,r,a,o,l,c,u){return a.runBackwards=1,Uc(a).immediateRender=Fn(a.immediateRender),this.staggerTo(s,r,a,o,l,c,u)},n.staggerFromTo=function(s,r,a,o,l,c,u,f){return o.startAt=a,Uc(o).immediateRender=Fn(o.immediateRender),this.staggerTo(s,r,o,l,c,u,f)},n.render=function(s,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=s<=0?0:Le(s),f=this._zTime<0!=s<0&&(this._initted||!c),h,p,_,g,m,d,v,y,x,T,w,E;if(this!==Oe&&u>l&&s>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,s+=this._time-o),h=u,x=this._start,y=this._ts,d=!y,f&&(c||(o=this._zTime),(s||!r)&&(this._zTime=s)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(m*100+s,r,a);if(h=Le(u%m),u===l?(g=this._repeat,h=c):(T=Le(u/m),g=~~T,g&&g===T&&(h=c,g--),h>c&&(h=c)),T=ko(this._tTime,m),!o&&this._tTime&&T!==g&&this._tTime-T*m-this._dur<=0&&(T=g),w&&g&1&&(h=c-h,E=1),g!==T&&!this._lock){var C=w&&T&1,S=C===(w&&g&1);if(g<T&&(C=!C),o=C?0:u%c?c:u,this._lock=1,this.render(o||(E?0:Le(g*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&ii(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,T=g),o&&o!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!d)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=vC(this,Le(o),Le(h)),v&&(u-=h-(h=v._start))),this._tTime=u,this._time=h,this._act=!!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,o=0),!o&&u&&c&&!r&&!T&&(ii(this,"onStart"),this._tTime!==u))return this;if(h>=o&&s>=0)for(p=this._first;p;){if(_=p._next,(p._act||h>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(s,r,a);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,r,a),h!==this._time||!this._ts&&!d){v=0,_&&(u+=this._zTime=-_e);break}}p=_}else{p=this._last;for(var M=s<0?s:h;p;){if(_=p._prev,(p._act||M<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(s,r,a);if(p.render(p._ts>0?(M-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(M-p._start)*p._ts,r,a||fn&&y0(p)),h!==this._time||!this._ts&&!d){v=0,_&&(u+=this._zTime=M?-_e:_e);break}}p=_}}if(v&&!r&&(this.pause(),v.render(h>=o?0:-_e)._zTime=h>=o?1:-1,this._ts))return this._start=x,ff(this),this.render(s,r,a);this._onUpdate&&!r&&ii(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(x===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((s||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ar(this,1),!r&&!(s<0&&!o)&&(u||o||!l)&&(ii(this,u===l&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(s,r){var a=this;if(Ns(r)||(r=wi(this,r,s)),!(s instanceof zc)){if(gn(s))return s.forEach(function(o){return a.add(o,r)}),this;if(je(s))return this.addLabel(s,r);if(ze(s))s=ke.delayedCall(0,s);else return this}return this!==s?$i(this,s,r):this},n.getChildren=function(s,r,a,o){s===void 0&&(s=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-Ci);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof ke?r&&l.push(c):(a&&l.push(c),s&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},n.getById=function(s){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===s)return r[a]},n.remove=function(s){return je(s)?this.removeLabel(s):ze(s)?this.killTweensOf(s):(s.parent===this&&hf(this,s),s===this._recent&&(this._recent=this._last),va(this))},n.totalTime=function(s,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Le(zn.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),e.prototype.totalTime.call(this,s,r),this._forcing=0,this):this._tTime},n.addLabel=function(s,r){return this.labels[s]=wi(this,r),this},n.removeLabel=function(s){return delete this.labels[s],this},n.addPause=function(s,r,a){var o=ke.delayedCall(0,r||Pc,a);return o.data="isPause",this._hasPause=1,$i(this,o,wi(this,s))},n.removePause=function(s){var r=this._first;for(s=wi(this,s);r;)r._start===s&&r.data==="isPause"&&Ar(r),r=r._next},n.killTweensOf=function(s,r,a){for(var o=this.getTweensOf(s,a),l=o.length;l--;)br!==o[l]&&o[l].kill(s,r);return this},n.getTweensOf=function(s,r){for(var a=[],o=Ri(s),l=this._first,c=Ns(r),u;l;)l instanceof ke?hC(l._targets,o)&&(c?(!br||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(o,r)).length&&a.push.apply(a,u),l=l._next;return a},n.tweenTo=function(s,r){r=r||{};var a=this,o=wi(a,s),l=r,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,p,_=ke.to(a,ri({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||_e,onStart:function(){if(a.pause(),!p){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&Xo(_,m,0,1).render(_._time,!0,!0),p=1}u&&u.apply(_,f||[])}},r));return h?_.render(0):_},n.tweenFromTo=function(s,r,a){return this.tweenTo(r,ri({startAt:{time:wi(this,s)}},a))},n.recent=function(){return this._recent},n.nextLabel=function(s){return s===void 0&&(s=this._time),i1(this,wi(this,s))},n.previousLabel=function(s){return s===void 0&&(s=this._time),i1(this,wi(this,s),1)},n.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+_e)},n.shiftChildren=function(s,r,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(s=Le(s);o;)o._start>=a&&(o._start+=s,o._end+=s),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=s);return va(this)},n.invalidate=function(s){var r=this._first;for(this._lock=0;r;)r.invalidate(s),r=r._next;return e.prototype.invalidate.call(this,s)},n.clear=function(s){s===void 0&&(s=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),va(this)},n.totalDuration=function(s){var r=0,a=this,o=a._last,l=Ci,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-s:s));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,$i(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=Le(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Xo(a,a===Oe&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(s){if(Oe._ts&&(d1(Oe,of(s,Oe)),f1=zn.frame),zn.frame>=$M){$M+=Vn.autoSleep||120;var r=Oe._first;if((!r||!r._ts)&&Vn.autoSleep&&zn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||zn.sleep()}}},t})(zc);ri(mn.prototype,{_lock:0,_hasPause:0,_forcing:0});var IC=function(t,n,i,s,r,a,o){var l=new An(this._pt,t,n,0,1,A0,null,r),c=0,u=0,f,h,p,_,g,m,d,v;for(l.b=i,l.e=s,i+="",s+="",(d=~s.indexOf("random("))&&(s=qo(s)),a&&(v=[i,s],a(v,t,n),i=v[0],s=v[1]),h=i.match(Yg)||[];f=Yg.exec(s);)_=f[0],g=s.substring(c,f.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?Ma(m,_)-m:parseFloat(_)-m,m:p&&p<4?Math.round:0},c=Yg.lastIndex);return l.c=c<s.length?s.substring(c,s.length):"",l.fp=o,(d0.test(s)||d)&&(l.e=0),this._pt=l,l},M0=function(t,n,i,s,r,a,o,l,c,u){ze(s)&&(s=s(r||0,t,a));var f=t[n],h=i!=="get"?i:ze(f)?c?t[n.indexOf("set")||!ze(t["get"+n.substr(3)])?n:"get"+n.substr(3)](c):t[n]():f,p=ze(f)?c?VC:N1:E0,_;if(je(s)&&(~s.indexOf("random(")&&(s=qo(s)),s.charAt(1)==="="&&(_=Ma(h,s)+(dn(h)||0),(_||_===0)&&(s=_))),!u||h!==s||l0)return!isNaN(h*s)&&s!==""?(_=new An(this._pt,t,n,+h||0,s-(h||0),typeof f=="boolean"?GC:I1,0,p),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!f&&!(n in t)&&uf(n,s),IC.call(this,t,n,h,s,p,l||Vn.stringFilter,c))},PC=function(t,n,i,s,r){if(ze(t)&&(t=Oc(t,r,n,i,s)),!ts(t)||t.style&&t.nodeType||gn(t)||l1(t))return je(t)?Oc(t,r,n,i,s):t;var a={},o;for(o in t)a[o]=Oc(t[o],r,n,i,s);return a},b0=function(t,n,i,s,r,a){var o,l,c,u;if(Bn[t]&&(o=new Bn[t]).init(r,o.rawVars?n[t]:PC(n[t],s,r,a,i),i,s,a)!==!1&&(i._pt=l=new An(i._pt,r,t,0,1,o.render,o,0,o.priority),i!==Ho))for(c=i._ptLookup[i._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},br,l0,T0=function e(t,n,i){var s=t.vars,r=s.ease,a=s.startAt,o=s.immediateRender,l=s.lazy,c=s.onUpdate,u=s.runBackwards,f=s.yoyoEase,h=s.keyframes,p=s.autoRevert,_=t._dur,g=t._startAt,m=t._targets,d=t.parent,v=d&&d.data==="nested"?d.vars.targets:m,y=t._overwrite==="auto"&&!u0,x=t.timeline,T=s.easeReverse||f,w,E,C,S,M,U,I,B,H,W,k,K,F;if(x&&(!h||!r)&&(r="none"),t._ease=ya(r,Nc.ease),t._rEase=T&&(ya(T)||t._ease),t._from=!x&&!!s.runBackwards,t._from&&(t.ratio=1),!x||h&&!s.stagger){if(B=m[0]?Er(m[0]).harness:0,K=B&&s[B.prop],w=af(s,m0),g&&(g._zTime<0&&g.progress(1),n<0&&u&&o&&!p?g.render(-1,!0):g.revert(u&&_?tf:cC),g._lazy=0),a){if(Ar(t._startAt=ke.set(m,ri({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!g&&Fn(l),startAt:null,delay:0,onUpdate:c&&function(){return ii(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(fn||!o&&!p)&&t._startAt.revert(tf),o&&_&&n<=0&&i<=0){n&&(t._zTime=n);return}}else if(u&&_&&!g){if(n&&(o=!1),C=ri({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Fn(l),immediateRender:o,stagger:0,parent:d},w),K&&(C[B.prop]=K),Ar(t._startAt=ke.set(m,C)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(fn?t._startAt.revert(tf):t._startAt.render(-1,!0)),t._zTime=n,!o)e(t._startAt,_e,_e);else if(!n)return}for(t._pt=t._ptCache=0,l=_&&Fn(l)||l&&!_,E=0;E<m.length;E++){if(M=m[E],I=M._gsap||_0(m)[E]._gsap,t._ptLookup[E]=W={},n0[I.id]&&Tr.length&&rf(),k=v===m?E:v.indexOf(M),B&&(H=new B).init(M,K||w,t,k,v)!==!1&&(t._pt=S=new An(t._pt,M,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(it){W[it]=S}),H.priority&&(U=1)),!B||K)for(C in w)Bn[C]&&(H=b0(C,w,t,k,M,v))?H.priority&&(U=1):W[C]=S=M0.call(t,M,C,"get",w[C],k,v,0,s.stringFilter);t._op&&t._op[E]&&t.kill(M,t._op[E]),y&&t._pt&&(br=t,Oe.killTweensOf(M,W,t.globalTime(n)),F=!t.parent,br=0),t._pt&&l&&(n0[I.id]=1)}U&&C0(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!F,h&&n<=0&&x.render(Ci,!0,!0)},BC=function(t,n,i,s,r,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[n],u,f,h,p;if(!c)for(c=t._ptCache[n]=[],h=t._ptLookup,p=t._targets.length;p--;){if(u=h[p][n],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==n&&u.fp!==n;)u=u._next;if(!u)return l0=1,t.vars[n]="+=0",T0(t,o),l0=0,l?Ic(n+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(p=c.length;p--;)f=c[p],u=f._pt||f,u.s=(s||s===0)&&!r?s:u.s+(s||0)+a*u.c,u.c=i-u.s,f.e&&(f.e=Fe(i)+dn(f.e)),f.b&&(f.b=u.s+dn(f.b))},zC=function(t,n){var i=t[0]?Er(t[0]).harness:0,s=i&&i.aliases,r,a,o,l;if(!s)return n;r=Go({},n);for(a in s)if(a in r)for(l=s[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},FC=function(t,n,i,s){var r=n.ease||s||"power1.inOut",a,o;if(gn(n))o=i[t]||(i[t]=[]),n.forEach(function(l,c){return o.push({t:c/(n.length-1)*100,v:l,e:r})});else for(a in n)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:n[a],e:r})},Oc=function(t,n,i,s,r){return ze(t)?t.call(n,i,s,r):je(t)&&~t.indexOf("random(")?qo(t):t},L1=g0+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",O1={};En(L1+",id,stagger,delay,duration,paused,scrollTrigger",function(e){return O1[e]=1});var ke=(function(e){a1(t,e);function t(i,s,r,a){var o;typeof s=="number"&&(r.duration=s,s=r,r=null),o=e.call(this,a?s:Uc(s))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,p=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,d=s.parent||Oe,v=(gn(i)||l1(i)?Ns(i[0]):"length"in s)?[i]:Ri(i),y,x,T,w,E,C,S,M;if(o._targets=v.length?_0(v):Ic("GSAP target "+i+" not found. https://gsap.com",!Vn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,_||h||$h(c)||$h(u)){s=o.vars;var U=s.easeReverse||s.yoyoEase;if(y=o.timeline=new mn({data:"nested",defaults:g||{},targets:d&&d.data==="nested"?d.vars.targets:v}),y.kill(),y.parent=y._dp=Ls(o),y._start=0,h||$h(c)||$h(u)){if(w=v.length,S=h&&M1(h),ts(h))for(E in h)~L1.indexOf(E)&&(M||(M={}),M[E]=h[E]);for(x=0;x<w;x++)T=af(s,O1),T.stagger=0,U&&(T.easeReverse=U),M&&Go(T,M),C=v[x],T.duration=+Oc(c,Ls(o),x,C,v),T.delay=(+Oc(u,Ls(o),x,C,v)||0)-o._delay,!h&&w===1&&T.delay&&(o._delay=u=T.delay,o._start+=u,T.delay=0),y.to(C,T,S?S(x,C,v):0),y._ease=Qt.none;y.duration()?c=u=0:o.timeline=0}else if(_){Uc(ri(y.vars.defaults,{ease:"none"})),y._ease=ya(_.ease||s.ease||"none");var I=0,B,H,W;if(gn(_))_.forEach(function(k){return y.to(v,k,">")}),y.duration();else{T={};for(E in _)E==="ease"||E==="easeEach"||FC(E,_[E],T,_.easeEach);for(E in T)for(B=T[E].sort(function(k,K){return k.t-K.t}),I=0,x=0;x<B.length;x++)H=B[x],W={ease:H.e,duration:(H.t-(x?B[x-1].t:0))/100*c},W[E]=H.v,y.to(v,W,I),I+=W.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||o.duration(c=y.duration())}else o.timeline=0;return p===!0&&!u0&&(br=Ls(o),Oe.killTweensOf(v),br=0),$i(d,Ls(o),r),s.reversed&&o.reverse(),s.paused&&o.paused(!0),(f||!c&&!_&&o._start===Le(d._time)&&Fn(f)&&mC(Ls(o))&&d.data!=="nested")&&(o._tTime=-_e,o.render(Math.max(0,-u)||0)),m&&v1(Ls(o),m),o}var n=t.prototype;return n.render=function(s,r,a){var o=this._time,l=this._tDur,c=this._dur,u=s<0,f=s>l-_e&&!u?l:s<_e?0:s,h,p,_,g,m,d,v,y;if(!c)_C(this,s,r,a);else if(f!==this._tTime||!s||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,y=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+s,r,a);if(h=Le(f%g),f===l?(_=this._repeat,h=c):(m=Le(f/g),_=~~m,_&&_===m?(h=c,_--):h>c&&(h=c)),d=this._yoyo&&_&1,d&&(h=c-h),m=ko(this._tTime,g),h===o&&!a&&this._initted&&_===m)return this._tTime=f,this;_!==m&&this.vars.repeatRefresh&&!d&&!this._lock&&h!==g&&this._initted&&(this._lock=a=1,this.render(Le(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(y1(this,u?s:h,a,r,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(s,r,a)}if(this._rEase){var x=h<o;if(x!==this._inv){var T=x?o:c-o;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=T?(x?-1:1)/T:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(h/c);if(this._from&&(this.ratio=v=1-v),this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&f&&!r&&!m&&(ii(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;y&&y.render(s<0?s:y._dur*y._ease(h/this._dur),r,a)||this._startAt&&(this._zTime=s),this._onUpdate&&!r&&(u&&i0(this,s,r,a),ii(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&ii(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&i0(this,s,!0,!0),(s||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Ar(this,1),!r&&!(u&&!o)&&(f||o||d)&&(ii(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),e.prototype.invalidate.call(this,s)},n.resetTo=function(s,r,a,o,l){Bc||zn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||T0(this,c),u=this._ease(c/this._dur),BC(this,s,r,a,o,u,c,l)?this.resetTo(s,r,a,o,1):(df(this,0),this.parent||g1(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(s,r){if(r===void 0&&(r="all"),!s&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Rc(this):this.scrollTrigger&&this.scrollTrigger.kill(!!fn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(s,r,br&&br.vars.overwrite!==!0)._first||Rc(this),this.parent&&a!==this.timeline.totalDuration()&&Xo(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=s?Ri(s):o,c=this._ptLookup,u=this._pt,f,h,p,_,g,m,d;if((!r||r==="all")&&dC(o,l))return r==="all"&&(this._pt=0),Rc(this);for(f=this._op=this._op||[],r!=="all"&&(je(r)&&(g={},En(r,function(v){return g[v]=1}),r=g),r=zC(o,r)),d=o.length;d--;)if(~l.indexOf(o[d])){h=c[d],r==="all"?(f[d]=r,_=h,p={}):(p=f[d]=f[d]||{},_=r);for(g in _)m=h&&h[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&hf(this,m,"_pt"),delete h[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&u&&Rc(this),this},t.to=function(s,r){return new t(s,r,arguments[2])},t.from=function(s,r){return Lc(1,arguments)},t.delayedCall=function(s,r,a,o){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(s,r,a){return Lc(2,arguments)},t.set=function(s,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(s,r)},t.killTweensOf=function(s,r,a){return Oe.killTweensOf(s,r,a)},t})(zc);ri(ke.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});En("staggerTo,staggerFrom,staggerFromTo",function(e){ke[e]=function(){var t=new mn,n=r0.call(arguments,0);return n.splice(e==="staggerFromTo"?5:4,0,0),t[e].apply(t,n)}});var E0=function(t,n,i){return t[n]=i},N1=function(t,n,i){return t[n](i)},VC=function(t,n,i,s){return t[n](s.fp,i)},HC=function(t,n,i){return t.setAttribute(n,i)},pf=function(t,n){return ze(t[n])?N1:cf(t[n])&&t.setAttribute?HC:E0},I1=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e6)/1e6,n)},GC=function(t,n){return n.set(n.t,n.p,!!(n.s+n.c*t),n)},A0=function(t,n){var i=n._pt,s="";if(!t&&n.b)s=n.b;else if(t===1&&n.e)s=n.e;else{for(;i;)s=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+s,i=i._next;s+=n.c}n.set(n.t,n.p,s,n)},w0=function(t,n){for(var i=n._pt;i;)i.r(t,i.d),i=i._next},kC=function(t,n,i,s){for(var r=this._pt,a;r;)a=r._next,r.p===s&&r.modifier(t,n,i),r=a},XC=function(t){for(var n=this._pt,i,s;n;)s=n._next,n.p===t&&!n.op||n.op===t?hf(this,n,"_pt"):n.dep||(i=1),n=s;return!i},WC=function(t,n,i,s){s.mSet(t,n,s.m.call(s.tween,i,s.mt),s)},C0=function(t){for(var n=t._pt,i,s,r,a;n;){for(i=n._next,s=r;s&&s.pr>n.pr;)s=s._next;(n._prev=s?s._prev:a)?n._prev._next=n:r=n,(n._next=s)?s._prev=n:a=n,n=i}t._pt=r},An=(function(){function e(n,i,s,r,a,o,l,c,u){this.t=i,this.s=r,this.c=a,this.p=s,this.r=o||I1,this.d=l||this,this.set=c||E0,this.pr=u||0,this._next=n,n&&(n._prev=this)}var t=e.prototype;return t.modifier=function(i,s,r){this.mSet=this.mSet||this.set,this.set=WC,this.m=i,this.mt=r,this.tween=s},e})();En(g0+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(e){return m0[e]=1});si.TweenMax=si.TweenLite=ke;si.TimelineLite=si.TimelineMax=mn;Oe=new mn({sortChildren:!1,defaults:Nc,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Vn.stringFilter=x0;var xa=[],nf={},qC=[],r1=0,YC=0,jg=function(t){return(nf[t]||qC).map(function(n){return n()})},c0=function(){var t=Date.now(),n=[];t-r1>2&&(jg("matchMediaInit"),xa.forEach(function(i){var s=i.queries,r=i.conditions,a,o,l,c;for(o in s)a=ji.matchMedia(s[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(i.revert(),l&&n.push(i))}),jg("matchMediaRevert"),n.forEach(function(i){return i.onMatch(i,function(s){return i.add(null,s)})}),r1=t,jg("matchMedia"))},P1=(function(){function e(n,i){this.selector=i&&a0(i),this.data=[],this._r=[],this.isReverted=!1,this.id=YC++,n&&this.add(n)}var t=e.prototype;return t.add=function(i,s,r){ze(i)&&(r=s,s=i,i=ze);var a=this,o=function(){var c=Re,u=a.selector,f;return c&&c!==a&&c.data.push(a),r&&(a.selector=a0(r)),Re=a,f=s.apply(a,arguments),ze(f)&&a._r.push(f),Re=c,a.selector=u,a.isReverted=!1,f};return a.last=o,i===ze?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},t.ignore=function(i){var s=Re;Re=null,i(this),Re=s},t.getTweens=function(){var i=[];return this.data.forEach(function(s){return s instanceof e?i.push.apply(i,s.getTweens()):s instanceof ke&&!(s.parent&&s.parent.data==="nested")&&i.push(s)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,s){var r=this;if(i?(function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=r.data.length;l--;)c=r.data[l],c instanceof mn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ke)&&c.revert&&c.revert(i);r._r.forEach(function(u){return u(i,r)}),r.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),s)for(var a=xa.length;a--;)xa[a].id===this.id&&xa.splice(a,1)},t.revert=function(i){this.kill(i||{})},e})(),ZC=(function(){function e(n){this.contexts=[],this.scope=n,Re&&Re.data.push(this)}var t=e.prototype;return t.add=function(i,s,r){ts(i)||(i={matches:i});var a=new P1(0,r||this.scope),o=a.conditions={},l,c,u;Re&&!a.selector&&(a.selector=Re.selector),this.contexts.push(a),s=a.add("onMatch",s),a.queries=i;for(c in i)c==="all"?u=1:(l=ji.matchMedia(i[c]),l&&(xa.indexOf(a)<0&&xa.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(c0):l.addEventListener("change",c0)));return u&&s(a,function(f){return a.add(null,f)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(s){return s.kill(i,!0)})},e})(),lf={registerPlugin:function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];n.forEach(function(s){return C1(s)})},timeline:function(t){return new mn(t)},getTweensOf:function(t,n){return Oe.getTweensOf(t,n)},getProperty:function(t,n,i,s){je(t)&&(t=Ri(t)[0]);var r=Er(t||{}).get,a=i?m1:p1;return i==="native"&&(i=""),t&&(n?a((Bn[n]&&Bn[n].get||r)(t,n,i,s)):function(o,l,c){return a((Bn[o]&&Bn[o].get||r)(t,o,l,c))})},quickSetter:function(t,n,i){if(t=Ri(t),t.length>1){var s=t.map(function(u){return _n.quickSetter(u,n,i)}),r=s.length;return function(u){for(var f=r;f--;)s[f](u)}}t=t[0]||{};var a=Bn[n],o=Er(t),l=o.harness&&(o.harness.aliases||{})[n]||n,c=a?function(u){var f=new a;Ho._pt=0,f.init(t,i?u+i:u,Ho,0,[t]),f.render(1,f),Ho._pt&&w0(1,Ho)}:o.set(t,l);return a?c:function(u){return c(t,l,i?u+i:u,o,1)}},quickTo:function(t,n,i){var s,r=_n.to(t,ri((s={},s[n]="+=0.1",s.paused=!0,s.stagger=0,s),i||{})),a=function(l,c,u){return r.resetTo(n,l,c,u)};return a.tween=r,a},isTweening:function(t){return Oe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ya(t.ease,Nc.ease)),t1(Nc,t||{})},config:function(t){return t1(Vn,t||{})},registerEffect:function(t){var n=t.name,i=t.effect,s=t.plugins,r=t.defaults,a=t.extendTimeline;(s||"").split(",").forEach(function(o){return o&&!Bn[o]&&!si[o]&&Ic(n+" effect requires "+o+" plugin.")}),Zg[n]=function(o,l,c){return i(Ri(o),ri(l||{},r),c)},a&&(mn.prototype[n]=function(o,l,c){return this.add(Zg[n](o,ts(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,n){Qt[t]=ya(n)},parseEase:function(t,n){return arguments.length?ya(t,n):Qt},getById:function(t){return Oe.getById(t)},exportRoot:function(t,n){t===void 0&&(t={});var i=new mn(t),s,r;for(i.smoothChildTiming=Fn(t.smoothChildTiming),Oe.remove(i),i._dp=0,i._time=i._tTime=Oe._time,s=Oe._first;s;)r=s._next,(n||!(!s._dur&&s instanceof ke&&s.vars.onComplete===s._targets[0]))&&$i(i,s,s._start-s._delay),s=r;return $i(Oe,i,0),i},context:function(t,n){return t?new P1(t,n):Re},matchMedia:function(t){return new ZC(t)},matchMediaRefresh:function(){return xa.forEach(function(t){var n=t.conditions,i,s;for(s in n)n[s]&&(n[s]=!1,i=1);i&&t.revert()})||c0()},addEventListener:function(t,n){var i=nf[t]||(nf[t]=[]);~i.indexOf(n)||i.push(n)},removeEventListener:function(t,n){var i=nf[t],s=i&&i.indexOf(n);s>=0&&i.splice(s,1)},utils:{wrap:EC,wrapYoyo:AC,distribute:M1,random:T1,snap:b1,normalize:TC,getUnit:dn,clamp:xC,splitColor:R1,toArray:Ri,selector:a0,mapRange:A1,pipe:MC,unitize:bC,interpolate:wC,shuffle:S1},install:u1,effects:Zg,ticker:zn,updateRoot:mn.updateRoot,plugins:Bn,globalTimeline:Oe,core:{PropTween:An,globals:h1,Tween:ke,Timeline:mn,Animation:zc,getCache:Er,_removeLinkedListItem:hf,reverting:function(){return fn},context:function(t){return t&&Re&&(Re.data.push(t),t._ctx=Re),Re},suppressOverwrites:function(t){return u0=t}}};En("to,from,fromTo,delayedCall,set,killTweensOf",function(e){return lf[e]=ke[e]});zn.add(mn.updateRoot);Ho=lf.to({},{duration:0});var JC=function(t,n){for(var i=t._pt;i&&i.p!==n&&i.op!==n&&i.fp!==n;)i=i._next;return i},KC=function(t,n){var i=t._targets,s,r,a;for(s in n)for(r=i.length;r--;)a=t._ptLookup[r][s],a&&(a=a.d)&&(a._pt&&(a=JC(a,s)),a&&a.modifier&&a.modifier(n[s],t,i[r],s))},$g=function(t,n){return{name:t,headless:1,rawVars:1,init:function(s,r,a){a._onInit=function(o){var l,c;if(je(r)&&(l={},En(r,function(u){return l[u]=1}),r=l),n){l={};for(c in r)l[c]=n(r[c]);r=l}KC(o,r)}}}},_n=lf.registerPlugin({name:"attr",init:function(t,n,i,s,r){var a,o,l;this.tween=i;for(a in n)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",n[a],s,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,n){for(var i=n._pt;i;)fn?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,n){for(var i=n.length;i--;)this.add(t,i,t[i]||0,n[i],0,0,0,0,0,1)}},$g("roundProps",o0),$g("modifiers"),$g("snap",b1))||lf;ke.version=mn.version=_n.version="3.15.0";c1=1;h0()&&Wo();var QC=Qt.Power0,jC=Qt.Power1,$C=Qt.Power2,tR=Qt.Power3,eR=Qt.Power4,nR=Qt.Linear,iR=Qt.Quad,sR=Qt.Cubic,rR=Qt.Quart,aR=Qt.Quint,oR=Qt.Strong,lR=Qt.Elastic,cR=Qt.Back,uR=Qt.SteppedEase,hR=Qt.Bounce,fR=Qt.Sine,dR=Qt.Expo,pR=Qt.Circ;var B1,Cr,Zo,N0,wa,mR,z1,I0,gR=function(){return typeof window<"u"},Ps={},Aa=180/Math.PI,Jo=Math.PI/180,Yo=Math.atan2,F1=1e8,P0=/([A-Z])/g,_R=/(left|right|width|margin|padding|x)/i,vR=/[\s,\(]\S/,es={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},D0=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},yR=function(t,n){return n.set(n.t,n.p,t===1?n.e:Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},xR=function(t,n){return n.set(n.t,n.p,t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},SR=function(t,n){return n.set(n.t,n.p,t===1?n.e:t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},MR=function(t,n){var i=n.s+n.c*t;n.set(n.t,n.p,~~(i+(i<0?-.5:.5))+n.u,n)},Y1=function(t,n){return n.set(n.t,n.p,t?n.e:n.b,n)},Z1=function(t,n){return n.set(n.t,n.p,t!==1?n.b:n.e,n)},bR=function(t,n,i){return t.style[n]=i},TR=function(t,n,i){return t.style.setProperty(n,i)},ER=function(t,n,i){return t._gsap[n]=i},AR=function(t,n,i){return t._gsap.scaleX=t._gsap.scaleY=i},wR=function(t,n,i,s,r){var a=t._gsap;a.scaleX=a.scaleY=i,a.renderTransform(r,a)},CR=function(t,n,i,s,r){var a=t._gsap;a[n]=i,a.renderTransform(r,a)},Ne="transform",Hn=Ne+"Origin",RR=function e(t,n){var i=this,s=this.target,r=s.style,a=s._gsap;if(t in Ps&&r){if(this.tfm=this.tfm||{},t!=="transform")t=es[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return i.tfm[o]=Is(s,o)}):this.tfm[t]=a.x?a[t]:Is(s,t),t===Hn&&(this.tfm.zOrigin=a.zOrigin);else return es.transform.split(",").forEach(function(o){return e.call(i,o,n)});if(this.props.indexOf(Ne)>=0)return;a.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(Hn,n,"")),t=Ne}(r||n)&&this.props.push(t,n,r[t])},J1=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},DR=function(){var t=this.props,n=this.target,i=n.style,s=n._gsap,r,a;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?n[t[r]](t[r+2]):n[t[r]]=t[r+2]:t[r+2]?i[t[r]]=t[r+2]:i.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(P0,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)s[a]=this.tfm[a];s.svg&&(s.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),r=I0(),(!r||!r.isStart)&&!i[Ne]&&(J1(i),s.zOrigin&&i[Hn]&&(i[Hn]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},K1=function(t,n){var i={target:t,props:[],revert:DR,save:RR};return t._gsap||_n.core.getCache(t),n&&t.style&&t.nodeType&&n.split(",").forEach(function(s){return i.save(s)}),i},Q1,U0=function(t,n){var i=Cr.createElementNS?Cr.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Cr.createElement(t);return i&&i.style?i:Cr.createElement(t)},ai=function e(t,n,i){var s=getComputedStyle(t);return s[n]||s.getPropertyValue(n.replace(P0,"-$1").toLowerCase())||s.getPropertyValue(n)||!i&&e(t,Ko(n)||n,1)||""},V1="O,Moz,ms,Ms,Webkit".split(","),Ko=function(t,n,i){var s=n||wa,r=s.style,a=5;if(t in r&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(V1[a]+t in r););return a<0?null:(a===3?"ms":a>=0?V1[a]:"")+t},L0=function(){gR()&&window.document&&(B1=window,Cr=B1.document,Zo=Cr.documentElement,wa=U0("div")||{style:{}},mR=U0("div"),Ne=Ko(Ne),Hn=Ne+"Origin",wa.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Q1=!!Ko("perspective"),I0=_n.core.reverting,N0=1)},H1=function(t){var n=t.ownerSVGElement,i=U0("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=t.cloneNode(!0),r;s.style.display="block",i.appendChild(s),Zo.appendChild(i);try{r=s.getBBox()}catch{}return i.removeChild(s),Zo.removeChild(i),r},G1=function(t,n){for(var i=n.length;i--;)if(t.hasAttribute(n[i]))return t.getAttribute(n[i])},j1=function(t){var n,i;try{n=t.getBBox()}catch{n=H1(t),i=1}return n&&(n.width||n.height)||i||(n=H1(t)),n&&!n.width&&!n.x&&!n.y?{x:+G1(t,["x","cx","x1"])||0,y:+G1(t,["y","cy","y1"])||0,width:0,height:0}:n},$1=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&j1(t))},Dr=function(t,n){if(n){var i=t.style,s;n in Ps&&n!==Hn&&(n=Ne),i.removeProperty?(s=n.substr(0,2),(s==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),i.removeProperty(s==="--"?n:n.replace(P0,"-$1").toLowerCase())):i.removeAttribute(n)}},Rr=function(t,n,i,s,r,a){var o=new An(t._pt,n,i,0,1,a?Z1:Y1);return t._pt=o,o.b=s,o.e=r,t._props.push(i),o},k1={deg:1,rad:1,turn:1},UR={grid:1,flex:1},Ur=function e(t,n,i,s){var r=parseFloat(i)||0,a=(i+"").trim().substr((r+"").length)||"px",o=wa.style,l=_R.test(n),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=s==="px",p=s==="%",_,g,m,d;if(s===a||!r||k1[s]||k1[a])return r;if(a!=="px"&&!h&&(r=e(t,n,i,"px")),d=t.getCTM&&$1(t),(p||a==="%")&&(Ps[n]||~n.indexOf("adius")))return _=d?t.getBBox()[l?"width":"height"]:t[u],Fe(p?r/_*f:r/100*_);if(o[l?"width":"height"]=f+(h?a:s),g=s!=="rem"&&~n.indexOf("adius")||s==="em"&&t.appendChild&&!c?t:t.parentNode,d&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===Cr||!g.appendChild)&&(g=Cr.body),m=g._gsap,m&&p&&m.width&&l&&m.time===zn.time&&!m.uncache)return Fe(r/m.width*f);if(p&&(n==="height"||n==="width")){var v=t.style[n];t.style[n]=f+s,_=t[u],v?t.style[n]=v:Dr(t,n)}else(p||a==="%")&&!UR[ai(g,"display")]&&(o.position=ai(t,"position")),g===t&&(o.position="static"),g.appendChild(wa),_=wa[u],g.removeChild(wa),o.position="absolute";return l&&p&&(m=Er(g),m.time=zn.time,m.width=g[u]),Fe(h?_*r/f:_&&r?f/_*r:0)},Is=function(t,n,i,s){var r;return N0||L0(),n in es&&n!=="transform"&&(n=es[n],~n.indexOf(",")&&(n=n.split(",")[0])),Ps[n]&&n!=="transform"?(r=Gc(t,s),r=n!=="transformOrigin"?r[n]:r.svg?r.origin:gf(ai(t,Hn))+" "+r.zOrigin+"px"):(r=t.style[n],(!r||r==="auto"||s||~(r+"").indexOf("calc("))&&(r=mf[n]&&mf[n](t,n,i)||ai(t,n)||v0(t,n)||(n==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?Ur(t,n,r,i)+i:r},LR=function(t,n,i,s){if(!i||i==="none"){var r=Ko(n,t,1),a=r&&ai(t,r,1);a&&a!==i?(n=r,i=a):n==="borderColor"&&(i=ai(t,"borderTopColor"))}var o=new An(this._pt,t.style,n,0,1,A0),l=0,c=0,u,f,h,p,_,g,m,d,v,y,x,T;if(o.b=i,o.e=s,i+="",s+="",s.substring(0,6)==="var(--"&&(s=ai(t,s.substring(4,s.indexOf(")")))),s==="auto"&&(g=t.style[n],t.style[n]=s,s=ai(t,n)||s,g?t.style[n]=g:Dr(t,n)),u=[i,s],x0(u),i=u[0],s=u[1],h=i.match(Sa)||[],T=s.match(Sa)||[],T.length){for(;f=Sa.exec(s);)m=f[0],v=s.substring(l,f.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),m!==(g=h[c++]||"")&&(p=parseFloat(g)||0,x=g.substr((p+"").length),m.charAt(1)==="="&&(m=Ma(p,m)+x),d=parseFloat(m),y=m.substr((d+"").length),l=Sa.lastIndex-y.length,y||(y=y||Vn.units[n]||x,l===s.length&&(s+=y,o.e+=y)),x!==y&&(p=Ur(t,n,g,y)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:p,c:d-p,m:_&&_<4||n==="zIndex"?Math.round:0});o.c=l<s.length?s.substring(l,s.length):""}else o.r=n==="display"&&s==="none"?Z1:Y1;return d0.test(s)&&(o.e=0),this._pt=o,o},X1={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},OR=function(t){var n=t.split(" "),i=n[0],s=n[1]||"50%";return(i==="top"||i==="bottom"||s==="left"||s==="right")&&(t=i,i=s,s=t),n[0]=X1[i]||i,n[1]=X1[s]||s,n.join(" ")},NR=function(t,n){if(n.tween&&n.tween._time===n.tween._dur){var i=n.t,s=i.style,r=n.u,a=i._gsap,o,l,c;if(r==="all"||r===!0)s.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Ps[o]&&(l=1,o=o==="transformOrigin"?Hn:Ne),Dr(i,o);l&&(Dr(i,Ne),a&&(a.svg&&i.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",Gc(i,1),a.uncache=1,J1(s)))}},mf={clearProps:function(t,n,i,s,r){if(r.data!=="isFromStart"){var a=t._pt=new An(t._pt,n,i,0,0,NR);return a.u=s,a.pr=-10,a.tween=r,t._props.push(i),1}}},Hc=[1,0,0,1,0,0],tb={},eb=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},W1=function(t){var n=ai(t,Ne);return eb(n)?Hc:n.substr(7).match(f0).map(Fe)},B0=function(t,n){var i=t._gsap||Er(t),s=t.style,r=W1(t),a,o,l,c;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Hc:r):(r===Hc&&!t.offsetParent&&t!==Zo&&!i.svg&&(l=s.display,s.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,Zo.appendChild(t)),r=W1(t),l?s.display=l:Dr(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):Zo.removeChild(t))),n&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},O0=function(t,n,i,s,r,a){var o=t._gsap,l=r||B0(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,p=l[0],_=l[1],g=l[2],m=l[3],d=l[4],v=l[5],y=n.split(" "),x=parseFloat(y[0])||0,T=parseFloat(y[1])||0,w,E,C,S;i?l!==Hc&&(E=p*m-_*g)&&(C=x*(m/E)+T*(-g/E)+(g*v-m*d)/E,S=x*(-_/E)+T*(p/E)-(p*v-_*d)/E,x=C,T=S):(w=j1(t),x=w.x+(~y[0].indexOf("%")?x/100*w.width:x),T=w.y+(~(y[1]||y[0]).indexOf("%")?T/100*w.height:T)),s||s!==!1&&o.smooth?(d=x-c,v=T-u,o.xOffset=f+(d*p+v*g)-d,o.yOffset=h+(d*_+v*m)-v):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=T,o.smooth=!!s,o.origin=n,o.originIsAbsolute=!!i,t.style[Hn]="0px 0px",a&&(Rr(a,o,"xOrigin",c,x),Rr(a,o,"yOrigin",u,T),Rr(a,o,"xOffset",f,o.xOffset),Rr(a,o,"yOffset",h,o.yOffset)),t.setAttribute("data-svg-origin",x+" "+T)},Gc=function(t,n){var i=t._gsap||new S0(t);if("x"in i&&!n&&!i.uncache)return i;var s=t.style,r=i.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=ai(t,Hn)||"0",u,f,h,p,_,g,m,d,v,y,x,T,w,E,C,S,M,U,I,B,H,W,k,K,F,it,lt,gt,rt,Pt,kt,It;return u=f=h=g=m=d=v=y=x=0,p=_=1,i.svg=!!(t.getCTM&&$1(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(s[Ne]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ne]!=="none"?l[Ne]:"")),s.scale=s.rotate=s.translate="none"),E=B0(t,i.svg),i.svg&&(i.uncache?(F=t.getBBox(),c=i.xOrigin-F.x+"px "+(i.yOrigin-F.y)+"px",K=""):K=!n&&t.getAttribute("data-svg-origin"),O0(t,K||c,!!K||i.originIsAbsolute,i.smooth!==!1,E)),T=i.xOrigin||0,w=i.yOrigin||0,E!==Hc&&(U=E[0],I=E[1],B=E[2],H=E[3],u=W=E[4],f=k=E[5],E.length===6?(p=Math.sqrt(U*U+I*I),_=Math.sqrt(H*H+B*B),g=U||I?Yo(I,U)*Aa:0,v=B||H?Yo(B,H)*Aa+g:0,v&&(_*=Math.abs(Math.cos(v*Jo))),i.svg&&(u-=T-(T*U+w*B),f-=w-(T*I+w*H))):(It=E[6],Pt=E[7],lt=E[8],gt=E[9],rt=E[10],kt=E[11],u=E[12],f=E[13],h=E[14],C=Yo(It,rt),m=C*Aa,C&&(S=Math.cos(-C),M=Math.sin(-C),K=W*S+lt*M,F=k*S+gt*M,it=It*S+rt*M,lt=W*-M+lt*S,gt=k*-M+gt*S,rt=It*-M+rt*S,kt=Pt*-M+kt*S,W=K,k=F,It=it),C=Yo(-B,rt),d=C*Aa,C&&(S=Math.cos(-C),M=Math.sin(-C),K=U*S-lt*M,F=I*S-gt*M,it=B*S-rt*M,kt=H*M+kt*S,U=K,I=F,B=it),C=Yo(I,U),g=C*Aa,C&&(S=Math.cos(C),M=Math.sin(C),K=U*S+I*M,F=W*S+k*M,I=I*S-U*M,k=k*S-W*M,U=K,W=F),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,d=180-d),p=Fe(Math.sqrt(U*U+I*I+B*B)),_=Fe(Math.sqrt(k*k+It*It)),C=Yo(W,k),v=Math.abs(C)>2e-4?C*Aa:0,x=kt?1/(kt<0?-kt:kt):0),i.svg&&(K=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!eb(ai(t,Ne)),K&&t.setAttribute("transform",K))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(p*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),n=n||i.uncache,i.x=u-((i.xPercent=u&&(!n&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+a,i.y=f-((i.yPercent=f&&(!n&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+a,i.z=h+a,i.scaleX=Fe(p),i.scaleY=Fe(_),i.rotation=Fe(g)+o,i.rotationX=Fe(m)+o,i.rotationY=Fe(d)+o,i.skewX=v+o,i.skewY=y+o,i.transformPerspective=x+a,(i.zOrigin=parseFloat(c.split(" ")[2])||!n&&i.zOrigin||0)&&(s[Hn]=gf(c)),i.xOffset=i.yOffset=0,i.force3D=Vn.force3D,i.renderTransform=i.svg?PR:Q1?nb:IR,i.uncache=0,i},gf=function(t){return(t=t.split(" "))[0]+" "+t[1]},R0=function(t,n,i){var s=dn(n);return Fe(parseFloat(n)+parseFloat(Ur(t,"x",i+"px",s)))+s},IR=function(t,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,nb(t,n)},Ta="0deg",Vc="0px",Ea=") ",nb=function(t,n){var i=n||this,s=i.xPercent,r=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,u=i.rotationY,f=i.rotationX,h=i.skewX,p=i.skewY,_=i.scaleX,g=i.scaleY,m=i.transformPerspective,d=i.force3D,v=i.target,y=i.zOrigin,x="",T=d==="auto"&&t&&t!==1||d===!0;if(y&&(f!==Ta||u!==Ta)){var w=parseFloat(u)*Jo,E=Math.sin(w),C=Math.cos(w),S;w=parseFloat(f)*Jo,S=Math.cos(w),a=R0(v,a,E*S*-y),o=R0(v,o,-Math.sin(w)*-y),l=R0(v,l,C*S*-y+y)}m!==Vc&&(x+="perspective("+m+Ea),(s||r)&&(x+="translate("+s+"%, "+r+"%) "),(T||a!==Vc||o!==Vc||l!==Vc)&&(x+=l!==Vc||T?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ea),c!==Ta&&(x+="rotate("+c+Ea),u!==Ta&&(x+="rotateY("+u+Ea),f!==Ta&&(x+="rotateX("+f+Ea),(h!==Ta||p!==Ta)&&(x+="skew("+h+", "+p+Ea),(_!==1||g!==1)&&(x+="scale("+_+", "+g+Ea),v.style[Ne]=x||"translate(0, 0)"},PR=function(t,n){var i=n||this,s=i.xPercent,r=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,u=i.skewY,f=i.scaleX,h=i.scaleY,p=i.target,_=i.xOrigin,g=i.yOrigin,m=i.xOffset,d=i.yOffset,v=i.forceCSS,y=parseFloat(a),x=parseFloat(o),T,w,E,C,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Jo,c*=Jo,T=Math.cos(l)*f,w=Math.sin(l)*f,E=Math.sin(l-c)*-h,C=Math.cos(l-c)*h,c&&(u*=Jo,S=Math.tan(c-u),S=Math.sqrt(1+S*S),E*=S,C*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),T*=S,w*=S)),T=Fe(T),w=Fe(w),E=Fe(E),C=Fe(C)):(T=f,C=h,w=E=0),(y&&!~(a+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(y=Ur(p,"x",a,"px"),x=Ur(p,"y",o,"px")),(_||g||m||d)&&(y=Fe(y+_-(_*T+g*E)+m),x=Fe(x+g-(_*w+g*C)+d)),(s||r)&&(S=p.getBBox(),y=Fe(y+s/100*S.width),x=Fe(x+r/100*S.height)),S="matrix("+T+","+w+","+E+","+C+","+y+","+x+")",p.setAttribute("transform",S),v&&(p.style[Ne]=S)},BR=function(t,n,i,s,r){var a=360,o=je(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?Aa:1),c=l-s,u=s+c+"deg",f,h;return o&&(f=r.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*F1)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*F1)%a-~~(c/a)*a)),t._pt=h=new An(t._pt,n,i,s,c,yR),h.e=u,h.u="deg",t._props.push(i),h},q1=function(t,n){for(var i in n)t[i]=n[i];return t},zR=function(t,n,i){var s=q1({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,u,f,h,p,_;s.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[Ne]=n,o=Gc(i,1),Dr(i,Ne),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Ne],a[Ne]=n,o=Gc(i,1),a[Ne]=c);for(l in Ps)c=s[l],u=o[l],c!==u&&r.indexOf(l)<0&&(p=dn(c),_=dn(u),f=p!==_?Ur(i,l,c,_):parseFloat(c),h=parseFloat(u),t._pt=new An(t._pt,o,l,f,h-f,D0),t._pt.u=_||0,t._props.push(l));q1(o,s)};En("padding,margin,Width,Radius",function(e,t){var n="Top",i="Right",s="Bottom",r="Left",a=(t<3?[n,i,s,r]:[n+r,n+i,s+i,s+r]).map(function(o){return t<2?e+o:"border"+o+e});mf[t>1?"border"+e:e]=function(o,l,c,u,f){var h,p;if(arguments.length<4)return h=a.map(function(_){return Is(o,_,c)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(u+"").split(" "),p={},a.forEach(function(_,g){return p[_]=h[g]=h[g]||h[(g-1)/2|0]}),o.init(l,p,f)}});var z0={name:"css",register:L0,targetTest:function(t){return t.style&&t.nodeType},init:function(t,n,i,s,r){var a=this._props,o=t.style,l=i.vars.startAt,c,u,f,h,p,_,g,m,d,v,y,x,T,w,E,C,S;N0||L0(),this.styles=this.styles||K1(t),C=this.styles.props,this.tween=i;for(g in n)if(g!=="autoRound"&&(u=n[g],!(Bn[g]&&b0(g,n,i,s,t,r)))){if(p=typeof u,_=mf[g],p==="function"&&(u=u.call(i,s,t,r),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=qo(u)),_)_(this,t,g,u,i)&&(E=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),u+="",Os.lastIndex=0,Os.test(c)||(m=dn(c),d=dn(u),d?m!==d&&(c=Ur(t,g,c,d)+d):m&&(u+=m)),this.add(o,"setProperty",c,u,s,r,0,0,g),a.push(g),C.push(g,0,o[g]);else if(p!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(i,s,t,r):l[g],je(c)&&~c.indexOf("random(")&&(c=qo(c)),dn(c+"")||c==="auto"||(c+=Vn.units[g]||dn(Is(t,g))||""),(c+"").charAt(1)==="="&&(c=Is(t,g))):c=Is(t,g),h=parseFloat(c),v=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),f=parseFloat(u),g in es&&(g==="autoAlpha"&&(h===1&&Is(t,"visibility")==="hidden"&&f&&(h=0),C.push("visibility",0,o.visibility),Rr(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=es[g],~g.indexOf(",")&&(g=g.split(",")[0]))),y=g in Ps,y){if(this.styles.save(g),S=u,p==="string"&&u.substring(0,6)==="var(--"){if(u=ai(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var M=t.style.perspective;t.style.perspective=u,u=ai(t,"perspective"),M?t.style.perspective=M:Dr(t,"perspective")}f=parseFloat(u)}if(x||(T=t._gsap,T.renderTransform&&!n.parseTransform||Gc(t,n.parseTransform),w=n.smoothOrigin!==!1&&T.smooth,x=this._pt=new An(this._pt,o,Ne,0,1,T.renderTransform,T,0,-1),x.dep=1),g==="scale")this._pt=new An(this._pt,T,"scaleY",T.scaleY,(v?Ma(T.scaleY,v+f):f)-T.scaleY||0,D0),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(Hn,0,o[Hn]),u=OR(u),T.svg?O0(t,u,0,w,0,this):(d=parseFloat(u.split(" ")[2])||0,d!==T.zOrigin&&Rr(this,T,"zOrigin",T.zOrigin,d),Rr(this,o,g,gf(c),gf(u)));continue}else if(g==="svgOrigin"){O0(t,u,1,w,0,this);continue}else if(g in tb){BR(this,T,g,h,v?Ma(h,v+u):u);continue}else if(g==="smoothOrigin"){Rr(this,T,"smooth",T.smooth,u);continue}else if(g==="force3D"){T[g]=u;continue}else if(g==="transform"){zR(this,u,t);continue}}else g in o||(g=Ko(g)||g);if(y||(f||f===0)&&(h||h===0)&&!vR.test(u)&&g in o)m=(c+"").substr((h+"").length),f||(f=0),d=dn(u)||(g in Vn.units?Vn.units[g]:m),m!==d&&(h=Ur(t,g,c,d)),this._pt=new An(this._pt,y?T:o,g,h,(v?Ma(h,v+f):f)-h,!y&&(d==="px"||g==="zIndex")&&n.autoRound!==!1?MR:D0),this._pt.u=d||0,y&&S!==u?(this._pt.b=c,this._pt.e=S,this._pt.r=SR):m!==d&&d!=="%"&&(this._pt.b=c,this._pt.r=xR);else if(g in o)LR.call(this,t,g,c,v?v+u:u);else if(g in t)this.add(t,g,c||t[g],v?v+u:u,s,r);else if(g!=="parseTransform"){uf(g,u);continue}y||(g in o?C.push(g,0,o[g]):typeof t[g]=="function"?C.push(g,2,t[g]()):C.push(g,1,c||t[g])),a.push(g)}}E&&C0(this)},render:function(t,n){if(n.tween._time||!I0())for(var i=n._pt;i;)i.r(t,i.d),i=i._next;else n.styles.revert()},get:Is,aliases:es,getSetter:function(t,n,i){var s=es[n];return s&&s.indexOf(",")<0&&(n=s),n in Ps&&n!==Hn&&(t._gsap.x||Is(t,"x"))?i&&z1===i?n==="scale"?AR:ER:(z1=i||{})&&(n==="scale"?wR:CR):t.style&&!cf(t.style[n])?bR:~n.indexOf("-")?TR:pf(t,n)},core:{_removeProperty:Dr,_getMatrix:B0}};_n.utils.checkPrefix=Ko;_n.core.getStyleSaver=K1;(function(e,t,n,i){var s=En(e+","+t+","+n,function(r){Ps[r]=1});En(t,function(r){Vn.units[r]="deg",tb[r]=1}),es[s[13]]=e+","+t,En(i,function(r){var a=r.split(":");es[a[1]]=s[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");En("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(e){Vn.units[e]="px"});_n.registerPlugin(z0);var Di=_n.registerPlugin(z0)||_n,DO=Di.core.Tween;var Cn=Qr(wl());var xb=0,p_=1,Sb=2;var m_=1,Mb=2,as=3,ks=0,wn=1,os=2,qs=0,Na=1,g_=2,__=3,v_=4,bb=5,Vr=100,Tb=101,Eb=102,Ab=103,wb=104,Cb=200,Rb=201,Db=202,Ub=203,Pf=204,Bf=205,Lb=206,Ob=207,Nb=208,Ib=209,Pb=210,Bb=211,zb=212,Fb=213,Vb=214,ad=0,od=1,ld=2,Ia=3,cd=4,ud=5,hd=6,fd=7,y_=0,Hb=1,Gb=2,Ys=0,kb=1,Xb=2,Wb=3,qb=4,Yb=5,Zb=6,Jb=7;var x_=300,Va=301,Ha=302,dd=303,pd=304,hu=306,zf=1e3,Fr=1001,Ff=1002,Li=1003,Kb=1004;var fu=1005;var Gi=1006,md=1007;var Wr=1008;var ls=1009,S_=1010,M_=1011,_l=1012,gd=1013,qr=1014,cs=1015,vl=1016,_d=1017,vd=1018,yl=1020,b_=35902,T_=35899,E_=1021,A_=1022,Ni=1023,ul=1026,xl=1027,w_=1028,yd=1029,C_=1030,xd=1031;var Sd=1033,du=33776,pu=33777,mu=33778,gu=33779,Md=35840,bd=35841,Td=35842,Ed=35843,Ad=36196,wd=37492,Cd=37496,Rd=37808,Dd=37809,Ud=37810,Ld=37811,Od=37812,Nd=37813,Id=37814,Pd=37815,Bd=37816,zd=37817,Fd=37818,Vd=37819,Hd=37820,Gd=37821,kd=36492,Xd=36494,Wd=36495,qd=36283,Yd=36284,Zd=36285,Jd=36286;var Zc=2300,Vf=2301,If=2302,l_=2400,c_=2401,u_=2402;var Qb=3200,jb=3201;var $b=0,tT=1,Zs="",ci="srgb",Pa="srgb-linear",Jc="linear",le="srgb";var La=7680;var h_=519,eT=512,nT=513,iT=514,R_=515,sT=516,rT=517,aT=518,oT=519,f_=35044;var D_="300 es",Hi=2e3,Kc=2001;var Xs=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var F0=Math.PI/180,Hf=180/Math.PI;function _u(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vn[e&255]+vn[e>>8&255]+vn[e>>16&255]+vn[e>>24&255]+"-"+vn[t&255]+vn[t>>8&255]+"-"+vn[t>>16&15|64]+vn[t>>24&255]+"-"+vn[n&63|128]+vn[n>>8&255]+"-"+vn[n>>16&255]+vn[n>>24&255]+vn[i&255]+vn[i>>8&255]+vn[i>>16&255]+vn[i>>24&255]).toLowerCase()}function jt(e,t,n){return Math.max(t,Math.min(n,e))}function FR(e,t){return(e%t+t)%t}function V0(e,t,n){return(1-n)*e+n*t}function kc(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function Gn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var Jt=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=jt(this.x,t.x,n.x),this.y=jt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=jt(this.x,t,n),this.y=jt(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ws=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],h=r[a+0],p=r[a+1],_=r[a+2],g=r[a+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=u,t[n+3]=f;return}if(o===1){t[n+0]=h,t[n+1]=p,t[n+2]=_,t[n+3]=g;return}if(f!==g||l!==h||c!==p||u!==_){let m=1-o,d=l*h+c*p+u*_+f*g,v=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){let T=Math.sqrt(y),w=Math.atan2(T,d*v);m=Math.sin(m*w)/T,o=Math.sin(o*w)/T}let x=o*v;if(l=l*m+h*x,c=c*m+p*x,u=u*m+_*x,f=f*m+g*x,m===1-o){let T=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=T,c*=T,u*=T,f*=T}}t[n]=l,t[n+1]=c,t[n+2]=u,t[n+3]=f}static multiplyQuaternionsFlat(t,n,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[a],h=r[a+1],p=r[a+2],_=r[a+3];return t[n]=o*_+u*f+l*p-c*h,t[n+1]=l*_+u*h+c*f-o*p,t[n+2]=c*_+u*p+o*h-l*f,t[n+3]=u*_-o*f-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),f=o(r/2),h=l(i/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"YXZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"ZXY":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"ZYX":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"YZX":this._x=h*u*f+c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f-h*p*_;break;case"XZY":this._x=h*u*f-c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],r=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+o+f;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>f){let p=2*Math.sqrt(1+i-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>f){let p=2*Math.sqrt(1+o-i-f);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+f-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,r=t._z,a=t._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-n;return this._w=p*a+n*this._w,this._x=p*i+n*this._x,this._y=p*s+n*this._y,this._z=p*r+n*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(n),r*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class e{constructor(t=0,n=0,i=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(ib.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(ib.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),u=2*(o*n-r*s),f=2*(r*i-a*n);return this.x=n+l*c+a*f-o*u,this.y=i+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=jt(this.x,t.x,n.x),this.y=jt(this.y,t.y,n.y),this.z=jt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=jt(this.x,t,n),this.y=jt(this.y,t,n),this.z=jt(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,r=t.z,a=n.x,o=n.y,l=n.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return H0.copy(this).projectOnVector(t),this.sub(H0)}reflect(t){return this.sub(H0.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},H0=new z,ib=new Ws,Vt=class e{constructor(t,n,i,s,r,a,o,l,c){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,a,o,l,c)}set(t,n,i,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],_=i[8],g=s[0],m=s[3],d=s[6],v=s[1],y=s[4],x=s[7],T=s[2],w=s[5],E=s[8];return r[0]=a*g+o*v+l*T,r[3]=a*m+o*y+l*w,r[6]=a*d+o*x+l*E,r[1]=c*g+u*v+f*T,r[4]=c*m+u*y+f*w,r[7]=c*d+u*x+f*E,r[2]=h*g+p*v+_*T,r[5]=h*m+p*y+_*w,r[8]=h*d+p*x+_*E,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return n*a*u-n*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*a-o*c,h=o*l-u*r,p=c*r-a*l,_=n*f+i*h+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return t[0]=f*g,t[1]=(s*c-u*i)*g,t[2]=(o*i-s*a)*g,t[3]=h*g,t[4]=(u*n-s*l)*g,t[5]=(s*r-o*n)*g,t[6]=p*g,t[7]=(i*l-c*n)*g,t[8]=(a*n-i*r)*g,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(G0.makeScale(t,n)),this}rotate(t){return this.premultiply(G0.makeRotation(-t)),this}translate(t,n){return this.premultiply(G0.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},G0=new Vt;function U_(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Qc(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function lT(){let e=Qc("canvas");return e.style.display="block",e}var sb={};function hl(e){e in sb||(sb[e]=!0,console.warn(e))}function cT(e,t,n){return new Promise(function(i,s){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var rb=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ab=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function VR(){let e={enabled:!0,workingColorSpace:Pa,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===le&&(s.r=Gs(s.r),s.g=Gs(s.g),s.b=Gs(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===le&&(s.r=cl(s.r),s.g=cl(s.g),s.b=cl(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Zs?Jc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return hl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return hl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Pa]:{primaries:t,whitePoint:i,transfer:Jc,toXYZ:rb,fromXYZ:ab,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:t,whitePoint:i,transfer:le,toXYZ:rb,fromXYZ:ab,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),e}var $t=VR();function Gs(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function cl(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Qo,Gf=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Qo===void 0&&(Qo=Qc("canvas")),Qo.width=t.width,Qo.height=t.height;let s=Qo.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Qo}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Qc("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Gs(r[a]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Gs(n[i]/255)*255):n[i]=Gs(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},HR=0,fl=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:HR++}),this.uuid=_u(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(k0(s[a].image)):r.push(k0(s[a]))}else r=k0(s);i.url=r}return n||(t.images[this.uuid]=i),i}};function k0(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Gf.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var GR=0,X0=new z,hi=class e extends Xs{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=Fr,s=Fr,r=Gi,a=Wr,o=Ni,l=ls,c=e.DEFAULT_ANISOTROPY,u=Zs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:GR++}),this.uuid=_u(),this.name="",this.source=new fl(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Jt(0,0),this.repeat=new Jt(1,1),this.center=new Jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(X0).x}get height(){return this.source.getSize(X0).y}get depth(){return this.source.getSize(X0).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==x_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zf:t.x=t.x-Math.floor(t.x);break;case Fr:t.x=t.x<0?0:1;break;case Ff:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zf:t.y=t.y-Math.floor(t.y);break;case Fr:t.y=t.y<0?0:1;break;case Ff:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};hi.DEFAULT_IMAGE=null;hi.DEFAULT_MAPPING=x_;hi.DEFAULT_ANISOTROPY=1;var Ve=class e{constructor(t=0,n=0,i=0,s=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*n+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*n+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*n+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,r,l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],_=l[9],g=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let y=(c+1)/2,x=(p+1)/2,T=(d+1)/2,w=(u+h)/4,E=(f+g)/4,C=(_+m)/4;return y>x&&y>T?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=w/i,r=E/i):x>T?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=w/s,r=C/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=E/r,s=C/r),this.set(i,s,r,n),this}let v=Math.sqrt((m-_)*(m-_)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(f-g)/v,this.z=(h-u)/v,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=jt(this.x,t.x,n.x),this.y=jt(this.y,t.y,n.y),this.z=jt(this.z,t.z,n.z),this.w=jt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=jt(this.x,t,n),this.y=jt(this.y,t,n),this.z=jt(this.z,t,n),this.w=jt(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},kf=class extends Xs{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Ve(0,0,t,n),this.scissorTest=!1,this.viewport=new Ve(0,0,t,n);let s={width:t,height:n,depth:i.depth},r=new hi(s);this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let n={minFilter:Gi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new fl(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ss=class extends kf{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},jc=class extends hi{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Li,this.minFilter=Li,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xf=class extends hi{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Li,this.minFilter=Li,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hr=class{constructor(t=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(zi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(zi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=zi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(n===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,zi):zi.fromBufferAttribute(r,a),zi.applyMatrix4(t.matrixWorld),this.expandByPoint(zi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_f.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_f.copy(i.boundingBox)),_f.applyMatrix4(t.matrixWorld),this.union(_f)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,zi),zi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xc),vf.subVectors(this.max,Xc),jo.subVectors(t.a,Xc),$o.subVectors(t.b,Xc),tl.subVectors(t.c,Xc),Lr.subVectors($o,jo),Or.subVectors(tl,$o),Ca.subVectors(jo,tl);let n=[0,-Lr.z,Lr.y,0,-Or.z,Or.y,0,-Ca.z,Ca.y,Lr.z,0,-Lr.x,Or.z,0,-Or.x,Ca.z,0,-Ca.x,-Lr.y,Lr.x,0,-Or.y,Or.x,0,-Ca.y,Ca.x,0];return!W0(n,jo,$o,tl,vf)||(n=[1,0,0,0,1,0,0,0,1],!W0(n,jo,$o,tl,vf))?!1:(yf.crossVectors(Lr,Or),n=[yf.x,yf.y,yf.z],W0(n,jo,$o,tl,vf))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Bs=[new z,new z,new z,new z,new z,new z,new z,new z],zi=new z,_f=new Hr,jo=new z,$o=new z,tl=new z,Lr=new z,Or=new z,Ca=new z,Xc=new z,vf=new z,yf=new z,Ra=new z;function W0(e,t,n,i,s){for(let r=0,a=e.length-3;r<=a;r+=3){Ra.fromArray(e,r);let o=s.x*Math.abs(Ra.x)+s.y*Math.abs(Ra.y)+s.z*Math.abs(Ra.z),l=t.dot(Ra),c=n.dot(Ra),u=i.dot(Ra);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var kR=new Hr,Wc=new z,q0=new z,dl=class{constructor(t=new z,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):kR.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Wc.subVectors(t,this.center);let n=Wc.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Wc,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(q0.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Wc.copy(t.center).add(q0)),this.expandByPoint(Wc.copy(t.center).sub(q0))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},zs=new z,Y0=new z,xf=new z,Nr=new z,Z0=new z,Sf=new z,J0=new z,Wf=class{constructor(t=new z,n=new z(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zs)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=zs.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(zs.copy(this.origin).addScaledVector(this.direction,n),zs.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){Y0.copy(t).add(n).multiplyScalar(.5),xf.copy(n).sub(t).normalize(),Nr.copy(this.origin).sub(Y0);let r=t.distanceTo(n)*.5,a=-this.direction.dot(xf),o=Nr.dot(this.direction),l=-Nr.dot(xf),c=Nr.lengthSq(),u=Math.abs(1-a*a),f,h,p,_;if(u>0)if(f=a*l-o,h=a*o-l,_=r*u,f>=0)if(h>=-_)if(h<=_){let g=1/u;f*=g,h*=g,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Y0).addScaledVector(xf,h),p}intersectSphere(t,n){zs.subVectors(t.center,this.origin);let i=zs.dot(this.direction),s=zs.dot(zs)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,zs)!==null}intersectTriangle(t,n,i,s,r){Z0.subVectors(n,t),Sf.subVectors(i,t),J0.crossVectors(Z0,Sf);let a=this.direction.dot(J0),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Nr.subVectors(this.origin,t);let l=o*this.direction.dot(Sf.crossVectors(Nr,Sf));if(l<0)return null;let c=o*this.direction.dot(Z0.cross(Nr));if(c<0||l+c>a)return null;let u=-o*Nr.dot(J0);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$e=class e{constructor(t,n,i,s,r,a,o,l,c,u,f,h,p,_,g,m){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,a,o,l,c,u,f,h,p,_,g,m)}set(t,n,i,s,r,a,o,l,c,u,f,h,p,_,g,m){let d=this.elements;return d[0]=t,d[4]=n,d[8]=i,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=g,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){let n=this.elements,i=t.elements,s=1/el.setFromMatrixColumn(t,0).length(),r=1/el.setFromMatrixColumn(t,1).length(),a=1/el.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let h=a*u,p=a*f,_=o*u,g=o*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+_*c,n[5]=h-g*c,n[9]=-o*l,n[2]=g-h*c,n[6]=_+p*c,n[10]=a*l}else if(t.order==="YXZ"){let h=l*u,p=l*f,_=c*u,g=c*f;n[0]=h+g*o,n[4]=_*o-p,n[8]=a*c,n[1]=a*f,n[5]=a*u,n[9]=-o,n[2]=p*o-_,n[6]=g+h*o,n[10]=a*l}else if(t.order==="ZXY"){let h=l*u,p=l*f,_=c*u,g=c*f;n[0]=h-g*o,n[4]=-a*f,n[8]=_+p*o,n[1]=p+_*o,n[5]=a*u,n[9]=g-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(t.order==="ZYX"){let h=a*u,p=a*f,_=o*u,g=o*f;n[0]=l*u,n[4]=_*c-p,n[8]=h*c+g,n[1]=l*f,n[5]=g*c+h,n[9]=p*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(t.order==="YZX"){let h=a*l,p=a*c,_=o*l,g=o*c;n[0]=l*u,n[4]=g-h*f,n[8]=_*f+p,n[1]=f,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*f+_,n[10]=h-g*f}else if(t.order==="XZY"){let h=a*l,p=a*c,_=o*l,g=o*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+g,n[5]=a*u,n[9]=p*f-_,n[2]=_*f-p,n[6]=o*u,n[10]=g*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(XR,t,WR)}lookAt(t,n,i){let s=this.elements;return oi.subVectors(t,n),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),Ir.crossVectors(i,oi),Ir.lengthSq()===0&&(Math.abs(i.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),Ir.crossVectors(i,oi)),Ir.normalize(),Mf.crossVectors(oi,Ir),s[0]=Ir.x,s[4]=Mf.x,s[8]=oi.x,s[1]=Ir.y,s[5]=Mf.y,s[9]=oi.y,s[2]=Ir.z,s[6]=Mf.z,s[10]=oi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],_=i[2],g=i[6],m=i[10],d=i[14],v=i[3],y=i[7],x=i[11],T=i[15],w=s[0],E=s[4],C=s[8],S=s[12],M=s[1],U=s[5],I=s[9],B=s[13],H=s[2],W=s[6],k=s[10],K=s[14],F=s[3],it=s[7],lt=s[11],gt=s[15];return r[0]=a*w+o*M+l*H+c*F,r[4]=a*E+o*U+l*W+c*it,r[8]=a*C+o*I+l*k+c*lt,r[12]=a*S+o*B+l*K+c*gt,r[1]=u*w+f*M+h*H+p*F,r[5]=u*E+f*U+h*W+p*it,r[9]=u*C+f*I+h*k+p*lt,r[13]=u*S+f*B+h*K+p*gt,r[2]=_*w+g*M+m*H+d*F,r[6]=_*E+g*U+m*W+d*it,r[10]=_*C+g*I+m*k+d*lt,r[14]=_*S+g*B+m*K+d*gt,r[3]=v*w+y*M+x*H+T*F,r[7]=v*E+y*U+x*W+T*it,r[11]=v*C+y*I+x*k+T*lt,r[15]=v*S+y*B+x*K+T*gt,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],p=t[14],_=t[3],g=t[7],m=t[11],d=t[15];return _*(+r*l*f-s*c*f-r*o*h+i*c*h+s*o*p-i*l*p)+g*(+n*l*p-n*c*h+r*a*h-s*a*p+s*c*u-r*l*u)+m*(+n*c*f-n*o*p-r*a*f+i*a*p+r*o*u-i*c*u)+d*(-s*o*u-n*l*f+n*o*h+s*a*f-i*a*h+i*l*u)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],p=t[11],_=t[12],g=t[13],m=t[14],d=t[15],v=f*m*c-g*h*c+g*l*p-o*m*p-f*l*d+o*h*d,y=_*h*c-u*m*c-_*l*p+a*m*p+u*l*d-a*h*d,x=u*g*c-_*f*c+_*o*p-a*g*p-u*o*d+a*f*d,T=_*f*l-u*g*l-_*o*h+a*g*h+u*o*m-a*f*m,w=n*v+i*y+s*x+r*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/w;return t[0]=v*E,t[1]=(g*h*r-f*m*r-g*s*p+i*m*p+f*s*d-i*h*d)*E,t[2]=(o*m*r-g*l*r+g*s*c-i*m*c-o*s*d+i*l*d)*E,t[3]=(f*l*r-o*h*r-f*s*c+i*h*c+o*s*p-i*l*p)*E,t[4]=y*E,t[5]=(u*m*r-_*h*r+_*s*p-n*m*p-u*s*d+n*h*d)*E,t[6]=(_*l*r-a*m*r-_*s*c+n*m*c+a*s*d-n*l*d)*E,t[7]=(a*h*r-u*l*r+u*s*c-n*h*c-a*s*p+n*l*p)*E,t[8]=x*E,t[9]=(_*f*r-u*g*r-_*i*p+n*g*p+u*i*d-n*f*d)*E,t[10]=(a*g*r-_*o*r+_*i*c-n*g*c-a*i*d+n*o*d)*E,t[11]=(u*o*r-a*f*r-u*i*c+n*f*c+a*i*p-n*o*p)*E,t[12]=T*E,t[13]=(u*g*s-_*f*s+_*i*h-n*g*h-u*i*m+n*f*m)*E,t[14]=(_*o*s-a*g*s-_*i*l+n*g*l+a*i*m-n*o*m)*E,t[15]=(a*f*s-u*o*s+u*i*l-n*f*l-a*i*h+n*o*h)*E,this}scale(t){let n=this.elements,i=t.x,s=t.y,r=t.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,r=n._x,a=n._y,o=n._z,l=n._w,c=r+r,u=a+a,f=o+o,h=r*c,p=r*u,_=r*f,g=a*u,m=a*f,d=o*f,v=l*c,y=l*u,x=l*f,T=i.x,w=i.y,E=i.z;return s[0]=(1-(g+d))*T,s[1]=(p+x)*T,s[2]=(_-y)*T,s[3]=0,s[4]=(p-x)*w,s[5]=(1-(h+d))*w,s[6]=(m+v)*w,s[7]=0,s[8]=(_+y)*E,s[9]=(m-v)*E,s[10]=(1-(h+g))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements,r=el.set(s[0],s[1],s[2]).length(),a=el.set(s[4],s[5],s[6]).length(),o=el.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Fi.copy(this);let c=1/r,u=1/a,f=1/o;return Fi.elements[0]*=c,Fi.elements[1]*=c,Fi.elements[2]*=c,Fi.elements[4]*=u,Fi.elements[5]*=u,Fi.elements[6]*=u,Fi.elements[8]*=f,Fi.elements[9]*=f,Fi.elements[10]*=f,n.setFromRotationMatrix(Fi),i.x=r,i.y=a,i.z=o,this}makePerspective(t,n,i,s,r,a,o=Hi,l=!1){let c=this.elements,u=2*r/(n-t),f=2*r/(i-s),h=(n+t)/(n-t),p=(i+s)/(i-s),_,g;if(l)_=r/(a-r),g=a*r/(a-r);else if(o===Hi)_=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Kc)_=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,r,a,o=Hi,l=!1){let c=this.elements,u=2/(n-t),f=2/(i-s),h=-(n+t)/(n-t),p=-(i+s)/(i-s),_,g;if(l)_=1/(a-r),g=a/(a-r);else if(o===Hi)_=-2/(a-r),g=-(a+r)/(a-r);else if(o===Kc)_=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},el=new z,Fi=new $e,XR=new z(0,0,0),WR=new z(1,1,1),Ir=new z,Mf=new z,oi=new z,ob=new $e,lb=new Ws,rs=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return ob.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ob,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return lb.setFromEuler(this),this.setFromQuaternion(lb,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};rs.DEFAULT_ORDER="XYZ";var $c=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},qR=0,cb=new z,nl=new Ws,Fs=new $e,bf=new z,qc=new z,YR=new z,ZR=new Ws,ub=new z(1,0,0),hb=new z(0,1,0),fb=new z(0,0,1),db={type:"added"},JR={type:"removed"},il={type:"childadded",child:null},K0={type:"childremoved",child:null},Oi=class e extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qR++}),this.uuid=_u(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new z,n=new rs,i=new Ws,s=new z(1,1,1);function r(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $e},normalMatrix:{value:new Vt}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $c,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return nl.setFromAxisAngle(t,n),this.quaternion.multiply(nl),this}rotateOnWorldAxis(t,n){return nl.setFromAxisAngle(t,n),this.quaternion.premultiply(nl),this}rotateX(t){return this.rotateOnAxis(ub,t)}rotateY(t){return this.rotateOnAxis(hb,t)}rotateZ(t){return this.rotateOnAxis(fb,t)}translateOnAxis(t,n){return cb.copy(t).applyQuaternion(this.quaternion),this.position.add(cb.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(ub,t)}translateY(t){return this.translateOnAxis(hb,t)}translateZ(t){return this.translateOnAxis(fb,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fs.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?bf.copy(t):bf.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),qc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fs.lookAt(qc,bf,this.up):Fs.lookAt(bf,qc,this.up),this.quaternion.setFromRotationMatrix(Fs),s&&(Fs.extractRotation(s.matrixWorld),nl.setFromRotationMatrix(Fs),this.quaternion.premultiply(nl.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(db),il.child=t,this.dispatchEvent(il),il.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(JR),K0.child=t,this.dispatchEvent(K0),K0.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fs.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(db),il.child=t,this.dispatchEvent(il),il.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qc,t,YR),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qc,ZR,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(n){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Oi.DEFAULT_UP=new z(0,1,0);Oi.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Vi=new z,Vs=new z,Q0=new z,Hs=new z,sl=new z,rl=new z,pb=new z,j0=new z,$0=new z,t_=new z,e_=new Ve,n_=new Ve,i_=new Ve,zr=class e{constructor(t=new z,n=new z,i=new z){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),Vi.subVectors(t,n),s.cross(Vi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,n,i,s,r){Vi.subVectors(s,n),Vs.subVectors(i,n),Q0.subVectors(t,n);let a=Vi.dot(Vi),o=Vi.dot(Vs),l=Vi.dot(Q0),c=Vs.dot(Vs),u=Vs.dot(Q0),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let h=1/f,p=(c*l-o*u)*h,_=(a*u-o*l)*h;return r.set(1-p-_,_,p)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Hs)===null?!1:Hs.x>=0&&Hs.y>=0&&Hs.x+Hs.y<=1}static getInterpolation(t,n,i,s,r,a,o,l){return this.getBarycoord(t,n,i,s,Hs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Hs.x),l.addScaledVector(a,Hs.y),l.addScaledVector(o,Hs.z),l)}static getInterpolatedAttribute(t,n,i,s,r,a){return e_.setScalar(0),n_.setScalar(0),i_.setScalar(0),e_.fromBufferAttribute(t,n),n_.fromBufferAttribute(t,i),i_.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(e_,r.x),a.addScaledVector(n_,r.y),a.addScaledVector(i_,r.z),a}static isFrontFacing(t,n,i,s){return Vi.subVectors(i,n),Vs.subVectors(t,n),Vi.cross(Vs).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Vi.subVectors(this.c,this.b),Vs.subVectors(this.a,this.b),Vi.cross(Vs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,r){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,r)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,r=this.c,a,o;sl.subVectors(s,i),rl.subVectors(r,i),j0.subVectors(t,i);let l=sl.dot(j0),c=rl.dot(j0);if(l<=0&&c<=0)return n.copy(i);$0.subVectors(t,s);let u=sl.dot($0),f=rl.dot($0);if(u>=0&&f<=u)return n.copy(s);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(sl,a);t_.subVectors(t,r);let p=sl.dot(t_),_=rl.dot(t_);if(_>=0&&p<=_)return n.copy(r);let g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(rl,o);let m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return pb.subVectors(r,s),o=(f-u)/(f-u+(p-_)),n.copy(s).addScaledVector(pb,o);let d=1/(m+g+h);return a=g*d,o=h*d,n.copy(i).addScaledVector(sl,a).addScaledVector(rl,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},uT={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pr={h:0,s:0,l:0},Tf={h:0,s:0,l:0};function s_(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var se=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=ci){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=$t.workingColorSpace){return this.r=t,this.g=n,this.b=i,$t.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=$t.workingColorSpace){if(t=FR(t,1),n=jt(n,0,1),i=jt(i,0,1),n===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+n):i+n-i*n,a=2*i-r;this.r=s_(a,r,t+1/3),this.g=s_(a,r,t),this.b=s_(a,r,t-1/3)}return $t.colorSpaceToWorking(this,s),this}setStyle(t,n=ci){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=ci){let i=uT[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gs(t.r),this.g=Gs(t.g),this.b=Gs(t.b),this}copyLinearToSRGB(t){return this.r=cl(t.r),this.g=cl(t.g),this.b=cl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ci){return $t.workingToColorSpace(yn.copy(this),t),Math.round(jt(yn.r*255,0,255))*65536+Math.round(jt(yn.g*255,0,255))*256+Math.round(jt(yn.b*255,0,255))}getHexString(t=ci){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=$t.workingColorSpace){$t.workingToColorSpace(yn.copy(this),n);let i=yn.r,s=yn.g,r=yn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,n=$t.workingColorSpace){return $t.workingToColorSpace(yn.copy(this),n),t.r=yn.r,t.g=yn.g,t.b=yn.b,t}getStyle(t=ci){$t.workingToColorSpace(yn.copy(this),t);let n=yn.r,i=yn.g,s=yn.b;return t!==ci?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(Pr),this.setHSL(Pr.h+t,Pr.s+n,Pr.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Pr),t.getHSL(Tf);let i=V0(Pr.h,Tf.h,n),s=V0(Pr.s,Tf.s,n),r=V0(Pr.l,Tf.l,n);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new se;se.NAMES=uT;var KR=0,Ba=class extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KR++}),this.uuid=_u(),this.name="",this.type="Material",this.blending=Na,this.side=ks,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pf,this.blendDst=Bf,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=Ia,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=h_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=La,this.stencilZFail=La,this.stencilZPass=La,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Na&&(i.blending=this.blending),this.side!==ks&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Pf&&(i.blendSrc=this.blendSrc),this.blendDst!==Bf&&(i.blendDst=this.blendDst),this.blendEquation!==Vr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ia&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==h_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==La&&(i.stencilFail=this.stencilFail),this.stencilZFail!==La&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==La&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(n){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},tu=class extends Ba{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rs,this.combine=y_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ze=new z,Ef=new Jt,QR=0,ui=class{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:QR++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=f_,this.updateRanges=[],this.gpuType=cs,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ef.fromBufferAttribute(this,n),Ef.applyMatrix3(t),this.setXY(n,Ef.x,Ef.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ze.fromBufferAttribute(this,n),Ze.applyMatrix3(t),this.setXYZ(n,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Ze.fromBufferAttribute(this,n),Ze.applyMatrix4(t),this.setXYZ(n,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Ze.fromBufferAttribute(this,n),Ze.applyNormalMatrix(t),this.setXYZ(n,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Ze.fromBufferAttribute(this,n),Ze.transformDirection(t),this.setXYZ(n,Ze.x,Ze.y,Ze.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=kc(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=kc(n,this.array)),n}setX(t,n){return this.normalized&&(n=Gn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=kc(n,this.array)),n}setY(t,n){return this.normalized&&(n=Gn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=kc(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Gn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=kc(n,this.array)),n}setW(t,n){return this.normalized&&(n=Gn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Gn(n,this.array),i=Gn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=Gn(n,this.array),i=Gn(i,this.array),s=Gn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,r){return t*=this.itemSize,this.normalized&&(n=Gn(n,this.array),i=Gn(i,this.array),s=Gn(s,this.array),r=Gn(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==f_&&(t.usage=this.usage),t}};var eu=class extends ui{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var nu=class extends ui{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var is=class extends ui{constructor(t,n,i){super(new Float32Array(t),n,i)}},jR=0,Ui=new $e,r_=new Oi,al=new z,li=new Hr,Yc=new Hr,an=new z,Gr=class e extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jR++}),this.uuid=_u(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(U_(t)?nu:eu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Vt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ui.makeRotationFromQuaternion(t),this.applyMatrix4(Ui),this}rotateX(t){return Ui.makeRotationX(t),this.applyMatrix4(Ui),this}rotateY(t){return Ui.makeRotationY(t),this.applyMatrix4(Ui),this}rotateZ(t){return Ui.makeRotationZ(t),this.applyMatrix4(Ui),this}translate(t,n,i){return Ui.makeTranslation(t,n,i),this.applyMatrix4(Ui),this}scale(t,n,i){return Ui.makeScale(t,n,i),this.applyMatrix4(Ui),this}lookAt(t){return r_.lookAt(t),r_.updateMatrix(),this.applyMatrix4(r_.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(al).negate(),this.translate(al.x,al.y,al.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new is(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let r=t[s];n.setXYZ(s,r.x,r.y,r.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hr);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let r=n[i];li.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dl);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let i=this.boundingSphere.center;if(li.setFromBufferAttribute(t),n)for(let r=0,a=n.length;r<a;r++){let o=n[r];Yc.setFromBufferAttribute(o),this.morphTargetsRelative?(an.addVectors(li.min,Yc.min),li.expandByPoint(an),an.addVectors(li.max,Yc.max),li.expandByPoint(an)):(li.expandByPoint(Yc.min),li.expandByPoint(Yc.max))}li.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)an.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(an));if(n)for(let r=0,a=n.length;r<a;r++){let o=n[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)an.fromBufferAttribute(o,c),l&&(al.fromBufferAttribute(t,c),an.add(al)),s=Math.max(s,i.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<i.count;C++)o[C]=new z,l[C]=new z;let c=new z,u=new z,f=new z,h=new Jt,p=new Jt,_=new Jt,g=new z,m=new z;function d(C,S,M){c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,S),f.fromBufferAttribute(i,M),h.fromBufferAttribute(r,C),p.fromBufferAttribute(r,S),_.fromBufferAttribute(r,M),u.sub(c),f.sub(c),p.sub(h),_.sub(h);let U=1/(p.x*_.y-_.x*p.y);isFinite(U)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(U),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(U),o[C].add(g),o[S].add(g),o[M].add(g),l[C].add(m),l[S].add(m),l[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let C=0,S=v.length;C<S;++C){let M=v[C],U=M.start,I=M.count;for(let B=U,H=U+I;B<H;B+=3)d(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let y=new z,x=new z,T=new z,w=new z;function E(C){T.fromBufferAttribute(s,C),w.copy(T);let S=o[C];y.copy(S),y.sub(T.multiplyScalar(T.dot(S))).normalize(),x.crossVectors(w,S);let U=x.dot(l[C])<0?-1:1;a.setXYZW(C,y.x,y.y,y.z,U)}for(let C=0,S=v.length;C<S;++C){let M=v[C],U=M.start,I=M.count;for(let B=U,H=U+I;B<H;B+=3)E(t.getX(B+0)),E(t.getX(B+1)),E(t.getX(B+2))}}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ui(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let s=new z,r=new z,a=new z,o=new z,l=new z,c=new z,u=new z,f=new z;if(t)for(let h=0,p=t.count;h<p;h+=3){let _=t.getX(h+0),g=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(n,_),r.fromBufferAttribute(n,g),a.fromBufferAttribute(n,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)s.fromBufferAttribute(n,h+0),r.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)an.fromBufferAttribute(t,n),an.normalize(),t.setXYZ(n,an.x,an.y,an.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u),p=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*u;for(let d=0;d<u;d++)h[_++]=c[p++]}return new ui(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){let h=c[u],p=t(h,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let p=c[f];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(n))}let r=t.morphAttributes;for(let c in r){let u=[],f=r[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},mb=new $e,Da=new Wf,Af=new dl,gb=new z,wf=new z,Cf=new z,Rf=new z,a_=new z,Df=new z,_b=new z,Uf=new z,Xn=class extends Oi{constructor(t=new Gr,n=new tu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Df.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],f=r[l];u!==0&&(a_.fromBufferAttribute(f,t),a?Df.addScaledVector(a_,u):Df.addScaledVector(a_.sub(n),u))}n.add(Df)}return n}raycast(t,n){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Af.copy(i.boundingSphere),Af.applyMatrix4(r),Da.copy(t.ray).recast(t.near),!(Af.containsPoint(Da.origin)===!1&&(Da.intersectSphere(Af,gb)===null||Da.origin.distanceToSquared(gb)>(t.far-t.near)**2))&&(mb.copy(r).invert(),Da.copy(t.ray).applyMatrix4(mb),!(i.boundingBox!==null&&Da.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Da)))}_computeIntersections(t,n,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=h.length;_<g;_++){let m=h[_],d=a[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,T=y;x<T;x+=3){let w=o.getX(x),E=o.getX(x+1),C=o.getX(x+2);s=Lf(this,d,t,i,c,u,f,w,E,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let _=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=_,d=g;m<d;m+=3){let v=o.getX(m),y=o.getX(m+1),x=o.getX(m+2);s=Lf(this,a,t,i,c,u,f,v,y,x),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=h.length;_<g;_++){let m=h[_],d=a[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,T=y;x<T;x+=3){let w=x,E=x+1,C=x+2;s=Lf(this,d,t,i,c,u,f,w,E,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,d=g;m<d;m+=3){let v=m,y=m+1,x=m+2;s=Lf(this,a,t,i,c,u,f,v,y,x),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function $R(e,t,n,i,s,r,a,o){let l;if(t.side===wn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===ks,o),l===null)return null;Uf.copy(o),Uf.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(Uf);return c<n.near||c>n.far?null:{distance:c,point:Uf.clone(),object:e}}function Lf(e,t,n,i,s,r,a,o,l,c){e.getVertexPosition(o,wf),e.getVertexPosition(l,Cf),e.getVertexPosition(c,Rf);let u=$R(e,t,n,i,wf,Cf,Rf,_b);if(u){let f=new z;zr.getBarycoord(_b,wf,Cf,Rf,f),s&&(u.uv=zr.getInterpolatedAttribute(s,o,l,c,f,new Jt)),r&&(u.uv1=zr.getInterpolatedAttribute(r,o,l,c,f,new Jt)),a&&(u.normal=zr.getInterpolatedAttribute(a,o,l,c,f,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new z,materialIndex:0};zr.getNormal(wf,Cf,Rf,h.normal),u.face=h,u.barycoord=f}return u}var pl=class e extends Gr{constructor(t=1,n=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],f=[],h=0,p=0;_("z","y","x",-1,-1,i,n,t,a,r,0),_("z","y","x",1,-1,i,n,-t,a,r,1),_("x","z","y",1,1,t,i,n,s,a,2),_("x","z","y",1,-1,t,i,-n,s,a,3),_("x","y","z",1,-1,t,n,i,s,r,4),_("x","y","z",-1,-1,t,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new is(c,3)),this.setAttribute("normal",new is(u,3)),this.setAttribute("uv",new is(f,2));function _(g,m,d,v,y,x,T,w,E,C,S){let M=x/E,U=T/C,I=x/2,B=T/2,H=w/2,W=E+1,k=C+1,K=0,F=0,it=new z;for(let lt=0;lt<k;lt++){let gt=lt*U-B;for(let rt=0;rt<W;rt++){let Pt=rt*M-I;it[g]=Pt*v,it[m]=gt*y,it[d]=H,c.push(it.x,it.y,it.z),it[g]=0,it[m]=0,it[d]=w>0?1:-1,u.push(it.x,it.y,it.z),f.push(rt/E),f.push(1-lt/C),K+=1}}for(let lt=0;lt<C;lt++)for(let gt=0;gt<E;gt++){let rt=h+gt+W*lt,Pt=h+gt+W*(lt+1),kt=h+(gt+1)+W*(lt+1),It=h+(gt+1)+W*lt;l.push(rt,Pt,It),l.push(Pt,kt,It),F+=6}o.addGroup(p,F,S),p+=F,h+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ga(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone():Array.isArray(s)?t[n][i]=s.slice():t[n][i]=s}}return t}function xn(e){let t={};for(let n=0;n<e.length;n++){let i=Ga(e[n]);for(let s in i)t[s]=i[s]}return t}function t2(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function L_(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}var hT={clone:Ga,merge:xn},e2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,n2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fi=class extends Ba{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=e2,this.fragmentShader=n2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ga(t.uniforms),this.uniformsGroups=t2(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?n.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?n.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[s]={type:"m4",value:a.toArray()}:n.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},iu=class extends Oi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Br=new z,vb=new Jt,yb=new Jt,kn=class extends iu{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=Hf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(F0*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hf*2*Math.atan(Math.tan(F0*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Br.x,Br.y).multiplyScalar(-t/Br.z),Br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Br.x,Br.y).multiplyScalar(-t/Br.z)}getViewSize(t,n){return this.getViewBounds(t,vb,yb),n.subVectors(yb,vb)}setViewOffset(t,n,i,s,r,a){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(F0*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,n-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},ol=-90,ll=1,qf=class extends Oi{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new kn(ol,ll,t,n);s.layers=this.layers,this.add(s);let r=new kn(ol,ll,t,n);r.layers=this.layers,this.add(r);let a=new kn(ol,ll,t,n);a.layers=this.layers,this.add(a);let o=new kn(ol,ll,t,n);o.layers=this.layers,this.add(o);let l=new kn(ol,ll,t,n);l.layers=this.layers,this.add(l);let c=new kn(ol,ll,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,r,a,o,l]=n;for(let c of n)this.remove(c);if(t===Hi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Kc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(n,r),t.setRenderTarget(i,1,s),t.render(n,a),t.setRenderTarget(i,2,s),t.render(n,o),t.setRenderTarget(i,3,s),t.render(n,l),t.setRenderTarget(i,4,s),t.render(n,c),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,s),t.render(n,u),t.setRenderTarget(f,h,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},su=class extends hi{constructor(t=[],n=Va,i,s,r,a,o,l,c,u){super(t,n,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Yf=class extends ss{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new su(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new pl(5,5,5),r=new fi({name:"CubemapFromEquirect",uniforms:Ga(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wn,blending:qs});r.uniforms.tEquirect.value=n;let a=new Xn(s,r),o=n.minFilter;return n.minFilter===Wr&&(n.minFilter=Gi),new qf(1,10,this).update(t,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(n,i,s);t.setRenderTarget(r)}},Oa=class extends Oi{constructor(){super(),this.isGroup=!0,this.type="Group"}},i2={type:"move"},ml=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let g of t.hand.values()){let m=n.getJointPose(g,i),d=this._getHandJoint(c,g);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=n.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(i2)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new Oa;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}};var ru=class extends Oi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rs,this.environmentIntensity=1,this.environmentRotation=new rs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};var o_=new z,s2=new z,r2=new Vt,ns=class{constructor(t=new z(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=o_.subVectors(i,n).cross(s2.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){let i=t.delta(o_),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||r2.getNormalMatrix(t),s=this.coplanarPoint(o_).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ua=new dl,a2=new Jt(.5,.5),Of=new z,au=class{constructor(t=new ns,n=new ns,i=new ns,s=new ns,r=new ns,a=new ns){this.planes=[t,n,i,s,r,a]}set(t,n,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Hi,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],p=r[7],_=r[8],g=r[9],m=r[10],d=r[11],v=r[12],y=r[13],x=r[14],T=r[15];if(s[0].setComponents(c-a,p-u,d-_,T-v).normalize(),s[1].setComponents(c+a,p+u,d+_,T+v).normalize(),s[2].setComponents(c+o,p+f,d+g,T+y).normalize(),s[3].setComponents(c-o,p-f,d-g,T-y).normalize(),i)s[4].setComponents(l,h,m,x).normalize(),s[5].setComponents(c-l,p-h,d-m,T-x).normalize();else if(s[4].setComponents(c-l,p-h,d-m,T-x).normalize(),n===Hi)s[5].setComponents(c+l,p+h,d+m,T+x).normalize();else if(n===Kc)s[5].setComponents(l,h,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ua.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ua.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ua)}intersectsSprite(t){Ua.center.set(0,0,0);let n=a2.distanceTo(t.center);return Ua.radius=.7071067811865476+n,Ua.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ua)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Of.x=s.normal.x>0?t.max.x:t.min.x,Of.y=s.normal.y>0?t.max.y:t.min.y,Of.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Of)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ou=class extends hi{constructor(t,n,i=qr,s,r,a,o=Li,l=Li,c,u=ul,f=1){if(u!==ul&&u!==xl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:n,depth:f};super(h,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new fl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},lu=class extends hi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var za=class e extends Gr{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let r=t/2,a=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,f=t/o,h=n/l,p=[],_=[],g=[],m=[];for(let d=0;d<u;d++){let v=d*h-a;for(let y=0;y<c;y++){let x=y*f-r;_.push(x,-v,0),g.push(0,0,1),m.push(y/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<o;v++){let y=v+c*d,x=v+c*(d+1),T=v+1+c*(d+1),w=v+1+c*d;p.push(y,x,w),p.push(x,T,w)}this.setIndex(p),this.setAttribute("position",new is(_,3)),this.setAttribute("normal",new is(g,3)),this.setAttribute("uv",new is(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};var Zf=class extends Ba{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Jf=class extends Ba{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Nf(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function o2(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Fa=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],r=n[i-1];t:{e:{let a;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=n[++i],t<s)break e}a=n.length;break n}if(!(t>=r)){let o=n[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=n[--i-1],t>=r)break e}a=i,i=0;break n}break t}for(;i<a;){let o=i+a>>>1;t<n[o]?a=o:i=o+1}if(s=n[i],r=n[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)n[a]=i[r+a];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Kf=class extends Fa{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:l_,endingEnd:l_}}intervalChanged_(t,n,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case c_:r=t,o=2*n-i;break;case u_:r=s.length-2,o=n+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case c_:a=t,l=2*i-n;break;case u_:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=n}let c=(i-n)*.5,u=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,_=(i-n)/(s-n),g=_*_,m=g*_,d=-h*m+2*h*g-h*_,v=(1+h)*m+(-1.5-2*h)*g+(-.5+h)*_+1,y=(-1-p)*m+(1.5+p)*g+.5*_,x=p*m-p*g;for(let T=0;T!==o;++T)r[T]=d*a[u+T]+v*a[c+T]+y*a[l+T]+x*a[f+T];return r}},Qf=class extends Fa{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(i-n)/(s-n),f=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*f+a[l+h]*u;return r}},jf=class extends Fa{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},di=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Nf(n,this.TimeBufferType),this.values=Nf(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:Nf(t.times,Array),values:Nf(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new jf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Qf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Kf(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let n;switch(t){case Zc:n=this.InterpolantFactoryMethodDiscrete;break;case Vf:n=this.InterpolantFactoryMethodLinear;break;case If:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zc;case this.InterpolantFactoryMethodLinear:return Vf;case this.InterpolantFactoryMethodSmooth:return If}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>n;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&o2(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===If,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let f=o*i,h=f-i,p=f+i;for(let _=0;_!==i;++_){let g=n[f+_];if(g!==n[h+_]||g!==n[p+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*i,h=a*i;for(let p=0;p!==i;++p)n[h+p]=n[f+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)n[l+c]=n[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=n.slice(0,a*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};di.prototype.ValueTypeName="";di.prototype.TimeBufferType=Float32Array;di.prototype.ValueBufferType=Float32Array;di.prototype.DefaultInterpolation=Vf;var kr=class extends di{constructor(t,n,i){super(t,n,i)}};kr.prototype.ValueTypeName="bool";kr.prototype.ValueBufferType=Array;kr.prototype.DefaultInterpolation=Zc;kr.prototype.InterpolantFactoryMethodLinear=void 0;kr.prototype.InterpolantFactoryMethodSmooth=void 0;var $f=class extends di{constructor(t,n,i,s){super(t,n,i,s)}};$f.prototype.ValueTypeName="color";var td=class extends di{constructor(t,n,i,s){super(t,n,i,s)}};td.prototype.ValueTypeName="number";var ed=class extends Fa{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let u=c+o;c!==u;c+=4)Ws.slerpFlat(r,0,a,c-o,a,c,l);return r}},cu=class extends di{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new ed(this.times,this.values,this.getValueSize(),t)}};cu.prototype.ValueTypeName="quaternion";cu.prototype.InterpolantFactoryMethodSmooth=void 0;var Xr=class extends di{constructor(t,n,i){super(t,n,i)}};Xr.prototype.ValueTypeName="string";Xr.prototype.ValueBufferType=Array;Xr.prototype.DefaultInterpolation=Zc;Xr.prototype.InterpolantFactoryMethodLinear=void 0;Xr.prototype.InterpolantFactoryMethodSmooth=void 0;var nd=class extends di{constructor(t,n,i,s){super(t,n,i,s)}};nd.prototype.ValueTypeName="vector";var id=class{constructor(t,n,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},fT=new id,sd=class{constructor(t){this.manager=t!==void 0?t:fT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,r){i.load(t,s,n,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};sd.DEFAULT_MATERIAL_NAME="__DEFAULT";var gl=class extends iu{constructor(t=-1,n=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var rd=class extends kn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},uu=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}};var O_="\\[\\]\\.:\\/",l2=new RegExp("["+O_+"]","g"),N_="[^"+O_+"]",c2="[^"+O_.replace("\\.","")+"]",u2=/((?:WC+[\/:])*)/.source.replace("WC",N_),h2=/(WCOD+)?/.source.replace("WCOD",c2),f2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",N_),d2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",N_),p2=new RegExp("^"+u2+h2+f2+d2+"$"),m2=["material","materials","bones","map"],d_=class{constructor(t,n,i){let s=i||Ee.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Ee=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(l2,"")}static parseTrackName(t){let n=p2.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);m2.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,r=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ee.Composite=d_;Ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ee.prototype.GetterByBindingType=[Ee.prototype._getValue_direct,Ee.prototype._getValue_array,Ee.prototype._getValue_arrayElement,Ee.prototype._getValue_toArray];Ee.prototype.SetterByBindingTypeAndVersioning=[[Ee.prototype._setValue_direct,Ee.prototype._setValue_direct_setNeedsUpdate,Ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_array,Ee.prototype._setValue_array_setNeedsUpdate,Ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_arrayElement,Ee.prototype._setValue_arrayElement_setNeedsUpdate,Ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_fromArray,Ee.prototype._setValue_fromArray_setNeedsUpdate,Ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var LO=new Float32Array(1);function I_(e,t,n,i){let s=g2(i);switch(n){case E_:return e*t;case w_:return e*t/s.components*s.byteLength;case yd:return e*t/s.components*s.byteLength;case C_:return e*t*2/s.components*s.byteLength;case xd:return e*t*2/s.components*s.byteLength;case A_:return e*t*3/s.components*s.byteLength;case Ni:return e*t*4/s.components*s.byteLength;case Sd:return e*t*4/s.components*s.byteLength;case du:case pu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case mu:case gu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case bd:case Ed:return Math.max(e,16)*Math.max(t,8)/4;case Md:case Td:return Math.max(e,8)*Math.max(t,8)/2;case Ad:case wd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Cd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Rd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Dd:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Ud:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Ld:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Od:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Nd:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Id:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Pd:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Bd:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case zd:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Fd:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Vd:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Hd:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Gd:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case kd:case Xd:case Wd:return Math.ceil(e/4)*Math.ceil(t/4)*16;case qd:case Yd:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Zd:case Jd:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function g2(e){switch(e){case ls:case S_:return{byteLength:1,components:1};case _l:case M_:case vl:return{byteLength:2,components:1};case _d:case vd:return{byteLength:2,components:4};case qr:case gd:case cs:return{byteLength:4,components:1};case b_:case T_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function PT(){let e=null,t=!1,n=null,i=null;function s(r,a){n(r,a),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function v2(e){let t=new WeakMap;function n(o,l){let c=o.array,u=o.usage,f=c.byteLength,h=e.createBuffer();e.bindBuffer(l,h),e.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){let u=l.array,f=l.updateRanges;if(e.bindBuffer(c,o),f.length===0)e.bufferSubData(c,0,u);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){let _=f[h],g=f[p];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++h,f[h]=g)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){let g=f[p];e.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var y2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,x2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,S2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,M2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,T2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,E2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,A2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,w2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,C2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,R2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,D2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,U2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,L2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,O2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,N2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,I2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,P2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,B2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,z2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,F2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,V2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,H2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,G2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,k2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,X2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,W2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,q2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Y2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J2="gl_FragColor = linearToOutputTexel( gl_FragColor );",K2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Q2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,j2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,t3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,e3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,n3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,i3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,s3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,r3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,a3=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,o3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,l3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,c3=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,u3=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,h3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,f3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d3=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,p3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,m3=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,g3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_3=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,v3=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,y3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,x3=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,S3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,M3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,E3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,A3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,w3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,C3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,D3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,U3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,L3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,O3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,I3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,B3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,z3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,H3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,G3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,k3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,X3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,W3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Z3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,J3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,K3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Q3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tD=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,eD=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,iD=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rD=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,aD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oD=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lD=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cD=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uD=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hD=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fD=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dD=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_D=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yD=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SD=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TD=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ED=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,AD=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wD=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,CD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DD=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,UD=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LD=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,OD=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ND=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ID=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PD=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,BD=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zD=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,FD=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,VD=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HD=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GD=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kD=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XD=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WD=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qD=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,YD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZD=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JD=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,KD=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,QD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:y2,alphahash_pars_fragment:x2,alphamap_fragment:S2,alphamap_pars_fragment:M2,alphatest_fragment:b2,alphatest_pars_fragment:T2,aomap_fragment:E2,aomap_pars_fragment:A2,batching_pars_vertex:w2,batching_vertex:C2,begin_vertex:R2,beginnormal_vertex:D2,bsdfs:U2,iridescence_fragment:L2,bumpmap_pars_fragment:O2,clipping_planes_fragment:N2,clipping_planes_pars_fragment:I2,clipping_planes_pars_vertex:P2,clipping_planes_vertex:B2,color_fragment:z2,color_pars_fragment:F2,color_pars_vertex:V2,color_vertex:H2,common:G2,cube_uv_reflection_fragment:k2,defaultnormal_vertex:X2,displacementmap_pars_vertex:W2,displacementmap_vertex:q2,emissivemap_fragment:Y2,emissivemap_pars_fragment:Z2,colorspace_fragment:J2,colorspace_pars_fragment:K2,envmap_fragment:Q2,envmap_common_pars_fragment:j2,envmap_pars_fragment:$2,envmap_pars_vertex:t3,envmap_physical_pars_fragment:h3,envmap_vertex:e3,fog_vertex:n3,fog_pars_vertex:i3,fog_fragment:s3,fog_pars_fragment:r3,gradientmap_pars_fragment:a3,lightmap_pars_fragment:o3,lights_lambert_fragment:l3,lights_lambert_pars_fragment:c3,lights_pars_begin:u3,lights_toon_fragment:f3,lights_toon_pars_fragment:d3,lights_phong_fragment:p3,lights_phong_pars_fragment:m3,lights_physical_fragment:g3,lights_physical_pars_fragment:_3,lights_fragment_begin:v3,lights_fragment_maps:y3,lights_fragment_end:x3,logdepthbuf_fragment:S3,logdepthbuf_pars_fragment:M3,logdepthbuf_pars_vertex:b3,logdepthbuf_vertex:T3,map_fragment:E3,map_pars_fragment:A3,map_particle_fragment:w3,map_particle_pars_fragment:C3,metalnessmap_fragment:R3,metalnessmap_pars_fragment:D3,morphinstance_vertex:U3,morphcolor_vertex:L3,morphnormal_vertex:O3,morphtarget_pars_vertex:N3,morphtarget_vertex:I3,normal_fragment_begin:P3,normal_fragment_maps:B3,normal_pars_fragment:z3,normal_pars_vertex:F3,normal_vertex:V3,normalmap_pars_fragment:H3,clearcoat_normal_fragment_begin:G3,clearcoat_normal_fragment_maps:k3,clearcoat_pars_fragment:X3,iridescence_pars_fragment:W3,opaque_fragment:q3,packing:Y3,premultiplied_alpha_fragment:Z3,project_vertex:J3,dithering_fragment:K3,dithering_pars_fragment:Q3,roughnessmap_fragment:j3,roughnessmap_pars_fragment:$3,shadowmap_pars_fragment:tD,shadowmap_pars_vertex:eD,shadowmap_vertex:nD,shadowmask_pars_fragment:iD,skinbase_vertex:sD,skinning_pars_vertex:rD,skinning_vertex:aD,skinnormal_vertex:oD,specularmap_fragment:lD,specularmap_pars_fragment:cD,tonemapping_fragment:uD,tonemapping_pars_fragment:hD,transmission_fragment:fD,transmission_pars_fragment:dD,uv_pars_fragment:pD,uv_pars_vertex:mD,uv_vertex:gD,worldpos_vertex:_D,background_vert:vD,background_frag:yD,backgroundCube_vert:xD,backgroundCube_frag:SD,cube_vert:MD,cube_frag:bD,depth_vert:TD,depth_frag:ED,distanceRGBA_vert:AD,distanceRGBA_frag:wD,equirect_vert:CD,equirect_frag:RD,linedashed_vert:DD,linedashed_frag:UD,meshbasic_vert:LD,meshbasic_frag:OD,meshlambert_vert:ND,meshlambert_frag:ID,meshmatcap_vert:PD,meshmatcap_frag:BD,meshnormal_vert:zD,meshnormal_frag:FD,meshphong_vert:VD,meshphong_frag:HD,meshphysical_vert:GD,meshphysical_frag:kD,meshtoon_vert:XD,meshtoon_frag:WD,points_vert:qD,points_frag:YD,shadow_vert:ZD,shadow_frag:JD,sprite_vert:KD,sprite_frag:QD},ot={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new Jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new Jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},us={basic:{uniforms:xn([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:xn([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new se(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:xn([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:xn([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:xn([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new se(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:xn([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:xn([ot.points,ot.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:xn([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:xn([ot.common,ot.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:xn([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:xn([ot.sprite,ot.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:xn([ot.common,ot.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:xn([ot.lights,ot.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};us.physical={uniforms:xn([us.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new Jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new Jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new Jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};var Kd={r:0,b:0,g:0},ka=new rs,jD=new $e;function $D(e,t,n,i,s,r,a){let o=new se(0),l=r===!0?0:1,c,u,f=null,h=0,p=null;function _(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?n:t).get(x)),x}function g(y){let x=!1,T=_(y);T===null?d(o,l):T&&T.isColor&&(d(T,1),x=!0);let w=e.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(e.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(y,x){let T=_(x);T&&(T.isCubeTexture||T.mapping===hu)?(u===void 0&&(u=new Xn(new pl(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:Ga(us.backgroundCube.uniforms),vertexShader:us.backgroundCube.vertexShader,fragmentShader:us.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ka.copy(x.backgroundRotation),ka.x*=-1,ka.y*=-1,ka.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ka.y*=-1,ka.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(jD.makeRotationFromEuler(ka)),u.material.toneMapped=$t.getTransfer(T.colorSpace)!==le,(f!==T||h!==T.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,f=T,h=T.version,p=e.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Xn(new za(2,2),new fi({name:"BackgroundMaterial",uniforms:Ga(us.background.uniforms),vertexShader:us.background.vertexShader,fragmentShader:us.background.fragmentShader,side:ks,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=$t.getTransfer(T.colorSpace)!==le,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||h!==T.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,f=T,h=T.version,p=e.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function d(y,x){y.getRGB(Kd,L_(e)),i.buffers.color.setClear(Kd.r,Kd.g,Kd.b,x,a)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),l=x,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(o,l)},render:g,addToRenderList:m,dispose:v}}function tU(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,a=!1;function o(M,U,I,B,H){let W=!1,k=f(B,I,U);r!==k&&(r=k,c(r.object)),W=p(M,B,I,H),W&&_(M,B,I,H),H!==null&&t.update(H,e.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,x(M,U,I,B),H!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return e.createVertexArray()}function c(M){return e.bindVertexArray(M)}function u(M){return e.deleteVertexArray(M)}function f(M,U,I){let B=I.wireframe===!0,H=i[M.id];H===void 0&&(H={},i[M.id]=H);let W=H[U.id];W===void 0&&(W={},H[U.id]=W);let k=W[B];return k===void 0&&(k=h(l()),W[B]=k),k}function h(M){let U=[],I=[],B=[];for(let H=0;H<n;H++)U[H]=0,I[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:I,attributeDivisors:B,object:M,attributes:{},index:null}}function p(M,U,I,B){let H=r.attributes,W=U.attributes,k=0,K=I.getAttributes();for(let F in K)if(K[F].location>=0){let lt=H[F],gt=W[F];if(gt===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&(gt=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&(gt=M.instanceColor)),lt===void 0||lt.attribute!==gt||gt&&lt.data!==gt.data)return!0;k++}return r.attributesNum!==k||r.index!==B}function _(M,U,I,B){let H={},W=U.attributes,k=0,K=I.getAttributes();for(let F in K)if(K[F].location>=0){let lt=W[F];lt===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&(lt=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&(lt=M.instanceColor));let gt={};gt.attribute=lt,lt&&lt.data&&(gt.data=lt.data),H[F]=gt,k++}r.attributes=H,r.attributesNum=k,r.index=B}function g(){let M=r.newAttributes;for(let U=0,I=M.length;U<I;U++)M[U]=0}function m(M){d(M,0)}function d(M,U){let I=r.newAttributes,B=r.enabledAttributes,H=r.attributeDivisors;I[M]=1,B[M]===0&&(e.enableVertexAttribArray(M),B[M]=1),H[M]!==U&&(e.vertexAttribDivisor(M,U),H[M]=U)}function v(){let M=r.newAttributes,U=r.enabledAttributes;for(let I=0,B=U.length;I<B;I++)U[I]!==M[I]&&(e.disableVertexAttribArray(I),U[I]=0)}function y(M,U,I,B,H,W,k){k===!0?e.vertexAttribIPointer(M,U,I,H,W):e.vertexAttribPointer(M,U,I,B,H,W)}function x(M,U,I,B){g();let H=B.attributes,W=I.getAttributes(),k=U.defaultAttributeValues;for(let K in W){let F=W[K];if(F.location>=0){let it=H[K];if(it===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(it=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(it=M.instanceColor)),it!==void 0){let lt=it.normalized,gt=it.itemSize,rt=t.get(it);if(rt===void 0)continue;let Pt=rt.buffer,kt=rt.type,It=rt.bytesPerElement,X=kt===e.INT||kt===e.UNSIGNED_INT||it.gpuType===gd;if(it.isInterleavedBufferAttribute){let J=it.data,dt=J.stride,At=it.offset;if(J.isInstancedInterleavedBuffer){for(let St=0;St<F.locationSize;St++)d(F.location+St,J.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let St=0;St<F.locationSize;St++)m(F.location+St);e.bindBuffer(e.ARRAY_BUFFER,Pt);for(let St=0;St<F.locationSize;St++)y(F.location+St,gt/F.locationSize,kt,lt,dt*It,(At+gt/F.locationSize*St)*It,X)}else{if(it.isInstancedBufferAttribute){for(let J=0;J<F.locationSize;J++)d(F.location+J,it.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let J=0;J<F.locationSize;J++)m(F.location+J);e.bindBuffer(e.ARRAY_BUFFER,Pt);for(let J=0;J<F.locationSize;J++)y(F.location+J,gt/F.locationSize,kt,lt,gt*It,gt/F.locationSize*J*It,X)}}else if(k!==void 0){let lt=k[K];if(lt!==void 0)switch(lt.length){case 2:e.vertexAttrib2fv(F.location,lt);break;case 3:e.vertexAttrib3fv(F.location,lt);break;case 4:e.vertexAttrib4fv(F.location,lt);break;default:e.vertexAttrib1fv(F.location,lt)}}}}v()}function T(){C();for(let M in i){let U=i[M];for(let I in U){let B=U[I];for(let H in B)u(B[H].object),delete B[H];delete U[I]}delete i[M]}}function w(M){if(i[M.id]===void 0)return;let U=i[M.id];for(let I in U){let B=U[I];for(let H in B)u(B[H].object),delete B[H];delete U[I]}delete i[M.id]}function E(M){for(let U in i){let I=i[U];if(I[M.id]===void 0)continue;let B=I[M.id];for(let H in B)u(B[H].object),delete B[H];delete I[M.id]}}function C(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function eU(e,t,n){let i;function s(c){i=c}function r(c,u){e.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,f){f!==0&&(e.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function o(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_];n.update(p,i,1)}function l(c,u,f,h){if(f===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],u[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g]*h[g];n.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function nU(e,t,n,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==Ni&&i.convert(E)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let C=E===vl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==ls&&i.convert(E)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==cs&&!C)}function l(E){if(E==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),d=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=_>0,w=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:T,maxSamples:w}}function iU(e){let t=this,n=null,i=0,s=!1,r=!1,a=new ns,o=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let p=f.length!==0||h||i!==0||s;return s=h,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,p){let _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,d=e.get(f);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{let v=r?0:i,y=v*4,x=d.clippingState||null;l.value=x,x=u(_,h,y,p);for(let T=0;T!==y;++T)x[T]=n[T];d.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,h,p,_){let g=f!==null?f.length:0,m=null;if(g!==0){if(m=l.value,_!==!0||m===null){let d=p+g*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,x=p;y!==g;++y,x+=4)a.copy(f[y]).applyMatrix4(v,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function sU(e){let t=new WeakMap;function n(a,o){return o===dd?a.mapping=Va:o===pd&&(a.mapping=Ha),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===dd||o===pd)if(t.has(a)){let l=t.get(a).texture;return n(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Yf(l.height);return c.fromEquirectangularTexture(e,a),t.set(a,c),a.addEventListener("dispose",s),n(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Ml=4,dT=[.125,.215,.35,.446,.526,.582],qa=20,P_=new gl,pT=new se,B_=null,z_=0,F_=0,V_=!1,Wa=(1+Math.sqrt(5))/2,Sl=1/Wa,mT=[new z(-Wa,Sl,0),new z(Wa,Sl,0),new z(-Sl,0,Wa),new z(Sl,0,Wa),new z(0,Wa,-Sl),new z(0,Wa,Sl),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],rU=new z,$d=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,s=100,r={}){let{size:a=256,position:o=rU}=r;B_=this._renderer.getRenderTarget(),z_=this._renderer.getActiveCubeFace(),F_=this._renderer.getActiveMipmapLevel(),V_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vT(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_T(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(B_,z_,F_),this._renderer.xr.enabled=V_,t.scissorTest=!1,Qd(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Va||t.mapping===Ha?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),B_=this._renderer.getRenderTarget(),z_=this._renderer.getActiveCubeFace(),F_=this._renderer.getActiveMipmapLevel(),V_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Gi,minFilter:Gi,generateMipmaps:!1,type:vl,format:Ni,colorSpace:Pa,depthBuffer:!1},s=gT(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gT(t,n,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=aU(r)),this._blurMaterial=oU(r,t,n)}return s}_compileMaterial(t){let n=new Xn(this._lodPlanes[0],t);this._renderer.compile(n,P_)}_sceneToCubeUV(t,n,i,s,r){let l=new kn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(pT),f.toneMapping=Ys,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));let g=new tu({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1}),m=new Xn(new pl,g),d=!1,v=t.background;v?v.isColor&&(g.color.copy(v),t.background=null,d=!0):(g.color.copy(pT),d=!0);for(let y=0;y<6;y++){let x=y%3;x===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[y],r.y,r.z)):x===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[y]));let T=this._cubeSize;Qd(s,x*T,y>2?T:0,T,T),f.setRenderTarget(s),d&&f.render(m,l),f.render(t,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=p,f.autoClear=h,t.background=v}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===Va||t.mapping===Ha;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vT()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_T());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Xn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Qd(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,P_)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=mT[(s-r-1)%mT.length];this._blur(t,r-1,r,a,o)}n.autoClear=i}_blur(t,n,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,n,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,n,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,f=new Xn(this._lodPlanes[s],c),h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*qa-1),g=r/_,m=isFinite(r)?1+Math.floor(u*g):qa;m>qa&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qa}`);let d=[],v=0;for(let E=0;E<qa;++E){let C=E/g,S=Math.exp(-C*C/2);d.push(S),E===0?v+=S:E<m&&(v+=2*S)}for(let E=0;E<d.length;E++)d[E]=d[E]/v;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:y}=this;h.dTheta.value=_,h.mipInt.value=y-i;let x=this._sizeLods[s],T=3*x*(s>y-Ml?s-y+Ml:0),w=4*(this._cubeSize-x);Qd(n,T,w,3*x,2*x),l.setRenderTarget(n),l.render(f,P_)}};function aU(e){let t=[],n=[],i=[],s=e,r=e-Ml+1+dT.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);n.push(o);let l=1/o;a>e-Ml?l=dT[a-e+Ml-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,g=3,m=2,d=1,v=new Float32Array(g*_*p),y=new Float32Array(m*_*p),x=new Float32Array(d*_*p);for(let w=0;w<p;w++){let E=w%3*2/3-1,C=w>2?0:-1,S=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];v.set(S,g*_*w),y.set(h,m*_*w);let M=[w,w,w,w,w,w];x.set(M,d*_*w)}let T=new Gr;T.setAttribute("position",new ui(v,g)),T.setAttribute("uv",new ui(y,m)),T.setAttribute("faceIndex",new ui(x,d)),t.push(T),s>Ml&&s--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function gT(e,t,n){let i=new ss(e,t,n);return i.texture.mapping=hu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qd(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function oU(e,t,n){let i=new Float32Array(qa),s=new z(0,1,0);return new fi({name:"SphericalGaussianBlur",defines:{n:qa,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:K_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qs,depthTest:!1,depthWrite:!1})}function _T(){return new fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:K_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qs,depthTest:!1,depthWrite:!1})}function vT(){return new fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:K_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qs,depthTest:!1,depthWrite:!1})}function K_(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function lU(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===dd||l===pd,u=l===Va||l===Ha;if(c||u){let f=t.get(o),h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new $d(e)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{let p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(n===null&&(n=new $d(e)),f=c?n.fromEquirectangular(o):n.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function cU(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(i)}return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&hl("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function uU(e,t,n,i){let s={},r=new WeakMap;function a(f){let h=f.target;h.index!==null&&t.remove(h.index);for(let _ in h.attributes)t.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete s[h.id];let p=r.get(h);p&&(t.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,n.memory.geometries++),h}function l(f){let h=f.attributes;for(let p in h)t.update(h[p],e.ARRAY_BUFFER)}function c(f){let h=[],p=f.index,_=f.attributes.position,g=0;if(p!==null){let v=p.array;g=p.version;for(let y=0,x=v.length;y<x;y+=3){let T=v[y+0],w=v[y+1],E=v[y+2];h.push(T,w,w,E,E,T)}}else if(_!==void 0){let v=_.array;g=_.version;for(let y=0,x=v.length/3-1;y<x;y+=3){let T=y+0,w=y+1,E=y+2;h.push(T,w,w,E,E,T)}}else return;let m=new(U_(h)?nu:eu)(h,1);m.version=g;let d=r.get(f);d&&t.remove(d),r.set(f,m)}function u(f){let h=r.get(f);if(h){let p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function hU(e,t,n){let i;function s(h){i=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,p){e.drawElements(i,p,r,h*a),n.update(p,i,1)}function c(h,p,_){_!==0&&(e.drawElementsInstanced(i,p,r,h*a,_),n.update(p,i,_))}function u(h,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,h,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];n.update(m,i,1)}function f(h,p,_,g){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/a,p[d],g[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,h,0,g,0,_);let d=0;for(let v=0;v<_;v++)d+=p[v]*g[v];n.update(d,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function fU(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case e.TRIANGLES:n.triangles+=o*(r/3);break;case e.LINES:n.lines+=o*(r/2);break;case e.LINE_STRIP:n.lines+=o*(r-1);break;case e.LINE_LOOP:n.lines+=o*r;break;case e.POINTS:n.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function dU(e,t,n){let i=new WeakMap,s=new Ve;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==f){let S=function(){E.dispose(),i.delete(o),o.removeEventListener("dispose",S)};h!==void 0&&h.texture.dispose();let p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],y=0;p===!0&&(y=1),_===!0&&(y=2),g===!0&&(y=3);let x=o.attributes.position.count*y,T=1;x>t.maxTextureSize&&(T=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let w=new Float32Array(x*T*4*f),E=new jc(w,x,T,f);E.type=cs,E.needsUpdate=!0;let C=y*4;for(let M=0;M<f;M++){let U=m[M],I=d[M],B=v[M],H=x*T*4*M;for(let W=0;W<U.count;W++){let k=W*C;p===!0&&(s.fromBufferAttribute(U,W),w[H+k+0]=s.x,w[H+k+1]=s.y,w[H+k+2]=s.z,w[H+k+3]=0),_===!0&&(s.fromBufferAttribute(I,W),w[H+k+4]=s.x,w[H+k+5]=s.y,w[H+k+6]=s.z,w[H+k+7]=0),g===!0&&(s.fromBufferAttribute(B,W),w[H+k+8]=s.x,w[H+k+9]=s.y,w[H+k+10]=s.z,w[H+k+11]=B.itemSize===4?s.w:1)}}h={count:f,texture:E,size:new Jt(x,T)},i.set(o,h),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",a.morphTexture,n);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];let _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",_),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:r}}function pU(e,t,n,i){let s=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,f=t.get(l,u);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:a}}var BT=new hi,yT=new ou(1,1),zT=new jc,FT=new Xf,VT=new su,xT=[],ST=[],MT=new Float32Array(16),bT=new Float32Array(9),TT=new Float32Array(4);function Tl(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,r=xT[s];if(r===void 0&&(r=new Float32Array(s),xT[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=n,e[a].toArray(r,o)}return r}function tn(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function en(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function ep(e,t){let n=ST[t];n===void 0&&(n=new Int32Array(t),ST[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function mU(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function gU(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(tn(n,t))return;e.uniform2fv(this.addr,t),en(n,t)}}function _U(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(tn(n,t))return;e.uniform3fv(this.addr,t),en(n,t)}}function vU(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(tn(n,t))return;e.uniform4fv(this.addr,t),en(n,t)}}function yU(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(tn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),en(n,t)}else{if(tn(n,i))return;TT.set(i),e.uniformMatrix2fv(this.addr,!1,TT),en(n,i)}}function xU(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(tn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),en(n,t)}else{if(tn(n,i))return;bT.set(i),e.uniformMatrix3fv(this.addr,!1,bT),en(n,i)}}function SU(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(tn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),en(n,t)}else{if(tn(n,i))return;MT.set(i),e.uniformMatrix4fv(this.addr,!1,MT),en(n,i)}}function MU(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function bU(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(tn(n,t))return;e.uniform2iv(this.addr,t),en(n,t)}}function TU(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(tn(n,t))return;e.uniform3iv(this.addr,t),en(n,t)}}function EU(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(tn(n,t))return;e.uniform4iv(this.addr,t),en(n,t)}}function AU(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function wU(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(tn(n,t))return;e.uniform2uiv(this.addr,t),en(n,t)}}function CU(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(tn(n,t))return;e.uniform3uiv(this.addr,t),en(n,t)}}function RU(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(tn(n,t))return;e.uniform4uiv(this.addr,t),en(n,t)}}function DU(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let r;this.type===e.SAMPLER_2D_SHADOW?(yT.compareFunction=R_,r=yT):r=BT,n.setTexture2D(t||r,s)}function UU(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||FT,s)}function LU(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||VT,s)}function OU(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||zT,s)}function NU(e){switch(e){case 5126:return mU;case 35664:return gU;case 35665:return _U;case 35666:return vU;case 35674:return yU;case 35675:return xU;case 35676:return SU;case 5124:case 35670:return MU;case 35667:case 35671:return bU;case 35668:case 35672:return TU;case 35669:case 35673:return EU;case 5125:return AU;case 36294:return wU;case 36295:return CU;case 36296:return RU;case 35678:case 36198:case 36298:case 36306:case 35682:return DU;case 35679:case 36299:case 36307:return UU;case 35680:case 36300:case 36308:case 36293:return LU;case 36289:case 36303:case 36311:case 36292:return OU}}function IU(e,t){e.uniform1fv(this.addr,t)}function PU(e,t){let n=Tl(t,this.size,2);e.uniform2fv(this.addr,n)}function BU(e,t){let n=Tl(t,this.size,3);e.uniform3fv(this.addr,n)}function zU(e,t){let n=Tl(t,this.size,4);e.uniform4fv(this.addr,n)}function FU(e,t){let n=Tl(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function VU(e,t){let n=Tl(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function HU(e,t){let n=Tl(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function GU(e,t){e.uniform1iv(this.addr,t)}function kU(e,t){e.uniform2iv(this.addr,t)}function XU(e,t){e.uniform3iv(this.addr,t)}function WU(e,t){e.uniform4iv(this.addr,t)}function qU(e,t){e.uniform1uiv(this.addr,t)}function YU(e,t){e.uniform2uiv(this.addr,t)}function ZU(e,t){e.uniform3uiv(this.addr,t)}function JU(e,t){e.uniform4uiv(this.addr,t)}function KU(e,t,n){let i=this.cache,s=t.length,r=ep(n,s);tn(i,r)||(e.uniform1iv(this.addr,r),en(i,r));for(let a=0;a!==s;++a)n.setTexture2D(t[a]||BT,r[a])}function QU(e,t,n){let i=this.cache,s=t.length,r=ep(n,s);tn(i,r)||(e.uniform1iv(this.addr,r),en(i,r));for(let a=0;a!==s;++a)n.setTexture3D(t[a]||FT,r[a])}function jU(e,t,n){let i=this.cache,s=t.length,r=ep(n,s);tn(i,r)||(e.uniform1iv(this.addr,r),en(i,r));for(let a=0;a!==s;++a)n.setTextureCube(t[a]||VT,r[a])}function $U(e,t,n){let i=this.cache,s=t.length,r=ep(n,s);tn(i,r)||(e.uniform1iv(this.addr,r),en(i,r));for(let a=0;a!==s;++a)n.setTexture2DArray(t[a]||zT,r[a])}function tL(e){switch(e){case 5126:return IU;case 35664:return PU;case 35665:return BU;case 35666:return zU;case 35674:return FU;case 35675:return VU;case 35676:return HU;case 5124:case 35670:return GU;case 35667:case 35671:return kU;case 35668:case 35672:return XU;case 35669:case 35673:return WU;case 5125:return qU;case 36294:return YU;case 36295:return ZU;case 36296:return JU;case 35678:case 36198:case 36298:case 36306:case 35682:return KU;case 35679:case 36299:case 36307:return QU;case 35680:case 36300:case 36308:case 36293:return jU;case 36289:case 36303:case 36311:case 36292:return $U}}var G_=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=NU(n.type)}},k_=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=tL(n.type)}},X_=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,n[o.id],i)}}},H_=/(\w+)(\])?(\[|\.)?/g;function ET(e,t){e.seq.push(t),e.map[t.id]=t}function eL(e,t,n){let i=e.name,s=i.length;for(H_.lastIndex=0;;){let r=H_.exec(i),a=H_.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ET(n,c===void 0?new G_(o,e,t):new k_(o,e,t));break}else{let f=n.map[o];f===void 0&&(f=new X_(o),ET(n,f)),n=f}}}var bl=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(n,s),a=t.getUniformLocation(n,r.name);eL(r,a,this)}}setValue(t,n,i,s){let r=this.map[n];r!==void 0&&r.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let r=0,a=n.length;r!==a;++r){let o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in n&&i.push(a)}return i}};function AT(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var nL=37297,iL=0;function sL(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var wT=new Vt;function rL(e){$t._getMatrix(wT,$t.workingColorSpace,e);let t=`mat3( ${wT.elements.map(n=>n.toFixed(4))} )`;switch($t.getTransfer(e)){case Jc:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function CT(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),r=(e.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+sL(e.getShaderSource(t),o)}else return r}function aL(e,t){let n=rL(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function oL(e,t){let n;switch(t){case kb:n="Linear";break;case Xb:n="Reinhard";break;case Wb:n="Cineon";break;case qb:n="ACESFilmic";break;case Zb:n="AgX";break;case Jb:n="Neutral";break;case Yb:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var jd=new z;function lL(){$t.getLuminanceCoefficients(jd);let e=jd.x.toFixed(4),t=jd.y.toFixed(4),n=jd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cL(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vu).join(`
`)}function uL(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function hL(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=e.getActiveAttrib(t,s),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function vu(e){return e!==""}function RT(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function DT(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var fL=/^[ \t]*#include +<([\w\d./]+)>/gm;function W_(e){return e.replace(fL,pL)}var dL=new Map;function pL(e,t){let n=Gt[t];if(n===void 0){let i=dL.get(t);if(i!==void 0)n=Gt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return W_(n)}var mL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function UT(e){return e.replace(mL,gL)}function gL(e,t,n,i){let s="";for(let r=parseInt(t);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function LT(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function _L(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===m_?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===Mb?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===as&&(t="SHADOWMAP_TYPE_VSM"),t}function vL(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Va:case Ha:t="ENVMAP_TYPE_CUBE";break;case hu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function yL(e){let t="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===Ha&&(t="ENVMAP_MODE_REFRACTION"),t}function xL(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case y_:t="ENVMAP_BLENDING_MULTIPLY";break;case Hb:t="ENVMAP_BLENDING_MIX";break;case Gb:t="ENVMAP_BLENDING_ADD";break}return t}function SL(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function ML(e,t,n,i){let s=e.getContext(),r=n.defines,a=n.vertexShader,o=n.fragmentShader,l=_L(n),c=vL(n),u=yL(n),f=xL(n),h=SL(n),p=cL(n),_=uL(r),g=s.createProgram(),m,d,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(vu).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(vu).join(`
`),d.length>0&&(d+=`
`)):(m=[LT(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vu).join(`
`),d=[LT(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ys?"#define TONE_MAPPING":"",n.toneMapping!==Ys?Gt.tonemapping_pars_fragment:"",n.toneMapping!==Ys?oL("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,aL("linearToOutputTexel",n.outputColorSpace),lL(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(vu).join(`
`)),a=W_(a),a=RT(a,n),a=DT(a,n),o=W_(o),o=RT(o,n),o=DT(o,n),a=UT(a),o=UT(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===D_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===D_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let y=v+m+a,x=v+d+o,T=AT(s,s.VERTEX_SHADER,y),w=AT(s,s.FRAGMENT_SHADER,x);s.attachShader(g,T),s.attachShader(g,w),n.index0AttributeName!==void 0?s.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function E(U){if(e.debug.checkShaderErrors){let I=s.getProgramInfoLog(g)||"",B=s.getShaderInfoLog(T)||"",H=s.getShaderInfoLog(w)||"",W=I.trim(),k=B.trim(),K=H.trim(),F=!0,it=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(F=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,g,T,w);else{let lt=CT(s,T,"vertex"),gt=CT(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+W+`
`+lt+`
`+gt)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(k===""||K==="")&&(it=!1);it&&(U.diagnostics={runnable:F,programLog:W,vertexShader:{log:k,prefix:m},fragmentShader:{log:K,prefix:d}})}s.deleteShader(T),s.deleteShader(w),C=new bl(s,g),S=hL(s,g)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(g,nL)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=iL++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=w,this}var bL=0,q_=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let n=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new Y_(t),n.set(t,i)),i}},Y_=class{constructor(t){this.id=bL++,this.code=t,this.usedTimes=0}};function TL(e,t,n,i,s,r,a){let o=new $c,l=new q_,c=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.vertexTextures,p=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,U,I,B){let H=I.fog,W=B.geometry,k=S.isMeshStandardMaterial?I.environment:null,K=(S.isMeshStandardMaterial?n:t).get(S.envMap||k),F=K&&K.mapping===hu?K.image.height:null,it=_[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let lt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,gt=lt!==void 0?lt.length:0,rt=0;W.morphAttributes.position!==void 0&&(rt=1),W.morphAttributes.normal!==void 0&&(rt=2),W.morphAttributes.color!==void 0&&(rt=3);let Pt,kt,It,X;if(it){let re=us[it];Pt=re.vertexShader,kt=re.fragmentShader}else Pt=S.vertexShader,kt=S.fragmentShader,l.update(S),It=l.getVertexShaderID(S),X=l.getFragmentShaderID(S);let J=e.getRenderTarget(),dt=e.state.buffers.depth.getReversed(),At=B.isInstancedMesh===!0,St=B.isBatchedMesh===!0,qt=!!S.map,Je=!!S.matcap,D=!!K,fe=!!S.aoMap,Nt=!!S.lightMap,Ct=!!S.bumpMap,_t=!!S.normalMap,te=!!S.displacementMap,ht=!!S.emissiveMap,Lt=!!S.metalnessMap,de=!!S.roughnessMap,Ae=S.anisotropy>0,R=S.clearcoat>0,b=S.dispersion>0,P=S.iridescence>0,Y=S.sheen>0,j=S.transmission>0,q=Ae&&!!S.anisotropyMap,Tt=R&&!!S.clearcoatMap,st=R&&!!S.clearcoatNormalMap,xt=R&&!!S.clearcoatRoughnessMap,Mt=P&&!!S.iridescenceMap,et=P&&!!S.iridescenceThicknessMap,ft=Y&&!!S.sheenColorMap,Dt=Y&&!!S.sheenRoughnessMap,bt=!!S.specularMap,ct=!!S.specularColorMap,Ht=!!S.specularIntensityMap,L=j&&!!S.transmissionMap,nt=j&&!!S.thicknessMap,at=!!S.gradientMap,mt=!!S.alphaMap,$=S.alphaTest>0,Q=!!S.alphaHash,yt=!!S.extensions,Bt=Ys;S.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Bt=e.toneMapping);let ve={shaderID:it,shaderType:S.type,shaderName:S.name,vertexShader:Pt,fragmentShader:kt,defines:S.defines,customVertexShaderID:It,customFragmentShaderID:X,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:St,batchingColor:St&&B._colorsTexture!==null,instancing:At,instancingColor:At&&B.instanceColor!==null,instancingMorph:At&&B.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:J===null?e.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Pa,alphaToCoverage:!!S.alphaToCoverage,map:qt,matcap:Je,envMap:D,envMapMode:D&&K.mapping,envMapCubeUVHeight:F,aoMap:fe,lightMap:Nt,bumpMap:Ct,normalMap:_t,displacementMap:h&&te,emissiveMap:ht,normalMapObjectSpace:_t&&S.normalMapType===tT,normalMapTangentSpace:_t&&S.normalMapType===$b,metalnessMap:Lt,roughnessMap:de,anisotropy:Ae,anisotropyMap:q,clearcoat:R,clearcoatMap:Tt,clearcoatNormalMap:st,clearcoatRoughnessMap:xt,dispersion:b,iridescence:P,iridescenceMap:Mt,iridescenceThicknessMap:et,sheen:Y,sheenColorMap:ft,sheenRoughnessMap:Dt,specularMap:bt,specularColorMap:ct,specularIntensityMap:Ht,transmission:j,transmissionMap:L,thicknessMap:nt,gradientMap:at,opaque:S.transparent===!1&&S.blending===Na&&S.alphaToCoverage===!1,alphaMap:mt,alphaTest:$,alphaHash:Q,combine:S.combine,mapUv:qt&&g(S.map.channel),aoMapUv:fe&&g(S.aoMap.channel),lightMapUv:Nt&&g(S.lightMap.channel),bumpMapUv:Ct&&g(S.bumpMap.channel),normalMapUv:_t&&g(S.normalMap.channel),displacementMapUv:te&&g(S.displacementMap.channel),emissiveMapUv:ht&&g(S.emissiveMap.channel),metalnessMapUv:Lt&&g(S.metalnessMap.channel),roughnessMapUv:de&&g(S.roughnessMap.channel),anisotropyMapUv:q&&g(S.anisotropyMap.channel),clearcoatMapUv:Tt&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:st&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:et&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&g(S.sheenRoughnessMap.channel),specularMapUv:bt&&g(S.specularMap.channel),specularColorMapUv:ct&&g(S.specularColorMap.channel),specularIntensityMapUv:Ht&&g(S.specularIntensityMap.channel),transmissionMapUv:L&&g(S.transmissionMap.channel),thicknessMapUv:nt&&g(S.thicknessMap.channel),alphaMapUv:mt&&g(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(_t||Ae),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!W.attributes.uv&&(qt||mt),fog:!!H,useFog:S.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:dt,skinning:B.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:rt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:e.shadowMap.enabled&&U.length>0,shadowMapType:e.shadowMap.type,toneMapping:Bt,decodeVideoTexture:qt&&S.map.isVideoTexture===!0&&$t.getTransfer(S.map.colorSpace)===le,decodeVideoTextureEmissive:ht&&S.emissiveMap.isVideoTexture===!0&&$t.getTransfer(S.emissiveMap.colorSpace)===le,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===os,flipSided:S.side===wn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:yt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&S.extensions.multiDraw===!0||St)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ve.vertexUv1s=c.has(1),ve.vertexUv2s=c.has(2),ve.vertexUv3s=c.has(3),c.clear(),ve}function d(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let U in S.defines)M.push(U),M.push(S.defines[U]);return S.isRawShaderMaterial===!1&&(v(M,S),y(M,S),M.push(e.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function v(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function x(S){let M=_[S.type],U;if(M){let I=us[M];U=hT.clone(I.uniforms)}else U=S.uniforms;return U}function T(S,M){let U;for(let I=0,B=u.length;I<B;I++){let H=u[I];if(H.cacheKey===M){U=H,++U.usedTimes;break}}return U===void 0&&(U=new ML(e,M,S,r),u.push(U)),U}function w(S){if(--S.usedTimes===0){let M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function E(S){l.remove(S)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:T,releaseProgram:w,releaseShaderCache:E,programs:u,dispose:C}}function EL(){let e=new WeakMap;function t(a){return e.has(a)}function n(a){let o=e.get(a);return o===void 0&&(o={},e.set(a,o)),o}function i(a){e.delete(a)}function s(a,o,l){e.get(a)[o]=l}function r(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:r}}function AL(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function OT(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function NT(){let e=[],t=0,n=[],i=[],s=[];function r(){t=0,n.length=0,i.length=0,s.length=0}function a(f,h,p,_,g,m){let d=e[t];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},e[t]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=g,d.group=m),t++,d}function o(f,h,p,_,g,m){let d=a(f,h,p,_,g,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):n.push(d)}function l(f,h,p,_,g,m){let d=a(f,h,p,_,g,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):n.unshift(d)}function c(f,h){n.length>1&&n.sort(f||AL),i.length>1&&i.sort(h||OT),s.length>1&&s.sort(h||OT)}function u(){for(let f=t,h=e.length;f<h;f++){let p=e[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function wL(){let e=new WeakMap;function t(i,s){let r=e.get(i),a;return r===void 0?(a=new NT,e.set(i,[a])):s>=r.length?(a=new NT,r.push(a)):a=r[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function CL(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new z,color:new se};break;case"SpotLight":n={position:new z,direction:new z,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new se,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new se,groundColor:new se};break;case"RectAreaLight":n={color:new se,position:new z,halfWidth:new z,halfHeight:new z};break}return e[t.id]=n,n}}}function RL(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var DL=0;function UL(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function LL(e){let t=new CL,n=RL(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);let s=new z,r=new $e,a=new $e;function o(c){let u=0,f=0,h=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,_=0,g=0,m=0,d=0,v=0,y=0,x=0,T=0,w=0,E=0;c.sort(UL);for(let S=0,M=c.length;S<M;S++){let U=c[S],I=U.color,B=U.intensity,H=U.distance,W=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=I.r*B,f+=I.g*B,h+=I.b*B;else if(U.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(U.sh.coefficients[k],B);E++}else if(U.isDirectionalLight){let k=t.get(U);if(k.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let K=U.shadow,F=n.get(U);F.shadowIntensity=K.intensity,F.shadowBias=K.bias,F.shadowNormalBias=K.normalBias,F.shadowRadius=K.radius,F.shadowMapSize=K.mapSize,i.directionalShadow[p]=F,i.directionalShadowMap[p]=W,i.directionalShadowMatrix[p]=U.shadow.matrix,v++}i.directional[p]=k,p++}else if(U.isSpotLight){let k=t.get(U);k.position.setFromMatrixPosition(U.matrixWorld),k.color.copy(I).multiplyScalar(B),k.distance=H,k.coneCos=Math.cos(U.angle),k.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),k.decay=U.decay,i.spot[g]=k;let K=U.shadow;if(U.map&&(i.spotLightMap[T]=U.map,T++,K.updateMatrices(U),U.castShadow&&w++),i.spotLightMatrix[g]=K.matrix,U.castShadow){let F=n.get(U);F.shadowIntensity=K.intensity,F.shadowBias=K.bias,F.shadowNormalBias=K.normalBias,F.shadowRadius=K.radius,F.shadowMapSize=K.mapSize,i.spotShadow[g]=F,i.spotShadowMap[g]=W,x++}g++}else if(U.isRectAreaLight){let k=t.get(U);k.color.copy(I).multiplyScalar(B),k.halfWidth.set(U.width*.5,0,0),k.halfHeight.set(0,U.height*.5,0),i.rectArea[m]=k,m++}else if(U.isPointLight){let k=t.get(U);if(k.color.copy(U.color).multiplyScalar(U.intensity),k.distance=U.distance,k.decay=U.decay,U.castShadow){let K=U.shadow,F=n.get(U);F.shadowIntensity=K.intensity,F.shadowBias=K.bias,F.shadowNormalBias=K.normalBias,F.shadowRadius=K.radius,F.shadowMapSize=K.mapSize,F.shadowCameraNear=K.camera.near,F.shadowCameraFar=K.camera.far,i.pointShadow[_]=F,i.pointShadowMap[_]=W,i.pointShadowMatrix[_]=U.shadow.matrix,y++}i.point[_]=k,_++}else if(U.isHemisphereLight){let k=t.get(U);k.skyColor.copy(U.color).multiplyScalar(B),k.groundColor.copy(U.groundColor).multiplyScalar(B),i.hemi[d]=k,d++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;let C=i.hash;(C.directionalLength!==p||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==m||C.hemiLength!==d||C.numDirectionalShadows!==v||C.numPointShadows!==y||C.numSpotShadows!==x||C.numSpotMaps!==T||C.numLightProbes!==E)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+T-w,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=E,C.directionalLength=p,C.pointLength=_,C.spotLength=g,C.rectAreaLength=m,C.hemiLength=d,C.numDirectionalShadows=v,C.numPointShadows=y,C.numSpotShadows=x,C.numSpotMaps=T,C.numLightProbes=E,i.version=DL++)}function l(c,u){let f=0,h=0,p=0,_=0,g=0,m=u.matrixWorldInverse;for(let d=0,v=c.length;d<v;d++){let y=c[d];if(y.isDirectionalLight){let x=i.directional[f];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(y.isSpotLight){let x=i.spot[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let x=i.rectArea[_];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let x=i.point[h];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){let x=i.hemi[g];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function IT(e){let t=new LL(e),n=[],i=[];function s(u){c.camera=u,n.length=0,i.length=0}function r(u){n.push(u)}function a(u){i.push(u)}function o(){t.setup(n)}function l(u){t.setupView(n,u)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function OL(e){let t=new WeakMap;function n(s,r=0){let a=t.get(s),o;return a===void 0?(o=new IT(e),t.set(s,[o])):r>=a.length?(o=new IT(e),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var NL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IL=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function PL(e,t,n){let i=new au,s=new Jt,r=new Jt,a=new Ve,o=new Zf({depthPacking:jb}),l=new Jf,c={},u=n.maxTextureSize,f={[ks]:wn,[wn]:ks,[os]:os},h=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Jt},radius:{value:4}},vertexShader:NL,fragmentShader:IL}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let _=new Gr;_.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Xn(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=m_;let d=this.type;this.render=function(w,E,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let S=e.getRenderTarget(),M=e.getActiveCubeFace(),U=e.getActiveMipmapLevel(),I=e.state;I.setBlending(qs),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let B=d!==as&&this.type===as,H=d===as&&this.type!==as;for(let W=0,k=w.length;W<k;W++){let K=w[W],F=K.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let it=F.getFrameExtents();if(s.multiply(it),r.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/it.x),s.x=r.x*it.x,F.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/it.y),s.y=r.y*it.y,F.mapSize.y=r.y)),F.map===null||B===!0||H===!0){let gt=this.type!==as?{minFilter:Li,magFilter:Li}:{};F.map!==null&&F.map.dispose(),F.map=new ss(s.x,s.y,gt),F.map.texture.name=K.name+".shadowMap",F.camera.updateProjectionMatrix()}e.setRenderTarget(F.map),e.clear();let lt=F.getViewportCount();for(let gt=0;gt<lt;gt++){let rt=F.getViewport(gt);a.set(r.x*rt.x,r.y*rt.y,r.x*rt.z,r.y*rt.w),I.viewport(a),F.updateMatrices(K,gt),i=F.getFrustum(),x(E,C,F.camera,K,this.type)}F.isPointLightShadow!==!0&&this.type===as&&v(F,C),F.needsUpdate=!1}d=this.type,m.needsUpdate=!1,e.setRenderTarget(S,M,U)};function v(w,E){let C=t.update(g);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ss(s.x,s.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(E,null,C,h,g,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(E,null,C,p,g,null)}function y(w,E,C,S){let M=null,U=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)M=U;else if(M=C.isPointLight===!0?l:o,e.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let I=M.uuid,B=E.uuid,H=c[I];H===void 0&&(H={},c[I]=H);let W=H[B];W===void 0&&(W=M.clone(),H[B]=W,E.addEventListener("dispose",T)),M=W}if(M.visible=E.visible,M.wireframe=E.wireframe,S===as?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:f[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let I=e.properties.get(M);I.light=C}return M}function x(w,E,C,S,M){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===as)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);let B=t.update(w),H=w.material;if(Array.isArray(H)){let W=B.groups;for(let k=0,K=W.length;k<K;k++){let F=W[k],it=H[F.materialIndex];if(it&&it.visible){let lt=y(w,it,S,M);w.onBeforeShadow(e,w,E,C,B,lt,F),e.renderBufferDirect(C,null,B,lt,w,F),w.onAfterShadow(e,w,E,C,B,lt,F)}}}else if(H.visible){let W=y(w,H,S,M);w.onBeforeShadow(e,w,E,C,B,W,null),e.renderBufferDirect(C,null,B,W,w,null),w.onAfterShadow(e,w,E,C,B,W,null)}}let I=w.children;for(let B=0,H=I.length;B<H;B++)x(I[B],E,C,S,M)}function T(w){w.target.removeEventListener("dispose",T);for(let C in c){let S=c[C],M=w.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}var BL={[ad]:od,[ld]:hd,[cd]:fd,[Ia]:ud,[od]:ad,[hd]:ld,[fd]:cd,[ud]:Ia};function zL(e,t){function n(){let L=!1,nt=new Ve,at=null,mt=new Ve(0,0,0,0);return{setMask:function($){at!==$&&!L&&(e.colorMask($,$,$,$),at=$)},setLocked:function($){L=$},setClear:function($,Q,yt,Bt,ve){ve===!0&&($*=Bt,Q*=Bt,yt*=Bt),nt.set($,Q,yt,Bt),mt.equals(nt)===!1&&(e.clearColor($,Q,yt,Bt),mt.copy(nt))},reset:function(){L=!1,at=null,mt.set(-1,0,0,0)}}}function i(){let L=!1,nt=!1,at=null,mt=null,$=null;return{setReversed:function(Q){if(nt!==Q){let yt=t.get("EXT_clip_control");Q?yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.ZERO_TO_ONE_EXT):yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.NEGATIVE_ONE_TO_ONE_EXT),nt=Q;let Bt=$;$=null,this.setClear(Bt)}},getReversed:function(){return nt},setTest:function(Q){Q?J(e.DEPTH_TEST):dt(e.DEPTH_TEST)},setMask:function(Q){at!==Q&&!L&&(e.depthMask(Q),at=Q)},setFunc:function(Q){if(nt&&(Q=BL[Q]),mt!==Q){switch(Q){case ad:e.depthFunc(e.NEVER);break;case od:e.depthFunc(e.ALWAYS);break;case ld:e.depthFunc(e.LESS);break;case Ia:e.depthFunc(e.LEQUAL);break;case cd:e.depthFunc(e.EQUAL);break;case ud:e.depthFunc(e.GEQUAL);break;case hd:e.depthFunc(e.GREATER);break;case fd:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}mt=Q}},setLocked:function(Q){L=Q},setClear:function(Q){$!==Q&&(nt&&(Q=1-Q),e.clearDepth(Q),$=Q)},reset:function(){L=!1,at=null,mt=null,$=null,nt=!1}}}function s(){let L=!1,nt=null,at=null,mt=null,$=null,Q=null,yt=null,Bt=null,ve=null;return{setTest:function(re){L||(re?J(e.STENCIL_TEST):dt(e.STENCIL_TEST))},setMask:function(re){nt!==re&&!L&&(e.stencilMask(re),nt=re)},setFunc:function(re,hs,ki){(at!==re||mt!==hs||$!==ki)&&(e.stencilFunc(re,hs,ki),at=re,mt=hs,$=ki)},setOp:function(re,hs,ki){(Q!==re||yt!==hs||Bt!==ki)&&(e.stencilOp(re,hs,ki),Q=re,yt=hs,Bt=ki)},setLocked:function(re){L=re},setClear:function(re){ve!==re&&(e.clearStencil(re),ve=re)},reset:function(){L=!1,nt=null,at=null,mt=null,$=null,Q=null,yt=null,Bt=null,ve=null}}}let r=new n,a=new i,o=new s,l=new WeakMap,c=new WeakMap,u={},f={},h=new WeakMap,p=[],_=null,g=!1,m=null,d=null,v=null,y=null,x=null,T=null,w=null,E=new se(0,0,0),C=0,S=!1,M=null,U=null,I=null,B=null,H=null,W=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,K=0,F=e.getParameter(e.VERSION);F.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(F)[1]),k=K>=1):F.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),k=K>=2);let it=null,lt={},gt=e.getParameter(e.SCISSOR_BOX),rt=e.getParameter(e.VIEWPORT),Pt=new Ve().fromArray(gt),kt=new Ve().fromArray(rt);function It(L,nt,at,mt){let $=new Uint8Array(4),Q=e.createTexture();e.bindTexture(L,Q),e.texParameteri(L,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(L,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let yt=0;yt<at;yt++)L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY?e.texImage3D(nt,0,e.RGBA,1,1,mt,0,e.RGBA,e.UNSIGNED_BYTE,$):e.texImage2D(nt+yt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,$);return Q}let X={};X[e.TEXTURE_2D]=It(e.TEXTURE_2D,e.TEXTURE_2D,1),X[e.TEXTURE_CUBE_MAP]=It(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[e.TEXTURE_2D_ARRAY]=It(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),X[e.TEXTURE_3D]=It(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(e.DEPTH_TEST),a.setFunc(Ia),Ct(!1),_t(p_),J(e.CULL_FACE),fe(qs);function J(L){u[L]!==!0&&(e.enable(L),u[L]=!0)}function dt(L){u[L]!==!1&&(e.disable(L),u[L]=!1)}function At(L,nt){return f[L]!==nt?(e.bindFramebuffer(L,nt),f[L]=nt,L===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=nt),L===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=nt),!0):!1}function St(L,nt){let at=p,mt=!1;if(L){at=h.get(nt),at===void 0&&(at=[],h.set(nt,at));let $=L.textures;if(at.length!==$.length||at[0]!==e.COLOR_ATTACHMENT0){for(let Q=0,yt=$.length;Q<yt;Q++)at[Q]=e.COLOR_ATTACHMENT0+Q;at.length=$.length,mt=!0}}else at[0]!==e.BACK&&(at[0]=e.BACK,mt=!0);mt&&e.drawBuffers(at)}function qt(L){return _!==L?(e.useProgram(L),_=L,!0):!1}let Je={[Vr]:e.FUNC_ADD,[Tb]:e.FUNC_SUBTRACT,[Eb]:e.FUNC_REVERSE_SUBTRACT};Je[Ab]=e.MIN,Je[wb]=e.MAX;let D={[Cb]:e.ZERO,[Rb]:e.ONE,[Db]:e.SRC_COLOR,[Pf]:e.SRC_ALPHA,[Pb]:e.SRC_ALPHA_SATURATE,[Nb]:e.DST_COLOR,[Lb]:e.DST_ALPHA,[Ub]:e.ONE_MINUS_SRC_COLOR,[Bf]:e.ONE_MINUS_SRC_ALPHA,[Ib]:e.ONE_MINUS_DST_COLOR,[Ob]:e.ONE_MINUS_DST_ALPHA,[Bb]:e.CONSTANT_COLOR,[zb]:e.ONE_MINUS_CONSTANT_COLOR,[Fb]:e.CONSTANT_ALPHA,[Vb]:e.ONE_MINUS_CONSTANT_ALPHA};function fe(L,nt,at,mt,$,Q,yt,Bt,ve,re){if(L===qs){g===!0&&(dt(e.BLEND),g=!1);return}if(g===!1&&(J(e.BLEND),g=!0),L!==bb){if(L!==m||re!==S){if((d!==Vr||x!==Vr)&&(e.blendEquation(e.FUNC_ADD),d=Vr,x=Vr),re)switch(L){case Na:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case g_:e.blendFunc(e.ONE,e.ONE);break;case __:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case v_:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Na:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case g_:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case __:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case v_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,y=null,T=null,w=null,E.set(0,0,0),C=0,m=L,S=re}return}$=$||nt,Q=Q||at,yt=yt||mt,(nt!==d||$!==x)&&(e.blendEquationSeparate(Je[nt],Je[$]),d=nt,x=$),(at!==v||mt!==y||Q!==T||yt!==w)&&(e.blendFuncSeparate(D[at],D[mt],D[Q],D[yt]),v=at,y=mt,T=Q,w=yt),(Bt.equals(E)===!1||ve!==C)&&(e.blendColor(Bt.r,Bt.g,Bt.b,ve),E.copy(Bt),C=ve),m=L,S=!1}function Nt(L,nt){L.side===os?dt(e.CULL_FACE):J(e.CULL_FACE);let at=L.side===wn;nt&&(at=!at),Ct(at),L.blending===Na&&L.transparent===!1?fe(qs):fe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let mt=L.stencilWrite;o.setTest(mt),mt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ht(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?J(e.SAMPLE_ALPHA_TO_COVERAGE):dt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(L){M!==L&&(L?e.frontFace(e.CW):e.frontFace(e.CCW),M=L)}function _t(L){L!==xb?(J(e.CULL_FACE),L!==U&&(L===p_?e.cullFace(e.BACK):L===Sb?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):dt(e.CULL_FACE),U=L}function te(L){L!==I&&(k&&e.lineWidth(L),I=L)}function ht(L,nt,at){L?(J(e.POLYGON_OFFSET_FILL),(B!==nt||H!==at)&&(e.polygonOffset(nt,at),B=nt,H=at)):dt(e.POLYGON_OFFSET_FILL)}function Lt(L){L?J(e.SCISSOR_TEST):dt(e.SCISSOR_TEST)}function de(L){L===void 0&&(L=e.TEXTURE0+W-1),it!==L&&(e.activeTexture(L),it=L)}function Ae(L,nt,at){at===void 0&&(it===null?at=e.TEXTURE0+W-1:at=it);let mt=lt[at];mt===void 0&&(mt={type:void 0,texture:void 0},lt[at]=mt),(mt.type!==L||mt.texture!==nt)&&(it!==at&&(e.activeTexture(at),it=at),e.bindTexture(L,nt||X[L]),mt.type=L,mt.texture=nt)}function R(){let L=lt[it];L!==void 0&&L.type!==void 0&&(e.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function b(){try{e.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function P(){try{e.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{e.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{e.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{e.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Tt(){try{e.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function st(){try{e.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{e.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Mt(){try{e.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{e.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(L){Pt.equals(L)===!1&&(e.scissor(L.x,L.y,L.z,L.w),Pt.copy(L))}function Dt(L){kt.equals(L)===!1&&(e.viewport(L.x,L.y,L.z,L.w),kt.copy(L))}function bt(L,nt){let at=c.get(nt);at===void 0&&(at=new WeakMap,c.set(nt,at));let mt=at.get(L);mt===void 0&&(mt=e.getUniformBlockIndex(nt,L.name),at.set(L,mt))}function ct(L,nt){let mt=c.get(nt).get(L);l.get(nt)!==mt&&(e.uniformBlockBinding(nt,mt,L.__bindingPointIndex),l.set(nt,mt))}function Ht(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),a.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},it=null,lt={},f={},h=new WeakMap,p=[],_=null,g=!1,m=null,d=null,v=null,y=null,x=null,T=null,w=null,E=new se(0,0,0),C=0,S=!1,M=null,U=null,I=null,B=null,H=null,Pt.set(0,0,e.canvas.width,e.canvas.height),kt.set(0,0,e.canvas.width,e.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:J,disable:dt,bindFramebuffer:At,drawBuffers:St,useProgram:qt,setBlending:fe,setMaterial:Nt,setFlipSided:Ct,setCullFace:_t,setLineWidth:te,setPolygonOffset:ht,setScissorTest:Lt,activeTexture:de,bindTexture:Ae,unbindTexture:R,compressedTexImage2D:b,compressedTexImage3D:P,texImage2D:Mt,texImage3D:et,updateUBOMapping:bt,uniformBlockBinding:ct,texStorage2D:st,texStorage3D:xt,texSubImage2D:Y,texSubImage3D:j,compressedTexSubImage2D:q,compressedTexSubImage3D:Tt,scissor:ft,viewport:Dt,reset:Ht}}function FL(e,t,n,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Jt,u=new WeakMap,f,h=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,b){return p?new OffscreenCanvas(R,b):Qc("canvas")}function g(R,b,P){let Y=1,j=Ae(R);if((j.width>P||j.height>P)&&(Y=P/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let q=Math.floor(Y*j.width),Tt=Math.floor(Y*j.height);f===void 0&&(f=_(q,Tt));let st=b?_(q,Tt):f;return st.width=q,st.height=Tt,st.getContext("2d").drawImage(R,0,0,q,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+q+"x"+Tt+")."),st}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),R;return R}function m(R){return R.generateMipmaps}function d(R){e.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?e.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function y(R,b,P,Y,j=!1){if(R!==null){if(e[R]!==void 0)return e[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let q=b;if(b===e.RED&&(P===e.FLOAT&&(q=e.R32F),P===e.HALF_FLOAT&&(q=e.R16F),P===e.UNSIGNED_BYTE&&(q=e.R8)),b===e.RED_INTEGER&&(P===e.UNSIGNED_BYTE&&(q=e.R8UI),P===e.UNSIGNED_SHORT&&(q=e.R16UI),P===e.UNSIGNED_INT&&(q=e.R32UI),P===e.BYTE&&(q=e.R8I),P===e.SHORT&&(q=e.R16I),P===e.INT&&(q=e.R32I)),b===e.RG&&(P===e.FLOAT&&(q=e.RG32F),P===e.HALF_FLOAT&&(q=e.RG16F),P===e.UNSIGNED_BYTE&&(q=e.RG8)),b===e.RG_INTEGER&&(P===e.UNSIGNED_BYTE&&(q=e.RG8UI),P===e.UNSIGNED_SHORT&&(q=e.RG16UI),P===e.UNSIGNED_INT&&(q=e.RG32UI),P===e.BYTE&&(q=e.RG8I),P===e.SHORT&&(q=e.RG16I),P===e.INT&&(q=e.RG32I)),b===e.RGB_INTEGER&&(P===e.UNSIGNED_BYTE&&(q=e.RGB8UI),P===e.UNSIGNED_SHORT&&(q=e.RGB16UI),P===e.UNSIGNED_INT&&(q=e.RGB32UI),P===e.BYTE&&(q=e.RGB8I),P===e.SHORT&&(q=e.RGB16I),P===e.INT&&(q=e.RGB32I)),b===e.RGBA_INTEGER&&(P===e.UNSIGNED_BYTE&&(q=e.RGBA8UI),P===e.UNSIGNED_SHORT&&(q=e.RGBA16UI),P===e.UNSIGNED_INT&&(q=e.RGBA32UI),P===e.BYTE&&(q=e.RGBA8I),P===e.SHORT&&(q=e.RGBA16I),P===e.INT&&(q=e.RGBA32I)),b===e.RGB&&(P===e.UNSIGNED_INT_5_9_9_9_REV&&(q=e.RGB9_E5),P===e.UNSIGNED_INT_10F_11F_11F_REV&&(q=e.R11F_G11F_B10F)),b===e.RGBA){let Tt=j?Jc:$t.getTransfer(Y);P===e.FLOAT&&(q=e.RGBA32F),P===e.HALF_FLOAT&&(q=e.RGBA16F),P===e.UNSIGNED_BYTE&&(q=Tt===le?e.SRGB8_ALPHA8:e.RGBA8),P===e.UNSIGNED_SHORT_4_4_4_4&&(q=e.RGBA4),P===e.UNSIGNED_SHORT_5_5_5_1&&(q=e.RGB5_A1)}return(q===e.R16F||q===e.R32F||q===e.RG16F||q===e.RG32F||q===e.RGBA16F||q===e.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function x(R,b){let P;return R?b===null||b===qr||b===yl?P=e.DEPTH24_STENCIL8:b===cs?P=e.DEPTH32F_STENCIL8:b===_l&&(P=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===qr||b===yl?P=e.DEPTH_COMPONENT24:b===cs?P=e.DEPTH_COMPONENT32F:b===_l&&(P=e.DEPTH_COMPONENT16),P}function T(R,b){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Li&&R.minFilter!==Gi?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function w(R){let b=R.target;b.removeEventListener("dispose",w),C(b),b.isVideoTexture&&u.delete(b)}function E(R){let b=R.target;b.removeEventListener("dispose",E),M(b)}function C(R){let b=i.get(R);if(b.__webglInit===void 0)return;let P=R.source,Y=h.get(P);if(Y){let j=Y[b.__cacheKey];j.usedTimes--,j.usedTimes===0&&S(R),Object.keys(Y).length===0&&h.delete(P)}i.remove(R)}function S(R){let b=i.get(R);e.deleteTexture(b.__webglTexture);let P=R.source,Y=h.get(P);delete Y[b.__cacheKey],a.memory.textures--}function M(R){let b=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(b.__webglFramebuffer[Y]))for(let j=0;j<b.__webglFramebuffer[Y].length;j++)e.deleteFramebuffer(b.__webglFramebuffer[Y][j]);else e.deleteFramebuffer(b.__webglFramebuffer[Y]);b.__webglDepthbuffer&&e.deleteRenderbuffer(b.__webglDepthbuffer[Y])}else{if(Array.isArray(b.__webglFramebuffer))for(let Y=0;Y<b.__webglFramebuffer.length;Y++)e.deleteFramebuffer(b.__webglFramebuffer[Y]);else e.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&e.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&e.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Y=0;Y<b.__webglColorRenderbuffer.length;Y++)b.__webglColorRenderbuffer[Y]&&e.deleteRenderbuffer(b.__webglColorRenderbuffer[Y]);b.__webglDepthRenderbuffer&&e.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let P=R.textures;for(let Y=0,j=P.length;Y<j;Y++){let q=i.get(P[Y]);q.__webglTexture&&(e.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(P[Y])}i.remove(R)}let U=0;function I(){U=0}function B(){let R=U;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),U+=1,R}function H(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function W(R,b){let P=i.get(R);if(R.isVideoTexture&&Lt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&P.__version!==R.version){let Y=R.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(P,R,b);return}}else R.isExternalTexture&&(P.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,P.__webglTexture,e.TEXTURE0+b)}function k(R,b){let P=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&P.__version!==R.version){X(P,R,b);return}n.bindTexture(e.TEXTURE_2D_ARRAY,P.__webglTexture,e.TEXTURE0+b)}function K(R,b){let P=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&P.__version!==R.version){X(P,R,b);return}n.bindTexture(e.TEXTURE_3D,P.__webglTexture,e.TEXTURE0+b)}function F(R,b){let P=i.get(R);if(R.version>0&&P.__version!==R.version){J(P,R,b);return}n.bindTexture(e.TEXTURE_CUBE_MAP,P.__webglTexture,e.TEXTURE0+b)}let it={[zf]:e.REPEAT,[Fr]:e.CLAMP_TO_EDGE,[Ff]:e.MIRRORED_REPEAT},lt={[Li]:e.NEAREST,[Kb]:e.NEAREST_MIPMAP_NEAREST,[fu]:e.NEAREST_MIPMAP_LINEAR,[Gi]:e.LINEAR,[md]:e.LINEAR_MIPMAP_NEAREST,[Wr]:e.LINEAR_MIPMAP_LINEAR},gt={[eT]:e.NEVER,[oT]:e.ALWAYS,[nT]:e.LESS,[R_]:e.LEQUAL,[iT]:e.EQUAL,[aT]:e.GEQUAL,[sT]:e.GREATER,[rT]:e.NOTEQUAL};function rt(R,b){if(b.type===cs&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Gi||b.magFilter===md||b.magFilter===fu||b.magFilter===Wr||b.minFilter===Gi||b.minFilter===md||b.minFilter===fu||b.minFilter===Wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(R,e.TEXTURE_WRAP_S,it[b.wrapS]),e.texParameteri(R,e.TEXTURE_WRAP_T,it[b.wrapT]),(R===e.TEXTURE_3D||R===e.TEXTURE_2D_ARRAY)&&e.texParameteri(R,e.TEXTURE_WRAP_R,it[b.wrapR]),e.texParameteri(R,e.TEXTURE_MAG_FILTER,lt[b.magFilter]),e.texParameteri(R,e.TEXTURE_MIN_FILTER,lt[b.minFilter]),b.compareFunction&&(e.texParameteri(R,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(R,e.TEXTURE_COMPARE_FUNC,gt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Li||b.minFilter!==fu&&b.minFilter!==Wr||b.type===cs&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let P=t.get("EXT_texture_filter_anisotropic");e.texParameterf(R,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Pt(R,b){let P=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",w));let Y=b.source,j=h.get(Y);j===void 0&&(j={},h.set(Y,j));let q=H(b);if(q!==R.__cacheKey){j[q]===void 0&&(j[q]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,P=!0),j[q].usedTimes++;let Tt=j[R.__cacheKey];Tt!==void 0&&(j[R.__cacheKey].usedTimes--,Tt.usedTimes===0&&S(b)),R.__cacheKey=q,R.__webglTexture=j[q].texture}return P}function kt(R,b,P){return Math.floor(Math.floor(R/P)/b)}function It(R,b,P,Y){let q=R.updateRanges;if(q.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,b.width,b.height,P,Y,b.data);else{q.sort((et,ft)=>et.start-ft.start);let Tt=0;for(let et=1;et<q.length;et++){let ft=q[Tt],Dt=q[et],bt=ft.start+ft.count,ct=kt(Dt.start,b.width,4),Ht=kt(ft.start,b.width,4);Dt.start<=bt+1&&ct===Ht&&kt(Dt.start+Dt.count-1,b.width,4)===ct?ft.count=Math.max(ft.count,Dt.start+Dt.count-ft.start):(++Tt,q[Tt]=Dt)}q.length=Tt+1;let st=e.getParameter(e.UNPACK_ROW_LENGTH),xt=e.getParameter(e.UNPACK_SKIP_PIXELS),Mt=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,b.width);for(let et=0,ft=q.length;et<ft;et++){let Dt=q[et],bt=Math.floor(Dt.start/4),ct=Math.ceil(Dt.count/4),Ht=bt%b.width,L=Math.floor(bt/b.width),nt=ct,at=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Ht),e.pixelStorei(e.UNPACK_SKIP_ROWS,L),n.texSubImage2D(e.TEXTURE_2D,0,Ht,L,nt,at,P,Y,b.data)}R.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,st),e.pixelStorei(e.UNPACK_SKIP_PIXELS,xt),e.pixelStorei(e.UNPACK_SKIP_ROWS,Mt)}}function X(R,b,P){let Y=e.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Y=e.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Y=e.TEXTURE_3D);let j=Pt(R,b),q=b.source;n.bindTexture(Y,R.__webglTexture,e.TEXTURE0+P);let Tt=i.get(q);if(q.version!==Tt.__version||j===!0){n.activeTexture(e.TEXTURE0+P);let st=$t.getPrimaries($t.workingColorSpace),xt=b.colorSpace===Zs?null:$t.getPrimaries(b.colorSpace),Mt=b.colorSpace===Zs||st===xt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let et=g(b.image,!1,s.maxTextureSize);et=de(b,et);let ft=r.convert(b.format,b.colorSpace),Dt=r.convert(b.type),bt=y(b.internalFormat,ft,Dt,b.colorSpace,b.isVideoTexture);rt(Y,b);let ct,Ht=b.mipmaps,L=b.isVideoTexture!==!0,nt=Tt.__version===void 0||j===!0,at=q.dataReady,mt=T(b,et);if(b.isDepthTexture)bt=x(b.format===xl,b.type),nt&&(L?n.texStorage2D(e.TEXTURE_2D,1,bt,et.width,et.height):n.texImage2D(e.TEXTURE_2D,0,bt,et.width,et.height,0,ft,Dt,null));else if(b.isDataTexture)if(Ht.length>0){L&&nt&&n.texStorage2D(e.TEXTURE_2D,mt,bt,Ht[0].width,Ht[0].height);for(let $=0,Q=Ht.length;$<Q;$++)ct=Ht[$],L?at&&n.texSubImage2D(e.TEXTURE_2D,$,0,0,ct.width,ct.height,ft,Dt,ct.data):n.texImage2D(e.TEXTURE_2D,$,bt,ct.width,ct.height,0,ft,Dt,ct.data);b.generateMipmaps=!1}else L?(nt&&n.texStorage2D(e.TEXTURE_2D,mt,bt,et.width,et.height),at&&It(b,et,ft,Dt)):n.texImage2D(e.TEXTURE_2D,0,bt,et.width,et.height,0,ft,Dt,et.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){L&&nt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,mt,bt,Ht[0].width,Ht[0].height,et.depth);for(let $=0,Q=Ht.length;$<Q;$++)if(ct=Ht[$],b.format!==Ni)if(ft!==null)if(L){if(at)if(b.layerUpdates.size>0){let yt=I_(ct.width,ct.height,b.format,b.type);for(let Bt of b.layerUpdates){let ve=ct.data.subarray(Bt*yt/ct.data.BYTES_PER_ELEMENT,(Bt+1)*yt/ct.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,Bt,ct.width,ct.height,1,ft,ve)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,0,ct.width,ct.height,et.depth,ft,ct.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,$,bt,ct.width,ct.height,et.depth,0,ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?at&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,0,ct.width,ct.height,et.depth,ft,Dt,ct.data):n.texImage3D(e.TEXTURE_2D_ARRAY,$,bt,ct.width,ct.height,et.depth,0,ft,Dt,ct.data)}else{L&&nt&&n.texStorage2D(e.TEXTURE_2D,mt,bt,Ht[0].width,Ht[0].height);for(let $=0,Q=Ht.length;$<Q;$++)ct=Ht[$],b.format!==Ni?ft!==null?L?at&&n.compressedTexSubImage2D(e.TEXTURE_2D,$,0,0,ct.width,ct.height,ft,ct.data):n.compressedTexImage2D(e.TEXTURE_2D,$,bt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?at&&n.texSubImage2D(e.TEXTURE_2D,$,0,0,ct.width,ct.height,ft,Dt,ct.data):n.texImage2D(e.TEXTURE_2D,$,bt,ct.width,ct.height,0,ft,Dt,ct.data)}else if(b.isDataArrayTexture)if(L){if(nt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,mt,bt,et.width,et.height,et.depth),at)if(b.layerUpdates.size>0){let $=I_(et.width,et.height,b.format,b.type);for(let Q of b.layerUpdates){let yt=et.data.subarray(Q*$/et.data.BYTES_PER_ELEMENT,(Q+1)*$/et.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Q,et.width,et.height,1,ft,Dt,yt)}b.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,ft,Dt,et.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,bt,et.width,et.height,et.depth,0,ft,Dt,et.data);else if(b.isData3DTexture)L?(nt&&n.texStorage3D(e.TEXTURE_3D,mt,bt,et.width,et.height,et.depth),at&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,ft,Dt,et.data)):n.texImage3D(e.TEXTURE_3D,0,bt,et.width,et.height,et.depth,0,ft,Dt,et.data);else if(b.isFramebufferTexture){if(nt)if(L)n.texStorage2D(e.TEXTURE_2D,mt,bt,et.width,et.height);else{let $=et.width,Q=et.height;for(let yt=0;yt<mt;yt++)n.texImage2D(e.TEXTURE_2D,yt,bt,$,Q,0,ft,Dt,null),$>>=1,Q>>=1}}else if(Ht.length>0){if(L&&nt){let $=Ae(Ht[0]);n.texStorage2D(e.TEXTURE_2D,mt,bt,$.width,$.height)}for(let $=0,Q=Ht.length;$<Q;$++)ct=Ht[$],L?at&&n.texSubImage2D(e.TEXTURE_2D,$,0,0,ft,Dt,ct):n.texImage2D(e.TEXTURE_2D,$,bt,ft,Dt,ct);b.generateMipmaps=!1}else if(L){if(nt){let $=Ae(et);n.texStorage2D(e.TEXTURE_2D,mt,bt,$.width,$.height)}at&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ft,Dt,et)}else n.texImage2D(e.TEXTURE_2D,0,bt,ft,Dt,et);m(b)&&d(Y),Tt.__version=q.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function J(R,b,P){if(b.image.length!==6)return;let Y=Pt(R,b),j=b.source;n.bindTexture(e.TEXTURE_CUBE_MAP,R.__webglTexture,e.TEXTURE0+P);let q=i.get(j);if(j.version!==q.__version||Y===!0){n.activeTexture(e.TEXTURE0+P);let Tt=$t.getPrimaries($t.workingColorSpace),st=b.colorSpace===Zs?null:$t.getPrimaries(b.colorSpace),xt=b.colorSpace===Zs||Tt===st?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let Mt=b.isCompressedTexture||b.image[0].isCompressedTexture,et=b.image[0]&&b.image[0].isDataTexture,ft=[];for(let Q=0;Q<6;Q++)!Mt&&!et?ft[Q]=g(b.image[Q],!0,s.maxCubemapSize):ft[Q]=et?b.image[Q].image:b.image[Q],ft[Q]=de(b,ft[Q]);let Dt=ft[0],bt=r.convert(b.format,b.colorSpace),ct=r.convert(b.type),Ht=y(b.internalFormat,bt,ct,b.colorSpace),L=b.isVideoTexture!==!0,nt=q.__version===void 0||Y===!0,at=j.dataReady,mt=T(b,Dt);rt(e.TEXTURE_CUBE_MAP,b);let $;if(Mt){L&&nt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,mt,Ht,Dt.width,Dt.height);for(let Q=0;Q<6;Q++){$=ft[Q].mipmaps;for(let yt=0;yt<$.length;yt++){let Bt=$[yt];b.format!==Ni?bt!==null?L?at&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,yt,0,0,Bt.width,Bt.height,bt,Bt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,yt,Ht,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,yt,0,0,Bt.width,Bt.height,bt,ct,Bt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,yt,Ht,Bt.width,Bt.height,0,bt,ct,Bt.data)}}}else{if($=b.mipmaps,L&&nt){$.length>0&&mt++;let Q=Ae(ft[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,mt,Ht,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(et){L?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ft[Q].width,ft[Q].height,bt,ct,ft[Q].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ht,ft[Q].width,ft[Q].height,0,bt,ct,ft[Q].data);for(let yt=0;yt<$.length;yt++){let ve=$[yt].image[Q].image;L?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,yt+1,0,0,ve.width,ve.height,bt,ct,ve.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,yt+1,Ht,ve.width,ve.height,0,bt,ct,ve.data)}}else{L?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,bt,ct,ft[Q]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ht,bt,ct,ft[Q]);for(let yt=0;yt<$.length;yt++){let Bt=$[yt];L?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,yt+1,0,0,bt,ct,Bt.image[Q]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,yt+1,Ht,bt,ct,Bt.image[Q])}}}m(b)&&d(e.TEXTURE_CUBE_MAP),q.__version=j.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function dt(R,b,P,Y,j,q){let Tt=r.convert(P.format,P.colorSpace),st=r.convert(P.type),xt=y(P.internalFormat,Tt,st,P.colorSpace),Mt=i.get(b),et=i.get(P);if(et.__renderTarget=b,!Mt.__hasExternalTextures){let ft=Math.max(1,b.width>>q),Dt=Math.max(1,b.height>>q);j===e.TEXTURE_3D||j===e.TEXTURE_2D_ARRAY?n.texImage3D(j,q,xt,ft,Dt,b.depth,0,Tt,st,null):n.texImage2D(j,q,xt,ft,Dt,0,Tt,st,null)}n.bindFramebuffer(e.FRAMEBUFFER,R),ht(b)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Y,j,et.__webglTexture,0,te(b)):(j===e.TEXTURE_2D||j>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,Y,j,et.__webglTexture,q),n.bindFramebuffer(e.FRAMEBUFFER,null)}function At(R,b,P){if(e.bindRenderbuffer(e.RENDERBUFFER,R),b.depthBuffer){let Y=b.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,q=x(b.stencilBuffer,j),Tt=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,st=te(b);ht(b)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,st,q,b.width,b.height):P?e.renderbufferStorageMultisample(e.RENDERBUFFER,st,q,b.width,b.height):e.renderbufferStorage(e.RENDERBUFFER,q,b.width,b.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Tt,e.RENDERBUFFER,R)}else{let Y=b.textures;for(let j=0;j<Y.length;j++){let q=Y[j],Tt=r.convert(q.format,q.colorSpace),st=r.convert(q.type),xt=y(q.internalFormat,Tt,st,q.colorSpace),Mt=te(b);P&&ht(b)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Mt,xt,b.width,b.height):ht(b)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Mt,xt,b.width,b.height):e.renderbufferStorage(e.RENDERBUFFER,xt,b.width,b.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function St(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=i.get(b.depthTexture);Y.__renderTarget=b,(!Y.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),W(b.depthTexture,0);let j=Y.__webglTexture,q=te(b);if(b.depthTexture.format===ul)ht(b)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,j,0,q):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,j,0);else if(b.depthTexture.format===xl)ht(b)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,j,0,q):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function qt(R){let b=i.get(R),P=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let Y=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Y){let j=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),b.__depthDisposeCallback=j}b.__boundDepthTexture=Y}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");let Y=R.texture.mipmaps;Y&&Y.length>0?St(b.__webglFramebuffer[0],R):St(b.__webglFramebuffer,R)}else if(P){b.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(e.FRAMEBUFFER,b.__webglFramebuffer[Y]),b.__webglDepthbuffer[Y]===void 0)b.__webglDepthbuffer[Y]=e.createRenderbuffer(),At(b.__webglDepthbuffer[Y],R,!1);else{let j=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,q=b.__webglDepthbuffer[Y];e.bindRenderbuffer(e.RENDERBUFFER,q),e.framebufferRenderbuffer(e.FRAMEBUFFER,j,e.RENDERBUFFER,q)}}else{let Y=R.texture.mipmaps;if(Y&&Y.length>0?n.bindFramebuffer(e.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=e.createRenderbuffer(),At(b.__webglDepthbuffer,R,!1);else{let j=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,q=b.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,q),e.framebufferRenderbuffer(e.FRAMEBUFFER,j,e.RENDERBUFFER,q)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Je(R,b,P){let Y=i.get(R);b!==void 0&&dt(Y.__webglFramebuffer,R,R.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),P!==void 0&&qt(R)}function D(R){let b=R.texture,P=i.get(R),Y=i.get(b);R.addEventListener("dispose",E);let j=R.textures,q=R.isWebGLCubeRenderTarget===!0,Tt=j.length>1;if(Tt||(Y.__webglTexture===void 0&&(Y.__webglTexture=e.createTexture()),Y.__version=b.version,a.memory.textures++),q){P.__webglFramebuffer=[];for(let st=0;st<6;st++)if(b.mipmaps&&b.mipmaps.length>0){P.__webglFramebuffer[st]=[];for(let xt=0;xt<b.mipmaps.length;xt++)P.__webglFramebuffer[st][xt]=e.createFramebuffer()}else P.__webglFramebuffer[st]=e.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){P.__webglFramebuffer=[];for(let st=0;st<b.mipmaps.length;st++)P.__webglFramebuffer[st]=e.createFramebuffer()}else P.__webglFramebuffer=e.createFramebuffer();if(Tt)for(let st=0,xt=j.length;st<xt;st++){let Mt=i.get(j[st]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=e.createTexture(),a.memory.textures++)}if(R.samples>0&&ht(R)===!1){P.__webglMultisampledFramebuffer=e.createFramebuffer(),P.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let st=0;st<j.length;st++){let xt=j[st];P.__webglColorRenderbuffer[st]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,P.__webglColorRenderbuffer[st]);let Mt=r.convert(xt.format,xt.colorSpace),et=r.convert(xt.type),ft=y(xt.internalFormat,Mt,et,xt.colorSpace,R.isXRRenderTarget===!0),Dt=te(R);e.renderbufferStorageMultisample(e.RENDERBUFFER,Dt,ft,R.width,R.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+st,e.RENDERBUFFER,P.__webglColorRenderbuffer[st])}e.bindRenderbuffer(e.RENDERBUFFER,null),R.depthBuffer&&(P.__webglDepthRenderbuffer=e.createRenderbuffer(),At(P.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(q){n.bindTexture(e.TEXTURE_CUBE_MAP,Y.__webglTexture),rt(e.TEXTURE_CUBE_MAP,b);for(let st=0;st<6;st++)if(b.mipmaps&&b.mipmaps.length>0)for(let xt=0;xt<b.mipmaps.length;xt++)dt(P.__webglFramebuffer[st][xt],R,b,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+st,xt);else dt(P.__webglFramebuffer[st],R,b,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);m(b)&&d(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Tt){for(let st=0,xt=j.length;st<xt;st++){let Mt=j[st],et=i.get(Mt),ft=e.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ft=R.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ft,et.__webglTexture),rt(ft,Mt),dt(P.__webglFramebuffer,R,Mt,e.COLOR_ATTACHMENT0+st,ft,0),m(Mt)&&d(ft)}n.unbindTexture()}else{let st=e.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(st=R.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(st,Y.__webglTexture),rt(st,b),b.mipmaps&&b.mipmaps.length>0)for(let xt=0;xt<b.mipmaps.length;xt++)dt(P.__webglFramebuffer[xt],R,b,e.COLOR_ATTACHMENT0,st,xt);else dt(P.__webglFramebuffer,R,b,e.COLOR_ATTACHMENT0,st,0);m(b)&&d(st),n.unbindTexture()}R.depthBuffer&&qt(R)}function fe(R){let b=R.textures;for(let P=0,Y=b.length;P<Y;P++){let j=b[P];if(m(j)){let q=v(R),Tt=i.get(j).__webglTexture;n.bindTexture(q,Tt),d(q),n.unbindTexture()}}}let Nt=[],Ct=[];function _t(R){if(R.samples>0){if(ht(R)===!1){let b=R.textures,P=R.width,Y=R.height,j=e.COLOR_BUFFER_BIT,q=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Tt=i.get(R),st=b.length>1;if(st)for(let Mt=0;Mt<b.length;Mt++)n.bindFramebuffer(e.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Mt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,Tt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Mt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer);let xt=R.texture.mipmaps;xt&&xt.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Mt=0;Mt<b.length;Mt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(j|=e.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(j|=e.STENCIL_BUFFER_BIT)),st){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Tt.__webglColorRenderbuffer[Mt]);let et=i.get(b[Mt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,et,0)}e.blitFramebuffer(0,0,P,Y,0,0,P,Y,j,e.NEAREST),l===!0&&(Nt.length=0,Ct.length=0,Nt.push(e.COLOR_ATTACHMENT0+Mt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Nt.push(q),Ct.push(q),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ct)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Nt))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),st)for(let Mt=0;Mt<b.length;Mt++){n.bindFramebuffer(e.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Mt,e.RENDERBUFFER,Tt.__webglColorRenderbuffer[Mt]);let et=i.get(b[Mt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,Tt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Mt,e.TEXTURE_2D,et,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let b=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[b])}}}function te(R){return Math.min(s.maxSamples,R.samples)}function ht(R){let b=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Lt(R){let b=a.render.frame;u.get(R)!==b&&(u.set(R,b),R.update())}function de(R,b){let P=R.colorSpace,Y=R.format,j=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||P!==Pa&&P!==Zs&&($t.getTransfer(P)===le?(Y!==Ni||j!==ls)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),b}function Ae(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=I,this.setTexture2D=W,this.setTexture2DArray=k,this.setTexture3D=K,this.setTextureCube=F,this.rebindTextures=Je,this.setupRenderTarget=D,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=ht}function VL(e,t){function n(i,s=Zs){let r,a=$t.getTransfer(s);if(i===ls)return e.UNSIGNED_BYTE;if(i===_d)return e.UNSIGNED_SHORT_4_4_4_4;if(i===vd)return e.UNSIGNED_SHORT_5_5_5_1;if(i===b_)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===T_)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===S_)return e.BYTE;if(i===M_)return e.SHORT;if(i===_l)return e.UNSIGNED_SHORT;if(i===gd)return e.INT;if(i===qr)return e.UNSIGNED_INT;if(i===cs)return e.FLOAT;if(i===vl)return e.HALF_FLOAT;if(i===E_)return e.ALPHA;if(i===A_)return e.RGB;if(i===Ni)return e.RGBA;if(i===ul)return e.DEPTH_COMPONENT;if(i===xl)return e.DEPTH_STENCIL;if(i===w_)return e.RED;if(i===yd)return e.RED_INTEGER;if(i===C_)return e.RG;if(i===xd)return e.RG_INTEGER;if(i===Sd)return e.RGBA_INTEGER;if(i===du||i===pu||i===mu||i===gu)if(a===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===du)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===mu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===gu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===du)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pu)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===mu)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===gu)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Md||i===bd||i===Td||i===Ed)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Md)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===bd)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Td)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ed)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ad||i===wd||i===Cd)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ad||i===wd)return a===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Cd)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Rd||i===Dd||i===Ud||i===Ld||i===Od||i===Nd||i===Id||i===Pd||i===Bd||i===zd||i===Fd||i===Vd||i===Hd||i===Gd)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Rd)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Dd)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ud)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ld)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Od)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Nd)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Id)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pd)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bd)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zd)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fd)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vd)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Hd)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Gd)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===kd||i===Xd||i===Wd)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===kd)return a===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xd)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wd)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===qd||i===Yd||i===Zd||i===Jd)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===qd)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Yd)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zd)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Jd)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===yl?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var HL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GL=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Z_=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new lu(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new fi({vertexShader:HL,fragmentShader:GL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Xn(new za(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},J_=class extends Xs{constructor(t,n){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,_=null,g=typeof XRWebGLBinding<"u",m=new Z_,d={},v=n.getContextAttributes(),y=null,x=null,T=[],w=[],E=new Jt,C=null,S=new kn;S.viewport=new Ve;let M=new kn;M.viewport=new Ve;let U=[S,M],I=new rd,B=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let J=T[X];return J===void 0&&(J=new ml,T[X]=J),J.getTargetRaySpace()},this.getControllerGrip=function(X){let J=T[X];return J===void 0&&(J=new ml,T[X]=J),J.getGripSpace()},this.getHand=function(X){let J=T[X];return J===void 0&&(J=new ml,T[X]=J),J.getHandSpace()};function W(X){let J=w.indexOf(X.inputSource);if(J===-1)return;let dt=T[J];dt!==void 0&&(dt.update(X.inputSource,X.frame,c||a),dt.dispatchEvent({type:X.type,data:X.inputSource}))}function k(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",K);for(let X=0;X<T.length;X++){let J=w[X];J!==null&&(w[X]=null,T[X].disconnect(J))}B=null,H=null,m.reset();for(let X in d)delete d[X];t.setRenderTarget(y),p=null,h=null,f=null,s=null,x=null,It.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&g&&(f=new XRWebGLBinding(s,n)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",k),s.addEventListener("inputsourceschange",K),v.xrCompatible!==!0&&await n.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(E),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,At=null,St=null;v.depth&&(St=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,dt=v.stencil?xl:ul,At=v.stencil?yl:qr);let qt={colorFormat:n.RGBA8,depthFormat:St,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(qt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),x=new ss(h.textureWidth,h.textureHeight,{format:Ni,type:ls,depthTexture:new ou(h.textureWidth,h.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let dt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,n,dt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new ss(p.framebufferWidth,p.framebufferHeight,{format:Ni,type:ls,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),It.setContext(s),It.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K(X){for(let J=0;J<X.removed.length;J++){let dt=X.removed[J],At=w.indexOf(dt);At>=0&&(w[At]=null,T[At].disconnect(dt))}for(let J=0;J<X.added.length;J++){let dt=X.added[J],At=w.indexOf(dt);if(At===-1){for(let qt=0;qt<T.length;qt++)if(qt>=w.length){w.push(dt),At=qt;break}else if(w[qt]===null){w[qt]=dt,At=qt;break}if(At===-1)break}let St=T[At];St&&St.connect(dt)}}let F=new z,it=new z;function lt(X,J,dt){F.setFromMatrixPosition(J.matrixWorld),it.setFromMatrixPosition(dt.matrixWorld);let At=F.distanceTo(it),St=J.projectionMatrix.elements,qt=dt.projectionMatrix.elements,Je=St[14]/(St[10]-1),D=St[14]/(St[10]+1),fe=(St[9]+1)/St[5],Nt=(St[9]-1)/St[5],Ct=(St[8]-1)/St[0],_t=(qt[8]+1)/qt[0],te=Je*Ct,ht=Je*_t,Lt=At/(-Ct+_t),de=Lt*-Ct;if(J.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(de),X.translateZ(Lt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),St[10]===-1)X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let Ae=Je+Lt,R=D+Lt,b=te-de,P=ht+(At-de),Y=fe*D/R*Ae,j=Nt*D/R*Ae;X.projectionMatrix.makePerspective(b,P,Y,j,Ae,R),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function gt(X,J){J===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(J.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let J=X.near,dt=X.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(dt=m.depthFar)),I.near=M.near=S.near=J,I.far=M.far=S.far=dt,(B!==I.near||H!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),B=I.near,H=I.far),I.layers.mask=X.layers.mask|6,S.layers.mask=I.layers.mask&3,M.layers.mask=I.layers.mask&5;let At=X.parent,St=I.cameras;gt(I,At);for(let qt=0;qt<St.length;qt++)gt(St[qt],At);St.length===2?lt(I,S,M):I.projectionMatrix.copy(S.projectionMatrix),rt(X,I,At)};function rt(X,J,dt){dt===null?X.matrix.copy(J.matrixWorld):(X.matrix.copy(dt.matrixWorld),X.matrix.invert(),X.matrix.multiply(J.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Hf*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(X){return d[X]};let Pt=null;function kt(X,J){if(u=J.getViewerPose(c||a),_=J,u!==null){let dt=u.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let At=!1;dt.length!==I.cameras.length&&(I.cameras.length=0,At=!0);for(let D=0;D<dt.length;D++){let fe=dt[D],Nt=null;if(p!==null)Nt=p.getViewport(fe);else{let _t=f.getViewSubImage(h,fe);Nt=_t.viewport,D===0&&(t.setRenderTargetTextures(x,_t.colorTexture,_t.depthStencilTexture),t.setRenderTarget(x))}let Ct=U[D];Ct===void 0&&(Ct=new kn,Ct.layers.enable(D),Ct.viewport=new Ve,U[D]=Ct),Ct.matrix.fromArray(fe.transform.matrix),Ct.matrix.decompose(Ct.position,Ct.quaternion,Ct.scale),Ct.projectionMatrix.fromArray(fe.projectionMatrix),Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert(),Ct.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),D===0&&(I.matrix.copy(Ct.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),At===!0&&I.cameras.push(Ct)}let St=s.enabledFeatures;if(St&&St.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){f=i.getBinding();let D=f.getDepthInformation(dt[0]);D&&D.isValid&&D.texture&&m.init(D,s.renderState)}if(St&&St.includes("camera-access")&&g){t.state.unbindTexture(),f=i.getBinding();for(let D=0;D<dt.length;D++){let fe=dt[D].camera;if(fe){let Nt=d[fe];Nt||(Nt=new lu,d[fe]=Nt);let Ct=f.getCameraImage(fe);Nt.sourceTexture=Ct}}}}for(let dt=0;dt<T.length;dt++){let At=w[dt],St=T[dt];At!==null&&St!==void 0&&St.update(At,J,c||a)}Pt&&Pt(X,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),_=null}let It=new PT;It.setAnimationLoop(kt),this.setAnimationLoop=function(X){Pt=X},this.dispose=function(){}}},Xa=new rs,kL=new $e;function XL(e,t){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,L_(e)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,v,y,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),g(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,v,y):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===wn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===wn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let v=t.get(d),y=v.envMap,x=v.envMapRotation;y&&(m.envMap.value=y,Xa.copy(x),Xa.x*=-1,Xa.y*=-1,Xa.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Xa.y*=-1,Xa.z*=-1),m.envMapRotation.value.setFromMatrix4(kL.makeRotationFromEuler(Xa)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=y*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===wn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){let v=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function WL(e,t,n,i){let s={},r={},a=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){let x=y.program;i.uniformBlockBinding(v,x)}function c(v,y){let x=s[v.id];x===void 0&&(_(v),x=u(v),s[v.id]=x,v.addEventListener("dispose",m));let T=y.program;i.updateUBOMapping(v,T);let w=t.render.frame;r[v.id]!==w&&(h(v),r[v.id]=w)}function u(v){let y=f();v.__bindingPointIndex=y;let x=e.createBuffer(),T=v.__size,w=v.usage;return e.bindBuffer(e.UNIFORM_BUFFER,x),e.bufferData(e.UNIFORM_BUFFER,T,w),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,y,x),x}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let y=s[v.id],x=v.uniforms,T=v.__cache;e.bindBuffer(e.UNIFORM_BUFFER,y);for(let w=0,E=x.length;w<E;w++){let C=Array.isArray(x[w])?x[w]:[x[w]];for(let S=0,M=C.length;S<M;S++){let U=C[S];if(p(U,w,S,T)===!0){let I=U.__offset,B=Array.isArray(U.value)?U.value:[U.value],H=0;for(let W=0;W<B.length;W++){let k=B[W],K=g(k);typeof k=="number"||typeof k=="boolean"?(U.__data[0]=k,e.bufferSubData(e.UNIFORM_BUFFER,I+H,U.__data)):k.isMatrix3?(U.__data[0]=k.elements[0],U.__data[1]=k.elements[1],U.__data[2]=k.elements[2],U.__data[3]=0,U.__data[4]=k.elements[3],U.__data[5]=k.elements[4],U.__data[6]=k.elements[5],U.__data[7]=0,U.__data[8]=k.elements[6],U.__data[9]=k.elements[7],U.__data[10]=k.elements[8],U.__data[11]=0):(k.toArray(U.__data,H),H+=K.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,I,U.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(v,y,x,T){let w=v.value,E=y+"_"+x;if(T[E]===void 0)return typeof w=="number"||typeof w=="boolean"?T[E]=w:T[E]=w.clone(),!0;{let C=T[E];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return T[E]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function _(v){let y=v.uniforms,x=0,T=16;for(let E=0,C=y.length;E<C;E++){let S=Array.isArray(y[E])?y[E]:[y[E]];for(let M=0,U=S.length;M<U;M++){let I=S[M],B=Array.isArray(I.value)?I.value:[I.value];for(let H=0,W=B.length;H<W;H++){let k=B[H],K=g(k),F=x%T,it=F%K.boundary,lt=F+it;x+=it,lt!==0&&T-lt<K.storage&&(x+=T-lt),I.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=x,x+=K.storage}}}let w=x%T;return w>0&&(x+=T-w),v.__size=x,v.__cache={},this}function g(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){let y=v.target;y.removeEventListener("dispose",m);let x=a.indexOf(y.__bindingPointIndex);a.splice(x,1),e.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function d(){for(let v in s)e.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}var tp=class{constructor(t={}){let{canvas:n=lT(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let _=new Uint32Array(4),g=new Int32Array(4),m=null,d=null,v=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ys,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,T=!1;this._outputColorSpace=ci;let w=0,E=0,C=null,S=-1,M=null,U=new Ve,I=new Ve,B=null,H=new se(0),W=0,k=n.width,K=n.height,F=1,it=null,lt=null,gt=new Ve(0,0,k,K),rt=new Ve(0,0,k,K),Pt=!1,kt=new au,It=!1,X=!1,J=new $e,dt=new z,At=new Ve,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qt=!1;function Je(){return C===null?F:1}let D=i;function fe(A,O){return n.getContext(A,O)}try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"180"}`),n.addEventListener("webglcontextlost",at,!1),n.addEventListener("webglcontextrestored",mt,!1),n.addEventListener("webglcontextcreationerror",$,!1),D===null){let O="webgl2";if(D=fe(O,A),D===null)throw fe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Nt,Ct,_t,te,ht,Lt,de,Ae,R,b,P,Y,j,q,Tt,st,xt,Mt,et,ft,Dt,bt,ct,Ht;function L(){Nt=new cU(D),Nt.init(),bt=new VL(D,Nt),Ct=new nU(D,Nt,t,bt),_t=new zL(D,Nt),Ct.reversedDepthBuffer&&h&&_t.buffers.depth.setReversed(!0),te=new fU(D),ht=new EL,Lt=new FL(D,Nt,_t,ht,Ct,bt,te),de=new sU(x),Ae=new lU(x),R=new v2(D),ct=new tU(D,R),b=new uU(D,R,te,ct),P=new pU(D,b,R,te),et=new dU(D,Ct,Lt),st=new iU(ht),Y=new TL(x,de,Ae,Nt,Ct,ct,st),j=new XL(x,ht),q=new wL,Tt=new OL(Nt),Mt=new $D(x,de,Ae,_t,P,p,l),xt=new PL(x,P,Ct),Ht=new WL(D,te,Ct,_t),ft=new eU(D,Nt,te),Dt=new hU(D,Nt,te),te.programs=Y.programs,x.capabilities=Ct,x.extensions=Nt,x.properties=ht,x.renderLists=q,x.shadowMap=xt,x.state=_t,x.info=te}L();let nt=new J_(x,D);this.xr=nt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let A=Nt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Nt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(A){A!==void 0&&(F=A,this.setSize(k,K,!1))},this.getSize=function(A){return A.set(k,K)},this.setSize=function(A,O,V=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=A,K=O,n.width=Math.floor(A*F),n.height=Math.floor(O*F),V===!0&&(n.style.width=A+"px",n.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(k*F,K*F).floor()},this.setDrawingBufferSize=function(A,O,V){k=A,K=O,F=V,n.width=Math.floor(A*V),n.height=Math.floor(O*V),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(U)},this.getViewport=function(A){return A.copy(gt)},this.setViewport=function(A,O,V,G){A.isVector4?gt.set(A.x,A.y,A.z,A.w):gt.set(A,O,V,G),_t.viewport(U.copy(gt).multiplyScalar(F).round())},this.getScissor=function(A){return A.copy(rt)},this.setScissor=function(A,O,V,G){A.isVector4?rt.set(A.x,A.y,A.z,A.w):rt.set(A,O,V,G),_t.scissor(I.copy(rt).multiplyScalar(F).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(A){_t.setScissorTest(Pt=A)},this.setOpaqueSort=function(A){it=A},this.setTransparentSort=function(A){lt=A},this.getClearColor=function(A){return A.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor(...arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha(...arguments)},this.clear=function(A=!0,O=!0,V=!0){let G=0;if(A){let N=!1;if(C!==null){let tt=C.texture.format;N=tt===Sd||tt===xd||tt===yd}if(N){let tt=C.texture.type,ut=tt===ls||tt===qr||tt===_l||tt===yl||tt===_d||tt===vd,vt=Mt.getClearColor(),pt=Mt.getClearAlpha(),Rt=vt.r,Ot=vt.g,Et=vt.b;ut?(_[0]=Rt,_[1]=Ot,_[2]=Et,_[3]=pt,D.clearBufferuiv(D.COLOR,0,_)):(g[0]=Rt,g[1]=Ot,g[2]=Et,g[3]=pt,D.clearBufferiv(D.COLOR,0,g))}else G|=D.COLOR_BUFFER_BIT}O&&(G|=D.DEPTH_BUFFER_BIT),V&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",at,!1),n.removeEventListener("webglcontextrestored",mt,!1),n.removeEventListener("webglcontextcreationerror",$,!1),Mt.dispose(),q.dispose(),Tt.dispose(),ht.dispose(),de.dispose(),Ae.dispose(),P.dispose(),ct.dispose(),Ht.dispose(),Y.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",ki),nt.removeEventListener("sessionend",ev),Jr.stop()};function at(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let A=te.autoReset,O=xt.enabled,V=xt.autoUpdate,G=xt.needsUpdate,N=xt.type;L(),te.autoReset=A,xt.enabled=O,xt.autoUpdate=V,xt.needsUpdate=G,xt.type=N}function $(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Q(A){let O=A.target;O.removeEventListener("dispose",Q),yt(O)}function yt(A){Bt(A),ht.remove(A)}function Bt(A){let O=ht.get(A).programs;O!==void 0&&(O.forEach(function(V){Y.releaseProgram(V)}),A.isShaderMaterial&&Y.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,V,G,N,tt){O===null&&(O=St);let ut=N.isMesh&&N.matrixWorld.determinant()<0,vt=jT(A,O,V,G,N);_t.setMaterial(G,ut);let pt=V.index,Rt=1;if(G.wireframe===!0){if(pt=b.getWireframeAttribute(V),pt===void 0)return;Rt=2}let Ot=V.drawRange,Et=V.attributes.position,Yt=Ot.start*Rt,ce=(Ot.start+Ot.count)*Rt;tt!==null&&(Yt=Math.max(Yt,tt.start*Rt),ce=Math.min(ce,(tt.start+tt.count)*Rt)),pt!==null?(Yt=Math.max(Yt,0),ce=Math.min(ce,pt.count)):Et!=null&&(Yt=Math.max(Yt,0),ce=Math.min(ce,Et.count));let Ie=ce-Yt;if(Ie<0||Ie===1/0)return;ct.setup(N,G,vt,V,pt);let xe,pe=ft;if(pt!==null&&(xe=R.get(pt),pe=Dt,pe.setIndex(xe)),N.isMesh)G.wireframe===!0?(_t.setLineWidth(G.wireframeLinewidth*Je()),pe.setMode(D.LINES)):pe.setMode(D.TRIANGLES);else if(N.isLine){let wt=G.linewidth;wt===void 0&&(wt=1),_t.setLineWidth(wt*Je()),N.isLineSegments?pe.setMode(D.LINES):N.isLineLoop?pe.setMode(D.LINE_LOOP):pe.setMode(D.LINE_STRIP)}else N.isPoints?pe.setMode(D.POINTS):N.isSprite&&pe.setMode(D.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)hl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pe.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Nt.get("WEBGL_multi_draw"))pe.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let wt=N._multiDrawStarts,De=N._multiDrawCounts,ee=N._multiDrawCount,Wn=pt?R.get(pt).bytesPerElement:1,Ya=ht.get(G).currentProgram.getUniforms();for(let qn=0;qn<ee;qn++)Ya.setValue(D,"_gl_DrawID",qn),pe.render(wt[qn]/Wn,De[qn])}else if(N.isInstancedMesh)pe.renderInstances(Yt,Ie,N.count);else if(V.isInstancedBufferGeometry){let wt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,De=Math.min(V.instanceCount,wt);pe.renderInstances(Yt,Ie,De)}else pe.render(Yt,Ie)};function ve(A,O,V){A.transparent===!0&&A.side===os&&A.forceSinglePass===!1?(A.side=wn,A.needsUpdate=!0,Mu(A,O,V),A.side=ks,A.needsUpdate=!0,Mu(A,O,V),A.side=os):Mu(A,O,V)}this.compile=function(A,O,V=null){V===null&&(V=A),d=Tt.get(V),d.init(O),y.push(d),V.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),A!==V&&A.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights();let G=new Set;return A.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let tt=N.material;if(tt)if(Array.isArray(tt))for(let ut=0;ut<tt.length;ut++){let vt=tt[ut];ve(vt,V,N),G.add(vt)}else ve(tt,V,N),G.add(tt)}),d=y.pop(),G},this.compileAsync=function(A,O,V=null){let G=this.compile(A,O,V);return new Promise(N=>{function tt(){if(G.forEach(function(ut){ht.get(ut).currentProgram.isReady()&&G.delete(ut)}),G.size===0){N(A);return}setTimeout(tt,10)}Nt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let re=null;function hs(A){re&&re(A)}function ki(){Jr.stop()}function ev(){Jr.start()}let Jr=new PT;Jr.setAnimationLoop(hs),typeof self<"u"&&Jr.setContext(self),this.setAnimationLoop=function(A){re=A,nt.setAnimationLoop(A),A===null?Jr.stop():Jr.start()},nt.addEventListener("sessionstart",ki),nt.addEventListener("sessionend",ev),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(O),O=nt.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,O,C),d=Tt.get(A,y.length),d.init(O),y.push(d),J.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),kt.setFromProjectionMatrix(J,Hi,O.reversedDepth),X=this.localClippingEnabled,It=st.init(this.clippingPlanes,X),m=q.get(A,v.length),m.init(),v.push(m),nt.enabled===!0&&nt.isPresenting===!0){let tt=x.xr.getDepthSensingMesh();tt!==null&&ap(tt,O,-1/0,x.sortObjects)}ap(A,O,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(it,lt),qt=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,qt&&Mt.addToRenderList(m,A),this.info.render.frame++,It===!0&&st.beginShadows();let V=d.state.shadowsArray;xt.render(V,A,O),It===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=m.opaque,N=m.transmissive;if(d.setupLights(),O.isArrayCamera){let tt=O.cameras;if(N.length>0)for(let ut=0,vt=tt.length;ut<vt;ut++){let pt=tt[ut];iv(G,N,A,pt)}qt&&Mt.render(A);for(let ut=0,vt=tt.length;ut<vt;ut++){let pt=tt[ut];nv(m,A,pt,pt.viewport)}}else N.length>0&&iv(G,N,A,O),qt&&Mt.render(A),nv(m,A,O);C!==null&&E===0&&(Lt.updateMultisampleRenderTarget(C),Lt.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(x,A,O),ct.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(d=y[y.length-1],It===!0&&st.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function ap(A,O,V,G){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)V=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)d.pushLight(A),A.castShadow&&d.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||kt.intersectsSprite(A)){G&&At.setFromMatrixPosition(A.matrixWorld).applyMatrix4(J);let ut=P.update(A),vt=A.material;vt.visible&&m.push(A,ut,vt,V,At.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||kt.intersectsObject(A))){let ut=P.update(A),vt=A.material;if(G&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),At.copy(A.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),At.copy(ut.boundingSphere.center)),At.applyMatrix4(A.matrixWorld).applyMatrix4(J)),Array.isArray(vt)){let pt=ut.groups;for(let Rt=0,Ot=pt.length;Rt<Ot;Rt++){let Et=pt[Rt],Yt=vt[Et.materialIndex];Yt&&Yt.visible&&m.push(A,ut,Yt,V,At.z,Et)}}else vt.visible&&m.push(A,ut,vt,V,At.z,null)}}let tt=A.children;for(let ut=0,vt=tt.length;ut<vt;ut++)ap(tt[ut],O,V,G)}function nv(A,O,V,G){let N=A.opaque,tt=A.transmissive,ut=A.transparent;d.setupLightsView(V),It===!0&&st.setGlobalState(x.clippingPlanes,V),G&&_t.viewport(U.copy(G)),N.length>0&&Su(N,O,V),tt.length>0&&Su(tt,O,V),ut.length>0&&Su(ut,O,V),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function iv(A,O,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[G.id]===void 0&&(d.state.transmissionRenderTarget[G.id]=new ss(1,1,{generateMipmaps:!0,type:Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float")?vl:ls,minFilter:Wr,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));let tt=d.state.transmissionRenderTarget[G.id],ut=G.viewport||U;tt.setSize(ut.z*x.transmissionResolutionScale,ut.w*x.transmissionResolutionScale);let vt=x.getRenderTarget(),pt=x.getActiveCubeFace(),Rt=x.getActiveMipmapLevel();x.setRenderTarget(tt),x.getClearColor(H),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),qt&&Mt.render(V);let Ot=x.toneMapping;x.toneMapping=Ys;let Et=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),d.setupLightsView(G),It===!0&&st.setGlobalState(x.clippingPlanes,G),Su(A,V,G),Lt.updateMultisampleRenderTarget(tt),Lt.updateRenderTargetMipmap(tt),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let ce=0,Ie=O.length;ce<Ie;ce++){let xe=O[ce],pe=xe.object,wt=xe.geometry,De=xe.material,ee=xe.group;if(De.side===os&&pe.layers.test(G.layers)){let Wn=De.side;De.side=wn,De.needsUpdate=!0,sv(pe,V,G,wt,De,ee),De.side=Wn,De.needsUpdate=!0,Yt=!0}}Yt===!0&&(Lt.updateMultisampleRenderTarget(tt),Lt.updateRenderTargetMipmap(tt))}x.setRenderTarget(vt,pt,Rt),x.setClearColor(H,W),Et!==void 0&&(G.viewport=Et),x.toneMapping=Ot}function Su(A,O,V){let G=O.isScene===!0?O.overrideMaterial:null;for(let N=0,tt=A.length;N<tt;N++){let ut=A[N],vt=ut.object,pt=ut.geometry,Rt=ut.group,Ot=ut.material;Ot.allowOverride===!0&&G!==null&&(Ot=G),vt.layers.test(V.layers)&&sv(vt,O,V,pt,Ot,Rt)}}function sv(A,O,V,G,N,tt){A.onBeforeRender(x,O,V,G,N,tt),A.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),N.onBeforeRender(x,O,V,G,A,tt),N.transparent===!0&&N.side===os&&N.forceSinglePass===!1?(N.side=wn,N.needsUpdate=!0,x.renderBufferDirect(V,O,G,N,A,tt),N.side=ks,N.needsUpdate=!0,x.renderBufferDirect(V,O,G,N,A,tt),N.side=os):x.renderBufferDirect(V,O,G,N,A,tt),A.onAfterRender(x,O,V,G,N,tt)}function Mu(A,O,V){O.isScene!==!0&&(O=St);let G=ht.get(A),N=d.state.lights,tt=d.state.shadowsArray,ut=N.state.version,vt=Y.getParameters(A,N.state,tt,O,V),pt=Y.getProgramCacheKey(vt),Rt=G.programs;G.environment=A.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(A.isMeshStandardMaterial?Ae:de).get(A.envMap||G.environment),G.envMapRotation=G.environment!==null&&A.envMap===null?O.environmentRotation:A.envMapRotation,Rt===void 0&&(A.addEventListener("dispose",Q),Rt=new Map,G.programs=Rt);let Ot=Rt.get(pt);if(Ot!==void 0){if(G.currentProgram===Ot&&G.lightsStateVersion===ut)return av(A,vt),Ot}else vt.uniforms=Y.getUniforms(A),A.onBeforeCompile(vt,x),Ot=Y.acquireProgram(vt,pt),Rt.set(pt,Ot),G.uniforms=vt.uniforms;let Et=G.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Et.clippingPlanes=st.uniform),av(A,vt),G.needsLights=tE(A),G.lightsStateVersion=ut,G.needsLights&&(Et.ambientLightColor.value=N.state.ambient,Et.lightProbe.value=N.state.probe,Et.directionalLights.value=N.state.directional,Et.directionalLightShadows.value=N.state.directionalShadow,Et.spotLights.value=N.state.spot,Et.spotLightShadows.value=N.state.spotShadow,Et.rectAreaLights.value=N.state.rectArea,Et.ltc_1.value=N.state.rectAreaLTC1,Et.ltc_2.value=N.state.rectAreaLTC2,Et.pointLights.value=N.state.point,Et.pointLightShadows.value=N.state.pointShadow,Et.hemisphereLights.value=N.state.hemi,Et.directionalShadowMap.value=N.state.directionalShadowMap,Et.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Et.spotShadowMap.value=N.state.spotShadowMap,Et.spotLightMatrix.value=N.state.spotLightMatrix,Et.spotLightMap.value=N.state.spotLightMap,Et.pointShadowMap.value=N.state.pointShadowMap,Et.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=Ot,G.uniformsList=null,Ot}function rv(A){if(A.uniformsList===null){let O=A.currentProgram.getUniforms();A.uniformsList=bl.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function av(A,O){let V=ht.get(A);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.batchingColor=O.batchingColor,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.instancingMorph=O.instancingMorph,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function jT(A,O,V,G,N){O.isScene!==!0&&(O=St),Lt.resetTextureUnits();let tt=O.fog,ut=G.isMeshStandardMaterial?O.environment:null,vt=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Pa,pt=(G.isMeshStandardMaterial?Ae:de).get(G.envMap||ut),Rt=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ot=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Et=!!V.morphAttributes.position,Yt=!!V.morphAttributes.normal,ce=!!V.morphAttributes.color,Ie=Ys;G.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ie=x.toneMapping);let xe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,pe=xe!==void 0?xe.length:0,wt=ht.get(G),De=d.state.lights;if(It===!0&&(X===!0||A!==M)){let Sn=A===M&&G.id===S;st.setState(G,A,Sn)}let ee=!1;G.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==De.state.version||wt.outputColorSpace!==vt||N.isBatchedMesh&&wt.batching===!1||!N.isBatchedMesh&&wt.batching===!0||N.isBatchedMesh&&wt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&wt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&wt.instancing===!1||!N.isInstancedMesh&&wt.instancing===!0||N.isSkinnedMesh&&wt.skinning===!1||!N.isSkinnedMesh&&wt.skinning===!0||N.isInstancedMesh&&wt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&wt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&wt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&wt.instancingMorph===!1&&N.morphTexture!==null||wt.envMap!==pt||G.fog===!0&&wt.fog!==tt||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==st.numPlanes||wt.numIntersection!==st.numIntersection)||wt.vertexAlphas!==Rt||wt.vertexTangents!==Ot||wt.morphTargets!==Et||wt.morphNormals!==Yt||wt.morphColors!==ce||wt.toneMapping!==Ie||wt.morphTargetsCount!==pe)&&(ee=!0):(ee=!0,wt.__version=G.version);let Wn=wt.currentProgram;ee===!0&&(Wn=Mu(G,O,N));let Ya=!1,qn=!1,Al=!1,Ue=Wn.getUniforms(),pi=wt.uniforms;if(_t.useProgram(Wn.program)&&(Ya=!0,qn=!0,Al=!0),G.id!==S&&(S=G.id,qn=!0),Ya||M!==A){_t.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ue.setValue(D,"projectionMatrix",A.projectionMatrix),Ue.setValue(D,"viewMatrix",A.matrixWorldInverse);let Rn=Ue.map.cameraPosition;Rn!==void 0&&Rn.setValue(D,dt.setFromMatrixPosition(A.matrixWorld)),Ct.logarithmicDepthBuffer&&Ue.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ue.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,qn=!0,Al=!0)}if(N.isSkinnedMesh){Ue.setOptional(D,N,"bindMatrix"),Ue.setOptional(D,N,"bindMatrixInverse");let Sn=N.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Ue.setValue(D,"boneTexture",Sn.boneTexture,Lt))}N.isBatchedMesh&&(Ue.setOptional(D,N,"batchingTexture"),Ue.setValue(D,"batchingTexture",N._matricesTexture,Lt),Ue.setOptional(D,N,"batchingIdTexture"),Ue.setValue(D,"batchingIdTexture",N._indirectTexture,Lt),Ue.setOptional(D,N,"batchingColorTexture"),N._colorsTexture!==null&&Ue.setValue(D,"batchingColorTexture",N._colorsTexture,Lt));let mi=V.morphAttributes;if((mi.position!==void 0||mi.normal!==void 0||mi.color!==void 0)&&et.update(N,V,Wn),(qn||wt.receiveShadow!==N.receiveShadow)&&(wt.receiveShadow=N.receiveShadow,Ue.setValue(D,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(pi.envMap.value=pt,pi.flipEnvMap.value=pt.isCubeTexture&&pt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&O.environment!==null&&(pi.envMapIntensity.value=O.environmentIntensity),qn&&(Ue.setValue(D,"toneMappingExposure",x.toneMappingExposure),wt.needsLights&&$T(pi,Al),tt&&G.fog===!0&&j.refreshFogUniforms(pi,tt),j.refreshMaterialUniforms(pi,G,F,K,d.state.transmissionRenderTarget[A.id]),bl.upload(D,rv(wt),pi,Lt)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(bl.upload(D,rv(wt),pi,Lt),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ue.setValue(D,"center",N.center),Ue.setValue(D,"modelViewMatrix",N.modelViewMatrix),Ue.setValue(D,"normalMatrix",N.normalMatrix),Ue.setValue(D,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let Sn=G.uniformsGroups;for(let Rn=0,op=Sn.length;Rn<op;Rn++){let Kr=Sn[Rn];Ht.update(Kr,Wn),Ht.bind(Kr,Wn)}}return Wn}function $T(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function tE(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,O,V){let G=ht.get(A);G.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),ht.get(A.texture).__webglTexture=O,ht.get(A.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:V,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,O){let V=ht.get(A);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0};let eE=D.createFramebuffer();this.setRenderTarget=function(A,O=0,V=0){C=A,w=O,E=V;let G=!0,N=null,tt=!1,ut=!1;if(A){let pt=ht.get(A);if(pt.__useDefaultFramebuffer!==void 0)_t.bindFramebuffer(D.FRAMEBUFFER,null),G=!1;else if(pt.__webglFramebuffer===void 0)Lt.setupRenderTarget(A);else if(pt.__hasExternalTextures)Lt.rebindTextures(A,ht.get(A.texture).__webglTexture,ht.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Et=A.depthTexture;if(pt.__boundDepthTexture!==Et){if(Et!==null&&ht.has(Et)&&(A.width!==Et.image.width||A.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Lt.setupDepthRenderbuffer(A)}}let Rt=A.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(ut=!0);let Ot=ht.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ot[O])?N=Ot[O][V]:N=Ot[O],tt=!0):A.samples>0&&Lt.useMultisampledRTT(A)===!1?N=ht.get(A).__webglMultisampledFramebuffer:Array.isArray(Ot)?N=Ot[V]:N=Ot,U.copy(A.viewport),I.copy(A.scissor),B=A.scissorTest}else U.copy(gt).multiplyScalar(F).floor(),I.copy(rt).multiplyScalar(F).floor(),B=Pt;if(V!==0&&(N=eE),_t.bindFramebuffer(D.FRAMEBUFFER,N)&&G&&_t.drawBuffers(A,N),_t.viewport(U),_t.scissor(I),_t.setScissorTest(B),tt){let pt=ht.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,pt.__webglTexture,V)}else if(ut){let pt=O;for(let Rt=0;Rt<A.textures.length;Rt++){let Ot=ht.get(A.textures[Rt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Rt,Ot.__webglTexture,V,pt)}}else if(A!==null&&V!==0){let pt=ht.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,pt.__webglTexture,V)}S=-1},this.readRenderTargetPixels=function(A,O,V,G,N,tt,ut,vt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=ht.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ut!==void 0&&(pt=pt[ut]),pt){_t.bindFramebuffer(D.FRAMEBUFFER,pt);try{let Rt=A.textures[vt],Ot=Rt.format,Et=Rt.type;if(!Ct.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ct.textureTypeReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-G&&V>=0&&V<=A.height-N&&(A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+vt),D.readPixels(O,V,G,N,bt.convert(Ot),bt.convert(Et),tt))}finally{let Rt=C!==null?ht.get(C).__webglFramebuffer:null;_t.bindFramebuffer(D.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(A,O,V,G,N,tt,ut,vt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=ht.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ut!==void 0&&(pt=pt[ut]),pt)if(O>=0&&O<=A.width-G&&V>=0&&V<=A.height-N){_t.bindFramebuffer(D.FRAMEBUFFER,pt);let Rt=A.textures[vt],Ot=Rt.format,Et=Rt.type;if(!Ct.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ct.textureTypeReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Yt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Yt),D.bufferData(D.PIXEL_PACK_BUFFER,tt.byteLength,D.STREAM_READ),A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+vt),D.readPixels(O,V,G,N,bt.convert(Ot),bt.convert(Et),0);let ce=C!==null?ht.get(C).__webglFramebuffer:null;_t.bindFramebuffer(D.FRAMEBUFFER,ce);let Ie=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await cT(D,Ie,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Yt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,tt),D.deleteBuffer(Yt),D.deleteSync(Ie),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,O=null,V=0){let G=Math.pow(2,-V),N=Math.floor(A.image.width*G),tt=Math.floor(A.image.height*G),ut=O!==null?O.x:0,vt=O!==null?O.y:0;Lt.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,ut,vt,N,tt),_t.unbindTexture()};let nE=D.createFramebuffer(),iE=D.createFramebuffer();this.copyTextureToTexture=function(A,O,V=null,G=null,N=0,tt=null){tt===null&&(N!==0?(hl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),tt=N,N=0):tt=0);let ut,vt,pt,Rt,Ot,Et,Yt,ce,Ie,xe=A.isCompressedTexture?A.mipmaps[tt]:A.image;if(V!==null)ut=V.max.x-V.min.x,vt=V.max.y-V.min.y,pt=V.isBox3?V.max.z-V.min.z:1,Rt=V.min.x,Ot=V.min.y,Et=V.isBox3?V.min.z:0;else{let mi=Math.pow(2,-N);ut=Math.floor(xe.width*mi),vt=Math.floor(xe.height*mi),A.isDataArrayTexture?pt=xe.depth:A.isData3DTexture?pt=Math.floor(xe.depth*mi):pt=1,Rt=0,Ot=0,Et=0}G!==null?(Yt=G.x,ce=G.y,Ie=G.z):(Yt=0,ce=0,Ie=0);let pe=bt.convert(O.format),wt=bt.convert(O.type),De;O.isData3DTexture?(Lt.setTexture3D(O,0),De=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Lt.setTexture2DArray(O,0),De=D.TEXTURE_2D_ARRAY):(Lt.setTexture2D(O,0),De=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);let ee=D.getParameter(D.UNPACK_ROW_LENGTH),Wn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ya=D.getParameter(D.UNPACK_SKIP_PIXELS),qn=D.getParameter(D.UNPACK_SKIP_ROWS),Al=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,xe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Rt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ot),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Et);let Ue=A.isDataArrayTexture||A.isData3DTexture,pi=O.isDataArrayTexture||O.isData3DTexture;if(A.isDepthTexture){let mi=ht.get(A),Sn=ht.get(O),Rn=ht.get(mi.__renderTarget),op=ht.get(Sn.__renderTarget);_t.bindFramebuffer(D.READ_FRAMEBUFFER,Rn.__webglFramebuffer),_t.bindFramebuffer(D.DRAW_FRAMEBUFFER,op.__webglFramebuffer);for(let Kr=0;Kr<pt;Kr++)Ue&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ht.get(A).__webglTexture,N,Et+Kr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ht.get(O).__webglTexture,tt,Ie+Kr)),D.blitFramebuffer(Rt,Ot,ut,vt,Yt,ce,ut,vt,D.DEPTH_BUFFER_BIT,D.NEAREST);_t.bindFramebuffer(D.READ_FRAMEBUFFER,null),_t.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(N!==0||A.isRenderTargetTexture||ht.has(A)){let mi=ht.get(A),Sn=ht.get(O);_t.bindFramebuffer(D.READ_FRAMEBUFFER,nE),_t.bindFramebuffer(D.DRAW_FRAMEBUFFER,iE);for(let Rn=0;Rn<pt;Rn++)Ue?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,mi.__webglTexture,N,Et+Rn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,mi.__webglTexture,N),pi?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Sn.__webglTexture,tt,Ie+Rn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Sn.__webglTexture,tt),N!==0?D.blitFramebuffer(Rt,Ot,ut,vt,Yt,ce,ut,vt,D.COLOR_BUFFER_BIT,D.NEAREST):pi?D.copyTexSubImage3D(De,tt,Yt,ce,Ie+Rn,Rt,Ot,ut,vt):D.copyTexSubImage2D(De,tt,Yt,ce,Rt,Ot,ut,vt);_t.bindFramebuffer(D.READ_FRAMEBUFFER,null),_t.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else pi?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(De,tt,Yt,ce,Ie,ut,vt,pt,pe,wt,xe.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(De,tt,Yt,ce,Ie,ut,vt,pt,pe,xe.data):D.texSubImage3D(De,tt,Yt,ce,Ie,ut,vt,pt,pe,wt,xe):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,tt,Yt,ce,ut,vt,pe,wt,xe.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,tt,Yt,ce,xe.width,xe.height,pe,xe.data):D.texSubImage2D(D.TEXTURE_2D,tt,Yt,ce,ut,vt,pe,wt,xe);D.pixelStorei(D.UNPACK_ROW_LENGTH,ee),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Wn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ya),D.pixelStorei(D.UNPACK_SKIP_ROWS,qn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Al),tt===0&&O.generateMipmaps&&D.generateMipmap(De),_t.unbindTexture()},this.initRenderTarget=function(A){ht.get(A).__webglFramebuffer===void 0&&Lt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Lt.setTextureCube(A,0):A.isData3DTexture?Lt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Lt.setTexture2DArray(A,0):Lt.setTexture2D(A,0),_t.unbindTexture()},this.resetState=function(){w=0,E=0,C=null,_t.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=$t._getDrawingBufferColorSpace(t),n.unpackColorSpace=$t._getUnpackColorSpace()}};var XT=Qr(yu()),ZL=`
precision highp float;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,JL=`
precision highp float;

uniform float iTime;
uniform vec3  iResolution;
uniform float animationSpeed;

uniform bool enableTop;
uniform bool enableMiddle;
uniform bool enableBottom;

uniform int topLineCount;
uniform int middleLineCount;
uniform int bottomLineCount;

uniform float topLineDistance;
uniform float middleLineDistance;
uniform float bottomLineDistance;

uniform vec3 topWavePosition;
uniform vec3 middleWavePosition;
uniform vec3 bottomWavePosition;

uniform vec2 iMouse;
uniform bool interactive;
uniform float bendRadius;
uniform float bendStrength;
uniform float bendInfluence;

uniform bool parallax;
uniform float parallaxStrength;
uniform vec2 parallaxOffset;

uniform vec3 lineGradient[8];
uniform int lineGradientCount;
uniform vec3 backgroundColor;
uniform bool lightMode;
uniform int lightRenderMode;

const vec3 BLACK = vec3(0.0);
const vec3 PINK  = vec3(233.0, 71.0, 245.0) / 255.0;
const vec3 BLUE  = vec3(47.0,  75.0, 162.0) / 255.0;

mat2 rotate(float r) {
  return mat2(cos(r), sin(r), -sin(r), cos(r));
}

vec3 background_color(vec2 uv) {
  vec3 col = vec3(0.0);

  float y = sin(uv.x - 0.2) * 0.3 - 0.1;
  float m = uv.y - y;

  col += mix(BLUE, BLACK, smoothstep(0.0, 1.0, abs(m)));
  col += mix(PINK, BLACK, smoothstep(0.0, 1.0, abs(m - 0.8)));
  return col * 0.5;
}

vec3 getLineColor(float t, vec3 baseColor) {
  if (lineGradientCount <= 0) {
    return baseColor;
  }

  vec3 gradientColor;
  
  if (lineGradientCount == 1) {
    gradientColor = lineGradient[0];
  } else {
    float clampedT = clamp(t, 0.0, 0.9999);
    float scaled = clampedT * float(lineGradientCount - 1);
    int idx = int(floor(scaled));
    float f = fract(scaled);
    int idx2 = min(idx + 1, lineGradientCount - 1);

    vec3 c1 = lineGradient[idx];
    vec3 c2 = lineGradient[idx2];
    
    gradientColor = mix(c1, c2, f);
  }
  
  return gradientColor * 0.5;
}

float wave(vec2 uv, float offset, vec2 screenUv, vec2 mouseUv, bool shouldBend, out float signedDistance) {
  float time = iTime * animationSpeed;

  float x_offset   = offset;
  float x_movement = time * 0.1;
  float amp        = sin(offset + time * 0.2) * 0.3;
  float y          = sin(uv.x + x_offset + x_movement) * amp;

  if (shouldBend) {
    vec2 d = screenUv - mouseUv;
    float influence = exp(-dot(d, d) * bendRadius); // radial falloff around cursor
    float bendOffset = (mouseUv.y - screenUv.y) * influence * bendStrength * bendInfluence;
    y += bendOffset;
  }
  
  signedDistance = uv.y - y;
  return 0.0175 / max(abs(signedDistance) + 0.01, 1e-3) + 0.01;
}

void accumulateLightLine(
  float intensity,
  float signedDistance,
  vec3 lineColor,
  float groupOpacity,
  inout vec3 coreInk,
  inout vec3 haloInk
) {
  // A pixel-sized transition keeps the narrow core continuous as it moves between samples.
  float footprint = max(fwidth(signedDistance), 1.0 / iResolution.y);
  float halfWidth = 2.5 / iResolution.y;
  float core = (1.0 - smoothstep(
    max(0.0, halfWidth - footprint * 0.5),
    halfWidth + footprint * 0.5,
    abs(signedDistance)
  )) * groupOpacity;
  vec3 ink = vec3(1.0) - clamp(lineColor * 2.0, 0.0, 1.0);
  // Per-channel max lets the darker line remain visible at crossings without stacking haze.
  coreInk = max(coreInk, ink * core);

  if (lightRenderMode == 2) {
    float halo = smoothstep(0.90, 1.36, intensity) * groupOpacity;
    haloInk = max(haloInk, ink * halo);
  }
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 baseUv = (2.0 * fragCoord - iResolution.xy) / iResolution.y;
  baseUv.y *= -1.0;
  
  if (parallax) {
    baseUv += parallaxOffset;
  }

  vec3 col = vec3(0.0);
  vec3 coreInk = vec3(0.0);
  vec3 haloInk = vec3(0.0);

  vec3 b = lineGradientCount > 0 ? vec3(0.0) : background_color(baseUv);

  vec2 mouseUv = vec2(0.0);
  if (interactive) {
    mouseUv = (2.0 * iMouse - iResolution.xy) / iResolution.y;
    mouseUv.y *= -1.0;
  }
  
  if (enableBottom) {
    for (int i = 0; i < bottomLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(bottomLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);
      
      float angle = bottomWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      float signedDistance;
      float intensity = wave(
        ruv + vec2(bottomLineDistance * fi + bottomWavePosition.x, bottomWavePosition.y),
        1.5 + 0.2 * fi,
        baseUv,
        mouseUv,
        interactive,
        signedDistance
      );
      col += lineCol * intensity * 0.2;
      if (lightMode && lightRenderMode > 0) {
        accumulateLightLine(intensity, signedDistance, lineCol, 0.32, coreInk, haloInk);
      }
    }
  }

  if (enableMiddle) {
    for (int i = 0; i < middleLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(middleLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);
      
      float angle = middleWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      float signedDistance;
      float intensity = wave(
        ruv + vec2(middleLineDistance * fi + middleWavePosition.x, middleWavePosition.y),
        2.0 + 0.15 * fi,
        baseUv,
        mouseUv,
        interactive,
        signedDistance
      );
      col += lineCol * intensity;
      if (lightMode && lightRenderMode > 0) {
        accumulateLightLine(intensity, signedDistance, lineCol, 1.0, coreInk, haloInk);
      }
    }
  }

  if (enableTop) {
    for (int i = 0; i < topLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(topLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);
      
      float angle = topWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      ruv.x *= -1.0;
      float signedDistance;
      float intensity = wave(
        ruv + vec2(topLineDistance * fi + topWavePosition.x, topWavePosition.y),
        1.0 + 0.2 * fi,
        baseUv,
        mouseUv,
        interactive,
        signedDistance
      );
      col += lineCol * intensity * 0.1;
      if (lightMode && lightRenderMode > 0) {
        accumulateLightLine(intensity, signedDistance, lineCol, 0.15, coreInk, haloInk);
      }
    }
  }

if (lightMode) {
  if (lightRenderMode == 0) {
    // Previous light adaptation: retain its accumulated long tails as an A/B baseline.
    vec3 energy = max(col, vec3(0.0));
    float peak = max(energy.r, max(energy.g, energy.b));
    float coverage = smoothstep(0.018, 0.5, peak);
    vec3 chroma = clamp(energy / max(peak, 0.0001), 0.0, 1.0);
    chroma = pow(chroma, vec3(1.35));
    float chromaPeak = max(chroma.r, max(chroma.g, chroma.b));
    chroma /= max(chromaPeak, 0.0001);
    vec3 ink = mix(chroma, clamp(chroma * 0.82, 0.0, 1.0), smoothstep(0.5, 1.0, coverage));
    fragColor = vec4(mix(backgroundColor, ink, coverage * 0.94), 1.0);
  } else {
    if (lightRenderMode == 1) {
      // Only the strongest individual line contributes: overlapping tails stay white.
      fragColor = vec4(backgroundColor - coreInk * 0.72, 1.0);
    } else {
      // Max-composited halo is faint even where several lines pass nearby.
      vec3 haloLayer = backgroundColor - haloInk * 0.09;
      fragColor = vec4(clamp(haloLayer - coreInk * 0.75, 0.0, 1.0), 1.0);
    }
  }
} else {
    fragColor = vec4(col, 1.0);
  }
}

void main() {
  vec4 color = vec4(0.0);
  mainImage(color, gl_FragCoord.xy);
  gl_FragColor = color;
}
`,Q_=8;function ip(e){let t=e.trim();t.startsWith("#")&&(t=t.slice(1));let n=255,i=255,s=255;return t.length===3?(n=parseInt(t[0]+t[0],16),i=parseInt(t[1]+t[1],16),s=parseInt(t[2]+t[2],16)):t.length===6&&(n=parseInt(t.slice(0,2),16),i=parseInt(t.slice(2,4),16),s=parseInt(t.slice(4,6),16)),new z(n/255,i/255,s/255)}function j_({linesGradient:e,enabledWaves:t=["top","middle","bottom"],lineCount:n=[6],lineDistance:i=[5],topWavePosition:s,middleWavePosition:r,bottomWavePosition:a={x:2,y:-.7,rotate:-1},animationSpeed:o=1,interactive:l=!0,bendRadius:c=5,bendStrength:u=-.5,mouseDamping:f=.05,parallax:h=!0,parallaxStrength:p=.2,mixBlendMode:_="screen",backgroundColor:g="#000000",lightMode:m=!1,lightRenderMode:d=0,instantColorChange:v=!1,colorTransitionDuration:y=1.05}){let x=(0,Cn.useRef)(null),T=(0,Cn.useRef)(null),w=(0,Cn.useRef)(null),E=(0,Cn.useRef)({interactive:l,parallax:h,parallaxStrength:p,mouseDamping:f});E.current={interactive:l,parallax:h,parallaxStrength:p,mouseDamping:f};let C=(0,Cn.useRef)(new Jt(-1e3,-1e3)),S=(0,Cn.useRef)(new Jt(-1e3,-1e3)),M=(0,Cn.useRef)(0),U=(0,Cn.useRef)(0),I=(0,Cn.useRef)(new Jt(0,0)),B=(0,Cn.useRef)(new Jt(0,0)),H=rt=>{if(typeof n=="number")return n;if(!t.includes(rt))return 0;let Pt=t.indexOf(rt);return n[Pt]??6},W=rt=>{if(typeof i=="number")return i;if(!t.includes(rt))return .1;let Pt=t.indexOf(rt);return i[Pt]??.1},k=t.includes("top")?H("top"):0,K=t.includes("middle")?H("middle"):0,F=t.includes("bottom")?H("bottom"):0,it=t.includes("top")?W("top")*.01:.01,lt=t.includes("middle")?W("middle")*.01:.01,gt=t.includes("bottom")?W("bottom")*.01:.01;return(0,Cn.useEffect)(()=>{let rt=x.current;if(!rt)return;let Pt=!0,kt=new ru,It=new gl(-1,1,1,-1,0,1);It.position.z=1;let X=new tp({antialias:!0,alpha:!1});X.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),X.domElement.style.width="100%",X.domElement.style.height="100%",rt.appendChild(X.domElement);let J={iTime:{value:0},iResolution:{value:new z(1,1,1)},animationSpeed:{value:o},enableTop:{value:t.includes("top")},enableMiddle:{value:t.includes("middle")},enableBottom:{value:t.includes("bottom")},topLineCount:{value:k},middleLineCount:{value:K},bottomLineCount:{value:F},topLineDistance:{value:it},middleLineDistance:{value:lt},bottomLineDistance:{value:gt},topWavePosition:{value:new z(s?.x??10,s?.y??.5,s?.rotate??-.4)},middleWavePosition:{value:new z(r?.x??5,r?.y??0,r?.rotate??.2)},bottomWavePosition:{value:new z(a?.x??2,a?.y??-.7,a?.rotate??.4)},iMouse:{value:new Jt(-1e3,-1e3)},interactive:{value:l},bendRadius:{value:c},bendStrength:{value:u},bendInfluence:{value:0},parallax:{value:h},parallaxStrength:{value:p},parallaxOffset:{value:new Jt(0,0)},lineGradient:{value:Array.from({length:Q_},()=>new z(1,1,1))},lineGradientCount:{value:0},backgroundColor:{value:ip(g)},lightMode:{value:m},lightRenderMode:{value:d}};if(T.current=J,e&&e.length>0){let te=e.slice(0,Q_);J.lineGradientCount.value=te.length,te.forEach((ht,Lt)=>{let de=ip(ht);J.lineGradient.value[Lt].set(de.x,de.y,de.z)})}let dt=new fi({uniforms:J,vertexShader:ZL,fragmentShader:JL}),At=new za(2,2),St=new Xn(At,dt);kt.add(St);let qt=new uu,Je=()=>{if(!Pt)return;let te=rt.clientWidth||1,ht=rt.clientHeight||1;X.setSize(te,ht,!1);let Lt=X.domElement.width,de=X.domElement.height;J.iResolution.value.set(Lt,de,1)};Je();let D=typeof ResizeObserver<"u"?new ResizeObserver(()=>{Pt&&Je()}):null;D&&D.observe(rt);let fe=te=>{if(!E.current.interactive)return;let ht=X.domElement.getBoundingClientRect(),Lt=te.clientX-ht.left,de=te.clientY-ht.top,Ae=X.getPixelRatio();if(C.current.set(Lt*Ae,(ht.height-de)*Ae),M.current=1,E.current.parallax){let R=ht.width/2,b=ht.height/2,P=(Lt-R)/ht.width,Y=-(de-b)/ht.height;I.current.set(P*E.current.parallaxStrength,Y*E.current.parallaxStrength)}},Nt=()=>{M.current=0};X.domElement.addEventListener("pointermove",fe),X.domElement.addEventListener("pointerleave",Nt);let Ct=0,_t=()=>{Pt&&(J.iTime.value=qt.getElapsedTime(),E.current.interactive&&(S.current.lerp(C.current,E.current.mouseDamping),J.iMouse.value.copy(S.current),U.current+=(M.current-U.current)*E.current.mouseDamping,J.bendInfluence.value=U.current),E.current.parallax&&(B.current.lerp(I.current,E.current.mouseDamping),J.parallaxOffset.value.copy(B.current)),X.render(kt,It),Ct=requestAnimationFrame(_t))};return _t(),()=>{Pt=!1,T.current=null,w.current?.kill(),cancelAnimationFrame(Ct),D&&D.disconnect(),X.domElement.removeEventListener("pointermove",fe),X.domElement.removeEventListener("pointerleave",Nt),At.dispose(),dt.dispose(),X.dispose(),X.forceContextLoss(),X.domElement.parentElement&&X.domElement.parentElement.removeChild(X.domElement)}},[]),(0,Cn.useEffect)(()=>{let rt=T.current;rt&&(rt.animationSpeed.value=o,rt.interactive.value=l,rt.bendRadius.value=c,rt.bendStrength.value=u,rt.parallax.value=h,rt.parallaxStrength.value=p,rt.backgroundColor.value.copy(ip(g)),rt.lightMode.value=m,rt.lightRenderMode.value=d,rt.topWavePosition.value.set(s?.x??10,s?.y??.5,s?.rotate??-.4),rt.middleWavePosition.value.set(r?.x??5,r?.y??0,r?.rotate??.2),rt.bottomWavePosition.value.set(a?.x??2,a?.y??-.7,a?.rotate??.4),l||(M.current=0,U.current=0,rt.bendInfluence.value=0),h||(I.current.set(0,0),B.current.set(0,0),rt.parallaxOffset.value.set(0,0)))},[o,l,c,u,h,p,g,m,d,s,r,a]),(0,Cn.useEffect)(()=>{let rt=T.current;if(!rt)return;w.current?.kill();let Pt=(e||[]).slice(0,Q_).map(ip);if(!Pt.length){rt.lineGradientCount.value=0;return}let kt=Pt.map((J,dt)=>rt.lineGradient.value[dt].clone());rt.lineGradientCount.value=Pt.length;let It=J=>Pt.forEach((dt,At)=>{rt.lineGradient.value[At].copy(kt[At]).lerp(dt,J)});if(v||y<=0){It(1);return}let X={progress:0};return w.current=Di.to(X,{progress:1,duration:y,ease:"sine.inOut",onUpdate:()=>It(X.progress)}),()=>w.current?.kill()},[e,v,y]),(0,XT.jsx)("div",{ref:x,className:"floating-lines-container",style:{mixBlendMode:m?"normal":_}})}var tv=Qr(yu()),KL=["#740005","#1a1a1a","#fbfcd3"],QL=[{id:"combination-1",name:"\u7EC4\u5408 1 \xB7 \u7D2B\u4E0E\u6696\u767D",colors:["#8877C7","#BBA6C4","#F0E7DB"]},{id:"combination-2",name:"\u7EC4\u5408 2 \xB7 \u73AB\u7470\u4E0E\u6DF1\u84DD\u7070",colors:["#C88697","#826F7B","#31424D"]},{id:"combination-3",name:"\u7EC4\u5408 3 \xB7 \u84DD\u4E0E\u674F\u7C89",colors:["#4A5F8C","#97869C","#E8B4A2"]}],jL=new Map(QL.map(e=>[e.id,e])),KT={dark:["reference","combination-2"],light:["combination-1","combination-2","combination-3"]},$L=()=>4e4+Math.random()*2e4;function tO(e){return e==="reference"?KL:jL.get(e).colors}function eO(e,t){let n=KT[t?"dark":"light"].filter(i=>i!==e);return n[Math.floor(Math.random()*n.length)]}var nO=["middle","bottom","top"],iO={x:5,y:-.45,rotate:.2},QT=new Set(["/teachings/urban-analytics-ba-26/","/teachings/urban-analytics-msc-26/"]),sO=new Map([["/","home"],["/about/","about"],["/publications/","publications"],["/projects/","projects"],["/data/","data"],["/teaching/","teaching"],...[...QT].map(e=>[e,"teaching"])]),El=window.matchMedia("(prefers-reduced-motion: reduce)");function rO(){let[e,t]=(0,Zr.useState)(document.documentElement.dataset.theme==="dark"),[n,i]=(0,Zr.useState)(()=>({id:document.documentElement.dataset.theme==="dark"?"reference":"combination-1",duration:0})),[s,r]=(0,Zr.useState)(El.matches);return(0,Zr.useEffect)(()=>{let a=()=>{let c=document.documentElement.dataset.theme==="dark";t(c),i(u=>({id:KT[c?"dark":"light"].includes(u.id)?u.id:c?"reference":"combination-1",duration:1.2}))},o=()=>r(El.matches),l=new MutationObserver(a);return l.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),El.addEventListener("change",o),()=>{l.disconnect(),El.removeEventListener("change",o)}},[]),(0,Zr.useEffect)(()=>{document.body.dataset.dawnPalette=n.id},[n.id]),(0,Zr.useEffect)(()=>{if(s)return;let a,o=()=>{document.hidden||(a=window.setTimeout(()=>{i(c=>({id:eO(c.id,e),duration:8})),o()},$L()))},l=()=>{window.clearTimeout(a),o()};return document.addEventListener("visibilitychange",l),o(),()=>{window.clearTimeout(a),document.removeEventListener("visibilitychange",l)}},[e,s]),(0,tv.jsx)(j_,{linesGradient:tO(n.id),colorTransitionDuration:n.duration,enabledWaves:nO,lineCount:8,lineDistance:8,middleWavePosition:iO,animationSpeed:s?0:1,interactive:!s,bendRadius:8,bendStrength:e?-.65:-2,mouseDamping:e?.055:.05,parallax:!s,parallaxStrength:e?.08:.2,lightMode:!e,lightRenderMode:2,backgroundColor:e?"#000000":"#f5f5f7",instantColorChange:s})}function Yr(e){return e==="/"?"/":`${e.replace(/\/+$/,"")}/`}function xu(e){return sO.get(Yr(e.pathname))}function WT(e,t){return Yr(e.pathname)===Yr(t.pathname)}function sp(e=document){return e.querySelector('.dawn-home, .container[role="main"]')}function qT(e,t){e.classList.add("dawn-section-content"),e.dataset.dawnSection=t}function aO(e){return e.querySelector(".dawn-hero-content, .post-header")||e}function oO(e){document.querySelectorAll("#navbar .nav-item > a.nav-link").forEach(t=>{let n=xu(new URL(t.href,location.href))===e;if(t.parentElement.classList.toggle("active",n),n?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current"),t.querySelector(".sr-only")?.remove(),n){let i=document.createElement("span");i.className="sr-only",i.textContent="(current)",t.appendChild(i)}})}function YT(){let e=document.getElementById("navbarNav"),t=document.querySelector("#navbar .navbar-toggler");e?.classList.contains("show")&&(window.jQuery?.fn?.collapse?window.jQuery(e).collapse("hide"):e.classList.remove("show")),t?.classList.add("collapsed"),t?.setAttribute("aria-expanded","false")}function lO(e){let t=e.querySelector("#lang-checkbox"),n=e.querySelector("#dawn-intro-wrapper");if(!t||!n||t.dataset.dawnReady)return;t.dataset.dawnReady="true";let i=r=>{n.classList.toggle("show-en",r==="en"),n.classList.toggle("show-cn",r!=="en"),t.checked=r==="en";try{localStorage.setItem("dawn-pref-lang",r)}catch{}},s="cn";try{s=localStorage.getItem("dawn-pref-lang")==="en"?"en":"cn"}catch{}i(s),t.addEventListener("change",()=>i(t.checked?"en":"cn"))}function cO(e,t){let n=e.querySelector("#bibsearch"),i=e.querySelector(".publications");if(!n||!i||n.dataset.dawnReady)return;n.dataset.dawnReady="true";let s=()=>{let a=n.value.trim().toLocaleLowerCase();i.querySelectorAll("ol.bibliography").forEach(o=>{let l=0;o.querySelectorAll(":scope > li").forEach(c=>{let u=!a||c.textContent.toLocaleLowerCase().includes(a);c.classList.toggle("unloaded",!u),u&&(l+=1)}),o.classList.toggle("unloaded",l===0),o.previousElementSibling?.matches("h2.bibliography")&&o.previousElementSibling.classList.toggle("unloaded",l===0)})},r;n.addEventListener("input",()=>{clearTimeout(r),r=window.setTimeout(s,120)}),s(),t&&i.addEventListener("click",a=>{let o=a.target instanceof Element?a.target.closest("a.abstract, a.award, a.bibtex"):null;if(!o)return;a.preventDefault();let l=o.parentElement?.parentElement;if(l)for(let c of["abstract","award","bibtex"]){let u=l.querySelector(`.${c}.hidden`);o.classList.contains(c)?u?.classList.toggle("open"):u?.classList.remove("open")}})}function uO(e){let t=window.jQuery;t?.fn?.masonry&&e.querySelectorAll(".grid").forEach(i=>{let s=t(i).masonry({gutter:10,horizontalOrder:!0,itemSelector:".grid-item"});t.fn.imagesLoaded&&s.imagesLoaded().progress(()=>s.masonry("layout"))});let n=e.querySelectorAll("[data-zoomable]");n.length&&(window.medium_zoom?.attach?window.medium_zoom.attach(n):window.mediumZoom&&(window.medium_zoom=window.mediumZoom(n,{background:getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color")+"ee"})))}function $_(e){let t=document.createElement("script");t.src=e,t.addEventListener("load",()=>t.remove(),{once:!0}),t.addEventListener("error",()=>t.remove(),{once:!0}),document.body.appendChild(t)}function hO(e){e.querySelectorAll(".dawn-data-group").forEach(t=>{let n=t.querySelector(".dawn-data-group__toggle"),i=n?.querySelector(".dawn-data-group__toggle-label"),s=[...t.querySelectorAll("tbody tr.dawn-data-extra")],r=t.querySelector(".dawn-data-group__status");!n||!i||!s.length||(s.forEach(a=>{a.hidden=!0}),n.hidden=!1,n.addEventListener("click",()=>{let a=n.getAttribute("aria-expanded")!=="true";if(!a&&s.some(o=>o.querySelector('a[aria-busy="true"]'))){r&&(r.textContent="\u8BF7\u7B49\u5F85\u4E0B\u8F7D\u5B8C\u6210\u6216\u53D6\u6D88\u4E0B\u8F7D\u540E\u518D\u6536\u8D77\u3002");return}s.forEach(o=>{o.hidden=!a}),n.setAttribute("aria-expanded",String(a)),i.textContent=a?"\u6536\u8D77":`\u5C55\u5F00\u5176\u4F59 ${s.length} \u9879`,r&&(r.textContent="")}))})}function ZT(e,t,n){t&&(e==="about"&&lO(t),e==="publications"&&cO(t,n),n&&e==="projects"&&uO(t),e==="data"&&(hO(t),n&&$_("/assets/js/data-download.js")),n&&e==="home"&&$_("/assets/js/dawn-home.js"))}function fO(e,t,n){if(El.matches)return e.replaceWith(t),n(),Promise.resolve();let i=e.getBoundingClientRect();e.style.setProperty("margin","0","important"),Di.set(e,{position:"fixed",top:i.top,left:i.left,width:i.width,zIndex:3,pointerEvents:"none"}),e.inert=!0,e.setAttribute("aria-hidden","true"),Di.set(t,{autoAlpha:0,y:8});let s=aO(t);return Di.set(s,{filter:"blur(2px)"}),e.after(t),n(),new Promise(r=>{Di.timeline({onComplete:()=>{e.remove(),Di.set(t,{clearProps:"opacity,visibility,transform"}),Di.set(s,{clearProps:"filter"}),r()}}).to(e,{autoAlpha:0,y:-4,filter:"blur(4px)",duration:.3,ease:"sine.inOut"},0).to(t,{autoAlpha:1,y:0,duration:.3,ease:"sine.inOut"},.08).to(s,{filter:"blur(0px)",duration:.3,ease:"sine.out"},.08)})}async function dO(e,t){let n=[...e.querySelectorAll(".projects img")];n.length&&await Promise.race([Promise.allSettled(n.map(i=>{let s=new Image;return s.src=new URL(i.getAttribute("src"),t).href,s.decode()})),new Promise(i=>window.setTimeout(i,1800))])}var rp=document.getElementById("dawn-floating-lines-root");if(rp){let a=function(u){let f=u.href;if(r.has(f))return r.get(f);let h=fetch(f,{credentials:"same-origin"}).then(p=>{if(!p.ok||!(p.headers.get("content-type")||"").includes("text/html"))throw new Error("Page could not be loaded");return p.text()}).catch(p=>{throw r.delete(f),p});return r.set(f,h),r.size>4&&r.delete(r.keys().next().value),h},c=function(u){let f=u.target instanceof Element?u.target.closest("a[href]"):null;if(!f||!l?.contains(f)&&!f.closest(".courses")||navigator.connection?.saveData)return;let h=new URL(f.href,location.href);h.origin!==location.origin||!xu(h)||WT(h,new URL(location.href))||a(h).catch(()=>{})};(0,JT.createRoot)(rp).render((0,tv.jsx)(rO,{}));let e=document.body.dataset.dawnSection||"home",t=sp();t&&qT(t,e),ZT(e,t,!1);let n=!1,i=Yr(location.pathname),s=null,r=new Map;async function o(u,f=!0,h=!0){if(n){s={destination:u,pushHistory:f,focusHeading:h};return}let p=xu(u),_=sp();if(!p||!_){location.assign(u.href);return}n=!0;try{let g=new DOMParser().parseFromString(await a(u),"text/html"),m=sp(g);if(!m||g.body.dataset.dawnSection!==p)throw new Error("Unexpected page shell");if(m.querySelectorAll("noscript").forEach(d=>d.remove()),qT(m,p),!rp.isConnected)throw new Error("Persistent canvas is missing");if(p==="projects"&&await dO(m,u.href),await fO(_,m,()=>{f&&history.pushState({dawnRoute:!0},"",u.href),i=Yr(u.pathname),document.body.dataset.dawnSection=p,document.body.classList.toggle("dawn-home-page",p==="home"),document.body.classList.toggle("dawn-section-page",p!=="home"),document.title=g.title,oO(p),YT(),window.scrollTo(0,0),ZT(p,m,!0),document.dispatchEvent(new CustomEvent("dawn:sectionchange",{detail:{section:p}}))}),QT.has(Yr(u.pathname))&&$_("/assets/js/course-material-morphicons.min.js"),h){let d=m.querySelector("h1");d&&(d.setAttribute("tabindex","-1"),d.focus({preventScroll:!0}))}}catch{location.assign(u.href)}finally{if(n=!1,s){let g=s;s=null,Yr(g.destination.pathname)!==i&&o(g.destination,g.pushHistory,g.focusHeading)}}}let l=document.querySelector("#navbar");document.addEventListener("click",u=>{if(u.defaultPrevented||u.button!==0||u.metaKey||u.ctrlKey||u.shiftKey||u.altKey)return;let f=u.target instanceof Element?u.target.closest("a[href]"):null;if(!f||f.target==="_blank"||f.hasAttribute("download"))return;let h=new URL(f.href,location.href);if(!(h.origin!==location.origin||!xu(h))){if(WT(h,new URL(location.href))){if(h.hash&&h.hash!==location.hash)return;u.preventDefault(),YT(),window.scrollTo({top:0,behavior:El.matches?"instant":"smooth"});return}u.preventDefault(),o(h)}}),document.addEventListener("pointerover",c),document.addEventListener("focusin",c),window.addEventListener("popstate",()=>{let u=new URL(location.href);xu(u)&&Yr(u.pathname)!==i&&o(u,!1,!1)}),window.addEventListener("pageshow",u=>{u.persisted&&(Di.set(sp(),{clearProps:"opacity,visibility,transform,filter"}),Di.set(rp,{clearProps:"opacity"}),n=!1)})}})();
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.0
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
