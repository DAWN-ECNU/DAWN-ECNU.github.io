(()=>{var bE=Object.create;var yv=Object.defineProperty;var TE=Object.getOwnPropertyDescriptor;var EE=Object.getOwnPropertyNames;var AE=Object.getPrototypeOf,wE=Object.prototype.hasOwnProperty;var Wi=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var CE=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of EE(t))!wE.call(e,s)&&s!==n&&yv(e,s,{get:()=>t[s],enumerable:!(i=TE(t,s))||i.enumerable});return e};var jr=(e,t,n)=>(n=e!=null?bE(AE(e)):{},CE(t||!e||!e.__esModule?yv(n,"default",{value:e,enumerable:!0}):n,e));var Dv=Wi(zt=>{"use strict";var dp=Symbol.for("react.transitional.element"),RE=Symbol.for("react.portal"),DE=Symbol.for("react.fragment"),UE=Symbol.for("react.strict_mode"),LE=Symbol.for("react.profiler"),OE=Symbol.for("react.consumer"),NE=Symbol.for("react.context"),IE=Symbol.for("react.forward_ref"),PE=Symbol.for("react.suspense"),BE=Symbol.for("react.memo"),Tv=Symbol.for("react.lazy"),zE=Symbol.for("react.activity"),xv=Symbol.iterator;function FE(e){return e===null||typeof e!="object"?null:(e=xv&&e[xv]||e["@@iterator"],typeof e=="function"?e:null)}var Ev={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Av=Object.assign,wv={};function Ka(e,t,n){this.props=e,this.context=t,this.refs=wv,this.updater=n||Ev}Ka.prototype.isReactComponent={};Ka.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ka.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Cv(){}Cv.prototype=Ka.prototype;function pp(e,t,n){this.props=e,this.context=t,this.refs=wv,this.updater=n||Ev}var mp=pp.prototype=new Cv;mp.constructor=pp;Av(mp,Ka.prototype);mp.isPureReactComponent=!0;var Sv=Array.isArray;function fp(){}var Se={H:null,A:null,T:null,S:null},Rv=Object.prototype.hasOwnProperty;function gp(e,t,n){var i=n.ref;return{$$typeof:dp,type:e,key:t,ref:i!==void 0?i:null,props:n}}function VE(e,t){return gp(e.type,t,e.props)}function _p(e){return typeof e=="object"&&e!==null&&e.$$typeof===dp}function HE(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Mv=/\/+/g;function hp(e,t){return typeof e=="object"&&e!==null&&e.key!=null?HE(""+e.key):t.toString(36)}function GE(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(fp,fp):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Ja(e,t,n,i,s){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(r){case"bigint":case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case dp:case RE:a=!0;break;case Tv:return a=e._init,Ja(a(e._payload),t,n,i,s)}}if(a)return s=s(e),a=i===""?"."+hp(e,0):i,Sv(s)?(n="",a!=null&&(n=a.replace(Mv,"$&/")+"/"),Ja(s,t,n,"",function(c){return c})):s!=null&&(_p(s)&&(s=VE(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(Mv,"$&/")+"/")+a)),t.push(s)),1;a=0;var o=i===""?".":i+":";if(Sv(e))for(var l=0;l<e.length;l++)i=e[l],r=o+hp(i,l),a+=Ja(i,t,n,r,s);else if(l=FE(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,r=o+hp(i,l++),a+=Ja(i,t,n,r,s);else if(r==="object"){if(typeof e.then=="function")return Ja(GE(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return a}function Au(e,t,n){if(e==null)return e;var i=[],s=0;return Ja(e,i,"","",function(r){return t.call(n,r,s++)}),i}function kE(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var bv=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},XE={map:Au,forEach:function(e,t,n){Au(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Au(e,function(){t++}),t},toArray:function(e){return Au(e,function(t){return t})||[]},only:function(e){if(!_p(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};zt.Activity=zE;zt.Children=XE;zt.Component=Ka;zt.Fragment=DE;zt.Profiler=LE;zt.PureComponent=pp;zt.StrictMode=UE;zt.Suspense=PE;zt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Se;zt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Se.H.useMemoCache(e)}};zt.cache=function(e){return function(){return e.apply(null,arguments)}};zt.cacheSignal=function(){return null};zt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=Av({},e.props),s=e.key;if(t!=null)for(r in t.key!==void 0&&(s=""+t.key),t)!Rv.call(t,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&t.ref===void 0||(i[r]=t[r]);var r=arguments.length-2;if(r===1)i.children=n;else if(1<r){for(var a=Array(r),o=0;o<r;o++)a[o]=arguments[o+2];i.children=a}return gp(e.type,s,i)};zt.createContext=function(e){return e={$$typeof:NE,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:OE,_context:e},e};zt.createElement=function(e,t,n){var i,s={},r=null;if(t!=null)for(i in t.key!==void 0&&(r=""+t.key),t)Rv.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var o=Array(a),l=0;l<a;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in a=e.defaultProps,a)s[i]===void 0&&(s[i]=a[i]);return gp(e,r,s)};zt.createRef=function(){return{current:null}};zt.forwardRef=function(e){return{$$typeof:IE,render:e}};zt.isValidElement=_p;zt.lazy=function(e){return{$$typeof:Tv,_payload:{_status:-1,_result:e},_init:kE}};zt.memo=function(e,t){return{$$typeof:BE,type:e,compare:t===void 0?null:t}};zt.startTransition=function(e){var t=Se.T,n={};Se.T=n;try{var i=e(),s=Se.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(fp,bv)}catch(r){bv(r)}finally{t!==null&&n.types!==null&&(t.types=n.types),Se.T=t}};zt.unstable_useCacheRefresh=function(){return Se.H.useCacheRefresh()};zt.use=function(e){return Se.H.use(e)};zt.useActionState=function(e,t,n){return Se.H.useActionState(e,t,n)};zt.useCallback=function(e,t){return Se.H.useCallback(e,t)};zt.useContext=function(e){return Se.H.useContext(e)};zt.useDebugValue=function(){};zt.useDeferredValue=function(e,t){return Se.H.useDeferredValue(e,t)};zt.useEffect=function(e,t){return Se.H.useEffect(e,t)};zt.useEffectEvent=function(e){return Se.H.useEffectEvent(e)};zt.useId=function(){return Se.H.useId()};zt.useImperativeHandle=function(e,t,n){return Se.H.useImperativeHandle(e,t,n)};zt.useInsertionEffect=function(e,t){return Se.H.useInsertionEffect(e,t)};zt.useLayoutEffect=function(e,t){return Se.H.useLayoutEffect(e,t)};zt.useMemo=function(e,t){return Se.H.useMemo(e,t)};zt.useOptimistic=function(e,t){return Se.H.useOptimistic(e,t)};zt.useReducer=function(e,t,n){return Se.H.useReducer(e,t,n)};zt.useRef=function(e){return Se.H.useRef(e)};zt.useState=function(e){return Se.H.useState(e)};zt.useSyncExternalStore=function(e,t,n){return Se.H.useSyncExternalStore(e,t,n)};zt.useTransition=function(){return Se.H.useTransition()};zt.version="19.2.0"});var Cl=Wi((FO,Uv)=>{"use strict";Uv.exports=Dv()});var Hv=Wi(Ae=>{"use strict";function Sp(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<wu(s,t))e[i]=t,e[n]=s,n=i;else break t}}function qi(e){return e.length===0?null:e[0]}function Ru(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,r=s>>>1;i<r;){var a=2*(i+1)-1,o=e[a],l=a+1,c=e[l];if(0>wu(o,n))l<s&&0>wu(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[a]=n,i=a);else if(l<s&&0>wu(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function wu(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Ae.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(Lv=performance,Ae.unstable_now=function(){return Lv.now()}):(vp=Date,Ov=vp.now(),Ae.unstable_now=function(){return vp.now()-Ov});var Lv,vp,Ov,ds=[],Qs=[],WE=1,vi=null,mn=3,Mp=!1,Rl=!1,Dl=!1,bp=!1,Pv=typeof setTimeout=="function"?setTimeout:null,Bv=typeof clearTimeout=="function"?clearTimeout:null,Nv=typeof setImmediate<"u"?setImmediate:null;function Cu(e){for(var t=qi(Qs);t!==null;){if(t.callback===null)Ru(Qs);else if(t.startTime<=e)Ru(Qs),t.sortIndex=t.expirationTime,Sp(ds,t);else break;t=qi(Qs)}}function Tp(e){if(Dl=!1,Cu(e),!Rl)if(qi(ds)!==null)Rl=!0,ja||(ja=!0,Qa());else{var t=qi(Qs);t!==null&&Ep(Tp,t.startTime-e)}}var ja=!1,Ul=-1,zv=5,Fv=-1;function Vv(){return bp?!0:!(Ae.unstable_now()-Fv<zv)}function yp(){if(bp=!1,ja){var e=Ae.unstable_now();Fv=e;var t=!0;try{t:{Rl=!1,Dl&&(Dl=!1,Bv(Ul),Ul=-1),Mp=!0;var n=mn;try{e:{for(Cu(e),vi=qi(ds);vi!==null&&!(vi.expirationTime>e&&Vv());){var i=vi.callback;if(typeof i=="function"){vi.callback=null,mn=vi.priorityLevel;var s=i(vi.expirationTime<=e);if(e=Ae.unstable_now(),typeof s=="function"){vi.callback=s,Cu(e),t=!0;break e}vi===qi(ds)&&Ru(ds),Cu(e)}else Ru(ds);vi=qi(ds)}if(vi!==null)t=!0;else{var r=qi(Qs);r!==null&&Ep(Tp,r.startTime-e),t=!1}}break t}finally{vi=null,mn=n,Mp=!1}t=void 0}}finally{t?Qa():ja=!1}}}var Qa;typeof Nv=="function"?Qa=function(){Nv(yp)}:typeof MessageChannel<"u"?(xp=new MessageChannel,Iv=xp.port2,xp.port1.onmessage=yp,Qa=function(){Iv.postMessage(null)}):Qa=function(){Pv(yp,0)};var xp,Iv;function Ep(e,t){Ul=Pv(function(){e(Ae.unstable_now())},t)}Ae.unstable_IdlePriority=5;Ae.unstable_ImmediatePriority=1;Ae.unstable_LowPriority=4;Ae.unstable_NormalPriority=3;Ae.unstable_Profiling=null;Ae.unstable_UserBlockingPriority=2;Ae.unstable_cancelCallback=function(e){e.callback=null};Ae.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):zv=0<e?Math.floor(1e3/e):5};Ae.unstable_getCurrentPriorityLevel=function(){return mn};Ae.unstable_next=function(e){switch(mn){case 1:case 2:case 3:var t=3;break;default:t=mn}var n=mn;mn=t;try{return e()}finally{mn=n}};Ae.unstable_requestPaint=function(){bp=!0};Ae.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=mn;mn=e;try{return t()}finally{mn=n}};Ae.unstable_scheduleCallback=function(e,t,n){var i=Ae.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:WE++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,Sp(Qs,e),qi(ds)===null&&e===qi(Qs)&&(Dl?(Bv(Ul),Ul=-1):Dl=!0,Ep(Tp,n-i))):(e.sortIndex=s,Sp(ds,e),Rl||Mp||(Rl=!0,ja||(ja=!0,Qa()))),e};Ae.unstable_shouldYield=Vv;Ae.unstable_wrapCallback=function(e){var t=mn;return function(){var n=mn;mn=t;try{return e.apply(this,arguments)}finally{mn=n}}}});var kv=Wi((HO,Gv)=>{"use strict";Gv.exports=Hv()});var Wv=Wi(En=>{"use strict";var qE=Cl();function Xv(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function js(){}var Tn={d:{f:js,r:function(){throw Error(Xv(522))},D:js,C:js,L:js,m:js,X:js,S:js,M:js},p:0,findDOMNode:null},YE=Symbol.for("react.portal");function ZE(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:YE,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var Ll=qE.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Du(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}En.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Tn;En.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Xv(299));return ZE(e,t,null,n)};En.flushSync=function(e){var t=Ll.T,n=Tn.p;try{if(Ll.T=null,Tn.p=2,e)return e()}finally{Ll.T=t,Tn.p=n,Tn.d.f()}};En.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Tn.d.C(e,t))};En.prefetchDNS=function(e){typeof e=="string"&&Tn.d.D(e)};En.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Du(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Tn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:r}):n==="script"&&Tn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};En.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Du(t.as,t.crossOrigin);Tn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Tn.d.M(e)};En.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Du(n,t.crossOrigin);Tn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};En.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Du(t.as,t.crossOrigin);Tn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Tn.d.m(e)};En.requestFormReset=function(e){Tn.d.r(e)};En.unstable_batchedUpdates=function(e,t){return e(t)};En.useFormState=function(e,t,n){return Ll.H.useFormState(e,t,n)};En.useFormStatus=function(){return Ll.H.useHostTransitionStatus()};En.version="19.2.0"});var Zv=Wi((kO,Yv)=>{"use strict";function qv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qv)}catch(e){console.error(e)}}qv(),Yv.exports=Wv()});var a1=Wi(ef=>{"use strict";var Ke=kv(),xx=Cl(),JE=Zv();function Z(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Sx(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vc(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Mx(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function bx(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Jv(e){if(vc(e)!==e)throw Error(Z(188))}function KE(e){var t=e.alternate;if(!t){if(t=vc(e),t===null)throw Error(Z(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var r=s.alternate;if(r===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===r.child){for(r=s.child;r;){if(r===n)return Jv(s),e;if(r===i)return Jv(s),t;r=r.sibling}throw Error(Z(188))}if(n.return!==i.return)n=s,i=r;else{for(var a=!1,o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a){for(o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a)throw Error(Z(189))}}if(n.alternate!==i)throw Error(Z(190))}if(n.tag!==3)throw Error(Z(188));return n.stateNode.current===n?e:t}function Tx(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Tx(e),t!==null)return t;e=e.sibling}return null}var Te=Object.assign,QE=Symbol.for("react.element"),Uu=Symbol.for("react.transitional.element"),Vl=Symbol.for("react.portal"),so=Symbol.for("react.fragment"),Ex=Symbol.for("react.strict_mode"),rm=Symbol.for("react.profiler"),Ax=Symbol.for("react.consumer"),Ss=Symbol.for("react.context"),tg=Symbol.for("react.forward_ref"),am=Symbol.for("react.suspense"),om=Symbol.for("react.suspense_list"),eg=Symbol.for("react.memo"),$s=Symbol.for("react.lazy"),lm=Symbol.for("react.activity"),jE=Symbol.for("react.memo_cache_sentinel"),Kv=Symbol.iterator;function Ol(e){return e===null||typeof e!="object"?null:(e=Kv&&e[Kv]||e["@@iterator"],typeof e=="function"?e:null)}var $E=Symbol.for("react.client.reference");function cm(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===$E?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case so:return"Fragment";case rm:return"Profiler";case Ex:return"StrictMode";case am:return"Suspense";case om:return"SuspenseList";case lm:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Vl:return"Portal";case Ss:return e.displayName||"Context";case Ax:return(e._context.displayName||"Context")+".Consumer";case tg:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case eg:return t=e.displayName||null,t!==null?t:cm(e.type)||"Memo";case $s:t=e._payload,e=e._init;try{return cm(e(t))}catch{}}return null}var Hl=Array.isArray,Lt=xx.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie=JE.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,sa={pending:!1,data:null,method:null,action:null},um=[],ro=-1;function Qi(e){return{current:e}}function rn(e){0>ro||(e.current=um[ro],um[ro]=null,ro--)}function ye(e,t){ro++,um[ro]=e.current,e.current=t}var Ki=Qi(null),sc=Qi(null),ur=Qi(null),uh=Qi(null);function hh(e,t){switch(ye(ur,t),ye(sc,e),ye(Ki,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ix(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ix(t),e=qM(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}rn(Ki),ye(Ki,e)}function To(){rn(Ki),rn(sc),rn(ur)}function hm(e){e.memoizedState!==null&&ye(uh,e);var t=Ki.current,n=qM(t,e.type);t!==n&&(ye(sc,e),ye(Ki,n))}function fh(e){sc.current===e&&(rn(Ki),rn(sc)),uh.current===e&&(rn(uh),mc._currentValue=sa)}var Ap,Qv;function ta(e){if(Ap===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ap=t&&t[1]||"",Qv=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ap+e+Qv}var wp=!1;function Cp(e,t){if(!e||wp)return"";wp=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var f=function(){throw Error()};if(Object.defineProperty(f.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(f,[])}catch(p){var h=p}Reflect.construct(e,[],f)}else{try{f.call()}catch(p){h=p}e.call(f.prototype)}}else{try{throw Error()}catch(p){h=p}(f=e())&&typeof f.catch=="function"&&f.catch(function(){})}}catch(p){if(p&&h&&typeof p.stack=="string")return[p.stack,h.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),a=r[0],o=r[1];if(a&&o){var l=a.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var u=`
`+l[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=s);break}}}finally{wp=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ta(n):""}function tA(e,t){switch(e.tag){case 26:case 27:case 5:return ta(e.type);case 16:return ta("Lazy");case 13:return e.child!==t&&t!==null?ta("Suspense Fallback"):ta("Suspense");case 19:return ta("SuspenseList");case 0:case 15:return Cp(e.type,!1);case 11:return Cp(e.type.render,!1);case 1:return Cp(e.type,!0);case 31:return ta("Activity");default:return""}}function jv(e){try{var t="",n=null;do t+=tA(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var fm=Object.prototype.hasOwnProperty,ng=Ke.unstable_scheduleCallback,Rp=Ke.unstable_cancelCallback,eA=Ke.unstable_shouldYield,nA=Ke.unstable_requestPaint,$n=Ke.unstable_now,iA=Ke.unstable_getCurrentPriorityLevel,wx=Ke.unstable_ImmediatePriority,Cx=Ke.unstable_UserBlockingPriority,dh=Ke.unstable_NormalPriority,sA=Ke.unstable_LowPriority,Rx=Ke.unstable_IdlePriority,rA=Ke.log,aA=Ke.unstable_setDisableYieldValue,yc=null,ti=null;function rr(e){if(typeof rA=="function"&&aA(e),ti&&typeof ti.setStrictMode=="function")try{ti.setStrictMode(yc,e)}catch{}}var ei=Math.clz32?Math.clz32:cA,oA=Math.log,lA=Math.LN2;function cA(e){return e>>>=0,e===0?32:31-(oA(e)/lA|0)|0}var Lu=256,Ou=262144,Nu=4194304;function ea(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Fh(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,r=e.suspendedLanes,a=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~r,i!==0?s=ea(i):(a&=o,a!==0?s=ea(a):n||(n=o&~e,n!==0&&(s=ea(n))))):(o=i&~r,o!==0?s=ea(o):a!==0?s=ea(a):n||(n=i&~e,n!==0&&(s=ea(n)))),s===0?0:t!==0&&t!==s&&(t&r)===0&&(r=s&-s,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:s}function xc(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function uA(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dx(){var e=Nu;return Nu<<=1,(Nu&62914560)===0&&(Nu=4194304),e}function Dp(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Sc(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function hA(e,t,n,i,s,r){var a=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=a&~n;0<n;){var u=31-ei(n),f=1<<u;o[u]=0,l[u]=-1;var h=c[u];if(h!==null)for(c[u]=null,u=0;u<h.length;u++){var p=h[u];p!==null&&(p.lane&=-536870913)}n&=~f}i!==0&&Ux(e,i,0),r!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=r&~(a&~t))}function Ux(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-ei(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function Lx(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-ei(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function Ox(e,t){var n=t&-t;return n=(n&42)!==0?1:ig(n),(n&(e.suspendedLanes|t))!==0?0:n}function ig(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function sg(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Nx(){var e=ie.p;return e!==0?e:(e=window.event,e===void 0?32:i1(e.type))}function $v(e,t){var n=ie.p;try{return ie.p=e,t()}finally{ie.p=n}}var br=Math.random().toString(36).slice(2),ln="__reactFiber$"+br,Pn="__reactProps$"+br,Io="__reactContainer$"+br,dm="__reactEvents$"+br,fA="__reactListeners$"+br,dA="__reactHandles$"+br,ty="__reactResources$"+br,Mc="__reactMarker$"+br;function rg(e){delete e[ln],delete e[Pn],delete e[dm],delete e[fA],delete e[dA]}function ao(e){var t=e[ln];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Io]||n[ln]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=lx(e);e!==null;){if(n=e[ln])return n;e=lx(e)}return t}e=n,n=e.parentNode}return null}function Po(e){if(e=e[ln]||e[Io]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Gl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(Z(33))}function _o(e){var t=e[ty];return t||(t=e[ty]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function sn(e){e[Mc]=!0}var Ix=new Set,Px={};function pa(e,t){Eo(e,t),Eo(e+"Capture",t)}function Eo(e,t){for(Px[e]=t,e=0;e<t.length;e++)Ix.add(t[e])}var pA=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ey={},ny={};function mA(e){return fm.call(ny,e)?!0:fm.call(ey,e)?!1:pA.test(e)?ny[e]=!0:(ey[e]=!0,!1)}function Ju(e,t,n){if(mA(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Iu(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function ps(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function xi(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Bx(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function gA(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,r=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(a){n=""+a,r.call(this,a)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function pm(e){if(!e._valueTracker){var t=Bx(e)?"checked":"value";e._valueTracker=gA(e,t,""+e[t])}}function zx(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Bx(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function ph(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var _A=/[\n"\\]/g;function bi(e){return e.replace(_A,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function mm(e,t,n,i,s,r,a,o){e.name="",a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"?e.type=a:e.removeAttribute("type"),t!=null?a==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+xi(t)):e.value!==""+xi(t)&&(e.value=""+xi(t)):a!=="submit"&&a!=="reset"||e.removeAttribute("value"),t!=null?gm(e,a,xi(t)):n!=null?gm(e,a,xi(n)):i!=null&&e.removeAttribute("value"),s==null&&r!=null&&(e.defaultChecked=!!r),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+xi(o):e.removeAttribute("name")}function Fx(e,t,n,i,s,r,a,o){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){pm(e);return}n=n!=null?""+xi(n):"",t=t!=null?""+xi(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.name=a),pm(e)}function gm(e,t,n){t==="number"&&ph(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function vo(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+xi(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Vx(e,t,n){if(t!=null&&(t=""+xi(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+xi(n):""}function Hx(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(Z(92));if(Hl(i)){if(1<i.length)throw Error(Z(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=xi(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),pm(e)}function Ao(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var vA=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function iy(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||vA.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Gx(e,t,n){if(t!=null&&typeof t!="object")throw Error(Z(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&iy(e,s,i)}else for(var r in t)t.hasOwnProperty(r)&&iy(e,r,t[r])}function ag(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yA=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),xA=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ku(e){return xA.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ms(){}var _m=null;function og(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var oo=null,yo=null;function sy(e){var t=Po(e);if(t&&(e=t.stateNode)){var n=e[Pn]||null;t:switch(e=t.stateNode,t.type){case"input":if(mm(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+bi(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[Pn]||null;if(!s)throw Error(Z(90));mm(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&zx(i)}break t;case"textarea":Vx(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&vo(e,!!n.multiple,t,!1)}}}var Up=!1;function kx(e,t,n){if(Up)return e(t,n);Up=!0;try{var i=e(t);return i}finally{if(Up=!1,(oo!==null||yo!==null)&&(Qh(),oo&&(t=oo,e=yo,yo=oo=null,sy(t),e)))for(t=0;t<e.length;t++)sy(e[t])}}function rc(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Pn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Z(231,t,typeof n));return n}var ws=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vm=!1;if(ws)try{$a={},Object.defineProperty($a,"passive",{get:function(){vm=!0}}),window.addEventListener("test",$a,$a),window.removeEventListener("test",$a,$a)}catch{vm=!1}var $a,ar=null,lg=null,Qu=null;function Xx(){if(Qu)return Qu;var e,t=lg,n=t.length,i,s="value"in ar?ar.value:ar.textContent,r=s.length;for(e=0;e<n&&t[e]===s[e];e++);var a=n-e;for(i=1;i<=a&&t[n-i]===s[r-i];i++);return Qu=s.slice(e,1<i?1-i:void 0)}function ju(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Pu(){return!0}function ry(){return!1}function Bn(e){function t(n,i,s,r,a){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=r,this.target=a,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Pu:ry,this.isPropagationStopped=ry,this}return Te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Pu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Pu)},persist:function(){},isPersistent:Pu}),t}var ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vh=Bn(ma),bc=Te({},ma,{view:0,detail:0}),SA=Bn(bc),Lp,Op,Nl,Hh=Te({},bc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cg,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Nl&&(Nl&&e.type==="mousemove"?(Lp=e.screenX-Nl.screenX,Op=e.screenY-Nl.screenY):Op=Lp=0,Nl=e),Lp)},movementY:function(e){return"movementY"in e?e.movementY:Op}}),ay=Bn(Hh),MA=Te({},Hh,{dataTransfer:0}),bA=Bn(MA),TA=Te({},bc,{relatedTarget:0}),Np=Bn(TA),EA=Te({},ma,{animationName:0,elapsedTime:0,pseudoElement:0}),AA=Bn(EA),wA=Te({},ma,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),CA=Bn(wA),RA=Te({},ma,{data:0}),oy=Bn(RA),DA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},UA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},LA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function OA(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=LA[e])?!!t[e]:!1}function cg(){return OA}var NA=Te({},bc,{key:function(e){if(e.key){var t=DA[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ju(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?UA[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cg,charCode:function(e){return e.type==="keypress"?ju(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ju(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),IA=Bn(NA),PA=Te({},Hh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ly=Bn(PA),BA=Te({},bc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cg}),zA=Bn(BA),FA=Te({},ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),VA=Bn(FA),HA=Te({},Hh,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),GA=Bn(HA),kA=Te({},ma,{newState:0,oldState:0}),XA=Bn(kA),WA=[9,13,27,32],ug=ws&&"CompositionEvent"in window,Wl=null;ws&&"documentMode"in document&&(Wl=document.documentMode);var qA=ws&&"TextEvent"in window&&!Wl,Wx=ws&&(!ug||Wl&&8<Wl&&11>=Wl),cy=" ",uy=!1;function qx(e,t){switch(e){case"keyup":return WA.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yx(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var lo=!1;function YA(e,t){switch(e){case"compositionend":return Yx(t);case"keypress":return t.which!==32?null:(uy=!0,cy);case"textInput":return e=t.data,e===cy&&uy?null:e;default:return null}}function ZA(e,t){if(lo)return e==="compositionend"||!ug&&qx(e,t)?(e=Xx(),Qu=lg=ar=null,lo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wx&&t.locale!=="ko"?null:t.data;default:return null}}var JA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hy(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!JA[e.type]:t==="textarea"}function Zx(e,t,n,i){oo?yo?yo.push(i):yo=[i]:oo=i,t=Lh(t,"onChange"),0<t.length&&(n=new Vh("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var ql=null,ac=null;function KA(e){kM(e,0)}function Gh(e){var t=Gl(e);if(zx(t))return e}function fy(e,t){if(e==="change")return t}var Jx=!1;ws&&(ws?(zu="oninput"in document,zu||(Ip=document.createElement("div"),Ip.setAttribute("oninput","return;"),zu=typeof Ip.oninput=="function"),Bu=zu):Bu=!1,Jx=Bu&&(!document.documentMode||9<document.documentMode));var Bu,zu,Ip;function dy(){ql&&(ql.detachEvent("onpropertychange",Kx),ac=ql=null)}function Kx(e){if(e.propertyName==="value"&&Gh(ac)){var t=[];Zx(t,ac,e,og(e)),kx(KA,t)}}function QA(e,t,n){e==="focusin"?(dy(),ql=t,ac=n,ql.attachEvent("onpropertychange",Kx)):e==="focusout"&&dy()}function jA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gh(ac)}function $A(e,t){if(e==="click")return Gh(t)}function tw(e,t){if(e==="input"||e==="change")return Gh(t)}function ew(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ii=typeof Object.is=="function"?Object.is:ew;function oc(e,t){if(ii(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!fm.call(t,s)||!ii(e[s],t[s]))return!1}return!0}function py(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function my(e,t){var n=py(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=py(n)}}function Qx(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qx(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jx(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ph(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ph(e.document)}return t}function hg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var nw=ws&&"documentMode"in document&&11>=document.documentMode,co=null,ym=null,Yl=null,xm=!1;function gy(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xm||co==null||co!==ph(i)||(i=co,"selectionStart"in i&&hg(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Yl&&oc(Yl,i)||(Yl=i,i=Lh(ym,"onSelect"),0<i.length&&(t=new Vh("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=co)))}function $r(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var uo={animationend:$r("Animation","AnimationEnd"),animationiteration:$r("Animation","AnimationIteration"),animationstart:$r("Animation","AnimationStart"),transitionrun:$r("Transition","TransitionRun"),transitionstart:$r("Transition","TransitionStart"),transitioncancel:$r("Transition","TransitionCancel"),transitionend:$r("Transition","TransitionEnd")},Pp={},$x={};ws&&($x=document.createElement("div").style,"AnimationEvent"in window||(delete uo.animationend.animation,delete uo.animationiteration.animation,delete uo.animationstart.animation),"TransitionEvent"in window||delete uo.transitionend.transition);function ga(e){if(Pp[e])return Pp[e];if(!uo[e])return e;var t=uo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $x)return Pp[e]=t[n];return e}var tS=ga("animationend"),eS=ga("animationiteration"),nS=ga("animationstart"),iw=ga("transitionrun"),sw=ga("transitionstart"),rw=ga("transitioncancel"),iS=ga("transitionend"),sS=new Map,Sm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Sm.push("scrollEnd");function zi(e,t){sS.set(e,t),pa(t,[e])}var mh=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},yi=[],ho=0,fg=0;function kh(){for(var e=ho,t=fg=ho=0;t<e;){var n=yi[t];yi[t++]=null;var i=yi[t];yi[t++]=null;var s=yi[t];yi[t++]=null;var r=yi[t];if(yi[t++]=null,i!==null&&s!==null){var a=i.pending;a===null?s.next=s:(s.next=a.next,a.next=s),i.pending=s}r!==0&&rS(n,s,r)}}function Xh(e,t,n,i){yi[ho++]=e,yi[ho++]=t,yi[ho++]=n,yi[ho++]=i,fg|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function dg(e,t,n,i){return Xh(e,t,n,i),gh(e)}function _a(e,t){return Xh(e,null,null,t),gh(e)}function rS(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,r=e.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(s=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,s&&t!==null&&(s=31-ei(n),e=r.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),r):null}function gh(e){if(50<nc)throw nc=0,Gm=null,Error(Z(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var fo={};function aw(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(e,t,n,i){return new aw(e,t,n,i)}function pg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ts(e,t){var n=e.alternate;return n===null?(n=Qn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function aS(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function $u(e,t,n,i,s,r){var a=0;if(i=e,typeof e=="function")pg(e)&&(a=1);else if(typeof e=="string")a=cC(e,n,Ki.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case lm:return e=Qn(31,n,t,s),e.elementType=lm,e.lanes=r,e;case so:return ra(n.children,s,r,t);case Ex:a=8,s|=24;break;case rm:return e=Qn(12,n,t,s|2),e.elementType=rm,e.lanes=r,e;case am:return e=Qn(13,n,t,s),e.elementType=am,e.lanes=r,e;case om:return e=Qn(19,n,t,s),e.elementType=om,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ss:a=10;break t;case Ax:a=9;break t;case tg:a=11;break t;case eg:a=14;break t;case $s:a=16,i=null;break t}a=29,n=Error(Z(130,e===null?"null":typeof e,"")),i=null}return t=Qn(a,n,t,s),t.elementType=e,t.type=i,t.lanes=r,t}function ra(e,t,n,i){return e=Qn(7,e,i,t),e.lanes=n,e}function Bp(e,t,n){return e=Qn(6,e,null,t),e.lanes=n,e}function oS(e){var t=Qn(18,null,null,0);return t.stateNode=e,t}function zp(e,t,n){return t=Qn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var _y=new WeakMap;function Ti(e,t){if(typeof e=="object"&&e!==null){var n=_y.get(e);return n!==void 0?n:(t={value:e,source:t,stack:jv(t)},_y.set(e,t),t)}return{value:e,source:t,stack:jv(t)}}var po=[],mo=0,_h=null,lc=0,Si=[],Mi=0,yr=null,Yi=1,Zi="";function ys(e,t){po[mo++]=lc,po[mo++]=_h,_h=e,lc=t}function lS(e,t,n){Si[Mi++]=Yi,Si[Mi++]=Zi,Si[Mi++]=yr,yr=e;var i=Yi;e=Zi;var s=32-ei(i)-1;i&=~(1<<s),n+=1;var r=32-ei(t)+s;if(30<r){var a=s-s%5;r=(i&(1<<a)-1).toString(32),i>>=a,s-=a,Yi=1<<32-ei(t)+s|n<<s|i,Zi=r+e}else Yi=1<<r|n<<s|i,Zi=e}function mg(e){e.return!==null&&(ys(e,1),lS(e,1,0))}function gg(e){for(;e===_h;)_h=po[--mo],po[mo]=null,lc=po[--mo],po[mo]=null;for(;e===yr;)yr=Si[--Mi],Si[Mi]=null,Zi=Si[--Mi],Si[Mi]=null,Yi=Si[--Mi],Si[Mi]=null}function cS(e,t){Si[Mi++]=Yi,Si[Mi++]=Zi,Si[Mi++]=yr,Yi=t.id,Zi=t.overflow,yr=e}var cn=null,be=null,Jt=!1,hr=null,Ei=!1,Mm=Error(Z(519));function xr(e){var t=Error(Z(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw cc(Ti(t,e)),Mm}function vy(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[ln]=e,t[Pn]=i,n){case"dialog":Xt("cancel",t),Xt("close",t);break;case"iframe":case"object":case"embed":Xt("load",t);break;case"video":case"audio":for(n=0;n<dc.length;n++)Xt(dc[n],t);break;case"source":Xt("error",t);break;case"img":case"image":case"link":Xt("error",t),Xt("load",t);break;case"details":Xt("toggle",t);break;case"input":Xt("invalid",t),Fx(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Xt("invalid",t);break;case"textarea":Xt("invalid",t),Hx(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||WM(t.textContent,n)?(i.popover!=null&&(Xt("beforetoggle",t),Xt("toggle",t)),i.onScroll!=null&&Xt("scroll",t),i.onScrollEnd!=null&&Xt("scrollend",t),i.onClick!=null&&(t.onclick=Ms),t=!0):t=!1,t||xr(e,!0)}function yy(e){for(cn=e.return;cn;)switch(cn.tag){case 5:case 31:case 13:Ei=!1;return;case 27:case 3:Ei=!0;return;default:cn=cn.return}}function to(e){if(e!==cn)return!1;if(!Jt)return yy(e),Jt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Ym(e.type,e.memoizedProps)),n=!n),n&&be&&xr(e),yy(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Z(317));be=ox(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Z(317));be=ox(e)}else t===27?(t=be,Tr(e.type)?(e=Qm,Qm=null,be=e):be=t):be=cn?wi(e.stateNode.nextSibling):null;return!0}function ca(){be=cn=null,Jt=!1}function Fp(){var e=hr;return e!==null&&(Nn===null?Nn=e:Nn.push.apply(Nn,e),hr=null),e}function cc(e){hr===null?hr=[e]:hr.push(e)}var bm=Qi(null),va=null,bs=null;function er(e,t,n){ye(bm,t._currentValue),t._currentValue=n}function Es(e){e._currentValue=bm.current,rn(bm)}function Tm(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Em(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var r=s.dependencies;if(r!==null){var a=s.child;r=r.firstContext;t:for(;r!==null;){var o=r;r=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){r.lanes|=n,o=r.alternate,o!==null&&(o.lanes|=n),Tm(r.return,n,e),i||(a=null);break t}r=o.next}}else if(s.tag===18){if(a=s.return,a===null)throw Error(Z(341));a.lanes|=n,r=a.alternate,r!==null&&(r.lanes|=n),Tm(a,n,e),a=null}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}}function Bo(e,t,n,i){e=null;for(var s=t,r=!1;s!==null;){if(!r){if((s.flags&524288)!==0)r=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var a=s.alternate;if(a===null)throw Error(Z(387));if(a=a.memoizedProps,a!==null){var o=s.type;ii(s.pendingProps.value,a.value)||(e!==null?e.push(o):e=[o])}}else if(s===uh.current){if(a=s.alternate,a===null)throw Error(Z(387));a.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(mc):e=[mc])}s=s.return}e!==null&&Em(t,e,n,i),t.flags|=262144}function vh(e){for(e=e.firstContext;e!==null;){if(!ii(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ua(e){va=e,bs=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function un(e){return uS(va,e)}function Fu(e,t){return va===null&&ua(e),uS(e,t)}function uS(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},bs===null){if(e===null)throw Error(Z(308));bs=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else bs=bs.next=t;return n}var ow=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},lw=Ke.unstable_scheduleCallback,cw=Ke.unstable_NormalPriority,qe={$$typeof:Ss,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _g(){return{controller:new ow,data:new Map,refCount:0}}function Tc(e){e.refCount--,e.refCount===0&&lw(cw,function(){e.controller.abort()})}var Zl=null,Am=0,wo=0,xo=null;function uw(e,t){if(Zl===null){var n=Zl=[];Am=0,wo=Gg(),xo={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Am++,t.then(xy,xy),t}function xy(){if(--Am===0&&Zl!==null){xo!==null&&(xo.status="fulfilled");var e=Zl;Zl=null,wo=0,xo=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function hw(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var Sy=Lt.S;Lt.S=function(e,t){TM=$n(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&uw(e,t),Sy!==null&&Sy(e,t)};var aa=Qi(null);function vg(){var e=aa.current;return e!==null?e:me.pooledCache}function th(e,t){t===null?ye(aa,aa.current):ye(aa,t.pool)}function hS(){var e=vg();return e===null?null:{parent:qe._currentValue,pool:e}}var zo=Error(Z(460)),yg=Error(Z(474)),Wh=Error(Z(542)),yh={then:function(){}};function My(e){return e=e.status,e==="fulfilled"||e==="rejected"}function fS(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ms,Ms),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ty(e),e;default:if(typeof t.status=="string")t.then(Ms,Ms);else{if(e=me,e!==null&&100<e.shellSuspendCounter)throw Error(Z(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ty(e),e}throw oa=t,zo}}function na(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(oa=n,zo):n}}var oa=null;function by(){if(oa===null)throw Error(Z(459));var e=oa;return oa=null,e}function Ty(e){if(e===zo||e===Wh)throw Error(Z(483))}var So=null,uc=0;function Vu(e){var t=uc;return uc+=1,So===null&&(So=[]),fS(So,e,t)}function Il(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Hu(e,t){throw t.$$typeof===QE?Error(Z(525)):(e=Object.prototype.toString.call(t),Error(Z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function dS(e){function t(d,v){if(e){var y=d.deletions;y===null?(d.deletions=[v],d.flags|=16):y.push(v)}}function n(d,v){if(!e)return null;for(;v!==null;)t(d,v),v=v.sibling;return null}function i(d){for(var v=new Map;d!==null;)d.key!==null?v.set(d.key,d):v.set(d.index,d),d=d.sibling;return v}function s(d,v){return d=Ts(d,v),d.index=0,d.sibling=null,d}function r(d,v,y){return d.index=y,e?(y=d.alternate,y!==null?(y=y.index,y<v?(d.flags|=67108866,v):y):(d.flags|=67108866,v)):(d.flags|=1048576,v)}function a(d){return e&&d.alternate===null&&(d.flags|=67108866),d}function o(d,v,y,x){return v===null||v.tag!==6?(v=Bp(y,d.mode,x),v.return=d,v):(v=s(v,y),v.return=d,v)}function l(d,v,y,x){var T=y.type;return T===so?u(d,v,y.props.children,x,y.key):v!==null&&(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===$s&&na(T)===v.type)?(v=s(v,y.props),Il(v,y),v.return=d,v):(v=$u(y.type,y.key,y.props,null,d.mode,x),Il(v,y),v.return=d,v)}function c(d,v,y,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=zp(y,d.mode,x),v.return=d,v):(v=s(v,y.children||[]),v.return=d,v)}function u(d,v,y,x,T){return v===null||v.tag!==7?(v=ra(y,d.mode,x,T),v.return=d,v):(v=s(v,y),v.return=d,v)}function f(d,v,y){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Bp(""+v,d.mode,y),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Uu:return y=$u(v.type,v.key,v.props,null,d.mode,y),Il(y,v),y.return=d,y;case Vl:return v=zp(v,d.mode,y),v.return=d,v;case $s:return v=na(v),f(d,v,y)}if(Hl(v)||Ol(v))return v=ra(v,d.mode,y,null),v.return=d,v;if(typeof v.then=="function")return f(d,Vu(v),y);if(v.$$typeof===Ss)return f(d,Fu(d,v),y);Hu(d,v)}return null}function h(d,v,y,x){var T=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return T!==null?null:o(d,v,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Uu:return y.key===T?l(d,v,y,x):null;case Vl:return y.key===T?c(d,v,y,x):null;case $s:return y=na(y),h(d,v,y,x)}if(Hl(y)||Ol(y))return T!==null?null:u(d,v,y,x,null);if(typeof y.then=="function")return h(d,v,Vu(y),x);if(y.$$typeof===Ss)return h(d,v,Fu(d,y),x);Hu(d,y)}return null}function p(d,v,y,x,T){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return d=d.get(y)||null,o(v,d,""+x,T);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Uu:return d=d.get(x.key===null?y:x.key)||null,l(v,d,x,T);case Vl:return d=d.get(x.key===null?y:x.key)||null,c(v,d,x,T);case $s:return x=na(x),p(d,v,y,x,T)}if(Hl(x)||Ol(x))return d=d.get(y)||null,u(v,d,x,T,null);if(typeof x.then=="function")return p(d,v,y,Vu(x),T);if(x.$$typeof===Ss)return p(d,v,y,Fu(v,x),T);Hu(v,x)}return null}function _(d,v,y,x){for(var T=null,w=null,E=v,R=v=0,S=null;E!==null&&R<y.length;R++){E.index>R?(S=E,E=null):S=E.sibling;var b=h(d,E,y[R],x);if(b===null){E===null&&(E=S);break}e&&E&&b.alternate===null&&t(d,E),v=r(b,v,R),w===null?T=b:w.sibling=b,w=b,E=S}if(R===y.length)return n(d,E),Jt&&ys(d,R),T;if(E===null){for(;R<y.length;R++)E=f(d,y[R],x),E!==null&&(v=r(E,v,R),w===null?T=E:w.sibling=E,w=E);return Jt&&ys(d,R),T}for(E=i(E);R<y.length;R++)S=p(E,d,R,y[R],x),S!==null&&(e&&S.alternate!==null&&E.delete(S.key===null?R:S.key),v=r(S,v,R),w===null?T=S:w.sibling=S,w=S);return e&&E.forEach(function(U){return t(d,U)}),Jt&&ys(d,R),T}function g(d,v,y,x){if(y==null)throw Error(Z(151));for(var T=null,w=null,E=v,R=v=0,S=null,b=y.next();E!==null&&!b.done;R++,b=y.next()){E.index>R?(S=E,E=null):S=E.sibling;var U=h(d,E,b.value,x);if(U===null){E===null&&(E=S);break}e&&E&&U.alternate===null&&t(d,E),v=r(U,v,R),w===null?T=U:w.sibling=U,w=U,E=S}if(b.done)return n(d,E),Jt&&ys(d,R),T;if(E===null){for(;!b.done;R++,b=y.next())b=f(d,b.value,x),b!==null&&(v=r(b,v,R),w===null?T=b:w.sibling=b,w=b);return Jt&&ys(d,R),T}for(E=i(E);!b.done;R++,b=y.next())b=p(E,d,R,b.value,x),b!==null&&(e&&b.alternate!==null&&E.delete(b.key===null?R:b.key),v=r(b,v,R),w===null?T=b:w.sibling=b,w=b);return e&&E.forEach(function(P){return t(d,P)}),Jt&&ys(d,R),T}function m(d,v,y,x){if(typeof y=="object"&&y!==null&&y.type===so&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Uu:t:{for(var T=y.key;v!==null;){if(v.key===T){if(T=y.type,T===so){if(v.tag===7){n(d,v.sibling),x=s(v,y.props.children),x.return=d,d=x;break t}}else if(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===$s&&na(T)===v.type){n(d,v.sibling),x=s(v,y.props),Il(x,y),x.return=d,d=x;break t}n(d,v);break}else t(d,v);v=v.sibling}y.type===so?(x=ra(y.props.children,d.mode,x,y.key),x.return=d,d=x):(x=$u(y.type,y.key,y.props,null,d.mode,x),Il(x,y),x.return=d,d=x)}return a(d);case Vl:t:{for(T=y.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){n(d,v.sibling),x=s(v,y.children||[]),x.return=d,d=x;break t}else{n(d,v);break}else t(d,v);v=v.sibling}x=zp(y,d.mode,x),x.return=d,d=x}return a(d);case $s:return y=na(y),m(d,v,y,x)}if(Hl(y))return _(d,v,y,x);if(Ol(y)){if(T=Ol(y),typeof T!="function")throw Error(Z(150));return y=T.call(y),g(d,v,y,x)}if(typeof y.then=="function")return m(d,v,Vu(y),x);if(y.$$typeof===Ss)return m(d,v,Fu(d,y),x);Hu(d,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,v!==null&&v.tag===6?(n(d,v.sibling),x=s(v,y),x.return=d,d=x):(n(d,v),x=Bp(y,d.mode,x),x.return=d,d=x),a(d)):n(d,v)}return function(d,v,y,x){try{uc=0;var T=m(d,v,y,x);return So=null,T}catch(E){if(E===zo||E===Wh)throw E;var w=Qn(29,E,null,d.mode);return w.lanes=x,w.return=d,w}}}var ha=dS(!0),pS=dS(!1),tr=!1;function xg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function fr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function dr(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ne&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=gh(e),rS(e,null,n),t}return Xh(e,i,t,n),gh(e)}function Jl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Lx(e,n)}}function Vp(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var a={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?s=r=a:r=r.next=a,n=n.next}while(n!==null);r===null?s=r=t:r=r.next=t}else s=r=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Cm=!1;function Kl(){if(Cm){var e=xo;if(e!==null)throw e}}function Ql(e,t,n,i){Cm=!1;var s=e.updateQueue;tr=!1;var r=s.firstBaseUpdate,a=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?r=c:a.next=c,a=l;var u=e.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==a&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(r!==null){var f=s.baseState;a=0,u=c=l=null,o=r;do{var h=o.lane&-536870913,p=h!==o.lane;if(p?(Yt&h)===h:(i&h)===h){h!==0&&h===wo&&(Cm=!0),u!==null&&(u=u.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var _=e,g=o;h=t;var m=n;switch(g.tag){case 1:if(_=g.payload,typeof _=="function"){f=_.call(m,f,h);break t}f=_;break t;case 3:_.flags=_.flags&-65537|128;case 0:if(_=g.payload,h=typeof _=="function"?_.call(m,f,h):_,h==null)break t;f=Te({},f,h);break t;case 2:tr=!0}}h=o.callback,h!==null&&(e.flags|=64,p&&(e.flags|=8192),p=s.callbacks,p===null?s.callbacks=[h]:p.push(h))}else p={lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,a|=h;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;p=o,o=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);u===null&&(l=f),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=u,r===null&&(s.shared.lanes=0),Mr|=a,e.lanes=a,e.memoizedState=f}}function mS(e,t){if(typeof e!="function")throw Error(Z(191,e));e.call(t)}function gS(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)mS(n[e],t)}var Co=Qi(null),xh=Qi(0);function Ey(e,t){e=Us,ye(xh,e),ye(Co,t),Us=e|t.baseLanes}function Rm(){ye(xh,Us),ye(Co,Co.current)}function Sg(){Us=xh.current,rn(Co),rn(xh)}var si=Qi(null),Ai=null;function nr(e){var t=e.alternate;ye(He,He.current&1),ye(si,e),Ai===null&&(t===null||Co.current!==null||t.memoizedState!==null)&&(Ai=e)}function Dm(e){ye(He,He.current),ye(si,e),Ai===null&&(Ai=e)}function _S(e){e.tag===22?(ye(He,He.current),ye(si,e),Ai===null&&(Ai=e)):ir(e)}function ir(){ye(He,He.current),ye(si,si.current)}function Kn(e){rn(si),Ai===e&&(Ai=null),rn(He)}var He=Qi(0);function Sh(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Jm(n)||Km(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Cs=0,Ft=null,he=null,Xe=null,Mh=!1,Mo=!1,fa=!1,bh=0,hc=0,bo=null,fw=0;function Ie(){throw Error(Z(321))}function Mg(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ii(e[n],t[n]))return!1;return!0}function bg(e,t,n,i,s,r){return Cs=r,Ft=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Lt.H=e===null||e.memoizedState===null?ZS:Ng,fa=!1,r=n(i,s),fa=!1,Mo&&(r=yS(t,n,i,s)),vS(e),r}function vS(e){Lt.H=fc;var t=he!==null&&he.next!==null;if(Cs=0,Xe=he=Ft=null,Mh=!1,hc=0,bo=null,t)throw Error(Z(300));e===null||Ye||(e=e.dependencies,e!==null&&vh(e)&&(Ye=!0))}function yS(e,t,n,i){Ft=e;var s=0;do{if(Mo&&(bo=null),hc=0,Mo=!1,25<=s)throw Error(Z(301));if(s+=1,Xe=he=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}Lt.H=JS,r=t(n,i)}while(Mo);return r}function dw(){var e=Lt.H,t=e.useState()[0];return t=typeof t.then=="function"?Ec(t):t,e=e.useState()[0],(he!==null?he.memoizedState:null)!==e&&(Ft.flags|=1024),t}function Tg(){var e=bh!==0;return bh=0,e}function Eg(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ag(e){if(Mh){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Mh=!1}Cs=0,Xe=he=Ft=null,Mo=!1,hc=bh=0,bo=null}function An(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?Ft.memoizedState=Xe=e:Xe=Xe.next=e,Xe}function Ge(){if(he===null){var e=Ft.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=Xe===null?Ft.memoizedState:Xe.next;if(t!==null)Xe=t,he=e;else{if(e===null)throw Ft.alternate===null?Error(Z(467)):Error(Z(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},Xe===null?Ft.memoizedState=Xe=e:Xe=Xe.next=e}return Xe}function qh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ec(e){var t=hc;return hc+=1,bo===null&&(bo=[]),e=fS(bo,e,t),t=Ft,(Xe===null?t.memoizedState:Xe.next)===null&&(t=t.alternate,Lt.H=t===null||t.memoizedState===null?ZS:Ng),e}function Yh(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ec(e);if(e.$$typeof===Ss)return un(e)}throw Error(Z(438,String(e)))}function wg(e){var t=null,n=Ft.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Ft.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=qh(),Ft.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=jE;return t.index++,n}function Rs(e,t){return typeof t=="function"?t(e):t}function eh(e){var t=Ge();return Cg(t,he,e)}function Cg(e,t,n){var i=e.queue;if(i===null)throw Error(Z(311));i.lastRenderedReducer=n;var s=e.baseQueue,r=i.pending;if(r!==null){if(s!==null){var a=s.next;s.next=r.next,r.next=a}t.baseQueue=s=r,i.pending=null}if(r=e.baseState,s===null)e.memoizedState=r;else{t=s.next;var o=a=null,l=null,c=t,u=!1;do{var f=c.lane&-536870913;if(f!==c.lane?(Yt&f)===f:(Cs&f)===f){var h=c.revertLane;if(h===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),f===wo&&(u=!0);else if((Cs&h)===h){c=c.next,h===wo&&(u=!0);continue}else f={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,a=r):l=l.next=f,Ft.lanes|=h,Mr|=h;f=c.action,fa&&n(r,f),r=c.hasEagerState?c.eagerState:n(r,f)}else h={lane:f,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=h,a=r):l=l.next=h,Ft.lanes|=f,Mr|=f;c=c.next}while(c!==null&&c!==t);if(l===null?a=r:l.next=o,!ii(r,e.memoizedState)&&(Ye=!0,u&&(n=xo,n!==null)))throw n;e.memoizedState=r,e.baseState=a,e.baseQueue=l,i.lastRenderedState=r}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Hp(e){var t=Ge(),n=t.queue;if(n===null)throw Error(Z(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,r=t.memoizedState;if(s!==null){n.pending=null;var a=s=s.next;do r=e(r,a.action),a=a.next;while(a!==s);ii(r,t.memoizedState)||(Ye=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,i]}function xS(e,t,n){var i=Ft,s=Ge(),r=Jt;if(r){if(n===void 0)throw Error(Z(407));n=n()}else n=t();var a=!ii((he||s).memoizedState,n);if(a&&(s.memoizedState=n,Ye=!0),s=s.queue,Rg(bS.bind(null,i,s,e),[e]),s.getSnapshot!==t||a||Xe!==null&&Xe.memoizedState.tag&1){if(i.flags|=2048,Ro(9,{destroy:void 0},MS.bind(null,i,s,n,t),null),me===null)throw Error(Z(349));r||(Cs&127)!==0||SS(i,t,n)}return n}function SS(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ft.updateQueue,t===null?(t=qh(),Ft.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function MS(e,t,n,i){t.value=n,t.getSnapshot=i,TS(t)&&ES(e)}function bS(e,t,n){return n(function(){TS(t)&&ES(e)})}function TS(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ii(e,n)}catch{return!0}}function ES(e){var t=_a(e,2);t!==null&&In(t,e,2)}function Um(e){var t=An();if(typeof e=="function"){var n=e;if(e=n(),fa){rr(!0);try{n()}finally{rr(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rs,lastRenderedState:e},t}function AS(e,t,n,i){return e.baseState=n,Cg(e,he,typeof i=="function"?i:Rs)}function pw(e,t,n,i,s){if(Jh(e))throw Error(Z(485));if(e=t.action,e!==null){var r={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(a){r.listeners.push(a)}};Lt.T!==null?n(!0):r.isTransition=!1,i(r),n=t.pending,n===null?(r.next=t.pending=r,wS(t,r)):(r.next=n.next,t.pending=n.next=r)}}function wS(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var r=Lt.T,a={};Lt.T=a;try{var o=n(s,i),l=Lt.S;l!==null&&l(a,o),Ay(e,t,o)}catch(c){Lm(e,t,c)}finally{r!==null&&a.types!==null&&(r.types=a.types),Lt.T=r}}else try{r=n(s,i),Ay(e,t,r)}catch(c){Lm(e,t,c)}}function Ay(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){wy(e,t,i)},function(i){return Lm(e,t,i)}):wy(e,t,n)}function wy(e,t,n){t.status="fulfilled",t.value=n,CS(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,wS(e,n)))}function Lm(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,CS(t),t=t.next;while(t!==i)}e.action=null}function CS(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function RS(e,t){return t}function Cy(e,t){if(Jt){var n=me.formState;if(n!==null){t:{var i=Ft;if(Jt){if(be){e:{for(var s=be,r=Ei;s.nodeType!==8;){if(!r){s=null;break e}if(s=wi(s.nextSibling),s===null){s=null;break e}}r=s.data,s=r==="F!"||r==="F"?s:null}if(s){be=wi(s.nextSibling),i=s.data==="F!";break t}}xr(i)}i=!1}i&&(t=n[0])}}return n=An(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:RS,lastRenderedState:t},n.queue=i,n=WS.bind(null,Ft,i),i.dispatch=n,i=Um(!1),r=Og.bind(null,Ft,!1,i.queue),i=An(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=pw.bind(null,Ft,s,r,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function Ry(e){var t=Ge();return DS(t,he,e)}function DS(e,t,n){if(t=Cg(e,t,RS)[0],e=eh(Rs)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Ec(t)}catch(a){throw a===zo?Wh:a}else i=t;t=Ge();var s=t.queue,r=s.dispatch;return n!==t.memoizedState&&(Ft.flags|=2048,Ro(9,{destroy:void 0},mw.bind(null,s,n),null)),[i,r,e]}function mw(e,t){e.action=t}function Dy(e){var t=Ge(),n=he;if(n!==null)return DS(t,n,e);Ge(),t=t.memoizedState,n=Ge();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Ro(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Ft.updateQueue,t===null&&(t=qh(),Ft.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function US(){return Ge().memoizedState}function nh(e,t,n,i){var s=An();Ft.flags|=e,s.memoizedState=Ro(1|t,{destroy:void 0},n,i===void 0?null:i)}function Zh(e,t,n,i){var s=Ge();i=i===void 0?null:i;var r=s.memoizedState.inst;he!==null&&i!==null&&Mg(i,he.memoizedState.deps)?s.memoizedState=Ro(t,r,n,i):(Ft.flags|=e,s.memoizedState=Ro(1|t,r,n,i))}function Uy(e,t){nh(8390656,8,e,t)}function Rg(e,t){Zh(2048,8,e,t)}function gw(e){Ft.flags|=4;var t=Ft.updateQueue;if(t===null)t=qh(),Ft.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function LS(e){var t=Ge().memoizedState;return gw({ref:t,nextImpl:e}),function(){if((ne&2)!==0)throw Error(Z(440));return t.impl.apply(void 0,arguments)}}function OS(e,t){return Zh(4,2,e,t)}function NS(e,t){return Zh(4,4,e,t)}function IS(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function PS(e,t,n){n=n!=null?n.concat([e]):null,Zh(4,4,IS.bind(null,t,e),n)}function Dg(){}function BS(e,t){var n=Ge();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Mg(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function zS(e,t){var n=Ge();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Mg(t,i[1]))return i[0];if(i=e(),fa){rr(!0);try{e()}finally{rr(!1)}}return n.memoizedState=[i,t],i}function Ug(e,t,n){return n===void 0||(Cs&1073741824)!==0&&(Yt&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=AM(),Ft.lanes|=e,Mr|=e,n)}function FS(e,t,n,i){return ii(n,t)?n:Co.current!==null?(e=Ug(e,n,i),ii(e,t)||(Ye=!0),e):(Cs&42)===0||(Cs&1073741824)!==0&&(Yt&261930)===0?(Ye=!0,e.memoizedState=n):(e=AM(),Ft.lanes|=e,Mr|=e,t)}function VS(e,t,n,i,s){var r=ie.p;ie.p=r!==0&&8>r?r:8;var a=Lt.T,o={};Lt.T=o,Og(e,!1,t,n);try{var l=s(),c=Lt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=hw(l,i);jl(e,t,u,ni(e))}else jl(e,t,i,ni(e))}catch(f){jl(e,t,{then:function(){},status:"rejected",reason:f},ni())}finally{ie.p=r,a!==null&&o.types!==null&&(a.types=o.types),Lt.T=a}}function _w(){}function Om(e,t,n,i){if(e.tag!==5)throw Error(Z(476));var s=HS(e).queue;VS(e,s,t,sa,n===null?_w:function(){return GS(e),n(i)})}function HS(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:sa,baseState:sa,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rs,lastRenderedState:sa},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rs,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function GS(e){var t=HS(e);t.next===null&&(t=e.alternate.memoizedState),jl(e,t.next.queue,{},ni())}function Lg(){return un(mc)}function kS(){return Ge().memoizedState}function XS(){return Ge().memoizedState}function vw(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=ni();e=fr(n);var i=dr(t,e,n);i!==null&&(In(i,t,n),Jl(i,t,n)),t={cache:_g()},e.payload=t;return}t=t.return}}function yw(e,t,n){var i=ni();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Jh(e)?qS(t,n):(n=dg(e,t,n,i),n!==null&&(In(n,e,i),YS(n,t,i)))}function WS(e,t,n){var i=ni();jl(e,t,n,i)}function jl(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Jh(e))qS(t,s);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var a=t.lastRenderedState,o=r(a,n);if(s.hasEagerState=!0,s.eagerState=o,ii(o,a))return Xh(e,t,s,0),me===null&&kh(),!1}catch{}if(n=dg(e,t,s,i),n!==null)return In(n,e,i),YS(n,t,i),!0}return!1}function Og(e,t,n,i){if(i={lane:2,revertLane:Gg(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Jh(e)){if(t)throw Error(Z(479))}else t=dg(e,n,i,2),t!==null&&In(t,e,2)}function Jh(e){var t=e.alternate;return e===Ft||t!==null&&t===Ft}function qS(e,t){Mo=Mh=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function YS(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Lx(e,n)}}var fc={readContext:un,use:Yh,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useLayoutEffect:Ie,useInsertionEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useSyncExternalStore:Ie,useId:Ie,useHostTransitionStatus:Ie,useFormState:Ie,useActionState:Ie,useOptimistic:Ie,useMemoCache:Ie,useCacheRefresh:Ie};fc.useEffectEvent=Ie;var ZS={readContext:un,use:Yh,useCallback:function(e,t){return An().memoizedState=[e,t===void 0?null:t],e},useContext:un,useEffect:Uy,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,nh(4194308,4,IS.bind(null,t,e),n)},useLayoutEffect:function(e,t){return nh(4194308,4,e,t)},useInsertionEffect:function(e,t){nh(4,2,e,t)},useMemo:function(e,t){var n=An();t=t===void 0?null:t;var i=e();if(fa){rr(!0);try{e()}finally{rr(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=An();if(n!==void 0){var s=n(t);if(fa){rr(!0);try{n(t)}finally{rr(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=yw.bind(null,Ft,e),[i.memoizedState,e]},useRef:function(e){var t=An();return e={current:e},t.memoizedState=e},useState:function(e){e=Um(e);var t=e.queue,n=WS.bind(null,Ft,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Dg,useDeferredValue:function(e,t){var n=An();return Ug(n,e,t)},useTransition:function(){var e=Um(!1);return e=VS.bind(null,Ft,e.queue,!0,!1),An().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Ft,s=An();if(Jt){if(n===void 0)throw Error(Z(407));n=n()}else{if(n=t(),me===null)throw Error(Z(349));(Yt&127)!==0||SS(i,t,n)}s.memoizedState=n;var r={value:n,getSnapshot:t};return s.queue=r,Uy(bS.bind(null,i,r,e),[e]),i.flags|=2048,Ro(9,{destroy:void 0},MS.bind(null,i,r,n,t),null),n},useId:function(){var e=An(),t=me.identifierPrefix;if(Jt){var n=Zi,i=Yi;n=(i&~(1<<32-ei(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=bh++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=fw++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Lg,useFormState:Cy,useActionState:Cy,useOptimistic:function(e){var t=An();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Og.bind(null,Ft,!0,n),n.dispatch=t,[e,t]},useMemoCache:wg,useCacheRefresh:function(){return An().memoizedState=vw.bind(null,Ft)},useEffectEvent:function(e){var t=An(),n={impl:e};return t.memoizedState=n,function(){if((ne&2)!==0)throw Error(Z(440));return n.impl.apply(void 0,arguments)}}},Ng={readContext:un,use:Yh,useCallback:BS,useContext:un,useEffect:Rg,useImperativeHandle:PS,useInsertionEffect:OS,useLayoutEffect:NS,useMemo:zS,useReducer:eh,useRef:US,useState:function(){return eh(Rs)},useDebugValue:Dg,useDeferredValue:function(e,t){var n=Ge();return FS(n,he.memoizedState,e,t)},useTransition:function(){var e=eh(Rs)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:Ec(e),t]},useSyncExternalStore:xS,useId:kS,useHostTransitionStatus:Lg,useFormState:Ry,useActionState:Ry,useOptimistic:function(e,t){var n=Ge();return AS(n,he,e,t)},useMemoCache:wg,useCacheRefresh:XS};Ng.useEffectEvent=LS;var JS={readContext:un,use:Yh,useCallback:BS,useContext:un,useEffect:Rg,useImperativeHandle:PS,useInsertionEffect:OS,useLayoutEffect:NS,useMemo:zS,useReducer:Hp,useRef:US,useState:function(){return Hp(Rs)},useDebugValue:Dg,useDeferredValue:function(e,t){var n=Ge();return he===null?Ug(n,e,t):FS(n,he.memoizedState,e,t)},useTransition:function(){var e=Hp(Rs)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:Ec(e),t]},useSyncExternalStore:xS,useId:kS,useHostTransitionStatus:Lg,useFormState:Dy,useActionState:Dy,useOptimistic:function(e,t){var n=Ge();return he!==null?AS(n,he,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:wg,useCacheRefresh:XS};JS.useEffectEvent=LS;function Gp(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Te({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Nm={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=ni(),s=fr(i);s.payload=t,n!=null&&(s.callback=n),t=dr(e,s,i),t!==null&&(In(t,e,i),Jl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=ni(),s=fr(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=dr(e,s,i),t!==null&&(In(t,e,i),Jl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ni(),i=fr(n);i.tag=2,t!=null&&(i.callback=t),t=dr(e,i,n),t!==null&&(In(t,e,n),Jl(t,e,n))}};function Ly(e,t,n,i,s,r,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,a):t.prototype&&t.prototype.isPureReactComponent?!oc(n,i)||!oc(s,r):!0}function Oy(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Nm.enqueueReplaceState(t,t.state,null)}function da(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Te({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function KS(e){mh(e)}function QS(e){console.error(e)}function jS(e){mh(e)}function Th(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Ny(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Im(e,t,n){return n=fr(n),n.tag=3,n.payload={element:null},n.callback=function(){Th(e,t)},n}function $S(e){return e=fr(e),e.tag=3,e}function tM(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var r=i.value;e.payload=function(){return s(r)},e.callback=function(){Ny(t,n,i)}}var a=n.stateNode;a!==null&&typeof a.componentDidCatch=="function"&&(e.callback=function(){Ny(t,n,i),typeof s!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function xw(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Bo(t,n,s,!0),n=si.current,n!==null){switch(n.tag){case 31:case 13:return Ai===null?Rh():n.alternate===null&&Pe===0&&(Pe=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===yh?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),$p(e,i,s)),!1;case 22:return n.flags|=65536,i===yh?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),$p(e,i,s)),!1}throw Error(Z(435,n.tag))}return $p(e,i,s),Rh(),!1}if(Jt)return t=si.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==Mm&&(e=Error(Z(422),{cause:i}),cc(Ti(e,n)))):(i!==Mm&&(t=Error(Z(423),{cause:i}),cc(Ti(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=Ti(i,n),s=Im(e.stateNode,i,s),Vp(e,s),Pe!==4&&(Pe=2)),!1;var r=Error(Z(520),{cause:i});if(r=Ti(r,n),ec===null?ec=[r]:ec.push(r),Pe!==4&&(Pe=2),t===null)return!0;i=Ti(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=Im(n.stateNode,i,e),Vp(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(pr===null||!pr.has(r))))return n.flags|=65536,s&=-s,n.lanes|=s,s=$S(s),tM(s,e,n,i),Vp(n,s),!1}n=n.return}while(n!==null);return!1}var Ig=Error(Z(461)),Ye=!1;function on(e,t,n,i){t.child=e===null?pS(t,null,n,i):ha(t,e.child,n,i)}function Iy(e,t,n,i,s){n=n.render;var r=t.ref;if("ref"in i){var a={};for(var o in i)o!=="ref"&&(a[o]=i[o])}else a=i;return ua(t),i=bg(e,t,n,a,r,s),o=Tg(),e!==null&&!Ye?(Eg(e,t,s),Ds(e,t,s)):(Jt&&o&&mg(t),t.flags|=1,on(e,t,i,s),t.child)}function Py(e,t,n,i,s){if(e===null){var r=n.type;return typeof r=="function"&&!pg(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,eM(e,t,r,i,s)):(e=$u(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Pg(e,s)){var a=r.memoizedProps;if(n=n.compare,n=n!==null?n:oc,n(a,i)&&e.ref===t.ref)return Ds(e,t,s)}return t.flags|=1,e=Ts(r,i),e.ref=t.ref,e.return=t,t.child=e}function eM(e,t,n,i,s){if(e!==null){var r=e.memoizedProps;if(oc(r,i)&&e.ref===t.ref)if(Ye=!1,t.pendingProps=i=r,Pg(e,s))(e.flags&131072)!==0&&(Ye=!0);else return t.lanes=e.lanes,Ds(e,t,s)}return Pm(e,t,n,i,s)}function nM(e,t,n,i){var s=i.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~r}else i=0,t.child=null;return By(e,t,r,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&th(t,r!==null?r.cachePool:null),r!==null?Ey(t,r):Rm(),_S(t);else return i=t.lanes=536870912,By(e,t,r!==null?r.baseLanes|n:n,n,i)}else r!==null?(th(t,r.cachePool),Ey(t,r),ir(t),t.memoizedState=null):(e!==null&&th(t,null),Rm(),ir(t));return on(e,t,s,n),t.child}function kl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function By(e,t,n,i,s){var r=vg();return r=r===null?null:{parent:qe._currentValue,pool:r},t.memoizedState={baseLanes:n,cachePool:r},e!==null&&th(t,null),Rm(),_S(t),e!==null&&Bo(e,t,i,!0),t.childLanes=s,null}function ih(e,t){return t=Eh({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function zy(e,t,n){return ha(t,e.child,null,n),e=ih(t,t.pendingProps),e.flags|=2,Kn(t),t.memoizedState=null,e}function Sw(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Jt){if(i.mode==="hidden")return e=ih(t,i),t.lanes=536870912,kl(null,e);if(Dm(t),(e=be)?(e=ZM(e,Ei),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:yr!==null?{id:Yi,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},n=oS(e),n.return=t,t.child=n,cn=t,be=null)):e=null,e===null)throw xr(t);return t.lanes=536870912,null}return ih(t,i)}var r=e.memoizedState;if(r!==null){var a=r.dehydrated;if(Dm(t),s)if(t.flags&256)t.flags&=-257,t=zy(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(Z(558));else if(Ye||Bo(e,t,n,!1),s=(n&e.childLanes)!==0,Ye||s){if(i=me,i!==null&&(a=Ox(i,n),a!==0&&a!==r.retryLane))throw r.retryLane=a,_a(e,a),In(i,e,a),Ig;Rh(),t=zy(e,t,n)}else e=r.treeContext,be=wi(a.nextSibling),cn=t,Jt=!0,hr=null,Ei=!1,e!==null&&cS(t,e),t=ih(t,i),t.flags|=4096;return t}return e=Ts(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function sh(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(Z(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Pm(e,t,n,i,s){return ua(t),n=bg(e,t,n,i,void 0,s),i=Tg(),e!==null&&!Ye?(Eg(e,t,s),Ds(e,t,s)):(Jt&&i&&mg(t),t.flags|=1,on(e,t,n,s),t.child)}function Fy(e,t,n,i,s,r){return ua(t),t.updateQueue=null,n=yS(t,i,n,s),vS(e),i=Tg(),e!==null&&!Ye?(Eg(e,t,r),Ds(e,t,r)):(Jt&&i&&mg(t),t.flags|=1,on(e,t,n,r),t.child)}function Vy(e,t,n,i,s){if(ua(t),t.stateNode===null){var r=fo,a=n.contextType;typeof a=="object"&&a!==null&&(r=un(a)),r=new n(i,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Nm,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=i,r.state=t.memoizedState,r.refs={},xg(t),a=n.contextType,r.context=typeof a=="object"&&a!==null?un(a):fo,r.state=t.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(Gp(t,n,a,i),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(a=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),a!==r.state&&Nm.enqueueReplaceState(r,r.state,null),Ql(t,i,r,s),Kl(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){r=t.stateNode;var o=t.memoizedProps,l=da(n,o);r.props=l;var c=r.context,u=n.contextType;a=fo,typeof u=="object"&&u!==null&&(a=un(u));var f=n.getDerivedStateFromProps;u=typeof f=="function"||typeof r.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,u||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o||c!==a)&&Oy(t,r,i,a),tr=!1;var h=t.memoizedState;r.state=h,Ql(t,i,r,s),Kl(),c=t.memoizedState,o||h!==c||tr?(typeof f=="function"&&(Gp(t,n,f,i),c=t.memoizedState),(l=tr||Ly(t,n,l,i,h,c,a))?(u||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),r.props=i,r.state=c,r.context=a,i=l):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,wm(e,t),a=t.memoizedProps,u=da(n,a),r.props=u,f=t.pendingProps,h=r.context,c=n.contextType,l=fo,typeof c=="object"&&c!==null&&(l=un(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Oy(t,r,i,l),tr=!1,h=t.memoizedState,r.state=h,Ql(t,i,r,s),Kl();var p=t.memoizedState;a!==f||h!==p||tr||e!==null&&e.dependencies!==null&&vh(e.dependencies)?(typeof o=="function"&&(Gp(t,n,o,i),p=t.memoizedState),(u=tr||Ly(t,n,u,i,h,p,l)||e!==null&&e.dependencies!==null&&vh(e.dependencies))?(c||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,p,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,p,l)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),r.props=i,r.state=p,r.context=l,i=u):(typeof r.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),i=!1)}return r=i,sh(e,t),i=(t.flags&128)!==0,r||i?(r=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&i?(t.child=ha(t,e.child,null,s),t.child=ha(t,null,n,s)):on(e,t,n,s),t.memoizedState=r.state,e=t.child):e=Ds(e,t,s),e}function Hy(e,t,n,i){return ca(),t.flags|=256,on(e,t,n,i),t.child}var kp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xp(e){return{baseLanes:e,cachePool:hS()}}function Wp(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=jn),e}function iM(e,t,n){var i=t.pendingProps,s=!1,r=(t.flags&128)!==0,a;if((a=r)||(a=e!==null&&e.memoizedState===null?!1:(He.current&2)!==0),a&&(s=!0,t.flags&=-129),a=(t.flags&32)!==0,t.flags&=-33,e===null){if(Jt){if(s?nr(t):ir(t),(e=be)?(e=ZM(e,Ei),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:yr!==null?{id:Yi,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},n=oS(e),n.return=t,t.child=n,cn=t,be=null)):e=null,e===null)throw xr(t);return Km(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,s?(ir(t),s=t.mode,o=Eh({mode:"hidden",children:o},s),i=ra(i,s,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=Xp(n),i.childLanes=Wp(e,a,n),t.memoizedState=kp,kl(null,i)):(nr(t),Bm(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(r)t.flags&256?(nr(t),t.flags&=-257,t=qp(e,t,n)):t.memoizedState!==null?(ir(t),t.child=e.child,t.flags|=128,t=null):(ir(t),o=i.fallback,s=t.mode,i=Eh({mode:"visible",children:i.children},s),o=ra(o,s,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,ha(t,e.child,null,n),i=t.child,i.memoizedState=Xp(n),i.childLanes=Wp(e,a,n),t.memoizedState=kp,t=kl(null,i));else if(nr(t),Km(o)){if(a=o.nextSibling&&o.nextSibling.dataset,a)var c=a.dgst;a=c,i=Error(Z(419)),i.stack="",i.digest=a,cc({value:i,source:null,stack:null}),t=qp(e,t,n)}else if(Ye||Bo(e,t,n,!1),a=(n&e.childLanes)!==0,Ye||a){if(a=me,a!==null&&(i=Ox(a,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,_a(e,i),In(a,e,i),Ig;Jm(o)||Rh(),t=qp(e,t,n)}else Jm(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,be=wi(o.nextSibling),cn=t,Jt=!0,hr=null,Ei=!1,e!==null&&cS(t,e),t=Bm(t,i.children),t.flags|=4096);return t}return s?(ir(t),o=i.fallback,s=t.mode,l=e.child,c=l.sibling,i=Ts(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=Ts(c,o):(o=ra(o,s,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,kl(null,i),i=t.child,o=e.child.memoizedState,o===null?o=Xp(n):(s=o.cachePool,s!==null?(l=qe._currentValue,s=s.parent!==l?{parent:l,pool:l}:s):s=hS(),o={baseLanes:o.baseLanes|n,cachePool:s}),i.memoizedState=o,i.childLanes=Wp(e,a,n),t.memoizedState=kp,kl(e.child,i)):(nr(t),n=e.child,e=n.sibling,n=Ts(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(a=t.deletions,a===null?(t.deletions=[e],t.flags|=16):a.push(e)),t.child=n,t.memoizedState=null,n)}function Bm(e,t){return t=Eh({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Eh(e,t){return e=Qn(22,e,null,t),e.lanes=0,e}function qp(e,t,n){return ha(t,e.child,null,n),e=Bm(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Gy(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Tm(e.return,t,n)}function Yp(e,t,n,i,s,r){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:r}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=s,a.treeForkCount=r)}function sM(e,t,n){var i=t.pendingProps,s=i.revealOrder,r=i.tail;i=i.children;var a=He.current,o=(a&2)!==0;if(o?(a=a&1|2,t.flags|=128):a&=1,ye(He,a),on(e,t,i,n),i=Jt?lc:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gy(e,n,t);else if(e.tag===19)Gy(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&Sh(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Yp(t,!1,s,n,r,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Sh(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Yp(t,!0,n,null,r,i);break;case"together":Yp(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function Ds(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mr|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Bo(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(Z(153));if(t.child!==null){for(e=t.child,n=Ts(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ts(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Pg(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&vh(e)))}function Mw(e,t,n){switch(t.tag){case 3:hh(t,t.stateNode.containerInfo),er(t,qe,e.memoizedState.cache),ca();break;case 27:case 5:hm(t);break;case 4:hh(t,t.stateNode.containerInfo);break;case 10:er(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Dm(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(nr(t),t.flags|=128,null):(n&t.child.childLanes)!==0?iM(e,t,n):(nr(t),e=Ds(e,t,n),e!==null?e.sibling:null);nr(t);break;case 19:var s=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Bo(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return sM(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ye(He,He.current),i)break;return null;case 22:return t.lanes=0,nM(e,t,n,t.pendingProps);case 24:er(t,qe,e.memoizedState.cache)}return Ds(e,t,n)}function rM(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ye=!0;else{if(!Pg(e,n)&&(t.flags&128)===0)return Ye=!1,Mw(e,t,n);Ye=(e.flags&131072)!==0}else Ye=!1,Jt&&(t.flags&1048576)!==0&&lS(t,lc,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=na(t.elementType),t.type=e,typeof e=="function")pg(e)?(i=da(e,i),t.tag=1,t=Vy(null,t,e,i,n)):(t.tag=0,t=Pm(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===tg){t.tag=11,t=Iy(null,t,e,i,n);break t}else if(s===eg){t.tag=14,t=Py(null,t,e,i,n);break t}}throw t=cm(e)||e,Error(Z(306,t,""))}}return t;case 0:return Pm(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=da(i,t.pendingProps),Vy(e,t,i,s,n);case 3:t:{if(hh(t,t.stateNode.containerInfo),e===null)throw Error(Z(387));i=t.pendingProps;var r=t.memoizedState;s=r.element,wm(e,t),Ql(t,i,null,n);var a=t.memoizedState;if(i=a.cache,er(t,qe,i),i!==r.cache&&Em(t,[qe],n,!0),Kl(),i=a.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:a.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=Hy(e,t,i,n);break t}else if(i!==s){s=Ti(Error(Z(424)),t),cc(s),t=Hy(e,t,i,n);break t}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,be=wi(e.firstChild),cn=t,Jt=!0,hr=null,Ei=!0,n=pS(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ca(),i===s){t=Ds(e,t,n);break t}on(e,t,i,n)}t=t.child}return t;case 26:return sh(e,t),e===null?(n=ux(t.type,null,t.pendingProps,null))?t.memoizedState=n:Jt||(n=t.type,e=t.pendingProps,i=Oh(ur.current).createElement(n),i[ln]=t,i[Pn]=e,hn(i,n,e),sn(i),t.stateNode=i):t.memoizedState=ux(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return hm(t),e===null&&Jt&&(i=t.stateNode=JM(t.type,t.pendingProps,ur.current),cn=t,Ei=!0,s=be,Tr(t.type)?(Qm=s,be=wi(i.firstChild)):be=s),on(e,t,t.pendingProps.children,n),sh(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Jt&&((s=i=be)&&(i=Kw(i,t.type,t.pendingProps,Ei),i!==null?(t.stateNode=i,cn=t,be=wi(i.firstChild),Ei=!1,s=!0):s=!1),s||xr(t)),hm(t),s=t.type,r=t.pendingProps,a=e!==null?e.memoizedProps:null,i=r.children,Ym(s,r)?i=null:a!==null&&Ym(s,a)&&(t.flags|=32),t.memoizedState!==null&&(s=bg(e,t,dw,null,null,n),mc._currentValue=s),sh(e,t),on(e,t,i,n),t.child;case 6:return e===null&&Jt&&((e=n=be)&&(n=Qw(n,t.pendingProps,Ei),n!==null?(t.stateNode=n,cn=t,be=null,e=!0):e=!1),e||xr(t)),null;case 13:return iM(e,t,n);case 4:return hh(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ha(t,null,i,n):on(e,t,i,n),t.child;case 11:return Iy(e,t,t.type,t.pendingProps,n);case 7:return on(e,t,t.pendingProps,n),t.child;case 8:return on(e,t,t.pendingProps.children,n),t.child;case 12:return on(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,er(t,t.type,i.value),on(e,t,i.children,n),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,ua(t),s=un(s),i=i(s),t.flags|=1,on(e,t,i,n),t.child;case 14:return Py(e,t,t.type,t.pendingProps,n);case 15:return eM(e,t,t.type,t.pendingProps,n);case 19:return sM(e,t,n);case 31:return Sw(e,t,n);case 22:return nM(e,t,n,t.pendingProps);case 24:return ua(t),i=un(qe),e===null?(s=vg(),s===null&&(s=me,r=_g(),s.pooledCache=r,r.refCount++,r!==null&&(s.pooledCacheLanes|=n),s=r),t.memoizedState={parent:i,cache:s},xg(t),er(t,qe,s)):((e.lanes&n)!==0&&(wm(e,t),Ql(t,null,null,n),Kl()),s=e.memoizedState,r=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),er(t,qe,i)):(i=r.cache,er(t,qe,i),i!==s.cache&&Em(t,[qe],n,!0))),on(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(Z(156,t.tag))}function ms(e){e.flags|=4}function Zp(e,t,n,i,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(RM())e.flags|=8192;else throw oa=yh,yg}else e.flags&=-16777217}function ky(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!jM(t))if(RM())e.flags|=8192;else throw oa=yh,yg}function Gu(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Dx():536870912,e.lanes|=t,Do|=t)}function Pl(e,t){if(!Jt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function bw(e,t,n){var i=t.pendingProps;switch(gg(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return Me(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Es(qe),To(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(to(t)?ms(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Fp())),Me(t),null;case 26:var s=t.type,r=t.memoizedState;return e===null?(ms(t),r!==null?(Me(t),ky(t,r)):(Me(t),Zp(t,s,null,i,n))):r?r!==e.memoizedState?(ms(t),Me(t),ky(t,r)):(Me(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&ms(t),Me(t),Zp(t,s,e,i,n)),null;case 27:if(fh(t),n=ur.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ms(t);else{if(!i){if(t.stateNode===null)throw Error(Z(166));return Me(t),null}e=Ki.current,to(t)?vy(t,e):(e=JM(s,i,n),t.stateNode=e,ms(t))}return Me(t),null;case 5:if(fh(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ms(t);else{if(!i){if(t.stateNode===null)throw Error(Z(166));return Me(t),null}if(r=Ki.current,to(t))vy(t,r);else{var a=Oh(ur.current);switch(r){case 1:r=a.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:r=a.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":r=a.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":r=a.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":r=a.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof i.is=="string"?a.createElement("select",{is:i.is}):a.createElement("select"),i.multiple?r.multiple=!0:i.size&&(r.size=i.size);break;default:r=typeof i.is=="string"?a.createElement(s,{is:i.is}):a.createElement(s)}}r[ln]=t,r[Pn]=i;t:for(a=t.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=r;t:switch(hn(r,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&ms(t)}}return Me(t),Zp(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&ms(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(Z(166));if(e=ur.current,to(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=cn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[ln]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||WM(e.nodeValue,n)),e||xr(t,!0)}else e=Oh(e).createTextNode(i),e[ln]=t,t.stateNode=e}return Me(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=to(t),n!==null){if(e===null){if(!i)throw Error(Z(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Z(557));e[ln]=t}else ca(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),e=!1}else n=Fp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Kn(t),t):(Kn(t),null);if((t.flags&128)!==0)throw Error(Z(558))}return Me(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=to(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(Z(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Z(317));s[ln]=t}else ca(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),s=!1}else s=Fp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Kn(t),t):(Kn(t),null)}return Kn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Gu(t,t.updateQueue),Me(t),null);case 4:return To(),e===null&&kg(t.stateNode.containerInfo),Me(t),null;case 10:return Es(t.type),Me(t),null;case 19:if(rn(He),i=t.memoizedState,i===null)return Me(t),null;if(s=(t.flags&128)!==0,r=i.rendering,r===null)if(s)Pl(i,!1);else{if(Pe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=Sh(e),r!==null){for(t.flags|=128,Pl(i,!1),e=r.updateQueue,t.updateQueue=e,Gu(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)aS(n,e),n=n.sibling;return ye(He,He.current&1|2),Jt&&ys(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&$n()>wh&&(t.flags|=128,s=!0,Pl(i,!1),t.lanes=4194304)}else{if(!s)if(e=Sh(r),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Gu(t,e),Pl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!Jt)return Me(t),null}else 2*$n()-i.renderingStartTime>wh&&n!==536870912&&(t.flags|=128,s=!0,Pl(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=$n(),e.sibling=null,n=He.current,ye(He,s?n&1|2:n&1),Jt&&ys(t,i.treeForkCount),e):(Me(t),null);case 22:case 23:return Kn(t),Sg(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),n=t.updateQueue,n!==null&&Gu(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&rn(aa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Es(qe),Me(t),null;case 25:return null;case 30:return null}throw Error(Z(156,t.tag))}function Tw(e,t){switch(gg(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Es(qe),To(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return fh(t),null;case 31:if(t.memoizedState!==null){if(Kn(t),t.alternate===null)throw Error(Z(340));ca()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Kn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Z(340));ca()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return rn(He),null;case 4:return To(),null;case 10:return Es(t.type),null;case 22:case 23:return Kn(t),Sg(),e!==null&&rn(aa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Es(qe),null;case 25:return null;default:return null}}function aM(e,t){switch(gg(t),t.tag){case 3:Es(qe),To();break;case 26:case 27:case 5:fh(t);break;case 4:To();break;case 31:t.memoizedState!==null&&Kn(t);break;case 13:Kn(t);break;case 19:rn(He);break;case 10:Es(t.type);break;case 22:case 23:Kn(t),Sg(),e!==null&&rn(aa);break;case 24:Es(qe)}}function Ac(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var r=n.create,a=n.inst;i=r(),a.destroy=i}n=n.next}while(n!==s)}}catch(o){oe(t,t.return,o)}}function Sr(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var r=s.next;i=r;do{if((i.tag&e)===e){var a=i.inst,o=a.destroy;if(o!==void 0){a.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(u){oe(s,l,u)}}}i=i.next}while(i!==r)}}catch(u){oe(t,t.return,u)}}function oM(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{gS(t,n)}catch(i){oe(e,e.return,i)}}}function lM(e,t,n){n.props=da(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){oe(e,t,i)}}function $l(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(s){oe(e,t,s)}}function Ji(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){oe(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){oe(e,t,s)}else n.current=null}function cM(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){oe(e,e.return,s)}}function Jp(e,t,n){try{var i=e.stateNode;Xw(i,e.type,n,t),i[Pn]=t}catch(s){oe(e,e.return,s)}}function uM(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Tr(e.type)||e.tag===4}function Kp(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||uM(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Tr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zm(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ms));else if(i!==4&&(i===27&&Tr(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(zm(e,t,n),e=e.sibling;e!==null;)zm(e,t,n),e=e.sibling}function Ah(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Tr(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Ah(e,t,n),e=e.sibling;e!==null;)Ah(e,t,n),e=e.sibling}function hM(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);hn(t,i,n),t[ln]=e,t[Pn]=n}catch(r){oe(e,e.return,r)}}var xs=!1,We=!1,Qp=!1,Xy=typeof WeakSet=="function"?WeakSet:Set,nn=null;function Ew(e,t){if(e=e.containerInfo,Wm=Bh,e=jx(e),hg(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break t}var a=0,o=-1,l=-1,c=0,u=0,f=e,h=null;e:for(;;){for(var p;f!==n||s!==0&&f.nodeType!==3||(o=a+s),f!==r||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===e)break e;if(h===n&&++c===s&&(o=a),h===r&&++u===i&&(l=a),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(qm={focusedElem:e,selectionRange:n},Bh=!1,nn=t;nn!==null;)if(t=nn,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,nn=e;else for(;nn!==null;){switch(t=nn,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,n=t,s=r.memoizedProps,r=r.memoizedState,i=n.stateNode;try{var _=da(n.type,s);e=i.getSnapshotBeforeUpdate(_,r),i.__reactInternalSnapshotBeforeUpdate=e}catch(g){oe(n,n.return,g)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Zm(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Zm(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(Z(163))}if(e=t.sibling,e!==null){e.return=t.return,nn=e;break}nn=t.return}}function fM(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:_s(e,n),i&4&&Ac(5,n);break;case 1:if(_s(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(a){oe(n,n.return,a)}else{var s=da(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(a){oe(n,n.return,a)}}i&64&&oM(n),i&512&&$l(n,n.return);break;case 3:if(_s(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{gS(e,t)}catch(a){oe(n,n.return,a)}}break;case 27:t===null&&i&4&&hM(n);case 26:case 5:_s(e,n),t===null&&i&4&&cM(n),i&512&&$l(n,n.return);break;case 12:_s(e,n);break;case 31:_s(e,n),i&4&&mM(e,n);break;case 13:_s(e,n),i&4&&gM(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Nw.bind(null,n),jw(e,n))));break;case 22:if(i=n.memoizedState!==null||xs,!i){t=t!==null&&t.memoizedState!==null||We,s=xs;var r=We;xs=i,(We=t)&&!r?vs(e,n,(n.subtreeFlags&8772)!==0):_s(e,n),xs=s,We=r}break;case 30:break;default:_s(e,n)}}function dM(e){var t=e.alternate;t!==null&&(e.alternate=null,dM(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&rg(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var we=null,On=!1;function gs(e,t,n){for(n=n.child;n!==null;)pM(e,t,n),n=n.sibling}function pM(e,t,n){if(ti&&typeof ti.onCommitFiberUnmount=="function")try{ti.onCommitFiberUnmount(yc,n)}catch{}switch(n.tag){case 26:We||Ji(n,t),gs(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:We||Ji(n,t);var i=we,s=On;Tr(n.type)&&(we=n.stateNode,On=!1),gs(e,t,n),ic(n.stateNode),we=i,On=s;break;case 5:We||Ji(n,t);case 6:if(i=we,s=On,we=null,gs(e,t,n),we=i,On=s,we!==null)if(On)try{(we.nodeType===9?we.body:we.nodeName==="HTML"?we.ownerDocument.body:we).removeChild(n.stateNode)}catch(r){oe(n,t,r)}else try{we.removeChild(n.stateNode)}catch(r){oe(n,t,r)}break;case 18:we!==null&&(On?(e=we,rx(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),No(e)):rx(we,n.stateNode));break;case 4:i=we,s=On,we=n.stateNode.containerInfo,On=!0,gs(e,t,n),we=i,On=s;break;case 0:case 11:case 14:case 15:Sr(2,n,t),We||Sr(4,n,t),gs(e,t,n);break;case 1:We||(Ji(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&lM(n,t,i)),gs(e,t,n);break;case 21:gs(e,t,n);break;case 22:We=(i=We)||n.memoizedState!==null,gs(e,t,n),We=i;break;default:gs(e,t,n)}}function mM(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{No(e)}catch(n){oe(t,t.return,n)}}}function gM(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{No(e)}catch(n){oe(t,t.return,n)}}function Aw(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Xy),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Xy),t;default:throw Error(Z(435,e.tag))}}function ku(e,t){var n=Aw(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=Iw.bind(null,e,i);i.then(s,s)}})}function Un(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],r=e,a=t,o=a;t:for(;o!==null;){switch(o.tag){case 27:if(Tr(o.type)){we=o.stateNode,On=!1;break t}break;case 5:we=o.stateNode,On=!1;break t;case 3:case 4:we=o.stateNode.containerInfo,On=!0;break t}o=o.return}if(we===null)throw Error(Z(160));pM(r,a,s),we=null,On=!1,r=s.alternate,r!==null&&(r.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_M(t,e),t=t.sibling}var Bi=null;function _M(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Un(t,e),Ln(e),i&4&&(Sr(3,e,e.return),Ac(3,e),Sr(5,e,e.return));break;case 1:Un(t,e),Ln(e),i&512&&(We||n===null||Ji(n,n.return)),i&64&&xs&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=Bi;if(Un(t,e),Ln(e),i&512&&(We||n===null||Ji(n,n.return)),i&4){var r=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,s=s.ownerDocument||s;e:switch(i){case"title":r=s.getElementsByTagName("title")[0],(!r||r[Mc]||r[ln]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=s.createElement(i),s.head.insertBefore(r,s.querySelector("head > title"))),hn(r,i,n),r[ln]=e,sn(r),i=r;break t;case"link":var a=fx("link","href",s).get(i+(n.href||""));if(a){for(var o=0;o<a.length;o++)if(r=a[o],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(o,1);break e}}r=s.createElement(i),hn(r,i,n),s.head.appendChild(r);break;case"meta":if(a=fx("meta","content",s).get(i+(n.content||""))){for(o=0;o<a.length;o++)if(r=a[o],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(o,1);break e}}r=s.createElement(i),hn(r,i,n),s.head.appendChild(r);break;default:throw Error(Z(468,i))}r[ln]=e,sn(r),i=r}e.stateNode=i}else dx(s,e.type,e.stateNode);else e.stateNode=hx(s,i,e.memoizedProps);else r!==i?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,i===null?dx(s,e.type,e.stateNode):hx(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Jp(e,e.memoizedProps,n.memoizedProps)}break;case 27:Un(t,e),Ln(e),i&512&&(We||n===null||Ji(n,n.return)),n!==null&&i&4&&Jp(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Un(t,e),Ln(e),i&512&&(We||n===null||Ji(n,n.return)),e.flags&32){s=e.stateNode;try{Ao(s,"")}catch(_){oe(e,e.return,_)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,Jp(e,s,n!==null?n.memoizedProps:s)),i&1024&&(Qp=!0);break;case 6:if(Un(t,e),Ln(e),i&4){if(e.stateNode===null)throw Error(Z(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(_){oe(e,e.return,_)}}break;case 3:if(oh=null,s=Bi,Bi=Nh(t.containerInfo),Un(t,e),Bi=s,Ln(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{No(t.containerInfo)}catch(_){oe(e,e.return,_)}Qp&&(Qp=!1,vM(e));break;case 4:i=Bi,Bi=Nh(e.stateNode.containerInfo),Un(t,e),Ln(e),Bi=i;break;case 12:Un(t,e),Ln(e);break;case 31:Un(t,e),Ln(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,ku(e,i)));break;case 13:Un(t,e),Ln(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Kh=$n()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,ku(e,i)));break;case 22:s=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=xs,u=We;if(xs=c||s,We=u||l,Un(t,e),We=u,xs=c,Ln(e),i&8192)t:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||l||xs||We||ia(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(r=l.stateNode,s)a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none";else{o=l.stateNode;var f=l.memoizedProps.style,h=f!=null&&f.hasOwnProperty("display")?f.display:null;o.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(_){oe(l,l.return,_)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=s?"":l.memoizedProps}catch(_){oe(l,l.return,_)}}}else if(t.tag===18){if(n===null){l=t;try{var p=l.stateNode;s?ax(p,!0):ax(l.stateNode,!1)}catch(_){oe(l,l.return,_)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,ku(e,n))));break;case 19:Un(t,e),Ln(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,ku(e,i)));break;case 30:break;case 21:break;default:Un(t,e),Ln(e)}}function Ln(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(uM(i)){n=i;break}i=i.return}if(n==null)throw Error(Z(160));switch(n.tag){case 27:var s=n.stateNode,r=Kp(e);Ah(e,r,s);break;case 5:var a=n.stateNode;n.flags&32&&(Ao(a,""),n.flags&=-33);var o=Kp(e);Ah(e,o,a);break;case 3:case 4:var l=n.stateNode.containerInfo,c=Kp(e);zm(e,c,l);break;default:throw Error(Z(161))}}catch(u){oe(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vM(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;vM(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function _s(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)fM(e,t.alternate,t),t=t.sibling}function ia(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Sr(4,t,t.return),ia(t);break;case 1:Ji(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&lM(t,t.return,n),ia(t);break;case 27:ic(t.stateNode);case 26:case 5:Ji(t,t.return),ia(t);break;case 22:t.memoizedState===null&&ia(t);break;case 30:ia(t);break;default:ia(t)}e=e.sibling}}function vs(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=e,r=t,a=r.flags;switch(r.tag){case 0:case 11:case 15:vs(s,r,n),Ac(4,r);break;case 1:if(vs(s,r,n),i=r,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(c){oe(i,i.return,c)}if(i=r,s=i.updateQueue,s!==null){var o=i.stateNode;try{var l=s.shared.hiddenCallbacks;if(l!==null)for(s.shared.hiddenCallbacks=null,s=0;s<l.length;s++)mS(l[s],o)}catch(c){oe(i,i.return,c)}}n&&a&64&&oM(r),$l(r,r.return);break;case 27:hM(r);case 26:case 5:vs(s,r,n),n&&i===null&&a&4&&cM(r),$l(r,r.return);break;case 12:vs(s,r,n);break;case 31:vs(s,r,n),n&&a&4&&mM(s,r);break;case 13:vs(s,r,n),n&&a&4&&gM(s,r);break;case 22:r.memoizedState===null&&vs(s,r,n),$l(r,r.return);break;case 30:break;default:vs(s,r,n)}t=t.sibling}}function Bg(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Tc(n))}function zg(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Tc(e))}function Pi(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)yM(e,t,n,i),t=t.sibling}function yM(e,t,n,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:Pi(e,t,n,i),s&2048&&Ac(9,t);break;case 1:Pi(e,t,n,i);break;case 3:Pi(e,t,n,i),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Tc(e)));break;case 12:if(s&2048){Pi(e,t,n,i),e=t.stateNode;try{var r=t.memoizedProps,a=r.id,o=r.onPostCommit;typeof o=="function"&&o(a,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){oe(t,t.return,l)}}else Pi(e,t,n,i);break;case 31:Pi(e,t,n,i);break;case 13:Pi(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,a=t.alternate,t.memoizedState!==null?r._visibility&2?Pi(e,t,n,i):tc(e,t):r._visibility&2?Pi(e,t,n,i):(r._visibility|=2,no(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),s&2048&&Bg(a,t);break;case 24:Pi(e,t,n,i),s&2048&&zg(t.alternate,t);break;default:Pi(e,t,n,i)}}function no(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,a=t,o=n,l=i,c=a.flags;switch(a.tag){case 0:case 11:case 15:no(r,a,o,l,s),Ac(8,a);break;case 23:break;case 22:var u=a.stateNode;a.memoizedState!==null?u._visibility&2?no(r,a,o,l,s):tc(r,a):(u._visibility|=2,no(r,a,o,l,s)),s&&c&2048&&Bg(a.alternate,a);break;case 24:no(r,a,o,l,s),s&&c&2048&&zg(a.alternate,a);break;default:no(r,a,o,l,s)}t=t.sibling}}function tc(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:tc(n,i),s&2048&&Bg(i.alternate,i);break;case 24:tc(n,i),s&2048&&zg(i.alternate,i);break;default:tc(n,i)}t=t.sibling}}var Xl=8192;function eo(e,t,n){if(e.subtreeFlags&Xl)for(e=e.child;e!==null;)xM(e,t,n),e=e.sibling}function xM(e,t,n){switch(e.tag){case 26:eo(e,t,n),e.flags&Xl&&e.memoizedState!==null&&uC(n,Bi,e.memoizedState,e.memoizedProps);break;case 5:eo(e,t,n);break;case 3:case 4:var i=Bi;Bi=Nh(e.stateNode.containerInfo),eo(e,t,n),Bi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Xl,Xl=16777216,eo(e,t,n),Xl=i):eo(e,t,n));break;default:eo(e,t,n)}}function SM(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Bl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];nn=i,bM(i,e)}SM(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)MM(e),e=e.sibling}function MM(e){switch(e.tag){case 0:case 11:case 15:Bl(e),e.flags&2048&&Sr(9,e,e.return);break;case 3:Bl(e);break;case 12:Bl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,rh(e)):Bl(e);break;default:Bl(e)}}function rh(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];nn=i,bM(i,e)}SM(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Sr(8,t,t.return),rh(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,rh(t));break;default:rh(t)}e=e.sibling}}function bM(e,t){for(;nn!==null;){var n=nn;switch(n.tag){case 0:case 11:case 15:Sr(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Tc(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,nn=i;else t:for(n=e;nn!==null;){i=nn;var s=i.sibling,r=i.return;if(dM(i),i===n){nn=null;break t}if(s!==null){s.return=r,nn=s;break t}nn=r}}}var ww={getCacheForType:function(e){var t=un(qe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return un(qe).controller.signal}},Cw=typeof WeakMap=="function"?WeakMap:Map,ne=0,me=null,Wt=null,Yt=0,ae=0,Jn=null,or=!1,Fo=!1,Fg=!1,Us=0,Pe=0,Mr=0,la=0,Vg=0,jn=0,Do=0,ec=null,Nn=null,Fm=!1,Kh=0,TM=0,wh=1/0,Ch=null,pr=null,Je=0,mr=null,Uo=null,As=0,Vm=0,Hm=null,EM=null,nc=0,Gm=null;function ni(){return(ne&2)!==0&&Yt!==0?Yt&-Yt:Lt.T!==null?Gg():Nx()}function AM(){if(jn===0)if((Yt&536870912)===0||Jt){var e=Ou;Ou<<=1,(Ou&3932160)===0&&(Ou=262144),jn=e}else jn=536870912;return e=si.current,e!==null&&(e.flags|=32),jn}function In(e,t,n){(e===me&&(ae===2||ae===9)||e.cancelPendingCommit!==null)&&(Lo(e,0),lr(e,Yt,jn,!1)),Sc(e,n),((ne&2)===0||e!==me)&&(e===me&&((ne&2)===0&&(la|=n),Pe===4&&lr(e,Yt,jn,!1)),ji(e))}function wM(e,t,n){if((ne&6)!==0)throw Error(Z(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||xc(e,t),s=i?Uw(e,t):jp(e,t,!0),r=i;do{if(s===0){Fo&&!i&&lr(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!Rw(n)){s=jp(e,t,!1),r=!1;continue}if(s===2){if(r=t,e.errorRecoveryDisabledLanes&r)var a=0;else a=e.pendingLanes&-536870913,a=a!==0?a:a&536870912?536870912:0;if(a!==0){t=a;t:{var o=e;s=ec;var l=o.current.memoizedState.isDehydrated;if(l&&(Lo(o,a).flags|=256),a=jp(o,a,!1),a!==2){if(Fg&&!l){o.errorRecoveryDisabledLanes|=r,la|=r,s=4;break t}r=Nn,Nn=s,r!==null&&(Nn===null?Nn=r:Nn.push.apply(Nn,r))}s=a}if(r=!1,s!==2)continue}}if(s===1){Lo(e,0),lr(e,t,0,!0);break}t:{switch(i=e,r=s,r){case 0:case 1:throw Error(Z(345));case 4:if((t&4194048)!==t)break;case 6:lr(i,t,jn,!or);break t;case 2:Nn=null;break;case 3:case 5:break;default:throw Error(Z(329))}if((t&62914560)===t&&(s=Kh+300-$n(),10<s)){if(lr(i,t,jn,!or),Fh(i,0,!0)!==0)break t;As=t,i.timeoutHandle=YM(Wy.bind(null,i,n,Nn,Ch,Fm,t,jn,la,Do,or,r,"Throttled",-0,0),s);break t}Wy(i,n,Nn,Ch,Fm,t,jn,la,Do,or,r,null,-0,0)}}break}while(!0);ji(e)}function Wy(e,t,n,i,s,r,a,o,l,c,u,f,h,p){if(e.timeoutHandle=-1,f=t.subtreeFlags,f&8192||(f&16785408)===16785408){f={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ms},xM(t,r,f);var _=(r&62914560)===r?Kh-$n():(r&4194048)===r?TM-$n():0;if(_=hC(f,_),_!==null){As=r,e.cancelPendingCommit=_(Yy.bind(null,e,t,r,n,i,s,a,o,l,u,f,null,h,p)),lr(e,r,a,!c);return}}Yy(e,t,r,n,i,s,a,o,l)}function Rw(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],r=s.getSnapshot;s=s.value;try{if(!ii(r(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function lr(e,t,n,i){t&=~Vg,t&=~la,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var r=31-ei(s),a=1<<r;i[r]=-1,s&=~a}n!==0&&Ux(e,n,t)}function Qh(){return(ne&6)===0?(wc(0,!1),!1):!0}function Hg(){if(Wt!==null){if(ae===0)var e=Wt.return;else e=Wt,bs=va=null,Ag(e),So=null,uc=0,e=Wt;for(;e!==null;)aM(e.alternate,e),e=e.return;Wt=null}}function Lo(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Yw(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),As=0,Hg(),me=e,Wt=n=Ts(e.current,null),Yt=t,ae=0,Jn=null,or=!1,Fo=xc(e,t),Fg=!1,Do=jn=Vg=la=Mr=Pe=0,Nn=ec=null,Fm=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-ei(i),r=1<<s;t|=e[s],i&=~r}return Us=t,kh(),n}function CM(e,t){Ft=null,Lt.H=fc,t===zo||t===Wh?(t=by(),ae=3):t===yg?(t=by(),ae=4):ae=t===Ig?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Jn=t,Wt===null&&(Pe=1,Th(e,Ti(t,e.current)))}function RM(){var e=si.current;return e===null?!0:(Yt&4194048)===Yt?Ai===null:(Yt&62914560)===Yt||(Yt&536870912)!==0?e===Ai:!1}function DM(){var e=Lt.H;return Lt.H=fc,e===null?fc:e}function UM(){var e=Lt.A;return Lt.A=ww,e}function Rh(){Pe=4,or||(Yt&4194048)!==Yt&&si.current!==null||(Fo=!0),(Mr&134217727)===0&&(la&134217727)===0||me===null||lr(me,Yt,jn,!1)}function jp(e,t,n){var i=ne;ne|=2;var s=DM(),r=UM();(me!==e||Yt!==t)&&(Ch=null,Lo(e,t)),t=!1;var a=Pe;t:do try{if(ae!==0&&Wt!==null){var o=Wt,l=Jn;switch(ae){case 8:Hg(),a=6;break t;case 3:case 2:case 9:case 6:si.current===null&&(t=!0);var c=ae;if(ae=0,Jn=null,go(e,o,l,c),n&&Fo){a=0;break t}break;default:c=ae,ae=0,Jn=null,go(e,o,l,c)}}Dw(),a=Pe;break}catch(u){CM(e,u)}while(!0);return t&&e.shellSuspendCounter++,bs=va=null,ne=i,Lt.H=s,Lt.A=r,Wt===null&&(me=null,Yt=0,kh()),a}function Dw(){for(;Wt!==null;)LM(Wt)}function Uw(e,t){var n=ne;ne|=2;var i=DM(),s=UM();me!==e||Yt!==t?(Ch=null,wh=$n()+500,Lo(e,t)):Fo=xc(e,t);t:do try{if(ae!==0&&Wt!==null){t=Wt;var r=Jn;e:switch(ae){case 1:ae=0,Jn=null,go(e,t,r,1);break;case 2:case 9:if(My(r)){ae=0,Jn=null,qy(t);break}t=function(){ae!==2&&ae!==9||me!==e||(ae=7),ji(e)},r.then(t,t);break t;case 3:ae=7;break t;case 4:ae=5;break t;case 7:My(r)?(ae=0,Jn=null,qy(t)):(ae=0,Jn=null,go(e,t,r,7));break;case 5:var a=null;switch(Wt.tag){case 26:a=Wt.memoizedState;case 5:case 27:var o=Wt;if(a?jM(a):o.stateNode.complete){ae=0,Jn=null;var l=o.sibling;if(l!==null)Wt=l;else{var c=o.return;c!==null?(Wt=c,jh(c)):Wt=null}break e}}ae=0,Jn=null,go(e,t,r,5);break;case 6:ae=0,Jn=null,go(e,t,r,6);break;case 8:Hg(),Pe=6;break t;default:throw Error(Z(462))}}Lw();break}catch(u){CM(e,u)}while(!0);return bs=va=null,Lt.H=i,Lt.A=s,ne=n,Wt!==null?0:(me=null,Yt=0,kh(),Pe)}function Lw(){for(;Wt!==null&&!eA();)LM(Wt)}function LM(e){var t=rM(e.alternate,e,Us);e.memoizedProps=e.pendingProps,t===null?jh(e):Wt=t}function qy(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Fy(n,t,t.pendingProps,t.type,void 0,Yt);break;case 11:t=Fy(n,t,t.pendingProps,t.type.render,t.ref,Yt);break;case 5:Ag(t);default:aM(n,t),t=Wt=aS(t,Us),t=rM(n,t,Us)}e.memoizedProps=e.pendingProps,t===null?jh(e):Wt=t}function go(e,t,n,i){bs=va=null,Ag(t),So=null,uc=0;var s=t.return;try{if(xw(e,s,t,n,Yt)){Pe=1,Th(e,Ti(n,e.current)),Wt=null;return}}catch(r){if(s!==null)throw Wt=s,r;Pe=1,Th(e,Ti(n,e.current)),Wt=null;return}t.flags&32768?(Jt||i===1?e=!0:Fo||(Yt&536870912)!==0?e=!1:(or=e=!0,(i===2||i===9||i===3||i===6)&&(i=si.current,i!==null&&i.tag===13&&(i.flags|=16384))),OM(t,e)):jh(t)}function jh(e){var t=e;do{if((t.flags&32768)!==0){OM(t,or);return}e=t.return;var n=bw(t.alternate,t,Us);if(n!==null){Wt=n;return}if(t=t.sibling,t!==null){Wt=t;return}Wt=t=e}while(t!==null);Pe===0&&(Pe=5)}function OM(e,t){do{var n=Tw(e.alternate,e);if(n!==null){n.flags&=32767,Wt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Wt=e;return}Wt=e=n}while(e!==null);Pe=6,Wt=null}function Yy(e,t,n,i,s,r,a,o,l){e.cancelPendingCommit=null;do $h();while(Je!==0);if((ne&6)!==0)throw Error(Z(327));if(t!==null){if(t===e.current)throw Error(Z(177));if(r=t.lanes|t.childLanes,r|=fg,hA(e,n,r,a,o,l),e===me&&(Wt=me=null,Yt=0),Uo=t,mr=e,As=n,Vm=r,Hm=s,EM=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Pw(dh,function(){return zM(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Lt.T,Lt.T=null,s=ie.p,ie.p=2,a=ne,ne|=4;try{Ew(e,t,n)}finally{ne=a,ie.p=s,Lt.T=i}}Je=1,NM(),IM(),PM()}}function NM(){if(Je===1){Je=0;var e=mr,t=Uo,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=Lt.T,Lt.T=null;var i=ie.p;ie.p=2;var s=ne;ne|=4;try{_M(t,e);var r=qm,a=jx(e.containerInfo),o=r.focusedElem,l=r.selectionRange;if(a!==o&&o&&o.ownerDocument&&Qx(o.ownerDocument.documentElement,o)){if(l!==null&&hg(o)){var c=l.start,u=l.end;if(u===void 0&&(u=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(u,o.value.length);else{var f=o.ownerDocument||document,h=f&&f.defaultView||window;if(h.getSelection){var p=h.getSelection(),_=o.textContent.length,g=Math.min(l.start,_),m=l.end===void 0?g:Math.min(l.end,_);!p.extend&&g>m&&(a=m,m=g,g=a);var d=my(o,g),v=my(o,m);if(d&&v&&(p.rangeCount!==1||p.anchorNode!==d.node||p.anchorOffset!==d.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=f.createRange();y.setStart(d.node,d.offset),p.removeAllRanges(),g>m?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(f=[],p=o;p=p.parentNode;)p.nodeType===1&&f.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<f.length;o++){var x=f[o];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}Bh=!!Wm,qm=Wm=null}finally{ne=s,ie.p=i,Lt.T=n}}e.current=t,Je=2}}function IM(){if(Je===2){Je=0;var e=mr,t=Uo,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Lt.T,Lt.T=null;var i=ie.p;ie.p=2;var s=ne;ne|=4;try{fM(e,t.alternate,t)}finally{ne=s,ie.p=i,Lt.T=n}}Je=3}}function PM(){if(Je===4||Je===3){Je=0,nA();var e=mr,t=Uo,n=As,i=EM;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Je=5:(Je=0,Uo=mr=null,BM(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(pr=null),sg(n),t=t.stateNode,ti&&typeof ti.onCommitFiberRoot=="function")try{ti.onCommitFiberRoot(yc,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Lt.T,s=ie.p,ie.p=2,Lt.T=null;try{for(var r=e.onRecoverableError,a=0;a<i.length;a++){var o=i[a];r(o.value,{componentStack:o.stack})}}finally{Lt.T=t,ie.p=s}}(As&3)!==0&&$h(),ji(e),s=e.pendingLanes,(n&261930)!==0&&(s&42)!==0?e===Gm?nc++:(nc=0,Gm=e):nc=0,wc(0,!1)}}function BM(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Tc(t)))}function $h(){return NM(),IM(),PM(),zM()}function zM(){if(Je!==5)return!1;var e=mr,t=Vm;Vm=0;var n=sg(As),i=Lt.T,s=ie.p;try{ie.p=32>n?32:n,Lt.T=null,n=Hm,Hm=null;var r=mr,a=As;if(Je=0,Uo=mr=null,As=0,(ne&6)!==0)throw Error(Z(331));var o=ne;if(ne|=4,MM(r.current),yM(r,r.current,a,n),ne=o,wc(0,!1),ti&&typeof ti.onPostCommitFiberRoot=="function")try{ti.onPostCommitFiberRoot(yc,r)}catch{}return!0}finally{ie.p=s,Lt.T=i,BM(e,t)}}function Zy(e,t,n){t=Ti(n,t),t=Im(e.stateNode,t,2),e=dr(e,t,2),e!==null&&(Sc(e,2),ji(e))}function oe(e,t,n){if(e.tag===3)Zy(e,e,n);else for(;t!==null;){if(t.tag===3){Zy(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(pr===null||!pr.has(i))){e=Ti(n,e),n=$S(2),i=dr(t,n,2),i!==null&&(tM(n,i,t,e),Sc(i,2),ji(i));break}}t=t.return}}function $p(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Cw;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(Fg=!0,s.add(n),e=Ow.bind(null,e,t,n),t.then(e,e))}function Ow(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,me===e&&(Yt&n)===n&&(Pe===4||Pe===3&&(Yt&62914560)===Yt&&300>$n()-Kh?(ne&2)===0&&Lo(e,0):Vg|=n,Do===Yt&&(Do=0)),ji(e)}function FM(e,t){t===0&&(t=Dx()),e=_a(e,t),e!==null&&(Sc(e,t),ji(e))}function Nw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),FM(e,n)}function Iw(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(Z(314))}i!==null&&i.delete(t),FM(e,n)}function Pw(e,t){return ng(e,t)}var Dh=null,io=null,km=!1,Uh=!1,tm=!1,cr=0;function ji(e){e!==io&&e.next===null&&(io===null?Dh=io=e:io=io.next=e),Uh=!0,km||(km=!0,zw())}function wc(e,t){if(!tm&&Uh){tm=!0;do for(var n=!1,i=Dh;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var r=0;else{var a=i.suspendedLanes,o=i.pingedLanes;r=(1<<31-ei(42|e)+1)-1,r&=s&~(a&~o),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,Jy(i,r))}else r=Yt,r=Fh(i,i===me?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(r&3)===0||xc(i,r)||(n=!0,Jy(i,r));i=i.next}while(n);tm=!1}}function Bw(){VM()}function VM(){Uh=km=!1;var e=0;cr!==0&&qw()&&(e=cr);for(var t=$n(),n=null,i=Dh;i!==null;){var s=i.next,r=HM(i,t);r===0?(i.next=null,n===null?Dh=s:n.next=s,s===null&&(io=n)):(n=i,(e!==0||(r&3)!==0)&&(Uh=!0)),i=s}Je!==0&&Je!==5||wc(e,!1),cr!==0&&(cr=0)}function HM(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var a=31-ei(r),o=1<<a,l=s[a];l===-1?((o&n)===0||(o&i)!==0)&&(s[a]=uA(o,t)):l<=t&&(e.expiredLanes|=o),r&=~o}if(t=me,n=Yt,n=Fh(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ae===2||ae===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Rp(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||xc(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Rp(i),sg(n)){case 2:case 8:n=Cx;break;case 32:n=dh;break;case 268435456:n=Rx;break;default:n=dh}return i=GM.bind(null,e),n=ng(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Rp(i),e.callbackPriority=2,e.callbackNode=null,2}function GM(e,t){if(Je!==0&&Je!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if($h()&&e.callbackNode!==n)return null;var i=Yt;return i=Fh(e,e===me?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(wM(e,i,t),HM(e,$n()),e.callbackNode!=null&&e.callbackNode===n?GM.bind(null,e):null)}function Jy(e,t){if($h())return null;wM(e,t,!0)}function zw(){Zw(function(){(ne&6)!==0?ng(wx,Bw):VM()})}function Gg(){if(cr===0){var e=wo;e===0&&(e=Lu,Lu<<=1,(Lu&261888)===0&&(Lu=256)),cr=e}return cr}function Ky(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ku(""+e)}function Qy(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Fw(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var r=Ky((s[Pn]||null).action),a=i.submitter;a&&(t=(t=a[Pn]||null)?Ky(t.formAction):a.getAttribute("formAction"),t!==null&&(r=t,a=null));var o=new Vh("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(cr!==0){var l=a?Qy(s,a):new FormData(s);Om(n,{pending:!0,data:l,method:s.method,action:r},null,l)}}else typeof r=="function"&&(o.preventDefault(),l=a?Qy(s,a):new FormData(s),Om(n,{pending:!0,data:l,method:s.method,action:r},r,l))},currentTarget:s}]})}}for(Xu=0;Xu<Sm.length;Xu++)Wu=Sm[Xu],jy=Wu.toLowerCase(),$y=Wu[0].toUpperCase()+Wu.slice(1),zi(jy,"on"+$y);var Wu,jy,$y,Xu;zi(tS,"onAnimationEnd");zi(eS,"onAnimationIteration");zi(nS,"onAnimationStart");zi("dblclick","onDoubleClick");zi("focusin","onFocus");zi("focusout","onBlur");zi(iw,"onTransitionRun");zi(sw,"onTransitionStart");zi(rw,"onTransitionCancel");zi(iS,"onTransitionEnd");Eo("onMouseEnter",["mouseout","mouseover"]);Eo("onMouseLeave",["mouseout","mouseover"]);Eo("onPointerEnter",["pointerout","pointerover"]);Eo("onPointerLeave",["pointerout","pointerover"]);pa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pa("onBeforeInput",["compositionend","keypress","textInput","paste"]);pa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(dc));function kM(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var r=void 0;if(t)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==r&&s.isPropagationStopped())break t;r=o,s.currentTarget=c;try{r(s)}catch(u){mh(u)}s.currentTarget=null,r=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==r&&s.isPropagationStopped())break t;r=o,s.currentTarget=c;try{r(s)}catch(u){mh(u)}s.currentTarget=null,r=l}}}}function Xt(e,t){var n=t[dm];n===void 0&&(n=t[dm]=new Set);var i=e+"__bubble";n.has(i)||(XM(t,e,2,!1),n.add(i))}function em(e,t,n){var i=0;t&&(i|=4),XM(n,e,i,t)}var qu="_reactListening"+Math.random().toString(36).slice(2);function kg(e){if(!e[qu]){e[qu]=!0,Ix.forEach(function(n){n!=="selectionchange"&&(Vw.has(n)||em(n,!1,e),em(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qu]||(t[qu]=!0,em("selectionchange",!1,t))}}function XM(e,t,n,i){switch(i1(t)){case 2:var s=pC;break;case 8:s=mC;break;default:s=Yg}n=s.bind(null,t,n,e),s=void 0,!vm||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function nm(e,t,n,i,s){var r=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===s)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&a.stateNode.containerInfo===s)return;a=a.return}for(;o!==null;){if(a=ao(o),a===null)return;if(l=a.tag,l===5||l===6||l===26||l===27){i=r=a;continue t}o=o.parentNode}}i=i.return}kx(function(){var c=r,u=og(n),f=[];t:{var h=sS.get(e);if(h!==void 0){var p=Vh,_=e;switch(e){case"keypress":if(ju(n)===0)break t;case"keydown":case"keyup":p=IA;break;case"focusin":_="focus",p=Np;break;case"focusout":_="blur",p=Np;break;case"beforeblur":case"afterblur":p=Np;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=ay;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=bA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=zA;break;case tS:case eS:case nS:p=AA;break;case iS:p=VA;break;case"scroll":case"scrollend":p=SA;break;case"wheel":p=GA;break;case"copy":case"cut":case"paste":p=CA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=ly;break;case"toggle":case"beforetoggle":p=XA}var g=(t&4)!==0,m=!g&&(e==="scroll"||e==="scrollend"),d=g?h!==null?h+"Capture":null:h;g=[];for(var v=c,y;v!==null;){var x=v;if(y=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||y===null||d===null||(x=rc(v,d),x!=null&&g.push(pc(v,x,y))),m)break;v=v.return}0<g.length&&(h=new p(h,_,null,n,u),f.push({event:h,listeners:g}))}}if((t&7)===0){t:{if(h=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",h&&n!==_m&&(_=n.relatedTarget||n.fromElement)&&(ao(_)||_[Io]))break t;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?ao(_):null,_!==null&&(m=vc(_),g=_.tag,_!==m||g!==5&&g!==27&&g!==6)&&(_=null)):(p=null,_=c),p!==_)){if(g=ay,x="onMouseLeave",d="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(g=ly,x="onPointerLeave",d="onPointerEnter",v="pointer"),m=p==null?h:Gl(p),y=_==null?h:Gl(_),h=new g(x,v+"leave",p,n,u),h.target=m,h.relatedTarget=y,x=null,ao(u)===c&&(g=new g(d,v+"enter",_,n,u),g.target=y,g.relatedTarget=m,x=g),m=x,p&&_)e:{for(g=Hw,d=p,v=_,y=0,x=d;x;x=g(x))y++;x=0;for(var T=v;T;T=g(T))x++;for(;0<y-x;)d=g(d),y--;for(;0<x-y;)v=g(v),x--;for(;y--;){if(d===v||v!==null&&d===v.alternate){g=d;break e}d=g(d),v=g(v)}g=null}else g=null;p!==null&&tx(f,h,p,g,!1),_!==null&&m!==null&&tx(f,m,_,g,!0)}}t:{if(h=c?Gl(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var w=fy;else if(hy(h))if(Jx)w=tw;else{w=jA;var E=QA}else p=h.nodeName,!p||p.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?c&&ag(c.elementType)&&(w=fy):w=$A;if(w&&(w=w(e,c))){Zx(f,w,n,u);break t}E&&E(e,h,c),e==="focusout"&&c&&h.type==="number"&&c.memoizedProps.value!=null&&gm(h,"number",h.value)}switch(E=c?Gl(c):window,e){case"focusin":(hy(E)||E.contentEditable==="true")&&(co=E,ym=c,Yl=null);break;case"focusout":Yl=ym=co=null;break;case"mousedown":xm=!0;break;case"contextmenu":case"mouseup":case"dragend":xm=!1,gy(f,n,u);break;case"selectionchange":if(nw)break;case"keydown":case"keyup":gy(f,n,u)}var R;if(ug)t:{switch(e){case"compositionstart":var S="onCompositionStart";break t;case"compositionend":S="onCompositionEnd";break t;case"compositionupdate":S="onCompositionUpdate";break t}S=void 0}else lo?qx(e,n)&&(S="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(Wx&&n.locale!=="ko"&&(lo||S!=="onCompositionStart"?S==="onCompositionEnd"&&lo&&(R=Xx()):(ar=u,lg="value"in ar?ar.value:ar.textContent,lo=!0)),E=Lh(c,S),0<E.length&&(S=new oy(S,e,null,n,u),f.push({event:S,listeners:E}),R?S.data=R:(R=Yx(n),R!==null&&(S.data=R)))),(R=qA?YA(e,n):ZA(e,n))&&(S=Lh(c,"onBeforeInput"),0<S.length&&(E=new oy("onBeforeInput","beforeinput",null,n,u),f.push({event:E,listeners:S}),E.data=R)),Fw(f,e,c,n,u)}kM(f,t)})}function pc(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Lh(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,r=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||r===null||(s=rc(e,n),s!=null&&i.unshift(pc(e,s,r)),s=rc(e,t),s!=null&&i.push(pc(e,s,r))),e.tag===3)return i;e=e.return}return[]}function Hw(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function tx(e,t,n,i,s){for(var r=t._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=rc(n,r),c!=null&&a.unshift(pc(n,c,l))):s||(c=rc(n,r),c!=null&&a.push(pc(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Gw=/\r\n?/g,kw=/\u0000|\uFFFD/g;function ex(e){return(typeof e=="string"?e:""+e).replace(Gw,`
`).replace(kw,"")}function WM(e,t){return t=ex(t),ex(e)===t}function ue(e,t,n,i,s,r){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Ao(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Ao(e,""+i);break;case"className":Iu(e,"class",i);break;case"tabIndex":Iu(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Iu(e,n,i);break;case"style":Gx(e,i,r);break;case"data":if(t!=="object"){Iu(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Ku(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&ue(e,t,"name",s.name,s,null),ue(e,t,"formEncType",s.formEncType,s,null),ue(e,t,"formMethod",s.formMethod,s,null),ue(e,t,"formTarget",s.formTarget,s,null)):(ue(e,t,"encType",s.encType,s,null),ue(e,t,"method",s.method,s,null),ue(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Ku(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Ms);break;case"onScroll":i!=null&&Xt("scroll",e);break;case"onScrollEnd":i!=null&&Xt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Z(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(Z(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Ku(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Xt("beforetoggle",e),Xt("toggle",e),Ju(e,"popover",i);break;case"xlinkActuate":ps(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":ps(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":ps(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":ps(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":ps(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":ps(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":ps(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":ps(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":ps(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Ju(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=yA.get(n)||n,Ju(e,n,i))}}function Xm(e,t,n,i,s,r){switch(n){case"style":Gx(e,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Z(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(Z(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Ao(e,i):(typeof i=="number"||typeof i=="bigint")&&Ao(e,""+i);break;case"onScroll":i!=null&&Xt("scroll",e);break;case"onScrollEnd":i!=null&&Xt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Ms);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Px.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),r=e[Pn]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,s),typeof i=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,s);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Ju(e,n,i)}}}function hn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Xt("error",e),Xt("load",e);var i=!1,s=!1,r;for(r in n)if(n.hasOwnProperty(r)){var a=n[r];if(a!=null)switch(r){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(Z(137,t));default:ue(e,t,r,a,n,null)}}s&&ue(e,t,"srcSet",n.srcSet,n,null),i&&ue(e,t,"src",n.src,n,null);return;case"input":Xt("invalid",e);var o=r=a=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var u=n[i];if(u!=null)switch(i){case"name":s=u;break;case"type":a=u;break;case"checked":l=u;break;case"defaultChecked":c=u;break;case"value":r=u;break;case"defaultValue":o=u;break;case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(Z(137,t));break;default:ue(e,t,i,u,n,null)}}Fx(e,r,o,l,c,a,s,!1);return;case"select":Xt("invalid",e),i=a=r=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":r=o;break;case"defaultValue":a=o;break;case"multiple":i=o;default:ue(e,t,s,o,n,null)}t=r,n=a,e.multiple=!!i,t!=null?vo(e,!!i,t,!1):n!=null&&vo(e,!!i,n,!0);return;case"textarea":Xt("invalid",e),r=s=i=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":i=o;break;case"defaultValue":s=o;break;case"children":r=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(Z(91));break;default:ue(e,t,a,o,n,null)}Hx(e,i,s,r);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":ue(e,t,l,i,n,null));return;case"dialog":Xt("beforetoggle",e),Xt("toggle",e),Xt("cancel",e),Xt("close",e);break;case"iframe":case"object":Xt("load",e);break;case"video":case"audio":for(i=0;i<dc.length;i++)Xt(dc[i],e);break;case"image":Xt("error",e),Xt("load",e);break;case"details":Xt("toggle",e);break;case"embed":case"source":case"link":Xt("error",e),Xt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(Z(137,t));default:ue(e,t,c,i,n,null)}return;default:if(ag(t)){for(u in n)n.hasOwnProperty(u)&&(i=n[u],i!==void 0&&Xm(e,t,u,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&ue(e,t,o,i,n,null))}function Xw(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,r=null,a=null,o=null,l=null,c=null,u=null;for(p in n){var f=n[p];if(n.hasOwnProperty(p)&&f!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=f;default:i.hasOwnProperty(p)||ue(e,t,p,null,i,f)}}for(var h in i){var p=i[h];if(f=n[h],i.hasOwnProperty(h)&&(p!=null||f!=null))switch(h){case"type":r=p;break;case"name":s=p;break;case"checked":c=p;break;case"defaultChecked":u=p;break;case"value":a=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(Z(137,t));break;default:p!==f&&ue(e,t,h,p,i,f)}}mm(e,a,o,l,c,u,r,s);return;case"select":p=a=o=h=null;for(r in n)if(l=n[r],n.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(r)||ue(e,t,r,null,i,l)}for(s in i)if(r=i[s],l=n[s],i.hasOwnProperty(s)&&(r!=null||l!=null))switch(s){case"value":h=r;break;case"defaultValue":o=r;break;case"multiple":a=r;default:r!==l&&ue(e,t,s,r,i,l)}t=o,n=a,i=p,h!=null?vo(e,!!n,h,!1):!!i!=!!n&&(t!=null?vo(e,!!n,t,!0):vo(e,!!n,n?[]:"",!1));return;case"textarea":p=h=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ue(e,t,o,null,i,s)}for(a in i)if(s=i[a],r=n[a],i.hasOwnProperty(a)&&(s!=null||r!=null))switch(a){case"value":h=s;break;case"defaultValue":p=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(Z(91));break;default:s!==r&&ue(e,t,a,s,i,r)}Vx(e,h,p);return;case"option":for(var _ in n)h=n[_],n.hasOwnProperty(_)&&h!=null&&!i.hasOwnProperty(_)&&(_==="selected"?e.selected=!1:ue(e,t,_,null,i,h));for(l in i)h=i[l],p=n[l],i.hasOwnProperty(l)&&h!==p&&(h!=null||p!=null)&&(l==="selected"?e.selected=h&&typeof h!="function"&&typeof h!="symbol":ue(e,t,l,h,i,p));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var g in n)h=n[g],n.hasOwnProperty(g)&&h!=null&&!i.hasOwnProperty(g)&&ue(e,t,g,null,i,h);for(c in i)if(h=i[c],p=n[c],i.hasOwnProperty(c)&&h!==p&&(h!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(Z(137,t));break;default:ue(e,t,c,h,i,p)}return;default:if(ag(t)){for(var m in n)h=n[m],n.hasOwnProperty(m)&&h!==void 0&&!i.hasOwnProperty(m)&&Xm(e,t,m,void 0,i,h);for(u in i)h=i[u],p=n[u],!i.hasOwnProperty(u)||h===p||h===void 0&&p===void 0||Xm(e,t,u,h,i,p);return}}for(var d in n)h=n[d],n.hasOwnProperty(d)&&h!=null&&!i.hasOwnProperty(d)&&ue(e,t,d,null,i,h);for(f in i)h=i[f],p=n[f],!i.hasOwnProperty(f)||h===p||h==null&&p==null||ue(e,t,f,h,i,p)}function nx(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ww(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],r=s.transferSize,a=s.initiatorType,o=s.duration;if(r&&o&&nx(a)){for(a=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var u=l.transferSize,f=l.initiatorType;u&&nx(f)&&(l=l.responseEnd,a+=u*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(r+a)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Wm=null,qm=null;function Oh(e){return e.nodeType===9?e:e.ownerDocument}function ix(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function qM(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ym(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var im=null;function qw(){var e=window.event;return e&&e.type==="popstate"?e===im?!1:(im=e,!0):(im=null,!1)}var YM=typeof setTimeout=="function"?setTimeout:void 0,Yw=typeof clearTimeout=="function"?clearTimeout:void 0,sx=typeof Promise=="function"?Promise:void 0,Zw=typeof queueMicrotask=="function"?queueMicrotask:typeof sx<"u"?function(e){return sx.resolve(null).then(e).catch(Jw)}:YM;function Jw(e){setTimeout(function(){throw e})}function Tr(e){return e==="head"}function rx(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),No(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")ic(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,ic(n);for(var r=n.firstChild;r;){var a=r.nextSibling,o=r.nodeName;r[Mc]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=a}}else n==="body"&&ic(e.ownerDocument.body);n=s}while(n);No(t)}function ax(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Zm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Zm(n),rg(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Kw(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Mc])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=wi(e.nextSibling),e===null)break}return null}function Qw(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=wi(e.nextSibling),e===null))return null;return e}function ZM(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=wi(e.nextSibling),e===null))return null;return e}function Jm(e){return e.data==="$?"||e.data==="$~"}function Km(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function jw(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function wi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Qm=null;function ox(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return wi(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function lx(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function JM(e,t,n){switch(t=Oh(n),e){case"html":if(e=t.documentElement,!e)throw Error(Z(452));return e;case"head":if(e=t.head,!e)throw Error(Z(453));return e;case"body":if(e=t.body,!e)throw Error(Z(454));return e;default:throw Error(Z(451))}}function ic(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);rg(e)}var Ci=new Map,cx=new Set;function Nh(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ls=ie.d;ie.d={f:$w,r:tC,D:eC,C:nC,L:iC,m:sC,X:aC,S:rC,M:oC};function $w(){var e=Ls.f(),t=Qh();return e||t}function tC(e){var t=Po(e);t!==null&&t.tag===5&&t.type==="form"?GS(t):Ls.r(e)}var Vo=typeof document>"u"?null:document;function KM(e,t,n){var i=Vo;if(i&&typeof t=="string"&&t){var s=bi(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),cx.has(s)||(cx.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),hn(t,"link",e),sn(t),i.head.appendChild(t)))}}function eC(e){Ls.D(e),KM("dns-prefetch",e,null)}function nC(e,t){Ls.C(e,t),KM("preconnect",e,t)}function iC(e,t,n){Ls.L(e,t,n);var i=Vo;if(i&&e&&t){var s='link[rel="preload"][as="'+bi(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+bi(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+bi(n.imageSizes)+'"]')):s+='[href="'+bi(e)+'"]';var r=s;switch(t){case"style":r=Oo(e);break;case"script":r=Ho(e)}Ci.has(r)||(e=Te({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Ci.set(r,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(Cc(r))||t==="script"&&i.querySelector(Rc(r))||(t=i.createElement("link"),hn(t,"link",e),sn(t),i.head.appendChild(t)))}}function sC(e,t){Ls.m(e,t);var n=Vo;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+bi(i)+'"][href="'+bi(e)+'"]',r=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Ho(e)}if(!Ci.has(r)&&(e=Te({rel:"modulepreload",href:e},t),Ci.set(r,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Rc(r)))return}i=n.createElement("link"),hn(i,"link",e),sn(i),n.head.appendChild(i)}}}function rC(e,t,n){Ls.S(e,t,n);var i=Vo;if(i&&e){var s=_o(i).hoistableStyles,r=Oo(e);t=t||"default";var a=s.get(r);if(!a){var o={loading:0,preload:null};if(a=i.querySelector(Cc(r)))o.loading=5;else{e=Te({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Ci.get(r))&&Xg(e,n);var l=a=i.createElement("link");sn(l),hn(l,"link",e),l._p=new Promise(function(c,u){l.onload=c,l.onerror=u}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,ah(a,t,i)}a={type:"stylesheet",instance:a,count:1,state:o},s.set(r,a)}}}function aC(e,t){Ls.X(e,t);var n=Vo;if(n&&e){var i=_o(n).hoistableScripts,s=Ho(e),r=i.get(s);r||(r=n.querySelector(Rc(s)),r||(e=Te({src:e,async:!0},t),(t=Ci.get(s))&&Wg(e,t),r=n.createElement("script"),sn(r),hn(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(s,r))}}function oC(e,t){Ls.M(e,t);var n=Vo;if(n&&e){var i=_o(n).hoistableScripts,s=Ho(e),r=i.get(s);r||(r=n.querySelector(Rc(s)),r||(e=Te({src:e,async:!0,type:"module"},t),(t=Ci.get(s))&&Wg(e,t),r=n.createElement("script"),sn(r),hn(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(s,r))}}function ux(e,t,n,i){var s=(s=ur.current)?Nh(s):null;if(!s)throw Error(Z(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Oo(n.href),n=_o(s).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Oo(n.href);var r=_o(s).hoistableStyles,a=r.get(e);if(a||(s=s.ownerDocument||s,a={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,a),(r=s.querySelector(Cc(e)))&&!r._p&&(a.instance=r,a.state.loading=5),Ci.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ci.set(e,n),r||lC(s,e,n,a.state))),t&&i===null)throw Error(Z(528,""));return a}if(t&&i!==null)throw Error(Z(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ho(n),n=_o(s).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(Z(444,e))}}function Oo(e){return'href="'+bi(e)+'"'}function Cc(e){return'link[rel="stylesheet"]['+e+"]"}function QM(e){return Te({},e,{"data-precedence":e.precedence,precedence:null})}function lC(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),hn(t,"link",n),sn(t),e.head.appendChild(t))}function Ho(e){return'[src="'+bi(e)+'"]'}function Rc(e){return"script[async]"+e}function hx(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+bi(n.href)+'"]');if(i)return t.instance=i,sn(i),i;var s=Te({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),sn(i),hn(i,"style",s),ah(i,n.precedence,e),t.instance=i;case"stylesheet":s=Oo(n.href);var r=e.querySelector(Cc(s));if(r)return t.state.loading|=4,t.instance=r,sn(r),r;i=QM(n),(s=Ci.get(s))&&Xg(i,s),r=(e.ownerDocument||e).createElement("link"),sn(r);var a=r;return a._p=new Promise(function(o,l){a.onload=o,a.onerror=l}),hn(r,"link",i),t.state.loading|=4,ah(r,n.precedence,e),t.instance=r;case"script":return r=Ho(n.src),(s=e.querySelector(Rc(r)))?(t.instance=s,sn(s),s):(i=n,(s=Ci.get(r))&&(i=Te({},n),Wg(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),sn(s),hn(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(Z(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,ah(i,n.precedence,e));return t.instance}function ah(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,r=s,a=0;a<i.length;a++){var o=i[a];if(o.dataset.precedence===t)r=o;else if(r!==s)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Xg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Wg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var oh=null;function fx(e,t,n){if(oh===null){var i=new Map,s=oh=new Map;s.set(n,i)}else s=oh,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var r=n[s];if(!(r[Mc]||r[ln]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var a=r.getAttribute(t)||"";a=e+a;var o=i.get(a);o?o.push(r):i.set(a,[r])}}return i}function dx(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function cC(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function jM(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function uC(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=Oo(i.href),r=t.querySelector(Cc(s));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ih.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=r,sn(r);return}r=t.ownerDocument||t,i=QM(i),(s=Ci.get(s))&&Xg(i,s),r=r.createElement("link"),sn(r);var a=r;a._p=new Promise(function(o,l){a.onload=o,a.onerror=l}),hn(r,"link",i),n.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Ih.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var sm=0;function hC(e,t){return e.stylesheets&&e.count===0&&lh(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&lh(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&sm===0&&(sm=62500*Ww());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&lh(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>sm?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function Ih(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)lh(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ph=null;function lh(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ph=new Map,t.forEach(fC,e),Ph=null,Ih.call(e))}function fC(e,t){if(!(t.state.loading&4)){var n=Ph.get(e);if(n)var i=n.get(null);else{n=new Map,Ph.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<s.length;r++){var a=s[r];(a.nodeName==="LINK"||a.getAttribute("media")!=="not all")&&(n.set(a.dataset.precedence,a),i=a)}i&&n.set(null,i)}s=t.instance,a=s.getAttribute("data-precedence"),r=n.get(a)||i,r===i&&n.set(null,s),n.set(a,s),this.count++,i=Ih.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),r?r.parentNode.insertBefore(s,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var mc={$$typeof:Ss,Provider:null,Consumer:null,_currentValue:sa,_currentValue2:sa,_threadCount:0};function dC(e,t,n,i,s,r,a,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Dp(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dp(0),this.hiddenUpdates=Dp(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=r,this.onRecoverableError=a,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function $M(e,t,n,i,s,r,a,o,l,c,u,f){return e=new dC(e,t,n,a,l,c,u,f,o),t=1,r===!0&&(t|=24),r=Qn(3,null,null,t),e.current=r,r.stateNode=e,t=_g(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:i,isDehydrated:n,cache:t},xg(r),e}function t1(e){return e?(e=fo,e):fo}function e1(e,t,n,i,s,r){s=t1(s),i.context===null?i.context=s:i.pendingContext=s,i=fr(t),i.payload={element:n},r=r===void 0?null:r,r!==null&&(i.callback=r),n=dr(e,i,t),n!==null&&(In(n,e,t),Jl(n,e,t))}function px(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function qg(e,t){px(e,t),(e=e.alternate)&&px(e,t)}function n1(e){if(e.tag===13||e.tag===31){var t=_a(e,67108864);t!==null&&In(t,e,67108864),qg(e,67108864)}}function mx(e){if(e.tag===13||e.tag===31){var t=ni();t=ig(t);var n=_a(e,t);n!==null&&In(n,e,t),qg(e,t)}}var Bh=!0;function pC(e,t,n,i){var s=Lt.T;Lt.T=null;var r=ie.p;try{ie.p=2,Yg(e,t,n,i)}finally{ie.p=r,Lt.T=s}}function mC(e,t,n,i){var s=Lt.T;Lt.T=null;var r=ie.p;try{ie.p=8,Yg(e,t,n,i)}finally{ie.p=r,Lt.T=s}}function Yg(e,t,n,i){if(Bh){var s=jm(i);if(s===null)nm(e,t,i,zh,n),gx(e,i);else if(_C(s,e,t,n,i))i.stopPropagation();else if(gx(e,i),t&4&&-1<gC.indexOf(e)){for(;s!==null;){var r=Po(s);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var a=ea(r.pendingLanes);if(a!==0){var o=r;for(o.pendingLanes|=2,o.entangledLanes|=2;a;){var l=1<<31-ei(a);o.entanglements[1]|=l,a&=~l}ji(r),(ne&6)===0&&(wh=$n()+500,wc(0,!1))}}break;case 31:case 13:o=_a(r,2),o!==null&&In(o,r,2),Qh(),qg(r,2)}if(r=jm(i),r===null&&nm(e,t,i,zh,n),r===s)break;s=r}s!==null&&i.stopPropagation()}else nm(e,t,i,null,n)}}function jm(e){return e=og(e),Zg(e)}var zh=null;function Zg(e){if(zh=null,e=ao(e),e!==null){var t=vc(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=Mx(t),e!==null)return e;e=null}else if(n===31){if(e=bx(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return zh=e,null}function i1(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(iA()){case wx:return 2;case Cx:return 8;case dh:case sA:return 32;case Rx:return 268435456;default:return 32}default:return 32}}var $m=!1,gr=null,_r=null,vr=null,gc=new Map,_c=new Map,sr=[],gC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function gx(e,t){switch(e){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":gc.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_c.delete(t.pointerId)}}function zl(e,t,n,i,s,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[s]},t!==null&&(t=Po(t),t!==null&&n1(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function _C(e,t,n,i,s){switch(t){case"focusin":return gr=zl(gr,e,t,n,i,s),!0;case"dragenter":return _r=zl(_r,e,t,n,i,s),!0;case"mouseover":return vr=zl(vr,e,t,n,i,s),!0;case"pointerover":var r=s.pointerId;return gc.set(r,zl(gc.get(r)||null,e,t,n,i,s)),!0;case"gotpointercapture":return r=s.pointerId,_c.set(r,zl(_c.get(r)||null,e,t,n,i,s)),!0}return!1}function s1(e){var t=ao(e.target);if(t!==null){var n=vc(t);if(n!==null){if(t=n.tag,t===13){if(t=Mx(n),t!==null){e.blockedOn=t,$v(e.priority,function(){mx(n)});return}}else if(t===31){if(t=bx(n),t!==null){e.blockedOn=t,$v(e.priority,function(){mx(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ch(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=jm(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);_m=i,n.target.dispatchEvent(i),_m=null}else return t=Po(n),t!==null&&n1(t),e.blockedOn=n,!1;t.shift()}return!0}function _x(e,t,n){ch(e)&&n.delete(t)}function vC(){$m=!1,gr!==null&&ch(gr)&&(gr=null),_r!==null&&ch(_r)&&(_r=null),vr!==null&&ch(vr)&&(vr=null),gc.forEach(_x),_c.forEach(_x)}function Yu(e,t){e.blockedOn===t&&(e.blockedOn=null,$m||($m=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,vC)))}var Zu=null;function vx(e){Zu!==e&&(Zu=e,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,function(){Zu===e&&(Zu=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(Zg(i||n)===null)continue;break}var r=Po(n);r!==null&&(e.splice(t,3),t-=3,Om(r,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function No(e){function t(l){return Yu(l,e)}gr!==null&&Yu(gr,e),_r!==null&&Yu(_r,e),vr!==null&&Yu(vr,e),gc.forEach(t),_c.forEach(t);for(var n=0;n<sr.length;n++){var i=sr[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<sr.length&&(n=sr[0],n.blockedOn===null);)s1(n),n.blockedOn===null&&sr.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],r=n[i+1],a=s[Pn]||null;if(typeof r=="function")a||vx(n);else if(a){var o=null;if(r&&r.hasAttribute("formAction")){if(s=r,a=r[Pn]||null)o=a.formAction;else if(Zg(s)!==null)continue}else o=a.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),vx(n)}}}function r1(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(a){return s=a})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Jg(e){this._internalRoot=e}tf.prototype.render=Jg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Z(409));var n=t.current,i=ni();e1(n,i,e,t,null,null)};tf.prototype.unmount=Jg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;e1(e.current,2,null,e,null,null),Qh(),t[Io]=null}};function tf(e){this._internalRoot=e}tf.prototype.unstable_scheduleHydration=function(e){if(e){var t=Nx();e={blockedOn:null,target:e,priority:t};for(var n=0;n<sr.length&&t!==0&&t<sr[n].priority;n++);sr.splice(n,0,e),n===0&&s1(e)}};var yx=xx.version;if(yx!=="19.2.0")throw Error(Z(527,yx,"19.2.0"));ie.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Z(188)):(e=Object.keys(e).join(","),Error(Z(268,e)));return e=KE(t),e=e!==null?Tx(e):null,e=e===null?null:e.stateNode,e};var yC={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:Lt,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Fl=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Fl.isDisabled&&Fl.supportsFiber))try{yc=Fl.inject(yC),ti=Fl}catch{}var Fl;ef.createRoot=function(e,t){if(!Sx(e))throw Error(Z(299));var n=!1,i="",s=KS,r=QS,a=jS;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=$M(e,1,!1,null,null,n,i,null,s,r,a,r1),e[Io]=t.current,kg(e),new Jg(t)};ef.hydrateRoot=function(e,t,n){if(!Sx(e))throw Error(Z(299));var i=!1,s="",r=KS,a=QS,o=jS,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(a=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=$M(e,1,!0,t,n??null,i,s,l,r,a,o,r1),t.context=t1(null),n=t.current,i=ni(),i=ig(i),s=fr(i),s.callback=null,dr(n,s,i),n=i,t.current.lanes=n,Sc(t,n),ji(t),e[Io]=t.current,kg(e),new tf(t)};ef.version="19.2.0"});var c1=Wi((WO,l1)=>{"use strict";function o1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o1)}catch(e){console.error(e)}}o1(),l1.exports=a1()});var tE=Wi(rp=>{"use strict";var hO=Symbol.for("react.transitional.element"),fO=Symbol.for("react.fragment");function $T(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var s in t)s!=="key"&&(n[s]=t[s])}else n=t;return t=n.ref,{$$typeof:hO,type:e,key:i,ref:t!==void 0?t:null,props:n}}rp.Fragment=fO;rp.jsx=$T;rp.jsxs=$T});var xu=Wi((VB,eE)=>{"use strict";eE.exports=tE()});var qn=jr(Cl()),cE=jr(c1());function Os(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v1(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var Hn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ic={duration:.5,overwrite:!1,delay:0},d0,fn,Ce,Di=1e8,_e=1/Di,i0=Math.PI*2,xC=i0/4,SC=0,y1=Math.sqrt,MC=Math.cos,bC=Math.sin,Qe=function(t){return typeof t=="string"},Be=function(t){return typeof t=="function"},Is=function(t){return typeof t=="number"},ff=function(t){return typeof t>"u"},es=function(t){return typeof t=="object"},Vn=function(t){return t!==!1},p0=function(){return typeof window<"u"},nf=function(t){return Be(t)||Qe(t)},x1=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},_n=Array.isArray,TC=/random\([^)]+\)/g,EC=/,\s*/g,u1=/(?:-?\.?\d|\.)+/gi,m0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ma=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Kg=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,g0=/[+-]=-?[.\d]+/,AC=/[^,'"\[\]\s]+/gi,wC=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Le,$i,s0,_0,ai={},of={},S1,M1=function(t){return(of=ko(t,ai))&&vn},df=function(t,n){return console.warn("Invalid property",t,"set to",n,"Missing plugin? gsap.registerPlugin()")},Pc=function(t,n){return!n&&console.warn(t)},b1=function(t,n){return t&&(ai[t]=n)&&of&&(of[t]=n)||ai},Bc=function(){return 0},CC={suppressEvents:!0,isStart:!0,kill:!1},sf={suppressEvents:!0,kill:!1},RC={suppressEvents:!0},v0={},Ar=[],r0={},T1,zn={},Qg={},h1=30,rf=[],y0="",x0=function(t){var n=t[0],i,s;if(es(n)||Be(n)||(t=[t]),!(i=(n._gsap||{}).harness)){for(s=rf.length;s--&&!rf[s].targetTest(n););i=rf[s]}for(s=t.length;s--;)t[s]&&(t[s]._gsap||(t[s]._gsap=new T0(t[s],i)))||t.splice(s,1);return t},wr=function(t){return t._gsap||x0(Ui(t))[0]._gsap},S0=function(t,n,i){return(i=t[n])&&Be(i)?t[n]():ff(i)&&t.getAttribute&&t.getAttribute(n)||i},wn=function(t,n){return(t=t.split(",")).forEach(n)||t},ze=function(t){return Math.round(t*1e5)/1e5||0},Ue=function(t){return Math.round(t*1e7)/1e7||0},ba=function(t,n){var i=n.charAt(0),s=parseFloat(n.substr(2));return t=parseFloat(t),i==="+"?t+s:i==="-"?t-s:i==="*"?t*s:t/s},DC=function(t,n){for(var i=n.length,s=0;t.indexOf(n[s])<0&&++s<i;);return s<i},lf=function(){var t=Ar.length,n=Ar.slice(0),i,s;for(r0={},Ar.length=0,i=0;i<t;i++)s=n[i],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},M0=function(t){return!!(t._initted||t._startAt||t.add)},E1=function(t,n,i,s){Ar.length&&!fn&&lf(),t.render(n,i,s||!!(fn&&n<0&&M0(t))),Ar.length&&!fn&&lf()},A1=function(t){var n=parseFloat(t);return(n||n===0)&&(t+"").match(AC).length<2?n:Qe(t)?t.trim():t},w1=function(t){return t},oi=function(t,n){for(var i in n)i in t||(t[i]=n[i]);return t},UC=function(t){return function(n,i){for(var s in i)s in n||s==="duration"&&t||s==="ease"||(n[s]=i[s])}},ko=function(t,n){for(var i in n)t[i]=n[i];return t},f1=function e(t,n){for(var i in n)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=es(n[i])?e(t[i]||(t[i]={}),n[i]):n[i]);return t},cf=function(t,n){var i={},s;for(s in t)s in n||(i[s]=t[s]);return i},Lc=function(t){var n=t.parent||Le,i=t.keyframes?UC(_n(t.keyframes)):oi;if(Vn(t.inherit))for(;n;)i(t,n.vars.defaults),n=n.parent||n._dp;return t},LC=function(t,n){for(var i=t.length,s=i===n.length;s&&i--&&t[i]===n[i];);return i<0},C1=function(t,n,i,s,r){i===void 0&&(i="_first"),s===void 0&&(s="_last");var a=t[s],o;if(r)for(o=n[r];a&&a[r]>o;)a=a._prev;return a?(n._next=a._next,a._next=n):(n._next=t[i],t[i]=n),n._next?n._next._prev=n:t[s]=n,n._prev=a,n.parent=n._dp=t,n},pf=function(t,n,i,s){i===void 0&&(i="_first"),s===void 0&&(s="_last");var r=n._prev,a=n._next;r?r._next=a:t[i]===n&&(t[i]=a),a?a._prev=r:t[s]===n&&(t[s]=r),n._next=n._prev=n.parent=null},Cr=function(t,n){t.parent&&(!n||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ya=function(t,n){if(t&&(!n||n._end>t._dur||n._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},OC=function(t){for(var n=t.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return t},a0=function(t,n,i,s){return t._startAt&&(fn?t._startAt.revert(sf):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(n,!0,s))},NC=function e(t){return!t||t._ts&&e(t.parent)},d1=function(t){return t._repeat?Xo(t._tTime,t=t.duration()+t._rDelay)*t:0},Xo=function(t,n){var i=Math.floor(t=Ue(t/n));return t&&i===t?i-1:i},uf=function(t,n){return(t-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},mf=function(t){return t._end=Ue(t._start+(t._tDur/Math.abs(t._ts||t._rts||_e)||0))},gf=function(t,n){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=Ue(i._time-(t._ts>0?n/t._ts:((t._dirty?t.totalDuration():t._tDur)-n)/-t._ts)),mf(t),i._dirty||ya(i,t)),t},R1=function(t,n){var i;if((n._time||!n._dur&&n._initted||n._start<t._time&&(n._dur||!n.add))&&(i=uf(t.rawTime(),n),(!n._dur||Vc(0,n.totalDuration(),i)-n._tTime>_e)&&n.render(i,!0)),ya(t,n)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-_e}},ts=function(t,n,i,s){return n.parent&&Cr(n),n._start=Ue((Is(i)?i:i||t!==Le?Ri(t,i,n):t._time)+n._delay),n._end=Ue(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),C1(t,n,"_first","_last",t._sort?"_start":0),o0(n)||(t._recent=n),s||R1(t,n),t._ts<0&&gf(t,t._tTime),t},D1=function(t,n){return(ai.ScrollTrigger||df("scrollTrigger",n))&&ai.ScrollTrigger.create(n,t)},U1=function(t,n,i,s,r){if(w0(t,n,r),!t._initted)return 1;if(!i&&t._pt&&!fn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&T1!==Fn.frame)return Ar.push(t),t._lazy=[r,s],1},IC=function e(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||e(n))},o0=function(t){var n=t.data;return n==="isFromStart"||n==="isStart"},PC=function(t,n,i,s){var r=t.ratio,a=n<0||!n&&(!t._start&&IC(t)&&!(!t._initted&&o0(t))||(t._ts<0||t._dp._ts<0)&&!o0(t))?0:1,o=t._rDelay,l=0,c,u,f;if(o&&t._repeat&&(l=Vc(0,t._tDur,n),u=Xo(l,o),t._yoyo&&u&1&&(a=1-a),u!==Xo(t._tTime,o)&&(r=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==r||fn||s||t._zTime===_e||!n&&t._zTime){if(!t._initted&&U1(t,n,s,i,l))return;for(f=t._zTime,t._zTime=n||(i?_e:0),i||(i=n&&!f),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;n<0&&a0(t,n,i,!0),t._onUpdate&&!i&&ri(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&ri(t,"onRepeat"),(n>=t._tDur||n<0)&&t.ratio===a&&(a&&Cr(t,1),!i&&!fn&&(ri(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=n)},BC=function(t,n,i){var s;if(i>n)for(s=t._first;s&&s._start<=i;){if(s.data==="isPause"&&s._start>n)return s;s=s._next}else for(s=t._last;s&&s._start>=i;){if(s.data==="isPause"&&s._start<n)return s;s=s._prev}},Wo=function(t,n,i,s){var r=t._repeat,a=Ue(n)||0,o=t._tTime/t._tDur;return o&&!s&&(t._time*=a/t._dur),t._dur=a,t._tDur=r?r<0?1e10:Ue(a*(r+1)+t._rDelay*r):a,o>0&&!s&&gf(t,t._tTime=t._tDur*o),t.parent&&mf(t),i||ya(t.parent,t),t},p1=function(t){return t instanceof gn?ya(t):Wo(t,t._dur)},zC={_start:0,endTime:Bc,totalDuration:Bc},Ri=function e(t,n,i){var s=t.labels,r=t._recent||zC,a=t.duration()>=Di?r.endTime(!1):t._dur,o,l,c;return Qe(n)&&(isNaN(n)||n in s)?(l=n.charAt(0),c=n.substr(-1)==="%",o=n.indexOf("="),l==="<"||l===">"?(o>=0&&(n=n.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(n.substr(1))||0)*(c?(o<0?r:i).totalDuration()/100:1)):o<0?(n in s||(s[n]=a),s[n]):(l=parseFloat(n.charAt(o-1)+n.substr(o+1)),c&&i&&(l=l/100*(_n(i)?i[0]:i).totalDuration()),o>1?e(t,n.substr(0,o-1),i)+l:a+l)):n==null?a:+n},Oc=function(t,n,i){var s=Is(n[1]),r=(s?2:1)+(t<2?0:1),a=n[r],o,l;if(s&&(a.duration=n[1]),a.parent=i,t){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Vn(l.vars.inherit)&&l.parent;a.immediateRender=Vn(o.immediateRender),t<2?a.runBackwards=1:a.startAt=n[r-1]}return new ke(n[0],a,n[r+1])},Rr=function(t,n){return t||t===0?n(t):n},Vc=function(t,n,i){return i<t?t:i>n?n:i},dn=function(t,n){return!Qe(t)||!(n=wC.exec(t))?"":n[1]},FC=function(t,n,i){return Rr(i,function(s){return Vc(t,n,s)})},l0=[].slice,L1=function(t,n){return t&&es(t)&&"length"in t&&(!n&&!t.length||t.length-1 in t&&es(t[0]))&&!t.nodeType&&t!==$i},VC=function(t,n,i){return i===void 0&&(i=[]),t.forEach(function(s){var r;return Qe(s)&&!n||L1(s,1)?(r=i).push.apply(r,Ui(s)):i.push(s)})||i},Ui=function(t,n,i){return Ce&&!n&&Ce.selector?Ce.selector(t):Qe(t)&&!i&&(s0||!qo())?l0.call((n||_0).querySelectorAll(t),0):_n(t)?VC(t,i):L1(t)?l0.call(t,0):t?[t]:[]},c0=function(t){return t=Ui(t)[0]||Pc("Invalid scope")||{},function(n){var i=t.current||t.nativeElement||t;return Ui(n,i.querySelectorAll?i:i===t?Pc("Invalid scope")||_0.createElement("div"):t)}},O1=function(t){return t.sort(function(){return .5-Math.random()})},N1=function(t){if(Be(t))return t;var n=es(t)?t:{each:t},i=xa(n.ease),s=n.from||0,r=parseFloat(n.base)||0,a={},o=s>0&&s<1,l=isNaN(s)||o,c=n.axis,u=s,f=s;return Qe(s)?u=f={center:.5,edges:.5,end:1}[s]||0:!o&&l&&(u=s[0],f=s[1]),function(h,p,_){var g=(_||n).length,m=a[g],d,v,y,x,T,w,E,R,S;if(!m){if(S=n.grid==="auto"?0:(n.grid||[1,Di])[1],!S){for(E=-Di;E<(E=_[S++].getBoundingClientRect().left)&&S<g;);S<g&&S--}for(m=a[g]=[],d=l?Math.min(S,g)*u-.5:s%S,v=S===Di?0:l?g*f/S-.5:s/S|0,E=0,R=Di,w=0;w<g;w++)y=w%S-d,x=v-(w/S|0),m[w]=T=c?Math.abs(c==="y"?x:y):y1(y*y+x*x),T>E&&(E=T),T<R&&(R=T);s==="random"&&O1(m),m.max=E-R,m.min=R,m.v=g=(parseFloat(n.amount)||parseFloat(n.each)*(S>g?g-1:c?c==="y"?g/S:S:Math.max(S,g/S))||0)*(s==="edges"?-1:1),m.b=g<0?r-g:r,m.u=dn(n.amount||n.each)||0,i=i&&g<0?$C(i):i}return g=(m[h]-m.min)/m.max||0,Ue(m.b+(i?i(g):g)*m.v)+m.u}},u0=function(t){var n=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var s=Ue(Math.round(parseFloat(i)/t)*t*n);return(s-s%1)/n+(Is(i)?0:dn(i))}},I1=function(t,n){var i=_n(t),s,r;return!i&&es(t)&&(s=i=t.radius||Di,t.values?(t=Ui(t.values),(r=!Is(t[0]))&&(s*=s)):t=u0(t.increment)),Rr(n,i?Be(t)?function(a){return r=t(a),Math.abs(r-a)<=s?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=Di,u=0,f=t.length,h,p;f--;)r?(h=t[f].x-o,p=t[f].y-l,h=h*h+p*p):h=Math.abs(t[f]-o),h<c&&(c=h,u=f);return u=!s||c<=s?t[u]:a,r||u===a||Is(a)?u:u+dn(a)}:u0(t))},P1=function(t,n,i,s){return Rr(_n(t)?!n:i===!0?!!(i=0):!s,function(){return _n(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(s=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(n-t+i*.99))/i)*i*s)/s})},HC=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return function(s){return n.reduce(function(r,a){return a(r)},s)}},GC=function(t,n){return function(i){return t(parseFloat(i))+(n||dn(i))}},kC=function(t,n,i){return z1(t,n,0,1,i)},B1=function(t,n,i){return Rr(i,function(s){return t[~~n(s)]})},XC=function e(t,n,i){var s=n-t;return _n(t)?B1(t,e(0,t.length),n):Rr(i,function(r){return(s+(r-t)%s)%s+t})},WC=function e(t,n,i){var s=n-t,r=s*2;return _n(t)?B1(t,e(0,t.length-1),n):Rr(i,function(a){return a=(r+(a-t)%r)%r||0,t+(a>s?r-a:a)})},Yo=function(t){return t.replace(TC,function(n){var i=n.indexOf("[")+1,s=n.substring(i||7,i?n.indexOf("]"):n.length-1).split(EC);return P1(i?s:+s[0],i?0:+s[1],+s[2]||1e-5)})},z1=function(t,n,i,s,r){var a=n-t,o=s-i;return Rr(r,function(l){return i+((l-t)/a*o||0)})},qC=function e(t,n,i,s){var r=isNaN(t+n)?0:function(p){return(1-p)*t+p*n};if(!r){var a=Qe(t),o={},l,c,u,f,h;if(i===!0&&(s=1)&&(i=null),a)t={p:t},n={p:n};else if(_n(t)&&!_n(n)){for(u=[],f=t.length,h=f-2,c=1;c<f;c++)u.push(e(t[c-1],t[c]));f--,r=function(_){_*=f;var g=Math.min(h,~~_);return u[g](_-g)},i=n}else s||(t=ko(_n(t)?[]:{},t));if(!u){for(l in n)E0.call(o,t,l,"get",n[l]);r=function(_){return D0(_,o)||(a?t.p:t)}}}return Rr(i,r)},m1=function(t,n,i){var s=t.labels,r=Di,a,o,l;for(a in s)o=s[a]-n,o<0==!!i&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},ri=function(t,n,i){var s=t.vars,r=s[n],a=Ce,o=t._ctx,l,c,u;if(r)return l=s[n+"Params"],c=s.callbackScope||t,i&&Ar.length&&lf(),o&&(Ce=o),u=l?r.apply(c,l):r.call(c),Ce=a,u},Dc=function(t){return Cr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!fn),t.progress()<1&&ri(t,"onInterrupt"),t},Go,F1=[],V1=function(t){if(t)if(t=!t.name&&t.default||t,p0()||t.headless){var n=t.name,i=Be(t),s=n&&!i&&t.init?function(){this._props=[]}:t,r={init:Bc,render:D0,add:E0,kill:cR,modifier:lR,rawVars:0},a={targetTest:0,get:0,getSetter:_f,aliases:{},register:0};if(qo(),t!==s){if(zn[n])return;oi(s,oi(cf(t,r),a)),ko(s.prototype,ko(r,cf(t,a))),zn[s.prop=n]=s,t.targetTest&&(rf.push(s),v0[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}b1(n,s),t.register&&t.register(vn,s,Cn)}else F1.push(t)},ge=255,Uc={aqua:[0,ge,ge],lime:[0,ge,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ge],navy:[0,0,128],white:[ge,ge,ge],olive:[128,128,0],yellow:[ge,ge,0],orange:[ge,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ge,0,0],pink:[ge,192,203],cyan:[0,ge,ge],transparent:[ge,ge,ge,0]},jg=function(t,n,i){return t+=t<0?1:t>1?-1:0,(t*6<1?n+(i-n)*t*6:t<.5?i:t*3<2?n+(i-n)*(2/3-t)*6:n)*ge+.5|0},H1=function(t,n,i){var s=t?Is(t)?[t>>16,t>>8&ge,t&ge]:0:Uc.black,r,a,o,l,c,u,f,h,p,_;if(!s){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Uc[t])s=Uc[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+r+r+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return s=parseInt(t.substr(1,6),16),[s>>16,s>>8&ge,s&ge,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),s=[t>>16,t>>8&ge,t&ge]}else if(t.substr(0,3)==="hsl"){if(s=_=t.match(u1),!n)l=+s[0]%360/360,c=+s[1]/100,u=+s[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,s.length>3&&(s[3]*=1),s[0]=jg(l+1/3,r,a),s[1]=jg(l,r,a),s[2]=jg(l-1/3,r,a);else if(~t.indexOf("="))return s=t.match(m0),i&&s.length<4&&(s[3]=1),s}else s=t.match(u1)||Uc.transparent;s=s.map(Number)}return n&&!_&&(r=s[0]/ge,a=s[1]/ge,o=s[2]/ge,f=Math.max(r,a,o),h=Math.min(r,a,o),u=(f+h)/2,f===h?l=c=0:(p=f-h,c=u>.5?p/(2-f-h):p/(f+h),l=f===r?(a-o)/p+(a<o?6:0):f===a?(o-r)/p+2:(r-a)/p+4,l*=60),s[0]=~~(l+.5),s[1]=~~(c*100+.5),s[2]=~~(u*100+.5)),i&&s.length<4&&(s[3]=1),s},G1=function(t){var n=[],i=[],s=-1;return t.split(Ns).forEach(function(r){var a=r.match(Ma)||[];n.push.apply(n,a),i.push(s+=a.length+1)}),n.c=i,n},g1=function(t,n,i){var s="",r=(t+s).match(Ns),a=n?"hsla(":"rgba(",o=0,l,c,u,f;if(!r)return t;if(r=r.map(function(h){return(h=H1(h,n,1))&&a+(n?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(u=G1(t),l=i.c,l.join(s)!==u.c.join(s)))for(c=t.replace(Ns,"1").split(Ma),f=c.length-1;o<f;o++)s+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:i).shift());if(!c)for(c=t.split(Ns),f=c.length-1;o<f;o++)s+=c[o]+r[o];return s+c[f]},Ns=(function(){var e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Uc)e+="|"+t+"\\b";return new RegExp(e+")","gi")})(),YC=/hsl[a]?\(/,b0=function(t){var n=t.join(" "),i;if(Ns.lastIndex=0,Ns.test(n))return i=YC.test(n),t[1]=g1(t[1],i),t[0]=g1(t[0],i,G1(t[1])),!0},zc,Fn=(function(){var e=Date.now,t=500,n=33,i=e(),s=i,r=1e3/240,a=r,o=[],l,c,u,f,h,p,_=function g(m){var d=e()-s,v=m===!0,y,x,T,w;if((d>t||d<0)&&(i+=d-n),s+=d,T=s-i,y=T-a,(y>0||v)&&(w=++f.frame,h=T-f.time*1e3,f.time=T=T/1e3,a+=y+(y>=r?4:r-y),x=1),v||(l=c(g)),x)for(p=0;p<o.length;p++)o[p](T,h,w,m)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){S1&&(!s0&&p0()&&($i=s0=window,_0=$i.document||{},ai.gsap=vn,($i.gsapVersions||($i.gsapVersions=[])).push(vn.version),M1(of||$i.GreenSockGlobals||!$i.gsap&&$i||{}),F1.forEach(V1)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,a-f.time*1e3+1|0)},zc=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),zc=0,c=Bc},lagSmoothing:function(m,d){t=m||1/0,n=Math.min(d||33,t)},fps:function(m){r=1e3/(m||240),a=f.time*1e3+r},add:function(m,d,v){var y=d?function(x,T,w,E){m(x,T,w,E),f.remove(y)}:m;return f.remove(m),o[v?"unshift":"push"](y),qo(),y},remove:function(m,d){~(d=o.indexOf(m))&&o.splice(d,1)&&p>=d&&p--},_listeners:o},f})(),qo=function(){return!zc&&Fn.wake()},Kt={},ZC=/^[\d.\-M][\d.\-,\s]/,JC=/["']/g,KC=function(t){for(var n={},i=t.substr(1,t.length-3).split(":"),s=i[0],r=1,a=i.length,o,l,c;r<a;r++)l=i[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),n[s]=isNaN(c)?c.replace(JC,"").trim():+c,s=l.substr(o+1).trim();return n},QC=function(t){var n=t.indexOf("(")+1,i=t.indexOf(")"),s=t.indexOf("(",n);return t.substring(n,~s&&s<i?t.indexOf(")",i+1):i)},jC=function(t){var n=(t+"").split("("),i=Kt[n[0]];return i&&n.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[KC(n[1])]:QC(t).split(",").map(A1)):Kt._CE&&ZC.test(t)?Kt._CE("",t):i},$C=function(t){return function(n){return 1-t(1-n)}},xa=function(t,n){return t&&(Be(t)?t:Kt[t]||jC(t))||n},Ta=function(t,n,i,s){i===void 0&&(i=function(l){return 1-n(1-l)}),s===void 0&&(s=function(l){return l<.5?n(l*2)/2:1-n((1-l)*2)/2});var r={easeIn:n,easeOut:i,easeInOut:s},a;return wn(t,function(o){Kt[o]=ai[o]=r,Kt[a=o.toLowerCase()]=i;for(var l in r)Kt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Kt[o+"."+l]=r[l]}),r},k1=function(t){return function(n){return n<.5?(1-t(1-n*2))/2:.5+t((n-.5)*2)/2}},$g=function e(t,n,i){var s=n>=1?n:1,r=(i||(t?.3:.45))/(n<1?n:1),a=r/i0*(Math.asin(1/s)||0),o=function(u){return u===1?1:s*Math.pow(2,-10*u)*bC((u-a)*r)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:k1(o);return r=i0/r,l.config=function(c,u){return e(t,c,u)},l},t0=function e(t,n){n===void 0&&(n=1.70158);var i=function(a){return a?--a*a*((n+1)*a+n)+1:0},s=t==="out"?i:t==="in"?function(r){return 1-i(1-r)}:k1(i);return s.config=function(r){return e(t,r)},s};wn("Linear,Quad,Cubic,Quart,Quint,Strong",function(e,t){var n=t<5?t+1:t;Ta(e+",Power"+(n-1),t?function(i){return Math.pow(i,n)}:function(i){return i},function(i){return 1-Math.pow(1-i,n)},function(i){return i<.5?Math.pow(i*2,n)/2:1-Math.pow((1-i)*2,n)/2})});Kt.Linear.easeNone=Kt.none=Kt.Linear.easeIn;Ta("Elastic",$g("in"),$g("out"),$g());(function(e,t){var n=1/t,i=2*n,s=2.5*n,r=function(o){return o<n?e*o*o:o<i?e*Math.pow(o-1.5/t,2)+.75:o<s?e*(o-=2.25/t)*o+.9375:e*Math.pow(o-2.625/t,2)+.984375};Ta("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Ta("Expo",function(e){return Math.pow(2,10*(e-1))*e+e*e*e*e*e*e*(1-e)});Ta("Circ",function(e){return-(y1(1-e*e)-1)});Ta("Sine",function(e){return e===1?1:-MC(e*xC)+1});Ta("Back",t0("in"),t0("out"),t0());Kt.SteppedEase=Kt.steps=ai.SteppedEase={config:function(t,n){t===void 0&&(t=1);var i=1/t,s=t+(n?0:1),r=n?1:0,a=1-_e;return function(o){return((s*Vc(0,a,o)|0)+r)*i}}};Ic.ease=Kt["quad.out"];wn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(e){return y0+=e+","+e+"Params,"});var T0=function(t,n){this.id=SC++,t._gsap=this,this.target=t,this.harness=n,this.get=n?n.get:S0,this.set=n?n.getSetter:_f},Fc=(function(){function e(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,Wo(this,+n.duration,1,1),this.data=n.data,Ce&&(this._ctx=Ce,Ce.data.push(this)),zc||Fn.wake()}var t=e.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,Wo(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,s){if(qo(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(gf(this,i),!r._dp||r.parent||R1(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&ts(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===_e||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),E1(this,i,s)),this},t.time=function(i,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+d1(this))%(this._dur+this._rDelay)||(i?this._dur:0),s):this._time},t.totalProgress=function(i,s){return arguments.length?this.totalTime(this.totalDuration()*i,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+d1(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,s){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,s):this._repeat?Xo(this._tTime,r)+1:1},t.timeScale=function(i,s){if(!arguments.length)return this._rts===-_e?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?uf(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-_e?0:this._rts,this.totalTime(Vc(-Math.abs(this._delay),this.totalDuration(),r),s!==!1),mf(this),OC(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(qo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==_e&&(this._tTime-=_e)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=Ue(i);var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&ts(s,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(Vn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var s=this.parent||this._dp;return s?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?uf(s.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=RC);var s=fn;return fn=i,M0(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),fn=s,this},t.globalTime=function(i){for(var s=this,r=arguments.length?i:s.rawTime();s;)r=s._start+r/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(i):r},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,p1(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var s=this._time;return this._rDelay=i,p1(this),s?this.time(s):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,s){return this.totalTime(Ri(this,i),Vn(s))},t.restart=function(i,s){return this.play().totalTime(i?-this._delay:0,Vn(s)),this._dur||(this._zTime=-_e),this},t.play=function(i,s){return i!=null&&this.seek(i,s),this.reversed(!1).paused(!1)},t.reverse=function(i,s){return i!=null&&this.seek(i||this.totalDuration(),s),this.reversed(!0).paused(!1)},t.pause=function(i,s){return i!=null&&this.seek(i,s),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-_e:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-_e,this},t.isActive=function(){var i=this.parent||this._dp,s=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=s&&r<this.endTime(!0)-_e)},t.eventCallback=function(i,s,r){var a=this.vars;return arguments.length>1?(s?(a[i]=s,r&&(a[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=s)):delete a[i],this):a[i]},t.then=function(i){var s=this,r=s._prom;return new Promise(function(a){var o=Be(i)?i:w1,l=function(){var u=s.then;s.then=null,r&&r(),Be(o)&&(o=o(s))&&(o.then||o===s)&&(s.then=u),a(o),s.then=u};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?l():s._prom=l})},t.kill=function(){Dc(this)},e})();oi(Fc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-_e,_prom:0,_ps:!1,_rts:1});var gn=(function(e){v1(t,e);function t(i,s){var r;return i===void 0&&(i={}),r=e.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=Vn(i.sortChildren),Le&&ts(i.parent||Le,Os(r),s),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&D1(Os(r),i.scrollTrigger),r}var n=t.prototype;return n.to=function(s,r,a){return Oc(0,arguments,this),this},n.from=function(s,r,a){return Oc(1,arguments,this),this},n.fromTo=function(s,r,a,o){return Oc(2,arguments,this),this},n.set=function(s,r,a){return r.duration=0,r.parent=this,Lc(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new ke(s,r,Ri(this,a),1),this},n.call=function(s,r,a){return ts(this,ke.delayedCall(0,s,r),a)},n.staggerTo=function(s,r,a,o,l,c,u){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new ke(s,a,Ri(this,l)),this},n.staggerFrom=function(s,r,a,o,l,c,u){return a.runBackwards=1,Lc(a).immediateRender=Vn(a.immediateRender),this.staggerTo(s,r,a,o,l,c,u)},n.staggerFromTo=function(s,r,a,o,l,c,u,f){return o.startAt=a,Lc(o).immediateRender=Vn(o.immediateRender),this.staggerTo(s,r,o,l,c,u,f)},n.render=function(s,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=s<=0?0:Ue(s),f=this._zTime<0!=s<0&&(this._initted||!c),h,p,_,g,m,d,v,y,x,T,w,E;if(this!==Le&&u>l&&s>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,s+=this._time-o),h=u,x=this._start,y=this._ts,d=!y,f&&(c||(o=this._zTime),(s||!r)&&(this._zTime=s)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(m*100+s,r,a);if(h=Ue(u%m),u===l?(g=this._repeat,h=c):(T=Ue(u/m),g=~~T,g&&g===T&&(h=c,g--),h>c&&(h=c)),T=Xo(this._tTime,m),!o&&this._tTime&&T!==g&&this._tTime-T*m-this._dur<=0&&(T=g),w&&g&1&&(h=c-h,E=1),g!==T&&!this._lock){var R=w&&T&1,S=R===(w&&g&1);if(g<T&&(R=!R),o=R?0:u%c?c:u,this._lock=1,this.render(o||(E?0:Ue(g*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&ri(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,T=g),o&&o!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,o=R?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!d)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=BC(this,Ue(o),Ue(h)),v&&(u-=h-(h=v._start))),this._tTime=u,this._time=h,this._act=!!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,o=0),!o&&u&&c&&!r&&!T&&(ri(this,"onStart"),this._tTime!==u))return this;if(h>=o&&s>=0)for(p=this._first;p;){if(_=p._next,(p._act||h>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(s,r,a);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,r,a),h!==this._time||!this._ts&&!d){v=0,_&&(u+=this._zTime=-_e);break}}p=_}else{p=this._last;for(var b=s<0?s:h;p;){if(_=p._prev,(p._act||b<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(s,r,a);if(p.render(p._ts>0?(b-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(b-p._start)*p._ts,r,a||fn&&M0(p)),h!==this._time||!this._ts&&!d){v=0,_&&(u+=this._zTime=b?-_e:_e);break}}p=_}}if(v&&!r&&(this.pause(),v.render(h>=o?0:-_e)._zTime=h>=o?1:-1,this._ts))return this._start=x,mf(this),this.render(s,r,a);this._onUpdate&&!r&&ri(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(x===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((s||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Cr(this,1),!r&&!(s<0&&!o)&&(u||o||!l)&&(ri(this,u===l&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(s,r){var a=this;if(Is(r)||(r=Ri(this,r,s)),!(s instanceof Fc)){if(_n(s))return s.forEach(function(o){return a.add(o,r)}),this;if(Qe(s))return this.addLabel(s,r);if(Be(s))s=ke.delayedCall(0,s);else return this}return this!==s?ts(this,s,r):this},n.getChildren=function(s,r,a,o){s===void 0&&(s=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-Di);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof ke?r&&l.push(c):(a&&l.push(c),s&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},n.getById=function(s){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===s)return r[a]},n.remove=function(s){return Qe(s)?this.removeLabel(s):Be(s)?this.killTweensOf(s):(s.parent===this&&pf(this,s),s===this._recent&&(this._recent=this._last),ya(this))},n.totalTime=function(s,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ue(Fn.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),e.prototype.totalTime.call(this,s,r),this._forcing=0,this):this._tTime},n.addLabel=function(s,r){return this.labels[s]=Ri(this,r),this},n.removeLabel=function(s){return delete this.labels[s],this},n.addPause=function(s,r,a){var o=ke.delayedCall(0,r||Bc,a);return o.data="isPause",this._hasPause=1,ts(this,o,Ri(this,s))},n.removePause=function(s){var r=this._first;for(s=Ri(this,s);r;)r._start===s&&r.data==="isPause"&&Cr(r),r=r._next},n.killTweensOf=function(s,r,a){for(var o=this.getTweensOf(s,a),l=o.length;l--;)Er!==o[l]&&o[l].kill(s,r);return this},n.getTweensOf=function(s,r){for(var a=[],o=Ui(s),l=this._first,c=Is(r),u;l;)l instanceof ke?DC(l._targets,o)&&(c?(!Er||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(o,r)).length&&a.push.apply(a,u),l=l._next;return a},n.tweenTo=function(s,r){r=r||{};var a=this,o=Ri(a,s),l=r,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,p,_=ke.to(a,oi({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||_e,onStart:function(){if(a.pause(),!p){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&Wo(_,m,0,1).render(_._time,!0,!0),p=1}u&&u.apply(_,f||[])}},r));return h?_.render(0):_},n.tweenFromTo=function(s,r,a){return this.tweenTo(r,oi({startAt:{time:Ri(this,s)}},a))},n.recent=function(){return this._recent},n.nextLabel=function(s){return s===void 0&&(s=this._time),m1(this,Ri(this,s))},n.previousLabel=function(s){return s===void 0&&(s=this._time),m1(this,Ri(this,s),1)},n.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+_e)},n.shiftChildren=function(s,r,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(s=Ue(s);o;)o._start>=a&&(o._start+=s,o._end+=s),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=s);return ya(this)},n.invalidate=function(s){var r=this._first;for(this._lock=0;r;)r.invalidate(s),r=r._next;return e.prototype.invalidate.call(this,s)},n.clear=function(s){s===void 0&&(s=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),ya(this)},n.totalDuration=function(s){var r=0,a=this,o=a._last,l=Di,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-s:s));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,ts(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=Ue(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Wo(a,a===Le&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(s){if(Le._ts&&(E1(Le,uf(s,Le)),T1=Fn.frame),Fn.frame>=h1){h1+=Hn.autoSleep||120;var r=Le._first;if((!r||!r._ts)&&Hn.autoSleep&&Fn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Fn.sleep()}}},t})(Fc);oi(gn.prototype,{_lock:0,_hasPause:0,_forcing:0});var tR=function(t,n,i,s,r,a,o){var l=new Cn(this._pt,t,n,0,1,R0,null,r),c=0,u=0,f,h,p,_,g,m,d,v;for(l.b=i,l.e=s,i+="",s+="",(d=~s.indexOf("random("))&&(s=Yo(s)),a&&(v=[i,s],a(v,t,n),i=v[0],s=v[1]),h=i.match(Kg)||[];f=Kg.exec(s);)_=f[0],g=s.substring(c,f.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?ba(m,_)-m:parseFloat(_)-m,m:p&&p<4?Math.round:0},c=Kg.lastIndex);return l.c=c<s.length?s.substring(c,s.length):"",l.fp=o,(g0.test(s)||d)&&(l.e=0),this._pt=l,l},E0=function(t,n,i,s,r,a,o,l,c,u){Be(s)&&(s=s(r||0,t,a));var f=t[n],h=i!=="get"?i:Be(f)?c?t[n.indexOf("set")||!Be(t["get"+n.substr(3)])?n:"get"+n.substr(3)](c):t[n]():f,p=Be(f)?c?rR:q1:C0,_;if(Qe(s)&&(~s.indexOf("random(")&&(s=Yo(s)),s.charAt(1)==="="&&(_=ba(h,s)+(dn(h)||0),(_||_===0)&&(s=_))),!u||h!==s||h0)return!isNaN(h*s)&&s!==""?(_=new Cn(this._pt,t,n,+h||0,s-(h||0),typeof f=="boolean"?oR:Y1,0,p),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!f&&!(n in t)&&df(n,s),tR.call(this,t,n,h,s,p,l||Hn.stringFilter,c))},eR=function(t,n,i,s,r){if(Be(t)&&(t=Nc(t,r,n,i,s)),!es(t)||t.style&&t.nodeType||_n(t)||x1(t))return Qe(t)?Nc(t,r,n,i,s):t;var a={},o;for(o in t)a[o]=Nc(t[o],r,n,i,s);return a},A0=function(t,n,i,s,r,a){var o,l,c,u;if(zn[t]&&(o=new zn[t]).init(r,o.rawVars?n[t]:eR(n[t],s,r,a,i),i,s,a)!==!1&&(i._pt=l=new Cn(i._pt,r,t,0,1,o.render,o,0,o.priority),i!==Go))for(c=i._ptLookup[i._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Er,h0,w0=function e(t,n,i){var s=t.vars,r=s.ease,a=s.startAt,o=s.immediateRender,l=s.lazy,c=s.onUpdate,u=s.runBackwards,f=s.yoyoEase,h=s.keyframes,p=s.autoRevert,_=t._dur,g=t._startAt,m=t._targets,d=t.parent,v=d&&d.data==="nested"?d.vars.targets:m,y=t._overwrite==="auto"&&!d0,x=t.timeline,T=s.easeReverse||f,w,E,R,S,b,U,P,B,H,X,G,J,F;if(x&&(!h||!r)&&(r="none"),t._ease=xa(r,Ic.ease),t._rEase=T&&(xa(T)||t._ease),t._from=!x&&!!s.runBackwards,t._from&&(t.ratio=1),!x||h&&!s.stagger){if(B=m[0]?wr(m[0]).harness:0,J=B&&s[B.prop],w=cf(s,v0),g&&(g._zTime<0&&g.progress(1),n<0&&u&&o&&!p?g.render(-1,!0):g.revert(u&&_?sf:CC),g._lazy=0),a){if(Cr(t._startAt=ke.set(m,oi({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!g&&Vn(l),startAt:null,delay:0,onUpdate:c&&function(){return ri(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(fn||!o&&!p)&&t._startAt.revert(sf),o&&_&&n<=0&&i<=0){n&&(t._zTime=n);return}}else if(u&&_&&!g){if(n&&(o=!1),R=oi({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Vn(l),immediateRender:o,stagger:0,parent:d},w),J&&(R[B.prop]=J),Cr(t._startAt=ke.set(m,R)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(fn?t._startAt.revert(sf):t._startAt.render(-1,!0)),t._zTime=n,!o)e(t._startAt,_e,_e);else if(!n)return}for(t._pt=t._ptCache=0,l=_&&Vn(l)||l&&!_,E=0;E<m.length;E++){if(b=m[E],P=b._gsap||x0(m)[E]._gsap,t._ptLookup[E]=X={},r0[P.id]&&Ar.length&&lf(),G=v===m?E:v.indexOf(b),B&&(H=new B).init(b,J||w,t,G,v)!==!1&&(t._pt=S=new Cn(t._pt,b,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(rt){X[rt]=S}),H.priority&&(U=1)),!B||J)for(R in w)zn[R]&&(H=A0(R,w,t,G,b,v))?H.priority&&(U=1):X[R]=S=E0.call(t,b,R,"get",w[R],G,v,0,s.stringFilter);t._op&&t._op[E]&&t.kill(b,t._op[E]),y&&t._pt&&(Er=t,Le.killTweensOf(b,X,t.globalTime(n)),F=!t.parent,Er=0),t._pt&&l&&(r0[P.id]=1)}U&&U0(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!F,h&&n<=0&&x.render(Di,!0,!0)},nR=function(t,n,i,s,r,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[n],u,f,h,p;if(!c)for(c=t._ptCache[n]=[],h=t._ptLookup,p=t._targets.length;p--;){if(u=h[p][n],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==n&&u.fp!==n;)u=u._next;if(!u)return h0=1,t.vars[n]="+=0",w0(t,o),h0=0,l?Pc(n+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(p=c.length;p--;)f=c[p],u=f._pt||f,u.s=(s||s===0)&&!r?s:u.s+(s||0)+a*u.c,u.c=i-u.s,f.e&&(f.e=ze(i)+dn(f.e)),f.b&&(f.b=u.s+dn(f.b))},iR=function(t,n){var i=t[0]?wr(t[0]).harness:0,s=i&&i.aliases,r,a,o,l;if(!s)return n;r=ko({},n);for(a in s)if(a in r)for(l=s[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},sR=function(t,n,i,s){var r=n.ease||s||"power1.inOut",a,o;if(_n(n))o=i[t]||(i[t]=[]),n.forEach(function(l,c){return o.push({t:c/(n.length-1)*100,v:l,e:r})});else for(a in n)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:n[a],e:r})},Nc=function(t,n,i,s,r){return Be(t)?t.call(n,i,s,r):Qe(t)&&~t.indexOf("random(")?Yo(t):t},X1=y0+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",W1={};wn(X1+",id,stagger,delay,duration,paused,scrollTrigger",function(e){return W1[e]=1});var ke=(function(e){v1(t,e);function t(i,s,r,a){var o;typeof s=="number"&&(r.duration=s,s=r,r=null),o=e.call(this,a?s:Lc(s))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,p=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,d=s.parent||Le,v=(_n(i)||x1(i)?Is(i[0]):"length"in s)?[i]:Ui(i),y,x,T,w,E,R,S,b;if(o._targets=v.length?x0(v):Pc("GSAP target "+i+" not found. https://gsap.com",!Hn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,_||h||nf(c)||nf(u)){s=o.vars;var U=s.easeReverse||s.yoyoEase;if(y=o.timeline=new gn({data:"nested",defaults:g||{},targets:d&&d.data==="nested"?d.vars.targets:v}),y.kill(),y.parent=y._dp=Os(o),y._start=0,h||nf(c)||nf(u)){if(w=v.length,S=h&&N1(h),es(h))for(E in h)~X1.indexOf(E)&&(b||(b={}),b[E]=h[E]);for(x=0;x<w;x++)T=cf(s,W1),T.stagger=0,U&&(T.easeReverse=U),b&&ko(T,b),R=v[x],T.duration=+Nc(c,Os(o),x,R,v),T.delay=(+Nc(u,Os(o),x,R,v)||0)-o._delay,!h&&w===1&&T.delay&&(o._delay=u=T.delay,o._start+=u,T.delay=0),y.to(R,T,S?S(x,R,v):0),y._ease=Kt.none;y.duration()?c=u=0:o.timeline=0}else if(_){Lc(oi(y.vars.defaults,{ease:"none"})),y._ease=xa(_.ease||s.ease||"none");var P=0,B,H,X;if(_n(_))_.forEach(function(G){return y.to(v,G,">")}),y.duration();else{T={};for(E in _)E==="ease"||E==="easeEach"||sR(E,_[E],T,_.easeEach);for(E in T)for(B=T[E].sort(function(G,J){return G.t-J.t}),P=0,x=0;x<B.length;x++)H=B[x],X={ease:H.e,duration:(H.t-(x?B[x-1].t:0))/100*c},X[E]=H.v,y.to(v,X,P),P+=X.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||o.duration(c=y.duration())}else o.timeline=0;return p===!0&&!d0&&(Er=Os(o),Le.killTweensOf(v),Er=0),ts(d,Os(o),r),s.reversed&&o.reverse(),s.paused&&o.paused(!0),(f||!c&&!_&&o._start===Ue(d._time)&&Vn(f)&&NC(Os(o))&&d.data!=="nested")&&(o._tTime=-_e,o.render(Math.max(0,-u)||0)),m&&D1(Os(o),m),o}var n=t.prototype;return n.render=function(s,r,a){var o=this._time,l=this._tDur,c=this._dur,u=s<0,f=s>l-_e&&!u?l:s<_e?0:s,h,p,_,g,m,d,v,y;if(!c)PC(this,s,r,a);else if(f!==this._tTime||!s||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,y=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+s,r,a);if(h=Ue(f%g),f===l?(_=this._repeat,h=c):(m=Ue(f/g),_=~~m,_&&_===m?(h=c,_--):h>c&&(h=c)),d=this._yoyo&&_&1,d&&(h=c-h),m=Xo(this._tTime,g),h===o&&!a&&this._initted&&_===m)return this._tTime=f,this;_!==m&&this.vars.repeatRefresh&&!d&&!this._lock&&h!==g&&this._initted&&(this._lock=a=1,this.render(Ue(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(U1(this,u?s:h,a,r,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(s,r,a)}if(this._rEase){var x=h<o;if(x!==this._inv){var T=x?o:c-o;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=T?(x?-1:1)/T:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(h/c);if(this._from&&(this.ratio=v=1-v),this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&f&&!r&&!m&&(ri(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;y&&y.render(s<0?s:y._dur*y._ease(h/this._dur),r,a)||this._startAt&&(this._zTime=s),this._onUpdate&&!r&&(u&&a0(this,s,r,a),ri(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&ri(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&a0(this,s,!0,!0),(s||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Cr(this,1),!r&&!(u&&!o)&&(f||o||d)&&(ri(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),e.prototype.invalidate.call(this,s)},n.resetTo=function(s,r,a,o,l){zc||Fn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||w0(this,c),u=this._ease(c/this._dur),nR(this,s,r,a,o,u,c,l)?this.resetTo(s,r,a,o,1):(gf(this,0),this.parent||C1(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(s,r){if(r===void 0&&(r="all"),!s&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Dc(this):this.scrollTrigger&&this.scrollTrigger.kill(!!fn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(s,r,Er&&Er.vars.overwrite!==!0)._first||Dc(this),this.parent&&a!==this.timeline.totalDuration()&&Wo(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=s?Ui(s):o,c=this._ptLookup,u=this._pt,f,h,p,_,g,m,d;if((!r||r==="all")&&LC(o,l))return r==="all"&&(this._pt=0),Dc(this);for(f=this._op=this._op||[],r!=="all"&&(Qe(r)&&(g={},wn(r,function(v){return g[v]=1}),r=g),r=iR(o,r)),d=o.length;d--;)if(~l.indexOf(o[d])){h=c[d],r==="all"?(f[d]=r,_=h,p={}):(p=f[d]=f[d]||{},_=r);for(g in _)m=h&&h[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&pf(this,m,"_pt"),delete h[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&u&&Dc(this),this},t.to=function(s,r){return new t(s,r,arguments[2])},t.from=function(s,r){return Oc(1,arguments)},t.delayedCall=function(s,r,a,o){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(s,r,a){return Oc(2,arguments)},t.set=function(s,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(s,r)},t.killTweensOf=function(s,r,a){return Le.killTweensOf(s,r,a)},t})(Fc);oi(ke.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});wn("staggerTo,staggerFrom,staggerFromTo",function(e){ke[e]=function(){var t=new gn,n=l0.call(arguments,0);return n.splice(e==="staggerFromTo"?5:4,0,0),t[e].apply(t,n)}});var C0=function(t,n,i){return t[n]=i},q1=function(t,n,i){return t[n](i)},rR=function(t,n,i,s){return t[n](s.fp,i)},aR=function(t,n,i){return t.setAttribute(n,i)},_f=function(t,n){return Be(t[n])?q1:ff(t[n])&&t.setAttribute?aR:C0},Y1=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e6)/1e6,n)},oR=function(t,n){return n.set(n.t,n.p,!!(n.s+n.c*t),n)},R0=function(t,n){var i=n._pt,s="";if(!t&&n.b)s=n.b;else if(t===1&&n.e)s=n.e;else{for(;i;)s=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+s,i=i._next;s+=n.c}n.set(n.t,n.p,s,n)},D0=function(t,n){for(var i=n._pt;i;)i.r(t,i.d),i=i._next},lR=function(t,n,i,s){for(var r=this._pt,a;r;)a=r._next,r.p===s&&r.modifier(t,n,i),r=a},cR=function(t){for(var n=this._pt,i,s;n;)s=n._next,n.p===t&&!n.op||n.op===t?pf(this,n,"_pt"):n.dep||(i=1),n=s;return!i},uR=function(t,n,i,s){s.mSet(t,n,s.m.call(s.tween,i,s.mt),s)},U0=function(t){for(var n=t._pt,i,s,r,a;n;){for(i=n._next,s=r;s&&s.pr>n.pr;)s=s._next;(n._prev=s?s._prev:a)?n._prev._next=n:r=n,(n._next=s)?s._prev=n:a=n,n=i}t._pt=r},Cn=(function(){function e(n,i,s,r,a,o,l,c,u){this.t=i,this.s=r,this.c=a,this.p=s,this.r=o||Y1,this.d=l||this,this.set=c||C0,this.pr=u||0,this._next=n,n&&(n._prev=this)}var t=e.prototype;return t.modifier=function(i,s,r){this.mSet=this.mSet||this.set,this.set=uR,this.m=i,this.mt=r,this.tween=s},e})();wn(y0+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(e){return v0[e]=1});ai.TweenMax=ai.TweenLite=ke;ai.TimelineLite=ai.TimelineMax=gn;Le=new gn({sortChildren:!1,defaults:Ic,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Hn.stringFilter=b0;var Sa=[],af={},hR=[],_1=0,fR=0,e0=function(t){return(af[t]||hR).map(function(n){return n()})},f0=function(){var t=Date.now(),n=[];t-_1>2&&(e0("matchMediaInit"),Sa.forEach(function(i){var s=i.queries,r=i.conditions,a,o,l,c;for(o in s)a=$i.matchMedia(s[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(i.revert(),l&&n.push(i))}),e0("matchMediaRevert"),n.forEach(function(i){return i.onMatch(i,function(s){return i.add(null,s)})}),_1=t,e0("matchMedia"))},Z1=(function(){function e(n,i){this.selector=i&&c0(i),this.data=[],this._r=[],this.isReverted=!1,this.id=fR++,n&&this.add(n)}var t=e.prototype;return t.add=function(i,s,r){Be(i)&&(r=s,s=i,i=Be);var a=this,o=function(){var c=Ce,u=a.selector,f;return c&&c!==a&&c.data.push(a),r&&(a.selector=c0(r)),Ce=a,f=s.apply(a,arguments),Be(f)&&a._r.push(f),Ce=c,a.selector=u,a.isReverted=!1,f};return a.last=o,i===Be?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},t.ignore=function(i){var s=Ce;Ce=null,i(this),Ce=s},t.getTweens=function(){var i=[];return this.data.forEach(function(s){return s instanceof e?i.push.apply(i,s.getTweens()):s instanceof ke&&!(s.parent&&s.parent.data==="nested")&&i.push(s)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,s){var r=this;if(i?(function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=r.data.length;l--;)c=r.data[l],c instanceof gn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ke)&&c.revert&&c.revert(i);r._r.forEach(function(u){return u(i,r)}),r.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),s)for(var a=Sa.length;a--;)Sa[a].id===this.id&&Sa.splice(a,1)},t.revert=function(i){this.kill(i||{})},e})(),dR=(function(){function e(n){this.contexts=[],this.scope=n,Ce&&Ce.data.push(this)}var t=e.prototype;return t.add=function(i,s,r){es(i)||(i={matches:i});var a=new Z1(0,r||this.scope),o=a.conditions={},l,c,u;Ce&&!a.selector&&(a.selector=Ce.selector),this.contexts.push(a),s=a.add("onMatch",s),a.queries=i;for(c in i)c==="all"?u=1:(l=$i.matchMedia(i[c]),l&&(Sa.indexOf(a)<0&&Sa.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(f0):l.addEventListener("change",f0)));return u&&s(a,function(f){return a.add(null,f)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(s){return s.kill(i,!0)})},e})(),hf={registerPlugin:function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];n.forEach(function(s){return V1(s)})},timeline:function(t){return new gn(t)},getTweensOf:function(t,n){return Le.getTweensOf(t,n)},getProperty:function(t,n,i,s){Qe(t)&&(t=Ui(t)[0]);var r=wr(t||{}).get,a=i?w1:A1;return i==="native"&&(i=""),t&&(n?a((zn[n]&&zn[n].get||r)(t,n,i,s)):function(o,l,c){return a((zn[o]&&zn[o].get||r)(t,o,l,c))})},quickSetter:function(t,n,i){if(t=Ui(t),t.length>1){var s=t.map(function(u){return vn.quickSetter(u,n,i)}),r=s.length;return function(u){for(var f=r;f--;)s[f](u)}}t=t[0]||{};var a=zn[n],o=wr(t),l=o.harness&&(o.harness.aliases||{})[n]||n,c=a?function(u){var f=new a;Go._pt=0,f.init(t,i?u+i:u,Go,0,[t]),f.render(1,f),Go._pt&&D0(1,Go)}:o.set(t,l);return a?c:function(u){return c(t,l,i?u+i:u,o,1)}},quickTo:function(t,n,i){var s,r=vn.to(t,oi((s={},s[n]="+=0.1",s.paused=!0,s.stagger=0,s),i||{})),a=function(l,c,u){return r.resetTo(n,l,c,u)};return a.tween=r,a},isTweening:function(t){return Le.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=xa(t.ease,Ic.ease)),f1(Ic,t||{})},config:function(t){return f1(Hn,t||{})},registerEffect:function(t){var n=t.name,i=t.effect,s=t.plugins,r=t.defaults,a=t.extendTimeline;(s||"").split(",").forEach(function(o){return o&&!zn[o]&&!ai[o]&&Pc(n+" effect requires "+o+" plugin.")}),Qg[n]=function(o,l,c){return i(Ui(o),oi(l||{},r),c)},a&&(gn.prototype[n]=function(o,l,c){return this.add(Qg[n](o,es(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,n){Kt[t]=xa(n)},parseEase:function(t,n){return arguments.length?xa(t,n):Kt},getById:function(t){return Le.getById(t)},exportRoot:function(t,n){t===void 0&&(t={});var i=new gn(t),s,r;for(i.smoothChildTiming=Vn(t.smoothChildTiming),Le.remove(i),i._dp=0,i._time=i._tTime=Le._time,s=Le._first;s;)r=s._next,(n||!(!s._dur&&s instanceof ke&&s.vars.onComplete===s._targets[0]))&&ts(i,s,s._start-s._delay),s=r;return ts(Le,i,0),i},context:function(t,n){return t?new Z1(t,n):Ce},matchMedia:function(t){return new dR(t)},matchMediaRefresh:function(){return Sa.forEach(function(t){var n=t.conditions,i,s;for(s in n)n[s]&&(n[s]=!1,i=1);i&&t.revert()})||f0()},addEventListener:function(t,n){var i=af[t]||(af[t]=[]);~i.indexOf(n)||i.push(n)},removeEventListener:function(t,n){var i=af[t],s=i&&i.indexOf(n);s>=0&&i.splice(s,1)},utils:{wrap:XC,wrapYoyo:WC,distribute:N1,random:P1,snap:I1,normalize:kC,getUnit:dn,clamp:FC,splitColor:H1,toArray:Ui,selector:c0,mapRange:z1,pipe:HC,unitize:GC,interpolate:qC,shuffle:O1},install:M1,effects:Qg,ticker:Fn,updateRoot:gn.updateRoot,plugins:zn,globalTimeline:Le,core:{PropTween:Cn,globals:b1,Tween:ke,Timeline:gn,Animation:Fc,getCache:wr,_removeLinkedListItem:pf,reverting:function(){return fn},context:function(t){return t&&Ce&&(Ce.data.push(t),t._ctx=Ce),Ce},suppressOverwrites:function(t){return d0=t}}};wn("to,from,fromTo,delayedCall,set,killTweensOf",function(e){return hf[e]=ke[e]});Fn.add(gn.updateRoot);Go=hf.to({},{duration:0});var pR=function(t,n){for(var i=t._pt;i&&i.p!==n&&i.op!==n&&i.fp!==n;)i=i._next;return i},mR=function(t,n){var i=t._targets,s,r,a;for(s in n)for(r=i.length;r--;)a=t._ptLookup[r][s],a&&(a=a.d)&&(a._pt&&(a=pR(a,s)),a&&a.modifier&&a.modifier(n[s],t,i[r],s))},n0=function(t,n){return{name:t,headless:1,rawVars:1,init:function(s,r,a){a._onInit=function(o){var l,c;if(Qe(r)&&(l={},wn(r,function(u){return l[u]=1}),r=l),n){l={};for(c in r)l[c]=n(r[c]);r=l}mR(o,r)}}}},vn=hf.registerPlugin({name:"attr",init:function(t,n,i,s,r){var a,o,l;this.tween=i;for(a in n)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",n[a],s,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,n){for(var i=n._pt;i;)fn?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,n){for(var i=n.length;i--;)this.add(t,i,t[i]||0,n[i],0,0,0,0,0,1)}},n0("roundProps",u0),n0("modifiers"),n0("snap",I1))||hf;ke.version=gn.version=vn.version="3.15.0";S1=1;p0()&&qo();var gR=Kt.Power0,_R=Kt.Power1,vR=Kt.Power2,yR=Kt.Power3,xR=Kt.Power4,SR=Kt.Linear,MR=Kt.Quad,bR=Kt.Cubic,TR=Kt.Quart,ER=Kt.Quint,AR=Kt.Strong,wR=Kt.Elastic,CR=Kt.Back,RR=Kt.SteppedEase,DR=Kt.Bounce,UR=Kt.Sine,LR=Kt.Expo,OR=Kt.Circ;var J1,Dr,Jo,B0,Ca,NR,K1,z0,IR=function(){return typeof window<"u"},Bs={},wa=180/Math.PI,Ko=Math.PI/180,Zo=Math.atan2,Q1=1e8,F0=/([A-Z])/g,PR=/(left|right|width|margin|padding|x)/i,BR=/[\s,\(]\S/,ns={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},O0=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},zR=function(t,n){return n.set(n.t,n.p,t===1?n.e:Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},FR=function(t,n){return n.set(n.t,n.p,t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},VR=function(t,n){return n.set(n.t,n.p,t===1?n.e:t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},HR=function(t,n){var i=n.s+n.c*t;n.set(n.t,n.p,~~(i+(i<0?-.5:.5))+n.u,n)},rb=function(t,n){return n.set(n.t,n.p,t?n.e:n.b,n)},ab=function(t,n){return n.set(n.t,n.p,t!==1?n.b:n.e,n)},GR=function(t,n,i){return t.style[n]=i},kR=function(t,n,i){return t.style.setProperty(n,i)},XR=function(t,n,i){return t._gsap[n]=i},WR=function(t,n,i){return t._gsap.scaleX=t._gsap.scaleY=i},qR=function(t,n,i,s,r){var a=t._gsap;a.scaleX=a.scaleY=i,a.renderTransform(r,a)},YR=function(t,n,i,s,r){var a=t._gsap;a[n]=i,a.renderTransform(r,a)},Oe="transform",Gn=Oe+"Origin",ZR=function e(t,n){var i=this,s=this.target,r=s.style,a=s._gsap;if(t in Bs&&r){if(this.tfm=this.tfm||{},t!=="transform")t=ns[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return i.tfm[o]=Ps(s,o)}):this.tfm[t]=a.x?a[t]:Ps(s,t),t===Gn&&(this.tfm.zOrigin=a.zOrigin);else return ns.transform.split(",").forEach(function(o){return e.call(i,o,n)});if(this.props.indexOf(Oe)>=0)return;a.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(Gn,n,"")),t=Oe}(r||n)&&this.props.push(t,n,r[t])},ob=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},JR=function(){var t=this.props,n=this.target,i=n.style,s=n._gsap,r,a;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?n[t[r]](t[r+2]):n[t[r]]=t[r+2]:t[r+2]?i[t[r]]=t[r+2]:i.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(F0,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)s[a]=this.tfm[a];s.svg&&(s.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),r=z0(),(!r||!r.isStart)&&!i[Oe]&&(ob(i),s.zOrigin&&i[Gn]&&(i[Gn]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},lb=function(t,n){var i={target:t,props:[],revert:JR,save:ZR};return t._gsap||vn.core.getCache(t),n&&t.style&&t.nodeType&&n.split(",").forEach(function(s){return i.save(s)}),i},cb,N0=function(t,n){var i=Dr.createElementNS?Dr.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Dr.createElement(t);return i&&i.style?i:Dr.createElement(t)},li=function e(t,n,i){var s=getComputedStyle(t);return s[n]||s.getPropertyValue(n.replace(F0,"-$1").toLowerCase())||s.getPropertyValue(n)||!i&&e(t,Qo(n)||n,1)||""},j1="O,Moz,ms,Ms,Webkit".split(","),Qo=function(t,n,i){var s=n||Ca,r=s.style,a=5;if(t in r&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(j1[a]+t in r););return a<0?null:(a===3?"ms":a>=0?j1[a]:"")+t},I0=function(){IR()&&window.document&&(J1=window,Dr=J1.document,Jo=Dr.documentElement,Ca=N0("div")||{style:{}},NR=N0("div"),Oe=Qo(Oe),Gn=Oe+"Origin",Ca.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",cb=!!Qo("perspective"),z0=vn.core.reverting,B0=1)},$1=function(t){var n=t.ownerSVGElement,i=N0("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=t.cloneNode(!0),r;s.style.display="block",i.appendChild(s),Jo.appendChild(i);try{r=s.getBBox()}catch{}return i.removeChild(s),Jo.removeChild(i),r},tb=function(t,n){for(var i=n.length;i--;)if(t.hasAttribute(n[i]))return t.getAttribute(n[i])},ub=function(t){var n,i;try{n=t.getBBox()}catch{n=$1(t),i=1}return n&&(n.width||n.height)||i||(n=$1(t)),n&&!n.width&&!n.x&&!n.y?{x:+tb(t,["x","cx","x1"])||0,y:+tb(t,["y","cy","y1"])||0,width:0,height:0}:n},hb=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&ub(t))},Lr=function(t,n){if(n){var i=t.style,s;n in Bs&&n!==Gn&&(n=Oe),i.removeProperty?(s=n.substr(0,2),(s==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),i.removeProperty(s==="--"?n:n.replace(F0,"-$1").toLowerCase())):i.removeAttribute(n)}},Ur=function(t,n,i,s,r,a){var o=new Cn(t._pt,n,i,0,1,a?ab:rb);return t._pt=o,o.b=s,o.e=r,t._props.push(i),o},eb={deg:1,rad:1,turn:1},KR={grid:1,flex:1},Or=function e(t,n,i,s){var r=parseFloat(i)||0,a=(i+"").trim().substr((r+"").length)||"px",o=Ca.style,l=PR.test(n),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=s==="px",p=s==="%",_,g,m,d;if(s===a||!r||eb[s]||eb[a])return r;if(a!=="px"&&!h&&(r=e(t,n,i,"px")),d=t.getCTM&&hb(t),(p||a==="%")&&(Bs[n]||~n.indexOf("adius")))return _=d?t.getBBox()[l?"width":"height"]:t[u],ze(p?r/_*f:r/100*_);if(o[l?"width":"height"]=f+(h?a:s),g=s!=="rem"&&~n.indexOf("adius")||s==="em"&&t.appendChild&&!c?t:t.parentNode,d&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===Dr||!g.appendChild)&&(g=Dr.body),m=g._gsap,m&&p&&m.width&&l&&m.time===Fn.time&&!m.uncache)return ze(r/m.width*f);if(p&&(n==="height"||n==="width")){var v=t.style[n];t.style[n]=f+s,_=t[u],v?t.style[n]=v:Lr(t,n)}else(p||a==="%")&&!KR[li(g,"display")]&&(o.position=li(t,"position")),g===t&&(o.position="static"),g.appendChild(Ca),_=Ca[u],g.removeChild(Ca),o.position="absolute";return l&&p&&(m=wr(g),m.time=Fn.time,m.width=g[u]),ze(h?_*r/f:_&&r?f/_*r:0)},Ps=function(t,n,i,s){var r;return B0||I0(),n in ns&&n!=="transform"&&(n=ns[n],~n.indexOf(",")&&(n=n.split(",")[0])),Bs[n]&&n!=="transform"?(r=kc(t,s),r=n!=="transformOrigin"?r[n]:r.svg?r.origin:yf(li(t,Gn))+" "+r.zOrigin+"px"):(r=t.style[n],(!r||r==="auto"||s||~(r+"").indexOf("calc("))&&(r=vf[n]&&vf[n](t,n,i)||li(t,n)||S0(t,n)||(n==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?Or(t,n,r,i)+i:r},QR=function(t,n,i,s){if(!i||i==="none"){var r=Qo(n,t,1),a=r&&li(t,r,1);a&&a!==i?(n=r,i=a):n==="borderColor"&&(i=li(t,"borderTopColor"))}var o=new Cn(this._pt,t.style,n,0,1,R0),l=0,c=0,u,f,h,p,_,g,m,d,v,y,x,T;if(o.b=i,o.e=s,i+="",s+="",s.substring(0,6)==="var(--"&&(s=li(t,s.substring(4,s.indexOf(")")))),s==="auto"&&(g=t.style[n],t.style[n]=s,s=li(t,n)||s,g?t.style[n]=g:Lr(t,n)),u=[i,s],b0(u),i=u[0],s=u[1],h=i.match(Ma)||[],T=s.match(Ma)||[],T.length){for(;f=Ma.exec(s);)m=f[0],v=s.substring(l,f.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),m!==(g=h[c++]||"")&&(p=parseFloat(g)||0,x=g.substr((p+"").length),m.charAt(1)==="="&&(m=ba(p,m)+x),d=parseFloat(m),y=m.substr((d+"").length),l=Ma.lastIndex-y.length,y||(y=y||Hn.units[n]||x,l===s.length&&(s+=y,o.e+=y)),x!==y&&(p=Or(t,n,g,y)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:p,c:d-p,m:_&&_<4||n==="zIndex"?Math.round:0});o.c=l<s.length?s.substring(l,s.length):""}else o.r=n==="display"&&s==="none"?ab:rb;return g0.test(s)&&(o.e=0),this._pt=o,o},nb={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},jR=function(t){var n=t.split(" "),i=n[0],s=n[1]||"50%";return(i==="top"||i==="bottom"||s==="left"||s==="right")&&(t=i,i=s,s=t),n[0]=nb[i]||i,n[1]=nb[s]||s,n.join(" ")},$R=function(t,n){if(n.tween&&n.tween._time===n.tween._dur){var i=n.t,s=i.style,r=n.u,a=i._gsap,o,l,c;if(r==="all"||r===!0)s.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Bs[o]&&(l=1,o=o==="transformOrigin"?Gn:Oe),Lr(i,o);l&&(Lr(i,Oe),a&&(a.svg&&i.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",kc(i,1),a.uncache=1,ob(s)))}},vf={clearProps:function(t,n,i,s,r){if(r.data!=="isFromStart"){var a=t._pt=new Cn(t._pt,n,i,0,0,$R);return a.u=s,a.pr=-10,a.tween=r,t._props.push(i),1}}},Gc=[1,0,0,1,0,0],fb={},db=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},ib=function(t){var n=li(t,Oe);return db(n)?Gc:n.substr(7).match(m0).map(ze)},V0=function(t,n){var i=t._gsap||wr(t),s=t.style,r=ib(t),a,o,l,c;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Gc:r):(r===Gc&&!t.offsetParent&&t!==Jo&&!i.svg&&(l=s.display,s.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,Jo.appendChild(t)),r=ib(t),l?s.display=l:Lr(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):Jo.removeChild(t))),n&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},P0=function(t,n,i,s,r,a){var o=t._gsap,l=r||V0(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,p=l[0],_=l[1],g=l[2],m=l[3],d=l[4],v=l[5],y=n.split(" "),x=parseFloat(y[0])||0,T=parseFloat(y[1])||0,w,E,R,S;i?l!==Gc&&(E=p*m-_*g)&&(R=x*(m/E)+T*(-g/E)+(g*v-m*d)/E,S=x*(-_/E)+T*(p/E)-(p*v-_*d)/E,x=R,T=S):(w=ub(t),x=w.x+(~y[0].indexOf("%")?x/100*w.width:x),T=w.y+(~(y[1]||y[0]).indexOf("%")?T/100*w.height:T)),s||s!==!1&&o.smooth?(d=x-c,v=T-u,o.xOffset=f+(d*p+v*g)-d,o.yOffset=h+(d*_+v*m)-v):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=T,o.smooth=!!s,o.origin=n,o.originIsAbsolute=!!i,t.style[Gn]="0px 0px",a&&(Ur(a,o,"xOrigin",c,x),Ur(a,o,"yOrigin",u,T),Ur(a,o,"xOffset",f,o.xOffset),Ur(a,o,"yOffset",h,o.yOffset)),t.setAttribute("data-svg-origin",x+" "+T)},kc=function(t,n){var i=t._gsap||new T0(t);if("x"in i&&!n&&!i.uncache)return i;var s=t.style,r=i.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=li(t,Gn)||"0",u,f,h,p,_,g,m,d,v,y,x,T,w,E,R,S,b,U,P,B,H,X,G,J,F,rt,lt,gt,Ot,te,ut,wt;return u=f=h=g=m=d=v=y=x=0,p=_=1,i.svg=!!(t.getCTM&&hb(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(s[Oe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Oe]!=="none"?l[Oe]:"")),s.scale=s.rotate=s.translate="none"),E=V0(t,i.svg),i.svg&&(i.uncache?(F=t.getBBox(),c=i.xOrigin-F.x+"px "+(i.yOrigin-F.y)+"px",J=""):J=!n&&t.getAttribute("data-svg-origin"),P0(t,J||c,!!J||i.originIsAbsolute,i.smooth!==!1,E)),T=i.xOrigin||0,w=i.yOrigin||0,E!==Gc&&(U=E[0],P=E[1],B=E[2],H=E[3],u=X=E[4],f=G=E[5],E.length===6?(p=Math.sqrt(U*U+P*P),_=Math.sqrt(H*H+B*B),g=U||P?Zo(P,U)*wa:0,v=B||H?Zo(B,H)*wa+g:0,v&&(_*=Math.abs(Math.cos(v*Ko))),i.svg&&(u-=T-(T*U+w*B),f-=w-(T*P+w*H))):(wt=E[6],te=E[7],lt=E[8],gt=E[9],Ot=E[10],ut=E[11],u=E[12],f=E[13],h=E[14],R=Zo(wt,Ot),m=R*wa,R&&(S=Math.cos(-R),b=Math.sin(-R),J=X*S+lt*b,F=G*S+gt*b,rt=wt*S+Ot*b,lt=X*-b+lt*S,gt=G*-b+gt*S,Ot=wt*-b+Ot*S,ut=te*-b+ut*S,X=J,G=F,wt=rt),R=Zo(-B,Ot),d=R*wa,R&&(S=Math.cos(-R),b=Math.sin(-R),J=U*S-lt*b,F=P*S-gt*b,rt=B*S-Ot*b,ut=H*b+ut*S,U=J,P=F,B=rt),R=Zo(P,U),g=R*wa,R&&(S=Math.cos(R),b=Math.sin(R),J=U*S+P*b,F=X*S+G*b,P=P*S-U*b,G=G*S-X*b,U=J,X=F),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,d=180-d),p=ze(Math.sqrt(U*U+P*P+B*B)),_=ze(Math.sqrt(G*G+wt*wt)),R=Zo(X,G),v=Math.abs(R)>2e-4?R*wa:0,x=ut?1/(ut<0?-ut:ut):0),i.svg&&(J=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!db(li(t,Oe)),J&&t.setAttribute("transform",J))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(p*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),n=n||i.uncache,i.x=u-((i.xPercent=u&&(!n&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+a,i.y=f-((i.yPercent=f&&(!n&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+a,i.z=h+a,i.scaleX=ze(p),i.scaleY=ze(_),i.rotation=ze(g)+o,i.rotationX=ze(m)+o,i.rotationY=ze(d)+o,i.skewX=v+o,i.skewY=y+o,i.transformPerspective=x+a,(i.zOrigin=parseFloat(c.split(" ")[2])||!n&&i.zOrigin||0)&&(s[Gn]=yf(c)),i.xOffset=i.yOffset=0,i.force3D=Hn.force3D,i.renderTransform=i.svg?e2:cb?pb:t2,i.uncache=0,i},yf=function(t){return(t=t.split(" "))[0]+" "+t[1]},L0=function(t,n,i){var s=dn(n);return ze(parseFloat(n)+parseFloat(Or(t,"x",i+"px",s)))+s},t2=function(t,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,pb(t,n)},Ea="0deg",Hc="0px",Aa=") ",pb=function(t,n){var i=n||this,s=i.xPercent,r=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,u=i.rotationY,f=i.rotationX,h=i.skewX,p=i.skewY,_=i.scaleX,g=i.scaleY,m=i.transformPerspective,d=i.force3D,v=i.target,y=i.zOrigin,x="",T=d==="auto"&&t&&t!==1||d===!0;if(y&&(f!==Ea||u!==Ea)){var w=parseFloat(u)*Ko,E=Math.sin(w),R=Math.cos(w),S;w=parseFloat(f)*Ko,S=Math.cos(w),a=L0(v,a,E*S*-y),o=L0(v,o,-Math.sin(w)*-y),l=L0(v,l,R*S*-y+y)}m!==Hc&&(x+="perspective("+m+Aa),(s||r)&&(x+="translate("+s+"%, "+r+"%) "),(T||a!==Hc||o!==Hc||l!==Hc)&&(x+=l!==Hc||T?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Aa),c!==Ea&&(x+="rotate("+c+Aa),u!==Ea&&(x+="rotateY("+u+Aa),f!==Ea&&(x+="rotateX("+f+Aa),(h!==Ea||p!==Ea)&&(x+="skew("+h+", "+p+Aa),(_!==1||g!==1)&&(x+="scale("+_+", "+g+Aa),v.style[Oe]=x||"translate(0, 0)"},e2=function(t,n){var i=n||this,s=i.xPercent,r=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,u=i.skewY,f=i.scaleX,h=i.scaleY,p=i.target,_=i.xOrigin,g=i.yOrigin,m=i.xOffset,d=i.yOffset,v=i.forceCSS,y=parseFloat(a),x=parseFloat(o),T,w,E,R,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ko,c*=Ko,T=Math.cos(l)*f,w=Math.sin(l)*f,E=Math.sin(l-c)*-h,R=Math.cos(l-c)*h,c&&(u*=Ko,S=Math.tan(c-u),S=Math.sqrt(1+S*S),E*=S,R*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),T*=S,w*=S)),T=ze(T),w=ze(w),E=ze(E),R=ze(R)):(T=f,R=h,w=E=0),(y&&!~(a+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(y=Or(p,"x",a,"px"),x=Or(p,"y",o,"px")),(_||g||m||d)&&(y=ze(y+_-(_*T+g*E)+m),x=ze(x+g-(_*w+g*R)+d)),(s||r)&&(S=p.getBBox(),y=ze(y+s/100*S.width),x=ze(x+r/100*S.height)),S="matrix("+T+","+w+","+E+","+R+","+y+","+x+")",p.setAttribute("transform",S),v&&(p.style[Oe]=S)},n2=function(t,n,i,s,r){var a=360,o=Qe(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?wa:1),c=l-s,u=s+c+"deg",f,h;return o&&(f=r.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*Q1)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*Q1)%a-~~(c/a)*a)),t._pt=h=new Cn(t._pt,n,i,s,c,zR),h.e=u,h.u="deg",t._props.push(i),h},sb=function(t,n){for(var i in n)t[i]=n[i];return t},i2=function(t,n,i){var s=sb({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,u,f,h,p,_;s.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[Oe]=n,o=kc(i,1),Lr(i,Oe),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Oe],a[Oe]=n,o=kc(i,1),a[Oe]=c);for(l in Bs)c=s[l],u=o[l],c!==u&&r.indexOf(l)<0&&(p=dn(c),_=dn(u),f=p!==_?Or(i,l,c,_):parseFloat(c),h=parseFloat(u),t._pt=new Cn(t._pt,o,l,f,h-f,O0),t._pt.u=_||0,t._props.push(l));sb(o,s)};wn("padding,margin,Width,Radius",function(e,t){var n="Top",i="Right",s="Bottom",r="Left",a=(t<3?[n,i,s,r]:[n+r,n+i,s+i,s+r]).map(function(o){return t<2?e+o:"border"+o+e});vf[t>1?"border"+e:e]=function(o,l,c,u,f){var h,p;if(arguments.length<4)return h=a.map(function(_){return Ps(o,_,c)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(u+"").split(" "),p={},a.forEach(function(_,g){return p[_]=h[g]=h[g]||h[(g-1)/2|0]}),o.init(l,p,f)}});var H0={name:"css",register:I0,targetTest:function(t){return t.style&&t.nodeType},init:function(t,n,i,s,r){var a=this._props,o=t.style,l=i.vars.startAt,c,u,f,h,p,_,g,m,d,v,y,x,T,w,E,R,S;B0||I0(),this.styles=this.styles||lb(t),R=this.styles.props,this.tween=i;for(g in n)if(g!=="autoRound"&&(u=n[g],!(zn[g]&&A0(g,n,i,s,t,r)))){if(p=typeof u,_=vf[g],p==="function"&&(u=u.call(i,s,t,r),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=Yo(u)),_)_(this,t,g,u,i)&&(E=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),u+="",Ns.lastIndex=0,Ns.test(c)||(m=dn(c),d=dn(u),d?m!==d&&(c=Or(t,g,c,d)+d):m&&(u+=m)),this.add(o,"setProperty",c,u,s,r,0,0,g),a.push(g),R.push(g,0,o[g]);else if(p!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(i,s,t,r):l[g],Qe(c)&&~c.indexOf("random(")&&(c=Yo(c)),dn(c+"")||c==="auto"||(c+=Hn.units[g]||dn(Ps(t,g))||""),(c+"").charAt(1)==="="&&(c=Ps(t,g))):c=Ps(t,g),h=parseFloat(c),v=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),f=parseFloat(u),g in ns&&(g==="autoAlpha"&&(h===1&&Ps(t,"visibility")==="hidden"&&f&&(h=0),R.push("visibility",0,o.visibility),Ur(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=ns[g],~g.indexOf(",")&&(g=g.split(",")[0]))),y=g in Bs,y){if(this.styles.save(g),S=u,p==="string"&&u.substring(0,6)==="var(--"){if(u=li(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var b=t.style.perspective;t.style.perspective=u,u=li(t,"perspective"),b?t.style.perspective=b:Lr(t,"perspective")}f=parseFloat(u)}if(x||(T=t._gsap,T.renderTransform&&!n.parseTransform||kc(t,n.parseTransform),w=n.smoothOrigin!==!1&&T.smooth,x=this._pt=new Cn(this._pt,o,Oe,0,1,T.renderTransform,T,0,-1),x.dep=1),g==="scale")this._pt=new Cn(this._pt,T,"scaleY",T.scaleY,(v?ba(T.scaleY,v+f):f)-T.scaleY||0,O0),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(Gn,0,o[Gn]),u=jR(u),T.svg?P0(t,u,0,w,0,this):(d=parseFloat(u.split(" ")[2])||0,d!==T.zOrigin&&Ur(this,T,"zOrigin",T.zOrigin,d),Ur(this,o,g,yf(c),yf(u)));continue}else if(g==="svgOrigin"){P0(t,u,1,w,0,this);continue}else if(g in fb){n2(this,T,g,h,v?ba(h,v+u):u);continue}else if(g==="smoothOrigin"){Ur(this,T,"smooth",T.smooth,u);continue}else if(g==="force3D"){T[g]=u;continue}else if(g==="transform"){i2(this,u,t);continue}}else g in o||(g=Qo(g)||g);if(y||(f||f===0)&&(h||h===0)&&!BR.test(u)&&g in o)m=(c+"").substr((h+"").length),f||(f=0),d=dn(u)||(g in Hn.units?Hn.units[g]:m),m!==d&&(h=Or(t,g,c,d)),this._pt=new Cn(this._pt,y?T:o,g,h,(v?ba(h,v+f):f)-h,!y&&(d==="px"||g==="zIndex")&&n.autoRound!==!1?HR:O0),this._pt.u=d||0,y&&S!==u?(this._pt.b=c,this._pt.e=S,this._pt.r=VR):m!==d&&d!=="%"&&(this._pt.b=c,this._pt.r=FR);else if(g in o)QR.call(this,t,g,c,v?v+u:u);else if(g in t)this.add(t,g,c||t[g],v?v+u:u,s,r);else if(g!=="parseTransform"){df(g,u);continue}y||(g in o?R.push(g,0,o[g]):typeof t[g]=="function"?R.push(g,2,t[g]()):R.push(g,1,c||t[g])),a.push(g)}}E&&U0(this)},render:function(t,n){if(n.tween._time||!z0())for(var i=n._pt;i;)i.r(t,i.d),i=i._next;else n.styles.revert()},get:Ps,aliases:ns,getSetter:function(t,n,i){var s=ns[n];return s&&s.indexOf(",")<0&&(n=s),n in Bs&&n!==Gn&&(t._gsap.x||Ps(t,"x"))?i&&K1===i?n==="scale"?WR:XR:(K1=i||{})&&(n==="scale"?qR:YR):t.style&&!ff(t.style[n])?GR:~n.indexOf("-")?kR:_f(t,n)},core:{_removeProperty:Lr,_getMatrix:V0}};vn.utils.checkPrefix=Qo;vn.core.getStyleSaver=lb;(function(e,t,n,i){var s=wn(e+","+t+","+n,function(r){Bs[r]=1});wn(t,function(r){Hn.units[r]="deg",fb[r]=1}),ns[s[13]]=e+","+t,wn(i,function(r){var a=r.split(":");ns[a[1]]=s[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");wn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(e){Hn.units[e]="px"});vn.registerPlugin(H0);var yn=vn.registerPlugin(H0)||vn,$O=yn.core.Tween;var pn=jr(Cl());var Lb=0,__=1,Ob=2;var v_=1,Nb=2,os=3,Xs=0,Rn=1,ls=2,Ys=0,Ia=1,y_=2,x_=3,S_=4,Ib=5,Gr=100,Pb=101,Bb=102,zb=103,Fb=104,Vb=200,Hb=201,Gb=202,kb=203,Ff=204,Vf=205,Xb=206,Wb=207,qb=208,Yb=209,Zb=210,Jb=211,Kb=212,Qb=213,jb=214,cd=0,ud=1,hd=2,Pa=3,fd=4,dd=5,pd=6,md=7,M_=0,$b=1,tT=2,Zs=0,eT=1,nT=2,iT=3,sT=4,rT=5,aT=6,oT=7;var b_=300,Ha=301,Ga=302,gd=303,_d=304,fu=306,Hf=1e3,Hr=1001,Gf=1002,Oi=1003,lT=1004;var du=1005;var ki=1006,vd=1007;var Yr=1008;var cs=1009,T_=1010,E_=1011,vl=1012,yd=1013,Zr=1014,us=1015,yl=1016,xd=1017,Sd=1018,xl=1020,A_=35902,w_=35899,C_=1021,R_=1022,Ii=1023,hl=1026,Sl=1027,D_=1028,Md=1029,U_=1030,bd=1031;var Td=1033,pu=33776,mu=33777,gu=33778,_u=33779,Ed=35840,Ad=35841,wd=35842,Cd=35843,Rd=36196,Dd=37492,Ud=37496,Ld=37808,Od=37809,Nd=37810,Id=37811,Pd=37812,Bd=37813,zd=37814,Fd=37815,Vd=37816,Hd=37817,Gd=37818,kd=37819,Xd=37820,Wd=37821,qd=36492,Yd=36494,Zd=36495,Jd=36283,Kd=36284,Qd=36285,jd=36286;var Jc=2300,kf=2301,zf=2302,h_=2400,f_=2401,d_=2402;var cT=3200,uT=3201;var hT=0,fT=1,Js="",hi="srgb",Ba="srgb-linear",Kc="linear",le="srgb";var Oa=7680;var p_=519,dT=512,pT=513,mT=514,L_=515,gT=516,_T=517,vT=518,yT=519,m_=35044;var O_="300 es",Gi=2e3,Qc=2001;var Ws=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var G0=Math.PI/180,Xf=180/Math.PI;function vu(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xn[e&255]+xn[e>>8&255]+xn[e>>16&255]+xn[e>>24&255]+"-"+xn[t&255]+xn[t>>8&255]+"-"+xn[t>>16&15|64]+xn[t>>24&255]+"-"+xn[n&63|128]+xn[n>>8&255]+"-"+xn[n>>16&255]+xn[n>>24&255]+xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]).toLowerCase()}function Qt(e,t,n){return Math.max(t,Math.min(n,e))}function s2(e,t){return(e%t+t)%t}function k0(e,t,n){return(1-n)*e+n*t}function Xc(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function kn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var Zt=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Qt(this.x,t.x,n.x),this.y=Qt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Qt(this.x,t,n),this.y=Qt(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qs=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],h=r[a+0],p=r[a+1],_=r[a+2],g=r[a+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=u,t[n+3]=f;return}if(o===1){t[n+0]=h,t[n+1]=p,t[n+2]=_,t[n+3]=g;return}if(f!==g||l!==h||c!==p||u!==_){let m=1-o,d=l*h+c*p+u*_+f*g,v=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){let T=Math.sqrt(y),w=Math.atan2(T,d*v);m=Math.sin(m*w)/T,o=Math.sin(o*w)/T}let x=o*v;if(l=l*m+h*x,c=c*m+p*x,u=u*m+_*x,f=f*m+g*x,m===1-o){let T=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=T,c*=T,u*=T,f*=T}}t[n]=l,t[n+1]=c,t[n+2]=u,t[n+3]=f}static multiplyQuaternionsFlat(t,n,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[a],h=r[a+1],p=r[a+2],_=r[a+3];return t[n]=o*_+u*f+l*p-c*h,t[n+1]=l*_+u*h+c*f-o*p,t[n+2]=c*_+u*p+o*h-l*f,t[n+3]=u*_-o*f-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),f=o(r/2),h=l(i/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"YXZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"ZXY":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"ZYX":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"YZX":this._x=h*u*f+c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f-h*p*_;break;case"XZY":this._x=h*u*f-c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],r=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+o+f;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>f){let p=2*Math.sqrt(1+i-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>f){let p=2*Math.sqrt(1+o-i-f);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+f-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,r=t._z,a=t._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-n;return this._w=p*a+n*this._w,this._x=p*i+n*this._x,this._y=p*s+n*this._y,this._z=p*r+n*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(n),r*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class e{constructor(t=0,n=0,i=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(mb.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(mb.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),u=2*(o*n-r*s),f=2*(r*i-a*n);return this.x=n+l*c+a*f-o*u,this.y=i+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Qt(this.x,t.x,n.x),this.y=Qt(this.y,t.y,n.y),this.z=Qt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Qt(this.x,t,n),this.y=Qt(this.y,t,n),this.z=Qt(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,r=t.z,a=n.x,o=n.y,l=n.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return X0.copy(this).projectOnVector(t),this.sub(X0)}reflect(t){return this.sub(X0.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},X0=new z,mb=new qs,Vt=class e{constructor(t,n,i,s,r,a,o,l,c){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,a,o,l,c)}set(t,n,i,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],_=i[8],g=s[0],m=s[3],d=s[6],v=s[1],y=s[4],x=s[7],T=s[2],w=s[5],E=s[8];return r[0]=a*g+o*v+l*T,r[3]=a*m+o*y+l*w,r[6]=a*d+o*x+l*E,r[1]=c*g+u*v+f*T,r[4]=c*m+u*y+f*w,r[7]=c*d+u*x+f*E,r[2]=h*g+p*v+_*T,r[5]=h*m+p*y+_*w,r[8]=h*d+p*x+_*E,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return n*a*u-n*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*a-o*c,h=o*l-u*r,p=c*r-a*l,_=n*f+i*h+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return t[0]=f*g,t[1]=(s*c-u*i)*g,t[2]=(o*i-s*a)*g,t[3]=h*g,t[4]=(u*n-s*l)*g,t[5]=(s*r-o*n)*g,t[6]=p*g,t[7]=(i*l-c*n)*g,t[8]=(a*n-i*r)*g,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(W0.makeScale(t,n)),this}rotate(t){return this.premultiply(W0.makeRotation(-t)),this}translate(t,n){return this.premultiply(W0.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},W0=new Vt;function N_(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function jc(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function xT(){let e=jc("canvas");return e.style.display="block",e}var gb={};function fl(e){e in gb||(gb[e]=!0,console.warn(e))}function ST(e,t,n){return new Promise(function(i,s){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var _b=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vb=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function r2(){let e={enabled:!0,workingColorSpace:Ba,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===le&&(s.r=ks(s.r),s.g=ks(s.g),s.b=ks(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===le&&(s.r=ul(s.r),s.g=ul(s.g),s.b=ul(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Js?Kc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return fl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return fl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Ba]:{primaries:t,whitePoint:i,transfer:Kc,toXYZ:_b,fromXYZ:vb,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:t,whitePoint:i,transfer:le,toXYZ:_b,fromXYZ:vb,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),e}var jt=r2();function ks(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function ul(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var jo,Wf=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{jo===void 0&&(jo=jc("canvas")),jo.width=t.width,jo.height=t.height;let s=jo.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=jo}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=jc("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ks(r[a]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ks(n[i]/255)*255):n[i]=ks(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},a2=0,dl=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:a2++}),this.uuid=vu(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(q0(s[a].image)):r.push(q0(s[a]))}else r=q0(s);i.url=r}return n||(t.images[this.uuid]=i),i}};function q0(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Wf.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var o2=0,Y0=new z,di=class e extends Ws{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=Hr,s=Hr,r=ki,a=Yr,o=Ii,l=cs,c=e.DEFAULT_ANISOTROPY,u=Js){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:o2++}),this.uuid=vu(),this.name="",this.source=new dl(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Zt(0,0),this.repeat=new Zt(1,1),this.center=new Zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Y0).x}get height(){return this.source.getSize(Y0).y}get depth(){return this.source.getSize(Y0).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==b_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hf:t.x=t.x-Math.floor(t.x);break;case Hr:t.x=t.x<0?0:1;break;case Gf:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hf:t.y=t.y-Math.floor(t.y);break;case Hr:t.y=t.y<0?0:1;break;case Gf:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};di.DEFAULT_IMAGE=null;di.DEFAULT_MAPPING=b_;di.DEFAULT_ANISOTROPY=1;var Fe=class e{constructor(t=0,n=0,i=0,s=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*n+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*n+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*n+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,r,l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],_=l[9],g=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let y=(c+1)/2,x=(p+1)/2,T=(d+1)/2,w=(u+h)/4,E=(f+g)/4,R=(_+m)/4;return y>x&&y>T?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=w/i,r=E/i):x>T?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=w/s,r=R/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=E/r,s=R/r),this.set(i,s,r,n),this}let v=Math.sqrt((m-_)*(m-_)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(f-g)/v,this.z=(h-u)/v,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Qt(this.x,t.x,n.x),this.y=Qt(this.y,t.y,n.y),this.z=Qt(this.z,t.z,n.z),this.w=Qt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Qt(this.x,t,n),this.y=Qt(this.y,t,n),this.z=Qt(this.z,t,n),this.w=Qt(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qf=class extends Ws{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ki,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Fe(0,0,t,n),this.scissorTest=!1,this.viewport=new Fe(0,0,t,n);let s={width:t,height:n,depth:i.depth},r=new di(s);this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let n={minFilter:ki,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new dl(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},rs=class extends qf{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},$c=class extends di{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Oi,this.minFilter=Oi,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Yf=class extends di{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Oi,this.minFilter=Oi,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var kr=class{constructor(t=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Fi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Fi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=Fi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(n===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Fi):Fi.fromBufferAttribute(r,a),Fi.applyMatrix4(t.matrixWorld),this.expandByPoint(Fi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xf.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xf.copy(i.boundingBox)),xf.applyMatrix4(t.matrixWorld),this.union(xf)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fi),Fi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wc),Sf.subVectors(this.max,Wc),$o.subVectors(t.a,Wc),tl.subVectors(t.b,Wc),el.subVectors(t.c,Wc),Nr.subVectors(tl,$o),Ir.subVectors(el,tl),Ra.subVectors($o,el);let n=[0,-Nr.z,Nr.y,0,-Ir.z,Ir.y,0,-Ra.z,Ra.y,Nr.z,0,-Nr.x,Ir.z,0,-Ir.x,Ra.z,0,-Ra.x,-Nr.y,Nr.x,0,-Ir.y,Ir.x,0,-Ra.y,Ra.x,0];return!Z0(n,$o,tl,el,Sf)||(n=[1,0,0,0,1,0,0,0,1],!Z0(n,$o,tl,el,Sf))?!1:(Mf.crossVectors(Nr,Ir),n=[Mf.x,Mf.y,Mf.z],Z0(n,$o,tl,el,Sf))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},zs=[new z,new z,new z,new z,new z,new z,new z,new z],Fi=new z,xf=new kr,$o=new z,tl=new z,el=new z,Nr=new z,Ir=new z,Ra=new z,Wc=new z,Sf=new z,Mf=new z,Da=new z;function Z0(e,t,n,i,s){for(let r=0,a=e.length-3;r<=a;r+=3){Da.fromArray(e,r);let o=s.x*Math.abs(Da.x)+s.y*Math.abs(Da.y)+s.z*Math.abs(Da.z),l=t.dot(Da),c=n.dot(Da),u=i.dot(Da);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var l2=new kr,qc=new z,J0=new z,pl=class{constructor(t=new z,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):l2.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qc.subVectors(t,this.center);let n=qc.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(qc,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(J0.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qc.copy(t.center).add(J0)),this.expandByPoint(qc.copy(t.center).sub(J0))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Fs=new z,K0=new z,bf=new z,Pr=new z,Q0=new z,Tf=new z,j0=new z,Zf=class{constructor(t=new z,n=new z(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fs)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=Fs.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Fs.copy(this.origin).addScaledVector(this.direction,n),Fs.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){K0.copy(t).add(n).multiplyScalar(.5),bf.copy(n).sub(t).normalize(),Pr.copy(this.origin).sub(K0);let r=t.distanceTo(n)*.5,a=-this.direction.dot(bf),o=Pr.dot(this.direction),l=-Pr.dot(bf),c=Pr.lengthSq(),u=Math.abs(1-a*a),f,h,p,_;if(u>0)if(f=a*l-o,h=a*o-l,_=r*u,f>=0)if(h>=-_)if(h<=_){let g=1/u;f*=g,h*=g,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(K0).addScaledVector(bf,h),p}intersectSphere(t,n){Fs.subVectors(t.center,this.origin);let i=Fs.dot(this.direction),s=Fs.dot(Fs)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,Fs)!==null}intersectTriangle(t,n,i,s,r){Q0.subVectors(n,t),Tf.subVectors(i,t),j0.crossVectors(Q0,Tf);let a=this.direction.dot(j0),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pr.subVectors(this.origin,t);let l=o*this.direction.dot(Tf.crossVectors(Pr,Tf));if(l<0)return null;let c=o*this.direction.dot(Q0.cross(Pr));if(c<0||l+c>a)return null;let u=-o*Pr.dot(j0);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},je=class e{constructor(t,n,i,s,r,a,o,l,c,u,f,h,p,_,g,m){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,a,o,l,c,u,f,h,p,_,g,m)}set(t,n,i,s,r,a,o,l,c,u,f,h,p,_,g,m){let d=this.elements;return d[0]=t,d[4]=n,d[8]=i,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=g,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){let n=this.elements,i=t.elements,s=1/nl.setFromMatrixColumn(t,0).length(),r=1/nl.setFromMatrixColumn(t,1).length(),a=1/nl.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let h=a*u,p=a*f,_=o*u,g=o*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+_*c,n[5]=h-g*c,n[9]=-o*l,n[2]=g-h*c,n[6]=_+p*c,n[10]=a*l}else if(t.order==="YXZ"){let h=l*u,p=l*f,_=c*u,g=c*f;n[0]=h+g*o,n[4]=_*o-p,n[8]=a*c,n[1]=a*f,n[5]=a*u,n[9]=-o,n[2]=p*o-_,n[6]=g+h*o,n[10]=a*l}else if(t.order==="ZXY"){let h=l*u,p=l*f,_=c*u,g=c*f;n[0]=h-g*o,n[4]=-a*f,n[8]=_+p*o,n[1]=p+_*o,n[5]=a*u,n[9]=g-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(t.order==="ZYX"){let h=a*u,p=a*f,_=o*u,g=o*f;n[0]=l*u,n[4]=_*c-p,n[8]=h*c+g,n[1]=l*f,n[5]=g*c+h,n[9]=p*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(t.order==="YZX"){let h=a*l,p=a*c,_=o*l,g=o*c;n[0]=l*u,n[4]=g-h*f,n[8]=_*f+p,n[1]=f,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*f+_,n[10]=h-g*f}else if(t.order==="XZY"){let h=a*l,p=a*c,_=o*l,g=o*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+g,n[5]=a*u,n[9]=p*f-_,n[2]=_*f-p,n[6]=o*u,n[10]=g*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(c2,t,u2)}lookAt(t,n,i){let s=this.elements;return ci.subVectors(t,n),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),Br.crossVectors(i,ci),Br.lengthSq()===0&&(Math.abs(i.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),Br.crossVectors(i,ci)),Br.normalize(),Ef.crossVectors(ci,Br),s[0]=Br.x,s[4]=Ef.x,s[8]=ci.x,s[1]=Br.y,s[5]=Ef.y,s[9]=ci.y,s[2]=Br.z,s[6]=Ef.z,s[10]=ci.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],_=i[2],g=i[6],m=i[10],d=i[14],v=i[3],y=i[7],x=i[11],T=i[15],w=s[0],E=s[4],R=s[8],S=s[12],b=s[1],U=s[5],P=s[9],B=s[13],H=s[2],X=s[6],G=s[10],J=s[14],F=s[3],rt=s[7],lt=s[11],gt=s[15];return r[0]=a*w+o*b+l*H+c*F,r[4]=a*E+o*U+l*X+c*rt,r[8]=a*R+o*P+l*G+c*lt,r[12]=a*S+o*B+l*J+c*gt,r[1]=u*w+f*b+h*H+p*F,r[5]=u*E+f*U+h*X+p*rt,r[9]=u*R+f*P+h*G+p*lt,r[13]=u*S+f*B+h*J+p*gt,r[2]=_*w+g*b+m*H+d*F,r[6]=_*E+g*U+m*X+d*rt,r[10]=_*R+g*P+m*G+d*lt,r[14]=_*S+g*B+m*J+d*gt,r[3]=v*w+y*b+x*H+T*F,r[7]=v*E+y*U+x*X+T*rt,r[11]=v*R+y*P+x*G+T*lt,r[15]=v*S+y*B+x*J+T*gt,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],p=t[14],_=t[3],g=t[7],m=t[11],d=t[15];return _*(+r*l*f-s*c*f-r*o*h+i*c*h+s*o*p-i*l*p)+g*(+n*l*p-n*c*h+r*a*h-s*a*p+s*c*u-r*l*u)+m*(+n*c*f-n*o*p-r*a*f+i*a*p+r*o*u-i*c*u)+d*(-s*o*u-n*l*f+n*o*h+s*a*f-i*a*h+i*l*u)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],p=t[11],_=t[12],g=t[13],m=t[14],d=t[15],v=f*m*c-g*h*c+g*l*p-o*m*p-f*l*d+o*h*d,y=_*h*c-u*m*c-_*l*p+a*m*p+u*l*d-a*h*d,x=u*g*c-_*f*c+_*o*p-a*g*p-u*o*d+a*f*d,T=_*f*l-u*g*l-_*o*h+a*g*h+u*o*m-a*f*m,w=n*v+i*y+s*x+r*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/w;return t[0]=v*E,t[1]=(g*h*r-f*m*r-g*s*p+i*m*p+f*s*d-i*h*d)*E,t[2]=(o*m*r-g*l*r+g*s*c-i*m*c-o*s*d+i*l*d)*E,t[3]=(f*l*r-o*h*r-f*s*c+i*h*c+o*s*p-i*l*p)*E,t[4]=y*E,t[5]=(u*m*r-_*h*r+_*s*p-n*m*p-u*s*d+n*h*d)*E,t[6]=(_*l*r-a*m*r-_*s*c+n*m*c+a*s*d-n*l*d)*E,t[7]=(a*h*r-u*l*r+u*s*c-n*h*c-a*s*p+n*l*p)*E,t[8]=x*E,t[9]=(_*f*r-u*g*r-_*i*p+n*g*p+u*i*d-n*f*d)*E,t[10]=(a*g*r-_*o*r+_*i*c-n*g*c-a*i*d+n*o*d)*E,t[11]=(u*o*r-a*f*r-u*i*c+n*f*c+a*i*p-n*o*p)*E,t[12]=T*E,t[13]=(u*g*s-_*f*s+_*i*h-n*g*h-u*i*m+n*f*m)*E,t[14]=(_*o*s-a*g*s-_*i*l+n*g*l+a*i*m-n*o*m)*E,t[15]=(a*f*s-u*o*s+u*i*l-n*f*l-a*i*h+n*o*h)*E,this}scale(t){let n=this.elements,i=t.x,s=t.y,r=t.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,r=n._x,a=n._y,o=n._z,l=n._w,c=r+r,u=a+a,f=o+o,h=r*c,p=r*u,_=r*f,g=a*u,m=a*f,d=o*f,v=l*c,y=l*u,x=l*f,T=i.x,w=i.y,E=i.z;return s[0]=(1-(g+d))*T,s[1]=(p+x)*T,s[2]=(_-y)*T,s[3]=0,s[4]=(p-x)*w,s[5]=(1-(h+d))*w,s[6]=(m+v)*w,s[7]=0,s[8]=(_+y)*E,s[9]=(m-v)*E,s[10]=(1-(h+g))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements,r=nl.set(s[0],s[1],s[2]).length(),a=nl.set(s[4],s[5],s[6]).length(),o=nl.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Vi.copy(this);let c=1/r,u=1/a,f=1/o;return Vi.elements[0]*=c,Vi.elements[1]*=c,Vi.elements[2]*=c,Vi.elements[4]*=u,Vi.elements[5]*=u,Vi.elements[6]*=u,Vi.elements[8]*=f,Vi.elements[9]*=f,Vi.elements[10]*=f,n.setFromRotationMatrix(Vi),i.x=r,i.y=a,i.z=o,this}makePerspective(t,n,i,s,r,a,o=Gi,l=!1){let c=this.elements,u=2*r/(n-t),f=2*r/(i-s),h=(n+t)/(n-t),p=(i+s)/(i-s),_,g;if(l)_=r/(a-r),g=a*r/(a-r);else if(o===Gi)_=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Qc)_=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,r,a,o=Gi,l=!1){let c=this.elements,u=2/(n-t),f=2/(i-s),h=-(n+t)/(n-t),p=-(i+s)/(i-s),_,g;if(l)_=1/(a-r),g=a/(a-r);else if(o===Gi)_=-2/(a-r),g=-(a+r)/(a-r);else if(o===Qc)_=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},nl=new z,Vi=new je,c2=new z(0,0,0),u2=new z(1,1,1),Br=new z,Ef=new z,ci=new z,yb=new je,xb=new qs,as=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return yb.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yb,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return xb.setFromEuler(this),this.setFromQuaternion(xb,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};as.DEFAULT_ORDER="XYZ";var tu=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},h2=0,Sb=new z,il=new qs,Vs=new je,Af=new z,Yc=new z,f2=new z,d2=new qs,Mb=new z(1,0,0),bb=new z(0,1,0),Tb=new z(0,0,1),Eb={type:"added"},p2={type:"removed"},sl={type:"childadded",child:null},$0={type:"childremoved",child:null},Ni=class e extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:h2++}),this.uuid=vu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new z,n=new as,i=new qs,s=new z(1,1,1);function r(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new Vt}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return il.setFromAxisAngle(t,n),this.quaternion.multiply(il),this}rotateOnWorldAxis(t,n){return il.setFromAxisAngle(t,n),this.quaternion.premultiply(il),this}rotateX(t){return this.rotateOnAxis(Mb,t)}rotateY(t){return this.rotateOnAxis(bb,t)}rotateZ(t){return this.rotateOnAxis(Tb,t)}translateOnAxis(t,n){return Sb.copy(t).applyQuaternion(this.quaternion),this.position.add(Sb.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Mb,t)}translateY(t){return this.translateOnAxis(bb,t)}translateZ(t){return this.translateOnAxis(Tb,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vs.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Af.copy(t):Af.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Yc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vs.lookAt(Yc,Af,this.up):Vs.lookAt(Af,Yc,this.up),this.quaternion.setFromRotationMatrix(Vs),s&&(Vs.extractRotation(s.matrixWorld),il.setFromRotationMatrix(Vs),this.quaternion.premultiply(il.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Eb),sl.child=t,this.dispatchEvent(sl),sl.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(p2),$0.child=t,this.dispatchEvent($0),$0.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vs.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Eb),sl.child=t,this.dispatchEvent(sl),sl.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yc,t,f2),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yc,d2,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(n){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Ni.DEFAULT_UP=new z(0,1,0);Ni.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Hi=new z,Hs=new z,t_=new z,Gs=new z,rl=new z,al=new z,Ab=new z,e_=new z,n_=new z,i_=new z,s_=new Fe,r_=new Fe,a_=new Fe,Vr=class e{constructor(t=new z,n=new z,i=new z){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),Hi.subVectors(t,n),s.cross(Hi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,n,i,s,r){Hi.subVectors(s,n),Hs.subVectors(i,n),t_.subVectors(t,n);let a=Hi.dot(Hi),o=Hi.dot(Hs),l=Hi.dot(t_),c=Hs.dot(Hs),u=Hs.dot(t_),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let h=1/f,p=(c*l-o*u)*h,_=(a*u-o*l)*h;return r.set(1-p-_,_,p)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Gs)===null?!1:Gs.x>=0&&Gs.y>=0&&Gs.x+Gs.y<=1}static getInterpolation(t,n,i,s,r,a,o,l){return this.getBarycoord(t,n,i,s,Gs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gs.x),l.addScaledVector(a,Gs.y),l.addScaledVector(o,Gs.z),l)}static getInterpolatedAttribute(t,n,i,s,r,a){return s_.setScalar(0),r_.setScalar(0),a_.setScalar(0),s_.fromBufferAttribute(t,n),r_.fromBufferAttribute(t,i),a_.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(s_,r.x),a.addScaledVector(r_,r.y),a.addScaledVector(a_,r.z),a}static isFrontFacing(t,n,i,s){return Hi.subVectors(i,n),Hs.subVectors(t,n),Hi.cross(Hs).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hi.subVectors(this.c,this.b),Hs.subVectors(this.a,this.b),Hi.cross(Hs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,r){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,r)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,r=this.c,a,o;rl.subVectors(s,i),al.subVectors(r,i),e_.subVectors(t,i);let l=rl.dot(e_),c=al.dot(e_);if(l<=0&&c<=0)return n.copy(i);n_.subVectors(t,s);let u=rl.dot(n_),f=al.dot(n_);if(u>=0&&f<=u)return n.copy(s);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(rl,a);i_.subVectors(t,r);let p=rl.dot(i_),_=al.dot(i_);if(_>=0&&p<=_)return n.copy(r);let g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(al,o);let m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return Ab.subVectors(r,s),o=(f-u)/(f-u+(p-_)),n.copy(s).addScaledVector(Ab,o);let d=1/(m+g+h);return a=g*d,o=h*d,n.copy(i).addScaledVector(rl,a).addScaledVector(al,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},MT={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zr={h:0,s:0,l:0},wf={h:0,s:0,l:0};function o_(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var se=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=hi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=jt.workingColorSpace){return this.r=t,this.g=n,this.b=i,jt.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=jt.workingColorSpace){if(t=s2(t,1),n=Qt(n,0,1),i=Qt(i,0,1),n===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+n):i+n-i*n,a=2*i-r;this.r=o_(a,r,t+1/3),this.g=o_(a,r,t),this.b=o_(a,r,t-1/3)}return jt.colorSpaceToWorking(this,s),this}setStyle(t,n=hi){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=hi){let i=MT[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ks(t.r),this.g=ks(t.g),this.b=ks(t.b),this}copyLinearToSRGB(t){return this.r=ul(t.r),this.g=ul(t.g),this.b=ul(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hi){return jt.workingToColorSpace(Sn.copy(this),t),Math.round(Qt(Sn.r*255,0,255))*65536+Math.round(Qt(Sn.g*255,0,255))*256+Math.round(Qt(Sn.b*255,0,255))}getHexString(t=hi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=jt.workingColorSpace){jt.workingToColorSpace(Sn.copy(this),n);let i=Sn.r,s=Sn.g,r=Sn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,n=jt.workingColorSpace){return jt.workingToColorSpace(Sn.copy(this),n),t.r=Sn.r,t.g=Sn.g,t.b=Sn.b,t}getStyle(t=hi){jt.workingToColorSpace(Sn.copy(this),t);let n=Sn.r,i=Sn.g,s=Sn.b;return t!==hi?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(zr),this.setHSL(zr.h+t,zr.s+n,zr.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(zr),t.getHSL(wf);let i=k0(zr.h,wf.h,n),s=k0(zr.s,wf.s,n),r=k0(zr.l,wf.l,n);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Sn=new se;se.NAMES=MT;var m2=0,za=class extends Ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:m2++}),this.uuid=vu(),this.name="",this.type="Material",this.blending=Ia,this.side=Xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ff,this.blendDst=Vf,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=Pa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=p_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oa,this.stencilZFail=Oa,this.stencilZPass=Oa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ia&&(i.blending=this.blending),this.side!==Xs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ff&&(i.blendSrc=this.blendSrc),this.blendDst!==Vf&&(i.blendDst=this.blendDst),this.blendEquation!==Gr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Pa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==p_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oa&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Oa&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Oa&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(n){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},eu=class extends za{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new as,this.combine=M_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ze=new z,Cf=new Zt,g2=0,fi=class{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:g2++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=m_,this.updateRanges=[],this.gpuType=us,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Cf.fromBufferAttribute(this,n),Cf.applyMatrix3(t),this.setXY(n,Cf.x,Cf.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ze.fromBufferAttribute(this,n),Ze.applyMatrix3(t),this.setXYZ(n,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Ze.fromBufferAttribute(this,n),Ze.applyMatrix4(t),this.setXYZ(n,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Ze.fromBufferAttribute(this,n),Ze.applyNormalMatrix(t),this.setXYZ(n,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Ze.fromBufferAttribute(this,n),Ze.transformDirection(t),this.setXYZ(n,Ze.x,Ze.y,Ze.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Xc(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Xc(n,this.array)),n}setX(t,n){return this.normalized&&(n=kn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Xc(n,this.array)),n}setY(t,n){return this.normalized&&(n=kn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Xc(n,this.array)),n}setZ(t,n){return this.normalized&&(n=kn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Xc(n,this.array)),n}setW(t,n){return this.normalized&&(n=kn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=kn(n,this.array),i=kn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=kn(n,this.array),i=kn(i,this.array),s=kn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,r){return t*=this.itemSize,this.normalized&&(n=kn(n,this.array),i=kn(i,this.array),s=kn(s,this.array),r=kn(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==m_&&(t.usage=this.usage),t}};var nu=class extends fi{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var iu=class extends fi{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var ss=class extends fi{constructor(t,n,i){super(new Float32Array(t),n,i)}},_2=0,Li=new je,l_=new Ni,ol=new z,ui=new kr,Zc=new kr,an=new z,Xr=class e extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_2++}),this.uuid=vu(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(N_(t)?iu:nu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Vt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Li.makeRotationFromQuaternion(t),this.applyMatrix4(Li),this}rotateX(t){return Li.makeRotationX(t),this.applyMatrix4(Li),this}rotateY(t){return Li.makeRotationY(t),this.applyMatrix4(Li),this}rotateZ(t){return Li.makeRotationZ(t),this.applyMatrix4(Li),this}translate(t,n,i){return Li.makeTranslation(t,n,i),this.applyMatrix4(Li),this}scale(t,n,i){return Li.makeScale(t,n,i),this.applyMatrix4(Li),this}lookAt(t){return l_.lookAt(t),l_.updateMatrix(),this.applyMatrix4(l_.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ol).negate(),this.translate(ol.x,ol.y,ol.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ss(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let r=t[s];n.setXYZ(s,r.x,r.y,r.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kr);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let r=n[i];ui.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pl);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let i=this.boundingSphere.center;if(ui.setFromBufferAttribute(t),n)for(let r=0,a=n.length;r<a;r++){let o=n[r];Zc.setFromBufferAttribute(o),this.morphTargetsRelative?(an.addVectors(ui.min,Zc.min),ui.expandByPoint(an),an.addVectors(ui.max,Zc.max),ui.expandByPoint(an)):(ui.expandByPoint(Zc.min),ui.expandByPoint(Zc.max))}ui.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)an.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(an));if(n)for(let r=0,a=n.length;r<a;r++){let o=n[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)an.fromBufferAttribute(o,c),l&&(ol.fromBufferAttribute(t,c),an.add(ol)),s=Math.max(s,i.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fi(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new z,l[R]=new z;let c=new z,u=new z,f=new z,h=new Zt,p=new Zt,_=new Zt,g=new z,m=new z;function d(R,S,b){c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,S),f.fromBufferAttribute(i,b),h.fromBufferAttribute(r,R),p.fromBufferAttribute(r,S),_.fromBufferAttribute(r,b),u.sub(c),f.sub(c),p.sub(h),_.sub(h);let U=1/(p.x*_.y-_.x*p.y);isFinite(U)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(U),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(U),o[R].add(g),o[S].add(g),o[b].add(g),l[R].add(m),l[S].add(m),l[b].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let R=0,S=v.length;R<S;++R){let b=v[R],U=b.start,P=b.count;for(let B=U,H=U+P;B<H;B+=3)d(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let y=new z,x=new z,T=new z,w=new z;function E(R){T.fromBufferAttribute(s,R),w.copy(T);let S=o[R];y.copy(S),y.sub(T.multiplyScalar(T.dot(S))).normalize(),x.crossVectors(w,S);let U=x.dot(l[R])<0?-1:1;a.setXYZW(R,y.x,y.y,y.z,U)}for(let R=0,S=v.length;R<S;++R){let b=v[R],U=b.start,P=b.count;for(let B=U,H=U+P;B<H;B+=3)E(t.getX(B+0)),E(t.getX(B+1)),E(t.getX(B+2))}}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let s=new z,r=new z,a=new z,o=new z,l=new z,c=new z,u=new z,f=new z;if(t)for(let h=0,p=t.count;h<p;h+=3){let _=t.getX(h+0),g=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(n,_),r.fromBufferAttribute(n,g),a.fromBufferAttribute(n,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)s.fromBufferAttribute(n,h+0),r.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)an.fromBufferAttribute(t,n),an.normalize(),t.setXYZ(n,an.x,an.y,an.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u),p=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*u;for(let d=0;d<u;d++)h[_++]=c[p++]}return new fi(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){let h=c[u],p=t(h,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let p=c[f];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(n))}let r=t.morphAttributes;for(let c in r){let u=[],f=r[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},wb=new je,Ua=new Zf,Rf=new pl,Cb=new z,Df=new z,Uf=new z,Lf=new z,c_=new z,Of=new z,Rb=new z,Nf=new z,Wn=class extends Ni{constructor(t=new Xr,n=new eu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Of.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],f=r[l];u!==0&&(c_.fromBufferAttribute(f,t),a?Of.addScaledVector(c_,u):Of.addScaledVector(c_.sub(n),u))}n.add(Of)}return n}raycast(t,n){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Rf.copy(i.boundingSphere),Rf.applyMatrix4(r),Ua.copy(t.ray).recast(t.near),!(Rf.containsPoint(Ua.origin)===!1&&(Ua.intersectSphere(Rf,Cb)===null||Ua.origin.distanceToSquared(Cb)>(t.far-t.near)**2))&&(wb.copy(r).invert(),Ua.copy(t.ray).applyMatrix4(wb),!(i.boundingBox!==null&&Ua.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Ua)))}_computeIntersections(t,n,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=h.length;_<g;_++){let m=h[_],d=a[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,T=y;x<T;x+=3){let w=o.getX(x),E=o.getX(x+1),R=o.getX(x+2);s=If(this,d,t,i,c,u,f,w,E,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let _=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=_,d=g;m<d;m+=3){let v=o.getX(m),y=o.getX(m+1),x=o.getX(m+2);s=If(this,a,t,i,c,u,f,v,y,x),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=h.length;_<g;_++){let m=h[_],d=a[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,T=y;x<T;x+=3){let w=x,E=x+1,R=x+2;s=If(this,d,t,i,c,u,f,w,E,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,d=g;m<d;m+=3){let v=m,y=m+1,x=m+2;s=If(this,a,t,i,c,u,f,v,y,x),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function v2(e,t,n,i,s,r,a,o){let l;if(t.side===Rn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Xs,o),l===null)return null;Nf.copy(o),Nf.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(Nf);return c<n.near||c>n.far?null:{distance:c,point:Nf.clone(),object:e}}function If(e,t,n,i,s,r,a,o,l,c){e.getVertexPosition(o,Df),e.getVertexPosition(l,Uf),e.getVertexPosition(c,Lf);let u=v2(e,t,n,i,Df,Uf,Lf,Rb);if(u){let f=new z;Vr.getBarycoord(Rb,Df,Uf,Lf,f),s&&(u.uv=Vr.getInterpolatedAttribute(s,o,l,c,f,new Zt)),r&&(u.uv1=Vr.getInterpolatedAttribute(r,o,l,c,f,new Zt)),a&&(u.normal=Vr.getInterpolatedAttribute(a,o,l,c,f,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new z,materialIndex:0};Vr.getNormal(Df,Uf,Lf,h.normal),u.face=h,u.barycoord=f}return u}var ml=class e extends Xr{constructor(t=1,n=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],f=[],h=0,p=0;_("z","y","x",-1,-1,i,n,t,a,r,0),_("z","y","x",1,-1,i,n,-t,a,r,1),_("x","z","y",1,1,t,i,n,s,a,2),_("x","z","y",1,-1,t,i,-n,s,a,3),_("x","y","z",1,-1,t,n,i,s,r,4),_("x","y","z",-1,-1,t,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ss(c,3)),this.setAttribute("normal",new ss(u,3)),this.setAttribute("uv",new ss(f,2));function _(g,m,d,v,y,x,T,w,E,R,S){let b=x/E,U=T/R,P=x/2,B=T/2,H=w/2,X=E+1,G=R+1,J=0,F=0,rt=new z;for(let lt=0;lt<G;lt++){let gt=lt*U-B;for(let Ot=0;Ot<X;Ot++){let te=Ot*b-P;rt[g]=te*v,rt[m]=gt*y,rt[d]=H,c.push(rt.x,rt.y,rt.z),rt[g]=0,rt[m]=0,rt[d]=w>0?1:-1,u.push(rt.x,rt.y,rt.z),f.push(Ot/E),f.push(1-lt/R),J+=1}}for(let lt=0;lt<R;lt++)for(let gt=0;gt<E;gt++){let Ot=h+gt+X*lt,te=h+gt+X*(lt+1),ut=h+(gt+1)+X*(lt+1),wt=h+(gt+1)+X*lt;l.push(Ot,te,wt),l.push(te,ut,wt),F+=6}o.addGroup(p,F,S),p+=F,h+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ka(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone():Array.isArray(s)?t[n][i]=s.slice():t[n][i]=s}}return t}function Mn(e){let t={};for(let n=0;n<e.length;n++){let i=ka(e[n]);for(let s in i)t[s]=i[s]}return t}function y2(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function I_(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}var bT={clone:ka,merge:Mn},x2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,S2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pi=class extends za{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=x2,this.fragmentShader=S2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ka(t.uniforms),this.uniformsGroups=y2(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?n.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?n.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[s]={type:"m4",value:a.toArray()}:n.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},su=class extends Ni{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Fr=new z,Db=new Zt,Ub=new Zt,Xn=class extends su{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=Xf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(G0*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xf*2*Math.atan(Math.tan(G0*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fr.x,Fr.y).multiplyScalar(-t/Fr.z),Fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fr.x,Fr.y).multiplyScalar(-t/Fr.z)}getViewSize(t,n){return this.getViewBounds(t,Db,Ub),n.subVectors(Ub,Db)}setViewOffset(t,n,i,s,r,a){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(G0*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,n-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},ll=-90,cl=1,Jf=class extends Ni{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Xn(ll,cl,t,n);s.layers=this.layers,this.add(s);let r=new Xn(ll,cl,t,n);r.layers=this.layers,this.add(r);let a=new Xn(ll,cl,t,n);a.layers=this.layers,this.add(a);let o=new Xn(ll,cl,t,n);o.layers=this.layers,this.add(o);let l=new Xn(ll,cl,t,n);l.layers=this.layers,this.add(l);let c=new Xn(ll,cl,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,r,a,o,l]=n;for(let c of n)this.remove(c);if(t===Gi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Qc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(n,r),t.setRenderTarget(i,1,s),t.render(n,a),t.setRenderTarget(i,2,s),t.render(n,o),t.setRenderTarget(i,3,s),t.render(n,l),t.setRenderTarget(i,4,s),t.render(n,c),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,s),t.render(n,u),t.setRenderTarget(f,h,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},ru=class extends di{constructor(t=[],n=Ha,i,s,r,a,o,l,c,u){super(t,n,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Kf=class extends rs{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ru(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ml(5,5,5),r=new pi({name:"CubemapFromEquirect",uniforms:ka(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rn,blending:Ys});r.uniforms.tEquirect.value=n;let a=new Wn(s,r),o=n.minFilter;return n.minFilter===Yr&&(n.minFilter=ki),new Jf(1,10,this).update(t,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(n,i,s);t.setRenderTarget(r)}},Na=class extends Ni{constructor(){super(),this.isGroup=!0,this.type="Group"}},M2={type:"move"},gl=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Na,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Na,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Na,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let g of t.hand.values()){let m=n.getJointPose(g,i),d=this._getHandJoint(c,g);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=n.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(M2)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new Na;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}};var au=class extends Ni{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new as,this.environmentIntensity=1,this.environmentRotation=new as,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};var u_=new z,b2=new z,T2=new Vt,is=class{constructor(t=new z(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=u_.subVectors(i,n).cross(b2.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){let i=t.delta(u_),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||T2.getNormalMatrix(t),s=this.coplanarPoint(u_).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},La=new pl,E2=new Zt(.5,.5),Pf=new z,ou=class{constructor(t=new is,n=new is,i=new is,s=new is,r=new is,a=new is){this.planes=[t,n,i,s,r,a]}set(t,n,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Gi,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],p=r[7],_=r[8],g=r[9],m=r[10],d=r[11],v=r[12],y=r[13],x=r[14],T=r[15];if(s[0].setComponents(c-a,p-u,d-_,T-v).normalize(),s[1].setComponents(c+a,p+u,d+_,T+v).normalize(),s[2].setComponents(c+o,p+f,d+g,T+y).normalize(),s[3].setComponents(c-o,p-f,d-g,T-y).normalize(),i)s[4].setComponents(l,h,m,x).normalize(),s[5].setComponents(c-l,p-h,d-m,T-x).normalize();else if(s[4].setComponents(c-l,p-h,d-m,T-x).normalize(),n===Gi)s[5].setComponents(c+l,p+h,d+m,T+x).normalize();else if(n===Qc)s[5].setComponents(l,h,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),La.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(La)}intersectsSprite(t){La.center.set(0,0,0);let n=E2.distanceTo(t.center);return La.radius=.7071067811865476+n,La.applyMatrix4(t.matrixWorld),this.intersectsSphere(La)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Pf.x=s.normal.x>0?t.max.x:t.min.x,Pf.y=s.normal.y>0?t.max.y:t.min.y,Pf.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Pf)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var lu=class extends di{constructor(t,n,i=Zr,s,r,a,o=Oi,l=Oi,c,u=hl,f=1){if(u!==hl&&u!==Sl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:n,depth:f};super(h,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new dl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},cu=class extends di{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Fa=class e extends Xr{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let r=t/2,a=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,f=t/o,h=n/l,p=[],_=[],g=[],m=[];for(let d=0;d<u;d++){let v=d*h-a;for(let y=0;y<c;y++){let x=y*f-r;_.push(x,-v,0),g.push(0,0,1),m.push(y/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<o;v++){let y=v+c*d,x=v+c*(d+1),T=v+1+c*(d+1),w=v+1+c*d;p.push(y,x,w),p.push(x,T,w)}this.setIndex(p),this.setAttribute("position",new ss(_,3)),this.setAttribute("normal",new ss(g,3)),this.setAttribute("uv",new ss(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};var Qf=class extends za{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},jf=class extends za{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Bf(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function A2(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Va=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],r=n[i-1];t:{e:{let a;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=n[++i],t<s)break e}a=n.length;break n}if(!(t>=r)){let o=n[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=n[--i-1],t>=r)break e}a=i,i=0;break n}break t}for(;i<a;){let o=i+a>>>1;t<n[o]?a=o:i=o+1}if(s=n[i],r=n[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)n[a]=i[r+a];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},$f=class extends Va{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:h_,endingEnd:h_}}intervalChanged_(t,n,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case f_:r=t,o=2*n-i;break;case d_:r=s.length-2,o=n+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case f_:a=t,l=2*i-n;break;case d_:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=n}let c=(i-n)*.5,u=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,_=(i-n)/(s-n),g=_*_,m=g*_,d=-h*m+2*h*g-h*_,v=(1+h)*m+(-1.5-2*h)*g+(-.5+h)*_+1,y=(-1-p)*m+(1.5+p)*g+.5*_,x=p*m-p*g;for(let T=0;T!==o;++T)r[T]=d*a[u+T]+v*a[c+T]+y*a[l+T]+x*a[f+T];return r}},td=class extends Va{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(i-n)/(s-n),f=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*f+a[l+h]*u;return r}},ed=class extends Va{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},mi=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Bf(n,this.TimeBufferType),this.values=Bf(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:Bf(t.times,Array),values:Bf(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ed(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new td(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new $f(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let n;switch(t){case Jc:n=this.InterpolantFactoryMethodDiscrete;break;case kf:n=this.InterpolantFactoryMethodLinear;break;case zf:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Jc;case this.InterpolantFactoryMethodLinear:return kf;case this.InterpolantFactoryMethodSmooth:return zf}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>n;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&A2(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===zf,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let f=o*i,h=f-i,p=f+i;for(let _=0;_!==i;++_){let g=n[f+_];if(g!==n[h+_]||g!==n[p+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*i,h=a*i;for(let p=0;p!==i;++p)n[h+p]=n[f+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)n[l+c]=n[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=n.slice(0,a*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};mi.prototype.ValueTypeName="";mi.prototype.TimeBufferType=Float32Array;mi.prototype.ValueBufferType=Float32Array;mi.prototype.DefaultInterpolation=kf;var Wr=class extends mi{constructor(t,n,i){super(t,n,i)}};Wr.prototype.ValueTypeName="bool";Wr.prototype.ValueBufferType=Array;Wr.prototype.DefaultInterpolation=Jc;Wr.prototype.InterpolantFactoryMethodLinear=void 0;Wr.prototype.InterpolantFactoryMethodSmooth=void 0;var nd=class extends mi{constructor(t,n,i,s){super(t,n,i,s)}};nd.prototype.ValueTypeName="color";var id=class extends mi{constructor(t,n,i,s){super(t,n,i,s)}};id.prototype.ValueTypeName="number";var sd=class extends Va{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let u=c+o;c!==u;c+=4)qs.slerpFlat(r,0,a,c-o,a,c,l);return r}},uu=class extends mi{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new sd(this.times,this.values,this.getValueSize(),t)}};uu.prototype.ValueTypeName="quaternion";uu.prototype.InterpolantFactoryMethodSmooth=void 0;var qr=class extends mi{constructor(t,n,i){super(t,n,i)}};qr.prototype.ValueTypeName="string";qr.prototype.ValueBufferType=Array;qr.prototype.DefaultInterpolation=Jc;qr.prototype.InterpolantFactoryMethodLinear=void 0;qr.prototype.InterpolantFactoryMethodSmooth=void 0;var rd=class extends mi{constructor(t,n,i,s){super(t,n,i,s)}};rd.prototype.ValueTypeName="vector";var ad=class{constructor(t,n,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},TT=new ad,od=class{constructor(t){this.manager=t!==void 0?t:TT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,r){i.load(t,s,n,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};od.DEFAULT_MATERIAL_NAME="__DEFAULT";var _l=class extends su{constructor(t=-1,n=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var ld=class extends Xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},hu=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}};var P_="\\[\\]\\.:\\/",w2=new RegExp("["+P_+"]","g"),B_="[^"+P_+"]",C2="[^"+P_.replace("\\.","")+"]",R2=/((?:WC+[\/:])*)/.source.replace("WC",B_),D2=/(WCOD+)?/.source.replace("WCOD",C2),U2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",B_),L2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",B_),O2=new RegExp("^"+R2+D2+U2+L2+"$"),N2=["material","materials","bones","map"],g_=class{constructor(t,n,i){let s=i||Ee.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Ee=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(w2,"")}static parseTrackName(t){let n=O2.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);N2.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,r=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ee.Composite=g_;Ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ee.prototype.GetterByBindingType=[Ee.prototype._getValue_direct,Ee.prototype._getValue_array,Ee.prototype._getValue_arrayElement,Ee.prototype._getValue_toArray];Ee.prototype.SetterByBindingTypeAndVersioning=[[Ee.prototype._setValue_direct,Ee.prototype._setValue_direct_setNeedsUpdate,Ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_array,Ee.prototype._setValue_array_setNeedsUpdate,Ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_arrayElement,Ee.prototype._setValue_arrayElement_setNeedsUpdate,Ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_fromArray,Ee.prototype._setValue_fromArray_setNeedsUpdate,Ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var eN=new Float32Array(1);function z_(e,t,n,i){let s=I2(i);switch(n){case C_:return e*t;case D_:return e*t/s.components*s.byteLength;case Md:return e*t/s.components*s.byteLength;case U_:return e*t*2/s.components*s.byteLength;case bd:return e*t*2/s.components*s.byteLength;case R_:return e*t*3/s.components*s.byteLength;case Ii:return e*t*4/s.components*s.byteLength;case Td:return e*t*4/s.components*s.byteLength;case pu:case mu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case gu:case _u:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ad:case Cd:return Math.max(e,16)*Math.max(t,8)/4;case Ed:case wd:return Math.max(e,8)*Math.max(t,8)/2;case Rd:case Dd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ud:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ld:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Od:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Nd:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Id:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Pd:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Bd:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case zd:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Fd:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Vd:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Hd:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Gd:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case kd:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Xd:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Wd:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case qd:case Yd:case Zd:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Jd:case Kd:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Qd:case jd:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function I2(e){switch(e){case cs:case T_:return{byteLength:1,components:1};case vl:case E_:case yl:return{byteLength:2,components:1};case xd:case Sd:return{byteLength:2,components:4};case Zr:case yd:case us:return{byteLength:4,components:1};case A_:case w_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function ZT(){let e=null,t=!1,n=null,i=null;function s(r,a){n(r,a),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function B2(e){let t=new WeakMap;function n(o,l){let c=o.array,u=o.usage,f=c.byteLength,h=e.createBuffer();e.bindBuffer(l,h),e.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){let u=l.array,f=l.updateRanges;if(e.bindBuffer(c,o),f.length===0)e.bufferSubData(c,0,u);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){let _=f[h],g=f[p];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++h,f[h]=g)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){let g=f[p];e.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var z2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,F2=`#ifdef USE_ALPHAHASH
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
#endif`,V2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,H2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,G2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,k2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,X2=`#ifdef USE_AOMAP
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
#endif`,W2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,q2=`#ifdef USE_BATCHING
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
#endif`,Y2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Z2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,J2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,K2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Q2=`#ifdef USE_IRIDESCENCE
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
#endif`,j2=`#ifdef USE_BUMPMAP
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
#endif`,$2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,t3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,e3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,n3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,i3=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,s3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,r3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,a3=`#if defined( USE_COLOR_ALPHA )
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
#endif`,o3=`#define PI 3.141592653589793
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
} // validated`,l3=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,c3=`vec3 transformedNormal = objectNormal;
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
#endif`,u3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,f3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,d3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,p3="gl_FragColor = linearToOutputTexel( gl_FragColor );",m3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,g3=`#ifdef USE_ENVMAP
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
#endif`,_3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,v3=`#ifdef USE_ENVMAP
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
#endif`,y3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,x3=`#ifdef USE_ENVMAP
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
#endif`,S3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,M3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,b3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,T3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,E3=`#ifdef USE_GRADIENTMAP
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
}`,A3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,w3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,C3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,R3=`uniform bool receiveShadow;
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
#endif`,D3=`#ifdef USE_ENVMAP
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
#endif`,U3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,L3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,N3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,I3=`PhysicalMaterial material;
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
#endif`,P3=`struct PhysicalMaterial {
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
}`,B3=`
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
#endif`,z3=`#if defined( RE_IndirectDiffuse )
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
#endif`,F3=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,V3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,H3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,X3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,W3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,q3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Y3=`#if defined( USE_POINTS_UV )
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
#endif`,Z3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,J3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,K3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Q3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,j3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$3=`#ifdef USE_MORPHTARGETS
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
#endif`,tD=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eD=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nD=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,iD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rD=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aD=`#ifdef USE_NORMALMAP
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
#endif`,oD=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lD=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cD=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uD=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hD=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fD=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dD=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pD=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mD=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_D=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yD=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xD=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,SD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,MD=`float getShadowMask() {
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
}`,bD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TD=`#ifdef USE_SKINNING
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
#endif`,ED=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AD=`#ifdef USE_SKINNING
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
#endif`,wD=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CD=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,RD=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,DD=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,UD=`#ifdef USE_TRANSMISSION
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
#endif`,LD=`#ifdef USE_TRANSMISSION
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
#endif`,OD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ND=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ID=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,BD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zD=`uniform sampler2D t2D;
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
}`,FD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VD=`#ifdef ENVMAP_TYPE_CUBE
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
}`,HD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kD=`#include <common>
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
}`,XD=`#if DEPTH_PACKING == 3200
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
}`,WD=`#define DISTANCE
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
}`,qD=`#define DISTANCE
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
}`,YD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JD=`uniform float scale;
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
}`,KD=`uniform vec3 diffuse;
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
}`,QD=`#include <common>
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
}`,jD=`uniform vec3 diffuse;
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
}`,$D=`#define LAMBERT
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
}`,tU=`#define LAMBERT
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
}`,eU=`#define MATCAP
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
}`,nU=`#define MATCAP
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
}`,iU=`#define NORMAL
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
}`,sU=`#define NORMAL
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
}`,rU=`#define PHONG
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
}`,aU=`#define PHONG
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
}`,oU=`#define STANDARD
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
}`,lU=`#define STANDARD
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
}`,cU=`#define TOON
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
}`,uU=`#define TOON
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
}`,hU=`uniform float size;
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
}`,fU=`uniform vec3 diffuse;
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
}`,dU=`#include <common>
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
}`,pU=`uniform vec3 color;
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
}`,mU=`uniform float rotation;
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
}`,gU=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:z2,alphahash_pars_fragment:F2,alphamap_fragment:V2,alphamap_pars_fragment:H2,alphatest_fragment:G2,alphatest_pars_fragment:k2,aomap_fragment:X2,aomap_pars_fragment:W2,batching_pars_vertex:q2,batching_vertex:Y2,begin_vertex:Z2,beginnormal_vertex:J2,bsdfs:K2,iridescence_fragment:Q2,bumpmap_pars_fragment:j2,clipping_planes_fragment:$2,clipping_planes_pars_fragment:t3,clipping_planes_pars_vertex:e3,clipping_planes_vertex:n3,color_fragment:i3,color_pars_fragment:s3,color_pars_vertex:r3,color_vertex:a3,common:o3,cube_uv_reflection_fragment:l3,defaultnormal_vertex:c3,displacementmap_pars_vertex:u3,displacementmap_vertex:h3,emissivemap_fragment:f3,emissivemap_pars_fragment:d3,colorspace_fragment:p3,colorspace_pars_fragment:m3,envmap_fragment:g3,envmap_common_pars_fragment:_3,envmap_pars_fragment:v3,envmap_pars_vertex:y3,envmap_physical_pars_fragment:D3,envmap_vertex:x3,fog_vertex:S3,fog_pars_vertex:M3,fog_fragment:b3,fog_pars_fragment:T3,gradientmap_pars_fragment:E3,lightmap_pars_fragment:A3,lights_lambert_fragment:w3,lights_lambert_pars_fragment:C3,lights_pars_begin:R3,lights_toon_fragment:U3,lights_toon_pars_fragment:L3,lights_phong_fragment:O3,lights_phong_pars_fragment:N3,lights_physical_fragment:I3,lights_physical_pars_fragment:P3,lights_fragment_begin:B3,lights_fragment_maps:z3,lights_fragment_end:F3,logdepthbuf_fragment:V3,logdepthbuf_pars_fragment:H3,logdepthbuf_pars_vertex:G3,logdepthbuf_vertex:k3,map_fragment:X3,map_pars_fragment:W3,map_particle_fragment:q3,map_particle_pars_fragment:Y3,metalnessmap_fragment:Z3,metalnessmap_pars_fragment:J3,morphinstance_vertex:K3,morphcolor_vertex:Q3,morphnormal_vertex:j3,morphtarget_pars_vertex:$3,morphtarget_vertex:tD,normal_fragment_begin:eD,normal_fragment_maps:nD,normal_pars_fragment:iD,normal_pars_vertex:sD,normal_vertex:rD,normalmap_pars_fragment:aD,clearcoat_normal_fragment_begin:oD,clearcoat_normal_fragment_maps:lD,clearcoat_pars_fragment:cD,iridescence_pars_fragment:uD,opaque_fragment:hD,packing:fD,premultiplied_alpha_fragment:dD,project_vertex:pD,dithering_fragment:mD,dithering_pars_fragment:gD,roughnessmap_fragment:_D,roughnessmap_pars_fragment:vD,shadowmap_pars_fragment:yD,shadowmap_pars_vertex:xD,shadowmap_vertex:SD,shadowmask_pars_fragment:MD,skinbase_vertex:bD,skinning_pars_vertex:TD,skinning_vertex:ED,skinnormal_vertex:AD,specularmap_fragment:wD,specularmap_pars_fragment:CD,tonemapping_fragment:RD,tonemapping_pars_fragment:DD,transmission_fragment:UD,transmission_pars_fragment:LD,uv_pars_fragment:OD,uv_pars_vertex:ND,uv_vertex:ID,worldpos_vertex:PD,background_vert:BD,background_frag:zD,backgroundCube_vert:FD,backgroundCube_frag:VD,cube_vert:HD,cube_frag:GD,depth_vert:kD,depth_frag:XD,distanceRGBA_vert:WD,distanceRGBA_frag:qD,equirect_vert:YD,equirect_frag:ZD,linedashed_vert:JD,linedashed_frag:KD,meshbasic_vert:QD,meshbasic_frag:jD,meshlambert_vert:$D,meshlambert_frag:tU,meshmatcap_vert:eU,meshmatcap_frag:nU,meshnormal_vert:iU,meshnormal_frag:sU,meshphong_vert:rU,meshphong_frag:aU,meshphysical_vert:oU,meshphysical_frag:lU,meshtoon_vert:cU,meshtoon_frag:uU,points_vert:hU,points_frag:fU,shadow_vert:dU,shadow_frag:pU,sprite_vert:mU,sprite_frag:gU},ot={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new Zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new Zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},hs={basic:{uniforms:Mn([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Mn([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new se(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Mn([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Mn([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Mn([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new se(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Mn([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Mn([ot.points,ot.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Mn([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Mn([ot.common,ot.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Mn([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Mn([ot.sprite,ot.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:Mn([ot.common,ot.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:Mn([ot.lights,ot.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};hs.physical={uniforms:Mn([hs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new Zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new Zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new Zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};var $d={r:0,b:0,g:0},Xa=new as,_U=new je;function vU(e,t,n,i,s,r,a){let o=new se(0),l=r===!0?0:1,c,u,f=null,h=0,p=null;function _(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?n:t).get(x)),x}function g(y){let x=!1,T=_(y);T===null?d(o,l):T&&T.isColor&&(d(T,1),x=!0);let w=e.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(e.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(y,x){let T=_(x);T&&(T.isCubeTexture||T.mapping===fu)?(u===void 0&&(u=new Wn(new ml(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:ka(hs.backgroundCube.uniforms),vertexShader:hs.backgroundCube.vertexShader,fragmentShader:hs.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Xa.copy(x.backgroundRotation),Xa.x*=-1,Xa.y*=-1,Xa.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Xa.y*=-1,Xa.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(_U.makeRotationFromEuler(Xa)),u.material.toneMapped=jt.getTransfer(T.colorSpace)!==le,(f!==T||h!==T.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,f=T,h=T.version,p=e.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Wn(new Fa(2,2),new pi({name:"BackgroundMaterial",uniforms:ka(hs.background.uniforms),vertexShader:hs.background.vertexShader,fragmentShader:hs.background.fragmentShader,side:Xs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=jt.getTransfer(T.colorSpace)!==le,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||h!==T.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,f=T,h=T.version,p=e.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function d(y,x){y.getRGB($d,I_(e)),i.buffers.color.setClear($d.r,$d.g,$d.b,x,a)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),l=x,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(o,l)},render:g,addToRenderList:m,dispose:v}}function yU(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,a=!1;function o(b,U,P,B,H){let X=!1,G=f(B,P,U);r!==G&&(r=G,c(r.object)),X=p(b,B,P,H),X&&_(b,B,P,H),H!==null&&t.update(H,e.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,x(b,U,P,B),H!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return e.createVertexArray()}function c(b){return e.bindVertexArray(b)}function u(b){return e.deleteVertexArray(b)}function f(b,U,P){let B=P.wireframe===!0,H=i[b.id];H===void 0&&(H={},i[b.id]=H);let X=H[U.id];X===void 0&&(X={},H[U.id]=X);let G=X[B];return G===void 0&&(G=h(l()),X[B]=G),G}function h(b){let U=[],P=[],B=[];for(let H=0;H<n;H++)U[H]=0,P[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:P,attributeDivisors:B,object:b,attributes:{},index:null}}function p(b,U,P,B){let H=r.attributes,X=U.attributes,G=0,J=P.getAttributes();for(let F in J)if(J[F].location>=0){let lt=H[F],gt=X[F];if(gt===void 0&&(F==="instanceMatrix"&&b.instanceMatrix&&(gt=b.instanceMatrix),F==="instanceColor"&&b.instanceColor&&(gt=b.instanceColor)),lt===void 0||lt.attribute!==gt||gt&&lt.data!==gt.data)return!0;G++}return r.attributesNum!==G||r.index!==B}function _(b,U,P,B){let H={},X=U.attributes,G=0,J=P.getAttributes();for(let F in J)if(J[F].location>=0){let lt=X[F];lt===void 0&&(F==="instanceMatrix"&&b.instanceMatrix&&(lt=b.instanceMatrix),F==="instanceColor"&&b.instanceColor&&(lt=b.instanceColor));let gt={};gt.attribute=lt,lt&&lt.data&&(gt.data=lt.data),H[F]=gt,G++}r.attributes=H,r.attributesNum=G,r.index=B}function g(){let b=r.newAttributes;for(let U=0,P=b.length;U<P;U++)b[U]=0}function m(b){d(b,0)}function d(b,U){let P=r.newAttributes,B=r.enabledAttributes,H=r.attributeDivisors;P[b]=1,B[b]===0&&(e.enableVertexAttribArray(b),B[b]=1),H[b]!==U&&(e.vertexAttribDivisor(b,U),H[b]=U)}function v(){let b=r.newAttributes,U=r.enabledAttributes;for(let P=0,B=U.length;P<B;P++)U[P]!==b[P]&&(e.disableVertexAttribArray(P),U[P]=0)}function y(b,U,P,B,H,X,G){G===!0?e.vertexAttribIPointer(b,U,P,H,X):e.vertexAttribPointer(b,U,P,B,H,X)}function x(b,U,P,B){g();let H=B.attributes,X=P.getAttributes(),G=U.defaultAttributeValues;for(let J in X){let F=X[J];if(F.location>=0){let rt=H[J];if(rt===void 0&&(J==="instanceMatrix"&&b.instanceMatrix&&(rt=b.instanceMatrix),J==="instanceColor"&&b.instanceColor&&(rt=b.instanceColor)),rt!==void 0){let lt=rt.normalized,gt=rt.itemSize,Ot=t.get(rt);if(Ot===void 0)continue;let te=Ot.buffer,ut=Ot.type,wt=Ot.bytesPerElement,Y=ut===e.INT||ut===e.UNSIGNED_INT||rt.gpuType===yd;if(rt.isInterleavedBufferAttribute){let Q=rt.data,it=Q.stride,St=rt.offset;if(Q.isInstancedInterleavedBuffer){for(let _t=0;_t<F.locationSize;_t++)d(F.location+_t,Q.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let _t=0;_t<F.locationSize;_t++)m(F.location+_t);e.bindBuffer(e.ARRAY_BUFFER,te);for(let _t=0;_t<F.locationSize;_t++)y(F.location+_t,gt/F.locationSize,ut,lt,it*wt,(St+gt/F.locationSize*_t)*wt,Y)}else{if(rt.isInstancedBufferAttribute){for(let Q=0;Q<F.locationSize;Q++)d(F.location+Q,rt.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Q=0;Q<F.locationSize;Q++)m(F.location+Q);e.bindBuffer(e.ARRAY_BUFFER,te);for(let Q=0;Q<F.locationSize;Q++)y(F.location+Q,gt/F.locationSize,ut,lt,gt*wt,gt/F.locationSize*Q*wt,Y)}}else if(G!==void 0){let lt=G[J];if(lt!==void 0)switch(lt.length){case 2:e.vertexAttrib2fv(F.location,lt);break;case 3:e.vertexAttrib3fv(F.location,lt);break;case 4:e.vertexAttrib4fv(F.location,lt);break;default:e.vertexAttrib1fv(F.location,lt)}}}}v()}function T(){R();for(let b in i){let U=i[b];for(let P in U){let B=U[P];for(let H in B)u(B[H].object),delete B[H];delete U[P]}delete i[b]}}function w(b){if(i[b.id]===void 0)return;let U=i[b.id];for(let P in U){let B=U[P];for(let H in B)u(B[H].object),delete B[H];delete U[P]}delete i[b.id]}function E(b){for(let U in i){let P=i[U];if(P[b.id]===void 0)continue;let B=P[b.id];for(let H in B)u(B[H].object),delete B[H];delete P[b.id]}}function R(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function xU(e,t,n){let i;function s(c){i=c}function r(c,u){e.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,f){f!==0&&(e.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function o(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_];n.update(p,i,1)}function l(c,u,f,h){if(f===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],u[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g]*h[g];n.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function SU(e,t,n,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==Ii&&i.convert(E)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let R=E===yl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==cs&&i.convert(E)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==us&&!R)}function l(E){if(E==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),d=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=_>0,w=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:T,maxSamples:w}}function MU(e){let t=this,n=null,i=0,s=!1,r=!1,a=new is,o=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let p=f.length!==0||h||i!==0||s;return s=h,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,p){let _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,d=e.get(f);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{let v=r?0:i,y=v*4,x=d.clippingState||null;l.value=x,x=u(_,h,y,p);for(let T=0;T!==y;++T)x[T]=n[T];d.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,h,p,_){let g=f!==null?f.length:0,m=null;if(g!==0){if(m=l.value,_!==!0||m===null){let d=p+g*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,x=p;y!==g;++y,x+=4)a.copy(f[y]).applyMatrix4(v,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function bU(e){let t=new WeakMap;function n(a,o){return o===gd?a.mapping=Ha:o===_d&&(a.mapping=Ga),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===gd||o===_d)if(t.has(a)){let l=t.get(a).texture;return n(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Kf(l.height);return c.fromEquirectangularTexture(e,a),t.set(a,c),a.addEventListener("dispose",s),n(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var bl=4,ET=[.125,.215,.35,.446,.526,.582],Ya=20,F_=new _l,AT=new se,V_=null,H_=0,G_=0,k_=!1,qa=(1+Math.sqrt(5))/2,Ml=1/qa,wT=[new z(-qa,Ml,0),new z(qa,Ml,0),new z(-Ml,0,qa),new z(Ml,0,qa),new z(0,qa,-Ml),new z(0,qa,Ml),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],TU=new z,np=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,s=100,r={}){let{size:a=256,position:o=TU}=r;V_=this._renderer.getRenderTarget(),H_=this._renderer.getActiveCubeFace(),G_=this._renderer.getActiveMipmapLevel(),k_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=DT(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=RT(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(V_,H_,G_),this._renderer.xr.enabled=k_,t.scissorTest=!1,tp(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Ha||t.mapping===Ga?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),V_=this._renderer.getRenderTarget(),H_=this._renderer.getActiveCubeFace(),G_=this._renderer.getActiveMipmapLevel(),k_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ki,minFilter:ki,generateMipmaps:!1,type:yl,format:Ii,colorSpace:Ba,depthBuffer:!1},s=CT(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=CT(t,n,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=EU(r)),this._blurMaterial=AU(r,t,n)}return s}_compileMaterial(t){let n=new Wn(this._lodPlanes[0],t);this._renderer.compile(n,F_)}_sceneToCubeUV(t,n,i,s,r){let l=new Xn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(AT),f.toneMapping=Zs,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));let g=new eu({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1}),m=new Wn(new ml,g),d=!1,v=t.background;v?v.isColor&&(g.color.copy(v),t.background=null,d=!0):(g.color.copy(AT),d=!0);for(let y=0;y<6;y++){let x=y%3;x===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[y],r.y,r.z)):x===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[y]));let T=this._cubeSize;tp(s,x*T,y>2?T:0,T,T),f.setRenderTarget(s),d&&f.render(m,l),f.render(t,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=p,f.autoClear=h,t.background=v}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===Ha||t.mapping===Ga;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=DT()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=RT());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Wn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;tp(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,F_)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=wT[(s-r-1)%wT.length];this._blur(t,r-1,r,a,o)}n.autoClear=i}_blur(t,n,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,n,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,n,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,f=new Wn(this._lodPlanes[s],c),h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ya-1),g=r/_,m=isFinite(r)?1+Math.floor(u*g):Ya;m>Ya&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ya}`);let d=[],v=0;for(let E=0;E<Ya;++E){let R=E/g,S=Math.exp(-R*R/2);d.push(S),E===0?v+=S:E<m&&(v+=2*S)}for(let E=0;E<d.length;E++)d[E]=d[E]/v;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:y}=this;h.dTheta.value=_,h.mipInt.value=y-i;let x=this._sizeLods[s],T=3*x*(s>y-bl?s-y+bl:0),w=4*(this._cubeSize-x);tp(n,T,w,3*x,2*x),l.setRenderTarget(n),l.render(f,F_)}};function EU(e){let t=[],n=[],i=[],s=e,r=e-bl+1+ET.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);n.push(o);let l=1/o;a>e-bl?l=ET[a-e+bl-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,g=3,m=2,d=1,v=new Float32Array(g*_*p),y=new Float32Array(m*_*p),x=new Float32Array(d*_*p);for(let w=0;w<p;w++){let E=w%3*2/3-1,R=w>2?0:-1,S=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];v.set(S,g*_*w),y.set(h,m*_*w);let b=[w,w,w,w,w,w];x.set(b,d*_*w)}let T=new Xr;T.setAttribute("position",new fi(v,g)),T.setAttribute("uv",new fi(y,m)),T.setAttribute("faceIndex",new fi(x,d)),t.push(T),s>bl&&s--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function CT(e,t,n){let i=new rs(e,t,n);return i.texture.mapping=fu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function tp(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function AU(e,t,n){let i=new Float32Array(Ya),s=new z(0,1,0);return new pi({name:"SphericalGaussianBlur",defines:{n:Ya,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$_(),fragmentShader:`

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
		`,blending:Ys,depthTest:!1,depthWrite:!1})}function RT(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$_(),fragmentShader:`

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
		`,blending:Ys,depthTest:!1,depthWrite:!1})}function DT(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ys,depthTest:!1,depthWrite:!1})}function $_(){return`

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
	`}function wU(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===gd||l===_d,u=l===Ha||l===Ga;if(c||u){let f=t.get(o),h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new np(e)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{let p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(n===null&&(n=new np(e)),f=c?n.fromEquirectangular(o):n.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function CU(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(i)}return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&fl("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function RU(e,t,n,i){let s={},r=new WeakMap;function a(f){let h=f.target;h.index!==null&&t.remove(h.index);for(let _ in h.attributes)t.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete s[h.id];let p=r.get(h);p&&(t.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,n.memory.geometries++),h}function l(f){let h=f.attributes;for(let p in h)t.update(h[p],e.ARRAY_BUFFER)}function c(f){let h=[],p=f.index,_=f.attributes.position,g=0;if(p!==null){let v=p.array;g=p.version;for(let y=0,x=v.length;y<x;y+=3){let T=v[y+0],w=v[y+1],E=v[y+2];h.push(T,w,w,E,E,T)}}else if(_!==void 0){let v=_.array;g=_.version;for(let y=0,x=v.length/3-1;y<x;y+=3){let T=y+0,w=y+1,E=y+2;h.push(T,w,w,E,E,T)}}else return;let m=new(N_(h)?iu:nu)(h,1);m.version=g;let d=r.get(f);d&&t.remove(d),r.set(f,m)}function u(f){let h=r.get(f);if(h){let p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function DU(e,t,n){let i;function s(h){i=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,p){e.drawElements(i,p,r,h*a),n.update(p,i,1)}function c(h,p,_){_!==0&&(e.drawElementsInstanced(i,p,r,h*a,_),n.update(p,i,_))}function u(h,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,h,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];n.update(m,i,1)}function f(h,p,_,g){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/a,p[d],g[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,h,0,g,0,_);let d=0;for(let v=0;v<_;v++)d+=p[v]*g[v];n.update(d,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function UU(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case e.TRIANGLES:n.triangles+=o*(r/3);break;case e.LINES:n.lines+=o*(r/2);break;case e.LINE_STRIP:n.lines+=o*(r-1);break;case e.LINE_LOOP:n.lines+=o*r;break;case e.POINTS:n.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function LU(e,t,n){let i=new WeakMap,s=new Fe;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==f){let S=function(){E.dispose(),i.delete(o),o.removeEventListener("dispose",S)};h!==void 0&&h.texture.dispose();let p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],y=0;p===!0&&(y=1),_===!0&&(y=2),g===!0&&(y=3);let x=o.attributes.position.count*y,T=1;x>t.maxTextureSize&&(T=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let w=new Float32Array(x*T*4*f),E=new $c(w,x,T,f);E.type=us,E.needsUpdate=!0;let R=y*4;for(let b=0;b<f;b++){let U=m[b],P=d[b],B=v[b],H=x*T*4*b;for(let X=0;X<U.count;X++){let G=X*R;p===!0&&(s.fromBufferAttribute(U,X),w[H+G+0]=s.x,w[H+G+1]=s.y,w[H+G+2]=s.z,w[H+G+3]=0),_===!0&&(s.fromBufferAttribute(P,X),w[H+G+4]=s.x,w[H+G+5]=s.y,w[H+G+6]=s.z,w[H+G+7]=0),g===!0&&(s.fromBufferAttribute(B,X),w[H+G+8]=s.x,w[H+G+9]=s.y,w[H+G+10]=s.z,w[H+G+11]=B.itemSize===4?s.w:1)}}h={count:f,texture:E,size:new Zt(x,T)},i.set(o,h),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",a.morphTexture,n);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];let _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",_),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:r}}function OU(e,t,n,i){let s=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,f=t.get(l,u);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:a}}var JT=new di,UT=new lu(1,1),KT=new $c,QT=new Yf,jT=new ru,LT=[],OT=[],NT=new Float32Array(16),IT=new Float32Array(9),PT=new Float32Array(4);function El(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,r=LT[s];if(r===void 0&&(r=new Float32Array(s),LT[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=n,e[a].toArray(r,o)}return r}function $e(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function tn(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function sp(e,t){let n=OT[t];n===void 0&&(n=new Int32Array(t),OT[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function NU(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function IU(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if($e(n,t))return;e.uniform2fv(this.addr,t),tn(n,t)}}function PU(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if($e(n,t))return;e.uniform3fv(this.addr,t),tn(n,t)}}function BU(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if($e(n,t))return;e.uniform4fv(this.addr,t),tn(n,t)}}function zU(e,t){let n=this.cache,i=t.elements;if(i===void 0){if($e(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),tn(n,t)}else{if($e(n,i))return;PT.set(i),e.uniformMatrix2fv(this.addr,!1,PT),tn(n,i)}}function FU(e,t){let n=this.cache,i=t.elements;if(i===void 0){if($e(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),tn(n,t)}else{if($e(n,i))return;IT.set(i),e.uniformMatrix3fv(this.addr,!1,IT),tn(n,i)}}function VU(e,t){let n=this.cache,i=t.elements;if(i===void 0){if($e(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),tn(n,t)}else{if($e(n,i))return;NT.set(i),e.uniformMatrix4fv(this.addr,!1,NT),tn(n,i)}}function HU(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function GU(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if($e(n,t))return;e.uniform2iv(this.addr,t),tn(n,t)}}function kU(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if($e(n,t))return;e.uniform3iv(this.addr,t),tn(n,t)}}function XU(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if($e(n,t))return;e.uniform4iv(this.addr,t),tn(n,t)}}function WU(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function qU(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if($e(n,t))return;e.uniform2uiv(this.addr,t),tn(n,t)}}function YU(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if($e(n,t))return;e.uniform3uiv(this.addr,t),tn(n,t)}}function ZU(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if($e(n,t))return;e.uniform4uiv(this.addr,t),tn(n,t)}}function JU(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let r;this.type===e.SAMPLER_2D_SHADOW?(UT.compareFunction=L_,r=UT):r=JT,n.setTexture2D(t||r,s)}function KU(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||QT,s)}function QU(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||jT,s)}function jU(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||KT,s)}function $U(e){switch(e){case 5126:return NU;case 35664:return IU;case 35665:return PU;case 35666:return BU;case 35674:return zU;case 35675:return FU;case 35676:return VU;case 5124:case 35670:return HU;case 35667:case 35671:return GU;case 35668:case 35672:return kU;case 35669:case 35673:return XU;case 5125:return WU;case 36294:return qU;case 36295:return YU;case 36296:return ZU;case 35678:case 36198:case 36298:case 36306:case 35682:return JU;case 35679:case 36299:case 36307:return KU;case 35680:case 36300:case 36308:case 36293:return QU;case 36289:case 36303:case 36311:case 36292:return jU}}function tL(e,t){e.uniform1fv(this.addr,t)}function eL(e,t){let n=El(t,this.size,2);e.uniform2fv(this.addr,n)}function nL(e,t){let n=El(t,this.size,3);e.uniform3fv(this.addr,n)}function iL(e,t){let n=El(t,this.size,4);e.uniform4fv(this.addr,n)}function sL(e,t){let n=El(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function rL(e,t){let n=El(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function aL(e,t){let n=El(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function oL(e,t){e.uniform1iv(this.addr,t)}function lL(e,t){e.uniform2iv(this.addr,t)}function cL(e,t){e.uniform3iv(this.addr,t)}function uL(e,t){e.uniform4iv(this.addr,t)}function hL(e,t){e.uniform1uiv(this.addr,t)}function fL(e,t){e.uniform2uiv(this.addr,t)}function dL(e,t){e.uniform3uiv(this.addr,t)}function pL(e,t){e.uniform4uiv(this.addr,t)}function mL(e,t,n){let i=this.cache,s=t.length,r=sp(n,s);$e(i,r)||(e.uniform1iv(this.addr,r),tn(i,r));for(let a=0;a!==s;++a)n.setTexture2D(t[a]||JT,r[a])}function gL(e,t,n){let i=this.cache,s=t.length,r=sp(n,s);$e(i,r)||(e.uniform1iv(this.addr,r),tn(i,r));for(let a=0;a!==s;++a)n.setTexture3D(t[a]||QT,r[a])}function _L(e,t,n){let i=this.cache,s=t.length,r=sp(n,s);$e(i,r)||(e.uniform1iv(this.addr,r),tn(i,r));for(let a=0;a!==s;++a)n.setTextureCube(t[a]||jT,r[a])}function vL(e,t,n){let i=this.cache,s=t.length,r=sp(n,s);$e(i,r)||(e.uniform1iv(this.addr,r),tn(i,r));for(let a=0;a!==s;++a)n.setTexture2DArray(t[a]||KT,r[a])}function yL(e){switch(e){case 5126:return tL;case 35664:return eL;case 35665:return nL;case 35666:return iL;case 35674:return sL;case 35675:return rL;case 35676:return aL;case 5124:case 35670:return oL;case 35667:case 35671:return lL;case 35668:case 35672:return cL;case 35669:case 35673:return uL;case 5125:return hL;case 36294:return fL;case 36295:return dL;case 36296:return pL;case 35678:case 36198:case 36298:case 36306:case 35682:return mL;case 35679:case 36299:case 36307:return gL;case 35680:case 36300:case 36308:case 36293:return _L;case 36289:case 36303:case 36311:case 36292:return vL}}var W_=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=$U(n.type)}},q_=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=yL(n.type)}},Y_=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,n[o.id],i)}}},X_=/(\w+)(\])?(\[|\.)?/g;function BT(e,t){e.seq.push(t),e.map[t.id]=t}function xL(e,t,n){let i=e.name,s=i.length;for(X_.lastIndex=0;;){let r=X_.exec(i),a=X_.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){BT(n,c===void 0?new W_(o,e,t):new q_(o,e,t));break}else{let f=n.map[o];f===void 0&&(f=new Y_(o),BT(n,f)),n=f}}}var Tl=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(n,s),a=t.getUniformLocation(n,r.name);xL(r,a,this)}}setValue(t,n,i,s){let r=this.map[n];r!==void 0&&r.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let r=0,a=n.length;r!==a;++r){let o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in n&&i.push(a)}return i}};function zT(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var SL=37297,ML=0;function bL(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var FT=new Vt;function TL(e){jt._getMatrix(FT,jt.workingColorSpace,e);let t=`mat3( ${FT.elements.map(n=>n.toFixed(4))} )`;switch(jt.getTransfer(e)){case Kc:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function VT(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),r=(e.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+bL(e.getShaderSource(t),o)}else return r}function EL(e,t){let n=TL(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function AL(e,t){let n;switch(t){case eT:n="Linear";break;case nT:n="Reinhard";break;case iT:n="Cineon";break;case sT:n="ACESFilmic";break;case aT:n="AgX";break;case oT:n="Neutral";break;case rT:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var ep=new z;function wL(){jt.getLuminanceCoefficients(ep);let e=ep.x.toFixed(4),t=ep.y.toFixed(4),n=ep.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CL(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yu).join(`
`)}function RL(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function DL(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=e.getActiveAttrib(t,s),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function yu(e){return e!==""}function HT(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function GT(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var UL=/^[ \t]*#include +<([\w\d./]+)>/gm;function Z_(e){return e.replace(UL,OL)}var LL=new Map;function OL(e,t){let n=kt[t];if(n===void 0){let i=LL.get(t);if(i!==void 0)n=kt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Z_(n)}var NL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kT(e){return e.replace(NL,IL)}function IL(e,t,n,i){let s="";for(let r=parseInt(t);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function XT(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}function PL(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===v_?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===Nb?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===os&&(t="SHADOWMAP_TYPE_VSM"),t}function BL(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Ha:case Ga:t="ENVMAP_TYPE_CUBE";break;case fu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function zL(e){let t="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===Ga&&(t="ENVMAP_MODE_REFRACTION"),t}function FL(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case M_:t="ENVMAP_BLENDING_MULTIPLY";break;case $b:t="ENVMAP_BLENDING_MIX";break;case tT:t="ENVMAP_BLENDING_ADD";break}return t}function VL(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function HL(e,t,n,i){let s=e.getContext(),r=n.defines,a=n.vertexShader,o=n.fragmentShader,l=PL(n),c=BL(n),u=zL(n),f=FL(n),h=VL(n),p=CL(n),_=RL(r),g=s.createProgram(),m,d,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(yu).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(yu).join(`
`),d.length>0&&(d+=`
`)):(m=[XT(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yu).join(`
`),d=[XT(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Zs?"#define TONE_MAPPING":"",n.toneMapping!==Zs?kt.tonemapping_pars_fragment:"",n.toneMapping!==Zs?AL("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,EL("linearToOutputTexel",n.outputColorSpace),wL(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(yu).join(`
`)),a=Z_(a),a=HT(a,n),a=GT(a,n),o=Z_(o),o=HT(o,n),o=GT(o,n),a=kT(a),o=kT(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===O_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===O_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let y=v+m+a,x=v+d+o,T=zT(s,s.VERTEX_SHADER,y),w=zT(s,s.FRAGMENT_SHADER,x);s.attachShader(g,T),s.attachShader(g,w),n.index0AttributeName!==void 0?s.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function E(U){if(e.debug.checkShaderErrors){let P=s.getProgramInfoLog(g)||"",B=s.getShaderInfoLog(T)||"",H=s.getShaderInfoLog(w)||"",X=P.trim(),G=B.trim(),J=H.trim(),F=!0,rt=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(F=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,g,T,w);else{let lt=VT(s,T,"vertex"),gt=VT(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+X+`
`+lt+`
`+gt)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(G===""||J==="")&&(rt=!1);rt&&(U.diagnostics={runnable:F,programLog:X,vertexShader:{log:G,prefix:m},fragmentShader:{log:J,prefix:d}})}s.deleteShader(T),s.deleteShader(w),R=new Tl(s,g),S=DL(s,g)}let R;this.getUniforms=function(){return R===void 0&&E(this),R};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(g,SL)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ML++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=w,this}var GL=0,J_=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let n=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new K_(t),n.set(t,i)),i}},K_=class{constructor(t){this.id=GL++,this.code=t,this.usedTimes=0}};function kL(e,t,n,i,s,r,a){let o=new tu,l=new J_,c=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.vertexTextures,p=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,b,U,P,B){let H=P.fog,X=B.geometry,G=S.isMeshStandardMaterial?P.environment:null,J=(S.isMeshStandardMaterial?n:t).get(S.envMap||G),F=J&&J.mapping===fu?J.image.height:null,rt=_[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let lt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,gt=lt!==void 0?lt.length:0,Ot=0;X.morphAttributes.position!==void 0&&(Ot=1),X.morphAttributes.normal!==void 0&&(Ot=2),X.morphAttributes.color!==void 0&&(Ot=3);let te,ut,wt,Y;if(rt){let re=hs[rt];te=re.vertexShader,ut=re.fragmentShader}else te=S.vertexShader,ut=S.fragmentShader,l.update(S),wt=l.getVertexShaderID(S),Y=l.getFragmentShaderID(S);let Q=e.getRenderTarget(),it=e.state.buffers.depth.getReversed(),St=B.isInstancedMesh===!0,_t=B.isBatchedMesh===!0,Gt=!!S.map,en=!!S.matcap,D=!!J,fe=!!S.aoMap,It=!!S.lightMap,Rt=!!S.bumpMap,pt=!!S.normalMap,de=!!S.displacementMap,vt=!!S.emissiveMap,Pt=!!S.metalnessMap,Ve=!!S.roughnessMap,ee=S.anisotropy>0,C=S.clearcoat>0,M=S.dispersion>0,I=S.iridescence>0,q=S.sheen>0,j=S.transmission>0,W=ee&&!!S.anisotropyMap,Mt=C&&!!S.clearcoatMap,st=C&&!!S.clearcoatNormalMap,bt=C&&!!S.clearcoatRoughnessMap,Tt=I&&!!S.iridescenceMap,et=I&&!!S.iridescenceThicknessMap,ft=q&&!!S.sheenColorMap,Ut=q&&!!S.sheenRoughnessMap,Et=!!S.specularMap,ct=!!S.specularColorMap,Ht=!!S.specularIntensityMap,L=j&&!!S.transmissionMap,nt=j&&!!S.thicknessMap,at=!!S.gradientMap,mt=!!S.alphaMap,$=S.alphaTest>0,K=!!S.alphaHash,xt=!!S.extensions,Bt=Zs;S.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Bt=e.toneMapping);let ve={shaderID:rt,shaderType:S.type,shaderName:S.name,vertexShader:te,fragmentShader:ut,defines:S.defines,customVertexShaderID:wt,customFragmentShaderID:Y,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:_t,batchingColor:_t&&B._colorsTexture!==null,instancing:St,instancingColor:St&&B.instanceColor!==null,instancingMorph:St&&B.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Q===null?e.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Ba,alphaToCoverage:!!S.alphaToCoverage,map:Gt,matcap:en,envMap:D,envMapMode:D&&J.mapping,envMapCubeUVHeight:F,aoMap:fe,lightMap:It,bumpMap:Rt,normalMap:pt,displacementMap:h&&de,emissiveMap:vt,normalMapObjectSpace:pt&&S.normalMapType===fT,normalMapTangentSpace:pt&&S.normalMapType===hT,metalnessMap:Pt,roughnessMap:Ve,anisotropy:ee,anisotropyMap:W,clearcoat:C,clearcoatMap:Mt,clearcoatNormalMap:st,clearcoatRoughnessMap:bt,dispersion:M,iridescence:I,iridescenceMap:Tt,iridescenceThicknessMap:et,sheen:q,sheenColorMap:ft,sheenRoughnessMap:Ut,specularMap:Et,specularColorMap:ct,specularIntensityMap:Ht,transmission:j,transmissionMap:L,thicknessMap:nt,gradientMap:at,opaque:S.transparent===!1&&S.blending===Ia&&S.alphaToCoverage===!1,alphaMap:mt,alphaTest:$,alphaHash:K,combine:S.combine,mapUv:Gt&&g(S.map.channel),aoMapUv:fe&&g(S.aoMap.channel),lightMapUv:It&&g(S.lightMap.channel),bumpMapUv:Rt&&g(S.bumpMap.channel),normalMapUv:pt&&g(S.normalMap.channel),displacementMapUv:de&&g(S.displacementMap.channel),emissiveMapUv:vt&&g(S.emissiveMap.channel),metalnessMapUv:Pt&&g(S.metalnessMap.channel),roughnessMapUv:Ve&&g(S.roughnessMap.channel),anisotropyMapUv:W&&g(S.anisotropyMap.channel),clearcoatMapUv:Mt&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:st&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:et&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&g(S.sheenRoughnessMap.channel),specularMapUv:Et&&g(S.specularMap.channel),specularColorMapUv:ct&&g(S.specularColorMap.channel),specularIntensityMapUv:Ht&&g(S.specularIntensityMap.channel),transmissionMapUv:L&&g(S.transmissionMap.channel),thicknessMapUv:nt&&g(S.thicknessMap.channel),alphaMapUv:mt&&g(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(pt||ee),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!X.attributes.uv&&(Gt||mt),fog:!!H,useFog:S.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:it,skinning:B.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:Ot,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:e.shadowMap.enabled&&U.length>0,shadowMapType:e.shadowMap.type,toneMapping:Bt,decodeVideoTexture:Gt&&S.map.isVideoTexture===!0&&jt.getTransfer(S.map.colorSpace)===le,decodeVideoTextureEmissive:vt&&S.emissiveMap.isVideoTexture===!0&&jt.getTransfer(S.emissiveMap.colorSpace)===le,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ls,flipSided:S.side===Rn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:xt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&S.extensions.multiDraw===!0||_t)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ve.vertexUv1s=c.has(1),ve.vertexUv2s=c.has(2),ve.vertexUv3s=c.has(3),c.clear(),ve}function d(S){let b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(let U in S.defines)b.push(U),b.push(S.defines[U]);return S.isRawShaderMaterial===!1&&(v(b,S),y(b,S),b.push(e.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function v(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function y(S,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),S.push(o.mask)}function x(S){let b=_[S.type],U;if(b){let P=hs[b];U=bT.clone(P.uniforms)}else U=S.uniforms;return U}function T(S,b){let U;for(let P=0,B=u.length;P<B;P++){let H=u[P];if(H.cacheKey===b){U=H,++U.usedTimes;break}}return U===void 0&&(U=new HL(e,b,S,r),u.push(U)),U}function w(S){if(--S.usedTimes===0){let b=u.indexOf(S);u[b]=u[u.length-1],u.pop(),S.destroy()}}function E(S){l.remove(S)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:T,releaseProgram:w,releaseShaderCache:E,programs:u,dispose:R}}function XL(){let e=new WeakMap;function t(a){return e.has(a)}function n(a){let o=e.get(a);return o===void 0&&(o={},e.set(a,o)),o}function i(a){e.delete(a)}function s(a,o,l){e.get(a)[o]=l}function r(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:r}}function WL(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function WT(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function qT(){let e=[],t=0,n=[],i=[],s=[];function r(){t=0,n.length=0,i.length=0,s.length=0}function a(f,h,p,_,g,m){let d=e[t];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},e[t]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=g,d.group=m),t++,d}function o(f,h,p,_,g,m){let d=a(f,h,p,_,g,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):n.push(d)}function l(f,h,p,_,g,m){let d=a(f,h,p,_,g,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):n.unshift(d)}function c(f,h){n.length>1&&n.sort(f||WL),i.length>1&&i.sort(h||WT),s.length>1&&s.sort(h||WT)}function u(){for(let f=t,h=e.length;f<h;f++){let p=e[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function qL(){let e=new WeakMap;function t(i,s){let r=e.get(i),a;return r===void 0?(a=new qT,e.set(i,[a])):s>=r.length?(a=new qT,r.push(a)):a=r[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function YL(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new z,color:new se};break;case"SpotLight":n={position:new z,direction:new z,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new se,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new se,groundColor:new se};break;case"RectAreaLight":n={color:new se,position:new z,halfWidth:new z,halfHeight:new z};break}return e[t.id]=n,n}}}function ZL(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var JL=0;function KL(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function QL(e){let t=new YL,n=ZL(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);let s=new z,r=new je,a=new je;function o(c){let u=0,f=0,h=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,_=0,g=0,m=0,d=0,v=0,y=0,x=0,T=0,w=0,E=0;c.sort(KL);for(let S=0,b=c.length;S<b;S++){let U=c[S],P=U.color,B=U.intensity,H=U.distance,X=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=P.r*B,f+=P.g*B,h+=P.b*B;else if(U.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(U.sh.coefficients[G],B);E++}else if(U.isDirectionalLight){let G=t.get(U);if(G.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let J=U.shadow,F=n.get(U);F.shadowIntensity=J.intensity,F.shadowBias=J.bias,F.shadowNormalBias=J.normalBias,F.shadowRadius=J.radius,F.shadowMapSize=J.mapSize,i.directionalShadow[p]=F,i.directionalShadowMap[p]=X,i.directionalShadowMatrix[p]=U.shadow.matrix,v++}i.directional[p]=G,p++}else if(U.isSpotLight){let G=t.get(U);G.position.setFromMatrixPosition(U.matrixWorld),G.color.copy(P).multiplyScalar(B),G.distance=H,G.coneCos=Math.cos(U.angle),G.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),G.decay=U.decay,i.spot[g]=G;let J=U.shadow;if(U.map&&(i.spotLightMap[T]=U.map,T++,J.updateMatrices(U),U.castShadow&&w++),i.spotLightMatrix[g]=J.matrix,U.castShadow){let F=n.get(U);F.shadowIntensity=J.intensity,F.shadowBias=J.bias,F.shadowNormalBias=J.normalBias,F.shadowRadius=J.radius,F.shadowMapSize=J.mapSize,i.spotShadow[g]=F,i.spotShadowMap[g]=X,x++}g++}else if(U.isRectAreaLight){let G=t.get(U);G.color.copy(P).multiplyScalar(B),G.halfWidth.set(U.width*.5,0,0),G.halfHeight.set(0,U.height*.5,0),i.rectArea[m]=G,m++}else if(U.isPointLight){let G=t.get(U);if(G.color.copy(U.color).multiplyScalar(U.intensity),G.distance=U.distance,G.decay=U.decay,U.castShadow){let J=U.shadow,F=n.get(U);F.shadowIntensity=J.intensity,F.shadowBias=J.bias,F.shadowNormalBias=J.normalBias,F.shadowRadius=J.radius,F.shadowMapSize=J.mapSize,F.shadowCameraNear=J.camera.near,F.shadowCameraFar=J.camera.far,i.pointShadow[_]=F,i.pointShadowMap[_]=X,i.pointShadowMatrix[_]=U.shadow.matrix,y++}i.point[_]=G,_++}else if(U.isHemisphereLight){let G=t.get(U);G.skyColor.copy(U.color).multiplyScalar(B),G.groundColor.copy(U.groundColor).multiplyScalar(B),i.hemi[d]=G,d++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;let R=i.hash;(R.directionalLength!==p||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==d||R.numDirectionalShadows!==v||R.numPointShadows!==y||R.numSpotShadows!==x||R.numSpotMaps!==T||R.numLightProbes!==E)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+T-w,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=E,R.directionalLength=p,R.pointLength=_,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=d,R.numDirectionalShadows=v,R.numPointShadows=y,R.numSpotShadows=x,R.numSpotMaps=T,R.numLightProbes=E,i.version=JL++)}function l(c,u){let f=0,h=0,p=0,_=0,g=0,m=u.matrixWorldInverse;for(let d=0,v=c.length;d<v;d++){let y=c[d];if(y.isDirectionalLight){let x=i.directional[f];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(y.isSpotLight){let x=i.spot[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let x=i.rectArea[_];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let x=i.point[h];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){let x=i.hemi[g];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function YT(e){let t=new QL(e),n=[],i=[];function s(u){c.camera=u,n.length=0,i.length=0}function r(u){n.push(u)}function a(u){i.push(u)}function o(){t.setup(n)}function l(u){t.setupView(n,u)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function jL(e){let t=new WeakMap;function n(s,r=0){let a=t.get(s),o;return a===void 0?(o=new YT(e),t.set(s,[o])):r>=a.length?(o=new YT(e),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var $L=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tO=`uniform sampler2D shadow_pass;
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
}`;function eO(e,t,n){let i=new ou,s=new Zt,r=new Zt,a=new Fe,o=new Qf({depthPacking:uT}),l=new jf,c={},u=n.maxTextureSize,f={[Xs]:Rn,[Rn]:Xs,[ls]:ls},h=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Zt},radius:{value:4}},vertexShader:$L,fragmentShader:tO}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let _=new Xr;_.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Wn(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=v_;let d=this.type;this.render=function(w,E,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let S=e.getRenderTarget(),b=e.getActiveCubeFace(),U=e.getActiveMipmapLevel(),P=e.state;P.setBlending(Ys),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let B=d!==os&&this.type===os,H=d===os&&this.type!==os;for(let X=0,G=w.length;X<G;X++){let J=w[X],F=J.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let rt=F.getFrameExtents();if(s.multiply(rt),r.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/rt.x),s.x=r.x*rt.x,F.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/rt.y),s.y=r.y*rt.y,F.mapSize.y=r.y)),F.map===null||B===!0||H===!0){let gt=this.type!==os?{minFilter:Oi,magFilter:Oi}:{};F.map!==null&&F.map.dispose(),F.map=new rs(s.x,s.y,gt),F.map.texture.name=J.name+".shadowMap",F.camera.updateProjectionMatrix()}e.setRenderTarget(F.map),e.clear();let lt=F.getViewportCount();for(let gt=0;gt<lt;gt++){let Ot=F.getViewport(gt);a.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),P.viewport(a),F.updateMatrices(J,gt),i=F.getFrustum(),x(E,R,F.camera,J,this.type)}F.isPointLightShadow!==!0&&this.type===os&&v(F,R),F.needsUpdate=!1}d=this.type,m.needsUpdate=!1,e.setRenderTarget(S,b,U)};function v(w,E){let R=t.update(g);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new rs(s.x,s.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(E,null,R,h,g,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(E,null,R,p,g,null)}function y(w,E,R,S){let b=null,U=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)b=U;else if(b=R.isPointLight===!0?l:o,e.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let P=b.uuid,B=E.uuid,H=c[P];H===void 0&&(H={},c[P]=H);let X=H[B];X===void 0&&(X=b.clone(),H[B]=X,E.addEventListener("dispose",T)),b=X}if(b.visible=E.visible,b.wireframe=E.wireframe,S===os?b.side=E.shadowSide!==null?E.shadowSide:E.side:b.side=E.shadowSide!==null?E.shadowSide:f[E.side],b.alphaMap=E.alphaMap,b.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,b.map=E.map,b.clipShadows=E.clipShadows,b.clippingPlanes=E.clippingPlanes,b.clipIntersection=E.clipIntersection,b.displacementMap=E.displacementMap,b.displacementScale=E.displacementScale,b.displacementBias=E.displacementBias,b.wireframeLinewidth=E.wireframeLinewidth,b.linewidth=E.linewidth,R.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let P=e.properties.get(b);P.light=R}return b}function x(w,E,R,S,b){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===os)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);let B=t.update(w),H=w.material;if(Array.isArray(H)){let X=B.groups;for(let G=0,J=X.length;G<J;G++){let F=X[G],rt=H[F.materialIndex];if(rt&&rt.visible){let lt=y(w,rt,S,b);w.onBeforeShadow(e,w,E,R,B,lt,F),e.renderBufferDirect(R,null,B,lt,w,F),w.onAfterShadow(e,w,E,R,B,lt,F)}}}else if(H.visible){let X=y(w,H,S,b);w.onBeforeShadow(e,w,E,R,B,X,null),e.renderBufferDirect(R,null,B,X,w,null),w.onAfterShadow(e,w,E,R,B,X,null)}}let P=w.children;for(let B=0,H=P.length;B<H;B++)x(P[B],E,R,S,b)}function T(w){w.target.removeEventListener("dispose",T);for(let R in c){let S=c[R],b=w.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}var nO={[cd]:ud,[hd]:pd,[fd]:md,[Pa]:dd,[ud]:cd,[pd]:hd,[md]:fd,[dd]:Pa};function iO(e,t){function n(){let L=!1,nt=new Fe,at=null,mt=new Fe(0,0,0,0);return{setMask:function($){at!==$&&!L&&(e.colorMask($,$,$,$),at=$)},setLocked:function($){L=$},setClear:function($,K,xt,Bt,ve){ve===!0&&($*=Bt,K*=Bt,xt*=Bt),nt.set($,K,xt,Bt),mt.equals(nt)===!1&&(e.clearColor($,K,xt,Bt),mt.copy(nt))},reset:function(){L=!1,at=null,mt.set(-1,0,0,0)}}}function i(){let L=!1,nt=!1,at=null,mt=null,$=null;return{setReversed:function(K){if(nt!==K){let xt=t.get("EXT_clip_control");K?xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.ZERO_TO_ONE_EXT):xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.NEGATIVE_ONE_TO_ONE_EXT),nt=K;let Bt=$;$=null,this.setClear(Bt)}},getReversed:function(){return nt},setTest:function(K){K?Q(e.DEPTH_TEST):it(e.DEPTH_TEST)},setMask:function(K){at!==K&&!L&&(e.depthMask(K),at=K)},setFunc:function(K){if(nt&&(K=nO[K]),mt!==K){switch(K){case cd:e.depthFunc(e.NEVER);break;case ud:e.depthFunc(e.ALWAYS);break;case hd:e.depthFunc(e.LESS);break;case Pa:e.depthFunc(e.LEQUAL);break;case fd:e.depthFunc(e.EQUAL);break;case dd:e.depthFunc(e.GEQUAL);break;case pd:e.depthFunc(e.GREATER);break;case md:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}mt=K}},setLocked:function(K){L=K},setClear:function(K){$!==K&&(nt&&(K=1-K),e.clearDepth(K),$=K)},reset:function(){L=!1,at=null,mt=null,$=null,nt=!1}}}function s(){let L=!1,nt=null,at=null,mt=null,$=null,K=null,xt=null,Bt=null,ve=null;return{setTest:function(re){L||(re?Q(e.STENCIL_TEST):it(e.STENCIL_TEST))},setMask:function(re){nt!==re&&!L&&(e.stencilMask(re),nt=re)},setFunc:function(re,fs,Xi){(at!==re||mt!==fs||$!==Xi)&&(e.stencilFunc(re,fs,Xi),at=re,mt=fs,$=Xi)},setOp:function(re,fs,Xi){(K!==re||xt!==fs||Bt!==Xi)&&(e.stencilOp(re,fs,Xi),K=re,xt=fs,Bt=Xi)},setLocked:function(re){L=re},setClear:function(re){ve!==re&&(e.clearStencil(re),ve=re)},reset:function(){L=!1,nt=null,at=null,mt=null,$=null,K=null,xt=null,Bt=null,ve=null}}}let r=new n,a=new i,o=new s,l=new WeakMap,c=new WeakMap,u={},f={},h=new WeakMap,p=[],_=null,g=!1,m=null,d=null,v=null,y=null,x=null,T=null,w=null,E=new se(0,0,0),R=0,S=!1,b=null,U=null,P=null,B=null,H=null,X=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,J=0,F=e.getParameter(e.VERSION);F.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(F)[1]),G=J>=1):F.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),G=J>=2);let rt=null,lt={},gt=e.getParameter(e.SCISSOR_BOX),Ot=e.getParameter(e.VIEWPORT),te=new Fe().fromArray(gt),ut=new Fe().fromArray(Ot);function wt(L,nt,at,mt){let $=new Uint8Array(4),K=e.createTexture();e.bindTexture(L,K),e.texParameteri(L,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(L,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let xt=0;xt<at;xt++)L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY?e.texImage3D(nt,0,e.RGBA,1,1,mt,0,e.RGBA,e.UNSIGNED_BYTE,$):e.texImage2D(nt+xt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,$);return K}let Y={};Y[e.TEXTURE_2D]=wt(e.TEXTURE_2D,e.TEXTURE_2D,1),Y[e.TEXTURE_CUBE_MAP]=wt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[e.TEXTURE_2D_ARRAY]=wt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Y[e.TEXTURE_3D]=wt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(e.DEPTH_TEST),a.setFunc(Pa),Rt(!1),pt(__),Q(e.CULL_FACE),fe(Ys);function Q(L){u[L]!==!0&&(e.enable(L),u[L]=!0)}function it(L){u[L]!==!1&&(e.disable(L),u[L]=!1)}function St(L,nt){return f[L]!==nt?(e.bindFramebuffer(L,nt),f[L]=nt,L===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=nt),L===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=nt),!0):!1}function _t(L,nt){let at=p,mt=!1;if(L){at=h.get(nt),at===void 0&&(at=[],h.set(nt,at));let $=L.textures;if(at.length!==$.length||at[0]!==e.COLOR_ATTACHMENT0){for(let K=0,xt=$.length;K<xt;K++)at[K]=e.COLOR_ATTACHMENT0+K;at.length=$.length,mt=!0}}else at[0]!==e.BACK&&(at[0]=e.BACK,mt=!0);mt&&e.drawBuffers(at)}function Gt(L){return _!==L?(e.useProgram(L),_=L,!0):!1}let en={[Gr]:e.FUNC_ADD,[Pb]:e.FUNC_SUBTRACT,[Bb]:e.FUNC_REVERSE_SUBTRACT};en[zb]=e.MIN,en[Fb]=e.MAX;let D={[Vb]:e.ZERO,[Hb]:e.ONE,[Gb]:e.SRC_COLOR,[Ff]:e.SRC_ALPHA,[Zb]:e.SRC_ALPHA_SATURATE,[qb]:e.DST_COLOR,[Xb]:e.DST_ALPHA,[kb]:e.ONE_MINUS_SRC_COLOR,[Vf]:e.ONE_MINUS_SRC_ALPHA,[Yb]:e.ONE_MINUS_DST_COLOR,[Wb]:e.ONE_MINUS_DST_ALPHA,[Jb]:e.CONSTANT_COLOR,[Kb]:e.ONE_MINUS_CONSTANT_COLOR,[Qb]:e.CONSTANT_ALPHA,[jb]:e.ONE_MINUS_CONSTANT_ALPHA};function fe(L,nt,at,mt,$,K,xt,Bt,ve,re){if(L===Ys){g===!0&&(it(e.BLEND),g=!1);return}if(g===!1&&(Q(e.BLEND),g=!0),L!==Ib){if(L!==m||re!==S){if((d!==Gr||x!==Gr)&&(e.blendEquation(e.FUNC_ADD),d=Gr,x=Gr),re)switch(L){case Ia:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case y_:e.blendFunc(e.ONE,e.ONE);break;case x_:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case S_:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ia:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case y_:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case x_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case S_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,y=null,T=null,w=null,E.set(0,0,0),R=0,m=L,S=re}return}$=$||nt,K=K||at,xt=xt||mt,(nt!==d||$!==x)&&(e.blendEquationSeparate(en[nt],en[$]),d=nt,x=$),(at!==v||mt!==y||K!==T||xt!==w)&&(e.blendFuncSeparate(D[at],D[mt],D[K],D[xt]),v=at,y=mt,T=K,w=xt),(Bt.equals(E)===!1||ve!==R)&&(e.blendColor(Bt.r,Bt.g,Bt.b,ve),E.copy(Bt),R=ve),m=L,S=!1}function It(L,nt){L.side===ls?it(e.CULL_FACE):Q(e.CULL_FACE);let at=L.side===Rn;nt&&(at=!at),Rt(at),L.blending===Ia&&L.transparent===!1?fe(Ys):fe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let mt=L.stencilWrite;o.setTest(mt),mt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),vt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Q(e.SAMPLE_ALPHA_TO_COVERAGE):it(e.SAMPLE_ALPHA_TO_COVERAGE)}function Rt(L){b!==L&&(L?e.frontFace(e.CW):e.frontFace(e.CCW),b=L)}function pt(L){L!==Lb?(Q(e.CULL_FACE),L!==U&&(L===__?e.cullFace(e.BACK):L===Ob?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):it(e.CULL_FACE),U=L}function de(L){L!==P&&(G&&e.lineWidth(L),P=L)}function vt(L,nt,at){L?(Q(e.POLYGON_OFFSET_FILL),(B!==nt||H!==at)&&(e.polygonOffset(nt,at),B=nt,H=at)):it(e.POLYGON_OFFSET_FILL)}function Pt(L){L?Q(e.SCISSOR_TEST):it(e.SCISSOR_TEST)}function Ve(L){L===void 0&&(L=e.TEXTURE0+X-1),rt!==L&&(e.activeTexture(L),rt=L)}function ee(L,nt,at){at===void 0&&(rt===null?at=e.TEXTURE0+X-1:at=rt);let mt=lt[at];mt===void 0&&(mt={type:void 0,texture:void 0},lt[at]=mt),(mt.type!==L||mt.texture!==nt)&&(rt!==at&&(e.activeTexture(at),rt=at),e.bindTexture(L,nt||Y[L]),mt.type=L,mt.texture=nt)}function C(){let L=lt[rt];L!==void 0&&L.type!==void 0&&(e.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function M(){try{e.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function I(){try{e.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{e.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{e.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function W(){try{e.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Mt(){try{e.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function st(){try{e.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function bt(){try{e.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Tt(){try{e.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{e.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(L){te.equals(L)===!1&&(e.scissor(L.x,L.y,L.z,L.w),te.copy(L))}function Ut(L){ut.equals(L)===!1&&(e.viewport(L.x,L.y,L.z,L.w),ut.copy(L))}function Et(L,nt){let at=c.get(nt);at===void 0&&(at=new WeakMap,c.set(nt,at));let mt=at.get(L);mt===void 0&&(mt=e.getUniformBlockIndex(nt,L.name),at.set(L,mt))}function ct(L,nt){let mt=c.get(nt).get(L);l.get(nt)!==mt&&(e.uniformBlockBinding(nt,mt,L.__bindingPointIndex),l.set(nt,mt))}function Ht(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),a.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},rt=null,lt={},f={},h=new WeakMap,p=[],_=null,g=!1,m=null,d=null,v=null,y=null,x=null,T=null,w=null,E=new se(0,0,0),R=0,S=!1,b=null,U=null,P=null,B=null,H=null,te.set(0,0,e.canvas.width,e.canvas.height),ut.set(0,0,e.canvas.width,e.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:it,bindFramebuffer:St,drawBuffers:_t,useProgram:Gt,setBlending:fe,setMaterial:It,setFlipSided:Rt,setCullFace:pt,setLineWidth:de,setPolygonOffset:vt,setScissorTest:Pt,activeTexture:Ve,bindTexture:ee,unbindTexture:C,compressedTexImage2D:M,compressedTexImage3D:I,texImage2D:Tt,texImage3D:et,updateUBOMapping:Et,uniformBlockBinding:ct,texStorage2D:st,texStorage3D:bt,texSubImage2D:q,texSubImage3D:j,compressedTexSubImage2D:W,compressedTexSubImage3D:Mt,scissor:ft,viewport:Ut,reset:Ht}}function sO(e,t,n,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Zt,u=new WeakMap,f,h=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,M){return p?new OffscreenCanvas(C,M):jc("canvas")}function g(C,M,I){let q=1,j=ee(C);if((j.width>I||j.height>I)&&(q=I/Math.max(j.width,j.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let W=Math.floor(q*j.width),Mt=Math.floor(q*j.height);f===void 0&&(f=_(W,Mt));let st=M?_(W,Mt):f;return st.width=W,st.height=Mt,st.getContext("2d").drawImage(C,0,0,W,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+W+"x"+Mt+")."),st}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),C;return C}function m(C){return C.generateMipmaps}function d(C){e.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?e.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function y(C,M,I,q,j=!1){if(C!==null){if(e[C]!==void 0)return e[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let W=M;if(M===e.RED&&(I===e.FLOAT&&(W=e.R32F),I===e.HALF_FLOAT&&(W=e.R16F),I===e.UNSIGNED_BYTE&&(W=e.R8)),M===e.RED_INTEGER&&(I===e.UNSIGNED_BYTE&&(W=e.R8UI),I===e.UNSIGNED_SHORT&&(W=e.R16UI),I===e.UNSIGNED_INT&&(W=e.R32UI),I===e.BYTE&&(W=e.R8I),I===e.SHORT&&(W=e.R16I),I===e.INT&&(W=e.R32I)),M===e.RG&&(I===e.FLOAT&&(W=e.RG32F),I===e.HALF_FLOAT&&(W=e.RG16F),I===e.UNSIGNED_BYTE&&(W=e.RG8)),M===e.RG_INTEGER&&(I===e.UNSIGNED_BYTE&&(W=e.RG8UI),I===e.UNSIGNED_SHORT&&(W=e.RG16UI),I===e.UNSIGNED_INT&&(W=e.RG32UI),I===e.BYTE&&(W=e.RG8I),I===e.SHORT&&(W=e.RG16I),I===e.INT&&(W=e.RG32I)),M===e.RGB_INTEGER&&(I===e.UNSIGNED_BYTE&&(W=e.RGB8UI),I===e.UNSIGNED_SHORT&&(W=e.RGB16UI),I===e.UNSIGNED_INT&&(W=e.RGB32UI),I===e.BYTE&&(W=e.RGB8I),I===e.SHORT&&(W=e.RGB16I),I===e.INT&&(W=e.RGB32I)),M===e.RGBA_INTEGER&&(I===e.UNSIGNED_BYTE&&(W=e.RGBA8UI),I===e.UNSIGNED_SHORT&&(W=e.RGBA16UI),I===e.UNSIGNED_INT&&(W=e.RGBA32UI),I===e.BYTE&&(W=e.RGBA8I),I===e.SHORT&&(W=e.RGBA16I),I===e.INT&&(W=e.RGBA32I)),M===e.RGB&&(I===e.UNSIGNED_INT_5_9_9_9_REV&&(W=e.RGB9_E5),I===e.UNSIGNED_INT_10F_11F_11F_REV&&(W=e.R11F_G11F_B10F)),M===e.RGBA){let Mt=j?Kc:jt.getTransfer(q);I===e.FLOAT&&(W=e.RGBA32F),I===e.HALF_FLOAT&&(W=e.RGBA16F),I===e.UNSIGNED_BYTE&&(W=Mt===le?e.SRGB8_ALPHA8:e.RGBA8),I===e.UNSIGNED_SHORT_4_4_4_4&&(W=e.RGBA4),I===e.UNSIGNED_SHORT_5_5_5_1&&(W=e.RGB5_A1)}return(W===e.R16F||W===e.R32F||W===e.RG16F||W===e.RG32F||W===e.RGBA16F||W===e.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function x(C,M){let I;return C?M===null||M===Zr||M===xl?I=e.DEPTH24_STENCIL8:M===us?I=e.DEPTH32F_STENCIL8:M===vl&&(I=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Zr||M===xl?I=e.DEPTH_COMPONENT24:M===us?I=e.DEPTH_COMPONENT32F:M===vl&&(I=e.DEPTH_COMPONENT16),I}function T(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Oi&&C.minFilter!==ki?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function w(C){let M=C.target;M.removeEventListener("dispose",w),R(M),M.isVideoTexture&&u.delete(M)}function E(C){let M=C.target;M.removeEventListener("dispose",E),b(M)}function R(C){let M=i.get(C);if(M.__webglInit===void 0)return;let I=C.source,q=h.get(I);if(q){let j=q[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&S(C),Object.keys(q).length===0&&h.delete(I)}i.remove(C)}function S(C){let M=i.get(C);e.deleteTexture(M.__webglTexture);let I=C.source,q=h.get(I);delete q[M.__cacheKey],a.memory.textures--}function b(C){let M=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let j=0;j<M.__webglFramebuffer[q].length;j++)e.deleteFramebuffer(M.__webglFramebuffer[q][j]);else e.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&e.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)e.deleteFramebuffer(M.__webglFramebuffer[q]);else e.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&e.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&e.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&e.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&e.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let I=C.textures;for(let q=0,j=I.length;q<j;q++){let W=i.get(I[q]);W.__webglTexture&&(e.deleteTexture(W.__webglTexture),a.memory.textures--),i.remove(I[q])}i.remove(C)}let U=0;function P(){U=0}function B(){let C=U;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),U+=1,C}function H(C){let M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function X(C,M){let I=i.get(C);if(C.isVideoTexture&&Pt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&I.__version!==C.version){let q=C.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(I,C,M);return}}else C.isExternalTexture&&(I.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,I.__webglTexture,e.TEXTURE0+M)}function G(C,M){let I=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&I.__version!==C.version){Y(I,C,M);return}n.bindTexture(e.TEXTURE_2D_ARRAY,I.__webglTexture,e.TEXTURE0+M)}function J(C,M){let I=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&I.__version!==C.version){Y(I,C,M);return}n.bindTexture(e.TEXTURE_3D,I.__webglTexture,e.TEXTURE0+M)}function F(C,M){let I=i.get(C);if(C.version>0&&I.__version!==C.version){Q(I,C,M);return}n.bindTexture(e.TEXTURE_CUBE_MAP,I.__webglTexture,e.TEXTURE0+M)}let rt={[Hf]:e.REPEAT,[Hr]:e.CLAMP_TO_EDGE,[Gf]:e.MIRRORED_REPEAT},lt={[Oi]:e.NEAREST,[lT]:e.NEAREST_MIPMAP_NEAREST,[du]:e.NEAREST_MIPMAP_LINEAR,[ki]:e.LINEAR,[vd]:e.LINEAR_MIPMAP_NEAREST,[Yr]:e.LINEAR_MIPMAP_LINEAR},gt={[dT]:e.NEVER,[yT]:e.ALWAYS,[pT]:e.LESS,[L_]:e.LEQUAL,[mT]:e.EQUAL,[vT]:e.GEQUAL,[gT]:e.GREATER,[_T]:e.NOTEQUAL};function Ot(C,M){if(M.type===us&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===ki||M.magFilter===vd||M.magFilter===du||M.magFilter===Yr||M.minFilter===ki||M.minFilter===vd||M.minFilter===du||M.minFilter===Yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(C,e.TEXTURE_WRAP_S,rt[M.wrapS]),e.texParameteri(C,e.TEXTURE_WRAP_T,rt[M.wrapT]),(C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY)&&e.texParameteri(C,e.TEXTURE_WRAP_R,rt[M.wrapR]),e.texParameteri(C,e.TEXTURE_MAG_FILTER,lt[M.magFilter]),e.texParameteri(C,e.TEXTURE_MIN_FILTER,lt[M.minFilter]),M.compareFunction&&(e.texParameteri(C,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(C,e.TEXTURE_COMPARE_FUNC,gt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Oi||M.minFilter!==du&&M.minFilter!==Yr||M.type===us&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let I=t.get("EXT_texture_filter_anisotropic");e.texParameterf(C,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function te(C,M){let I=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",w));let q=M.source,j=h.get(q);j===void 0&&(j={},h.set(q,j));let W=H(M);if(W!==C.__cacheKey){j[W]===void 0&&(j[W]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,I=!0),j[W].usedTimes++;let Mt=j[C.__cacheKey];Mt!==void 0&&(j[C.__cacheKey].usedTimes--,Mt.usedTimes===0&&S(M)),C.__cacheKey=W,C.__webglTexture=j[W].texture}return I}function ut(C,M,I){return Math.floor(Math.floor(C/I)/M)}function wt(C,M,I,q){let W=C.updateRanges;if(W.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,M.width,M.height,I,q,M.data);else{W.sort((et,ft)=>et.start-ft.start);let Mt=0;for(let et=1;et<W.length;et++){let ft=W[Mt],Ut=W[et],Et=ft.start+ft.count,ct=ut(Ut.start,M.width,4),Ht=ut(ft.start,M.width,4);Ut.start<=Et+1&&ct===Ht&&ut(Ut.start+Ut.count-1,M.width,4)===ct?ft.count=Math.max(ft.count,Ut.start+Ut.count-ft.start):(++Mt,W[Mt]=Ut)}W.length=Mt+1;let st=e.getParameter(e.UNPACK_ROW_LENGTH),bt=e.getParameter(e.UNPACK_SKIP_PIXELS),Tt=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,M.width);for(let et=0,ft=W.length;et<ft;et++){let Ut=W[et],Et=Math.floor(Ut.start/4),ct=Math.ceil(Ut.count/4),Ht=Et%M.width,L=Math.floor(Et/M.width),nt=ct,at=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Ht),e.pixelStorei(e.UNPACK_SKIP_ROWS,L),n.texSubImage2D(e.TEXTURE_2D,0,Ht,L,nt,at,I,q,M.data)}C.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,st),e.pixelStorei(e.UNPACK_SKIP_PIXELS,bt),e.pixelStorei(e.UNPACK_SKIP_ROWS,Tt)}}function Y(C,M,I){let q=e.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=e.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=e.TEXTURE_3D);let j=te(C,M),W=M.source;n.bindTexture(q,C.__webglTexture,e.TEXTURE0+I);let Mt=i.get(W);if(W.version!==Mt.__version||j===!0){n.activeTexture(e.TEXTURE0+I);let st=jt.getPrimaries(jt.workingColorSpace),bt=M.colorSpace===Js?null:jt.getPrimaries(M.colorSpace),Tt=M.colorSpace===Js||st===bt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let et=g(M.image,!1,s.maxTextureSize);et=Ve(M,et);let ft=r.convert(M.format,M.colorSpace),Ut=r.convert(M.type),Et=y(M.internalFormat,ft,Ut,M.colorSpace,M.isVideoTexture);Ot(q,M);let ct,Ht=M.mipmaps,L=M.isVideoTexture!==!0,nt=Mt.__version===void 0||j===!0,at=W.dataReady,mt=T(M,et);if(M.isDepthTexture)Et=x(M.format===Sl,M.type),nt&&(L?n.texStorage2D(e.TEXTURE_2D,1,Et,et.width,et.height):n.texImage2D(e.TEXTURE_2D,0,Et,et.width,et.height,0,ft,Ut,null));else if(M.isDataTexture)if(Ht.length>0){L&&nt&&n.texStorage2D(e.TEXTURE_2D,mt,Et,Ht[0].width,Ht[0].height);for(let $=0,K=Ht.length;$<K;$++)ct=Ht[$],L?at&&n.texSubImage2D(e.TEXTURE_2D,$,0,0,ct.width,ct.height,ft,Ut,ct.data):n.texImage2D(e.TEXTURE_2D,$,Et,ct.width,ct.height,0,ft,Ut,ct.data);M.generateMipmaps=!1}else L?(nt&&n.texStorage2D(e.TEXTURE_2D,mt,Et,et.width,et.height),at&&wt(M,et,ft,Ut)):n.texImage2D(e.TEXTURE_2D,0,Et,et.width,et.height,0,ft,Ut,et.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){L&&nt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,mt,Et,Ht[0].width,Ht[0].height,et.depth);for(let $=0,K=Ht.length;$<K;$++)if(ct=Ht[$],M.format!==Ii)if(ft!==null)if(L){if(at)if(M.layerUpdates.size>0){let xt=z_(ct.width,ct.height,M.format,M.type);for(let Bt of M.layerUpdates){let ve=ct.data.subarray(Bt*xt/ct.data.BYTES_PER_ELEMENT,(Bt+1)*xt/ct.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,Bt,ct.width,ct.height,1,ft,ve)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,0,ct.width,ct.height,et.depth,ft,ct.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,$,Et,ct.width,ct.height,et.depth,0,ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?at&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,0,ct.width,ct.height,et.depth,ft,Ut,ct.data):n.texImage3D(e.TEXTURE_2D_ARRAY,$,Et,ct.width,ct.height,et.depth,0,ft,Ut,ct.data)}else{L&&nt&&n.texStorage2D(e.TEXTURE_2D,mt,Et,Ht[0].width,Ht[0].height);for(let $=0,K=Ht.length;$<K;$++)ct=Ht[$],M.format!==Ii?ft!==null?L?at&&n.compressedTexSubImage2D(e.TEXTURE_2D,$,0,0,ct.width,ct.height,ft,ct.data):n.compressedTexImage2D(e.TEXTURE_2D,$,Et,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?at&&n.texSubImage2D(e.TEXTURE_2D,$,0,0,ct.width,ct.height,ft,Ut,ct.data):n.texImage2D(e.TEXTURE_2D,$,Et,ct.width,ct.height,0,ft,Ut,ct.data)}else if(M.isDataArrayTexture)if(L){if(nt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,mt,Et,et.width,et.height,et.depth),at)if(M.layerUpdates.size>0){let $=z_(et.width,et.height,M.format,M.type);for(let K of M.layerUpdates){let xt=et.data.subarray(K*$/et.data.BYTES_PER_ELEMENT,(K+1)*$/et.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,K,et.width,et.height,1,ft,Ut,xt)}M.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,ft,Ut,et.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,Et,et.width,et.height,et.depth,0,ft,Ut,et.data);else if(M.isData3DTexture)L?(nt&&n.texStorage3D(e.TEXTURE_3D,mt,Et,et.width,et.height,et.depth),at&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,ft,Ut,et.data)):n.texImage3D(e.TEXTURE_3D,0,Et,et.width,et.height,et.depth,0,ft,Ut,et.data);else if(M.isFramebufferTexture){if(nt)if(L)n.texStorage2D(e.TEXTURE_2D,mt,Et,et.width,et.height);else{let $=et.width,K=et.height;for(let xt=0;xt<mt;xt++)n.texImage2D(e.TEXTURE_2D,xt,Et,$,K,0,ft,Ut,null),$>>=1,K>>=1}}else if(Ht.length>0){if(L&&nt){let $=ee(Ht[0]);n.texStorage2D(e.TEXTURE_2D,mt,Et,$.width,$.height)}for(let $=0,K=Ht.length;$<K;$++)ct=Ht[$],L?at&&n.texSubImage2D(e.TEXTURE_2D,$,0,0,ft,Ut,ct):n.texImage2D(e.TEXTURE_2D,$,Et,ft,Ut,ct);M.generateMipmaps=!1}else if(L){if(nt){let $=ee(et);n.texStorage2D(e.TEXTURE_2D,mt,Et,$.width,$.height)}at&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ft,Ut,et)}else n.texImage2D(e.TEXTURE_2D,0,Et,ft,Ut,et);m(M)&&d(q),Mt.__version=W.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Q(C,M,I){if(M.image.length!==6)return;let q=te(C,M),j=M.source;n.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture,e.TEXTURE0+I);let W=i.get(j);if(j.version!==W.__version||q===!0){n.activeTexture(e.TEXTURE0+I);let Mt=jt.getPrimaries(jt.workingColorSpace),st=M.colorSpace===Js?null:jt.getPrimaries(M.colorSpace),bt=M.colorSpace===Js||Mt===st?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let Tt=M.isCompressedTexture||M.image[0].isCompressedTexture,et=M.image[0]&&M.image[0].isDataTexture,ft=[];for(let K=0;K<6;K++)!Tt&&!et?ft[K]=g(M.image[K],!0,s.maxCubemapSize):ft[K]=et?M.image[K].image:M.image[K],ft[K]=Ve(M,ft[K]);let Ut=ft[0],Et=r.convert(M.format,M.colorSpace),ct=r.convert(M.type),Ht=y(M.internalFormat,Et,ct,M.colorSpace),L=M.isVideoTexture!==!0,nt=W.__version===void 0||q===!0,at=j.dataReady,mt=T(M,Ut);Ot(e.TEXTURE_CUBE_MAP,M);let $;if(Tt){L&&nt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,mt,Ht,Ut.width,Ut.height);for(let K=0;K<6;K++){$=ft[K].mipmaps;for(let xt=0;xt<$.length;xt++){let Bt=$[xt];M.format!==Ii?Et!==null?L?at&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt,0,0,Bt.width,Bt.height,Et,Bt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt,Ht,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt,0,0,Bt.width,Bt.height,Et,ct,Bt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt,Ht,Bt.width,Bt.height,0,Et,ct,Bt.data)}}}else{if($=M.mipmaps,L&&nt){$.length>0&&mt++;let K=ee(ft[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,mt,Ht,K.width,K.height)}for(let K=0;K<6;K++)if(et){L?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ft[K].width,ft[K].height,Et,ct,ft[K].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ht,ft[K].width,ft[K].height,0,Et,ct,ft[K].data);for(let xt=0;xt<$.length;xt++){let ve=$[xt].image[K].image;L?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt+1,0,0,ve.width,ve.height,Et,ct,ve.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt+1,Ht,ve.width,ve.height,0,Et,ct,ve.data)}}else{L?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Et,ct,ft[K]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ht,Et,ct,ft[K]);for(let xt=0;xt<$.length;xt++){let Bt=$[xt];L?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt+1,0,0,Et,ct,Bt.image[K]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt+1,Ht,Et,ct,Bt.image[K])}}}m(M)&&d(e.TEXTURE_CUBE_MAP),W.__version=j.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function it(C,M,I,q,j,W){let Mt=r.convert(I.format,I.colorSpace),st=r.convert(I.type),bt=y(I.internalFormat,Mt,st,I.colorSpace),Tt=i.get(M),et=i.get(I);if(et.__renderTarget=M,!Tt.__hasExternalTextures){let ft=Math.max(1,M.width>>W),Ut=Math.max(1,M.height>>W);j===e.TEXTURE_3D||j===e.TEXTURE_2D_ARRAY?n.texImage3D(j,W,bt,ft,Ut,M.depth,0,Mt,st,null):n.texImage2D(j,W,bt,ft,Ut,0,Mt,st,null)}n.bindFramebuffer(e.FRAMEBUFFER,C),vt(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,q,j,et.__webglTexture,0,de(M)):(j===e.TEXTURE_2D||j>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,q,j,et.__webglTexture,W),n.bindFramebuffer(e.FRAMEBUFFER,null)}function St(C,M,I){if(e.bindRenderbuffer(e.RENDERBUFFER,C),M.depthBuffer){let q=M.depthTexture,j=q&&q.isDepthTexture?q.type:null,W=x(M.stencilBuffer,j),Mt=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,st=de(M);vt(M)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,st,W,M.width,M.height):I?e.renderbufferStorageMultisample(e.RENDERBUFFER,st,W,M.width,M.height):e.renderbufferStorage(e.RENDERBUFFER,W,M.width,M.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Mt,e.RENDERBUFFER,C)}else{let q=M.textures;for(let j=0;j<q.length;j++){let W=q[j],Mt=r.convert(W.format,W.colorSpace),st=r.convert(W.type),bt=y(W.internalFormat,Mt,st,W.colorSpace),Tt=de(M);I&&vt(M)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Tt,bt,M.width,M.height):vt(M)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Tt,bt,M.width,M.height):e.renderbufferStorage(e.RENDERBUFFER,bt,M.width,M.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function _t(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=i.get(M.depthTexture);q.__renderTarget=M,(!q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X(M.depthTexture,0);let j=q.__webglTexture,W=de(M);if(M.depthTexture.format===hl)vt(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,j,0,W):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,j,0);else if(M.depthTexture.format===Sl)vt(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,j,0,W):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Gt(C){let M=i.get(C),I=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){let q=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),q){let j=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,q.removeEventListener("dispose",j)};q.addEventListener("dispose",j),M.__depthDisposeCallback=j}M.__boundDepthTexture=q}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");let q=C.texture.mipmaps;q&&q.length>0?_t(M.__webglFramebuffer[0],C):_t(M.__webglFramebuffer,C)}else if(I){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]===void 0)M.__webglDepthbuffer[q]=e.createRenderbuffer(),St(M.__webglDepthbuffer[q],C,!1);else{let j=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,W=M.__webglDepthbuffer[q];e.bindRenderbuffer(e.RENDERBUFFER,W),e.framebufferRenderbuffer(e.FRAMEBUFFER,j,e.RENDERBUFFER,W)}}else{let q=C.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=e.createRenderbuffer(),St(M.__webglDepthbuffer,C,!1);else{let j=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,W=M.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,W),e.framebufferRenderbuffer(e.FRAMEBUFFER,j,e.RENDERBUFFER,W)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function en(C,M,I){let q=i.get(C);M!==void 0&&it(q.__webglFramebuffer,C,C.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),I!==void 0&&Gt(C)}function D(C){let M=C.texture,I=i.get(C),q=i.get(M);C.addEventListener("dispose",E);let j=C.textures,W=C.isWebGLCubeRenderTarget===!0,Mt=j.length>1;if(Mt||(q.__webglTexture===void 0&&(q.__webglTexture=e.createTexture()),q.__version=M.version,a.memory.textures++),W){I.__webglFramebuffer=[];for(let st=0;st<6;st++)if(M.mipmaps&&M.mipmaps.length>0){I.__webglFramebuffer[st]=[];for(let bt=0;bt<M.mipmaps.length;bt++)I.__webglFramebuffer[st][bt]=e.createFramebuffer()}else I.__webglFramebuffer[st]=e.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){I.__webglFramebuffer=[];for(let st=0;st<M.mipmaps.length;st++)I.__webglFramebuffer[st]=e.createFramebuffer()}else I.__webglFramebuffer=e.createFramebuffer();if(Mt)for(let st=0,bt=j.length;st<bt;st++){let Tt=i.get(j[st]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=e.createTexture(),a.memory.textures++)}if(C.samples>0&&vt(C)===!1){I.__webglMultisampledFramebuffer=e.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let st=0;st<j.length;st++){let bt=j[st];I.__webglColorRenderbuffer[st]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,I.__webglColorRenderbuffer[st]);let Tt=r.convert(bt.format,bt.colorSpace),et=r.convert(bt.type),ft=y(bt.internalFormat,Tt,et,bt.colorSpace,C.isXRRenderTarget===!0),Ut=de(C);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ut,ft,C.width,C.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+st,e.RENDERBUFFER,I.__webglColorRenderbuffer[st])}e.bindRenderbuffer(e.RENDERBUFFER,null),C.depthBuffer&&(I.__webglDepthRenderbuffer=e.createRenderbuffer(),St(I.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(W){n.bindTexture(e.TEXTURE_CUBE_MAP,q.__webglTexture),Ot(e.TEXTURE_CUBE_MAP,M);for(let st=0;st<6;st++)if(M.mipmaps&&M.mipmaps.length>0)for(let bt=0;bt<M.mipmaps.length;bt++)it(I.__webglFramebuffer[st][bt],C,M,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+st,bt);else it(I.__webglFramebuffer[st],C,M,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);m(M)&&d(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Mt){for(let st=0,bt=j.length;st<bt;st++){let Tt=j[st],et=i.get(Tt),ft=e.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ft=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ft,et.__webglTexture),Ot(ft,Tt),it(I.__webglFramebuffer,C,Tt,e.COLOR_ATTACHMENT0+st,ft,0),m(Tt)&&d(ft)}n.unbindTexture()}else{let st=e.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(st=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(st,q.__webglTexture),Ot(st,M),M.mipmaps&&M.mipmaps.length>0)for(let bt=0;bt<M.mipmaps.length;bt++)it(I.__webglFramebuffer[bt],C,M,e.COLOR_ATTACHMENT0,st,bt);else it(I.__webglFramebuffer,C,M,e.COLOR_ATTACHMENT0,st,0);m(M)&&d(st),n.unbindTexture()}C.depthBuffer&&Gt(C)}function fe(C){let M=C.textures;for(let I=0,q=M.length;I<q;I++){let j=M[I];if(m(j)){let W=v(C),Mt=i.get(j).__webglTexture;n.bindTexture(W,Mt),d(W),n.unbindTexture()}}}let It=[],Rt=[];function pt(C){if(C.samples>0){if(vt(C)===!1){let M=C.textures,I=C.width,q=C.height,j=e.COLOR_BUFFER_BIT,W=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Mt=i.get(C),st=M.length>1;if(st)for(let Tt=0;Tt<M.length;Tt++)n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Tt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Tt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);let bt=C.texture.mipmaps;bt&&bt.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Tt=0;Tt<M.length;Tt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(j|=e.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(j|=e.STENCIL_BUFFER_BIT)),st){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Mt.__webglColorRenderbuffer[Tt]);let et=i.get(M[Tt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,et,0)}e.blitFramebuffer(0,0,I,q,0,0,I,q,j,e.NEAREST),l===!0&&(It.length=0,Rt.length=0,It.push(e.COLOR_ATTACHMENT0+Tt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(It.push(W),Rt.push(W),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Rt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,It))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),st)for(let Tt=0;Tt<M.length;Tt++){n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Tt,e.RENDERBUFFER,Mt.__webglColorRenderbuffer[Tt]);let et=i.get(M[Tt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Tt,e.TEXTURE_2D,et,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let M=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[M])}}}function de(C){return Math.min(s.maxSamples,C.samples)}function vt(C){let M=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Pt(C){let M=a.render.frame;u.get(C)!==M&&(u.set(C,M),C.update())}function Ve(C,M){let I=C.colorSpace,q=C.format,j=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||I!==Ba&&I!==Js&&(jt.getTransfer(I)===le?(q!==Ii||j!==cs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),M}function ee(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=P,this.setTexture2D=X,this.setTexture2DArray=G,this.setTexture3D=J,this.setTextureCube=F,this.rebindTextures=en,this.setupRenderTarget=D,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=it,this.useMultisampledRTT=vt}function rO(e,t){function n(i,s=Js){let r,a=jt.getTransfer(s);if(i===cs)return e.UNSIGNED_BYTE;if(i===xd)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Sd)return e.UNSIGNED_SHORT_5_5_5_1;if(i===A_)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===w_)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===T_)return e.BYTE;if(i===E_)return e.SHORT;if(i===vl)return e.UNSIGNED_SHORT;if(i===yd)return e.INT;if(i===Zr)return e.UNSIGNED_INT;if(i===us)return e.FLOAT;if(i===yl)return e.HALF_FLOAT;if(i===C_)return e.ALPHA;if(i===R_)return e.RGB;if(i===Ii)return e.RGBA;if(i===hl)return e.DEPTH_COMPONENT;if(i===Sl)return e.DEPTH_STENCIL;if(i===D_)return e.RED;if(i===Md)return e.RED_INTEGER;if(i===U_)return e.RG;if(i===bd)return e.RG_INTEGER;if(i===Td)return e.RGBA_INTEGER;if(i===pu||i===mu||i===gu||i===_u)if(a===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===pu)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===mu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_u)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===pu)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===mu)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gu)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_u)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ed||i===Ad||i===wd||i===Cd)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ed)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ad)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wd)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Cd)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rd||i===Dd||i===Ud)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Rd||i===Dd)return a===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ud)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ld||i===Od||i===Nd||i===Id||i===Pd||i===Bd||i===zd||i===Fd||i===Vd||i===Hd||i===Gd||i===kd||i===Xd||i===Wd)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ld)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Od)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Nd)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Id)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pd)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bd)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zd)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fd)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vd)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hd)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gd)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kd)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xd)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wd)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===qd||i===Yd||i===Zd)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===qd)return a===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yd)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zd)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jd||i===Kd||i===Qd||i===jd)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Jd)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Kd)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qd)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jd)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xl?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var aO=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oO=`
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

}`,Q_=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new cu(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new pi({vertexShader:aO,fragmentShader:oO,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Wn(new Fa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},j_=class extends Ws{constructor(t,n){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,_=null,g=typeof XRWebGLBinding<"u",m=new Q_,d={},v=n.getContextAttributes(),y=null,x=null,T=[],w=[],E=new Zt,R=null,S=new Xn;S.viewport=new Fe;let b=new Xn;b.viewport=new Fe;let U=[S,b],P=new ld,B=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=T[Y];return Q===void 0&&(Q=new gl,T[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=T[Y];return Q===void 0&&(Q=new gl,T[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=T[Y];return Q===void 0&&(Q=new gl,T[Y]=Q),Q.getHandSpace()};function X(Y){let Q=w.indexOf(Y.inputSource);if(Q===-1)return;let it=T[Q];it!==void 0&&(it.update(Y.inputSource,Y.frame,c||a),it.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",J);for(let Y=0;Y<T.length;Y++){let Q=w[Y];Q!==null&&(w[Y]=null,T[Y].disconnect(Q))}B=null,H=null,m.reset();for(let Y in d)delete d[Y];t.setRenderTarget(y),p=null,h=null,f=null,s=null,x=null,wt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&g&&(f=new XRWebGLBinding(s,n)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",G),s.addEventListener("inputsourceschange",J),v.xrCompatible!==!0&&await n.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(E),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let it=null,St=null,_t=null;v.depth&&(_t=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,it=v.stencil?Sl:hl,St=v.stencil?xl:Zr);let Gt={colorFormat:n.RGBA8,depthFormat:_t,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Gt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),x=new rs(h.textureWidth,h.textureHeight,{format:Ii,type:cs,depthTexture:new lu(h.textureWidth,h.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let it={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,n,it),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new rs(p.framebufferWidth,p.framebufferHeight,{format:Ii,type:cs,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),wt.setContext(s),wt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(Y){for(let Q=0;Q<Y.removed.length;Q++){let it=Y.removed[Q],St=w.indexOf(it);St>=0&&(w[St]=null,T[St].disconnect(it))}for(let Q=0;Q<Y.added.length;Q++){let it=Y.added[Q],St=w.indexOf(it);if(St===-1){for(let Gt=0;Gt<T.length;Gt++)if(Gt>=w.length){w.push(it),St=Gt;break}else if(w[Gt]===null){w[Gt]=it,St=Gt;break}if(St===-1)break}let _t=T[St];_t&&_t.connect(it)}}let F=new z,rt=new z;function lt(Y,Q,it){F.setFromMatrixPosition(Q.matrixWorld),rt.setFromMatrixPosition(it.matrixWorld);let St=F.distanceTo(rt),_t=Q.projectionMatrix.elements,Gt=it.projectionMatrix.elements,en=_t[14]/(_t[10]-1),D=_t[14]/(_t[10]+1),fe=(_t[9]+1)/_t[5],It=(_t[9]-1)/_t[5],Rt=(_t[8]-1)/_t[0],pt=(Gt[8]+1)/Gt[0],de=en*Rt,vt=en*pt,Pt=St/(-Rt+pt),Ve=Pt*-Rt;if(Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ve),Y.translateZ(Pt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),_t[10]===-1)Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let ee=en+Pt,C=D+Pt,M=de-Ve,I=vt+(St-Ve),q=fe*D/C*ee,j=It*D/C*ee;Y.projectionMatrix.makePerspective(M,I,q,j,ee,C),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function gt(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let Q=Y.near,it=Y.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(it=m.depthFar)),P.near=b.near=S.near=Q,P.far=b.far=S.far=it,(B!==P.near||H!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),B=P.near,H=P.far),P.layers.mask=Y.layers.mask|6,S.layers.mask=P.layers.mask&3,b.layers.mask=P.layers.mask&5;let St=Y.parent,_t=P.cameras;gt(P,St);for(let Gt=0;Gt<_t.length;Gt++)gt(_t[Gt],St);_t.length===2?lt(P,S,b):P.projectionMatrix.copy(S.projectionMatrix),Ot(Y,P,St)};function Ot(Y,Q,it){it===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(it.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Xf*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(P)},this.getCameraTexture=function(Y){return d[Y]};let te=null;function ut(Y,Q){if(u=Q.getViewerPose(c||a),_=Q,u!==null){let it=u.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let St=!1;it.length!==P.cameras.length&&(P.cameras.length=0,St=!0);for(let D=0;D<it.length;D++){let fe=it[D],It=null;if(p!==null)It=p.getViewport(fe);else{let pt=f.getViewSubImage(h,fe);It=pt.viewport,D===0&&(t.setRenderTargetTextures(x,pt.colorTexture,pt.depthStencilTexture),t.setRenderTarget(x))}let Rt=U[D];Rt===void 0&&(Rt=new Xn,Rt.layers.enable(D),Rt.viewport=new Fe,U[D]=Rt),Rt.matrix.fromArray(fe.transform.matrix),Rt.matrix.decompose(Rt.position,Rt.quaternion,Rt.scale),Rt.projectionMatrix.fromArray(fe.projectionMatrix),Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),Rt.viewport.set(It.x,It.y,It.width,It.height),D===0&&(P.matrix.copy(Rt.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),St===!0&&P.cameras.push(Rt)}let _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){f=i.getBinding();let D=f.getDepthInformation(it[0]);D&&D.isValid&&D.texture&&m.init(D,s.renderState)}if(_t&&_t.includes("camera-access")&&g){t.state.unbindTexture(),f=i.getBinding();for(let D=0;D<it.length;D++){let fe=it[D].camera;if(fe){let It=d[fe];It||(It=new cu,d[fe]=It);let Rt=f.getCameraImage(fe);It.sourceTexture=Rt}}}}for(let it=0;it<T.length;it++){let St=w[it],_t=T[it];St!==null&&_t!==void 0&&_t.update(St,Q,c||a)}te&&te(Y,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),_=null}let wt=new ZT;wt.setAnimationLoop(ut),this.setAnimationLoop=function(Y){te=Y},this.dispose=function(){}}},Wa=new as,lO=new je;function cO(e,t){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,I_(e)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,v,y,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),g(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,v,y):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Rn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Rn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let v=t.get(d),y=v.envMap,x=v.envMapRotation;y&&(m.envMap.value=y,Wa.copy(x),Wa.x*=-1,Wa.y*=-1,Wa.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Wa.y*=-1,Wa.z*=-1),m.envMapRotation.value.setFromMatrix4(lO.makeRotationFromEuler(Wa)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=y*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Rn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){let v=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function uO(e,t,n,i){let s={},r={},a=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){let x=y.program;i.uniformBlockBinding(v,x)}function c(v,y){let x=s[v.id];x===void 0&&(_(v),x=u(v),s[v.id]=x,v.addEventListener("dispose",m));let T=y.program;i.updateUBOMapping(v,T);let w=t.render.frame;r[v.id]!==w&&(h(v),r[v.id]=w)}function u(v){let y=f();v.__bindingPointIndex=y;let x=e.createBuffer(),T=v.__size,w=v.usage;return e.bindBuffer(e.UNIFORM_BUFFER,x),e.bufferData(e.UNIFORM_BUFFER,T,w),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,y,x),x}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let y=s[v.id],x=v.uniforms,T=v.__cache;e.bindBuffer(e.UNIFORM_BUFFER,y);for(let w=0,E=x.length;w<E;w++){let R=Array.isArray(x[w])?x[w]:[x[w]];for(let S=0,b=R.length;S<b;S++){let U=R[S];if(p(U,w,S,T)===!0){let P=U.__offset,B=Array.isArray(U.value)?U.value:[U.value],H=0;for(let X=0;X<B.length;X++){let G=B[X],J=g(G);typeof G=="number"||typeof G=="boolean"?(U.__data[0]=G,e.bufferSubData(e.UNIFORM_BUFFER,P+H,U.__data)):G.isMatrix3?(U.__data[0]=G.elements[0],U.__data[1]=G.elements[1],U.__data[2]=G.elements[2],U.__data[3]=0,U.__data[4]=G.elements[3],U.__data[5]=G.elements[4],U.__data[6]=G.elements[5],U.__data[7]=0,U.__data[8]=G.elements[6],U.__data[9]=G.elements[7],U.__data[10]=G.elements[8],U.__data[11]=0):(G.toArray(U.__data,H),H+=J.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,P,U.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(v,y,x,T){let w=v.value,E=y+"_"+x;if(T[E]===void 0)return typeof w=="number"||typeof w=="boolean"?T[E]=w:T[E]=w.clone(),!0;{let R=T[E];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return T[E]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function _(v){let y=v.uniforms,x=0,T=16;for(let E=0,R=y.length;E<R;E++){let S=Array.isArray(y[E])?y[E]:[y[E]];for(let b=0,U=S.length;b<U;b++){let P=S[b],B=Array.isArray(P.value)?P.value:[P.value];for(let H=0,X=B.length;H<X;H++){let G=B[H],J=g(G),F=x%T,rt=F%J.boundary,lt=F+rt;x+=rt,lt!==0&&T-lt<J.storage&&(x+=T-lt),P.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=x,x+=J.storage}}}let w=x%T;return w>0&&(x+=T-w),v.__size=x,v.__cache={},this}function g(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){let y=v.target;y.removeEventListener("dispose",m);let x=a.indexOf(y.__bindingPointIndex);a.splice(x,1),e.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function d(){for(let v in s)e.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}var ip=class{constructor(t={}){let{canvas:n=xT(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let _=new Uint32Array(4),g=new Int32Array(4),m=null,d=null,v=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,T=!1;this._outputColorSpace=hi;let w=0,E=0,R=null,S=-1,b=null,U=new Fe,P=new Fe,B=null,H=new se(0),X=0,G=n.width,J=n.height,F=1,rt=null,lt=null,gt=new Fe(0,0,G,J),Ot=new Fe(0,0,G,J),te=!1,ut=new ou,wt=!1,Y=!1,Q=new je,it=new z,St=new Fe,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Gt=!1;function en(){return R===null?F:1}let D=i;function fe(A,O){return n.getContext(A,O)}try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"180"}`),n.addEventListener("webglcontextlost",at,!1),n.addEventListener("webglcontextrestored",mt,!1),n.addEventListener("webglcontextcreationerror",$,!1),D===null){let O="webgl2";if(D=fe(O,A),D===null)throw fe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let It,Rt,pt,de,vt,Pt,Ve,ee,C,M,I,q,j,W,Mt,st,bt,Tt,et,ft,Ut,Et,ct,Ht;function L(){It=new CU(D),It.init(),Et=new rO(D,It),Rt=new SU(D,It,t,Et),pt=new iO(D,It),Rt.reversedDepthBuffer&&h&&pt.buffers.depth.setReversed(!0),de=new UU(D),vt=new XL,Pt=new sO(D,It,pt,vt,Rt,Et,de),Ve=new bU(x),ee=new wU(x),C=new B2(D),ct=new yU(D,C),M=new RU(D,C,de,ct),I=new OU(D,M,C,de),et=new LU(D,Rt,Pt),st=new MU(vt),q=new kL(x,Ve,ee,It,Rt,ct,st),j=new cO(x,vt),W=new qL,Mt=new jL(It),Tt=new vU(x,Ve,ee,pt,I,p,l),bt=new eO(x,I,Rt),Ht=new uO(D,de,Rt,pt),ft=new xU(D,It,de),Ut=new DU(D,It,de),de.programs=q.programs,x.capabilities=Rt,x.extensions=It,x.properties=vt,x.renderLists=W,x.shadowMap=bt,x.state=pt,x.info=de}L();let nt=new j_(x,D);this.xr=nt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let A=It.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=It.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(A){A!==void 0&&(F=A,this.setSize(G,J,!1))},this.getSize=function(A){return A.set(G,J)},this.setSize=function(A,O,V=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=A,J=O,n.width=Math.floor(A*F),n.height=Math.floor(O*F),V===!0&&(n.style.width=A+"px",n.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(G*F,J*F).floor()},this.setDrawingBufferSize=function(A,O,V){G=A,J=O,F=V,n.width=Math.floor(A*V),n.height=Math.floor(O*V),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(U)},this.getViewport=function(A){return A.copy(gt)},this.setViewport=function(A,O,V,k){A.isVector4?gt.set(A.x,A.y,A.z,A.w):gt.set(A,O,V,k),pt.viewport(U.copy(gt).multiplyScalar(F).round())},this.getScissor=function(A){return A.copy(Ot)},this.setScissor=function(A,O,V,k){A.isVector4?Ot.set(A.x,A.y,A.z,A.w):Ot.set(A,O,V,k),pt.scissor(P.copy(Ot).multiplyScalar(F).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(A){pt.setScissorTest(te=A)},this.setOpaqueSort=function(A){rt=A},this.setTransparentSort=function(A){lt=A},this.getClearColor=function(A){return A.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor(...arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha(...arguments)},this.clear=function(A=!0,O=!0,V=!0){let k=0;if(A){let N=!1;if(R!==null){let tt=R.texture.format;N=tt===Td||tt===bd||tt===Md}if(N){let tt=R.texture.type,ht=tt===cs||tt===Zr||tt===vl||tt===xl||tt===xd||tt===Sd,yt=Tt.getClearColor(),dt=Tt.getClearAlpha(),Dt=yt.r,Nt=yt.g,At=yt.b;ht?(_[0]=Dt,_[1]=Nt,_[2]=At,_[3]=dt,D.clearBufferuiv(D.COLOR,0,_)):(g[0]=Dt,g[1]=Nt,g[2]=At,g[3]=dt,D.clearBufferiv(D.COLOR,0,g))}else k|=D.COLOR_BUFFER_BIT}O&&(k|=D.DEPTH_BUFFER_BIT),V&&(k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",at,!1),n.removeEventListener("webglcontextrestored",mt,!1),n.removeEventListener("webglcontextcreationerror",$,!1),Tt.dispose(),W.dispose(),Mt.dispose(),vt.dispose(),Ve.dispose(),ee.dispose(),I.dispose(),ct.dispose(),Ht.dispose(),q.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",Xi),nt.removeEventListener("sessionend",dv),Kr.stop()};function at(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let A=de.autoReset,O=bt.enabled,V=bt.autoUpdate,k=bt.needsUpdate,N=bt.type;L(),de.autoReset=A,bt.enabled=O,bt.autoUpdate=V,bt.needsUpdate=k,bt.type=N}function $(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function K(A){let O=A.target;O.removeEventListener("dispose",K),xt(O)}function xt(A){Bt(A),vt.remove(A)}function Bt(A){let O=vt.get(A).programs;O!==void 0&&(O.forEach(function(V){q.releaseProgram(V)}),A.isShaderMaterial&&q.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,V,k,N,tt){O===null&&(O=_t);let ht=N.isMesh&&N.matrixWorld.determinant()<0,yt=_E(A,O,V,k,N);pt.setMaterial(k,ht);let dt=V.index,Dt=1;if(k.wireframe===!0){if(dt=M.getWireframeAttribute(V),dt===void 0)return;Dt=2}let Nt=V.drawRange,At=V.attributes.position,qt=Nt.start*Dt,ce=(Nt.start+Nt.count)*Dt;tt!==null&&(qt=Math.max(qt,tt.start*Dt),ce=Math.min(ce,(tt.start+tt.count)*Dt)),dt!==null?(qt=Math.max(qt,0),ce=Math.min(ce,dt.count)):At!=null&&(qt=Math.max(qt,0),ce=Math.min(ce,At.count));let Ne=ce-qt;if(Ne<0||Ne===1/0)return;ct.setup(N,k,yt,V,dt);let xe,pe=ft;if(dt!==null&&(xe=C.get(dt),pe=Ut,pe.setIndex(xe)),N.isMesh)k.wireframe===!0?(pt.setLineWidth(k.wireframeLinewidth*en()),pe.setMode(D.LINES)):pe.setMode(D.TRIANGLES);else if(N.isLine){let Ct=k.linewidth;Ct===void 0&&(Ct=1),pt.setLineWidth(Ct*en()),N.isLineSegments?pe.setMode(D.LINES):N.isLineLoop?pe.setMode(D.LINE_LOOP):pe.setMode(D.LINE_STRIP)}else N.isPoints?pe.setMode(D.POINTS):N.isSprite&&pe.setMode(D.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)fl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pe.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(It.get("WEBGL_multi_draw"))pe.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Ct=N._multiDrawStarts,Re=N._multiDrawCounts,$t=N._multiDrawCount,Yn=dt?C.get(dt).bytesPerElement:1,Za=vt.get(k).currentProgram.getUniforms();for(let Zn=0;Zn<$t;Zn++)Za.setValue(D,"_gl_DrawID",Zn),pe.render(Ct[Zn]/Yn,Re[Zn])}else if(N.isInstancedMesh)pe.renderInstances(qt,Ne,N.count);else if(V.isInstancedBufferGeometry){let Ct=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Re=Math.min(V.instanceCount,Ct);pe.renderInstances(qt,Ne,Re)}else pe.render(qt,Ne)};function ve(A,O,V){A.transparent===!0&&A.side===ls&&A.forceSinglePass===!1?(A.side=Rn,A.needsUpdate=!0,Eu(A,O,V),A.side=Xs,A.needsUpdate=!0,Eu(A,O,V),A.side=ls):Eu(A,O,V)}this.compile=function(A,O,V=null){V===null&&(V=A),d=Mt.get(V),d.init(O),y.push(d),V.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),A!==V&&A.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights();let k=new Set;return A.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let tt=N.material;if(tt)if(Array.isArray(tt))for(let ht=0;ht<tt.length;ht++){let yt=tt[ht];ve(yt,V,N),k.add(yt)}else ve(tt,V,N),k.add(tt)}),d=y.pop(),k},this.compileAsync=function(A,O,V=null){let k=this.compile(A,O,V);return new Promise(N=>{function tt(){if(k.forEach(function(ht){vt.get(ht).currentProgram.isReady()&&k.delete(ht)}),k.size===0){N(A);return}setTimeout(tt,10)}It.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let re=null;function fs(A){re&&re(A)}function Xi(){Kr.stop()}function dv(){Kr.start()}let Kr=new ZT;Kr.setAnimationLoop(fs),typeof self<"u"&&Kr.setContext(self),this.setAnimationLoop=function(A){re=A,nt.setAnimationLoop(A),A===null?Kr.stop():Kr.start()},nt.addEventListener("sessionstart",Xi),nt.addEventListener("sessionend",dv),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(O),O=nt.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,O,R),d=Mt.get(A,y.length),d.init(O),y.push(d),Q.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ut.setFromProjectionMatrix(Q,Gi,O.reversedDepth),Y=this.localClippingEnabled,wt=st.init(this.clippingPlanes,Y),m=W.get(A,v.length),m.init(),v.push(m),nt.enabled===!0&&nt.isPresenting===!0){let tt=x.xr.getDepthSensingMesh();tt!==null&&cp(tt,O,-1/0,x.sortObjects)}cp(A,O,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(rt,lt),Gt=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,Gt&&Tt.addToRenderList(m,A),this.info.render.frame++,wt===!0&&st.beginShadows();let V=d.state.shadowsArray;bt.render(V,A,O),wt===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();let k=m.opaque,N=m.transmissive;if(d.setupLights(),O.isArrayCamera){let tt=O.cameras;if(N.length>0)for(let ht=0,yt=tt.length;ht<yt;ht++){let dt=tt[ht];mv(k,N,A,dt)}Gt&&Tt.render(A);for(let ht=0,yt=tt.length;ht<yt;ht++){let dt=tt[ht];pv(m,A,dt,dt.viewport)}}else N.length>0&&mv(k,N,A,O),Gt&&Tt.render(A),pv(m,A,O);R!==null&&E===0&&(Pt.updateMultisampleRenderTarget(R),Pt.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(x,A,O),ct.resetDefaultState(),S=-1,b=null,y.pop(),y.length>0?(d=y[y.length-1],wt===!0&&st.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function cp(A,O,V,k){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)V=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)d.pushLight(A),A.castShadow&&d.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ut.intersectsSprite(A)){k&&St.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Q);let ht=I.update(A),yt=A.material;yt.visible&&m.push(A,ht,yt,V,St.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ut.intersectsObject(A))){let ht=I.update(A),yt=A.material;if(k&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),St.copy(A.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),St.copy(ht.boundingSphere.center)),St.applyMatrix4(A.matrixWorld).applyMatrix4(Q)),Array.isArray(yt)){let dt=ht.groups;for(let Dt=0,Nt=dt.length;Dt<Nt;Dt++){let At=dt[Dt],qt=yt[At.materialIndex];qt&&qt.visible&&m.push(A,ht,qt,V,St.z,At)}}else yt.visible&&m.push(A,ht,yt,V,St.z,null)}}let tt=A.children;for(let ht=0,yt=tt.length;ht<yt;ht++)cp(tt[ht],O,V,k)}function pv(A,O,V,k){let N=A.opaque,tt=A.transmissive,ht=A.transparent;d.setupLightsView(V),wt===!0&&st.setGlobalState(x.clippingPlanes,V),k&&pt.viewport(U.copy(k)),N.length>0&&Tu(N,O,V),tt.length>0&&Tu(tt,O,V),ht.length>0&&Tu(ht,O,V),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function mv(A,O,V,k){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[k.id]===void 0&&(d.state.transmissionRenderTarget[k.id]=new rs(1,1,{generateMipmaps:!0,type:It.has("EXT_color_buffer_half_float")||It.has("EXT_color_buffer_float")?yl:cs,minFilter:Yr,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));let tt=d.state.transmissionRenderTarget[k.id],ht=k.viewport||U;tt.setSize(ht.z*x.transmissionResolutionScale,ht.w*x.transmissionResolutionScale);let yt=x.getRenderTarget(),dt=x.getActiveCubeFace(),Dt=x.getActiveMipmapLevel();x.setRenderTarget(tt),x.getClearColor(H),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),Gt&&Tt.render(V);let Nt=x.toneMapping;x.toneMapping=Zs;let At=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),d.setupLightsView(k),wt===!0&&st.setGlobalState(x.clippingPlanes,k),Tu(A,V,k),Pt.updateMultisampleRenderTarget(tt),Pt.updateRenderTargetMipmap(tt),It.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let ce=0,Ne=O.length;ce<Ne;ce++){let xe=O[ce],pe=xe.object,Ct=xe.geometry,Re=xe.material,$t=xe.group;if(Re.side===ls&&pe.layers.test(k.layers)){let Yn=Re.side;Re.side=Rn,Re.needsUpdate=!0,gv(pe,V,k,Ct,Re,$t),Re.side=Yn,Re.needsUpdate=!0,qt=!0}}qt===!0&&(Pt.updateMultisampleRenderTarget(tt),Pt.updateRenderTargetMipmap(tt))}x.setRenderTarget(yt,dt,Dt),x.setClearColor(H,X),At!==void 0&&(k.viewport=At),x.toneMapping=Nt}function Tu(A,O,V){let k=O.isScene===!0?O.overrideMaterial:null;for(let N=0,tt=A.length;N<tt;N++){let ht=A[N],yt=ht.object,dt=ht.geometry,Dt=ht.group,Nt=ht.material;Nt.allowOverride===!0&&k!==null&&(Nt=k),yt.layers.test(V.layers)&&gv(yt,O,V,dt,Nt,Dt)}}function gv(A,O,V,k,N,tt){A.onBeforeRender(x,O,V,k,N,tt),A.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),N.onBeforeRender(x,O,V,k,A,tt),N.transparent===!0&&N.side===ls&&N.forceSinglePass===!1?(N.side=Rn,N.needsUpdate=!0,x.renderBufferDirect(V,O,k,N,A,tt),N.side=Xs,N.needsUpdate=!0,x.renderBufferDirect(V,O,k,N,A,tt),N.side=ls):x.renderBufferDirect(V,O,k,N,A,tt),A.onAfterRender(x,O,V,k,N,tt)}function Eu(A,O,V){O.isScene!==!0&&(O=_t);let k=vt.get(A),N=d.state.lights,tt=d.state.shadowsArray,ht=N.state.version,yt=q.getParameters(A,N.state,tt,O,V),dt=q.getProgramCacheKey(yt),Dt=k.programs;k.environment=A.isMeshStandardMaterial?O.environment:null,k.fog=O.fog,k.envMap=(A.isMeshStandardMaterial?ee:Ve).get(A.envMap||k.environment),k.envMapRotation=k.environment!==null&&A.envMap===null?O.environmentRotation:A.envMapRotation,Dt===void 0&&(A.addEventListener("dispose",K),Dt=new Map,k.programs=Dt);let Nt=Dt.get(dt);if(Nt!==void 0){if(k.currentProgram===Nt&&k.lightsStateVersion===ht)return vv(A,yt),Nt}else yt.uniforms=q.getUniforms(A),A.onBeforeCompile(yt,x),Nt=q.acquireProgram(yt,dt),Dt.set(dt,Nt),k.uniforms=yt.uniforms;let At=k.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(At.clippingPlanes=st.uniform),vv(A,yt),k.needsLights=yE(A),k.lightsStateVersion=ht,k.needsLights&&(At.ambientLightColor.value=N.state.ambient,At.lightProbe.value=N.state.probe,At.directionalLights.value=N.state.directional,At.directionalLightShadows.value=N.state.directionalShadow,At.spotLights.value=N.state.spot,At.spotLightShadows.value=N.state.spotShadow,At.rectAreaLights.value=N.state.rectArea,At.ltc_1.value=N.state.rectAreaLTC1,At.ltc_2.value=N.state.rectAreaLTC2,At.pointLights.value=N.state.point,At.pointLightShadows.value=N.state.pointShadow,At.hemisphereLights.value=N.state.hemi,At.directionalShadowMap.value=N.state.directionalShadowMap,At.directionalShadowMatrix.value=N.state.directionalShadowMatrix,At.spotShadowMap.value=N.state.spotShadowMap,At.spotLightMatrix.value=N.state.spotLightMatrix,At.spotLightMap.value=N.state.spotLightMap,At.pointShadowMap.value=N.state.pointShadowMap,At.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=Nt,k.uniformsList=null,Nt}function _v(A){if(A.uniformsList===null){let O=A.currentProgram.getUniforms();A.uniformsList=Tl.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function vv(A,O){let V=vt.get(A);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.batchingColor=O.batchingColor,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.instancingMorph=O.instancingMorph,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function _E(A,O,V,k,N){O.isScene!==!0&&(O=_t),Pt.resetTextureUnits();let tt=O.fog,ht=k.isMeshStandardMaterial?O.environment:null,yt=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ba,dt=(k.isMeshStandardMaterial?ee:Ve).get(k.envMap||ht),Dt=k.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Nt=!!V.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),At=!!V.morphAttributes.position,qt=!!V.morphAttributes.normal,ce=!!V.morphAttributes.color,Ne=Zs;k.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ne=x.toneMapping);let xe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,pe=xe!==void 0?xe.length:0,Ct=vt.get(k),Re=d.state.lights;if(wt===!0&&(Y===!0||A!==b)){let bn=A===b&&k.id===S;st.setState(k,A,bn)}let $t=!1;k.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==Re.state.version||Ct.outputColorSpace!==yt||N.isBatchedMesh&&Ct.batching===!1||!N.isBatchedMesh&&Ct.batching===!0||N.isBatchedMesh&&Ct.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ct.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ct.instancing===!1||!N.isInstancedMesh&&Ct.instancing===!0||N.isSkinnedMesh&&Ct.skinning===!1||!N.isSkinnedMesh&&Ct.skinning===!0||N.isInstancedMesh&&Ct.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ct.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ct.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ct.instancingMorph===!1&&N.morphTexture!==null||Ct.envMap!==dt||k.fog===!0&&Ct.fog!==tt||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==st.numPlanes||Ct.numIntersection!==st.numIntersection)||Ct.vertexAlphas!==Dt||Ct.vertexTangents!==Nt||Ct.morphTargets!==At||Ct.morphNormals!==qt||Ct.morphColors!==ce||Ct.toneMapping!==Ne||Ct.morphTargetsCount!==pe)&&($t=!0):($t=!0,Ct.__version=k.version);let Yn=Ct.currentProgram;$t===!0&&(Yn=Eu(k,O,N));let Za=!1,Zn=!1,wl=!1,De=Yn.getUniforms(),gi=Ct.uniforms;if(pt.useProgram(Yn.program)&&(Za=!0,Zn=!0,wl=!0),k.id!==S&&(S=k.id,Zn=!0),Za||b!==A){pt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),De.setValue(D,"projectionMatrix",A.projectionMatrix),De.setValue(D,"viewMatrix",A.matrixWorldInverse);let Dn=De.map.cameraPosition;Dn!==void 0&&Dn.setValue(D,it.setFromMatrixPosition(A.matrixWorld)),Rt.logarithmicDepthBuffer&&De.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&De.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,Zn=!0,wl=!0)}if(N.isSkinnedMesh){De.setOptional(D,N,"bindMatrix"),De.setOptional(D,N,"bindMatrixInverse");let bn=N.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),De.setValue(D,"boneTexture",bn.boneTexture,Pt))}N.isBatchedMesh&&(De.setOptional(D,N,"batchingTexture"),De.setValue(D,"batchingTexture",N._matricesTexture,Pt),De.setOptional(D,N,"batchingIdTexture"),De.setValue(D,"batchingIdTexture",N._indirectTexture,Pt),De.setOptional(D,N,"batchingColorTexture"),N._colorsTexture!==null&&De.setValue(D,"batchingColorTexture",N._colorsTexture,Pt));let _i=V.morphAttributes;if((_i.position!==void 0||_i.normal!==void 0||_i.color!==void 0)&&et.update(N,V,Yn),(Zn||Ct.receiveShadow!==N.receiveShadow)&&(Ct.receiveShadow=N.receiveShadow,De.setValue(D,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(gi.envMap.value=dt,gi.flipEnvMap.value=dt.isCubeTexture&&dt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&O.environment!==null&&(gi.envMapIntensity.value=O.environmentIntensity),Zn&&(De.setValue(D,"toneMappingExposure",x.toneMappingExposure),Ct.needsLights&&vE(gi,wl),tt&&k.fog===!0&&j.refreshFogUniforms(gi,tt),j.refreshMaterialUniforms(gi,k,F,J,d.state.transmissionRenderTarget[A.id]),Tl.upload(D,_v(Ct),gi,Pt)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Tl.upload(D,_v(Ct),gi,Pt),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&De.setValue(D,"center",N.center),De.setValue(D,"modelViewMatrix",N.modelViewMatrix),De.setValue(D,"normalMatrix",N.normalMatrix),De.setValue(D,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let bn=k.uniformsGroups;for(let Dn=0,up=bn.length;Dn<up;Dn++){let Qr=bn[Dn];Ht.update(Qr,Yn),Ht.bind(Qr,Yn)}}return Yn}function vE(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function yE(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,O,V){let k=vt.get(A);k.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),vt.get(A.texture).__webglTexture=O,vt.get(A.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:V,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,O){let V=vt.get(A);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0};let xE=D.createFramebuffer();this.setRenderTarget=function(A,O=0,V=0){R=A,w=O,E=V;let k=!0,N=null,tt=!1,ht=!1;if(A){let dt=vt.get(A);if(dt.__useDefaultFramebuffer!==void 0)pt.bindFramebuffer(D.FRAMEBUFFER,null),k=!1;else if(dt.__webglFramebuffer===void 0)Pt.setupRenderTarget(A);else if(dt.__hasExternalTextures)Pt.rebindTextures(A,vt.get(A.texture).__webglTexture,vt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let At=A.depthTexture;if(dt.__boundDepthTexture!==At){if(At!==null&&vt.has(At)&&(A.width!==At.image.width||A.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Pt.setupDepthRenderbuffer(A)}}let Dt=A.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(ht=!0);let Nt=vt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Nt[O])?N=Nt[O][V]:N=Nt[O],tt=!0):A.samples>0&&Pt.useMultisampledRTT(A)===!1?N=vt.get(A).__webglMultisampledFramebuffer:Array.isArray(Nt)?N=Nt[V]:N=Nt,U.copy(A.viewport),P.copy(A.scissor),B=A.scissorTest}else U.copy(gt).multiplyScalar(F).floor(),P.copy(Ot).multiplyScalar(F).floor(),B=te;if(V!==0&&(N=xE),pt.bindFramebuffer(D.FRAMEBUFFER,N)&&k&&pt.drawBuffers(A,N),pt.viewport(U),pt.scissor(P),pt.setScissorTest(B),tt){let dt=vt.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,dt.__webglTexture,V)}else if(ht){let dt=O;for(let Dt=0;Dt<A.textures.length;Dt++){let Nt=vt.get(A.textures[Dt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Dt,Nt.__webglTexture,V,dt)}}else if(A!==null&&V!==0){let dt=vt.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,dt.__webglTexture,V)}S=-1},this.readRenderTargetPixels=function(A,O,V,k,N,tt,ht,yt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=vt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ht!==void 0&&(dt=dt[ht]),dt){pt.bindFramebuffer(D.FRAMEBUFFER,dt);try{let Dt=A.textures[yt],Nt=Dt.format,At=Dt.type;if(!Rt.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Rt.textureTypeReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-k&&V>=0&&V<=A.height-N&&(A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+yt),D.readPixels(O,V,k,N,Et.convert(Nt),Et.convert(At),tt))}finally{let Dt=R!==null?vt.get(R).__webglFramebuffer:null;pt.bindFramebuffer(D.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(A,O,V,k,N,tt,ht,yt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=vt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ht!==void 0&&(dt=dt[ht]),dt)if(O>=0&&O<=A.width-k&&V>=0&&V<=A.height-N){pt.bindFramebuffer(D.FRAMEBUFFER,dt);let Dt=A.textures[yt],Nt=Dt.format,At=Dt.type;if(!Rt.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Rt.textureTypeReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let qt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,qt),D.bufferData(D.PIXEL_PACK_BUFFER,tt.byteLength,D.STREAM_READ),A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+yt),D.readPixels(O,V,k,N,Et.convert(Nt),Et.convert(At),0);let ce=R!==null?vt.get(R).__webglFramebuffer:null;pt.bindFramebuffer(D.FRAMEBUFFER,ce);let Ne=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await ST(D,Ne,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,qt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,tt),D.deleteBuffer(qt),D.deleteSync(Ne),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,O=null,V=0){let k=Math.pow(2,-V),N=Math.floor(A.image.width*k),tt=Math.floor(A.image.height*k),ht=O!==null?O.x:0,yt=O!==null?O.y:0;Pt.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,ht,yt,N,tt),pt.unbindTexture()};let SE=D.createFramebuffer(),ME=D.createFramebuffer();this.copyTextureToTexture=function(A,O,V=null,k=null,N=0,tt=null){tt===null&&(N!==0?(fl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),tt=N,N=0):tt=0);let ht,yt,dt,Dt,Nt,At,qt,ce,Ne,xe=A.isCompressedTexture?A.mipmaps[tt]:A.image;if(V!==null)ht=V.max.x-V.min.x,yt=V.max.y-V.min.y,dt=V.isBox3?V.max.z-V.min.z:1,Dt=V.min.x,Nt=V.min.y,At=V.isBox3?V.min.z:0;else{let _i=Math.pow(2,-N);ht=Math.floor(xe.width*_i),yt=Math.floor(xe.height*_i),A.isDataArrayTexture?dt=xe.depth:A.isData3DTexture?dt=Math.floor(xe.depth*_i):dt=1,Dt=0,Nt=0,At=0}k!==null?(qt=k.x,ce=k.y,Ne=k.z):(qt=0,ce=0,Ne=0);let pe=Et.convert(O.format),Ct=Et.convert(O.type),Re;O.isData3DTexture?(Pt.setTexture3D(O,0),Re=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Pt.setTexture2DArray(O,0),Re=D.TEXTURE_2D_ARRAY):(Pt.setTexture2D(O,0),Re=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);let $t=D.getParameter(D.UNPACK_ROW_LENGTH),Yn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Za=D.getParameter(D.UNPACK_SKIP_PIXELS),Zn=D.getParameter(D.UNPACK_SKIP_ROWS),wl=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,xe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Dt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Nt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,At);let De=A.isDataArrayTexture||A.isData3DTexture,gi=O.isDataArrayTexture||O.isData3DTexture;if(A.isDepthTexture){let _i=vt.get(A),bn=vt.get(O),Dn=vt.get(_i.__renderTarget),up=vt.get(bn.__renderTarget);pt.bindFramebuffer(D.READ_FRAMEBUFFER,Dn.__webglFramebuffer),pt.bindFramebuffer(D.DRAW_FRAMEBUFFER,up.__webglFramebuffer);for(let Qr=0;Qr<dt;Qr++)De&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vt.get(A).__webglTexture,N,At+Qr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vt.get(O).__webglTexture,tt,Ne+Qr)),D.blitFramebuffer(Dt,Nt,ht,yt,qt,ce,ht,yt,D.DEPTH_BUFFER_BIT,D.NEAREST);pt.bindFramebuffer(D.READ_FRAMEBUFFER,null),pt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(N!==0||A.isRenderTargetTexture||vt.has(A)){let _i=vt.get(A),bn=vt.get(O);pt.bindFramebuffer(D.READ_FRAMEBUFFER,SE),pt.bindFramebuffer(D.DRAW_FRAMEBUFFER,ME);for(let Dn=0;Dn<dt;Dn++)De?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_i.__webglTexture,N,At+Dn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_i.__webglTexture,N),gi?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,bn.__webglTexture,tt,Ne+Dn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,bn.__webglTexture,tt),N!==0?D.blitFramebuffer(Dt,Nt,ht,yt,qt,ce,ht,yt,D.COLOR_BUFFER_BIT,D.NEAREST):gi?D.copyTexSubImage3D(Re,tt,qt,ce,Ne+Dn,Dt,Nt,ht,yt):D.copyTexSubImage2D(Re,tt,qt,ce,Dt,Nt,ht,yt);pt.bindFramebuffer(D.READ_FRAMEBUFFER,null),pt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else gi?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(Re,tt,qt,ce,Ne,ht,yt,dt,pe,Ct,xe.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(Re,tt,qt,ce,Ne,ht,yt,dt,pe,xe.data):D.texSubImage3D(Re,tt,qt,ce,Ne,ht,yt,dt,pe,Ct,xe):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,tt,qt,ce,ht,yt,pe,Ct,xe.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,tt,qt,ce,xe.width,xe.height,pe,xe.data):D.texSubImage2D(D.TEXTURE_2D,tt,qt,ce,ht,yt,pe,Ct,xe);D.pixelStorei(D.UNPACK_ROW_LENGTH,$t),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Yn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Za),D.pixelStorei(D.UNPACK_SKIP_ROWS,Zn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,wl),tt===0&&O.generateMipmaps&&D.generateMipmap(Re),pt.unbindTexture()},this.initRenderTarget=function(A){vt.get(A).__webglFramebuffer===void 0&&Pt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Pt.setTextureCube(A,0):A.isData3DTexture?Pt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Pt.setTexture2DArray(A,0):Pt.setTexture2D(A,0),pt.unbindTexture()},this.resetState=function(){w=0,E=0,R=null,pt.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),n.unpackColorSpace=jt._getUnpackColorSpace()}};var nE=jr(xu()),dO=`
precision highp float;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,pO=`
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
uniform float lineBrightness;
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
  
  return gradientColor * 0.5 * lineBrightness;
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
`,tv=8;function ap(e){let t=e.trim();t.startsWith("#")&&(t=t.slice(1));let n=255,i=255,s=255;return t.length===3?(n=parseInt(t[0]+t[0],16),i=parseInt(t[1]+t[1],16),s=parseInt(t[2]+t[2],16)):t.length===6&&(n=parseInt(t.slice(0,2),16),i=parseInt(t.slice(2,4),16),s=parseInt(t.slice(4,6),16)),new z(n/255,i/255,s/255)}function ev({linesGradient:e,enabledWaves:t=["top","middle","bottom"],lineCount:n=[6],lineDistance:i=[5],topWavePosition:s,middleWavePosition:r,bottomWavePosition:a={x:2,y:-.7,rotate:-1},animationSpeed:o=1,interactive:l=!0,bendRadius:c=5,bendStrength:u=-.5,mouseDamping:f=.05,parallax:h=!0,parallaxStrength:p=.2,mixBlendMode:_="screen",backgroundColor:g="#000000",lightMode:m=!1,lightRenderMode:d=0,lineBrightness:v=1,instantColorChange:y=!1,colorTransitionDuration:x=1.05}){let T=(0,pn.useRef)(null),w=(0,pn.useRef)(null),E=(0,pn.useRef)(null),R=(0,pn.useRef)(null),S=(0,pn.useRef)({interactive:l,parallax:h,parallaxStrength:p,mouseDamping:f});S.current={interactive:l,parallax:h,parallaxStrength:p,mouseDamping:f};let b=(0,pn.useRef)(new Zt(-1e3,-1e3)),U=(0,pn.useRef)(new Zt(-1e3,-1e3)),P=(0,pn.useRef)(0),B=(0,pn.useRef)(0),H=(0,pn.useRef)(new Zt(0,0)),X=(0,pn.useRef)(new Zt(0,0)),G=ut=>{if(typeof n=="number")return n;if(!t.includes(ut))return 0;let wt=t.indexOf(ut);return n[wt]??6},J=ut=>{if(typeof i=="number")return i;if(!t.includes(ut))return .1;let wt=t.indexOf(ut);return i[wt]??.1},F=t.includes("top")?G("top"):0,rt=t.includes("middle")?G("middle"):0,lt=t.includes("bottom")?G("bottom"):0,gt=t.includes("top")?J("top")*.01:.01,Ot=t.includes("middle")?J("middle")*.01:.01,te=t.includes("bottom")?J("bottom")*.01:.01;return(0,pn.useEffect)(()=>{let ut=T.current;if(!ut)return;let wt=!0,Y=new au,Q=new _l(-1,1,1,-1,0,1);Q.position.z=1;let it=new ip({antialias:!0,alpha:!1});it.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),it.domElement.style.width="100%",it.domElement.style.height="100%",ut.appendChild(it.domElement);let St={iTime:{value:0},iResolution:{value:new z(1,1,1)},animationSpeed:{value:o},enableTop:{value:t.includes("top")},enableMiddle:{value:t.includes("middle")},enableBottom:{value:t.includes("bottom")},topLineCount:{value:F},middleLineCount:{value:rt},bottomLineCount:{value:lt},topLineDistance:{value:gt},middleLineDistance:{value:Ot},bottomLineDistance:{value:te},topWavePosition:{value:new z(s?.x??10,s?.y??.5,s?.rotate??-.4)},middleWavePosition:{value:new z(r?.x??5,r?.y??0,r?.rotate??.2)},bottomWavePosition:{value:new z(a?.x??2,a?.y??-.7,a?.rotate??.4)},iMouse:{value:new Zt(-1e3,-1e3)},interactive:{value:l},bendRadius:{value:c},bendStrength:{value:u},bendInfluence:{value:0},parallax:{value:h},parallaxStrength:{value:p},parallaxOffset:{value:new Zt(0,0)},lineGradient:{value:Array.from({length:tv},()=>new z(1,1,1))},lineGradientCount:{value:0},lineBrightness:{value:v},backgroundColor:{value:ap(g)},lightMode:{value:m},lightRenderMode:{value:d}};if(w.current=St,e&&e.length>0){let ee=e.slice(0,tv);St.lineGradientCount.value=ee.length,ee.forEach((C,M)=>{let I=ap(C);St.lineGradient.value[M].set(I.x,I.y,I.z)})}let _t=new pi({uniforms:St,vertexShader:dO,fragmentShader:pO}),Gt=new Fa(2,2),en=new Wn(Gt,_t);Y.add(en);let D=new hu,fe=0,It=0,Rt=()=>{if(!wt)return;let ee=ut.clientWidth||1,C=ut.clientHeight||1;if(ee===fe&&C===It)return;fe=ee,It=C,it.setSize(ee,C,!1);let M=it.domElement.width,I=it.domElement.height;St.iResolution.value.set(M,I,1)};Rt();let pt=typeof ResizeObserver<"u"?new ResizeObserver(()=>{wt&&Rt()}):null;pt&&pt.observe(ut);let de=ee=>{if(!S.current.interactive)return;let C=it.domElement.getBoundingClientRect(),M=ee.clientX-C.left,I=ee.clientY-C.top,q=it.getPixelRatio();if(b.current.set(M*q,(C.height-I)*q),P.current=1,S.current.parallax){let j=C.width/2,W=C.height/2,Mt=(M-j)/C.width,st=-(I-W)/C.height;H.current.set(Mt*S.current.parallaxStrength,st*S.current.parallaxStrength)}},vt=()=>{P.current=0};it.domElement.addEventListener("pointermove",de),it.domElement.addEventListener("pointerleave",vt);let Pt=0,Ve=()=>{wt&&(St.iTime.value=D.getElapsedTime(),S.current.interactive&&(U.current.lerp(b.current,S.current.mouseDamping),St.iMouse.value.copy(U.current),B.current+=(P.current-B.current)*S.current.mouseDamping,St.bendInfluence.value=B.current),S.current.parallax&&(X.current.lerp(H.current,S.current.mouseDamping),St.parallaxOffset.value.copy(X.current)),it.render(Y,Q),Pt=requestAnimationFrame(Ve))};return Ve(),()=>{wt=!1,w.current=null,E.current?.kill(),R.current?.kill(),cancelAnimationFrame(Pt),pt&&pt.disconnect(),it.domElement.removeEventListener("pointermove",de),it.domElement.removeEventListener("pointerleave",vt),Gt.dispose(),_t.dispose(),it.dispose(),it.forceContextLoss(),it.domElement.parentElement&&it.domElement.parentElement.removeChild(it.domElement)}},[]),(0,pn.useEffect)(()=>{let ut=w.current;ut&&(ut.animationSpeed.value=o,ut.interactive.value=l,ut.bendRadius.value=c,ut.bendStrength.value=u,ut.parallax.value=h,ut.parallaxStrength.value=p,ut.backgroundColor.value.copy(ap(g)),ut.lightMode.value=m,ut.lightRenderMode.value=d,ut.topWavePosition.value.set(s?.x??10,s?.y??.5,s?.rotate??-.4),ut.middleWavePosition.value.set(r?.x??5,r?.y??0,r?.rotate??.2),ut.bottomWavePosition.value.set(a?.x??2,a?.y??-.7,a?.rotate??.4),l||(P.current=0,B.current=0,ut.bendInfluence.value=0),h||(H.current.set(0,0),X.current.set(0,0),ut.parallaxOffset.value.set(0,0)))},[o,l,c,u,h,p,g,m,d,s,r,a]),(0,pn.useEffect)(()=>{let ut=w.current;if(!ut)return;E.current?.kill();let wt=(e||[]).slice(0,tv).map(ap);if(!wt.length){ut.lineGradientCount.value=0;return}let Y=wt.map((St,_t)=>ut.lineGradient.value[_t].clone());ut.lineGradientCount.value=wt.length;let Q=St=>wt.forEach((_t,Gt)=>{ut.lineGradient.value[Gt].copy(Y[Gt]).lerp(_t,St)});if(y||x<=0){Q(1);return}let it={progress:0};return E.current=yn.to(it,{progress:1,duration:x,ease:"sine.inOut",onUpdate:()=>Q(it.progress)}),()=>E.current?.kill()},[e,y,x]),(0,pn.useEffect)(()=>{let ut=w.current?.lineBrightness;if(ut){if(R.current?.kill(),y){ut.value=v;return}return R.current=yn.to(ut,{value:v,duration:1.2,ease:"sine.inOut"}),()=>R.current?.kill()}},[v,y]),(0,nE.jsx)("div",{ref:T,className:"floating-lines-container",style:{mixBlendMode:m?"normal":_}})}var fv=jr(xu()),uv=["#740005","#1a1a1a","#fbfcd3"],uE=[{id:"combination-1",name:"\u7EC4\u5408 1 \xB7 \u7D2B\u4E0E\u6696\u767D",colors:["#8877C7","#BBA6C4","#F0E7DB"]},{id:"combination-2",name:"\u7EC4\u5408 2 \xB7 \u73AB\u7470\u4E0E\u6DF1\u84DD\u7070",colors:["#C88697","#826F7B","#31424D"]},{id:"combination-3",name:"\u7EC4\u5408 3 \xB7 \u84DD\u4E0E\u674F\u7C89",colors:["#4A5F8C","#97869C","#E8B4A2"]}],hv=[{id:"cherry-haze",name:"\u8F66\u5398\u5B50\u591C\u96FE",colors:["#9F1D35","#D8A0AA","#5A3A34","#F4ECE8"]},{id:"grape-peach",name:"\u8461\u8404\u871C\u6843",colors:["#6C4CCF","#F6B6A8","#44235F","#F7F2EC"]},{id:"peacock-gold",name:"\u5B54\u96C0\u938F\u91D1",colors:["#0F6B68","#C9933D","#1D2C45","#EEE6DA"]},{id:"lime-sea",name:"\u9752\u67E0\u51B0\u6D77",colors:["#C9E64E","#62C7D6","#65727B","#F5F8F7"]},{id:"rose-ash",name:"\u73AB\u7470\u70DF\u7070",colors:["#D79BAA","#8D99A6","#6A3A4E","#F4EFE8"]},{id:"amber-voyage",name:"\u7425\u73C0\u591C\u822A",colors:["#D58A3A","#223A5E","#E7D8C4","#4A4E56"]},{id:"plum-mint",name:"\u4E4C\u6885\u8584\u8377",colors:["#50385E","#A8D8CC","#DCCFE6","#F5EEE7"]}],iv=new Map(hv.map(e=>[e.id,e])),hE={dark:["reference","combination-2"],light:["combination-1","combination-2","combination-3"]},fE="dawn-line-palette",mO=()=>4e4+Math.random()*2e4;function gO(e){let t=e.map(n=>[1,3,5].map(i=>parseInt(n.slice(i,i+2),16)));return Array.from({length:7},(n,i)=>{let s=i*(t.length-1)/6,r=Math.min(Math.floor(s),t.length-2),a=s-r;return`#${t[r].map((l,c)=>Math.round(l+(t[r+1][c]-l)*a).toString(16).padStart(2,"0")).join("")}`})}var dE=new Map([["reference",uv],...uE.map(e=>[e.id,e.colors]),...hv.map(e=>[e.id,e.colors])]),iE=new Map([...dE].map(([e,t])=>[e,gO(t)]));function _O(e){return iE.get(e)||iE.get("reference")}function vO(e,t){let n=hE[t?"dark":"light"].filter(i=>i!==e);return n[Math.floor(Math.random()*n.length)]}function yO(){try{let e=localStorage.getItem(fE);if(iv.has(e))return e}catch{}return"default"}var xO=["--dawn-title-a","--dawn-title-b","--dawn-title-c","--dawn-title-d"],SO=new Set(["about","publications","projects","data","teaching"]);function bu(e){return[1,3,5].map(t=>parseInt(e.slice(t,t+2),16))}function sv(e,t,n){let i=bu(e),s=bu(t);return`#${i.map((r,a)=>Math.round(r+(s[a]-r)*n).toString(16).padStart(2,"0")).join("")}`}function rv(e){let[t,n,i]=bu(e).map(c=>c/255),s=Math.max(t,n,i),r=Math.min(t,n,i),a=s-r,o=(s+r)/2,l=0;return a&&(s===t?l=(n-i)/a%6:s===n?l=(i-t)/a+2:l=(t-n)/a+4),{hue:(l*60+360)%360,saturation:a?a/(1-Math.abs(2*o-1)):0,lightness:o}}function Mu({hue:e,saturation:t,lightness:n}){let i=(1-Math.abs(2*n-1))*t;return`#${[0,8,4].map(s=>{let r=(s+e/30)%12,a=n-i/2*Math.max(-1,Math.min(r-3,9-r,1));return Math.round(Math.max(0,Math.min(1,a))*255).toString(16).padStart(2,"0")}).join("")}`}function MO(e,t,n){let i=rv(e),s=rv(t),r=(s.hue-i.hue+540)%360-180;return Mu({hue:(i.hue+r*n+360)%360,saturation:i.saturation+(s.saturation-i.saturation)*n,lightness:i.lightness+(s.lightness-i.lightness)*n})}function sE(e){let t=bu(e).map(n=>{let i=n/255;return i<=.04045?i/12.92:((i+.055)/1.055)**2.4});return t[0]*.2126+t[1]*.7152+t[2]*.0722}function lp(e,t){let n=[sE(e),sE(t)].sort((i,s)=>s-i);return(n[0]+.05)/(n[1]+.05)}function bO(e,t,n,i,s){let r=0,a=1;for(let o=0;o<12;o+=1){let l=(r+a)/2,c=lp(sv(e,t,l),n);(s?c>=i:c<=i)?a=l:r=l}return sv(e,t,a)}function TO(e,t){let n=t?"#02060d":"#f5f5f7";if(t){let a=rv(e),o={...a,saturation:Math.max(.55,Math.min(a.saturation,.8))},l=lp(Mu(o),n);if(l>=7.5&&l<=9.5)return Mu(o);let c=0,u=1,f=l<7.5?7.5:9.5;for(let h=0;h<12;h+=1){let p=(c+u)/2;lp(Mu({...o,lightness:p}),n)<f?c=p:u=p}return Mu({...o,lightness:u})}return lp(e,n)<4.5?bO(e,"#111827",n,4.5,!0):e}function pE(e,t){let n;if(t&&e==="reference")n=["#f06b96","#f1a3b9","#d79c9e","#d5b29d"];else{let i=dE.get(e==="reference"?"combination-1":e)||uv,r=(t&&e==="amber-voyage"?[i[0],i[2]]:i.map((o,l)=>{let c=bu(o);return{color:o,index:l,chroma:Math.max(...c)-Math.min(...c)}}).sort((o,l)=>l.chroma-o.chroma).slice(0,2).sort((o,l)=>o.index-l.index).map(o=>o.color)).map(o=>TO(o,t)),a=t?MO:sv;n=[r[0],a(r[0],r[1],.32),r[1],a(r[1],r[0],.36)]}return Object.fromEntries(xO.map((i,s)=>[i,n[s]]))}var av=yO();function rE(e,t){let n=document.createElement("label");n.className="dawn-palette-option";let i=document.createElement("input");i.type="radio",i.name="dawn-palette",i.value=e.id,i.checked=e.id===t;let s=document.createElement("span");s.className="dawn-palette-option__swatches",(e.id==="default"?[uv,...uE.map(o=>o.colors)].map(o=>`linear-gradient(135deg, ${o.join(", ")})`):e.colors).forEach(o=>{let l=document.createElement("span");l.className="dawn-palette-option__swatch",l.style.background=o,s.appendChild(l)});let a=document.createElement("span");if(a.className="dawn-palette-option__name",a.textContent=e.name,n.append(i,s,a),e.description){let o=document.createElement("span");o.className="dawn-palette-option__meta",o.textContent=e.description,n.appendChild(o)}return n}var EO=["middle","bottom","top"],AO={x:5,y:-.45,rotate:.2},mE=new Set(["/teachings/urban-analytics-ba-26/","/teachings/urban-analytics-msc-26/"]),wO=new Map([["/","home"],["/about/","about"],["/publications/","publications"],["/projects/","projects"],["/data/","data"],["/teaching/","teaching"],...[...mE].map(e=>[e,"teaching"])]),Ks=window.matchMedia("(prefers-reduced-motion: reduce)"),ov=window.matchMedia("(forced-colors: active)");function CO(){let[e,t]=(0,qn.useState)(document.documentElement.dataset.theme==="dark"),[n,i]=(0,qn.useState)(av),[s,r]=(0,qn.useState)(()=>({id:n==="default"?document.documentElement.dataset.theme==="dark"?"reference":"combination-1":n,duration:0})),[a,o]=(0,qn.useState)(Ks.matches),l=(0,qn.useRef)(null);return(0,qn.useEffect)(()=>{let c=()=>{let h=document.documentElement.dataset.theme==="dark";t(h)},u=()=>o(Ks.matches),f=new MutationObserver(c);return f.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),Ks.addEventListener("change",u),()=>{f.disconnect(),Ks.removeEventListener("change",u)}},[]),(0,qn.useEffect)(()=>{r(c=>{let u=n==="default"?hE[e?"dark":"light"].includes(c.id)?c.id:e?"reference":"combination-1":n;return c.id===u?c:{id:u,duration:1.2}}),document.body.dataset.dawnPaletteSelection=n;try{localStorage.setItem(fE,n)}catch{}},[n,e]),(0,qn.useEffect)(()=>{document.body.dataset.dawnPalette=s.id},[s.id]),(0,qn.useEffect)(()=>{let c=l.current,u=a||!c?0:c.id!==s.id&&s.duration||1.2;yn.to(document.body,{...pE(s.id,e),duration:u,ease:"sine.inOut",overwrite:"auto"}),l.current={id:s.id,dark:e}},[s.id,s.duration,e,a]),(0,qn.useEffect)(()=>{if(a||n!=="default")return;let c,u=()=>{document.hidden||(c=window.setTimeout(()=>{r(h=>({id:vO(h.id,e),duration:8})),u()},mO()))},f=()=>{window.clearTimeout(c),u()};return document.addEventListener("visibilitychange",f),u(),()=>{window.clearTimeout(c),document.removeEventListener("visibilitychange",f)}},[e,a,n]),(0,qn.useEffect)(()=>{let c=document.getElementById("dawn-palette-toggle"),u=document.getElementById("dawn-palette-panel"),f=document.getElementById("dawn-palette-options"),h=u?.querySelector(".dawn-palette-panel__close");if(!c||!u||!f||!h)return;f.replaceChildren(rE({id:"default",name:"\u9ED8\u8BA4 \xB7 \u5F53\u524D\u914D\u8272",description:"\u6CBF\u7528\u539F\u6709\u6DF1\u6D45\u8272\u81EA\u52A8\u8F6E\u6362"},n),...hv.map(E=>rE(E,n)));let p=c.closest(".dawn-palette-nav");p&&(p.hidden=!1);let _=c,g=E=>{u.hidden||(u.hidden=!0,c.setAttribute("aria-expanded","false"),E&&_.focus({preventScroll:!0}))},m=()=>{let E=document.getElementById("dawn-site-stats-panel");E&&!E.hidden&&E.querySelector(".dawn-site-stats__close")?.click();let S=document.getElementById("navbarNav")?.classList.contains("show");_=S&&document.querySelector("#navbar .navbar-toggler")||c,S&&lv(),u.hidden=!1,c.setAttribute("aria-expanded","true"),f.querySelector("input:checked")?.focus({preventScroll:!0})},d=()=>u.hidden?m():g(!0),v=E=>{let R=E.target;!(R instanceof HTMLInputElement)||R.name!=="dawn-palette"||R.value!=="default"&&!iv.has(R.value)||i(R.value)},y=E=>{!u.hidden&&!u.contains(E.target)&&!c.contains(E.target)&&g(!1)},x=E=>{E.key==="Escape"&&!u.hidden&&g(!0)},T=()=>g(!1),w=()=>g(!0);return c.addEventListener("click",d),h.addEventListener("click",w),f.addEventListener("change",v),document.addEventListener("pointerdown",y),document.addEventListener("keydown",x),document.addEventListener("dawn:sectionchange",T),()=>{c.removeEventListener("click",d),h.removeEventListener("click",w),f.removeEventListener("change",v),document.removeEventListener("pointerdown",y),document.removeEventListener("keydown",x),document.removeEventListener("dawn:sectionchange",T)}},[]),(0,fv.jsx)(ev,{linesGradient:_O(s.id),colorTransitionDuration:s.duration,enabledWaves:EO,lineCount:8,lineDistance:8,middleWavePosition:AO,animationSpeed:a?0:1,interactive:!a,bendRadius:8,bendStrength:e?-.65:-2,mouseDamping:e?.055:.05,parallax:!a,parallaxStrength:e?.08:.2,lightMode:!e,lightRenderMode:2,lineBrightness:e&&iv.has(s.id)?.62:1,backgroundColor:e?"#000000":"#f5f5f7",instantColorChange:a})}function Jr(e){return e==="/"?"/":`${e.replace(/\/+$/,"")}/`}function Al(e){return wO.get(Jr(e.pathname))}function aE(e,t){return Jr(e.pathname)===Jr(t.pathname)}function Su(e=document){return e.querySelector('.dawn-home, .container[role="main"]')}function oE(e,t){e.classList.add("dawn-section-content"),e.dataset.dawnSection=t}function RO(e){return e.querySelector(".dawn-hero-content, .post-header")||e}function DO(e){document.querySelectorAll("#navbar .nav-item > a.nav-link").forEach(t=>{let n=Al(new URL(t.href,location.href))===e;if(t.parentElement.classList.toggle("active",n),n?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current"),t.querySelector(".sr-only")?.remove(),n){let i=document.createElement("span");i.className="sr-only",i.textContent="(current)",t.appendChild(i)}})}function lv(){let e=document.getElementById("navbarNav"),t=document.querySelector("#navbar .navbar-toggler");e?.classList.contains("show")&&(window.jQuery?.fn?.collapse?window.jQuery(e).collapse("hide"):e.classList.remove("show")),t?.classList.add("collapsed"),t?.setAttribute("aria-expanded","false")}function UO(e){let t=e.querySelector("#lang-checkbox"),n=e.querySelector("#dawn-intro-wrapper");if(!t||!n||t.dataset.dawnReady)return;t.dataset.dawnReady="true";let i=r=>{n.classList.toggle("show-en",r==="en"),n.classList.toggle("show-cn",r!=="en"),t.checked=r==="en";try{localStorage.setItem("dawn-pref-lang",r)}catch{}},s="cn";try{s=localStorage.getItem("dawn-pref-lang")==="en"?"en":"cn"}catch{}i(s),t.addEventListener("change",()=>i(t.checked?"en":"cn"))}function LO(e,t){let n=e.querySelector("#bibsearch"),i=e.querySelector(".publications");if(!n||!i||n.dataset.dawnReady)return;n.dataset.dawnReady="true";let s=()=>{let a=n.value.trim().toLocaleLowerCase();i.querySelectorAll("ol.bibliography").forEach(o=>{let l=0;o.querySelectorAll(":scope > li").forEach(c=>{let u=!a||c.textContent.toLocaleLowerCase().includes(a);c.classList.toggle("unloaded",!u),u&&(l+=1)}),o.classList.toggle("unloaded",l===0),o.previousElementSibling?.matches("h2.bibliography")&&o.previousElementSibling.classList.toggle("unloaded",l===0)})},r;n.addEventListener("input",()=>{clearTimeout(r),r=window.setTimeout(s,120)}),s(),t&&i.addEventListener("click",a=>{let o=a.target instanceof Element?a.target.closest("a.abstract, a.award, a.bibtex"):null;if(!o)return;a.preventDefault();let l=o.parentElement?.parentElement;if(l)for(let c of["abstract","award","bibtex"]){let u=l.querySelector(`.${c}.hidden`);o.classList.contains(c)?u?.classList.toggle("open"):u?.classList.remove("open")}})}function OO(e){let t=window.jQuery;t?.fn?.masonry&&e.querySelectorAll(".grid").forEach(i=>{let s=t(i).masonry({gutter:10,horizontalOrder:!0,itemSelector:".grid-item"});t.fn.imagesLoaded&&s.imagesLoaded().progress(()=>s.masonry("layout"))});let n=e.querySelectorAll("[data-zoomable]");n.length&&(window.medium_zoom?.attach?window.medium_zoom.attach(n):window.mediumZoom&&(window.medium_zoom=window.mediumZoom(n,{background:getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color")+"ee"})))}function cv(e){let t=document.createElement("script");t.src=e,t.addEventListener("load",()=>t.remove(),{once:!0}),t.addEventListener("error",()=>t.remove(),{once:!0}),document.body.appendChild(t)}function NO(e){e.querySelectorAll(".dawn-data-group").forEach(t=>{let n=t.querySelector(".dawn-data-group__toggle"),i=n?.querySelector(".dawn-data-group__toggle-label"),s=[...t.querySelectorAll("tbody tr.dawn-data-extra")],r=t.querySelector(".dawn-data-group__status");!n||!i||!s.length||(s.forEach(a=>{a.hidden=!0}),n.hidden=!1,n.addEventListener("click",()=>{let a=n.getAttribute("aria-expanded")!=="true";if(!a&&s.some(o=>o.querySelector('a[aria-busy="true"]'))){r&&(r.textContent="\u8BF7\u7B49\u5F85\u4E0B\u8F7D\u5B8C\u6210\u6216\u53D6\u6D88\u4E0B\u8F7D\u540E\u518D\u6536\u8D77\u3002");return}s.forEach(o=>{o.hidden=!a}),n.setAttribute("aria-expanded",String(a)),i.textContent=a?"\u6536\u8D77":`\u5C55\u5F00\u5176\u4F59 ${s.length} \u9879`,r&&(r.textContent="")}))})}var nv=null;function gE(e,t){if(nv?.kill(),nv=null,!SO.has(e))return;let n=t?.querySelector(".post-header > .post-title > .nav-cn");n&&(yn.set(n,{"--dawn-title-position":Ks.matches||ov.matches?"50%":"0%"}),!(Ks.matches||ov.matches)&&(nv=yn.to(n,{"--dawn-title-position":"100%",duration:14,repeat:-1,yoyo:!0,ease:"sine.inOut"})))}function lE(e,t,n){t&&(e==="about"&&UO(t),e==="publications"&&LO(t,n),n&&e==="projects"&&OO(t),e==="data"&&(NO(t),n&&cv("/assets/js/data-download.js")),n&&e==="home"&&cv("/assets/js/dawn-home.js"),gE(e,t))}function IO(e,t,n){if(Ks.matches)return e.replaceWith(t),n(),Promise.resolve();let i=e.getBoundingClientRect();e.style.setProperty("margin","0","important"),yn.set(e,{position:"fixed",top:i.top,left:i.left,width:i.width,zIndex:3,pointerEvents:"none"}),e.inert=!0,e.setAttribute("aria-hidden","true"),yn.set(t,{autoAlpha:0,y:8});let s=RO(t);return yn.set(s,{filter:"blur(2px)"}),e.after(t),n(),new Promise(r=>{yn.timeline({onComplete:()=>{e.remove(),yn.set(t,{clearProps:"opacity,visibility,transform"}),yn.set(s,{clearProps:"filter"}),r()}}).to(e,{autoAlpha:0,y:-4,filter:"blur(4px)",duration:.3,ease:"sine.inOut"},0).to(t,{autoAlpha:1,y:0,duration:.3,ease:"sine.inOut"},.08).to(s,{filter:"blur(0px)",duration:.3,ease:"sine.out"},.08)})}async function PO(e,t){let n=[...e.querySelectorAll(".projects img")];n.length&&await Promise.race([Promise.allSettled(n.map(i=>{let s=new Image;return s.src=new URL(i.getAttribute("src"),t).href,s.decode()})),new Promise(i=>window.setTimeout(i,1800))])}var op=document.getElementById("dawn-floating-lines-root");if(op){let c=function(p){let _=p.href;if(l.has(_))return l.get(_);let g=fetch(_,{credentials:"same-origin"}).then(m=>{if(!m.ok||!(m.headers.get("content-type")||"").includes("text/html"))throw new Error("Page could not be loaded");return m.text()}).catch(m=>{throw l.delete(_),m});return l.set(_,g),l.size>4&&l.delete(l.keys().next().value),g},h=function(p){let _=p.target instanceof Element?p.target.closest("a[href]"):null;if(!_||!f?.contains(_)&&!_.closest(".courses")||navigator.connection?.saveData)return;let g=new URL(_.href,location.href);g.origin!==location.origin||!Al(g)||aE(g,new URL(location.href))||c(g).catch(()=>{})},e=document.documentElement.dataset.theme==="dark";Object.entries(pE(av==="default"?e?"reference":"combination-1":av,e)).forEach(([p,_])=>{document.body.style.setProperty(p,_)}),(0,cE.createRoot)(op).render((0,fv.jsx)(CO,{}));let n=document.body.dataset.dawnSection||"home",i=Su();i&&oE(i,n),lE(n,i,!1);let s=()=>gE(Al(new URL(location.href)),Su());Ks.addEventListener("change",s),ov.addEventListener("change",s);let r=!1,a=Jr(location.pathname),o=null,l=new Map;async function u(p,_=!0,g=!0){if(r){o={destination:p,pushHistory:_,focusHeading:g};return}let m=Al(p),d=Su();if(!m||!d){location.assign(p.href);return}r=!0;try{let v=new DOMParser().parseFromString(await c(p),"text/html"),y=Su(v);if(!y||v.body.dataset.dawnSection!==m)throw new Error("Unexpected page shell");if(y.querySelectorAll("noscript").forEach(x=>x.remove()),oE(y,m),!op.isConnected)throw new Error("Persistent canvas is missing");if(m==="projects"&&await PO(y,p.href),await IO(d,y,()=>{_&&history.pushState({dawnRoute:!0},"",p.href),a=Jr(p.pathname),document.body.dataset.dawnSection=m,document.body.classList.toggle("dawn-home-page",m==="home"),document.body.classList.toggle("dawn-section-page",m!=="home"),document.title=v.title,DO(m),lv(),window.scrollTo(0,0),lE(m,y,!0),document.dispatchEvent(new CustomEvent("dawn:sectionchange",{detail:{section:m}}))}),mE.has(Jr(p.pathname))&&cv("/assets/js/course-material-morphicons.min.js"),g){let x=y.querySelector("h1");x&&(x.setAttribute("tabindex","-1"),x.focus({preventScroll:!0}))}}catch{location.assign(p.href)}finally{if(r=!1,o){let v=o;o=null,Jr(v.destination.pathname)!==a&&u(v.destination,v.pushHistory,v.focusHeading)}}}let f=document.querySelector("#navbar");document.addEventListener("click",p=>{if(p.defaultPrevented||p.button!==0||p.metaKey||p.ctrlKey||p.shiftKey||p.altKey)return;let _=p.target instanceof Element?p.target.closest("a[href]"):null;if(!_||_.target==="_blank"||_.hasAttribute("download"))return;let g=new URL(_.href,location.href);if(!(g.origin!==location.origin||!Al(g))){if(aE(g,new URL(location.href))){if(g.hash&&g.hash!==location.hash)return;p.preventDefault(),lv(),window.scrollTo({top:0,behavior:Ks.matches?"instant":"smooth"});return}p.preventDefault(),u(g,!0,p.detail===0)}}),document.addEventListener("pointerover",h),document.addEventListener("focusin",h),window.addEventListener("popstate",()=>{let p=new URL(location.href);Al(p)&&Jr(p.pathname)!==a&&u(p,!1,!1)}),window.addEventListener("pageshow",p=>{p.persisted&&(yn.set(Su(),{clearProps:"opacity,visibility,transform,filter"}),yn.set(op,{clearProps:"opacity"}),r=!1)})}})();
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
