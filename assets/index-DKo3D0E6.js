var ny=Object.defineProperty;var Oh=t=>{throw TypeError(t)};var iy=(t,e,n)=>e in t?ny(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Xn=(t,e,n)=>iy(t,typeof e!="symbol"?e+"":e,n),ec=(t,e,n)=>e.has(t)||Oh("Cannot "+n);var b=(t,e,n)=>(ec(t,e,"read from private field"),n?n.call(t):e.get(t)),Se=(t,e,n)=>e.has(t)?Oh("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),fe=(t,e,n,i)=>(ec(t,e,"write to private field"),i?i.call(t,n):e.set(t,n),n),je=(t,e,n)=>(ec(t,e,"access private method"),n);var $a=(t,e,n,i)=>({set _(r){fe(t,e,r,n)},get _(){return b(t,e,i)}});(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function zg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Bg={exports:{}},Ru={},Hg={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fa=Symbol.for("react.element"),ry=Symbol.for("react.portal"),sy=Symbol.for("react.fragment"),oy=Symbol.for("react.strict_mode"),ay=Symbol.for("react.profiler"),ly=Symbol.for("react.provider"),uy=Symbol.for("react.context"),cy=Symbol.for("react.forward_ref"),fy=Symbol.for("react.suspense"),dy=Symbol.for("react.memo"),hy=Symbol.for("react.lazy"),kh=Symbol.iterator;function py(t){return t===null||typeof t!="object"?null:(t=kh&&t[kh]||t["@@iterator"],typeof t=="function"?t:null)}var Gg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vg=Object.assign,Wg={};function wo(t,e,n){this.props=t,this.context=e,this.refs=Wg,this.updater=n||Gg}wo.prototype.isReactComponent={};wo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};wo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Xg(){}Xg.prototype=wo.prototype;function Ad(t,e,n){this.props=t,this.context=e,this.refs=Wg,this.updater=n||Gg}var Rd=Ad.prototype=new Xg;Rd.constructor=Ad;Vg(Rd,wo.prototype);Rd.isPureReactComponent=!0;var zh=Array.isArray,jg=Object.prototype.hasOwnProperty,Cd={current:null},qg={key:!0,ref:!0,__self:!0,__source:!0};function Yg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)jg.call(e,i)&&!qg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Fa,type:t,key:s,ref:o,props:r,_owner:Cd.current}}function my(t,e){return{$$typeof:Fa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function bd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fa}function gy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Bh=/\/+/g;function tc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?gy(""+t.key):e.toString(36)}function Ol(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Fa:case ry:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+tc(o,0):i,zh(r)?(n="",t!=null&&(n=t.replace(Bh,"$&/")+"/"),Ol(r,e,n,"",function(u){return u})):r!=null&&(bd(r)&&(r=my(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Bh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",zh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+tc(s,a);o+=Ol(s,e,n,l,r)}else if(l=py(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+tc(s,a++),o+=Ol(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ka(t,e,n){if(t==null)return t;var i=[],r=0;return Ol(t,i,"","",function(s){return e.call(n,s,r++)}),i}function vy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var sn={current:null},kl={transition:null},_y={ReactCurrentDispatcher:sn,ReactCurrentBatchConfig:kl,ReactCurrentOwner:Cd};function $g(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:Ka,forEach:function(t,e,n){Ka(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ka(t,function(){e++}),e},toArray:function(t){return Ka(t,function(e){return e})||[]},only:function(t){if(!bd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=wo;Xe.Fragment=sy;Xe.Profiler=ay;Xe.PureComponent=Ad;Xe.StrictMode=oy;Xe.Suspense=fy;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_y;Xe.act=$g;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Vg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Cd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)jg.call(e,l)&&!qg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Fa,type:t.type,key:r,ref:s,props:i,_owner:o}};Xe.createContext=function(t){return t={$$typeof:uy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ly,_context:t},t.Consumer=t};Xe.createElement=Yg;Xe.createFactory=function(t){var e=Yg.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:cy,render:t}};Xe.isValidElement=bd;Xe.lazy=function(t){return{$$typeof:hy,_payload:{_status:-1,_result:t},_init:vy}};Xe.memo=function(t,e){return{$$typeof:dy,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=kl.transition;kl.transition={};try{t()}finally{kl.transition=e}};Xe.unstable_act=$g;Xe.useCallback=function(t,e){return sn.current.useCallback(t,e)};Xe.useContext=function(t){return sn.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return sn.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return sn.current.useEffect(t,e)};Xe.useId=function(){return sn.current.useId()};Xe.useImperativeHandle=function(t,e,n){return sn.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return sn.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return sn.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return sn.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return sn.current.useReducer(t,e,n)};Xe.useRef=function(t){return sn.current.useRef(t)};Xe.useState=function(t){return sn.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return sn.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return sn.current.useTransition()};Xe.version="18.3.1";Hg.exports=Xe;var Ke=Hg.exports;const Kg=zg(Ke);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yy=Ke,xy=Symbol.for("react.element"),Sy=Symbol.for("react.fragment"),My=Object.prototype.hasOwnProperty,Ey=yy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ty={key:!0,ref:!0,__self:!0,__source:!0};function Qg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)My.call(e,i)&&!Ty.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:xy,type:t,key:s,ref:o,props:r,_owner:Ey.current}}Ru.Fragment=Sy;Ru.jsx=Qg;Ru.jsxs=Qg;Bg.exports=Ru;var z=Bg.exports,af={},Zg={exports:{}},Pn={},Jg={exports:{}},ev={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,F){var V=U.length;U.push(F);e:for(;0<V;){var K=V-1>>>1,Z=U[K];if(0<r(Z,F))U[K]=F,U[V]=Z,V=K;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var F=U[0],V=U.pop();if(V!==F){U[0]=V;e:for(var K=0,Z=U.length,j=Z>>>1;K<j;){var Q=2*(K+1)-1,ue=U[Q],pe=Q+1,ve=U[pe];if(0>r(ue,V))pe<Z&&0>r(ve,ue)?(U[K]=ve,U[pe]=V,K=pe):(U[K]=ue,U[Q]=V,K=Q);else if(pe<Z&&0>r(ve,V))U[K]=ve,U[pe]=V,K=pe;else break e}}return F}function r(U,F){var V=U.sortIndex-F.sortIndex;return V!==0?V:U.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,d=null,h=3,p=!1,y=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(U){for(var F=n(u);F!==null;){if(F.callback===null)i(u);else if(F.startTime<=U)i(u),F.sortIndex=F.expirationTime,e(l,F);else break;F=n(u)}}function x(U){if(_=!1,g(U),!y)if(n(l)!==null)y=!0,q(C);else{var F=n(u);F!==null&&$(x,F.startTime-U)}}function C(U,F){y=!1,_&&(_=!1,c(D),D=-1),p=!0;var V=h;try{for(g(F),d=n(l);d!==null&&(!(d.expirationTime>F)||U&&!W());){var K=d.callback;if(typeof K=="function"){d.callback=null,h=d.priorityLevel;var Z=K(d.expirationTime<=F);F=t.unstable_now(),typeof Z=="function"?d.callback=Z:d===n(l)&&i(l),g(F)}else i(l);d=n(l)}if(d!==null)var j=!0;else{var Q=n(u);Q!==null&&$(x,Q.startTime-F),j=!1}return j}finally{d=null,h=V,p=!1}}var w=!1,R=null,D=-1,M=5,E=-1;function W(){return!(t.unstable_now()-E<M)}function Y(){if(R!==null){var U=t.unstable_now();E=U;var F=!0;try{F=R(!0,U)}finally{F?re():(w=!1,R=null)}}else w=!1}var re;if(typeof v=="function")re=function(){v(Y)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,H=L.port2;L.port1.onmessage=Y,re=function(){H.postMessage(null)}}else re=function(){m(Y,0)};function q(U){R=U,w||(w=!0,re())}function $(U,F){D=m(function(){U(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,q(C))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(h){case 1:case 2:case 3:var F=3;break;default:F=h}var V=h;h=F;try{return U()}finally{h=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,F){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var V=h;h=U;try{return F()}finally{h=V}},t.unstable_scheduleCallback=function(U,F,V){var K=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?K+V:K):V=K,U){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=V+Z,U={id:f++,callback:F,priorityLevel:U,startTime:V,expirationTime:Z,sortIndex:-1},V>K?(U.sortIndex=V,e(u,U),n(l)===null&&U===n(u)&&(_?(c(D),D=-1):_=!0,$(x,V-K))):(U.sortIndex=Z,e(l,U),y||p||(y=!0,q(C))),U},t.unstable_shouldYield=W,t.unstable_wrapCallback=function(U){var F=h;return function(){var V=h;h=F;try{return U.apply(this,arguments)}finally{h=V}}}})(ev);Jg.exports=ev;var wy=Jg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ay=Ke,bn=wy;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tv=new Set,oa={};function ds(t,e){ho(t,e),ho(t+"Capture",e)}function ho(t,e){for(oa[t]=e,t=0;t<e.length;t++)tv.add(e[t])}var Ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lf=Object.prototype.hasOwnProperty,Ry=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hh={},Gh={};function Cy(t){return lf.call(Gh,t)?!0:lf.call(Hh,t)?!1:Ry.test(t)?Gh[t]=!0:(Hh[t]=!0,!1)}function by(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Py(t,e,n,i){if(e===null||typeof e>"u"||by(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function on(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ht[t]=new on(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ht[e]=new on(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ht[t]=new on(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ht[t]=new on(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ht[t]=new on(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ht[t]=new on(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ht[t]=new on(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ht[t]=new on(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ht[t]=new on(t,5,!1,t.toLowerCase(),null,!1,!1)});var Pd=/[\-:]([a-z])/g;function Ld(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Pd,Ld);Ht[e]=new on(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Pd,Ld);Ht[e]=new on(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Pd,Ld);Ht[e]=new on(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ht[t]=new on(t,1,!1,t.toLowerCase(),null,!1,!1)});Ht.xlinkHref=new on("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ht[t]=new on(t,1,!1,t.toLowerCase(),null,!0,!0)});function Dd(t,e,n,i){var r=Ht.hasOwnProperty(e)?Ht[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Py(e,n,r,i)&&(n=null),i||r===null?Cy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var zi=Ay.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qa=Symbol.for("react.element"),Ls=Symbol.for("react.portal"),Ds=Symbol.for("react.fragment"),Ud=Symbol.for("react.strict_mode"),uf=Symbol.for("react.profiler"),nv=Symbol.for("react.provider"),iv=Symbol.for("react.context"),Nd=Symbol.for("react.forward_ref"),cf=Symbol.for("react.suspense"),ff=Symbol.for("react.suspense_list"),Id=Symbol.for("react.memo"),qi=Symbol.for("react.lazy"),rv=Symbol.for("react.offscreen"),Vh=Symbol.iterator;function Lo(t){return t===null||typeof t!="object"?null:(t=Vh&&t[Vh]||t["@@iterator"],typeof t=="function"?t:null)}var gt=Object.assign,nc;function Wo(t){if(nc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);nc=e&&e[1]||""}return`
`+nc+t}var ic=!1;function rc(t,e){if(!t||ic)return"";ic=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ic=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Wo(t):""}function Ly(t){switch(t.tag){case 5:return Wo(t.type);case 16:return Wo("Lazy");case 13:return Wo("Suspense");case 19:return Wo("SuspenseList");case 0:case 2:case 15:return t=rc(t.type,!1),t;case 11:return t=rc(t.type.render,!1),t;case 1:return t=rc(t.type,!0),t;default:return""}}function df(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ds:return"Fragment";case Ls:return"Portal";case uf:return"Profiler";case Ud:return"StrictMode";case cf:return"Suspense";case ff:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case iv:return(t.displayName||"Context")+".Consumer";case nv:return(t._context.displayName||"Context")+".Provider";case Nd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Id:return e=t.displayName||null,e!==null?e:df(t.type)||"Memo";case qi:e=t._payload,t=t._init;try{return df(t(e))}catch{}}return null}function Dy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return df(e);case 8:return e===Ud?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function sv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Uy(t){var e=sv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Za(t){t._valueTracker||(t._valueTracker=Uy(t))}function ov(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=sv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Kl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function hf(t,e){var n=e.checked;return gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Wh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Mr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function av(t,e){e=e.checked,e!=null&&Dd(t,"checked",e,!1)}function pf(t,e){av(t,e);var n=Mr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?mf(t,e.type,n):e.hasOwnProperty("defaultValue")&&mf(t,e.type,Mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Xh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function mf(t,e,n){(e!=="number"||Kl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Xo=Array.isArray;function Xs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Mr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function gf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return gt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function jh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(Xo(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Mr(n)}}function lv(t,e){var n=Mr(e.value),i=Mr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function qh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function uv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?uv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ja,cv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ja=Ja||document.createElement("div"),Ja.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ja.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function aa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ko={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ny=["Webkit","ms","Moz","O"];Object.keys(Ko).forEach(function(t){Ny.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ko[e]=Ko[t]})});function fv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ko.hasOwnProperty(t)&&Ko[t]?(""+e).trim():e+"px"}function dv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=fv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Iy=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _f(t,e){if(e){if(Iy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function yf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xf=null;function Fd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sf=null,js=null,qs=null;function Yh(t){if(t=za(t)){if(typeof Sf!="function")throw Error(te(280));var e=t.stateNode;e&&(e=Du(e),Sf(t.stateNode,t.type,e))}}function hv(t){js?qs?qs.push(t):qs=[t]:js=t}function pv(){if(js){var t=js,e=qs;if(qs=js=null,Yh(t),e)for(t=0;t<e.length;t++)Yh(e[t])}}function mv(t,e){return t(e)}function gv(){}var sc=!1;function vv(t,e,n){if(sc)return t(e,n);sc=!0;try{return mv(t,e,n)}finally{sc=!1,(js!==null||qs!==null)&&(gv(),pv())}}function la(t,e){var n=t.stateNode;if(n===null)return null;var i=Du(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var Mf=!1;if(Ni)try{var Do={};Object.defineProperty(Do,"passive",{get:function(){Mf=!0}}),window.addEventListener("test",Do,Do),window.removeEventListener("test",Do,Do)}catch{Mf=!1}function Fy(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var Qo=!1,Ql=null,Zl=!1,Ef=null,Oy={onError:function(t){Qo=!0,Ql=t}};function ky(t,e,n,i,r,s,o,a,l){Qo=!1,Ql=null,Fy.apply(Oy,arguments)}function zy(t,e,n,i,r,s,o,a,l){if(ky.apply(this,arguments),Qo){if(Qo){var u=Ql;Qo=!1,Ql=null}else throw Error(te(198));Zl||(Zl=!0,Ef=u)}}function hs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function _v(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function $h(t){if(hs(t)!==t)throw Error(te(188))}function By(t){var e=t.alternate;if(!e){if(e=hs(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return $h(r),t;if(s===i)return $h(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function yv(t){return t=By(t),t!==null?xv(t):null}function xv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=xv(t);if(e!==null)return e;t=t.sibling}return null}var Sv=bn.unstable_scheduleCallback,Kh=bn.unstable_cancelCallback,Hy=bn.unstable_shouldYield,Gy=bn.unstable_requestPaint,Mt=bn.unstable_now,Vy=bn.unstable_getCurrentPriorityLevel,Od=bn.unstable_ImmediatePriority,Mv=bn.unstable_UserBlockingPriority,Jl=bn.unstable_NormalPriority,Wy=bn.unstable_LowPriority,Ev=bn.unstable_IdlePriority,Cu=null,mi=null;function Xy(t){if(mi&&typeof mi.onCommitFiberRoot=="function")try{mi.onCommitFiberRoot(Cu,t,void 0,(t.current.flags&128)===128)}catch{}}var ii=Math.clz32?Math.clz32:Yy,jy=Math.log,qy=Math.LN2;function Yy(t){return t>>>=0,t===0?32:31-(jy(t)/qy|0)|0}var el=64,tl=4194304;function jo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function eu(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=jo(a):(s&=o,s!==0&&(i=jo(s)))}else o=n&~r,o!==0?i=jo(o):s!==0&&(i=jo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ii(e),r=1<<n,i|=t[n],e&=~r;return i}function $y(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ky(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ii(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=$y(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Tf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Tv(){var t=el;return el<<=1,!(el&4194240)&&(el=64),t}function oc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Oa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ii(e),t[e]=n}function Qy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ii(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function kd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ii(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var et=0;function wv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Av,zd,Rv,Cv,bv,wf=!1,nl=[],cr=null,fr=null,dr=null,ua=new Map,ca=new Map,Ki=[],Zy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qh(t,e){switch(t){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":dr=null;break;case"pointerover":case"pointerout":ua.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ca.delete(e.pointerId)}}function Uo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=za(e),e!==null&&zd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Jy(t,e,n,i,r){switch(e){case"focusin":return cr=Uo(cr,t,e,n,i,r),!0;case"dragenter":return fr=Uo(fr,t,e,n,i,r),!0;case"mouseover":return dr=Uo(dr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ua.set(s,Uo(ua.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ca.set(s,Uo(ca.get(s)||null,t,e,n,i,r)),!0}return!1}function Pv(t){var e=Hr(t.target);if(e!==null){var n=hs(e);if(n!==null){if(e=n.tag,e===13){if(e=_v(n),e!==null){t.blockedOn=e,bv(t.priority,function(){Rv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Af(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);xf=i,n.target.dispatchEvent(i),xf=null}else return e=za(n),e!==null&&zd(e),t.blockedOn=n,!1;e.shift()}return!0}function Zh(t,e,n){zl(t)&&n.delete(e)}function ex(){wf=!1,cr!==null&&zl(cr)&&(cr=null),fr!==null&&zl(fr)&&(fr=null),dr!==null&&zl(dr)&&(dr=null),ua.forEach(Zh),ca.forEach(Zh)}function No(t,e){t.blockedOn===e&&(t.blockedOn=null,wf||(wf=!0,bn.unstable_scheduleCallback(bn.unstable_NormalPriority,ex)))}function fa(t){function e(r){return No(r,t)}if(0<nl.length){No(nl[0],t);for(var n=1;n<nl.length;n++){var i=nl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(cr!==null&&No(cr,t),fr!==null&&No(fr,t),dr!==null&&No(dr,t),ua.forEach(e),ca.forEach(e),n=0;n<Ki.length;n++)i=Ki[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ki.length&&(n=Ki[0],n.blockedOn===null);)Pv(n),n.blockedOn===null&&Ki.shift()}var Ys=zi.ReactCurrentBatchConfig,tu=!0;function tx(t,e,n,i){var r=et,s=Ys.transition;Ys.transition=null;try{et=1,Bd(t,e,n,i)}finally{et=r,Ys.transition=s}}function nx(t,e,n,i){var r=et,s=Ys.transition;Ys.transition=null;try{et=4,Bd(t,e,n,i)}finally{et=r,Ys.transition=s}}function Bd(t,e,n,i){if(tu){var r=Af(t,e,n,i);if(r===null)gc(t,e,i,nu,n),Qh(t,i);else if(Jy(r,t,e,n,i))i.stopPropagation();else if(Qh(t,i),e&4&&-1<Zy.indexOf(t)){for(;r!==null;){var s=za(r);if(s!==null&&Av(s),s=Af(t,e,n,i),s===null&&gc(t,e,i,nu,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else gc(t,e,i,null,n)}}var nu=null;function Af(t,e,n,i){if(nu=null,t=Fd(i),t=Hr(t),t!==null)if(e=hs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=_v(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return nu=t,null}function Lv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vy()){case Od:return 1;case Mv:return 4;case Jl:case Wy:return 16;case Ev:return 536870912;default:return 16}default:return 16}}var or=null,Hd=null,Bl=null;function Dv(){if(Bl)return Bl;var t,e=Hd,n=e.length,i,r="value"in or?or.value:or.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Bl=r.slice(t,1<i?1-i:void 0)}function Hl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function il(){return!0}function Jh(){return!1}function Ln(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?il:Jh,this.isPropagationStopped=Jh,this}return gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=il)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=il)},persist:function(){},isPersistent:il}),e}var Ao={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gd=Ln(Ao),ka=gt({},Ao,{view:0,detail:0}),ix=Ln(ka),ac,lc,Io,bu=gt({},ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Io&&(Io&&t.type==="mousemove"?(ac=t.screenX-Io.screenX,lc=t.screenY-Io.screenY):lc=ac=0,Io=t),ac)},movementY:function(t){return"movementY"in t?t.movementY:lc}}),ep=Ln(bu),rx=gt({},bu,{dataTransfer:0}),sx=Ln(rx),ox=gt({},ka,{relatedTarget:0}),uc=Ln(ox),ax=gt({},Ao,{animationName:0,elapsedTime:0,pseudoElement:0}),lx=Ln(ax),ux=gt({},Ao,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cx=Ln(ux),fx=gt({},Ao,{data:0}),tp=Ln(fx),dx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},px={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=px[t])?!!e[t]:!1}function Vd(){return mx}var gx=gt({},ka,{key:function(t){if(t.key){var e=dx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?hx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vd,charCode:function(t){return t.type==="keypress"?Hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),vx=Ln(gx),_x=gt({},bu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),np=Ln(_x),yx=gt({},ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vd}),xx=Ln(yx),Sx=gt({},Ao,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mx=Ln(Sx),Ex=gt({},bu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Tx=Ln(Ex),wx=[9,13,27,32],Wd=Ni&&"CompositionEvent"in window,Zo=null;Ni&&"documentMode"in document&&(Zo=document.documentMode);var Ax=Ni&&"TextEvent"in window&&!Zo,Uv=Ni&&(!Wd||Zo&&8<Zo&&11>=Zo),ip=" ",rp=!1;function Nv(t,e){switch(t){case"keyup":return wx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Iv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Us=!1;function Rx(t,e){switch(t){case"compositionend":return Iv(e);case"keypress":return e.which!==32?null:(rp=!0,ip);case"textInput":return t=e.data,t===ip&&rp?null:t;default:return null}}function Cx(t,e){if(Us)return t==="compositionend"||!Wd&&Nv(t,e)?(t=Dv(),Bl=Hd=or=null,Us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Uv&&e.locale!=="ko"?null:e.data;default:return null}}var bx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!bx[t.type]:e==="textarea"}function Fv(t,e,n,i){hv(i),e=iu(e,"onChange"),0<e.length&&(n=new Gd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Jo=null,da=null;function Px(t){qv(t,0)}function Pu(t){var e=Fs(t);if(ov(e))return t}function Lx(t,e){if(t==="change")return e}var Ov=!1;if(Ni){var cc;if(Ni){var fc="oninput"in document;if(!fc){var op=document.createElement("div");op.setAttribute("oninput","return;"),fc=typeof op.oninput=="function"}cc=fc}else cc=!1;Ov=cc&&(!document.documentMode||9<document.documentMode)}function ap(){Jo&&(Jo.detachEvent("onpropertychange",kv),da=Jo=null)}function kv(t){if(t.propertyName==="value"&&Pu(da)){var e=[];Fv(e,da,t,Fd(t)),vv(Px,e)}}function Dx(t,e,n){t==="focusin"?(ap(),Jo=e,da=n,Jo.attachEvent("onpropertychange",kv)):t==="focusout"&&ap()}function Ux(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Pu(da)}function Nx(t,e){if(t==="click")return Pu(e)}function Ix(t,e){if(t==="input"||t==="change")return Pu(e)}function Fx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var si=typeof Object.is=="function"?Object.is:Fx;function ha(t,e){if(si(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!lf.call(e,r)||!si(t[r],e[r]))return!1}return!0}function lp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function up(t,e){var n=lp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lp(n)}}function zv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?zv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Bv(){for(var t=window,e=Kl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Kl(t.document)}return e}function Xd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ox(t){var e=Bv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&zv(n.ownerDocument.documentElement,n)){if(i!==null&&Xd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=up(n,s);var o=up(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var kx=Ni&&"documentMode"in document&&11>=document.documentMode,Ns=null,Rf=null,ea=null,Cf=!1;function cp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cf||Ns==null||Ns!==Kl(i)||(i=Ns,"selectionStart"in i&&Xd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ea&&ha(ea,i)||(ea=i,i=iu(Rf,"onSelect"),0<i.length&&(e=new Gd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ns)))}function rl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Is={animationend:rl("Animation","AnimationEnd"),animationiteration:rl("Animation","AnimationIteration"),animationstart:rl("Animation","AnimationStart"),transitionend:rl("Transition","TransitionEnd")},dc={},Hv={};Ni&&(Hv=document.createElement("div").style,"AnimationEvent"in window||(delete Is.animationend.animation,delete Is.animationiteration.animation,delete Is.animationstart.animation),"TransitionEvent"in window||delete Is.transitionend.transition);function Lu(t){if(dc[t])return dc[t];if(!Is[t])return t;var e=Is[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Hv)return dc[t]=e[n];return t}var Gv=Lu("animationend"),Vv=Lu("animationiteration"),Wv=Lu("animationstart"),Xv=Lu("transitionend"),jv=new Map,fp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(t,e){jv.set(t,e),ds(e,[t])}for(var hc=0;hc<fp.length;hc++){var pc=fp[hc],zx=pc.toLowerCase(),Bx=pc[0].toUpperCase()+pc.slice(1);wr(zx,"on"+Bx)}wr(Gv,"onAnimationEnd");wr(Vv,"onAnimationIteration");wr(Wv,"onAnimationStart");wr("dblclick","onDoubleClick");wr("focusin","onFocus");wr("focusout","onBlur");wr(Xv,"onTransitionEnd");ho("onMouseEnter",["mouseout","mouseover"]);ho("onMouseLeave",["mouseout","mouseover"]);ho("onPointerEnter",["pointerout","pointerover"]);ho("onPointerLeave",["pointerout","pointerover"]);ds("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ds("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ds("onBeforeInput",["compositionend","keypress","textInput","paste"]);ds("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ds("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ds("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hx=new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));function dp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,zy(i,e,void 0,t),t.currentTarget=null}function qv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;dp(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;dp(r,a,u),s=l}}}if(Zl)throw t=Ef,Zl=!1,Ef=null,t}function lt(t,e){var n=e[Uf];n===void 0&&(n=e[Uf]=new Set);var i=t+"__bubble";n.has(i)||(Yv(e,t,2,!1),n.add(i))}function mc(t,e,n){var i=0;e&&(i|=4),Yv(n,t,i,e)}var sl="_reactListening"+Math.random().toString(36).slice(2);function pa(t){if(!t[sl]){t[sl]=!0,tv.forEach(function(n){n!=="selectionchange"&&(Hx.has(n)||mc(n,!1,t),mc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[sl]||(e[sl]=!0,mc("selectionchange",!1,e))}}function Yv(t,e,n,i){switch(Lv(e)){case 1:var r=tx;break;case 4:r=nx;break;default:r=Bd}n=r.bind(null,e,n,t),r=void 0,!Mf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function gc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Hr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}vv(function(){var u=s,f=Fd(n),d=[];e:{var h=jv.get(t);if(h!==void 0){var p=Gd,y=t;switch(t){case"keypress":if(Hl(n)===0)break e;case"keydown":case"keyup":p=vx;break;case"focusin":y="focus",p=uc;break;case"focusout":y="blur",p=uc;break;case"beforeblur":case"afterblur":p=uc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=ep;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=sx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=xx;break;case Gv:case Vv:case Wv:p=lx;break;case Xv:p=Mx;break;case"scroll":p=ix;break;case"wheel":p=Tx;break;case"copy":case"cut":case"paste":p=cx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=np}var _=(e&4)!==0,m=!_&&t==="scroll",c=_?h!==null?h+"Capture":null:h;_=[];for(var v=u,g;v!==null;){g=v;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,c!==null&&(x=la(v,c),x!=null&&_.push(ma(v,x,g)))),m)break;v=v.return}0<_.length&&(h=new p(h,y,null,n,f),d.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==xf&&(y=n.relatedTarget||n.fromElement)&&(Hr(y)||y[Ii]))break e;if((p||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=u,y=y?Hr(y):null,y!==null&&(m=hs(y),y!==m||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=u),p!==y)){if(_=ep,x="onMouseLeave",c="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(_=np,x="onPointerLeave",c="onPointerEnter",v="pointer"),m=p==null?h:Fs(p),g=y==null?h:Fs(y),h=new _(x,v+"leave",p,n,f),h.target=m,h.relatedTarget=g,x=null,Hr(f)===u&&(_=new _(c,v+"enter",y,n,f),_.target=g,_.relatedTarget=m,x=_),m=x,p&&y)t:{for(_=p,c=y,v=0,g=_;g;g=ps(g))v++;for(g=0,x=c;x;x=ps(x))g++;for(;0<v-g;)_=ps(_),v--;for(;0<g-v;)c=ps(c),g--;for(;v--;){if(_===c||c!==null&&_===c.alternate)break t;_=ps(_),c=ps(c)}_=null}else _=null;p!==null&&hp(d,h,p,_,!1),y!==null&&m!==null&&hp(d,m,y,_,!0)}}e:{if(h=u?Fs(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var C=Lx;else if(sp(h))if(Ov)C=Ix;else{C=Ux;var w=Dx}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=Nx);if(C&&(C=C(t,u))){Fv(d,C,n,f);break e}w&&w(t,h,u),t==="focusout"&&(w=h._wrapperState)&&w.controlled&&h.type==="number"&&mf(h,"number",h.value)}switch(w=u?Fs(u):window,t){case"focusin":(sp(w)||w.contentEditable==="true")&&(Ns=w,Rf=u,ea=null);break;case"focusout":ea=Rf=Ns=null;break;case"mousedown":Cf=!0;break;case"contextmenu":case"mouseup":case"dragend":Cf=!1,cp(d,n,f);break;case"selectionchange":if(kx)break;case"keydown":case"keyup":cp(d,n,f)}var R;if(Wd)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Us?Nv(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(Uv&&n.locale!=="ko"&&(Us||D!=="onCompositionStart"?D==="onCompositionEnd"&&Us&&(R=Dv()):(or=f,Hd="value"in or?or.value:or.textContent,Us=!0)),w=iu(u,D),0<w.length&&(D=new tp(D,t,null,n,f),d.push({event:D,listeners:w}),R?D.data=R:(R=Iv(n),R!==null&&(D.data=R)))),(R=Ax?Rx(t,n):Cx(t,n))&&(u=iu(u,"onBeforeInput"),0<u.length&&(f=new tp("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=R))}qv(d,e)})}function ma(t,e,n){return{instance:t,listener:e,currentTarget:n}}function iu(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=la(t,n),s!=null&&i.unshift(ma(t,s,r)),s=la(t,e),s!=null&&i.push(ma(t,s,r))),t=t.return}return i}function ps(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function hp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=la(n,s),l!=null&&o.unshift(ma(n,l,a))):r||(l=la(n,s),l!=null&&o.push(ma(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Gx=/\r\n?/g,Vx=/\u0000|\uFFFD/g;function pp(t){return(typeof t=="string"?t:""+t).replace(Gx,`
`).replace(Vx,"")}function ol(t,e,n){if(e=pp(e),pp(t)!==e&&n)throw Error(te(425))}function ru(){}var bf=null,Pf=null;function Lf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Df=typeof setTimeout=="function"?setTimeout:void 0,Wx=typeof clearTimeout=="function"?clearTimeout:void 0,mp=typeof Promise=="function"?Promise:void 0,Xx=typeof queueMicrotask=="function"?queueMicrotask:typeof mp<"u"?function(t){return mp.resolve(null).then(t).catch(jx)}:Df;function jx(t){setTimeout(function(){throw t})}function vc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),fa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);fa(e)}function hr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function gp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ro=Math.random().toString(36).slice(2),hi="__reactFiber$"+Ro,ga="__reactProps$"+Ro,Ii="__reactContainer$"+Ro,Uf="__reactEvents$"+Ro,qx="__reactListeners$"+Ro,Yx="__reactHandles$"+Ro;function Hr(t){var e=t[hi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ii]||n[hi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=gp(t);t!==null;){if(n=t[hi])return n;t=gp(t)}return e}t=n,n=t.parentNode}return null}function za(t){return t=t[hi]||t[Ii],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function Du(t){return t[ga]||null}var Nf=[],Os=-1;function Ar(t){return{current:t}}function ct(t){0>Os||(t.current=Nf[Os],Nf[Os]=null,Os--)}function at(t,e){Os++,Nf[Os]=t.current,t.current=e}var Er={},$t=Ar(Er),pn=Ar(!1),ss=Er;function po(t,e){var n=t.type.contextTypes;if(!n)return Er;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function mn(t){return t=t.childContextTypes,t!=null}function su(){ct(pn),ct($t)}function vp(t,e,n){if($t.current!==Er)throw Error(te(168));at($t,e),at(pn,n)}function $v(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,Dy(t)||"Unknown",r));return gt({},n,i)}function ou(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Er,ss=$t.current,at($t,t),at(pn,pn.current),!0}function _p(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=$v(t,e,ss),i.__reactInternalMemoizedMergedChildContext=t,ct(pn),ct($t),at($t,t)):ct(pn),at(pn,n)}var Ri=null,Uu=!1,_c=!1;function Kv(t){Ri===null?Ri=[t]:Ri.push(t)}function $x(t){Uu=!0,Kv(t)}function Rr(){if(!_c&&Ri!==null){_c=!0;var t=0,e=et;try{var n=Ri;for(et=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ri=null,Uu=!1}catch(r){throw Ri!==null&&(Ri=Ri.slice(t+1)),Sv(Od,Rr),r}finally{et=e,_c=!1}}return null}var ks=[],zs=0,au=null,lu=0,In=[],Fn=0,os=null,Pi=1,Li="";function Nr(t,e){ks[zs++]=lu,ks[zs++]=au,au=t,lu=e}function Qv(t,e,n){In[Fn++]=Pi,In[Fn++]=Li,In[Fn++]=os,os=t;var i=Pi;t=Li;var r=32-ii(i)-1;i&=~(1<<r),n+=1;var s=32-ii(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Pi=1<<32-ii(e)+r|n<<r|i,Li=s+t}else Pi=1<<s|n<<r|i,Li=t}function jd(t){t.return!==null&&(Nr(t,1),Qv(t,1,0))}function qd(t){for(;t===au;)au=ks[--zs],ks[zs]=null,lu=ks[--zs],ks[zs]=null;for(;t===os;)os=In[--Fn],In[Fn]=null,Li=In[--Fn],In[Fn]=null,Pi=In[--Fn],In[Fn]=null}var Rn=null,An=null,ft=!1,Jn=null;function Zv(t,e){var n=Bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function yp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Rn=t,An=hr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Rn=t,An=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=os!==null?{id:Pi,overflow:Li}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Rn=t,An=null,!0):!1;default:return!1}}function If(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ff(t){if(ft){var e=An;if(e){var n=e;if(!yp(t,e)){if(If(t))throw Error(te(418));e=hr(n.nextSibling);var i=Rn;e&&yp(t,e)?Zv(i,n):(t.flags=t.flags&-4097|2,ft=!1,Rn=t)}}else{if(If(t))throw Error(te(418));t.flags=t.flags&-4097|2,ft=!1,Rn=t}}}function xp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Rn=t}function al(t){if(t!==Rn)return!1;if(!ft)return xp(t),ft=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Lf(t.type,t.memoizedProps)),e&&(e=An)){if(If(t))throw Jv(),Error(te(418));for(;e;)Zv(t,e),e=hr(e.nextSibling)}if(xp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){An=hr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}An=null}}else An=Rn?hr(t.stateNode.nextSibling):null;return!0}function Jv(){for(var t=An;t;)t=hr(t.nextSibling)}function mo(){An=Rn=null,ft=!1}function Yd(t){Jn===null?Jn=[t]:Jn.push(t)}var Kx=zi.ReactCurrentBatchConfig;function Fo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function ll(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Sp(t){var e=t._init;return e(t._payload)}function e_(t){function e(c,v){if(t){var g=c.deletions;g===null?(c.deletions=[v],c.flags|=16):g.push(v)}}function n(c,v){if(!t)return null;for(;v!==null;)e(c,v),v=v.sibling;return null}function i(c,v){for(c=new Map;v!==null;)v.key!==null?c.set(v.key,v):c.set(v.index,v),v=v.sibling;return c}function r(c,v){return c=vr(c,v),c.index=0,c.sibling=null,c}function s(c,v,g){return c.index=g,t?(g=c.alternate,g!==null?(g=g.index,g<v?(c.flags|=2,v):g):(c.flags|=2,v)):(c.flags|=1048576,v)}function o(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,v,g,x){return v===null||v.tag!==6?(v=wc(g,c.mode,x),v.return=c,v):(v=r(v,g),v.return=c,v)}function l(c,v,g,x){var C=g.type;return C===Ds?f(c,v,g.props.children,x,g.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===qi&&Sp(C)===v.type)?(x=r(v,g.props),x.ref=Fo(c,v,g),x.return=c,x):(x=Yl(g.type,g.key,g.props,null,c.mode,x),x.ref=Fo(c,v,g),x.return=c,x)}function u(c,v,g,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=Ac(g,c.mode,x),v.return=c,v):(v=r(v,g.children||[]),v.return=c,v)}function f(c,v,g,x,C){return v===null||v.tag!==7?(v=ts(g,c.mode,x,C),v.return=c,v):(v=r(v,g),v.return=c,v)}function d(c,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=wc(""+v,c.mode,g),v.return=c,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Qa:return g=Yl(v.type,v.key,v.props,null,c.mode,g),g.ref=Fo(c,null,v),g.return=c,g;case Ls:return v=Ac(v,c.mode,g),v.return=c,v;case qi:var x=v._init;return d(c,x(v._payload),g)}if(Xo(v)||Lo(v))return v=ts(v,c.mode,g,null),v.return=c,v;ll(c,v)}return null}function h(c,v,g,x){var C=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:a(c,v,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Qa:return g.key===C?l(c,v,g,x):null;case Ls:return g.key===C?u(c,v,g,x):null;case qi:return C=g._init,h(c,v,C(g._payload),x)}if(Xo(g)||Lo(g))return C!==null?null:f(c,v,g,x,null);ll(c,g)}return null}function p(c,v,g,x,C){if(typeof x=="string"&&x!==""||typeof x=="number")return c=c.get(g)||null,a(v,c,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Qa:return c=c.get(x.key===null?g:x.key)||null,l(v,c,x,C);case Ls:return c=c.get(x.key===null?g:x.key)||null,u(v,c,x,C);case qi:var w=x._init;return p(c,v,g,w(x._payload),C)}if(Xo(x)||Lo(x))return c=c.get(g)||null,f(v,c,x,C,null);ll(v,x)}return null}function y(c,v,g,x){for(var C=null,w=null,R=v,D=v=0,M=null;R!==null&&D<g.length;D++){R.index>D?(M=R,R=null):M=R.sibling;var E=h(c,R,g[D],x);if(E===null){R===null&&(R=M);break}t&&R&&E.alternate===null&&e(c,R),v=s(E,v,D),w===null?C=E:w.sibling=E,w=E,R=M}if(D===g.length)return n(c,R),ft&&Nr(c,D),C;if(R===null){for(;D<g.length;D++)R=d(c,g[D],x),R!==null&&(v=s(R,v,D),w===null?C=R:w.sibling=R,w=R);return ft&&Nr(c,D),C}for(R=i(c,R);D<g.length;D++)M=p(R,c,D,g[D],x),M!==null&&(t&&M.alternate!==null&&R.delete(M.key===null?D:M.key),v=s(M,v,D),w===null?C=M:w.sibling=M,w=M);return t&&R.forEach(function(W){return e(c,W)}),ft&&Nr(c,D),C}function _(c,v,g,x){var C=Lo(g);if(typeof C!="function")throw Error(te(150));if(g=C.call(g),g==null)throw Error(te(151));for(var w=C=null,R=v,D=v=0,M=null,E=g.next();R!==null&&!E.done;D++,E=g.next()){R.index>D?(M=R,R=null):M=R.sibling;var W=h(c,R,E.value,x);if(W===null){R===null&&(R=M);break}t&&R&&W.alternate===null&&e(c,R),v=s(W,v,D),w===null?C=W:w.sibling=W,w=W,R=M}if(E.done)return n(c,R),ft&&Nr(c,D),C;if(R===null){for(;!E.done;D++,E=g.next())E=d(c,E.value,x),E!==null&&(v=s(E,v,D),w===null?C=E:w.sibling=E,w=E);return ft&&Nr(c,D),C}for(R=i(c,R);!E.done;D++,E=g.next())E=p(R,c,D,E.value,x),E!==null&&(t&&E.alternate!==null&&R.delete(E.key===null?D:E.key),v=s(E,v,D),w===null?C=E:w.sibling=E,w=E);return t&&R.forEach(function(Y){return e(c,Y)}),ft&&Nr(c,D),C}function m(c,v,g,x){if(typeof g=="object"&&g!==null&&g.type===Ds&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Qa:e:{for(var C=g.key,w=v;w!==null;){if(w.key===C){if(C=g.type,C===Ds){if(w.tag===7){n(c,w.sibling),v=r(w,g.props.children),v.return=c,c=v;break e}}else if(w.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===qi&&Sp(C)===w.type){n(c,w.sibling),v=r(w,g.props),v.ref=Fo(c,w,g),v.return=c,c=v;break e}n(c,w);break}else e(c,w);w=w.sibling}g.type===Ds?(v=ts(g.props.children,c.mode,x,g.key),v.return=c,c=v):(x=Yl(g.type,g.key,g.props,null,c.mode,x),x.ref=Fo(c,v,g),x.return=c,c=x)}return o(c);case Ls:e:{for(w=g.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(c,v.sibling),v=r(v,g.children||[]),v.return=c,c=v;break e}else{n(c,v);break}else e(c,v);v=v.sibling}v=Ac(g,c.mode,x),v.return=c,c=v}return o(c);case qi:return w=g._init,m(c,v,w(g._payload),x)}if(Xo(g))return y(c,v,g,x);if(Lo(g))return _(c,v,g,x);ll(c,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(c,v.sibling),v=r(v,g),v.return=c,c=v):(n(c,v),v=wc(g,c.mode,x),v.return=c,c=v),o(c)):n(c,v)}return m}var go=e_(!0),t_=e_(!1),uu=Ar(null),cu=null,Bs=null,$d=null;function Kd(){$d=Bs=cu=null}function Qd(t){var e=uu.current;ct(uu),t._currentValue=e}function Of(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function $s(t,e){cu=t,$d=Bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(hn=!0),t.firstContext=null)}function Gn(t){var e=t._currentValue;if($d!==t)if(t={context:t,memoizedValue:e,next:null},Bs===null){if(cu===null)throw Error(te(308));Bs=t,cu.dependencies={lanes:0,firstContext:t}}else Bs=Bs.next=t;return e}var Gr=null;function Zd(t){Gr===null?Gr=[t]:Gr.push(t)}function n_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Zd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Fi(t,i)}function Fi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Yi=!1;function Jd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function i_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ui(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function pr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,$e&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Fi(t,n)}return r=i.interleaved,r===null?(e.next=e,Zd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Fi(t,n)}function Gl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,kd(t,n)}}function Mp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function fu(t,e,n,i){var r=t.updateQueue;Yi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,_=a;switch(h=e,p=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){d=y.call(p,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,h=typeof y=="function"?y.call(p,d,h):y,h==null)break e;d=gt({},d,h);break e;case 2:Yi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=p,l=d):f=f.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ls|=o,t.lanes=o,t.memoizedState=d}}function Ep(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var Ba={},gi=Ar(Ba),va=Ar(Ba),_a=Ar(Ba);function Vr(t){if(t===Ba)throw Error(te(174));return t}function eh(t,e){switch(at(_a,e),at(va,t),at(gi,Ba),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:vf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=vf(e,t)}ct(gi),at(gi,e)}function vo(){ct(gi),ct(va),ct(_a)}function r_(t){Vr(_a.current);var e=Vr(gi.current),n=vf(e,t.type);e!==n&&(at(va,t),at(gi,n))}function th(t){va.current===t&&(ct(gi),ct(va))}var pt=Ar(0);function du(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var yc=[];function nh(){for(var t=0;t<yc.length;t++)yc[t]._workInProgressVersionPrimary=null;yc.length=0}var Vl=zi.ReactCurrentDispatcher,xc=zi.ReactCurrentBatchConfig,as=0,mt=null,wt=null,Ut=null,hu=!1,ta=!1,ya=0,Qx=0;function Vt(){throw Error(te(321))}function ih(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!si(t[n],e[n]))return!1;return!0}function rh(t,e,n,i,r,s){if(as=s,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Vl.current=t===null||t.memoizedState===null?tS:nS,t=n(i,r),ta){s=0;do{if(ta=!1,ya=0,25<=s)throw Error(te(301));s+=1,Ut=wt=null,e.updateQueue=null,Vl.current=iS,t=n(i,r)}while(ta)}if(Vl.current=pu,e=wt!==null&&wt.next!==null,as=0,Ut=wt=mt=null,hu=!1,e)throw Error(te(300));return t}function sh(){var t=ya!==0;return ya=0,t}function li(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?mt.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function Vn(){if(wt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=Ut===null?mt.memoizedState:Ut.next;if(e!==null)Ut=e,wt=t;else{if(t===null)throw Error(te(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Ut===null?mt.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function xa(t,e){return typeof e=="function"?e(t):e}function Sc(t){var e=Vn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=wt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((as&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,mt.lanes|=f,ls|=f}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,si(i,e.memoizedState)||(hn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,mt.lanes|=s,ls|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Mc(t){var e=Vn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);si(s,e.memoizedState)||(hn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function s_(){}function o_(t,e){var n=mt,i=Vn(),r=e(),s=!si(i.memoizedState,r);if(s&&(i.memoizedState=r,hn=!0),i=i.queue,oh(u_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ut!==null&&Ut.memoizedState.tag&1){if(n.flags|=2048,Sa(9,l_.bind(null,n,i,r,e),void 0,null),Nt===null)throw Error(te(349));as&30||a_(n,e,r)}return r}function a_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function l_(t,e,n,i){e.value=n,e.getSnapshot=i,c_(e)&&f_(t)}function u_(t,e,n){return n(function(){c_(e)&&f_(t)})}function c_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!si(t,n)}catch{return!0}}function f_(t){var e=Fi(t,1);e!==null&&ri(e,t,1,-1)}function Tp(t){var e=li();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:t},e.queue=t,t=t.dispatch=eS.bind(null,mt,t),[e.memoizedState,t]}function Sa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function d_(){return Vn().memoizedState}function Wl(t,e,n,i){var r=li();mt.flags|=t,r.memoizedState=Sa(1|e,n,void 0,i===void 0?null:i)}function Nu(t,e,n,i){var r=Vn();i=i===void 0?null:i;var s=void 0;if(wt!==null){var o=wt.memoizedState;if(s=o.destroy,i!==null&&ih(i,o.deps)){r.memoizedState=Sa(e,n,s,i);return}}mt.flags|=t,r.memoizedState=Sa(1|e,n,s,i)}function wp(t,e){return Wl(8390656,8,t,e)}function oh(t,e){return Nu(2048,8,t,e)}function h_(t,e){return Nu(4,2,t,e)}function p_(t,e){return Nu(4,4,t,e)}function m_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function g_(t,e,n){return n=n!=null?n.concat([t]):null,Nu(4,4,m_.bind(null,e,t),n)}function ah(){}function v_(t,e){var n=Vn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ih(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function __(t,e){var n=Vn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ih(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function y_(t,e,n){return as&21?(si(n,e)||(n=Tv(),mt.lanes|=n,ls|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,hn=!0),t.memoizedState=n)}function Zx(t,e){var n=et;et=n!==0&&4>n?n:4,t(!0);var i=xc.transition;xc.transition={};try{t(!1),e()}finally{et=n,xc.transition=i}}function x_(){return Vn().memoizedState}function Jx(t,e,n){var i=gr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},S_(t))M_(e,n);else if(n=n_(t,e,n,i),n!==null){var r=rn();ri(n,t,i,r),E_(n,e,i)}}function eS(t,e,n){var i=gr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(S_(t))M_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,si(a,o)){var l=e.interleaved;l===null?(r.next=r,Zd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=n_(t,e,r,i),n!==null&&(r=rn(),ri(n,t,i,r),E_(n,e,i))}}function S_(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function M_(t,e){ta=hu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function E_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,kd(t,n)}}var pu={readContext:Gn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},tS={readContext:Gn,useCallback:function(t,e){return li().memoizedState=[t,e===void 0?null:e],t},useContext:Gn,useEffect:wp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Wl(4194308,4,m_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Wl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Wl(4,2,t,e)},useMemo:function(t,e){var n=li();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=li();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Jx.bind(null,mt,t),[i.memoizedState,t]},useRef:function(t){var e=li();return t={current:t},e.memoizedState=t},useState:Tp,useDebugValue:ah,useDeferredValue:function(t){return li().memoizedState=t},useTransition:function(){var t=Tp(!1),e=t[0];return t=Zx.bind(null,t[1]),li().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=mt,r=li();if(ft){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),Nt===null)throw Error(te(349));as&30||a_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,wp(u_.bind(null,i,s,t),[t]),i.flags|=2048,Sa(9,l_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=li(),e=Nt.identifierPrefix;if(ft){var n=Li,i=Pi;n=(i&~(1<<32-ii(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ya++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Qx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},nS={readContext:Gn,useCallback:v_,useContext:Gn,useEffect:oh,useImperativeHandle:g_,useInsertionEffect:h_,useLayoutEffect:p_,useMemo:__,useReducer:Sc,useRef:d_,useState:function(){return Sc(xa)},useDebugValue:ah,useDeferredValue:function(t){var e=Vn();return y_(e,wt.memoizedState,t)},useTransition:function(){var t=Sc(xa)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:s_,useSyncExternalStore:o_,useId:x_,unstable_isNewReconciler:!1},iS={readContext:Gn,useCallback:v_,useContext:Gn,useEffect:oh,useImperativeHandle:g_,useInsertionEffect:h_,useLayoutEffect:p_,useMemo:__,useReducer:Mc,useRef:d_,useState:function(){return Mc(xa)},useDebugValue:ah,useDeferredValue:function(t){var e=Vn();return wt===null?e.memoizedState=t:y_(e,wt.memoizedState,t)},useTransition:function(){var t=Mc(xa)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:s_,useSyncExternalStore:o_,useId:x_,unstable_isNewReconciler:!1};function Kn(t,e){if(t&&t.defaultProps){e=gt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function kf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:gt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Iu={isMounted:function(t){return(t=t._reactInternals)?hs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=rn(),r=gr(t),s=Ui(i,r);s.payload=e,n!=null&&(s.callback=n),e=pr(t,s,r),e!==null&&(ri(e,t,r,i),Gl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=rn(),r=gr(t),s=Ui(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=pr(t,s,r),e!==null&&(ri(e,t,r,i),Gl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rn(),i=gr(t),r=Ui(n,i);r.tag=2,e!=null&&(r.callback=e),e=pr(t,r,i),e!==null&&(ri(e,t,i,n),Gl(e,t,i))}};function Ap(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ha(n,i)||!ha(r,s):!0}function T_(t,e,n){var i=!1,r=Er,s=e.contextType;return typeof s=="object"&&s!==null?s=Gn(s):(r=mn(e)?ss:$t.current,i=e.contextTypes,s=(i=i!=null)?po(t,r):Er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Iu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Rp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Iu.enqueueReplaceState(e,e.state,null)}function zf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Jd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Gn(s):(s=mn(e)?ss:$t.current,r.context=po(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(kf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Iu.enqueueReplaceState(r,r.state,null),fu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function _o(t,e){try{var n="",i=e;do n+=Ly(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Ec(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Bf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var rS=typeof WeakMap=="function"?WeakMap:Map;function w_(t,e,n){n=Ui(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){gu||(gu=!0,Kf=i),Bf(t,e)},n}function A_(t,e,n){n=Ui(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Bf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Bf(t,e),typeof i!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Cp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new rS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=_S.bind(null,t,e,n),e.then(t,t))}function bp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Pp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ui(-1,1),e.tag=2,pr(n,e,1))),n.lanes|=1),t)}var sS=zi.ReactCurrentOwner,hn=!1;function tn(t,e,n,i){e.child=t===null?t_(e,null,n,i):go(e,t.child,n,i)}function Lp(t,e,n,i,r){n=n.render;var s=e.ref;return $s(e,r),i=rh(t,e,n,i,s,r),n=sh(),t!==null&&!hn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Oi(t,e,r)):(ft&&n&&jd(e),e.flags|=1,tn(t,e,i,r),e.child)}function Dp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!mh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,R_(t,e,s,i,r)):(t=Yl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ha,n(o,i)&&t.ref===e.ref)return Oi(t,e,r)}return e.flags|=1,t=vr(s,i),t.ref=e.ref,t.return=e,e.child=t}function R_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ha(s,i)&&t.ref===e.ref)if(hn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(hn=!0);else return e.lanes=t.lanes,Oi(t,e,r)}return Hf(t,e,n,i,r)}function C_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},at(Gs,En),En|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,at(Gs,En),En|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,at(Gs,En),En|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,at(Gs,En),En|=i;return tn(t,e,r,n),e.child}function b_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Hf(t,e,n,i,r){var s=mn(n)?ss:$t.current;return s=po(e,s),$s(e,r),n=rh(t,e,n,i,s,r),i=sh(),t!==null&&!hn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Oi(t,e,r)):(ft&&i&&jd(e),e.flags|=1,tn(t,e,n,r),e.child)}function Up(t,e,n,i,r){if(mn(n)){var s=!0;ou(e)}else s=!1;if($s(e,r),e.stateNode===null)Xl(t,e),T_(e,n,i),zf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Gn(u):(u=mn(n)?ss:$t.current,u=po(e,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Rp(e,o,i,u),Yi=!1;var h=e.memoizedState;o.state=h,fu(e,i,o,r),l=e.memoizedState,a!==i||h!==l||pn.current||Yi?(typeof f=="function"&&(kf(e,n,f,i),l=e.memoizedState),(a=Yi||Ap(e,n,a,i,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,i_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Kn(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Gn(l):(l=mn(n)?ss:$t.current,l=po(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Rp(e,o,i,l),Yi=!1,h=e.memoizedState,o.state=h,fu(e,i,o,r);var y=e.memoizedState;a!==d||h!==y||pn.current||Yi?(typeof p=="function"&&(kf(e,n,p,i),y=e.memoizedState),(u=Yi||Ap(e,n,u,i,h,y,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),o.props=i,o.state=y,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Gf(t,e,n,i,s,r)}function Gf(t,e,n,i,r,s){b_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&_p(e,n,!1),Oi(t,e,s);i=e.stateNode,sS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=go(e,t.child,null,s),e.child=go(e,null,a,s)):tn(t,e,a,s),e.memoizedState=i.state,r&&_p(e,n,!0),e.child}function P_(t){var e=t.stateNode;e.pendingContext?vp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&vp(t,e.context,!1),eh(t,e.containerInfo)}function Np(t,e,n,i,r){return mo(),Yd(r),e.flags|=256,tn(t,e,n,i),e.child}var Vf={dehydrated:null,treeContext:null,retryLane:0};function Wf(t){return{baseLanes:t,cachePool:null,transitions:null}}function L_(t,e,n){var i=e.pendingProps,r=pt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),at(pt,r&1),t===null)return Ff(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ku(o,i,0,null),t=ts(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Wf(n),e.memoizedState=Vf,t):lh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return oS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=vr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=vr(a,s):(s=ts(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Wf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Vf,i}return s=t.child,t=s.sibling,i=vr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function lh(t,e){return e=ku({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ul(t,e,n,i){return i!==null&&Yd(i),go(e,t.child,null,n),t=lh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function oS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Ec(Error(te(422))),ul(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ku({mode:"visible",children:i.children},r,0,null),s=ts(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&go(e,t.child,null,o),e.child.memoizedState=Wf(o),e.memoizedState=Vf,s);if(!(e.mode&1))return ul(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=Ec(s,i,void 0),ul(t,e,o,i)}if(a=(o&t.childLanes)!==0,hn||a){if(i=Nt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Fi(t,r),ri(i,t,r,-1))}return ph(),i=Ec(Error(te(421))),ul(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=yS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,An=hr(r.nextSibling),Rn=e,ft=!0,Jn=null,t!==null&&(In[Fn++]=Pi,In[Fn++]=Li,In[Fn++]=os,Pi=t.id,Li=t.overflow,os=e),e=lh(e,i.children),e.flags|=4096,e)}function Ip(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Of(t.return,e,n)}function Tc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function D_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(tn(t,e,i.children,n),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ip(t,n,e);else if(t.tag===19)Ip(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(at(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&du(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Tc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&du(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Tc(e,!0,n,null,s);break;case"together":Tc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Xl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Oi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ls|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=vr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=vr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function aS(t,e,n){switch(e.tag){case 3:P_(e),mo();break;case 5:r_(e);break;case 1:mn(e.type)&&ou(e);break;case 4:eh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;at(uu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(at(pt,pt.current&1),e.flags|=128,null):n&e.child.childLanes?L_(t,e,n):(at(pt,pt.current&1),t=Oi(t,e,n),t!==null?t.sibling:null);at(pt,pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return D_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),at(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,C_(t,e,n)}return Oi(t,e,n)}var U_,Xf,N_,I_;U_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xf=function(){};N_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Vr(gi.current);var s=null;switch(n){case"input":r=hf(t,r),i=hf(t,i),s=[];break;case"select":r=gt({},r,{value:void 0}),i=gt({},i,{value:void 0}),s=[];break;case"textarea":r=gf(t,r),i=gf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ru)}_f(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(oa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(oa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&lt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};I_=function(t,e,n,i){n!==i&&(e.flags|=4)};function Oo(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function lS(t,e,n){var i=e.pendingProps;switch(qd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(e),null;case 1:return mn(e.type)&&su(),Wt(e),null;case 3:return i=e.stateNode,vo(),ct(pn),ct($t),nh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(al(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Jn!==null&&(Jf(Jn),Jn=null))),Xf(t,e),Wt(e),null;case 5:th(e);var r=Vr(_a.current);if(n=e.type,t!==null&&e.stateNode!=null)N_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Wt(e),null}if(t=Vr(gi.current),al(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[hi]=e,i[ga]=s,t=(e.mode&1)!==0,n){case"dialog":lt("cancel",i),lt("close",i);break;case"iframe":case"object":case"embed":lt("load",i);break;case"video":case"audio":for(r=0;r<qo.length;r++)lt(qo[r],i);break;case"source":lt("error",i);break;case"img":case"image":case"link":lt("error",i),lt("load",i);break;case"details":lt("toggle",i);break;case"input":Wh(i,s),lt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},lt("invalid",i);break;case"textarea":jh(i,s),lt("invalid",i)}_f(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ol(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ol(i.textContent,a,t),r=["children",""+a]):oa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&lt("scroll",i)}switch(n){case"input":Za(i),Xh(i,s,!0);break;case"textarea":Za(i),qh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ru)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=uv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[hi]=e,t[ga]=i,U_(t,e,!1,!1),e.stateNode=t;e:{switch(o=yf(n,i),n){case"dialog":lt("cancel",t),lt("close",t),r=i;break;case"iframe":case"object":case"embed":lt("load",t),r=i;break;case"video":case"audio":for(r=0;r<qo.length;r++)lt(qo[r],t);r=i;break;case"source":lt("error",t),r=i;break;case"img":case"image":case"link":lt("error",t),lt("load",t),r=i;break;case"details":lt("toggle",t),r=i;break;case"input":Wh(t,i),r=hf(t,i),lt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=gt({},i,{value:void 0}),lt("invalid",t);break;case"textarea":jh(t,i),r=gf(t,i),lt("invalid",t);break;default:r=i}_f(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?dv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&cv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&aa(t,l):typeof l=="number"&&aa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(oa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&lt("scroll",t):l!=null&&Dd(t,s,l,o))}switch(n){case"input":Za(t),Xh(t,i,!1);break;case"textarea":Za(t),qh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Mr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Xs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Xs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ru)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Wt(e),null;case 6:if(t&&e.stateNode!=null)I_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=Vr(_a.current),Vr(gi.current),al(e)){if(i=e.stateNode,n=e.memoizedProps,i[hi]=e,(s=i.nodeValue!==n)&&(t=Rn,t!==null))switch(t.tag){case 3:ol(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ol(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[hi]=e,e.stateNode=i}return Wt(e),null;case 13:if(ct(pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&An!==null&&e.mode&1&&!(e.flags&128))Jv(),mo(),e.flags|=98560,s=!1;else if(s=al(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[hi]=e}else mo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Wt(e),s=!1}else Jn!==null&&(Jf(Jn),Jn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||pt.current&1?At===0&&(At=3):ph())),e.updateQueue!==null&&(e.flags|=4),Wt(e),null);case 4:return vo(),Xf(t,e),t===null&&pa(e.stateNode.containerInfo),Wt(e),null;case 10:return Qd(e.type._context),Wt(e),null;case 17:return mn(e.type)&&su(),Wt(e),null;case 19:if(ct(pt),s=e.memoizedState,s===null)return Wt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Oo(s,!1);else{if(At!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=du(t),o!==null){for(e.flags|=128,Oo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return at(pt,pt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Mt()>yo&&(e.flags|=128,i=!0,Oo(s,!1),e.lanes=4194304)}else{if(!i)if(t=du(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Oo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ft)return Wt(e),null}else 2*Mt()-s.renderingStartTime>yo&&n!==1073741824&&(e.flags|=128,i=!0,Oo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Mt(),e.sibling=null,n=pt.current,at(pt,i?n&1|2:n&1),e):(Wt(e),null);case 22:case 23:return hh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?En&1073741824&&(Wt(e),e.subtreeFlags&6&&(e.flags|=8192)):Wt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function uS(t,e){switch(qd(e),e.tag){case 1:return mn(e.type)&&su(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return vo(),ct(pn),ct($t),nh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return th(e),null;case 13:if(ct(pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));mo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ct(pt),null;case 4:return vo(),null;case 10:return Qd(e.type._context),null;case 22:case 23:return hh(),null;case 24:return null;default:return null}}var cl=!1,Yt=!1,cS=typeof WeakSet=="function"?WeakSet:Set,he=null;function Hs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){xt(t,e,i)}else n.current=null}function jf(t,e,n){try{n()}catch(i){xt(t,e,i)}}var Fp=!1;function fS(t,e){if(bf=tu,t=Bv(),Xd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,f=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++u===r&&(a=o),h===s&&++f===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pf={focusedElem:t,selectionRange:n},tu=!1,he=e;he!==null;)if(e=he,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,he=t;else for(;he!==null;){e=he;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,m=y.memoizedState,c=e.stateNode,v=c.getSnapshotBeforeUpdate(e.elementType===e.type?_:Kn(e.type,_),m);c.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(x){xt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,he=t;break}he=e.return}return y=Fp,Fp=!1,y}function na(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&jf(e,n,s)}r=r.next}while(r!==i)}}function Fu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function qf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function F_(t){var e=t.alternate;e!==null&&(t.alternate=null,F_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[hi],delete e[ga],delete e[Uf],delete e[qx],delete e[Yx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function O_(t){return t.tag===5||t.tag===3||t.tag===4}function Op(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||O_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ru));else if(i!==4&&(t=t.child,t!==null))for(Yf(t,e,n),t=t.sibling;t!==null;)Yf(t,e,n),t=t.sibling}function $f(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for($f(t,e,n),t=t.sibling;t!==null;)$f(t,e,n),t=t.sibling}var Ft=null,Zn=!1;function Bi(t,e,n){for(n=n.child;n!==null;)k_(t,e,n),n=n.sibling}function k_(t,e,n){if(mi&&typeof mi.onCommitFiberUnmount=="function")try{mi.onCommitFiberUnmount(Cu,n)}catch{}switch(n.tag){case 5:Yt||Hs(n,e);case 6:var i=Ft,r=Zn;Ft=null,Bi(t,e,n),Ft=i,Zn=r,Ft!==null&&(Zn?(t=Ft,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ft.removeChild(n.stateNode));break;case 18:Ft!==null&&(Zn?(t=Ft,n=n.stateNode,t.nodeType===8?vc(t.parentNode,n):t.nodeType===1&&vc(t,n),fa(t)):vc(Ft,n.stateNode));break;case 4:i=Ft,r=Zn,Ft=n.stateNode.containerInfo,Zn=!0,Bi(t,e,n),Ft=i,Zn=r;break;case 0:case 11:case 14:case 15:if(!Yt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&jf(n,e,o),r=r.next}while(r!==i)}Bi(t,e,n);break;case 1:if(!Yt&&(Hs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){xt(n,e,a)}Bi(t,e,n);break;case 21:Bi(t,e,n);break;case 22:n.mode&1?(Yt=(i=Yt)||n.memoizedState!==null,Bi(t,e,n),Yt=i):Bi(t,e,n);break;default:Bi(t,e,n)}}function kp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new cS),e.forEach(function(i){var r=xS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function jn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ft=a.stateNode,Zn=!1;break e;case 3:Ft=a.stateNode.containerInfo,Zn=!0;break e;case 4:Ft=a.stateNode.containerInfo,Zn=!0;break e}a=a.return}if(Ft===null)throw Error(te(160));k_(s,o,r),Ft=null,Zn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){xt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)z_(e,t),e=e.sibling}function z_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(jn(e,t),ai(t),i&4){try{na(3,t,t.return),Fu(3,t)}catch(_){xt(t,t.return,_)}try{na(5,t,t.return)}catch(_){xt(t,t.return,_)}}break;case 1:jn(e,t),ai(t),i&512&&n!==null&&Hs(n,n.return);break;case 5:if(jn(e,t),ai(t),i&512&&n!==null&&Hs(n,n.return),t.flags&32){var r=t.stateNode;try{aa(r,"")}catch(_){xt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&av(r,s),yf(a,o);var u=yf(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?dv(r,d):f==="dangerouslySetInnerHTML"?cv(r,d):f==="children"?aa(r,d):Dd(r,f,d,u)}switch(a){case"input":pf(r,s);break;case"textarea":lv(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Xs(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Xs(r,!!s.multiple,s.defaultValue,!0):Xs(r,!!s.multiple,s.multiple?[]:"",!1))}r[ga]=s}catch(_){xt(t,t.return,_)}}break;case 6:if(jn(e,t),ai(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){xt(t,t.return,_)}}break;case 3:if(jn(e,t),ai(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{fa(e.containerInfo)}catch(_){xt(t,t.return,_)}break;case 4:jn(e,t),ai(t);break;case 13:jn(e,t),ai(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(fh=Mt())),i&4&&kp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Yt=(u=Yt)||f,jn(e,t),Yt=u):jn(e,t),ai(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(he=t,f=t.child;f!==null;){for(d=he=f;he!==null;){switch(h=he,p=h.child,h.tag){case 0:case 11:case 14:case 15:na(4,h,h.return);break;case 1:Hs(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){xt(i,n,_)}}break;case 5:Hs(h,h.return);break;case 22:if(h.memoizedState!==null){Bp(d);continue}}p!==null?(p.return=h,he=p):Bp(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=fv("display",o))}catch(_){xt(t,t.return,_)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){xt(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:jn(e,t),ai(t),i&4&&kp(t);break;case 21:break;default:jn(e,t),ai(t)}}function ai(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(O_(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(aa(r,""),i.flags&=-33);var s=Op(t);$f(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Op(t);Yf(t,a,o);break;default:throw Error(te(161))}}catch(l){xt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function dS(t,e,n){he=t,B_(t)}function B_(t,e,n){for(var i=(t.mode&1)!==0;he!==null;){var r=he,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||cl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Yt;a=cl;var u=Yt;if(cl=o,(Yt=l)&&!u)for(he=r;he!==null;)o=he,l=o.child,o.tag===22&&o.memoizedState!==null?Hp(r):l!==null?(l.return=o,he=l):Hp(r);for(;s!==null;)he=s,B_(s),s=s.sibling;he=r,cl=a,Yt=u}zp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,he=s):zp(t)}}function zp(t){for(;he!==null;){var e=he;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Yt||Fu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Yt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Kn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ep(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ep(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&fa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Yt||e.flags&512&&qf(e)}catch(h){xt(e,e.return,h)}}if(e===t){he=null;break}if(n=e.sibling,n!==null){n.return=e.return,he=n;break}he=e.return}}function Bp(t){for(;he!==null;){var e=he;if(e===t){he=null;break}var n=e.sibling;if(n!==null){n.return=e.return,he=n;break}he=e.return}}function Hp(t){for(;he!==null;){var e=he;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Fu(4,e)}catch(l){xt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){xt(e,r,l)}}var s=e.return;try{qf(e)}catch(l){xt(e,s,l)}break;case 5:var o=e.return;try{qf(e)}catch(l){xt(e,o,l)}}}catch(l){xt(e,e.return,l)}if(e===t){he=null;break}var a=e.sibling;if(a!==null){a.return=e.return,he=a;break}he=e.return}}var hS=Math.ceil,mu=zi.ReactCurrentDispatcher,uh=zi.ReactCurrentOwner,Hn=zi.ReactCurrentBatchConfig,$e=0,Nt=null,Tt=null,Bt=0,En=0,Gs=Ar(0),At=0,Ma=null,ls=0,Ou=0,ch=0,ia=null,cn=null,fh=0,yo=1/0,Ai=null,gu=!1,Kf=null,mr=null,fl=!1,ar=null,vu=0,ra=0,Qf=null,jl=-1,ql=0;function rn(){return $e&6?Mt():jl!==-1?jl:jl=Mt()}function gr(t){return t.mode&1?$e&2&&Bt!==0?Bt&-Bt:Kx.transition!==null?(ql===0&&(ql=Tv()),ql):(t=et,t!==0||(t=window.event,t=t===void 0?16:Lv(t.type)),t):1}function ri(t,e,n,i){if(50<ra)throw ra=0,Qf=null,Error(te(185));Oa(t,n,i),(!($e&2)||t!==Nt)&&(t===Nt&&(!($e&2)&&(Ou|=n),At===4&&Qi(t,Bt)),gn(t,i),n===1&&$e===0&&!(e.mode&1)&&(yo=Mt()+500,Uu&&Rr()))}function gn(t,e){var n=t.callbackNode;Ky(t,e);var i=eu(t,t===Nt?Bt:0);if(i===0)n!==null&&Kh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Kh(n),e===1)t.tag===0?$x(Gp.bind(null,t)):Kv(Gp.bind(null,t)),Xx(function(){!($e&6)&&Rr()}),n=null;else{switch(wv(i)){case 1:n=Od;break;case 4:n=Mv;break;case 16:n=Jl;break;case 536870912:n=Ev;break;default:n=Jl}n=Y_(n,H_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function H_(t,e){if(jl=-1,ql=0,$e&6)throw Error(te(327));var n=t.callbackNode;if(Ks()&&t.callbackNode!==n)return null;var i=eu(t,t===Nt?Bt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=_u(t,i);else{e=i;var r=$e;$e|=2;var s=V_();(Nt!==t||Bt!==e)&&(Ai=null,yo=Mt()+500,es(t,e));do try{gS();break}catch(a){G_(t,a)}while(!0);Kd(),mu.current=s,$e=r,Tt!==null?e=0:(Nt=null,Bt=0,e=At)}if(e!==0){if(e===2&&(r=Tf(t),r!==0&&(i=r,e=Zf(t,r))),e===1)throw n=Ma,es(t,0),Qi(t,i),gn(t,Mt()),n;if(e===6)Qi(t,i);else{if(r=t.current.alternate,!(i&30)&&!pS(r)&&(e=_u(t,i),e===2&&(s=Tf(t),s!==0&&(i=s,e=Zf(t,s))),e===1))throw n=Ma,es(t,0),Qi(t,i),gn(t,Mt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:Ir(t,cn,Ai);break;case 3:if(Qi(t,i),(i&130023424)===i&&(e=fh+500-Mt(),10<e)){if(eu(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){rn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Df(Ir.bind(null,t,cn,Ai),e);break}Ir(t,cn,Ai);break;case 4:if(Qi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ii(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*hS(i/1960))-i,10<i){t.timeoutHandle=Df(Ir.bind(null,t,cn,Ai),i);break}Ir(t,cn,Ai);break;case 5:Ir(t,cn,Ai);break;default:throw Error(te(329))}}}return gn(t,Mt()),t.callbackNode===n?H_.bind(null,t):null}function Zf(t,e){var n=ia;return t.current.memoizedState.isDehydrated&&(es(t,e).flags|=256),t=_u(t,e),t!==2&&(e=cn,cn=n,e!==null&&Jf(e)),t}function Jf(t){cn===null?cn=t:cn.push.apply(cn,t)}function pS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!si(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qi(t,e){for(e&=~ch,e&=~Ou,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ii(e),i=1<<n;t[n]=-1,e&=~i}}function Gp(t){if($e&6)throw Error(te(327));Ks();var e=eu(t,0);if(!(e&1))return gn(t,Mt()),null;var n=_u(t,e);if(t.tag!==0&&n===2){var i=Tf(t);i!==0&&(e=i,n=Zf(t,i))}if(n===1)throw n=Ma,es(t,0),Qi(t,e),gn(t,Mt()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ir(t,cn,Ai),gn(t,Mt()),null}function dh(t,e){var n=$e;$e|=1;try{return t(e)}finally{$e=n,$e===0&&(yo=Mt()+500,Uu&&Rr())}}function us(t){ar!==null&&ar.tag===0&&!($e&6)&&Ks();var e=$e;$e|=1;var n=Hn.transition,i=et;try{if(Hn.transition=null,et=1,t)return t()}finally{et=i,Hn.transition=n,$e=e,!($e&6)&&Rr()}}function hh(){En=Gs.current,ct(Gs)}function es(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Wx(n)),Tt!==null)for(n=Tt.return;n!==null;){var i=n;switch(qd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&su();break;case 3:vo(),ct(pn),ct($t),nh();break;case 5:th(i);break;case 4:vo();break;case 13:ct(pt);break;case 19:ct(pt);break;case 10:Qd(i.type._context);break;case 22:case 23:hh()}n=n.return}if(Nt=t,Tt=t=vr(t.current,null),Bt=En=e,At=0,Ma=null,ch=Ou=ls=0,cn=ia=null,Gr!==null){for(e=0;e<Gr.length;e++)if(n=Gr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Gr=null}return t}function G_(t,e){do{var n=Tt;try{if(Kd(),Vl.current=pu,hu){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}hu=!1}if(as=0,Ut=wt=mt=null,ta=!1,ya=0,uh.current=null,n===null||n.return===null){At=1,Ma=e,Tt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=bp(o);if(p!==null){p.flags&=-257,Pp(p,o,a,s,e),p.mode&1&&Cp(s,u,e),e=p,l=u;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if(!(e&1)){Cp(s,u,e),ph();break e}l=Error(te(426))}}else if(ft&&a.mode&1){var m=bp(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Pp(m,o,a,s,e),Yd(_o(l,a));break e}}s=l=_o(l,a),At!==4&&(At=2),ia===null?ia=[s]:ia.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=w_(s,l,e);Mp(s,c);break e;case 1:a=l;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(mr===null||!mr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=A_(s,a,e);Mp(s,x);break e}}s=s.return}while(s!==null)}X_(n)}catch(C){e=C,Tt===n&&n!==null&&(Tt=n=n.return);continue}break}while(!0)}function V_(){var t=mu.current;return mu.current=pu,t===null?pu:t}function ph(){(At===0||At===3||At===2)&&(At=4),Nt===null||!(ls&268435455)&&!(Ou&268435455)||Qi(Nt,Bt)}function _u(t,e){var n=$e;$e|=2;var i=V_();(Nt!==t||Bt!==e)&&(Ai=null,es(t,e));do try{mS();break}catch(r){G_(t,r)}while(!0);if(Kd(),$e=n,mu.current=i,Tt!==null)throw Error(te(261));return Nt=null,Bt=0,At}function mS(){for(;Tt!==null;)W_(Tt)}function gS(){for(;Tt!==null&&!Hy();)W_(Tt)}function W_(t){var e=q_(t.alternate,t,En);t.memoizedProps=t.pendingProps,e===null?X_(t):Tt=e,uh.current=null}function X_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=uS(n,e),n!==null){n.flags&=32767,Tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{At=6,Tt=null;return}}else if(n=lS(n,e,En),n!==null){Tt=n;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=t}while(e!==null);At===0&&(At=5)}function Ir(t,e,n){var i=et,r=Hn.transition;try{Hn.transition=null,et=1,vS(t,e,n,i)}finally{Hn.transition=r,et=i}return null}function vS(t,e,n,i){do Ks();while(ar!==null);if($e&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Qy(t,s),t===Nt&&(Tt=Nt=null,Bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fl||(fl=!0,Y_(Jl,function(){return Ks(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Hn.transition,Hn.transition=null;var o=et;et=1;var a=$e;$e|=4,uh.current=null,fS(t,n),z_(n,t),Ox(Pf),tu=!!bf,Pf=bf=null,t.current=n,dS(n),Gy(),$e=a,et=o,Hn.transition=s}else t.current=n;if(fl&&(fl=!1,ar=t,vu=r),s=t.pendingLanes,s===0&&(mr=null),Xy(n.stateNode),gn(t,Mt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(gu)throw gu=!1,t=Kf,Kf=null,t;return vu&1&&t.tag!==0&&Ks(),s=t.pendingLanes,s&1?t===Qf?ra++:(ra=0,Qf=t):ra=0,Rr(),null}function Ks(){if(ar!==null){var t=wv(vu),e=Hn.transition,n=et;try{if(Hn.transition=null,et=16>t?16:t,ar===null)var i=!1;else{if(t=ar,ar=null,vu=0,$e&6)throw Error(te(331));var r=$e;for($e|=4,he=t.current;he!==null;){var s=he,o=s.child;if(he.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(he=u;he!==null;){var f=he;switch(f.tag){case 0:case 11:case 15:na(8,f,s)}var d=f.child;if(d!==null)d.return=f,he=d;else for(;he!==null;){f=he;var h=f.sibling,p=f.return;if(F_(f),f===u){he=null;break}if(h!==null){h.return=p,he=h;break}he=p}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}he=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,he=o;else e:for(;he!==null;){if(s=he,s.flags&2048)switch(s.tag){case 0:case 11:case 15:na(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,he=c;break e}he=s.return}}var v=t.current;for(he=v;he!==null;){o=he;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,he=g;else e:for(o=v;he!==null;){if(a=he,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Fu(9,a)}}catch(C){xt(a,a.return,C)}if(a===o){he=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,he=x;break e}he=a.return}}if($e=r,Rr(),mi&&typeof mi.onPostCommitFiberRoot=="function")try{mi.onPostCommitFiberRoot(Cu,t)}catch{}i=!0}return i}finally{et=n,Hn.transition=e}}return!1}function Vp(t,e,n){e=_o(n,e),e=w_(t,e,1),t=pr(t,e,1),e=rn(),t!==null&&(Oa(t,1,e),gn(t,e))}function xt(t,e,n){if(t.tag===3)Vp(t,t,n);else for(;e!==null;){if(e.tag===3){Vp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(mr===null||!mr.has(i))){t=_o(n,t),t=A_(e,t,1),e=pr(e,t,1),t=rn(),e!==null&&(Oa(e,1,t),gn(e,t));break}}e=e.return}}function _S(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=rn(),t.pingedLanes|=t.suspendedLanes&n,Nt===t&&(Bt&n)===n&&(At===4||At===3&&(Bt&130023424)===Bt&&500>Mt()-fh?es(t,0):ch|=n),gn(t,e)}function j_(t,e){e===0&&(t.mode&1?(e=tl,tl<<=1,!(tl&130023424)&&(tl=4194304)):e=1);var n=rn();t=Fi(t,e),t!==null&&(Oa(t,e,n),gn(t,n))}function yS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),j_(t,n)}function xS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),j_(t,n)}var q_;q_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||pn.current)hn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return hn=!1,aS(t,e,n);hn=!!(t.flags&131072)}else hn=!1,ft&&e.flags&1048576&&Qv(e,lu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Xl(t,e),t=e.pendingProps;var r=po(e,$t.current);$s(e,n),r=rh(null,e,i,t,r,n);var s=sh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mn(i)?(s=!0,ou(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Jd(e),r.updater=Iu,e.stateNode=r,r._reactInternals=e,zf(e,i,t,n),e=Gf(null,e,i,!0,s,n)):(e.tag=0,ft&&s&&jd(e),tn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Xl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=MS(i),t=Kn(i,t),r){case 0:e=Hf(null,e,i,t,n);break e;case 1:e=Up(null,e,i,t,n);break e;case 11:e=Lp(null,e,i,t,n);break e;case 14:e=Dp(null,e,i,Kn(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),Hf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),Up(t,e,i,r,n);case 3:e:{if(P_(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,i_(t,e),fu(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=_o(Error(te(423)),e),e=Np(t,e,i,n,r);break e}else if(i!==r){r=_o(Error(te(424)),e),e=Np(t,e,i,n,r);break e}else for(An=hr(e.stateNode.containerInfo.firstChild),Rn=e,ft=!0,Jn=null,n=t_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mo(),i===r){e=Oi(t,e,n);break e}tn(t,e,i,n)}e=e.child}return e;case 5:return r_(e),t===null&&Ff(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Lf(i,r)?o=null:s!==null&&Lf(i,s)&&(e.flags|=32),b_(t,e),tn(t,e,o,n),e.child;case 6:return t===null&&Ff(e),null;case 13:return L_(t,e,n);case 4:return eh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=go(e,null,i,n):tn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),Lp(t,e,i,r,n);case 7:return tn(t,e,e.pendingProps,n),e.child;case 8:return tn(t,e,e.pendingProps.children,n),e.child;case 12:return tn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,at(uu,i._currentValue),i._currentValue=o,s!==null)if(si(s.value,o)){if(s.children===r.children&&!pn.current){e=Oi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ui(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Of(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Of(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}tn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,$s(e,n),r=Gn(r),i=i(r),e.flags|=1,tn(t,e,i,n),e.child;case 14:return i=e.type,r=Kn(i,e.pendingProps),r=Kn(i.type,r),Dp(t,e,i,r,n);case 15:return R_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),Xl(t,e),e.tag=1,mn(i)?(t=!0,ou(e)):t=!1,$s(e,n),T_(e,i,r),zf(e,i,r,n),Gf(null,e,i,!0,t,n);case 19:return D_(t,e,n);case 22:return C_(t,e,n)}throw Error(te(156,e.tag))};function Y_(t,e){return Sv(t,e)}function SS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(t,e,n,i){return new SS(t,e,n,i)}function mh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function MS(t){if(typeof t=="function")return mh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Nd)return 11;if(t===Id)return 14}return 2}function vr(t,e){var n=t.alternate;return n===null?(n=Bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Yl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")mh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ds:return ts(n.children,r,s,e);case Ud:o=8,r|=8;break;case uf:return t=Bn(12,n,e,r|2),t.elementType=uf,t.lanes=s,t;case cf:return t=Bn(13,n,e,r),t.elementType=cf,t.lanes=s,t;case ff:return t=Bn(19,n,e,r),t.elementType=ff,t.lanes=s,t;case rv:return ku(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case nv:o=10;break e;case iv:o=9;break e;case Nd:o=11;break e;case Id:o=14;break e;case qi:o=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=Bn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ts(t,e,n,i){return t=Bn(7,t,i,e),t.lanes=n,t}function ku(t,e,n,i){return t=Bn(22,t,i,e),t.elementType=rv,t.lanes=n,t.stateNode={isHidden:!1},t}function wc(t,e,n){return t=Bn(6,t,null,e),t.lanes=n,t}function Ac(t,e,n){return e=Bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ES(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oc(0),this.expirationTimes=oc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function gh(t,e,n,i,r,s,o,a,l){return t=new ES(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Bn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jd(s),t}function TS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ls,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function $_(t){if(!t)return Er;t=t._reactInternals;e:{if(hs(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(mn(n))return $v(t,n,e)}return e}function K_(t,e,n,i,r,s,o,a,l){return t=gh(n,i,!0,t,r,s,o,a,l),t.context=$_(null),n=t.current,i=rn(),r=gr(n),s=Ui(i,r),s.callback=e??null,pr(n,s,r),t.current.lanes=r,Oa(t,r,i),gn(t,i),t}function zu(t,e,n,i){var r=e.current,s=rn(),o=gr(r);return n=$_(n),e.context===null?e.context=n:e.pendingContext=n,e=Ui(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=pr(r,e,o),t!==null&&(ri(t,r,o,s),Gl(t,r,o)),o}function yu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Wp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function vh(t,e){Wp(t,e),(t=t.alternate)&&Wp(t,e)}function wS(){return null}var Q_=typeof reportError=="function"?reportError:function(t){console.error(t)};function _h(t){this._internalRoot=t}Bu.prototype.render=_h.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));zu(t,e,null,null)};Bu.prototype.unmount=_h.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;us(function(){zu(null,t,null,null)}),e[Ii]=null}};function Bu(t){this._internalRoot=t}Bu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Cv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ki.length&&e!==0&&e<Ki[n].priority;n++);Ki.splice(n,0,t),n===0&&Pv(t)}};function yh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Hu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Xp(){}function AS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=yu(o);s.call(u)}}var o=K_(e,i,t,0,null,!1,!1,"",Xp);return t._reactRootContainer=o,t[Ii]=o.current,pa(t.nodeType===8?t.parentNode:t),us(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=yu(l);a.call(u)}}var l=gh(t,0,!1,null,null,!1,!1,"",Xp);return t._reactRootContainer=l,t[Ii]=l.current,pa(t.nodeType===8?t.parentNode:t),us(function(){zu(e,l,n,i)}),l}function Gu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=yu(o);a.call(l)}}zu(e,o,t,r)}else o=AS(n,e,t,r,i);return yu(o)}Av=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=jo(e.pendingLanes);n!==0&&(kd(e,n|1),gn(e,Mt()),!($e&6)&&(yo=Mt()+500,Rr()))}break;case 13:us(function(){var i=Fi(t,1);if(i!==null){var r=rn();ri(i,t,1,r)}}),vh(t,1)}};zd=function(t){if(t.tag===13){var e=Fi(t,134217728);if(e!==null){var n=rn();ri(e,t,134217728,n)}vh(t,134217728)}};Rv=function(t){if(t.tag===13){var e=gr(t),n=Fi(t,e);if(n!==null){var i=rn();ri(n,t,e,i)}vh(t,e)}};Cv=function(){return et};bv=function(t,e){var n=et;try{return et=t,e()}finally{et=n}};Sf=function(t,e,n){switch(e){case"input":if(pf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Du(i);if(!r)throw Error(te(90));ov(i),pf(i,r)}}}break;case"textarea":lv(t,n);break;case"select":e=n.value,e!=null&&Xs(t,!!n.multiple,e,!1)}};mv=dh;gv=us;var RS={usingClientEntryPoint:!1,Events:[za,Fs,Du,hv,pv,dh]},ko={findFiberByHostInstance:Hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},CS={bundleType:ko.bundleType,version:ko.version,rendererPackageName:ko.rendererPackageName,rendererConfig:ko.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=yv(t),t===null?null:t.stateNode},findFiberByHostInstance:ko.findFiberByHostInstance||wS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dl.isDisabled&&dl.supportsFiber)try{Cu=dl.inject(CS),mi=dl}catch{}}Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=RS;Pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yh(e))throw Error(te(200));return TS(t,e,null,n)};Pn.createRoot=function(t,e){if(!yh(t))throw Error(te(299));var n=!1,i="",r=Q_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=gh(t,1,!1,null,null,n,!1,i,r),t[Ii]=e.current,pa(t.nodeType===8?t.parentNode:t),new _h(e)};Pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=yv(e),t=t===null?null:t.stateNode,t};Pn.flushSync=function(t){return us(t)};Pn.hydrate=function(t,e,n){if(!Hu(e))throw Error(te(200));return Gu(null,t,e,!0,n)};Pn.hydrateRoot=function(t,e,n){if(!yh(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Q_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=K_(e,null,t,1,n??null,r,!1,s,o),t[Ii]=e.current,pa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Bu(e)};Pn.render=function(t,e,n){if(!Hu(e))throw Error(te(200));return Gu(null,t,e,!1,n)};Pn.unmountComponentAtNode=function(t){if(!Hu(t))throw Error(te(40));return t._reactRootContainer?(us(function(){Gu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ii]=null})}),!0):!1};Pn.unstable_batchedUpdates=dh;Pn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Hu(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return Gu(t,e,n,!1,i)};Pn.version="18.3.1-next-f1338f8080-20240426";function Z_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Z_)}catch(t){console.error(t)}}Z_(),Zg.exports=Pn;var bS=Zg.exports,jp=bS;af.createRoot=jp.createRoot,af.hydrateRoot=jp.hydrateRoot;var Ha=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Xr,Zi,Js,bg,PS=(bg=class extends Ha{constructor(){super();Se(this,Xr);Se(this,Zi);Se(this,Js);fe(this,Js,e=>{if(typeof window<"u"&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){b(this,Zi)||this.setEventListener(b(this,Js))}onUnsubscribe(){var e;this.hasListeners()||((e=b(this,Zi))==null||e.call(this),fe(this,Zi,void 0))}setEventListener(e){var n;fe(this,Js,e),(n=b(this,Zi))==null||n.call(this),fe(this,Zi,e(i=>{typeof i=="boolean"?this.setFocused(i):this.onFocus()}))}setFocused(e){b(this,Xr)!==e&&(fe(this,Xr,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(n=>{n(e)})}isFocused(){var e;return typeof b(this,Xr)=="boolean"?b(this,Xr):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},Xr=new WeakMap,Zi=new WeakMap,Js=new WeakMap,bg),xh=new PS,LS={setTimeout:(t,e)=>setTimeout(t,e),clearTimeout:t=>clearTimeout(t),setInterval:(t,e)=>setInterval(t,e),clearInterval:t=>clearInterval(t)},Ji,wd,Pg,DS=(Pg=class{constructor(){Se(this,Ji,LS);Se(this,wd,!1)}setTimeoutProvider(t){fe(this,Ji,t)}setTimeout(t,e){return b(this,Ji).setTimeout(t,e)}clearTimeout(t){b(this,Ji).clearTimeout(t)}setInterval(t,e){return b(this,Ji).setInterval(t,e)}clearInterval(t){b(this,Ji).clearInterval(t)}},Ji=new WeakMap,wd=new WeakMap,Pg),Wr=new DS;function US(t){setTimeout(t,0)}var NS=typeof window>"u"||"Deno"in globalThis;function un(){}function IS(t,e){return typeof t=="function"?t(e):t}function ed(t){return typeof t=="number"&&t>=0&&t!==1/0}function J_(t,e){return Math.max(t+(e||0)-Date.now(),0)}function _r(t,e){return typeof t=="function"?t(e):t}function wn(t,e){return typeof t=="function"?t(e):t}function qp(t,e){const{type:n="all",exact:i,fetchStatus:r,predicate:s,queryKey:o,stale:a}=t;if(o){if(i){if(e.queryHash!==Sh(o,e.options))return!1}else if(!Ta(e.queryKey,o))return!1}if(n!=="all"){const l=e.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof a=="boolean"&&e.isStale()!==a||r&&r!==e.state.fetchStatus||s&&!s(e))}function Yp(t,e){const{exact:n,status:i,predicate:r,mutationKey:s}=t;if(s){if(!e.options.mutationKey)return!1;if(n){if(Ea(e.options.mutationKey)!==Ea(s))return!1}else if(!Ta(e.options.mutationKey,s))return!1}return!(i&&e.state.status!==i||r&&!r(e))}function Sh(t,e){return((e==null?void 0:e.queryKeyHashFn)||Ea)(t)}function Ea(t){return JSON.stringify(t,(e,n)=>nd(n)?Object.keys(n).sort().reduce((i,r)=>(i[r]=n[r],i),{}):n)}function Ta(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?Object.keys(e).every(n=>Ta(t[n],e[n])):!1}var FS=Object.prototype.hasOwnProperty;function e0(t,e,n=0){if(t===e)return t;if(n>500)return e;const i=$p(t)&&$p(e);if(!i&&!(nd(t)&&nd(e)))return e;const s=(i?t:Object.keys(t)).length,o=i?e:Object.keys(e),a=o.length,l=i?new Array(a):{};let u=0;for(let f=0;f<a;f++){const d=i?f:o[f],h=t[d],p=e[d];if(h===p){l[d]=h,(i?f<s:FS.call(t,d))&&u++;continue}if(h===null||p===null||typeof h!="object"||typeof p!="object"){l[d]=p;continue}const y=e0(h,p,n+1);l[d]=y,y===h&&u++}return s===a&&u===s?t:l}function td(t,e){if(!e||Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(t[n]!==e[n])return!1;return!0}function $p(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function nd(t){if(!Kp(t))return!1;const e=t.constructor;if(e===void 0)return!0;const n=e.prototype;return!(!Kp(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function Kp(t){return Object.prototype.toString.call(t)==="[object Object]"}function OS(t){return new Promise(e=>{Wr.setTimeout(e,t)})}function id(t,e,n){return typeof n.structuralSharing=="function"?n.structuralSharing(t,e):n.structuralSharing!==!1?e0(t,e):e}function kS(t,e,n=0){const i=[...t,e];return n&&i.length>n?i.slice(1):i}function zS(t,e,n=0){const i=[e,...t];return n&&i.length>n?i.slice(0,-1):i}var Mh=Symbol();function t0(t,e){return!t.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!t.queryFn||t.queryFn===Mh?()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)):t.queryFn}function n0(t,e){return typeof t=="function"?t(...e):!!t}function BS(t,e,n){let i=!1,r;return Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(r??(r=e()),i||(i=!0,r.aborted?n():r.addEventListener("abort",n,{once:!0})),r)}),t}var wa=(()=>{let t=()=>NS;return{isServer(){return t()},setIsServer(e){t=e}}})();function rd(){let t,e;const n=new Promise((r,s)=>{t=r,e=s});n.status="pending",n.catch(()=>{});function i(r){Object.assign(n,r),delete n.resolve,delete n.reject}return n.resolve=r=>{i({status:"fulfilled",value:r}),t(r)},n.reject=r=>{i({status:"rejected",reason:r}),e(r)},n}var HS=US;function GS(){let t=[],e=0,n=a=>{a()},i=a=>{a()},r=HS;const s=a=>{e?t.push(a):r(()=>{n(a)})},o=()=>{const a=t;t=[],a.length&&r(()=>{i(()=>{a.forEach(l=>{n(l)})})})};return{batch:a=>{let l;e++;try{l=a()}finally{e--,e||o()}return l},batchCalls:a=>(...l)=>{s(()=>{a(...l)})},schedule:s,setNotifyFunction:a=>{n=a},setBatchNotifyFunction:a=>{i=a},setScheduler:a=>{r=a}}}var kt=GS(),eo,er,to,Lg,VS=(Lg=class extends Ha{constructor(){super();Se(this,eo,!0);Se(this,er);Se(this,to);fe(this,to,e=>{if(typeof window<"u"&&window.addEventListener){const n=()=>e(!0),i=()=>e(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",i)}}})}onSubscribe(){b(this,er)||this.setEventListener(b(this,to))}onUnsubscribe(){var e;this.hasListeners()||((e=b(this,er))==null||e.call(this),fe(this,er,void 0))}setEventListener(e){var n;fe(this,to,e),(n=b(this,er))==null||n.call(this),fe(this,er,e(this.setOnline.bind(this)))}setOnline(e){b(this,eo)!==e&&(fe(this,eo,e),this.listeners.forEach(i=>{i(e)}))}isOnline(){return b(this,eo)}},eo=new WeakMap,er=new WeakMap,to=new WeakMap,Lg),xu=new VS;function WS(t){return Math.min(1e3*2**t,3e4)}function i0(t){return(t??"online")==="online"?xu.isOnline():!0}var sd=class extends Error{constructor(t){super("CancelledError"),this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function r0(t){let e=!1,n=0,i;const r=rd(),s=()=>r.status!=="pending",o=_=>{var m;if(!s()){const c=new sd(_);h(c),(m=t.onCancel)==null||m.call(t,c)}},a=()=>{e=!0},l=()=>{e=!1},u=()=>xh.isFocused()&&(t.networkMode==="always"||xu.isOnline())&&t.canRun(),f=()=>i0(t.networkMode)&&t.canRun(),d=_=>{s()||(i==null||i(),r.resolve(_))},h=_=>{s()||(i==null||i(),r.reject(_))},p=()=>new Promise(_=>{var m;i=c=>{(s()||u())&&_(c)},(m=t.onPause)==null||m.call(t)}).then(()=>{var _;i=void 0,s()||(_=t.onContinue)==null||_.call(t)}),y=()=>{if(s())return;let _;const m=n===0?t.initialPromise:void 0;try{_=m??t.fn()}catch(c){_=Promise.reject(c)}Promise.resolve(_).then(d).catch(c=>{var w;if(s())return;const v=t.retry??(wa.isServer()?0:3),g=t.retryDelay??WS,x=typeof g=="function"?g(n,c):g,C=v===!0||typeof v=="number"&&n<v||typeof v=="function"&&v(n,c);if(e||!C){h(c);return}n++,(w=t.onFail)==null||w.call(t,n,c),OS(x).then(()=>u()?void 0:p()).then(()=>{e?h(c):y()})})};return{promise:r,status:()=>r.status,cancel:o,continue:()=>(i==null||i(),r),cancelRetry:a,continueRetry:l,canStart:f,start:()=>(f()?y():p().then(y),r)}}var jr,Dg,s0=(Dg=class{constructor(){Se(this,jr)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),ed(this.gcTime)&&fe(this,jr,Wr.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(wa.isServer()?1/0:5*60*1e3))}clearGcTimeout(){b(this,jr)!==void 0&&(Wr.clearTimeout(b(this,jr)),fe(this,jr,void 0))}},jr=new WeakMap,Dg);function XS(t){return{onFetch:(e,n)=>{var f,d,h,p,y;const i=e.options,r=(h=(d=(f=e.fetchOptions)==null?void 0:f.meta)==null?void 0:d.fetchMore)==null?void 0:h.direction,s=((p=e.state.data)==null?void 0:p.pages)||[],o=((y=e.state.data)==null?void 0:y.pageParams)||[];let a={pages:[],pageParams:[]},l=0;const u=async()=>{let _=!1;const m=g=>{BS(g,()=>e.signal,()=>_=!0)},c=t0(e.options,e.fetchOptions),v=async(g,x,C)=>{if(_)return Promise.reject(e.signal.reason);if(x==null&&g.pages.length)return Promise.resolve(g);const R=(()=>{const W={client:e.client,queryKey:e.queryKey,pageParam:x,direction:C?"backward":"forward",meta:e.options.meta};return m(W),W})(),D=await c(R),{maxPages:M}=e.options,E=C?zS:kS;return{pages:E(g.pages,D,M),pageParams:E(g.pageParams,x,M)}};if(r&&s.length){const g=r==="backward",x=g?jS:Qp,C={pages:s,pageParams:o},w=x(i,C);a=await v(C,w,g)}else{const g=t??s.length;do{const x=l===0?o[0]??i.initialPageParam:Qp(i,a);if(l>0&&x==null)break;a=await v(a,x),l++}while(l<g)}return a};e.options.persister?e.fetchFn=()=>{var _,m;return(m=(_=e.options).persister)==null?void 0:m.call(_,u,{client:e.client,queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},n)}:e.fetchFn=u}}}function Qp(t,{pages:e,pageParams:n}){const i=e.length-1;return e.length>0?t.getNextPageParam(e[i],e,n[i],n):void 0}function jS(t,{pages:e,pageParams:n}){var i;return e.length>0?(i=t.getPreviousPageParam)==null?void 0:i.call(t,e[0],e,n[0],n):void 0}var no,qr,io,Nn,Yr,Dt,La,$r,Tn,o0,Ti,Ug,qS=(Ug=class extends s0{constructor(e){super();Se(this,Tn);Se(this,no);Se(this,qr);Se(this,io);Se(this,Nn);Se(this,Yr);Se(this,Dt);Se(this,La);Se(this,$r);fe(this,$r,!1),fe(this,La,e.defaultOptions),this.setOptions(e.options),this.observers=[],fe(this,Yr,e.client),fe(this,Nn,b(this,Yr).getQueryCache()),this.queryKey=e.queryKey,this.queryHash=e.queryHash,fe(this,qr,Jp(this.options)),this.state=e.state??b(this,qr),this.scheduleGc()}get meta(){return this.options.meta}get queryType(){return b(this,no)}get promise(){var e;return(e=b(this,Dt))==null?void 0:e.promise}setOptions(e){if(this.options={...b(this,La),...e},e!=null&&e._type&&fe(this,no,e._type),this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){const n=Jp(this.options);n.data!==void 0&&(this.setState(Zp(n.data,n.dataUpdatedAt)),fe(this,qr,n))}}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&b(this,Nn).remove(this)}setData(e,n){const i=id(this.state.data,e,this.options);return je(this,Tn,Ti).call(this,{data:i,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),i}setState(e){je(this,Tn,Ti).call(this,{type:"setState",state:e})}cancel(e){var i,r;const n=(i=b(this,Dt))==null?void 0:i.promise;return(r=b(this,Dt))==null||r.cancel(e),n?n.then(un).catch(un):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}get resetState(){return b(this,qr)}reset(){this.destroy(),this.setState(this.resetState)}isActive(){return this.observers.some(e=>wn(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Mh||!this.isFetched()}isFetched(){return this.state.dataUpdateCount+this.state.errorUpdateCount>0}isStatic(){return this.getObserversCount()>0?this.observers.some(e=>_r(e.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(e=0){return this.state.data===void 0?!0:e==="static"?!1:this.state.isInvalidated?!0:!J_(this.state.dataUpdatedAt,e)}onFocus(){var n;const e=this.observers.find(i=>i.shouldFetchOnWindowFocus());e==null||e.refetch({cancelRefetch:!1}),(n=b(this,Dt))==null||n.continue()}onOnline(){var n;const e=this.observers.find(i=>i.shouldFetchOnReconnect());e==null||e.refetch({cancelRefetch:!1}),(n=b(this,Dt))==null||n.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),b(this,Nn).notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(n=>n!==e),this.observers.length||(b(this,Dt)&&(b(this,$r)||je(this,Tn,o0).call(this)?b(this,Dt).cancel({revert:!0}):b(this,Dt).cancelRetry()),this.scheduleGc()),b(this,Nn).notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||je(this,Tn,Ti).call(this,{type:"invalidate"})}async fetch(e,n){var u,f,d,h,p,y,_,m,c,v,g;if(this.state.fetchStatus!=="idle"&&((u=b(this,Dt))==null?void 0:u.status())!=="rejected"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(b(this,Dt))return b(this,Dt).continueRetry(),b(this,Dt).promise}if(e&&this.setOptions(e),!this.options.queryFn){const x=this.observers.find(C=>C.options.queryFn);x&&this.setOptions(x.options)}const i=new AbortController,r=x=>{Object.defineProperty(x,"signal",{enumerable:!0,get:()=>(fe(this,$r,!0),i.signal)})},s=()=>{const x=t0(this.options,n),w=(()=>{const R={client:b(this,Yr),queryKey:this.queryKey,meta:this.meta};return r(R),R})();return fe(this,$r,!1),this.options.persister?this.options.persister(x,w,this):x(w)},a=(()=>{const x={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:b(this,Yr),state:this.state,fetchFn:s};return r(x),x})(),l=b(this,no)==="infinite"?XS(this.options.pages):this.options.behavior;l==null||l.onFetch(a,this),fe(this,io,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((f=a.fetchOptions)==null?void 0:f.meta))&&je(this,Tn,Ti).call(this,{type:"fetch",meta:(d=a.fetchOptions)==null?void 0:d.meta}),fe(this,Dt,r0({initialPromise:n==null?void 0:n.initialPromise,fn:a.fetchFn,onCancel:x=>{x instanceof sd&&x.revert&&this.setState({...b(this,io),fetchStatus:"idle"}),i.abort()},onFail:(x,C)=>{je(this,Tn,Ti).call(this,{type:"failed",failureCount:x,error:C})},onPause:()=>{je(this,Tn,Ti).call(this,{type:"pause"})},onContinue:()=>{je(this,Tn,Ti).call(this,{type:"continue"})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode,canRun:()=>!0}));try{const x=await b(this,Dt).start();if(x===void 0)throw new Error(`${this.queryHash} data is undefined`);return this.setData(x),(p=(h=b(this,Nn).config).onSuccess)==null||p.call(h,x,this),(_=(y=b(this,Nn).config).onSettled)==null||_.call(y,x,this.state.error,this),x}catch(x){if(x instanceof sd){if(x.silent)return b(this,Dt).promise;if(x.revert){if(this.state.data===void 0)throw x;return this.state.data}}throw je(this,Tn,Ti).call(this,{type:"error",error:x}),(c=(m=b(this,Nn).config).onError)==null||c.call(m,x,this),(g=(v=b(this,Nn).config).onSettled)==null||g.call(v,this.state.data,x,this),x}finally{this.scheduleGc()}}},no=new WeakMap,qr=new WeakMap,io=new WeakMap,Nn=new WeakMap,Yr=new WeakMap,Dt=new WeakMap,La=new WeakMap,$r=new WeakMap,Tn=new WeakSet,o0=function(){return this.state.fetchStatus==="paused"&&this.state.status==="pending"},Ti=function(e){const n=i=>{switch(e.type){case"failed":return{...i,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...i,fetchStatus:"paused"};case"continue":return{...i,fetchStatus:"fetching"};case"fetch":return{...i,...a0(i.data,this.options),fetchMeta:e.meta??null};case"success":const r={...i,...Zp(e.data,e.dataUpdatedAt),dataUpdateCount:i.dataUpdateCount+1,...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return fe(this,io,e.manual?r:void 0),r;case"error":const s=e.error;return{...i,error:s,errorUpdateCount:i.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:i.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error",isInvalidated:!0};case"invalidate":return{...i,isInvalidated:!0};case"setState":return{...i,...e.state}}};this.state=n(this.state),kt.batch(()=>{this.observers.forEach(i=>{i.onQueryUpdate()}),b(this,Nn).notify({query:this,type:"updated",action:e})})},Ug);function a0(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:i0(e.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function Zp(t,e){return{data:t,dataUpdatedAt:e??Date.now(),error:null,isInvalidated:!1,status:"success"}}function Jp(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,n=e!==void 0,i=n?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:n?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var ln,qe,Da,en,Kr,ro,Ci,tr,Ua,so,oo,Qr,Zr,nr,ao,Qe,Yo,od,ad,ld,ud,cd,fd,dd,l0,Ng,YS=(Ng=class extends Ha{constructor(e,n){super();Se(this,Qe);Se(this,ln);Se(this,qe);Se(this,Da);Se(this,en);Se(this,Kr);Se(this,ro);Se(this,Ci);Se(this,tr);Se(this,Ua);Se(this,so);Se(this,oo);Se(this,Qr);Se(this,Zr);Se(this,nr);Se(this,ao,new Set);this.options=n,fe(this,ln,e),fe(this,tr,null),fe(this,Ci,rd()),this.bindMethods(),this.setOptions(n)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(b(this,qe).addObserver(this),em(b(this,qe),this.options)?je(this,Qe,Yo).call(this):this.updateResult(),je(this,Qe,ud).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return hd(b(this,qe),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return hd(b(this,qe),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,je(this,Qe,cd).call(this),je(this,Qe,fd).call(this),b(this,qe).removeObserver(this)}setOptions(e){const n=this.options,i=b(this,qe);if(this.options=b(this,ln).defaultQueryOptions(e),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof wn(this.options.enabled,b(this,qe))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");je(this,Qe,dd).call(this),b(this,qe).setOptions(this.options),n._defaulted&&!td(this.options,n)&&b(this,ln).getQueryCache().notify({type:"observerOptionsUpdated",query:b(this,qe),observer:this});const r=this.hasListeners();r&&tm(b(this,qe),i,this.options,n)&&je(this,Qe,Yo).call(this),this.updateResult(),r&&(b(this,qe)!==i||wn(this.options.enabled,b(this,qe))!==wn(n.enabled,b(this,qe))||_r(this.options.staleTime,b(this,qe))!==_r(n.staleTime,b(this,qe)))&&je(this,Qe,od).call(this);const s=je(this,Qe,ad).call(this);r&&(b(this,qe)!==i||wn(this.options.enabled,b(this,qe))!==wn(n.enabled,b(this,qe))||s!==b(this,nr))&&je(this,Qe,ld).call(this,s)}getOptimisticResult(e){const n=b(this,ln).getQueryCache().build(b(this,ln),e),i=this.createResult(n,e);return KS(this,i)&&(fe(this,en,i),fe(this,ro,this.options),fe(this,Kr,b(this,qe).state)),i}getCurrentResult(){return b(this,en)}trackResult(e,n){return new Proxy(e,{get:(i,r)=>(this.trackProp(r),n==null||n(r),r==="promise"&&(this.trackProp("data"),!this.options.experimental_prefetchInRender&&b(this,Ci).status==="pending"&&b(this,Ci).reject(new Error("experimental_prefetchInRender feature flag is not enabled"))),Reflect.get(i,r))})}trackProp(e){b(this,ao).add(e)}getCurrentQuery(){return b(this,qe)}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){const n=b(this,ln).defaultQueryOptions(e),i=b(this,ln).getQueryCache().build(b(this,ln),n);return i.fetch().then(()=>this.createResult(i,n))}fetch(e){return je(this,Qe,Yo).call(this,{...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),b(this,en)))}createResult(e,n){var M;const i=b(this,qe),r=this.options,s=b(this,en),o=b(this,Kr),a=b(this,ro),u=e!==i?e.state:b(this,Da),{state:f}=e;let d={...f},h=!1,p;if(n._optimisticResults){const E=this.hasListeners(),W=!E&&em(e,n),Y=E&&tm(e,i,n,r);(W||Y)&&(d={...d,...a0(f.data,e.options)}),n._optimisticResults==="isRestoring"&&(d.fetchStatus="idle")}let{error:y,errorUpdatedAt:_,status:m}=d;p=d.data;let c=!1;if(n.placeholderData!==void 0&&p===void 0&&m==="pending"){let E;s!=null&&s.isPlaceholderData&&n.placeholderData===(a==null?void 0:a.placeholderData)?(E=s.data,c=!0):E=typeof n.placeholderData=="function"?n.placeholderData((M=b(this,oo))==null?void 0:M.state.data,b(this,oo)):n.placeholderData,E!==void 0&&(m="success",p=id(s==null?void 0:s.data,E,n),h=!0)}if(n.select&&p!==void 0&&!c)if(s&&p===(o==null?void 0:o.data)&&n.select===b(this,Ua))p=b(this,so);else try{fe(this,Ua,n.select),p=n.select(p),p=id(s==null?void 0:s.data,p,n),fe(this,so,p),fe(this,tr,null)}catch(E){fe(this,tr,E)}b(this,tr)&&(y=b(this,tr),p=b(this,so),_=Date.now(),m="error");const v=d.fetchStatus==="fetching",g=m==="pending",x=m==="error",C=g&&v,w=p!==void 0,D={status:m,fetchStatus:d.fetchStatus,isPending:g,isSuccess:m==="success",isError:x,isInitialLoading:C,isLoading:C,data:p,dataUpdatedAt:d.dataUpdatedAt,error:y,errorUpdatedAt:_,failureCount:d.fetchFailureCount,failureReason:d.fetchFailureReason,errorUpdateCount:d.errorUpdateCount,isFetched:e.isFetched(),isFetchedAfterMount:d.dataUpdateCount>u.dataUpdateCount||d.errorUpdateCount>u.errorUpdateCount,isFetching:v,isRefetching:v&&!g,isLoadingError:x&&!w,isPaused:d.fetchStatus==="paused",isPlaceholderData:h,isRefetchError:x&&w,isStale:Eh(e,n),refetch:this.refetch,promise:b(this,Ci),isEnabled:wn(n.enabled,e)!==!1};if(this.options.experimental_prefetchInRender){const E=D.data!==void 0,W=D.status==="error"&&!E,Y=H=>{W?H.reject(D.error):E&&H.resolve(D.data)},re=()=>{const H=fe(this,Ci,D.promise=rd());Y(H)},L=b(this,Ci);switch(L.status){case"pending":e.queryHash===i.queryHash&&Y(L);break;case"fulfilled":(W||D.data!==L.value)&&re();break;case"rejected":(!W||D.error!==L.reason)&&re();break}}return D}updateResult(){const e=b(this,en),n=this.createResult(b(this,qe),this.options);if(fe(this,Kr,b(this,qe).state),fe(this,ro,this.options),b(this,Kr).data!==void 0&&fe(this,oo,b(this,qe)),td(n,e))return;fe(this,en,n);const i=()=>{if(!e)return!0;const{notifyOnChangeProps:r}=this.options,s=typeof r=="function"?r():r;if(s==="all"||!s&&!b(this,ao).size)return!0;const o=new Set(s??b(this,ao));return this.options.throwOnError&&o.add("error"),Object.keys(b(this,en)).some(a=>{const l=a;return b(this,en)[l]!==e[l]&&o.has(l)})};je(this,Qe,l0).call(this,{listeners:i()})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&je(this,Qe,ud).call(this)}},ln=new WeakMap,qe=new WeakMap,Da=new WeakMap,en=new WeakMap,Kr=new WeakMap,ro=new WeakMap,Ci=new WeakMap,tr=new WeakMap,Ua=new WeakMap,so=new WeakMap,oo=new WeakMap,Qr=new WeakMap,Zr=new WeakMap,nr=new WeakMap,ao=new WeakMap,Qe=new WeakSet,Yo=function(e){je(this,Qe,dd).call(this);let n=b(this,qe).fetch(this.options,e);return e!=null&&e.throwOnError||(n=n.catch(un)),n},od=function(){je(this,Qe,cd).call(this);const e=_r(this.options.staleTime,b(this,qe));if(wa.isServer()||b(this,en).isStale||!ed(e))return;const i=J_(b(this,en).dataUpdatedAt,e)+1;fe(this,Qr,Wr.setTimeout(()=>{b(this,en).isStale||this.updateResult()},i))},ad=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(b(this,qe)):this.options.refetchInterval)??!1},ld=function(e){je(this,Qe,fd).call(this),fe(this,nr,e),!(wa.isServer()||wn(this.options.enabled,b(this,qe))===!1||!ed(b(this,nr))||b(this,nr)===0)&&fe(this,Zr,Wr.setInterval(()=>{(this.options.refetchIntervalInBackground||xh.isFocused())&&je(this,Qe,Yo).call(this)},b(this,nr)))},ud=function(){je(this,Qe,od).call(this),je(this,Qe,ld).call(this,je(this,Qe,ad).call(this))},cd=function(){b(this,Qr)!==void 0&&(Wr.clearTimeout(b(this,Qr)),fe(this,Qr,void 0))},fd=function(){b(this,Zr)!==void 0&&(Wr.clearInterval(b(this,Zr)),fe(this,Zr,void 0))},dd=function(){const e=b(this,ln).getQueryCache().build(b(this,ln),this.options);if(e===b(this,qe))return;const n=b(this,qe);fe(this,qe,e),fe(this,Da,e.state),this.hasListeners()&&(n==null||n.removeObserver(this),e.addObserver(this))},l0=function(e){kt.batch(()=>{e.listeners&&this.listeners.forEach(n=>{n(b(this,en))}),b(this,ln).getQueryCache().notify({query:b(this,qe),type:"observerResultsUpdated"})})},Ng);function $S(t,e){return wn(e.enabled,t)!==!1&&t.state.data===void 0&&!(t.state.status==="error"&&wn(e.retryOnMount,t)===!1)}function em(t,e){return $S(t,e)||t.state.data!==void 0&&hd(t,e,e.refetchOnMount)}function hd(t,e,n){if(wn(e.enabled,t)!==!1&&_r(e.staleTime,t)!=="static"){const i=typeof n=="function"?n(t):n;return i==="always"||i!==!1&&Eh(t,e)}return!1}function tm(t,e,n,i){return(t!==e||wn(i.enabled,t)===!1)&&(!n.suspense||t.state.status!=="error")&&Eh(t,n)}function Eh(t,e){return wn(e.enabled,t)!==!1&&t.isStaleByTime(_r(e.staleTime,t))}function KS(t,e){return!td(t.getCurrentResult(),e)}var Na,ui,qt,Jr,ci,ji,Ig,QS=(Ig=class extends s0{constructor(e){super();Se(this,ci);Se(this,Na);Se(this,ui);Se(this,qt);Se(this,Jr);fe(this,Na,e.client),this.mutationId=e.mutationId,fe(this,qt,e.mutationCache),fe(this,ui,[]),this.state=e.state||ZS(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){b(this,ui).includes(e)||(b(this,ui).push(e),this.clearGcTimeout(),b(this,qt).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){fe(this,ui,b(this,ui).filter(n=>n!==e)),this.scheduleGc(),b(this,qt).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){b(this,ui).length||(this.state.status==="pending"?this.scheduleGc():b(this,qt).remove(this))}continue(){var e;return((e=b(this,Jr))==null?void 0:e.continue())??this.execute(this.state.variables)}async execute(e){var o,a,l,u,f,d,h,p,y,_,m,c,v,g,x,C,w,R;const n=()=>{je(this,ci,ji).call(this,{type:"continue"})},i={client:b(this,Na),meta:this.options.meta,mutationKey:this.options.mutationKey};fe(this,Jr,r0({fn:()=>this.options.mutationFn?this.options.mutationFn(e,i):Promise.reject(new Error("No mutationFn found")),onFail:(D,M)=>{je(this,ci,ji).call(this,{type:"failed",failureCount:D,error:M})},onPause:()=>{je(this,ci,ji).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>b(this,qt).canRun(this)}));const r=this.state.status==="pending",s=!b(this,Jr).canStart();try{if(r)n();else{je(this,ci,ji).call(this,{type:"pending",variables:e,isPaused:s}),b(this,qt).config.onMutate&&await b(this,qt).config.onMutate(e,this,i);const M=await((a=(o=this.options).onMutate)==null?void 0:a.call(o,e,i));M!==this.state.context&&je(this,ci,ji).call(this,{type:"pending",context:M,variables:e,isPaused:s})}const D=await b(this,Jr).start();return await((u=(l=b(this,qt).config).onSuccess)==null?void 0:u.call(l,D,e,this.state.context,this,i)),await((d=(f=this.options).onSuccess)==null?void 0:d.call(f,D,e,this.state.context,i)),await((p=(h=b(this,qt).config).onSettled)==null?void 0:p.call(h,D,null,this.state.variables,this.state.context,this,i)),await((_=(y=this.options).onSettled)==null?void 0:_.call(y,D,null,e,this.state.context,i)),je(this,ci,ji).call(this,{type:"success",data:D}),D}catch(D){try{await((c=(m=b(this,qt).config).onError)==null?void 0:c.call(m,D,e,this.state.context,this,i))}catch(M){Promise.reject(M)}try{await((g=(v=this.options).onError)==null?void 0:g.call(v,D,e,this.state.context,i))}catch(M){Promise.reject(M)}try{await((C=(x=b(this,qt).config).onSettled)==null?void 0:C.call(x,void 0,D,this.state.variables,this.state.context,this,i))}catch(M){Promise.reject(M)}try{await((R=(w=this.options).onSettled)==null?void 0:R.call(w,void 0,D,e,this.state.context,i))}catch(M){Promise.reject(M)}throw je(this,ci,ji).call(this,{type:"error",error:D}),D}finally{b(this,qt).runNext(this)}}},Na=new WeakMap,ui=new WeakMap,qt=new WeakMap,Jr=new WeakMap,ci=new WeakSet,ji=function(e){const n=i=>{switch(e.type){case"failed":return{...i,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...i,isPaused:!0};case"continue":return{...i,isPaused:!1};case"pending":return{...i,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...i,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...i,data:void 0,error:e.error,failureCount:i.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=n(this.state),kt.batch(()=>{b(this,ui).forEach(i=>{i.onMutationUpdate(e)}),b(this,qt).notify({mutation:this,type:"updated",action:e})})},Ig);function ZS(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var bi,Qn,Ia,Fg,JS=(Fg=class extends Ha{constructor(e={}){super();Se(this,bi);Se(this,Qn);Se(this,Ia);this.config=e,fe(this,bi,new Set),fe(this,Qn,new Map),fe(this,Ia,0)}build(e,n,i){const r=new QS({client:e,mutationCache:this,mutationId:++$a(this,Ia)._,options:e.defaultMutationOptions(n),state:i});return this.add(r),r}add(e){b(this,bi).add(e);const n=hl(e);if(typeof n=="string"){const i=b(this,Qn).get(n);i?i.push(e):b(this,Qn).set(n,[e])}this.notify({type:"added",mutation:e})}remove(e){if(b(this,bi).delete(e)){const n=hl(e);if(typeof n=="string"){const i=b(this,Qn).get(n);if(i)if(i.length>1){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}else i[0]===e&&b(this,Qn).delete(n)}}this.notify({type:"removed",mutation:e})}canRun(e){const n=hl(e);if(typeof n=="string"){const i=b(this,Qn).get(n),r=i==null?void 0:i.find(s=>s.state.status==="pending");return!r||r===e}else return!0}runNext(e){var i;const n=hl(e);if(typeof n=="string"){const r=(i=b(this,Qn).get(n))==null?void 0:i.find(s=>s!==e&&s.state.isPaused);return(r==null?void 0:r.continue())??Promise.resolve()}else return Promise.resolve()}clear(){kt.batch(()=>{b(this,bi).forEach(e=>{this.notify({type:"removed",mutation:e})}),b(this,bi).clear(),b(this,Qn).clear()})}getAll(){return Array.from(b(this,bi))}find(e){const n={exact:!0,...e};return this.getAll().find(i=>Yp(n,i))}findAll(e={}){return this.getAll().filter(n=>Yp(e,n))}notify(e){kt.batch(()=>{this.listeners.forEach(n=>{n(e)})})}resumePausedMutations(){const e=this.getAll().filter(n=>n.state.isPaused);return kt.batch(()=>Promise.all(e.map(n=>n.continue().catch(un))))}},bi=new WeakMap,Qn=new WeakMap,Ia=new WeakMap,Fg);function hl(t){var e;return(e=t.options.scope)==null?void 0:e.id}var fi,Og,eM=(Og=class extends Ha{constructor(e={}){super();Se(this,fi);this.config=e,fe(this,fi,new Map)}build(e,n,i){const r=n.queryKey,s=n.queryHash??Sh(r,n);let o=this.get(s);return o||(o=new qS({client:e,queryKey:r,queryHash:s,options:e.defaultQueryOptions(n),state:i,defaultOptions:e.getQueryDefaults(r)}),this.add(o)),o}add(e){b(this,fi).has(e.queryHash)||(b(this,fi).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const n=b(this,fi).get(e.queryHash);n&&(e.destroy(),n===e&&b(this,fi).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){kt.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return b(this,fi).get(e)}getAll(){return[...b(this,fi).values()]}find(e){const n={exact:!0,...e};return this.getAll().find(i=>qp(n,i))}findAll(e={}){const n=this.getAll();return Object.keys(e).length>0?n.filter(i=>qp(e,i)):n}notify(e){kt.batch(()=>{this.listeners.forEach(n=>{n(e)})})}onFocus(){kt.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){kt.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},fi=new WeakMap,Og),yt,ir,rr,lo,uo,sr,co,fo,kg,tM=(kg=class{constructor(t={}){Se(this,yt);Se(this,ir);Se(this,rr);Se(this,lo);Se(this,uo);Se(this,sr);Se(this,co);Se(this,fo);fe(this,yt,t.queryCache||new eM),fe(this,ir,t.mutationCache||new JS),fe(this,rr,t.defaultOptions||{}),fe(this,lo,new Map),fe(this,uo,new Map),fe(this,sr,0)}mount(){$a(this,sr)._++,b(this,sr)===1&&(fe(this,co,xh.subscribe(async t=>{t&&(await this.resumePausedMutations(),b(this,yt).onFocus())})),fe(this,fo,xu.subscribe(async t=>{t&&(await this.resumePausedMutations(),b(this,yt).onOnline())})))}unmount(){var t,e;$a(this,sr)._--,b(this,sr)===0&&((t=b(this,co))==null||t.call(this),fe(this,co,void 0),(e=b(this,fo))==null||e.call(this),fe(this,fo,void 0))}isFetching(t){return b(this,yt).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return b(this,ir).findAll({...t,status:"pending"}).length}getQueryData(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=b(this,yt).get(e.queryHash))==null?void 0:n.state.data}ensureQueryData(t){const e=this.defaultQueryOptions(t),n=b(this,yt).build(this,e),i=n.state.data;return i===void 0?this.fetchQuery(t):(t.revalidateIfStale&&n.isStaleByTime(_r(e.staleTime,n))&&this.prefetchQuery(e),Promise.resolve(i))}getQueriesData(t){return b(this,yt).findAll(t).map(({queryKey:e,state:n})=>{const i=n.data;return[e,i]})}setQueryData(t,e,n){const i=this.defaultQueryOptions({queryKey:t}),r=b(this,yt).get(i.queryHash),s=r==null?void 0:r.state.data,o=IS(e,s);if(o!==void 0)return b(this,yt).build(this,i).setData(o,{...n,manual:!0})}setQueriesData(t,e,n){return kt.batch(()=>b(this,yt).findAll(t).map(({queryKey:i})=>[i,this.setQueryData(i,e,n)]))}getQueryState(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=b(this,yt).get(e.queryHash))==null?void 0:n.state}removeQueries(t){const e=b(this,yt);kt.batch(()=>{e.findAll(t).forEach(n=>{e.remove(n)})})}resetQueries(t,e){const n=b(this,yt);return kt.batch(()=>(n.findAll(t).forEach(i=>{i.reset()}),this.refetchQueries({type:"active",...t},e)))}cancelQueries(t,e={}){const n={revert:!0,...e},i=kt.batch(()=>b(this,yt).findAll(t).map(r=>r.cancel(n)));return Promise.all(i).then(un).catch(un)}invalidateQueries(t,e={}){return kt.batch(()=>(b(this,yt).findAll(t).forEach(n=>{n.invalidate()}),(t==null?void 0:t.refetchType)==="none"?Promise.resolve():this.refetchQueries({...t,type:(t==null?void 0:t.refetchType)??(t==null?void 0:t.type)??"active"},e)))}refetchQueries(t,e={}){const n={...e,cancelRefetch:e.cancelRefetch??!0},i=kt.batch(()=>b(this,yt).findAll(t).filter(r=>!r.isDisabled()&&!r.isStatic()).map(r=>{let s=r.fetch(void 0,n);return n.throwOnError||(s=s.catch(un)),r.state.fetchStatus==="paused"?Promise.resolve():s}));return Promise.all(i).then(un)}fetchQuery(t){const e=this.defaultQueryOptions(t);e.retry===void 0&&(e.retry=!1);const n=b(this,yt).build(this,e);return n.isStaleByTime(_r(e.staleTime,n))?n.fetch(e):Promise.resolve(n.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(un).catch(un)}fetchInfiniteQuery(t){return t._type="infinite",this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(un).catch(un)}ensureInfiniteQueryData(t){return t._type="infinite",this.ensureQueryData(t)}resumePausedMutations(){return xu.isOnline()?b(this,ir).resumePausedMutations():Promise.resolve()}getQueryCache(){return b(this,yt)}getMutationCache(){return b(this,ir)}getDefaultOptions(){return b(this,rr)}setDefaultOptions(t){fe(this,rr,t)}setQueryDefaults(t,e){b(this,lo).set(Ea(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){const e=[...b(this,lo).values()],n={};return e.forEach(i=>{Ta(t,i.queryKey)&&Object.assign(n,i.defaultOptions)}),n}setMutationDefaults(t,e){b(this,uo).set(Ea(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){const e=[...b(this,uo).values()],n={};return e.forEach(i=>{Ta(t,i.mutationKey)&&Object.assign(n,i.defaultOptions)}),n}defaultQueryOptions(t){if(t._defaulted)return t;const e={...b(this,rr).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=Sh(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.queryFn===Mh&&(e.enabled=!1),e}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...b(this,rr).mutations,...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){b(this,yt).clear(),b(this,ir).clear()}},yt=new WeakMap,ir=new WeakMap,rr=new WeakMap,lo=new WeakMap,uo=new WeakMap,sr=new WeakMap,co=new WeakMap,fo=new WeakMap,kg),u0=Ke.createContext(void 0),nM=t=>{const e=Ke.useContext(u0);if(!e)throw new Error("No QueryClient set, use QueryClientProvider to set one");return e},iM=({client:t,children:e})=>(Ke.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),z.jsx(u0.Provider,{value:t,children:e})),c0=Ke.createContext(!1),rM=()=>Ke.useContext(c0);c0.Provider;function sM(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}var oM=Ke.createContext(sM()),aM=()=>Ke.useContext(oM),lM=(t,e,n)=>{const i=n!=null&&n.state.error&&typeof t.throwOnError=="function"?n0(t.throwOnError,[n.state.error,n]):t.throwOnError;(t.suspense||t.experimental_prefetchInRender||i)&&(e.isReset()||(t.retryOnMount=!1))},uM=t=>{Ke.useEffect(()=>{t.clearReset()},[t])},cM=({result:t,errorResetBoundary:e,throwOnError:n,query:i,suspense:r})=>t.isError&&!e.isReset()&&!t.isFetching&&i&&(r&&t.data===void 0||n0(n,[t.error,i])),fM=t=>{if(t.suspense){const n=r=>r==="static"?r:Math.max(r??1e3,1e3),i=t.staleTime;t.staleTime=typeof i=="function"?(...r)=>n(i(...r)):n(i),typeof t.gcTime=="number"&&(t.gcTime=Math.max(t.gcTime,1e3))}},dM=(t,e)=>t.isLoading&&t.isFetching&&!e,hM=(t,e)=>(t==null?void 0:t.suspense)&&e.isPending,nm=(t,e,n)=>e.fetchOptimistic(t).catch(()=>{n.clearReset()});function pM(t,e,n){var p,y,_,m;const i=rM(),r=aM(),s=nM(),o=s.defaultQueryOptions(t);(y=(p=s.getDefaultOptions().queries)==null?void 0:p._experimental_beforeQuery)==null||y.call(p,o);const a=s.getQueryCache().get(o.queryHash),l=t.subscribed!==!1;o._optimisticResults=i?"isRestoring":l?"optimistic":void 0,fM(o),lM(o,r,a),uM(r);const u=!s.getQueryCache().get(o.queryHash),[f]=Ke.useState(()=>new e(s,o)),d=f.getOptimisticResult(o),h=!i&&l;if(Ke.useSyncExternalStore(Ke.useCallback(c=>{const v=h?f.subscribe(kt.batchCalls(c)):un;return f.updateResult(),v},[f,h]),()=>f.getCurrentResult(),()=>f.getCurrentResult()),Ke.useEffect(()=>{f.setOptions(o)},[o,f]),hM(o,d))throw nm(o,f,r);if(cM({result:d,errorResetBoundary:r,throwOnError:o.throwOnError,query:a,suspense:o.suspense}))throw d.error;if((m=(_=s.getDefaultOptions().queries)==null?void 0:_._experimental_afterQuery)==null||m.call(_,o,d),o.experimental_prefetchInRender&&!wa.isServer()&&dM(d,i)){const c=u?nm(o,f,r):a==null?void 0:a.promise;c==null||c.catch(un).finally(()=>{f.updateResult()})}return o.notifyOnChangeProps?d:f.trackResult(d)}function Th(t,e){return pM(t,YS)}const mM={},im=t=>{let e;const n=new Set,i=(f,d)=>{const h=typeof f=="function"?f(e):f;if(!Object.is(h,e)){const p=e;e=d??(typeof h!="object"||h===null)?h:Object.assign({},e,h),n.forEach(y=>y(e,p))}},r=()=>e,l={setState:i,getState:r,getInitialState:()=>u,subscribe:f=>(n.add(f),()=>n.delete(f)),destroy:()=>{(mM?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=e=t(i,r,l);return l},gM=t=>t?im(t):im;var f0={exports:{}},d0={},h0={exports:{}},p0={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xo=Ke;function vM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var _M=typeof Object.is=="function"?Object.is:vM,yM=xo.useState,xM=xo.useEffect,SM=xo.useLayoutEffect,MM=xo.useDebugValue;function EM(t,e){var n=e(),i=yM({inst:{value:n,getSnapshot:e}}),r=i[0].inst,s=i[1];return SM(function(){r.value=n,r.getSnapshot=e,Rc(r)&&s({inst:r})},[t,n,e]),xM(function(){return Rc(r)&&s({inst:r}),t(function(){Rc(r)&&s({inst:r})})},[t]),MM(n),n}function Rc(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!_M(t,n)}catch{return!0}}function TM(t,e){return e()}var wM=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?TM:EM;p0.useSyncExternalStore=xo.useSyncExternalStore!==void 0?xo.useSyncExternalStore:wM;h0.exports=p0;var AM=h0.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vu=Ke,RM=AM;function CM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var bM=typeof Object.is=="function"?Object.is:CM,PM=RM.useSyncExternalStore,LM=Vu.useRef,DM=Vu.useEffect,UM=Vu.useMemo,NM=Vu.useDebugValue;d0.useSyncExternalStoreWithSelector=function(t,e,n,i,r){var s=LM(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=UM(function(){function l(p){if(!u){if(u=!0,f=p,p=i(p),r!==void 0&&o.hasValue){var y=o.value;if(r(y,p))return d=y}return d=p}if(y=d,bM(f,p))return y;var _=i(p);return r!==void 0&&r(y,_)?(f=p,y):(f=p,d=_)}var u=!1,f,d,h=n===void 0?null:n;return[function(){return l(e())},h===null?void 0:function(){return l(h())}]},[e,n,i,r]);var a=PM(t,s[0],s[1]);return DM(function(){o.hasValue=!0,o.value=a},[a]),NM(a),a};f0.exports=d0;var IM=f0.exports;const FM=zg(IM),m0={},{useDebugValue:OM}=Kg,{useSyncExternalStoreWithSelector:kM}=FM;let rm=!1;const zM=t=>t;function BM(t,e=zM,n){(m0?"production":void 0)!=="production"&&n&&!rm&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),rm=!0);const i=kM(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return OM(i),i}const HM=t=>{(m0?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?gM(t):t,n=(i,r)=>BM(e,i,r);return Object.assign(n,e),n},GM=t=>HM,VM={};function WM(t,e){let n;try{n=t()}catch{return}return{getItem:r=>{var s;const o=l=>l===null?null:JSON.parse(l,void 0),a=(s=n.getItem(r))!=null?s:null;return a instanceof Promise?a.then(o):o(a)},setItem:(r,s)=>n.setItem(r,JSON.stringify(s,void 0)),removeItem:r=>n.removeItem(r)}}const Aa=t=>e=>{try{const n=t(e);return n instanceof Promise?n:{then(i){return Aa(i)(n)},catch(i){return this}}}catch(n){return{then(i){return this},catch(i){return Aa(i)(n)}}}},XM=(t,e)=>(n,i,r)=>{let s={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:m=>m,version:0,merge:(m,c)=>({...c,...m}),...e},o=!1;const a=new Set,l=new Set;let u;try{u=s.getStorage()}catch{}if(!u)return t((...m)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),n(...m)},i,r);const f=Aa(s.serialize),d=()=>{const m=s.partialize({...i()});let c;const v=f({state:m,version:s.version}).then(g=>u.setItem(s.name,g)).catch(g=>{c=g});if(c)throw c;return v},h=r.setState;r.setState=(m,c)=>{h(m,c),d()};const p=t((...m)=>{n(...m),d()},i,r);let y;const _=()=>{var m;if(!u)return;o=!1,a.forEach(v=>v(i()));const c=((m=s.onRehydrateStorage)==null?void 0:m.call(s,i()))||void 0;return Aa(u.getItem.bind(u))(s.name).then(v=>{if(v)return s.deserialize(v)}).then(v=>{if(v)if(typeof v.version=="number"&&v.version!==s.version){if(s.migrate)return s.migrate(v.state,v.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return v.state}).then(v=>{var g;return y=s.merge(v,(g=i())!=null?g:p),n(y,!0),d()}).then(()=>{c==null||c(y,void 0),o=!0,l.forEach(v=>v(y))}).catch(v=>{c==null||c(void 0,v)})};return r.persist={setOptions:m=>{s={...s,...m},m.getStorage&&(u=m.getStorage())},clearStorage:()=>{u==null||u.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>_(),hasHydrated:()=>o,onHydrate:m=>(a.add(m),()=>{a.delete(m)}),onFinishHydration:m=>(l.add(m),()=>{l.delete(m)})},_(),y||p},jM=(t,e)=>(n,i,r)=>{let s={storage:WM(()=>localStorage),partialize:_=>_,version:0,merge:(_,m)=>({...m,..._}),...e},o=!1;const a=new Set,l=new Set;let u=s.storage;if(!u)return t((..._)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),n(..._)},i,r);const f=()=>{const _=s.partialize({...i()});return u.setItem(s.name,{state:_,version:s.version})},d=r.setState;r.setState=(_,m)=>{d(_,m),f()};const h=t((..._)=>{n(..._),f()},i,r);r.getInitialState=()=>h;let p;const y=()=>{var _,m;if(!u)return;o=!1,a.forEach(v=>{var g;return v((g=i())!=null?g:h)});const c=((m=s.onRehydrateStorage)==null?void 0:m.call(s,(_=i())!=null?_:h))||void 0;return Aa(u.getItem.bind(u))(s.name).then(v=>{if(v)if(typeof v.version=="number"&&v.version!==s.version){if(s.migrate)return[!0,s.migrate(v.state,v.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,v.state];return[!1,void 0]}).then(v=>{var g;const[x,C]=v;if(p=s.merge(C,(g=i())!=null?g:h),n(p,!0),x)return f()}).then(()=>{c==null||c(p,void 0),p=i(),o=!0,l.forEach(v=>v(p))}).catch(v=>{c==null||c(void 0,v)})};return r.persist={setOptions:_=>{s={...s,..._},_.storage&&(u=_.storage)},clearStorage:()=>{u==null||u.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>y(),hasHydrated:()=>o,onHydrate:_=>(a.add(_),()=>{a.delete(_)}),onFinishHydration:_=>(l.add(_),()=>{l.delete(_)})},s.skipHydration||y(),p||h},qM=(t,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?((VM?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),XM(t,e)):jM(t,e),YM=qM,$M=GM()(YM((t,e)=>({unit:"C",setUnit:n=>t({unit:n}),darkMode:!0,toggleDarkMode:()=>t(n=>({darkMode:!n.darkMode})),favorites:[],addFavorite:n=>t(i=>({favorites:i.favorites.some(r=>r.name===n.name&&r.country===n.country)?i.favorites:[...i.favorites,n]})),removeFavorite:n=>t(i=>({favorites:i.favorites.filter(r=>!(r.name===n.name&&r.country===n.country))})),isFavorite:n=>e().favorites.some(i=>i.name===n.name&&i.country===n.country),currentLocation:null,setCurrentLocation:n=>t({currentLocation:n})}),{name:"weatherlens-store",partializer:t=>({unit:t.unit,darkMode:t.darkMode,favorites:t.favorites})})),g0="https://geocoding-api.open-meteo.com/v1",KM="https://api.open-meteo.com/v1";async function QM(t){const e=`${g0}/search?name=${encodeURIComponent(t)}&count=5&language=en&format=json`,n=await fetch(e);if(!n.ok)throw new Error("Geocoding request failed");return(await n.json()).results??[]}async function ZM(t,e){var s;const n=`${g0}/reverse?latitude=${t}&longitude=${e}&language=en`,i=await fetch(n);return i.ok?((s=(await i.json()).results)==null?void 0:s[0])??null:null}async function JM(t,e){const n=new URLSearchParams({latitude:String(t),longitude:String(e),current:["temperature_2m","relative_humidity_2m","apparent_temperature","is_day","precipitation","weather_code","cloud_cover","pressure_msl","surface_pressure","wind_speed_10m","wind_direction_10m","wind_gusts_10m","uv_index"].join(","),hourly:["temperature_2m","precipitation_probability","weather_code","wind_speed_10m"].join(","),daily:["weather_code","temperature_2m_max","temperature_2m_min","apparent_temperature_max","sunrise","sunset","precipitation_sum","precipitation_probability_max","wind_speed_10m_max","uv_index_max"].join(","),forecast_days:"8",timezone:"auto",wind_speed_unit:"mph"}),i=await fetch(`${KM}/forecast?${n}`);if(!i.ok)throw new Error("Weather request failed");return i.json()}function eE(t,e){return Th({queryKey:["weather",t,e],queryFn:()=>JM(t,e),enabled:t!==null&&e!==null,staleTime:5*60*1e3,refetchInterval:10*60*1e3,retry:2})}function tE(t,e){return Th({queryKey:["geo",t],queryFn:()=>QM(t),enabled:e&&t.length>=2,staleTime:60*1e3})}function nE(){return Th({queryKey:["geolocation"],queryFn:async()=>{const t=await new Promise((r,s)=>navigator.geolocation.getCurrentPosition(r,s,{timeout:8e3})),{latitude:e,longitude:n}=t.coords,i=await ZM(e,n);return{lat:e,lon:n,name:(i==null?void 0:i.name)??"Current Location",country:(i==null?void 0:i.country_code)??"",country_code:(i==null?void 0:i.country_code)??""}},enabled:"geolocation"in navigator,staleTime:1/0,retry:1})}const iE={0:{label:"Clear Sky",icon:"☀️",scene:"sunny"},1:{label:"Mainly Clear",icon:"🌤️",scene:"sunny"},2:{label:"Partly Cloudy",icon:"⛅",scene:"cloudy"},3:{label:"Overcast",icon:"☁️",scene:"cloudy"},45:{label:"Foggy",icon:"🌫️",scene:"fog"},48:{label:"Icy Fog",icon:"🌫️",scene:"fog"},51:{label:"Light Drizzle",icon:"🌦️",scene:"rainy"},53:{label:"Drizzle",icon:"🌦️",scene:"rainy"},55:{label:"Heavy Drizzle",icon:"🌧️",scene:"rainy"},61:{label:"Light Rain",icon:"🌧️",scene:"rainy"},63:{label:"Rain",icon:"🌧️",scene:"rainy"},65:{label:"Heavy Rain",icon:"🌧️",scene:"rainy"},71:{label:"Light Snow",icon:"🌨️",scene:"snow"},73:{label:"Snow",icon:"❄️",scene:"snow"},75:{label:"Heavy Snow",icon:"❄️",scene:"snow"},77:{label:"Snow Grains",icon:"🌨️",scene:"snow"},80:{label:"Light Showers",icon:"🌦️",scene:"rainy"},81:{label:"Showers",icon:"🌧️",scene:"rainy"},82:{label:"Heavy Showers",icon:"⛈️",scene:"storm"},85:{label:"Snow Showers",icon:"🌨️",scene:"snow"},86:{label:"Heavy Snow Showers",icon:"🌨️",scene:"snow"},95:{label:"Thunderstorm",icon:"⛈️",scene:"storm"},96:{label:"Thunderstorm + Hail",icon:"⛈️",scene:"storm"},99:{label:"Heavy Thunderstorm",icon:"⛈️",scene:"storm"}};function Wu(t){return iE[t]??{label:"Unknown",icon:"🌡️",scene:"sunny"}}function Ra(t,e){return Math.round(e==="F"?t*9/5+32:e==="K"?t+273.15:t)}function Ca(t){return t==="F"?"°F":t==="K"?"K":"°C"}function rE(t){return t===0?"12am":t<12?`${t}am`:t===12?"12pm":`${t-12}pm`}function v0(t,e){return e===0?"Today":e===1?"Tomorrow":new Date(t).toLocaleDateString("en",{weekday:"short"})}function sE(t){return["N","NE","E","SE","S","SW","W","NW"][Math.round(t/45)%8]}function oE(t){return t<=2?"#4ade80":t<=5?"#fbbf24":t<=7?"#fb923c":t<=10?"#f87171":"#dc2626"}function aE(t){return t<=2?"Low":t<=5?"Moderate":t<=7?"High":t<=10?"Very High":"Extreme"}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wh="160",lE=0,sm=1,uE=2,_0=1,cE=2,wi=3,Tr=0,vn=1,pi=2,yr=0,Qs=1,om=2,am=3,lm=4,fE=5,kr=100,dE=101,hE=102,um=103,cm=104,pE=200,mE=201,gE=202,vE=203,pd=204,md=205,_E=206,yE=207,xE=208,SE=209,ME=210,EE=211,TE=212,wE=213,AE=214,RE=0,CE=1,bE=2,Su=3,PE=4,LE=5,DE=6,UE=7,y0=0,NE=1,IE=2,xr=0,FE=1,OE=2,kE=3,zE=4,BE=5,HE=6,x0=300,So=301,Mo=302,gd=303,vd=304,Xu=306,_d=1e3,ti=1001,yd=1002,nn=1003,fm=1004,Cc=1005,On=1006,GE=1007,ba=1008,Sr=1009,VE=1010,WE=1011,Ah=1012,S0=1013,lr=1014,ur=1015,Pa=1016,M0=1017,E0=1018,ns=1020,XE=1021,ni=1023,jE=1024,qE=1025,is=1026,Eo=1027,YE=1028,T0=1029,$E=1030,w0=1031,A0=1033,bc=33776,Pc=33777,Lc=33778,Dc=33779,dm=35840,hm=35841,pm=35842,mm=35843,R0=36196,gm=37492,vm=37496,_m=37808,ym=37809,xm=37810,Sm=37811,Mm=37812,Em=37813,Tm=37814,wm=37815,Am=37816,Rm=37817,Cm=37818,bm=37819,Pm=37820,Lm=37821,Uc=36492,Dm=36494,Um=36495,KE=36283,Nm=36284,Im=36285,Fm=36286,C0=3e3,rs=3001,QE=3200,ZE=3201,JE=0,eT=1,zn="",Ot="srgb",ki="srgb-linear",Rh="display-p3",ju="display-p3-linear",Mu="linear",ut="srgb",Eu="rec709",Tu="p3",ms=7680,Om=519,tT=512,nT=513,iT=514,b0=515,rT=516,sT=517,oT=518,aT=519,km=35044,zm="300 es",xd=1035,Di=2e3,wu=2001;class Co{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nc=Math.PI/180,Sd=180/Math.PI;function Ga(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[t&255]+Xt[t>>8&255]+Xt[t>>16&255]+Xt[t>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[n&63|128]+Xt[n>>8&255]+"-"+Xt[n>>16&255]+Xt[n>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function fn(t,e,n){return Math.max(e,Math.min(n,t))}function lT(t,e){return(t%e+e)%e}function Ic(t,e,n){return(1-n)*t+n*e}function Bm(t){return(t&t-1)===0&&t!==0}function Md(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function zo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function an(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class tt{constructor(e=0,n=0){tt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(fn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,n,i,r,s,o,a,l,u){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],f=i[4],d=i[7],h=i[2],p=i[5],y=i[8],_=r[0],m=r[3],c=r[6],v=r[1],g=r[4],x=r[7],C=r[2],w=r[5],R=r[8];return s[0]=o*_+a*v+l*C,s[3]=o*m+a*g+l*w,s[6]=o*c+a*x+l*R,s[1]=u*_+f*v+d*C,s[4]=u*m+f*g+d*w,s[7]=u*c+f*x+d*R,s[2]=h*_+p*v+y*C,s[5]=h*m+p*g+y*w,s[8]=h*c+p*x+y*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return n*o*f-n*a*u-i*s*f+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],d=f*o-a*u,h=a*l-f*s,p=u*s-o*l,y=n*d+i*h+r*p;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/y;return e[0]=d*_,e[1]=(r*u-f*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(f*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=p*_,e[7]=(i*l-u*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Fc.makeScale(e,n)),this}rotate(e){return this.premultiply(Fc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Fc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fc=new Ve;function P0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Au(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function uT(){const t=Au("canvas");return t.style.display="block",t}const Hm={};function sa(t){t in Hm||(Hm[t]=!0,console.warn(t))}const Gm=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Vm=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),pl={[ki]:{transfer:Mu,primaries:Eu,toReference:t=>t,fromReference:t=>t},[Ot]:{transfer:ut,primaries:Eu,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[ju]:{transfer:Mu,primaries:Tu,toReference:t=>t.applyMatrix3(Vm),fromReference:t=>t.applyMatrix3(Gm)},[Rh]:{transfer:ut,primaries:Tu,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Vm),fromReference:t=>t.applyMatrix3(Gm).convertLinearToSRGB()}},cT=new Set([ki,ju]),it={enabled:!0,_workingColorSpace:ki,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!cT.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=pl[e].toReference,r=pl[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return pl[t].primaries},getTransfer:function(t){return t===zn?Mu:pl[t].transfer}};function Zs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Oc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let gs;class L0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{gs===void 0&&(gs=Au("canvas")),gs.width=e.width,gs.height=e.height;const i=gs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=gs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Au("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Zs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Zs(n[i]/255)*255):n[i]=Zs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fT=0;class D0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fT++}),this.uuid=Ga(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(kc(r[o].image)):s.push(kc(r[o]))}else s=kc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function kc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?L0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dT=0;class Cn extends Co{constructor(e=Cn.DEFAULT_IMAGE,n=Cn.DEFAULT_MAPPING,i=ti,r=ti,s=On,o=ba,a=ni,l=Sr,u=Cn.DEFAULT_ANISOTROPY,f=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dT++}),this.uuid=Ga(),this.name="",this.source=new D0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===rs?Ot:zn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==x0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _d:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case yd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _d:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case yd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ot?rs:C0}set encoding(e){sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===rs?Ot:zn}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=x0;Cn.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,n=0,i=0,r=1){zt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],f=l[4],d=l[8],h=l[1],p=l[5],y=l[9],_=l[2],m=l[6],c=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-_)<.01&&Math.abs(y-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+_)<.1&&Math.abs(y+m)<.1&&Math.abs(u+p+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,x=(p+1)/2,C=(c+1)/2,w=(f+h)/4,R=(d+_)/4,D=(y+m)/4;return g>x&&g>C?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=w/i,s=R/i):x>C?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=w/r,s=D/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=R/s,r=D/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-y)*(m-y)+(d-_)*(d-_)+(h-f)*(h-f));return Math.abs(v)<.001&&(v=1),this.x=(m-y)/v,this.y=(d-_)/v,this.z=(h-f)/v,this.w=Math.acos((u+p+c-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hT extends Co{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new zt(0,0,e,n),this.scissorTest=!1,this.viewport=new zt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(sa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===rs?Ot:zn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Cn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new D0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cs extends hT{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class U0 extends Cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pT extends Cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Va{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],f=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],y=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=y,e[n+3]=_;return}if(d!==_||l!==h||u!==p||f!==y){let m=1-a;const c=l*h+u*p+f*y+d*_,v=c>=0?1:-1,g=1-c*c;if(g>Number.EPSILON){const C=Math.sqrt(g),w=Math.atan2(C,c*v);m=Math.sin(m*w)/C,a=Math.sin(a*w)/C}const x=a*v;if(l=l*m+h*x,u=u*m+p*x,f=f*m+y*x,d=d*m+_*x,m===1-a){const C=1/Math.sqrt(l*l+u*u+f*f+d*d);l*=C,u*=C,f*=C,d*=C}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],d=s[o],h=s[o+1],p=s[o+2],y=s[o+3];return e[n]=a*y+f*d+l*p-u*h,e[n+1]=l*y+f*h+u*d-a*p,e[n+2]=u*y+f*p+a*h-l*d,e[n+3]=f*y-a*d-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=h*f*d+u*p*y,this._y=u*p*d-h*f*y,this._z=u*f*y+h*p*d,this._w=u*f*d-h*p*y;break;case"YXZ":this._x=h*f*d+u*p*y,this._y=u*p*d-h*f*y,this._z=u*f*y-h*p*d,this._w=u*f*d+h*p*y;break;case"ZXY":this._x=h*f*d-u*p*y,this._y=u*p*d+h*f*y,this._z=u*f*y+h*p*d,this._w=u*f*d-h*p*y;break;case"ZYX":this._x=h*f*d-u*p*y,this._y=u*p*d+h*f*y,this._z=u*f*y-h*p*d,this._w=u*f*d+h*p*y;break;case"YZX":this._x=h*f*d+u*p*y,this._y=u*p*d+h*f*y,this._z=u*f*y-h*p*d,this._w=u*f*d-h*p*y;break;case"XZY":this._x=h*f*d-u*p*y,this._y=u*p*d-h*f*y,this._z=u*f*y+h*p*d,this._w=u*f*d+h*p*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],f=n[6],d=n[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(fn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+o*a+r*u-s*l,this._y=r*f+o*l+s*a-i*u,this._z=s*f+o*u+i*l-r*a,this._w=o*f-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),d=Math.sin((1-n)*f)/u,h=Math.sin(n*f)/u;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,n=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Wm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Wm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*u+o*d-a*f,this.y=i+l*f+a*u-s*d,this.z=r+l*d+s*f-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zc.copy(this).projectOnVector(e),this.sub(zc)}reflect(e){return this.sub(zc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(fn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zc=new I,Wm=new Va;class Wa{constructor(e=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qn):qn.fromBufferAttribute(s,o),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ml.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ml.copy(i.boundingBox)),ml.applyMatrix4(e.matrixWorld),this.union(ml)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bo),gl.subVectors(this.max,Bo),vs.subVectors(e.a,Bo),_s.subVectors(e.b,Bo),ys.subVectors(e.c,Bo),Hi.subVectors(_s,vs),Gi.subVectors(ys,_s),Pr.subVectors(vs,ys);let n=[0,-Hi.z,Hi.y,0,-Gi.z,Gi.y,0,-Pr.z,Pr.y,Hi.z,0,-Hi.x,Gi.z,0,-Gi.x,Pr.z,0,-Pr.x,-Hi.y,Hi.x,0,-Gi.y,Gi.x,0,-Pr.y,Pr.x,0];return!Bc(n,vs,_s,ys,gl)||(n=[1,0,0,0,1,0,0,0,1],!Bc(n,vs,_s,ys,gl))?!1:(vl.crossVectors(Hi,Gi),n=[vl.x,vl.y,vl.z],Bc(n,vs,_s,ys,gl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yi=[new I,new I,new I,new I,new I,new I,new I,new I],qn=new I,ml=new Wa,vs=new I,_s=new I,ys=new I,Hi=new I,Gi=new I,Pr=new I,Bo=new I,gl=new I,vl=new I,Lr=new I;function Bc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Lr.fromArray(t,s);const a=r.x*Math.abs(Lr.x)+r.y*Math.abs(Lr.y)+r.z*Math.abs(Lr.z),l=e.dot(Lr),u=n.dot(Lr),f=i.dot(Lr);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const mT=new Wa,Ho=new I,Hc=new I;class qu{constructor(e=new I,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):mT.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ho.subVectors(e,this.center);const n=Ho.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ho,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ho.copy(e.center).add(Hc)),this.expandByPoint(Ho.copy(e.center).sub(Hc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xi=new I,Gc=new I,_l=new I,Vi=new I,Vc=new I,yl=new I,Wc=new I;class N0{constructor(e=new I,n=new I(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=xi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,n),xi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Gc.copy(e).add(n).multiplyScalar(.5),_l.copy(n).sub(e).normalize(),Vi.copy(this.origin).sub(Gc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(_l),a=Vi.dot(this.direction),l=-Vi.dot(_l),u=Vi.lengthSq(),f=Math.abs(1-o*o);let d,h,p,y;if(f>0)if(d=o*l-a,h=o*a-l,y=s*f,d>=0)if(h>=-y)if(h<=y){const _=1/f;d*=_,h*=_,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+u}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h<=-y?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u):h<=y?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Gc).addScaledVector(_l,h),p}intersectSphere(e,n){xi.subVectors(e.center,this.origin);const i=xi.dot(this.direction),r=xi.dot(xi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,n,i,r,s){Vc.subVectors(n,e),yl.subVectors(i,e),Wc.crossVectors(Vc,yl);let o=this.direction.dot(Wc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vi.subVectors(this.origin,e);const l=a*this.direction.dot(yl.crossVectors(Vi,yl));if(l<0)return null;const u=a*this.direction.dot(Vc.cross(Vi));if(u<0||l+u>o)return null;const f=-a*Vi.dot(Wc);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It{constructor(e,n,i,r,s,o,a,l,u,f,d,h,p,y,_,m){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,f,d,h,p,y,_,m)}set(e,n,i,r,s,o,a,l,u,f,d,h,p,y,_,m){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=l,c[2]=u,c[6]=f,c[10]=d,c[14]=h,c[3]=p,c[7]=y,c[11]=_,c[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/xs.setFromMatrixColumn(e,0).length(),s=1/xs.setFromMatrixColumn(e,1).length(),o=1/xs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*f,p=o*d,y=a*f,_=a*d;n[0]=l*f,n[4]=-l*d,n[8]=u,n[1]=p+y*u,n[5]=h-_*u,n[9]=-a*l,n[2]=_-h*u,n[6]=y+p*u,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,p=l*d,y=u*f,_=u*d;n[0]=h+_*a,n[4]=y*a-p,n[8]=o*u,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=p*a-y,n[6]=_+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,p=l*d,y=u*f,_=u*d;n[0]=h-_*a,n[4]=-o*d,n[8]=y+p*a,n[1]=p+y*a,n[5]=o*f,n[9]=_-h*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,p=o*d,y=a*f,_=a*d;n[0]=l*f,n[4]=y*u-p,n[8]=h*u+_,n[1]=l*d,n[5]=_*u+h,n[9]=p*u-y,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,y=a*l,_=a*u;n[0]=l*f,n[4]=_-h*d,n[8]=y*d+p,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-u*f,n[6]=p*d+y,n[10]=h-_*d}else if(e.order==="XZY"){const h=o*l,p=o*u,y=a*l,_=a*u;n[0]=l*f,n[4]=-d,n[8]=u*f,n[1]=h*d+_,n[5]=o*f,n[9]=p*d-y,n[2]=y*d-p,n[6]=a*f,n[10]=_*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gT,e,vT)}lookAt(e,n,i){const r=this.elements;return Sn.subVectors(e,n),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Wi.crossVectors(i,Sn),Wi.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Wi.crossVectors(i,Sn)),Wi.normalize(),xl.crossVectors(Sn,Wi),r[0]=Wi.x,r[4]=xl.x,r[8]=Sn.x,r[1]=Wi.y,r[5]=xl.y,r[9]=Sn.y,r[2]=Wi.z,r[6]=xl.z,r[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],f=i[1],d=i[5],h=i[9],p=i[13],y=i[2],_=i[6],m=i[10],c=i[14],v=i[3],g=i[7],x=i[11],C=i[15],w=r[0],R=r[4],D=r[8],M=r[12],E=r[1],W=r[5],Y=r[9],re=r[13],L=r[2],H=r[6],q=r[10],$=r[14],U=r[3],F=r[7],V=r[11],K=r[15];return s[0]=o*w+a*E+l*L+u*U,s[4]=o*R+a*W+l*H+u*F,s[8]=o*D+a*Y+l*q+u*V,s[12]=o*M+a*re+l*$+u*K,s[1]=f*w+d*E+h*L+p*U,s[5]=f*R+d*W+h*H+p*F,s[9]=f*D+d*Y+h*q+p*V,s[13]=f*M+d*re+h*$+p*K,s[2]=y*w+_*E+m*L+c*U,s[6]=y*R+_*W+m*H+c*F,s[10]=y*D+_*Y+m*q+c*V,s[14]=y*M+_*re+m*$+c*K,s[3]=v*w+g*E+x*L+C*U,s[7]=v*R+g*W+x*H+C*F,s[11]=v*D+g*Y+x*q+C*V,s[15]=v*M+g*re+x*$+C*K,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],f=e[2],d=e[6],h=e[10],p=e[14],y=e[3],_=e[7],m=e[11],c=e[15];return y*(+s*l*d-r*u*d-s*a*h+i*u*h+r*a*p-i*l*p)+_*(+n*l*p-n*u*h+s*o*h-r*o*p+r*u*f-s*l*f)+m*(+n*u*d-n*a*p-s*o*d+i*o*p+s*a*f-i*u*f)+c*(-r*a*f-n*l*d+n*a*h+r*o*d-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],d=e[9],h=e[10],p=e[11],y=e[12],_=e[13],m=e[14],c=e[15],v=d*m*u-_*h*u+_*l*p-a*m*p-d*l*c+a*h*c,g=y*h*u-f*m*u-y*l*p+o*m*p+f*l*c-o*h*c,x=f*_*u-y*d*u+y*a*p-o*_*p-f*a*c+o*d*c,C=y*d*l-f*_*l-y*a*h+o*_*h+f*a*m-o*d*m,w=n*v+i*g+r*x+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=v*R,e[1]=(_*h*s-d*m*s-_*r*p+i*m*p+d*r*c-i*h*c)*R,e[2]=(a*m*s-_*l*s+_*r*u-i*m*u-a*r*c+i*l*c)*R,e[3]=(d*l*s-a*h*s-d*r*u+i*h*u+a*r*p-i*l*p)*R,e[4]=g*R,e[5]=(f*m*s-y*h*s+y*r*p-n*m*p-f*r*c+n*h*c)*R,e[6]=(y*l*s-o*m*s-y*r*u+n*m*u+o*r*c-n*l*c)*R,e[7]=(o*h*s-f*l*s+f*r*u-n*h*u-o*r*p+n*l*p)*R,e[8]=x*R,e[9]=(y*d*s-f*_*s-y*i*p+n*_*p+f*i*c-n*d*c)*R,e[10]=(o*_*s-y*a*s+y*i*u-n*_*u-o*i*c+n*a*c)*R,e[11]=(f*a*s-o*d*s-f*i*u+n*d*u+o*i*p-n*a*p)*R,e[12]=C*R,e[13]=(f*_*r-y*d*r+y*i*h-n*_*h-f*i*m+n*d*m)*R,e[14]=(y*a*r-o*_*r-y*i*l+n*_*l+o*i*m-n*a*m)*R,e[15]=(o*d*r-f*a*r+f*i*l-n*d*l-o*i*h+n*a*h)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,f=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*o,0,u*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,f=o+o,d=a+a,h=s*u,p=s*f,y=s*d,_=o*f,m=o*d,c=a*d,v=l*u,g=l*f,x=l*d,C=i.x,w=i.y,R=i.z;return r[0]=(1-(_+c))*C,r[1]=(p+x)*C,r[2]=(y-g)*C,r[3]=0,r[4]=(p-x)*w,r[5]=(1-(h+c))*w,r[6]=(m+v)*w,r[7]=0,r[8]=(y+g)*R,r[9]=(m-v)*R,r[10]=(1-(h+_))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=xs.set(r[0],r[1],r[2]).length();const o=xs.set(r[4],r[5],r[6]).length(),a=xs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Yn.copy(this);const u=1/s,f=1/o,d=1/a;return Yn.elements[0]*=u,Yn.elements[1]*=u,Yn.elements[2]*=u,Yn.elements[4]*=f,Yn.elements[5]*=f,Yn.elements[6]*=f,Yn.elements[8]*=d,Yn.elements[9]*=d,Yn.elements[10]*=d,n.setFromRotationMatrix(Yn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Di){const l=this.elements,u=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let p,y;if(a===Di)p=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===wu)p=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Di){const l=this.elements,u=1/(n-e),f=1/(i-r),d=1/(o-s),h=(n+e)*u,p=(i+r)*f;let y,_;if(a===Di)y=(o+s)*d,_=-2*d;else if(a===wu)y=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const xs=new I,Yn=new It,gT=new I(0,0,0),vT=new I(1,1,1),Wi=new I,xl=new I,Sn=new I,Xm=new It,jm=new Va;class Yu{constructor(e=0,n=0,i=0,r=Yu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],f=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(fn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-fn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(fn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-fn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(fn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-fn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Xm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return jm.setFromEuler(this),this.setFromQuaternion(jm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yu.DEFAULT_ORDER="XYZ";class I0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _T=0;const qm=new I,Ss=new Va,Si=new It,Sl=new I,Go=new I,yT=new I,xT=new Va,Ym=new I(1,0,0),$m=new I(0,1,0),Km=new I(0,0,1),ST={type:"added"},MT={type:"removed"};class _n extends Co{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_T++}),this.uuid=Ga(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const e=new I,n=new Yu,i=new Va,r=new I(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new It},normalMatrix:{value:new Ve}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new I0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ss.setFromAxisAngle(e,n),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,n){return Ss.setFromAxisAngle(e,n),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(Ym,e)}rotateY(e){return this.rotateOnAxis($m,e)}rotateZ(e){return this.rotateOnAxis(Km,e)}translateOnAxis(e,n){return qm.copy(e).applyQuaternion(this.quaternion),this.position.add(qm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ym,e)}translateY(e){return this.translateOnAxis($m,e)}translateZ(e){return this.translateOnAxis(Km,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Sl.copy(e):Sl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(Go,Sl,this.up):Si.lookAt(Sl,Go,this.up),this.quaternion.setFromRotationMatrix(Si),r&&(Si.extractRotation(r.matrixWorld),Ss.setFromRotationMatrix(Si),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ST)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(MT)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,yT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,xT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),f=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}_n.DEFAULT_UP=new I(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $n=new I,Mi=new I,Xc=new I,Ei=new I,Ms=new I,Es=new I,Qm=new I,jc=new I,qc=new I,Yc=new I;let Ml=!1;class ei{constructor(e=new I,n=new I,i=new I){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),$n.subVectors(e,n),r.cross($n);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){$n.subVectors(r,n),Mi.subVectors(i,n),Xc.subVectors(e,n);const o=$n.dot($n),a=$n.dot(Mi),l=$n.dot(Xc),u=Mi.dot(Mi),f=Mi.dot(Xc),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(u*l-a*f)*h,y=(o*f-a*l)*h;return s.set(1-p-y,y,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getUV(e,n,i,r,s,o,a,l){return Ml===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ml=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ei.x),l.addScaledVector(o,Ei.y),l.addScaledVector(a,Ei.z),l)}static isFrontFacing(e,n,i,r){return $n.subVectors(i,n),Mi.subVectors(e,n),$n.cross(Mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),$n.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ei.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Ml===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ml=!0),ei.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return ei.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ms.subVectors(r,i),Es.subVectors(s,i),jc.subVectors(e,i);const l=Ms.dot(jc),u=Es.dot(jc);if(l<=0&&u<=0)return n.copy(i);qc.subVectors(e,r);const f=Ms.dot(qc),d=Es.dot(qc);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*u;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Ms,o);Yc.subVectors(e,s);const p=Ms.dot(Yc),y=Es.dot(Yc);if(y>=0&&p<=y)return n.copy(s);const _=p*u-l*y;if(_<=0&&u>=0&&y<=0)return a=u/(u-y),n.copy(i).addScaledVector(Es,a);const m=f*y-p*d;if(m<=0&&d-f>=0&&p-y>=0)return Qm.subVectors(s,r),a=(d-f)/(d-f+(p-y)),n.copy(r).addScaledVector(Qm,a);const c=1/(m+_+h);return o=_*c,a=h*c,n.copy(i).addScaledVector(Ms,o).addScaledVector(Es,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const F0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},El={h:0,s:0,l:0};function $c(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=lT(e,1),n=fn(n,0,1),i=fn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=$c(o,s,e+1/3),this.g=$c(o,s,e),this.b=$c(o,s,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,n=Ot){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ot){const i=F0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}copyLinearToSRGB(e){return this.r=Oc(e.r),this.g=Oc(e.g),this.b=Oc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return it.fromWorkingColorSpace(jt.copy(this),e),Math.round(fn(jt.r*255,0,255))*65536+Math.round(fn(jt.g*255,0,255))*256+Math.round(fn(jt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.fromWorkingColorSpace(jt.copy(this),n);const i=jt.r,r=jt.g,s=jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const f=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=it.workingColorSpace){return it.fromWorkingColorSpace(jt.copy(this),n),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Ot){it.fromWorkingColorSpace(jt.copy(this),e);const n=jt.r,i=jt.g,r=jt.b;return e!==Ot?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+n,Xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Xi),e.getHSL(El);const i=Ic(Xi.h,El.h,n),r=Ic(Xi.s,El.s,n),s=Ic(Xi.l,El.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new Je;Je.NAMES=F0;let ET=0;class Xa extends Co{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ET++}),this.uuid=Ga(),this.name="",this.type="Material",this.blending=Qs,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pd,this.blendDst=md,this.blendEquation=kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Su,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Om,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(i.blending=this.blending),this.side!==Tr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==pd&&(i.blendSrc=this.blendSrc),this.blendDst!==md&&(i.blendDst=this.blendDst),this.blendEquation!==kr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Su&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Om&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class $i extends Xa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=y0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new I,Tl=new tt;class vi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=km,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ur,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Tl.fromBufferAttribute(this,n),Tl.applyMatrix3(e),this.setXY(n,Tl.x,Tl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix3(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix4(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyNormalMatrix(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.transformDirection(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=zo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=an(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=zo(n,this.array)),n}setX(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=zo(n,this.array)),n}setY(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=zo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=zo(n,this.array)),n}setW(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array),r=an(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array),r=an(r,this.array),s=an(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==km&&(e.usage=this.usage),e}}class O0 extends vi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class k0 extends vi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class yn extends vi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let TT=0;const Un=new It,Kc=new _n,Ts=new I,Mn=new Wa,Vo=new Wa,Lt=new I;class Wn extends Co{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:TT++}),this.uuid=Ga(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(P0(e)?k0:O0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,n,i){return Un.makeTranslation(e,n,i),this.applyMatrix4(Un),this}scale(e,n,i){return Un.makeScale(e,n,i),this.applyMatrix4(Un),this}lookAt(e){return Kc.lookAt(e),Kc.updateMatrix(),this.applyMatrix4(Kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new yn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Vo.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(Mn.min,Vo.min),Mn.expandByPoint(Lt),Lt.addVectors(Mn.max,Vo.max),Mn.expandByPoint(Lt)):(Mn.expandByPoint(Vo.min),Mn.expandByPoint(Vo.max))}Mn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Lt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)Lt.fromBufferAttribute(a,u),l&&(Ts.fromBufferAttribute(e,u),Lt.add(Ts)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],f=[];for(let E=0;E<a;E++)u[E]=new I,f[E]=new I;const d=new I,h=new I,p=new I,y=new tt,_=new tt,m=new tt,c=new I,v=new I;function g(E,W,Y){d.fromArray(r,E*3),h.fromArray(r,W*3),p.fromArray(r,Y*3),y.fromArray(o,E*2),_.fromArray(o,W*2),m.fromArray(o,Y*2),h.sub(d),p.sub(d),_.sub(y),m.sub(y);const re=1/(_.x*m.y-m.x*_.y);isFinite(re)&&(c.copy(h).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(re),v.copy(p).multiplyScalar(_.x).addScaledVector(h,-m.x).multiplyScalar(re),u[E].add(c),u[W].add(c),u[Y].add(c),f[E].add(v),f[W].add(v),f[Y].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let E=0,W=x.length;E<W;++E){const Y=x[E],re=Y.start,L=Y.count;for(let H=re,q=re+L;H<q;H+=3)g(i[H+0],i[H+1],i[H+2])}const C=new I,w=new I,R=new I,D=new I;function M(E){R.fromArray(s,E*3),D.copy(R);const W=u[E];C.copy(W),C.sub(R.multiplyScalar(R.dot(W))).normalize(),w.crossVectors(D,W);const re=w.dot(f[E])<0?-1:1;l[E*4]=C.x,l[E*4+1]=C.y,l[E*4+2]=C.z,l[E*4+3]=re}for(let E=0,W=x.length;E<W;++E){const Y=x[E],re=Y.start,L=Y.count;for(let H=re,q=re+L;H<q;H+=3)M(i[H+0]),M(i[H+1]),M(i[H+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,u=new I,f=new I,d=new I;if(e)for(let h=0,p=e.count;h<p;h+=3){const y=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),a.add(f),l.add(f),u.add(f),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Lt.fromBufferAttribute(e,n),Lt.normalize(),e.setXYZ(n,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,d=a.normalized,h=new u.constructor(l.length*f);let p=0,y=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*f;for(let c=0;c<f;c++)h[y++]=u[p++]}return new vi(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Wn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let f=0,d=u.length;f<d;f++){const h=u[f],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let d=0,h=u.length;d<h;d++){const p=u[d];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],d=s[u];for(let h=0,p=d.length;h<p;h++)f.push(d[h].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zm=new It,Dr=new N0,wl=new qu,Jm=new I,ws=new I,As=new I,Rs=new I,Qc=new I,Al=new I,Rl=new tt,Cl=new tt,bl=new tt,eg=new I,tg=new I,ng=new I,Pl=new I,Ll=new I;class dn extends _n{constructor(e=new Wn,n=new $i){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Al.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=a[l],d=s[l];f!==0&&(Qc.fromBufferAttribute(d,e),o?Al.addScaledVector(Qc,f):Al.addScaledVector(Qc.sub(n),f))}n.add(Al)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wl.copy(i.boundingSphere),wl.applyMatrix4(s),Dr.copy(e.ray).recast(e.near),!(wl.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(wl,Jm)===null||Dr.origin.distanceToSquared(Jm)>(e.far-e.near)**2))&&(Zm.copy(s).invert(),Dr.copy(e.ray).applyMatrix4(Zm),!(i.boundingBox!==null&&Dr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Dr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,_=h.length;y<_;y++){const m=h[y],c=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,C=g;x<C;x+=3){const w=a.getX(x),R=a.getX(x+1),D=a.getX(x+2);r=Dl(this,c,e,i,u,f,d,w,R,D),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const y=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=y,c=_;m<c;m+=3){const v=a.getX(m),g=a.getX(m+1),x=a.getX(m+2);r=Dl(this,o,e,i,u,f,d,v,g,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,_=h.length;y<_;y++){const m=h[y],c=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,C=g;x<C;x+=3){const w=x,R=x+1,D=x+2;r=Dl(this,c,e,i,u,f,d,w,R,D),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const y=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=y,c=_;m<c;m+=3){const v=m,g=m+1,x=m+2;r=Dl(this,o,e,i,u,f,d,v,g,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function wT(t,e,n,i,r,s,o,a){let l;if(e.side===vn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Tr,a),l===null)return null;Ll.copy(a),Ll.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Ll);return u<n.near||u>n.far?null:{distance:u,point:Ll.clone(),object:t}}function Dl(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,ws),t.getVertexPosition(l,As),t.getVertexPosition(u,Rs);const f=wT(t,e,n,i,ws,As,Rs,Pl);if(f){r&&(Rl.fromBufferAttribute(r,a),Cl.fromBufferAttribute(r,l),bl.fromBufferAttribute(r,u),f.uv=ei.getInterpolation(Pl,ws,As,Rs,Rl,Cl,bl,new tt)),s&&(Rl.fromBufferAttribute(s,a),Cl.fromBufferAttribute(s,l),bl.fromBufferAttribute(s,u),f.uv1=ei.getInterpolation(Pl,ws,As,Rs,Rl,Cl,bl,new tt),f.uv2=f.uv1),o&&(eg.fromBufferAttribute(o,a),tg.fromBufferAttribute(o,l),ng.fromBufferAttribute(o,u),f.normal=ei.getInterpolation(Pl,ws,As,Rs,eg,tg,ng,new I),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new I,materialIndex:0};ei.getNormal(ws,As,Rs,d.normal),f.face=d}return f}class ja extends Wn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],f=[],d=[];let h=0,p=0;y("z","y","x",-1,-1,i,n,e,o,s,0),y("z","y","x",1,-1,i,n,-e,o,s,1),y("x","z","y",1,1,e,i,n,r,o,2),y("x","z","y",1,-1,e,i,-n,r,o,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new yn(u,3)),this.setAttribute("normal",new yn(f,3)),this.setAttribute("uv",new yn(d,2));function y(_,m,c,v,g,x,C,w,R,D,M){const E=x/R,W=C/D,Y=x/2,re=C/2,L=w/2,H=R+1,q=D+1;let $=0,U=0;const F=new I;for(let V=0;V<q;V++){const K=V*W-re;for(let Z=0;Z<H;Z++){const j=Z*E-Y;F[_]=j*v,F[m]=K*g,F[c]=L,u.push(F.x,F.y,F.z),F[_]=0,F[m]=0,F[c]=w>0?1:-1,f.push(F.x,F.y,F.z),d.push(Z/R),d.push(1-V/D),$+=1}}for(let V=0;V<D;V++)for(let K=0;K<R;K++){const Z=h+K+H*V,j=h+K+H*(V+1),Q=h+(K+1)+H*(V+1),ue=h+(K+1)+H*V;l.push(Z,j,ue),l.push(j,Q,ue),U+=6}a.addGroup(p,U,M),p+=U,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ja(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function To(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Jt(t){const e={};for(let n=0;n<t.length;n++){const i=To(t[n]);for(const r in i)e[r]=i[r]}return e}function AT(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function z0(t){return t.getRenderTarget()===null?t.outputColorSpace:it.workingColorSpace}const RT={clone:To,merge:Jt};var CT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fs extends Xa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=CT,this.fragmentShader=bT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=To(e.uniforms),this.uniformsGroups=AT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class B0 extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=Di}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class kn extends B0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Sd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sd*2*Math.atan(Math.tan(Nc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Nc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Cs=-90,bs=1;class PT extends _n{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new kn(Cs,bs,e,n);r.layers=this.layers,this.add(r);const s=new kn(Cs,bs,e,n);s.layers=this.layers,this.add(s);const o=new kn(Cs,bs,e,n);o.layers=this.layers,this.add(o);const a=new kn(Cs,bs,e,n);a.layers=this.layers,this.add(a);const l=new kn(Cs,bs,e,n);l.layers=this.layers,this.add(l);const u=new kn(Cs,bs,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===Di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,p),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class H0 extends Cn{constructor(e,n,i,r,s,o,a,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:So,super(e,n,i,r,s,o,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class LT extends cs{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(sa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===rs?Ot:zn),this.texture=new H0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:On}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ja(5,5,5),s=new fs({name:"CubemapFromEquirect",uniforms:To(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:yr});s.uniforms.tEquirect.value=n;const o=new dn(r,s),a=n.minFilter;return n.minFilter===ba&&(n.minFilter=On),new PT(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Zc=new I,DT=new I,UT=new Ve;class Fr{constructor(e=new I(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Zc.subVectors(i,n).cross(DT.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Zc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||UT.getNormalMatrix(e),r=this.coplanarPoint(Zc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ur=new qu,Ul=new I;class G0{constructor(e=new Fr,n=new Fr,i=new Fr,r=new Fr,s=new Fr,o=new Fr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Di){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],f=r[5],d=r[6],h=r[7],p=r[8],y=r[9],_=r[10],m=r[11],c=r[12],v=r[13],g=r[14],x=r[15];if(i[0].setComponents(l-s,h-u,m-p,x-c).normalize(),i[1].setComponents(l+s,h+u,m+p,x+c).normalize(),i[2].setComponents(l+o,h+f,m+y,x+v).normalize(),i[3].setComponents(l-o,h-f,m-y,x-v).normalize(),i[4].setComponents(l-a,h-d,m-_,x-g).normalize(),n===Di)i[5].setComponents(l+a,h+d,m+_,x+g).normalize();else if(n===wu)i[5].setComponents(a,d,_,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){return Ur.center.set(0,0,0),Ur.radius=.7071067811865476,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ul.x=r.normal.x>0?e.max.x:e.min.x,Ul.y=r.normal.y>0?e.max.y:e.min.y,Ul.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ul)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function V0(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function NT(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,f){const d=u.array,h=u.usage,p=d.byteLength,y=t.createBuffer();t.bindBuffer(f,y),t.bufferData(f,d,h),u.onUploadCallback();let _;if(d instanceof Float32Array)_=t.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=t.SHORT;else if(d instanceof Uint32Array)_=t.UNSIGNED_INT;else if(d instanceof Int32Array)_=t.INT;else if(d instanceof Int8Array)_=t.BYTE;else if(d instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:y,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:p}}function s(u,f,d){const h=f.array,p=f._updateRange,y=f.updateRanges;if(t.bindBuffer(d,u),p.count===-1&&y.length===0&&t.bufferSubData(d,0,h),y.length!==0){for(let _=0,m=y.length;_<m;_++){const c=y[_];n?t.bufferSubData(d,c.start*h.BYTES_PER_ELEMENT,h,c.start,c.count):t.bufferSubData(d,c.start*h.BYTES_PER_ELEMENT,h.subarray(c.start,c.start+c.count))}f.clearUpdateRanges()}p.count!==-1&&(n?t.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):t.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),f.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f&&(t.deleteBuffer(f.buffer),i.delete(u))}function l(u,f){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);if(d===void 0)i.set(u,r(u,f));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,u,f),d.version=u.version}}return{get:o,remove:a,update:l}}class Ch extends Wn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,d=e/a,h=n/l,p=[],y=[],_=[],m=[];for(let c=0;c<f;c++){const v=c*h-o;for(let g=0;g<u;g++){const x=g*d-s;y.push(x,-v,0),_.push(0,0,1),m.push(g/a),m.push(1-c/l)}}for(let c=0;c<l;c++)for(let v=0;v<a;v++){const g=v+u*c,x=v+u*(c+1),C=v+1+u*(c+1),w=v+1+u*c;p.push(g,x,w),p.push(x,C,w)}this.setIndex(p),this.setAttribute("position",new yn(y,3)),this.setAttribute("normal",new yn(_,3)),this.setAttribute("uv",new yn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ch(e.width,e.height,e.widthSegments,e.heightSegments)}}var IT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,FT=`#ifdef USE_ALPHAHASH
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
#endif`,OT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zT=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,BT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,HT=`#ifdef USE_AOMAP
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
#endif`,GT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,VT=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,WT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,XT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,YT=`#ifdef USE_IRIDESCENCE
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
#endif`,$T=`#ifdef USE_BUMPMAP
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
#endif`,KT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,QT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ZT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,JT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ew=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,iw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,rw=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,sw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ow=`vec3 transformedNormal = objectNormal;
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
#endif`,aw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fw="gl_FragColor = linearToOutputTexel( gl_FragColor );",dw=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,hw=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,pw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mw=`#ifdef USE_ENVMAP
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
#endif`,gw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vw=`#ifdef USE_ENVMAP
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
#endif`,_w=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mw=`#ifdef USE_GRADIENTMAP
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
}`,Ew=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Tw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ww=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Aw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rw=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,Cw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,bw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Uw=`PhysicalMaterial material;
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
#endif`,Nw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,Iw=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Fw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ow=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Hw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Gw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ww=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xw=`#if defined( USE_POINTS_UV )
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
#endif`,jw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$w=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Kw=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Qw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Zw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,e1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,i1=`#ifdef USE_NORMALMAP
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
#endif`,r1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,s1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,o1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,a1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,l1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,u1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,c1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,f1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,d1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,h1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,p1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,m1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,g1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,v1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,y1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,x1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,S1=`#ifdef USE_SKINNING
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
#endif`,M1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,E1=`#ifdef USE_SKINNING
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
#endif`,T1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,w1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,A1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,R1=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,C1=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,b1=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,P1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const N1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,I1=`uniform sampler2D t2D;
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
}`,F1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B1=`#include <common>
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
}`,H1=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,G1=`#define DISTANCE
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
}`,V1=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,W1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,X1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j1=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,q1=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Y1=`#include <common>
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
}`,$1=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,K1=`#define LAMBERT
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
}`,Q1=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Z1=`#define MATCAP
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
}`,J1=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,eA=`#define NORMAL
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
}`,tA=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nA=`#define PHONG
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
}`,iA=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,rA=`#define STANDARD
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
}`,sA=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,oA=`#define TOON
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
}`,aA=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,lA=`uniform float size;
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
}`,uA=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,cA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,fA=`uniform vec3 color;
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
}`,dA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,hA=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Oe={alphahash_fragment:IT,alphahash_pars_fragment:FT,alphamap_fragment:OT,alphamap_pars_fragment:kT,alphatest_fragment:zT,alphatest_pars_fragment:BT,aomap_fragment:HT,aomap_pars_fragment:GT,batching_pars_vertex:VT,batching_vertex:WT,begin_vertex:XT,beginnormal_vertex:jT,bsdfs:qT,iridescence_fragment:YT,bumpmap_pars_fragment:$T,clipping_planes_fragment:KT,clipping_planes_pars_fragment:QT,clipping_planes_pars_vertex:ZT,clipping_planes_vertex:JT,color_fragment:ew,color_pars_fragment:tw,color_pars_vertex:nw,color_vertex:iw,common:rw,cube_uv_reflection_fragment:sw,defaultnormal_vertex:ow,displacementmap_pars_vertex:aw,displacementmap_vertex:lw,emissivemap_fragment:uw,emissivemap_pars_fragment:cw,colorspace_fragment:fw,colorspace_pars_fragment:dw,envmap_fragment:hw,envmap_common_pars_fragment:pw,envmap_pars_fragment:mw,envmap_pars_vertex:gw,envmap_physical_pars_fragment:Cw,envmap_vertex:vw,fog_vertex:_w,fog_pars_vertex:yw,fog_fragment:xw,fog_pars_fragment:Sw,gradientmap_pars_fragment:Mw,lightmap_fragment:Ew,lightmap_pars_fragment:Tw,lights_lambert_fragment:ww,lights_lambert_pars_fragment:Aw,lights_pars_begin:Rw,lights_toon_fragment:bw,lights_toon_pars_fragment:Pw,lights_phong_fragment:Lw,lights_phong_pars_fragment:Dw,lights_physical_fragment:Uw,lights_physical_pars_fragment:Nw,lights_fragment_begin:Iw,lights_fragment_maps:Fw,lights_fragment_end:Ow,logdepthbuf_fragment:kw,logdepthbuf_pars_fragment:zw,logdepthbuf_pars_vertex:Bw,logdepthbuf_vertex:Hw,map_fragment:Gw,map_pars_fragment:Vw,map_particle_fragment:Ww,map_particle_pars_fragment:Xw,metalnessmap_fragment:jw,metalnessmap_pars_fragment:qw,morphcolor_vertex:Yw,morphnormal_vertex:$w,morphtarget_pars_vertex:Kw,morphtarget_vertex:Qw,normal_fragment_begin:Zw,normal_fragment_maps:Jw,normal_pars_fragment:e1,normal_pars_vertex:t1,normal_vertex:n1,normalmap_pars_fragment:i1,clearcoat_normal_fragment_begin:r1,clearcoat_normal_fragment_maps:s1,clearcoat_pars_fragment:o1,iridescence_pars_fragment:a1,opaque_fragment:l1,packing:u1,premultiplied_alpha_fragment:c1,project_vertex:f1,dithering_fragment:d1,dithering_pars_fragment:h1,roughnessmap_fragment:p1,roughnessmap_pars_fragment:m1,shadowmap_pars_fragment:g1,shadowmap_pars_vertex:v1,shadowmap_vertex:_1,shadowmask_pars_fragment:y1,skinbase_vertex:x1,skinning_pars_vertex:S1,skinning_vertex:M1,skinnormal_vertex:E1,specularmap_fragment:T1,specularmap_pars_fragment:w1,tonemapping_fragment:A1,tonemapping_pars_fragment:R1,transmission_fragment:C1,transmission_pars_fragment:b1,uv_pars_fragment:P1,uv_pars_vertex:L1,uv_vertex:D1,worldpos_vertex:U1,background_vert:N1,background_frag:I1,backgroundCube_vert:F1,backgroundCube_frag:O1,cube_vert:k1,cube_frag:z1,depth_vert:B1,depth_frag:H1,distanceRGBA_vert:G1,distanceRGBA_frag:V1,equirect_vert:W1,equirect_frag:X1,linedashed_vert:j1,linedashed_frag:q1,meshbasic_vert:Y1,meshbasic_frag:$1,meshlambert_vert:K1,meshlambert_frag:Q1,meshmatcap_vert:Z1,meshmatcap_frag:J1,meshnormal_vert:eA,meshnormal_frag:tA,meshphong_vert:nA,meshphong_frag:iA,meshphysical_vert:rA,meshphysical_frag:sA,meshtoon_vert:oA,meshtoon_frag:aA,points_vert:lA,points_frag:uA,shadow_vert:cA,shadow_frag:fA,sprite_vert:dA,sprite_frag:hA},oe={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},di={basic:{uniforms:Jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Je(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Jt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Jt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Je(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Jt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Jt([oe.points,oe.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Jt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Jt([oe.common,oe.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Jt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Jt([oe.sprite,oe.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Jt([oe.common,oe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Jt([oe.lights,oe.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};di.physical={uniforms:Jt([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Nl={r:0,b:0,g:0};function pA(t,e,n,i,r,s,o){const a=new Je(0);let l=s===!0?0:1,u,f,d=null,h=0,p=null;function y(m,c){let v=!1,g=c.isScene===!0?c.background:null;g&&g.isTexture&&(g=(c.backgroundBlurriness>0?n:e).get(g)),g===null?_(a,l):g&&g.isColor&&(_(g,1),v=!0);const x=t.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,o):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Xu)?(f===void 0&&(f=new dn(new ja(1,1,1),new fs({name:"BackgroundCubeMaterial",uniforms:To(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(C,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=g,f.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,f.material.toneMapped=it.getTransfer(g.colorSpace)!==ut,(d!==g||h!==g.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,d=g,h=g.version,p=t.toneMapping),f.layers.enableAll(),m.unshift(f,f.geometry,f.material,0,0,null)):g&&g.isTexture&&(u===void 0&&(u=new dn(new Ch(2,2),new fs({name:"BackgroundMaterial",uniforms:To(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.toneMapped=it.getTransfer(g.colorSpace)!==ut,g.matrixAutoUpdate===!0&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||h!==g.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=g,h=g.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function _(m,c){m.getRGB(Nl,z0(t)),i.buffers.color.setClear(Nl.r,Nl.g,Nl.b,c,o)}return{getClearColor:function(){return a},setClearColor:function(m,c=1){a.set(m),l=c,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:y}}function mA(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,f=!1;function d(L,H,q,$,U){let F=!1;if(o){const V=_($,q,H);u!==V&&(u=V,p(u.object)),F=c(L,$,q,U),F&&v(L,$,q,U)}else{const V=H.wireframe===!0;(u.geometry!==$.id||u.program!==q.id||u.wireframe!==V)&&(u.geometry=$.id,u.program=q.id,u.wireframe=V,F=!0)}U!==null&&n.update(U,t.ELEMENT_ARRAY_BUFFER),(F||f)&&(f=!1,D(L,H,q,$),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(U).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(L){return i.isWebGL2?t.bindVertexArray(L):s.bindVertexArrayOES(L)}function y(L){return i.isWebGL2?t.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function _(L,H,q){const $=q.wireframe===!0;let U=a[L.id];U===void 0&&(U={},a[L.id]=U);let F=U[H.id];F===void 0&&(F={},U[H.id]=F);let V=F[$];return V===void 0&&(V=m(h()),F[$]=V),V}function m(L){const H=[],q=[],$=[];for(let U=0;U<r;U++)H[U]=0,q[U]=0,$[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:q,attributeDivisors:$,object:L,attributes:{},index:null}}function c(L,H,q,$){const U=u.attributes,F=H.attributes;let V=0;const K=q.getAttributes();for(const Z in K)if(K[Z].location>=0){const Q=U[Z];let ue=F[Z];if(ue===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(ue=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(ue=L.instanceColor)),Q===void 0||Q.attribute!==ue||ue&&Q.data!==ue.data)return!0;V++}return u.attributesNum!==V||u.index!==$}function v(L,H,q,$){const U={},F=H.attributes;let V=0;const K=q.getAttributes();for(const Z in K)if(K[Z].location>=0){let Q=F[Z];Q===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor));const ue={};ue.attribute=Q,Q&&Q.data&&(ue.data=Q.data),U[Z]=ue,V++}u.attributes=U,u.attributesNum=V,u.index=$}function g(){const L=u.newAttributes;for(let H=0,q=L.length;H<q;H++)L[H]=0}function x(L){C(L,0)}function C(L,H){const q=u.newAttributes,$=u.enabledAttributes,U=u.attributeDivisors;q[L]=1,$[L]===0&&(t.enableVertexAttribArray(L),$[L]=1),U[L]!==H&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,H),U[L]=H)}function w(){const L=u.newAttributes,H=u.enabledAttributes;for(let q=0,$=H.length;q<$;q++)H[q]!==L[q]&&(t.disableVertexAttribArray(q),H[q]=0)}function R(L,H,q,$,U,F,V){V===!0?t.vertexAttribIPointer(L,H,q,U,F):t.vertexAttribPointer(L,H,q,$,U,F)}function D(L,H,q,$){if(i.isWebGL2===!1&&(L.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const U=$.attributes,F=q.getAttributes(),V=H.defaultAttributeValues;for(const K in F){const Z=F[K];if(Z.location>=0){let j=U[K];if(j===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(j=L.instanceColor)),j!==void 0){const Q=j.normalized,ue=j.itemSize,pe=n.get(j);if(pe===void 0)continue;const ve=pe.buffer,Ue=pe.type,Ie=pe.bytesPerElement,Re=i.isWebGL2===!0&&(Ue===t.INT||Ue===t.UNSIGNED_INT||j.gpuType===S0);if(j.isInterleavedBufferAttribute){const Ye=j.data,O=Ye.stride,Kt=j.offset;if(Ye.isInstancedInterleavedBuffer){for(let Ee=0;Ee<Z.locationSize;Ee++)C(Z.location+Ee,Ye.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ye.meshPerAttribute*Ye.count)}else for(let Ee=0;Ee<Z.locationSize;Ee++)x(Z.location+Ee);t.bindBuffer(t.ARRAY_BUFFER,ve);for(let Ee=0;Ee<Z.locationSize;Ee++)R(Z.location+Ee,ue/Z.locationSize,Ue,Q,O*Ie,(Kt+ue/Z.locationSize*Ee)*Ie,Re)}else{if(j.isInstancedBufferAttribute){for(let Ye=0;Ye<Z.locationSize;Ye++)C(Z.location+Ye,j.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Ye=0;Ye<Z.locationSize;Ye++)x(Z.location+Ye);t.bindBuffer(t.ARRAY_BUFFER,ve);for(let Ye=0;Ye<Z.locationSize;Ye++)R(Z.location+Ye,ue/Z.locationSize,Ue,Q,ue*Ie,ue/Z.locationSize*Ye*Ie,Re)}}else if(V!==void 0){const Q=V[K];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(Z.location,Q);break;case 3:t.vertexAttrib3fv(Z.location,Q);break;case 4:t.vertexAttrib4fv(Z.location,Q);break;default:t.vertexAttrib1fv(Z.location,Q)}}}}w()}function M(){Y();for(const L in a){const H=a[L];for(const q in H){const $=H[q];for(const U in $)y($[U].object),delete $[U];delete H[q]}delete a[L]}}function E(L){if(a[L.id]===void 0)return;const H=a[L.id];for(const q in H){const $=H[q];for(const U in $)y($[U].object),delete $[U];delete H[q]}delete a[L.id]}function W(L){for(const H in a){const q=a[H];if(q[L.id]===void 0)continue;const $=q[L.id];for(const U in $)y($[U].object),delete $[U];delete q[L.id]}}function Y(){re(),f=!0,u!==l&&(u=l,p(u.object))}function re(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:re,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:W,initAttributes:g,enableAttribute:x,disableUnusedAttributes:w}}function gA(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}function a(f,d){t.drawArrays(s,f,d),n.update(d,s,1)}function l(f,d,h){if(h===0)return;let p,y;if(r)p=t,y="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[y](s,f,d,h),n.update(d,s,h)}function u(f,d,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let y=0;y<h;y++)this.render(f[y],d[y]);else{p.multiDrawArraysWEBGL(s,f,0,d,0,h);let y=0;for(let _=0;_<h;_++)y+=d[_];n.update(y,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function vA(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),c=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,x=o||e.has("OES_texture_float"),C=g&&x,w=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:m,maxVaryings:c,maxFragmentUniforms:v,vertexTextures:g,floatFragmentTextures:x,floatVertexTextures:C,maxSamples:w}}function _A(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Fr,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,p){const y=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,c=t.get(d);if(!r||y===null||y.length===0||s&&!m)s?f(null):u();else{const v=s?0:i,g=v*4;let x=c.clippingState||null;l.value=x,x=f(y,h,g,p);for(let C=0;C!==g;++C)x[C]=n[C];c.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,p,y){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,y!==!0||m===null){const c=p+_*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<c)&&(m=new Float32Array(c));for(let g=0,x=p;g!==_;++g,x+=4)o.copy(d[g]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function yA(t){let e=new WeakMap;function n(o,a){return a===gd?o.mapping=So:a===vd&&(o.mapping=Mo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===gd||a===vd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new LT(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class xA extends B0{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Vs=4,ig=[.125,.215,.35,.446,.526,.582],zr=20,Jc=new xA,rg=new Je;let ef=null,tf=0,nf=0;const Or=(1+Math.sqrt(5))/2,Ps=1/Or,sg=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Or,Ps),new I(0,Or,-Ps),new I(Ps,0,Or),new I(-Ps,0,Or),new I(Or,Ps,0),new I(-Or,Ps,0)];class og{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){ef=this._renderer.getRenderTarget(),tf=this._renderer.getActiveCubeFace(),nf=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ug(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ef,tf,nf),e.scissorTest=!1,Il(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===So||e.mapping===Mo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ef=this._renderer.getRenderTarget(),tf=this._renderer.getActiveCubeFace(),nf=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:On,minFilter:On,generateMipmaps:!1,type:Pa,format:ni,colorSpace:ki,depthBuffer:!1},r=ag(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ag(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=SA(s)),this._blurMaterial=MA(s,e,n)}return r}_compileMaterial(e){const n=new dn(this._lodPlanes[0],e);this._renderer.compile(n,Jc)}_sceneToCubeUV(e,n,i,r){const a=new kn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(rg),f.toneMapping=xr,f.autoClear=!1;const p=new $i({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),y=new dn(new ja,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(rg),_=!0);for(let c=0;c<6;c++){const v=c%3;v===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):v===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const g=this._cubeSize;Il(r,v*g,c>2?g:0,g,g),f.setRenderTarget(r),_&&f.render(y,a),f.render(e,a)}y.geometry.dispose(),y.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===So||e.mapping===Mo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ug()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new dn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Il(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Jc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=sg[(r-1)%sg.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new dn(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*zr-1),_=s/y,m=isFinite(s)?1+Math.floor(f*_):zr;m>zr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zr}`);const c=[];let v=0;for(let R=0;R<zr;++R){const D=R/_,M=Math.exp(-D*D/2);c.push(M),R===0?v+=M:R<m&&(v+=2*M)}for(let R=0;R<c.length;R++)c[R]=c[R]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=c,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:g}=this;h.dTheta.value=y,h.mipInt.value=g-i;const x=this._sizeLods[r],C=3*x*(r>g-Vs?r-g+Vs:0),w=4*(this._cubeSize-x);Il(n,C,w,3*x,2*x),l.setRenderTarget(n),l.render(d,Jc)}}function SA(t){const e=[],n=[],i=[];let r=t;const s=t-Vs+1+ig.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Vs?l=ig[o-t+Vs-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,d=1+u,h=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,y=6,_=3,m=2,c=1,v=new Float32Array(_*y*p),g=new Float32Array(m*y*p),x=new Float32Array(c*y*p);for(let w=0;w<p;w++){const R=w%3*2/3-1,D=w>2?0:-1,M=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];v.set(M,_*y*w),g.set(h,m*y*w);const E=[w,w,w,w,w,w];x.set(E,c*y*w)}const C=new Wn;C.setAttribute("position",new vi(v,_)),C.setAttribute("uv",new vi(g,m)),C.setAttribute("faceIndex",new vi(x,c)),e.push(C),r>Vs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function ag(t,e,n){const i=new cs(t,e,n);return i.texture.mapping=Xu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Il(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function MA(t,e,n){const i=new Float32Array(zr),r=new I(0,1,0);return new fs({name:"SphericalGaussianBlur",defines:{n:zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:bh(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function lg(){return new fs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bh(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function ug(){return new fs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function bh(){return`

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
	`}function EA(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===gd||l===vd,f=l===So||l===Mo;if(u||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new og(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||f&&d&&r(d)){n===null&&(n=new og(t));const h=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function TA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function wA(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const y in h.attributes)e.remove(h.attributes[y]);for(const y in h.morphAttributes){const _=h.morphAttributes[y];for(let m=0,c=_.length;m<c;m++)e.remove(_[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const y in h)e.update(h[y],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const y in p){const _=p[y];for(let m=0,c=_.length;m<c;m++)e.update(_[m],t.ARRAY_BUFFER)}}function u(d){const h=[],p=d.index,y=d.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let g=0,x=v.length;g<x;g+=3){const C=v[g+0],w=v[g+1],R=v[g+2];h.push(C,w,w,R,R,C)}}else if(y!==void 0){const v=y.array;_=y.version;for(let g=0,x=v.length/3-1;g<x;g+=3){const C=g+0,w=g+1,R=g+2;h.push(C,w,w,R,R,C)}}else return;const m=new(P0(h)?k0:O0)(h,1);m.version=_;const c=s.get(d);c&&e.remove(c),s.set(d,m)}function f(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function AA(t,e,n,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function u(p){a=p.type,l=p.bytesPerElement}function f(p,y){t.drawElements(s,y,a,p*l),n.update(y,s,1)}function d(p,y,_){if(_===0)return;let m,c;if(r)m=t,c="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),c="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[c](s,y,a,p*l,_),n.update(y,s,_)}function h(p,y,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let c=0;c<_;c++)this.render(p[c]/l,y[c]);else{m.multiDrawElementsWEBGL(s,y,0,a,p,0,_);let c=0;for(let v=0;v<_;v++)c+=y[v];n.update(c,s,1)}}this.setMode=o,this.setIndex=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function RA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function CA(t,e){return t[0]-e[0]}function bA(t,e){return Math.abs(e[1])-Math.abs(t[1])}function PA(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new zt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,f,d){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const y=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=y!==void 0?y.length:0;let m=s.get(f);if(m===void 0||m.count!==_){let H=function(){re.dispose(),s.delete(f),f.removeEventListener("dispose",H)};var p=H;m!==void 0&&m.texture.dispose();const g=f.morphAttributes.position!==void 0,x=f.morphAttributes.normal!==void 0,C=f.morphAttributes.color!==void 0,w=f.morphAttributes.position||[],R=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let M=0;g===!0&&(M=1),x===!0&&(M=2),C===!0&&(M=3);let E=f.attributes.position.count*M,W=1;E>e.maxTextureSize&&(W=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const Y=new Float32Array(E*W*4*_),re=new U0(Y,E,W,_);re.type=ur,re.needsUpdate=!0;const L=M*4;for(let q=0;q<_;q++){const $=w[q],U=R[q],F=D[q],V=E*W*4*q;for(let K=0;K<$.count;K++){const Z=K*L;g===!0&&(o.fromBufferAttribute($,K),Y[V+Z+0]=o.x,Y[V+Z+1]=o.y,Y[V+Z+2]=o.z,Y[V+Z+3]=0),x===!0&&(o.fromBufferAttribute(U,K),Y[V+Z+4]=o.x,Y[V+Z+5]=o.y,Y[V+Z+6]=o.z,Y[V+Z+7]=0),C===!0&&(o.fromBufferAttribute(F,K),Y[V+Z+8]=o.x,Y[V+Z+9]=o.y,Y[V+Z+10]=o.z,Y[V+Z+11]=F.itemSize===4?o.w:1)}}m={count:_,texture:re,size:new tt(E,W)},s.set(f,m),f.addEventListener("dispose",H)}let c=0;for(let g=0;g<h.length;g++)c+=h[g];const v=f.morphTargetsRelative?1:1-c;d.getUniforms().setValue(t,"morphTargetBaseInfluence",v),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const y=h===void 0?0:h.length;let _=i[f.id];if(_===void 0||_.length!==y){_=[];for(let x=0;x<y;x++)_[x]=[x,0];i[f.id]=_}for(let x=0;x<y;x++){const C=_[x];C[0]=x,C[1]=h[x]}_.sort(bA);for(let x=0;x<8;x++)x<y&&_[x][1]?(a[x][0]=_[x][0],a[x][1]=_[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(CA);const m=f.morphAttributes.position,c=f.morphAttributes.normal;let v=0;for(let x=0;x<8;x++){const C=a[x],w=C[0],R=C[1];w!==Number.MAX_SAFE_INTEGER&&R?(m&&f.getAttribute("morphTarget"+x)!==m[w]&&f.setAttribute("morphTarget"+x,m[w]),c&&f.getAttribute("morphNormal"+x)!==c[w]&&f.setAttribute("morphNormal"+x,c[w]),r[x]=R,v+=R):(m&&f.hasAttribute("morphTarget"+x)===!0&&f.deleteAttribute("morphTarget"+x),c&&f.hasAttribute("morphNormal"+x)===!0&&f.deleteAttribute("morphNormal"+x),r[x]=0)}const g=f.morphTargetsRelative?1:1-v;d.getUniforms().setValue(t,"morphTargetBaseInfluence",g),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function LA(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class W0 extends Cn{constructor(e,n,i,r,s,o,a,l,u,f){if(f=f!==void 0?f:is,f!==is&&f!==Eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===is&&(i=lr),i===void 0&&f===Eo&&(i=ns),super(null,r,s,o,a,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const X0=new Cn,j0=new W0(1,1);j0.compareFunction=b0;const q0=new U0,Y0=new pT,$0=new H0,cg=[],fg=[],dg=new Float32Array(16),hg=new Float32Array(9),pg=new Float32Array(4);function bo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=cg[r];if(s===void 0&&(s=new Float32Array(r),cg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ct(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function $u(t,e){let n=fg[e];n===void 0&&(n=new Int32Array(e),fg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function DA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function UA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),Ct(n,e)}}function NA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),Ct(n,e)}}function IA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),Ct(n,e)}}function FA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ct(n,e)}else{if(Rt(n,i))return;pg.set(i),t.uniformMatrix2fv(this.addr,!1,pg),Ct(n,i)}}function OA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ct(n,e)}else{if(Rt(n,i))return;hg.set(i),t.uniformMatrix3fv(this.addr,!1,hg),Ct(n,i)}}function kA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ct(n,e)}else{if(Rt(n,i))return;dg.set(i),t.uniformMatrix4fv(this.addr,!1,dg),Ct(n,i)}}function zA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function BA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2iv(this.addr,e),Ct(n,e)}}function HA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3iv(this.addr,e),Ct(n,e)}}function GA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4iv(this.addr,e),Ct(n,e)}}function VA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function WA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2uiv(this.addr,e),Ct(n,e)}}function XA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3uiv(this.addr,e),Ct(n,e)}}function jA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4uiv(this.addr,e),Ct(n,e)}}function qA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?j0:X0;n.setTexture2D(e||s,r)}function YA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Y0,r)}function $A(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||$0,r)}function KA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||q0,r)}function QA(t){switch(t){case 5126:return DA;case 35664:return UA;case 35665:return NA;case 35666:return IA;case 35674:return FA;case 35675:return OA;case 35676:return kA;case 5124:case 35670:return zA;case 35667:case 35671:return BA;case 35668:case 35672:return HA;case 35669:case 35673:return GA;case 5125:return VA;case 36294:return WA;case 36295:return XA;case 36296:return jA;case 35678:case 36198:case 36298:case 36306:case 35682:return qA;case 35679:case 36299:case 36307:return YA;case 35680:case 36300:case 36308:case 36293:return $A;case 36289:case 36303:case 36311:case 36292:return KA}}function ZA(t,e){t.uniform1fv(this.addr,e)}function JA(t,e){const n=bo(e,this.size,2);t.uniform2fv(this.addr,n)}function eR(t,e){const n=bo(e,this.size,3);t.uniform3fv(this.addr,n)}function tR(t,e){const n=bo(e,this.size,4);t.uniform4fv(this.addr,n)}function nR(t,e){const n=bo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function iR(t,e){const n=bo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function rR(t,e){const n=bo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function sR(t,e){t.uniform1iv(this.addr,e)}function oR(t,e){t.uniform2iv(this.addr,e)}function aR(t,e){t.uniform3iv(this.addr,e)}function lR(t,e){t.uniform4iv(this.addr,e)}function uR(t,e){t.uniform1uiv(this.addr,e)}function cR(t,e){t.uniform2uiv(this.addr,e)}function fR(t,e){t.uniform3uiv(this.addr,e)}function dR(t,e){t.uniform4uiv(this.addr,e)}function hR(t,e,n){const i=this.cache,r=e.length,s=$u(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||X0,s[o])}function pR(t,e,n){const i=this.cache,r=e.length,s=$u(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Y0,s[o])}function mR(t,e,n){const i=this.cache,r=e.length,s=$u(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||$0,s[o])}function gR(t,e,n){const i=this.cache,r=e.length,s=$u(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||q0,s[o])}function vR(t){switch(t){case 5126:return ZA;case 35664:return JA;case 35665:return eR;case 35666:return tR;case 35674:return nR;case 35675:return iR;case 35676:return rR;case 5124:case 35670:return sR;case 35667:case 35671:return oR;case 35668:case 35672:return aR;case 35669:case 35673:return lR;case 5125:return uR;case 36294:return cR;case 36295:return fR;case 36296:return dR;case 35678:case 36198:case 36298:case 36306:case 35682:return hR;case 35679:case 36299:case 36307:return pR;case 35680:case 36300:case 36308:case 36293:return mR;case 36289:case 36303:case 36311:case 36292:return gR}}class _R{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=QA(n.type)}}class yR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=vR(n.type)}}class xR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const rf=/(\w+)(\])?(\[|\.)?/g;function mg(t,e){t.seq.push(e),t.map[e.id]=e}function SR(t,e,n){const i=t.name,r=i.length;for(rf.lastIndex=0;;){const s=rf.exec(i),o=rf.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){mg(n,u===void 0?new _R(a,t,e):new yR(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new xR(a),mg(n,d)),n=d}}}class $l{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);SR(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function gg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const MR=37297;let ER=0;function TR(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function wR(t){const e=it.getPrimaries(it.workingColorSpace),n=it.getPrimaries(t);let i;switch(e===n?i="":e===Tu&&n===Eu?i="LinearDisplayP3ToLinearSRGB":e===Eu&&n===Tu&&(i="LinearSRGBToLinearDisplayP3"),t){case ki:case ju:return[i,"LinearTransferOETF"];case Ot:case Rh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function vg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+TR(t.getShaderSource(e),o)}else return r}function AR(t,e){const n=wR(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function RR(t,e){let n;switch(e){case FE:n="Linear";break;case OE:n="Reinhard";break;case kE:n="OptimizedCineon";break;case zE:n="ACESFilmic";break;case HE:n="AgX";break;case BE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function CR(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ws).join(`
`)}function bR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ws).join(`
`)}function PR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function LR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ws(t){return t!==""}function _g(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const DR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ed(t){return t.replace(DR,NR)}const UR=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function NR(t,e){let n=Oe[e];if(n===void 0){const i=UR.get(e);if(i!==void 0)n=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ed(n)}const IR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xg(t){return t.replace(IR,FR)}function FR(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Sg(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function OR(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===_0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===cE?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===wi&&(e="SHADOWMAP_TYPE_VSM"),e}function kR(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case So:case Mo:e="ENVMAP_TYPE_CUBE";break;case Xu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zR(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Mo:e="ENVMAP_MODE_REFRACTION";break}return e}function BR(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case y0:e="ENVMAP_BLENDING_MULTIPLY";break;case NE:e="ENVMAP_BLENDING_MIX";break;case IE:e="ENVMAP_BLENDING_ADD";break}return e}function HR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function GR(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=OR(n),u=kR(n),f=zR(n),d=BR(n),h=HR(n),p=n.isWebGL2?"":CR(n),y=bR(n),_=PR(s),m=r.createProgram();let c,v,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ws).join(`
`),c.length>0&&(c+=`
`),v=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ws).join(`
`),v.length>0&&(v+=`
`)):(c=[Sg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),v=[p,Sg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==xr?"#define TONE_MAPPING":"",n.toneMapping!==xr?Oe.tonemapping_pars_fragment:"",n.toneMapping!==xr?RR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,AR("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ws).join(`
`)),o=Ed(o),o=_g(o,n),o=yg(o,n),a=Ed(a),a=_g(a,n),a=yg(a,n),o=xg(o),a=xg(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,c=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,v=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===zm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===zm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const x=g+c+o,C=g+v+a,w=gg(r,r.VERTEX_SHADER,x),R=gg(r,r.FRAGMENT_SHADER,C);r.attachShader(m,w),r.attachShader(m,R),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function D(Y){if(t.debug.checkShaderErrors){const re=r.getProgramInfoLog(m).trim(),L=r.getShaderInfoLog(w).trim(),H=r.getShaderInfoLog(R).trim();let q=!0,$=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,w,R);else{const U=vg(r,w,"vertex"),F=vg(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+re+`
`+U+`
`+F)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(L===""||H==="")&&($=!1);$&&(Y.diagnostics={runnable:q,programLog:re,vertexShader:{log:L,prefix:c},fragmentShader:{log:H,prefix:v}})}r.deleteShader(w),r.deleteShader(R),M=new $l(r,m),E=LR(r,m)}let M;this.getUniforms=function(){return M===void 0&&D(this),M};let E;this.getAttributes=function(){return E===void 0&&D(this),E};let W=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=r.getProgramParameter(m,MR)),W},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ER++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=R,this}let VR=0;class WR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new XR(e),n.set(e,i)),i}}class XR{constructor(e){this.id=VR++,this.code=e,this.usedTimes=0}}function jR(t,e,n,i,r,s,o){const a=new I0,l=new WR,u=[],f=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,E,W,Y,re){const L=Y.fog,H=re.geometry,q=M.isMeshStandardMaterial?Y.environment:null,$=(M.isMeshStandardMaterial?n:e).get(M.envMap||q),U=$&&$.mapping===Xu?$.image.height:null,F=y[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const V=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,K=V!==void 0?V.length:0;let Z=0;H.morphAttributes.position!==void 0&&(Z=1),H.morphAttributes.normal!==void 0&&(Z=2),H.morphAttributes.color!==void 0&&(Z=3);let j,Q,ue,pe;if(F){const Qt=di[F];j=Qt.vertexShader,Q=Qt.fragmentShader}else j=M.vertexShader,Q=M.fragmentShader,l.update(M),ue=l.getVertexShaderID(M),pe=l.getFragmentShaderID(M);const ve=t.getRenderTarget(),Ue=re.isInstancedMesh===!0,Ie=re.isBatchedMesh===!0,Re=!!M.map,Ye=!!M.matcap,O=!!$,Kt=!!M.aoMap,Ee=!!M.lightMap,Le=!!M.bumpMap,_e=!!M.normalMap,dt=!!M.displacementMap,ke=!!M.emissiveMap,A=!!M.metalnessMap,S=!!M.roughnessMap,B=M.anisotropy>0,ne=M.clearcoat>0,ee=M.iridescence>0,ie=M.sheen>0,ye=M.transmission>0,ce=B&&!!M.anisotropyMap,me=ne&&!!M.clearcoatMap,Ae=ne&&!!M.clearcoatNormalMap,ze=ne&&!!M.clearcoatRoughnessMap,J=ee&&!!M.iridescenceMap,nt=ee&&!!M.iridescenceThicknessMap,We=ie&&!!M.sheenColorMap,Pe=ie&&!!M.sheenRoughnessMap,Me=!!M.specularMap,ge=!!M.specularColorMap,Fe=!!M.specularIntensityMap,Ze=ye&&!!M.transmissionMap,vt=ye&&!!M.thicknessMap,He=!!M.gradientMap,se=!!M.alphaMap,P=M.alphaTest>0,ae=!!M.alphaHash,le=!!M.extensions,Ce=!!H.attributes.uv1,Te=!!H.attributes.uv2,rt=!!H.attributes.uv3;let st=xr;return M.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(st=t.toneMapping),{isWebGL2:f,shaderID:F,shaderType:M.type,shaderName:M.name,vertexShader:j,fragmentShader:Q,defines:M.defines,customVertexShaderID:ue,customFragmentShaderID:pe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ie,instancing:Ue,instancingColor:Ue&&re.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:ve===null?t.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:ki,map:Re,matcap:Ye,envMap:O,envMapMode:O&&$.mapping,envMapCubeUVHeight:U,aoMap:Kt,lightMap:Ee,bumpMap:Le,normalMap:_e,displacementMap:h&&dt,emissiveMap:ke,normalMapObjectSpace:_e&&M.normalMapType===eT,normalMapTangentSpace:_e&&M.normalMapType===JE,metalnessMap:A,roughnessMap:S,anisotropy:B,anisotropyMap:ce,clearcoat:ne,clearcoatMap:me,clearcoatNormalMap:Ae,clearcoatRoughnessMap:ze,iridescence:ee,iridescenceMap:J,iridescenceThicknessMap:nt,sheen:ie,sheenColorMap:We,sheenRoughnessMap:Pe,specularMap:Me,specularColorMap:ge,specularIntensityMap:Fe,transmission:ye,transmissionMap:Ze,thicknessMap:vt,gradientMap:He,opaque:M.transparent===!1&&M.blending===Qs,alphaMap:se,alphaTest:P,alphaHash:ae,combine:M.combine,mapUv:Re&&_(M.map.channel),aoMapUv:Kt&&_(M.aoMap.channel),lightMapUv:Ee&&_(M.lightMap.channel),bumpMapUv:Le&&_(M.bumpMap.channel),normalMapUv:_e&&_(M.normalMap.channel),displacementMapUv:dt&&_(M.displacementMap.channel),emissiveMapUv:ke&&_(M.emissiveMap.channel),metalnessMapUv:A&&_(M.metalnessMap.channel),roughnessMapUv:S&&_(M.roughnessMap.channel),anisotropyMapUv:ce&&_(M.anisotropyMap.channel),clearcoatMapUv:me&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:We&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&_(M.sheenRoughnessMap.channel),specularMapUv:Me&&_(M.specularMap.channel),specularColorMapUv:ge&&_(M.specularColorMap.channel),specularIntensityMapUv:Fe&&_(M.specularIntensityMap.channel),transmissionMapUv:Ze&&_(M.transmissionMap.channel),thicknessMapUv:vt&&_(M.thicknessMap.channel),alphaMapUv:se&&_(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(_e||B),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:Ce,vertexUv2s:Te,vertexUv3s:rt,pointsUvs:re.isPoints===!0&&!!H.attributes.uv&&(Re||se),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:re.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Z,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&W.length>0,shadowMapType:t.shadowMap.type,toneMapping:st,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Re&&M.map.isVideoTexture===!0&&it.getTransfer(M.map.colorSpace)===ut,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===pi,flipSided:M.side===vn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:le&&M.extensions.derivatives===!0,extensionFragDepth:le&&M.extensions.fragDepth===!0,extensionDrawBuffers:le&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:le&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function c(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const W in M.defines)E.push(W),E.push(M.defines[W]);return M.isRawShaderMaterial===!1&&(v(E,M),g(E,M),E.push(t.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function v(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function g(M,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function x(M){const E=y[M.type];let W;if(E){const Y=di[E];W=RT.clone(Y.uniforms)}else W=M.uniforms;return W}function C(M,E){let W;for(let Y=0,re=u.length;Y<re;Y++){const L=u[Y];if(L.cacheKey===E){W=L,++W.usedTimes;break}}return W===void 0&&(W=new GR(t,E,M,s),u.push(W)),W}function w(M){if(--M.usedTimes===0){const E=u.indexOf(M);u[E]=u[u.length-1],u.pop(),M.destroy()}}function R(M){l.remove(M)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:c,getUniforms:x,acquireProgram:C,releaseProgram:w,releaseShaderCache:R,programs:u,dispose:D}}function qR(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function YR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Mg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Eg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,p,y,_,m){let c=t[e];return c===void 0?(c={id:d.id,object:d,geometry:h,material:p,groupOrder:y,renderOrder:d.renderOrder,z:_,group:m},t[e]=c):(c.id=d.id,c.object=d,c.geometry=h,c.material=p,c.groupOrder=y,c.renderOrder=d.renderOrder,c.z=_,c.group=m),e++,c}function a(d,h,p,y,_,m){const c=o(d,h,p,y,_,m);p.transmission>0?i.push(c):p.transparent===!0?r.push(c):n.push(c)}function l(d,h,p,y,_,m){const c=o(d,h,p,y,_,m);p.transmission>0?i.unshift(c):p.transparent===!0?r.unshift(c):n.unshift(c)}function u(d,h){n.length>1&&n.sort(d||YR),i.length>1&&i.sort(h||Mg),r.length>1&&r.sort(h||Mg)}function f(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:u}}function $R(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Eg,t.set(i,[o])):r>=s.length?(o=new Eg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function KR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new I,color:new Je};break;case"SpotLight":n={position:new I,direction:new I,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new I,halfWidth:new I,halfHeight:new I};break}return t[e.id]=n,n}}}function QR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let ZR=0;function JR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function eC(t,e){const n=new KR,i=QR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new I);const s=new I,o=new It,a=new It;function l(f,d){let h=0,p=0,y=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let _=0,m=0,c=0,v=0,g=0,x=0,C=0,w=0,R=0,D=0,M=0;f.sort(JR);const E=d===!0?Math.PI:1;for(let Y=0,re=f.length;Y<re;Y++){const L=f[Y],H=L.color,q=L.intensity,$=L.distance,U=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=H.r*q*E,p+=H.g*q*E,y+=H.b*q*E;else if(L.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(L.sh.coefficients[F],q);M++}else if(L.isDirectionalLight){const F=n.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){const V=L.shadow,K=i.get(L);K.shadowBias=V.bias,K.shadowNormalBias=V.normalBias,K.shadowRadius=V.radius,K.shadowMapSize=V.mapSize,r.directionalShadow[_]=K,r.directionalShadowMap[_]=U,r.directionalShadowMatrix[_]=L.shadow.matrix,x++}r.directional[_]=F,_++}else if(L.isSpotLight){const F=n.get(L);F.position.setFromMatrixPosition(L.matrixWorld),F.color.copy(H).multiplyScalar(q*E),F.distance=$,F.coneCos=Math.cos(L.angle),F.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),F.decay=L.decay,r.spot[c]=F;const V=L.shadow;if(L.map&&(r.spotLightMap[R]=L.map,R++,V.updateMatrices(L),L.castShadow&&D++),r.spotLightMatrix[c]=V.matrix,L.castShadow){const K=i.get(L);K.shadowBias=V.bias,K.shadowNormalBias=V.normalBias,K.shadowRadius=V.radius,K.shadowMapSize=V.mapSize,r.spotShadow[c]=K,r.spotShadowMap[c]=U,w++}c++}else if(L.isRectAreaLight){const F=n.get(L);F.color.copy(H).multiplyScalar(q),F.halfWidth.set(L.width*.5,0,0),F.halfHeight.set(0,L.height*.5,0),r.rectArea[v]=F,v++}else if(L.isPointLight){const F=n.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity*E),F.distance=L.distance,F.decay=L.decay,L.castShadow){const V=L.shadow,K=i.get(L);K.shadowBias=V.bias,K.shadowNormalBias=V.normalBias,K.shadowRadius=V.radius,K.shadowMapSize=V.mapSize,K.shadowCameraNear=V.camera.near,K.shadowCameraFar=V.camera.far,r.pointShadow[m]=K,r.pointShadowMap[m]=U,r.pointShadowMatrix[m]=L.shadow.matrix,C++}r.point[m]=F,m++}else if(L.isHemisphereLight){const F=n.get(L);F.skyColor.copy(L.color).multiplyScalar(q*E),F.groundColor.copy(L.groundColor).multiplyScalar(q*E),r.hemi[g]=F,g++}}v>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=y;const W=r.hash;(W.directionalLength!==_||W.pointLength!==m||W.spotLength!==c||W.rectAreaLength!==v||W.hemiLength!==g||W.numDirectionalShadows!==x||W.numPointShadows!==C||W.numSpotShadows!==w||W.numSpotMaps!==R||W.numLightProbes!==M)&&(r.directional.length=_,r.spot.length=c,r.rectArea.length=v,r.point.length=m,r.hemi.length=g,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=w+R-D,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=M,W.directionalLength=_,W.pointLength=m,W.spotLength=c,W.rectAreaLength=v,W.hemiLength=g,W.numDirectionalShadows=x,W.numPointShadows=C,W.numSpotShadows=w,W.numSpotMaps=R,W.numLightProbes=M,r.version=ZR++)}function u(f,d){let h=0,p=0,y=0,_=0,m=0;const c=d.matrixWorldInverse;for(let v=0,g=f.length;v<g;v++){const x=f[v];if(x.isDirectionalLight){const C=r.directional[h];C.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(c),h++}else if(x.isSpotLight){const C=r.spot[y];C.position.setFromMatrixPosition(x.matrixWorld),C.position.applyMatrix4(c),C.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(c),y++}else if(x.isRectAreaLight){const C=r.rectArea[_];C.position.setFromMatrixPosition(x.matrixWorld),C.position.applyMatrix4(c),a.identity(),o.copy(x.matrixWorld),o.premultiply(c),a.extractRotation(o),C.halfWidth.set(x.width*.5,0,0),C.halfHeight.set(0,x.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const C=r.point[p];C.position.setFromMatrixPosition(x.matrixWorld),C.position.applyMatrix4(c),p++}else if(x.isHemisphereLight){const C=r.hemi[m];C.direction.setFromMatrixPosition(x.matrixWorld),C.direction.transformDirection(c),m++}}}return{setup:l,setupView:u,state:r}}function Tg(t,e){const n=new eC(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function u(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function tC(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Tg(t,e),n.set(s,[l])):o>=a.length?(l=new Tg(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class nC extends Xa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=QE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iC extends Xa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sC=`uniform sampler2D shadow_pass;
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
}`;function oC(t,e,n){let i=new G0;const r=new tt,s=new tt,o=new zt,a=new nC({depthPacking:ZE}),l=new iC,u={},f=n.maxTextureSize,d={[Tr]:vn,[vn]:Tr,[pi]:pi},h=new fs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:rC,fragmentShader:sC}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const y=new Wn;y.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new dn(y,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_0;let c=this.type;this.render=function(w,R,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const M=t.getRenderTarget(),E=t.getActiveCubeFace(),W=t.getActiveMipmapLevel(),Y=t.state;Y.setBlending(yr),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const re=c!==wi&&this.type===wi,L=c===wi&&this.type!==wi;for(let H=0,q=w.length;H<q;H++){const $=w[H],U=$.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const F=U.getFrameExtents();if(r.multiply(F),s.copy(U.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/F.x),r.x=s.x*F.x,U.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/F.y),r.y=s.y*F.y,U.mapSize.y=s.y)),U.map===null||re===!0||L===!0){const K=this.type!==wi?{minFilter:nn,magFilter:nn}:{};U.map!==null&&U.map.dispose(),U.map=new cs(r.x,r.y,K),U.map.texture.name=$.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const V=U.getViewportCount();for(let K=0;K<V;K++){const Z=U.getViewport(K);o.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),Y.viewport(o),U.updateMatrices($,K),i=U.getFrustum(),x(R,D,U.camera,$,this.type)}U.isPointLightShadow!==!0&&this.type===wi&&v(U,D),U.needsUpdate=!1}c=this.type,m.needsUpdate=!1,t.setRenderTarget(M,E,W)};function v(w,R){const D=e.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new cs(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(R,null,D,h,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(R,null,D,p,_,null)}function g(w,R,D,M){let E=null;const W=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(W!==void 0)E=W;else if(E=D.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const Y=E.uuid,re=R.uuid;let L=u[Y];L===void 0&&(L={},u[Y]=L);let H=L[re];H===void 0&&(H=E.clone(),L[re]=H,R.addEventListener("dispose",C)),E=H}if(E.visible=R.visible,E.wireframe=R.wireframe,M===wi?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:d[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,D.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const Y=t.properties.get(E);Y.light=D}return E}function x(w,R,D,M,E){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===wi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);const re=e.update(w),L=w.material;if(Array.isArray(L)){const H=re.groups;for(let q=0,$=H.length;q<$;q++){const U=H[q],F=L[U.materialIndex];if(F&&F.visible){const V=g(w,F,M,E);w.onBeforeShadow(t,w,R,D,re,V,U),t.renderBufferDirect(D,null,re,V,w,U),w.onAfterShadow(t,w,R,D,re,V,U)}}}else if(L.visible){const H=g(w,L,M,E);w.onBeforeShadow(t,w,R,D,re,H,null),t.renderBufferDirect(D,null,re,H,w,null),w.onAfterShadow(t,w,R,D,re,H,null)}}const Y=w.children;for(let re=0,L=Y.length;re<L;re++)x(Y[re],R,D,M,E)}function C(w){w.target.removeEventListener("dispose",C);for(const D in u){const M=u[D],E=w.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}function aC(t,e,n){const i=n.isWebGL2;function r(){let P=!1;const ae=new zt;let le=null;const Ce=new zt(0,0,0,0);return{setMask:function(Te){le!==Te&&!P&&(t.colorMask(Te,Te,Te,Te),le=Te)},setLocked:function(Te){P=Te},setClear:function(Te,rt,st,bt,Qt){Qt===!0&&(Te*=bt,rt*=bt,st*=bt),ae.set(Te,rt,st,bt),Ce.equals(ae)===!1&&(t.clearColor(Te,rt,st,bt),Ce.copy(ae))},reset:function(){P=!1,le=null,Ce.set(-1,0,0,0)}}}function s(){let P=!1,ae=null,le=null,Ce=null;return{setTest:function(Te){Te?Ie(t.DEPTH_TEST):Re(t.DEPTH_TEST)},setMask:function(Te){ae!==Te&&!P&&(t.depthMask(Te),ae=Te)},setFunc:function(Te){if(le!==Te){switch(Te){case RE:t.depthFunc(t.NEVER);break;case CE:t.depthFunc(t.ALWAYS);break;case bE:t.depthFunc(t.LESS);break;case Su:t.depthFunc(t.LEQUAL);break;case PE:t.depthFunc(t.EQUAL);break;case LE:t.depthFunc(t.GEQUAL);break;case DE:t.depthFunc(t.GREATER);break;case UE:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}le=Te}},setLocked:function(Te){P=Te},setClear:function(Te){Ce!==Te&&(t.clearDepth(Te),Ce=Te)},reset:function(){P=!1,ae=null,le=null,Ce=null}}}function o(){let P=!1,ae=null,le=null,Ce=null,Te=null,rt=null,st=null,bt=null,Qt=null;return{setTest:function(ot){P||(ot?Ie(t.STENCIL_TEST):Re(t.STENCIL_TEST))},setMask:function(ot){ae!==ot&&!P&&(t.stencilMask(ot),ae=ot)},setFunc:function(ot,Zt,oi){(le!==ot||Ce!==Zt||Te!==oi)&&(t.stencilFunc(ot,Zt,oi),le=ot,Ce=Zt,Te=oi)},setOp:function(ot,Zt,oi){(rt!==ot||st!==Zt||bt!==oi)&&(t.stencilOp(ot,Zt,oi),rt=ot,st=Zt,bt=oi)},setLocked:function(ot){P=ot},setClear:function(ot){Qt!==ot&&(t.clearStencil(ot),Qt=ot)},reset:function(){P=!1,ae=null,le=null,Ce=null,Te=null,rt=null,st=null,bt=null,Qt=null}}}const a=new r,l=new s,u=new o,f=new WeakMap,d=new WeakMap;let h={},p={},y=new WeakMap,_=[],m=null,c=!1,v=null,g=null,x=null,C=null,w=null,R=null,D=null,M=new Je(0,0,0),E=0,W=!1,Y=null,re=null,L=null,H=null,q=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,F=0;const V=t.getParameter(t.VERSION);V.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(V)[1]),U=F>=1):V.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),U=F>=2);let K=null,Z={};const j=t.getParameter(t.SCISSOR_BOX),Q=t.getParameter(t.VIEWPORT),ue=new zt().fromArray(j),pe=new zt().fromArray(Q);function ve(P,ae,le,Ce){const Te=new Uint8Array(4),rt=t.createTexture();t.bindTexture(P,rt),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let st=0;st<le;st++)i&&(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)?t.texImage3D(ae,0,t.RGBA,1,1,Ce,0,t.RGBA,t.UNSIGNED_BYTE,Te):t.texImage2D(ae+st,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Te);return rt}const Ue={};Ue[t.TEXTURE_2D]=ve(t.TEXTURE_2D,t.TEXTURE_2D,1),Ue[t.TEXTURE_CUBE_MAP]=ve(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ue[t.TEXTURE_2D_ARRAY]=ve(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ue[t.TEXTURE_3D]=ve(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Ie(t.DEPTH_TEST),l.setFunc(Su),ke(!1),A(sm),Ie(t.CULL_FACE),_e(yr);function Ie(P){h[P]!==!0&&(t.enable(P),h[P]=!0)}function Re(P){h[P]!==!1&&(t.disable(P),h[P]=!1)}function Ye(P,ae){return p[P]!==ae?(t.bindFramebuffer(P,ae),p[P]=ae,i&&(P===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=ae),P===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=ae)),!0):!1}function O(P,ae){let le=_,Ce=!1;if(P)if(le=y.get(ae),le===void 0&&(le=[],y.set(ae,le)),P.isWebGLMultipleRenderTargets){const Te=P.texture;if(le.length!==Te.length||le[0]!==t.COLOR_ATTACHMENT0){for(let rt=0,st=Te.length;rt<st;rt++)le[rt]=t.COLOR_ATTACHMENT0+rt;le.length=Te.length,Ce=!0}}else le[0]!==t.COLOR_ATTACHMENT0&&(le[0]=t.COLOR_ATTACHMENT0,Ce=!0);else le[0]!==t.BACK&&(le[0]=t.BACK,Ce=!0);Ce&&(n.isWebGL2?t.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function Kt(P){return m!==P?(t.useProgram(P),m=P,!0):!1}const Ee={[kr]:t.FUNC_ADD,[dE]:t.FUNC_SUBTRACT,[hE]:t.FUNC_REVERSE_SUBTRACT};if(i)Ee[um]=t.MIN,Ee[cm]=t.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(Ee[um]=P.MIN_EXT,Ee[cm]=P.MAX_EXT)}const Le={[pE]:t.ZERO,[mE]:t.ONE,[gE]:t.SRC_COLOR,[pd]:t.SRC_ALPHA,[ME]:t.SRC_ALPHA_SATURATE,[xE]:t.DST_COLOR,[_E]:t.DST_ALPHA,[vE]:t.ONE_MINUS_SRC_COLOR,[md]:t.ONE_MINUS_SRC_ALPHA,[SE]:t.ONE_MINUS_DST_COLOR,[yE]:t.ONE_MINUS_DST_ALPHA,[EE]:t.CONSTANT_COLOR,[TE]:t.ONE_MINUS_CONSTANT_COLOR,[wE]:t.CONSTANT_ALPHA,[AE]:t.ONE_MINUS_CONSTANT_ALPHA};function _e(P,ae,le,Ce,Te,rt,st,bt,Qt,ot){if(P===yr){c===!0&&(Re(t.BLEND),c=!1);return}if(c===!1&&(Ie(t.BLEND),c=!0),P!==fE){if(P!==v||ot!==W){if((g!==kr||w!==kr)&&(t.blendEquation(t.FUNC_ADD),g=kr,w=kr),ot)switch(P){case Qs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case om:t.blendFunc(t.ONE,t.ONE);break;case am:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case lm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Qs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case om:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case am:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case lm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}x=null,C=null,R=null,D=null,M.set(0,0,0),E=0,v=P,W=ot}return}Te=Te||ae,rt=rt||le,st=st||Ce,(ae!==g||Te!==w)&&(t.blendEquationSeparate(Ee[ae],Ee[Te]),g=ae,w=Te),(le!==x||Ce!==C||rt!==R||st!==D)&&(t.blendFuncSeparate(Le[le],Le[Ce],Le[rt],Le[st]),x=le,C=Ce,R=rt,D=st),(bt.equals(M)===!1||Qt!==E)&&(t.blendColor(bt.r,bt.g,bt.b,Qt),M.copy(bt),E=Qt),v=P,W=!1}function dt(P,ae){P.side===pi?Re(t.CULL_FACE):Ie(t.CULL_FACE);let le=P.side===vn;ae&&(le=!le),ke(le),P.blending===Qs&&P.transparent===!1?_e(yr):_e(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const Ce=P.stencilWrite;u.setTest(Ce),Ce&&(u.setMask(P.stencilWriteMask),u.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),u.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),B(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ie(t.SAMPLE_ALPHA_TO_COVERAGE):Re(t.SAMPLE_ALPHA_TO_COVERAGE)}function ke(P){Y!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),Y=P)}function A(P){P!==lE?(Ie(t.CULL_FACE),P!==re&&(P===sm?t.cullFace(t.BACK):P===uE?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Re(t.CULL_FACE),re=P}function S(P){P!==L&&(U&&t.lineWidth(P),L=P)}function B(P,ae,le){P?(Ie(t.POLYGON_OFFSET_FILL),(H!==ae||q!==le)&&(t.polygonOffset(ae,le),H=ae,q=le)):Re(t.POLYGON_OFFSET_FILL)}function ne(P){P?Ie(t.SCISSOR_TEST):Re(t.SCISSOR_TEST)}function ee(P){P===void 0&&(P=t.TEXTURE0+$-1),K!==P&&(t.activeTexture(P),K=P)}function ie(P,ae,le){le===void 0&&(K===null?le=t.TEXTURE0+$-1:le=K);let Ce=Z[le];Ce===void 0&&(Ce={type:void 0,texture:void 0},Z[le]=Ce),(Ce.type!==P||Ce.texture!==ae)&&(K!==le&&(t.activeTexture(le),K=le),t.bindTexture(P,ae||Ue[P]),Ce.type=P,Ce.texture=ae)}function ye(){const P=Z[K];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ce(){try{t.compressedTexImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function me(){try{t.compressedTexImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ae(){try{t.texSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ze(){try{t.texSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function nt(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function We(){try{t.texStorage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pe(){try{t.texStorage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Me(){try{t.texImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ge(){try{t.texImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Fe(P){ue.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),ue.copy(P))}function Ze(P){pe.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),pe.copy(P))}function vt(P,ae){let le=d.get(ae);le===void 0&&(le=new WeakMap,d.set(ae,le));let Ce=le.get(P);Ce===void 0&&(Ce=t.getUniformBlockIndex(ae,P.name),le.set(P,Ce))}function He(P,ae){const Ce=d.get(ae).get(P);f.get(ae)!==Ce&&(t.uniformBlockBinding(ae,Ce,P.__bindingPointIndex),f.set(ae,Ce))}function se(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},K=null,Z={},p={},y=new WeakMap,_=[],m=null,c=!1,v=null,g=null,x=null,C=null,w=null,R=null,D=null,M=new Je(0,0,0),E=0,W=!1,Y=null,re=null,L=null,H=null,q=null,ue.set(0,0,t.canvas.width,t.canvas.height),pe.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Ie,disable:Re,bindFramebuffer:Ye,drawBuffers:O,useProgram:Kt,setBlending:_e,setMaterial:dt,setFlipSided:ke,setCullFace:A,setLineWidth:S,setPolygonOffset:B,setScissorTest:ne,activeTexture:ee,bindTexture:ie,unbindTexture:ye,compressedTexImage2D:ce,compressedTexImage3D:me,texImage2D:Me,texImage3D:ge,updateUBOMapping:vt,uniformBlockBinding:He,texStorage2D:We,texStorage3D:Pe,texSubImage2D:Ae,texSubImage3D:ze,compressedTexSubImage2D:J,compressedTexSubImage3D:nt,scissor:Fe,viewport:Ze,reset:se}}function lC(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,S){return p?new OffscreenCanvas(A,S):Au("canvas")}function _(A,S,B,ne){let ee=1;if((A.width>ne||A.height>ne)&&(ee=ne/Math.max(A.width,A.height)),ee<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ie=S?Md:Math.floor,ye=ie(ee*A.width),ce=ie(ee*A.height);d===void 0&&(d=y(ye,ce));const me=B?y(ye,ce):d;return me.width=ye,me.height=ce,me.getContext("2d").drawImage(A,0,0,ye,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+ye+"x"+ce+")."),me}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return Bm(A.width)&&Bm(A.height)}function c(A){return a?!1:A.wrapS!==ti||A.wrapT!==ti||A.minFilter!==nn&&A.minFilter!==On}function v(A,S){return A.generateMipmaps&&S&&A.minFilter!==nn&&A.minFilter!==On}function g(A){t.generateMipmap(A)}function x(A,S,B,ne,ee=!1){if(a===!1)return S;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ie=S;if(S===t.RED&&(B===t.FLOAT&&(ie=t.R32F),B===t.HALF_FLOAT&&(ie=t.R16F),B===t.UNSIGNED_BYTE&&(ie=t.R8)),S===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(ie=t.R8UI),B===t.UNSIGNED_SHORT&&(ie=t.R16UI),B===t.UNSIGNED_INT&&(ie=t.R32UI),B===t.BYTE&&(ie=t.R8I),B===t.SHORT&&(ie=t.R16I),B===t.INT&&(ie=t.R32I)),S===t.RG&&(B===t.FLOAT&&(ie=t.RG32F),B===t.HALF_FLOAT&&(ie=t.RG16F),B===t.UNSIGNED_BYTE&&(ie=t.RG8)),S===t.RGBA){const ye=ee?Mu:it.getTransfer(ne);B===t.FLOAT&&(ie=t.RGBA32F),B===t.HALF_FLOAT&&(ie=t.RGBA16F),B===t.UNSIGNED_BYTE&&(ie=ye===ut?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(ie=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(ie=t.RGB5_A1)}return(ie===t.R16F||ie===t.R32F||ie===t.RG16F||ie===t.RG32F||ie===t.RGBA16F||ie===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function C(A,S,B){return v(A,B)===!0||A.isFramebufferTexture&&A.minFilter!==nn&&A.minFilter!==On?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function w(A){return A===nn||A===fm||A===Cc?t.NEAREST:t.LINEAR}function R(A){const S=A.target;S.removeEventListener("dispose",R),M(S),S.isVideoTexture&&f.delete(S)}function D(A){const S=A.target;S.removeEventListener("dispose",D),W(S)}function M(A){const S=i.get(A);if(S.__webglInit===void 0)return;const B=A.source,ne=h.get(B);if(ne){const ee=ne[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&E(A),Object.keys(ne).length===0&&h.delete(B)}i.remove(A)}function E(A){const S=i.get(A);t.deleteTexture(S.__webglTexture);const B=A.source,ne=h.get(B);delete ne[S.__cacheKey],o.memory.textures--}function W(A){const S=A.texture,B=i.get(A),ne=i.get(S);if(ne.__webglTexture!==void 0&&(t.deleteTexture(ne.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(B.__webglFramebuffer[ee]))for(let ie=0;ie<B.__webglFramebuffer[ee].length;ie++)t.deleteFramebuffer(B.__webglFramebuffer[ee][ie]);else t.deleteFramebuffer(B.__webglFramebuffer[ee]);B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer[ee])}else{if(Array.isArray(B.__webglFramebuffer))for(let ee=0;ee<B.__webglFramebuffer.length;ee++)t.deleteFramebuffer(B.__webglFramebuffer[ee]);else t.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&t.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let ee=0;ee<B.__webglColorRenderbuffer.length;ee++)B.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(B.__webglColorRenderbuffer[ee]);B.__webglDepthRenderbuffer&&t.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ee=0,ie=S.length;ee<ie;ee++){const ye=i.get(S[ee]);ye.__webglTexture&&(t.deleteTexture(ye.__webglTexture),o.memory.textures--),i.remove(S[ee])}i.remove(S),i.remove(A)}let Y=0;function re(){Y=0}function L(){const A=Y;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),Y+=1,A}function H(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function q(A,S){const B=i.get(A);if(A.isVideoTexture&&dt(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const ne=A.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(B,A,S);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+S)}function $(A,S){const B=i.get(A);if(A.version>0&&B.__version!==A.version){ue(B,A,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+S)}function U(A,S){const B=i.get(A);if(A.version>0&&B.__version!==A.version){ue(B,A,S);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+S)}function F(A,S){const B=i.get(A);if(A.version>0&&B.__version!==A.version){pe(B,A,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+S)}const V={[_d]:t.REPEAT,[ti]:t.CLAMP_TO_EDGE,[yd]:t.MIRRORED_REPEAT},K={[nn]:t.NEAREST,[fm]:t.NEAREST_MIPMAP_NEAREST,[Cc]:t.NEAREST_MIPMAP_LINEAR,[On]:t.LINEAR,[GE]:t.LINEAR_MIPMAP_NEAREST,[ba]:t.LINEAR_MIPMAP_LINEAR},Z={[tT]:t.NEVER,[aT]:t.ALWAYS,[nT]:t.LESS,[b0]:t.LEQUAL,[iT]:t.EQUAL,[oT]:t.GEQUAL,[rT]:t.GREATER,[sT]:t.NOTEQUAL};function j(A,S,B){if(B?(t.texParameteri(A,t.TEXTURE_WRAP_S,V[S.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,V[S.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,V[S.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,K[S.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,K[S.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(S.wrapS!==ti||S.wrapT!==ti)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,w(S.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,w(S.minFilter)),S.minFilter!==nn&&S.minFilter!==On&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,Z[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===nn||S.minFilter!==Cc&&S.minFilter!==ba||S.type===ur&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===Pa&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(t.texParameterf(A,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function Q(A,S){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",R));const ne=S.source;let ee=h.get(ne);ee===void 0&&(ee={},h.set(ne,ee));const ie=H(S);if(ie!==A.__cacheKey){ee[ie]===void 0&&(ee[ie]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ee[ie].usedTimes++;const ye=ee[A.__cacheKey];ye!==void 0&&(ee[A.__cacheKey].usedTimes--,ye.usedTimes===0&&E(S)),A.__cacheKey=ie,A.__webglTexture=ee[ie].texture}return B}function ue(A,S,B){let ne=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ne=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ne=t.TEXTURE_3D);const ee=Q(A,S),ie=S.source;n.bindTexture(ne,A.__webglTexture,t.TEXTURE0+B);const ye=i.get(ie);if(ie.version!==ye.__version||ee===!0){n.activeTexture(t.TEXTURE0+B);const ce=it.getPrimaries(it.workingColorSpace),me=S.colorSpace===zn?null:it.getPrimaries(S.colorSpace),Ae=S.colorSpace===zn||ce===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const ze=c(S)&&m(S.image)===!1;let J=_(S.image,ze,!1,r.maxTextureSize);J=ke(S,J);const nt=m(J)||a,We=s.convert(S.format,S.colorSpace);let Pe=s.convert(S.type),Me=x(S.internalFormat,We,Pe,S.colorSpace,S.isVideoTexture);j(ne,S,nt);let ge;const Fe=S.mipmaps,Ze=a&&S.isVideoTexture!==!0&&Me!==R0,vt=ye.__version===void 0||ee===!0,He=C(S,J,nt);if(S.isDepthTexture)Me=t.DEPTH_COMPONENT,a?S.type===ur?Me=t.DEPTH_COMPONENT32F:S.type===lr?Me=t.DEPTH_COMPONENT24:S.type===ns?Me=t.DEPTH24_STENCIL8:Me=t.DEPTH_COMPONENT16:S.type===ur&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===is&&Me===t.DEPTH_COMPONENT&&S.type!==Ah&&S.type!==lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=lr,Pe=s.convert(S.type)),S.format===Eo&&Me===t.DEPTH_COMPONENT&&(Me=t.DEPTH_STENCIL,S.type!==ns&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=ns,Pe=s.convert(S.type))),vt&&(Ze?n.texStorage2D(t.TEXTURE_2D,1,Me,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,Me,J.width,J.height,0,We,Pe,null));else if(S.isDataTexture)if(Fe.length>0&&nt){Ze&&vt&&n.texStorage2D(t.TEXTURE_2D,He,Me,Fe[0].width,Fe[0].height);for(let se=0,P=Fe.length;se<P;se++)ge=Fe[se],Ze?n.texSubImage2D(t.TEXTURE_2D,se,0,0,ge.width,ge.height,We,Pe,ge.data):n.texImage2D(t.TEXTURE_2D,se,Me,ge.width,ge.height,0,We,Pe,ge.data);S.generateMipmaps=!1}else Ze?(vt&&n.texStorage2D(t.TEXTURE_2D,He,Me,J.width,J.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,J.width,J.height,We,Pe,J.data)):n.texImage2D(t.TEXTURE_2D,0,Me,J.width,J.height,0,We,Pe,J.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ze&&vt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,He,Me,Fe[0].width,Fe[0].height,J.depth);for(let se=0,P=Fe.length;se<P;se++)ge=Fe[se],S.format!==ni?We!==null?Ze?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,ge.width,ge.height,J.depth,We,ge.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,se,Me,ge.width,ge.height,J.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?n.texSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,ge.width,ge.height,J.depth,We,Pe,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,se,Me,ge.width,ge.height,J.depth,0,We,Pe,ge.data)}else{Ze&&vt&&n.texStorage2D(t.TEXTURE_2D,He,Me,Fe[0].width,Fe[0].height);for(let se=0,P=Fe.length;se<P;se++)ge=Fe[se],S.format!==ni?We!==null?Ze?n.compressedTexSubImage2D(t.TEXTURE_2D,se,0,0,ge.width,ge.height,We,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,se,Me,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?n.texSubImage2D(t.TEXTURE_2D,se,0,0,ge.width,ge.height,We,Pe,ge.data):n.texImage2D(t.TEXTURE_2D,se,Me,ge.width,ge.height,0,We,Pe,ge.data)}else if(S.isDataArrayTexture)Ze?(vt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,He,Me,J.width,J.height,J.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,We,Pe,J.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Me,J.width,J.height,J.depth,0,We,Pe,J.data);else if(S.isData3DTexture)Ze?(vt&&n.texStorage3D(t.TEXTURE_3D,He,Me,J.width,J.height,J.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,We,Pe,J.data)):n.texImage3D(t.TEXTURE_3D,0,Me,J.width,J.height,J.depth,0,We,Pe,J.data);else if(S.isFramebufferTexture){if(vt)if(Ze)n.texStorage2D(t.TEXTURE_2D,He,Me,J.width,J.height);else{let se=J.width,P=J.height;for(let ae=0;ae<He;ae++)n.texImage2D(t.TEXTURE_2D,ae,Me,se,P,0,We,Pe,null),se>>=1,P>>=1}}else if(Fe.length>0&&nt){Ze&&vt&&n.texStorage2D(t.TEXTURE_2D,He,Me,Fe[0].width,Fe[0].height);for(let se=0,P=Fe.length;se<P;se++)ge=Fe[se],Ze?n.texSubImage2D(t.TEXTURE_2D,se,0,0,We,Pe,ge):n.texImage2D(t.TEXTURE_2D,se,Me,We,Pe,ge);S.generateMipmaps=!1}else Ze?(vt&&n.texStorage2D(t.TEXTURE_2D,He,Me,J.width,J.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,We,Pe,J)):n.texImage2D(t.TEXTURE_2D,0,Me,We,Pe,J);v(S,nt)&&g(ne),ye.__version=ie.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function pe(A,S,B){if(S.image.length!==6)return;const ne=Q(A,S),ee=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+B);const ie=i.get(ee);if(ee.version!==ie.__version||ne===!0){n.activeTexture(t.TEXTURE0+B);const ye=it.getPrimaries(it.workingColorSpace),ce=S.colorSpace===zn?null:it.getPrimaries(S.colorSpace),me=S.colorSpace===zn||ye===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ae=S.isCompressedTexture||S.image[0].isCompressedTexture,ze=S.image[0]&&S.image[0].isDataTexture,J=[];for(let se=0;se<6;se++)!Ae&&!ze?J[se]=_(S.image[se],!1,!0,r.maxCubemapSize):J[se]=ze?S.image[se].image:S.image[se],J[se]=ke(S,J[se]);const nt=J[0],We=m(nt)||a,Pe=s.convert(S.format,S.colorSpace),Me=s.convert(S.type),ge=x(S.internalFormat,Pe,Me,S.colorSpace),Fe=a&&S.isVideoTexture!==!0,Ze=ie.__version===void 0||ne===!0;let vt=C(S,nt,We);j(t.TEXTURE_CUBE_MAP,S,We);let He;if(Ae){Fe&&Ze&&n.texStorage2D(t.TEXTURE_CUBE_MAP,vt,ge,nt.width,nt.height);for(let se=0;se<6;se++){He=J[se].mipmaps;for(let P=0;P<He.length;P++){const ae=He[P];S.format!==ni?Pe!==null?Fe?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,P,0,0,ae.width,ae.height,Pe,ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,P,ge,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,P,0,0,ae.width,ae.height,Pe,Me,ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,P,ge,ae.width,ae.height,0,Pe,Me,ae.data)}}}else{He=S.mipmaps,Fe&&Ze&&(He.length>0&&vt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,vt,ge,J[0].width,J[0].height));for(let se=0;se<6;se++)if(ze){Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,J[se].width,J[se].height,Pe,Me,J[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ge,J[se].width,J[se].height,0,Pe,Me,J[se].data);for(let P=0;P<He.length;P++){const le=He[P].image[se].image;Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,P+1,0,0,le.width,le.height,Pe,Me,le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,P+1,ge,le.width,le.height,0,Pe,Me,le.data)}}else{Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Pe,Me,J[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ge,Pe,Me,J[se]);for(let P=0;P<He.length;P++){const ae=He[P];Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,P+1,0,0,Pe,Me,ae.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,P+1,ge,Pe,Me,ae.image[se])}}}v(S,We)&&g(t.TEXTURE_CUBE_MAP),ie.__version=ee.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ve(A,S,B,ne,ee,ie){const ye=s.convert(B.format,B.colorSpace),ce=s.convert(B.type),me=x(B.internalFormat,ye,ce,B.colorSpace);if(!i.get(S).__hasExternalTextures){const ze=Math.max(1,S.width>>ie),J=Math.max(1,S.height>>ie);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,ie,me,ze,J,S.depth,0,ye,ce,null):n.texImage2D(ee,ie,me,ze,J,0,ye,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),_e(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,ee,i.get(B).__webglTexture,0,Le(S)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ne,ee,i.get(B).__webglTexture,ie),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ue(A,S,B){if(t.bindRenderbuffer(t.RENDERBUFFER,A),S.depthBuffer&&!S.stencilBuffer){let ne=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(B||_e(S)){const ee=S.depthTexture;ee&&ee.isDepthTexture&&(ee.type===ur?ne=t.DEPTH_COMPONENT32F:ee.type===lr&&(ne=t.DEPTH_COMPONENT24));const ie=Le(S);_e(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,ne,S.width,S.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,ne,S.width,S.height)}else t.renderbufferStorage(t.RENDERBUFFER,ne,S.width,S.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(S.depthBuffer&&S.stencilBuffer){const ne=Le(S);B&&_e(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ne,t.DEPTH24_STENCIL8,S.width,S.height):_e(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ne,t.DEPTH24_STENCIL8,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const ne=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ee=0;ee<ne.length;ee++){const ie=ne[ee],ye=s.convert(ie.format,ie.colorSpace),ce=s.convert(ie.type),me=x(ie.internalFormat,ye,ce,ie.colorSpace),Ae=Le(S);B&&_e(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,me,S.width,S.height):_e(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ae,me,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,me,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ie(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);const ne=i.get(S.depthTexture).__webglTexture,ee=Le(S);if(S.depthTexture.format===is)_e(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0);else if(S.depthTexture.format===Eo)_e(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Re(A){const S=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ie(S.__webglFramebuffer,A)}else if(B){S.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[ne]),S.__webglDepthbuffer[ne]=t.createRenderbuffer(),Ue(S.__webglDepthbuffer[ne],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),Ue(S.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ye(A,S,B){const ne=i.get(A);S!==void 0&&ve(ne.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&Re(A)}function O(A){const S=A.texture,B=i.get(A),ne=i.get(S);A.addEventListener("dispose",D),A.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=t.createTexture()),ne.__version=S.version,o.memory.textures++);const ee=A.isWebGLCubeRenderTarget===!0,ie=A.isWebGLMultipleRenderTargets===!0,ye=m(A)||a;if(ee){B.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(a&&S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[ce]=[];for(let me=0;me<S.mipmaps.length;me++)B.__webglFramebuffer[ce][me]=t.createFramebuffer()}else B.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let ce=0;ce<S.mipmaps.length;ce++)B.__webglFramebuffer[ce]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(ie)if(r.drawBuffers){const ce=A.texture;for(let me=0,Ae=ce.length;me<Ae;me++){const ze=i.get(ce[me]);ze.__webglTexture===void 0&&(ze.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&_e(A)===!1){const ce=ie?S:[S];B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let me=0;me<ce.length;me++){const Ae=ce[me];B.__webglColorRenderbuffer[me]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[me]);const ze=s.convert(Ae.format,Ae.colorSpace),J=s.convert(Ae.type),nt=x(Ae.internalFormat,ze,J,Ae.colorSpace,A.isXRRenderTarget===!0),We=Le(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,We,nt,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,B.__webglColorRenderbuffer[me])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),Ue(B.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),j(t.TEXTURE_CUBE_MAP,S,ye);for(let ce=0;ce<6;ce++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let me=0;me<S.mipmaps.length;me++)ve(B.__webglFramebuffer[ce][me],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,me);else ve(B.__webglFramebuffer[ce],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);v(S,ye)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ie){const ce=A.texture;for(let me=0,Ae=ce.length;me<Ae;me++){const ze=ce[me],J=i.get(ze);n.bindTexture(t.TEXTURE_2D,J.__webglTexture),j(t.TEXTURE_2D,ze,ye),ve(B.__webglFramebuffer,A,ze,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,0),v(ze,ye)&&g(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?ce=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ce,ne.__webglTexture),j(ce,S,ye),a&&S.mipmaps&&S.mipmaps.length>0)for(let me=0;me<S.mipmaps.length;me++)ve(B.__webglFramebuffer[me],A,S,t.COLOR_ATTACHMENT0,ce,me);else ve(B.__webglFramebuffer,A,S,t.COLOR_ATTACHMENT0,ce,0);v(S,ye)&&g(ce),n.unbindTexture()}A.depthBuffer&&Re(A)}function Kt(A){const S=m(A)||a,B=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ne=0,ee=B.length;ne<ee;ne++){const ie=B[ne];if(v(ie,S)){const ye=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ce=i.get(ie).__webglTexture;n.bindTexture(ye,ce),g(ye),n.unbindTexture()}}}function Ee(A){if(a&&A.samples>0&&_e(A)===!1){const S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],B=A.width,ne=A.height;let ee=t.COLOR_BUFFER_BIT;const ie=[],ye=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=i.get(A),me=A.isWebGLMultipleRenderTargets===!0;if(me)for(let Ae=0;Ae<S.length;Ae++)n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let Ae=0;Ae<S.length;Ae++){ie.push(t.COLOR_ATTACHMENT0+Ae),A.depthBuffer&&ie.push(ye);const ze=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(ze===!1&&(A.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),me&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ce.__webglColorRenderbuffer[Ae]),ze===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ye]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ye])),me){const J=i.get(S[Ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,J,0)}t.blitFramebuffer(0,0,B,ne,0,0,B,ne,ee,t.NEAREST),u&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ie)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),me)for(let Ae=0;Ae<S.length;Ae++){n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,ce.__webglColorRenderbuffer[Ae]);const ze=i.get(S[Ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,ze,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function Le(A){return Math.min(r.maxSamples,A.samples)}function _e(A){const S=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function dt(A){const S=o.render.frame;f.get(A)!==S&&(f.set(A,S),A.update())}function ke(A,S){const B=A.colorSpace,ne=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===xd||B!==ki&&B!==zn&&(it.getTransfer(B)===ut?a===!1?e.has("EXT_sRGB")===!0&&ne===ni?(A.format=xd,A.minFilter=On,A.generateMipmaps=!1):S=L0.sRGBToLinear(S):(ne!==ni||ee!==Sr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}this.allocateTextureUnit=L,this.resetTextureUnits=re,this.setTexture2D=q,this.setTexture2DArray=$,this.setTexture3D=U,this.setTextureCube=F,this.rebindTextures=Ye,this.setupRenderTarget=O,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=_e}function uC(t,e,n){const i=n.isWebGL2;function r(s,o=zn){let a;const l=it.getTransfer(o);if(s===Sr)return t.UNSIGNED_BYTE;if(s===M0)return t.UNSIGNED_SHORT_4_4_4_4;if(s===E0)return t.UNSIGNED_SHORT_5_5_5_1;if(s===VE)return t.BYTE;if(s===WE)return t.SHORT;if(s===Ah)return t.UNSIGNED_SHORT;if(s===S0)return t.INT;if(s===lr)return t.UNSIGNED_INT;if(s===ur)return t.FLOAT;if(s===Pa)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===XE)return t.ALPHA;if(s===ni)return t.RGBA;if(s===jE)return t.LUMINANCE;if(s===qE)return t.LUMINANCE_ALPHA;if(s===is)return t.DEPTH_COMPONENT;if(s===Eo)return t.DEPTH_STENCIL;if(s===xd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===YE)return t.RED;if(s===T0)return t.RED_INTEGER;if(s===$E)return t.RG;if(s===w0)return t.RG_INTEGER;if(s===A0)return t.RGBA_INTEGER;if(s===bc||s===Pc||s===Lc||s===Dc)if(l===ut)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===bc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Pc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Lc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Dc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===bc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Pc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Lc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Dc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===dm||s===hm||s===pm||s===mm)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===dm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===hm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===pm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===mm)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===R0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===gm||s===vm)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===gm)return l===ut?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===vm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===_m||s===ym||s===xm||s===Sm||s===Mm||s===Em||s===Tm||s===wm||s===Am||s===Rm||s===Cm||s===bm||s===Pm||s===Lm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===_m)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ym)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===xm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Sm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Mm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Em)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Tm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===wm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Am)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Rm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Cm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===bm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Pm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Lm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Uc||s===Dm||s===Um)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Uc)return l===ut?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Dm)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Um)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===KE||s===Nm||s===Im||s===Fm)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Uc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Nm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Im)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Fm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ns?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class cC extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $o extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fC={type:"move"};class sf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $o,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $o,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $o,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),c=this._getHandJoint(u,_);m!==null&&(c.matrix.fromArray(m.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=m.radius),c.visible=m!==null}const f=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=f.position.distanceTo(d.position),p=.02,y=.005;u.inputState.pinching&&h>p+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fC)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new $o;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class dC extends Co{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,f=null,d=null,h=null,p=null,y=null;const _=n.getContextAttributes();let m=null,c=null;const v=[],g=[],x=new tt;let C=null;const w=new kn;w.layers.enable(1),w.viewport=new zt;const R=new kn;R.layers.enable(2),R.viewport=new zt;const D=[w,R],M=new cC;M.layers.enable(1),M.layers.enable(2);let E=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Q=v[j];return Q===void 0&&(Q=new sf,v[j]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(j){let Q=v[j];return Q===void 0&&(Q=new sf,v[j]=Q),Q.getGripSpace()},this.getHand=function(j){let Q=v[j];return Q===void 0&&(Q=new sf,v[j]=Q),Q.getHandSpace()};function Y(j){const Q=g.indexOf(j.inputSource);if(Q===-1)return;const ue=v[Q];ue!==void 0&&(ue.update(j.inputSource,j.frame,u||o),ue.dispatchEvent({type:j.type,data:j.inputSource}))}function re(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",re),r.removeEventListener("inputsourceschange",L);for(let j=0;j<v.length;j++){const Q=g[j];Q!==null&&(g[j]=null,v[j].disconnect(Q))}E=null,W=null,e.setRenderTarget(m),p=null,h=null,d=null,r=null,c=null,Z.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(x.width,x.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(j){u=j},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",re),r.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(x),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Q),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),c=new cs(p.framebufferWidth,p.framebufferHeight,{format:ni,type:Sr,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Q=null,ue=null,pe=null;_.depth&&(pe=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Q=_.stencil?Eo:is,ue=_.stencil?ns:lr);const ve={colorFormat:n.RGBA8,depthFormat:pe,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(ve),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),c=new cs(h.textureWidth,h.textureHeight,{format:ni,type:Sr,depthTexture:new W0(h.textureWidth,h.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ue=e.properties.get(c);Ue.__ignoreDepthValues=h.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Z.setContext(r),Z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(j){for(let Q=0;Q<j.removed.length;Q++){const ue=j.removed[Q],pe=g.indexOf(ue);pe>=0&&(g[pe]=null,v[pe].disconnect(ue))}for(let Q=0;Q<j.added.length;Q++){const ue=j.added[Q];let pe=g.indexOf(ue);if(pe===-1){for(let Ue=0;Ue<v.length;Ue++)if(Ue>=g.length){g.push(ue),pe=Ue;break}else if(g[Ue]===null){g[Ue]=ue,pe=Ue;break}if(pe===-1)break}const ve=v[pe];ve&&ve.connect(ue)}}const H=new I,q=new I;function $(j,Q,ue){H.setFromMatrixPosition(Q.matrixWorld),q.setFromMatrixPosition(ue.matrixWorld);const pe=H.distanceTo(q),ve=Q.projectionMatrix.elements,Ue=ue.projectionMatrix.elements,Ie=ve[14]/(ve[10]-1),Re=ve[14]/(ve[10]+1),Ye=(ve[9]+1)/ve[5],O=(ve[9]-1)/ve[5],Kt=(ve[8]-1)/ve[0],Ee=(Ue[8]+1)/Ue[0],Le=Ie*Kt,_e=Ie*Ee,dt=pe/(-Kt+Ee),ke=dt*-Kt;Q.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ke),j.translateZ(dt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const A=Ie+dt,S=Re+dt,B=Le-ke,ne=_e+(pe-ke),ee=Ye*Re/S*A,ie=O*Re/S*A;j.projectionMatrix.makePerspective(B,ne,ee,ie,A,S),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function U(j,Q){Q===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Q.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;M.near=R.near=w.near=j.near,M.far=R.far=w.far=j.far,(E!==M.near||W!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,W=M.far);const Q=j.parent,ue=M.cameras;U(M,Q);for(let pe=0;pe<ue.length;pe++)U(ue[pe],Q);ue.length===2?$(M,w,R):M.projectionMatrix.copy(w.projectionMatrix),F(j,M,Q)};function F(j,Q,ue){ue===null?j.matrix.copy(Q.matrixWorld):(j.matrix.copy(ue.matrixWorld),j.matrix.invert(),j.matrix.multiply(Q.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Sd*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)};let V=null;function K(j,Q){if(f=Q.getViewerPose(u||o),y=Q,f!==null){const ue=f.views;p!==null&&(e.setRenderTargetFramebuffer(c,p.framebuffer),e.setRenderTarget(c));let pe=!1;ue.length!==M.cameras.length&&(M.cameras.length=0,pe=!0);for(let ve=0;ve<ue.length;ve++){const Ue=ue[ve];let Ie=null;if(p!==null)Ie=p.getViewport(Ue);else{const Ye=d.getViewSubImage(h,Ue);Ie=Ye.viewport,ve===0&&(e.setRenderTargetTextures(c,Ye.colorTexture,h.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(c))}let Re=D[ve];Re===void 0&&(Re=new kn,Re.layers.enable(ve),Re.viewport=new zt,D[ve]=Re),Re.matrix.fromArray(Ue.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(Ue.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),ve===0&&(M.matrix.copy(Re.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),pe===!0&&M.cameras.push(Re)}}for(let ue=0;ue<v.length;ue++){const pe=g[ue],ve=v[ue];pe!==null&&ve!==void 0&&ve.update(pe,Q,u||o)}V&&V(j,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),y=null}const Z=new V0;Z.setAnimationLoop(K),this.setAnimationLoop=function(j){V=j},this.dispose=function(){}}}function hC(t,e){function n(m,c){m.matrixAutoUpdate===!0&&m.updateMatrix(),c.value.copy(m.matrix)}function i(m,c){c.color.getRGB(m.fogColor.value,z0(t)),c.isFog?(m.fogNear.value=c.near,m.fogFar.value=c.far):c.isFogExp2&&(m.fogDensity.value=c.density)}function r(m,c,v,g,x){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(m,c):c.isMeshToonMaterial?(s(m,c),d(m,c)):c.isMeshPhongMaterial?(s(m,c),f(m,c)):c.isMeshStandardMaterial?(s(m,c),h(m,c),c.isMeshPhysicalMaterial&&p(m,c,x)):c.isMeshMatcapMaterial?(s(m,c),y(m,c)):c.isMeshDepthMaterial?s(m,c):c.isMeshDistanceMaterial?(s(m,c),_(m,c)):c.isMeshNormalMaterial?s(m,c):c.isLineBasicMaterial?(o(m,c),c.isLineDashedMaterial&&a(m,c)):c.isPointsMaterial?l(m,c,v,g):c.isSpriteMaterial?u(m,c):c.isShadowMaterial?(m.color.value.copy(c.color),m.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(m,c){m.opacity.value=c.opacity,c.color&&m.diffuse.value.copy(c.color),c.emissive&&m.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.bumpMap&&(m.bumpMap.value=c.bumpMap,n(c.bumpMap,m.bumpMapTransform),m.bumpScale.value=c.bumpScale,c.side===vn&&(m.bumpScale.value*=-1)),c.normalMap&&(m.normalMap.value=c.normalMap,n(c.normalMap,m.normalMapTransform),m.normalScale.value.copy(c.normalScale),c.side===vn&&m.normalScale.value.negate()),c.displacementMap&&(m.displacementMap.value=c.displacementMap,n(c.displacementMap,m.displacementMapTransform),m.displacementScale.value=c.displacementScale,m.displacementBias.value=c.displacementBias),c.emissiveMap&&(m.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,m.emissiveMapTransform)),c.specularMap&&(m.specularMap.value=c.specularMap,n(c.specularMap,m.specularMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest);const v=e.get(c).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=c.reflectivity,m.ior.value=c.ior,m.refractionRatio.value=c.refractionRatio),c.lightMap){m.lightMap.value=c.lightMap;const g=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=c.lightMapIntensity*g,n(c.lightMap,m.lightMapTransform)}c.aoMap&&(m.aoMap.value=c.aoMap,m.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,m.aoMapTransform))}function o(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform))}function a(m,c){m.dashSize.value=c.dashSize,m.totalSize.value=c.dashSize+c.gapSize,m.scale.value=c.scale}function l(m,c,v,g){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.size.value=c.size*v,m.scale.value=g*.5,c.map&&(m.map.value=c.map,n(c.map,m.uvTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function u(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.rotation.value=c.rotation,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function f(m,c){m.specular.value.copy(c.specular),m.shininess.value=Math.max(c.shininess,1e-4)}function d(m,c){c.gradientMap&&(m.gradientMap.value=c.gradientMap)}function h(m,c){m.metalness.value=c.metalness,c.metalnessMap&&(m.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,m.metalnessMapTransform)),m.roughness.value=c.roughness,c.roughnessMap&&(m.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,m.roughnessMapTransform)),e.get(c).envMap&&(m.envMapIntensity.value=c.envMapIntensity)}function p(m,c,v){m.ior.value=c.ior,c.sheen>0&&(m.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),m.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(m.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,m.sheenColorMapTransform)),c.sheenRoughnessMap&&(m.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,m.sheenRoughnessMapTransform))),c.clearcoat>0&&(m.clearcoat.value=c.clearcoat,m.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(m.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,m.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(m.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===vn&&m.clearcoatNormalScale.value.negate())),c.iridescence>0&&(m.iridescence.value=c.iridescence,m.iridescenceIOR.value=c.iridescenceIOR,m.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(m.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,m.iridescenceMapTransform)),c.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),c.transmission>0&&(m.transmission.value=c.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),c.transmissionMap&&(m.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,m.transmissionMapTransform)),m.thickness.value=c.thickness,c.thicknessMap&&(m.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=c.attenuationDistance,m.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(m.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(m.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=c.specularIntensity,m.specularColor.value.copy(c.specularColor),c.specularColorMap&&(m.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,m.specularColorMapTransform)),c.specularIntensityMap&&(m.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,c){c.matcap&&(m.matcap.value=c.matcap)}function _(m,c){const v=e.get(c).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function pC(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,g){const x=g.program;i.uniformBlockBinding(v,x)}function u(v,g){let x=r[v.id];x===void 0&&(y(v),x=f(v),r[v.id]=x,v.addEventListener("dispose",m));const C=g.program;i.updateUBOMapping(v,C);const w=e.render.frame;s[v.id]!==w&&(h(v),s[v.id]=w)}function f(v){const g=d();v.__bindingPointIndex=g;const x=t.createBuffer(),C=v.__size,w=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,C,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,x),x}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const g=r[v.id],x=v.uniforms,C=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let w=0,R=x.length;w<R;w++){const D=Array.isArray(x[w])?x[w]:[x[w]];for(let M=0,E=D.length;M<E;M++){const W=D[M];if(p(W,w,M,C)===!0){const Y=W.__offset,re=Array.isArray(W.value)?W.value:[W.value];let L=0;for(let H=0;H<re.length;H++){const q=re[H],$=_(q);typeof q=="number"||typeof q=="boolean"?(W.__data[0]=q,t.bufferSubData(t.UNIFORM_BUFFER,Y+L,W.__data)):q.isMatrix3?(W.__data[0]=q.elements[0],W.__data[1]=q.elements[1],W.__data[2]=q.elements[2],W.__data[3]=0,W.__data[4]=q.elements[3],W.__data[5]=q.elements[4],W.__data[6]=q.elements[5],W.__data[7]=0,W.__data[8]=q.elements[6],W.__data[9]=q.elements[7],W.__data[10]=q.elements[8],W.__data[11]=0):(q.toArray(W.__data,L),L+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Y,W.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,g,x,C){const w=v.value,R=g+"_"+x;if(C[R]===void 0)return typeof w=="number"||typeof w=="boolean"?C[R]=w:C[R]=w.clone(),!0;{const D=C[R];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return C[R]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function y(v){const g=v.uniforms;let x=0;const C=16;for(let R=0,D=g.length;R<D;R++){const M=Array.isArray(g[R])?g[R]:[g[R]];for(let E=0,W=M.length;E<W;E++){const Y=M[E],re=Array.isArray(Y.value)?Y.value:[Y.value];for(let L=0,H=re.length;L<H;L++){const q=re[L],$=_(q),U=x%C;U!==0&&C-U<$.boundary&&(x+=C-U),Y.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=x,x+=$.storage}}}const w=x%C;return w>0&&(x+=C-w),v.__size=x,v.__cache={},this}function _(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function m(v){const g=v.target;g.removeEventListener("dispose",m);const x=o.indexOf(g.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function c(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:c}}class K0{constructor(e={}){const{canvas:n=uT(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),y=new Int32Array(4);let _=null,m=null;const c=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ot,this._useLegacyLights=!1,this.toneMapping=xr,this.toneMappingExposure=1;const g=this;let x=!1,C=0,w=0,R=null,D=-1,M=null;const E=new zt,W=new zt;let Y=null;const re=new Je(0);let L=0,H=n.width,q=n.height,$=1,U=null,F=null;const V=new zt(0,0,H,q),K=new zt(0,0,H,q);let Z=!1;const j=new G0;let Q=!1,ue=!1,pe=null;const ve=new It,Ue=new tt,Ie=new I,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ye(){return R===null?$:1}let O=i;function Kt(T,N){for(let G=0;G<T.length;G++){const X=T[G],k=n.getContext(X,N);if(k!==null)return k}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${wh}`),n.addEventListener("webglcontextlost",se,!1),n.addEventListener("webglcontextrestored",P,!1),n.addEventListener("webglcontextcreationerror",ae,!1),O===null){const N=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&N.shift(),O=Kt(N,T),O===null)throw Kt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ee,Le,_e,dt,ke,A,S,B,ne,ee,ie,ye,ce,me,Ae,ze,J,nt,We,Pe,Me,ge,Fe,Ze;function vt(){Ee=new TA(O),Le=new vA(O,Ee,e),Ee.init(Le),ge=new uC(O,Ee,Le),_e=new aC(O,Ee,Le),dt=new RA(O),ke=new qR,A=new lC(O,Ee,_e,ke,Le,ge,dt),S=new yA(g),B=new EA(g),ne=new NT(O,Le),Fe=new mA(O,Ee,ne,Le),ee=new wA(O,ne,dt,Fe),ie=new LA(O,ee,ne,dt),We=new PA(O,Le,A),ze=new _A(ke),ye=new jR(g,S,B,Ee,Le,Fe,ze),ce=new hC(g,ke),me=new $R,Ae=new tC(Ee,Le),nt=new pA(g,S,B,_e,ie,h,l),J=new oC(g,ie,Le),Ze=new pC(O,dt,Le,_e),Pe=new gA(O,Ee,dt,Le),Me=new AA(O,Ee,dt,Le),dt.programs=ye.programs,g.capabilities=Le,g.extensions=Ee,g.properties=ke,g.renderLists=me,g.shadowMap=J,g.state=_e,g.info=dt}vt();const He=new dC(g,O);this.xr=He,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const T=Ee.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ee.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(T){T!==void 0&&($=T,this.setSize(H,q,!1))},this.getSize=function(T){return T.set(H,q)},this.setSize=function(T,N,G=!0){if(He.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,q=N,n.width=Math.floor(T*$),n.height=Math.floor(N*$),G===!0&&(n.style.width=T+"px",n.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(H*$,q*$).floor()},this.setDrawingBufferSize=function(T,N,G){H=T,q=N,$=G,n.width=Math.floor(T*G),n.height=Math.floor(N*G),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(V)},this.setViewport=function(T,N,G,X){T.isVector4?V.set(T.x,T.y,T.z,T.w):V.set(T,N,G,X),_e.viewport(E.copy(V).multiplyScalar($).floor())},this.getScissor=function(T){return T.copy(K)},this.setScissor=function(T,N,G,X){T.isVector4?K.set(T.x,T.y,T.z,T.w):K.set(T,N,G,X),_e.scissor(W.copy(K).multiplyScalar($).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(T){_e.setScissorTest(Z=T)},this.setOpaqueSort=function(T){U=T},this.setTransparentSort=function(T){F=T},this.getClearColor=function(T){return T.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor.apply(nt,arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha.apply(nt,arguments)},this.clear=function(T=!0,N=!0,G=!0){let X=0;if(T){let k=!1;if(R!==null){const de=R.texture.format;k=de===A0||de===w0||de===T0}if(k){const de=R.texture.type,xe=de===Sr||de===lr||de===Ah||de===ns||de===M0||de===E0,we=nt.getClearColor(),be=nt.getClearAlpha(),Be=we.r,De=we.g,Ne=we.b;xe?(p[0]=Be,p[1]=De,p[2]=Ne,p[3]=be,O.clearBufferuiv(O.COLOR,0,p)):(y[0]=Be,y[1]=De,y[2]=Ne,y[3]=be,O.clearBufferiv(O.COLOR,0,y))}else X|=O.COLOR_BUFFER_BIT}N&&(X|=O.DEPTH_BUFFER_BIT),G&&(X|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",se,!1),n.removeEventListener("webglcontextrestored",P,!1),n.removeEventListener("webglcontextcreationerror",ae,!1),me.dispose(),Ae.dispose(),ke.dispose(),S.dispose(),B.dispose(),ie.dispose(),Fe.dispose(),Ze.dispose(),ye.dispose(),He.dispose(),He.removeEventListener("sessionstart",Qt),He.removeEventListener("sessionend",ot),pe&&(pe.dispose(),pe=null),Zt.stop()};function se(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const T=dt.autoReset,N=J.enabled,G=J.autoUpdate,X=J.needsUpdate,k=J.type;vt(),dt.autoReset=T,J.enabled=N,J.autoUpdate=G,J.needsUpdate=X,J.type=k}function ae(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function le(T){const N=T.target;N.removeEventListener("dispose",le),Ce(N)}function Ce(T){Te(T),ke.remove(T)}function Te(T){const N=ke.get(T).programs;N!==void 0&&(N.forEach(function(G){ye.releaseProgram(G)}),T.isShaderMaterial&&ye.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,G,X,k,de){N===null&&(N=Re);const xe=k.isMesh&&k.matrixWorld.determinant()<0,we=Z0(T,N,G,X,k);_e.setMaterial(X,xe);let be=G.index,Be=1;if(X.wireframe===!0){if(be=ee.getWireframeAttribute(G),be===void 0)return;Be=2}const De=G.drawRange,Ne=G.attributes.position;let St=De.start*Be,xn=(De.start+De.count)*Be;de!==null&&(St=Math.max(St,de.start*Be),xn=Math.min(xn,(de.start+de.count)*Be)),be!==null?(St=Math.max(St,0),xn=Math.min(xn,be.count)):Ne!=null&&(St=Math.max(St,0),xn=Math.min(xn,Ne.count));const Pt=xn-St;if(Pt<0||Pt===1/0)return;Fe.setup(k,X,we,G,be);let _i,ht=Pe;if(be!==null&&(_i=ne.get(be),ht=Me,ht.setIndex(_i)),k.isMesh)X.wireframe===!0?(_e.setLineWidth(X.wireframeLinewidth*Ye()),ht.setMode(O.LINES)):ht.setMode(O.TRIANGLES);else if(k.isLine){let Ge=X.linewidth;Ge===void 0&&(Ge=1),_e.setLineWidth(Ge*Ye()),k.isLineSegments?ht.setMode(O.LINES):k.isLineLoop?ht.setMode(O.LINE_LOOP):ht.setMode(O.LINE_STRIP)}else k.isPoints?ht.setMode(O.POINTS):k.isSprite&&ht.setMode(O.TRIANGLES);if(k.isBatchedMesh)ht.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)ht.renderInstances(St,Pt,k.count);else if(G.isInstancedBufferGeometry){const Ge=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ku=Math.min(G.instanceCount,Ge);ht.renderInstances(St,Pt,Ku)}else ht.render(St,Pt)};function rt(T,N,G){T.transparent===!0&&T.side===pi&&T.forceSinglePass===!1?(T.side=vn,T.needsUpdate=!0,Ya(T,N,G),T.side=Tr,T.needsUpdate=!0,Ya(T,N,G),T.side=pi):Ya(T,N,G)}this.compile=function(T,N,G=null){G===null&&(G=T),m=Ae.get(G),m.init(),v.push(m),G.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),T!==G&&T.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights(g._useLegacyLights);const X=new Set;return T.traverse(function(k){const de=k.material;if(de)if(Array.isArray(de))for(let xe=0;xe<de.length;xe++){const we=de[xe];rt(we,G,k),X.add(we)}else rt(de,G,k),X.add(de)}),v.pop(),m=null,X},this.compileAsync=function(T,N,G=null){const X=this.compile(T,N,G);return new Promise(k=>{function de(){if(X.forEach(function(xe){ke.get(xe).currentProgram.isReady()&&X.delete(xe)}),X.size===0){k(T);return}setTimeout(de,10)}Ee.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let st=null;function bt(T){st&&st(T)}function Qt(){Zt.stop()}function ot(){Zt.start()}const Zt=new V0;Zt.setAnimationLoop(bt),typeof self<"u"&&Zt.setContext(self),this.setAnimationLoop=function(T){st=T,He.setAnimationLoop(T),T===null?Zt.stop():Zt.start()},He.addEventListener("sessionstart",Qt),He.addEventListener("sessionend",ot),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(He.cameraAutoUpdate===!0&&He.updateCamera(N),N=He.getCamera()),T.isScene===!0&&T.onBeforeRender(g,T,N,R),m=Ae.get(T,v.length),m.init(),v.push(m),ve.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),j.setFromProjectionMatrix(ve),ue=this.localClippingEnabled,Q=ze.init(this.clippingPlanes,ue),_=me.get(T,c.length),_.init(),c.push(_),oi(T,N,0,g.sortObjects),_.finish(),g.sortObjects===!0&&_.sort(U,F),this.info.render.frame++,Q===!0&&ze.beginShadows();const G=m.state.shadowsArray;if(J.render(G,T,N),Q===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),nt.render(_,T),m.setupLights(g._useLegacyLights),N.isArrayCamera){const X=N.cameras;for(let k=0,de=X.length;k<de;k++){const xe=X[k];Lh(_,T,xe,xe.viewport)}}else Lh(_,T,N);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(g,T,N),Fe.resetDefaultState(),D=-1,M=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,c.pop(),c.length>0?_=c[c.length-1]:_=null};function oi(T,N,G,X){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||j.intersectsSprite(T)){X&&Ie.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ve);const xe=ie.update(T),we=T.material;we.visible&&_.push(T,xe,we,G,Ie.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||j.intersectsObject(T))){const xe=ie.update(T),we=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ie.copy(T.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ie.copy(xe.boundingSphere.center)),Ie.applyMatrix4(T.matrixWorld).applyMatrix4(ve)),Array.isArray(we)){const be=xe.groups;for(let Be=0,De=be.length;Be<De;Be++){const Ne=be[Be],St=we[Ne.materialIndex];St&&St.visible&&_.push(T,xe,St,G,Ie.z,Ne)}}else we.visible&&_.push(T,xe,we,G,Ie.z,null)}}const de=T.children;for(let xe=0,we=de.length;xe<we;xe++)oi(de[xe],N,G,X)}function Lh(T,N,G,X){const k=T.opaque,de=T.transmissive,xe=T.transparent;m.setupLightsView(G),Q===!0&&ze.setGlobalState(g.clippingPlanes,G),de.length>0&&Q0(k,de,N,G),X&&_e.viewport(E.copy(X)),k.length>0&&qa(k,N,G),de.length>0&&qa(de,N,G),xe.length>0&&qa(xe,N,G),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Q0(T,N,G,X){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;const de=Le.isWebGL2;pe===null&&(pe=new cs(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?Pa:Sr,minFilter:ba,samples:de?4:0})),g.getDrawingBufferSize(Ue),de?pe.setSize(Ue.x,Ue.y):pe.setSize(Md(Ue.x),Md(Ue.y));const xe=g.getRenderTarget();g.setRenderTarget(pe),g.getClearColor(re),L=g.getClearAlpha(),L<1&&g.setClearColor(16777215,.5),g.clear();const we=g.toneMapping;g.toneMapping=xr,qa(T,G,X),A.updateMultisampleRenderTarget(pe),A.updateRenderTargetMipmap(pe);let be=!1;for(let Be=0,De=N.length;Be<De;Be++){const Ne=N[Be],St=Ne.object,xn=Ne.geometry,Pt=Ne.material,_i=Ne.group;if(Pt.side===pi&&St.layers.test(X.layers)){const ht=Pt.side;Pt.side=vn,Pt.needsUpdate=!0,Dh(St,G,X,xn,Pt,_i),Pt.side=ht,Pt.needsUpdate=!0,be=!0}}be===!0&&(A.updateMultisampleRenderTarget(pe),A.updateRenderTargetMipmap(pe)),g.setRenderTarget(xe),g.setClearColor(re,L),g.toneMapping=we}function qa(T,N,G){const X=N.isScene===!0?N.overrideMaterial:null;for(let k=0,de=T.length;k<de;k++){const xe=T[k],we=xe.object,be=xe.geometry,Be=X===null?xe.material:X,De=xe.group;we.layers.test(G.layers)&&Dh(we,N,G,be,Be,De)}}function Dh(T,N,G,X,k,de){T.onBeforeRender(g,N,G,X,k,de),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(g,N,G,X,T,de),k.transparent===!0&&k.side===pi&&k.forceSinglePass===!1?(k.side=vn,k.needsUpdate=!0,g.renderBufferDirect(G,N,X,k,T,de),k.side=Tr,k.needsUpdate=!0,g.renderBufferDirect(G,N,X,k,T,de),k.side=pi):g.renderBufferDirect(G,N,X,k,T,de),T.onAfterRender(g,N,G,X,k,de)}function Ya(T,N,G){N.isScene!==!0&&(N=Re);const X=ke.get(T),k=m.state.lights,de=m.state.shadowsArray,xe=k.state.version,we=ye.getParameters(T,k.state,de,N,G),be=ye.getProgramCacheKey(we);let Be=X.programs;X.environment=T.isMeshStandardMaterial?N.environment:null,X.fog=N.fog,X.envMap=(T.isMeshStandardMaterial?B:S).get(T.envMap||X.environment),Be===void 0&&(T.addEventListener("dispose",le),Be=new Map,X.programs=Be);let De=Be.get(be);if(De!==void 0){if(X.currentProgram===De&&X.lightsStateVersion===xe)return Nh(T,we),De}else we.uniforms=ye.getUniforms(T),T.onBuild(G,we,g),T.onBeforeCompile(we,g),De=ye.acquireProgram(we,be),Be.set(be,De),X.uniforms=we.uniforms;const Ne=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ne.clippingPlanes=ze.uniform),Nh(T,we),X.needsLights=ey(T),X.lightsStateVersion=xe,X.needsLights&&(Ne.ambientLightColor.value=k.state.ambient,Ne.lightProbe.value=k.state.probe,Ne.directionalLights.value=k.state.directional,Ne.directionalLightShadows.value=k.state.directionalShadow,Ne.spotLights.value=k.state.spot,Ne.spotLightShadows.value=k.state.spotShadow,Ne.rectAreaLights.value=k.state.rectArea,Ne.ltc_1.value=k.state.rectAreaLTC1,Ne.ltc_2.value=k.state.rectAreaLTC2,Ne.pointLights.value=k.state.point,Ne.pointLightShadows.value=k.state.pointShadow,Ne.hemisphereLights.value=k.state.hemi,Ne.directionalShadowMap.value=k.state.directionalShadowMap,Ne.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ne.spotShadowMap.value=k.state.spotShadowMap,Ne.spotLightMatrix.value=k.state.spotLightMatrix,Ne.spotLightMap.value=k.state.spotLightMap,Ne.pointShadowMap.value=k.state.pointShadowMap,Ne.pointShadowMatrix.value=k.state.pointShadowMatrix),X.currentProgram=De,X.uniformsList=null,De}function Uh(T){if(T.uniformsList===null){const N=T.currentProgram.getUniforms();T.uniformsList=$l.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function Nh(T,N){const G=ke.get(T);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function Z0(T,N,G,X,k){N.isScene!==!0&&(N=Re),A.resetTextureUnits();const de=N.fog,xe=X.isMeshStandardMaterial?N.environment:null,we=R===null?g.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ki,be=(X.isMeshStandardMaterial?B:S).get(X.envMap||xe),Be=X.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,De=!!G.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ne=!!G.morphAttributes.position,St=!!G.morphAttributes.normal,xn=!!G.morphAttributes.color;let Pt=xr;X.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Pt=g.toneMapping);const _i=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ht=_i!==void 0?_i.length:0,Ge=ke.get(X),Ku=m.state.lights;if(Q===!0&&(ue===!0||T!==M)){const Dn=T===M&&X.id===D;ze.setState(X,T,Dn)}let _t=!1;X.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Ku.state.version||Ge.outputColorSpace!==we||k.isBatchedMesh&&Ge.batching===!1||!k.isBatchedMesh&&Ge.batching===!0||k.isInstancedMesh&&Ge.instancing===!1||!k.isInstancedMesh&&Ge.instancing===!0||k.isSkinnedMesh&&Ge.skinning===!1||!k.isSkinnedMesh&&Ge.skinning===!0||k.isInstancedMesh&&Ge.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ge.instancingColor===!1&&k.instanceColor!==null||Ge.envMap!==be||X.fog===!0&&Ge.fog!==de||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==ze.numPlanes||Ge.numIntersection!==ze.numIntersection)||Ge.vertexAlphas!==Be||Ge.vertexTangents!==De||Ge.morphTargets!==Ne||Ge.morphNormals!==St||Ge.morphColors!==xn||Ge.toneMapping!==Pt||Le.isWebGL2===!0&&Ge.morphTargetsCount!==ht)&&(_t=!0):(_t=!0,Ge.__version=X.version);let Cr=Ge.currentProgram;_t===!0&&(Cr=Ya(X,N,k));let Ih=!1,Po=!1,Qu=!1;const Gt=Cr.getUniforms(),br=Ge.uniforms;if(_e.useProgram(Cr.program)&&(Ih=!0,Po=!0,Qu=!0),X.id!==D&&(D=X.id,Po=!0),Ih||M!==T){Gt.setValue(O,"projectionMatrix",T.projectionMatrix),Gt.setValue(O,"viewMatrix",T.matrixWorldInverse);const Dn=Gt.map.cameraPosition;Dn!==void 0&&Dn.setValue(O,Ie.setFromMatrixPosition(T.matrixWorld)),Le.logarithmicDepthBuffer&&Gt.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Gt.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,Po=!0,Qu=!0)}if(k.isSkinnedMesh){Gt.setOptional(O,k,"bindMatrix"),Gt.setOptional(O,k,"bindMatrixInverse");const Dn=k.skeleton;Dn&&(Le.floatVertexTextures?(Dn.boneTexture===null&&Dn.computeBoneTexture(),Gt.setValue(O,"boneTexture",Dn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(Gt.setOptional(O,k,"batchingTexture"),Gt.setValue(O,"batchingTexture",k._matricesTexture,A));const Zu=G.morphAttributes;if((Zu.position!==void 0||Zu.normal!==void 0||Zu.color!==void 0&&Le.isWebGL2===!0)&&We.update(k,G,Cr),(Po||Ge.receiveShadow!==k.receiveShadow)&&(Ge.receiveShadow=k.receiveShadow,Gt.setValue(O,"receiveShadow",k.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(br.envMap.value=be,br.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),Po&&(Gt.setValue(O,"toneMappingExposure",g.toneMappingExposure),Ge.needsLights&&J0(br,Qu),de&&X.fog===!0&&ce.refreshFogUniforms(br,de),ce.refreshMaterialUniforms(br,X,$,q,pe),$l.upload(O,Uh(Ge),br,A)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&($l.upload(O,Uh(Ge),br,A),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Gt.setValue(O,"center",k.center),Gt.setValue(O,"modelViewMatrix",k.modelViewMatrix),Gt.setValue(O,"normalMatrix",k.normalMatrix),Gt.setValue(O,"modelMatrix",k.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Dn=X.uniformsGroups;for(let Ju=0,ty=Dn.length;Ju<ty;Ju++)if(Le.isWebGL2){const Fh=Dn[Ju];Ze.update(Fh,Cr),Ze.bind(Fh,Cr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Cr}function J0(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function ey(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,N,G){ke.get(T.texture).__webglTexture=N,ke.get(T.depthTexture).__webglTexture=G;const X=ke.get(T);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=G===void 0,X.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,N){const G=ke.get(T);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,G=0){R=T,C=N,w=G;let X=!0,k=null,de=!1,xe=!1;if(T){const be=ke.get(T);be.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(O.FRAMEBUFFER,null),X=!1):be.__webglFramebuffer===void 0?A.setupRenderTarget(T):be.__hasExternalTextures&&A.rebindTextures(T,ke.get(T.texture).__webglTexture,ke.get(T.depthTexture).__webglTexture);const Be=T.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(xe=!0);const De=ke.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(De[N])?k=De[N][G]:k=De[N],de=!0):Le.isWebGL2&&T.samples>0&&A.useMultisampledRTT(T)===!1?k=ke.get(T).__webglMultisampledFramebuffer:Array.isArray(De)?k=De[G]:k=De,E.copy(T.viewport),W.copy(T.scissor),Y=T.scissorTest}else E.copy(V).multiplyScalar($).floor(),W.copy(K).multiplyScalar($).floor(),Y=Z;if(_e.bindFramebuffer(O.FRAMEBUFFER,k)&&Le.drawBuffers&&X&&_e.drawBuffers(T,k),_e.viewport(E),_e.scissor(W),_e.setScissorTest(Y),de){const be=ke.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,be.__webglTexture,G)}else if(xe){const be=ke.get(T.texture),Be=N||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,be.__webglTexture,G||0,Be)}D=-1},this.readRenderTargetPixels=function(T,N,G,X,k,de,xe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=ke.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&xe!==void 0&&(we=we[xe]),we){_e.bindFramebuffer(O.FRAMEBUFFER,we);try{const be=T.texture,Be=be.format,De=be.type;if(Be!==ni&&ge.convert(Be)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ne=De===Pa&&(Ee.has("EXT_color_buffer_half_float")||Le.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(De!==Sr&&ge.convert(De)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(De===ur&&(Le.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-X&&G>=0&&G<=T.height-k&&O.readPixels(N,G,X,k,ge.convert(Be),ge.convert(De),de)}finally{const be=R!==null?ke.get(R).__webglFramebuffer:null;_e.bindFramebuffer(O.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(T,N,G=0){const X=Math.pow(2,-G),k=Math.floor(N.image.width*X),de=Math.floor(N.image.height*X);A.setTexture2D(N,0),O.copyTexSubImage2D(O.TEXTURE_2D,G,0,0,T.x,T.y,k,de),_e.unbindTexture()},this.copyTextureToTexture=function(T,N,G,X=0){const k=N.image.width,de=N.image.height,xe=ge.convert(G.format),we=ge.convert(G.type);A.setTexture2D(G,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,G.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,G.unpackAlignment),N.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,X,T.x,T.y,k,de,xe,we,N.image.data):N.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,X,T.x,T.y,N.mipmaps[0].width,N.mipmaps[0].height,xe,N.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,X,T.x,T.y,xe,we,N.image),X===0&&G.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(T,N,G,X,k=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=T.max.x-T.min.x+1,xe=T.max.y-T.min.y+1,we=T.max.z-T.min.z+1,be=ge.convert(X.format),Be=ge.convert(X.type);let De;if(X.isData3DTexture)A.setTexture3D(X,0),De=O.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)A.setTexture2DArray(X,0),De=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,X.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,X.unpackAlignment);const Ne=O.getParameter(O.UNPACK_ROW_LENGTH),St=O.getParameter(O.UNPACK_IMAGE_HEIGHT),xn=O.getParameter(O.UNPACK_SKIP_PIXELS),Pt=O.getParameter(O.UNPACK_SKIP_ROWS),_i=O.getParameter(O.UNPACK_SKIP_IMAGES),ht=G.isCompressedTexture?G.mipmaps[k]:G.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,ht.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ht.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,T.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,T.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,T.min.z),G.isDataTexture||G.isData3DTexture?O.texSubImage3D(De,k,N.x,N.y,N.z,de,xe,we,be,Be,ht.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(De,k,N.x,N.y,N.z,de,xe,we,be,ht.data)):O.texSubImage3D(De,k,N.x,N.y,N.z,de,xe,we,be,Be,ht),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ne),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,St),O.pixelStorei(O.UNPACK_SKIP_PIXELS,xn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Pt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,_i),k===0&&X.generateMipmaps&&O.generateMipmap(De),_e.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),_e.unbindTexture()},this.resetState=function(){C=0,w=0,R=null,_e.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Rh?"display-p3":"srgb",n.unpackColorSpace=it.workingColorSpace===ju?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ot?rs:C0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===rs?Ot:ki}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class mC extends K0{}mC.prototype.isWebGL1Renderer=!0;class gC extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Td extends Xa{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wg=new I,Ag=new I,Rg=new It,of=new N0,Fl=new qu;class Cg extends _n{constructor(e=new Wn,n=new Td){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)wg.fromBufferAttribute(n,r-1),Ag.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=wg.distanceTo(Ag);e.setAttribute("lineDistance",new yn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fl.copy(i.boundingSphere),Fl.applyMatrix4(r),Fl.radius+=s,e.ray.intersectsSphere(Fl)===!1)return;Rg.copy(r).invert(),of.copy(e.ray).applyMatrix4(Rg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new I,f=new I,d=new I,h=new I,p=this.isLineSegments?2:1,y=i.index,m=i.attributes.position;if(y!==null){const c=Math.max(0,o.start),v=Math.min(y.count,o.start+o.count);for(let g=c,x=v-1;g<x;g+=p){const C=y.getX(g),w=y.getX(g+1);if(u.fromBufferAttribute(m,C),f.fromBufferAttribute(m,w),of.distanceSqToSegment(u,f,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(h);D<e.near||D>e.far||n.push({distance:D,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const c=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let g=c,x=v-1;g<x;g+=p){if(u.fromBufferAttribute(m,g),f.fromBufferAttribute(m,g+1),of.distanceSqToSegment(u,f,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(h);w<e.near||w>e.far||n.push({distance:w,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class Ph extends Wn{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],u=[],f=[];let d=e;const h=(n-e)/r,p=new I,y=new tt;for(let _=0;_<=r;_++){for(let m=0;m<=i;m++){const c=s+m/i*o;p.x=d*Math.cos(c),p.y=d*Math.sin(c),l.push(p.x,p.y,p.z),u.push(0,0,1),y.x=(p.x/n+1)/2,y.y=(p.y/n+1)/2,f.push(y.x,y.y)}d+=h}for(let _=0;_<r;_++){const m=_*(i+1);for(let c=0;c<i;c++){const v=c+m,g=v,x=v+i+1,C=v+i+2,w=v+1;a.push(g,x,w),a.push(x,C,w)}}this.setIndex(a),this.setAttribute("position",new yn(l,3)),this.setAttribute("normal",new yn(u,3)),this.setAttribute("uv",new yn(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ph(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Br extends Wn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const f=[],d=new I,h=new I,p=[],y=[],_=[],m=[];for(let c=0;c<=i;c++){const v=[],g=c/i;let x=0;c===0&&o===0?x=.5/n:c===i&&l===Math.PI&&(x=-.5/n);for(let C=0;C<=n;C++){const w=C/n;d.x=-e*Math.cos(r+w*s)*Math.sin(o+g*a),d.y=e*Math.cos(o+g*a),d.z=e*Math.sin(r+w*s)*Math.sin(o+g*a),y.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(w+x,1-g),v.push(u++)}f.push(v)}for(let c=0;c<i;c++)for(let v=0;v<n;v++){const g=f[c][v+1],x=f[c][v],C=f[c+1][v],w=f[c+1][v+1];(c!==0||o>0)&&p.push(g,x,w),(c!==i-1||l<Math.PI)&&p.push(x,C,w)}this.setIndex(p),this.setAttribute("position",new yn(y,3)),this.setAttribute("normal",new yn(_,3)),this.setAttribute("uv",new yn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Br(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wh);class vC{constructor(e){Xn(this,"renderer");Xn(this,"scene");Xn(this,"camera");Xn(this,"particles",[]);Xn(this,"objects",[]);Xn(this,"currentScene",null);Xn(this,"frameId",0);Xn(this,"time",0);Xn(this,"resize",()=>{const e=window.innerWidth,n=window.innerHeight;this.renderer.setSize(e,n),this.camera.aspect=e/n,this.camera.updateProjectionMatrix()});Xn(this,"animate",()=>{this.frameId=requestAnimationFrame(this.animate),this.time++,this.particles.forEach(e=>{const n=e.mesh.position;if(e.type==="rain"||e.type==="snow")n.y+=e.vy,n.x+=e.vx,e.type==="snow"&&e.wobble!==void 0&&(n.x+=Math.sin(this.time*.02+e.wobble)*.005),n.y<-5&&(n.y=e.yReset??5,n.x=(Math.random()-.5)*14);else if(e.type==="cloud")n.x+=e.vx,n.x<-8&&(n.x=8);else if(e.type==="dust")n.x+=e.vx,n.y+=e.vy,Math.abs(n.x)>7&&(e.vx*=-1),Math.abs(n.y)>5&&(e.vy*=-1);else if(e.type==="lightning")e.timer=(e.timer??0)+1,e.timer>(e.interval??100)&&(e.mesh.visible=!0,e.timer>(e.interval??100)+3&&(e.mesh.visible=!1,e.timer=0,e.interval=80+Math.random()*200));else if(e.type==="fog"){n.x+=e.vx,n.x<-10&&(n.x=10);const i=e.mesh.material;i.opacity=.04+Math.sin(this.time*.01)*.015}}),this.renderer.render(this.scene,this.camera)});this.renderer=new K0({canvas:e,alpha:!0,antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(0,0),this.scene=new gC,this.camera=new kn(60,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,0,5),this.resize(),window.addEventListener("resize",this.resize),this.animate()}clearScene(){this.objects.forEach(e=>this.scene.remove(e)),this.objects=[],this.particles=[]}addObject(e){this.scene.add(e),this.objects.push(e)}buildSunny(){const e=new Br(.8,32,32),n=new $i({color:16766720,transparent:!0,opacity:.15}),i=new dn(e,n);i.position.set(3,2.5,-3),this.addObject(i);for(let r=0;r<6;r++){const s=new Ph(.85+r*.15,.87+r*.15,64),o=new $i({color:16766720,transparent:!0,opacity:Math.max(.005,.05-r*.006),side:pi}),a=new dn(s,o);a.position.copy(i.position),this.addObject(a)}for(let r=0;r<60;r++){const s=new Br(.015+Math.random()*.025,6,6),o=new $i({color:16771744,transparent:!0,opacity:.3+Math.random()*.4}),a=new dn(s,o);a.position.set((Math.random()-.5)*12,(Math.random()-.5)*8,(Math.random()-.5)*3-2),this.addObject(a),this.particles.push({mesh:a,vx:(Math.random()-.5)*.003,vy:(Math.random()-.5)*.002,type:"dust"})}}buildClouds(){const e=(n,i,r,s)=>{const o=new $o;for(let a=0;a<8;a++){const l=new Br(.3*s+Math.random()*.2*s,8,8),u=new $i({color:13421789,transparent:!0,opacity:.12+Math.random()*.08}),f=new dn(l,u);f.position.set((Math.random()-.5)*.8*s,(Math.random()-.5)*.3*s,(Math.random()-.5)*.4*s),o.add(f)}o.position.set(n,i,r),this.addObject(o),this.particles.push({mesh:o,vx:-.004*s,vy:0,type:"cloud"})};e(-4,2,-3,2),e(2,1.5,-2,1.5),e(-1,3,-4,2.5),e(4,.5,-1,1),e(-3,-.5,-2,1.2)}buildRain(){this.buildClouds();for(let e=0;e<200;e++){const n=new Wn;n.setFromPoints([new I(0,0,0),new I(0,-.15,0)]);const i=new Td({color:8961023,transparent:!0,opacity:.4+Math.random()*.3}),r=new Cg(n,i);r.position.set((Math.random()-.5)*14,(Math.random()-.5)*10,(Math.random()-.5)*4-1),this.addObject(r),this.particles.push({mesh:r,vx:.001,vy:-.05-Math.random()*.05,type:"rain",yReset:5})}}buildStorm(){this.buildRain();for(let e=0;e<5;e++){const n=[];let i=(Math.random()-.5)*8,r=3;for(let l=0;l<8;l++)i+=(Math.random()-.5)*.8,r-=.5,n.push(new I(i,r,Math.random()-2));const s=new Wn().setFromPoints(n),o=new Td({color:16777215,transparent:!0,opacity:.7}),a=new Cg(s,o);a.visible=!1,this.addObject(a),this.particles.push({mesh:a,vx:0,vy:0,type:"lightning",timer:Math.random()*200,interval:80+Math.random()*200})}}buildSnow(){for(let e=0;e<150;e++){const n=new Br(.02+Math.random()*.03,4,4),i=new $i({color:14742270,transparent:!0,opacity:.6+Math.random()*.4}),r=new dn(n,i);r.position.set((Math.random()-.5)*14,(Math.random()-.5)*10,(Math.random()-.5)*4-1),this.addObject(r),this.particles.push({mesh:r,vx:(Math.random()-.5)*.008,vy:-.01-Math.random()*.01,type:"snow",yReset:5,wobble:Math.random()*Math.PI*2})}}buildFog(){for(let e=0;e<30;e++){const n=new Br(.5+Math.random()*1,8,8),i=new $i({color:11189196,transparent:!0,opacity:.04+Math.random()*.04}),r=new dn(n,i);r.position.set((Math.random()-.5)*16,(Math.random()-.5)*6,(Math.random()-.5)*3-1),this.addObject(r),this.particles.push({mesh:r,vx:-.003,vy:0,type:"fog"})}}setScene(e){if(!(e===this.currentScene&&this.objects.length>0))switch(this.currentScene=e,this.clearScene(),e){case"sunny":this.buildSunny();break;case"cloudy":this.buildClouds();break;case"rainy":this.buildRain();break;case"storm":this.buildStorm();break;case"snow":this.buildSnow();break;case"fog":this.buildFog();break}}dispose(){cancelAnimationFrame(this.frameId),window.removeEventListener("resize",this.resize),this.renderer.dispose()}}function _C({scene:t}){const e=Ke.useRef(null),n=Ke.useRef(null);return Ke.useEffect(()=>{if(e.current)return n.current=new vC(e.current),()=>{var i;(i=n.current)==null||i.dispose()}},[]),Ke.useEffect(()=>{var i;(i=n.current)==null||i.setScene(t)},[t]),z.jsx("canvas",{ref:e,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0,opacity:.7}})}function yC({onSelect:t,loading:e}){const[n,i]=Ke.useState(""),[r,s]=Ke.useState(""),[o,a]=Ke.useState(!1),l=Ke.useRef(),{data:u=[]}=tE(r,o),f=Ke.useCallback(p=>{i(p),l.current&&clearTimeout(l.current),p.length>=2?l.current=setTimeout(()=>{s(p),a(!0)},300):a(!1)},[]),d=Ke.useCallback(p=>{const y={name:p.name,country:p.country,country_code:p.country_code,lat:p.latitude,lon:p.longitude,admin1:p.admin1};i(p.name),a(!1),t(y)},[t]),h=Ke.useCallback(()=>{u.length>0&&d(u[0])},[u,d]);return z.jsxs("div",{style:{position:"relative",marginBottom:"16px"},children:[z.jsxs("div",{className:"search-bar",children:[z.jsx("input",{className:"search-input",placeholder:"Search city, region or country…",value:n,onChange:p=>f(p.target.value),onKeyDown:p=>{p.key==="Enter"&&h(),p.key==="Escape"&&a(!1)}}),z.jsx("button",{className:"btn-search",onClick:h,disabled:e||!n.trim(),children:e?"…":"Search"})]}),o&&u.length>0&&z.jsx("div",{className:"suggestions",children:u.map((p,y)=>z.jsxs("div",{className:"suggestion-item",onClick:()=>d(p),children:[z.jsx("strong",{children:p.name}),p.admin1?` · ${p.admin1}`:"",p.country?` · ${p.country}`:""]},y))})]})}function xC({current:t,daily:e,unit:n,locationName:i,country:r}){var h;const s=Wu(t.weather_code),o=new Date,a=new Date(e.sunrise[0]),l=new Date(e.sunset[0]),u=l.getTime()-a.getTime(),d=Math.max(0,Math.min(o.getTime()-a.getTime(),u))/u*100;return z.jsxs("div",{className:"main-card",children:[z.jsxs("div",{className:"current-weather",children:[z.jsxs("div",{className:"location-info",children:[z.jsxs("div",{className:"city-name",children:[i,r?`, ${r}`:""]}),z.jsxs("div",{className:"date-time",children:[o.toLocaleDateString("en",{weekday:"long",month:"long",day:"numeric",year:"numeric"})," · ",o.toLocaleTimeString("en",{hour:"2-digit",minute:"2-digit"})]}),z.jsxs("div",{style:{marginTop:"8px"},children:[z.jsx("span",{className:`badge badge-${t.is_day?"amber":"blue"}`,children:t.is_day?"Daytime":"Nighttime"}),t.uv_index>=8&&z.jsx("span",{className:"badge badge-red",style:{marginLeft:"6px"},children:"High UV"})]})]}),z.jsxs("div",{className:"weather-main",children:[z.jsx("div",{className:"weather-icon-3d",children:s.icon}),z.jsxs("div",{className:"temp-display",children:[z.jsxs("div",{className:"temp-big",children:[Ra(t.temperature_2m,n),z.jsx("sup",{style:{fontSize:"24px",verticalAlign:"super"},children:Ca(n)})]}),z.jsx("div",{className:"weather-desc",children:s.label}),z.jsxs("div",{className:"temp-feels",children:["Feels like ",Ra(t.apparent_temperature,n),Ca(n)]})]})]})]}),z.jsxs("div",{className:"stats-row",children:[z.jsxs("div",{className:"stat-card",children:[z.jsx("div",{className:"stat-icon",children:"💧"}),z.jsx("div",{className:"stat-label",children:"Humidity"}),z.jsxs("div",{className:"stat-value",style:{color:"var(--accent-cyan)"},children:[t.relative_humidity_2m,"%"]})]}),z.jsxs("div",{className:"stat-card",children:[z.jsx("div",{className:"stat-icon",children:"💨"}),z.jsx("div",{className:"stat-label",children:"Wind"}),z.jsxs("div",{className:"stat-value",style:{color:"var(--accent-blue)"},children:[Math.round(t.wind_speed_10m)," ",z.jsx("span",{style:{fontSize:"11px",fontWeight:400},children:"mph"})]})]}),z.jsxs("div",{className:"stat-card",children:[z.jsx("div",{className:"stat-icon",children:"🌡️"}),z.jsx("div",{className:"stat-label",children:"Pressure"}),z.jsxs("div",{className:"stat-value",style:{color:"var(--accent-purple)"},children:[Math.round(t.surface_pressure)," ",z.jsx("span",{style:{fontSize:"11px",fontWeight:400},children:"hPa"})]})]}),z.jsxs("div",{className:"stat-card",children:[z.jsx("div",{className:"stat-icon",children:"☁️"}),z.jsx("div",{className:"stat-label",children:"Cloud Cover"}),z.jsxs("div",{className:"stat-value",children:[t.cloud_cover,"%"]})]})]}),z.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px",marginTop:"10px"},children:[z.jsxs("div",{className:"stat-card",style:{textAlign:"left"},children:[z.jsx("div",{style:{fontSize:"11px",color:"var(--text-secondary)",marginBottom:"4px"},children:"UV INDEX"}),z.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"8px"},children:[z.jsx("span",{style:{fontSize:"24px",fontWeight:700,color:oE(t.uv_index)},children:(h=t.uv_index)==null?void 0:h.toFixed(1)}),z.jsx("span",{style:{fontSize:"13px",color:"var(--text-secondary)"},children:aE(t.uv_index)})]}),z.jsxs("div",{style:{position:"relative",marginTop:"6px"},children:[z.jsx("div",{className:"uv-bar"}),z.jsx("div",{className:"uv-indicator",style:{left:`${Math.min(t.uv_index/12*100,100)}%`}})]})]}),z.jsxs("div",{className:"stat-card",style:{textAlign:"left"},children:[z.jsx("div",{style:{fontSize:"11px",color:"var(--text-secondary)",marginBottom:"4px"},children:"WIND"}),z.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[z.jsxs("div",{className:"wind-compass",style:{margin:0,flexShrink:0},children:[z.jsx("div",{className:"wind-needle",style:{transform:`rotate(${t.wind_direction_10m}deg)`,transformOrigin:"bottom center",position:"absolute",top:"4px",left:"50%",marginLeft:"-1px",height:"22px"}}),z.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",fontSize:"10px",color:"var(--text-secondary)",fontWeight:600},children:sE(t.wind_direction_10m)})]}),z.jsxs("div",{children:[z.jsxs("div",{style:{fontSize:"18px",fontWeight:700,color:"var(--accent-blue)"},children:[Math.round(t.wind_speed_10m)," mph"]}),z.jsxs("div",{style:{fontSize:"11px",color:"var(--text-secondary)"},children:["Gusts: ",Math.round(t.wind_gusts_10m)," mph"]})]})]})]})]}),z.jsxs("div",{className:"stat-card",style:{marginTop:"10px"},children:[z.jsx("div",{style:{fontSize:"11px",color:"var(--text-secondary)",marginBottom:"8px"},children:"🌅 SUNRISE / SUNSET"}),z.jsxs("div",{className:"sun-timeline",children:[z.jsxs("div",{className:"sun-time",children:[z.jsx("span",{children:"🌅"}),z.jsx("strong",{children:a.toLocaleTimeString("en",{hour:"2-digit",minute:"2-digit"})}),z.jsx("span",{style:{fontSize:"10px",color:"var(--text-secondary)"},children:"Sunrise"})]}),z.jsx("div",{className:"sun-arc",style:{position:"relative"},children:d>0&&d<100&&z.jsx("div",{style:{position:"absolute",left:`${d}%`,top:"-8px",transform:"translateX(-50%)",fontSize:"16px"},children:"☀️"})}),z.jsxs("div",{className:"sun-time",children:[z.jsx("span",{children:"🌇"}),z.jsx("strong",{children:l.toLocaleTimeString("en",{hour:"2-digit",minute:"2-digit"})}),z.jsx("span",{style:{fontSize:"10px",color:"var(--text-secondary)"},children:"Sunset"})]})]}),z.jsxs("div",{style:{fontSize:"12px",color:"var(--text-secondary)",marginTop:"8px",textAlign:"center"},children:["Daylight: ",Math.floor(u/36e5),"h ",Math.floor(u%36e5/6e4),"m"]})]})]})}function SC({daily:t,unit:e}){return z.jsxs("div",{style:{marginBottom:"16px"},children:[z.jsx("div",{className:"section-title",children:"7-Day Forecast"}),z.jsx("div",{className:"forecast-grid",children:t.time.slice(0,7).map((n,i)=>z.jsxs("div",{className:`forecast-card${i===0?" today":""}`,children:[z.jsx("div",{className:"forecast-day",children:v0(n,i)}),z.jsx("div",{className:"forecast-icon",children:Wu(t.weather_code[i]??0).icon}),z.jsxs("div",{className:"forecast-high",children:[Ra(t.temperature_2m_max[i]??0,e),Ca(e)]}),z.jsxs("div",{className:"forecast-low",children:[Ra(t.temperature_2m_min[i]??0,e),Ca(e)]}),(t.precipitation_probability_max[i]??0)>10&&z.jsxs("div",{className:"forecast-rain",children:["💧",t.precipitation_probability_max[i],"%"]})]},i))})]})}function MC({hourly:t,unit:e,startIndex:n}){const i=Array.from({length:24},(r,s)=>({time:t.time[n+s],temp:t.temperature_2m[n+s],code:t.weather_code[n+s],precip:t.precipitation_probability[n+s]})).filter(r=>r.time);return i.length?z.jsxs("div",{style:{marginBottom:"16px"},children:[z.jsx("div",{className:"section-title",children:"Hourly Forecast"}),z.jsx("div",{className:"hourly-scroll",children:i.map((r,s)=>z.jsxs("div",{className:"hourly-card",children:[z.jsx("div",{className:"hourly-time",children:s===0?"Now":rE(new Date(r.time).getHours())}),z.jsx("div",{className:"hourly-icon",children:Wu(r.code??0).icon}),z.jsxs("div",{className:"hourly-temp",children:[Ra(r.temp??0,e),Ca(e)]}),(r.precip??0)>0&&z.jsxs("div",{style:{fontSize:"10px",color:"var(--accent-cyan)",marginTop:"2px"},children:[r.precip,"%"]})]},s))})]}):null}function EC({daily:t}){const e=Math.max(...t.precipitation_sum.slice(0,5),1);return z.jsxs("div",{className:"info-card",children:[z.jsx("div",{className:"info-title",children:"📊 Precipitation (mm)"}),t.time.slice(0,5).map((n,i)=>{var r;return z.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"6px"},children:[z.jsx("span",{style:{fontSize:"11px",color:"var(--text-secondary)",width:"32px"},children:v0(n,i).slice(0,3)}),z.jsx("div",{style:{flex:1,height:"6px",background:"var(--bg-glass)",borderRadius:"3px",overflow:"hidden"},children:z.jsx("div",{style:{width:`${t.precipitation_sum[i]/e*100}%`,height:"100%",background:"linear-gradient(90deg,var(--accent-blue),var(--accent-cyan))",borderRadius:"3px",minWidth:t.precipitation_sum[i]>0?"4px":"0",transition:"width 0.4s ease"}})}),z.jsxs("span",{style:{fontSize:"11px",width:"40px",textAlign:"right"},children:[(r=t.precipitation_sum[i])==null?void 0:r.toFixed(1)," mm"]})]},i)})]})}function TC(){const{unit:t,setUnit:e,darkMode:n,toggleDarkMode:i,favorites:r,addFavorite:s,removeFavorite:o,isFavorite:a,currentLocation:l,setCurrentLocation:u}=$M(),{data:f}=nE(),{data:d,isLoading:h,isError:p,error:y}=eE((l==null?void 0:l.lat)??null,(l==null?void 0:l.lon)??null);Ke.useEffect(()=>{document.documentElement.classList.toggle("light-mode",!n)},[n]),Ke.useEffect(()=>{!l&&f?u(f):!l&&!f&&u({name:"London",country:"United Kingdom",country_code:"GB",lat:51.5074,lon:-.1278})},[f,l,u]);const _=Ke.useMemo(()=>d?Wu(d.current.weather_code).scene:"sunny",[d]),m=Ke.useMemo(()=>{if(!(d!=null&&d.hourly))return 0;const g=new Date,x=d.hourly.time.findIndex(C=>new Date(C).getHours()===g.getHours()&&new Date(C).toDateString()===g.toDateString());return Math.max(0,x)},[d]);function c(g){u(g)}function v(){l&&(a(l)?o(l):s(l))}return z.jsxs(z.Fragment,{children:[z.jsx(_C,{scene:_}),z.jsxs("div",{className:"app",children:[z.jsxs("div",{className:"header",children:[z.jsx("div",{className:"logo",children:"⛅ WeatherLens"}),z.jsxs("div",{className:"header-right",children:[z.jsx("div",{className:"unit-toggle",children:["C","F","K"].map(g=>z.jsxs("button",{className:`unit-btn${t===g?" active":""}`,onClick:()=>e(g),children:["°",g]},g))}),z.jsx("button",{className:"btn-icon",onClick:i,title:"Toggle theme",children:n?"☀️":"🌙"}),l&&z.jsx("button",{className:"btn-icon",onClick:v,title:a(l)?"Remove favorite":"Add to favorites",children:a(l)?"★":"☆"})]})]}),z.jsx(yC,{onSelect:c,loading:h}),r.length>0&&z.jsx("div",{className:"favorites-row",children:r.map((g,x)=>z.jsxs("div",{className:"fav-chip",onClick:()=>c(g),children:[z.jsxs("span",{children:["📍 ",g.name,g.country?`, ${g.country_code}`:""]}),z.jsx("span",{className:"remove",onClick:C=>{C.stopPropagation(),o(g)},children:"×"})]},x))}),p&&z.jsx("div",{className:"error-card",children:z.jsxs("p",{style:{color:"var(--accent-red)",fontSize:"14px"},children:["⚠️ ",y instanceof Error?y.message:"Failed to fetch weather. Please try again."]})}),h&&!d&&z.jsxs("div",{className:"loading-card",children:[z.jsx("div",{className:"spinner"}),z.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"14px"},children:"Fetching weather data…"})]}),d&&l&&z.jsxs(z.Fragment,{children:[z.jsx(xC,{current:d.current,daily:d.daily,unit:t,locationName:l.name,country:l.country_code}),z.jsx(MC,{hourly:d.hourly,unit:t,startIndex:m}),z.jsx(SC,{daily:d.daily,unit:t}),z.jsxs("div",{className:"info-grid",children:[z.jsx(EC,{daily:d.daily}),z.jsxs("div",{className:"info-card",children:[z.jsx("div",{className:"info-title",children:"📈 Max UV This Week"}),d.daily.time.slice(0,5).map((g,x)=>{const C=d.daily.uv_index_max[x]??0;return z.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"6px"},children:[z.jsx("span",{style:{fontSize:"11px",color:"var(--text-secondary)",width:"32px"},children:new Date(g).toLocaleDateString("en",{weekday:"short"})}),z.jsx("div",{style:{flex:1,height:"6px",background:"var(--bg-glass)",borderRadius:"3px",overflow:"hidden"},children:z.jsx("div",{style:{width:`${C/12*100}%`,height:"100%",background:"linear-gradient(90deg,#22d3ee,#fbbf24,#f87171)",borderRadius:"3px",minWidth:"2px"}})}),z.jsx("span",{style:{fontSize:"11px",width:"24px",textAlign:"right"},children:C.toFixed(1)})]},x)})]})]}),z.jsxs("div",{style:{textAlign:"center",padding:"8px 0 24px",fontSize:"11px",color:"var(--text-secondary)"},children:["Data from Open-Meteo · Updated ",new Date().toLocaleTimeString("en",{hour:"2-digit",minute:"2-digit"})]})]}),!d&&!h&&!p&&z.jsxs("div",{className:"loading-card",children:[z.jsx("div",{className:"pulse",style:{fontSize:"48px",marginBottom:"12px"},children:"🌍"}),z.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"14px"},children:"Search for a city to see weather data"})]})]})]})}const wC=new tM({defaultOptions:{queries:{staleTime:5*60*1e3,refetchOnWindowFocus:!1}}});af.createRoot(document.getElementById("root")).render(z.jsx(Kg.StrictMode,{children:z.jsx(iM,{client:wC,children:z.jsx(TC,{})})}));
