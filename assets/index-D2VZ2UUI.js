(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(o){if(o.ep)return;o.ep=!0;const u=r(o);fetch(o.href,u)}})();function Ms(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function P_(i){if(Object.prototype.hasOwnProperty.call(i,"__esModule"))return i;var t=i.default;if(typeof t=="function"){var r=function a(){return this instanceof a?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(i).forEach(function(a){var o=Object.getOwnPropertyDescriptor(i,a);Object.defineProperty(r,a,o.get?o:{enumerable:!0,get:function(){return i[a]}})}),r}var sh={exports:{}},Uo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ev;function U_(){if(Ev)return Uo;Ev=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(a,o,u){var c=null;if(u!==void 0&&(c=""+u),o.key!==void 0&&(c=""+o.key),"key"in o){u={};for(var h in o)h!=="key"&&(u[h]=o[h])}else u=o;return o=u.ref,{$$typeof:i,type:a,key:c,ref:o!==void 0?o:null,props:u}}return Uo.Fragment=t,Uo.jsx=r,Uo.jsxs=r,Uo}var Tv;function N_(){return Tv||(Tv=1,sh.exports=U_()),sh.exports}var y=N_(),oh={exports:{}},je={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jv;function B_(){if(jv)return je;jv=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(k){return k===null||typeof k!="object"?null:(k=v&&k[v]||k["@@iterator"],typeof k=="function"?k:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,T={};function E(k,Q,oe){this.props=k,this.context=Q,this.refs=T,this.updater=oe||w}E.prototype.isReactComponent={},E.prototype.setState=function(k,Q){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,Q,"setState")},E.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function j(){}j.prototype=E.prototype;function D(k,Q,oe){this.props=k,this.context=Q,this.refs=T,this.updater=oe||w}var M=D.prototype=new j;M.constructor=D,S(M,E.prototype),M.isPureReactComponent=!0;var V=Array.isArray,P={H:null,A:null,T:null,S:null},R=Object.prototype.hasOwnProperty;function F(k,Q,oe,le,re,_e){return oe=_e.ref,{$$typeof:i,type:k,key:Q,ref:oe!==void 0?oe:null,props:_e}}function I(k,Q){return F(k.type,Q,void 0,void 0,void 0,k.props)}function G(k){return typeof k=="object"&&k!==null&&k.$$typeof===i}function te(k){var Q={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(oe){return Q[oe]})}var he=/\/+/g;function Ae(k,Q){return typeof k=="object"&&k!==null&&k.key!=null?te(""+k.key):Q.toString(36)}function Ne(){}function Fe(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(Ne,Ne):(k.status="pending",k.then(function(Q){k.status==="pending"&&(k.status="fulfilled",k.value=Q)},function(Q){k.status==="pending"&&(k.status="rejected",k.reason=Q)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function qe(k,Q,oe,le,re){var _e=typeof k;(_e==="undefined"||_e==="boolean")&&(k=null);var ye=!1;if(k===null)ye=!0;else switch(_e){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(k.$$typeof){case i:case t:ye=!0;break;case g:return ye=k._init,qe(ye(k._payload),Q,oe,le,re)}}if(ye)return re=re(k),ye=le===""?"."+Ae(k,0):le,V(re)?(oe="",ye!=null&&(oe=ye.replace(he,"$&/")+"/"),qe(re,Q,oe,"",function(Ie){return Ie})):re!=null&&(G(re)&&(re=I(re,oe+(re.key==null||k&&k.key===re.key?"":(""+re.key).replace(he,"$&/")+"/")+ye)),Q.push(re)),1;ye=0;var dt=le===""?".":le+":";if(V(k))for(var Oe=0;Oe<k.length;Oe++)le=k[Oe],_e=dt+Ae(le,Oe),ye+=qe(le,Q,oe,_e,re);else if(Oe=x(k),typeof Oe=="function")for(k=Oe.call(k),Oe=0;!(le=k.next()).done;)le=le.value,_e=dt+Ae(le,Oe++),ye+=qe(le,Q,oe,_e,re);else if(_e==="object"){if(typeof k.then=="function")return qe(Fe(k),Q,oe,le,re);throw Q=String(k),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return ye}function J(k,Q,oe){if(k==null)return k;var le=[],re=0;return qe(k,le,"","",function(_e){return Q.call(oe,_e,re++)}),le}function ae(k){if(k._status===-1){var Q=k._result;Q=Q(),Q.then(function(oe){(k._status===0||k._status===-1)&&(k._status=1,k._result=oe)},function(oe){(k._status===0||k._status===-1)&&(k._status=2,k._result=oe)}),k._status===-1&&(k._status=0,k._result=Q)}if(k._status===1)return k._result.default;throw k._result}var X=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)};function ne(){}return je.Children={map:J,forEach:function(k,Q,oe){J(k,function(){Q.apply(this,arguments)},oe)},count:function(k){var Q=0;return J(k,function(){Q++}),Q},toArray:function(k){return J(k,function(Q){return Q})||[]},only:function(k){if(!G(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},je.Component=E,je.Fragment=r,je.Profiler=o,je.PureComponent=D,je.StrictMode=a,je.Suspense=f,je.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,je.act=function(){throw Error("act(...) is not supported in production builds of React.")},je.cache=function(k){return function(){return k.apply(null,arguments)}},je.cloneElement=function(k,Q,oe){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var le=S({},k.props),re=k.key,_e=void 0;if(Q!=null)for(ye in Q.ref!==void 0&&(_e=void 0),Q.key!==void 0&&(re=""+Q.key),Q)!R.call(Q,ye)||ye==="key"||ye==="__self"||ye==="__source"||ye==="ref"&&Q.ref===void 0||(le[ye]=Q[ye]);var ye=arguments.length-2;if(ye===1)le.children=oe;else if(1<ye){for(var dt=Array(ye),Oe=0;Oe<ye;Oe++)dt[Oe]=arguments[Oe+2];le.children=dt}return F(k.type,re,void 0,void 0,_e,le)},je.createContext=function(k){return k={$$typeof:c,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:u,_context:k},k},je.createElement=function(k,Q,oe){var le,re={},_e=null;if(Q!=null)for(le in Q.key!==void 0&&(_e=""+Q.key),Q)R.call(Q,le)&&le!=="key"&&le!=="__self"&&le!=="__source"&&(re[le]=Q[le]);var ye=arguments.length-2;if(ye===1)re.children=oe;else if(1<ye){for(var dt=Array(ye),Oe=0;Oe<ye;Oe++)dt[Oe]=arguments[Oe+2];re.children=dt}if(k&&k.defaultProps)for(le in ye=k.defaultProps,ye)re[le]===void 0&&(re[le]=ye[le]);return F(k,_e,void 0,void 0,null,re)},je.createRef=function(){return{current:null}},je.forwardRef=function(k){return{$$typeof:h,render:k}},je.isValidElement=G,je.lazy=function(k){return{$$typeof:g,_payload:{_status:-1,_result:k},_init:ae}},je.memo=function(k,Q){return{$$typeof:p,type:k,compare:Q===void 0?null:Q}},je.startTransition=function(k){var Q=P.T,oe={};P.T=oe;try{var le=k(),re=P.S;re!==null&&re(oe,le),typeof le=="object"&&le!==null&&typeof le.then=="function"&&le.then(ne,X)}catch(_e){X(_e)}finally{P.T=Q}},je.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},je.use=function(k){return P.H.use(k)},je.useActionState=function(k,Q,oe){return P.H.useActionState(k,Q,oe)},je.useCallback=function(k,Q){return P.H.useCallback(k,Q)},je.useContext=function(k){return P.H.useContext(k)},je.useDebugValue=function(){},je.useDeferredValue=function(k,Q){return P.H.useDeferredValue(k,Q)},je.useEffect=function(k,Q){return P.H.useEffect(k,Q)},je.useId=function(){return P.H.useId()},je.useImperativeHandle=function(k,Q,oe){return P.H.useImperativeHandle(k,Q,oe)},je.useInsertionEffect=function(k,Q){return P.H.useInsertionEffect(k,Q)},je.useLayoutEffect=function(k,Q){return P.H.useLayoutEffect(k,Q)},je.useMemo=function(k,Q){return P.H.useMemo(k,Q)},je.useOptimistic=function(k,Q){return P.H.useOptimistic(k,Q)},je.useReducer=function(k,Q,oe){return P.H.useReducer(k,Q,oe)},je.useRef=function(k){return P.H.useRef(k)},je.useState=function(k){return P.H.useState(k)},je.useSyncExternalStore=function(k,Q,oe){return P.H.useSyncExternalStore(k,Q,oe)},je.useTransition=function(){return P.H.useTransition()},je.version="19.0.0",je}var Rv;function Wp(){return Rv||(Rv=1,oh.exports=B_()),oh.exports}var _=Wp();const Pi=Ms(_);var lh={exports:{}},No={},uh={exports:{}},ch={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cv;function V_(){return Cv||(Cv=1,function(i){function t(J,ae){var X=J.length;J.push(ae);e:for(;0<X;){var ne=X-1>>>1,k=J[ne];if(0<o(k,ae))J[ne]=ae,J[X]=k,X=ne;else break e}}function r(J){return J.length===0?null:J[0]}function a(J){if(J.length===0)return null;var ae=J[0],X=J.pop();if(X!==ae){J[0]=X;e:for(var ne=0,k=J.length,Q=k>>>1;ne<Q;){var oe=2*(ne+1)-1,le=J[oe],re=oe+1,_e=J[re];if(0>o(le,X))re<k&&0>o(_e,le)?(J[ne]=_e,J[re]=X,ne=re):(J[ne]=le,J[oe]=X,ne=oe);else if(re<k&&0>o(_e,X))J[ne]=_e,J[re]=X,ne=re;else break e}}return ae}function o(J,ae){var X=J.sortIndex-ae.sortIndex;return X!==0?X:J.id-ae.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var c=Date,h=c.now();i.unstable_now=function(){return c.now()-h}}var f=[],p=[],g=1,v=null,x=3,w=!1,S=!1,T=!1,E=typeof setTimeout=="function"?setTimeout:null,j=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function M(J){for(var ae=r(p);ae!==null;){if(ae.callback===null)a(p);else if(ae.startTime<=J)a(p),ae.sortIndex=ae.expirationTime,t(f,ae);else break;ae=r(p)}}function V(J){if(T=!1,M(J),!S)if(r(f)!==null)S=!0,Fe();else{var ae=r(p);ae!==null&&qe(V,ae.startTime-J)}}var P=!1,R=-1,F=5,I=-1;function G(){return!(i.unstable_now()-I<F)}function te(){if(P){var J=i.unstable_now();I=J;var ae=!0;try{e:{S=!1,T&&(T=!1,j(R),R=-1),w=!0;var X=x;try{t:{for(M(J),v=r(f);v!==null&&!(v.expirationTime>J&&G());){var ne=v.callback;if(typeof ne=="function"){v.callback=null,x=v.priorityLevel;var k=ne(v.expirationTime<=J);if(J=i.unstable_now(),typeof k=="function"){v.callback=k,M(J),ae=!0;break t}v===r(f)&&a(f),M(J)}else a(f);v=r(f)}if(v!==null)ae=!0;else{var Q=r(p);Q!==null&&qe(V,Q.startTime-J),ae=!1}}break e}finally{v=null,x=X,w=!1}ae=void 0}}finally{ae?he():P=!1}}}var he;if(typeof D=="function")he=function(){D(te)};else if(typeof MessageChannel<"u"){var Ae=new MessageChannel,Ne=Ae.port2;Ae.port1.onmessage=te,he=function(){Ne.postMessage(null)}}else he=function(){E(te,0)};function Fe(){P||(P=!0,he())}function qe(J,ae){R=E(function(){J(i.unstable_now())},ae)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(J){J.callback=null},i.unstable_continueExecution=function(){S||w||(S=!0,Fe())},i.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<J?Math.floor(1e3/J):5},i.unstable_getCurrentPriorityLevel=function(){return x},i.unstable_getFirstCallbackNode=function(){return r(f)},i.unstable_next=function(J){switch(x){case 1:case 2:case 3:var ae=3;break;default:ae=x}var X=x;x=ae;try{return J()}finally{x=X}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(J,ae){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var X=x;x=J;try{return ae()}finally{x=X}},i.unstable_scheduleCallback=function(J,ae,X){var ne=i.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ne+X:ne):X=ne,J){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=X+k,J={id:g++,callback:ae,priorityLevel:J,startTime:X,expirationTime:k,sortIndex:-1},X>ne?(J.sortIndex=X,t(p,J),r(f)===null&&J===r(p)&&(T?(j(R),R=-1):T=!0,qe(V,X-ne))):(J.sortIndex=k,t(f,J),S||w||(S=!0,Fe())),J},i.unstable_shouldYield=G,i.unstable_wrapCallback=function(J){var ae=x;return function(){var X=x;x=ae;try{return J.apply(this,arguments)}finally{x=X}}}}(ch)),ch}var kv;function $_(){return kv||(kv=1,uh.exports=V_()),uh.exports}var dh={exports:{}},Yt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dv;function H_(){if(Dv)return Yt;Dv=1;var i=Wp();function t(f){var p="https://react.dev/errors/"+f;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+f+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var a={d:{f:r,r:function(){throw Error(t(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(f,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:f,containerInfo:p,implementation:g}}var c=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(f,p){if(f==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Yt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Yt.createPortal=function(f,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(f,p,null,g)},Yt.flushSync=function(f){var p=c.T,g=a.p;try{if(c.T=null,a.p=2,f)return f()}finally{c.T=p,a.p=g,a.d.f()}},Yt.preconnect=function(f,p){typeof f=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(f,p))},Yt.prefetchDNS=function(f){typeof f=="string"&&a.d.D(f)},Yt.preinit=function(f,p){if(typeof f=="string"&&p&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,w=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(f,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:w}):g==="script"&&a.d.X(f,{crossOrigin:v,integrity:x,fetchPriority:w,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Yt.preinitModule=function(f,p){if(typeof f=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);a.d.M(f,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(f)},Yt.preload=function(f,p){if(typeof f=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin);a.d.L(f,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Yt.preloadModule=function(f,p){if(typeof f=="string")if(p){var g=h(p.as,p.crossOrigin);a.d.m(f,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(f)},Yt.requestFormReset=function(f){a.d.r(f)},Yt.unstable_batchedUpdates=function(f,p){return f(p)},Yt.useFormState=function(f,p,g){return c.H.useFormState(f,p,g)},Yt.useFormStatus=function(){return c.H.useHostTransitionStatus()},Yt.version="19.0.0",Yt}var Ov;function Gb(){if(Ov)return dh.exports;Ov=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),dh.exports=H_(),dh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mv;function q_(){if(Mv)return No;Mv=1;var i=$_(),t=Wp(),r=Gb();function a(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var u=Symbol.for("react.element"),c=Symbol.for("react.transitional.element"),h=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),x=Symbol.for("react.consumer"),w=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),E=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),M=Symbol.for("react.offscreen"),V=Symbol.for("react.memo_cache_sentinel"),P=Symbol.iterator;function R(e){return e===null||typeof e!="object"?null:(e=P&&e[P]||e["@@iterator"],typeof e=="function"?e:null)}var F=Symbol.for("react.client.reference");function I(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===F?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case f:return"Fragment";case h:return"Portal";case g:return"Profiler";case p:return"StrictMode";case T:return"Suspense";case E:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case w:return(e.displayName||"Context")+".Provider";case x:return(e._context.displayName||"Context")+".Consumer";case S:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case j:return n=e.displayName||null,n!==null?n:I(e.type)||"Memo";case D:n=e._payload,e=e._init;try{return I(e(n))}catch{}}return null}var G=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te=Object.assign,he,Ae;function Ne(e){if(he===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);he=n&&n[1]||"",Ae=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+he+e+Ae}var Fe=!1;function qe(e,n){if(!e||Fe)return"";Fe=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var W=function(){throw Error()};if(Object.defineProperty(W.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(W,[])}catch(Y){var H=Y}Reflect.construct(e,[],W)}else{try{W.call()}catch(Y){H=Y}e.call(W.prototype)}}else{try{throw Error()}catch(Y){H=Y}(W=e())&&typeof W.catch=="function"&&W.catch(function(){})}}catch(Y){if(Y&&H&&typeof Y.stack=="string")return[Y.stack,H.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),b=m[0],A=m[1];if(b&&A){var C=b.split(`
`),U=A.split(`
`);for(d=l=0;l<C.length&&!C[l].includes("DetermineComponentFrameRoot");)l++;for(;d<U.length&&!U[d].includes("DetermineComponentFrameRoot");)d++;if(l===C.length||d===U.length)for(l=C.length-1,d=U.length-1;1<=l&&0<=d&&C[l]!==U[d];)d--;for(;1<=l&&0<=d;l--,d--)if(C[l]!==U[d]){if(l!==1||d!==1)do if(l--,d--,0>d||C[l]!==U[d]){var K=`
`+C[l].replace(" at new "," at ");return e.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",e.displayName)),K}while(1<=l&&0<=d);break}}}finally{Fe=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?Ne(s):""}function J(e){switch(e.tag){case 26:case 27:case 5:return Ne(e.type);case 16:return Ne("Lazy");case 13:return Ne("Suspense");case 19:return Ne("SuspenseList");case 0:case 15:return e=qe(e.type,!1),e;case 11:return e=qe(e.type.render,!1),e;case 1:return e=qe(e.type,!0),e;default:return""}}function ae(e){try{var n="";do n+=J(e),e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function X(e){var n=e,s=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(s=n.return),e=n.return;while(e)}return n.tag===3?s:null}function ne(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function k(e){if(X(e)!==e)throw Error(a(188))}function Q(e){var n=e.alternate;if(!n){if(n=X(e),n===null)throw Error(a(188));return n!==e?null:e}for(var s=e,l=n;;){var d=s.return;if(d===null)break;var m=d.alternate;if(m===null){if(l=d.return,l!==null){s=l;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===s)return k(d),e;if(m===l)return k(d),n;m=m.sibling}throw Error(a(188))}if(s.return!==l.return)s=d,l=m;else{for(var b=!1,A=d.child;A;){if(A===s){b=!0,s=d,l=m;break}if(A===l){b=!0,l=d,s=m;break}A=A.sibling}if(!b){for(A=m.child;A;){if(A===s){b=!0,s=m,l=d;break}if(A===l){b=!0,l=m,s=d;break}A=A.sibling}if(!b)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:n}function oe(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=oe(e),n!==null)return n;e=e.sibling}return null}var le=Array.isArray,re=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_e={pending:!1,data:null,method:null,action:null},ye=[],dt=-1;function Oe(e){return{current:e}}function Ie(e){0>dt||(e.current=ye[dt],ye[dt]=null,dt--)}function Ee(e,n){dt++,ye[dt]=e.current,e.current=n}var ft=Oe(null),Nt=Oe(null),Ji=Oe(null),gi=Oe(null);function ya(e,n){switch(Ee(Ji,n),Ee(Nt,e),Ee(ft,null),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?ev(n):0;break;default:if(e=e===8?n.parentNode:n,n=e.tagName,e=e.namespaceURI)e=ev(e),n=tv(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Ie(ft),Ee(ft,n)}function qn(){Ie(ft),Ie(Nt),Ie(Ji)}function va(e){e.memoizedState!==null&&Ee(gi,e);var n=ft.current,s=tv(n,e.type);n!==s&&(Ee(Nt,e),Ee(ft,s))}function xa(e){Nt.current===e&&(Ie(ft),Ie(Nt)),gi.current===e&&(Ie(gi),Oo._currentValue=_e)}var Bs=Object.prototype.hasOwnProperty,Vs=i.unstable_scheduleCallback,$s=i.unstable_cancelCallback,gn=i.unstable_shouldYield,Cr=i.unstable_requestPaint,ai=i.unstable_now,Hs=i.unstable_getCurrentPriorityLevel,Ni=i.unstable_ImmediatePriority,yi=i.unstable_UserBlockingPriority,kr=i.unstable_NormalPriority,qs=i.unstable_LowPriority,El=i.unstable_IdlePriority,en=i.log,Tl=i.unstable_setDisableYieldValue,Gn=null,Ft=null;function ed(e){if(Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(Gn,e,void 0,(e.current.flags&128)===128)}catch{}}function Bi(e){if(typeof en=="function"&&Tl(e),Ft&&typeof Ft.setStrictMode=="function")try{Ft.setStrictMode(Gn,e)}catch{}}var Rt=Math.clz32?Math.clz32:td,jl=Math.log,Gs=Math.LN2;function td(e){return e>>>=0,e===0?32:31-(jl(e)/Gs|0)|0}var Dr=128,ba=4194304;function tn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function yn(e,n){var s=e.pendingLanes;if(s===0)return 0;var l=0,d=e.suspendedLanes,m=e.pingedLanes,b=e.warmLanes;e=e.finishedLanes!==0;var A=s&134217727;return A!==0?(s=A&~d,s!==0?l=tn(s):(m&=A,m!==0?l=tn(m):e||(b=A&~b,b!==0&&(l=tn(b))))):(A=s&~d,A!==0?l=tn(A):m!==0?l=tn(m):e||(b=s&~b,b!==0&&(l=tn(b)))),l===0?0:n!==0&&n!==l&&(n&d)===0&&(d=l&-l,b=n&-n,d>=b||d===32&&(b&4194176)!==0)?n:l}function nn(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function id(e,n){switch(e){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rl(){var e=Dr;return Dr<<=1,(Dr&4194176)===0&&(Dr=128),e}function z(){var e=ba;return ba<<=1,(ba&62914560)===0&&(ba=4194304),e}function B(e){for(var n=[],s=0;31>s;s++)n.push(e);return n}function q(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ee(e,n,s,l,d,m){var b=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var A=e.entanglements,C=e.expirationTimes,U=e.hiddenUpdates;for(s=b&~s;0<s;){var K=31-Rt(s),W=1<<K;A[K]=0,C[K]=-1;var H=U[K];if(H!==null)for(U[K]=null,K=0;K<H.length;K++){var Y=H[K];Y!==null&&(Y.lane&=-536870913)}s&=~W}l!==0&&se(e,l,0),m!==0&&d===0&&e.tag!==0&&(e.suspendedLanes|=m&~(b&~n))}function se(e,n,s){e.pendingLanes|=n,e.suspendedLanes&=~n;var l=31-Rt(n);e.entangledLanes|=n,e.entanglements[l]=e.entanglements[l]|1073741824|s&4194218}function me(e,n){var s=e.entangledLanes|=n;for(e=e.entanglements;s;){var l=31-Rt(s),d=1<<l;d&n|e[l]&n&&(e[l]|=n),s&=~d}}function we(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ue(){var e=re.p;return e!==0?e:(e=window.event,e===void 0?32:xv(e.type))}function de(e,n){var s=re.p;try{return re.p=e,n()}finally{re.p=s}}var ie=Math.random().toString(36).slice(2),fe="__reactFiber$"+ie,ve="__reactProps$"+ie,Ge="__reactContainer$"+ie,vt="__reactEvents$"+ie,nt="__reactListeners$"+ie,Qe="__reactHandles$"+ie,ht="__reactResources$"+ie,vi="__reactMarker$"+ie;function vn(e){delete e[fe],delete e[ve],delete e[vt],delete e[nt],delete e[Qe]}function Bt(e){var n=e[fe];if(n)return n;for(var s=e.parentNode;s;){if(n=s[Ge]||s[fe]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(e=rv(e);e!==null;){if(s=e[fe])return s;e=rv(e)}return n}e=s,s=e.parentNode}return null}function Vt(e){if(e=e[fe]||e[Ge]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function xn(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(a(33))}function xi(e){var n=e[ht];return n||(n=e[ht]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function We(e){e[vi]=!0}var Or=new Set,Mr={};function Be(e,n){st(e,n),st(e+"Capture",n)}function st(e,n){for(Mr[e]=n,e=0;e<n.length;e++)Or.add(n[e])}var ti=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zr=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ot={},bn={};function Cl(e){return Bs.call(bn,e)?!0:Bs.call(ot,e)?!1:zr.test(e)?bn[e]=!0:(ot[e]=!0,!1)}function wa(e,n,s){if(Cl(n))if(s===null)e.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+s)}}function kl(e,n,s){if(s===null)e.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+s)}}function wn(e,n,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(n,s,""+l)}}function bi(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function n0(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function D2(e){var n=n0(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),l=""+e[n];if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var d=s.get,m=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return d.call(this)},set:function(b){l=""+b,m.call(this,b)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(b){l=""+b},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Dl(e){e._valueTracker||(e._valueTracker=D2(e))}function r0(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var s=n.getValue(),l="";return e&&(l=n0(e)?e.checked?"true":"false":e.value),e=l,e!==s?(n.setValue(e),!0):!1}function Ol(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var O2=/[\n"\\]/g;function wi(e){return e.replace(O2,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function nd(e,n,s,l,d,m,b,A){e.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.type=b:e.removeAttribute("type"),n!=null?b==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+bi(n)):e.value!==""+bi(n)&&(e.value=""+bi(n)):b!=="submit"&&b!=="reset"||e.removeAttribute("value"),n!=null?rd(e,b,bi(n)):s!=null?rd(e,b,bi(s)):l!=null&&e.removeAttribute("value"),d==null&&m!=null&&(e.defaultChecked=!!m),d!=null&&(e.checked=d&&typeof d!="function"&&typeof d!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+bi(A):e.removeAttribute("name")}function a0(e,n,s,l,d,m,b,A){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),n!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||n!=null))return;s=s!=null?""+bi(s):"",n=n!=null?""+bi(n):s,A||n===e.value||(e.value=n),e.defaultValue=n}l=l??d,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=A?e.checked:!!l,e.defaultChecked=!!l,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(e.name=b)}function rd(e,n,s){n==="number"&&Ol(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function Sa(e,n,s,l){if(e=e.options,n){n={};for(var d=0;d<s.length;d++)n["$"+s[d]]=!0;for(s=0;s<e.length;s++)d=n.hasOwnProperty("$"+e[s].value),e[s].selected!==d&&(e[s].selected=d),d&&l&&(e[s].defaultSelected=!0)}else{for(s=""+bi(s),n=null,d=0;d<e.length;d++){if(e[d].value===s){e[d].selected=!0,l&&(e[d].defaultSelected=!0);return}n!==null||e[d].disabled||(n=e[d])}n!==null&&(n.selected=!0)}}function s0(e,n,s){if(n!=null&&(n=""+bi(n),n!==e.value&&(e.value=n),s==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=s!=null?""+bi(s):""}function o0(e,n,s,l){if(n==null){if(l!=null){if(s!=null)throw Error(a(92));if(le(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),n=s}s=bi(n),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l)}function Aa(e,n){if(n){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=n;return}}e.textContent=n}var M2=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function l0(e,n,s){var l=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":l?e.setProperty(n,s):typeof s!="number"||s===0||M2.has(n)?n==="float"?e.cssFloat=s:e[n]=(""+s).trim():e[n]=s+"px"}function u0(e,n,s){if(n!=null&&typeof n!="object")throw Error(a(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var d in n)l=n[d],n.hasOwnProperty(d)&&s[d]!==l&&l0(e,d,l)}else for(var m in n)n.hasOwnProperty(m)&&l0(e,m,n[m])}function ad(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var z2=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),L2=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ml(e){return L2.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var sd=null;function od(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _a=null,Ea=null;function c0(e){var n=Vt(e);if(n&&(e=n.stateNode)){var s=e[ve]||null;e:switch(e=n.stateNode,n.type){case"input":if(nd(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+wi(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var l=s[n];if(l!==e&&l.form===e.form){var d=l[ve]||null;if(!d)throw Error(a(90));nd(l,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(n=0;n<s.length;n++)l=s[n],l.form===e.form&&r0(l)}break e;case"textarea":s0(e,s.value,s.defaultValue);break e;case"select":n=s.value,n!=null&&Sa(e,!!s.multiple,n,!1)}}}var ld=!1;function d0(e,n,s){if(ld)return e(n,s);ld=!0;try{var l=e(n);return l}finally{if(ld=!1,(_a!==null||Ea!==null)&&(gu(),_a&&(n=_a,e=Ea,Ea=_a=null,c0(n),e)))for(n=0;n<e.length;n++)c0(e[n])}}function Fs(e,n){var s=e.stateNode;if(s===null)return null;var l=s[ve]||null;if(l===null)return null;s=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,n,typeof s));return s}var ud=!1;if(ti)try{var Is={};Object.defineProperty(Is,"passive",{get:function(){ud=!0}}),window.addEventListener("test",Is,Is),window.removeEventListener("test",Is,Is)}catch{ud=!1}var Fn=null,cd=null,zl=null;function f0(){if(zl)return zl;var e,n=cd,s=n.length,l,d="value"in Fn?Fn.value:Fn.textContent,m=d.length;for(e=0;e<s&&n[e]===d[e];e++);var b=s-e;for(l=1;l<=b&&n[s-l]===d[m-l];l++);return zl=d.slice(e,1<l?1-l:void 0)}function Ll(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Pl(){return!0}function h0(){return!1}function ii(e){function n(s,l,d,m,b){this._reactName=s,this._targetInst=d,this.type=l,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(s=e[A],this[A]=s?s(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Pl:h0,this.isPropagationStopped=h0,this}return te(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Pl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Pl)},persist:function(){},isPersistent:Pl}),n}var Lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ul=ii(Lr),Ys=te({},Lr,{view:0,detail:0}),P2=ii(Ys),dd,fd,Ks,Nl=te({},Ys,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ks&&(Ks&&e.type==="mousemove"?(dd=e.screenX-Ks.screenX,fd=e.screenY-Ks.screenY):fd=dd=0,Ks=e),dd)},movementY:function(e){return"movementY"in e?e.movementY:fd}}),p0=ii(Nl),U2=te({},Nl,{dataTransfer:0}),N2=ii(U2),B2=te({},Ys,{relatedTarget:0}),hd=ii(B2),V2=te({},Lr,{animationName:0,elapsedTime:0,pseudoElement:0}),$2=ii(V2),H2=te({},Lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),q2=ii(H2),G2=te({},Lr,{data:0}),m0=ii(G2),F2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},I2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Y2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function K2(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Y2[e])?!!n[e]:!1}function pd(){return K2}var X2=te({},Ys,{key:function(e){if(e.key){var n=F2[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ll(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?I2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pd,charCode:function(e){return e.type==="keypress"?Ll(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ll(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Q2=ii(X2),Z2=te({},Nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),g0=ii(Z2),W2=te({},Ys,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pd}),J2=ii(W2),eA=te({},Lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),tA=ii(eA),iA=te({},Nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),nA=ii(iA),rA=te({},Lr,{newState:0,oldState:0}),aA=ii(rA),sA=[9,13,27,32],md=ti&&"CompositionEvent"in window,Xs=null;ti&&"documentMode"in document&&(Xs=document.documentMode);var oA=ti&&"TextEvent"in window&&!Xs,y0=ti&&(!md||Xs&&8<Xs&&11>=Xs),v0=" ",x0=!1;function b0(e,n){switch(e){case"keyup":return sA.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function w0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ta=!1;function lA(e,n){switch(e){case"compositionend":return w0(n);case"keypress":return n.which!==32?null:(x0=!0,v0);case"textInput":return e=n.data,e===v0&&x0?null:e;default:return null}}function uA(e,n){if(Ta)return e==="compositionend"||!md&&b0(e,n)?(e=f0(),zl=cd=Fn=null,Ta=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return y0&&n.locale!=="ko"?null:n.data;default:return null}}var cA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function S0(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!cA[e.type]:n==="textarea"}function A0(e,n,s,l){_a?Ea?Ea.push(l):Ea=[l]:_a=l,n=wu(n,"onChange"),0<n.length&&(s=new Ul("onChange","change",null,s,l),e.push({event:s,listeners:n}))}var Qs=null,Zs=null;function dA(e){Xy(e,0)}function Bl(e){var n=xn(e);if(r0(n))return e}function _0(e,n){if(e==="change")return n}var E0=!1;if(ti){var gd;if(ti){var yd="oninput"in document;if(!yd){var T0=document.createElement("div");T0.setAttribute("oninput","return;"),yd=typeof T0.oninput=="function"}gd=yd}else gd=!1;E0=gd&&(!document.documentMode||9<document.documentMode)}function j0(){Qs&&(Qs.detachEvent("onpropertychange",R0),Zs=Qs=null)}function R0(e){if(e.propertyName==="value"&&Bl(Zs)){var n=[];A0(n,Zs,e,od(e)),d0(dA,n)}}function fA(e,n,s){e==="focusin"?(j0(),Qs=n,Zs=s,Qs.attachEvent("onpropertychange",R0)):e==="focusout"&&j0()}function hA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Bl(Zs)}function pA(e,n){if(e==="click")return Bl(n)}function mA(e,n){if(e==="input"||e==="change")return Bl(n)}function gA(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var si=typeof Object.is=="function"?Object.is:gA;function Ws(e,n){if(si(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var s=Object.keys(e),l=Object.keys(n);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var d=s[l];if(!Bs.call(n,d)||!si(e[d],n[d]))return!1}return!0}function C0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function k0(e,n){var s=C0(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=n&&l>=n)return{node:s,offset:n-e};e=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=C0(s)}}function D0(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?D0(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function O0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Ol(e.document);n instanceof e.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)e=n.contentWindow;else break;n=Ol(e.document)}return n}function vd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function yA(e,n){var s=O0(n);n=e.focusedElem;var l=e.selectionRange;if(s!==n&&n&&n.ownerDocument&&D0(n.ownerDocument.documentElement,n)){if(l!==null&&vd(n)){if(e=l.start,s=l.end,s===void 0&&(s=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(s,n.value.length);else if(s=(e=n.ownerDocument||document)&&e.defaultView||window,s.getSelection){s=s.getSelection();var d=n.textContent.length,m=Math.min(l.start,d);l=l.end===void 0?m:Math.min(l.end,d),!s.extend&&m>l&&(d=l,l=m,m=d),d=k0(n,m);var b=k0(n,l);d&&b&&(s.rangeCount!==1||s.anchorNode!==d.node||s.anchorOffset!==d.offset||s.focusNode!==b.node||s.focusOffset!==b.offset)&&(e=e.createRange(),e.setStart(d.node,d.offset),s.removeAllRanges(),m>l?(s.addRange(e),s.extend(b.node,b.offset)):(e.setEnd(b.node,b.offset),s.addRange(e)))}}for(e=[],s=n;s=s.parentNode;)s.nodeType===1&&e.push({element:s,left:s.scrollLeft,top:s.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)s=e[n],s.element.scrollLeft=s.left,s.element.scrollTop=s.top}}var vA=ti&&"documentMode"in document&&11>=document.documentMode,ja=null,xd=null,Js=null,bd=!1;function M0(e,n,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;bd||ja==null||ja!==Ol(l)||(l=ja,"selectionStart"in l&&vd(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Js&&Ws(Js,l)||(Js=l,l=wu(xd,"onSelect"),0<l.length&&(n=new Ul("onSelect","select",null,n,s),e.push({event:n,listeners:l}),n.target=ja)))}function Pr(e,n){var s={};return s[e.toLowerCase()]=n.toLowerCase(),s["Webkit"+e]="webkit"+n,s["Moz"+e]="moz"+n,s}var Ra={animationend:Pr("Animation","AnimationEnd"),animationiteration:Pr("Animation","AnimationIteration"),animationstart:Pr("Animation","AnimationStart"),transitionrun:Pr("Transition","TransitionRun"),transitionstart:Pr("Transition","TransitionStart"),transitioncancel:Pr("Transition","TransitionCancel"),transitionend:Pr("Transition","TransitionEnd")},wd={},z0={};ti&&(z0=document.createElement("div").style,"AnimationEvent"in window||(delete Ra.animationend.animation,delete Ra.animationiteration.animation,delete Ra.animationstart.animation),"TransitionEvent"in window||delete Ra.transitionend.transition);function Ur(e){if(wd[e])return wd[e];if(!Ra[e])return e;var n=Ra[e],s;for(s in n)if(n.hasOwnProperty(s)&&s in z0)return wd[e]=n[s];return e}var L0=Ur("animationend"),P0=Ur("animationiteration"),U0=Ur("animationstart"),xA=Ur("transitionrun"),bA=Ur("transitionstart"),wA=Ur("transitioncancel"),N0=Ur("transitionend"),B0=new Map,V0="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Vi(e,n){B0.set(e,n),Be(n,[e])}var Si=[],Ca=0,Sd=0;function Vl(){for(var e=Ca,n=Sd=Ca=0;n<e;){var s=Si[n];Si[n++]=null;var l=Si[n];Si[n++]=null;var d=Si[n];Si[n++]=null;var m=Si[n];if(Si[n++]=null,l!==null&&d!==null){var b=l.pending;b===null?d.next=d:(d.next=b.next,b.next=d),l.pending=d}m!==0&&$0(s,d,m)}}function $l(e,n,s,l){Si[Ca++]=e,Si[Ca++]=n,Si[Ca++]=s,Si[Ca++]=l,Sd|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Ad(e,n,s,l){return $l(e,n,s,l),Hl(e)}function In(e,n){return $l(e,null,null,n),Hl(e)}function $0(e,n,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var d=!1,m=e.return;m!==null;)m.childLanes|=s,l=m.alternate,l!==null&&(l.childLanes|=s),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(d=!0)),e=m,m=m.return;d&&n!==null&&e.tag===3&&(m=e.stateNode,d=31-Rt(s),m=m.hiddenUpdates,e=m[d],e===null?m[d]=[n]:e.push(n),n.lane=s|536870912)}function Hl(e){if(50<Eo)throw Eo=0,kf=null,Error(a(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ka={},H0=new WeakMap;function Ai(e,n){if(typeof e=="object"&&e!==null){var s=H0.get(e);return s!==void 0?s:(n={value:e,source:n,stack:ae(n)},H0.set(e,n),n)}return{value:e,source:n,stack:ae(n)}}var Da=[],Oa=0,ql=null,Gl=0,_i=[],Ei=0,Nr=null,Sn=1,An="";function Br(e,n){Da[Oa++]=Gl,Da[Oa++]=ql,ql=e,Gl=n}function q0(e,n,s){_i[Ei++]=Sn,_i[Ei++]=An,_i[Ei++]=Nr,Nr=e;var l=Sn;e=An;var d=32-Rt(l)-1;l&=~(1<<d),s+=1;var m=32-Rt(n)+d;if(30<m){var b=d-d%5;m=(l&(1<<b)-1).toString(32),l>>=b,d-=b,Sn=1<<32-Rt(n)+d|s<<d|l,An=m+e}else Sn=1<<m|s<<d|l,An=e}function _d(e){e.return!==null&&(Br(e,1),q0(e,1,0))}function Ed(e){for(;e===ql;)ql=Da[--Oa],Da[Oa]=null,Gl=Da[--Oa],Da[Oa]=null;for(;e===Nr;)Nr=_i[--Ei],_i[Ei]=null,An=_i[--Ei],_i[Ei]=null,Sn=_i[--Ei],_i[Ei]=null}var Zt=null,$t=null,$e=!1,$i=null,rn=!1,Td=Error(a(519));function Vr(e){var n=Error(a(418,""));throw io(Ai(n,e)),Td}function G0(e){var n=e.stateNode,s=e.type,l=e.memoizedProps;switch(n[fe]=e,n[ve]=l,s){case"dialog":Pe("cancel",n),Pe("close",n);break;case"iframe":case"object":case"embed":Pe("load",n);break;case"video":case"audio":for(s=0;s<jo.length;s++)Pe(jo[s],n);break;case"source":Pe("error",n);break;case"img":case"image":case"link":Pe("error",n),Pe("load",n);break;case"details":Pe("toggle",n);break;case"input":Pe("invalid",n),a0(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Dl(n);break;case"select":Pe("invalid",n);break;case"textarea":Pe("invalid",n),o0(n,l.value,l.defaultValue,l.children),Dl(n)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||l.suppressHydrationWarning===!0||Jy(n.textContent,s)?(l.popover!=null&&(Pe("beforetoggle",n),Pe("toggle",n)),l.onScroll!=null&&Pe("scroll",n),l.onScrollEnd!=null&&Pe("scrollend",n),l.onClick!=null&&(n.onclick=Su),n=!0):n=!1,n||Vr(e)}function F0(e){for(Zt=e.return;Zt;)switch(Zt.tag){case 3:case 27:rn=!0;return;case 5:case 13:rn=!1;return;default:Zt=Zt.return}}function eo(e){if(e!==Zt)return!1;if(!$e)return F0(e),$e=!0,!1;var n=!1,s;if((s=e.tag!==3&&e.tag!==27)&&((s=e.tag===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||Yf(e.type,e.memoizedProps)),s=!s),s&&(n=!0),n&&$t&&Vr(e),F0(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(n===0){$t=qi(e.nextSibling);break e}n--}else s!=="$"&&s!=="$!"&&s!=="$?"||n++;e=e.nextSibling}$t=null}}else $t=Zt?qi(e.stateNode.nextSibling):null;return!0}function to(){$t=Zt=null,$e=!1}function io(e){$i===null?$i=[e]:$i.push(e)}var no=Error(a(460)),I0=Error(a(474)),jd={then:function(){}};function Y0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Fl(){}function K0(e,n,s){switch(s=e[s],s===void 0?e.push(n):s!==n&&(n.then(Fl,Fl),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===no?Error(a(483)):e;default:if(typeof n.status=="string")n.then(Fl,Fl);else{if(e=Je,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=n,e.status="pending",e.then(function(l){if(n.status==="pending"){var d=n;d.status="fulfilled",d.value=l}},function(l){if(n.status==="pending"){var d=n;d.status="rejected",d.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===no?Error(a(483)):e}throw ro=n,no}}var ro=null;function X0(){if(ro===null)throw Error(a(459));var e=ro;return ro=null,e}var Ma=null,ao=0;function Il(e){var n=ao;return ao+=1,Ma===null&&(Ma=[]),K0(Ma,e,n)}function so(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Yl(e,n){throw n.$$typeof===u?Error(a(525)):(e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Q0(e){var n=e._init;return n(e._payload)}function Z0(e){function n(N,L){if(e){var $=N.deletions;$===null?(N.deletions=[L],N.flags|=16):$.push(L)}}function s(N,L){if(!e)return null;for(;L!==null;)n(N,L),L=L.sibling;return null}function l(N){for(var L=new Map;N!==null;)N.key!==null?L.set(N.key,N):L.set(N.index,N),N=N.sibling;return L}function d(N,L){return N=rr(N,L),N.index=0,N.sibling=null,N}function m(N,L,$){return N.index=$,e?($=N.alternate,$!==null?($=$.index,$<L?(N.flags|=33554434,L):$):(N.flags|=33554434,L)):(N.flags|=1048576,L)}function b(N){return e&&N.alternate===null&&(N.flags|=33554434),N}function A(N,L,$,Z){return L===null||L.tag!==6?(L=Sf($,N.mode,Z),L.return=N,L):(L=d(L,$),L.return=N,L)}function C(N,L,$,Z){var ce=$.type;return ce===f?K(N,L,$.props.children,Z,$.key):L!==null&&(L.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===D&&Q0(ce)===L.type)?(L=d(L,$.props),so(L,$),L.return=N,L):(L=du($.type,$.key,$.props,null,N.mode,Z),so(L,$),L.return=N,L)}function U(N,L,$,Z){return L===null||L.tag!==4||L.stateNode.containerInfo!==$.containerInfo||L.stateNode.implementation!==$.implementation?(L=Af($,N.mode,Z),L.return=N,L):(L=d(L,$.children||[]),L.return=N,L)}function K(N,L,$,Z,ce){return L===null||L.tag!==7?(L=Qr($,N.mode,Z,ce),L.return=N,L):(L=d(L,$),L.return=N,L)}function W(N,L,$){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return L=Sf(""+L,N.mode,$),L.return=N,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case c:return $=du(L.type,L.key,L.props,null,N.mode,$),so($,L),$.return=N,$;case h:return L=Af(L,N.mode,$),L.return=N,L;case D:var Z=L._init;return L=Z(L._payload),W(N,L,$)}if(le(L)||R(L))return L=Qr(L,N.mode,$,null),L.return=N,L;if(typeof L.then=="function")return W(N,Il(L),$);if(L.$$typeof===w)return W(N,lu(N,L),$);Yl(N,L)}return null}function H(N,L,$,Z){var ce=L!==null?L.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return ce!==null?null:A(N,L,""+$,Z);if(typeof $=="object"&&$!==null){switch($.$$typeof){case c:return $.key===ce?C(N,L,$,Z):null;case h:return $.key===ce?U(N,L,$,Z):null;case D:return ce=$._init,$=ce($._payload),H(N,L,$,Z)}if(le($)||R($))return ce!==null?null:K(N,L,$,Z,null);if(typeof $.then=="function")return H(N,L,Il($),Z);if($.$$typeof===w)return H(N,L,lu(N,$),Z);Yl(N,$)}return null}function Y(N,L,$,Z,ce){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return N=N.get($)||null,A(L,N,""+Z,ce);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case c:return N=N.get(Z.key===null?$:Z.key)||null,C(L,N,Z,ce);case h:return N=N.get(Z.key===null?$:Z.key)||null,U(L,N,Z,ce);case D:var Me=Z._init;return Z=Me(Z._payload),Y(N,L,$,Z,ce)}if(le(Z)||R(Z))return N=N.get($)||null,K(L,N,Z,ce,null);if(typeof Z.then=="function")return Y(N,L,$,Il(Z),ce);if(Z.$$typeof===w)return Y(N,L,$,lu(L,Z),ce);Yl(L,Z)}return null}function pe(N,L,$,Z){for(var ce=null,Me=null,ge=L,xe=L=0,Dt=null;ge!==null&&xe<$.length;xe++){ge.index>xe?(Dt=ge,ge=null):Dt=ge.sibling;var He=H(N,ge,$[xe],Z);if(He===null){ge===null&&(ge=Dt);break}e&&ge&&He.alternate===null&&n(N,ge),L=m(He,L,xe),Me===null?ce=He:Me.sibling=He,Me=He,ge=Dt}if(xe===$.length)return s(N,ge),$e&&Br(N,xe),ce;if(ge===null){for(;xe<$.length;xe++)ge=W(N,$[xe],Z),ge!==null&&(L=m(ge,L,xe),Me===null?ce=ge:Me.sibling=ge,Me=ge);return $e&&Br(N,xe),ce}for(ge=l(ge);xe<$.length;xe++)Dt=Y(ge,N,xe,$[xe],Z),Dt!==null&&(e&&Dt.alternate!==null&&ge.delete(Dt.key===null?xe:Dt.key),L=m(Dt,L,xe),Me===null?ce=Dt:Me.sibling=Dt,Me=Dt);return e&&ge.forEach(function(dr){return n(N,dr)}),$e&&Br(N,xe),ce}function Te(N,L,$,Z){if($==null)throw Error(a(151));for(var ce=null,Me=null,ge=L,xe=L=0,Dt=null,He=$.next();ge!==null&&!He.done;xe++,He=$.next()){ge.index>xe?(Dt=ge,ge=null):Dt=ge.sibling;var dr=H(N,ge,He.value,Z);if(dr===null){ge===null&&(ge=Dt);break}e&&ge&&dr.alternate===null&&n(N,ge),L=m(dr,L,xe),Me===null?ce=dr:Me.sibling=dr,Me=dr,ge=Dt}if(He.done)return s(N,ge),$e&&Br(N,xe),ce;if(ge===null){for(;!He.done;xe++,He=$.next())He=W(N,He.value,Z),He!==null&&(L=m(He,L,xe),Me===null?ce=He:Me.sibling=He,Me=He);return $e&&Br(N,xe),ce}for(ge=l(ge);!He.done;xe++,He=$.next())He=Y(ge,N,xe,He.value,Z),He!==null&&(e&&He.alternate!==null&&ge.delete(He.key===null?xe:He.key),L=m(He,L,xe),Me===null?ce=He:Me.sibling=He,Me=He);return e&&ge.forEach(function(L_){return n(N,L_)}),$e&&Br(N,xe),ce}function gt(N,L,$,Z){if(typeof $=="object"&&$!==null&&$.type===f&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case c:e:{for(var ce=$.key;L!==null;){if(L.key===ce){if(ce=$.type,ce===f){if(L.tag===7){s(N,L.sibling),Z=d(L,$.props.children),Z.return=N,N=Z;break e}}else if(L.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===D&&Q0(ce)===L.type){s(N,L.sibling),Z=d(L,$.props),so(Z,$),Z.return=N,N=Z;break e}s(N,L);break}else n(N,L);L=L.sibling}$.type===f?(Z=Qr($.props.children,N.mode,Z,$.key),Z.return=N,N=Z):(Z=du($.type,$.key,$.props,null,N.mode,Z),so(Z,$),Z.return=N,N=Z)}return b(N);case h:e:{for(ce=$.key;L!==null;){if(L.key===ce)if(L.tag===4&&L.stateNode.containerInfo===$.containerInfo&&L.stateNode.implementation===$.implementation){s(N,L.sibling),Z=d(L,$.children||[]),Z.return=N,N=Z;break e}else{s(N,L);break}else n(N,L);L=L.sibling}Z=Af($,N.mode,Z),Z.return=N,N=Z}return b(N);case D:return ce=$._init,$=ce($._payload),gt(N,L,$,Z)}if(le($))return pe(N,L,$,Z);if(R($)){if(ce=R($),typeof ce!="function")throw Error(a(150));return $=ce.call($),Te(N,L,$,Z)}if(typeof $.then=="function")return gt(N,L,Il($),Z);if($.$$typeof===w)return gt(N,L,lu(N,$),Z);Yl(N,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,L!==null&&L.tag===6?(s(N,L.sibling),Z=d(L,$),Z.return=N,N=Z):(s(N,L),Z=Sf($,N.mode,Z),Z.return=N,N=Z),b(N)):s(N,L)}return function(N,L,$,Z){try{ao=0;var ce=gt(N,L,$,Z);return Ma=null,ce}catch(ge){if(ge===no)throw ge;var Me=Ci(29,ge,null,N.mode);return Me.lanes=Z,Me.return=N,Me}finally{}}}var $r=Z0(!0),W0=Z0(!1),za=Oe(null),Kl=Oe(0);function J0(e,n){e=zn,Ee(Kl,e),Ee(za,n),zn=e|n.baseLanes}function Rd(){Ee(Kl,zn),Ee(za,za.current)}function Cd(){zn=Kl.current,Ie(za),Ie(Kl)}var Ti=Oe(null),an=null;function Yn(e){var n=e.alternate;Ee(Tt,Tt.current&1),Ee(Ti,e),an===null&&(n===null||za.current!==null||n.memoizedState!==null)&&(an=e)}function eg(e){if(e.tag===22){if(Ee(Tt,Tt.current),Ee(Ti,e),an===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(an=e)}}else Kn()}function Kn(){Ee(Tt,Tt.current),Ee(Ti,Ti.current)}function _n(e){Ie(Ti),an===e&&(an=null),Ie(Tt)}var Tt=Oe(0);function Xl(e){for(var n=e;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var SA=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){n.aborted=!0,e.forEach(function(s){return s()})}},AA=i.unstable_scheduleCallback,_A=i.unstable_NormalPriority,jt={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function kd(){return{controller:new SA,data:new Map,refCount:0}}function oo(e){e.refCount--,e.refCount===0&&AA(_A,function(){e.controller.abort()})}var lo=null,Dd=0,La=0,Pa=null;function EA(e,n){if(lo===null){var s=lo=[];Dd=0,La=Nf(),Pa={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Dd++,n.then(tg,tg),n}function tg(){if(--Dd===0&&lo!==null){Pa!==null&&(Pa.status="fulfilled");var e=lo;lo=null,La=0,Pa=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function TA(e,n){var s=[],l={status:"pending",value:null,reason:null,then:function(d){s.push(d)}};return e.then(function(){l.status="fulfilled",l.value=n;for(var d=0;d<s.length;d++)(0,s[d])(n)},function(d){for(l.status="rejected",l.reason=d,d=0;d<s.length;d++)(0,s[d])(void 0)}),l}var ig=G.S;G.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&EA(e,n),ig!==null&&ig(e,n)};var Hr=Oe(null);function Od(){var e=Hr.current;return e!==null?e:Je.pooledCache}function Ql(e,n){n===null?Ee(Hr,Hr.current):Ee(Hr,n.pool)}function ng(){var e=Od();return e===null?null:{parent:jt._currentValue,pool:e}}var Xn=0,De=null,Ke=null,wt=null,Zl=!1,Ua=!1,qr=!1,Wl=0,uo=0,Na=null,jA=0;function xt(){throw Error(a(321))}function Md(e,n){if(n===null)return!1;for(var s=0;s<n.length&&s<e.length;s++)if(!si(e[s],n[s]))return!1;return!0}function zd(e,n,s,l,d,m){return Xn=m,De=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,G.H=e===null||e.memoizedState===null?Gr:Qn,qr=!1,m=s(l,d),qr=!1,Ua&&(m=ag(n,s,l,d)),rg(e),m}function rg(e){G.H=sn;var n=Ke!==null&&Ke.next!==null;if(Xn=0,wt=Ke=De=null,Zl=!1,uo=0,Na=null,n)throw Error(a(300));e===null||Ct||(e=e.dependencies,e!==null&&ou(e)&&(Ct=!0))}function ag(e,n,s,l){De=e;var d=0;do{if(Ua&&(Na=null),uo=0,Ua=!1,25<=d)throw Error(a(301));if(d+=1,wt=Ke=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}G.H=Fr,m=n(s,l)}while(Ua);return m}function RA(){var e=G.H,n=e.useState()[0];return n=typeof n.then=="function"?co(n):n,e=e.useState()[0],(Ke!==null?Ke.memoizedState:null)!==e&&(De.flags|=1024),n}function Ld(){var e=Wl!==0;return Wl=0,e}function Pd(e,n,s){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s}function Ud(e){if(Zl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Zl=!1}Xn=0,wt=Ke=De=null,Ua=!1,uo=Wl=0,Na=null}function ni(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?De.memoizedState=wt=e:wt=wt.next=e,wt}function St(){if(Ke===null){var e=De.alternate;e=e!==null?e.memoizedState:null}else e=Ke.next;var n=wt===null?De.memoizedState:wt.next;if(n!==null)wt=n,Ke=e;else{if(e===null)throw De.alternate===null?Error(a(467)):Error(a(310));Ke=e,e={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},wt===null?De.memoizedState=wt=e:wt=wt.next=e}return wt}var Jl;Jl=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function co(e){var n=uo;return uo+=1,Na===null&&(Na=[]),e=K0(Na,e,n),n=De,(wt===null?n.memoizedState:wt.next)===null&&(n=n.alternate,G.H=n===null||n.memoizedState===null?Gr:Qn),e}function eu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return co(e);if(e.$$typeof===w)return It(e)}throw Error(a(438,String(e)))}function Nd(e){var n=null,s=De.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var l=De.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(d){return d.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=Jl(),De.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(e),l=0;l<e;l++)s[l]=V;return n.index++,s}function En(e,n){return typeof n=="function"?n(e):n}function tu(e){var n=St();return Bd(n,Ke,e)}function Bd(e,n,s){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var d=e.baseQueue,m=l.pending;if(m!==null){if(d!==null){var b=d.next;d.next=m.next,m.next=b}n.baseQueue=d=m,l.pending=null}if(m=e.baseState,d===null)e.memoizedState=m;else{n=d.next;var A=b=null,C=null,U=n,K=!1;do{var W=U.lane&-536870913;if(W!==U.lane?(Ve&W)===W:(Xn&W)===W){var H=U.revertLane;if(H===0)C!==null&&(C=C.next={lane:0,revertLane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),W===La&&(K=!0);else if((Xn&H)===H){U=U.next,H===La&&(K=!0);continue}else W={lane:0,revertLane:U.revertLane,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},C===null?(A=C=W,b=m):C=C.next=W,De.lanes|=H,ar|=H;W=U.action,qr&&s(m,W),m=U.hasEagerState?U.eagerState:s(m,W)}else H={lane:W,revertLane:U.revertLane,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},C===null?(A=C=H,b=m):C=C.next=H,De.lanes|=W,ar|=W;U=U.next}while(U!==null&&U!==n);if(C===null?b=m:C.next=A,!si(m,e.memoizedState)&&(Ct=!0,K&&(s=Pa,s!==null)))throw s;e.memoizedState=m,e.baseState=b,e.baseQueue=C,l.lastRenderedState=m}return d===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Vd(e){var n=St(),s=n.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var l=s.dispatch,d=s.pending,m=n.memoizedState;if(d!==null){s.pending=null;var b=d=d.next;do m=e(m,b.action),b=b.next;while(b!==d);si(m,n.memoizedState)||(Ct=!0),n.memoizedState=m,n.baseQueue===null&&(n.baseState=m),s.lastRenderedState=m}return[m,l]}function sg(e,n,s){var l=De,d=St(),m=$e;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=n();var b=!si((Ke||d).memoizedState,s);if(b&&(d.memoizedState=s,Ct=!0),d=d.queue,qd(ug.bind(null,l,d,e),[e]),d.getSnapshot!==n||b||wt!==null&&wt.memoizedState.tag&1){if(l.flags|=2048,Ba(9,lg.bind(null,l,d,s,n),{destroy:void 0},null),Je===null)throw Error(a(349));m||(Xn&60)!==0||og(l,n,s)}return s}function og(e,n,s){e.flags|=16384,e={getSnapshot:n,value:s},n=De.updateQueue,n===null?(n=Jl(),De.updateQueue=n,n.stores=[e]):(s=n.stores,s===null?n.stores=[e]:s.push(e))}function lg(e,n,s,l){n.value=s,n.getSnapshot=l,cg(n)&&dg(e)}function ug(e,n,s){return s(function(){cg(n)&&dg(e)})}function cg(e){var n=e.getSnapshot;e=e.value;try{var s=n();return!si(e,s)}catch{return!0}}function dg(e){var n=In(e,2);n!==null&&Wt(n,e,2)}function $d(e){var n=ni();if(typeof e=="function"){var s=e;if(e=s(),qr){Bi(!0);try{s()}finally{Bi(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:En,lastRenderedState:e},n}function fg(e,n,s,l){return e.baseState=s,Bd(e,Ke,typeof l=="function"?l:En)}function CA(e,n,s,l,d){if(ru(e))throw Error(a(485));if(e=n.action,e!==null){var m={payload:d,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){m.listeners.push(b)}};G.T!==null?s(!0):m.isTransition=!1,l(m),s=n.pending,s===null?(m.next=n.pending=m,hg(n,m)):(m.next=s.next,n.pending=s.next=m)}}function hg(e,n){var s=n.action,l=n.payload,d=e.state;if(n.isTransition){var m=G.T,b={};G.T=b;try{var A=s(d,l),C=G.S;C!==null&&C(b,A),pg(e,n,A)}catch(U){Hd(e,n,U)}finally{G.T=m}}else try{m=s(d,l),pg(e,n,m)}catch(U){Hd(e,n,U)}}function pg(e,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){mg(e,n,l)},function(l){return Hd(e,n,l)}):mg(e,n,s)}function mg(e,n,s){n.status="fulfilled",n.value=s,gg(n),e.state=s,n=e.pending,n!==null&&(s=n.next,s===n?e.pending=null:(s=s.next,n.next=s,hg(e,s)))}function Hd(e,n,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=s,gg(n),n=n.next;while(n!==l)}e.action=null}function gg(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function yg(e,n){return n}function vg(e,n){if($e){var s=Je.formState;if(s!==null){e:{var l=De;if($e){if($t){t:{for(var d=$t,m=rn;d.nodeType!==8;){if(!m){d=null;break t}if(d=qi(d.nextSibling),d===null){d=null;break t}}m=d.data,d=m==="F!"||m==="F"?d:null}if(d){$t=qi(d.nextSibling),l=d.data==="F!";break e}}Vr(l)}l=!1}l&&(n=s[0])}}return s=ni(),s.memoizedState=s.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yg,lastRenderedState:n},s.queue=l,s=Pg.bind(null,De,l),l.dispatch=s,l=$d(!1),m=Kd.bind(null,De,!1,l.queue),l=ni(),d={state:n,dispatch:null,action:e,pending:null},l.queue=d,s=CA.bind(null,De,d,m,s),d.dispatch=s,l.memoizedState=e,[n,s,!1]}function xg(e){var n=St();return bg(n,Ke,e)}function bg(e,n,s){n=Bd(e,n,yg)[0],e=tu(En)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?co(n):n;var l=St(),d=l.queue,m=d.dispatch;return s!==l.memoizedState&&(De.flags|=2048,Ba(9,kA.bind(null,d,s),{destroy:void 0},null)),[n,m,e]}function kA(e,n){e.action=n}function wg(e){var n=St(),s=Ke;if(s!==null)return bg(n,s,e);St(),n=n.memoizedState,s=St();var l=s.queue.dispatch;return s.memoizedState=e,[n,l,!1]}function Ba(e,n,s,l){return e={tag:e,create:n,inst:s,deps:l,next:null},n=De.updateQueue,n===null&&(n=Jl(),De.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,n.lastEffect=e),e}function Sg(){return St().memoizedState}function iu(e,n,s,l){var d=ni();De.flags|=e,d.memoizedState=Ba(1|n,s,{destroy:void 0},l===void 0?null:l)}function nu(e,n,s,l){var d=St();l=l===void 0?null:l;var m=d.memoizedState.inst;Ke!==null&&l!==null&&Md(l,Ke.memoizedState.deps)?d.memoizedState=Ba(n,s,m,l):(De.flags|=e,d.memoizedState=Ba(1|n,s,m,l))}function Ag(e,n){iu(8390656,8,e,n)}function qd(e,n){nu(2048,8,e,n)}function _g(e,n){return nu(4,2,e,n)}function Eg(e,n){return nu(4,4,e,n)}function Tg(e,n){if(typeof n=="function"){e=e();var s=n(e);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function jg(e,n,s){s=s!=null?s.concat([e]):null,nu(4,4,Tg.bind(null,n,e),s)}function Gd(){}function Rg(e,n){var s=St();n=n===void 0?null:n;var l=s.memoizedState;return n!==null&&Md(n,l[1])?l[0]:(s.memoizedState=[e,n],e)}function Cg(e,n){var s=St();n=n===void 0?null:n;var l=s.memoizedState;if(n!==null&&Md(n,l[1]))return l[0];if(l=e(),qr){Bi(!0);try{e()}finally{Bi(!1)}}return s.memoizedState=[l,n],l}function Fd(e,n,s){return s===void 0||(Xn&1073741824)!==0?e.memoizedState=n:(e.memoizedState=s,e=Dy(),De.lanes|=e,ar|=e,s)}function kg(e,n,s,l){return si(s,n)?s:za.current!==null?(e=Fd(e,s,l),si(e,n)||(Ct=!0),e):(Xn&42)===0?(Ct=!0,e.memoizedState=s):(e=Dy(),De.lanes|=e,ar|=e,n)}function Dg(e,n,s,l,d){var m=re.p;re.p=m!==0&&8>m?m:8;var b=G.T,A={};G.T=A,Kd(e,!1,n,s);try{var C=d(),U=G.S;if(U!==null&&U(A,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var K=TA(C,l);fo(e,n,K,ci(e))}else fo(e,n,l,ci(e))}catch(W){fo(e,n,{then:function(){},status:"rejected",reason:W},ci())}finally{re.p=m,G.T=b}}function DA(){}function Id(e,n,s,l){if(e.tag!==5)throw Error(a(476));var d=Og(e).queue;Dg(e,d,n,_e,s===null?DA:function(){return Mg(e),s(l)})}function Og(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:_e,baseState:_e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:En,lastRenderedState:_e},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:En,lastRenderedState:s},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Mg(e){var n=Og(e).next.queue;fo(e,n,{},ci())}function Yd(){return It(Oo)}function zg(){return St().memoizedState}function Lg(){return St().memoizedState}function OA(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var s=ci();e=Jn(s);var l=er(n,e,s);l!==null&&(Wt(l,n,s),mo(l,n,s)),n={cache:kd()},e.payload=n;return}n=n.return}}function MA(e,n,s){var l=ci();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},ru(e)?Ug(n,s):(s=Ad(e,n,s,l),s!==null&&(Wt(s,e,l),Ng(s,n,l)))}function Pg(e,n,s){var l=ci();fo(e,n,s,l)}function fo(e,n,s,l){var d={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(ru(e))Ug(n,d);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=n.lastRenderedReducer,m!==null))try{var b=n.lastRenderedState,A=m(b,s);if(d.hasEagerState=!0,d.eagerState=A,si(A,b))return $l(e,n,d,0),Je===null&&Vl(),!1}catch{}finally{}if(s=Ad(e,n,d,l),s!==null)return Wt(s,e,l),Ng(s,n,l),!0}return!1}function Kd(e,n,s,l){if(l={lane:2,revertLane:Nf(),action:l,hasEagerState:!1,eagerState:null,next:null},ru(e)){if(n)throw Error(a(479))}else n=Ad(e,s,l,2),n!==null&&Wt(n,e,2)}function ru(e){var n=e.alternate;return e===De||n!==null&&n===De}function Ug(e,n){Ua=Zl=!0;var s=e.pending;s===null?n.next=n:(n.next=s.next,s.next=n),e.pending=n}function Ng(e,n,s){if((s&4194176)!==0){var l=n.lanes;l&=e.pendingLanes,s|=l,n.lanes=s,me(e,s)}}var sn={readContext:It,use:eu,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useLayoutEffect:xt,useInsertionEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useSyncExternalStore:xt,useId:xt};sn.useCacheRefresh=xt,sn.useMemoCache=xt,sn.useHostTransitionStatus=xt,sn.useFormState=xt,sn.useActionState=xt,sn.useOptimistic=xt;var Gr={readContext:It,use:eu,useCallback:function(e,n){return ni().memoizedState=[e,n===void 0?null:n],e},useContext:It,useEffect:Ag,useImperativeHandle:function(e,n,s){s=s!=null?s.concat([e]):null,iu(4194308,4,Tg.bind(null,n,e),s)},useLayoutEffect:function(e,n){return iu(4194308,4,e,n)},useInsertionEffect:function(e,n){iu(4,2,e,n)},useMemo:function(e,n){var s=ni();n=n===void 0?null:n;var l=e();if(qr){Bi(!0);try{e()}finally{Bi(!1)}}return s.memoizedState=[l,n],l},useReducer:function(e,n,s){var l=ni();if(s!==void 0){var d=s(n);if(qr){Bi(!0);try{s(n)}finally{Bi(!1)}}}else d=n;return l.memoizedState=l.baseState=d,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:d},l.queue=e,e=e.dispatch=MA.bind(null,De,e),[l.memoizedState,e]},useRef:function(e){var n=ni();return e={current:e},n.memoizedState=e},useState:function(e){e=$d(e);var n=e.queue,s=Pg.bind(null,De,n);return n.dispatch=s,[e.memoizedState,s]},useDebugValue:Gd,useDeferredValue:function(e,n){var s=ni();return Fd(s,e,n)},useTransition:function(){var e=$d(!1);return e=Dg.bind(null,De,e.queue,!0,!1),ni().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,s){var l=De,d=ni();if($e){if(s===void 0)throw Error(a(407));s=s()}else{if(s=n(),Je===null)throw Error(a(349));(Ve&60)!==0||og(l,n,s)}d.memoizedState=s;var m={value:s,getSnapshot:n};return d.queue=m,Ag(ug.bind(null,l,m,e),[e]),l.flags|=2048,Ba(9,lg.bind(null,l,m,s,n),{destroy:void 0},null),s},useId:function(){var e=ni(),n=Je.identifierPrefix;if($e){var s=An,l=Sn;s=(l&~(1<<32-Rt(l)-1)).toString(32)+s,n=":"+n+"R"+s,s=Wl++,0<s&&(n+="H"+s.toString(32)),n+=":"}else s=jA++,n=":"+n+"r"+s.toString(32)+":";return e.memoizedState=n},useCacheRefresh:function(){return ni().memoizedState=OA.bind(null,De)}};Gr.useMemoCache=Nd,Gr.useHostTransitionStatus=Yd,Gr.useFormState=vg,Gr.useActionState=vg,Gr.useOptimistic=function(e){var n=ni();n.memoizedState=n.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=Kd.bind(null,De,!0,s),s.dispatch=n,[e,n]};var Qn={readContext:It,use:eu,useCallback:Rg,useContext:It,useEffect:qd,useImperativeHandle:jg,useInsertionEffect:_g,useLayoutEffect:Eg,useMemo:Cg,useReducer:tu,useRef:Sg,useState:function(){return tu(En)},useDebugValue:Gd,useDeferredValue:function(e,n){var s=St();return kg(s,Ke.memoizedState,e,n)},useTransition:function(){var e=tu(En)[0],n=St().memoizedState;return[typeof e=="boolean"?e:co(e),n]},useSyncExternalStore:sg,useId:zg};Qn.useCacheRefresh=Lg,Qn.useMemoCache=Nd,Qn.useHostTransitionStatus=Yd,Qn.useFormState=xg,Qn.useActionState=xg,Qn.useOptimistic=function(e,n){var s=St();return fg(s,Ke,e,n)};var Fr={readContext:It,use:eu,useCallback:Rg,useContext:It,useEffect:qd,useImperativeHandle:jg,useInsertionEffect:_g,useLayoutEffect:Eg,useMemo:Cg,useReducer:Vd,useRef:Sg,useState:function(){return Vd(En)},useDebugValue:Gd,useDeferredValue:function(e,n){var s=St();return Ke===null?Fd(s,e,n):kg(s,Ke.memoizedState,e,n)},useTransition:function(){var e=Vd(En)[0],n=St().memoizedState;return[typeof e=="boolean"?e:co(e),n]},useSyncExternalStore:sg,useId:zg};Fr.useCacheRefresh=Lg,Fr.useMemoCache=Nd,Fr.useHostTransitionStatus=Yd,Fr.useFormState=wg,Fr.useActionState=wg,Fr.useOptimistic=function(e,n){var s=St();return Ke!==null?fg(s,Ke,e,n):(s.baseState=e,[e,s.queue.dispatch])};function Xd(e,n,s,l){n=e.memoizedState,s=s(l,n),s=s==null?n:te({},n,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Qd={isMounted:function(e){return(e=e._reactInternals)?X(e)===e:!1},enqueueSetState:function(e,n,s){e=e._reactInternals;var l=ci(),d=Jn(l);d.payload=n,s!=null&&(d.callback=s),n=er(e,d,l),n!==null&&(Wt(n,e,l),mo(n,e,l))},enqueueReplaceState:function(e,n,s){e=e._reactInternals;var l=ci(),d=Jn(l);d.tag=1,d.payload=n,s!=null&&(d.callback=s),n=er(e,d,l),n!==null&&(Wt(n,e,l),mo(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var s=ci(),l=Jn(s);l.tag=2,n!=null&&(l.callback=n),n=er(e,l,s),n!==null&&(Wt(n,e,s),mo(n,e,s))}};function Bg(e,n,s,l,d,m,b){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,b):n.prototype&&n.prototype.isPureReactComponent?!Ws(s,l)||!Ws(d,m):!0}function Vg(e,n,s,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,l),n.state!==e&&Qd.enqueueReplaceState(n,n.state,null)}function Ir(e,n){var s=n;if("ref"in n){s={};for(var l in n)l!=="ref"&&(s[l]=n[l])}if(e=e.defaultProps){s===n&&(s=te({},s));for(var d in e)s[d]===void 0&&(s[d]=e[d])}return s}var au=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function $g(e){au(e)}function Hg(e){console.error(e)}function qg(e){au(e)}function su(e,n){try{var s=e.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function Gg(e,n,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function Zd(e,n,s){return s=Jn(s),s.tag=3,s.payload={element:null},s.callback=function(){su(e,n)},s}function Fg(e){return e=Jn(e),e.tag=3,e}function Ig(e,n,s,l){var d=s.type.getDerivedStateFromError;if(typeof d=="function"){var m=l.value;e.payload=function(){return d(m)},e.callback=function(){Gg(n,s,l)}}var b=s.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(e.callback=function(){Gg(n,s,l),typeof d!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var A=l.stack;this.componentDidCatch(l.value,{componentStack:A!==null?A:""})})}function zA(e,n,s,l,d){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=s.alternate,n!==null&&po(n,s,d,!0),s=Ti.current,s!==null){switch(s.tag){case 13:return an===null?Mf():s.alternate===null&&mt===0&&(mt=3),s.flags&=-257,s.flags|=65536,s.lanes=d,l===jd?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([l]):n.add(l),Lf(e,l,d)),!1;case 22:return s.flags|=65536,l===jd?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([l]):s.add(l)),Lf(e,l,d)),!1}throw Error(a(435,s.tag))}return Lf(e,l,d),Mf(),!1}if($e)return n=Ti.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=d,l!==Td&&(e=Error(a(422),{cause:l}),io(Ai(e,s)))):(l!==Td&&(n=Error(a(423),{cause:l}),io(Ai(n,s))),e=e.current.alternate,e.flags|=65536,d&=-d,e.lanes|=d,l=Ai(l,s),d=Zd(e.stateNode,l,d),hf(e,d),mt!==4&&(mt=2)),!1;var m=Error(a(520),{cause:l});if(m=Ai(m,s),Ao===null?Ao=[m]:Ao.push(m),mt!==4&&(mt=2),n===null)return!0;l=Ai(l,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,e=d&-d,s.lanes|=e,e=Zd(s.stateNode,l,e),hf(s,e),!1;case 1:if(n=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(sr===null||!sr.has(m))))return s.flags|=65536,d&=-d,s.lanes|=d,d=Fg(d),Ig(d,e,s,l),hf(s,d),!1}s=s.return}while(s!==null);return!1}var Yg=Error(a(461)),Ct=!1;function Ht(e,n,s,l){n.child=e===null?W0(n,null,s,l):$r(n,e.child,s,l)}function Kg(e,n,s,l,d){s=s.render;var m=n.ref;if("ref"in l){var b={};for(var A in l)A!=="ref"&&(b[A]=l[A])}else b=l;return Kr(n),l=zd(e,n,s,b,m,d),A=Ld(),e!==null&&!Ct?(Pd(e,n,d),Tn(e,n,d)):($e&&A&&_d(n),n.flags|=1,Ht(e,n,l,d),n.child)}function Xg(e,n,s,l,d){if(e===null){var m=s.type;return typeof m=="function"&&!wf(m)&&m.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=m,Qg(e,n,m,l,d)):(e=du(s.type,null,l,n,n.mode,d),e.ref=n.ref,e.return=n,n.child=e)}if(m=e.child,!of(e,d)){var b=m.memoizedProps;if(s=s.compare,s=s!==null?s:Ws,s(b,l)&&e.ref===n.ref)return Tn(e,n,d)}return n.flags|=1,e=rr(m,l),e.ref=n.ref,e.return=n,n.child=e}function Qg(e,n,s,l,d){if(e!==null){var m=e.memoizedProps;if(Ws(m,l)&&e.ref===n.ref)if(Ct=!1,n.pendingProps=l=m,of(e,d))(e.flags&131072)!==0&&(Ct=!0);else return n.lanes=e.lanes,Tn(e,n,d)}return Wd(e,n,s,l,d)}function Zg(e,n,s){var l=n.pendingProps,d=l.children,m=(n.stateNode._pendingVisibility&2)!==0,b=e!==null?e.memoizedState:null;if(ho(e,n),l.mode==="hidden"||m){if((n.flags&128)!==0){if(l=b!==null?b.baseLanes|s:s,e!==null){for(d=n.child=e.child,m=0;d!==null;)m=m|d.lanes|d.childLanes,d=d.sibling;n.childLanes=m&~l}else n.childLanes=0,n.child=null;return Wg(e,n,l,s)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ql(n,b!==null?b.cachePool:null),b!==null?J0(n,b):Rd(),eg(n);else return n.lanes=n.childLanes=536870912,Wg(e,n,b!==null?b.baseLanes|s:s,s)}else b!==null?(Ql(n,b.cachePool),J0(n,b),Kn(),n.memoizedState=null):(e!==null&&Ql(n,null),Rd(),Kn());return Ht(e,n,d,s),n.child}function Wg(e,n,s,l){var d=Od();return d=d===null?null:{parent:jt._currentValue,pool:d},n.memoizedState={baseLanes:s,cachePool:d},e!==null&&Ql(n,null),Rd(),eg(n),e!==null&&po(e,n,l,!0),null}function ho(e,n){var s=n.ref;if(s===null)e!==null&&e.ref!==null&&(n.flags|=2097664);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(n.flags|=2097664)}}function Wd(e,n,s,l,d){return Kr(n),s=zd(e,n,s,l,void 0,d),l=Ld(),e!==null&&!Ct?(Pd(e,n,d),Tn(e,n,d)):($e&&l&&_d(n),n.flags|=1,Ht(e,n,s,d),n.child)}function Jg(e,n,s,l,d,m){return Kr(n),n.updateQueue=null,s=ag(n,l,s,d),rg(e),l=Ld(),e!==null&&!Ct?(Pd(e,n,m),Tn(e,n,m)):($e&&l&&_d(n),n.flags|=1,Ht(e,n,s,m),n.child)}function ey(e,n,s,l,d){if(Kr(n),n.stateNode===null){var m=ka,b=s.contextType;typeof b=="object"&&b!==null&&(m=It(b)),m=new s(l,m),n.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Qd,n.stateNode=m,m._reactInternals=n,m=n.stateNode,m.props=l,m.state=n.memoizedState,m.refs={},df(n),b=s.contextType,m.context=typeof b=="object"&&b!==null?It(b):ka,m.state=n.memoizedState,b=s.getDerivedStateFromProps,typeof b=="function"&&(Xd(n,s,b,l),m.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(b=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),b!==m.state&&Qd.enqueueReplaceState(m,m.state,null),yo(n,l,m,d),go(),m.state=n.memoizedState),typeof m.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(e===null){m=n.stateNode;var A=n.memoizedProps,C=Ir(s,A);m.props=C;var U=m.context,K=s.contextType;b=ka,typeof K=="object"&&K!==null&&(b=It(K));var W=s.getDerivedStateFromProps;K=typeof W=="function"||typeof m.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,K||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(A||U!==b)&&Vg(n,m,l,b),Wn=!1;var H=n.memoizedState;m.state=H,yo(n,l,m,d),go(),U=n.memoizedState,A||H!==U||Wn?(typeof W=="function"&&(Xd(n,s,W,l),U=n.memoizedState),(C=Wn||Bg(n,s,C,l,H,U,b))?(K||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(n.flags|=4194308)):(typeof m.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=U),m.props=l,m.state=U,m.context=b,l=C):(typeof m.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{m=n.stateNode,ff(e,n),b=n.memoizedProps,K=Ir(s,b),m.props=K,W=n.pendingProps,H=m.context,U=s.contextType,C=ka,typeof U=="object"&&U!==null&&(C=It(U)),A=s.getDerivedStateFromProps,(U=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(b!==W||H!==C)&&Vg(n,m,l,C),Wn=!1,H=n.memoizedState,m.state=H,yo(n,l,m,d),go();var Y=n.memoizedState;b!==W||H!==Y||Wn||e!==null&&e.dependencies!==null&&ou(e.dependencies)?(typeof A=="function"&&(Xd(n,s,A,l),Y=n.memoizedState),(K=Wn||Bg(n,s,K,l,H,Y,C)||e!==null&&e.dependencies!==null&&ou(e.dependencies))?(U||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,Y,C),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,Y,C)),typeof m.componentDidUpdate=="function"&&(n.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof m.componentDidUpdate!="function"||b===e.memoizedProps&&H===e.memoizedState||(n.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&H===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=Y),m.props=l,m.state=Y,m.context=C,l=K):(typeof m.componentDidUpdate!="function"||b===e.memoizedProps&&H===e.memoizedState||(n.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&H===e.memoizedState||(n.flags|=1024),l=!1)}return m=l,ho(e,n),l=(n.flags&128)!==0,m||l?(m=n.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:m.render(),n.flags|=1,e!==null&&l?(n.child=$r(n,e.child,null,d),n.child=$r(n,null,s,d)):Ht(e,n,s,d),n.memoizedState=m.state,e=n.child):e=Tn(e,n,d),e}function ty(e,n,s,l){return to(),n.flags|=256,Ht(e,n,s,l),n.child}var Jd={dehydrated:null,treeContext:null,retryLane:0};function ef(e){return{baseLanes:e,cachePool:ng()}}function tf(e,n,s){return e=e!==null?e.childLanes&~s:0,n&&(e|=ki),e}function iy(e,n,s){var l=n.pendingProps,d=!1,m=(n.flags&128)!==0,b;if((b=m)||(b=e!==null&&e.memoizedState===null?!1:(Tt.current&2)!==0),b&&(d=!0,n.flags&=-129),b=(n.flags&32)!==0,n.flags&=-33,e===null){if($e){if(d?Yn(n):Kn(),$e){var A=$t,C;if(C=A){e:{for(C=A,A=rn;C.nodeType!==8;){if(!A){A=null;break e}if(C=qi(C.nextSibling),C===null){A=null;break e}}A=C}A!==null?(n.memoizedState={dehydrated:A,treeContext:Nr!==null?{id:Sn,overflow:An}:null,retryLane:536870912},C=Ci(18,null,null,0),C.stateNode=A,C.return=n,n.child=C,Zt=n,$t=null,C=!0):C=!1}C||Vr(n)}if(A=n.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return A.data==="$!"?n.lanes=16:n.lanes=536870912,null;_n(n)}return A=l.children,l=l.fallback,d?(Kn(),d=n.mode,A=rf({mode:"hidden",children:A},d),l=Qr(l,d,s,null),A.return=n,l.return=n,A.sibling=l,n.child=A,d=n.child,d.memoizedState=ef(s),d.childLanes=tf(e,b,s),n.memoizedState=Jd,l):(Yn(n),nf(n,A))}if(C=e.memoizedState,C!==null&&(A=C.dehydrated,A!==null)){if(m)n.flags&256?(Yn(n),n.flags&=-257,n=af(e,n,s)):n.memoizedState!==null?(Kn(),n.child=e.child,n.flags|=128,n=null):(Kn(),d=l.fallback,A=n.mode,l=rf({mode:"visible",children:l.children},A),d=Qr(d,A,s,null),d.flags|=2,l.return=n,d.return=n,l.sibling=d,n.child=l,$r(n,e.child,null,s),l=n.child,l.memoizedState=ef(s),l.childLanes=tf(e,b,s),n.memoizedState=Jd,n=d);else if(Yn(n),A.data==="$!"){if(b=A.nextSibling&&A.nextSibling.dataset,b)var U=b.dgst;b=U,l=Error(a(419)),l.stack="",l.digest=b,io({value:l,source:null,stack:null}),n=af(e,n,s)}else if(Ct||po(e,n,s,!1),b=(s&e.childLanes)!==0,Ct||b){if(b=Je,b!==null){if(l=s&-s,(l&42)!==0)l=1;else switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=64;break;case 268435456:l=134217728;break;default:l=0}if(l=(l&(b.suspendedLanes|s))!==0?0:l,l!==0&&l!==C.retryLane)throw C.retryLane=l,In(e,l),Wt(b,e,l),Yg}A.data==="$?"||Mf(),n=af(e,n,s)}else A.data==="$?"?(n.flags|=128,n.child=e.child,n=XA.bind(null,e),A._reactRetry=n,n=null):(e=C.treeContext,$t=qi(A.nextSibling),Zt=n,$e=!0,$i=null,rn=!1,e!==null&&(_i[Ei++]=Sn,_i[Ei++]=An,_i[Ei++]=Nr,Sn=e.id,An=e.overflow,Nr=n),n=nf(n,l.children),n.flags|=4096);return n}return d?(Kn(),d=l.fallback,A=n.mode,C=e.child,U=C.sibling,l=rr(C,{mode:"hidden",children:l.children}),l.subtreeFlags=C.subtreeFlags&31457280,U!==null?d=rr(U,d):(d=Qr(d,A,s,null),d.flags|=2),d.return=n,l.return=n,l.sibling=d,n.child=l,l=d,d=n.child,A=e.child.memoizedState,A===null?A=ef(s):(C=A.cachePool,C!==null?(U=jt._currentValue,C=C.parent!==U?{parent:U,pool:U}:C):C=ng(),A={baseLanes:A.baseLanes|s,cachePool:C}),d.memoizedState=A,d.childLanes=tf(e,b,s),n.memoizedState=Jd,l):(Yn(n),s=e.child,e=s.sibling,s=rr(s,{mode:"visible",children:l.children}),s.return=n,s.sibling=null,e!==null&&(b=n.deletions,b===null?(n.deletions=[e],n.flags|=16):b.push(e)),n.child=s,n.memoizedState=null,s)}function nf(e,n){return n=rf({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function rf(e,n){return Ry(e,n,0,null)}function af(e,n,s){return $r(n,e.child,null,s),e=nf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ny(e,n,s){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),uf(e.return,n,s)}function sf(e,n,s,l,d){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:d}:(m.isBackwards=n,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=s,m.tailMode=d)}function ry(e,n,s){var l=n.pendingProps,d=l.revealOrder,m=l.tail;if(Ht(e,n,l.children,s),l=Tt.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ny(e,s,n);else if(e.tag===19)ny(e,s,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(Ee(Tt,l),d){case"forwards":for(s=n.child,d=null;s!==null;)e=s.alternate,e!==null&&Xl(e)===null&&(d=s),s=s.sibling;s=d,s===null?(d=n.child,n.child=null):(d=s.sibling,s.sibling=null),sf(n,!1,d,s,m);break;case"backwards":for(s=null,d=n.child,n.child=null;d!==null;){if(e=d.alternate,e!==null&&Xl(e)===null){n.child=d;break}e=d.sibling,d.sibling=s,s=d,d=e}sf(n,!0,s,null,m);break;case"together":sf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Tn(e,n,s){if(e!==null&&(n.dependencies=e.dependencies),ar|=n.lanes,(s&n.childLanes)===0)if(e!==null){if(po(e,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,s=rr(e,e.pendingProps),n.child=s,s.return=n;e.sibling!==null;)e=e.sibling,s=s.sibling=rr(e,e.pendingProps),s.return=n;s.sibling=null}return n.child}function of(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ou(e)))}function LA(e,n,s){switch(n.tag){case 3:ya(n,n.stateNode.containerInfo),Zn(n,jt,e.memoizedState.cache),to();break;case 27:case 5:va(n);break;case 4:ya(n,n.stateNode.containerInfo);break;case 10:Zn(n,n.type,n.memoizedProps.value);break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(Yn(n),n.flags|=128,null):(s&n.child.childLanes)!==0?iy(e,n,s):(Yn(n),e=Tn(e,n,s),e!==null?e.sibling:null);Yn(n);break;case 19:var d=(e.flags&128)!==0;if(l=(s&n.childLanes)!==0,l||(po(e,n,s,!1),l=(s&n.childLanes)!==0),d){if(l)return ry(e,n,s);n.flags|=128}if(d=n.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ee(Tt,Tt.current),l)break;return null;case 22:case 23:return n.lanes=0,Zg(e,n,s);case 24:Zn(n,jt,e.memoizedState.cache)}return Tn(e,n,s)}function ay(e,n,s){if(e!==null)if(e.memoizedProps!==n.pendingProps)Ct=!0;else{if(!of(e,s)&&(n.flags&128)===0)return Ct=!1,LA(e,n,s);Ct=(e.flags&131072)!==0}else Ct=!1,$e&&(n.flags&1048576)!==0&&q0(n,Gl,n.index);switch(n.lanes=0,n.tag){case 16:e:{e=n.pendingProps;var l=n.elementType,d=l._init;if(l=d(l._payload),n.type=l,typeof l=="function")wf(l)?(e=Ir(l,e),n.tag=1,n=ey(null,n,l,e,s)):(n.tag=0,n=Wd(null,n,l,e,s));else{if(l!=null){if(d=l.$$typeof,d===S){n.tag=11,n=Kg(null,n,l,e,s);break e}else if(d===j){n.tag=14,n=Xg(null,n,l,e,s);break e}}throw n=I(l)||l,Error(a(306,n,""))}}return n;case 0:return Wd(e,n,n.type,n.pendingProps,s);case 1:return l=n.type,d=Ir(l,n.pendingProps),ey(e,n,l,d,s);case 3:e:{if(ya(n,n.stateNode.containerInfo),e===null)throw Error(a(387));var m=n.pendingProps;d=n.memoizedState,l=d.element,ff(e,n),yo(n,m,null,s);var b=n.memoizedState;if(m=b.cache,Zn(n,jt,m),m!==d.cache&&cf(n,[jt],s,!0),go(),m=b.element,d.isDehydrated)if(d={element:m,isDehydrated:!1,cache:b.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=ty(e,n,m,s);break e}else if(m!==l){l=Ai(Error(a(424)),n),io(l),n=ty(e,n,m,s);break e}else for($t=qi(n.stateNode.containerInfo.firstChild),Zt=n,$e=!0,$i=null,rn=!0,s=W0(n,null,m,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(to(),m===l){n=Tn(e,n,s);break e}Ht(e,n,m,s)}n=n.child}return n;case 26:return ho(e,n),e===null?(s=lv(n.type,null,n.pendingProps,null))?n.memoizedState=s:$e||(s=n.type,e=n.pendingProps,l=Au(Ji.current).createElement(s),l[fe]=n,l[ve]=e,qt(l,s,e),We(l),n.stateNode=l):n.memoizedState=lv(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return va(n),e===null&&$e&&(l=n.stateNode=av(n.type,n.pendingProps,Ji.current),Zt=n,rn=!0,$t=qi(l.firstChild)),l=n.pendingProps.children,e!==null||$e?Ht(e,n,l,s):n.child=$r(n,null,l,s),ho(e,n),n.child;case 5:return e===null&&$e&&((d=l=$t)&&(l=d_(l,n.type,n.pendingProps,rn),l!==null?(n.stateNode=l,Zt=n,$t=qi(l.firstChild),rn=!1,d=!0):d=!1),d||Vr(n)),va(n),d=n.type,m=n.pendingProps,b=e!==null?e.memoizedProps:null,l=m.children,Yf(d,m)?l=null:b!==null&&Yf(d,b)&&(n.flags|=32),n.memoizedState!==null&&(d=zd(e,n,RA,null,null,s),Oo._currentValue=d),ho(e,n),Ht(e,n,l,s),n.child;case 6:return e===null&&$e&&((e=s=$t)&&(s=f_(s,n.pendingProps,rn),s!==null?(n.stateNode=s,Zt=n,$t=null,e=!0):e=!1),e||Vr(n)),null;case 13:return iy(e,n,s);case 4:return ya(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=$r(n,null,l,s):Ht(e,n,l,s),n.child;case 11:return Kg(e,n,n.type,n.pendingProps,s);case 7:return Ht(e,n,n.pendingProps,s),n.child;case 8:return Ht(e,n,n.pendingProps.children,s),n.child;case 12:return Ht(e,n,n.pendingProps.children,s),n.child;case 10:return l=n.pendingProps,Zn(n,n.type,l.value),Ht(e,n,l.children,s),n.child;case 9:return d=n.type._context,l=n.pendingProps.children,Kr(n),d=It(d),l=l(d),n.flags|=1,Ht(e,n,l,s),n.child;case 14:return Xg(e,n,n.type,n.pendingProps,s);case 15:return Qg(e,n,n.type,n.pendingProps,s);case 19:return ry(e,n,s);case 22:return Zg(e,n,s);case 24:return Kr(n),l=It(jt),e===null?(d=Od(),d===null&&(d=Je,m=kd(),d.pooledCache=m,m.refCount++,m!==null&&(d.pooledCacheLanes|=s),d=m),n.memoizedState={parent:l,cache:d},df(n),Zn(n,jt,d)):((e.lanes&s)!==0&&(ff(e,n),yo(n,null,null,s),go()),d=e.memoizedState,m=n.memoizedState,d.parent!==l?(d={parent:l,cache:l},n.memoizedState=d,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=d),Zn(n,jt,l)):(l=m.cache,Zn(n,jt,l),l!==d.cache&&cf(n,[jt],s,!0))),Ht(e,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}var lf=Oe(null),Yr=null,jn=null;function Zn(e,n,s){Ee(lf,n._currentValue),n._currentValue=s}function Rn(e){e._currentValue=lf.current,Ie(lf)}function uf(e,n,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===s)break;e=e.return}}function cf(e,n,s,l){var d=e.child;for(d!==null&&(d.return=e);d!==null;){var m=d.dependencies;if(m!==null){var b=d.child;m=m.firstContext;e:for(;m!==null;){var A=m;m=d;for(var C=0;C<n.length;C++)if(A.context===n[C]){m.lanes|=s,A=m.alternate,A!==null&&(A.lanes|=s),uf(m.return,s,e),l||(b=null);break e}m=A.next}}else if(d.tag===18){if(b=d.return,b===null)throw Error(a(341));b.lanes|=s,m=b.alternate,m!==null&&(m.lanes|=s),uf(b,s,e),b=null}else b=d.child;if(b!==null)b.return=d;else for(b=d;b!==null;){if(b===e){b=null;break}if(d=b.sibling,d!==null){d.return=b.return,b=d;break}b=b.return}d=b}}function po(e,n,s,l){e=null;for(var d=n,m=!1;d!==null;){if(!m){if((d.flags&524288)!==0)m=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var b=d.alternate;if(b===null)throw Error(a(387));if(b=b.memoizedProps,b!==null){var A=d.type;si(d.pendingProps.value,b.value)||(e!==null?e.push(A):e=[A])}}else if(d===gi.current){if(b=d.alternate,b===null)throw Error(a(387));b.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(e!==null?e.push(Oo):e=[Oo])}d=d.return}e!==null&&cf(n,e,s,l),n.flags|=262144}function ou(e){for(e=e.firstContext;e!==null;){if(!si(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Kr(e){Yr=e,jn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function It(e){return sy(Yr,e)}function lu(e,n){return Yr===null&&Kr(e),sy(e,n)}function sy(e,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},jn===null){if(e===null)throw Error(a(308));jn=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else jn=jn.next=n;return s}var Wn=!1;function df(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ff(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Jn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function er(e,n,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(ut&2)!==0){var d=l.pending;return d===null?n.next=n:(n.next=d.next,d.next=n),l.pending=n,n=Hl(e),$0(e,null,s),n}return $l(e,l,n,s),Hl(e)}function mo(e,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194176)!==0)){var l=n.lanes;l&=e.pendingLanes,s|=l,n.lanes=s,me(e,s)}}function hf(e,n){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var d=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var b={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?d=m=b:m=m.next=b,s=s.next}while(s!==null);m===null?d=m=n:m=m.next=n}else d=m=n;s={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=n:e.next=n,s.lastBaseUpdate=n}var pf=!1;function go(){if(pf){var e=Pa;if(e!==null)throw e}}function yo(e,n,s,l){pf=!1;var d=e.updateQueue;Wn=!1;var m=d.firstBaseUpdate,b=d.lastBaseUpdate,A=d.shared.pending;if(A!==null){d.shared.pending=null;var C=A,U=C.next;C.next=null,b===null?m=U:b.next=U,b=C;var K=e.alternate;K!==null&&(K=K.updateQueue,A=K.lastBaseUpdate,A!==b&&(A===null?K.firstBaseUpdate=U:A.next=U,K.lastBaseUpdate=C))}if(m!==null){var W=d.baseState;b=0,K=U=C=null,A=m;do{var H=A.lane&-536870913,Y=H!==A.lane;if(Y?(Ve&H)===H:(l&H)===H){H!==0&&H===La&&(pf=!0),K!==null&&(K=K.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var pe=e,Te=A;H=n;var gt=s;switch(Te.tag){case 1:if(pe=Te.payload,typeof pe=="function"){W=pe.call(gt,W,H);break e}W=pe;break e;case 3:pe.flags=pe.flags&-65537|128;case 0:if(pe=Te.payload,H=typeof pe=="function"?pe.call(gt,W,H):pe,H==null)break e;W=te({},W,H);break e;case 2:Wn=!0}}H=A.callback,H!==null&&(e.flags|=64,Y&&(e.flags|=8192),Y=d.callbacks,Y===null?d.callbacks=[H]:Y.push(H))}else Y={lane:H,tag:A.tag,payload:A.payload,callback:A.callback,next:null},K===null?(U=K=Y,C=W):K=K.next=Y,b|=H;if(A=A.next,A===null){if(A=d.shared.pending,A===null)break;Y=A,A=Y.next,Y.next=null,d.lastBaseUpdate=Y,d.shared.pending=null}}while(!0);K===null&&(C=W),d.baseState=C,d.firstBaseUpdate=U,d.lastBaseUpdate=K,m===null&&(d.shared.lanes=0),ar|=b,e.lanes=b,e.memoizedState=W}}function oy(e,n){if(typeof e!="function")throw Error(a(191,e));e.call(n)}function ly(e,n){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)oy(s[e],n)}function vo(e,n){try{var s=n.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var d=l.next;s=d;do{if((s.tag&e)===e){l=void 0;var m=s.create,b=s.inst;l=m(),b.destroy=l}s=s.next}while(s!==d)}}catch(A){Ze(n,n.return,A)}}function tr(e,n,s){try{var l=n.updateQueue,d=l!==null?l.lastEffect:null;if(d!==null){var m=d.next;l=m;do{if((l.tag&e)===e){var b=l.inst,A=b.destroy;if(A!==void 0){b.destroy=void 0,d=n;var C=s;try{A()}catch(U){Ze(d,C,U)}}}l=l.next}while(l!==m)}}catch(U){Ze(n,n.return,U)}}function uy(e){var n=e.updateQueue;if(n!==null){var s=e.stateNode;try{ly(n,s)}catch(l){Ze(e,e.return,l)}}}function cy(e,n,s){s.props=Ir(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){Ze(e,n,l)}}function Xr(e,n){try{var s=e.ref;if(s!==null){var l=e.stateNode;switch(e.tag){case 26:case 27:case 5:var d=l;break;default:d=l}typeof s=="function"?e.refCleanup=s(d):s.current=d}}catch(m){Ze(e,n,m)}}function oi(e,n){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(d){Ze(e,n,d)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(d){Ze(e,n,d)}else s.current=null}function dy(e){var n=e.type,s=e.memoizedProps,l=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(d){Ze(e,e.return,d)}}function fy(e,n,s){try{var l=e.stateNode;s_(l,e.type,s,n),l[ve]=n}catch(d){Ze(e,e.return,d)}}function hy(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function mf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gf(e,n,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?s.nodeType===8?s.parentNode.insertBefore(e,n):s.insertBefore(e,n):(s.nodeType===8?(n=s.parentNode,n.insertBefore(e,s)):(n=s,n.appendChild(e)),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=Su));else if(l!==4&&l!==27&&(e=e.child,e!==null))for(gf(e,n,s),e=e.sibling;e!==null;)gf(e,n,s),e=e.sibling}function uu(e,n,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?s.insertBefore(e,n):s.appendChild(e);else if(l!==4&&l!==27&&(e=e.child,e!==null))for(uu(e,n,s),e=e.sibling;e!==null;)uu(e,n,s),e=e.sibling}var Cn=!1,pt=!1,yf=!1,py=typeof WeakSet=="function"?WeakSet:Set,kt=null,my=!1;function PA(e,n){if(e=e.containerInfo,Ff=Cu,e=O0(e),vd(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var d=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break e}var b=0,A=-1,C=-1,U=0,K=0,W=e,H=null;t:for(;;){for(var Y;W!==s||d!==0&&W.nodeType!==3||(A=b+d),W!==m||l!==0&&W.nodeType!==3||(C=b+l),W.nodeType===3&&(b+=W.nodeValue.length),(Y=W.firstChild)!==null;)H=W,W=Y;for(;;){if(W===e)break t;if(H===s&&++U===d&&(A=b),H===m&&++K===l&&(C=b),(Y=W.nextSibling)!==null)break;W=H,H=W.parentNode}W=Y}s=A===-1||C===-1?null:{start:A,end:C}}else s=null}s=s||{start:0,end:0}}else s=null;for(If={focusedElem:e,selectionRange:s},Cu=!1,kt=n;kt!==null;)if(n=kt,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,kt=e;else for(;kt!==null;){switch(n=kt,m=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,s=n,d=m.memoizedProps,m=m.memoizedState,l=s.stateNode;try{var pe=Ir(s.type,d,s.elementType===s.type);e=l.getSnapshotBeforeUpdate(pe,m),l.__reactInternalSnapshotBeforeUpdate=e}catch(Te){Ze(s,s.return,Te)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,s=e.nodeType,s===9)Qf(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Qf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=n.sibling,e!==null){e.return=n.return,kt=e;break}kt=n.return}return pe=my,my=!1,pe}function gy(e,n,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Dn(e,s),l&4&&vo(5,s);break;case 1:if(Dn(e,s),l&4)if(e=s.stateNode,n===null)try{e.componentDidMount()}catch(A){Ze(s,s.return,A)}else{var d=Ir(s.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(d,n,e.__reactInternalSnapshotBeforeUpdate)}catch(A){Ze(s,s.return,A)}}l&64&&uy(s),l&512&&Xr(s,s.return);break;case 3:if(Dn(e,s),l&64&&(l=s.updateQueue,l!==null)){if(e=null,s.child!==null)switch(s.child.tag){case 27:case 5:e=s.child.stateNode;break;case 1:e=s.child.stateNode}try{ly(l,e)}catch(A){Ze(s,s.return,A)}}break;case 26:Dn(e,s),l&512&&Xr(s,s.return);break;case 27:case 5:Dn(e,s),n===null&&l&4&&dy(s),l&512&&Xr(s,s.return);break;case 12:Dn(e,s);break;case 13:Dn(e,s),l&4&&xy(e,s);break;case 22:if(d=s.memoizedState!==null||Cn,!d){n=n!==null&&n.memoizedState!==null||pt;var m=Cn,b=pt;Cn=d,(pt=n)&&!b?ir(e,s,(s.subtreeFlags&8772)!==0):Dn(e,s),Cn=m,pt=b}l&512&&(s.memoizedProps.mode==="manual"?Xr(s,s.return):oi(s,s.return));break;default:Dn(e,s)}}function yy(e){var n=e.alternate;n!==null&&(e.alternate=null,yy(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&vn(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var At=null,li=!1;function kn(e,n,s){for(s=s.child;s!==null;)vy(e,n,s),s=s.sibling}function vy(e,n,s){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(Gn,s)}catch{}switch(s.tag){case 26:pt||oi(s,n),kn(e,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:pt||oi(s,n);var l=At,d=li;for(At=s.stateNode,kn(e,n,s),s=s.stateNode,n=s.attributes;n.length;)s.removeAttributeNode(n[0]);vn(s),At=l,li=d;break;case 5:pt||oi(s,n);case 6:d=At;var m=li;if(At=null,kn(e,n,s),At=d,li=m,At!==null)if(li)try{e=At,l=s.stateNode,e.nodeType===8?e.parentNode.removeChild(l):e.removeChild(l)}catch(b){Ze(s,n,b)}else try{At.removeChild(s.stateNode)}catch(b){Ze(s,n,b)}break;case 18:At!==null&&(li?(n=At,s=s.stateNode,n.nodeType===8?Xf(n.parentNode,s):n.nodeType===1&&Xf(n,s),Po(n)):Xf(At,s.stateNode));break;case 4:l=At,d=li,At=s.stateNode.containerInfo,li=!0,kn(e,n,s),At=l,li=d;break;case 0:case 11:case 14:case 15:pt||tr(2,s,n),pt||tr(4,s,n),kn(e,n,s);break;case 1:pt||(oi(s,n),l=s.stateNode,typeof l.componentWillUnmount=="function"&&cy(s,n,l)),kn(e,n,s);break;case 21:kn(e,n,s);break;case 22:pt||oi(s,n),pt=(l=pt)||s.memoizedState!==null,kn(e,n,s),pt=l;break;default:kn(e,n,s)}}function xy(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Po(e)}catch(s){Ze(n,n.return,s)}}function UA(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new py),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new py),n;default:throw Error(a(435,e.tag))}}function vf(e,n){var s=UA(e);n.forEach(function(l){var d=QA.bind(null,e,l);s.has(l)||(s.add(l),l.then(d,d))})}function ji(e,n){var s=n.deletions;if(s!==null)for(var l=0;l<s.length;l++){var d=s[l],m=e,b=n,A=b;e:for(;A!==null;){switch(A.tag){case 27:case 5:At=A.stateNode,li=!1;break e;case 3:At=A.stateNode.containerInfo,li=!0;break e;case 4:At=A.stateNode.containerInfo,li=!0;break e}A=A.return}if(At===null)throw Error(a(160));vy(m,b,d),At=null,li=!1,m=d.alternate,m!==null&&(m.return=null),d.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)by(n,e),n=n.sibling}var Hi=null;function by(e,n){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ji(n,e),Ri(e),l&4&&(tr(3,e,e.return),vo(3,e),tr(5,e,e.return));break;case 1:ji(n,e),Ri(e),l&512&&(pt||s===null||oi(s,s.return)),l&64&&Cn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var d=Hi;if(ji(n,e),Ri(e),l&512&&(pt||s===null||oi(s,s.return)),l&4){var m=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){e:{l=e.type,s=e.memoizedProps,d=d.ownerDocument||d;t:switch(l){case"title":m=d.getElementsByTagName("title")[0],(!m||m[vi]||m[fe]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=d.createElement(l),d.head.insertBefore(m,d.querySelector("head > title"))),qt(m,l,s),m[fe]=e,We(m),l=m;break e;case"link":var b=dv("link","href",d).get(l+(s.href||""));if(b){for(var A=0;A<b.length;A++)if(m=b[A],m.getAttribute("href")===(s.href==null?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){b.splice(A,1);break t}}m=d.createElement(l),qt(m,l,s),d.head.appendChild(m);break;case"meta":if(b=dv("meta","content",d).get(l+(s.content||""))){for(A=0;A<b.length;A++)if(m=b[A],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){b.splice(A,1);break t}}m=d.createElement(l),qt(m,l,s),d.head.appendChild(m);break;default:throw Error(a(468,l))}m[fe]=e,We(m),l=m}e.stateNode=l}else fv(d,e.type,e.stateNode);else e.stateNode=cv(d,l,e.memoizedProps);else m!==l?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,l===null?fv(d,e.type,e.stateNode):cv(d,l,e.memoizedProps)):l===null&&e.stateNode!==null&&fy(e,e.memoizedProps,s.memoizedProps)}break;case 27:if(l&4&&e.alternate===null){d=e.stateNode,m=e.memoizedProps;try{for(var C=d.firstChild;C;){var U=C.nextSibling,K=C.nodeName;C[vi]||K==="HEAD"||K==="BODY"||K==="SCRIPT"||K==="STYLE"||K==="LINK"&&C.rel.toLowerCase()==="stylesheet"||d.removeChild(C),C=U}for(var W=e.type,H=d.attributes;H.length;)d.removeAttributeNode(H[0]);qt(d,W,m),d[fe]=e,d[ve]=m}catch(pe){Ze(e,e.return,pe)}}case 5:if(ji(n,e),Ri(e),l&512&&(pt||s===null||oi(s,s.return)),e.flags&32){d=e.stateNode;try{Aa(d,"")}catch(pe){Ze(e,e.return,pe)}}l&4&&e.stateNode!=null&&(d=e.memoizedProps,fy(e,d,s!==null?s.memoizedProps:d)),l&1024&&(yf=!0);break;case 6:if(ji(n,e),Ri(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(pe){Ze(e,e.return,pe)}}break;case 3:if(Tu=null,d=Hi,Hi=_u(n.containerInfo),ji(n,e),Hi=d,Ri(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Po(n.containerInfo)}catch(pe){Ze(e,e.return,pe)}yf&&(yf=!1,wy(e));break;case 4:l=Hi,Hi=_u(e.stateNode.containerInfo),ji(n,e),Ri(e),Hi=l;break;case 12:ji(n,e),Ri(e);break;case 13:ji(n,e),Ri(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(jf=ai()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,vf(e,l)));break;case 22:if(l&512&&(pt||s===null||oi(s,s.return)),C=e.memoizedState!==null,U=s!==null&&s.memoizedState!==null,K=Cn,W=pt,Cn=K||C,pt=W||U,ji(n,e),pt=W,Cn=K,Ri(e),n=e.stateNode,n._current=e,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,l&8192&&(n._visibility=C?n._visibility&-2:n._visibility|1,C&&(n=Cn||pt,s===null||U||n||Va(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))e:for(s=null,n=e;;){if(n.tag===5||n.tag===26||n.tag===27){if(s===null){U=s=n;try{if(d=U.stateNode,C)m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{b=U.stateNode,A=U.memoizedProps.style;var Y=A!=null&&A.hasOwnProperty("display")?A.display:null;b.style.display=Y==null||typeof Y=="boolean"?"":(""+Y).trim()}}catch(pe){Ze(U,U.return,pe)}}}else if(n.tag===6){if(s===null){U=n;try{U.stateNode.nodeValue=C?"":U.memoizedProps}catch(pe){Ze(U,U.return,pe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,vf(e,s))));break;case 19:ji(n,e),Ri(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,vf(e,l)));break;case 21:break;default:ji(n,e),Ri(e)}}function Ri(e){var n=e.flags;if(n&2){try{if(e.tag!==27){e:{for(var s=e.return;s!==null;){if(hy(s)){var l=s;break e}s=s.return}throw Error(a(160))}switch(l.tag){case 27:var d=l.stateNode,m=mf(e);uu(e,m,d);break;case 5:var b=l.stateNode;l.flags&32&&(Aa(b,""),l.flags&=-33);var A=mf(e);uu(e,A,b);break;case 3:case 4:var C=l.stateNode.containerInfo,U=mf(e);gf(e,U,C);break;default:throw Error(a(161))}}}catch(K){Ze(e,e.return,K)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function wy(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;wy(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Dn(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)gy(e,n.alternate,n),n=n.sibling}function Va(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:tr(4,n,n.return),Va(n);break;case 1:oi(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&cy(n,n.return,s),Va(n);break;case 26:case 27:case 5:oi(n,n.return),Va(n);break;case 22:oi(n,n.return),n.memoizedState===null&&Va(n);break;default:Va(n)}e=e.sibling}}function ir(e,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,d=e,m=n,b=m.flags;switch(m.tag){case 0:case 11:case 15:ir(d,m,s),vo(4,m);break;case 1:if(ir(d,m,s),l=m,d=l.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(U){Ze(l,l.return,U)}if(l=m,d=l.updateQueue,d!==null){var A=l.stateNode;try{var C=d.shared.hiddenCallbacks;if(C!==null)for(d.shared.hiddenCallbacks=null,d=0;d<C.length;d++)oy(C[d],A)}catch(U){Ze(l,l.return,U)}}s&&b&64&&uy(m),Xr(m,m.return);break;case 26:case 27:case 5:ir(d,m,s),s&&l===null&&b&4&&dy(m),Xr(m,m.return);break;case 12:ir(d,m,s);break;case 13:ir(d,m,s),s&&b&4&&xy(d,m);break;case 22:m.memoizedState===null&&ir(d,m,s),Xr(m,m.return);break;default:ir(d,m,s)}n=n.sibling}}function xf(e,n){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&oo(s))}function bf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&oo(e))}function nr(e,n,s,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Sy(e,n,s,l),n=n.sibling}function Sy(e,n,s,l){var d=n.flags;switch(n.tag){case 0:case 11:case 15:nr(e,n,s,l),d&2048&&vo(9,n);break;case 3:nr(e,n,s,l),d&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&oo(e)));break;case 12:if(d&2048){nr(e,n,s,l),e=n.stateNode;try{var m=n.memoizedProps,b=m.id,A=m.onPostCommit;typeof A=="function"&&A(b,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(C){Ze(n,n.return,C)}}else nr(e,n,s,l);break;case 23:break;case 22:m=n.stateNode,n.memoizedState!==null?m._visibility&4?nr(e,n,s,l):xo(e,n):m._visibility&4?nr(e,n,s,l):(m._visibility|=4,$a(e,n,s,l,(n.subtreeFlags&10256)!==0)),d&2048&&xf(n.alternate,n);break;case 24:nr(e,n,s,l),d&2048&&bf(n.alternate,n);break;default:nr(e,n,s,l)}}function $a(e,n,s,l,d){for(d=d&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var m=e,b=n,A=s,C=l,U=b.flags;switch(b.tag){case 0:case 11:case 15:$a(m,b,A,C,d),vo(8,b);break;case 23:break;case 22:var K=b.stateNode;b.memoizedState!==null?K._visibility&4?$a(m,b,A,C,d):xo(m,b):(K._visibility|=4,$a(m,b,A,C,d)),d&&U&2048&&xf(b.alternate,b);break;case 24:$a(m,b,A,C,d),d&&U&2048&&bf(b.alternate,b);break;default:$a(m,b,A,C,d)}n=n.sibling}}function xo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=e,l=n,d=l.flags;switch(l.tag){case 22:xo(s,l),d&2048&&xf(l.alternate,l);break;case 24:xo(s,l),d&2048&&bf(l.alternate,l);break;default:xo(s,l)}n=n.sibling}}var bo=8192;function Ha(e){if(e.subtreeFlags&bo)for(e=e.child;e!==null;)Ay(e),e=e.sibling}function Ay(e){switch(e.tag){case 26:Ha(e),e.flags&bo&&e.memoizedState!==null&&E_(Hi,e.memoizedState,e.memoizedProps);break;case 5:Ha(e);break;case 3:case 4:var n=Hi;Hi=_u(e.stateNode.containerInfo),Ha(e),Hi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=bo,bo=16777216,Ha(e),bo=n):Ha(e));break;default:Ha(e)}}function _y(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function wo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];kt=l,Ty(l,e)}_y(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ey(e),e=e.sibling}function Ey(e){switch(e.tag){case 0:case 11:case 15:wo(e),e.flags&2048&&tr(9,e,e.return);break;case 3:wo(e);break;case 12:wo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&4&&(e.return===null||e.return.tag!==13)?(n._visibility&=-5,cu(e)):wo(e);break;default:wo(e)}}function cu(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];kt=l,Ty(l,e)}_y(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:tr(8,n,n.return),cu(n);break;case 22:s=n.stateNode,s._visibility&4&&(s._visibility&=-5,cu(n));break;default:cu(n)}e=e.sibling}}function Ty(e,n){for(;kt!==null;){var s=kt;switch(s.tag){case 0:case 11:case 15:tr(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:oo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,kt=l;else e:for(s=e;kt!==null;){l=kt;var d=l.sibling,m=l.return;if(yy(l),l===s){kt=null;break e}if(d!==null){d.return=m,kt=d;break e}kt=m}}}function NA(e,n,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ci(e,n,s,l){return new NA(e,n,s,l)}function wf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rr(e,n){var s=e.alternate;return s===null?(s=Ci(e.tag,n,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=n,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&31457280,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,n=e.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function jy(e,n){e.flags&=31457282;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,n=s.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function du(e,n,s,l,d,m){var b=0;if(l=e,typeof e=="function")wf(e)&&(b=1);else if(typeof e=="string")b=A_(e,s,ft.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case f:return Qr(s.children,d,m,n);case p:b=8,d|=24;break;case g:return e=Ci(12,s,n,d|2),e.elementType=g,e.lanes=m,e;case T:return e=Ci(13,s,n,d),e.elementType=T,e.lanes=m,e;case E:return e=Ci(19,s,n,d),e.elementType=E,e.lanes=m,e;case M:return Ry(s,d,m,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case v:case w:b=10;break e;case x:b=9;break e;case S:b=11;break e;case j:b=14;break e;case D:b=16,l=null;break e}b=29,s=Error(a(130,e===null?"null":typeof e,"")),l=null}return n=Ci(b,s,n,d),n.elementType=e,n.type=l,n.lanes=m,n}function Qr(e,n,s,l){return e=Ci(7,e,l,n),e.lanes=s,e}function Ry(e,n,s,l){e=Ci(22,e,l,n),e.elementType=M,e.lanes=s;var d={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var m=d._current;if(m===null)throw Error(a(456));if((d._pendingVisibility&2)===0){var b=In(m,2);b!==null&&(d._pendingVisibility|=2,Wt(b,m,2))}},attach:function(){var m=d._current;if(m===null)throw Error(a(456));if((d._pendingVisibility&2)!==0){var b=In(m,2);b!==null&&(d._pendingVisibility&=-3,Wt(b,m,2))}}};return e.stateNode=d,e}function Sf(e,n,s){return e=Ci(6,e,null,n),e.lanes=s,e}function Af(e,n,s){return n=Ci(4,e.children!==null?e.children:[],e.key,n),n.lanes=s,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function On(e){e.flags|=4}function Cy(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!hv(n)){if(n=Ti.current,n!==null&&((Ve&4194176)===Ve?an!==null:(Ve&62914560)!==Ve&&(Ve&536870912)===0||n!==an))throw ro=jd,I0;e.flags|=8192}}function fu(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?z():536870912,e.lanes|=n,Ga|=n)}function So(e,n){if(!$e)switch(e.tailMode){case"hidden":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function lt(e){var n=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(n)for(var d=e.child;d!==null;)s|=d.lanes|d.childLanes,l|=d.subtreeFlags&31457280,l|=d.flags&31457280,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)s|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=l,e.childLanes=s,n}function BA(e,n,s){var l=n.pendingProps;switch(Ed(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(n),null;case 1:return lt(n),null;case 3:return s=n.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),Rn(jt),qn(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(eo(n)?On(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,$i!==null&&(Df($i),$i=null))),lt(n),null;case 26:return s=n.memoizedState,e===null?(On(n),s!==null?(lt(n),Cy(n,s)):(lt(n),n.flags&=-16777217)):s?s!==e.memoizedState?(On(n),lt(n),Cy(n,s)):(lt(n),n.flags&=-16777217):(e.memoizedProps!==l&&On(n),lt(n),n.flags&=-16777217),null;case 27:xa(n),s=Ji.current;var d=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==l&&On(n);else{if(!l){if(n.stateNode===null)throw Error(a(166));return lt(n),null}e=ft.current,eo(n)?G0(n):(e=av(d,l,s),n.stateNode=e,On(n))}return lt(n),null;case 5:if(xa(n),s=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&On(n);else{if(!l){if(n.stateNode===null)throw Error(a(166));return lt(n),null}if(e=ft.current,eo(n))G0(n);else{switch(d=Au(Ji.current),e){case 1:e=d.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=d.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=d.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=d.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?d.createElement("select",{is:l.is}):d.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?d.createElement(s,{is:l.is}):d.createElement(s)}}e[fe]=n,e[ve]=l;e:for(d=n.child;d!==null;){if(d.tag===5||d.tag===6)e.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}n.stateNode=e;e:switch(qt(e,s,l),s){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&On(n)}}return lt(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==l&&On(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(a(166));if(e=Ji.current,eo(n)){if(e=n.stateNode,s=n.memoizedProps,l=null,d=Zt,d!==null)switch(d.tag){case 27:case 5:l=d.memoizedProps}e[fe]=n,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||Jy(e.nodeValue,s)),e||Vr(n)}else e=Au(e).createTextNode(l),e[fe]=n,n.stateNode=e}return lt(n),null;case 13:if(l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(d=eo(n),l!==null&&l.dehydrated!==null){if(e===null){if(!d)throw Error(a(318));if(d=n.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(a(317));d[fe]=n}else to(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;lt(n),d=!1}else $i!==null&&(Df($i),$i=null),d=!0;if(!d)return n.flags&256?(_n(n),n):(_n(n),null)}if(_n(n),(n.flags&128)!==0)return n.lanes=s,n;if(s=l!==null,e=e!==null&&e.memoizedState!==null,s){l=n.child,d=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(d=l.alternate.memoizedState.cachePool.pool);var m=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==d&&(l.flags|=2048)}return s!==e&&s&&(n.child.flags|=8192),fu(n,n.updateQueue),lt(n),null;case 4:return qn(),e===null&&Hf(n.stateNode.containerInfo),lt(n),null;case 10:return Rn(n.type),lt(n),null;case 19:if(Ie(Tt),d=n.memoizedState,d===null)return lt(n),null;if(l=(n.flags&128)!==0,m=d.rendering,m===null)if(l)So(d,!1);else{if(mt!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(m=Xl(e),m!==null){for(n.flags|=128,So(d,!1),e=m.updateQueue,n.updateQueue=e,fu(n,e),n.subtreeFlags=0,e=s,s=n.child;s!==null;)jy(s,e),s=s.sibling;return Ee(Tt,Tt.current&1|2),n.child}e=e.sibling}d.tail!==null&&ai()>hu&&(n.flags|=128,l=!0,So(d,!1),n.lanes=4194304)}else{if(!l)if(e=Xl(m),e!==null){if(n.flags|=128,l=!0,e=e.updateQueue,n.updateQueue=e,fu(n,e),So(d,!0),d.tail===null&&d.tailMode==="hidden"&&!m.alternate&&!$e)return lt(n),null}else 2*ai()-d.renderingStartTime>hu&&s!==536870912&&(n.flags|=128,l=!0,So(d,!1),n.lanes=4194304);d.isBackwards?(m.sibling=n.child,n.child=m):(e=d.last,e!==null?e.sibling=m:n.child=m,d.last=m)}return d.tail!==null?(n=d.tail,d.rendering=n,d.tail=n.sibling,d.renderingStartTime=ai(),n.sibling=null,e=Tt.current,Ee(Tt,l?e&1|2:e&1),n):(lt(n),null);case 22:case 23:return _n(n),Cd(),l=n.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(s&536870912)!==0&&(n.flags&128)===0&&(lt(n),n.subtreeFlags&6&&(n.flags|=8192)):lt(n),s=n.updateQueue,s!==null&&fu(n,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==s&&(n.flags|=2048),e!==null&&Ie(Hr),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Rn(jt),lt(n),null;case 25:return null}throw Error(a(156,n.tag))}function VA(e,n){switch(Ed(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Rn(jt),qn(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return xa(n),null;case 13:if(_n(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));to()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Ie(Tt),null;case 4:return qn(),null;case 10:return Rn(n.type),null;case 22:case 23:return _n(n),Cd(),e!==null&&Ie(Hr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Rn(jt),null;case 25:return null;default:return null}}function ky(e,n){switch(Ed(n),n.tag){case 3:Rn(jt),qn();break;case 26:case 27:case 5:xa(n);break;case 4:qn();break;case 13:_n(n);break;case 19:Ie(Tt);break;case 10:Rn(n.type);break;case 22:case 23:_n(n),Cd(),e!==null&&Ie(Hr);break;case 24:Rn(jt)}}var $A={getCacheForType:function(e){var n=It(jt),s=n.data.get(e);return s===void 0&&(s=e(),n.data.set(e,s)),s}},HA=typeof WeakMap=="function"?WeakMap:Map,ut=0,Je=null,ze=null,Ve=0,et=0,ui=null,Mn=!1,qa=!1,_f=!1,zn=0,mt=0,ar=0,Zr=0,Ef=0,ki=0,Ga=0,Ao=null,on=null,Tf=!1,jf=0,hu=1/0,pu=null,sr=null,mu=!1,Wr=null,_o=0,Rf=0,Cf=null,Eo=0,kf=null;function ci(){if((ut&2)!==0&&Ve!==0)return Ve&-Ve;if(G.T!==null){var e=La;return e!==0?e:Nf()}return ue()}function Dy(){ki===0&&(ki=(Ve&536870912)===0||$e?Rl():536870912);var e=Ti.current;return e!==null&&(e.flags|=32),ki}function Wt(e,n,s){(e===Je&&et===2||e.cancelPendingCommit!==null)&&(Fa(e,0),Ln(e,Ve,ki,!1)),q(e,s),((ut&2)===0||e!==Je)&&(e===Je&&((ut&2)===0&&(Zr|=s),mt===4&&Ln(e,Ve,ki,!1)),ln(e))}function Oy(e,n,s){if((ut&6)!==0)throw Error(a(327));var l=!s&&(n&60)===0&&(n&e.expiredLanes)===0||nn(e,n),d=l?FA(e,n):zf(e,n,!0),m=l;do{if(d===0){qa&&!l&&Ln(e,n,0,!1);break}else if(d===6)Ln(e,n,0,!Mn);else{if(s=e.current.alternate,m&&!qA(s)){d=zf(e,n,!1),m=!1;continue}if(d===2){if(m=n,e.errorRecoveryDisabledLanes&m)var b=0;else b=e.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){n=b;e:{var A=e;d=Ao;var C=A.current.memoizedState.isDehydrated;if(C&&(Fa(A,b).flags|=256),b=zf(A,b,!1),b!==2){if(_f&&!C){A.errorRecoveryDisabledLanes|=m,Zr|=m,d=4;break e}m=on,on=d,m!==null&&Df(m)}d=b}if(m=!1,d!==2)continue}}if(d===1){Fa(e,0),Ln(e,n,0,!0);break}e:{switch(l=e,d){case 0:case 1:throw Error(a(345));case 4:if((n&4194176)===n){Ln(l,n,ki,!Mn);break e}break;case 2:on=null;break;case 3:case 5:break;default:throw Error(a(329))}if(l.finishedWork=s,l.finishedLanes=n,(n&62914560)===n&&(m=jf+300-ai(),10<m)){if(Ln(l,n,ki,!Mn),yn(l,0)!==0)break e;l.timeoutHandle=iv(My.bind(null,l,s,on,pu,Tf,n,ki,Zr,Ga,Mn,2,-0,0),m);break e}My(l,s,on,pu,Tf,n,ki,Zr,Ga,Mn,0,-0,0)}}break}while(!0);ln(e)}function Df(e){on===null?on=e:on.push.apply(on,e)}function My(e,n,s,l,d,m,b,A,C,U,K,W,H){var Y=n.subtreeFlags;if((Y&8192||(Y&16785408)===16785408)&&(Do={stylesheets:null,count:0,unsuspend:__},Ay(n),n=T_(),n!==null)){e.cancelPendingCommit=n(Vy.bind(null,e,s,l,d,b,A,C,1,W,H)),Ln(e,m,b,!U);return}Vy(e,s,l,d,b,A,C,K,W,H)}function qA(e){for(var n=e;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var d=s[l],m=d.getSnapshot;d=d.value;try{if(!si(m(),d))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ln(e,n,s,l){n&=~Ef,n&=~Zr,e.suspendedLanes|=n,e.pingedLanes&=~n,l&&(e.warmLanes|=n),l=e.expirationTimes;for(var d=n;0<d;){var m=31-Rt(d),b=1<<m;l[m]=-1,d&=~b}s!==0&&se(e,s,n)}function gu(){return(ut&6)===0?(To(0),!1):!0}function Of(){if(ze!==null){if(et===0)var e=ze.return;else e=ze,jn=Yr=null,Ud(e),Ma=null,ao=0,e=ze;for(;e!==null;)ky(e.alternate,e),e=e.return;ze=null}}function Fa(e,n){e.finishedWork=null,e.finishedLanes=0;var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,l_(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Of(),Je=e,ze=s=rr(e.current,null),Ve=n,et=0,ui=null,Mn=!1,qa=nn(e,n),_f=!1,Ga=ki=Ef=Zr=ar=mt=0,on=Ao=null,Tf=!1,(n&8)!==0&&(n|=n&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=n;0<l;){var d=31-Rt(l),m=1<<d;n|=e[d],l&=~m}return zn=n,Vl(),s}function zy(e,n){De=null,G.H=sn,n===no?(n=X0(),et=3):n===I0?(n=X0(),et=4):et=n===Yg?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ui=n,ze===null&&(mt=1,su(e,Ai(n,e.current)))}function Ly(){var e=G.H;return G.H=sn,e===null?sn:e}function Py(){var e=G.A;return G.A=$A,e}function Mf(){mt=4,Mn||(Ve&4194176)!==Ve&&Ti.current!==null||(qa=!0),(ar&134217727)===0&&(Zr&134217727)===0||Je===null||Ln(Je,Ve,ki,!1)}function zf(e,n,s){var l=ut;ut|=2;var d=Ly(),m=Py();(Je!==e||Ve!==n)&&(pu=null,Fa(e,n)),n=!1;var b=mt;e:do try{if(et!==0&&ze!==null){var A=ze,C=ui;switch(et){case 8:Of(),b=6;break e;case 3:case 2:case 6:Ti.current===null&&(n=!0);var U=et;if(et=0,ui=null,Ia(e,A,C,U),s&&qa){b=0;break e}break;default:U=et,et=0,ui=null,Ia(e,A,C,U)}}GA(),b=mt;break}catch(K){zy(e,K)}while(!0);return n&&e.shellSuspendCounter++,jn=Yr=null,ut=l,G.H=d,G.A=m,ze===null&&(Je=null,Ve=0,Vl()),b}function GA(){for(;ze!==null;)Uy(ze)}function FA(e,n){var s=ut;ut|=2;var l=Ly(),d=Py();Je!==e||Ve!==n?(pu=null,hu=ai()+500,Fa(e,n)):qa=nn(e,n);e:do try{if(et!==0&&ze!==null){n=ze;var m=ui;t:switch(et){case 1:et=0,ui=null,Ia(e,n,m,1);break;case 2:if(Y0(m)){et=0,ui=null,Ny(n);break}n=function(){et===2&&Je===e&&(et=7),ln(e)},m.then(n,n);break e;case 3:et=7;break e;case 4:et=5;break e;case 7:Y0(m)?(et=0,ui=null,Ny(n)):(et=0,ui=null,Ia(e,n,m,7));break;case 5:var b=null;switch(ze.tag){case 26:b=ze.memoizedState;case 5:case 27:var A=ze;if(!b||hv(b)){et=0,ui=null;var C=A.sibling;if(C!==null)ze=C;else{var U=A.return;U!==null?(ze=U,yu(U)):ze=null}break t}}et=0,ui=null,Ia(e,n,m,5);break;case 6:et=0,ui=null,Ia(e,n,m,6);break;case 8:Of(),mt=6;break e;default:throw Error(a(462))}}IA();break}catch(K){zy(e,K)}while(!0);return jn=Yr=null,G.H=l,G.A=d,ut=s,ze!==null?0:(Je=null,Ve=0,Vl(),mt)}function IA(){for(;ze!==null&&!gn();)Uy(ze)}function Uy(e){var n=ay(e.alternate,e,zn);e.memoizedProps=e.pendingProps,n===null?yu(e):ze=n}function Ny(e){var n=e,s=n.alternate;switch(n.tag){case 15:case 0:n=Jg(s,n,n.pendingProps,n.type,void 0,Ve);break;case 11:n=Jg(s,n,n.pendingProps,n.type.render,n.ref,Ve);break;case 5:Ud(n);default:ky(s,n),n=ze=jy(n,zn),n=ay(s,n,zn)}e.memoizedProps=e.pendingProps,n===null?yu(e):ze=n}function Ia(e,n,s,l){jn=Yr=null,Ud(n),Ma=null,ao=0;var d=n.return;try{if(zA(e,d,n,s,Ve)){mt=1,su(e,Ai(s,e.current)),ze=null;return}}catch(m){if(d!==null)throw ze=d,m;mt=1,su(e,Ai(s,e.current)),ze=null;return}n.flags&32768?($e||l===1?e=!0:qa||(Ve&536870912)!==0?e=!1:(Mn=e=!0,(l===2||l===3||l===6)&&(l=Ti.current,l!==null&&l.tag===13&&(l.flags|=16384))),By(n,e)):yu(n)}function yu(e){var n=e;do{if((n.flags&32768)!==0){By(n,Mn);return}e=n.return;var s=BA(n.alternate,n,zn);if(s!==null){ze=s;return}if(n=n.sibling,n!==null){ze=n;return}ze=n=e}while(n!==null);mt===0&&(mt=5)}function By(e,n){do{var s=VA(e.alternate,e);if(s!==null){s.flags&=32767,ze=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(e=e.sibling,e!==null)){ze=e;return}ze=e=s}while(e!==null);mt=6,ze=null}function Vy(e,n,s,l,d,m,b,A,C,U){var K=G.T,W=re.p;try{re.p=2,G.T=null,YA(e,n,s,l,W,d,m,b,A,C,U)}finally{G.T=K,re.p=W}}function YA(e,n,s,l,d,m,b,A){do Ya();while(Wr!==null);if((ut&6)!==0)throw Error(a(327));var C=e.finishedWork;if(l=e.finishedLanes,C===null)return null;if(e.finishedWork=null,e.finishedLanes=0,C===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var U=C.lanes|C.childLanes;if(U|=Sd,ee(e,l,U,m,b,A),e===Je&&(ze=Je=null,Ve=0),(C.subtreeFlags&10256)===0&&(C.flags&10256)===0||mu||(mu=!0,Rf=U,Cf=s,ZA(kr,function(){return Ya(),null})),s=(C.flags&15990)!==0,(C.subtreeFlags&15990)!==0||s?(s=G.T,G.T=null,m=re.p,re.p=2,b=ut,ut|=4,PA(e,C),by(C,e),yA(If,e.containerInfo),Cu=!!Ff,If=Ff=null,e.current=C,gy(e,C.alternate,C),Cr(),ut=b,re.p=m,G.T=s):e.current=C,mu?(mu=!1,Wr=e,_o=l):$y(e,U),U=e.pendingLanes,U===0&&(sr=null),ed(C.stateNode),ln(e),n!==null)for(d=e.onRecoverableError,C=0;C<n.length;C++)U=n[C],d(U.value,{componentStack:U.stack});return(_o&3)!==0&&Ya(),U=e.pendingLanes,(l&4194218)!==0&&(U&42)!==0?e===kf?Eo++:(Eo=0,kf=e):Eo=0,To(0),null}function $y(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,oo(n)))}function Ya(){if(Wr!==null){var e=Wr,n=Rf;Rf=0;var s=we(_o),l=G.T,d=re.p;try{if(re.p=32>s?32:s,G.T=null,Wr===null)var m=!1;else{s=Cf,Cf=null;var b=Wr,A=_o;if(Wr=null,_o=0,(ut&6)!==0)throw Error(a(331));var C=ut;if(ut|=4,Ey(b.current),Sy(b,b.current,A,s),ut=C,To(0,!1),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(Gn,b)}catch{}m=!0}return m}finally{re.p=d,G.T=l,$y(e,n)}}return!1}function Hy(e,n,s){n=Ai(s,n),n=Zd(e.stateNode,n,2),e=er(e,n,2),e!==null&&(q(e,2),ln(e))}function Ze(e,n,s){if(e.tag===3)Hy(e,e,s);else for(;n!==null;){if(n.tag===3){Hy(n,e,s);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(sr===null||!sr.has(l))){e=Ai(s,e),s=Fg(2),l=er(n,s,2),l!==null&&(Ig(s,l,n,e),q(l,2),ln(l));break}}n=n.return}}function Lf(e,n,s){var l=e.pingCache;if(l===null){l=e.pingCache=new HA;var d=new Set;l.set(n,d)}else d=l.get(n),d===void 0&&(d=new Set,l.set(n,d));d.has(s)||(_f=!0,d.add(s),e=KA.bind(null,e,n,s),n.then(e,e))}function KA(e,n,s){var l=e.pingCache;l!==null&&l.delete(n),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,Je===e&&(Ve&s)===s&&(mt===4||mt===3&&(Ve&62914560)===Ve&&300>ai()-jf?(ut&2)===0&&Fa(e,0):Ef|=s,Ga===Ve&&(Ga=0)),ln(e)}function qy(e,n){n===0&&(n=z()),e=In(e,n),e!==null&&(q(e,n),ln(e))}function XA(e){var n=e.memoizedState,s=0;n!==null&&(s=n.retryLane),qy(e,s)}function QA(e,n){var s=0;switch(e.tag){case 13:var l=e.stateNode,d=e.memoizedState;d!==null&&(s=d.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(n),qy(e,s)}function ZA(e,n){return Vs(e,n)}var vu=null,Ka=null,Pf=!1,xu=!1,Uf=!1,Jr=0;function ln(e){e!==Ka&&e.next===null&&(Ka===null?vu=Ka=e:Ka=Ka.next=e),xu=!0,Pf||(Pf=!0,JA(WA))}function To(e,n){if(!Uf&&xu){Uf=!0;do for(var s=!1,l=vu;l!==null;){if(e!==0){var d=l.pendingLanes;if(d===0)var m=0;else{var b=l.suspendedLanes,A=l.pingedLanes;m=(1<<31-Rt(42|e)+1)-1,m&=d&~(b&~A),m=m&201326677?m&201326677|1:m?m|2:0}m!==0&&(s=!0,Iy(l,m))}else m=Ve,m=yn(l,l===Je?m:0),(m&3)===0||nn(l,m)||(s=!0,Iy(l,m));l=l.next}while(s);Uf=!1}}function WA(){xu=Pf=!1;var e=0;Jr!==0&&(o_()&&(e=Jr),Jr=0);for(var n=ai(),s=null,l=vu;l!==null;){var d=l.next,m=Gy(l,n);m===0?(l.next=null,s===null?vu=d:s.next=d,d===null&&(Ka=s)):(s=l,(e!==0||(m&3)!==0)&&(xu=!0)),l=d}To(e)}function Gy(e,n){for(var s=e.suspendedLanes,l=e.pingedLanes,d=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var b=31-Rt(m),A=1<<b,C=d[b];C===-1?((A&s)===0||(A&l)!==0)&&(d[b]=id(A,n)):C<=n&&(e.expiredLanes|=A),m&=~A}if(n=Je,s=Ve,s=yn(e,e===n?s:0),l=e.callbackNode,s===0||e===n&&et===2||e.cancelPendingCommit!==null)return l!==null&&l!==null&&$s(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||nn(e,s)){if(n=s&-s,n===e.callbackPriority)return n;switch(l!==null&&$s(l),we(s)){case 2:case 8:s=yi;break;case 32:s=kr;break;case 268435456:s=El;break;default:s=kr}return l=Fy.bind(null,e),s=Vs(s,l),e.callbackPriority=n,e.callbackNode=s,n}return l!==null&&l!==null&&$s(l),e.callbackPriority=2,e.callbackNode=null,2}function Fy(e,n){var s=e.callbackNode;if(Ya()&&e.callbackNode!==s)return null;var l=Ve;return l=yn(e,e===Je?l:0),l===0?null:(Oy(e,l,n),Gy(e,ai()),e.callbackNode!=null&&e.callbackNode===s?Fy.bind(null,e):null)}function Iy(e,n){if(Ya())return null;Oy(e,n,!0)}function JA(e){u_(function(){(ut&6)!==0?Vs(Ni,e):e()})}function Nf(){return Jr===0&&(Jr=Rl()),Jr}function Yy(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ml(""+e)}function Ky(e,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,e.id&&s.setAttribute("form",e.id),n.parentNode.insertBefore(s,n),e=new FormData(e),s.parentNode.removeChild(s),e}function e_(e,n,s,l,d){if(n==="submit"&&s&&s.stateNode===d){var m=Yy((d[ve]||null).action),b=l.submitter;b&&(n=(n=b[ve]||null)?Yy(n.formAction):b.getAttribute("formAction"),n!==null&&(m=n,b=null));var A=new Ul("action","action",null,l,d);e.push({event:A,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Jr!==0){var C=b?Ky(d,b):new FormData(d);Id(s,{pending:!0,data:C,method:d.method,action:m},null,C)}}else typeof m=="function"&&(A.preventDefault(),C=b?Ky(d,b):new FormData(d),Id(s,{pending:!0,data:C,method:d.method,action:m},m,C))},currentTarget:d}]})}}for(var Bf=0;Bf<V0.length;Bf++){var Vf=V0[Bf],t_=Vf.toLowerCase(),i_=Vf[0].toUpperCase()+Vf.slice(1);Vi(t_,"on"+i_)}Vi(L0,"onAnimationEnd"),Vi(P0,"onAnimationIteration"),Vi(U0,"onAnimationStart"),Vi("dblclick","onDoubleClick"),Vi("focusin","onFocus"),Vi("focusout","onBlur"),Vi(xA,"onTransitionRun"),Vi(bA,"onTransitionStart"),Vi(wA,"onTransitionCancel"),Vi(N0,"onTransitionEnd"),st("onMouseEnter",["mouseout","mouseover"]),st("onMouseLeave",["mouseout","mouseover"]),st("onPointerEnter",["pointerout","pointerover"]),st("onPointerLeave",["pointerout","pointerover"]),Be("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Be("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Be("onBeforeInput",["compositionend","keypress","textInput","paste"]),Be("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Be("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Be("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),n_=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(jo));function Xy(e,n){n=(n&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],d=l.event;l=l.listeners;e:{var m=void 0;if(n)for(var b=l.length-1;0<=b;b--){var A=l[b],C=A.instance,U=A.currentTarget;if(A=A.listener,C!==m&&d.isPropagationStopped())break e;m=A,d.currentTarget=U;try{m(d)}catch(K){au(K)}d.currentTarget=null,m=C}else for(b=0;b<l.length;b++){if(A=l[b],C=A.instance,U=A.currentTarget,A=A.listener,C!==m&&d.isPropagationStopped())break e;m=A,d.currentTarget=U;try{m(d)}catch(K){au(K)}d.currentTarget=null,m=C}}}}function Pe(e,n){var s=n[vt];s===void 0&&(s=n[vt]=new Set);var l=e+"__bubble";s.has(l)||(Qy(n,e,2,!1),s.add(l))}function $f(e,n,s){var l=0;n&&(l|=4),Qy(s,e,l,n)}var bu="_reactListening"+Math.random().toString(36).slice(2);function Hf(e){if(!e[bu]){e[bu]=!0,Or.forEach(function(s){s!=="selectionchange"&&(n_.has(s)||$f(s,!1,e),$f(s,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[bu]||(n[bu]=!0,$f("selectionchange",!1,n))}}function Qy(e,n,s,l){switch(xv(n)){case 2:var d=C_;break;case 8:d=k_;break;default:d=th}s=d.bind(null,n,s,e),d=void 0,!ud||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(d=!0),l?d!==void 0?e.addEventListener(n,s,{capture:!0,passive:d}):e.addEventListener(n,s,!0):d!==void 0?e.addEventListener(n,s,{passive:d}):e.addEventListener(n,s,!1)}function qf(e,n,s,l,d){var m=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var b=l.tag;if(b===3||b===4){var A=l.stateNode.containerInfo;if(A===d||A.nodeType===8&&A.parentNode===d)break;if(b===4)for(b=l.return;b!==null;){var C=b.tag;if((C===3||C===4)&&(C=b.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;b=b.return}for(;A!==null;){if(b=Bt(A),b===null)return;if(C=b.tag,C===5||C===6||C===26||C===27){l=m=b;continue e}A=A.parentNode}}l=l.return}d0(function(){var U=m,K=od(s),W=[];e:{var H=B0.get(e);if(H!==void 0){var Y=Ul,pe=e;switch(e){case"keypress":if(Ll(s)===0)break e;case"keydown":case"keyup":Y=Q2;break;case"focusin":pe="focus",Y=hd;break;case"focusout":pe="blur",Y=hd;break;case"beforeblur":case"afterblur":Y=hd;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=p0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=N2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=J2;break;case L0:case P0:case U0:Y=$2;break;case N0:Y=tA;break;case"scroll":case"scrollend":Y=P2;break;case"wheel":Y=nA;break;case"copy":case"cut":case"paste":Y=q2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=g0;break;case"toggle":case"beforetoggle":Y=aA}var Te=(n&4)!==0,gt=!Te&&(e==="scroll"||e==="scrollend"),N=Te?H!==null?H+"Capture":null:H;Te=[];for(var L=U,$;L!==null;){var Z=L;if($=Z.stateNode,Z=Z.tag,Z!==5&&Z!==26&&Z!==27||$===null||N===null||(Z=Fs(L,N),Z!=null&&Te.push(Ro(L,Z,$))),gt)break;L=L.return}0<Te.length&&(H=new Y(H,pe,null,s,K),W.push({event:H,listeners:Te}))}}if((n&7)===0){e:{if(H=e==="mouseover"||e==="pointerover",Y=e==="mouseout"||e==="pointerout",H&&s!==sd&&(pe=s.relatedTarget||s.fromElement)&&(Bt(pe)||pe[Ge]))break e;if((Y||H)&&(H=K.window===K?K:(H=K.ownerDocument)?H.defaultView||H.parentWindow:window,Y?(pe=s.relatedTarget||s.toElement,Y=U,pe=pe?Bt(pe):null,pe!==null&&(gt=X(pe),Te=pe.tag,pe!==gt||Te!==5&&Te!==27&&Te!==6)&&(pe=null)):(Y=null,pe=U),Y!==pe)){if(Te=p0,Z="onMouseLeave",N="onMouseEnter",L="mouse",(e==="pointerout"||e==="pointerover")&&(Te=g0,Z="onPointerLeave",N="onPointerEnter",L="pointer"),gt=Y==null?H:xn(Y),$=pe==null?H:xn(pe),H=new Te(Z,L+"leave",Y,s,K),H.target=gt,H.relatedTarget=$,Z=null,Bt(K)===U&&(Te=new Te(N,L+"enter",pe,s,K),Te.target=$,Te.relatedTarget=gt,Z=Te),gt=Z,Y&&pe)t:{for(Te=Y,N=pe,L=0,$=Te;$;$=Xa($))L++;for($=0,Z=N;Z;Z=Xa(Z))$++;for(;0<L-$;)Te=Xa(Te),L--;for(;0<$-L;)N=Xa(N),$--;for(;L--;){if(Te===N||N!==null&&Te===N.alternate)break t;Te=Xa(Te),N=Xa(N)}Te=null}else Te=null;Y!==null&&Zy(W,H,Y,Te,!1),pe!==null&&gt!==null&&Zy(W,gt,pe,Te,!0)}}e:{if(H=U?xn(U):window,Y=H.nodeName&&H.nodeName.toLowerCase(),Y==="select"||Y==="input"&&H.type==="file")var ce=_0;else if(S0(H))if(E0)ce=mA;else{ce=hA;var Me=fA}else Y=H.nodeName,!Y||Y.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?U&&ad(U.elementType)&&(ce=_0):ce=pA;if(ce&&(ce=ce(e,U))){A0(W,ce,s,K);break e}Me&&Me(e,H,U),e==="focusout"&&U&&H.type==="number"&&U.memoizedProps.value!=null&&rd(H,"number",H.value)}switch(Me=U?xn(U):window,e){case"focusin":(S0(Me)||Me.contentEditable==="true")&&(ja=Me,xd=U,Js=null);break;case"focusout":Js=xd=ja=null;break;case"mousedown":bd=!0;break;case"contextmenu":case"mouseup":case"dragend":bd=!1,M0(W,s,K);break;case"selectionchange":if(vA)break;case"keydown":case"keyup":M0(W,s,K)}var ge;if(md)e:{switch(e){case"compositionstart":var xe="onCompositionStart";break e;case"compositionend":xe="onCompositionEnd";break e;case"compositionupdate":xe="onCompositionUpdate";break e}xe=void 0}else Ta?b0(e,s)&&(xe="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(xe="onCompositionStart");xe&&(y0&&s.locale!=="ko"&&(Ta||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Ta&&(ge=f0()):(Fn=K,cd="value"in Fn?Fn.value:Fn.textContent,Ta=!0)),Me=wu(U,xe),0<Me.length&&(xe=new m0(xe,e,null,s,K),W.push({event:xe,listeners:Me}),ge?xe.data=ge:(ge=w0(s),ge!==null&&(xe.data=ge)))),(ge=oA?lA(e,s):uA(e,s))&&(xe=wu(U,"onBeforeInput"),0<xe.length&&(Me=new m0("onBeforeInput","beforeinput",null,s,K),W.push({event:Me,listeners:xe}),Me.data=ge)),e_(W,e,U,s,K)}Xy(W,n)})}function Ro(e,n,s){return{instance:e,listener:n,currentTarget:s}}function wu(e,n){for(var s=n+"Capture",l=[];e!==null;){var d=e,m=d.stateNode;d=d.tag,d!==5&&d!==26&&d!==27||m===null||(d=Fs(e,s),d!=null&&l.unshift(Ro(e,d,m)),d=Fs(e,n),d!=null&&l.push(Ro(e,d,m))),e=e.return}return l}function Xa(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Zy(e,n,s,l,d){for(var m=n._reactName,b=[];s!==null&&s!==l;){var A=s,C=A.alternate,U=A.stateNode;if(A=A.tag,C!==null&&C===l)break;A!==5&&A!==26&&A!==27||U===null||(C=U,d?(U=Fs(s,m),U!=null&&b.unshift(Ro(s,U,C))):d||(U=Fs(s,m),U!=null&&b.push(Ro(s,U,C)))),s=s.return}b.length!==0&&e.push({event:n,listeners:b})}var r_=/\r\n?/g,a_=/\u0000|\uFFFD/g;function Wy(e){return(typeof e=="string"?e:""+e).replace(r_,`
`).replace(a_,"")}function Jy(e,n){return n=Wy(n),Wy(e)===n}function Su(){}function Xe(e,n,s,l,d,m){switch(s){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||Aa(e,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&Aa(e,""+l);break;case"className":kl(e,"class",l);break;case"tabIndex":kl(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":kl(e,s,l);break;case"style":u0(e,l,m);break;case"data":if(n!=="object"){kl(e,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Ml(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(n!=="input"&&Xe(e,n,"name",d.name,d,null),Xe(e,n,"formEncType",d.formEncType,d,null),Xe(e,n,"formMethod",d.formMethod,d,null),Xe(e,n,"formTarget",d.formTarget,d,null)):(Xe(e,n,"encType",d.encType,d,null),Xe(e,n,"method",d.method,d,null),Xe(e,n,"target",d.target,d,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Ml(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=Su);break;case"onScroll":l!=null&&Pe("scroll",e);break;case"onScrollEnd":l!=null&&Pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(d.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=Ml(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":Pe("beforetoggle",e),Pe("toggle",e),wa(e,"popover",l);break;case"xlinkActuate":wn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":wn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":wn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":wn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":wn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":wn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":wn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":wn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":wn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":wa(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=z2.get(s)||s,wa(e,s,l))}}function Gf(e,n,s,l,d,m){switch(s){case"style":u0(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(d.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof l=="string"?Aa(e,l):(typeof l=="number"||typeof l=="bigint")&&Aa(e,""+l);break;case"onScroll":l!=null&&Pe("scroll",e);break;case"onScrollEnd":l!=null&&Pe("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Su);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Mr.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(d=s.endsWith("Capture"),n=s.slice(2,d?s.length-7:void 0),m=e[ve]||null,m=m!=null?m[s]:null,typeof m=="function"&&e.removeEventListener(n,m,d),typeof l=="function")){typeof m!="function"&&m!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(n,l,d);break e}s in e?e[s]=l:l===!0?e.setAttribute(s,""):wa(e,s,l)}}}function qt(e,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Pe("error",e),Pe("load",e);var l=!1,d=!1,m;for(m in s)if(s.hasOwnProperty(m)){var b=s[m];if(b!=null)switch(m){case"src":l=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Xe(e,n,m,b,s,null)}}d&&Xe(e,n,"srcSet",s.srcSet,s,null),l&&Xe(e,n,"src",s.src,s,null);return;case"input":Pe("invalid",e);var A=m=b=d=null,C=null,U=null;for(l in s)if(s.hasOwnProperty(l)){var K=s[l];if(K!=null)switch(l){case"name":d=K;break;case"type":b=K;break;case"checked":C=K;break;case"defaultChecked":U=K;break;case"value":m=K;break;case"defaultValue":A=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(a(137,n));break;default:Xe(e,n,l,K,s,null)}}a0(e,m,A,C,U,b,d,!1),Dl(e);return;case"select":Pe("invalid",e),l=b=m=null;for(d in s)if(s.hasOwnProperty(d)&&(A=s[d],A!=null))switch(d){case"value":m=A;break;case"defaultValue":b=A;break;case"multiple":l=A;default:Xe(e,n,d,A,s,null)}n=m,s=b,e.multiple=!!l,n!=null?Sa(e,!!l,n,!1):s!=null&&Sa(e,!!l,s,!0);return;case"textarea":Pe("invalid",e),m=d=l=null;for(b in s)if(s.hasOwnProperty(b)&&(A=s[b],A!=null))switch(b){case"value":l=A;break;case"defaultValue":d=A;break;case"children":m=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:Xe(e,n,b,A,s,null)}o0(e,l,d,m),Dl(e);return;case"option":for(C in s)if(s.hasOwnProperty(C)&&(l=s[C],l!=null))switch(C){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Xe(e,n,C,l,s,null)}return;case"dialog":Pe("cancel",e),Pe("close",e);break;case"iframe":case"object":Pe("load",e);break;case"video":case"audio":for(l=0;l<jo.length;l++)Pe(jo[l],e);break;case"image":Pe("error",e),Pe("load",e);break;case"details":Pe("toggle",e);break;case"embed":case"source":case"link":Pe("error",e),Pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(U in s)if(s.hasOwnProperty(U)&&(l=s[U],l!=null))switch(U){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Xe(e,n,U,l,s,null)}return;default:if(ad(n)){for(K in s)s.hasOwnProperty(K)&&(l=s[K],l!==void 0&&Gf(e,n,K,l,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(l=s[A],l!=null&&Xe(e,n,A,l,s,null))}function s_(e,n,s,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,m=null,b=null,A=null,C=null,U=null,K=null;for(Y in s){var W=s[Y];if(s.hasOwnProperty(Y)&&W!=null)switch(Y){case"checked":break;case"value":break;case"defaultValue":C=W;default:l.hasOwnProperty(Y)||Xe(e,n,Y,null,l,W)}}for(var H in l){var Y=l[H];if(W=s[H],l.hasOwnProperty(H)&&(Y!=null||W!=null))switch(H){case"type":m=Y;break;case"name":d=Y;break;case"checked":U=Y;break;case"defaultChecked":K=Y;break;case"value":b=Y;break;case"defaultValue":A=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(a(137,n));break;default:Y!==W&&Xe(e,n,H,Y,l,W)}}nd(e,b,A,C,U,K,m,d);return;case"select":Y=b=A=H=null;for(m in s)if(C=s[m],s.hasOwnProperty(m)&&C!=null)switch(m){case"value":break;case"multiple":Y=C;default:l.hasOwnProperty(m)||Xe(e,n,m,null,l,C)}for(d in l)if(m=l[d],C=s[d],l.hasOwnProperty(d)&&(m!=null||C!=null))switch(d){case"value":H=m;break;case"defaultValue":A=m;break;case"multiple":b=m;default:m!==C&&Xe(e,n,d,m,l,C)}n=A,s=b,l=Y,H!=null?Sa(e,!!s,H,!1):!!l!=!!s&&(n!=null?Sa(e,!!s,n,!0):Sa(e,!!s,s?[]:"",!1));return;case"textarea":Y=H=null;for(A in s)if(d=s[A],s.hasOwnProperty(A)&&d!=null&&!l.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Xe(e,n,A,null,l,d)}for(b in l)if(d=l[b],m=s[b],l.hasOwnProperty(b)&&(d!=null||m!=null))switch(b){case"value":H=d;break;case"defaultValue":Y=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(a(91));break;default:d!==m&&Xe(e,n,b,d,l,m)}s0(e,H,Y);return;case"option":for(var pe in s)if(H=s[pe],s.hasOwnProperty(pe)&&H!=null&&!l.hasOwnProperty(pe))switch(pe){case"selected":e.selected=!1;break;default:Xe(e,n,pe,null,l,H)}for(C in l)if(H=l[C],Y=s[C],l.hasOwnProperty(C)&&H!==Y&&(H!=null||Y!=null))switch(C){case"selected":e.selected=H&&typeof H!="function"&&typeof H!="symbol";break;default:Xe(e,n,C,H,l,Y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Te in s)H=s[Te],s.hasOwnProperty(Te)&&H!=null&&!l.hasOwnProperty(Te)&&Xe(e,n,Te,null,l,H);for(U in l)if(H=l[U],Y=s[U],l.hasOwnProperty(U)&&H!==Y&&(H!=null||Y!=null))switch(U){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(a(137,n));break;default:Xe(e,n,U,H,l,Y)}return;default:if(ad(n)){for(var gt in s)H=s[gt],s.hasOwnProperty(gt)&&H!==void 0&&!l.hasOwnProperty(gt)&&Gf(e,n,gt,void 0,l,H);for(K in l)H=l[K],Y=s[K],!l.hasOwnProperty(K)||H===Y||H===void 0&&Y===void 0||Gf(e,n,K,H,l,Y);return}}for(var N in s)H=s[N],s.hasOwnProperty(N)&&H!=null&&!l.hasOwnProperty(N)&&Xe(e,n,N,null,l,H);for(W in l)H=l[W],Y=s[W],!l.hasOwnProperty(W)||H===Y||H==null&&Y==null||Xe(e,n,W,H,l,Y)}var Ff=null,If=null;function Au(e){return e.nodeType===9?e:e.ownerDocument}function ev(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function tv(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Yf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Kf=null;function o_(){var e=window.event;return e&&e.type==="popstate"?e===Kf?!1:(Kf=e,!0):(Kf=null,!1)}var iv=typeof setTimeout=="function"?setTimeout:void 0,l_=typeof clearTimeout=="function"?clearTimeout:void 0,nv=typeof Promise=="function"?Promise:void 0,u_=typeof queueMicrotask=="function"?queueMicrotask:typeof nv<"u"?function(e){return nv.resolve(null).then(e).catch(c_)}:iv;function c_(e){setTimeout(function(){throw e})}function Xf(e,n){var s=n,l=0;do{var d=s.nextSibling;if(e.removeChild(s),d&&d.nodeType===8)if(s=d.data,s==="/$"){if(l===0){e.removeChild(d),Po(n);return}l--}else s!=="$"&&s!=="$?"&&s!=="$!"||l++;s=d}while(s);Po(n)}function Qf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Qf(s),vn(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function d_(e,n,s,l){for(;e.nodeType===1;){var d=s;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[vi])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==d.rel||e.getAttribute("href")!==(d.href==null?null:d.href)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||e.getAttribute("title")!==(d.title==null?null:d.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(d.src==null?null:d.src)||e.getAttribute("type")!==(d.type==null?null:d.type)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var m=d.name==null?null:""+d.name;if(d.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=qi(e.nextSibling),e===null)break}return null}function f_(e,n,s){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=qi(e.nextSibling),e===null))return null;return e}function qi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}function rv(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(n===0)return e;n--}else s==="/$"&&n++}e=e.previousSibling}return null}function av(e,n,s){switch(n=Au(s),e){case"html":if(e=n.documentElement,!e)throw Error(a(452));return e;case"head":if(e=n.head,!e)throw Error(a(453));return e;case"body":if(e=n.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}var Di=new Map,sv=new Set;function _u(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var Pn=re.d;re.d={f:h_,r:p_,D:m_,C:g_,L:y_,m:v_,X:b_,S:x_,M:w_};function h_(){var e=Pn.f(),n=gu();return e||n}function p_(e){var n=Vt(e);n!==null&&n.tag===5&&n.type==="form"?Mg(n):Pn.r(e)}var Qa=typeof document>"u"?null:document;function ov(e,n,s){var l=Qa;if(l&&typeof n=="string"&&n){var d=wi(n);d='link[rel="'+e+'"][href="'+d+'"]',typeof s=="string"&&(d+='[crossorigin="'+s+'"]'),sv.has(d)||(sv.add(d),e={rel:e,crossOrigin:s,href:n},l.querySelector(d)===null&&(n=l.createElement("link"),qt(n,"link",e),We(n),l.head.appendChild(n)))}}function m_(e){Pn.D(e),ov("dns-prefetch",e,null)}function g_(e,n){Pn.C(e,n),ov("preconnect",e,n)}function y_(e,n,s){Pn.L(e,n,s);var l=Qa;if(l&&e&&n){var d='link[rel="preload"][as="'+wi(n)+'"]';n==="image"&&s&&s.imageSrcSet?(d+='[imagesrcset="'+wi(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(d+='[imagesizes="'+wi(s.imageSizes)+'"]')):d+='[href="'+wi(e)+'"]';var m=d;switch(n){case"style":m=Za(e);break;case"script":m=Wa(e)}Di.has(m)||(e=te({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:e,as:n},s),Di.set(m,e),l.querySelector(d)!==null||n==="style"&&l.querySelector(Co(m))||n==="script"&&l.querySelector(ko(m))||(n=l.createElement("link"),qt(n,"link",e),We(n),l.head.appendChild(n)))}}function v_(e,n){Pn.m(e,n);var s=Qa;if(s&&e){var l=n&&typeof n.as=="string"?n.as:"script",d='link[rel="modulepreload"][as="'+wi(l)+'"][href="'+wi(e)+'"]',m=d;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Wa(e)}if(!Di.has(m)&&(e=te({rel:"modulepreload",href:e},n),Di.set(m,e),s.querySelector(d)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(ko(m)))return}l=s.createElement("link"),qt(l,"link",e),We(l),s.head.appendChild(l)}}}function x_(e,n,s){Pn.S(e,n,s);var l=Qa;if(l&&e){var d=xi(l).hoistableStyles,m=Za(e);n=n||"default";var b=d.get(m);if(!b){var A={loading:0,preload:null};if(b=l.querySelector(Co(m)))A.loading=5;else{e=te({rel:"stylesheet",href:e,"data-precedence":n},s),(s=Di.get(m))&&Zf(e,s);var C=b=l.createElement("link");We(C),qt(C,"link",e),C._p=new Promise(function(U,K){C.onload=U,C.onerror=K}),C.addEventListener("load",function(){A.loading|=1}),C.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Eu(b,n,l)}b={type:"stylesheet",instance:b,count:1,state:A},d.set(m,b)}}}function b_(e,n){Pn.X(e,n);var s=Qa;if(s&&e){var l=xi(s).hoistableScripts,d=Wa(e),m=l.get(d);m||(m=s.querySelector(ko(d)),m||(e=te({src:e,async:!0},n),(n=Di.get(d))&&Wf(e,n),m=s.createElement("script"),We(m),qt(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(d,m))}}function w_(e,n){Pn.M(e,n);var s=Qa;if(s&&e){var l=xi(s).hoistableScripts,d=Wa(e),m=l.get(d);m||(m=s.querySelector(ko(d)),m||(e=te({src:e,async:!0,type:"module"},n),(n=Di.get(d))&&Wf(e,n),m=s.createElement("script"),We(m),qt(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(d,m))}}function lv(e,n,s,l){var d=(d=Ji.current)?_u(d):null;if(!d)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=Za(s.href),s=xi(d).hoistableStyles,l=s.get(n),l||(l={type:"style",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Za(s.href);var m=xi(d).hoistableStyles,b=m.get(e);if(b||(d=d.ownerDocument||d,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,b),(m=d.querySelector(Co(e)))&&!m._p&&(b.instance=m,b.state.loading=5),Di.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Di.set(e,s),m||S_(d,e,s,b.state))),n&&l===null)throw Error(a(528,""));return b}if(n&&l!==null)throw Error(a(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Wa(s),s=xi(d).hoistableScripts,l=s.get(n),l||(l={type:"script",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Za(e){return'href="'+wi(e)+'"'}function Co(e){return'link[rel="stylesheet"]['+e+"]"}function uv(e){return te({},e,{"data-precedence":e.precedence,precedence:null})}function S_(e,n,s,l){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=e.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),qt(n,"link",s),We(n),e.head.appendChild(n))}function Wa(e){return'[src="'+wi(e)+'"]'}function ko(e){return"script[async]"+e}function cv(e,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var l=e.querySelector('style[data-href~="'+wi(s.href)+'"]');if(l)return n.instance=l,We(l),l;var d=te({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),We(l),qt(l,"style",d),Eu(l,s.precedence,e),n.instance=l;case"stylesheet":d=Za(s.href);var m=e.querySelector(Co(d));if(m)return n.state.loading|=4,n.instance=m,We(m),m;l=uv(s),(d=Di.get(d))&&Zf(l,d),m=(e.ownerDocument||e).createElement("link"),We(m);var b=m;return b._p=new Promise(function(A,C){b.onload=A,b.onerror=C}),qt(m,"link",l),n.state.loading|=4,Eu(m,s.precedence,e),n.instance=m;case"script":return m=Wa(s.src),(d=e.querySelector(ko(m)))?(n.instance=d,We(d),d):(l=s,(d=Di.get(m))&&(l=te({},s),Wf(l,d)),e=e.ownerDocument||e,d=e.createElement("script"),We(d),qt(d,"link",l),e.head.appendChild(d),n.instance=d);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,Eu(l,s.precedence,e));return n.instance}function Eu(e,n,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=l.length?l[l.length-1]:null,m=d,b=0;b<l.length;b++){var A=l[b];if(A.dataset.precedence===n)m=A;else if(m!==d)break}m?m.parentNode.insertBefore(e,m.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(e,n.firstChild))}function Zf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Wf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Tu=null;function dv(e,n,s){if(Tu===null){var l=new Map,d=Tu=new Map;d.set(s,l)}else d=Tu,l=d.get(s),l||(l=new Map,d.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),d=0;d<s.length;d++){var m=s[d];if(!(m[vi]||m[fe]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var b=m.getAttribute(n)||"";b=e+b;var A=l.get(b);A?A.push(m):l.set(b,[m])}}return l}function fv(e,n,s){e=e.ownerDocument||e,e.head.insertBefore(s,n==="title"?e.querySelector("head > title"):null)}function A_(e,n,s){if(s===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function hv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Do=null;function __(){}function E_(e,n,s){if(Do===null)throw Error(a(475));var l=Do;if(n.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var d=Za(s.href),m=e.querySelector(Co(d));if(m){e=m._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=ju.bind(l),e.then(l,l)),n.state.loading|=4,n.instance=m,We(m);return}m=e.ownerDocument||e,s=uv(s),(d=Di.get(d))&&Zf(s,d),m=m.createElement("link"),We(m);var b=m;b._p=new Promise(function(A,C){b.onload=A,b.onerror=C}),qt(m,"link",s),n.instance=m}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(l.count++,n=ju.bind(l),e.addEventListener("load",n),e.addEventListener("error",n))}}function T_(){if(Do===null)throw Error(a(475));var e=Do;return e.stylesheets&&e.count===0&&Jf(e,e.stylesheets),0<e.count?function(n){var s=setTimeout(function(){if(e.stylesheets&&Jf(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(s)}}:null}function ju(){if(this.count--,this.count===0){if(this.stylesheets)Jf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ru=null;function Jf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ru=new Map,n.forEach(j_,e),Ru=null,ju.call(e))}function j_(e,n){if(!(n.state.loading&4)){var s=Ru.get(e);if(s)var l=s.get(null);else{s=new Map,Ru.set(e,s);for(var d=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<d.length;m++){var b=d[m];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(s.set(b.dataset.precedence,b),l=b)}l&&s.set(null,l)}d=n.instance,b=d.getAttribute("data-precedence"),m=s.get(b)||l,m===l&&s.set(null,d),s.set(b,d),this.count++,l=ju.bind(this),d.addEventListener("load",l),d.addEventListener("error",l),m?m.parentNode.insertBefore(d,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(d,e.firstChild)),n.state.loading|=4}}var Oo={$$typeof:w,Provider:null,Consumer:null,_currentValue:_e,_currentValue2:_e,_threadCount:0};function R_(e,n,s,l,d,m,b,A){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=B(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=B(0),this.hiddenUpdates=B(null),this.identifierPrefix=l,this.onUncaughtError=d,this.onCaughtError=m,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function pv(e,n,s,l,d,m,b,A,C,U,K,W){return e=new R_(e,n,s,b,A,C,U,W),n=1,m===!0&&(n|=24),m=Ci(3,null,null,n),e.current=m,m.stateNode=e,n=kd(),n.refCount++,e.pooledCache=n,n.refCount++,m.memoizedState={element:l,isDehydrated:s,cache:n},df(m),e}function mv(e){return e?(e=ka,e):ka}function gv(e,n,s,l,d,m){d=mv(d),l.context===null?l.context=d:l.pendingContext=d,l=Jn(n),l.payload={element:s},m=m===void 0?null:m,m!==null&&(l.callback=m),s=er(e,l,n),s!==null&&(Wt(s,e,n),mo(s,e,n))}function yv(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<n?s:n}}function eh(e,n){yv(e,n),(e=e.alternate)&&yv(e,n)}function vv(e){if(e.tag===13){var n=In(e,67108864);n!==null&&Wt(n,e,67108864),eh(e,67108864)}}var Cu=!0;function C_(e,n,s,l){var d=G.T;G.T=null;var m=re.p;try{re.p=2,th(e,n,s,l)}finally{re.p=m,G.T=d}}function k_(e,n,s,l){var d=G.T;G.T=null;var m=re.p;try{re.p=8,th(e,n,s,l)}finally{re.p=m,G.T=d}}function th(e,n,s,l){if(Cu){var d=ih(l);if(d===null)qf(e,n,l,ku,s),bv(e,l);else if(O_(d,e,n,s,l))l.stopPropagation();else if(bv(e,l),n&4&&-1<D_.indexOf(e)){for(;d!==null;){var m=Vt(d);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var b=tn(m.pendingLanes);if(b!==0){var A=m;for(A.pendingLanes|=2,A.entangledLanes|=2;b;){var C=1<<31-Rt(b);A.entanglements[1]|=C,b&=~C}ln(m),(ut&6)===0&&(hu=ai()+500,To(0))}}break;case 13:A=In(m,2),A!==null&&Wt(A,m,2),gu(),eh(m,2)}if(m=ih(l),m===null&&qf(e,n,l,ku,s),m===d)break;d=m}d!==null&&l.stopPropagation()}else qf(e,n,l,null,s)}}function ih(e){return e=od(e),nh(e)}var ku=null;function nh(e){if(ku=null,e=Bt(e),e!==null){var n=X(e);if(n===null)e=null;else{var s=n.tag;if(s===13){if(e=ne(n),e!==null)return e;e=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ku=e,null}function xv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Hs()){case Ni:return 2;case yi:return 8;case kr:case qs:return 32;case El:return 268435456;default:return 32}default:return 32}}var rh=!1,or=null,lr=null,ur=null,Mo=new Map,zo=new Map,cr=[],D_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function bv(e,n){switch(e){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":Mo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":zo.delete(n.pointerId)}}function Lo(e,n,s,l,d,m){return e===null||e.nativeEvent!==m?(e={blockedOn:n,domEventName:s,eventSystemFlags:l,nativeEvent:m,targetContainers:[d]},n!==null&&(n=Vt(n),n!==null&&vv(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,d!==null&&n.indexOf(d)===-1&&n.push(d),e)}function O_(e,n,s,l,d){switch(n){case"focusin":return or=Lo(or,e,n,s,l,d),!0;case"dragenter":return lr=Lo(lr,e,n,s,l,d),!0;case"mouseover":return ur=Lo(ur,e,n,s,l,d),!0;case"pointerover":var m=d.pointerId;return Mo.set(m,Lo(Mo.get(m)||null,e,n,s,l,d)),!0;case"gotpointercapture":return m=d.pointerId,zo.set(m,Lo(zo.get(m)||null,e,n,s,l,d)),!0}return!1}function wv(e){var n=Bt(e.target);if(n!==null){var s=X(n);if(s!==null){if(n=s.tag,n===13){if(n=ne(s),n!==null){e.blockedOn=n,de(e.priority,function(){if(s.tag===13){var l=ci(),d=In(s,l);d!==null&&Wt(d,s,l),eh(s,l)}});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Du(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var s=ih(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);sd=l,s.target.dispatchEvent(l),sd=null}else return n=Vt(s),n!==null&&vv(n),e.blockedOn=s,!1;n.shift()}return!0}function Sv(e,n,s){Du(e)&&s.delete(n)}function M_(){rh=!1,or!==null&&Du(or)&&(or=null),lr!==null&&Du(lr)&&(lr=null),ur!==null&&Du(ur)&&(ur=null),Mo.forEach(Sv),zo.forEach(Sv)}function Ou(e,n){e.blockedOn===n&&(e.blockedOn=null,rh||(rh=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,M_)))}var Mu=null;function Av(e){Mu!==e&&(Mu=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Mu===e&&(Mu=null);for(var n=0;n<e.length;n+=3){var s=e[n],l=e[n+1],d=e[n+2];if(typeof l!="function"){if(nh(l||s)===null)continue;break}var m=Vt(s);m!==null&&(e.splice(n,3),n-=3,Id(m,{pending:!0,data:d,method:s.method,action:l},l,d))}}))}function Po(e){function n(C){return Ou(C,e)}or!==null&&Ou(or,e),lr!==null&&Ou(lr,e),ur!==null&&Ou(ur,e),Mo.forEach(n),zo.forEach(n);for(var s=0;s<cr.length;s++){var l=cr[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<cr.length&&(s=cr[0],s.blockedOn===null);)wv(s),s.blockedOn===null&&cr.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var d=s[l],m=s[l+1],b=d[ve]||null;if(typeof m=="function")b||Av(s);else if(b){var A=null;if(m&&m.hasAttribute("formAction")){if(d=m,b=m[ve]||null)A=b.formAction;else if(nh(d)!==null)continue}else A=b.action;typeof A=="function"?s[l+1]=A:(s.splice(l,3),l-=3),Av(s)}}}function ah(e){this._internalRoot=e}zu.prototype.render=ah.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));var s=n.current,l=ci();gv(s,l,e,n,null,null)},zu.prototype.unmount=ah.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;e.tag===0&&Ya(),gv(e.current,2,null,e,null,null),gu(),n[Ge]=null}};function zu(e){this._internalRoot=e}zu.prototype.unstable_scheduleHydration=function(e){if(e){var n=ue();e={blockedOn:null,target:e,priority:n};for(var s=0;s<cr.length&&n!==0&&n<cr[s].priority;s++);cr.splice(s,0,e),s===0&&wv(e)}};var _v=t.version;if(_v!=="19.0.0")throw Error(a(527,_v,"19.0.0"));re.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=Q(n),e=e!==null?oe(e):null,e=e===null?null:e.stateNode,e};var z_={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:G,findFiberByHostInstance:Bt,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lu.isDisabled&&Lu.supportsFiber)try{Gn=Lu.inject(z_),Ft=Lu}catch{}}return No.createRoot=function(e,n){if(!o(e))throw Error(a(299));var s=!1,l="",d=$g,m=Hg,b=qg,A=null;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(d=n.onUncaughtError),n.onCaughtError!==void 0&&(m=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(A=n.unstable_transitionCallbacks)),n=pv(e,1,!1,null,null,s,l,d,m,b,A,null),e[Ge]=n.current,Hf(e.nodeType===8?e.parentNode:e),new ah(n)},No.hydrateRoot=function(e,n,s){if(!o(e))throw Error(a(299));var l=!1,d="",m=$g,b=Hg,A=qg,C=null,U=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(b=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(C=s.unstable_transitionCallbacks),s.formState!==void 0&&(U=s.formState)),n=pv(e,1,!0,n,s??null,l,d,m,b,A,C,U),n.context=mv(null),s=n.current,l=ci(),d=Jn(l),d.callback=null,er(s,d,l),n.current.lanes=l,q(n,l),ln(n),e[Ge]=n.current,Hf(e),new zu(n)},No.version="19.0.0",No}var zv;function G_(){if(zv)return lh.exports;zv=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),lh.exports=q_(),lh.exports}var F_=G_(),Bo={},Lv;function I_(){if(Lv)return Bo;Lv=1,Object.defineProperty(Bo,"__esModule",{value:!0}),Bo.parse=c,Bo.serialize=p;const i=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,r=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,a=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,u=(()=>{const x=function(){};return x.prototype=Object.create(null),x})();function c(x,w){const S=new u,T=x.length;if(T<2)return S;const E=(w==null?void 0:w.decode)||g;let j=0;do{const D=x.indexOf("=",j);if(D===-1)break;const M=x.indexOf(";",j),V=M===-1?T:M;if(D>V){j=x.lastIndexOf(";",D-1)+1;continue}const P=h(x,j,D),R=f(x,D,P),F=x.slice(P,R);if(S[F]===void 0){let I=h(x,D+1,V),G=f(x,V,I);const te=E(x.slice(I,G));S[F]=te}j=V+1}while(j<T);return S}function h(x,w,S){do{const T=x.charCodeAt(w);if(T!==32&&T!==9)return w}while(++w<S);return S}function f(x,w,S){for(;w>S;){const T=x.charCodeAt(--w);if(T!==32&&T!==9)return w+1}return S}function p(x,w,S){const T=(S==null?void 0:S.encode)||encodeURIComponent;if(!i.test(x))throw new TypeError(`argument name is invalid: ${x}`);const E=T(w);if(!t.test(E))throw new TypeError(`argument val is invalid: ${w}`);let j=x+"="+E;if(!S)return j;if(S.maxAge!==void 0){if(!Number.isInteger(S.maxAge))throw new TypeError(`option maxAge is invalid: ${S.maxAge}`);j+="; Max-Age="+S.maxAge}if(S.domain){if(!r.test(S.domain))throw new TypeError(`option domain is invalid: ${S.domain}`);j+="; Domain="+S.domain}if(S.path){if(!a.test(S.path))throw new TypeError(`option path is invalid: ${S.path}`);j+="; Path="+S.path}if(S.expires){if(!v(S.expires)||!Number.isFinite(S.expires.valueOf()))throw new TypeError(`option expires is invalid: ${S.expires}`);j+="; Expires="+S.expires.toUTCString()}if(S.httpOnly&&(j+="; HttpOnly"),S.secure&&(j+="; Secure"),S.partitioned&&(j+="; Partitioned"),S.priority)switch(typeof S.priority=="string"?S.priority.toLowerCase():void 0){case"low":j+="; Priority=Low";break;case"medium":j+="; Priority=Medium";break;case"high":j+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${S.priority}`)}if(S.sameSite)switch(typeof S.sameSite=="string"?S.sameSite.toLowerCase():S.sameSite){case!0:case"strict":j+="; SameSite=Strict";break;case"lax":j+="; SameSite=Lax";break;case"none":j+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${S.sameSite}`)}return j}function g(x){if(x.indexOf("%")===-1)return x;try{return decodeURIComponent(x)}catch{return x}}function v(x){return o.call(x)==="[object Date]"}return Bo}I_();/**
 * react-router v7.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Pv="popstate";function Y_(i={}){function t(o,u){let{pathname:c="/",search:h="",hash:f=""}=Hn(o.location.hash.substring(1));return!c.startsWith("/")&&!c.startsWith(".")&&(c="/"+c),al("",{pathname:c,search:h,hash:f},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function r(o,u){let c=o.document.querySelector("base"),h="";if(c&&c.getAttribute("href")){let f=o.location.href,p=f.indexOf("#");h=p===-1?f:f.slice(0,p)}return h+"#"+(typeof u=="string"?u:Ar(u))}function a(o,u){Ut(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(u)})`)}return X_(t,r,a,i)}function Ue(i,t){if(i===!1||i===null||typeof i>"u")throw new Error(t)}function Ut(i,t){if(!i){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function K_(){return Math.random().toString(36).substring(2,10)}function Uv(i,t){return{usr:i.state,key:i.key,idx:t}}function al(i,t,r=null,a){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof t=="string"?Hn(t):t,state:r,key:t&&t.key||a||K_()}}function Ar({pathname:i="/",search:t="",hash:r=""}){return t&&t!=="?"&&(i+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(i+=r.charAt(0)==="#"?r:"#"+r),i}function Hn(i){let t={};if(i){let r=i.indexOf("#");r>=0&&(t.hash=i.substring(r),i=i.substring(0,r));let a=i.indexOf("?");a>=0&&(t.search=i.substring(a),i=i.substring(0,a)),i&&(t.pathname=i)}return t}function X_(i,t,r,a={}){let{window:o=document.defaultView,v5Compat:u=!1}=a,c=o.history,h="POP",f=null,p=g();p==null&&(p=0,c.replaceState({...c.state,idx:p},""));function g(){return(c.state||{idx:null}).idx}function v(){h="POP";let E=g(),j=E==null?null:E-p;p=E,f&&f({action:h,location:T.location,delta:j})}function x(E,j){h="PUSH";let D=al(T.location,E,j);r&&r(D,E),p=g()+1;let M=Uv(D,p),V=T.createHref(D);try{c.pushState(M,"",V)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;o.location.assign(V)}u&&f&&f({action:h,location:T.location,delta:1})}function w(E,j){h="REPLACE";let D=al(T.location,E,j);r&&r(D,E),p=g();let M=Uv(D,p),V=T.createHref(D);c.replaceState(M,"",V),u&&f&&f({action:h,location:T.location,delta:0})}function S(E){let j=o.location.origin!=="null"?o.location.origin:o.location.href,D=typeof E=="string"?E:Ar(E);return D=D.replace(/ $/,"%20"),Ue(j,`No window.location.(origin|href) available to create URL for href: ${D}`),new URL(D,j)}let T={get action(){return h},get location(){return i(o,c)},listen(E){if(f)throw new Error("A history only accepts one active listener");return o.addEventListener(Pv,v),f=E,()=>{o.removeEventListener(Pv,v),f=null}},createHref(E){return t(o,E)},createURL:S,encodeLocation(E){let j=S(E);return{pathname:j.pathname,search:j.search,hash:j.hash}},push:x,replace:w,go(E){return c.go(E)}};return T}var Q_=new Set(["lazy","caseSensitive","path","id","index","children"]);function Z_(i){return i.index===!0}function Ac(i,t,r=[],a={}){return i.map((o,u)=>{let c=[...r,String(u)],h=typeof o.id=="string"?o.id:c.join("-");if(Ue(o.index!==!0||!o.children,"Cannot specify children on an index route"),Ue(!a[h],`Found a route id collision on id "${h}".  Route id's must be globally unique within Data Router usages`),Z_(o)){let f={...o,...t(o),id:h};return a[h]=f,f}else{let f={...o,...t(o),id:h,children:void 0};return a[h]=f,o.children&&(f.children=Ac(o.children,t,c,a)),f}})}function xr(i,t,r="/"){return cc(i,t,r,!1)}function cc(i,t,r,a){let o=typeof t=="string"?Hn(t):t,u=Wi(o.pathname||"/",r);if(u==null)return null;let c=Fb(i);J_(c);let h=null;for(let f=0;h==null&&f<c.length;++f){let p=cE(u);h=lE(c[f],p,a)}return h}function W_(i,t){let{route:r,pathname:a,params:o}=i;return{id:r.id,pathname:a,params:o,data:t[r.id],handle:r.handle}}function Fb(i,t=[],r=[],a=""){let o=(u,c,h)=>{let f={relativePath:h===void 0?u.path||"":h,caseSensitive:u.caseSensitive===!0,childrenIndex:c,route:u};f.relativePath.startsWith("/")&&(Ue(f.relativePath.startsWith(a),`Absolute route path "${f.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),f.relativePath=f.relativePath.slice(a.length));let p=dn([a,f.relativePath]),g=r.concat(f);u.children&&u.children.length>0&&(Ue(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),Fb(u.children,t,g,p)),!(u.path==null&&!u.index)&&t.push({path:p,score:sE(p,u.index),routesMeta:g})};return i.forEach((u,c)=>{var h;if(u.path===""||!((h=u.path)!=null&&h.includes("?")))o(u,c);else for(let f of Ib(u.path))o(u,c,f)}),t}function Ib(i){let t=i.split("/");if(t.length===0)return[];let[r,...a]=t,o=r.endsWith("?"),u=r.replace(/\?$/,"");if(a.length===0)return o?[u,""]:[u];let c=Ib(a.join("/")),h=[];return h.push(...c.map(f=>f===""?u:[u,f].join("/"))),o&&h.push(...c),h.map(f=>i.startsWith("/")&&f===""?"/":f)}function J_(i){i.sort((t,r)=>t.score!==r.score?r.score-t.score:oE(t.routesMeta.map(a=>a.childrenIndex),r.routesMeta.map(a=>a.childrenIndex)))}var eE=/^:[\w-]+$/,tE=3,iE=2,nE=1,rE=10,aE=-2,Nv=i=>i==="*";function sE(i,t){let r=i.split("/"),a=r.length;return r.some(Nv)&&(a+=aE),t&&(a+=iE),r.filter(o=>!Nv(o)).reduce((o,u)=>o+(eE.test(u)?tE:u===""?nE:rE),a)}function oE(i,t){return i.length===t.length&&i.slice(0,-1).every((a,o)=>a===t[o])?i[i.length-1]-t[t.length-1]:0}function lE(i,t,r=!1){let{routesMeta:a}=i,o={},u="/",c=[];for(let h=0;h<a.length;++h){let f=a[h],p=h===a.length-1,g=u==="/"?t:t.slice(u.length)||"/",v=_c({path:f.relativePath,caseSensitive:f.caseSensitive,end:p},g),x=f.route;if(!v&&p&&r&&!a[a.length-1].route.index&&(v=_c({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},g)),!v)return null;Object.assign(o,v.params),c.push({params:o,pathname:dn([u,v.pathname]),pathnameBase:hE(dn([u,v.pathnameBase])),route:x}),v.pathnameBase!=="/"&&(u=dn([u,v.pathnameBase]))}return c}function _c(i,t){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[r,a]=uE(i.path,i.caseSensitive,i.end),o=t.match(r);if(!o)return null;let u=o[0],c=u.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:a.reduce((p,{paramName:g,isOptional:v},x)=>{if(g==="*"){let S=h[x]||"";c=u.slice(0,u.length-S.length).replace(/(.)\/+$/,"$1")}const w=h[x];return v&&!w?p[g]=void 0:p[g]=(w||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:c,pattern:i}}function uE(i,t=!1,r=!0){Ut(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let a=[],o="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,h,f)=>(a.push({paramName:h,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(a.push({paramName:"*"}),o+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":i!==""&&i!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),a]}function cE(i){try{return i.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ut(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),i}}function Wi(i,t){if(t==="/")return i;if(!i.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,a=i.charAt(r);return a&&a!=="/"?null:i.slice(r)||"/"}function dE(i,t="/"){let{pathname:r,search:a="",hash:o=""}=typeof i=="string"?Hn(i):i;return{pathname:r?r.startsWith("/")?r:fE(r,t):t,search:pE(a),hash:mE(o)}}function fE(i,t){let r=t.replace(/\/+$/,"").split("/");return i.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function fh(i,t,r,a){return`Cannot include a '${i}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Yb(i){return i.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Jp(i){let t=Yb(i);return t.map((r,a)=>a===t.length-1?r.pathname:r.pathnameBase)}function em(i,t,r,a=!1){let o;typeof i=="string"?o=Hn(i):(o={...i},Ue(!o.pathname||!o.pathname.includes("?"),fh("?","pathname","search",o)),Ue(!o.pathname||!o.pathname.includes("#"),fh("#","pathname","hash",o)),Ue(!o.search||!o.search.includes("#"),fh("#","search","hash",o)));let u=i===""||o.pathname==="",c=u?"/":o.pathname,h;if(c==null)h=r;else{let v=t.length-1;if(!a&&c.startsWith("..")){let x=c.split("/");for(;x[0]==="..";)x.shift(),v-=1;o.pathname=x.join("/")}h=v>=0?t[v]:"/"}let f=dE(o,h),p=c&&c!=="/"&&c.endsWith("/"),g=(u||c===".")&&r.endsWith("/");return!f.pathname.endsWith("/")&&(p||g)&&(f.pathname+="/"),f}var dn=i=>i.join("/").replace(/\/\/+/g,"/"),hE=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),pE=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,mE=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i,Ec=class{constructor(i,t,r,a=!1){this.status=i,this.statusText=t||"",this.internal=a,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}};function sl(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var Kb=["POST","PUT","PATCH","DELETE"],gE=new Set(Kb),yE=["GET",...Kb],vE=new Set(yE),xE=new Set([301,302,303,307,308]),bE=new Set([307,308]),hh={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},wE={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Vo={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},tm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,SE=i=>({hasErrorBoundary:!!i.hasErrorBoundary}),Xb="remix-router-transitions",Qb=Symbol("ResetLoaderData");function AE(i){const t=i.window?i.window:typeof window<"u"?window:void 0,r=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u";Ue(i.routes.length>0,"You must provide a non-empty routes array to createRouter");let a=i.mapRouteProperties||SE,o={},u=Ac(i.routes,a,void 0,o),c,h=i.basename||"/",f=i.dataStrategy||RE,p=i.patchRoutesOnNavigation,g={...i.future},v=null,x=new Set,w=null,S=null,T=null,E=i.hydrationData!=null,j=xr(u,i.history.location,h),D=!1,M=null;if(j==null&&!p){let z=zi(404,{pathname:i.history.location.pathname}),{matches:B,route:q}=Xv(u);j=B,M={[q.id]:z}}j&&!i.hydrationData&&yn(j,u,i.history.location.pathname).active&&(j=null);let V;if(j)if(j.some(z=>z.route.lazy))V=!1;else if(!j.some(z=>z.route.loader))V=!0;else{let z=i.hydrationData?i.hydrationData.loaderData:null,B=i.hydrationData?i.hydrationData.errors:null;if(B){let q=j.findIndex(ee=>B[ee.route.id]!==void 0);V=j.slice(0,q+1).every(ee=>!gp(ee.route,z,B))}else V=j.every(q=>!gp(q.route,z,B))}else{V=!1,j=[];let z=yn(null,u,i.history.location.pathname);z.active&&z.matches&&(D=!0,j=z.matches)}let P,R={historyAction:i.history.action,location:i.history.location,matches:j,initialized:V,navigation:hh,restoreScrollPosition:i.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:i.hydrationData&&i.hydrationData.loaderData||{},actionData:i.hydrationData&&i.hydrationData.actionData||null,errors:i.hydrationData&&i.hydrationData.errors||M,fetchers:new Map,blockers:new Map},F="POP",I=!1,G,te=!1,he=new Map,Ae=null,Ne=!1,Fe=!1,qe=new Set,J=new Map,ae=0,X=-1,ne=new Map,k=new Set,Q=new Map,oe=new Map,le=new Set,re=new Map,_e,ye=null;function dt(){if(v=i.history.listen(({action:z,location:B,delta:q})=>{if(_e){_e(),_e=void 0;return}Ut(re.size===0||q!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ee=jl({currentLocation:R.location,nextLocation:B,historyAction:z});if(ee&&q!=null){let se=new Promise(me=>{_e=me});i.history.go(q*-1),Rt(ee,{state:"blocked",location:B,proceed(){Rt(ee,{state:"proceeding",proceed:void 0,reset:void 0,location:B}),se.then(()=>i.history.go(q))},reset(){let me=new Map(R.blockers);me.set(ee,Vo),Ee({blockers:me})}});return}return gi(z,B)}),r){BE(t,he);let z=()=>VE(t,he);t.addEventListener("pagehide",z),Ae=()=>t.removeEventListener("pagehide",z)}return R.initialized||gi("POP",R.location,{initialHydration:!0}),P}function Oe(){v&&v(),Ae&&Ae(),x.clear(),G&&G.abort(),R.fetchers.forEach((z,B)=>qs(B)),R.blockers.forEach((z,B)=>Bi(B))}function Ie(z){return x.add(z),()=>x.delete(z)}function Ee(z,B={}){R={...R,...z};let q=[],ee=[];R.fetchers.forEach((se,me)=>{se.state==="idle"&&(le.has(me)?q.push(me):ee.push(me))}),le.forEach(se=>{!R.fetchers.has(se)&&!J.has(se)&&q.push(se)}),[...x].forEach(se=>se(R,{deletedFetchers:q,viewTransitionOpts:B.viewTransitionOpts,flushSync:B.flushSync===!0})),q.forEach(se=>qs(se)),ee.forEach(se=>R.fetchers.delete(se))}function ft(z,B,{flushSync:q}={}){var ie,fe;let ee=R.actionData!=null&&R.navigation.formMethod!=null&&Yi(R.navigation.formMethod)&&R.navigation.state==="loading"&&((ie=z.state)==null?void 0:ie._isRedirect)!==!0,se;B.actionData?Object.keys(B.actionData).length>0?se=B.actionData:se=null:ee?se=R.actionData:se=null;let me=B.loaderData?Yv(R.loaderData,B.loaderData,B.matches||[],B.errors):R.loaderData,we=R.blockers;we.size>0&&(we=new Map(we),we.forEach((ve,Ge)=>we.set(Ge,Vo)));let ue=I===!0||R.navigation.formMethod!=null&&Yi(R.navigation.formMethod)&&((fe=z.state)==null?void 0:fe._isRedirect)!==!0;c&&(u=c,c=void 0),Ne||F==="POP"||(F==="PUSH"?i.history.push(z,z.state):F==="REPLACE"&&i.history.replace(z,z.state));let de;if(F==="POP"){let ve=he.get(R.location.pathname);ve&&ve.has(z.pathname)?de={currentLocation:R.location,nextLocation:z}:he.has(z.pathname)&&(de={currentLocation:z,nextLocation:R.location})}else if(te){let ve=he.get(R.location.pathname);ve?ve.add(z.pathname):(ve=new Set([z.pathname]),he.set(R.location.pathname,ve)),de={currentLocation:R.location,nextLocation:z}}Ee({...B,actionData:se,loaderData:me,historyAction:F,location:z,initialized:!0,navigation:hh,revalidation:"idle",restoreScrollPosition:tn(z,B.matches||R.matches),preventScrollReset:ue,blockers:we},{viewTransitionOpts:de,flushSync:q===!0}),F="POP",I=!1,te=!1,Ne=!1,Fe=!1,ye==null||ye.resolve(),ye=null}async function Nt(z,B){if(typeof z=="number"){i.history.go(z);return}let q=mp(R.location,R.matches,h,z,B==null?void 0:B.fromRouteId,B==null?void 0:B.relative),{path:ee,submission:se,error:me}=Bv(!1,q,B),we=R.location,ue=al(R.location,ee,B&&B.state);ue={...ue,...i.history.encodeLocation(ue)};let de=B&&B.replace!=null?B.replace:void 0,ie="PUSH";de===!0?ie="REPLACE":de===!1||se!=null&&Yi(se.formMethod)&&se.formAction===R.location.pathname+R.location.search&&(ie="REPLACE");let fe=B&&"preventScrollReset"in B?B.preventScrollReset===!0:void 0,ve=(B&&B.flushSync)===!0,Ge=jl({currentLocation:we,nextLocation:ue,historyAction:ie});if(Ge){Rt(Ge,{state:"blocked",location:ue,proceed(){Rt(Ge,{state:"proceeding",proceed:void 0,reset:void 0,location:ue}),Nt(z,B)},reset(){let vt=new Map(R.blockers);vt.set(Ge,Vo),Ee({blockers:vt})}});return}await gi(ie,ue,{submission:se,pendingError:me,preventScrollReset:fe,replace:B&&B.replace,enableViewTransition:B&&B.viewTransition,flushSync:ve})}function Ji(){ye||(ye=$E()),Hs(),Ee({revalidation:"loading"});let z=ye.promise;return R.navigation.state==="submitting"?z:R.navigation.state==="idle"?(gi(R.historyAction,R.location,{startUninterruptedRevalidation:!0}),z):(gi(F||R.historyAction,R.navigation.location,{overrideNavigation:R.navigation,enableViewTransition:te===!0}),z)}async function gi(z,B,q){G&&G.abort(),G=null,F=z,Ne=(q&&q.startUninterruptedRevalidation)===!0,ba(R.location,R.matches),I=(q&&q.preventScrollReset)===!0,te=(q&&q.enableViewTransition)===!0;let ee=c||u,se=q&&q.overrideNavigation,me=q!=null&&q.initialHydration&&R.matches&&R.matches.length>0&&!D?R.matches:xr(ee,B,h),we=(q&&q.flushSync)===!0;if(me&&R.initialized&&!Fe&&zE(R.location,B)&&!(q&&q.submission&&Yi(q.submission.formMethod))){ft(B,{matches:me},{flushSync:we});return}let ue=yn(me,ee,B.pathname);if(ue.active&&ue.matches&&(me=ue.matches),!me){let{error:nt,notFoundMatches:Qe,route:ht}=Gs(B.pathname);ft(B,{matches:Qe,loaderData:{},errors:{[ht.id]:nt}},{flushSync:we});return}G=new AbortController;let de=Ja(i.history,B,G.signal,q&&q.submission),ie;if(q&&q.pendingError)ie=[oa(me).route.id,{type:"error",error:q.pendingError}];else if(q&&q.submission&&Yi(q.submission.formMethod)){let nt=await ya(de,B,q.submission,me,ue.active,{replace:q.replace,flushSync:we});if(nt.shortCircuited)return;if(nt.pendingActionResult){let[Qe,ht]=nt.pendingActionResult;if(pi(ht)&&sl(ht.error)&&ht.error.status===404){G=null,ft(B,{matches:nt.matches,loaderData:{},errors:{[Qe]:ht.error}});return}}me=nt.matches||me,ie=nt.pendingActionResult,se=ph(B,q.submission),we=!1,ue.active=!1,de=Ja(i.history,de.url,de.signal)}let{shortCircuited:fe,matches:ve,loaderData:Ge,errors:vt}=await qn(de,B,me,ue.active,se,q&&q.submission,q&&q.fetcherSubmission,q&&q.replace,q&&q.initialHydration===!0,we,ie);fe||(G=null,ft(B,{matches:ve||me,...Kv(ie),loaderData:Ge,errors:vt}))}async function ya(z,B,q,ee,se,me={}){Hs();let we=UE(B,q);if(Ee({navigation:we},{flushSync:me.flushSync===!0}),se){let ie=await nn(ee,B.pathname,z.signal);if(ie.type==="aborted")return{shortCircuited:!0};if(ie.type==="error"){let fe=oa(ie.partialMatches).route.id;return{matches:ie.partialMatches,pendingActionResult:[fe,{type:"error",error:ie.error}]}}else if(ie.matches)ee=ie.matches;else{let{notFoundMatches:fe,error:ve,route:Ge}=Gs(B.pathname);return{matches:fe,pendingActionResult:[Ge.id,{type:"error",error:ve}]}}}let ue,de=Io(ee,B);if(!de.route.action&&!de.route.lazy)ue={type:"error",error:zi(405,{method:z.method,pathname:B.pathname,routeId:de.route.id})};else if(ue=(await Cr("action",R,z,[de],ee,null))[de.route.id],z.signal.aborted)return{shortCircuited:!0};if(ua(ue)){let ie;return me&&me.replace!=null?ie=me.replace:ie=Gv(ue.response.headers.get("Location"),new URL(z.url),h)===R.location.pathname+R.location.search,await gn(z,ue,!0,{submission:q,replace:ie}),{shortCircuited:!0}}if(pi(ue)){let ie=oa(ee,de.route.id);return(me&&me.replace)!==!0&&(F="PUSH"),{matches:ee,pendingActionResult:[ie.route.id,ue]}}return{matches:ee,pendingActionResult:[de.route.id,ue]}}async function qn(z,B,q,ee,se,me,we,ue,de,ie,fe){let ve=se||ph(B,me),Ge=me||we||Zv(ve),vt=!Ne&&!de;if(ee){if(vt){let st=va(fe);Ee({navigation:ve,...st!==void 0?{actionData:st}:{}},{flushSync:ie})}let Be=await nn(q,B.pathname,z.signal);if(Be.type==="aborted")return{shortCircuited:!0};if(Be.type==="error"){let st=oa(Be.partialMatches).route.id;return{matches:Be.partialMatches,loaderData:{},errors:{[st]:Be.error}}}else if(Be.matches)q=Be.matches;else{let{error:st,notFoundMatches:ti,route:zr}=Gs(B.pathname);return{matches:ti,loaderData:{},errors:{[zr.id]:st}}}}let nt=c||u,[Qe,ht]=$v(i.history,R,q,Ge,B,de===!0,Fe,qe,le,Q,k,nt,h,fe);if(X=++ae,Qe.length===0&&ht.length===0){let Be=Gn();return ft(B,{matches:q,loaderData:{},errors:fe&&pi(fe[1])?{[fe[0]]:fe[1].error}:null,...Kv(fe),...Be?{fetchers:new Map(R.fetchers)}:{}},{flushSync:ie}),{shortCircuited:!0}}if(vt){let Be={};if(!ee){Be.navigation=ve;let st=va(fe);st!==void 0&&(Be.actionData=st)}ht.length>0&&(Be.fetchers=xa(ht)),Ee(Be,{flushSync:ie})}ht.forEach(Be=>{en(Be.key),Be.controller&&J.set(Be.key,Be.controller)});let vi=()=>ht.forEach(Be=>en(Be.key));G&&G.signal.addEventListener("abort",vi);let{loaderResults:vn,fetcherResults:Bt}=await ai(R,q,Qe,ht,z);if(z.signal.aborted)return{shortCircuited:!0};G&&G.signal.removeEventListener("abort",vi),ht.forEach(Be=>J.delete(Be.key));let Vt=Pu(vn);if(Vt)return await gn(z,Vt.result,!0,{replace:ue}),{shortCircuited:!0};if(Vt=Pu(Bt),Vt)return k.add(Vt.key),await gn(z,Vt.result,!0,{replace:ue}),{shortCircuited:!0};let{loaderData:xn,errors:xi}=Iv(R,q,vn,fe,ht,Bt);de&&R.errors&&(xi={...R.errors,...xi});let We=Gn(),Or=Ft(X),Mr=We||Or||ht.length>0;return{matches:q,loaderData:xn,errors:xi,...Mr?{fetchers:new Map(R.fetchers)}:{}}}function va(z){if(z&&!pi(z[1]))return{[z[0]]:z[1].data};if(R.actionData)return Object.keys(R.actionData).length===0?null:R.actionData}function xa(z){return z.forEach(B=>{let q=R.fetchers.get(B.key),ee=$o(void 0,q?q.data:void 0);R.fetchers.set(B.key,ee)}),new Map(R.fetchers)}async function Bs(z,B,q,ee){en(z);let se=(ee&&ee.flushSync)===!0,me=c||u,we=mp(R.location,R.matches,h,q,B,ee==null?void 0:ee.relative),ue=xr(me,we,h),de=yn(ue,me,we);if(de.active&&de.matches&&(ue=de.matches),!ue){yi(z,B,zi(404,{pathname:we}),{flushSync:se});return}let{path:ie,submission:fe,error:ve}=Bv(!0,we,ee);if(ve){yi(z,B,ve,{flushSync:se});return}let Ge=Io(ue,ie),vt=(ee&&ee.preventScrollReset)===!0;if(fe&&Yi(fe.formMethod)){await Vs(z,B,ie,Ge,ue,de.active,se,vt,fe);return}Q.set(z,{routeId:B,path:ie}),await $s(z,B,ie,Ge,ue,de.active,se,vt,fe)}async function Vs(z,B,q,ee,se,me,we,ue,de){Hs(),Q.delete(z);function ie(ot){if(!ot.route.action&&!ot.route.lazy){let bn=zi(405,{method:de.formMethod,pathname:q,routeId:B});return yi(z,B,bn,{flushSync:we}),!0}return!1}if(!me&&ie(ee))return;let fe=R.fetchers.get(z);Ni(z,NE(de,fe),{flushSync:we});let ve=new AbortController,Ge=Ja(i.history,q,ve.signal,de);if(me){let ot=await nn(se,q,Ge.signal);if(ot.type==="aborted")return;if(ot.type==="error"){yi(z,B,ot.error,{flushSync:we});return}else if(ot.matches){if(se=ot.matches,ee=Io(se,q),ie(ee))return}else{yi(z,B,zi(404,{pathname:q}),{flushSync:we});return}}J.set(z,ve);let vt=ae,Qe=(await Cr("action",R,Ge,[ee],se,z))[ee.route.id];if(Ge.signal.aborted){J.get(z)===ve&&J.delete(z);return}if(le.has(z)){if(ua(Qe)||pi(Qe)){Ni(z,hr(void 0));return}}else{if(ua(Qe))if(J.delete(z),X>vt){Ni(z,hr(void 0));return}else return k.add(z),Ni(z,$o(de)),gn(Ge,Qe,!1,{fetcherSubmission:de,preventScrollReset:ue});if(pi(Qe)){yi(z,B,Qe.error);return}}let ht=R.navigation.location||R.location,vi=Ja(i.history,ht,ve.signal),vn=c||u,Bt=R.navigation.state!=="idle"?xr(vn,R.navigation.location,h):R.matches;Ue(Bt,"Didn't find any matches after fetcher action");let Vt=++ae;ne.set(z,Vt);let xn=$o(de,Qe.data);R.fetchers.set(z,xn);let[xi,We]=$v(i.history,R,Bt,de,ht,!1,Fe,qe,le,Q,k,vn,h,[ee.route.id,Qe]);We.filter(ot=>ot.key!==z).forEach(ot=>{let bn=ot.key,Cl=R.fetchers.get(bn),wa=$o(void 0,Cl?Cl.data:void 0);R.fetchers.set(bn,wa),en(bn),ot.controller&&J.set(bn,ot.controller)}),Ee({fetchers:new Map(R.fetchers)});let Or=()=>We.forEach(ot=>en(ot.key));ve.signal.addEventListener("abort",Or);let{loaderResults:Mr,fetcherResults:Be}=await ai(R,Bt,xi,We,vi);if(ve.signal.aborted)return;ve.signal.removeEventListener("abort",Or),ne.delete(z),J.delete(z),We.forEach(ot=>J.delete(ot.key));let st=Pu(Mr);if(st)return gn(vi,st.result,!1,{preventScrollReset:ue});if(st=Pu(Be),st)return k.add(st.key),gn(vi,st.result,!1,{preventScrollReset:ue});let{loaderData:ti,errors:zr}=Iv(R,Bt,Mr,void 0,We,Be);if(R.fetchers.has(z)){let ot=hr(Qe.data);R.fetchers.set(z,ot)}Ft(Vt),R.navigation.state==="loading"&&Vt>X?(Ue(F,"Expected pending action"),G&&G.abort(),ft(R.navigation.location,{matches:Bt,loaderData:ti,errors:zr,fetchers:new Map(R.fetchers)})):(Ee({errors:zr,loaderData:Yv(R.loaderData,ti,Bt,zr),fetchers:new Map(R.fetchers)}),Fe=!1)}async function $s(z,B,q,ee,se,me,we,ue,de){let ie=R.fetchers.get(z);Ni(z,$o(de,ie?ie.data:void 0),{flushSync:we});let fe=new AbortController,ve=Ja(i.history,q,fe.signal);if(me){let Qe=await nn(se,q,ve.signal);if(Qe.type==="aborted")return;if(Qe.type==="error"){yi(z,B,Qe.error,{flushSync:we});return}else if(Qe.matches)se=Qe.matches,ee=Io(se,q);else{yi(z,B,zi(404,{pathname:q}),{flushSync:we});return}}J.set(z,fe);let Ge=ae,nt=(await Cr("loader",R,ve,[ee],se,z))[ee.route.id];if(J.get(z)===fe&&J.delete(z),!ve.signal.aborted){if(le.has(z)){Ni(z,hr(void 0));return}if(ua(nt))if(X>Ge){Ni(z,hr(void 0));return}else{k.add(z),await gn(ve,nt,!1,{preventScrollReset:ue});return}if(pi(nt)){yi(z,B,nt.error);return}Ni(z,hr(nt.data))}}async function gn(z,B,q,{submission:ee,fetcherSubmission:se,preventScrollReset:me,replace:we}={}){B.response.headers.has("X-Remix-Revalidate")&&(Fe=!0);let ue=B.response.headers.get("Location");Ue(ue,"Expected a Location header on the redirect Response"),ue=Gv(ue,new URL(z.url),h);let de=al(R.location,ue,{_isRedirect:!0});if(r){let nt=!1;if(B.response.headers.has("X-Remix-Reload-Document"))nt=!0;else if(tm.test(ue)){const Qe=i.history.createURL(ue);nt=Qe.origin!==t.location.origin||Wi(Qe.pathname,h)==null}if(nt){we?t.location.replace(ue):t.location.assign(ue);return}}G=null;let ie=we===!0||B.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:fe,formAction:ve,formEncType:Ge}=R.navigation;!ee&&!se&&fe&&ve&&Ge&&(ee=Zv(R.navigation));let vt=ee||se;if(bE.has(B.response.status)&&vt&&Yi(vt.formMethod))await gi(ie,de,{submission:{...vt,formAction:ue},preventScrollReset:me||I,enableViewTransition:q?te:void 0});else{let nt=ph(de,ee);await gi(ie,de,{overrideNavigation:nt,fetcherSubmission:se,preventScrollReset:me||I,enableViewTransition:q?te:void 0})}}async function Cr(z,B,q,ee,se,me){let we,ue={};try{we=await CE(f,z,B,q,ee,se,me,o,a)}catch(de){return ee.forEach(ie=>{ue[ie.route.id]={type:"error",error:de}}),ue}for(let[de,ie]of Object.entries(we))if(LE(ie)){let fe=ie.result;ue[de]={type:"redirect",response:OE(fe,q,de,se,h)}}else ue[de]=await DE(ie);return ue}async function ai(z,B,q,ee,se){let me=Cr("loader",z,se,q,B,null),we=Promise.all(ee.map(async ie=>{if(ie.matches&&ie.match&&ie.controller){let ve=(await Cr("loader",z,Ja(i.history,ie.path,ie.controller.signal),[ie.match],ie.matches,ie.key))[ie.match.route.id];return{[ie.key]:ve}}else return Promise.resolve({[ie.key]:{type:"error",error:zi(404,{pathname:ie.path})}})})),ue=await me,de=(await we).reduce((ie,fe)=>Object.assign(ie,fe),{});return{loaderResults:ue,fetcherResults:de}}function Hs(){Fe=!0,Q.forEach((z,B)=>{J.has(B)&&qe.add(B),en(B)})}function Ni(z,B,q={}){R.fetchers.set(z,B),Ee({fetchers:new Map(R.fetchers)},{flushSync:(q&&q.flushSync)===!0})}function yi(z,B,q,ee={}){let se=oa(R.matches,B);qs(z),Ee({errors:{[se.route.id]:q},fetchers:new Map(R.fetchers)},{flushSync:(ee&&ee.flushSync)===!0})}function kr(z){return oe.set(z,(oe.get(z)||0)+1),le.has(z)&&le.delete(z),R.fetchers.get(z)||wE}function qs(z){let B=R.fetchers.get(z);J.has(z)&&!(B&&B.state==="loading"&&ne.has(z))&&en(z),Q.delete(z),ne.delete(z),k.delete(z),le.delete(z),qe.delete(z),R.fetchers.delete(z)}function El(z){let B=(oe.get(z)||0)-1;B<=0?(oe.delete(z),le.add(z)):oe.set(z,B),Ee({fetchers:new Map(R.fetchers)})}function en(z){let B=J.get(z);B&&(B.abort(),J.delete(z))}function Tl(z){for(let B of z){let q=kr(B),ee=hr(q.data);R.fetchers.set(B,ee)}}function Gn(){let z=[],B=!1;for(let q of k){let ee=R.fetchers.get(q);Ue(ee,`Expected fetcher: ${q}`),ee.state==="loading"&&(k.delete(q),z.push(q),B=!0)}return Tl(z),B}function Ft(z){let B=[];for(let[q,ee]of ne)if(ee<z){let se=R.fetchers.get(q);Ue(se,`Expected fetcher: ${q}`),se.state==="loading"&&(en(q),ne.delete(q),B.push(q))}return Tl(B),B.length>0}function ed(z,B){let q=R.blockers.get(z)||Vo;return re.get(z)!==B&&re.set(z,B),q}function Bi(z){R.blockers.delete(z),re.delete(z)}function Rt(z,B){let q=R.blockers.get(z)||Vo;Ue(q.state==="unblocked"&&B.state==="blocked"||q.state==="blocked"&&B.state==="blocked"||q.state==="blocked"&&B.state==="proceeding"||q.state==="blocked"&&B.state==="unblocked"||q.state==="proceeding"&&B.state==="unblocked",`Invalid blocker state transition: ${q.state} -> ${B.state}`);let ee=new Map(R.blockers);ee.set(z,B),Ee({blockers:ee})}function jl({currentLocation:z,nextLocation:B,historyAction:q}){if(re.size===0)return;re.size>1&&Ut(!1,"A router only supports one blocker at a time");let ee=Array.from(re.entries()),[se,me]=ee[ee.length-1],we=R.blockers.get(se);if(!(we&&we.state==="proceeding")&&me({currentLocation:z,nextLocation:B,historyAction:q}))return se}function Gs(z){let B=zi(404,{pathname:z}),q=c||u,{matches:ee,route:se}=Xv(q);return{notFoundMatches:ee,route:se,error:B}}function td(z,B,q){if(w=z,T=B,S=q||null,!E&&R.navigation===hh){E=!0;let ee=tn(R.location,R.matches);ee!=null&&Ee({restoreScrollPosition:ee})}return()=>{w=null,T=null,S=null}}function Dr(z,B){return S&&S(z,B.map(ee=>W_(ee,R.loaderData)))||z.key}function ba(z,B){if(w&&T){let q=Dr(z,B);w[q]=T()}}function tn(z,B){if(w){let q=Dr(z,B),ee=w[q];if(typeof ee=="number")return ee}return null}function yn(z,B,q){if(p)if(z){if(Object.keys(z[0].params).length>0)return{active:!0,matches:cc(B,q,h,!0)}}else return{active:!0,matches:cc(B,q,h,!0)||[]};return{active:!1,matches:null}}async function nn(z,B,q){if(!p)return{type:"success",matches:z};let ee=z;for(;;){let se=c==null,me=c||u,we=o;try{await p({signal:q,path:B,matches:ee,patch:(ie,fe)=>{q.aborted||qv(ie,fe,me,we,a)}})}catch(ie){return{type:"error",error:ie,partialMatches:ee}}finally{se&&!q.aborted&&(u=[...u])}if(q.aborted)return{type:"aborted"};let ue=xr(me,B,h);if(ue)return{type:"success",matches:ue};let de=cc(me,B,h,!0);if(!de||ee.length===de.length&&ee.every((ie,fe)=>ie.route.id===de[fe].route.id))return{type:"success",matches:null};ee=de}}function id(z){o={},c=Ac(z,a,void 0,o)}function Rl(z,B){let q=c==null;qv(z,B,c||u,o,a),q&&(u=[...u],Ee({}))}return P={get basename(){return h},get future(){return g},get state(){return R},get routes(){return u},get window(){return t},initialize:dt,subscribe:Ie,enableScrollRestoration:td,navigate:Nt,fetch:Bs,revalidate:Ji,createHref:z=>i.history.createHref(z),encodeLocation:z=>i.history.encodeLocation(z),getFetcher:kr,deleteFetcher:El,dispose:Oe,getBlocker:ed,deleteBlocker:Bi,patchRoutes:Rl,_internalFetchControllers:J,_internalSetRoutes:id},P}function _E(i){return i!=null&&("formData"in i&&i.formData!=null||"body"in i&&i.body!==void 0)}function mp(i,t,r,a,o,u){let c,h;if(o){c=[];for(let p of t)if(c.push(p),p.route.id===o){h=p;break}}else c=t,h=t[t.length-1];let f=em(a||".",Jp(c),Wi(i.pathname,r)||i.pathname,u==="path");if(a==null&&(f.search=i.search,f.hash=i.hash),(a==null||a===""||a===".")&&h){let p=im(f.search);if(h.route.index&&!p)f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index";else if(!h.route.index&&p){let g=new URLSearchParams(f.search),v=g.getAll("index");g.delete("index"),v.filter(w=>w).forEach(w=>g.append("index",w));let x=g.toString();f.search=x?`?${x}`:""}}return r!=="/"&&(f.pathname=f.pathname==="/"?r:dn([r,f.pathname])),Ar(f)}function Bv(i,t,r){if(!r||!_E(r))return{path:t};if(r.formMethod&&!PE(r.formMethod))return{path:t,error:zi(405,{method:r.formMethod})};let a=()=>({path:t,error:zi(400,{type:"invalid-body"})}),u=(r.formMethod||"get").toUpperCase(),c=Wb(t);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Yi(u))return a();let v=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((x,[w,S])=>`${x}${w}=${S}
`,""):String(r.body);return{path:t,submission:{formMethod:u,formAction:c,formEncType:r.formEncType,formData:void 0,json:void 0,text:v}}}else if(r.formEncType==="application/json"){if(!Yi(u))return a();try{let v=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:t,submission:{formMethod:u,formAction:c,formEncType:r.formEncType,formData:void 0,json:v,text:void 0}}}catch{return a()}}}Ue(typeof FormData=="function","FormData is not available in this environment");let h,f;if(r.formData)h=yp(r.formData),f=r.formData;else if(r.body instanceof FormData)h=yp(r.body),f=r.body;else if(r.body instanceof URLSearchParams)h=r.body,f=Fv(h);else if(r.body==null)h=new URLSearchParams,f=new FormData;else try{h=new URLSearchParams(r.body),f=Fv(h)}catch{return a()}let p={formMethod:u,formAction:c,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:f,json:void 0,text:void 0};if(Yi(p.formMethod))return{path:t,submission:p};let g=Hn(t);return i&&g.search&&im(g.search)&&h.append("index",""),g.search=`?${h}`,{path:Ar(g),submission:p}}function Vv(i,t,r=!1){let a=i.findIndex(o=>o.route.id===t);return a>=0?i.slice(0,r?a+1:a):i}function $v(i,t,r,a,o,u,c,h,f,p,g,v,x,w){let S=w?pi(w[1])?w[1].error:w[1].data:void 0,T=i.createURL(t.location),E=i.createURL(o),j=r;u&&t.errors?j=Vv(r,Object.keys(t.errors)[0],!0):w&&pi(w[1])&&(j=Vv(r,w[0]));let D=w?w[1].statusCode:void 0,M=D&&D>=400,V=j.filter((R,F)=>{let{route:I}=R;if(I.lazy)return!0;if(I.loader==null)return!1;if(u)return gp(I,t.loaderData,t.errors);if(EE(t.loaderData,t.matches[F],R))return!0;let G=t.matches[F],te=R;return Hv(R,{currentUrl:T,currentParams:G.params,nextUrl:E,nextParams:te.params,...a,actionResult:S,actionStatus:D,defaultShouldRevalidate:M?!1:c||T.pathname+T.search===E.pathname+E.search||T.search!==E.search||TE(G,te)})}),P=[];return p.forEach((R,F)=>{if(u||!r.some(Ae=>Ae.route.id===R.routeId)||f.has(F))return;let I=xr(v,R.path,x);if(!I){P.push({key:F,routeId:R.routeId,path:R.path,matches:null,match:null,controller:null});return}let G=t.fetchers.get(F),te=Io(I,R.path),he=!1;g.has(F)?he=!1:h.has(F)?(h.delete(F),he=!0):G&&G.state!=="idle"&&G.data===void 0?he=c:he=Hv(te,{currentUrl:T,currentParams:t.matches[t.matches.length-1].params,nextUrl:E,nextParams:r[r.length-1].params,...a,actionResult:S,actionStatus:D,defaultShouldRevalidate:M?!1:c}),he&&P.push({key:F,routeId:R.routeId,path:R.path,matches:I,match:te,controller:new AbortController})}),[V,P]}function gp(i,t,r){if(i.lazy)return!0;if(!i.loader)return!1;let a=t!=null&&t[i.id]!==void 0,o=r!=null&&r[i.id]!==void 0;return!a&&o?!1:typeof i.loader=="function"&&i.loader.hydrate===!0?!0:!a&&!o}function EE(i,t,r){let a=!t||r.route.id!==t.route.id,o=!i.hasOwnProperty(r.route.id);return a||o}function TE(i,t){let r=i.route.path;return i.pathname!==t.pathname||r!=null&&r.endsWith("*")&&i.params["*"]!==t.params["*"]}function Hv(i,t){if(i.route.shouldRevalidate){let r=i.route.shouldRevalidate(t);if(typeof r=="boolean")return r}return t.defaultShouldRevalidate}function qv(i,t,r,a,o){let u;if(i){let f=a[i];Ue(f,`No route found to patch children into: routeId = ${i}`),f.children||(f.children=[]),u=f.children}else u=r;let c=t.filter(f=>!u.some(p=>Zb(f,p))),h=Ac(c,o,[i||"_","patch",String((u==null?void 0:u.length)||"0")],a);u.push(...h)}function Zb(i,t){return"id"in i&&"id"in t&&i.id===t.id?!0:i.index===t.index&&i.path===t.path&&i.caseSensitive===t.caseSensitive?(!i.children||i.children.length===0)&&(!t.children||t.children.length===0)?!0:i.children.every((r,a)=>{var o;return(o=t.children)==null?void 0:o.some(u=>Zb(r,u))}):!1}async function jE(i,t,r){if(!i.lazy)return;let a=await i.lazy();if(!i.lazy)return;let o=r[i.id];Ue(o,"No route found in manifest");let u={};for(let c in a){let f=o[c]!==void 0&&c!=="hasErrorBoundary";Ut(!f,`Route "${o.id}" has a static property "${c}" defined but its lazy function is also returning a value for this property. The lazy route property "${c}" will be ignored.`),!f&&!Q_.has(c)&&(u[c]=a[c])}Object.assign(o,u),Object.assign(o,{...t(o),lazy:void 0})}async function RE({matches:i}){let t=i.filter(a=>a.shouldLoad);return(await Promise.all(t.map(a=>a.resolve()))).reduce((a,o,u)=>Object.assign(a,{[t[u].route.id]:o}),{})}async function CE(i,t,r,a,o,u,c,h,f,p){let g=u.map(w=>w.route.lazy?jE(w.route,f,h):void 0),v=u.map((w,S)=>{let T=g[S],E=o.some(D=>D.route.id===w.route.id);return{...w,shouldLoad:E,resolve:async D=>(D&&a.method==="GET"&&(w.route.lazy||w.route.loader)&&(E=!0),E?kE(t,a,w,T,D,p):Promise.resolve({type:"data",result:void 0}))}}),x=await i({matches:v,request:a,params:u[0].params,fetcherKey:c,context:p});try{await Promise.all(g)}catch{}return x}async function kE(i,t,r,a,o,u){let c,h,f=p=>{let g,v=new Promise((S,T)=>g=T);h=()=>g(),t.signal.addEventListener("abort",h);let x=S=>typeof p!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${i}" [routeId: ${r.route.id}]`)):p({request:t,params:r.params,context:u},...S!==void 0?[S]:[]),w=(async()=>{try{return{type:"data",result:await(o?o(T=>x(T)):x())}}catch(S){return{type:"error",result:S}}})();return Promise.race([w,v])};try{let p=r.route[i];if(a)if(p){let g,[v]=await Promise.all([f(p).catch(x=>{g=x}),a]);if(g!==void 0)throw g;c=v}else if(await a,p=r.route[i],p)c=await f(p);else if(i==="action"){let g=new URL(t.url),v=g.pathname+g.search;throw zi(405,{method:t.method,pathname:v,routeId:r.route.id})}else return{type:"data",result:void 0};else if(p)c=await f(p);else{let g=new URL(t.url),v=g.pathname+g.search;throw zi(404,{pathname:v})}}catch(p){return{type:"error",result:p}}finally{h&&t.signal.removeEventListener("abort",h)}return c}async function DE(i){var a,o,u,c,h,f;let{result:t,type:r}=i;if(Jb(t)){let p;try{let g=t.headers.get("Content-Type");g&&/\bapplication\/json\b/.test(g)?t.body==null?p=null:p=await t.json():p=await t.text()}catch(g){return{type:"error",error:g}}return r==="error"?{type:"error",error:new Ec(t.status,t.statusText,p),statusCode:t.status,headers:t.headers}:{type:"data",data:p,statusCode:t.status,headers:t.headers}}return r==="error"?Qv(t)?t.data instanceof Error?{type:"error",error:t.data,statusCode:(a=t.init)==null?void 0:a.status,headers:(o=t.init)!=null&&o.headers?new Headers(t.init.headers):void 0}:{type:"error",error:new Ec(((u=t.init)==null?void 0:u.status)||500,void 0,t.data),statusCode:sl(t)?t.status:void 0,headers:(c=t.init)!=null&&c.headers?new Headers(t.init.headers):void 0}:{type:"error",error:t,statusCode:sl(t)?t.status:void 0}:Qv(t)?{type:"data",data:t.data,statusCode:(h=t.init)==null?void 0:h.status,headers:(f=t.init)!=null&&f.headers?new Headers(t.init.headers):void 0}:{type:"data",data:t}}function OE(i,t,r,a,o){let u=i.headers.get("Location");if(Ue(u,"Redirects returned/thrown from loaders/actions must have a Location header"),!tm.test(u)){let c=a.slice(0,a.findIndex(h=>h.route.id===r)+1);u=mp(new URL(t.url),c,o,u),i.headers.set("Location",u)}return i}function Gv(i,t,r){if(tm.test(i)){let a=i,o=a.startsWith("//")?new URL(t.protocol+a):new URL(a),u=Wi(o.pathname,r)!=null;if(o.origin===t.origin&&u)return o.pathname+o.search+o.hash}return i}function Ja(i,t,r,a){let o=i.createURL(Wb(t)).toString(),u={signal:r};if(a&&Yi(a.formMethod)){let{formMethod:c,formEncType:h}=a;u.method=c.toUpperCase(),h==="application/json"?(u.headers=new Headers({"Content-Type":h}),u.body=JSON.stringify(a.json)):h==="text/plain"?u.body=a.text:h==="application/x-www-form-urlencoded"&&a.formData?u.body=yp(a.formData):u.body=a.formData}return new Request(o,u)}function yp(i){let t=new URLSearchParams;for(let[r,a]of i.entries())t.append(r,typeof a=="string"?a:a.name);return t}function Fv(i){let t=new FormData;for(let[r,a]of i.entries())t.append(r,a);return t}function ME(i,t,r,a=!1,o=!1){let u={},c=null,h,f=!1,p={},g=r&&pi(r[1])?r[1].error:void 0;return i.forEach(v=>{if(!(v.route.id in t))return;let x=v.route.id,w=t[x];if(Ue(!ua(w),"Cannot handle redirect results in processLoaderData"),pi(w)){let S=w.error;if(g!==void 0&&(S=g,g=void 0),c=c||{},o)c[x]=S;else{let T=oa(i,x);c[T.route.id]==null&&(c[T.route.id]=S)}a||(u[x]=Qb),f||(f=!0,h=sl(w.error)?w.error.status:500),w.headers&&(p[x]=w.headers)}else u[x]=w.data,w.statusCode&&w.statusCode!==200&&!f&&(h=w.statusCode),w.headers&&(p[x]=w.headers)}),g!==void 0&&r&&(c={[r[0]]:g},u[r[0]]=void 0),{loaderData:u,errors:c,statusCode:h||200,loaderHeaders:p}}function Iv(i,t,r,a,o,u){let{loaderData:c,errors:h}=ME(t,r,a);return o.forEach(f=>{let{key:p,match:g,controller:v}=f,x=u[p];if(Ue(x,"Did not find corresponding fetcher result"),!(v&&v.signal.aborted))if(pi(x)){let w=oa(i.matches,g==null?void 0:g.route.id);h&&h[w.route.id]||(h={...h,[w.route.id]:x.error}),i.fetchers.delete(p)}else if(ua(x))Ue(!1,"Unhandled fetcher revalidation redirect");else{let w=hr(x.data);i.fetchers.set(p,w)}}),{loaderData:c,errors:h}}function Yv(i,t,r,a){let o=Object.entries(t).filter(([,u])=>u!==Qb).reduce((u,[c,h])=>(u[c]=h,u),{});for(let u of r){let c=u.route.id;if(!t.hasOwnProperty(c)&&i.hasOwnProperty(c)&&u.route.loader&&(o[c]=i[c]),a&&a.hasOwnProperty(c))break}return o}function Kv(i){return i?pi(i[1])?{actionData:{}}:{actionData:{[i[0]]:i[1].data}}:{}}function oa(i,t){return(t?i.slice(0,i.findIndex(a=>a.route.id===t)+1):[...i]).reverse().find(a=>a.route.hasErrorBoundary===!0)||i[0]}function Xv(i){let t=i.length===1?i[0]:i.find(r=>r.index||!r.path||r.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function zi(i,{pathname:t,routeId:r,method:a,type:o,message:u}={}){let c="Unknown Server Error",h="Unknown @remix-run/router error";return i===400?(c="Bad Request",a&&t&&r?h=`You made a ${a} request to "${t}" but did not provide a \`loader\` for route "${r}", so there is no way to handle the request.`:o==="invalid-body"&&(h="Unable to encode submission body")):i===403?(c="Forbidden",h=`Route "${r}" does not match URL "${t}"`):i===404?(c="Not Found",h=`No route matches URL "${t}"`):i===405&&(c="Method Not Allowed",a&&t&&r?h=`You made a ${a.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${r}", so there is no way to handle the request.`:a&&(h=`Invalid request method "${a.toUpperCase()}"`)),new Ec(i||500,c,new Error(h),!0)}function Pu(i){let t=Object.entries(i);for(let r=t.length-1;r>=0;r--){let[a,o]=t[r];if(ua(o))return{key:a,result:o}}}function Wb(i){let t=typeof i=="string"?Hn(i):i;return Ar({...t,hash:""})}function zE(i,t){return i.pathname!==t.pathname||i.search!==t.search?!1:i.hash===""?t.hash!=="":i.hash===t.hash?!0:t.hash!==""}function LE(i){return Jb(i.result)&&xE.has(i.result.status)}function pi(i){return i.type==="error"}function ua(i){return(i&&i.type)==="redirect"}function Qv(i){return typeof i=="object"&&i!=null&&"type"in i&&"data"in i&&"init"in i&&i.type==="DataWithResponseInit"}function Jb(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.headers=="object"&&typeof i.body<"u"}function PE(i){return vE.has(i.toUpperCase())}function Yi(i){return gE.has(i.toUpperCase())}function im(i){return new URLSearchParams(i).getAll("index").some(t=>t==="")}function Io(i,t){let r=typeof t=="string"?Hn(t).search:t.search;if(i[i.length-1].route.index&&im(r||""))return i[i.length-1];let a=Yb(i);return a[a.length-1]}function Zv(i){let{formMethod:t,formAction:r,formEncType:a,text:o,formData:u,json:c}=i;if(!(!t||!r||!a)){if(o!=null)return{formMethod:t,formAction:r,formEncType:a,formData:void 0,json:void 0,text:o};if(u!=null)return{formMethod:t,formAction:r,formEncType:a,formData:u,json:void 0,text:void 0};if(c!==void 0)return{formMethod:t,formAction:r,formEncType:a,formData:void 0,json:c,text:void 0}}}function ph(i,t){return t?{state:"loading",location:i,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:i,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function UE(i,t){return{state:"submitting",location:i,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function $o(i,t){return i?{state:"loading",formMethod:i.formMethod,formAction:i.formAction,formEncType:i.formEncType,formData:i.formData,json:i.json,text:i.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function NE(i,t){return{state:"submitting",formMethod:i.formMethod,formAction:i.formAction,formEncType:i.formEncType,formData:i.formData,json:i.json,text:i.text,data:t?t.data:void 0}}function hr(i){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:i}}function BE(i,t){try{let r=i.sessionStorage.getItem(Xb);if(r){let a=JSON.parse(r);for(let[o,u]of Object.entries(a||{}))u&&Array.isArray(u)&&t.set(o,new Set(u||[]))}}catch{}}function VE(i,t){if(t.size>0){let r={};for(let[a,o]of t)r[a]=[...o];try{i.sessionStorage.setItem(Xb,JSON.stringify(r))}catch(a){Ut(!1,`Failed to save applied view transitions in sessionStorage (${a}).`)}}}function $E(){let i,t,r=new Promise((a,o)=>{i=async u=>{a(u);try{await r}catch{}},t=async u=>{o(u);try{await r}catch{}}});return{promise:r,resolve:i,reject:t}}var pa=_.createContext(null);pa.displayName="DataRouter";var gl=_.createContext(null);gl.displayName="DataRouterState";var nm=_.createContext({isTransitioning:!1});nm.displayName="ViewTransition";var ew=_.createContext(new Map);ew.displayName="Fetchers";var HE=_.createContext(null);HE.displayName="Await";var pn=_.createContext(null);pn.displayName="Navigation";var Bc=_.createContext(null);Bc.displayName="Location";var mn=_.createContext({outlet:null,matches:[],isDataRoute:!1});mn.displayName="Route";var rm=_.createContext(null);rm.displayName="RouteError";function qE(i,{relative:t}={}){Ue(yl(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:a}=_.useContext(pn),{hash:o,pathname:u,search:c}=vl(i,{relative:t}),h=u;return r!=="/"&&(h=u==="/"?r:dn([r,u])),a.createHref({pathname:h,search:c,hash:o})}function yl(){return _.useContext(Bc)!=null}function Tr(){return Ue(yl(),"useLocation() may be used only in the context of a <Router> component."),_.useContext(Bc).location}var tw="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function iw(i){_.useContext(pn).static||_.useLayoutEffect(i)}function zs(){let{isDataRoute:i}=_.useContext(mn);return i?rT():GE()}function GE(){Ue(yl(),"useNavigate() may be used only in the context of a <Router> component.");let i=_.useContext(pa),{basename:t,navigator:r}=_.useContext(pn),{matches:a}=_.useContext(mn),{pathname:o}=Tr(),u=JSON.stringify(Jp(a)),c=_.useRef(!1);return iw(()=>{c.current=!0}),_.useCallback((f,p={})=>{if(Ut(c.current,tw),!c.current)return;if(typeof f=="number"){r.go(f);return}let g=em(f,JSON.parse(u),o,p.relative==="path");i==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:dn([t,g.pathname])),(p.replace?r.replace:r.push)(g,p.state,p)},[t,r,u,o,i])}var FE=_.createContext(null);function IE(i){let t=_.useContext(mn).outlet;return t&&_.createElement(FE.Provider,{value:i},t)}function vl(i,{relative:t}={}){let{matches:r}=_.useContext(mn),{pathname:a}=Tr(),o=JSON.stringify(Jp(r));return _.useMemo(()=>em(i,JSON.parse(o),a,t==="path"),[i,o,a,t])}function YE(i,t,r,a){Ue(yl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:u}=_.useContext(pn),{matches:c}=_.useContext(mn),h=c[c.length-1],f=h?h.params:{},p=h?h.pathname:"/",g=h?h.pathnameBase:"/",v=h&&h.route;{let D=v&&v.path||"";nw(p,!v||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let x=Tr(),w;w=x;let S=w.pathname||"/",T=S;if(g!=="/"){let D=g.replace(/^\//,"").split("/");T="/"+S.replace(/^\//,"").split("/").slice(D.length).join("/")}let E=!u&&r&&r.matches&&r.matches.length>0?r.matches:xr(i,{pathname:T});return Ut(v||E!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),Ut(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),WE(E&&E.map(D=>Object.assign({},D,{params:Object.assign({},f,D.params),pathname:dn([g,o.encodeLocation?o.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?g:dn([g,o.encodeLocation?o.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),c,r,a)}function KE(){let i=nT(),t=sl(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),r=i instanceof Error?i.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},u={padding:"2px 4px",backgroundColor:a},c=null;return console.error("Error handled by React Router default ErrorBoundary:",i),c=_.createElement(_.Fragment,null,_.createElement("p",null,"💿 Hey developer 👋"),_.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",_.createElement("code",{style:u},"ErrorBoundary")," or"," ",_.createElement("code",{style:u},"errorElement")," prop on your route.")),_.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},t),r?_.createElement("pre",{style:o},r):null,c)}var XE=_.createElement(KE,null),QE=class extends _.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,t){return t.location!==i.location||t.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:t.error,location:t.location,revalidation:i.revalidation||t.revalidation}}componentDidCatch(i,t){console.error("React Router caught the following error during render",i,t)}render(){return this.state.error!==void 0?_.createElement(mn.Provider,{value:this.props.routeContext},_.createElement(rm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ZE({routeContext:i,match:t,children:r}){let a=_.useContext(pa);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),_.createElement(mn.Provider,{value:i},r)}function WE(i,t=[],r=null,a=null){if(i==null){if(!r)return null;if(r.errors)i=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)i=r.matches;else return null}let o=i,u=r==null?void 0:r.errors;if(u!=null){let f=o.findIndex(p=>p.route.id&&(u==null?void 0:u[p.route.id])!==void 0);Ue(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,f+1))}let c=!1,h=-1;if(r)for(let f=0;f<o.length;f++){let p=o[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(h=f),p.route.id){let{loaderData:g,errors:v}=r,x=p.route.loader&&!g.hasOwnProperty(p.route.id)&&(!v||v[p.route.id]===void 0);if(p.route.lazy||x){c=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}return o.reduceRight((f,p,g)=>{let v,x=!1,w=null,S=null;r&&(v=u&&p.route.id?u[p.route.id]:void 0,w=p.route.errorElement||XE,c&&(h<0&&g===0?(nw("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,S=null):h===g&&(x=!0,S=p.route.hydrateFallbackElement||null)));let T=t.concat(o.slice(0,g+1)),E=()=>{let j;return v?j=w:x?j=S:p.route.Component?j=_.createElement(p.route.Component,null):p.route.element?j=p.route.element:j=f,_.createElement(ZE,{match:p,routeContext:{outlet:f,matches:T,isDataRoute:r!=null},children:j})};return r&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?_.createElement(QE,{location:r.location,revalidation:r.revalidation,component:w,error:v,children:E(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):E()},null)}function am(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function JE(i){let t=_.useContext(pa);return Ue(t,am(i)),t}function eT(i){let t=_.useContext(gl);return Ue(t,am(i)),t}function tT(i){let t=_.useContext(mn);return Ue(t,am(i)),t}function sm(i){let t=tT(i),r=t.matches[t.matches.length-1];return Ue(r.route.id,`${i} can only be used on routes that contain a unique "id"`),r.route.id}function iT(){return sm("useRouteId")}function nT(){var a;let i=_.useContext(rm),t=eT("useRouteError"),r=sm("useRouteError");return i!==void 0?i:(a=t.errors)==null?void 0:a[r]}function rT(){let{router:i}=JE("useNavigate"),t=sm("useNavigate"),r=_.useRef(!1);return iw(()=>{r.current=!0}),_.useCallback(async(o,u={})=>{Ut(r.current,tw),r.current&&(typeof o=="number"?i.navigate(o):await i.navigate(o,{fromRouteId:t,...u}))},[i,t])}var Wv={};function nw(i,t,r){!t&&!Wv[i]&&(Wv[i]=!0,Ut(!1,r))}var Jv={};function ex(i,t){!i&&!Jv[t]&&(Jv[t]=!0,console.warn(t))}function aT(i){let t={hasErrorBoundary:i.hasErrorBoundary||i.ErrorBoundary!=null||i.errorElement!=null};return i.Component&&(i.element&&Ut(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(t,{element:_.createElement(i.Component),Component:void 0})),i.HydrateFallback&&(i.hydrateFallbackElement&&Ut(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(t,{hydrateFallbackElement:_.createElement(i.HydrateFallback),HydrateFallback:void 0})),i.ErrorBoundary&&(i.errorElement&&Ut(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(t,{errorElement:_.createElement(i.ErrorBoundary),ErrorBoundary:void 0})),t}var sT=class{constructor(){this.status="pending",this.promise=new Promise((t,r)=>{this.resolve=a=>{this.status==="pending"&&(this.status="resolved",t(a))},this.reject=a=>{this.status==="pending"&&(this.status="rejected",r(a))}})}};function oT({router:i,flushSync:t}){let[r,a]=_.useState(i.state),[o,u]=_.useState(),[c,h]=_.useState({isTransitioning:!1}),[f,p]=_.useState(),[g,v]=_.useState(),[x,w]=_.useState(),S=_.useRef(new Map),T=_.useCallback((M,{deletedFetchers:V,flushSync:P,viewTransitionOpts:R})=>{M.fetchers.forEach((I,G)=>{I.data!==void 0&&S.current.set(G,I.data)}),V.forEach(I=>S.current.delete(I)),ex(P===!1||t!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let F=i.window!=null&&i.window.document!=null&&typeof i.window.document.startViewTransition=="function";if(ex(R==null||F,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!R||!F){t&&P?t(()=>a(M)):_.startTransition(()=>a(M));return}if(t&&P){t(()=>{g&&(f&&f.resolve(),g.skipTransition()),h({isTransitioning:!0,flushSync:!0,currentLocation:R.currentLocation,nextLocation:R.nextLocation})});let I=i.window.document.startViewTransition(()=>{t(()=>a(M))});I.finished.finally(()=>{t(()=>{p(void 0),v(void 0),u(void 0),h({isTransitioning:!1})})}),t(()=>v(I));return}g?(f&&f.resolve(),g.skipTransition(),w({state:M,currentLocation:R.currentLocation,nextLocation:R.nextLocation})):(u(M),h({isTransitioning:!0,flushSync:!1,currentLocation:R.currentLocation,nextLocation:R.nextLocation}))},[i.window,t,g,f]);_.useLayoutEffect(()=>i.subscribe(T),[i,T]),_.useEffect(()=>{c.isTransitioning&&!c.flushSync&&p(new sT)},[c]),_.useEffect(()=>{if(f&&o&&i.window){let M=o,V=f.promise,P=i.window.document.startViewTransition(async()=>{_.startTransition(()=>a(M)),await V});P.finished.finally(()=>{p(void 0),v(void 0),u(void 0),h({isTransitioning:!1})}),v(P)}},[o,f,i.window]),_.useEffect(()=>{f&&o&&r.location.key===o.location.key&&f.resolve()},[f,g,r.location,o]),_.useEffect(()=>{!c.isTransitioning&&x&&(u(x.state),h({isTransitioning:!0,flushSync:!1,currentLocation:x.currentLocation,nextLocation:x.nextLocation}),w(void 0))},[c.isTransitioning,x]);let E=_.useMemo(()=>({createHref:i.createHref,encodeLocation:i.encodeLocation,go:M=>i.navigate(M),push:(M,V,P)=>i.navigate(M,{state:V,preventScrollReset:P==null?void 0:P.preventScrollReset}),replace:(M,V,P)=>i.navigate(M,{replace:!0,state:V,preventScrollReset:P==null?void 0:P.preventScrollReset})}),[i]),j=i.basename||"/",D=_.useMemo(()=>({router:i,navigator:E,static:!1,basename:j}),[i,E,j]);return _.createElement(_.Fragment,null,_.createElement(pa.Provider,{value:D},_.createElement(gl.Provider,{value:r},_.createElement(ew.Provider,{value:S.current},_.createElement(nm.Provider,{value:c},_.createElement(dT,{basename:j,location:r.location,navigationType:r.historyAction,navigator:E},_.createElement(lT,{routes:i.routes,future:i.future,state:r})))))),null)}var lT=_.memo(uT);function uT({routes:i,future:t,state:r}){return YE(i,void 0,r,t)}function cT(i){return IE(i.context)}function dT({basename:i="/",children:t=null,location:r,navigationType:a="POP",navigator:o,static:u=!1}){Ue(!yl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=i.replace(/^\/*/,"/"),h=_.useMemo(()=>({basename:c,navigator:o,static:u,future:{}}),[c,o,u]);typeof r=="string"&&(r=Hn(r));let{pathname:f="/",search:p="",hash:g="",state:v=null,key:x="default"}=r,w=_.useMemo(()=>{let S=Wi(f,c);return S==null?null:{location:{pathname:S,search:p,hash:g,state:v,key:x},navigationType:a}},[c,f,p,g,v,x,a]);return Ut(w!=null,`<Router basename="${c}"> is not able to match the URL "${f}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:_.createElement(pn.Provider,{value:h},_.createElement(Bc.Provider,{children:t,value:w}))}var dc="get",fc="application/x-www-form-urlencoded";function Vc(i){return i!=null&&typeof i.tagName=="string"}function fT(i){return Vc(i)&&i.tagName.toLowerCase()==="button"}function hT(i){return Vc(i)&&i.tagName.toLowerCase()==="form"}function pT(i){return Vc(i)&&i.tagName.toLowerCase()==="input"}function mT(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function gT(i,t){return i.button===0&&(!t||t==="_self")&&!mT(i)}var Uu=null;function yT(){if(Uu===null)try{new FormData(document.createElement("form"),0),Uu=!1}catch{Uu=!0}return Uu}var vT=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function mh(i){return i!=null&&!vT.has(i)?(Ut(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${fc}"`),null):i}function xT(i,t){let r,a,o,u,c;if(hT(i)){let h=i.getAttribute("action");a=h?Wi(h,t):null,r=i.getAttribute("method")||dc,o=mh(i.getAttribute("enctype"))||fc,u=new FormData(i)}else if(fT(i)||pT(i)&&(i.type==="submit"||i.type==="image")){let h=i.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=i.getAttribute("formaction")||h.getAttribute("action");if(a=f?Wi(f,t):null,r=i.getAttribute("formmethod")||h.getAttribute("method")||dc,o=mh(i.getAttribute("formenctype"))||mh(h.getAttribute("enctype"))||fc,u=new FormData(h,i),!yT()){let{name:p,type:g,value:v}=i;if(g==="image"){let x=p?`${p}.`:"";u.append(`${x}x`,"0"),u.append(`${x}y`,"0")}else p&&u.append(p,v)}}else{if(Vc(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=dc,a=null,o=fc,c=i}return u&&o==="text/plain"&&(c=u,u=void 0),{action:a,method:r.toLowerCase(),encType:o,formData:u,body:c}}function om(i,t){if(i===!1||i===null||typeof i>"u")throw new Error(t)}async function bT(i,t){if(i.id in t)return t[i.id];try{let r=await import(i.module);return t[i.id]=r,r}catch(r){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function wT(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function ST(i,t,r){let a=await Promise.all(i.map(async o=>{let u=t.routes[o.route.id];if(u){let c=await bT(u,r);return c.links?c.links():[]}return[]}));return TT(a.flat(1).filter(wT).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function tx(i,t,r,a,o,u){let c=(f,p)=>r[p]?f.route.id!==r[p].route.id:!0,h=(f,p)=>{var g;return r[p].pathname!==f.pathname||((g=r[p].route.path)==null?void 0:g.endsWith("*"))&&r[p].params["*"]!==f.params["*"]};return u==="assets"?t.filter((f,p)=>c(f,p)||h(f,p)):u==="data"?t.filter((f,p)=>{var v;let g=a.routes[f.route.id];if(!g||!g.hasLoader)return!1;if(c(f,p)||h(f,p))return!0;if(f.route.shouldRevalidate){let x=f.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((v=r[0])==null?void 0:v.params)||{},nextUrl:new URL(i,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function AT(i,t,{includeHydrateFallback:r}={}){return _T(i.map(a=>{let o=t.routes[a.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),r&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function _T(i){return[...new Set(i)]}function ET(i){let t={},r=Object.keys(i).sort();for(let a of r)t[a]=i[a];return t}function TT(i,t){let r=new Set;return new Set(t),i.reduce((a,o)=>{let u=JSON.stringify(ET(o));return r.has(u)||(r.add(u),a.push({key:u,link:o})),a},[])}function jT(i){let t=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return t.pathname==="/"?t.pathname="_root.data":t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function RT(){let i=_.useContext(pa);return om(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function CT(){let i=_.useContext(gl);return om(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var lm=_.createContext(void 0);lm.displayName="FrameworkContext";function rw(){let i=_.useContext(lm);return om(i,"You must render this element inside a <HydratedRouter> element"),i}function kT(i,t){let r=_.useContext(lm),[a,o]=_.useState(!1),[u,c]=_.useState(!1),{onFocus:h,onBlur:f,onMouseEnter:p,onMouseLeave:g,onTouchStart:v}=t,x=_.useRef(null);_.useEffect(()=>{if(i==="render"&&c(!0),i==="viewport"){let T=j=>{j.forEach(D=>{c(D.isIntersecting)})},E=new IntersectionObserver(T,{threshold:.5});return x.current&&E.observe(x.current),()=>{E.disconnect()}}},[i]),_.useEffect(()=>{if(a){let T=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(T)}}},[a]);let w=()=>{o(!0)},S=()=>{o(!1),c(!1)};return r?i!=="intent"?[u,x,{}]:[u,x,{onFocus:Ho(h,w),onBlur:Ho(f,S),onMouseEnter:Ho(p,w),onMouseLeave:Ho(g,S),onTouchStart:Ho(v,w)}]:[!1,x,{}]}function Ho(i,t){return r=>{i&&i(r),r.defaultPrevented||t(r)}}function DT({page:i,...t}){let{router:r}=RT(),a=_.useMemo(()=>xr(r.routes,i,r.basename),[r.routes,i,r.basename]);return a?_.createElement(MT,{page:i,matches:a,...t}):null}function OT(i){let{manifest:t,routeModules:r}=rw(),[a,o]=_.useState([]);return _.useEffect(()=>{let u=!1;return ST(i,t,r).then(c=>{u||o(c)}),()=>{u=!0}},[i,t,r]),a}function MT({page:i,matches:t,...r}){let a=Tr(),{manifest:o,routeModules:u}=rw(),{loaderData:c,matches:h}=CT(),f=_.useMemo(()=>tx(i,t,h,o,a,"data"),[i,t,h,o,a]),p=_.useMemo(()=>tx(i,t,h,o,a,"assets"),[i,t,h,o,a]),g=_.useMemo(()=>{if(i===a.pathname+a.search+a.hash)return[];let w=new Set,S=!1;if(t.forEach(E=>{var D;let j=o.routes[E.route.id];!j||!j.hasLoader||(!f.some(M=>M.route.id===E.route.id)&&E.route.id in c&&((D=u[E.route.id])!=null&&D.shouldRevalidate)||j.hasClientLoader?S=!0:w.add(E.route.id))}),w.size===0)return[];let T=jT(i);return S&&w.size>0&&T.searchParams.set("_routes",t.filter(E=>w.has(E.route.id)).map(E=>E.route.id).join(",")),[T.pathname+T.search]},[c,a,o,f,t,i,u]),v=_.useMemo(()=>AT(p,o),[p,o]),x=OT(p);return _.createElement(_.Fragment,null,g.map(w=>_.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...r})),v.map(w=>_.createElement("link",{key:w,rel:"modulepreload",href:w,...r})),x.map(({key:w,link:S})=>_.createElement("link",{key:w,...S})))}function zT(...i){return t=>{i.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var aw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{aw&&(window.__reactRouterVersion="7.2.0")}catch{}function LT(i,t){return AE({basename:t==null?void 0:t.basename,future:t==null?void 0:t.future,history:Y_({window:t==null?void 0:t.window}),hydrationData:PT(),routes:i,mapRouteProperties:aT,dataStrategy:t==null?void 0:t.dataStrategy,patchRoutesOnNavigation:t==null?void 0:t.patchRoutesOnNavigation,window:t==null?void 0:t.window}).initialize()}function PT(){let i=window==null?void 0:window.__staticRouterHydrationData;return i&&i.errors&&(i={...i,errors:UT(i.errors)}),i}function UT(i){if(!i)return null;let t=Object.entries(i),r={};for(let[a,o]of t)if(o&&o.__type==="RouteErrorResponse")r[a]=new Ec(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){if(o.__subType){let u=window[o.__subType];if(typeof u=="function")try{let c=new u(o.message);c.stack="",r[a]=c}catch{}}if(r[a]==null){let u=new Error(o.message);u.stack="",r[a]=u}}else r[a]=o;return r}var sw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ow=_.forwardRef(function({onClick:t,discover:r="render",prefetch:a="none",relative:o,reloadDocument:u,replace:c,state:h,target:f,to:p,preventScrollReset:g,viewTransition:v,...x},w){let{basename:S}=_.useContext(pn),T=typeof p=="string"&&sw.test(p),E,j=!1;if(typeof p=="string"&&T&&(E=p,aw))try{let G=new URL(window.location.href),te=p.startsWith("//")?new URL(G.protocol+p):new URL(p),he=Wi(te.pathname,S);te.origin===G.origin&&he!=null?p=he+te.search+te.hash:j=!0}catch{Ut(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let D=qE(p,{relative:o}),[M,V,P]=kT(a,x),R=$T(p,{replace:c,state:h,target:f,preventScrollReset:g,relative:o,viewTransition:v});function F(G){t&&t(G),G.defaultPrevented||R(G)}let I=_.createElement("a",{...x,...P,href:E||D,onClick:j||u?t:F,ref:zT(w,V),target:f,"data-discover":!T&&r==="render"?"true":void 0});return M&&!T?_.createElement(_.Fragment,null,I,_.createElement(DT,{page:D})):I});ow.displayName="Link";var NT=_.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:a="",end:o=!1,style:u,to:c,viewTransition:h,children:f,...p},g){let v=vl(c,{relative:p.relative}),x=Tr(),w=_.useContext(gl),{navigator:S,basename:T}=_.useContext(pn),E=w!=null&&IT(v)&&h===!0,j=S.encodeLocation?S.encodeLocation(v).pathname:v.pathname,D=x.pathname,M=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;r||(D=D.toLowerCase(),M=M?M.toLowerCase():null,j=j.toLowerCase()),M&&T&&(M=Wi(M,T)||M);const V=j!=="/"&&j.endsWith("/")?j.length-1:j.length;let P=D===j||!o&&D.startsWith(j)&&D.charAt(V)==="/",R=M!=null&&(M===j||!o&&M.startsWith(j)&&M.charAt(j.length)==="/"),F={isActive:P,isPending:R,isTransitioning:E},I=P?t:void 0,G;typeof a=="function"?G=a(F):G=[a,P?"active":null,R?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let te=typeof u=="function"?u(F):u;return _.createElement(ow,{...p,"aria-current":I,className:G,ref:g,style:te,to:c,viewTransition:h},typeof f=="function"?f(F):f)});NT.displayName="NavLink";var BT=_.forwardRef(({discover:i="render",fetcherKey:t,navigate:r,reloadDocument:a,replace:o,state:u,method:c=dc,action:h,onSubmit:f,relative:p,preventScrollReset:g,viewTransition:v,...x},w)=>{let S=GT(),T=FT(h,{relative:p}),E=c.toLowerCase()==="get"?"get":"post",j=typeof h=="string"&&sw.test(h),D=M=>{if(f&&f(M),M.defaultPrevented)return;M.preventDefault();let V=M.nativeEvent.submitter,P=(V==null?void 0:V.getAttribute("formmethod"))||c;S(V||M.currentTarget,{fetcherKey:t,method:P,navigate:r,replace:o,state:u,relative:p,preventScrollReset:g,viewTransition:v})};return _.createElement("form",{ref:w,method:E,action:T,onSubmit:a?f:D,...x,"data-discover":!j&&i==="render"?"true":void 0})});BT.displayName="Form";function VT(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function lw(i){let t=_.useContext(pa);return Ue(t,VT(i)),t}function $T(i,{target:t,replace:r,state:a,preventScrollReset:o,relative:u,viewTransition:c}={}){let h=zs(),f=Tr(),p=vl(i,{relative:u});return _.useCallback(g=>{if(gT(g,t)){g.preventDefault();let v=r!==void 0?r:Ar(f)===Ar(p);h(i,{replace:v,state:a,preventScrollReset:o,relative:u,viewTransition:c})}},[f,h,p,r,a,t,i,o,u,c])}var HT=0,qT=()=>`__${String(++HT)}__`;function GT(){let{router:i}=lw("useSubmit"),{basename:t}=_.useContext(pn),r=iT();return _.useCallback(async(a,o={})=>{let{action:u,method:c,encType:h,formData:f,body:p}=xT(a,t);if(o.navigate===!1){let g=o.fetcherKey||qT();await i.fetch(g,r,o.action||u,{preventScrollReset:o.preventScrollReset,formData:f,body:p,formMethod:o.method||c,formEncType:o.encType||h,flushSync:o.flushSync})}else await i.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:f,body:p,formMethod:o.method||c,formEncType:o.encType||h,replace:o.replace,state:o.state,fromRouteId:r,flushSync:o.flushSync,viewTransition:o.viewTransition})},[i,t,r])}function FT(i,{relative:t}={}){let{basename:r}=_.useContext(pn),a=_.useContext(mn);Ue(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),u={...vl(i||".",{relative:t})},c=Tr();if(i==null){u.search=c.search;let h=new URLSearchParams(u.search),f=h.getAll("index");if(f.some(g=>g==="")){h.delete("index"),f.filter(v=>v).forEach(v=>h.append("index",v));let g=h.toString();u.search=g?`?${g}`:""}}return(!i||i===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(u.pathname=u.pathname==="/"?r:dn([r,u.pathname])),Ar(u)}function IT(i,t={}){let r=_.useContext(nm);Ue(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=lw("useViewTransitionState"),o=vl(i,{relative:t.relative});if(!r.isTransitioning)return!1;let u=Wi(r.currentLocation.pathname,a)||r.currentLocation.pathname,c=Wi(r.nextLocation.pathname,a)||r.nextLocation.pathname;return _c(o.pathname,c)!=null||_c(o.pathname,u)!=null}new TextEncoder;var YT=Gb();/**
 * react-router v7.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function KT(i){return _.createElement(oT,{flushSync:YT.flushSync,...i})}var Nu={},ix;function XT(){if(ix)return Nu;ix=1,Nu.match=u,Nu.parse=c;var i=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,t=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,r=/^(?:(min|max)-)?(.+)/,a=/(em|rem|px|cm|mm|in|pt|pc)?$/,o=/(dpi|dpcm|dppx)?$/;function u(g,v){return c(g).some(function(x){var w=x.inverse,S=x.type==="all"||v.type===x.type;if(S&&w||!(S||w))return!1;var T=x.expressions.every(function(E){var j=E.feature,D=E.modifier,M=E.value,V=v[j];if(!V)return!1;switch(j){case"orientation":case"scan":return V.toLowerCase()===M.toLowerCase();case"width":case"height":case"device-width":case"device-height":M=p(M),V=p(V);break;case"resolution":M=f(M),V=f(V);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":M=h(M),V=h(V);break;case"grid":case"color":case"color-index":case"monochrome":M=parseInt(M,10)||1,V=parseInt(V,10)||0;break}switch(D){case"min":return V>=M;case"max":return V<=M;default:return V===M}});return T&&!w||!T&&w})}function c(g){return g.split(",").map(function(v){v=v.trim();var x=v.match(i),w=x[1],S=x[2],T=x[3]||"",E={};return E.inverse=!!w&&w.toLowerCase()==="not",E.type=S?S.toLowerCase():"all",T=T.match(/\([^\)]+\)/g)||[],E.expressions=T.map(function(j){var D=j.match(t),M=D[1].toLowerCase().match(r);return{modifier:M[1],feature:M[2],value:D[2]}}),E})}function h(g){var v=Number(g),x;return v||(x=g.match(/^(\d+)\s*\/\s*(\d+)$/),v=x[1]/x[2]),v}function f(g){var v=parseFloat(g),x=String(g).match(o)[1];switch(x){case"dpcm":return v/2.54;case"dppx":return v*96;default:return v}}function p(g){var v=parseFloat(g),x=String(g).match(a)[1];switch(x){case"em":return v*16;case"rem":return v*16;case"cm":return v*96/2.54;case"mm":return v*96/2.54/10;case"in":return v*96;case"pt":return v*72;case"pc":return v*72/12;default:return v}}return Nu}var gh,nx;function QT(){if(nx)return gh;nx=1;var i=XT().match,t=typeof window<"u"?window.matchMedia:null;function r(o,u,c){var h=this,f;t&&!c&&(f=t.call(window,o)),f?(this.matches=f.matches,this.media=f.media,f.addListener(v)):(this.matches=i(o,u),this.media=o),this.addListener=p,this.removeListener=g,this.dispose=x;function p(w){f&&f.addListener(w)}function g(w){f&&f.removeListener(w)}function v(w){h.matches=w.matches,h.media=w.media}function x(){f&&f.removeListener(v)}}function a(o,u,c){return new r(o,u,c)}return gh=a,gh}var ZT=QT();const WT=Ms(ZT);var JT=/[A-Z]/g,ej=/^ms-/,yh={};function tj(i){return"-"+i.toLowerCase()}function uw(i){if(yh.hasOwnProperty(i))return yh[i];var t=i.replace(JT,tj);return yh[i]=ej.test(t)?"-"+t:t}function ij(i,t){if(i===t)return!0;if(!i||!t)return!1;const r=Object.keys(i),a=Object.keys(t),o=r.length;if(a.length!==o)return!1;for(let u=0;u<o;u++){const c=r[u];if(i[c]!==t[c]||!Object.prototype.hasOwnProperty.call(t,c))return!1}return!0}var vh={exports:{}},xh,rx;function nj(){if(rx)return xh;rx=1;var i="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return xh=i,xh}var bh,ax;function rj(){if(ax)return bh;ax=1;var i=nj();function t(){}function r(){}return r.resetWarningCache=t,bh=function(){function a(c,h,f,p,g,v){if(v!==i){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}a.isRequired=a;function o(){return a}var u={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:o,element:a,elementType:a,instanceOf:o,node:a,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:r,resetWarningCache:t};return u.PropTypes=u,u},bh}var sx;function aj(){return sx||(sx=1,vh.exports=rj()()),vh.exports}var sj=aj();const Se=Ms(sj),Jt=Se.oneOfType([Se.string,Se.number]),cw={all:Se.bool,grid:Se.bool,aural:Se.bool,braille:Se.bool,handheld:Se.bool,print:Se.bool,projection:Se.bool,screen:Se.bool,tty:Se.bool,tv:Se.bool,embossed:Se.bool},oj={orientation:Se.oneOf(["portrait","landscape"]),scan:Se.oneOf(["progressive","interlace"]),aspectRatio:Se.string,deviceAspectRatio:Se.string,height:Jt,deviceHeight:Jt,width:Jt,deviceWidth:Jt,color:Se.bool,colorIndex:Se.bool,monochrome:Se.bool,resolution:Jt,type:Object.keys(cw)},{type:xz,...lj}=oj,uj={minAspectRatio:Se.string,maxAspectRatio:Se.string,minDeviceAspectRatio:Se.string,maxDeviceAspectRatio:Se.string,minHeight:Jt,maxHeight:Jt,minDeviceHeight:Jt,maxDeviceHeight:Jt,minWidth:Jt,maxWidth:Jt,minDeviceWidth:Jt,maxDeviceWidth:Jt,minColor:Se.number,maxColor:Se.number,minColorIndex:Se.number,maxColorIndex:Se.number,minMonochrome:Se.number,maxMonochrome:Se.number,minResolution:Jt,maxResolution:Jt,...lj},cj={...cw,...uj};var dj={all:cj};const fj=i=>`not ${i}`,hj=(i,t)=>{const r=uw(i);return typeof t=="number"&&(t=`${t}px`),t===!0?r:t===!1?fj(r):`(${r}: ${t})`},pj=i=>i.join(" and "),mj=i=>{const t=[];return Object.keys(dj.all).forEach(r=>{const a=i[r];a!=null&&t.push(hj(r,a))}),pj(t)},gj=_.createContext(void 0),yj=i=>i.query||mj(i),ox=i=>i?Object.keys(i).reduce((r,a)=>(r[uw(a)]=i[a],r),{}):void 0,dw=()=>{const i=_.useRef(!1);return _.useEffect(()=>{i.current=!0},[]),i.current},vj=i=>{const t=_.useContext(gj),r=()=>ox(i)||ox(t),[a,o]=_.useState(r);return _.useEffect(()=>{const u=r();ij(a,u)||o(u)},[i,t]),a},xj=i=>{const t=()=>yj(i),[r,a]=_.useState(t);return _.useEffect(()=>{const o=t();r!==o&&a(o)},[i]),r},bj=(i,t)=>{const r=()=>WT(i,t||{},!!t),[a,o]=_.useState(r),u=dw();return _.useEffect(()=>{if(u){const c=r();return o(c),()=>{c&&c.dispose()}}},[i,t]),a},wj=i=>{const[t,r]=_.useState(i.matches);return _.useEffect(()=>{const a=o=>{r(o.matches)};return i.addListener(a),r(i.matches),()=>{i.removeListener(a)}},[i]),t},wr=(i,t,r)=>{const a=vj(t),o=xj(i);if(!o)throw new Error("Invalid or missing MediaQuery!");const u=bj(o,a),c=wj(u);return dw(),_.useEffect(()=>{},[c]),_.useEffect(()=>()=>{u&&u.dispose()},[]),c};var Xt=function(){return Xt=Object.assign||function(t){for(var r,a=1,o=arguments.length;a<o;a++){r=arguments[a];for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(t[u]=r[u])}return t},Xt.apply(this,arguments)};function Ss(i,t,r){if(r||arguments.length===2)for(var a=0,o=t.length,u;a<o;a++)(u||!(a in t))&&(u||(u=Array.prototype.slice.call(t,0,a)),u[a]=t[a]);return i.concat(u||Array.prototype.slice.call(t))}var rt="-ms-",Zo="-moz-",Ye="-webkit-",fw="comm",$c="rule",um="decl",Sj="@import",hw="@keyframes",Aj="@layer",pw=Math.abs,cm=String.fromCharCode,vp=Object.assign;function _j(i,t){return Pt(i,0)^45?(((t<<2^Pt(i,0))<<2^Pt(i,1))<<2^Pt(i,2))<<2^Pt(i,3):0}function mw(i){return i.trim()}function Un(i,t){return(i=t.exec(i))?i[0]:i}function Ce(i,t,r){return i.replace(t,r)}function hc(i,t,r){return i.indexOf(t,r)}function Pt(i,t){return i.charCodeAt(t)|0}function As(i,t,r){return i.slice(t,r)}function cn(i){return i.length}function gw(i){return i.length}function Yo(i,t){return t.push(i),i}function Ej(i,t){return i.map(t).join("")}function lx(i,t){return i.filter(function(r){return!Un(r,t)})}var Hc=1,_s=1,yw=0,Ui=0,Et=0,Ls="";function qc(i,t,r,a,o,u,c,h){return{value:i,root:t,parent:r,type:a,props:o,children:u,line:Hc,column:_s,length:c,return:"",siblings:h}}function pr(i,t){return vp(qc("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},t)}function es(i){for(;i.root;)i=pr(i.root,{children:[i]});Yo(i,i.siblings)}function Tj(){return Et}function jj(){return Et=Ui>0?Pt(Ls,--Ui):0,_s--,Et===10&&(_s=1,Hc--),Et}function Zi(){return Et=Ui<yw?Pt(Ls,Ui++):0,_s++,Et===10&&(_s=1,Hc++),Et}function fa(){return Pt(Ls,Ui)}function pc(){return Ui}function Gc(i,t){return As(Ls,i,t)}function xp(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Rj(i){return Hc=_s=1,yw=cn(Ls=i),Ui=0,[]}function Cj(i){return Ls="",i}function wh(i){return mw(Gc(Ui-1,bp(i===91?i+2:i===40?i+1:i)))}function kj(i){for(;(Et=fa())&&Et<33;)Zi();return xp(i)>2||xp(Et)>3?"":" "}function Dj(i,t){for(;--t&&Zi()&&!(Et<48||Et>102||Et>57&&Et<65||Et>70&&Et<97););return Gc(i,pc()+(t<6&&fa()==32&&Zi()==32))}function bp(i){for(;Zi();)switch(Et){case i:return Ui;case 34:case 39:i!==34&&i!==39&&bp(Et);break;case 40:i===41&&bp(i);break;case 92:Zi();break}return Ui}function Oj(i,t){for(;Zi()&&i+Et!==57;)if(i+Et===84&&fa()===47)break;return"/*"+Gc(t,Ui-1)+"*"+cm(i===47?i:Zi())}function Mj(i){for(;!xp(fa());)Zi();return Gc(i,Ui)}function zj(i){return Cj(mc("",null,null,null,[""],i=Rj(i),0,[0],i))}function mc(i,t,r,a,o,u,c,h,f){for(var p=0,g=0,v=c,x=0,w=0,S=0,T=1,E=1,j=1,D=0,M="",V=o,P=u,R=a,F=M;E;)switch(S=D,D=Zi()){case 40:if(S!=108&&Pt(F,v-1)==58){hc(F+=Ce(wh(D),"&","&\f"),"&\f",pw(p?h[p-1]:0))!=-1&&(j=-1);break}case 34:case 39:case 91:F+=wh(D);break;case 9:case 10:case 13:case 32:F+=kj(S);break;case 92:F+=Dj(pc()-1,7);continue;case 47:switch(fa()){case 42:case 47:Yo(Lj(Oj(Zi(),pc()),t,r,f),f);break;default:F+="/"}break;case 123*T:h[p++]=cn(F)*j;case 125*T:case 59:case 0:switch(D){case 0:case 125:E=0;case 59+g:j==-1&&(F=Ce(F,/\f/g,"")),w>0&&cn(F)-v&&Yo(w>32?cx(F+";",a,r,v-1,f):cx(Ce(F," ","")+";",a,r,v-2,f),f);break;case 59:F+=";";default:if(Yo(R=ux(F,t,r,p,g,o,h,M,V=[],P=[],v,u),u),D===123)if(g===0)mc(F,t,R,R,V,u,v,h,P);else switch(x===99&&Pt(F,3)===110?100:x){case 100:case 108:case 109:case 115:mc(i,R,R,a&&Yo(ux(i,R,R,0,0,o,h,M,o,V=[],v,P),P),o,P,v,h,a?V:P);break;default:mc(F,R,R,R,[""],P,0,h,P)}}p=g=w=0,T=j=1,M=F="",v=c;break;case 58:v=1+cn(F),w=S;default:if(T<1){if(D==123)--T;else if(D==125&&T++==0&&jj()==125)continue}switch(F+=cm(D),D*T){case 38:j=g>0?1:(F+="\f",-1);break;case 44:h[p++]=(cn(F)-1)*j,j=1;break;case 64:fa()===45&&(F+=wh(Zi())),x=fa(),g=v=cn(M=F+=Mj(pc())),D++;break;case 45:S===45&&cn(F)==2&&(T=0)}}return u}function ux(i,t,r,a,o,u,c,h,f,p,g,v){for(var x=o-1,w=o===0?u:[""],S=gw(w),T=0,E=0,j=0;T<a;++T)for(var D=0,M=As(i,x+1,x=pw(E=c[T])),V=i;D<S;++D)(V=mw(E>0?w[D]+" "+M:Ce(M,/&\f/g,w[D])))&&(f[j++]=V);return qc(i,t,r,o===0?$c:h,f,p,g,v)}function Lj(i,t,r,a){return qc(i,t,r,fw,cm(Tj()),As(i,2,-2),0,a)}function cx(i,t,r,a,o){return qc(i,t,r,um,As(i,0,a),As(i,a+1,-1),a,o)}function vw(i,t,r){switch(_j(i,t)){case 5103:return Ye+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ye+i+i;case 4789:return Zo+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return Ye+i+Zo+i+rt+i+i;case 5936:switch(Pt(i,t+11)){case 114:return Ye+i+rt+Ce(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return Ye+i+rt+Ce(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return Ye+i+rt+Ce(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return Ye+i+rt+i+i;case 6165:return Ye+i+rt+"flex-"+i+i;case 5187:return Ye+i+Ce(i,/(\w+).+(:[^]+)/,Ye+"box-$1$2"+rt+"flex-$1$2")+i;case 5443:return Ye+i+rt+"flex-item-"+Ce(i,/flex-|-self/g,"")+(Un(i,/flex-|baseline/)?"":rt+"grid-row-"+Ce(i,/flex-|-self/g,""))+i;case 4675:return Ye+i+rt+"flex-line-pack"+Ce(i,/align-content|flex-|-self/g,"")+i;case 5548:return Ye+i+rt+Ce(i,"shrink","negative")+i;case 5292:return Ye+i+rt+Ce(i,"basis","preferred-size")+i;case 6060:return Ye+"box-"+Ce(i,"-grow","")+Ye+i+rt+Ce(i,"grow","positive")+i;case 4554:return Ye+Ce(i,/([^-])(transform)/g,"$1"+Ye+"$2")+i;case 6187:return Ce(Ce(Ce(i,/(zoom-|grab)/,Ye+"$1"),/(image-set)/,Ye+"$1"),i,"")+i;case 5495:case 3959:return Ce(i,/(image-set\([^]*)/,Ye+"$1$`$1");case 4968:return Ce(Ce(i,/(.+:)(flex-)?(.*)/,Ye+"box-pack:$3"+rt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ye+i+i;case 4200:if(!Un(i,/flex-|baseline/))return rt+"grid-column-align"+As(i,t)+i;break;case 2592:case 3360:return rt+Ce(i,"template-","")+i;case 4384:case 3616:return r&&r.some(function(a,o){return t=o,Un(a.props,/grid-\w+-end/)})?~hc(i+(r=r[t].value),"span",0)?i:rt+Ce(i,"-start","")+i+rt+"grid-row-span:"+(~hc(r,"span",0)?Un(r,/\d+/):+Un(r,/\d+/)-+Un(i,/\d+/))+";":rt+Ce(i,"-start","")+i;case 4896:case 4128:return r&&r.some(function(a){return Un(a.props,/grid-\w+-start/)})?i:rt+Ce(Ce(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return Ce(i,/(.+)-inline(.+)/,Ye+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(cn(i)-1-t>6)switch(Pt(i,t+1)){case 109:if(Pt(i,t+4)!==45)break;case 102:return Ce(i,/(.+:)(.+)-([^]+)/,"$1"+Ye+"$2-$3$1"+Zo+(Pt(i,t+3)==108?"$3":"$2-$3"))+i;case 115:return~hc(i,"stretch",0)?vw(Ce(i,"stretch","fill-available"),t,r)+i:i}break;case 5152:case 5920:return Ce(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,o,u,c,h,f,p){return rt+o+":"+u+p+(c?rt+o+"-span:"+(h?f:+f-+u)+p:"")+i});case 4949:if(Pt(i,t+6)===121)return Ce(i,":",":"+Ye)+i;break;case 6444:switch(Pt(i,Pt(i,14)===45?18:11)){case 120:return Ce(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ye+(Pt(i,14)===45?"inline-":"")+"box$3$1"+Ye+"$2$3$1"+rt+"$2box$3")+i;case 100:return Ce(i,":",":"+rt)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ce(i,"scroll-","scroll-snap-")+i}return i}function Tc(i,t){for(var r="",a=0;a<i.length;a++)r+=t(i[a],a,i,t)||"";return r}function Pj(i,t,r,a){switch(i.type){case Aj:if(i.children.length)break;case Sj:case um:return i.return=i.return||i.value;case fw:return"";case hw:return i.return=i.value+"{"+Tc(i.children,a)+"}";case $c:if(!cn(i.value=i.props.join(",")))return""}return cn(r=Tc(i.children,a))?i.return=i.value+"{"+r+"}":""}function Uj(i){var t=gw(i);return function(r,a,o,u){for(var c="",h=0;h<t;h++)c+=i[h](r,a,o,u)||"";return c}}function Nj(i){return function(t){t.root||(t=t.return)&&i(t)}}function Bj(i,t,r,a){if(i.length>-1&&!i.return)switch(i.type){case um:i.return=vw(i.value,i.length,r);return;case hw:return Tc([pr(i,{value:Ce(i.value,"@","@"+Ye)})],a);case $c:if(i.length)return Ej(r=i.props,function(o){switch(Un(o,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":es(pr(i,{props:[Ce(o,/:(read-\w+)/,":"+Zo+"$1")]})),es(pr(i,{props:[o]})),vp(i,{props:lx(r,a)});break;case"::placeholder":es(pr(i,{props:[Ce(o,/:(plac\w+)/,":"+Ye+"input-$1")]})),es(pr(i,{props:[Ce(o,/:(plac\w+)/,":"+Zo+"$1")]})),es(pr(i,{props:[Ce(o,/:(plac\w+)/,rt+"input-$1")]})),es(pr(i,{props:[o]})),vp(i,{props:lx(r,a)});break}return""})}}var Vj={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},hi={},Es=typeof process<"u"&&hi!==void 0&&(hi.REACT_APP_SC_ATTR||hi.SC_ATTR)||"data-styled",xw="active",bw="data-styled-version",Fc="6.1.15",dm=`/*!sc*/
`,jc=typeof window<"u"&&"HTMLElement"in window,$j=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&hi!==void 0&&hi.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&hi.REACT_APP_SC_DISABLE_SPEEDY!==""?hi.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&hi.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&hi!==void 0&&hi.SC_DISABLE_SPEEDY!==void 0&&hi.SC_DISABLE_SPEEDY!==""&&hi.SC_DISABLE_SPEEDY!=="false"&&hi.SC_DISABLE_SPEEDY),Hj={},Ic=Object.freeze([]),Ts=Object.freeze({});function ww(i,t,r){return r===void 0&&(r=Ts),i.theme!==r.theme&&i.theme||t||r.theme}var Sw=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),qj=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Gj=/(^-|-$)/g;function dx(i){return i.replace(qj,"-").replace(Gj,"")}var Fj=/(a)(d)/gi,Bu=52,fx=function(i){return String.fromCharCode(i+(i>25?39:97))};function wp(i){var t,r="";for(t=Math.abs(i);t>Bu;t=t/Bu|0)r=fx(t%Bu)+r;return(fx(t%Bu)+r).replace(Fj,"$1-$2")}var Sh,Aw=5381,ps=function(i,t){for(var r=t.length;r;)i=33*i^t.charCodeAt(--r);return i},_w=function(i){return ps(Aw,i)};function fm(i){return wp(_w(i)>>>0)}function Ij(i){return i.displayName||i.name||"Component"}function Ah(i){return typeof i=="string"&&!0}var Ew=typeof Symbol=="function"&&Symbol.for,Tw=Ew?Symbol.for("react.memo"):60115,Yj=Ew?Symbol.for("react.forward_ref"):60112,Kj={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Xj={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},jw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Qj=((Sh={})[Yj]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Sh[Tw]=jw,Sh);function hx(i){return("type"in(t=i)&&t.type.$$typeof)===Tw?jw:"$$typeof"in i?Qj[i.$$typeof]:Kj;var t}var Zj=Object.defineProperty,Wj=Object.getOwnPropertyNames,px=Object.getOwnPropertySymbols,Jj=Object.getOwnPropertyDescriptor,eR=Object.getPrototypeOf,mx=Object.prototype;function Rw(i,t,r){if(typeof t!="string"){if(mx){var a=eR(t);a&&a!==mx&&Rw(i,a,r)}var o=Wj(t);px&&(o=o.concat(px(t)));for(var u=hx(i),c=hx(t),h=0;h<o.length;++h){var f=o[h];if(!(f in Xj||r&&r[f]||c&&f in c||u&&f in u)){var p=Jj(t,f);try{Zj(i,f,p)}catch{}}}}return i}function js(i){return typeof i=="function"}function hm(i){return typeof i=="object"&&"styledComponentId"in i}function ca(i,t){return i&&t?"".concat(i," ").concat(t):i||t||""}function Rc(i,t){if(i.length===0)return"";for(var r=i[0],a=1;a<i.length;a++)r+=i[a];return r}function ol(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function Sp(i,t,r){if(r===void 0&&(r=!1),!r&&!ol(i)&&!Array.isArray(i))return t;if(Array.isArray(t))for(var a=0;a<t.length;a++)i[a]=Sp(i[a],t[a]);else if(ol(t))for(var a in t)i[a]=Sp(i[a],t[a]);return i}function pm(i,t){Object.defineProperty(i,"toString",{value:t})}function xl(i){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var tR=function(){function i(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return i.prototype.indexOfGroup=function(t){for(var r=0,a=0;a<t;a++)r+=this.groupSizes[a];return r},i.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var a=this.groupSizes,o=a.length,u=o;t>=u;)if((u<<=1)<0)throw xl(16,"".concat(t));this.groupSizes=new Uint32Array(u),this.groupSizes.set(a),this.length=u;for(var c=o;c<u;c++)this.groupSizes[c]=0}for(var h=this.indexOfGroup(t+1),f=(c=0,r.length);c<f;c++)this.tag.insertRule(h,r[c])&&(this.groupSizes[t]++,h++)},i.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],a=this.indexOfGroup(t),o=a+r;this.groupSizes[t]=0;for(var u=a;u<o;u++)this.tag.deleteRule(a)}},i.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var a=this.groupSizes[t],o=this.indexOfGroup(t),u=o+a,c=o;c<u;c++)r+="".concat(this.tag.getRule(c)).concat(dm);return r},i}(),gc=new Map,Cc=new Map,yc=1,Vu=function(i){if(gc.has(i))return gc.get(i);for(;Cc.has(yc);)yc++;var t=yc++;return gc.set(i,t),Cc.set(t,i),t},iR=function(i,t){yc=t+1,gc.set(i,t),Cc.set(t,i)},nR="style[".concat(Es,"][").concat(bw,'="').concat(Fc,'"]'),rR=new RegExp("^".concat(Es,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),aR=function(i,t,r){for(var a,o=r.split(","),u=0,c=o.length;u<c;u++)(a=o[u])&&i.registerName(t,a)},sR=function(i,t){for(var r,a=((r=t.textContent)!==null&&r!==void 0?r:"").split(dm),o=[],u=0,c=a.length;u<c;u++){var h=a[u].trim();if(h){var f=h.match(rR);if(f){var p=0|parseInt(f[1],10),g=f[2];p!==0&&(iR(g,p),aR(i,g,f[3]),i.getTag().insertRules(p,o)),o.length=0}else o.push(h)}}},gx=function(i){for(var t=document.querySelectorAll(nR),r=0,a=t.length;r<a;r++){var o=t[r];o&&o.getAttribute(Es)!==xw&&(sR(i,o),o.parentNode&&o.parentNode.removeChild(o))}};function oR(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Cw=function(i){var t=document.head,r=i||t,a=document.createElement("style"),o=function(h){var f=Array.from(h.querySelectorAll("style[".concat(Es,"]")));return f[f.length-1]}(r),u=o!==void 0?o.nextSibling:null;a.setAttribute(Es,xw),a.setAttribute(bw,Fc);var c=oR();return c&&a.setAttribute("nonce",c),r.insertBefore(a,u),a},lR=function(){function i(t){this.element=Cw(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var a=document.styleSheets,o=0,u=a.length;o<u;o++){var c=a[o];if(c.ownerNode===r)return c}throw xl(17)}(this.element),this.length=0}return i.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},i.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},i.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},i}(),uR=function(){function i(t){this.element=Cw(t),this.nodes=this.element.childNodes,this.length=0}return i.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var a=document.createTextNode(r);return this.element.insertBefore(a,this.nodes[t]||null),this.length++,!0}return!1},i.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},i.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},i}(),cR=function(){function i(t){this.rules=[],this.length=0}return i.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},i.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},i.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},i}(),yx=jc,dR={isServer:!jc,useCSSOMInjection:!$j},kc=function(){function i(t,r,a){t===void 0&&(t=Ts),r===void 0&&(r={});var o=this;this.options=Xt(Xt({},dR),t),this.gs=r,this.names=new Map(a),this.server=!!t.isServer,!this.server&&jc&&yx&&(yx=!1,gx(this)),pm(this,function(){return function(u){for(var c=u.getTag(),h=c.length,f="",p=function(v){var x=function(j){return Cc.get(j)}(v);if(x===void 0)return"continue";var w=u.names.get(x),S=c.getGroup(v);if(w===void 0||!w.size||S.length===0)return"continue";var T="".concat(Es,".g").concat(v,'[id="').concat(x,'"]'),E="";w!==void 0&&w.forEach(function(j){j.length>0&&(E+="".concat(j,","))}),f+="".concat(S).concat(T,'{content:"').concat(E,'"}').concat(dm)},g=0;g<h;g++)p(g);return f}(o)})}return i.registerId=function(t){return Vu(t)},i.prototype.rehydrate=function(){!this.server&&jc&&gx(this)},i.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new i(Xt(Xt({},this.options),t),this.gs,r&&this.names||void 0)},i.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},i.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var a=r.useCSSOMInjection,o=r.target;return r.isServer?new cR(o):a?new lR(o):new uR(o)}(this.options),new tR(t)));var t},i.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},i.prototype.registerName=function(t,r){if(Vu(t),this.names.has(t))this.names.get(t).add(r);else{var a=new Set;a.add(r),this.names.set(t,a)}},i.prototype.insertRules=function(t,r,a){this.registerName(t,r),this.getTag().insertRules(Vu(t),a)},i.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},i.prototype.clearRules=function(t){this.getTag().clearGroup(Vu(t)),this.clearNames(t)},i.prototype.clearTag=function(){this.tag=void 0},i}(),fR=/&/g,hR=/^\s*\/\/.*$/gm;function kw(i,t){return i.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(a){return"".concat(t," ").concat(a)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=kw(r.children,t)),r})}function pR(i){var t,r,a,o=Ts,u=o.options,c=u===void 0?Ts:u,h=o.plugins,f=h===void 0?Ic:h,p=function(x,w,S){return S.startsWith(r)&&S.endsWith(r)&&S.replaceAll(r,"").length>0?".".concat(t):x},g=f.slice();g.push(function(x){x.type===$c&&x.value.includes("&")&&(x.props[0]=x.props[0].replace(fR,r).replace(a,p))}),c.prefix&&g.push(Bj),g.push(Pj);var v=function(x,w,S,T){w===void 0&&(w=""),S===void 0&&(S=""),T===void 0&&(T="&"),t=T,r=w,a=new RegExp("\\".concat(r,"\\b"),"g");var E=x.replace(hR,""),j=zj(S||w?"".concat(S," ").concat(w," { ").concat(E," }"):E);c.namespace&&(j=kw(j,c.namespace));var D=[];return Tc(j,Uj(g.concat(Nj(function(M){return D.push(M)})))),D};return v.hash=f.length?f.reduce(function(x,w){return w.name||xl(15),ps(x,w.name)},Aw).toString():"",v}var mR=new kc,Ap=pR(),Dw=Pi.createContext({shouldForwardProp:void 0,styleSheet:mR,stylis:Ap});Dw.Consumer;Pi.createContext(void 0);function _p(){return _.useContext(Dw)}var Ow=function(){function i(t,r){var a=this;this.inject=function(o,u){u===void 0&&(u=Ap);var c=a.name+u.hash;o.hasNameForId(a.id,c)||o.insertRules(a.id,c,u(a.rules,c,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,pm(this,function(){throw xl(12,String(a.name))})}return i.prototype.getName=function(t){return t===void 0&&(t=Ap),this.name+t.hash},i}(),gR=function(i){return i>="A"&&i<="Z"};function vx(i){for(var t="",r=0;r<i.length;r++){var a=i[r];if(r===1&&a==="-"&&i[0]==="-")return i;gR(a)?t+="-"+a.toLowerCase():t+=a}return t.startsWith("ms-")?"-"+t:t}var Mw=function(i){return i==null||i===!1||i===""},zw=function(i){var t,r,a=[];for(var o in i){var u=i[o];i.hasOwnProperty(o)&&!Mw(u)&&(Array.isArray(u)&&u.isCss||js(u)?a.push("".concat(vx(o),":"),u,";"):ol(u)?a.push.apply(a,Ss(Ss(["".concat(o," {")],zw(u),!1),["}"],!1)):a.push("".concat(vx(o),": ").concat((t=o,(r=u)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in Vj||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return a};function Sr(i,t,r,a){if(Mw(i))return[];if(hm(i))return[".".concat(i.styledComponentId)];if(js(i)){if(!js(u=i)||u.prototype&&u.prototype.isReactComponent||!t)return[i];var o=i(t);return Sr(o,t,r,a)}var u;return i instanceof Ow?r?(i.inject(r,a),[i.getName(a)]):[i]:ol(i)?zw(i):Array.isArray(i)?Array.prototype.concat.apply(Ic,i.map(function(c){return Sr(c,t,r,a)})):[i.toString()]}function Lw(i){for(var t=0;t<i.length;t+=1){var r=i[t];if(js(r)&&!hm(r))return!1}return!0}var yR=_w(Fc),vR=function(){function i(t,r,a){this.rules=t,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&Lw(t),this.componentId=r,this.baseHash=ps(yR,r),this.baseStyle=a,kc.registerId(r)}return i.prototype.generateAndInjectStyles=function(t,r,a){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,a):"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=ca(o,this.staticRulesId);else{var u=Rc(Sr(this.rules,t,r,a)),c=wp(ps(this.baseHash,u)>>>0);if(!r.hasNameForId(this.componentId,c)){var h=a(u,".".concat(c),void 0,this.componentId);r.insertRules(this.componentId,c,h)}o=ca(o,c),this.staticRulesId=c}else{for(var f=ps(this.baseHash,a.hash),p="",g=0;g<this.rules.length;g++){var v=this.rules[g];if(typeof v=="string")p+=v;else if(v){var x=Rc(Sr(v,t,r,a));f=ps(f,x+g),p+=x}}if(p){var w=wp(f>>>0);r.hasNameForId(this.componentId,w)||r.insertRules(this.componentId,w,a(p,".".concat(w),void 0,this.componentId)),o=ca(o,w)}}return o},i}(),mm=Pi.createContext(void 0);mm.Consumer;var _h={};function xR(i,t,r){var a=hm(i),o=i,u=!Ah(i),c=t.attrs,h=c===void 0?Ic:c,f=t.componentId,p=f===void 0?function(V,P){var R=typeof V!="string"?"sc":dx(V);_h[R]=(_h[R]||0)+1;var F="".concat(R,"-").concat(fm(Fc+R+_h[R]));return P?"".concat(P,"-").concat(F):F}(t.displayName,t.parentComponentId):f,g=t.displayName,v=g===void 0?function(V){return Ah(V)?"styled.".concat(V):"Styled(".concat(Ij(V),")")}(i):g,x=t.displayName&&t.componentId?"".concat(dx(t.displayName),"-").concat(t.componentId):t.componentId||p,w=a&&o.attrs?o.attrs.concat(h).filter(Boolean):h,S=t.shouldForwardProp;if(a&&o.shouldForwardProp){var T=o.shouldForwardProp;if(t.shouldForwardProp){var E=t.shouldForwardProp;S=function(V,P){return T(V,P)&&E(V,P)}}else S=T}var j=new vR(r,x,a?o.componentStyle:void 0);function D(V,P){return function(R,F,I){var G=R.attrs,te=R.componentStyle,he=R.defaultProps,Ae=R.foldedComponentIds,Ne=R.styledComponentId,Fe=R.target,qe=Pi.useContext(mm),J=_p(),ae=R.shouldForwardProp||J.shouldForwardProp,X=ww(F,qe,he)||Ts,ne=function(_e,ye,dt){for(var Oe,Ie=Xt(Xt({},ye),{className:void 0,theme:dt}),Ee=0;Ee<_e.length;Ee+=1){var ft=js(Oe=_e[Ee])?Oe(Ie):Oe;for(var Nt in ft)Ie[Nt]=Nt==="className"?ca(Ie[Nt],ft[Nt]):Nt==="style"?Xt(Xt({},Ie[Nt]),ft[Nt]):ft[Nt]}return ye.className&&(Ie.className=ca(Ie.className,ye.className)),Ie}(G,F,X),k=ne.as||Fe,Q={};for(var oe in ne)ne[oe]===void 0||oe[0]==="$"||oe==="as"||oe==="theme"&&ne.theme===X||(oe==="forwardedAs"?Q.as=ne.forwardedAs:ae&&!ae(oe,k)||(Q[oe]=ne[oe]));var le=function(_e,ye){var dt=_p(),Oe=_e.generateAndInjectStyles(ye,dt.styleSheet,dt.stylis);return Oe}(te,ne),re=ca(Ae,Ne);return le&&(re+=" "+le),ne.className&&(re+=" "+ne.className),Q[Ah(k)&&!Sw.has(k)?"class":"className"]=re,I&&(Q.ref=I),_.createElement(k,Q)}(M,V,P)}D.displayName=v;var M=Pi.forwardRef(D);return M.attrs=w,M.componentStyle=j,M.displayName=v,M.shouldForwardProp=S,M.foldedComponentIds=a?ca(o.foldedComponentIds,o.styledComponentId):"",M.styledComponentId=x,M.target=a?o.target:i,Object.defineProperty(M,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(V){this._foldedDefaultProps=a?function(P){for(var R=[],F=1;F<arguments.length;F++)R[F-1]=arguments[F];for(var I=0,G=R;I<G.length;I++)Sp(P,G[I],!0);return P}({},o.defaultProps,V):V}}),pm(M,function(){return".".concat(M.styledComponentId)}),u&&Rw(M,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),M}function xx(i,t){for(var r=[i[0]],a=0,o=t.length;a<o;a+=1)r.push(t[a],i[a+1]);return r}var bx=function(i){return Object.assign(i,{isCss:!0})};function gm(i){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(js(i)||ol(i))return bx(Sr(xx(Ic,Ss([i],t,!0))));var a=i;return t.length===0&&a.length===1&&typeof a[0]=="string"?Sr(a):bx(Sr(xx(a,t)))}function Ep(i,t,r){if(r===void 0&&(r=Ts),!t)throw xl(1,t);var a=function(o){for(var u=[],c=1;c<arguments.length;c++)u[c-1]=arguments[c];return i(t,r,gm.apply(void 0,Ss([o],u,!1)))};return a.attrs=function(o){return Ep(i,t,Xt(Xt({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},a.withConfig=function(o){return Ep(i,t,Xt(Xt({},r),o))},a}var Pw=function(i){return Ep(xR,i)},O=Pw;Sw.forEach(function(i){O[i]=Pw(i)});var bR=function(){function i(t,r){this.rules=t,this.componentId=r,this.isStatic=Lw(t),kc.registerId(this.componentId+1)}return i.prototype.createStyles=function(t,r,a,o){var u=o(Rc(Sr(this.rules,r,a,o)),""),c=this.componentId+t;a.insertRules(c,c,u)},i.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},i.prototype.renderStyles=function(t,r,a,o){t>2&&kc.registerId(this.componentId+t),this.removeStyles(t,a),this.createStyles(t,r,a,o)},i}();function wR(i){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var a=gm.apply(void 0,Ss([i],t,!1)),o="sc-global-".concat(fm(JSON.stringify(a))),u=new bR(a,o),c=function(f){var p=_p(),g=Pi.useContext(mm),v=Pi.useRef(p.styleSheet.allocateGSInstance(o)).current;return p.styleSheet.server&&h(v,f,p.styleSheet,g,p.stylis),Pi.useLayoutEffect(function(){if(!p.styleSheet.server)return h(v,f,p.styleSheet,g,p.stylis),function(){return u.removeStyles(v,p.styleSheet)}},[v,f,p.styleSheet,g,p.stylis]),null};function h(f,p,g,v,x){if(u.isStatic)u.renderStyles(f,Hj,g,x);else{var w=Xt(Xt({},p),{theme:ww(p,v,c.defaultProps)});u.renderStyles(f,w,g,x)}}return Pi.memo(c)}function SR(i){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var a=Rc(gm.apply(void 0,Ss([i],t,!1))),o=fm(a);return new Ow(o,a)}var Eh,wx;function AR(){return wx||(wx=1,Eh=function i(t,r){if(t===r)return!0;if(t&&r&&typeof t=="object"&&typeof r=="object"){if(t.constructor!==r.constructor)return!1;var a,o,u;if(Array.isArray(t)){if(a=t.length,a!=r.length)return!1;for(o=a;o--!==0;)if(!i(t[o],r[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if(u=Object.keys(t),a=u.length,a!==Object.keys(r).length)return!1;for(o=a;o--!==0;)if(!Object.prototype.hasOwnProperty.call(r,u[o]))return!1;for(o=a;o--!==0;){var c=u[o];if(!i(t[c],r[c]))return!1}return!0}return t!==t&&r!==r}),Eh}var _R=AR();const ER=Ms(_R);var $u={exports:{}},Th,Sx;function TR(){if(Sx)return Th;Sx=1;var i;/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/return i=function(){var t={},r={};return t.on=function(a,o){var u={name:a,handler:o};return r[a]=r[a]||[],r[a].unshift(u),u},t.off=function(a){var o=r[a.name].indexOf(a);o!==-1&&r[a.name].splice(o,1)},t.trigger=function(a,o){var u=r[a],c;if(u)for(c=u.length;c--;)u[c].handler(o)},t},Th=i,Th}var Hu={exports:{}},jh,Ax;function jR(){if(Ax)return jh;Ax=1,jh=function(o,u,c){var h=document.head||document.getElementsByTagName("head")[0],f=document.createElement("script");typeof u=="function"&&(c=u,u={}),u=u||{},c=c||function(){},f.type=u.type||"text/javascript",f.charset=u.charset||"utf8",f.async="async"in u?!!u.async:!0,f.src=o,u.attrs&&i(f,u.attrs),u.text&&(f.text=""+u.text);var p="onload"in f?t:r;p(f,c),f.onload||t(f,c),h.appendChild(f)};function i(a,o){for(var u in o)a.setAttribute(u,o[u])}function t(a,o){a.onload=function(){this.onerror=this.onload=null,o(null,a)},a.onerror=function(){this.onerror=this.onload=null,o(new Error("Failed to load "+this.src),a)}}function r(a,o){a.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,o(null,a))}}return jh}var _x;function RR(){return _x||(_x=1,function(i,t){Object.defineProperty(t,"__esModule",{value:!0});var r=jR(),a=o(r);function o(u){return u&&u.__esModule?u:{default:u}}t.default=function(u){var c=new Promise(function(h){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function){h(window.YT);return}else{var f=window.location.protocol==="http:"?"http:":"https:";(0,a.default)(f+"//www.youtube.com/iframe_api",function(g){g&&u.trigger("error",g)})}var p=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){p&&p(),h(window.YT)}});return c},i.exports=t.default}(Hu,Hu.exports)),Hu.exports}var qu={exports:{}},Gu={exports:{}},Fu={exports:{}},Rh,Ex;function CR(){if(Ex)return Rh;Ex=1;var i=1e3,t=i*60,r=t*60,a=r*24,o=a*365.25;Rh=function(p,g){g=g||{};var v=typeof p;if(v==="string"&&p.length>0)return u(p);if(v==="number"&&isNaN(p)===!1)return g.long?h(p):c(p);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(p))};function u(p){if(p=String(p),!(p.length>100)){var g=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(p);if(g){var v=parseFloat(g[1]),x=(g[2]||"ms").toLowerCase();switch(x){case"years":case"year":case"yrs":case"yr":case"y":return v*o;case"days":case"day":case"d":return v*a;case"hours":case"hour":case"hrs":case"hr":case"h":return v*r;case"minutes":case"minute":case"mins":case"min":case"m":return v*t;case"seconds":case"second":case"secs":case"sec":case"s":return v*i;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return v;default:return}}}}function c(p){return p>=a?Math.round(p/a)+"d":p>=r?Math.round(p/r)+"h":p>=t?Math.round(p/t)+"m":p>=i?Math.round(p/i)+"s":p+"ms"}function h(p){return f(p,a,"day")||f(p,r,"hour")||f(p,t,"minute")||f(p,i,"second")||p+" ms"}function f(p,g,v){if(!(p<g))return p<g*1.5?Math.floor(p/g)+" "+v:Math.ceil(p/g)+" "+v+"s"}return Rh}var Tx;function kR(){return Tx||(Tx=1,function(i,t){t=i.exports=o.debug=o.default=o,t.coerce=f,t.disable=c,t.enable=u,t.enabled=h,t.humanize=CR(),t.names=[],t.skips=[],t.formatters={};var r;function a(p){var g=0,v;for(v in p)g=(g<<5)-g+p.charCodeAt(v),g|=0;return t.colors[Math.abs(g)%t.colors.length]}function o(p){function g(){if(g.enabled){var v=g,x=+new Date,w=x-(r||x);v.diff=w,v.prev=r,v.curr=x,r=x;for(var S=new Array(arguments.length),T=0;T<S.length;T++)S[T]=arguments[T];S[0]=t.coerce(S[0]),typeof S[0]!="string"&&S.unshift("%O");var E=0;S[0]=S[0].replace(/%([a-zA-Z%])/g,function(D,M){if(D==="%%")return D;E++;var V=t.formatters[M];if(typeof V=="function"){var P=S[E];D=V.call(v,P),S.splice(E,1),E--}return D}),t.formatArgs.call(v,S);var j=g.log||t.log||console.log.bind(console);j.apply(v,S)}}return g.namespace=p,g.enabled=t.enabled(p),g.useColors=t.useColors(),g.color=a(p),typeof t.init=="function"&&t.init(g),g}function u(p){t.save(p),t.names=[],t.skips=[];for(var g=(typeof p=="string"?p:"").split(/[\s,]+/),v=g.length,x=0;x<v;x++)g[x]&&(p=g[x].replace(/\*/g,".*?"),p[0]==="-"?t.skips.push(new RegExp("^"+p.substr(1)+"$")):t.names.push(new RegExp("^"+p+"$")))}function c(){t.enable("")}function h(p){var g,v;for(g=0,v=t.skips.length;g<v;g++)if(t.skips[g].test(p))return!1;for(g=0,v=t.names.length;g<v;g++)if(t.names[g].test(p))return!0;return!1}function f(p){return p instanceof Error?p.stack||p.message:p}}(Fu,Fu.exports)),Fu.exports}var jx;function DR(){return jx||(jx=1,function(i,t){var r={};t=i.exports=kR(),t.log=u,t.formatArgs=o,t.save=c,t.load=h,t.useColors=a,t.storage=typeof chrome<"u"&&typeof chrome.storage<"u"?chrome.storage.local:f(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"];function a(){return typeof window<"u"&&window.process&&window.process.type==="renderer"?!0:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}t.formatters.j=function(p){try{return JSON.stringify(p)}catch(g){return"[UnexpectedJSONParseError]: "+g.message}};function o(p){var g=this.useColors;if(p[0]=(g?"%c":"")+this.namespace+(g?" %c":" ")+p[0]+(g?"%c ":" ")+"+"+t.humanize(this.diff),!!g){var v="color: "+this.color;p.splice(1,0,v,"color: inherit");var x=0,w=0;p[0].replace(/%[a-zA-Z%]/g,function(S){S!=="%%"&&(x++,S==="%c"&&(w=x))}),p.splice(w,0,v)}}function u(){return typeof console=="object"&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function c(p){try{p==null?t.storage.removeItem("debug"):t.storage.debug=p}catch{}}function h(){var p;try{p=t.storage.debug}catch{}return!p&&typeof process<"u"&&"env"in process&&(p=r.DEBUG),p}t.enable(h());function f(){try{return window.localStorage}catch{}}}(Gu,Gu.exports)),Gu.exports}var Iu={exports:{}},Rx;function OR(){return Rx||(Rx=1,function(i,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],i.exports=t.default}(Iu,Iu.exports)),Iu.exports}var Yu={exports:{}},Cx;function MR(){return Cx||(Cx=1,function(i,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],i.exports=t.default}(Yu,Yu.exports)),Yu.exports}var Ku={exports:{}},Xu={exports:{}},kx;function zR(){return kx||(kx=1,function(i,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},i.exports=t.default}(Xu,Xu.exports)),Xu.exports}var Dx;function LR(){return Dx||(Dx=1,function(i,t){Object.defineProperty(t,"__esModule",{value:!0});var r=zR(),a=o(r);function o(u){return u&&u.__esModule?u:{default:u}}t.default={pauseVideo:{acceptableStates:[a.default.ENDED,a.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[a.default.ENDED,a.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[a.default.ENDED,a.default.PLAYING,a.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},i.exports=t.default}(Ku,Ku.exports)),Ku.exports}var Ox;function PR(){return Ox||(Ox=1,function(i,t){Object.defineProperty(t,"__esModule",{value:!0});var r=DR(),a=g(r),o=OR(),u=g(o),c=MR(),h=g(c),f=LR(),p=g(f);function g(w){return w&&w.__esModule?w:{default:w}}var v=(0,a.default)("youtube-player"),x={};x.proxyEvents=function(w){var S={},T=function(F){var I="on"+F.slice(0,1).toUpperCase()+F.slice(1);S[I]=function(G){v('event "%s"',I,G),w.trigger(F,G)}},E=!0,j=!1,D=void 0;try{for(var M=h.default[Symbol.iterator](),V;!(E=(V=M.next()).done);E=!0){var P=V.value;T(P)}}catch(R){j=!0,D=R}finally{try{!E&&M.return&&M.return()}finally{if(j)throw D}}return S},x.promisifyPlayer=function(w){var S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,T={},E=function(I){S&&p.default[I]?T[I]=function(){for(var G=arguments.length,te=Array(G),he=0;he<G;he++)te[he]=arguments[he];return w.then(function(Ae){var Ne=p.default[I],Fe=Ae.getPlayerState(),qe=Ae[I].apply(Ae,te);return Ne.stateChangeRequired||Array.isArray(Ne.acceptableStates)&&Ne.acceptableStates.indexOf(Fe)===-1?new Promise(function(J){var ae=function X(){var ne=Ae.getPlayerState(),k=void 0;typeof Ne.timeout=="number"&&(k=setTimeout(function(){Ae.removeEventListener("onStateChange",X),J()},Ne.timeout)),Array.isArray(Ne.acceptableStates)&&Ne.acceptableStates.indexOf(ne)!==-1&&(Ae.removeEventListener("onStateChange",X),clearTimeout(k),J())};Ae.addEventListener("onStateChange",ae)}).then(function(){return qe}):qe})}:T[I]=function(){for(var G=arguments.length,te=Array(G),he=0;he<G;he++)te[he]=arguments[he];return w.then(function(Ae){return Ae[I].apply(Ae,te)})}},j=!0,D=!1,M=void 0;try{for(var V=u.default[Symbol.iterator](),P;!(j=(P=V.next()).done);j=!0){var R=P.value;E(R)}}catch(F){D=!0,M=F}finally{try{!j&&V.return&&V.return()}finally{if(D)throw M}}return T},t.default=x,i.exports=t.default}(qu,qu.exports)),qu.exports}var Mx;function UR(){return Mx||(Mx=1,function(i,t){Object.defineProperty(t,"__esModule",{value:!0});var r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(v){return typeof v}:function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v},a=TR(),o=p(a),u=RR(),c=p(u),h=PR(),f=p(h);function p(v){return v&&v.__esModule?v:{default:v}}var g=void 0;t.default=function(v){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,S=(0,o.default)();if(g||(g=(0,c.default)(S)),x.events)throw new Error("Event handlers cannot be overwritten.");if(typeof v=="string"&&!document.getElementById(v))throw new Error('Element "'+v+'" does not exist.');x.events=f.default.proxyEvents(S);var T=new Promise(function(j){if((typeof v>"u"?"undefined":r(v))==="object"&&v.playVideo instanceof Function){var D=v;j(D)}else g.then(function(M){var V=new M.Player(v,x);return S.on("ready",function(){j(V)}),null})}),E=f.default.promisifyPlayer(T,w);return E.on=S.on,E.off=S.off,E},i.exports=t.default}($u,$u.exports)),$u.exports}var NR=UR();const BR=Ms(NR);var VR=Object.defineProperty,$R=Object.defineProperties,HR=Object.getOwnPropertyDescriptors,zx=Object.getOwnPropertySymbols,qR=Object.prototype.hasOwnProperty,GR=Object.prototype.propertyIsEnumerable,Lx=(i,t,r)=>t in i?VR(i,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[t]=r,Tp=(i,t)=>{for(var r in t||(t={}))qR.call(t,r)&&Lx(i,r,t[r]);if(zx)for(var r of zx(t))GR.call(t,r)&&Lx(i,r,t[r]);return i},jp=(i,t)=>$R(i,HR(t)),FR=(i,t,r)=>new Promise((a,o)=>{var u=f=>{try{h(r.next(f))}catch(p){o(p)}},c=f=>{try{h(r.throw(f))}catch(p){o(p)}},h=f=>f.done?a(f.value):Promise.resolve(f.value).then(u,c);h((r=r.apply(i,t)).next())});function IR(i,t){var r,a;if(i.videoId!==t.videoId)return!0;const o=((r=i.opts)==null?void 0:r.playerVars)||{},u=((a=t.opts)==null?void 0:a.playerVars)||{};return o.start!==u.start||o.end!==u.end}function Px(i={}){return jp(Tp({},i),{height:0,width:0,playerVars:jp(Tp({},i.playerVars),{autoplay:0,start:0,end:0})})}function YR(i,t){return i.videoId!==t.videoId||!ER(Px(i.opts),Px(t.opts))}function KR(i,t){var r,a,o,u;return i.id!==t.id||i.className!==t.className||((r=i.opts)==null?void 0:r.width)!==((a=t.opts)==null?void 0:a.width)||((o=i.opts)==null?void 0:o.height)!==((u=t.opts)==null?void 0:u.height)||i.iframeClassName!==t.iframeClassName||i.title!==t.title}var XR={videoId:"",id:"",className:"",iframeClassName:"",style:{},title:"",loading:void 0,opts:{},onReady:()=>{},onError:()=>{},onPlay:()=>{},onPause:()=>{},onEnd:()=>{},onStateChange:()=>{},onPlaybackRateChange:()=>{},onPlaybackQualityChange:()=>{}},QR={videoId:Se.string,id:Se.string,className:Se.string,iframeClassName:Se.string,style:Se.object,title:Se.string,loading:Se.oneOf(["lazy","eager"]),opts:Se.objectOf(Se.any),onReady:Se.func,onError:Se.func,onPlay:Se.func,onPause:Se.func,onEnd:Se.func,onStateChange:Se.func,onPlaybackRateChange:Se.func,onPlaybackQualityChange:Se.func},vc=class extends Pi.Component{constructor(i){super(i),this.destroyPlayerPromise=void 0,this.onPlayerReady=t=>{var r,a;return(a=(r=this.props).onReady)==null?void 0:a.call(r,t)},this.onPlayerError=t=>{var r,a;return(a=(r=this.props).onError)==null?void 0:a.call(r,t)},this.onPlayerStateChange=t=>{var r,a,o,u,c,h,f,p;switch((a=(r=this.props).onStateChange)==null||a.call(r,t),t.data){case vc.PlayerState.ENDED:(u=(o=this.props).onEnd)==null||u.call(o,t);break;case vc.PlayerState.PLAYING:(h=(c=this.props).onPlay)==null||h.call(c,t);break;case vc.PlayerState.PAUSED:(p=(f=this.props).onPause)==null||p.call(f,t);break}},this.onPlayerPlaybackRateChange=t=>{var r,a;return(a=(r=this.props).onPlaybackRateChange)==null?void 0:a.call(r,t)},this.onPlayerPlaybackQualityChange=t=>{var r,a;return(a=(r=this.props).onPlaybackQualityChange)==null?void 0:a.call(r,t)},this.destroyPlayer=()=>this.internalPlayer?(this.destroyPlayerPromise=this.internalPlayer.destroy().then(()=>this.destroyPlayerPromise=void 0),this.destroyPlayerPromise):Promise.resolve(),this.createPlayer=()=>{if(typeof document>"u")return;if(this.destroyPlayerPromise){this.destroyPlayerPromise.then(this.createPlayer);return}const t=jp(Tp({},this.props.opts),{videoId:this.props.videoId});this.internalPlayer=BR(this.container,t),this.internalPlayer.on("ready",this.onPlayerReady),this.internalPlayer.on("error",this.onPlayerError),this.internalPlayer.on("stateChange",this.onPlayerStateChange),this.internalPlayer.on("playbackRateChange",this.onPlayerPlaybackRateChange),this.internalPlayer.on("playbackQualityChange",this.onPlayerPlaybackQualityChange),(this.props.title||this.props.loading)&&this.internalPlayer.getIframe().then(r=>{this.props.title&&r.setAttribute("title",this.props.title),this.props.loading&&r.setAttribute("loading",this.props.loading)})},this.resetPlayer=()=>this.destroyPlayer().then(this.createPlayer),this.updatePlayer=()=>{var t;(t=this.internalPlayer)==null||t.getIframe().then(r=>{this.props.id?r.setAttribute("id",this.props.id):r.removeAttribute("id"),this.props.iframeClassName?r.setAttribute("class",this.props.iframeClassName):r.removeAttribute("class"),this.props.opts&&this.props.opts.width?r.setAttribute("width",this.props.opts.width.toString()):r.removeAttribute("width"),this.props.opts&&this.props.opts.height?r.setAttribute("height",this.props.opts.height.toString()):r.removeAttribute("height"),this.props.title?r.setAttribute("title",this.props.title):r.setAttribute("title","YouTube video player"),this.props.loading?r.setAttribute("loading",this.props.loading):r.removeAttribute("loading")})},this.getInternalPlayer=()=>this.internalPlayer,this.updateVideo=()=>{var t,r,a,o;if(typeof this.props.videoId>"u"||this.props.videoId===null){(t=this.internalPlayer)==null||t.stopVideo();return}let u=!1;const c={videoId:this.props.videoId};if((r=this.props.opts)!=null&&r.playerVars&&(u=this.props.opts.playerVars.autoplay===1,"start"in this.props.opts.playerVars&&(c.startSeconds=this.props.opts.playerVars.start),"end"in this.props.opts.playerVars&&(c.endSeconds=this.props.opts.playerVars.end)),u){(a=this.internalPlayer)==null||a.loadVideoById(c);return}(o=this.internalPlayer)==null||o.cueVideoById(c)},this.refContainer=t=>{this.container=t},this.container=null,this.internalPlayer=null}componentDidMount(){this.createPlayer()}componentDidUpdate(i){return FR(this,null,function*(){KR(i,this.props)&&this.updatePlayer(),YR(i,this.props)&&(yield this.resetPlayer()),IR(i,this.props)&&this.updateVideo()})}componentWillUnmount(){this.destroyPlayer()}render(){return Pi.createElement("div",{className:this.props.className,style:this.props.style},Pi.createElement("div",{id:this.props.id,className:this.props.iframeClassName,ref:this.refContainer}))}},Yc=vc;Yc.propTypes=QR;Yc.defaultProps=XR;Yc.PlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};var xc=Yc;const Uw=_.createContext(),ZR=()=>{const{setbtnclick:i}=_.useContext(Uw),t=wr({query:"(max-width: 768px)"}),[r,a]=_.useState("식식에대하여"),[o,u]=_.useState(window.innerWidth);_.useEffect(()=>{const S=()=>{u(window.innerWidth)};return window.addEventListener("resize",S),()=>{window.removeEventListener("resize",S)}},[]);const c={height:o<=768?"200":o<=1024?"300":o<=1200?"350":o<=1440?"380":"390",width:"100%",playerVars:{autoplay:0}},h=_.useRef(null),f=_.useRef(null),p=_.useRef(null),g=_.useRef(null),v=S=>{let T;switch(S){case"식식에대하여":T=h;break;case"고백으로연결되다":T=f;break;case"섭식장애란":T=p;break;default:T=h}if(T&&T.current){const D=T.current.getBoundingClientRect().top+window.pageYOffset-95;window.scrollTo({top:D,behavior:"smooth"})}};_.useEffect(()=>{const S=()=>{if(!h.current||!f.current||!p.current)return;const T=window.scrollY,E=95;h.current.offsetTop-E;const j=f.current.offsetTop-E,D=p.current.offsetTop-E;T>=D?a("섭식장애란"):T>=j?a("고백으로연결되다"):a("식식에대하여")};return window.addEventListener("scroll",S),S(),()=>{window.removeEventListener("scroll",S)}},[]);const x=zs(),w=S=>{x(S,{replace:!0})};return y.jsxs(WR,{children:[!t&&y.jsxs(JR,{children:[y.jsx(Ch,{active:r==="식식에대하여",onClick:()=>v("식식에대하여"),style:{borderTop:"none"},children:"식식에 대하여"}),y.jsx(Ch,{active:r==="고백으로연결되다",onClick:()=>v("고백으로연결되다"),children:"고백으로 연결되다"}),y.jsx(Ch,{active:r==="섭식장애란",onClick:()=>v("섭식장애란"),children:"섭식장애란"})]}),y.jsxs(tC,{isMobile:t,children:[t&&y.jsxs(eC,{children:[y.jsx(kh,{active:r==="식식에대하여",onClick:()=>v("식식에대하여"),children:"식식에 대하여"}),y.jsx(kh,{active:r==="고백으로연결되다",onClick:()=>v("고백으로연결되다"),children:"고백으로 연결되다"}),y.jsx(kh,{active:r==="섭식장애란",onClick:()=>v("섭식장애란"),children:"섭식장애란"})]}),y.jsxs(iC,{isMobile:t,children:[y.jsxs(Qu,{id:"section1",ref:h,isMobile:t,children:[y.jsx(Zu,{isMobile:t,children:y.jsxs(Dh,{children:["식식(食)에",y.jsx("br",{}),"대하여"]})}),y.jsxs(Wu,{isMobile:t,children:[y.jsx(Oh,{children:"식식은 먹는 아픔을 겪는 모든 식구들을 지지합니다."}),y.jsxs(di,{children:["우리는 모두 매일 끼니를 해결합니다. 식구라는 말은 음식이 우리에게 무엇이나 소중하고",y.jsx("br",{}),"일상적임을 느낄 수 있는 친숙한 단어입니다. 그러나, 만약 우리가 더이상 즐겁게 식사를 할 수 없다면",y.jsx("br",{}),"우리 삶은 어떻게 변화할까요?"]}),y.jsxs(di,{children:["섭식 장애는 음식섭취에 어려움을 겪는 정신적, 사회적 질환을 말합니다. 대한민국에는 약 10만명의 사람들이",y.jsx("br",{}),"섭식장애로 어려움을 겪고 있다고 합니다. 하지만 공식적으로 집계되는 자료나 시스템이 없어, 잠재적으로는",y.jsx("br",{}),"얼마나 더 많은 사람들이 고통받고 있을지 모릅니다."]}),y.jsxs(di,{children:["프로아나, 뼈말라 등의 단어가 더욱 익숙한 사람도 있을 겁니다. '섭식장애=다이어트 부작용'이라고 여기는",y.jsx("br",{}),"사람들도 있겠지요. 하지만, 겨우 자극적인 몇 개의 단어로 정의내리기에 그 속에는 너무나 다양한 이야기가",y.jsx("br",{}),"존재합니다."]}),y.jsx(di,{children:y.jsx("u",{children:'"살려면 그 방법밖에 없었던 거잖아요"'})}),y.jsxs(di,{children:["때로는 살기 위해 삶에 반하는 행동을 할 때가 있습니다. 그 이유가 무엇인지는 감히 몇 가지 고정된 틀로는",y.jsx("br",{}),"짐작할 수 없겠습니다. 고통을 동반하는 행위를 하기까지는 각양각색의 사연이, 감히 재단할 수 없는 다양한",y.jsx("br",{}),"서사가 있을 것입니다."]})]})]}),y.jsxs(Qu,{id:"section2",ref:f,isMobile:t,children:[y.jsx(Zu,{isMobile:t,children:y.jsxs(Dh,{children:["고백으로",y.jsx("br",{}),"연결되다"]})}),y.jsxs(Wu,{isMobile:t,children:[y.jsx(Oh,{children:"식식은 씩씩한 고백을 하는 식구들의 목소리에 귀를 기울입니다."}),y.jsxs(di,{children:["숨기고픈 이야기를 꺼내어 발화함으로서 이어지는 개인적 서사의 연결,",y.jsx("br",{}),"식식은 식구들의 목소리가 실처럼 엮여 단단한 울타리가 되기를 꿈꿉니다."]}),y.jsxs(di,{children:["누군가의 목소리가 발화가 되어 나의 이야기를 뱉어내고, 경험이 연결되어 쉬이 끊어지지 않는 연대가 되기를, ",y.jsx("br",{})," 섭식장애 당사자의 이야기가 납작한 몇 가지의 단어로 정의내려지지 않는 사회를 만들고자",y.jsx("br",{}),"합니다. 환자가 아닌 경험자로서, 미디어 속 납작한 이야기가 아닌 '우리의 이야기'를 꺼내어 봅시다."]}),y.jsx(nC,{children:y.jsx(xc,{videoId:"wz4R0QzVFwk",opts:c})})]})]}),y.jsxs(Qu,{id:"section3",ref:p,isMobile:t,children:[y.jsx(Zu,{isMobile:t,children:y.jsx(Dh,{children:"섭식장애란"})}),y.jsxs(Wu,{isMobile:t,children:[y.jsxs(Oh,{children:["섭식장애는 먹는 행동과 관련해 어려움을 겪으며 개인의 신체적 건강과",y.jsx("br",{}),"심리.사회적 기능을 손상시키는 정신장애를 의미합니다."]}),y.jsxs(di,{children:["섭식 장애는 신경성 식욕부진증(거식증), 신경석 폭식증, 폭식장애 및 회피제한적 섭취장애 등을 포함하고",y.jsx("br",{}),"있습니다. 국민건강보험공단에 따르면 최근 5년간(2018~2022) 식이장애(섭식장애)로 진료받은 환자는",y.jsx("br",{}),"5만 1253명에 이릅니다. 이중 여성이 차지하는 비율은 10명 중 8명이라고 하는데, 이는 2018년과 비교해",y.jsx("br",{}),"2022년 거의 50% 증가한 셈입니다. 하지만 섭식장애의 규모나 피해 정도를 정확하게 파악하고 있는 정부 단위",y.jsx("br",{}),"조사나 통계는 아직 없습니다."]}),y.jsxs(di,{children:["환자 스스로 치료를 원치 않거나 필요하지 않다고 느끼는 것이 이 병의 특징 중 하나입니다. 사회적으로 여전히",y.jsx("br",{}),"섭식장애가 다이어트에 따른 부작용이나 '젊은 여성들'의 의지 부족에서 비롯된 질병으로 이해되는 상황에서",y.jsx("br",{}),"자신의 문제를 드러내기는 쉽지 않습니다. 그래서 섭식장애를 앓고 있는 환자의 수는 더 많을 수 있다고 합니다."]})]})]}),y.jsxs(Qu,{id:"section4",ref:g,isMobile:t,children:[y.jsx(Zu,{isMobile:t}),y.jsxs(Wu,{isMobile:t,children:[y.jsxs(di,{children:["❶ ",y.jsx("u",{children:"누구나 겪을 수 있습니다"}),y.jsx("br",{}),"먹는 것과 자신의 몸이 불화해 온 경험을 공유하기 위해 모인 이들은 하나의 원인에서 섭식장애가 시작되는",y.jsx("br",{}),"것은 아니라고 말합니다. 다이어트와 섭식장애는 분명 다를 테지만, 다이어트로 가려진 섭식장애도 많다는",y.jsx("br",{}),"사실을 상기하면 섭식과 체중의 문제는 단순할 수 없습니다. 섭식장애를 둘러싼 이야기는 개인의 문제를 넘어",y.jsx("br",{}),"언제나 사회 구조를 함께 들여다봐야 하는 이유가 여기에 있습니다."]}),y.jsxs(di,{children:["❷ ",y.jsx("u",{children:"사회의 납작한 이해"}),y.jsx("br",{}),y.jsxs("strong",{children:['"다른 사람들처럼 우리(섭식장애 당사자)는 엄마도 됐다가 딸도 됐다가 또 환자도 됩니다.',y.jsx("br",{}),'직업이 있을 수도 있고, 없을 수도 있죠. 다양한 역할과 정체성 속에서 자기의 삶을 살고 있어요."']}),y.jsx("br",{}),"이진솔씨는 미디어의 틀에 박힌 이미지가 다양한 삶을 살아가는 이들을 포용하기에 너무나도 납작하다고",y.jsx("br",{}),"이야기합니다. 미디어는 우리의 이야기를 포용할 준비가 되어있을까요? 몇가지 틀에 맞춘, 예컨대 마른 몸과",y.jsx("br",{}),"같은 것들이 정작 당사자들이 스스로의 상태를 인지하는데에 어려움을 주고 있지 않는냐는 겁니다."]}),y.jsxs(di,{children:["❸ ",y.jsx("u",{children:"당사자의 목소리"}),y.jsx("br",{}),"섭식장애에 관한 개인의 서사는 모두 다릅니다. 각자의 회복 여정 또한 다른 것은 마찬가지 입니다. 그래서 우리는",y.jsx("br",{}),"개인의 경험을 이야기하기 위해 발걸음을 뗐습니다. 각자의 삶이 더이상 고리타분하고 단순한 서사로 남지 않도록,",y.jsx("br",{}),"다양한 이야기가 펴져 나가도록 말이지요."]}),y.jsxs(di,{children:["❹ ",y.jsx("u",{children:"회복의 여정"}),y.jsx("br",{}),"섭식장애는 적절한 치료를 받으면 크게 개선되거나 '회복'될 수 있다고 합니다. 이를 위해서는 섭식장애를 조기에",y.jsx("br",{}),"발견하고 치료하는 것이 매우 중요합니다. 특히 사람마다 섭식장애의 원인이 다르기 때문에 관련 전문가와의",y.jsx("br",{}),"긴밀한 소통이 필요합니다. 우리나라에서도 섭식장애 관련 정보 제공, 지지집단 조직, 전문가 상담 등의 인프라가 조금씩",y.jsx("br",{}),"구축되고 있으나 아직 충분하지 않습니다. 섭식장애에 대한 사회의 관심과 적극적인 대응이 필요한 시점입니다."]})]})]})]}),y.jsxs(rC,{children:[y.jsxs(Mh,{onClick:()=>{i([0,1,0]),window.scrollTo({top:0}),w("/main/two")},children:[y.jsx(zh,{children:"식식한 고백들"}),y.jsx(Lh,{className:"css-arrow"})]}),y.jsxs(Mh,{onClick:()=>{i([0,0,1]),window.scrollTo({top:0}),w("/main/three")},children:[y.jsx(zh,{children:"식식한 연결하기"}),y.jsx(Lh,{className:"css-arrow"})]}),y.jsxs(Mh,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:[y.jsx(zh,{children:"식식에 대하여"}),y.jsx(Lh,{className:"css-arrow"})]})]}),y.jsxs(aC,{children:[y.jsxs(sC,{children:["섭식장애 고백 프로젝트 식식",y.jsx("br",{}),"Eating Disorder Confession",y.jsx("br",{}),"Project Siksik",y.jsx("br",{}),"©Siksik, Inc. All Rights Reserved."]}),y.jsxs(oC,{children:["T. 010 8892 9473",y.jsx("br",{}),"Mail. jhss8892@naver.com"]})]})]})]})},WR=O.div`
  width: 100%;
  font-family: "Gothic A1", sans-serif;
  margin-top: 95px;
  position: relative;
  overflow-x: auto;
`,JR=O.div`
  position: fixed;
  top: 95px;
  left: 0;
  width: 316px;
  height: calc(100vh - 95px);
  display: flex;
  flex-direction: column;
  background-color: white;
  z-index: 998;
  
  @media (max-width: 1440px) and (min-width: 769px) {
    width: 280px;
  }
  
  @media (max-width: 1200px) and (min-width: 769px) {
    width: 240px;
  }
  
  @media (max-width: 1024px) and (min-width: 769px) {
    width: 200px;
  }
  
  @media (max-width: 900px) and (min-width: 769px) {
    width: 180px;
  }
`,Ch=O.div`
  width: calc(100% - 20px);
  background-color: ${i=>i.active?"#FFFF00":"white"};
  position: relative;
  height: 52px;
  display: flex;
  align-items: center;
  font-size: 28px;
  font-style: normal;
  border-top: 1px solid black;
  padding-left: 19px;
  font-weight: ${i=>i.active?"600":"400"};
  font-family: "Gothic A1", sans-serif;
  box-sizing: border-box;
  
  @media (max-width: 1440px) and (min-width: 769px) {
    font-size: 24px;
    height: 48px;
    padding-left: 16px;
  }
  
  @media (max-width: 1200px) and (min-width: 769px) {
    font-size: 20px;
    height: 44px;
    padding-left: 14px;
  }
  
  @media (max-width: 1024px) and (min-width: 769px) {
    font-size: 18px;
    height: 40px;
    padding-left: 12px;
  }
  
  @media (max-width: 900px) and (min-width: 769px) {
    font-size: 16px;
    height: 36px;
    padding-left: 10px;
  }
  
  &:hover {
    background-color: #FFFF00;
    cursor: pointer;
  }
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 1px;
    height: 80%;
    background-color: black;
  }
`,eC=O.div`
  display: flex;
  width: 100%;
  border-bottom: 2px solid #000;
  margin-bottom: 20px;
  font-family: "Gothic A1", sans-serif;
  overflow-x: auto;
  white-space: nowrap;
`,kh=O.div`
  flex: 1;
  padding: 15px 10px;
  text-align: center;
  font-size: 16px;
  font-weight: ${i=>i.active?"600":"400"};
  font-family: "Gothic A1", sans-serif;
  background-color: ${i=>i.active?"#FFFF00":"white"};
  min-width: 100px;
  
  &:not(:last-child) {
    border-right: 2px solid #000;
  }
  
  &:hover {
    background-color: #FFFF00;
    cursor: pointer;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
    padding: 12px 8px;
    min-width: 80px;
  }
`,tC=O.div`
  margin-left: ${i=>i.isMobile?"0":"316px"};
  width: ${i=>i.isMobile?"100%":"calc(100vw - 316px)"};
  font-family: "Gothic A1", sans-serif;
  position: relative;
  background-color: white;
  min-height: 100vh;
  padding: 0 10px;
  box-sizing: border-box;
  
  @media (max-width: 1440px) and (min-width: 769px) {
    margin-left: 280px;
    width: calc(100vw - 280px);
  }
  
  @media (max-width: 1200px) and (min-width: 769px) {
    margin-left: 240px;
    width: calc(100vw - 240px);
  }
  
  @media (max-width: 1024px) and (min-width: 769px) {
    margin-left: 200px;
    width: calc(100vw - 200px);
  }
  
  @media (max-width: 900px) and (min-width: 769px) {
    margin-left: 180px;
    width: calc(100vw - 180px);
  }
  
  @media (max-width: 768px) {
    padding: 0 15px;
  }
`,iC=O.div`
  width: 100%;
  font-family: "Gothic A1", sans-serif;
  overflow-x: auto;
`,Qu=O.section`
  display: flex;
  flex-direction: ${i=>i.isMobile?"column":"row"};
  border-bottom: 1.5px solid #000000;
  scroll-margin-top: 95px;
  font-family: "Gothic A1", sans-serif;
  min-width: 100%;
  
  &:last-child {
    border-bottom: none;
  }
`,Zu=O.div`
  width: ${i=>i.isMobile?"100%":"296px"};
  min-width: ${i=>i.isMobile?"100%":"296px"};
  border-bottom: ${i=>i.isMobile?"1px solid #000":"none"};
  background-color: #fff;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: ${i=>(i.isMobile,"20px 0")};
  min-height: 300px;
  font-family: "Gothic A1", sans-serif;
  box-sizing: border-box;
  position: relative;
  margin-left: 0;
  
  @media (max-width: 1440px) and (min-width: 769px) {
    width: 260px;
    min-width: 260px;
    min-height: 280px;
  }
  
  @media (max-width: 1200px) and (min-width: 769px) {
    width: 220px;
    min-width: 220px;
    min-height: 260px;
  }
  
  @media (max-width: 1024px) and (min-width: 769px) {
    width: 180px;
    min-width: 180px;
    min-height: 240px;
  }
  
  @media (max-width: 900px) and (min-width: 769px) {
    width: 160px;
    min-width: 160px;
    min-height: 220px;
  }
  
  @media (max-width: 768px) {
    min-height: 120px;
  }
  
  &::after {
    content: "";
    position: absolute;
    top: 20px;
    right: 0;
    bottom: 20px;
    width: 1.5px;
    background-color: #000000;
    display: ${i=>i.isMobile?"none":"block"};
  }
`,Dh=O.div`
  font-size: 40px;
  font-weight: 800;
  font-family: "Gothic A1", sans-serif;
  margin-left: 10px;
  line-height: 1.4;
  text-align: left;
  width: 100%;
  box-sizing: border-box;
  word-wrap: break-word;
  overflow-wrap: break-word;
  
  @media (max-width: 1440px) and (min-width: 769px) {
    font-size: 36px;
    margin-left: 10px;
  }
  
  @media (max-width: 1200px) and (min-width: 769px) {
    font-size: 32px;
    margin-left: 10px;
  }
  
  @media (max-width: 1024px) and (min-width: 769px) {
    font-size: 28px;
    margin-left: 10px;
  }
  
  @media (max-width: 900px) and (min-width: 769px) {
    font-size: 24px;
    margin-left: 10px;
  }
  
  @media (max-width: 768px) {
    font-size: 28px;
    margin-left: 10px;
  }
  
  @media (max-width: 480px) {
    font-size: 24px;
    margin-left: 10px;
  }
  
  @media (max-width: 320px) {
    font-size: 20px;
    margin-left: 8px;
  }
`,Wu=O.div`
  flex: 1;
  margin-left: 10px;
  padding: 15px 20px;
  font-family: "Gothic A1", sans-serif;
  box-sizing: border-box;
  word-wrap: break-word;
  overflow-wrap: break-word;
  min-width: 0;
  
  @media (max-width: 1440px) and (min-width: 769px) {
    margin-left: 20px;
    padding: 14px 18px;
  }
  
  @media (max-width: 1200px) and (min-width: 769px) {
    margin-left: 20px;
    padding: 13px 16px;
  }
  
  @media (max-width: 1024px) and (min-width: 769px) {
    margin-left: 20px;
    padding: 12px 14px;
  }
  
  @media (max-width: 900px) and (min-width: 769px) {
    margin-left: 20px;
    padding: 10px 12px;
  }
  
  @media (max-width: 768px) {
    margin-left: 0;
    padding: 12px 15px;
  }
  
  @media (max-width: 480px) {
    margin-left: 0;
    padding: 10px 12px;
  }
  
  @media (max-width: 320px) {
    padding: 8px 10px;
  }
`,Oh=O.h2`
  font-size: 32px;
  font-weight: 800;
  font-family: "Gothic A1", sans-serif;
  margin: 0 0 20px 0;
  line-height: 1.8;
  word-wrap: break-word;
  overflow-wrap: break-word;
  
  @media (max-width: 1440px) and (min-width: 769px) {
    font-size: 28px;
    margin-bottom: 18px;
    line-height: 1.7;
  }
  
  @media (max-width: 1200px) and (min-width: 769px) {
    font-size: 24px;
    margin-bottom: 16px;
    line-height: 1.6;
  }
  
  @media (max-width: 1024px) and (min-width: 769px) {
    font-size: 22px;
    margin-bottom: 16px;
    line-height: 1.6;
  }
  
  @media (max-width: 900px) and (min-width: 769px) {
    font-size: 20px;
    margin-bottom: 15px;
    line-height: 1.5;
    br {
      display: none;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 1.5;
    margin-bottom: 15px;
    br {
      display: none;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 14px;
  }
  
  @media (max-width: 320px) {
    font-size: 16px;
    margin-bottom: 12px;
  }
`,di=O.p`
  font-size: 24px;
  font-weight: 400;
  font-family: "Gothic A1", sans-serif;
  line-height: 150%;
  margin-bottom: 15px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  
  @media (max-width: 1440px) and (min-width: 769px) {
    font-size: 22px;
    margin-bottom: 14px;
  }
  
  @media (max-width: 1200px) and (min-width: 769px) {
    font-size: 20px;
    margin-bottom: 13px;
  }
  
  @media (max-width: 1024px) and (min-width: 769px) {
    font-size: 18px;
    margin-bottom: 13px;
  }
  
  @media (max-width: 900px) and (min-width: 769px) {
    font-size: 16px;
    margin-bottom: 12px;
    br {
      display: none;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 12px;
    br {
      display: none;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 11px;
  }
  
  @media (max-width: 320px) {
    font-size: 12px;
    margin-bottom: 10px;
  }
`,nC=O.div`
  width: 100%;
  max-width: 1246px;
  margin: 20px 0;
  position: relative;
  overflow: hidden;
  aspect-ratio: 16/9;
  
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
  
  @media (max-width: 1440px) {
    max-width: 1000px;
    margin: 18px 0;
  }
  
  @media (max-width: 1024px) {
    max-width: 800px;
    margin: 16px 0;
  }
  
  @media (max-width: 768px) {
    margin: 15px 0;
    max-width: 100%;
  }
  
  @media (max-width: 480px) {
    margin: 12px 0;
  }
`,rC=O.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: 2px solid #000;
  font-family: "Gothic A1", sans-serif;
  margin-left: -10px;
  margin-right: -10px;
  
  @media (max-width: 768px) {
    margin-left: -15px;
    margin-right: -15px;
  }
`,Mh=O.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 2px solid #000;
  cursor: pointer;
  font-family: "Gothic A1", sans-serif;
  overflow-x: auto;
  
  @media (max-width: 1440px) {
    padding: 14px 18px;
  }
  
  @media (max-width: 1200px) and (min-width: 769px) {
    padding: 13px 16px;
  }
  
  @media (max-width: 1024px) and (min-width: 769px) {
    padding: 12px 14px;
  }
  
  @media (max-width: 900px) and (min-width: 769px) {
    padding: 10px 12px;
  }
  
  @media (max-width: 768px) {
    padding: 12px 25px;
  }
  
  @media (max-width: 480px) {
    padding: 10px 22px;
  }
  
  /* 호버 시 화살표 shaft만 왼쪽으로 확장 */
  &:hover div::before {
    width: 80px; /* 기본 60px에서 80px로 확장 */
  }
  
  /* 반응형에 맞춰 호버 효과도 조정 */
  @media (max-width: 1440px) {
    &:hover div::before {
      width: 70px;
    }
  }
  
  @media (max-width: 1200px) {
    &:hover div::before {
      width: 65px;
    }
  }
  
  @media (max-width: 1024px) {
    &:hover div::before {
      width: 60px;
    }
  }
  
  @media (max-width: 768px) {
    &:hover div::before {
      width: 55px;
    }
  }
  
  @media (max-width: 480px) {
    &:hover div::before {
      width: 50px;
    }
  }
  
  @media (max-width: 320px) {
    &:hover div::before {
      width: 45px;
    }
  }
`,zh=O.div`
  font-size: 70px;
  font-weight: 600;
  font-family: "Gothic A1", sans-serif;
  white-space: nowrap;
  
  @media (max-width: 1440px) {
    font-size: 60px;
  }
  
  @media (max-width: 1024px) {
    font-size: 50px;
  }
  
  @media (max-width: 768px) {
    font-size: 40px;
  }
  
  @media (max-width: 480px) {
    font-size: 32px;
  }
  
  @media (max-width: 320px) {
    font-size: 28px;
  }
`,Lh=O.div`
  position: relative;
  width: 120px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  /* 화살표 막대기 (shaft) */
  &::before {
    content: '';
    position: absolute;
    width: 60px;
    height: 6px;
    background-color: #000;
    right: 20px;
    transition: width 0.3s ease;
  }
  
  /* 화살표 머리 (arrowhead) */
  &::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    border-top: 6px solid #000;
    border-right: 6px solid #000;
    transform: rotate(45deg);
    right: 20px;
  }
  
  @media (max-width: 1440px) {
    width: 100px;
    height: 70px;
    
    &::before {
      width: 50px;
      height: 5px;
      right: 18px;
    }
    
    &::after {
      width: 25px;
      height: 25px;
      border-width: 5px;
      right: 18px;
    }
  }
  
  @media (max-width: 1200px) {
    width: 90px;
    height: 65px;
    
    &::before {
      width: 45px;
      height: 4.5px;
      right: 15px;
    }
    
    &::after {
      width: 22px;
      height: 22px;
      border-width: 4.5px;
      right: 15px;
    }
  }
  
  @media (max-width: 1024px) {
    width: 80px;
    height: 60px;
    
    &::before {
      width: 40px;
      height: 4px;
      right: 13px;
    }
    
    &::after {
      width: 20px;
      height: 20px;
      border-width: 4px;
      right: 13px;
    }
  }
  
  @media (max-width: 768px) {
    width: 70px;
    height: 50px;
    
    &::before {
      width: 35px;
      height: 3.5px;
      right: 11px;
    }
    
    &::after {
      width: 17px;
      height: 17px;
      border-width: 3.5px;
      right: 11px;
    }
  }
  
  @media (max-width: 480px) {
    width: 60px;
    height: 45px;
    
    &::before {
      width: 30px;
      height: 3px;
      right: 10px;
    }
    
    &::after {
      width: 15px;
      height: 15px;
      border-width: 3px;
      right: 10px;
    }
  }
  
  @media (max-width: 320px) {
    width: 50px;
    height: 40px;
    
    &::before {
      width: 25px;
      height: 2.5px;
      right: 8px;
    }
    
    &::after {
      width: 12px;
      height: 12px;
      border-width: 2.5px;
      right: 8px;
    }
  }
`,aC=O.div`
  width: calc(100% + 20px);
  margin-left: -10px;
  margin-right: -10px;
  min-height: 140px;
  background-color: black;
  position: relative;
  padding: 30px 0;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    min-height: 120px;
    padding: 20px 0;
    width: calc(100% + 30px);
    margin-left: -15px;
    margin-right: -15px;
  }
  
  @media (max-width: 480px) {
    min-height: 100px;
    padding: 15px 0;
  }
  
  @media (max-width: 320px) {
    min-height: 90px;
    padding: 12px 0;
  }
`,sC=O.div`
  max-width: 300px;
  padding: 0 20px;
  color: white;
  font-family: "Gothic A1", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  word-wrap: break-word;
  overflow-wrap: break-word;
  
  @media (max-width: 1440px) {
    font-size: 16px;
    padding: 0 18px;
  }
  
  @media (max-width: 1024px) {
    font-size: 14px;
    padding: 0 16px;
  }
  
  @media (max-width: 768px) {
    font-size: 13px;
    padding: 0 25px;
    max-width: 60%;
  }
  
  @media (max-width: 480px) {
    font-size: 12px;
    padding: 0 22px;
    max-width: 65%;
  }
  
  @media (max-width: 320px) {
    font-size: 11px;
    padding: 0 20px;
    max-width: 70%;
  }
`,oC=O.div`
  max-width: 300px;
  left: 320px;
  color: #FFF;
  font-family: "Gothic A1", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  position: absolute;
  top: 33%;
  transform: translateY(-50%);
  padding: 0 20px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  
  @media (max-width: 1440px) {
    font-size: 16px;
    padding: 0 18px;
    left: 300px;
  }
  
  @media (max-width: 1024px) {
    font-size: 14px;
    padding: 0 16px;
    left: 280px;
  }
  
  @media (max-width: 768px) {
    font-size: 13px;
    left: 250px;
    max-width: 150px;
    padding: 0 25px;
  }
  
  @media (max-width: 480px) {
    font-size: 12px;
    left: 220px;
    max-width: 120px;
    padding: 0 22px;
  }
  
  @media (max-width: 320px) {
    font-size: 11px;
    left: 200px;
    max-width: 100px;
    padding: 0 20px;
  }
`,ym=_.createContext({});function vm(i){const t=_.useRef(null);return t.current===null&&(t.current=i()),t.current}const Kc=_.createContext(null),xm=_.createContext({transformPagePoint:i=>i,isStatic:!1,reducedMotion:"never"});class lC extends _.Component{getSnapshotBeforeUpdate(t){const r=this.props.childRef.current;if(r&&t.isPresent&&!this.props.isPresent){const a=r.offsetParent,o=a instanceof HTMLElement&&a.offsetWidth||0,u=this.props.sizeRef.current;u.height=r.offsetHeight||0,u.width=r.offsetWidth||0,u.top=r.offsetTop,u.left=r.offsetLeft,u.right=o-u.width-u.left}return null}componentDidUpdate(){}render(){return this.props.children}}function uC({children:i,isPresent:t,anchorX:r}){const a=_.useId(),o=_.useRef(null),u=_.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:c}=_.useContext(xm);return _.useInsertionEffect(()=>{const{width:h,height:f,top:p,left:g,right:v}=u.current;if(t||!o.current||!h||!f)return;const x=r==="left"?`left: ${g}`:`right: ${v}`;o.current.dataset.motionPopId=a;const w=document.createElement("style");return c&&(w.nonce=c),document.head.appendChild(w),w.sheet&&w.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${f}px !important;
            ${x}px !important;
            top: ${p}px !important;
          }
        `),()=>{document.head.removeChild(w)}},[t]),y.jsx(lC,{isPresent:t,childRef:o,sizeRef:u,children:_.cloneElement(i,{ref:o})})}const cC=({children:i,initial:t,isPresent:r,onExitComplete:a,custom:o,presenceAffectsLayout:u,mode:c,anchorX:h})=>{const f=vm(dC),p=_.useId(),g=_.useCallback(x=>{f.set(x,!0);for(const w of f.values())if(!w)return;a&&a()},[f,a]),v=_.useMemo(()=>({id:p,initial:t,isPresent:r,custom:o,onExitComplete:g,register:x=>(f.set(x,!1),()=>f.delete(x))}),u?[Math.random(),g]:[r,g]);return _.useMemo(()=>{f.forEach((x,w)=>f.set(w,!1))},[r]),_.useEffect(()=>{!r&&!f.size&&a&&a()},[r]),c==="popLayout"&&(i=y.jsx(uC,{isPresent:r,anchorX:h,children:i})),y.jsx(Kc.Provider,{value:v,children:i})};function dC(){return new Map}function Nw(i=!0){const t=_.useContext(Kc);if(t===null)return[!0,null];const{isPresent:r,onExitComplete:a,register:o}=t,u=_.useId();_.useEffect(()=>{if(i)return o(u)},[i]);const c=_.useCallback(()=>i&&a&&a(u),[u,a,i]);return!r&&a?[!1,c]:[!0]}const Ju=i=>i.key||"";function Ux(i){const t=[];return _.Children.forEach(i,r=>{_.isValidElement(r)&&t.push(r)}),t}const bm=typeof window<"u",Bw=bm?_.useLayoutEffect:_.useEffect,at=({children:i,custom:t,initial:r=!0,onExitComplete:a,presenceAffectsLayout:o=!0,mode:u="sync",propagate:c=!1,anchorX:h="left"})=>{const[f,p]=Nw(c),g=_.useMemo(()=>Ux(i),[i]),v=c&&!f?[]:g.map(Ju),x=_.useRef(!0),w=_.useRef(g),S=vm(()=>new Map),[T,E]=_.useState(g),[j,D]=_.useState(g);Bw(()=>{x.current=!1,w.current=g;for(let P=0;P<j.length;P++){const R=Ju(j[P]);v.includes(R)?S.delete(R):S.get(R)!==!0&&S.set(R,!1)}},[j,v.length,v.join("-")]);const M=[];if(g!==T){let P=[...g];for(let R=0;R<j.length;R++){const F=j[R],I=Ju(F);v.includes(I)||(P.splice(R,0,F),M.push(F))}return u==="wait"&&M.length&&(P=M),D(Ux(P)),E(g),null}const{forceRender:V}=_.useContext(ym);return y.jsx(y.Fragment,{children:j.map(P=>{const R=Ju(P),F=c&&!f?!1:g===j||v.includes(R),I=()=>{if(S.has(R))S.set(R,!0);else return;let G=!0;S.forEach(te=>{te||(G=!1)}),G&&(V==null||V(),D(w.current),c&&(p==null||p()),a&&a())};return y.jsx(cC,{isPresent:F,initial:!x.current||r?void 0:!1,custom:t,presenceAffectsLayout:o,mode:u,onExitComplete:F?void 0:I,anchorX:h,children:P},R)})})},mi=i=>i;let Vw=mi;function wm(i){let t;return()=>(t===void 0&&(t=i()),t)}const Rs=(i,t,r)=>{const a=t-i;return a===0?1:(r-i)/a},Bn=i=>i*1e3,Vn=i=>i/1e3,fC={useManualTiming:!1},ec=["read","resolveKeyframes","update","preRender","render","postRender"],Nx={value:null};function hC(i,t){let r=new Set,a=new Set,o=!1,u=!1;const c=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1},f=0;function p(v){c.has(v)&&(g.schedule(v),i()),f++,v(h)}const g={schedule:(v,x=!1,w=!1)=>{const T=w&&o?r:a;return x&&c.add(v),T.has(v)||T.add(v),v},cancel:v=>{a.delete(v),c.delete(v)},process:v=>{if(h=v,o){u=!0;return}o=!0,[r,a]=[a,r],r.forEach(p),t&&Nx.value&&Nx.value.frameloop[t].push(f),f=0,r.clear(),o=!1,u&&(u=!1,g.process(v))}};return g}const pC=40;function $w(i,t){let r=!1,a=!0;const o={delta:0,timestamp:0,isProcessing:!1},u=()=>r=!0,c=ec.reduce((j,D)=>(j[D]=hC(u,t?D:void 0),j),{}),{read:h,resolveKeyframes:f,update:p,preRender:g,render:v,postRender:x}=c,w=()=>{const j=performance.now();r=!1,o.delta=a?1e3/60:Math.max(Math.min(j-o.timestamp,pC),1),o.timestamp=j,o.isProcessing=!0,h.process(o),f.process(o),p.process(o),g.process(o),v.process(o),x.process(o),o.isProcessing=!1,r&&t&&(a=!1,i(w))},S=()=>{r=!0,a=!0,o.isProcessing||i(w)};return{schedule:ec.reduce((j,D)=>{const M=c[D];return j[D]=(V,P=!1,R=!1)=>(r||S(),M.schedule(V,P,R)),j},{}),cancel:j=>{for(let D=0;D<ec.length;D++)c[ec[D]].cancel(j)},state:o,steps:c}}const{schedule:it,cancel:_r,state:Gt,steps:Ph}=$w(typeof requestAnimationFrame<"u"?requestAnimationFrame:mi,!0),Hw=_.createContext({strict:!1}),Bx={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Cs={};for(const i in Bx)Cs[i]={isEnabled:t=>Bx[i].some(r=>!!t[r])};function mC(i){for(const t in i)Cs[t]={...Cs[t],...i[t]}}const gC=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Dc(i){return i.startsWith("while")||i.startsWith("drag")&&i!=="draggable"||i.startsWith("layout")||i.startsWith("onTap")||i.startsWith("onPan")||i.startsWith("onLayout")||gC.has(i)}let qw=i=>!Dc(i);function yC(i){i&&(qw=t=>t.startsWith("on")?!Dc(t):i(t))}try{yC(require("@emotion/is-prop-valid").default)}catch{}function vC(i,t,r){const a={};for(const o in i)o==="values"&&typeof i.values=="object"||(qw(o)||r===!0&&Dc(o)||!t&&!Dc(o)||i.draggable&&o.startsWith("onDrag"))&&(a[o]=i[o]);return a}function xC(i){if(typeof Proxy>"u")return i;const t=new Map,r=(...a)=>i(...a);return new Proxy(r,{get:(a,o)=>o==="create"?i:(t.has(o)||t.set(o,i(o)),t.get(o))})}const Xc=_.createContext({});function Qc(i){return i!==null&&typeof i=="object"&&typeof i.start=="function"}function ll(i){return typeof i=="string"||Array.isArray(i)}const Sm=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Am=["initial",...Sm];function Zc(i){return Qc(i.animate)||Am.some(t=>ll(i[t]))}function Gw(i){return!!(Zc(i)||i.variants)}function bC(i,t){if(Zc(i)){const{initial:r,animate:a}=i;return{initial:r===!1||ll(r)?r:void 0,animate:ll(a)?a:void 0}}return i.inherit!==!1?t:{}}function wC(i){const{initial:t,animate:r}=bC(i,_.useContext(Xc));return _.useMemo(()=>({initial:t,animate:r}),[Vx(t),Vx(r)])}function Vx(i){return Array.isArray(i)?i.join(" "):i}const SC=Symbol.for("motionComponentSymbol");function ms(i){return i&&typeof i=="object"&&Object.prototype.hasOwnProperty.call(i,"current")}function AC(i,t,r){return _.useCallback(a=>{a&&i.onMount&&i.onMount(a),t&&(a?t.mount(a):t.unmount()),r&&(typeof r=="function"?r(a):ms(r)&&(r.current=a))},[t])}const _m=i=>i.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),_C="framerAppearId",Fw="data-"+_m(_C),{schedule:Em}=$w(queueMicrotask,!1),Iw=_.createContext({});function EC(i,t,r,a,o){var u,c;const{visualElement:h}=_.useContext(Xc),f=_.useContext(Hw),p=_.useContext(Kc),g=_.useContext(xm).reducedMotion,v=_.useRef(null);a=a||f.renderer,!v.current&&a&&(v.current=a(i,{visualState:t,parent:h,props:r,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:g}));const x=v.current,w=_.useContext(Iw);x&&!x.projection&&o&&(x.type==="html"||x.type==="svg")&&TC(v.current,r,o,w);const S=_.useRef(!1);_.useInsertionEffect(()=>{x&&S.current&&x.update(r,p)});const T=r[Fw],E=_.useRef(!!T&&!(!((u=window.MotionHandoffIsComplete)===null||u===void 0)&&u.call(window,T))&&((c=window.MotionHasOptimisedAnimation)===null||c===void 0?void 0:c.call(window,T)));return Bw(()=>{x&&(S.current=!0,window.MotionIsMounted=!0,x.updateFeatures(),Em.render(x.render),E.current&&x.animationState&&x.animationState.animateChanges())}),_.useEffect(()=>{x&&(!E.current&&x.animationState&&x.animationState.animateChanges(),E.current&&(queueMicrotask(()=>{var j;(j=window.MotionHandoffMarkAsComplete)===null||j===void 0||j.call(window,T)}),E.current=!1))}),x}function TC(i,t,r,a){const{layoutId:o,layout:u,drag:c,dragConstraints:h,layoutScroll:f,layoutRoot:p}=t;i.projection=new r(i.latestValues,t["data-framer-portal-id"]?void 0:Yw(i.parent)),i.projection.setOptions({layoutId:o,layout:u,alwaysMeasureLayout:!!c||h&&ms(h),visualElement:i,animationType:typeof u=="string"?u:"both",initialPromotionConfig:a,layoutScroll:f,layoutRoot:p})}function Yw(i){if(i)return i.options.allowProjection!==!1?i.projection:Yw(i.parent)}function jC({preloadedFeatures:i,createVisualElement:t,useRender:r,useVisualState:a,Component:o}){var u,c;i&&mC(i);function h(p,g){let v;const x={..._.useContext(xm),...p,layoutId:RC(p)},{isStatic:w}=x,S=wC(p),T=a(p,w);if(!w&&bm){CC();const E=kC(x);v=E.MeasureLayout,S.visualElement=EC(o,T,x,t,E.ProjectionNode)}return y.jsxs(Xc.Provider,{value:S,children:[v&&S.visualElement?y.jsx(v,{visualElement:S.visualElement,...x}):null,r(o,p,AC(T,S.visualElement,g),T,w,S.visualElement)]})}h.displayName=`motion.${typeof o=="string"?o:`create(${(c=(u=o.displayName)!==null&&u!==void 0?u:o.name)!==null&&c!==void 0?c:""})`}`;const f=_.forwardRef(h);return f[SC]=o,f}function RC({layoutId:i}){const t=_.useContext(ym).id;return t&&i!==void 0?t+"-"+i:i}function CC(i,t){_.useContext(Hw).strict}function kC(i){const{drag:t,layout:r}=Cs;if(!t&&!r)return{};const a={...t,...r};return{MeasureLayout:t!=null&&t.isEnabled(i)||r!=null&&r.isEnabled(i)?a.MeasureLayout:void 0,ProjectionNode:a.ProjectionNode}}const Kw=i=>t=>typeof t=="string"&&t.startsWith(i),Tm=Kw("--"),DC=Kw("var(--"),jm=i=>DC(i)?OC.test(i.split("/*")[0].trim()):!1,OC=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,ul={};function MC(i){for(const t in i)ul[t]=i[t],Tm(t)&&(ul[t].isCSSVariable=!0)}const Ps=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ma=new Set(Ps);function Xw(i,{layout:t,layoutId:r}){return ma.has(i)||i.startsWith("origin")||(t||r!==void 0)&&(!!ul[i]||i==="opacity")}const Qt=i=>!!(i&&i.getVelocity),Qw=(i,t)=>t&&typeof i=="number"?t.transform(i):i,$n=(i,t,r)=>r>t?t:r<i?i:r,Us={test:i=>typeof i=="number",parse:parseFloat,transform:i=>i},cl={...Us,transform:i=>$n(0,1,i)},tc={...Us,default:1},bl=i=>({test:t=>typeof t=="string"&&t.endsWith(i)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${i}`}),mr=bl("deg"),fn=bl("%"),be=bl("px"),zC=bl("vh"),LC=bl("vw"),$x={...fn,parse:i=>fn.parse(i)/100,transform:i=>fn.transform(i*100)},PC={borderWidth:be,borderTopWidth:be,borderRightWidth:be,borderBottomWidth:be,borderLeftWidth:be,borderRadius:be,radius:be,borderTopLeftRadius:be,borderTopRightRadius:be,borderBottomRightRadius:be,borderBottomLeftRadius:be,width:be,maxWidth:be,height:be,maxHeight:be,top:be,right:be,bottom:be,left:be,padding:be,paddingTop:be,paddingRight:be,paddingBottom:be,paddingLeft:be,margin:be,marginTop:be,marginRight:be,marginBottom:be,marginLeft:be,backgroundPositionX:be,backgroundPositionY:be},UC={rotate:mr,rotateX:mr,rotateY:mr,rotateZ:mr,scale:tc,scaleX:tc,scaleY:tc,scaleZ:tc,skew:mr,skewX:mr,skewY:mr,distance:be,translateX:be,translateY:be,translateZ:be,x:be,y:be,z:be,perspective:be,transformPerspective:be,opacity:cl,originX:$x,originY:$x,originZ:be},Hx={...Us,transform:Math.round},Rm={...PC,...UC,zIndex:Hx,size:be,fillOpacity:cl,strokeOpacity:cl,numOctaves:Hx},NC={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},BC=Ps.length;function VC(i,t,r){let a="",o=!0;for(let u=0;u<BC;u++){const c=Ps[u],h=i[c];if(h===void 0)continue;let f=!0;if(typeof h=="number"?f=h===(c.startsWith("scale")?1:0):f=parseFloat(h)===0,!f||r){const p=Qw(h,Rm[c]);if(!f){o=!1;const g=NC[c]||c;a+=`${g}(${p}) `}r&&(t[c]=p)}}return a=a.trim(),r?a=r(t,o?"":a):o&&(a="none"),a}function Cm(i,t,r){const{style:a,vars:o,transformOrigin:u}=i;let c=!1,h=!1;for(const f in t){const p=t[f];if(ma.has(f)){c=!0;continue}else if(Tm(f)){o[f]=p;continue}else{const g=Qw(p,Rm[f]);f.startsWith("origin")?(h=!0,u[f]=g):a[f]=g}}if(t.transform||(c||r?a.transform=VC(t,i.transform,r):a.transform&&(a.transform="none")),h){const{originX:f="50%",originY:p="50%",originZ:g=0}=u;a.transformOrigin=`${f} ${p} ${g}`}}const km=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Zw(i,t,r){for(const a in t)!Qt(t[a])&&!Xw(a,r)&&(i[a]=t[a])}function $C({transformTemplate:i},t){return _.useMemo(()=>{const r=km();return Cm(r,t,i),Object.assign({},r.vars,r.style)},[t])}function HC(i,t){const r=i.style||{},a={};return Zw(a,r,i),Object.assign(a,$C(i,t)),a}function qC(i,t){const r={},a=HC(i,t);return i.drag&&i.dragListener!==!1&&(r.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=i.drag===!0?"none":`pan-${i.drag==="x"?"y":"x"}`),i.tabIndex===void 0&&(i.onTap||i.onTapStart||i.whileTap)&&(r.tabIndex=0),r.style=a,r}const GC=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Dm(i){return typeof i!="string"||i.includes("-")?!1:!!(GC.indexOf(i)>-1||/[A-Z]/u.test(i))}const FC={offset:"stroke-dashoffset",array:"stroke-dasharray"},IC={offset:"strokeDashoffset",array:"strokeDasharray"};function YC(i,t,r=1,a=0,o=!0){i.pathLength=1;const u=o?FC:IC;i[u.offset]=be.transform(-a);const c=be.transform(t),h=be.transform(r);i[u.array]=`${c} ${h}`}function qx(i,t,r){return typeof i=="string"?i:be.transform(t+r*i)}function KC(i,t,r){const a=qx(t,i.x,i.width),o=qx(r,i.y,i.height);return`${a} ${o}`}function Om(i,{attrX:t,attrY:r,attrScale:a,originX:o,originY:u,pathLength:c,pathSpacing:h=1,pathOffset:f=0,...p},g,v){if(Cm(i,p,v),g){i.style.viewBox&&(i.attrs.viewBox=i.style.viewBox);return}i.attrs=i.style,i.style={};const{attrs:x,style:w,dimensions:S}=i;x.transform&&(S&&(w.transform=x.transform),delete x.transform),S&&(o!==void 0||u!==void 0||w.transform)&&(w.transformOrigin=KC(S,o!==void 0?o:.5,u!==void 0?u:.5)),t!==void 0&&(x.x=t),r!==void 0&&(x.y=r),a!==void 0&&(x.scale=a),c!==void 0&&YC(x,c,h,f,!1)}const Ww=()=>({...km(),attrs:{}}),Mm=i=>typeof i=="string"&&i.toLowerCase()==="svg";function XC(i,t,r,a){const o=_.useMemo(()=>{const u=Ww();return Om(u,t,Mm(a),i.transformTemplate),{...u.attrs,style:{...u.style}}},[t]);if(i.style){const u={};Zw(u,i.style,i),o.style={...u,...o.style}}return o}function QC(i=!1){return(r,a,o,{latestValues:u},c)=>{const f=(Dm(r)?XC:qC)(a,u,c,r),p=vC(a,typeof r=="string",i),g=r!==_.Fragment?{...p,...f,ref:o}:{},{children:v}=a,x=_.useMemo(()=>Qt(v)?v.get():v,[v]);return _.createElement(r,{...g,children:x})}}function Gx(i){const t=[{},{}];return i==null||i.values.forEach((r,a)=>{t[0][a]=r.get(),t[1][a]=r.getVelocity()}),t}function zm(i,t,r,a){if(typeof t=="function"){const[o,u]=Gx(a);t=t(r!==void 0?r:i.custom,o,u)}if(typeof t=="string"&&(t=i.variants&&i.variants[t]),typeof t=="function"){const[o,u]=Gx(a);t=t(r!==void 0?r:i.custom,o,u)}return t}const Rp=i=>Array.isArray(i),ZC=i=>!!(i&&typeof i=="object"&&i.mix&&i.toValue),WC=i=>Rp(i)?i[i.length-1]||0:i;function bc(i){const t=Qt(i)?i.get():i;return ZC(t)?t.toValue():t}function JC({scrapeMotionValuesFromProps:i,createRenderState:t,onUpdate:r},a,o,u){const c={latestValues:ek(a,o,u,i),renderState:t()};return r&&(c.onMount=h=>r({props:a,current:h,...c}),c.onUpdate=h=>r(h)),c}const Jw=i=>(t,r)=>{const a=_.useContext(Xc),o=_.useContext(Kc),u=()=>JC(i,t,a,o);return r?u():vm(u)};function ek(i,t,r,a){const o={},u=a(i,{});for(const x in u)o[x]=bc(u[x]);let{initial:c,animate:h}=i;const f=Zc(i),p=Gw(i);t&&p&&!f&&i.inherit!==!1&&(c===void 0&&(c=t.initial),h===void 0&&(h=t.animate));let g=r?r.initial===!1:!1;g=g||c===!1;const v=g?h:c;if(v&&typeof v!="boolean"&&!Qc(v)){const x=Array.isArray(v)?v:[v];for(let w=0;w<x.length;w++){const S=zm(i,x[w]);if(S){const{transitionEnd:T,transition:E,...j}=S;for(const D in j){let M=j[D];if(Array.isArray(M)){const V=g?M.length-1:0;M=M[V]}M!==null&&(o[D]=M)}for(const D in T)o[D]=T[D]}}}return o}function Lm(i,t,r){var a;const{style:o}=i,u={};for(const c in o)(Qt(o[c])||t.style&&Qt(t.style[c])||Xw(c,i)||((a=r==null?void 0:r.getValue(c))===null||a===void 0?void 0:a.liveStyle)!==void 0)&&(u[c]=o[c]);return u}const tk={useVisualState:Jw({scrapeMotionValuesFromProps:Lm,createRenderState:km})};function eS(i,t){try{t.dimensions=typeof i.getBBox=="function"?i.getBBox():i.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}function tS(i,{style:t,vars:r},a,o){Object.assign(i.style,t,o&&o.getProjectionStyles(a));for(const u in r)i.style.setProperty(u,r[u])}const iS=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function nS(i,t,r,a){tS(i,t,void 0,a);for(const o in t.attrs)i.setAttribute(iS.has(o)?o:_m(o),t.attrs[o])}function rS(i,t,r){const a=Lm(i,t,r);for(const o in i)if(Qt(i[o])||Qt(t[o])){const u=Ps.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;a[u]=i[o]}return a}const Fx=["x","y","width","height","cx","cy","r"],ik={useVisualState:Jw({scrapeMotionValuesFromProps:rS,createRenderState:Ww,onUpdate:({props:i,prevProps:t,current:r,renderState:a,latestValues:o})=>{if(!r)return;let u=!!i.drag;if(!u){for(const h in o)if(ma.has(h)){u=!0;break}}if(!u)return;let c=!t;if(t)for(let h=0;h<Fx.length;h++){const f=Fx[h];i[f]!==t[f]&&(c=!0)}c&&it.read(()=>{eS(r,a),it.render(()=>{Om(a,o,Mm(r.tagName),i.transformTemplate),nS(r,a)})})}})};function nk(i,t){return function(a,{forwardMotionProps:o}={forwardMotionProps:!1}){const c={...Dm(a)?ik:tk,preloadedFeatures:i,useRender:QC(o),createVisualElement:t,Component:a};return jC(c)}}function dl(i,t,r){const a=i.getProps();return zm(a,t,r!==void 0?r:a.custom,i)}const rk=wm(()=>window.ScrollTimeline!==void 0);class ak{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,r){for(let a=0;a<this.animations.length;a++)this.animations[a][t]=r}attachTimeline(t,r){const a=this.animations.map(o=>{if(rk()&&o.attachTimeline)return o.attachTimeline(t);if(typeof r=="function")return r(o)});return()=>{a.forEach((o,u)=>{o&&o(),this.animations[u].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let r=0;r<this.animations.length;r++)t=Math.max(t,this.animations[r].duration);return t}runAll(t){this.animations.forEach(r=>r[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class sk extends ak{then(t,r){return Promise.all(this.animations).then(t).catch(r)}}function Pm(i,t){return i?i[t]||i.default||i:void 0}const Cp=2e4;function aS(i){let t=0;const r=50;let a=i.next(t);for(;!a.done&&t<Cp;)t+=r,a=i.next(t);return t>=Cp?1/0:t}function Um(i){return typeof i=="function"}function Ix(i,t){i.timeline=t,i.onfinish=null}const Nm=i=>Array.isArray(i)&&typeof i[0]=="number",ok={linearEasing:void 0};function lk(i,t){const r=wm(i);return()=>{var a;return(a=ok[t])!==null&&a!==void 0?a:r()}}const Oc=lk(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),sS=(i,t,r=10)=>{let a="";const o=Math.max(Math.round(t/r),2);for(let u=0;u<o;u++)a+=i(Rs(0,o-1,u))+", ";return`linear(${a.substring(0,a.length-2)})`};function oS(i){return!!(typeof i=="function"&&Oc()||!i||typeof i=="string"&&(i in kp||Oc())||Nm(i)||Array.isArray(i)&&i.every(oS))}const Ko=([i,t,r,a])=>`cubic-bezier(${i}, ${t}, ${r}, ${a})`,kp={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ko([0,.65,.55,1]),circOut:Ko([.55,0,1,.45]),backIn:Ko([.31,.01,.66,-.59]),backOut:Ko([.33,1.53,.69,.99])};function lS(i,t){if(i)return typeof i=="function"&&Oc()?sS(i,t):Nm(i)?Ko(i):Array.isArray(i)?i.map(r=>lS(r,t)||kp.easeOut):kp[i]}const Ii={x:!1,y:!1};function uS(){return Ii.x||Ii.y}function uk(i,t,r){var a;if(i instanceof EventTarget)return[i];if(typeof i=="string"){let o=document;const u=(a=void 0)!==null&&a!==void 0?a:o.querySelectorAll(i);return u?Array.from(u):[]}return Array.from(i)}function cS(i,t){const r=uk(i),a=new AbortController,o={passive:!0,...t,signal:a.signal};return[r,o,()=>a.abort()]}function Yx(i){return!(i.pointerType==="touch"||uS())}function ck(i,t,r={}){const[a,o,u]=cS(i,r),c=h=>{if(!Yx(h))return;const{target:f}=h,p=t(f,h);if(typeof p!="function"||!f)return;const g=v=>{Yx(v)&&(p(v),f.removeEventListener("pointerleave",g))};f.addEventListener("pointerleave",g,o)};return a.forEach(h=>{h.addEventListener("pointerenter",c,o)}),u}function Wo(i,t){const r=`${t}PointerCapture`;if(i.target instanceof Element&&r in i.target&&i.pointerId!==void 0)try{i.target[r](i.pointerId)}catch{}}const dS=(i,t)=>t?i===t?!0:dS(i,t.parentElement):!1,Bm=i=>i.pointerType==="mouse"?typeof i.button!="number"||i.button<=0:i.isPrimary!==!1,dk=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function fk(i){return dk.has(i.tagName)||i.tabIndex!==-1}const Xo=new WeakSet;function Kx(i){return t=>{t.key==="Enter"&&i(t)}}function Uh(i,t){i.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const hk=(i,t)=>{const r=i.currentTarget;if(!r)return;const a=Kx(()=>{if(Xo.has(r))return;Uh(r,"down");const o=Kx(()=>{Uh(r,"up")}),u=()=>Uh(r,"cancel");r.addEventListener("keyup",o,t),r.addEventListener("blur",u,t)});r.addEventListener("keydown",a,t),r.addEventListener("blur",()=>r.removeEventListener("keydown",a),t)};function Xx(i){return Bm(i)&&!uS()}function pk(i,t,r={}){const[a,o,u]=cS(i,r),c=h=>{const f=h.currentTarget;if(!f||!Xx(h)||Xo.has(f))return;Xo.add(f),Wo(h,"set");const p=t(f,h),g=(w,S)=>{f.removeEventListener("pointerup",v),f.removeEventListener("pointercancel",x),Wo(w,"release"),!(!Xx(w)||!Xo.has(f))&&(Xo.delete(f),typeof p=="function"&&p(w,{success:S}))},v=w=>{(w.isTrusted?mk(w,f instanceof Element?f.getBoundingClientRect():{left:0,top:0,right:window.innerWidth,bottom:window.innerHeight}):!1)?g(w,!1):g(w,!(f instanceof Element)||dS(f,w.target))},x=w=>{g(w,!1)};f.addEventListener("pointerup",v,o),f.addEventListener("pointercancel",x,o),f.addEventListener("lostpointercapture",x,o)};return a.forEach(h=>{h=r.useGlobalTarget?window:h;let f=!1;h instanceof HTMLElement&&(f=!0,!fk(h)&&h.getAttribute("tabindex")===null&&(h.tabIndex=0)),h.addEventListener("pointerdown",c,o),f&&h.addEventListener("focus",p=>hk(p,o),o)}),u}function mk(i,t){return i.clientX<t.left||i.clientX>t.right||i.clientY<t.top||i.clientY>t.bottom}function gk(i){return i==="x"||i==="y"?Ii[i]?null:(Ii[i]=!0,()=>{Ii[i]=!1}):Ii.x||Ii.y?null:(Ii.x=Ii.y=!0,()=>{Ii.x=Ii.y=!1})}const fS=new Set(["width","height","top","left","right","bottom",...Ps]);let wc;function yk(){wc=void 0}const hn={now:()=>(wc===void 0&&hn.set(Gt.isProcessing||fC.useManualTiming?Gt.timestamp:performance.now()),wc),set:i=>{wc=i,queueMicrotask(yk)}};function Vm(i,t){i.indexOf(t)===-1&&i.push(t)}function $m(i,t){const r=i.indexOf(t);r>-1&&i.splice(r,1)}class Hm{constructor(){this.subscriptions=[]}add(t){return Vm(this.subscriptions,t),()=>$m(this.subscriptions,t)}notify(t,r,a){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,r,a);else for(let u=0;u<o;u++){const c=this.subscriptions[u];c&&c(t,r,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function hS(i,t){return t?i*(1e3/t):0}const Qx=30,vk=i=>!isNaN(parseFloat(i));class xk{constructor(t,r={}){this.version="12.4.10",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(a,o=!0)=>{const u=hn.now();this.updatedAt!==u&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=r.owner}setCurrent(t){this.current=t,this.updatedAt=hn.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=vk(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,r){this.events[t]||(this.events[t]=new Hm);const a=this.events[t].add(r);return t==="change"?()=>{a(),it.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,r){this.passiveEffect=t,this.stopPassiveEffect=r}set(t,r=!0){!r||!this.passiveEffect?this.updateAndNotify(t,r):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,r,a){this.set(r),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-a}jump(t,r=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,r&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=hn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Qx)return 0;const r=Math.min(this.updatedAt-this.prevUpdatedAt,Qx);return hS(parseFloat(this.current)-parseFloat(this.prevFrameValue),r)}start(t){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=t(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function fl(i,t){return new xk(i,t)}function bk(i,t,r){i.hasValue(t)?i.getValue(t).set(r):i.addValue(t,fl(r))}function wk(i,t){const r=dl(i,t);let{transitionEnd:a={},transition:o={},...u}=r||{};u={...u,...a};for(const c in u){const h=WC(u[c]);bk(i,c,h)}}function Sk(i){return!!(Qt(i)&&i.add)}function Dp(i,t){const r=i.getValue("willChange");if(Sk(r))return r.add(t)}function pS(i){return i.props[Fw]}const mS=(i,t,r)=>(((1-3*r+3*t)*i+(3*r-6*t))*i+3*t)*i,Ak=1e-7,_k=12;function Ek(i,t,r,a,o){let u,c,h=0;do c=t+(r-t)/2,u=mS(c,a,o)-i,u>0?r=c:t=c;while(Math.abs(u)>Ak&&++h<_k);return c}function wl(i,t,r,a){if(i===t&&r===a)return mi;const o=u=>Ek(u,0,1,i,r);return u=>u===0||u===1?u:mS(o(u),t,a)}const gS=i=>t=>t<=.5?i(2*t)/2:(2-i(2*(1-t)))/2,yS=i=>t=>1-i(1-t),vS=wl(.33,1.53,.69,.99),qm=yS(vS),xS=gS(qm),bS=i=>(i*=2)<1?.5*qm(i):.5*(2-Math.pow(2,-10*(i-1))),Gm=i=>1-Math.sin(Math.acos(i)),wS=yS(Gm),SS=gS(Gm),AS=i=>/^0[^.\s]+$/u.test(i);function Tk(i){return typeof i=="number"?i===0:i!==null?i==="none"||i==="0"||AS(i):!0}const Jo=i=>Math.round(i*1e5)/1e5,Fm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function jk(i){return i==null}const Rk=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Im=(i,t)=>r=>!!(typeof r=="string"&&Rk.test(r)&&r.startsWith(i)||t&&!jk(r)&&Object.prototype.hasOwnProperty.call(r,t)),_S=(i,t,r)=>a=>{if(typeof a!="string")return a;const[o,u,c,h]=a.match(Fm);return{[i]:parseFloat(o),[t]:parseFloat(u),[r]:parseFloat(c),alpha:h!==void 0?parseFloat(h):1}},Ck=i=>$n(0,255,i),Nh={...Us,transform:i=>Math.round(Ck(i))},da={test:Im("rgb","red"),parse:_S("red","green","blue"),transform:({red:i,green:t,blue:r,alpha:a=1})=>"rgba("+Nh.transform(i)+", "+Nh.transform(t)+", "+Nh.transform(r)+", "+Jo(cl.transform(a))+")"};function kk(i){let t="",r="",a="",o="";return i.length>5?(t=i.substring(1,3),r=i.substring(3,5),a=i.substring(5,7),o=i.substring(7,9)):(t=i.substring(1,2),r=i.substring(2,3),a=i.substring(3,4),o=i.substring(4,5),t+=t,r+=r,a+=a,o+=o),{red:parseInt(t,16),green:parseInt(r,16),blue:parseInt(a,16),alpha:o?parseInt(o,16)/255:1}}const Op={test:Im("#"),parse:kk,transform:da.transform},gs={test:Im("hsl","hue"),parse:_S("hue","saturation","lightness"),transform:({hue:i,saturation:t,lightness:r,alpha:a=1})=>"hsla("+Math.round(i)+", "+fn.transform(Jo(t))+", "+fn.transform(Jo(r))+", "+Jo(cl.transform(a))+")"},Kt={test:i=>da.test(i)||Op.test(i)||gs.test(i),parse:i=>da.test(i)?da.parse(i):gs.test(i)?gs.parse(i):Op.parse(i),transform:i=>typeof i=="string"?i:i.hasOwnProperty("red")?da.transform(i):gs.transform(i)},Dk=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Ok(i){var t,r;return isNaN(i)&&typeof i=="string"&&(((t=i.match(Fm))===null||t===void 0?void 0:t.length)||0)+(((r=i.match(Dk))===null||r===void 0?void 0:r.length)||0)>0}const ES="number",TS="color",Mk="var",zk="var(",Zx="${}",Lk=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function hl(i){const t=i.toString(),r=[],a={color:[],number:[],var:[]},o=[];let u=0;const h=t.replace(Lk,f=>(Kt.test(f)?(a.color.push(u),o.push(TS),r.push(Kt.parse(f))):f.startsWith(zk)?(a.var.push(u),o.push(Mk),r.push(f)):(a.number.push(u),o.push(ES),r.push(parseFloat(f))),++u,Zx)).split(Zx);return{values:r,split:h,indexes:a,types:o}}function jS(i){return hl(i).values}function RS(i){const{split:t,types:r}=hl(i),a=t.length;return o=>{let u="";for(let c=0;c<a;c++)if(u+=t[c],o[c]!==void 0){const h=r[c];h===ES?u+=Jo(o[c]):h===TS?u+=Kt.transform(o[c]):u+=o[c]}return u}}const Pk=i=>typeof i=="number"?0:i;function Uk(i){const t=jS(i);return RS(i)(t.map(Pk))}const Er={test:Ok,parse:jS,createTransformer:RS,getAnimatableNone:Uk},Nk=new Set(["brightness","contrast","saturate","opacity"]);function Bk(i){const[t,r]=i.slice(0,-1).split("(");if(t==="drop-shadow")return i;const[a]=r.match(Fm)||[];if(!a)return i;const o=r.replace(a,"");let u=Nk.has(t)?1:0;return a!==r&&(u*=100),t+"("+u+o+")"}const Vk=/\b([a-z-]*)\(.*?\)/gu,Mp={...Er,getAnimatableNone:i=>{const t=i.match(Vk);return t?t.map(Bk).join(" "):i}},$k={...Rm,color:Kt,backgroundColor:Kt,outlineColor:Kt,fill:Kt,stroke:Kt,borderColor:Kt,borderTopColor:Kt,borderRightColor:Kt,borderBottomColor:Kt,borderLeftColor:Kt,filter:Mp,WebkitFilter:Mp},Ym=i=>$k[i];function CS(i,t){let r=Ym(i);return r!==Mp&&(r=Er),r.getAnimatableNone?r.getAnimatableNone(t):void 0}const Hk=new Set(["auto","none","0"]);function qk(i,t,r){let a=0,o;for(;a<i.length&&!o;){const u=i[a];typeof u=="string"&&!Hk.has(u)&&hl(u).values.length&&(o=i[a]),a++}if(o&&r)for(const u of t)i[u]=CS(r,o)}const Wx=i=>i===Us||i===be,Jx=(i,t)=>parseFloat(i.split(", ")[t]),e1=(i,t)=>(r,{transform:a})=>{if(a==="none"||!a)return 0;const o=a.match(/^matrix3d\((.+)\)$/u);if(o)return Jx(o[1],t);{const u=a.match(/^matrix\((.+)\)$/u);return u?Jx(u[1],i):0}},Gk=new Set(["x","y","z"]),Fk=Ps.filter(i=>!Gk.has(i));function Ik(i){const t=[];return Fk.forEach(r=>{const a=i.getValue(r);a!==void 0&&(t.push([r,a.get()]),a.set(r.startsWith("scale")?1:0))}),t}const ks={width:({x:i},{paddingLeft:t="0",paddingRight:r="0"})=>i.max-i.min-parseFloat(t)-parseFloat(r),height:({y:i},{paddingTop:t="0",paddingBottom:r="0"})=>i.max-i.min-parseFloat(t)-parseFloat(r),top:(i,{top:t})=>parseFloat(t),left:(i,{left:t})=>parseFloat(t),bottom:({y:i},{top:t})=>parseFloat(t)+(i.max-i.min),right:({x:i},{left:t})=>parseFloat(t)+(i.max-i.min),x:e1(4,13),y:e1(5,14)};ks.translateX=ks.x;ks.translateY=ks.y;const ha=new Set;let zp=!1,Lp=!1;function kS(){if(Lp){const i=Array.from(ha).filter(a=>a.needsMeasurement),t=new Set(i.map(a=>a.element)),r=new Map;t.forEach(a=>{const o=Ik(a);o.length&&(r.set(a,o),a.render())}),i.forEach(a=>a.measureInitialState()),t.forEach(a=>{a.render();const o=r.get(a);o&&o.forEach(([u,c])=>{var h;(h=a.getValue(u))===null||h===void 0||h.set(c)})}),i.forEach(a=>a.measureEndState()),i.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}Lp=!1,zp=!1,ha.forEach(i=>i.complete()),ha.clear()}function DS(){ha.forEach(i=>{i.readKeyframes(),i.needsMeasurement&&(Lp=!0)})}function Yk(){DS(),kS()}class Km{constructor(t,r,a,o,u,c=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=r,this.name=a,this.motionValue=o,this.element=u,this.isAsync=c}scheduleResolve(){this.isScheduled=!0,this.isAsync?(ha.add(this),zp||(zp=!0,it.read(DS),it.resolveKeyframes(kS))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:r,element:a,motionValue:o}=this;for(let u=0;u<t.length;u++)if(t[u]===null)if(u===0){const c=o==null?void 0:o.get(),h=t[t.length-1];if(c!==void 0)t[0]=c;else if(a&&r){const f=a.readValue(r,h);f!=null&&(t[0]=f)}t[0]===void 0&&(t[0]=h),o&&c===void 0&&o.set(t[0])}else t[u]=t[u-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),ha.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,ha.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const OS=i=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i),Kk=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Xk(i){const t=Kk.exec(i);if(!t)return[,];const[,r,a,o]=t;return[`--${r??a}`,o]}function MS(i,t,r=1){const[a,o]=Xk(i);if(!a)return;const u=window.getComputedStyle(t).getPropertyValue(a);if(u){const c=u.trim();return OS(c)?parseFloat(c):c}return jm(o)?MS(o,t,r+1):o}const zS=i=>t=>t.test(i),Qk={test:i=>i==="auto",parse:i=>i},LS=[Us,be,fn,mr,LC,zC,Qk],t1=i=>LS.find(zS(i));class PS extends Km{constructor(t,r,a,o,u){super(t,r,a,o,u,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:r,name:a}=this;if(!r||!r.current)return;super.readKeyframes();for(let f=0;f<t.length;f++){let p=t[f];if(typeof p=="string"&&(p=p.trim(),jm(p))){const g=MS(p,r.current);g!==void 0&&(t[f]=g),f===t.length-1&&(this.finalKeyframe=p)}}if(this.resolveNoneKeyframes(),!fS.has(a)||t.length!==2)return;const[o,u]=t,c=t1(o),h=t1(u);if(c!==h)if(Wx(c)&&Wx(h))for(let f=0;f<t.length;f++){const p=t[f];typeof p=="string"&&(t[f]=parseFloat(p))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:r}=this,a=[];for(let o=0;o<t.length;o++)Tk(t[o])&&a.push(o);a.length&&qk(t,a,r)}measureInitialState(){const{element:t,unresolvedKeyframes:r,name:a}=this;if(!t||!t.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ks[a](t.measureViewportBox(),window.getComputedStyle(t.current)),r[0]=this.measuredOrigin;const o=r[r.length-1];o!==void 0&&t.getValue(a,o).jump(o,!1)}measureEndState(){var t;const{element:r,name:a,unresolvedKeyframes:o}=this;if(!r||!r.current)return;const u=r.getValue(a);u&&u.jump(this.measuredOrigin,!1);const c=o.length-1,h=o[c];o[c]=ks[a](r.measureViewportBox(),window.getComputedStyle(r.current)),h!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=h),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([f,p])=>{r.getValue(f).set(p)}),this.resolveNoneKeyframes()}}const i1=(i,t)=>t==="zIndex"?!1:!!(typeof i=="number"||Array.isArray(i)||typeof i=="string"&&(Er.test(i)||i==="0")&&!i.startsWith("url("));function Zk(i){const t=i[0];if(i.length===1)return!0;for(let r=0;r<i.length;r++)if(i[r]!==t)return!0}function Wk(i,t,r,a){const o=i[0];if(o===null)return!1;if(t==="display"||t==="visibility")return!0;const u=i[i.length-1],c=i1(o,t),h=i1(u,t);return!c||!h?!1:Zk(i)||(r==="spring"||Um(r))&&a}const Jk=i=>i!==null;function Wc(i,{repeat:t,repeatType:r="loop"},a){const o=i.filter(Jk),u=t&&r!=="loop"&&t%2===1?0:o.length-1;return!u||a===void 0?o[u]:a}const e4=40;class US{constructor({autoplay:t=!0,delay:r=0,type:a="keyframes",repeat:o=0,repeatDelay:u=0,repeatType:c="loop",...h}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=hn.now(),this.options={autoplay:t,delay:r,type:a,repeat:o,repeatDelay:u,repeatType:c,...h},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>e4?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&Yk(),this._resolved}onKeyframesResolved(t,r){this.resolvedAt=hn.now(),this.hasAttemptedResolve=!0;const{name:a,type:o,velocity:u,delay:c,onComplete:h,onUpdate:f,isGenerator:p}=this.options;if(!p&&!Wk(t,a,o,u))if(c)this.options.duration=0;else{f&&f(Wc(t,this.options,r)),h&&h(),this.resolveFinishedPromise();return}const g=this.initPlayback(t,r);g!==!1&&(this._resolved={keyframes:t,finalKeyframe:r,...g},this.onPostResolved())}onPostResolved(){}then(t,r){return this.currentFinishedPromise.then(t,r)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const ct=(i,t,r)=>i+(t-i)*r;function Bh(i,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?i+(t-i)*6*r:r<1/2?t:r<2/3?i+(t-i)*(2/3-r)*6:i}function t4({hue:i,saturation:t,lightness:r,alpha:a}){i/=360,t/=100,r/=100;let o=0,u=0,c=0;if(!t)o=u=c=r;else{const h=r<.5?r*(1+t):r+t-r*t,f=2*r-h;o=Bh(f,h,i+1/3),u=Bh(f,h,i),c=Bh(f,h,i-1/3)}return{red:Math.round(o*255),green:Math.round(u*255),blue:Math.round(c*255),alpha:a}}function Mc(i,t){return r=>r>0?t:i}const Vh=(i,t,r)=>{const a=i*i,o=r*(t*t-a)+a;return o<0?0:Math.sqrt(o)},i4=[Op,da,gs],n4=i=>i4.find(t=>t.test(i));function n1(i){const t=n4(i);if(!t)return!1;let r=t.parse(i);return t===gs&&(r=t4(r)),r}const r1=(i,t)=>{const r=n1(i),a=n1(t);if(!r||!a)return Mc(i,t);const o={...r};return u=>(o.red=Vh(r.red,a.red,u),o.green=Vh(r.green,a.green,u),o.blue=Vh(r.blue,a.blue,u),o.alpha=ct(r.alpha,a.alpha,u),da.transform(o))},r4=(i,t)=>r=>t(i(r)),Sl=(...i)=>i.reduce(r4),Pp=new Set(["none","hidden"]);function a4(i,t){return Pp.has(i)?r=>r<=0?i:t:r=>r>=1?t:i}function s4(i,t){return r=>ct(i,t,r)}function Xm(i){return typeof i=="number"?s4:typeof i=="string"?jm(i)?Mc:Kt.test(i)?r1:u4:Array.isArray(i)?NS:typeof i=="object"?Kt.test(i)?r1:o4:Mc}function NS(i,t){const r=[...i],a=r.length,o=i.map((u,c)=>Xm(u)(u,t[c]));return u=>{for(let c=0;c<a;c++)r[c]=o[c](u);return r}}function o4(i,t){const r={...i,...t},a={};for(const o in r)i[o]!==void 0&&t[o]!==void 0&&(a[o]=Xm(i[o])(i[o],t[o]));return o=>{for(const u in a)r[u]=a[u](o);return r}}function l4(i,t){var r;const a=[],o={color:0,var:0,number:0};for(let u=0;u<t.values.length;u++){const c=t.types[u],h=i.indexes[c][o[c]],f=(r=i.values[h])!==null&&r!==void 0?r:0;a[u]=f,o[c]++}return a}const u4=(i,t)=>{const r=Er.createTransformer(t),a=hl(i),o=hl(t);return a.indexes.var.length===o.indexes.var.length&&a.indexes.color.length===o.indexes.color.length&&a.indexes.number.length>=o.indexes.number.length?Pp.has(i)&&!o.values.length||Pp.has(t)&&!a.values.length?a4(i,t):Sl(NS(l4(a,o),o.values),r):Mc(i,t)};function BS(i,t,r){return typeof i=="number"&&typeof t=="number"&&typeof r=="number"?ct(i,t,r):Xm(i)(i,t)}const c4=5;function VS(i,t,r){const a=Math.max(t-c4,0);return hS(r-i(a),t-a)}const yt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},a1=.001;function d4({duration:i=yt.duration,bounce:t=yt.bounce,velocity:r=yt.velocity,mass:a=yt.mass}){let o,u,c=1-t;c=$n(yt.minDamping,yt.maxDamping,c),i=$n(yt.minDuration,yt.maxDuration,Vn(i)),c<1?(o=p=>{const g=p*c,v=g*i,x=g-r,w=Up(p,c),S=Math.exp(-v);return a1-x/w*S},u=p=>{const v=p*c*i,x=v*r+r,w=Math.pow(c,2)*Math.pow(p,2)*i,S=Math.exp(-v),T=Up(Math.pow(p,2),c);return(-o(p)+a1>0?-1:1)*((x-w)*S)/T}):(o=p=>{const g=Math.exp(-p*i),v=(p-r)*i+1;return-.001+g*v},u=p=>{const g=Math.exp(-p*i),v=(r-p)*(i*i);return g*v});const h=5/i,f=h4(o,u,h);if(i=Bn(i),isNaN(f))return{stiffness:yt.stiffness,damping:yt.damping,duration:i};{const p=Math.pow(f,2)*a;return{stiffness:p,damping:c*2*Math.sqrt(a*p),duration:i}}}const f4=12;function h4(i,t,r){let a=r;for(let o=1;o<f4;o++)a=a-i(a)/t(a);return a}function Up(i,t){return i*Math.sqrt(1-t*t)}const p4=["duration","bounce"],m4=["stiffness","damping","mass"];function s1(i,t){return t.some(r=>i[r]!==void 0)}function g4(i){let t={velocity:yt.velocity,stiffness:yt.stiffness,damping:yt.damping,mass:yt.mass,isResolvedFromDuration:!1,...i};if(!s1(i,m4)&&s1(i,p4))if(i.visualDuration){const r=i.visualDuration,a=2*Math.PI/(r*1.2),o=a*a,u=2*$n(.05,1,1-(i.bounce||0))*Math.sqrt(o);t={...t,mass:yt.mass,stiffness:o,damping:u}}else{const r=d4(i);t={...t,...r,mass:yt.mass},t.isResolvedFromDuration=!0}return t}function $S(i=yt.visualDuration,t=yt.bounce){const r=typeof i!="object"?{visualDuration:i,keyframes:[0,1],bounce:t}:i;let{restSpeed:a,restDelta:o}=r;const u=r.keyframes[0],c=r.keyframes[r.keyframes.length-1],h={done:!1,value:u},{stiffness:f,damping:p,mass:g,duration:v,velocity:x,isResolvedFromDuration:w}=g4({...r,velocity:-Vn(r.velocity||0)}),S=x||0,T=p/(2*Math.sqrt(f*g)),E=c-u,j=Vn(Math.sqrt(f/g)),D=Math.abs(E)<5;a||(a=D?yt.restSpeed.granular:yt.restSpeed.default),o||(o=D?yt.restDelta.granular:yt.restDelta.default);let M;if(T<1){const P=Up(j,T);M=R=>{const F=Math.exp(-T*j*R);return c-F*((S+T*j*E)/P*Math.sin(P*R)+E*Math.cos(P*R))}}else if(T===1)M=P=>c-Math.exp(-j*P)*(E+(S+j*E)*P);else{const P=j*Math.sqrt(T*T-1);M=R=>{const F=Math.exp(-T*j*R),I=Math.min(P*R,300);return c-F*((S+T*j*E)*Math.sinh(I)+P*E*Math.cosh(I))/P}}const V={calculatedDuration:w&&v||null,next:P=>{const R=M(P);if(w)h.done=P>=v;else{let F=0;T<1&&(F=P===0?Bn(S):VS(M,P,R));const I=Math.abs(F)<=a,G=Math.abs(c-R)<=o;h.done=I&&G}return h.value=h.done?c:R,h},toString:()=>{const P=Math.min(aS(V),Cp),R=sS(F=>V.next(P*F).value,P,30);return P+"ms "+R}};return V}function o1({keyframes:i,velocity:t=0,power:r=.8,timeConstant:a=325,bounceDamping:o=10,bounceStiffness:u=500,modifyTarget:c,min:h,max:f,restDelta:p=.5,restSpeed:g}){const v=i[0],x={done:!1,value:v},w=I=>h!==void 0&&I<h||f!==void 0&&I>f,S=I=>h===void 0?f:f===void 0||Math.abs(h-I)<Math.abs(f-I)?h:f;let T=r*t;const E=v+T,j=c===void 0?E:c(E);j!==E&&(T=j-v);const D=I=>-T*Math.exp(-I/a),M=I=>j+D(I),V=I=>{const G=D(I),te=M(I);x.done=Math.abs(G)<=p,x.value=x.done?j:te};let P,R;const F=I=>{w(x.value)&&(P=I,R=$S({keyframes:[x.value,S(x.value)],velocity:VS(M,I,x.value),damping:o,stiffness:u,restDelta:p,restSpeed:g}))};return F(0),{calculatedDuration:null,next:I=>{let G=!1;return!R&&P===void 0&&(G=!0,V(I),F(I)),P!==void 0&&I>=P?R.next(I-P):(!G&&V(I),x)}}}const y4=wl(.42,0,1,1),v4=wl(0,0,.58,1),HS=wl(.42,0,.58,1),x4=i=>Array.isArray(i)&&typeof i[0]!="number",b4={linear:mi,easeIn:y4,easeInOut:HS,easeOut:v4,circIn:Gm,circInOut:SS,circOut:wS,backIn:qm,backInOut:xS,backOut:vS,anticipate:bS},l1=i=>{if(Nm(i)){Vw(i.length===4);const[t,r,a,o]=i;return wl(t,r,a,o)}else if(typeof i=="string")return b4[i];return i};function w4(i,t,r){const a=[],o=r||BS,u=i.length-1;for(let c=0;c<u;c++){let h=o(i[c],i[c+1]);if(t){const f=Array.isArray(t)?t[c]||mi:t;h=Sl(f,h)}a.push(h)}return a}function S4(i,t,{clamp:r=!0,ease:a,mixer:o}={}){const u=i.length;if(Vw(u===t.length),u===1)return()=>t[0];if(u===2&&t[0]===t[1])return()=>t[1];const c=i[0]===i[1];i[0]>i[u-1]&&(i=[...i].reverse(),t=[...t].reverse());const h=w4(t,a,o),f=h.length,p=g=>{if(c&&g<i[0])return t[0];let v=0;if(f>1)for(;v<i.length-2&&!(g<i[v+1]);v++);const x=Rs(i[v],i[v+1],g);return h[v](x)};return r?g=>p($n(i[0],i[u-1],g)):p}function A4(i,t){const r=i[i.length-1];for(let a=1;a<=t;a++){const o=Rs(0,t,a);i.push(ct(r,1,o))}}function _4(i){const t=[0];return A4(t,i.length-1),t}function E4(i,t){return i.map(r=>r*t)}function T4(i,t){return i.map(()=>t||HS).splice(0,i.length-1)}function zc({duration:i=300,keyframes:t,times:r,ease:a="easeInOut"}){const o=x4(a)?a.map(l1):l1(a),u={done:!1,value:t[0]},c=E4(r&&r.length===t.length?r:_4(t),i),h=S4(c,t,{ease:Array.isArray(o)?o:T4(t,o)});return{calculatedDuration:i,next:f=>(u.value=h(f),u.done=f>=i,u)}}const j4=i=>{const t=({timestamp:r})=>i(r);return{start:()=>it.update(t,!0),stop:()=>_r(t),now:()=>Gt.isProcessing?Gt.timestamp:hn.now()}},R4={decay:o1,inertia:o1,tween:zc,keyframes:zc,spring:$S},C4=i=>i/100;class Qm extends US{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:f}=this.options;f&&f()};const{name:r,motionValue:a,element:o,keyframes:u}=this.options,c=(o==null?void 0:o.KeyframeResolver)||Km,h=(f,p)=>this.onKeyframesResolved(f,p);this.resolver=new c(u,h,r,a,o),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:r="keyframes",repeat:a=0,repeatDelay:o=0,repeatType:u,velocity:c=0}=this.options,h=Um(r)?r:R4[r]||zc;let f,p;h!==zc&&typeof t[0]!="number"&&(f=Sl(C4,BS(t[0],t[1])),t=[0,100]);const g=h({...this.options,keyframes:t});u==="mirror"&&(p=h({...this.options,keyframes:[...t].reverse(),velocity:-c})),g.calculatedDuration===null&&(g.calculatedDuration=aS(g));const{calculatedDuration:v}=g,x=v+o,w=x*(a+1)-o;return{generator:g,mirroredGenerator:p,mapPercentToKeyframes:f,calculatedDuration:v,resolvedDuration:x,totalDuration:w}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,r=!1){const{resolved:a}=this;if(!a){const{keyframes:I}=this.options;return{done:!0,value:I[I.length-1]}}const{finalKeyframe:o,generator:u,mirroredGenerator:c,mapPercentToKeyframes:h,keyframes:f,calculatedDuration:p,totalDuration:g,resolvedDuration:v}=a;if(this.startTime===null)return u.next(0);const{delay:x,repeat:w,repeatType:S,repeatDelay:T,onUpdate:E}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-g/this.speed,this.startTime)),r?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const j=this.currentTime-x*(this.speed>=0?1:-1),D=this.speed>=0?j<0:j>g;this.currentTime=Math.max(j,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=g);let M=this.currentTime,V=u;if(w){const I=Math.min(this.currentTime,g)/v;let G=Math.floor(I),te=I%1;!te&&I>=1&&(te=1),te===1&&G--,G=Math.min(G,w+1),!!(G%2)&&(S==="reverse"?(te=1-te,T&&(te-=T/v)):S==="mirror"&&(V=c)),M=$n(0,1,te)*v}const P=D?{done:!1,value:f[0]}:V.next(M);h&&(P.value=h(P.value));let{done:R}=P;!D&&p!==null&&(R=this.speed>=0?this.currentTime>=g:this.currentTime<=0);const F=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&R);return F&&o!==void 0&&(P.value=Wc(f,this.options,o)),E&&E(P.value),F&&this.finish(),P}get duration(){const{resolved:t}=this;return t?Vn(t.calculatedDuration):0}get time(){return Vn(this.currentTime)}set time(t){t=Bn(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const r=this.playbackSpeed!==t;this.playbackSpeed=t,r&&(this.time=Vn(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=j4,onPlay:r,startTime:a}=this.options;this.driver||(this.driver=t(u=>this.tick(u))),r&&r();const o=this.driver.now();this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=o):this.startTime=a??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const k4=new Set(["opacity","clipPath","filter","transform"]);function D4(i,t,r,{delay:a=0,duration:o=300,repeat:u=0,repeatType:c="loop",ease:h="easeInOut",times:f}={}){const p={[t]:r};f&&(p.offset=f);const g=lS(h,o);return Array.isArray(g)&&(p.easing=g),i.animate(p,{delay:a,duration:o,easing:Array.isArray(g)?"linear":g,fill:"both",iterations:u+1,direction:c==="reverse"?"alternate":"normal"})}const O4=wm(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Lc=10,M4=2e4;function z4(i){return Um(i.type)||i.type==="spring"||!oS(i.ease)}function L4(i,t){const r=new Qm({...t,keyframes:i,repeat:0,delay:0,isGenerator:!0});let a={done:!1,value:i[0]};const o=[];let u=0;for(;!a.done&&u<M4;)a=r.sample(u),o.push(a.value),u+=Lc;return{times:void 0,keyframes:o,duration:u-Lc,ease:"linear"}}const qS={anticipate:bS,backInOut:xS,circInOut:SS};function P4(i){return i in qS}class u1 extends US{constructor(t){super(t);const{name:r,motionValue:a,element:o,keyframes:u}=this.options;this.resolver=new PS(u,(c,h)=>this.onKeyframesResolved(c,h),r,a,o),this.resolver.scheduleResolve()}initPlayback(t,r){let{duration:a=300,times:o,ease:u,type:c,motionValue:h,name:f,startTime:p}=this.options;if(!h.owner||!h.owner.current)return!1;if(typeof u=="string"&&Oc()&&P4(u)&&(u=qS[u]),z4(this.options)){const{onComplete:v,onUpdate:x,motionValue:w,element:S,...T}=this.options,E=L4(t,T);t=E.keyframes,t.length===1&&(t[1]=t[0]),a=E.duration,o=E.times,u=E.ease,c="keyframes"}const g=D4(h.owner.current,f,t,{...this.options,duration:a,times:o,ease:u});return g.startTime=p??this.calcStartTime(),this.pendingTimeline?(Ix(g,this.pendingTimeline),this.pendingTimeline=void 0):g.onfinish=()=>{const{onComplete:v}=this.options;h.set(Wc(t,this.options,r)),v&&v(),this.cancel(),this.resolveFinishedPromise()},{animation:g,duration:a,times:o,type:c,ease:u,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:r}=t;return Vn(r)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:r}=t;return Vn(r.currentTime||0)}set time(t){const{resolved:r}=this;if(!r)return;const{animation:a}=r;a.currentTime=Bn(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:r}=t;return r.playbackRate}set speed(t){const{resolved:r}=this;if(!r)return;const{animation:a}=r;a.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:r}=t;return r.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:r}=t;return r.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:r}=this;if(!r)return mi;const{animation:a}=r;Ix(a,t)}return mi}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.playState==="finished"&&this.updateFinishedPromise(),r.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:r,keyframes:a,duration:o,type:u,ease:c,times:h}=t;if(r.playState==="idle"||r.playState==="finished")return;if(this.time){const{motionValue:p,onUpdate:g,onComplete:v,element:x,...w}=this.options,S=new Qm({...w,keyframes:a,duration:o,type:u,ease:c,times:h,isGenerator:!0}),T=Bn(this.time);p.setWithVelocity(S.sample(T-Lc).value,S.sample(T).value,Lc)}const{onStop:f}=this.options;f&&f(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:r,name:a,repeatDelay:o,repeatType:u,damping:c,type:h}=t;if(!r||!r.owner||!(r.owner.current instanceof HTMLElement))return!1;const{onUpdate:f,transformTemplate:p}=r.owner.getProps();return O4()&&a&&k4.has(a)&&!f&&!p&&!o&&u!=="mirror"&&c!==0&&h!=="inertia"}}const U4={type:"spring",stiffness:500,damping:25,restSpeed:10},N4=i=>({type:"spring",stiffness:550,damping:i===0?2*Math.sqrt(550):30,restSpeed:10}),B4={type:"keyframes",duration:.8},V4={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},$4=(i,{keyframes:t})=>t.length>2?B4:ma.has(i)?i.startsWith("scale")?N4(t[1]):U4:V4;function H4({when:i,delay:t,delayChildren:r,staggerChildren:a,staggerDirection:o,repeat:u,repeatType:c,repeatDelay:h,from:f,elapsed:p,...g}){return!!Object.keys(g).length}const Zm=(i,t,r,a={},o,u)=>c=>{const h=Pm(a,i)||{},f=h.delay||a.delay||0;let{elapsed:p=0}=a;p=p-Bn(f);let g={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:t.getVelocity(),...h,delay:-p,onUpdate:x=>{t.set(x),h.onUpdate&&h.onUpdate(x)},onComplete:()=>{c(),h.onComplete&&h.onComplete()},name:i,motionValue:t,element:u?void 0:o};H4(h)||(g={...g,...$4(i,g)}),g.duration&&(g.duration=Bn(g.duration)),g.repeatDelay&&(g.repeatDelay=Bn(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let v=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(g.duration=0,g.delay===0&&(v=!0)),v&&!u&&t.get()!==void 0){const x=Wc(g.keyframes,h);if(x!==void 0)return it.update(()=>{g.onUpdate(x),g.onComplete()}),new sk([])}return!u&&u1.supports(g)?new u1(g):new Qm(g)};function q4({protectedKeys:i,needsAnimating:t},r){const a=i.hasOwnProperty(r)&&t[r]!==!0;return t[r]=!1,a}function GS(i,t,{delay:r=0,transitionOverride:a,type:o}={}){var u;let{transition:c=i.getDefaultTransition(),transitionEnd:h,...f}=t;a&&(c=a);const p=[],g=o&&i.animationState&&i.animationState.getState()[o];for(const v in f){const x=i.getValue(v,(u=i.latestValues[v])!==null&&u!==void 0?u:null),w=f[v];if(w===void 0||g&&q4(g,v))continue;const S={delay:r,...Pm(c||{},v)};let T=!1;if(window.MotionHandoffAnimation){const j=pS(i);if(j){const D=window.MotionHandoffAnimation(j,v,it);D!==null&&(S.startTime=D,T=!0)}}Dp(i,v),x.start(Zm(v,x,w,i.shouldReduceMotion&&fS.has(v)?{type:!1}:S,i,T));const E=x.animation;E&&p.push(E)}return h&&Promise.all(p).then(()=>{it.update(()=>{h&&wk(i,h)})}),p}function Np(i,t,r={}){var a;const o=dl(i,t,r.type==="exit"?(a=i.presenceContext)===null||a===void 0?void 0:a.custom:void 0);let{transition:u=i.getDefaultTransition()||{}}=o||{};r.transitionOverride&&(u=r.transitionOverride);const c=o?()=>Promise.all(GS(i,o,r)):()=>Promise.resolve(),h=i.variantChildren&&i.variantChildren.size?(p=0)=>{const{delayChildren:g=0,staggerChildren:v,staggerDirection:x}=u;return G4(i,t,g+p,v,x,r)}:()=>Promise.resolve(),{when:f}=u;if(f){const[p,g]=f==="beforeChildren"?[c,h]:[h,c];return p().then(()=>g())}else return Promise.all([c(),h(r.delay)])}function G4(i,t,r=0,a=0,o=1,u){const c=[],h=(i.variantChildren.size-1)*a,f=o===1?(p=0)=>p*a:(p=0)=>h-p*a;return Array.from(i.variantChildren).sort(F4).forEach((p,g)=>{p.notify("AnimationStart",t),c.push(Np(p,t,{...u,delay:r+f(g)}).then(()=>p.notify("AnimationComplete",t)))}),Promise.all(c)}function F4(i,t){return i.sortNodePosition(t)}function I4(i,t,r={}){i.notify("AnimationStart",t);let a;if(Array.isArray(t)){const o=t.map(u=>Np(i,u,r));a=Promise.all(o)}else if(typeof t=="string")a=Np(i,t,r);else{const o=typeof t=="function"?dl(i,t,r.custom):t;a=Promise.all(GS(i,o,r))}return a.then(()=>{i.notify("AnimationComplete",t)})}function FS(i,t){if(!Array.isArray(t))return!1;const r=t.length;if(r!==i.length)return!1;for(let a=0;a<r;a++)if(t[a]!==i[a])return!1;return!0}const Y4=Am.length;function IS(i){if(!i)return;if(!i.isControllingVariants){const r=i.parent?IS(i.parent)||{}:{};return i.props.initial!==void 0&&(r.initial=i.props.initial),r}const t={};for(let r=0;r<Y4;r++){const a=Am[r],o=i.props[a];(ll(o)||o===!1)&&(t[a]=o)}return t}const K4=[...Sm].reverse(),X4=Sm.length;function Q4(i){return t=>Promise.all(t.map(({animation:r,options:a})=>I4(i,r,a)))}function Z4(i){let t=Q4(i),r=c1(),a=!0;const o=f=>(p,g)=>{var v;const x=dl(i,g,f==="exit"?(v=i.presenceContext)===null||v===void 0?void 0:v.custom:void 0);if(x){const{transition:w,transitionEnd:S,...T}=x;p={...p,...T,...S}}return p};function u(f){t=f(i)}function c(f){const{props:p}=i,g=IS(i.parent)||{},v=[],x=new Set;let w={},S=1/0;for(let E=0;E<X4;E++){const j=K4[E],D=r[j],M=p[j]!==void 0?p[j]:g[j],V=ll(M),P=j===f?D.isActive:null;P===!1&&(S=E);let R=M===g[j]&&M!==p[j]&&V;if(R&&a&&i.manuallyAnimateOnMount&&(R=!1),D.protectedKeys={...w},!D.isActive&&P===null||!M&&!D.prevProp||Qc(M)||typeof M=="boolean")continue;const F=W4(D.prevProp,M);let I=F||j===f&&D.isActive&&!R&&V||E>S&&V,G=!1;const te=Array.isArray(M)?M:[M];let he=te.reduce(o(j),{});P===!1&&(he={});const{prevResolvedValues:Ae={}}=D,Ne={...Ae,...he},Fe=ae=>{I=!0,x.has(ae)&&(G=!0,x.delete(ae)),D.needsAnimating[ae]=!0;const X=i.getValue(ae);X&&(X.liveStyle=!1)};for(const ae in Ne){const X=he[ae],ne=Ae[ae];if(w.hasOwnProperty(ae))continue;let k=!1;Rp(X)&&Rp(ne)?k=!FS(X,ne):k=X!==ne,k?X!=null?Fe(ae):x.add(ae):X!==void 0&&x.has(ae)?Fe(ae):D.protectedKeys[ae]=!0}D.prevProp=M,D.prevResolvedValues=he,D.isActive&&(w={...w,...he}),a&&i.blockInitialAnimation&&(I=!1),I&&(!(R&&F)||G)&&v.push(...te.map(ae=>({animation:ae,options:{type:j}})))}if(x.size){const E={};if(typeof p.initial!="boolean"){const j=dl(i,Array.isArray(p.initial)?p.initial[0]:p.initial);j&&j.transition&&(E.transition=j.transition)}x.forEach(j=>{const D=i.getBaseTarget(j),M=i.getValue(j);M&&(M.liveStyle=!0),E[j]=D??null}),v.push({animation:E})}let T=!!v.length;return a&&(p.initial===!1||p.initial===p.animate)&&!i.manuallyAnimateOnMount&&(T=!1),a=!1,T?t(v):Promise.resolve()}function h(f,p){var g;if(r[f].isActive===p)return Promise.resolve();(g=i.variantChildren)===null||g===void 0||g.forEach(x=>{var w;return(w=x.animationState)===null||w===void 0?void 0:w.setActive(f,p)}),r[f].isActive=p;const v=c(f);for(const x in r)r[x].protectedKeys={};return v}return{animateChanges:c,setActive:h,setAnimateFunction:u,getState:()=>r,reset:()=>{r=c1(),a=!0}}}function W4(i,t){return typeof t=="string"?t!==i:Array.isArray(t)?!FS(t,i):!1}function ea(i=!1){return{isActive:i,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function c1(){return{animate:ea(!0),whileInView:ea(),whileHover:ea(),whileTap:ea(),whileDrag:ea(),whileFocus:ea(),exit:ea()}}class jr{constructor(t){this.isMounted=!1,this.node=t}update(){}}class J4 extends jr{constructor(t){super(t),t.animationState||(t.animationState=Z4(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Qc(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:r}=this.node.prevProps||{};t!==r&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let e3=0;class t3 extends jr{constructor(){super(...arguments),this.id=e3++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:r}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===a)return;const o=this.node.animationState.setActive("exit",!t);r&&!t&&o.then(()=>{r(this.id)})}mount(){const{register:t,onExitComplete:r}=this.node.presenceContext||{};r&&r(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const i3={animation:{Feature:J4},exit:{Feature:t3}};function pl(i,t,r,a={passive:!0}){return i.addEventListener(t,r,a),()=>i.removeEventListener(t,r)}function Al(i){return{point:{x:i.pageX,y:i.pageY}}}const n3=i=>t=>Bm(t)&&i(t,Al(t));function ys(i,t,r,a){return pl(i,t,n3(r),a)}function YS({top:i,left:t,right:r,bottom:a}){return{x:{min:t,max:r},y:{min:i,max:a}}}function r3({x:i,y:t}){return{top:t.min,right:i.max,bottom:t.max,left:i.min}}function a3(i,t){if(!t)return i;const r=t({x:i.left,y:i.top}),a=t({x:i.right,y:i.bottom});return{top:r.y,left:r.x,bottom:a.y,right:a.x}}const KS=1e-4,s3=1-KS,o3=1+KS,XS=.01,l3=0-XS,u3=0+XS;function ei(i){return i.max-i.min}function c3(i,t,r){return Math.abs(i-t)<=r}function d1(i,t,r,a=.5){i.origin=a,i.originPoint=ct(t.min,t.max,i.origin),i.scale=ei(r)/ei(t),i.translate=ct(r.min,r.max,i.origin)-i.originPoint,(i.scale>=s3&&i.scale<=o3||isNaN(i.scale))&&(i.scale=1),(i.translate>=l3&&i.translate<=u3||isNaN(i.translate))&&(i.translate=0)}function el(i,t,r,a){d1(i.x,t.x,r.x,a?a.originX:void 0),d1(i.y,t.y,r.y,a?a.originY:void 0)}function f1(i,t,r){i.min=r.min+t.min,i.max=i.min+ei(t)}function d3(i,t,r){f1(i.x,t.x,r.x),f1(i.y,t.y,r.y)}function h1(i,t,r){i.min=t.min-r.min,i.max=i.min+ei(t)}function tl(i,t,r){h1(i.x,t.x,r.x),h1(i.y,t.y,r.y)}const p1=()=>({translate:0,scale:1,origin:0,originPoint:0}),vs=()=>({x:p1(),y:p1()}),m1=()=>({min:0,max:0}),bt=()=>({x:m1(),y:m1()});function Mi(i){return[i("x"),i("y")]}function $h(i){return i===void 0||i===1}function Bp({scale:i,scaleX:t,scaleY:r}){return!$h(i)||!$h(t)||!$h(r)}function aa(i){return Bp(i)||QS(i)||i.z||i.rotate||i.rotateX||i.rotateY||i.skewX||i.skewY}function QS(i){return g1(i.x)||g1(i.y)}function g1(i){return i&&i!=="0%"}function Pc(i,t,r){const a=i-r,o=t*a;return r+o}function y1(i,t,r,a,o){return o!==void 0&&(i=Pc(i,o,a)),Pc(i,r,a)+t}function Vp(i,t=0,r=1,a,o){i.min=y1(i.min,t,r,a,o),i.max=y1(i.max,t,r,a,o)}function ZS(i,{x:t,y:r}){Vp(i.x,t.translate,t.scale,t.originPoint),Vp(i.y,r.translate,r.scale,r.originPoint)}const v1=.999999999999,x1=1.0000000000001;function f3(i,t,r,a=!1){const o=r.length;if(!o)return;t.x=t.y=1;let u,c;for(let h=0;h<o;h++){u=r[h],c=u.projectionDelta;const{visualElement:f}=u.options;f&&f.props.style&&f.props.style.display==="contents"||(a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&bs(i,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),c&&(t.x*=c.x.scale,t.y*=c.y.scale,ZS(i,c)),a&&aa(u.latestValues)&&bs(i,u.latestValues))}t.x<x1&&t.x>v1&&(t.x=1),t.y<x1&&t.y>v1&&(t.y=1)}function xs(i,t){i.min=i.min+t,i.max=i.max+t}function b1(i,t,r,a,o=.5){const u=ct(i.min,i.max,o);Vp(i,t,r,u,a)}function bs(i,t){b1(i.x,t.x,t.scaleX,t.scale,t.originX),b1(i.y,t.y,t.scaleY,t.scale,t.originY)}function WS(i,t){return YS(a3(i.getBoundingClientRect(),t))}function h3(i,t,r){const a=WS(i,r),{scroll:o}=t;return o&&(xs(a.x,o.offset.x),xs(a.y,o.offset.y)),a}const w1=(i,t)=>Math.abs(i-t);function p3(i,t){const r=w1(i.x,t.x),a=w1(i.y,t.y);return Math.sqrt(r**2+a**2)}class JS{constructor(t,r,{transformPagePoint:a,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const g=qh(this.lastMoveEventInfo,this.history),v=this.startEvent!==null,x=p3(g.offset,{x:0,y:0})>=3;if(!v&&!x)return;const{point:w}=g,{timestamp:S}=Gt;this.history.push({...w,timestamp:S});const{onStart:T,onMove:E}=this.handlers;v||(T&&T(this.lastMoveEvent,g),this.startEvent=this.lastMoveEvent),E&&E(this.lastMoveEvent,g)},this.handlePointerMove=(g,v)=>{if(this.index=A1(g.currentTarget),g.target instanceof Element&&g.target.hasPointerCapture&&g.pointerId!==void 0)try{if(!g.target.hasPointerCapture(g.pointerId))return}catch{}this.lastMoveEvent=g,this.lastMoveEventInfo=Hh(v,this.transformPagePoint),it.update(this.updatePoint,!0)},this.handlePointerUp=(g,v)=>{Wo(g,"release"),this.end();const{onEnd:x,onSessionEnd:w,resumeAnimation:S}=this.handlers;if(this.dragSnapToOrigin&&S&&S(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const T=qh(g.type==="pointercancel"||g.type==="lostpointercapture"?this.lastMoveEventInfo:Hh(v,this.transformPagePoint),this.history);this.startEvent&&x&&x(g,T),w&&w(g,T)},!Bm(t))return;this.dragSnapToOrigin=o,this.handlers=r,this.transformPagePoint=a;const u=Al(t),c=Hh(u,this.transformPagePoint),{point:h}=c,{timestamp:f}=Gt;this.history=[{...h,timestamp:f}];const{onSessionStart:p}=r;p&&p(t,qh(c,this.history)),Wo(t,"set"),this.removeListeners=Sl(ys(t.currentTarget,"pointermove",this.handlePointerMove),ys(t.currentTarget,"pointerup",this.handlePointerUp),ys(t.currentTarget,"pointercancel",this.handlePointerUp),ys(t.currentTarget,"lostpointercapture",(g,v)=>{A1(g.currentTarget)!==this.index?Wo(g,"set"):this.handlePointerUp(g,v)}))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),_r(this.updatePoint)}}function Hh(i,t){return t?{point:t(i.point)}:i}function S1(i,t){return{x:i.x-t.x,y:i.y-t.y}}function qh({point:i},t){return{point:i,delta:S1(i,e2(t)),offset:S1(i,m3(t)),velocity:g3(t,.1)}}function m3(i){return i[0]}function e2(i){return i[i.length-1]}function g3(i,t){if(i.length<2)return{x:0,y:0};let r=i.length-1,a=null;const o=e2(i);for(;r>=0&&(a=i[r],!(o.timestamp-a.timestamp>Bn(t)));)r--;if(!a)return{x:0,y:0};const u=Vn(o.timestamp-a.timestamp);if(u===0)return{x:0,y:0};const c={x:(o.x-a.x)/u,y:(o.y-a.y)/u};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}function A1(i){return i.parentNode?Array.from(i.parentNode.children).indexOf(i):-1}function y3(i,{min:t,max:r},a){return t!==void 0&&i<t?i=a?ct(t,i,a.min):Math.max(i,t):r!==void 0&&i>r&&(i=a?ct(r,i,a.max):Math.min(i,r)),i}function _1(i,t,r){return{min:t!==void 0?i.min+t:void 0,max:r!==void 0?i.max+r-(i.max-i.min):void 0}}function v3(i,{top:t,left:r,bottom:a,right:o}){return{x:_1(i.x,r,o),y:_1(i.y,t,a)}}function E1(i,t){let r=t.min-i.min,a=t.max-i.max;return t.max-t.min<i.max-i.min&&([r,a]=[a,r]),{min:r,max:a}}function x3(i,t){return{x:E1(i.x,t.x),y:E1(i.y,t.y)}}function b3(i,t){let r=.5;const a=ei(i),o=ei(t);return o>a?r=Rs(t.min,t.max-a,i.min):a>o&&(r=Rs(i.min,i.max-o,t.min)),$n(0,1,r)}function w3(i,t){const r={};return t.min!==void 0&&(r.min=t.min-i.min),t.max!==void 0&&(r.max=t.max-i.min),r}const $p=.35;function S3(i=$p){return i===!1?i=0:i===!0&&(i=$p),{x:T1(i,"left","right"),y:T1(i,"top","bottom")}}function T1(i,t,r){return{min:j1(i,t),max:j1(i,r)}}function j1(i,t){return typeof i=="number"?i:i[t]||0}const A3=new WeakMap;class _3{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=bt(),this.visualElement=t}start(t,{snapToCursor:r=!1}={}){const{presenceContext:a}=this.visualElement;if(a&&a.isPresent===!1)return;const o=g=>{const{dragSnapToOrigin:v}=this.getProps();v?this.pauseAnimation():this.stopAnimation(),r&&this.snapToCursor(Al(g).point)},u=(g,v)=>{const{drag:x,dragPropagation:w,onDragStart:S}=this.getProps();if(x&&!w&&(this.openDragLock&&this.openDragLock(),this.openDragLock=gk(x),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Mi(E=>{let j=this.getAxisMotionValue(E).get()||0;if(fn.test(j)){const{projection:D}=this.visualElement;if(D&&D.layout){const M=D.layout.layoutBox[E];M&&(j=ei(M)*(parseFloat(j)/100))}}this.originPoint[E]=j}),S&&it.postRender(()=>S(g,v)),Dp(this.visualElement,"transform");const{animationState:T}=this.visualElement;T&&T.setActive("whileDrag",!0)},c=(g,v)=>{const{dragPropagation:x,dragDirectionLock:w,onDirectionLock:S,onDrag:T}=this.getProps();if(!x&&!this.openDragLock)return;const{offset:E}=v;if(w&&this.currentDirection===null){this.currentDirection=E3(E),this.currentDirection!==null&&S&&S(this.currentDirection);return}this.updateAxis("x",v.point,E),this.updateAxis("y",v.point,E),this.visualElement.render(),T&&T(g,v)},h=(g,v)=>this.stop(g,v),f=()=>Mi(g=>{var v;return this.getAnimationState(g)==="paused"&&((v=this.getAxisMotionValue(g).animation)===null||v===void 0?void 0:v.play())}),{dragSnapToOrigin:p}=this.getProps();this.panSession=new JS(t,{onSessionStart:o,onStart:u,onMove:c,onSessionEnd:h,resumeAnimation:f},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:p})}stop(t,r){const a=this.isDragging;if(this.cancel(),!a)return;const{velocity:o}=r;this.startAnimation(o);const{onDragEnd:u}=this.getProps();u&&it.postRender(()=>u(t,r))}cancel(){this.isDragging=!1;const{projection:t,animationState:r}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),r&&r.setActive("whileDrag",!1)}updateAxis(t,r,a){const{drag:o}=this.getProps();if(!a||!ic(t,o,this.currentDirection))return;const u=this.getAxisMotionValue(t);let c=this.originPoint[t]+a[t];this.constraints&&this.constraints[t]&&(c=y3(c,this.constraints[t],this.elastic[t])),u.set(c)}resolveConstraints(){var t;const{dragConstraints:r,dragElastic:a}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,u=this.constraints;r&&ms(r)?this.constraints||(this.constraints=this.resolveRefConstraints()):r&&o?this.constraints=v3(o.layoutBox,r):this.constraints=!1,this.elastic=S3(a),u!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&Mi(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=w3(o.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:r}=this.getProps();if(!t||!ms(t))return!1;const a=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const u=h3(a,o.root,this.visualElement.getTransformPagePoint());let c=x3(o.layout.layoutBox,u);if(r){const h=r(r3(c));this.hasMutatedConstraints=!!h,h&&(c=YS(h))}return c}startAnimation(t){const{drag:r,dragMomentum:a,dragElastic:o,dragTransition:u,dragSnapToOrigin:c,onDragTransitionEnd:h}=this.getProps(),f=this.constraints||{},p=Mi(g=>{if(!ic(g,r,this.currentDirection))return;let v=f&&f[g]||{};c&&(v={min:0,max:0});const x=o?200:1e6,w=o?40:1e7,S={type:"inertia",velocity:a?t[g]:0,bounceStiffness:x,bounceDamping:w,timeConstant:750,restDelta:1,restSpeed:10,...u,...v};return this.startAxisValueAnimation(g,S)});return Promise.all(p).then(h)}startAxisValueAnimation(t,r){const a=this.getAxisMotionValue(t);return Dp(this.visualElement,t),a.start(Zm(t,a,0,r,this.visualElement,!1))}stopAnimation(){Mi(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Mi(t=>{var r;return(r=this.getAxisMotionValue(t).animation)===null||r===void 0?void 0:r.pause()})}getAnimationState(t){var r;return(r=this.getAxisMotionValue(t).animation)===null||r===void 0?void 0:r.state}getAxisMotionValue(t){const r=`_drag${t.toUpperCase()}`,a=this.visualElement.getProps(),o=a[r];return o||this.visualElement.getValue(t,(a.initial?a.initial[t]:void 0)||0)}snapToCursor(t){Mi(r=>{const{drag:a}=this.getProps();if(!ic(r,a,this.currentDirection))return;const{projection:o}=this.visualElement,u=this.getAxisMotionValue(r);if(o&&o.layout){const{min:c,max:h}=o.layout.layoutBox[r];u.set(t[r]-ct(c,h,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:r}=this.getProps(),{projection:a}=this.visualElement;if(!ms(r)||!a||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};Mi(c=>{const h=this.getAxisMotionValue(c);if(h&&this.constraints!==!1){const f=h.get();o[c]=b3({min:f,max:f},this.constraints[c])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.resolveConstraints(),Mi(c=>{if(!ic(c,t,null))return;const h=this.getAxisMotionValue(c),{min:f,max:p}=this.constraints[c];h.set(ct(f,p,o[c]))})}addListeners(){if(!this.visualElement.current)return;A3.set(this.visualElement,this);const t=this.visualElement.current,r=ys(t,"pointerdown",f=>{const{drag:p,dragListener:g=!0}=this.getProps();p&&g&&this.start(f)}),a=()=>{const{dragConstraints:f}=this.getProps();ms(f)&&f.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,u=o.addEventListener("measure",a);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),it.read(a);const c=pl(window,"resize",()=>this.scalePositionWithinConstraints()),h=o.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p})=>{this.isDragging&&p&&(Mi(g=>{const v=this.getAxisMotionValue(g);v&&(this.originPoint[g]+=f[g].translate,v.set(v.get()+f[g].translate))}),this.visualElement.render())});return()=>{c(),r(),u(),h&&h()}}getProps(){const t=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:a=!1,dragPropagation:o=!1,dragConstraints:u=!1,dragElastic:c=$p,dragMomentum:h=!0}=t;return{...t,drag:r,dragDirectionLock:a,dragPropagation:o,dragConstraints:u,dragElastic:c,dragMomentum:h}}}function ic(i,t,r){return(t===!0||t===i)&&(r===null||r===i)}function E3(i,t=10){let r=null;return Math.abs(i.y)>t?r="y":Math.abs(i.x)>t&&(r="x"),r}class T3 extends jr{constructor(t){super(t),this.removeGroupControls=mi,this.removeListeners=mi,this.controls=new _3(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||mi}unmount(){this.removeGroupControls(),this.removeListeners()}}const R1=i=>(t,r)=>{i&&it.postRender(()=>i(t,r))};class j3 extends jr{constructor(){super(...arguments),this.removePointerDownListener=mi}onPointerDown(t){this.session=new JS(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint()})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:r,onPan:a,onPanEnd:o}=this.node.getProps();return{onSessionStart:R1(t),onStart:R1(r),onMove:a,onEnd:(u,c)=>{delete this.session,o&&it.postRender(()=>o(u,c))}}}mount(){this.removePointerDownListener=ys(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Sc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function C1(i,t){return t.max===t.min?0:i/(t.max-t.min)*100}const qo={correct:(i,t)=>{if(!t.target)return i;if(typeof i=="string")if(be.test(i))i=parseFloat(i);else return i;const r=C1(i,t.target.x),a=C1(i,t.target.y);return`${r}% ${a}%`}},R3={correct:(i,{treeScale:t,projectionDelta:r})=>{const a=i,o=Er.parse(i);if(o.length>5)return a;const u=Er.createTransformer(i),c=typeof o[0]!="number"?1:0,h=r.x.scale*t.x,f=r.y.scale*t.y;o[0+c]/=h,o[1+c]/=f;const p=ct(h,f,.5);return typeof o[2+c]=="number"&&(o[2+c]/=p),typeof o[3+c]=="number"&&(o[3+c]/=p),u(o)}};class C3 extends _.Component{componentDidMount(){const{visualElement:t,layoutGroup:r,switchLayoutGroup:a,layoutId:o}=this.props,{projection:u}=t;MC(k3),u&&(r.group&&r.group.add(u),a&&a.register&&o&&a.register(u),u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,onExitComplete:()=>this.safeToRemove()})),Sc.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:r,visualElement:a,drag:o,isPresent:u}=this.props,c=a.projection;return c&&(c.isPresent=u,o||t.layoutDependency!==r||r===void 0||t.isPresent!==u?c.willUpdate():this.safeToRemove(),t.isPresent!==u&&(u?c.promote():c.relegate()||it.postRender(()=>{const h=c.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Em.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:r,switchLayoutGroup:a}=this.props,{projection:o}=t;o&&(o.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(o),a&&a.deregister&&a.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function t2(i){const[t,r]=Nw(),a=_.useContext(ym);return y.jsx(C3,{...i,layoutGroup:a,switchLayoutGroup:_.useContext(Iw),isPresent:t,safeToRemove:r})}const k3={borderRadius:{...qo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:qo,borderTopRightRadius:qo,borderBottomLeftRadius:qo,borderBottomRightRadius:qo,boxShadow:R3};function D3(i,t,r){const a=Qt(i)?i:fl(i);return a.start(Zm("",a,t,r)),a.animation}function O3(i){return i instanceof SVGElement&&i.tagName!=="svg"}const M3=(i,t)=>i.depth-t.depth;class z3{constructor(){this.children=[],this.isDirty=!1}add(t){Vm(this.children,t),this.isDirty=!0}remove(t){$m(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(M3),this.isDirty=!1,this.children.forEach(t)}}function L3(i,t){const r=hn.now(),a=({timestamp:o})=>{const u=o-r;u>=t&&(_r(a),i(u-t))};return it.read(a,!0),()=>_r(a)}const i2=["TopLeft","TopRight","BottomLeft","BottomRight"],P3=i2.length,k1=i=>typeof i=="string"?parseFloat(i):i,D1=i=>typeof i=="number"||be.test(i);function U3(i,t,r,a,o,u){o?(i.opacity=ct(0,r.opacity!==void 0?r.opacity:1,N3(a)),i.opacityExit=ct(t.opacity!==void 0?t.opacity:1,0,B3(a))):u&&(i.opacity=ct(t.opacity!==void 0?t.opacity:1,r.opacity!==void 0?r.opacity:1,a));for(let c=0;c<P3;c++){const h=`border${i2[c]}Radius`;let f=O1(t,h),p=O1(r,h);if(f===void 0&&p===void 0)continue;f||(f=0),p||(p=0),f===0||p===0||D1(f)===D1(p)?(i[h]=Math.max(ct(k1(f),k1(p),a),0),(fn.test(p)||fn.test(f))&&(i[h]+="%")):i[h]=p}(t.rotate||r.rotate)&&(i.rotate=ct(t.rotate||0,r.rotate||0,a))}function O1(i,t){return i[t]!==void 0?i[t]:i.borderRadius}const N3=n2(0,.5,wS),B3=n2(.5,.95,mi);function n2(i,t,r){return a=>a<i?0:a>t?1:r(Rs(i,t,a))}function M1(i,t){i.min=t.min,i.max=t.max}function Oi(i,t){M1(i.x,t.x),M1(i.y,t.y)}function z1(i,t){i.translate=t.translate,i.scale=t.scale,i.originPoint=t.originPoint,i.origin=t.origin}function L1(i,t,r,a,o){return i-=t,i=Pc(i,1/r,a),o!==void 0&&(i=Pc(i,1/o,a)),i}function V3(i,t=0,r=1,a=.5,o,u=i,c=i){if(fn.test(t)&&(t=parseFloat(t),t=ct(c.min,c.max,t/100)-c.min),typeof t!="number")return;let h=ct(u.min,u.max,a);i===u&&(h-=t),i.min=L1(i.min,t,r,h,o),i.max=L1(i.max,t,r,h,o)}function P1(i,t,[r,a,o],u,c){V3(i,t[r],t[a],t[o],t.scale,u,c)}const $3=["x","scaleX","originX"],H3=["y","scaleY","originY"];function U1(i,t,r,a){P1(i.x,t,$3,r?r.x:void 0,a?a.x:void 0),P1(i.y,t,H3,r?r.y:void 0,a?a.y:void 0)}function N1(i){return i.translate===0&&i.scale===1}function r2(i){return N1(i.x)&&N1(i.y)}function B1(i,t){return i.min===t.min&&i.max===t.max}function q3(i,t){return B1(i.x,t.x)&&B1(i.y,t.y)}function V1(i,t){return Math.round(i.min)===Math.round(t.min)&&Math.round(i.max)===Math.round(t.max)}function a2(i,t){return V1(i.x,t.x)&&V1(i.y,t.y)}function $1(i){return ei(i.x)/ei(i.y)}function H1(i,t){return i.translate===t.translate&&i.scale===t.scale&&i.originPoint===t.originPoint}class G3{constructor(){this.members=[]}add(t){Vm(this.members,t),t.scheduleRender()}remove(t){if($m(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(t){const r=this.members.findIndex(o=>t===o);if(r===0)return!1;let a;for(let o=r;o>=0;o--){const u=this.members[o];if(u.isPresent!==!1){a=u;break}}return a?(this.promote(a),!0):!1}promote(t,r){const a=this.lead;if(t!==a&&(this.prevLead=a,this.lead=t,t.show(),a)){a.instance&&a.scheduleRender(),t.scheduleRender(),t.resumeFrom=a,r&&(t.resumeFrom.preserveOpacity=!0),a.snapshot&&(t.snapshot=a.snapshot,t.snapshot.latestValues=a.animationValues||a.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:o}=t.options;o===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:r,resumingFrom:a}=t;r.onExitComplete&&r.onExitComplete(),a&&a.options.onExitComplete&&a.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function F3(i,t,r){let a="";const o=i.x.translate/t.x,u=i.y.translate/t.y,c=(r==null?void 0:r.z)||0;if((o||u||c)&&(a=`translate3d(${o}px, ${u}px, ${c}px) `),(t.x!==1||t.y!==1)&&(a+=`scale(${1/t.x}, ${1/t.y}) `),r){const{transformPerspective:p,rotate:g,rotateX:v,rotateY:x,skewX:w,skewY:S}=r;p&&(a=`perspective(${p}px) ${a}`),g&&(a+=`rotate(${g}deg) `),v&&(a+=`rotateX(${v}deg) `),x&&(a+=`rotateY(${x}deg) `),w&&(a+=`skewX(${w}deg) `),S&&(a+=`skewY(${S}deg) `)}const h=i.x.scale*t.x,f=i.y.scale*t.y;return(h!==1||f!==1)&&(a+=`scale(${h}, ${f})`),a||"none"}const Gh=["","X","Y","Z"],I3={visibility:"hidden"},q1=1e3;let Y3=0;function Fh(i,t,r,a){const{latestValues:o}=t;o[i]&&(r[i]=o[i],t.setStaticValue(i,0),a&&(a[i]=0))}function s2(i){if(i.hasCheckedOptimisedAppear=!0,i.root===i)return;const{visualElement:t}=i.options;if(!t)return;const r=pS(t);if(window.MotionHasOptimisedAnimation(r,"transform")){const{layout:o,layoutId:u}=i.options;window.MotionCancelOptimisedAnimation(r,"transform",it,!(o||u))}const{parent:a}=i;a&&!a.hasCheckedOptimisedAppear&&s2(a)}function o2({attachResizeListener:i,defaultParent:t,measureScroll:r,checkIsScrollRoot:a,resetTransform:o}){return class{constructor(c={},h=t==null?void 0:t()){this.id=Y3++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(Q3),this.nodes.forEach(tD),this.nodes.forEach(iD),this.nodes.forEach(Z3)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let f=0;f<this.path.length;f++)this.path[f].shouldResetTransform=!0;this.root===this&&(this.nodes=new z3)}addEventListener(c,h){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new Hm),this.eventHandlers.get(c).add(h)}notifyListeners(c,...h){const f=this.eventHandlers.get(c);f&&f.notify(...h)}hasListeners(c){return this.eventHandlers.has(c)}mount(c,h=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=O3(c),this.instance=c;const{layoutId:f,layout:p,visualElement:g}=this.options;if(g&&!g.current&&g.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),h&&(p||f)&&(this.isLayoutDirty=!0),i){let v;const x=()=>this.root.updateBlockedByResize=!1;i(c,()=>{this.root.updateBlockedByResize=!0,v&&v(),v=L3(x,250),Sc.hasAnimatedSinceResize&&(Sc.hasAnimatedSinceResize=!1,this.nodes.forEach(F1))})}f&&this.root.registerSharedNode(f,this),this.options.animate!==!1&&g&&(f||p)&&this.addEventListener("didUpdate",({delta:v,hasLayoutChanged:x,hasRelativeLayoutChanged:w,layout:S})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const T=this.options.transition||g.getDefaultTransition()||oD,{onLayoutAnimationStart:E,onLayoutAnimationComplete:j}=g.getProps(),D=!this.targetLayout||!a2(this.targetLayout,S),M=!x&&w;if(this.options.layoutRoot||this.resumeFrom||M||x&&(D||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(v,M);const V={...Pm(T,"layout"),onPlay:E,onComplete:j};(g.shouldReduceMotion||this.options.layoutRoot)&&(V.delay=0,V.type=!1),this.startAnimation(V)}else x||F1(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=S})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,_r(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(nD),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&s2(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const v=this.path[g];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:h,layout:f}=this.options;if(h===void 0&&!f)return;const p=this.getTransformTemplate();this.prevTransformTemplateValue=p?p(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(G1);return}this.isUpdating||this.nodes.forEach(J3),this.isUpdating=!1,this.nodes.forEach(eD),this.nodes.forEach(K3),this.nodes.forEach(X3),this.clearAllSnapshots();const h=hn.now();Gt.delta=$n(0,1e3/60,h-Gt.timestamp),Gt.timestamp=h,Gt.isProcessing=!0,Ph.update.process(Gt),Ph.preRender.process(Gt),Ph.render.process(Gt),Gt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Em.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(W3),this.sharedNodes.forEach(rD)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,it.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){it.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ei(this.snapshot.measuredBox.x)&&!ei(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let f=0;f<this.path.length;f++)this.path[f].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutCorrected=bt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(h=!1),h){const f=a(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:f,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:f}}}resetTransform(){if(!o)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!r2(this.projectionDelta),f=this.getTransformTemplate(),p=f?f(this.latestValues,""):void 0,g=p!==this.prevTransformTemplateValue;c&&(h||aa(this.latestValues)||g)&&(o(this.instance,p),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const h=this.measurePageBox();let f=this.removeElementScroll(h);return c&&(f=this.removeTransform(f)),lD(f),{animationId:this.root.animationId,measuredBox:h,layoutBox:f,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:h}=this.options;if(!h)return bt();const f=h.measureViewportBox();if(!(((c=this.scroll)===null||c===void 0?void 0:c.wasRoot)||this.path.some(uD))){const{scroll:g}=this.root;g&&(xs(f.x,g.offset.x),xs(f.y,g.offset.y))}return f}removeElementScroll(c){var h;const f=bt();if(Oi(f,c),!((h=this.scroll)===null||h===void 0)&&h.wasRoot)return f;for(let p=0;p<this.path.length;p++){const g=this.path[p],{scroll:v,options:x}=g;g!==this.root&&v&&x.layoutScroll&&(v.wasRoot&&Oi(f,c),xs(f.x,v.offset.x),xs(f.y,v.offset.y))}return f}applyTransform(c,h=!1){const f=bt();Oi(f,c);for(let p=0;p<this.path.length;p++){const g=this.path[p];!h&&g.options.layoutScroll&&g.scroll&&g!==g.root&&bs(f,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),aa(g.latestValues)&&bs(f,g.latestValues)}return aa(this.latestValues)&&bs(f,this.latestValues),f}removeTransform(c){const h=bt();Oi(h,c);for(let f=0;f<this.path.length;f++){const p=this.path[f];if(!p.instance||!aa(p.latestValues))continue;Bp(p.latestValues)&&p.updateSnapshot();const g=bt(),v=p.measurePageBox();Oi(g,v),U1(h,p.latestValues,p.snapshot?p.snapshot.layoutBox:void 0,g)}return aa(this.latestValues)&&U1(h,this.latestValues),h}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Gt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){var h;const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==f;if(!(c||p&&this.isSharedProjectionDirty||this.isProjectionDirty||!((h=this.parent)===null||h===void 0)&&h.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:v,layoutId:x}=this.options;if(!(!this.layout||!(v||x))){if(this.resolvedRelativeTargetAt=Gt.timestamp,!this.targetDelta&&!this.relativeTarget){const w=this.getClosestProjectingParent();w&&w.layout&&this.animationProgress!==1?(this.relativeParent=w,this.forceRelativeParentToResolveTarget(),this.relativeTarget=bt(),this.relativeTargetOrigin=bt(),tl(this.relativeTargetOrigin,this.layout.layoutBox,w.layout.layoutBox),Oi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=bt(),this.targetWithTransforms=bt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),d3(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Oi(this.target,this.layout.layoutBox),ZS(this.target,this.targetDelta)):Oi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const w=this.getClosestProjectingParent();w&&!!w.resumingFrom==!!this.resumingFrom&&!w.options.layoutScroll&&w.target&&this.animationProgress!==1?(this.relativeParent=w,this.forceRelativeParentToResolveTarget(),this.relativeTarget=bt(),this.relativeTargetOrigin=bt(),tl(this.relativeTargetOrigin,this.target,w.target),Oi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Bp(this.parent.latestValues)||QS(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var c;const h=this.getLead(),f=!!this.resumingFrom||this!==h;let p=!0;if((this.isProjectionDirty||!((c=this.parent)===null||c===void 0)&&c.isProjectionDirty)&&(p=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===Gt.timestamp&&(p=!1),p)return;const{layout:g,layoutId:v}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||v))return;Oi(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,w=this.treeScale.y;f3(this.layoutCorrected,this.treeScale,this.path,f),h.layout&&!h.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(h.target=h.layout.layoutBox,h.targetWithTransforms=bt());const{target:S}=h;if(!S){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(z1(this.prevProjectionDelta.x,this.projectionDelta.x),z1(this.prevProjectionDelta.y,this.projectionDelta.y)),el(this.projectionDelta,this.layoutCorrected,S,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==w||!H1(this.projectionDelta.x,this.prevProjectionDelta.x)||!H1(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",S))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){var h;if((h=this.options.visualElement)===null||h===void 0||h.scheduleRender(),c){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=vs(),this.projectionDelta=vs(),this.projectionDeltaWithTransform=vs()}setAnimationOrigin(c,h=!1){const f=this.snapshot,p=f?f.latestValues:{},g={...this.latestValues},v=vs();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const x=bt(),w=f?f.source:void 0,S=this.layout?this.layout.source:void 0,T=w!==S,E=this.getStack(),j=!E||E.members.length<=1,D=!!(T&&!j&&this.options.crossfade===!0&&!this.path.some(sD));this.animationProgress=0;let M;this.mixTargetDelta=V=>{const P=V/1e3;I1(v.x,c.x,P),I1(v.y,c.y,P),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(tl(x,this.layout.layoutBox,this.relativeParent.layout.layoutBox),aD(this.relativeTarget,this.relativeTargetOrigin,x,P),M&&q3(this.relativeTarget,M)&&(this.isProjectionDirty=!1),M||(M=bt()),Oi(M,this.relativeTarget)),T&&(this.animationValues=g,U3(g,p,this.latestValues,P,D,j)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=P},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(_r(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=it.update(()=>{Sc.hasAnimatedSinceResize=!0,this.currentAnimation=D3(0,q1,{...c,onUpdate:h=>{this.mixTargetDelta(h),c.onUpdate&&c.onUpdate(h)},onStop:()=>{},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(q1),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:h,target:f,layout:p,latestValues:g}=c;if(!(!h||!f||!p)){if(this!==c&&this.layout&&p&&l2(this.options.animationType,this.layout.layoutBox,p.layoutBox)){f=this.target||bt();const v=ei(this.layout.layoutBox.x);f.x.min=c.target.x.min,f.x.max=f.x.min+v;const x=ei(this.layout.layoutBox.y);f.y.min=c.target.y.min,f.y.max=f.y.min+x}Oi(h,f),bs(h,g),el(this.projectionDeltaWithTransform,this.layoutCorrected,h,g)}}registerSharedNode(c,h){this.sharedNodes.has(c)||this.sharedNodes.set(c,new G3),this.sharedNodes.get(c).add(h);const p=h.options.initialPromotionConfig;h.promote({transition:p?p.transition:void 0,preserveFollowOpacity:p&&p.shouldPreserveFollowOpacity?p.shouldPreserveFollowOpacity(h):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){var c;const{layoutId:h}=this.options;return h?((c=this.getStack())===null||c===void 0?void 0:c.lead)||this:this}getPrevLead(){var c;const{layoutId:h}=this.options;return h?(c=this.getStack())===null||c===void 0?void 0:c.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:h,preserveFollowOpacity:f}={}){const p=this.getStack();p&&p.promote(this,f),c&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let h=!1;const{latestValues:f}=c;if((f.z||f.rotate||f.rotateX||f.rotateY||f.rotateZ||f.skewX||f.skewY)&&(h=!0),!h)return;const p={};f.z&&Fh("z",c,p,this.animationValues);for(let g=0;g<Gh.length;g++)Fh(`rotate${Gh[g]}`,c,p,this.animationValues),Fh(`skew${Gh[g]}`,c,p,this.animationValues);c.render();for(const g in p)c.setStaticValue(g,p[g]),this.animationValues&&(this.animationValues[g]=p[g]);c.scheduleRender()}getProjectionStyles(c){var h,f;if(!this.instance||this.isSVG)return;if(!this.isVisible)return I3;const p={visibility:""},g=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,p.opacity="",p.pointerEvents=bc(c==null?void 0:c.pointerEvents)||"",p.transform=g?g(this.latestValues,""):"none",p;const v=this.getLead();if(!this.projectionDelta||!this.layout||!v.target){const T={};return this.options.layoutId&&(T.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,T.pointerEvents=bc(c==null?void 0:c.pointerEvents)||""),this.hasProjected&&!aa(this.latestValues)&&(T.transform=g?g({},""):"none",this.hasProjected=!1),T}const x=v.animationValues||v.latestValues;this.applyTransformsToTarget(),p.transform=F3(this.projectionDeltaWithTransform,this.treeScale,x),g&&(p.transform=g(x,p.transform));const{x:w,y:S}=this.projectionDelta;p.transformOrigin=`${w.origin*100}% ${S.origin*100}% 0`,v.animationValues?p.opacity=v===this?(f=(h=x.opacity)!==null&&h!==void 0?h:this.latestValues.opacity)!==null&&f!==void 0?f:1:this.preserveOpacity?this.latestValues.opacity:x.opacityExit:p.opacity=v===this?x.opacity!==void 0?x.opacity:"":x.opacityExit!==void 0?x.opacityExit:0;for(const T in ul){if(x[T]===void 0)continue;const{correct:E,applyTo:j,isCSSVariable:D}=ul[T],M=p.transform==="none"?x[T]:E(x[T],v);if(j){const V=j.length;for(let P=0;P<V;P++)p[j[P]]=M}else D?this.options.visualElement.renderState.vars[T]=M:p[T]=M}return this.options.layoutId&&(p.pointerEvents=v===this?bc(c==null?void 0:c.pointerEvents)||"":"none"),p}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>{var h;return(h=c.currentAnimation)===null||h===void 0?void 0:h.stop()}),this.root.nodes.forEach(G1),this.root.sharedNodes.clear()}}}function K3(i){i.updateLayout()}function X3(i){var t;const r=((t=i.resumeFrom)===null||t===void 0?void 0:t.snapshot)||i.snapshot;if(i.isLead()&&i.layout&&r&&i.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:o}=i.layout,{animationType:u}=i.options,c=r.source!==i.layout.source;u==="size"?Mi(v=>{const x=c?r.measuredBox[v]:r.layoutBox[v],w=ei(x);x.min=a[v].min,x.max=x.min+w}):l2(u,r.layoutBox,a)&&Mi(v=>{const x=c?r.measuredBox[v]:r.layoutBox[v],w=ei(a[v]);x.max=x.min+w,i.relativeTarget&&!i.currentAnimation&&(i.isProjectionDirty=!0,i.relativeTarget[v].max=i.relativeTarget[v].min+w)});const h=vs();el(h,a,r.layoutBox);const f=vs();c?el(f,i.applyTransform(o,!0),r.measuredBox):el(f,a,r.layoutBox);const p=!r2(h);let g=!1;if(!i.resumeFrom){const v=i.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:x,layout:w}=v;if(x&&w){const S=bt();tl(S,r.layoutBox,x.layoutBox);const T=bt();tl(T,a,w.layoutBox),a2(S,T)||(g=!0),v.options.layoutRoot&&(i.relativeTarget=T,i.relativeTargetOrigin=S,i.relativeParent=v)}}}i.notifyListeners("didUpdate",{layout:a,snapshot:r,delta:f,layoutDelta:h,hasLayoutChanged:p,hasRelativeLayoutChanged:g})}else if(i.isLead()){const{onExitComplete:a}=i.options;a&&a()}i.options.transition=void 0}function Q3(i){i.parent&&(i.isProjecting()||(i.isProjectionDirty=i.parent.isProjectionDirty),i.isSharedProjectionDirty||(i.isSharedProjectionDirty=!!(i.isProjectionDirty||i.parent.isProjectionDirty||i.parent.isSharedProjectionDirty)),i.isTransformDirty||(i.isTransformDirty=i.parent.isTransformDirty))}function Z3(i){i.isProjectionDirty=i.isSharedProjectionDirty=i.isTransformDirty=!1}function W3(i){i.clearSnapshot()}function G1(i){i.clearMeasurements()}function J3(i){i.isLayoutDirty=!1}function eD(i){const{visualElement:t}=i.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),i.resetTransform()}function F1(i){i.finishAnimation(),i.targetDelta=i.relativeTarget=i.target=void 0,i.isProjectionDirty=!0}function tD(i){i.resolveTargetDelta()}function iD(i){i.calcProjection()}function nD(i){i.resetSkewAndRotation()}function rD(i){i.removeLeadSnapshot()}function I1(i,t,r){i.translate=ct(t.translate,0,r),i.scale=ct(t.scale,1,r),i.origin=t.origin,i.originPoint=t.originPoint}function Y1(i,t,r,a){i.min=ct(t.min,r.min,a),i.max=ct(t.max,r.max,a)}function aD(i,t,r,a){Y1(i.x,t.x,r.x,a),Y1(i.y,t.y,r.y,a)}function sD(i){return i.animationValues&&i.animationValues.opacityExit!==void 0}const oD={duration:.45,ease:[.4,0,.1,1]},K1=i=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(i),X1=K1("applewebkit/")&&!K1("chrome/")?Math.round:mi;function Q1(i){i.min=X1(i.min),i.max=X1(i.max)}function lD(i){Q1(i.x),Q1(i.y)}function l2(i,t,r){return i==="position"||i==="preserve-aspect"&&!c3($1(t),$1(r),.2)}function uD(i){var t;return i!==i.root&&((t=i.scroll)===null||t===void 0?void 0:t.wasRoot)}const cD=o2({attachResizeListener:(i,t)=>pl(i,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Ih={current:void 0},u2=o2({measureScroll:i=>({x:i.scrollLeft,y:i.scrollTop}),defaultParent:()=>{if(!Ih.current){const i=new cD({});i.mount(window),i.setOptions({layoutScroll:!0}),Ih.current=i}return Ih.current},resetTransform:(i,t)=>{i.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:i=>window.getComputedStyle(i).position==="fixed"}),dD={pan:{Feature:j3},drag:{Feature:T3,ProjectionNode:u2,MeasureLayout:t2}};function Z1(i,t,r){const{props:a}=i;i.animationState&&a.whileHover&&i.animationState.setActive("whileHover",r==="Start");const o="onHover"+r,u=a[o];u&&it.postRender(()=>u(t,Al(t)))}class fD extends jr{mount(){const{current:t}=this.node;t&&(this.unmount=ck(t,(r,a)=>(Z1(this.node,a,"Start"),o=>Z1(this.node,o,"End"))))}unmount(){}}class hD extends jr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Sl(pl(this.node.current,"focus",()=>this.onFocus()),pl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function W1(i,t,r){const{props:a}=i;if(i.current instanceof HTMLButtonElement&&i.current.disabled)return;i.animationState&&a.whileTap&&i.animationState.setActive("whileTap",r==="Start");const o="onTap"+(r==="End"?"":r),u=a[o];u&&it.postRender(()=>u(t,Al(t)))}class pD extends jr{mount(){const{current:t}=this.node;t&&(this.unmount=pk(t,(r,a)=>(W1(this.node,a,"Start"),(o,{success:u})=>W1(this.node,o,u?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Hp=new WeakMap,Yh=new WeakMap,mD=i=>{const t=Hp.get(i.target);t&&t(i)},gD=i=>{i.forEach(mD)};function yD({root:i,...t}){const r=i||document;Yh.has(r)||Yh.set(r,{});const a=Yh.get(r),o=JSON.stringify(t);return a[o]||(a[o]=new IntersectionObserver(gD,{root:i,...t})),a[o]}function vD(i,t,r){const a=yD(t);return Hp.set(i,r),a.observe(i),()=>{Hp.delete(i),a.unobserve(i)}}const xD={some:0,all:1};class bD extends jr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:r,margin:a,amount:o="some",once:u}=t,c={root:r?r.current:void 0,rootMargin:a,threshold:typeof o=="number"?o:xD[o]},h=f=>{const{isIntersecting:p}=f;if(this.isInView===p||(this.isInView=p,u&&!p&&this.hasEnteredView))return;p&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",p);const{onViewportEnter:g,onViewportLeave:v}=this.node.getProps(),x=p?g:v;x&&x(f)};return vD(this.node.current,c,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:r}=this.node;["amount","margin","root"].some(wD(t,r))&&this.startObserver()}unmount(){}}function wD({viewport:i={}},{viewport:t={}}={}){return r=>i[r]!==t[r]}const SD={inView:{Feature:bD},tap:{Feature:pD},focus:{Feature:hD},hover:{Feature:fD}},AD={layout:{ProjectionNode:u2,MeasureLayout:t2}},qp={current:null},c2={current:!1};function _D(){if(c2.current=!0,!!bm)if(window.matchMedia){const i=window.matchMedia("(prefers-reduced-motion)"),t=()=>qp.current=i.matches;i.addListener(t),t()}else qp.current=!1}const ED=[...LS,Kt,Er],TD=i=>ED.find(zS(i)),jD=new WeakMap;function RD(i,t,r){for(const a in t){const o=t[a],u=r[a];if(Qt(o))i.addValue(a,o);else if(Qt(u))i.addValue(a,fl(o,{owner:i}));else if(u!==o)if(i.hasValue(a)){const c=i.getValue(a);c.liveStyle===!0?c.jump(o):c.hasAnimated||c.set(o)}else{const c=i.getStaticValue(a);i.addValue(a,fl(c!==void 0?c:o,{owner:i}))}}for(const a in r)t[a]===void 0&&i.removeValue(a);return t}const J1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class CD{scrapeMotionValuesFromProps(t,r,a){return{}}constructor({parent:t,props:r,presenceContext:a,reducedMotionConfig:o,blockInitialAnimation:u,visualState:c},h={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Km,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const w=hn.now();this.renderScheduledAt<w&&(this.renderScheduledAt=w,it.render(this.render,!1,!0))};const{latestValues:f,renderState:p,onUpdate:g}=c;this.onUpdate=g,this.latestValues=f,this.baseTarget={...f},this.initialValues=r.initial?{...f}:{},this.renderState=p,this.parent=t,this.props=r,this.presenceContext=a,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.options=h,this.blockInitialAnimation=!!u,this.isControllingVariants=Zc(r),this.isVariantNode=Gw(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:v,...x}=this.scrapeMotionValuesFromProps(r,{},this);for(const w in x){const S=x[w];f[w]!==void 0&&Qt(S)&&S.set(f[w],!1)}}mount(t){this.current=t,jD.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,a)=>this.bindToMotionValue(a,r)),c2.current||_D(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:qp.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),_r(this.notifyUpdate),_r(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const r=this.features[t];r&&(r.unmount(),r.isMounted=!1)}this.current=null}bindToMotionValue(t,r){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const a=ma.has(t);a&&this.onBindTransform&&this.onBindTransform();const o=r.on("change",h=>{this.latestValues[t]=h,this.props.onUpdate&&it.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0)}),u=r.on("renderRequest",this.scheduleRender);let c;window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,t,r)),this.valueSubscriptions.set(t,()=>{o(),u(),c&&c(),r.owner&&r.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Cs){const r=Cs[t];if(!r)continue;const{isEnabled:a,Feature:o}=r;if(!this.features[t]&&o&&a(this.props)&&(this.features[t]=new o(this)),this.features[t]){const u=this.features[t];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):bt()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,r){this.latestValues[t]=r}update(t,r){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let a=0;a<J1.length;a++){const o=J1[a];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const u="on"+o,c=t[u];c&&(this.propEventSubscriptions[o]=this.on(o,c))}this.prevMotionValues=RD(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(t),()=>r.variantChildren.delete(t)}addValue(t,r){const a=this.values.get(t);r!==a&&(a&&this.removeValue(t),this.bindToMotionValue(t,r),this.values.set(t,r),this.latestValues[t]=r.get())}removeValue(t){this.values.delete(t);const r=this.valueSubscriptions.get(t);r&&(r(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,r){if(this.props.values&&this.props.values[t])return this.props.values[t];let a=this.values.get(t);return a===void 0&&r!==void 0&&(a=fl(r===null?void 0:r,{owner:this}),this.addValue(t,a)),a}readValue(t,r){var a;let o=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(a=this.getBaseTargetFromProps(this.props,t))!==null&&a!==void 0?a:this.readValueFromInstance(this.current,t,this.options);return o!=null&&(typeof o=="string"&&(OS(o)||AS(o))?o=parseFloat(o):!TD(o)&&Er.test(r)&&(o=CS(t,r)),this.setBaseTarget(t,Qt(o)?o.get():o)),Qt(o)?o.get():o}setBaseTarget(t,r){this.baseTarget[t]=r}getBaseTarget(t){var r;const{initial:a}=this.props;let o;if(typeof a=="string"||typeof a=="object"){const c=zm(this.props,a,(r=this.presenceContext)===null||r===void 0?void 0:r.custom);c&&(o=c[t])}if(a&&o!==void 0)return o;const u=this.getBaseTargetFromProps(this.props,t);return u!==void 0&&!Qt(u)?u:this.initialValues[t]!==void 0&&o===void 0?void 0:this.baseTarget[t]}on(t,r){return this.events[t]||(this.events[t]=new Hm),this.events[t].add(r)}notify(t,...r){this.events[t]&&this.events[t].notify(...r)}}class d2 extends CD{constructor(){super(...arguments),this.KeyframeResolver=PS}sortInstanceNodePosition(t,r){return t.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(t,r){return t.style?t.style[r]:void 0}removeValueFromRenderState(t,{vars:r,style:a}){delete r[t],delete a[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Qt(t)&&(this.childSubscription=t.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}}function kD(i){return window.getComputedStyle(i)}class DD extends d2{constructor(){super(...arguments),this.type="html",this.renderInstance=tS}readValueFromInstance(t,r){if(ma.has(r)){const a=Ym(r);return a&&a.default||0}else{const a=kD(t),o=(Tm(r)?a.getPropertyValue(r):a[r])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:r}){return WS(t,r)}build(t,r,a){Cm(t,r,a.transformTemplate)}scrapeMotionValuesFromProps(t,r,a){return Lm(t,r,a)}}class OD extends d2{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=bt,this.updateDimensions=()=>{this.current&&!this.renderState.dimensions&&eS(this.current,this.renderState)}}getBaseTargetFromProps(t,r){return t[r]}readValueFromInstance(t,r){if(ma.has(r)){const a=Ym(r);return a&&a.default||0}return r=iS.has(r)?r:_m(r),t.getAttribute(r)}scrapeMotionValuesFromProps(t,r,a){return rS(t,r,a)}onBindTransform(){this.current&&!this.renderState.dimensions&&it.postRender(this.updateDimensions)}build(t,r,a){Om(t,r,this.isSVGTag,a.transformTemplate)}renderInstance(t,r,a,o){nS(t,r,a,o)}mount(t){this.isSVGTag=Mm(t.tagName),super.mount(t)}}const MD=(i,t)=>Dm(i)?new OD(t):new DD(t,{allowProjection:i!==_.Fragment}),zD=nk({...i3,...SD,...dD,...AD},MD),ke=xC(zD),LD="/assets/leesunminhoverimg-DeIkmAZt.png",PD="/assets/title_Leesunmin-Cwl8dSVc.svg",_t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACgSURBVHgBvdbBCYAwDAXQHz0K4iiu4OSu4CZ68ShqQUFRG9Mm+RAovTwobRNAmApoQ8EyAaiBMZQZdkHWo/SxF0QfiyAijDikBPp92SCeaQG6GRjEkAD5hZESwmKkiEQxUkY+MTJAXjEyQh4YGSI3rIBT/I7u3HG5DAbY9/VWxPgHq4D9/4IyMPmnmoCxbYKNVuPLxVzmBpdJyA65YinIBrwUdvFf2H6/AAAAAElFTkSuQmCC",UD=({setpagestate:i,setbtnclick:t})=>{const r=_.useRef(null),[a,o]=_.useState(0),[u,c]=_.useState(!1),h=_.useRef(null),[f,p]=_.useState(0);_.useEffect(()=>(u?h.current=window.setInterval(()=>{console.log(f),p(I=>(I+1)%4)},700):(h.current&&(clearInterval(h.current),h.current=null),p(0)),()=>{h.current&&clearInterval(h.current)}),[u]),_.useEffect(()=>{const I=()=>{if(r.current){const G=r.current.offsetWidth;o(G)}};return I(),window.addEventListener("resize",I),()=>window.removeEventListener("resize",I)},[]),_.useRef(null),_.useRef(!1),_.useRef(0),_.useRef(0),_.useRef(0),_.useRef(0),console.log(t);const[g,v]=_.useState(!1),[x,w]=_.useState(0),[S,T]=_.useState(0),[E,j]=_.useState(!1),[D,M]=_.useState(!1),[V,P]=_.useState(!1),R=LD,F=I=>{I?(w(-30),T(200)):(w(0),T(0))};return y.jsx(y.Fragment,{children:y.jsxs(at,{children:[y.jsxs(ke.div,{initial:{opacity:.8},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3,ease:"easeInOut"},className:"absolute mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg",style:{userSelect:"none",display:"flex",alignItems:"center"},children:[y.jsxs(ND,{clicked:g,ref:r,children:[y.jsx(VD,{children:"이선민"}),y.jsx($D,{move2:S,src:PD}),y.jsx(HD,{children:"예술가이자 아트디렉터로 활동하고 있는 이선민님은 ‘섭식장애건강권연대’를 만들어 다양한 활동과 프로그램을 기획하는데 앞장서고 있습니다. 무용수를 준비하던 학창시절부터 긴 시간동안 함께해온 섭식장애와의 이야기를 가진 선민님은 '안전한 식탁'과 같은 여러 프로그램을 기획하며 섭식장애는 남녀노소를 불문하고 누구에게나 일어날 수 있음을 이야기합니다. 섭식장애를 겪는 모든 사람들이 건강한 식습관과 관련된 경험을 꼭 해보고, 그를 통해 식사와 자기 스스로에게 긍정적인 태도를 가질 수 있도록 기획자로서의 정진을 멈추지 않고 계속해서 나아가고 있습니다."})]}),y.jsxs(qD,{left:a,isClicked:g,onClick:()=>{v(!g),F(!g)},move:x,children:[y.jsx("img",{src:R,style:{width:"100%",height:"100%"}}),y.jsx(at,{children:g&&y.jsx(ke.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3,ease:"easeInOut"},children:y.jsx(Kh,{style:{left:"22%",top:"72%",width:`${a*.017}px`,height:`${a*.017}px`},isClicked:g,onMouseEnter:()=>{c(!0),j(!0)},onMouseLeave:()=>{c(!1),j(!1)},children:y.jsx(at,{children:E&&f===2?y.jsx(ke.img,{src:_t,alt:"button",style:{width:"1.2vw",height:"1.2vw"},initial:{opacity:1,rotate:0},animate:{rotate:45,opacity:1},exit:{opacity:0},transition:{rotate:{duration:.5,ease:"easeInOut"},opacity:{duration:.3,ease:"easeInOut"}}},"diamond"):E&&y.jsxs(ke.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:[f===0&&y.jsx("div",{style:{width:"1vw",height:"1vw",backgroundColor:"black",borderRadius:"50%"}}),f===1&&y.jsx("img",{src:_t,alt:"button",style:{width:"1.2vw",height:"1.2vw"}})]},f)})})})}),E&&y.jsx("div",{style:{position:"absolute",left:"27.5%",borderTop:"3px solid black",width:`${a*.02}px`,height:"50px",top:"72%"}}),E&&y.jsx(GD,{style:{width:`${a*.13}px`,height:`${a*.04}px`,left:"32%"},children:y.jsx(FD,{children:"예술로서 섭식장애를 이야기 하는 방법을 찾아가고 있다."})}),y.jsx(at,{children:g&&y.jsx(ke.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3,ease:"easeInOut"},children:y.jsx(Kh,{style:{left:"98%",top:"38%",width:`${a*.017}px`,height:`${a*.017}px`},isClicked:g,onMouseEnter:()=>{c(!0),M(!0)},onMouseLeave:()=>{c(!1),M(!1)},children:y.jsx(at,{children:D&&f===2?y.jsx(ke.img,{src:_t,alt:"button",style:{width:"1.2vw",height:"1.2vw"},initial:{opacity:1,rotate:0},animate:{rotate:45,opacity:1},exit:{opacity:0},transition:{rotate:{duration:.5,ease:"easeInOut"},opacity:{duration:.3,ease:"easeInOut"}}},"diamond"):D&&y.jsxs(ke.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:[f===0&&y.jsx("div",{style:{width:"1vw",height:"1vw",backgroundColor:"black",borderRadius:"50%"}}),f===1&&y.jsx("img",{src:_t,alt:"button",style:{width:"1.2vw",height:"1.2vw"}})]},f)})})})}),D&&y.jsx("div",{style:{position:"absolute",left:"103.5%",borderTop:"3px solid black",width:`${a*.02}px`,height:"50px",top:"38%"}}),D&&y.jsx(ID,{style:{width:`${a*.17}px`,height:`${a*.03}px`,left:"108%"},children:y.jsx(YD,{children:"최근에 아이를 출산해 한 아이의 엄마가 되었다."})}),y.jsx(at,{children:g&&y.jsx(ke.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3,ease:"easeInOut"},children:y.jsx(Kh,{style:{left:"86%",top:"5%",width:`${a*.017}px`,height:`${a*.017}px`},isClicked:g,onMouseEnter:()=>{c(!0),P(!0)},onMouseLeave:()=>{c(!1),P(!1)},children:y.jsx(at,{children:V&&f===2?y.jsx(ke.img,{src:_t,alt:"button",style:{width:"1.2vw",height:"1.2vw"},initial:{opacity:1,rotate:0},animate:{rotate:45,opacity:1},exit:{opacity:0},transition:{rotate:{duration:.5,ease:"easeInOut"},opacity:{duration:.3,ease:"easeInOut"}}},"diamond"):V&&y.jsxs(ke.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:[f===0&&y.jsx("div",{style:{width:"1vw",height:"1vw",backgroundColor:"black",borderRadius:"50%"}}),f===1&&y.jsx("img",{src:_t,alt:"button",style:{width:"1.2vw",height:"1.2vw"}})]},f)})})})}),V&&y.jsx("div",{style:{position:"absolute",left:"91.5%",borderTop:"3px solid black",width:`${a*.02}px`,height:"50px",top:"5%"}}),V&&y.jsx(KD,{style:{width:`${a*.08}px`,height:`${a*.02}px`,left:"96%"},children:y.jsx(XD,{children:"예술기획자로 일하고 있다."})})]})]}),y.jsx(BD,{onClick:()=>{i("main"),t([0,0,1,0]),window.scrollTo({top:0,behavior:"smooth"})},children:y.jsxs("text",{style:{position:"absolute",right:"1%"},children:["고백, 들으러가기 ",">"]})})]})})},ND=O.div`
    width: calc(100vw - 316px);
    height: calc(100vh - 95px);
    background-color: black;
    position: relative;
    overflow: hidden;
    transition: filter 0.3s ease-in-out;
    ${({clicked:i})=>i&&"filter: blur(5px) brightness(50%);"}
`;O.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 15;
    cursor: pointer;
`;const BD=O.div`
display: flex;
width: calc(100vw - 316px);
height: 82px;
align-items: center;
justify-content:right;
flex-shrink: 0;
background-color: yellow;
font-size: 42px;
font-style: normal;
font-weight: 600;
cursor: pointer;
position:absolute;
&:hover {
    background-color: #FFFFA3;
    transition: background-color 0.3s ease-in-out
    }
`,VD=O.text`
    left: 21px;
    top: 26px;
    font-size:2.5vw;
    font-style: normal;
    font-weight: 600;
    color: white;
    position: absolute;
    leading-trim: both;
    text-edge: cap;
    line-height: 108%;
    letter-spacing: -2.88px;
    z-index: 10;
`,$D=O.img`
    width:100%;
    height:40%;
    text-align: center;
    text-shadow: 0px 8px 22.1px rgba(0, 0, 0, 0.2);
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #000;
    font-size: 80px;
    font-style: normal;
    font-weight: 800;
    line-height: 128%;
    position: absolute;
    top: 81px;

    z-index: 10;
    transform: ${({move2:i})=>`translateY(${i}px)`};
    transition: transform 0.3s ease-in-out ;
`,HD=O.div`
    position: absolute;
    left: 22px;
    color: white;
    bottom: 1%;
    font-size: 1.7vw;
    font-style: normal;
    font-weight: 600;
    line-height: 125%;
    z-index: 10;
`,qD=O.div`
     left: ${({left:i})=>`calc(316px + ${i*.325}px)`};
    width:29.426%;
    aspect-ratio:594.66/754.14;
    position:absolute;
    transform-origin: top left;
    transform: ${({move:i})=>`translateY(${i}px)`};
    opacity: ${({isClicked:i})=>i?.8:.5};
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
        transform: ${({move:i})=>`translateY(${i}px) scale(1.1)`};
        opacity: 0.8;
    }
    
`,Kh=O.div`

border:3px solid black;
position:absolute;
z-index;100;
background-color:yellow;
transition: opacity 0.3s ease-in-out;
display:flex;
justify-content:center;
align-items:center;
`,GD=O.div`
left: 997px;
position:absolute;
top:72%;
background-color:yellow;
width:227px;
height:79px;
display: flex;
padding: 18px 22px;
justify-content: center;
align-items: center;
gap: 10px;
border: 3px solid #000;
`,FD=O.div`
color: #010101;
leading-trim: both;
text-edge: cap;
font-family: "Gothic A1";
font-size: 1vw;
font-style: normal;
font-weight: 600;
line-height: 140%;
`,ID=O.div`
left: 1247px;
position:absolute;
top:38%;
background-color:yellow;
width:244px;
height:79px;
display: flex;
padding: 18px 22px;
justify-content: center;
align-items: center;
gap: 10px;
border: 3px solid #000;
`,YD=O.div`
color: #010101;
leading-trim: both;
text-edge: cap;
font-family: "Gothic A1";
font-size: 1vw;
font-style: normal;
font-weight: 600;
line-height: 140%;
`,KD=O.div`
left: 737px;
position:absolute;
top:5%;
width:294px;
height:79px;
display: flex;
padding: 18px 22px;
justify-content: center;
align-items: center;
gap: 10px;
background-color:yellow;
border: 3px solid #000;
`,XD=O.div`
color: #010101;
leading-trim: both;
text-edge: cap;
font-family: "Gothic A1";
font-size: 1vw;
font-style: normal;
font-weight: 600;
line-height: 140%;
`;O.div`
position:absolute;
top:78%;
background-color:yellow;

display: flex;
padding: 18px 22px;
justify-content: center;
align-items: center;
gap: 10px;
border: 3px solid #000;
`;O.div`
color: #010101;
leading-trim: both;
text-edge: cap;
font-family: "Gothic A1";
font-size: 1vw;
font-style: normal;
font-weight: 600;
line-height: 140%;
`;const QD="/assets/title_Leejinsol-CT8Y6QXS.svg",ZD="/assets/leejinsolhoverimg-BEzzN3CJ.png",WD=({setpagestate:i,setbtnclick:t})=>{const r=_.useRef(null),[a,o]=_.useState(0),[u,c]=_.useState(!1),h=_.useRef(null),[f,p]=_.useState(0);_.useEffect(()=>(u?h.current=window.setInterval(()=>{console.log(f),p(te=>(te+1)%4)},700):(h.current&&(clearInterval(h.current),h.current=null),p(0)),()=>{h.current&&clearInterval(h.current)}),[u]),_.useEffect(()=>{const te=()=>{if(r.current){const he=r.current.offsetWidth;o(he)}};return te(),window.addEventListener("resize",te),()=>window.removeEventListener("resize",te)},[]),_.useRef(null),_.useRef(!1),_.useRef(0),_.useRef(0),_.useRef(0),_.useRef(0),console.log(t);const[g,v]=_.useState(!1),[x,w]=_.useState(0),[S,T]=_.useState(0),[E,j]=_.useState(!1),[D,M]=_.useState(!1),[V,P]=_.useState(!1),[R,F]=_.useState(!1),I=ZD,G=te=>{te?(w(-30),T(200)):(w(0),T(0))};return y.jsx(y.Fragment,{children:y.jsxs(at,{children:[y.jsxs(ke.div,{initial:{opacity:.8},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3,ease:"easeInOut"},className:"absolute mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg",style:{userSelect:"none",display:"flex",alignItems:"center"},children:[y.jsxs(JD,{clicked:g,ref:r,children:[y.jsx(t5,{children:"이진솔"}),y.jsx(i5,{move2:S,src:QD}),y.jsx(n5,{children:"섭식장애  상담사이자 경험자 입니다.  유튜브와 블로그에 관련 주제를 다루며, 대학원에서 연구를 병행하고 있습니다. 특히 섭식장애를 단순히  개인 문제가 아닌 주변인이 함께 겪는 질병으로 바라보며, 자조 모임을  운영하는 등  다각적인 지원 활동을 하고 있습니다."})]}),y.jsxs(r5,{left:a,isClicked:g,onClick:()=>{v(!g),G(!g)},move:x,children:[y.jsx("img",{src:I,style:{width:"100%",height:"100%"}}),y.jsx(at,{children:g&&y.jsx(ke.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3,ease:"easeInOut"},children:y.jsx(nc,{style:{left:"27%",top:"53%",width:`${a*.017}px`,height:`${a*.017}px`},isClicked:g,onMouseEnter:()=>{c(!0),j(!0)},onMouseLeave:()=>{c(!1),j(!1)},children:y.jsx(at,{children:E&&f===2?y.jsx(ke.img,{src:_t,alt:"button",style:{width:"1.2vw",height:"1.2vw"},initial:{opacity:1,rotate:0},animate:{rotate:45,opacity:1},exit:{opacity:0},transition:{rotate:{duration:.5,ease:"easeInOut"},opacity:{duration:.3,ease:"easeInOut"}}},"diamond"):E&&y.jsxs(ke.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:[f===0&&y.jsx("div",{style:{width:"1vw",height:"1vw",backgroundColor:"black",borderRadius:"50%"}}),f===1&&y.jsx("img",{src:_t,alt:"button",style:{width:"1.2vw",height:"1.2vw"}})]},f)})})})}),E&&y.jsx("div",{style:{position:"absolute",left:"32%",borderTop:"3px solid black",width:`${a*.02}px`,height:"50px",top:"53%"}}),E&&y.jsx(a5,{style:{width:`${a*.15}px`,height:`${a*.04}px`,left:"35%"},children:y.jsx(s5,{children:"논문 기재 이후 2024년 현재, 박사과정을 지내고 있다."})}),y.jsx(at,{children:g&&y.jsx(ke.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3,ease:"easeInOut"},children:y.jsx(nc,{style:{left:"97%",top:"38%",width:`${a*.017}px`,height:`${a*.017}px`},isClicked:g,onMouseEnter:()=>{c(!0),M(!0)},onMouseLeave:()=>{c(!1),M(!1)},children:y.jsx(at,{children:D&&f===2?y.jsx(ke.img,{src:_t,alt:"button",style:{width:"1.2vw",height:"1.2vw"},initial:{opacity:1,rotate:0},animate:{rotate:45,opacity:1},exit:{opacity:0},transition:{rotate:{duration:.5,ease:"easeInOut"},opacity:{duration:.3,ease:"easeInOut"}}},"diamond"):D&&y.jsxs(ke.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:[f===0&&y.jsx("div",{style:{width:"1vw",height:"1vw",backgroundColor:"black",borderRadius:"50%"}}),f===1&&y.jsx("img",{src:_t,alt:"button",style:{width:"1.2vw",height:"1.2vw"}})]},f)})})})}),D&&y.jsx("div",{style:{position:"absolute",left:"102%",borderTop:"3px solid black",width:`${a*.02}px`,height:"50px",top:"38%"}}),D&&y.jsx(o5,{style:{width:`${a*.13}px`,height:`${a*.03}px`,left:"105%"},children:y.jsx(l5,{children:"섭식장애에 대한 논문을 기재한 바 있다."})}),y.jsx(at,{children:g&&y.jsx(ke.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3,ease:"easeInOut"},children:y.jsx(nc,{style:{left:"78%",top:"79%",width:`${a*.017}px`,height:`${a*.017}px`},isClicked:g,onMouseEnter:()=>{c(!0),P(!0)},onMouseLeave:()=>{c(!1),P(!1)},children:y.jsx(at,{children:V&&f===2?y.jsx(ke.img,{src:_t,alt:"button",style:{width:"1.2vw",height:"1.2vw"},initial:{opacity:1,rotate:0},animate:{rotate:45,opacity:1},exit:{opacity:0},transition:{rotate:{duration:.5,ease:"easeInOut"},opacity:{duration:.3,ease:"easeInOut"}}},"diamond"):V&&y.jsxs(ke.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:[f===0&&y.jsx("div",{style:{width:"1vw",height:"1vw",backgroundColor:"black",borderRadius:"50%"}}),f===1&&y.jsx("img",{src:_t,alt:"button",style:{width:"1.2vw",height:"1.2vw"}})]},f)})})})}),V&&y.jsx("div",{style:{position:"absolute",left:"83%",borderTop:"3px solid black",width:`${a*.02}px`,height:"50px",top:"79%"}}),V&&y.jsx(u5,{style:{width:`${a*.13}px`,height:`${a*.05}px`,left:"86%"},children:y.jsx(c5,{children:"'여기서는 진솔하게'라는 섭식장애 개인 유투브를 운영중이다."})}),y.jsx(at,{children:g&&y.jsx(ke.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3,ease:"easeInOut"},children:y.jsx(nc,{style:{left:"63%",top:"-1%",width:`${a*.017}px`,height:`${a*.017}px`},isClicked:g,onMouseEnter:()=>{c(!0),F(!0)},onMouseLeave:()=>{c(!1),F(!1)},children:y.jsx(at,{children:R&&f===2?y.jsx(ke.img,{src:_t,alt:"button",style:{width:"1.2vw",height:"1.2vw"},initial:{opacity:1,rotate:0},animate:{rotate:45,opacity:1},exit:{opacity:0},transition:{rotate:{duration:.5,ease:"easeInOut"},opacity:{duration:.3,ease:"easeInOut"}}},"diamond"):R&&y.jsxs(ke.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:[f===0&&y.jsx("div",{style:{width:"1vw",height:"1vw",backgroundColor:"black",borderRadius:"50%"}}),f===1&&y.jsx("img",{src:_t,alt:"button",style:{width:"1.2vw",height:"1.2vw"}})]},f)})})})}),R&&y.jsx("div",{style:{position:"absolute",left:"68%",borderTop:"3px solid black",width:`${a*.02}px`,height:"50px",top:"-1%"}}),R&&y.jsx(d5,{style:{width:`${a*.11}px`,height:`${a*.02}px`,left:"71%"},children:y.jsx(f5,{children:"섭식장애 상담자이자 경험자이다."})})]})]}),y.jsx(e5,{onClick:()=>{i("main"),t([0,0,1,0]),window.scrollTo({top:0,behavior:"smooth"})},children:y.jsxs("text",{style:{position:"absolute",right:"1%"},children:["고백, 들으러가기 ",">"]})})]})})},JD=O.div`
    width: calc(100vw - 316px);
    height: calc(100vh - 95px);
    background-color: black;
    position: relative;
    overflow: hidden;
    transition: filter 0.3s ease-in-out;
    ${({clicked:i})=>i&&"filter: blur(5px) brightness(50%);"}
`;O.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 15;
    cursor: pointer;
`;const e5=O.div`
display: flex;
width: calc(100vw - 316px);
height: 82px;
align-items: center;
justify-content:right;
flex-shrink: 0;
background-color: yellow;
font-size: 42px;
font-style: normal;
font-weight: 600;
cursor: pointer;
position:absolute;
&:hover {
    background-color: #FFFFA3;
    transition: background-color 0.3s ease-in-out
    }
`,t5=O.text`
    left: 21px;
    top: 26px;
    font-size:2.5vw;
    font-style: normal;
    font-weight: 600;
    color: white;
    position: absolute;
    leading-trim: both;
    text-edge: cap;
    line-height: 108%;
    letter-spacing: -2.88px;
    z-index: 10;
`,i5=O.img`
    width:100%;
    height:40%;
    text-align: center;
    text-shadow: 0px 8px 22.1px rgba(0, 0, 0, 0.2);
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #000;
    font-size: 80px;
    font-style: normal;
    font-weight: 800;
    line-height: 128%;
    position: absolute;
    top: 81px;

    z-index: 10;
    transform: ${({move2:i})=>`translateY(${i}px)`};
    transition: transform 0.3s ease-in-out ;
`,n5=O.div`
    position: absolute;
    left: 22px;
    color: white;
    bottom: 1%;
    font-size: 1.7vw;
    font-style: normal;
    font-weight: 600;
    line-height: 125%;
    z-index: 10;
`,r5=O.div`
     left: ${({left:i})=>`calc(316px + ${i*.325}px)`};
    width:32%;
    aspect-ratio:721/771;
    position:absolute;
    transform-origin: top left;
    transform: ${({move:i})=>`translateY(${i}px)`};
    opacity: ${({isClicked:i})=>i?.8:.5};
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
        transform: ${({move:i})=>`translateY(${i}px) scale(1.1)`};
        opacity: 0.8;
    }
    
`,nc=O.div`

border:3px solid black;
position:absolute;
z-index;100;
background-color:yellow;
transition: opacity 0.3s ease-in-out;
display:flex;
justify-content:center;
align-items:center;
`,a5=O.div`
left: 997px;
position:absolute;
top:53%;
background-color:yellow;
width:227px;
height:79px;
display: flex;
padding: 18px 22px;
justify-content: center;
align-items: center;
gap: 10px;
border: 3px solid #000;
`,s5=O.div`
color: #010101;
leading-trim: both;
text-edge: cap;
font-family: "Gothic A1";
font-size: 1vw;
font-style: normal;
font-weight: 600;
line-height: 140%;
`,o5=O.div`
left: 1247px;
position:absolute;
top:38%;
background-color:yellow;
width:244px;
height:79px;
display: flex;
padding: 18px 22px;
justify-content: center;
align-items: center;
gap: 10px;
border: 3px solid #000;
`,l5=O.div`
color: #010101;
leading-trim: both;
text-edge: cap;
font-family: "Gothic A1";
font-size: 1vw;
font-style: normal;
font-weight: 600;
line-height: 140%;
`,u5=O.div`
left: 737px;
position:absolute;
top:79%;
width:294px;
height:79px;
display: flex;
padding: 18px 22px;
justify-content: center;
align-items: center;
gap: 10px;
background-color:yellow;
border: 3px solid #000;
`,c5=O.div`
color: #010101;
leading-trim: both;
text-edge: cap;
font-family: "Gothic A1";
font-size: 1vw;
font-style: normal;
font-weight: 600;
line-height: 140%;
`,d5=O.div`
position:absolute;
top:-1%;
background-color:yellow;

display: flex;
padding: 18px 22px;
justify-content: center;
align-items: center;
gap: 10px;
border: 3px solid #000;
`,f5=O.div`
color: #010101;
leading-trim: both;
text-edge: cap;
font-family: "Gothic A1";
font-size: 1vw;
font-style: normal;
font-weight: 600;
line-height: 140%;
`,h5="/assets/babarahoverimg-D-aS9ZSG.png",p5="/assets/title_babara-D9Q8I0MM.svg",m5=({setpagestate:i,setbtnclick:t})=>{const r=_.useRef(null),[a,o]=_.useState(0),[u,c]=_.useState(!1),h=_.useRef(null),[f,p]=_.useState(0);_.useEffect(()=>(u?h.current=window.setInterval(()=>{console.log(f),p(I=>(I+1)%4)},700):(h.current&&(clearInterval(h.current),h.current=null),p(0)),()=>{h.current&&clearInterval(h.current)}),[u]),_.useEffect(()=>{const I=()=>{if(r.current){const G=r.current.offsetWidth;o(G)}};return I(),window.addEventListener("resize",I),()=>window.removeEventListener("resize",I)},[]),_.useRef(null),_.useRef(!1),_.useRef(0),_.useRef(0),_.useRef(0),_.useRef(0),console.log(t);const[g,v]=_.useState(!1),[x,w]=_.useState(0),[S,T]=_.useState(0),[E,j]=_.useState(!1),[D,M]=_.useState(!1),[V,P]=_.useState(!1),R=h5,F=I=>{I?(w(-30),T(200)):(w(0),T(0))};return y.jsx(y.Fragment,{children:y.jsxs(at,{children:[y.jsxs(ke.div,{initial:{opacity:.8},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3,ease:"easeInOut"},className:"absolute mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg",style:{userSelect:"none",display:"flex",alignItems:"center"},children:[y.jsxs(g5,{clicked:g,ref:r,children:[y.jsx(v5,{children:"바바라"}),y.jsx(x5,{move2:S,src:p5}),y.jsx(b5,{children:"바바라는 2011년도에 가수로 데뷔를 했고 현재는 보컬 트레이너로 활동을 하고 있습니다. 과거 연예계를 경험 하며 겪은 섭식장애 그리고 보컬트레이너로서 보는 섭식장애를 겪는 학생들. 이에 대해 그는 미디어가 시대에 미치는 영향에 대해 힘있는 목소리로 이야기합니다. 바바라 라는 이름이 가수 혹은 보컬트레이너 라는 키워드에 멈추지 않고 누군가에게 용기가 될 수 있는 활동가로 불릴 수 있을 때까지, 그의 목소리는 계속해서 울려 퍼지고 있습니다."})]}),y.jsxs(w5,{left:a,isClicked:g,onClick:()=>{v(!g),F(!g)},move:x,children:[y.jsx("img",{src:R,style:{width:"100%",height:"100%"}}),y.jsx(at,{children:g&&y.jsx(ke.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3,ease:"easeInOut"},children:y.jsx(Xh,{style:{left:"31%",top:"47%",width:`${a*.017}px`,height:`${a*.017}px`},isClicked:g,onMouseEnter:()=>{c(!0),j(!0)},onMouseLeave:()=>{c(!1),j(!1)},children:y.jsx(at,{children:E&&f===2?y.jsx(ke.img,{src:_t,alt:"button",style:{width:"1.2vw",height:"1.2vw"},initial:{opacity:1,rotate:0},animate:{rotate:45,opacity:1},exit:{opacity:0},transition:{rotate:{duration:.5,ease:"easeInOut"},opacity:{duration:.3,ease:"easeInOut"}}},"diamond"):E&&y.jsxs(ke.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:[f===0&&y.jsx("div",{style:{width:"1vw",height:"1vw",backgroundColor:"black",borderRadius:"50%"}}),f===1&&y.jsx("img",{src:_t,alt:"button",style:{width:"1.2vw",height:"1.2vw"}})]},f)})})})}),E&&y.jsx("div",{style:{position:"absolute",left:"36%",borderTop:"3px solid black",width:`${a*.02}px`,height:"50px",top:"47%"}}),E&&y.jsx(S5,{style:{width:`${a*.13}px`,height:`${a*.04}px`,left:"40%"},children:y.jsx(A5,{children:"다이어트 약을 처방받은 적이 있다."})}),y.jsx(at,{children:g&&y.jsx(ke.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3,ease:"easeInOut"},children:y.jsx(Xh,{style:{left:"96%",top:"30%",width:`${a*.017}px`,height:`${a*.017}px`},isClicked:g,onMouseEnter:()=>{c(!0),M(!0)},onMouseLeave:()=>{c(!1),M(!1)},children:y.jsx(at,{children:D&&f===2?y.jsx(ke.img,{src:_t,alt:"button",style:{width:"1.2vw",height:"1.2vw"},initial:{opacity:1,rotate:0},animate:{rotate:45,opacity:1},exit:{opacity:0},transition:{rotate:{duration:.5,ease:"easeInOut"},opacity:{duration:.3,ease:"easeInOut"}}},"diamond"):D&&y.jsxs(ke.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:[f===0&&y.jsx("div",{style:{width:"1vw",height:"1vw",backgroundColor:"black",borderRadius:"50%"}}),f===1&&y.jsx("img",{src:_t,alt:"button",style:{width:"1.2vw",height:"1.2vw"}})]},f)})})})}),D&&y.jsx("div",{style:{position:"absolute",left:"102%",borderTop:"3px solid black",width:`${a*.02}px`,height:"50px",top:"30%"}}),D&&y.jsx(_5,{style:{width:`${a*.13}px`,height:`${a*.03}px`,left:"106%"},children:y.jsx(E5,{children:"현재 보컬 트레이너로서 학생들을 가르치고 있다."})}),y.jsx(at,{children:g&&y.jsx(ke.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3,ease:"easeInOut"},children:y.jsx(Xh,{style:{left:"54%",top:"77%",width:`${a*.017}px`,height:`${a*.017}px`},isClicked:g,onMouseEnter:()=>{c(!0),P(!0)},onMouseLeave:()=>{c(!1),P(!1)},children:y.jsx(at,{children:V&&f===2?y.jsx(ke.img,{src:_t,alt:"button",style:{width:"1.2vw",height:"1.2vw"},initial:{opacity:1,rotate:0},animate:{rotate:45,opacity:1},exit:{opacity:0},transition:{rotate:{duration:.5,ease:"easeInOut"},opacity:{duration:.3,ease:"easeInOut"}}},"diamond"):V&&y.jsxs(ke.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:[f===0&&y.jsx("div",{style:{width:"1vw",height:"1vw",backgroundColor:"black",borderRadius:"50%"}}),f===1&&y.jsx("img",{src:_t,alt:"button",style:{width:"1.2vw",height:"1.2vw"}})]},f)})})})}),V&&y.jsx("div",{style:{position:"absolute",left:"58%",borderTop:"3px solid black",width:`${a*.02}px`,height:"50px",top:"77%"}}),V&&y.jsx(T5,{style:{width:`${a*.08}px`,height:`${a*.02}px`,left:"63%"},children:y.jsx(j5,{children:"2011년 가수로 데뷔했다."})})]})]}),y.jsx(y5,{onClick:()=>{i("main"),t([0,0,1,0]),window.scrollTo({top:0,behavior:"smooth"})},children:y.jsxs("text",{style:{position:"absolute",right:"1%"},children:["고백, 들으러가기 ",">"]})})]})})},g5=O.div`
    width: calc(100vw - 316px);
    height: calc(100vh - 95px);
    background-color: black;
    position: relative;
    overflow: hidden;
    transition: filter 0.3s ease-in-out;
    ${({clicked:i})=>i&&"filter: blur(5px) brightness(50%);"}
`;O.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 15;
    cursor: pointer;
`;const y5=O.div`
display: flex;
width: calc(100vw - 316px);
height: 82px;
align-items: center;
justify-content:right;
flex-shrink: 0;
background-color: yellow;
font-size: 42px;
font-style: normal;
font-weight: 600;
cursor: pointer;
position:absolute;
&:hover {
    background-color: #FFFFA3;
    transition: background-color 0.3s ease-in-out
    }
`,v5=O.text`
    left: 21px;
    top: 26px;
    font-size:2.5vw;
    font-style: normal;
    font-weight: 600;
    color: white;
    position: absolute;
    leading-trim: both;
    text-edge: cap;
    line-height: 108%;
    letter-spacing: -2.88px;
    z-index: 10;
`,x5=O.img`
    width:100%;
    height:40%;
    text-align: center;
    text-shadow: 0px 8px 22.1px rgba(0, 0, 0, 0.2);
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #000;
    font-size: 80px;
    font-style: normal;
    font-weight: 800;
    line-height: 128%;
    position: absolute;
    top: 81px;

    z-index: 10;
    transform: ${({move2:i})=>`translateY(${i}px)`};
    transition: transform 0.3s ease-in-out ;
`,b5=O.div`
    position: absolute;
    left: 22px;
    color: white;
    bottom: 1%;
    font-size: 1.7vw;
    font-style: normal;
    font-weight: 600;
    line-height: 125%;
    z-index: 10;
`,w5=O.div`
     left: ${({left:i})=>`calc(316px + ${i*.325}px)`};
    width:35%;
    aspect-ratio:741/759;
    position:absolute;
    transform-origin: top left;
    transform: ${({move:i})=>`translateY(${i}px)`};
    opacity: ${({isClicked:i})=>i?.8:.5};
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
        transform: ${({move:i})=>`translateY(${i}px) scale(1.1)`};
        opacity: 0.8;
    }
    
`,Xh=O.div`

border:3px solid black;
position:absolute;
z-index;100;
background-color:yellow;
transition: opacity 0.3s ease-in-out;
display:flex;
justify-content:center;
align-items:center;
`,S5=O.div`
left: 997px;
position:absolute;
top:47%;
background-color:yellow;
width:227px;
height:79px;
display: flex;
padding: 18px 22px;
justify-content: center;
align-items: center;
gap: 10px;
border: 3px solid #000;
`,A5=O.div`
color: #010101;
leading-trim: both;
text-edge: cap;
font-family: "Gothic A1";
font-size: 1vw;
font-style: normal;
font-weight: 600;
line-height: 140%;
`,_5=O.div`
left: 1247px;
position:absolute;
top:30%;
background-color:yellow;
width:244px;
height:79px;
display: flex;
padding: 18px 22px;
justify-content: center;
align-items: center;
gap: 10px;
border: 3px solid #000;
`,E5=O.div`
color: #010101;
leading-trim: both;
text-edge: cap;
font-family: "Gothic A1";
font-size: 1vw;
font-style: normal;
font-weight: 600;
line-height: 140%;
`,T5=O.div`
left: 737px;
position:absolute;
top:77%;
width:294px;
height:79px;
display: flex;
padding: 18px 22px;
justify-content: center;
align-items: center;
gap: 10px;
background-color:yellow;
border: 3px solid #000;
`,j5=O.div`
color: #010101;
leading-trim: both;
text-edge: cap;
font-family: "Gothic A1";
font-size: 1vw;
font-style: normal;
font-weight: 600;
line-height: 140%;
`;O.div`
position:absolute;
top:78%;
background-color:yellow;

display: flex;
padding: 18px 22px;
justify-content: center;
align-items: center;
gap: 10px;
border: 3px solid #000;
`;O.div`
color: #010101;
leading-trim: both;
text-edge: cap;
font-family: "Gothic A1";
font-size: 1vw;
font-style: normal;
font-weight: 600;
line-height: 140%;
`;const Gi="/assets/LeesunminVideoimg-0beVrhRp.png",Xi=[{name:"이선민",image:Gi,title:"안녕하세요. 이선민입니다.",stitle:"① 소개",time:"1분 39초",youtubeid:"RkwPC1qc_LY",id:0},{name:"이선민",image:Gi,title:"섭식장애와 함께 보낸 10대 시절의 이야기를 들려주실 수 있나요?",stitle:"② 과거",time:"2분 5초",youtubeid:"0NkTsRISPEQ",id:1},{name:"이선민",image:Gi,title:"본격적으로 치료를 결심하게 된 계기가 무엇이었나요?",stitle:"③ 결심",time:"2분 4초",youtubeid:"ZzZ34LabuMo",id:2},{name:"이선민",image:Gi,title:"아직까지 남아있는 후유증이 있다면?",stitle:"④ 후유증",time:"57초",youtubeid:"--M7dqBNSm4",id:3},{name:"이선민",image:Gi,title:"‘혼자가 아니다’라는 위로를 받을 때는 언제였나요?",stitle:"⑤ 위로",time:"2분 10초",youtubeid:"B_yq0L-o9sI",id:4},{name:"이선민",image:Gi,title:"섭식장애를 극복하기 위해 어떤 노력을 해오셨고, 또 하고 있는지...",stitle:"⑥ 노력",time:"1분 57초",youtubeid:"-vJ1PMSiFso",id:5},{name:"이선민",image:Gi,title:"다양한 섭식장애 세미나를 진행하면서 기억에 남는 에피소드가 있을까요?",stitle:"⑦ 기억",time:"1분 46초",youtubeid:"uSIAU7Ha0CY",id:6},{name:"이선민",image:Gi,title:"사회적 분위기에 휩쓸리지 않고 주도적으로 사고하려면 어떻게 해야할까요?",stitle:"⑧ 주도적 사고",time:"1분 44초",youtubeid:"jIoRQq20RqE",id:7},{name:"이선민",image:Gi,title:"변해가는 내 몸을 어떻게 하면 사랑할 수 있을까요?",stitle:"⑨ 나를 사랑하기",time:"2분 33초",youtubeid:"x7dVI-eoyAU",id:8},{name:"이선민",image:Gi,title:"만약, 아이가 성장하면서 섭식장애와 관련한 고민을 가지게 된다면?",stitle:"⑩ 아이와 섭식장애",time:"1분 9초",youtubeid:"-f09YYKaew0",id:9},{name:"이선민",image:Gi,title:"섭식장애를 겪거나 이겨내는 과정에 있는 사람들에게 전하고 싶은 메세지",stitle:"+ 메세지",time:"1분 11초",youtubeid:"NRcSozxVNtg",id:10}],Fi="/assets/LeejinsolVideoimg-C8n0LOar.png",Li=[{name:"이진솔",image:Fi,title:"안녕하세요. 이진솔입니다.",stitle:"① 소개",time:"41초",youtubeid:"IacTiqQMOj8",id:0},{name:"이진솔",image:Fi,title:"섭식장애와 고백의 연결점은 무엇인가요?",stitle:"② 고백",time:"40초",youtubeid:"U81BZxvWjfI",id:1},{name:"이진솔",image:Fi,title:"섭식장애란 어떤 질병인가요?",stitle:"③ 정의",time:"1분 1초",youtubeid:"1m5Xt57bXcc",id:2},{name:"이진솔",image:Fi,title:"섭식장애를 바라보는 세상의 시선, 무엇이 잘못되었나요?",stitle:"④ 오해와 진실",time:"1분",youtubeid:"nLd7BLAdgPk",id:3},{name:"이진솔",image:Fi,title:"섭식장애의 끝이 있다고 믿으시나요? 그 끝은 어떤 모습일까요?",stitle:"⑤ 완치",time:"1분 36초",youtubeid:"FId6nSATD3k",id:4},{name:"이진솔",image:Fi,title:"최근 섭식장애의 양상은 어떻게 나타나고 있나요?",stitle:"⑥ 노력",time:"1분 18초",youtubeid:"_QLhRgXJlW4",id:5},{name:"이진솔",image:Fi,title:"섭식장애 딸을 둔 어머니와 만남을 기획하셨다고 들었는데, 그 이유는 무엇인가요?",stitle:"⑦ 주변 사람들",time:"1분 45초",youtubeid:"IwDqCEnXirw",id:6},{name:"이진솔",image:Fi,title:"섭식장애 치료 체계에서 느끼는 문제점은 무엇인가요?",stitle:"⑧ 치료",time:"1분 26초",youtubeid:"7rBFYCQaoUg",id:7},{name:"이진솔",image:Fi,title:"섭식장애로부터 씩씩해질 수 있는 방법은 무엇인가요?",stitle:"⑨ 함께 살아가기",time:"1분 32초",youtubeid:"1ufrHe_LVZk",id:8},{name:"이진솔",image:Fi,title:"섭식장애로부터 나아지고있다라고 느끼는 순간이 있다면 언제인가요?",stitle:"⑩ 회복",time:"1분 3초",youtubeid:"L_VL6TKvJ_s",id:9},{name:"이진솔",image:Fi,title:"섭식장애로 힘들어하는 사람들에게 전하고 싶은 메시지는 무엇인가요?",stitle:"+ 메세지",time:"1분 59초",youtubeid:"9EmL419nhPM",id:10}],fr="/assets/BabaraVideoimg-UDUUPll3.png",Qi=[{name:"바바라",image:fr,title:"안녕하세요. 바바라입니다.",stitle:"① 소개",time:"1분 3초",youtubeid:"jgtSnNZ6-vY",id:0},{name:"바바라",image:fr,title:"인터뷰 요청을 받아들이면서 어떤 생각이 드셨나요?",stitle:"② 생각",time:"1분 59초",youtubeid:"XtcSy7rONgQ",id:1},{name:"바바라",image:fr,title:"바바라님의 삶과 커리어 속에서 함께 살아가던 섭식장애 이야기를 들려주세요.",stitle:"③ 이야기",time:"2분 55초",youtubeid:"P0tEEiTax8M",id:2},{name:"바바라",image:fr,title:"힘들었던 시기를 이겨내게 만든 가장 큰 전환점은 무엇이었나요?",stitle:"④ 전환점",time:"2분 59초",youtubeid:"E1Pn6axOj7E",id:3},{name:"바바라",image:fr,title:"가장 행복해야 할 시기를 살아가고 있는 20대에게 전하고 싶은 말이 있나요?",stitle:"⑤ 전달",time:"3분 27초",youtubeid:"yRkgKkVrWeU",id:4},{name:"바바라",image:fr,title:"다양한 인터뷰를 진행하면서, 섭식장애를 향한 사람들의 인식이 부족하다는 점을 느낀적이 있었나요?",stitle:"⑥ 인식",time:"2분 58초",youtubeid:"s4R3YramSqs",id:5},{name:"바바라",image:fr,title:"앞으로 이 사회가 섭식장애를 대하는 태도가 어떻게 변했으면 좋겠나요?",stitle:"⑦ 태도",time:"1분 40초",youtubeid:"ewZ9i96rggk",id:6},{name:"바바라",image:fr,title:"그렇다면 앞으로의 바바라님은 그 사회 속에서 어떤 활동을 이어나갈 예정인지 들려주세요",stitle:"⑧ 이어가기",time:"1분 50초",youtubeid:"28ZTEvlj92I",id:7}],R5=({setisoverlay:i,setoverlayinfo:t})=>{const r=wr({query:"(max-width: 1024px)"});return zs(),y.jsxs(y.Fragment,{children:[r&&y.jsxs(C5,{children:[y.jsxs(Qh,{children:["  ",">"," 이선민"]}),y.jsx(Zh,{children:Xi.map((a,o)=>y.jsxs(ts,{onClick:()=>{t({title:a.title,name:a.name,time:a.time,youtubeid:a.youtubeid,id:a.id}),i(!0),window.scrollTo({top:0})},children:[y.jsx("img",{src:a.image,style:{top:"5%",width:"100%",position:"absolute"}}),y.jsxs(ep,{children:[a.stitle.split("").map((u,c)=>y.jsx("div",{style:u===" "?{fontSize:"10px",height:"5px",display:"inline-block"}:{},children:u===" "?" ":u},c)),y.jsx(ns,{})]}),y.jsx(is,{style:{fontSize:"20px"},children:a.title}),y.jsx("div",{style:{width:"90%",height:"1.5%",position:"absolute",top:"95%",fontSize:"15px",left:"0"},children:"인터뷰이 | 이선민"})]}))}),y.jsxs(Qh,{children:["  ",">>"," 이진솔"]}),y.jsx(Zh,{children:Li.map((a,o)=>y.jsxs(ts,{onClick:()=>{t({title:a.title,name:a.name,time:a.time,youtubeid:a.youtubeid,id:a.id}),i(!0),window.scrollTo({top:0})},children:[y.jsx("img",{src:a.image,style:{top:"5%",width:"100%",position:"absolute"}}),y.jsxs(ep,{children:[a.stitle.split("").map((u,c)=>y.jsx("div",{style:u===" "?{fontSize:"10px",height:"5px",display:"inline-block"}:{},children:u===" "?" ":u},c)),y.jsx(ns,{})]}),y.jsx(is,{style:{fontSize:"20px"},children:a.title}),y.jsx("div",{style:{width:"90%",height:"1.5%",position:"absolute",top:"95%",fontSize:"15px",left:"0"},children:"인터뷰이 | 이진솔"})]}))}),y.jsxs(Qh,{children:["  ",">>>"," 바바라"]}),y.jsx(Zh,{children:Qi.map((a,o)=>y.jsxs(ts,{onClick:()=>{t({title:a.title,name:a.name,time:a.time,youtubeid:a.youtubeid,id:a.id}),i(!0),window.scrollTo({top:0})},children:[y.jsx("img",{src:a.image,style:{top:"5%",width:"100%",position:"absolute"}}),y.jsxs(ep,{style:{color:"white"},children:[a.stitle.split("").map((u,c)=>y.jsx("div",{style:u===" "?{fontSize:"10px",height:"5px",display:"inline-block"}:{},children:u===" "?" ":u},c)),y.jsx(ns,{style:{backgroundColor:"white"}})]}),y.jsx(is,{style:{fontSize:"20px"},children:a.title}),y.jsx("div",{style:{width:"90%",height:"1.5%",position:"absolute",top:"95%",fontSize:"15px",left:"0"},children:"인터뷰이 | 바바라"})]}))}),y.jsxs("div",{style:{width:"708px",height:"100px",backgroundColor:"black",position:"relative"},children:[y.jsxs(tb,{style:{fontSize:"10px"},children:["섭식장애 고백 프로젝트 식식",y.jsx("br",{}),"Eating Disorder Confession",y.jsx("br",{}),"Project Siksik",y.jsx("br",{}),"©Siksik, Inc. All Rights Reserved."]}),y.jsxs(ib,{style:{fontSize:"10px"},children:["T. 010 8892 9473",y.jsx("br",{}),"Mail. jhss8892@naver.com"]})]})]}),!r&&y.jsxs(k5,{children:[y.jsx(Wh,{children:y.jsxs("text",{style:{position:"absolute",left:"1%"},children:["  ",">"," 이선민"]})}),y.jsx(eb,{children:Xi.map((a,o)=>y.jsxs(ts,{onClick:()=>{t({title:a.title,name:a.name,time:a.time,youtubeid:a.youtubeid,id:a.id}),i(!0),window.scrollTo({top:0})},children:[y.jsx("img",{src:a.image,style:{top:"5%",width:"100%",position:"absolute"}}),y.jsxs(Jh,{children:[a.stitle.split("").map((u,c)=>y.jsx("div",{style:u===" "?{fontSize:"0.1vw",height:"0.5vh",display:"inline-block"}:{},children:u===" "?" ":u},c)),y.jsx(ns,{})]}),y.jsx(is,{children:a.title}),y.jsx("div",{style:{width:"90%",height:"1.5%",position:"absolute",top:"95%",fontSize:"1.1vw",left:"0"},children:"인터뷰이 | 이선민"})]}))}),y.jsx(Wh,{children:y.jsxs("text",{style:{position:"absolute",left:"1%"},children:["  ",">>"," 이진솔"]})}),y.jsx(eb,{children:Li.map((a,o)=>y.jsxs(ts,{onClick:()=>{t({title:a.title,name:a.name,time:a.time,youtubeid:a.youtubeid,id:a.id}),i(!0),window.scrollTo({top:0})},children:[y.jsx("img",{src:a.image,style:{top:"5%",width:"100%",position:"absolute"}}),y.jsxs(Jh,{children:[a.stitle.split("").map((u,c)=>y.jsx("div",{style:u===" "?{fontSize:"0.1vw",height:"0.5vh",display:"inline-block"}:{},children:u===" "?" ":u},c)),y.jsx(ns,{})]}),y.jsx(is,{children:a.title}),y.jsx("div",{style:{width:"90%",height:"1.5%",position:"absolute",top:"95%",fontSize:"1.1vw",left:"0"},children:"인터뷰이 | 이진솔"})]}))}),y.jsx(Wh,{children:y.jsxs("text",{style:{position:"absolute",left:"1%"},children:["  ",">>>"," 바바라"]})}),y.jsx(D5,{children:Qi.map((a,o)=>y.jsxs(ts,{onClick:()=>{t({title:a.title,name:a.name,time:a.time,youtubeid:a.youtubeid,id:a.id}),i(!0),window.scrollTo({top:0})},children:[y.jsx("img",{src:a.image,style:{top:"5%",width:"100%",position:"absolute"}}),y.jsxs(Jh,{style:{color:"white"},children:[a.stitle.split("").map((u,c)=>y.jsx("div",{style:u===" "?{fontSize:"0.1vw",height:"0.5vh",display:"inline-block"}:{},children:u===" "?" ":u},c)),y.jsx(ns,{style:{backgroundColor:"white"}})]}),y.jsx(is,{children:a.title}),y.jsx("div",{style:{width:"90%",height:"1.5%",position:"absolute",top:"95%",fontSize:"1.1vw",left:"0"},children:"인터뷰이 | 바바라"})]}))}),y.jsxs("div",{style:{width:"100%",aspectRatio:"1604/157",backgroundColor:"black",position:"relative"},children:[y.jsxs(tb,{children:["섭식장애 고백 프로젝트 식식",y.jsx("br",{}),"Eating Disorder Confession",y.jsx("br",{}),"Project Siksik",y.jsx("br",{}),"©Siksik, Inc. All Rights Reserved."]}),y.jsxs(ib,{children:["T. 010 8892 9473",y.jsx("br",{}),"Mail. jhss8892@naver.com"]})]})]})]})},C5=O.div`
width:708px;
height:auto;
position:relative;
background-color:white;
z-index:10;

`,Qh=O.div`
display: flex;
width: 708px;
height:50px;
border-top: 1px solid black;
border-bottom: 1px solid black;
align-items: center;
gap: 10px;
flex-shrink: 0;
background-color: #EFEFEF;
color: #000;
box-sizing: border-box;
leading-trim: both;
text-edge: cap;
font-family: Gothic A1;
font-size: 28px;
font-style: normal;
font-weight: 400;
line-height: 152%; /* 42.56px */
`,Zh=O.div`
margin-bottom:20px;
width:708px;
height:auto;
display:grid;
grid-template-columns: repeat(2, 1fr);
background-color:white;
`,k5=O.div`
width:100%;
aspect-ratio:1604/6117;
position:relative;
background-color:white;
z-index:10;
`,Wh=O.div`
display: flex;
width: 100%;
aspect-ratio: 1604 / 65;
border-top: 1px solid black;
border-bottom: 1px solid black;
align-items: center;
gap: 10px;
flex-shrink: 0;
background-color: #EFEFEF;
color: #000;
box-sizing: border-box;
leading-trim: both;
text-edge: cap;
font-family: Gothic A1;
font-size: 1.5vw;
font-style: normal;
font-weight: 400;
line-height: 152%; /* 42.56px */
`,eb=O.div`
width:98.753117207%;
margin-left:1.246882793%;
margin-top:1.246882793%;
display:grid;
aspect-ratio:1584/2084;
grid-template-columns: repeat(3, 1fr);
background-color:white;

`,D5=O.div`
width:98.753117207%;
margin-left:1.246882793%;
margin-top:1.246882793%;
display:grid;
aspect-ratio:1584/1565;
grid-template-columns: repeat(3, 1fr);
background-color:white;

`,tb=O.div`
width:20.1995%;
aspect-ratio:324/100;
padding:20px;
color:white;
font-family: Gothic A1;
font-size: 1vw;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 25.2px */
`,ib=O.div`
top:20px;
width:263.3277px;
height:50px;
left:23%;
color: #FFF;
font-family: Gothic A1;
font-size: 1vw;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 25.2px */
position:absolute;
`,ts=O.div`
display: flex;
width: 94%;
aspect-ratio:508/499;
justify-content: center;
background-color:white;
align-items: center;
flex-shrink: 0;
position:relative;
&:hover {
opacity:0.6;
cursor:pointer;
transition: opacity 0.5s ease;
}
`,is=O.div`
 display: -webkit-box;
  -webkit-line-clamp: 2; /* 최대 2줄 표시 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
width:90%;
height:auto;
position:absolute;
left:0;
top:75%;
color: #000;
leading-trim: both;
text-edge: cap;
font-family: Gothic A1;
font-size: 1.4vw;
font-style: normal;
font-weight: 400;
line-height: 135%; /* 29.7px */
letter-spacing: -1.1px;
`,Jh=O.div`
color: #574215;
width: 1.5vw;
text-align: center;
leading-trim: both;
text-edge: cap;
font-family: Gothic A1;
font-size: 1.4vw;
font-style: normal;
font-weight: 700;
line-height: 108%; /* 29.001px */
position:absolute;
padding-top:1%;
right:5%;
top:8%;
aspect-ratio:21.82/188;
overflow:hidden;
display: flex;
  flex-direction: column;
  align-items: center;     // 가로 가운데 정렬
`,ns=O.div`
width: 2px;
height: 100%;
background-color: #574215;
opacity:0.8;
margin-top:50%;
`,ep=O.div`
color: #574215;
width: 30px;
height:180px;
text-align: center;
leading-trim: both;
text-edge: cap;
font-family: Gothic A1;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 108%; /* 29.001px */
position:absolute;
padding-top:1%;
right:5%;
top:8%;
overflow:hidden;
display: flex;
  flex-direction: column;
  align-items: center;     // 가로 가운데 정렬
`,O5=({setisoverlay:i,setoverlayinfo:t})=>{const r=wr({query:"(max-width: 1024px)"});return zs(),y.jsxs(y.Fragment,{children:[r&&y.jsxs(M5,{children:[y.jsxs(z5,{children:["  ",">"," 이선민"]}),y.jsx(L5,{children:Xi.map((a,o)=>y.jsxs(ab,{onClick:()=>{t({title:a.title,name:a.name,time:a.time,youtubeid:a.youtubeid,id:a.id}),i(!0),window.scrollTo({top:0})},children:[y.jsx("img",{src:a.image,style:{top:"5%",width:"100%",position:"absolute"}}),y.jsxs(V5,{children:[a.stitle.split("").map((u,c)=>y.jsx("div",{style:u===" "?{fontSize:"10px",height:"5px",display:"inline-block"}:{},children:u===" "?" ":u},c)),y.jsx(ob,{})]}),y.jsx(sb,{style:{fontSize:"20px"},children:a.title}),y.jsx("div",{style:{width:"90%",height:"1.5%",position:"absolute",top:"95%",fontSize:"15px",left:"0"},children:"인터뷰이 | 이선민"})]}))}),y.jsxs("div",{style:{width:"708px",height:"100px",backgroundColor:"black",position:"relative"},children:[y.jsxs(nb,{style:{fontSize:"10px"},children:["섭식장애 고백 프로젝트 식식",y.jsx("br",{}),"Eating Disorder Confession",y.jsx("br",{}),"Project Siksik",y.jsx("br",{}),"©Siksik, Inc. All Rights Reserved."]}),y.jsxs(rb,{style:{fontSize:"10px"},children:["T. 010 8892 9473",y.jsx("br",{}),"Mail. jhss8892@naver.com"]})]})]}),!r&&y.jsxs(P5,{children:[y.jsx(U5,{children:y.jsxs("text",{style:{position:"absolute",left:"1%"},children:["  ",">"," 이선민"]})}),y.jsx(N5,{children:Xi.map((a,o)=>y.jsxs(ab,{onClick:()=>{t({title:a.title,name:a.name,time:a.time,youtubeid:a.youtubeid,id:a.id}),i(!0),window.scrollTo({top:0})},children:[y.jsx("img",{src:a.image,style:{top:"5%",width:"100%",position:"absolute"}}),y.jsxs(B5,{children:[a.stitle.split("").map((u,c)=>y.jsx("div",{style:u===" "?{fontSize:"0.1vw",height:"0.5vh",display:"inline-block"}:{},children:u===" "?" ":u},c)),y.jsx(ob,{})]}),y.jsx(sb,{children:a.title}),y.jsxs("div",{style:{width:"90%",height:"1.5%",position:"absolute",top:"95%",fontSize:"1.1vw",left:"0"},children:["인터뷰이 | ",a.name]})]}))}),y.jsxs("div",{style:{width:"100%",aspectRatio:"1604/157",backgroundColor:"black",position:"relative"},children:[y.jsxs(nb,{children:["섭식장애 고백 프로젝트 식식",y.jsx("br",{}),"Eating Disorder Confession",y.jsx("br",{}),"Project Siksik",y.jsx("br",{}),"©Siksik, Inc. All Rights Reserved."]}),y.jsxs(rb,{children:["T. 010 8892 9473",y.jsx("br",{}),"Mail. jhss8892@naver.com"]})]})]})]})},M5=O.div`
width:708px;
height:auto;
position:relative;
background-color:white;
z-index:10;

`,z5=O.div`
display: flex;
width: 708px;
height:50px;
border-top: 1px solid black;
border-bottom: 1px solid black;
align-items: center;
gap: 10px;
flex-shrink: 0;
background-color: #EFEFEF;
color: #000;
box-sizing: border-box;
leading-trim: both;
text-edge: cap;
font-family: Gothic A1;
font-size: 28px;
font-style: normal;
font-weight: 400;
line-height: 152%; /* 42.56px */
`,L5=O.div`
margin-bottom:20px;
width:708px;
height:auto;
display:grid;
grid-template-columns: repeat(2, 1fr);
background-color:white;
`,P5=O.div`
width:100%;
aspect-ratio: 1604 / 2326;
position:relative;
background-color:white;
z-index:10;
`,U5=O.div`
display: flex;
width: 100%;
aspect-ratio: 1604 / 65;
border-top: 1px solid black;
border-bottom: 1px solid black;
align-items: center;
gap: 10px;
flex-shrink: 0;
background-color: #EFEFEF;
color: #000;
box-sizing: border-box;
leading-trim: both;
text-edge: cap;
font-family: Gothic A1;
font-size: 1.5vw;
font-style: normal;
font-weight: 400;
line-height: 152%; /* 42.56px */
`,N5=O.div`
width:98.753117207%;
margin-left:1.246882793%;
margin-top:1.246882793%;
display:grid;
aspect-ratio:1584/2084;
grid-template-columns: repeat(3, 1fr);
background-color:white;

`,nb=O.div`
width:20.1995%;
aspect-ratio:324/100;
padding:20px;
color:white;
font-family: Gothic A1;
font-size: 1vw;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 25.2px */
`,rb=O.div`
top:20px;
width:263.3277px;
height:50px;
left:23%;
color: #FFF;
font-family: Gothic A1;
font-size: 1vw;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 25.2px */
position:absolute;
`,ab=O.div`
display: flex;
width: 94%;
aspect-ratio:508/499;
justify-content: center;
background-color:white;
align-items: center;
flex-shrink: 0;
position:relative;
&:hover {
opacity:0.6;
cursor:pointer;
transition: opacity 0.5s ease;
}
`,sb=O.div`
display: -webkit-box;
  -webkit-line-clamp: 2; /* 최대 2줄 표시 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
width:90%;
height:auto;
position:absolute;
left:0;
top:75%;
color: #000;
leading-trim: both;
text-edge: cap;
font-family: Gothic A1;
font-size: 1.4vw;
font-style: normal;
font-weight: 400;
line-height: 135%; /* 29.7px */
letter-spacing: -1.1px;
`,B5=O.div`
color: #574215;
width: 1.5vw;
text-align: center;
leading-trim: both;
text-edge: cap;
font-family: Gothic A1;
font-size: 1.4vw;
font-style: normal;
font-weight: 700;
line-height: 108%; /* 29.001px */
position:absolute;
padding-top:1%;
right:5%;
top:8%;
aspect-ratio:21.82/188;
overflow:hidden;
display: flex;
  flex-direction: column;
  align-items: center;     // 가로 가운데 정렬
`,ob=O.div`
width: 2px;
height: 100%;
background-color: #574215;
opacity:0.8;
margin-top:50%;
`,V5=O.div`
color: #574215;
width: 30px;
height:180px;
text-align: center;
leading-trim: both;
text-edge: cap;
font-family: Gothic A1;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 108%; /* 29.001px */
position:absolute;
padding-top:1%;
right:5%;
top:8%;
overflow:hidden;
display: flex;
  flex-direction: column;
  align-items: center;     // 가로 가운데 정렬
`,$5=({setisoverlay:i,setoverlayinfo:t})=>{const r=wr({query:"(max-width: 1024px)"});return y.jsxs(y.Fragment,{children:[r&&y.jsxs(H5,{children:[y.jsxs(q5,{children:["  ",">>"," 이진솔"]}),y.jsx(G5,{children:Li.map((a,o)=>y.jsxs(cb,{onClick:()=>{t({title:a.title,name:a.name,time:a.time,youtubeid:a.youtubeid,id:a.id}),i(!0),window.scrollTo({top:0})},children:[y.jsx("img",{src:a.image,style:{top:"5%",width:"100%",position:"absolute"}}),y.jsxs(X5,{children:[a.stitle.split("").map((u,c)=>y.jsx("div",{style:u===" "?{fontSize:"10px",height:"5px",display:"inline-block"}:{},children:u===" "?" ":u},c)),y.jsx(fb,{})]}),y.jsx(db,{style:{fontSize:"20px"},children:a.title}),y.jsx("div",{style:{width:"90%",height:"1.5%",position:"absolute",top:"95%",fontSize:"15px",left:"0"},children:"인터뷰이 | 이진솔"})]}))}),y.jsxs("div",{style:{width:"708px",height:"100px",backgroundColor:"black",position:"relative"},children:[y.jsxs(lb,{style:{fontSize:"10px"},children:["섭식장애 고백 프로젝트 식식",y.jsx("br",{}),"Eating Disorder Confession",y.jsx("br",{}),"Project Siksik",y.jsx("br",{}),"©Siksik, Inc. All Rights Reserved."]}),y.jsxs(ub,{style:{fontSize:"10px"},children:["T. 010 8892 9473",y.jsx("br",{}),"Mail. jhss8892@naver.com"]})]})]}),!r&&y.jsxs(F5,{children:[y.jsx(I5,{children:y.jsxs("text",{style:{position:"absolute",left:"1%"},children:["  ",">>"," 이진솔"]})}),y.jsx(Y5,{children:Li.map((a,o)=>y.jsxs(cb,{onClick:()=>{t({title:a.title,name:a.name,time:a.time,youtubeid:a.youtubeid,id:a.id}),i(!0),window.scrollTo({top:0})},children:[y.jsx("img",{src:a.image,style:{top:"5%",width:"100%",position:"absolute"}}),y.jsxs(K5,{children:[a.stitle.split("").map((u,c)=>y.jsx("div",{style:u===" "?{fontSize:"0.1vw",height:"0.5vh",display:"inline-block"}:{},children:u===" "?" ":u},c)),y.jsx(fb,{})]}),y.jsx(db,{children:a.title}),y.jsx("div",{style:{width:"90%",height:"1.5%",position:"absolute",top:"95%",fontSize:"1.1vw",left:"0"},children:"인터뷰이 | 이진솔"})]}))}),y.jsxs("div",{style:{width:"100%",aspectRatio:"1604/157",backgroundColor:"black",position:"relative"},children:[y.jsxs(lb,{children:["섭식장애 고백 프로젝트 식식",y.jsx("br",{}),"Eating Disorder Confession",y.jsx("br",{}),"Project Siksik",y.jsx("br",{}),"©Siksik, Inc. All Rights Reserved."]}),y.jsxs(ub,{children:["T. 010 8892 9473",y.jsx("br",{}),"Mail. jhss8892@naver.com"]})]})]})]})},H5=O.div`
width:708px;
height:auto;
position:relative;
background-color:white;
z-index:10;

`,q5=O.div`
display: flex;
width: 708px;
height:50px;
border-top: 1px solid black;
border-bottom: 1px solid black;
align-items: center;
gap: 10px;
flex-shrink: 0;
background-color: #EFEFEF;
color: #000;
box-sizing: border-box;
leading-trim: both;
text-edge: cap;
font-family: Gothic A1;
font-size: 28px;
font-style: normal;
font-weight: 400;
line-height: 152%; /* 42.56px */
`,G5=O.div`
margin-bottom:20px;
width:708px;
height:auto;
display:grid;
grid-template-columns: repeat(2, 1fr);
background-color:white;
`,F5=O.div`
width:100%;
aspect-ratio: 1604 / 2326;
position:relative;
background-color:white;
z-index:10;
`,I5=O.div`
display: flex;
width: 100%;
aspect-ratio: 1604 / 65;
border-top: 1px solid black;
border-bottom: 1px solid black;
align-items: center;
gap: 10px;
flex-shrink: 0;
background-color: #EFEFEF;
color: #000;
box-sizing: border-box;
leading-trim: both;
text-edge: cap;
font-family: Gothic A1;
font-size: 1.5vw;
font-style: normal;
font-weight: 400;
line-height: 152%; /* 42.56px */
`,Y5=O.div`
width:98.753117207%;
margin-left:1.246882793%;
margin-top:1.246882793%;
display:grid;
aspect-ratio:1584/2084;
grid-template-columns: repeat(3, 1fr);
background-color:white;

`,lb=O.div`
width:20.1995%;
aspect-ratio:324/100;
padding:20px;
color:white;
font-family: Gothic A1;
font-size: 1vw;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 25.2px */
`,ub=O.div`
top:20px;
width:263.3277px;
height:50px;
left:23%;
color: #FFF;
font-family: Gothic A1;
font-size: 1vw;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 25.2px */
position:absolute;
`,cb=O.div`
display: flex;
width: 94%;
aspect-ratio:508/499;
justify-content: center;
background-color:white;
align-items: center;
flex-shrink: 0;
position:relative;
&:hover {
opacity:0.6;
cursor:pointer;
transition: opacity 0.5s ease;
}
`,db=O.div`
display: -webkit-box;
  -webkit-line-clamp: 2; /* 최대 2줄 표시 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
width:90%;
left:0;
height:auto;
position:absolute;
top:75%;
color: #000;
leading-trim: both;
text-edge: cap;
font-family: Gothic A1;
font-size: 1.4vw;
font-style: normal;
font-weight: 400;
line-height: 135%; /* 29.7px */
letter-spacing: -1.1px;
`,K5=O.div`
color: #574215;
width: 1.5vw;
text-align: center;
leading-trim: both;
text-edge: cap;
font-family: Gothic A1;
font-size: 1.4vw;
font-style: normal;
font-weight: 700;
line-height: 108%; /* 29.001px */
position:absolute;
padding-top:1%;
right:5%;
top:8%;
aspect-ratio:21.82/188;
overflow:hidden;
display: flex;
  flex-direction: column;
  align-items: center;     // 가로 가운데 정렬
`,fb=O.div`
width: 2px;
height: 100%;
background-color: #574215;
opacity:0.8;
margin-top:50%;
`,X5=O.div`
color: #574215;
width: 30px;
height:180px;
text-align: center;
leading-trim: both;
text-edge: cap;
font-family: Gothic A1;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 108%; /* 29.001px */
position:absolute;
padding-top:1%;
right:5%;
top:8%;
overflow:hidden;
display: flex;
  flex-direction: column;
  align-items: center;     // 가로 가운데 정렬
`,Q5=({setisoverlay:i,setoverlayinfo:t})=>{const r=wr({query:"(max-width: 1024px)"});return y.jsxs(y.Fragment,{children:[r&&y.jsxs(Z5,{children:[y.jsx(W5,{children:y.jsxs("text",{children:["  ",">>>"," 바바라"]})}),y.jsx(J5,{children:Qi.map((a,o)=>y.jsxs(mb,{onClick:()=>{t({title:a.title,name:a.name,time:a.time,youtubeid:a.youtubeid,id:a.id}),i(!0),window.scrollTo({top:0})},children:[y.jsx("img",{src:a.image,style:{top:"5%",width:"100%",position:"absolute"}}),y.jsxs(rO,{style:{color:"white"},children:[a.stitle.split("").map((u,c)=>y.jsx("div",{style:u===" "?{fontSize:"10px",height:"5px",display:"inline-block"}:{},children:u===" "?" ":u},c)),y.jsx(yb,{})]}),y.jsx(gb,{style:{fontSize:"20px"},children:a.title}),y.jsx("div",{style:{width:"90%",height:"1.5%",position:"absolute",top:"95%",fontSize:"15px",left:"0"},children:"인터뷰이 | 바바라"})]}))}),y.jsxs("div",{style:{width:"708px",height:"100px",backgroundColor:"black",position:"relative"},children:[y.jsxs(hb,{style:{fontSize:"10px"},children:["섭식장애 고백 프로젝트 식식",y.jsx("br",{}),"Eating Disorder Confession",y.jsx("br",{}),"Project Siksik",y.jsx("br",{}),"©Siksik, Inc. All Rights Reserved."]}),y.jsxs(pb,{style:{fontSize:"10px"},children:["T. 010 8892 9473",y.jsx("br",{}),"Mail. jhss8892@naver.com"]})]})]}),!r&&y.jsxs(eO,{children:[y.jsx(tO,{children:y.jsxs("text",{style:{position:"absolute",left:"1%"},children:["  ",">>>"," 바바라"]})}),y.jsx(iO,{children:Qi.map((a,o)=>y.jsxs(mb,{onClick:()=>{t({title:a.title,name:a.name,time:a.time,youtubeid:a.youtubeid,id:a.id}),i(!0),window.scrollTo({top:0})},children:[y.jsx("img",{src:a.image,style:{top:"5%",width:"100%",position:"absolute"}}),y.jsxs(nO,{style:{color:"white"},children:[a.stitle.split("").map((u,c)=>y.jsx("div",{style:u===" "?{fontSize:"0.1vw",height:"0.5vh",display:"inline-block"}:{},children:u===" "?" ":u},c)),y.jsx(yb,{})]}),y.jsx(gb,{children:a.title}),y.jsx("div",{style:{width:"90%",height:"1.5%",position:"absolute",top:"95%",fontSize:"1.1vw",left:"0"},children:"인터뷰이 | 바바라"})]}))}),y.jsxs("div",{style:{width:"100%",aspectRatio:"1604/157",backgroundColor:"black",position:"relative"},children:[y.jsxs(hb,{children:["섭식장애 고백 프로젝트 식식",y.jsx("br",{}),"Eating Disorder Confession",y.jsx("br",{}),"Project Siksik",y.jsx("br",{}),"©Siksik, Inc. All Rights Reserved."]}),y.jsxs(pb,{children:["T. 010 8892 9473",y.jsx("br",{}),"Mail. jhss8892@naver.com"]})]})]})]})},Z5=O.div`
width:708px;
height:auto;
position:relative;
background-color:white;
z-index:10;

`,W5=O.div`
display: flex;
width: 708px;
height:50px;
border-top: 1px solid black;
border-bottom: 1px solid black;
align-items: center;
gap: 10px;
flex-shrink: 0;
background-color: #EFEFEF;
color: #000;
box-sizing: border-box;
leading-trim: both;
text-edge: cap;
font-family: Gothic A1;
font-size: 28px;
font-style: normal;
font-weight: 400;
line-height: 152%; /* 42.56px */
`,J5=O.div`
margin-bottom:20px;
width:708px;
height:auto;
display:grid;
grid-template-columns: repeat(2, 1fr);
background-color:white;
`,eO=O.div`
width:100%;
aspect-ratio: 1604 / 1807;
position:relative;
background-color:white;
z-index:10;
`,tO=O.div`
display: flex;
width: 100%;
aspect-ratio: 1604 / 65;
border-top: 1px solid black;
border-bottom: 1px solid black;
align-items: center;
gap: 10px;
flex-shrink: 0;
background-color: #EFEFEF;
color: #000;
box-sizing: border-box;
leading-trim: both;
text-edge: cap;
font-family: Gothic A1;
font-size: 1.5vw;
font-style: normal;
font-weight: 400;
line-height: 152%; /* 42.56px */
`,iO=O.div`
width:98.753117207%;
margin-left:1.246882793%;
margin-top:1.246882793%;
display:grid;
aspect-ratio:1584/1565;
grid-template-columns: repeat(3, 1fr);
background-color:white;

`,hb=O.div`
width:20.1995%;
aspect-ratio:324/100;
padding:20px;
color:white;
font-family: Gothic A1;
font-size: 1vw;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 25.2px */
`,pb=O.div`
top:20px;
width:263.3277px;
height:50px;
left:23%;
color: #FFF;
font-family: Gothic A1;
font-size: 1vw;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 25.2px */
position:absolute;
`,mb=O.div`
display: flex;
width: 94%;
aspect-ratio:508/499;
justify-content: center;
background-color:white;
align-items: center;
flex-shrink: 0;
position:relative;
&:hover {
opacity:0.6;
cursor:pointer;
transition: opacity 0.5s ease;
}
`,gb=O.div`
 display: -webkit-box;
  -webkit-line-clamp: 2; /* 최대 2줄 표시 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
width:90%;
height:auto;
position:absolute;
left:0;
top:75%;
color: #000;
leading-trim: both;
text-edge: cap;
font-family: Gothic A1;
font-size: 1.4vw;
font-style: normal;
font-weight: 400;
line-height: 135%; /* 29.7px */
letter-spacing: -1.1px;
`,nO=O.div`
color: #574215;
width: 1.5vw;
text-align: center;
leading-trim: both;
text-edge: cap;
font-family: Gothic A1;
font-size: 1.4vw;
font-style: normal;
font-weight: 700;
line-height: 108%; /* 29.001px */
position:absolute;
padding-top:1%;
right:5%;
top:8%;
aspect-ratio:21.82/188;
overflow:hidden;
display: flex;
  flex-direction: column;
  align-items: center;     // 가로 가운데 정렬
`,yb=O.div`
width: 2px;
height: 100%;
background-color: white;
opacity:0.8;
margin-top:50%;
`,rO=O.div`
color: #574215;
width: 30px;
height:180px;
text-align: center;
leading-trim: both;
text-edge: cap;
font-family: Gothic A1;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 108%; /* 29.001px */
position:absolute;
padding-top:1%;
right:5%;
top:8%;
overflow:hidden;
display: flex;
  flex-direction: column;
  align-items: center;     // 가로 가운데 정렬
`,aO=({setisoverlay:i,setoverlayinfo:t})=>y.jsxs(sO,{children:[y.jsx(oO,{children:y.jsxs("text",{style:{position:"absolute",left:"1%"},children:["  ",">"," 이선민"]})}),y.jsx(lO,{children:Xi.map((r,a)=>y.jsx(uO,{onClick:()=>{t({title:r.title,name:r.name,time:r.time,youtubeid:r.youtubeid,id:r.id}),i(!0),window.scrollTo({top:0})},children:y.jsx(cO,{children:r.title})}))}),y.jsxs(dO,{children:[y.jsxs(fO,{children:["섭식장애 고백 프로젝트 식식",y.jsx("br",{}),"Eating Disorder Confession",y.jsx("br",{}),"Project Siksik",y.jsx("br",{}),"©Siksik, Inc. All Rights Reserved."]}),y.jsxs(hO,{children:["T. 010 8892 9473",y.jsx("br",{}),"Mail. jhss8892@naver.com"]})]})]}),sO=O.div`
width:1604px;
height:1023px;
position:relative;
background-color:white;
z-index:10;
`,oO=O.div`
display: flex;
width: 1604px;
height: 65px;
border-top: 1px solid black;
border-bottom: 1px solid black;
align-items: center;
gap: 10px;
flex-shrink: 0;
background-color: #EFEFEF;
color: #000;
box-sizing: border-box;
leading-trim: both;
text-edge: cap;
font-family: Gothic A1;
font-size: 28px;
font-style: normal;
font-weight: 400;
line-height: 152%; /* 42.56px */
`,lO=O.div`
width:1604px;
height:818px;
`,uO=O.div`
display:flex;
align-items:center;
width:1604px;
height:63px;
box-sizing: border-box;
border-bottom: 1.5px solid black;
background-color:white;
flex-shrink: 0;
position:relative;
&:hover {
background-color:yellow;
cursor:pointer;
}
`,cO=O.div`
color: #000;
leading-trim: both;
text-edge: cap;
font-family: Gothic A1;
font-size: 26px;
font-style: normal;
font-weight: 500;
line-height: 142%; /* 36.92px */
position:absolute;
left:20px;
`,dO=O.div`
width:1604px;
height:140px;
background-color:black;
position:relative;
`,fO=O.div`
width:324px;
height:100px;
padding:20px;
color:white;
font-family: Gothic A1;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 140%;
position:absolute;
left:20px;
`,hO=O.div`
top:20px;
width:263.3277px;
height:50px;
left:337.42px;
color: #FFF;
font-family: Gothic A1;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 25.2px */
position:absolute;
`,pO=({setisoverlay:i,setoverlayinfo:t})=>y.jsxs(mO,{children:[y.jsx(gO,{children:y.jsxs("text",{style:{position:"absolute",left:"1%"},children:["  ",">>"," 이진솔"]})}),y.jsx(yO,{children:Li.map((r,a)=>y.jsx(vO,{onClick:()=>{t({title:r.title,name:r.name,time:r.time,youtubeid:r.youtubeid,id:r.id}),i(!0),window.scrollTo({top:0})},children:y.jsx(xO,{children:r.title})}))}),y.jsxs(bO,{children:[y.jsxs(wO,{children:["섭식장애 고백 프로젝트 식식",y.jsx("br",{}),"Eating Disorder Confession",y.jsx("br",{}),"Project Siksik",y.jsx("br",{}),"©Siksik, Inc. All Rights Reserved."]}),y.jsxs(SO,{children:["T. 010 8892 9473",y.jsx("br",{}),"Mail. jhss8892@naver.com"]})]})]}),mO=O.div`
width:1604px;
height:1023px;
position:relative;
background-color:white;
z-index:10;
`,gO=O.div`
display: flex;
width: 1604px;
height: 65px;
border-top: 1px solid black;
border-bottom: 1px solid black;
align-items: center;
gap: 10px;
flex-shrink: 0;
background-color: #EFEFEF;
color: #000;
box-sizing: border-box;
leading-trim: both;
text-edge: cap;
font-family: Gothic A1;
font-size: 28px;
font-style: normal;
font-weight: 400;
line-height: 152%; /* 42.56px */
`,yO=O.div`
width:1604px;
height:818px;
`,vO=O.div`
display:flex;
align-items:center;
width:1604px;
height:63px;
box-sizing: border-box;
border-bottom: 1.5px solid black;
background-color:white;
flex-shrink: 0;
position:relative;
&:hover {
background-color:yellow;
cursor:pointer;
}
`,xO=O.div`
color: #000;
leading-trim: both;
text-edge: cap;
font-family: Gothic A1;
font-size: 26px;
font-style: normal;
font-weight: 500;
line-height: 142%; /* 36.92px */
position:absolute;
left:20px;
`,bO=O.div`
width:1604px;
height:140px;
background-color:black;
position:relative;
`,wO=O.div`
width:324px;
height:100px;
padding:20px;
color:white;
font-family: Gothic A1;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 140%;
position:absolute;
left:20px;
`,SO=O.div`
top:20px;
width:263.3277px;
height:50px;
left:337.42px;
color: #FFF;
font-family: Gothic A1;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 25.2px */
position:absolute;
`,AO=({setisoverlay:i,setoverlayinfo:t})=>y.jsxs(_O,{children:[y.jsx(EO,{children:y.jsxs("text",{style:{position:"absolute",left:"1%"},children:["  ",">>>"," 바바라"]})}),y.jsx(TO,{children:Qi.map((r,a)=>y.jsx(jO,{onClick:()=>{t({title:r.title,name:r.name,time:r.time,youtubeid:r.youtubeid,id:r.id}),i(!0),window.scrollTo({top:0})},children:y.jsx(RO,{children:r.title})}))}),y.jsxs(CO,{children:[y.jsxs(kO,{children:["섭식장애 고백 프로젝트 식식",y.jsx("br",{}),"Eating Disorder Confession",y.jsx("br",{}),"Project Siksik",y.jsx("br",{}),"©Siksik, Inc. All Rights Reserved."]}),y.jsxs(DO,{children:["T. 010 8892 9473",y.jsx("br",{}),"Mail. jhss8892@naver.com"]})]})]}),_O=O.div`
width:1604px;
height:1023px;
position:relative;
background-color:white;
z-index:10;
`,EO=O.div`
display: flex;
width: 1604px;
height: 65px;
border-top: 1px solid black;
border-bottom: 1px solid black;
align-items: center;
gap: 10px;
flex-shrink: 0;
background-color: #EFEFEF;
color: #000;
box-sizing: border-box;
leading-trim: both;
text-edge: cap;
font-family: Gothic A1;
font-size: 28px;
font-style: normal;
font-weight: 400;
line-height: 152%; /* 42.56px */
`,TO=O.div`
width:1604px;
height:818px;
`,jO=O.div`
display:flex;
align-items:center;
width:1604px;
height:63px;
box-sizing: border-box;
border-bottom: 1.5px solid black;
background-color:white;
flex-shrink: 0;
position:relative;
&:hover {
background-color:yellow;
cursor:pointer;
}
`,RO=O.div`
color: #000;
leading-trim: both;
text-edge: cap;
font-family: Gothic A1;
font-size: 26px;
font-style: normal;
font-weight: 500;
line-height: 142%; /* 36.92px */
position:absolute;
left:20px;
`,CO=O.div`
width:1604px;
height:140px;
background-color:black;
position:relative;
`,kO=O.div`
width:324px;
height:100px;
padding:20px;
color:white;
font-family: Gothic A1;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 140%;
position:absolute;
left:20px;
`,DO=O.div`
top:20px;
width:263.3277px;
height:50px;
left:337.42px;
color: #FFF;
font-family: Gothic A1;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 25.2px */
position:absolute;
`,OO=({setisoverlay:i,setoverlayinfo:t})=>y.jsxs(MO,{children:[y.jsx(tp,{style:{borderTop:"1px solid black"},children:y.jsxs("text",{style:{position:"absolute",left:"1%"},children:["  ",">"," 이선민"]})}),Xi.map((r,a)=>y.jsx(ip,{onClick:()=>{t({title:r.title,name:r.name,time:r.time,youtubeid:r.youtubeid,id:r.id}),i(!0),window.scrollTo({top:0})},children:y.jsx(np,{children:r.title})})),y.jsx(tp,{children:y.jsxs("text",{style:{position:"absolute",left:"1%"},children:["  ",">>"," 이진솔"]})}),Li.map((r,a)=>y.jsx(ip,{onClick:()=>{t({title:r.title,name:r.name,time:r.time,youtubeid:r.youtubeid,id:r.id}),i(!0),window.scrollTo({top:0})},children:y.jsx(np,{children:r.title})})),y.jsx(tp,{children:y.jsxs("text",{style:{position:"absolute",left:"1%"},children:["  ",">>>"," 바바라"]})}),Qi.map((r,a)=>y.jsx(ip,{onClick:()=>{t({title:r.title,name:r.name,time:r.time,youtubeid:r.youtubeid,id:r.id}),i(!0),window.scrollTo({top:0})},children:y.jsx(np,{children:r.title})})),y.jsxs(zO,{children:[y.jsxs(LO,{children:["섭식장애 고백 프로젝트 식식",y.jsx("br",{}),"Eating Disorder Confession",y.jsx("br",{}),"Project Siksik",y.jsx("br",{}),"©Siksik, Inc. All Rights Reserved."]}),y.jsxs(PO,{children:["T. 010 8892 9473",y.jsx("br",{}),"Mail. jhss8892@naver.com"]})]})]}),MO=O.div`
width:1604px;
height:2225px;
position:relative;
background-color:white;
z-index:10;
`,tp=O.div`
display: flex;
width: 1604px;
height: 65px;
border-bottom: 1px solid black;
align-items: center;
gap: 10px;
flex-shrink: 0;
background-color: #EFEFEF;
color: #000;
box-sizing: border-box;
leading-trim: both;
text-edge: cap;
font-family: Gothic A1;
font-size: 28px;
font-style: normal;
font-weight: 400;
line-height: 152%; /* 42.56px */
`;O.div`
width:1604px;
height:818px;
`;const ip=O.div`
display:flex;
align-items:center;
width:1604px;
height:63px;
box-sizing: border-box;
border-bottom: 1.5px solid black;
background-color:white;
flex-shrink: 0;
position:relative;
&:hover {
background-color:yellow;
cursor:pointer;
}
`,np=O.div`
color: #000;
leading-trim: both;
text-edge: cap;
font-family: Gothic A1;
font-size: 26px;
font-style: normal;
font-weight: 500;
line-height: 142%; /* 36.92px */
position:absolute;
left:20px;
`,zO=O.div`
width:1604px;
height:140px;
background-color:black;
position:relative;
`,LO=O.div`
width:324px;
height:100px;
padding:20px;
color:white;
font-family: Gothic A1;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 140%;
position:absolute;
left:20px;
`,PO=O.div`
top:20px;
width:263.3277px;
height:50px;
left:337.42px;
color: #FFF;
font-family: Gothic A1;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 25.2px */
position:absolute;
`,UO="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA9CAYAAAD1VdrqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAG5SURBVGhD7ZvRkcIgEIZ/rwI7CHaQDoIVBDugk9iBdkDsQEtIB1hBKIEOuAeV8za5cW6Cdw+73wwPLjjMBwwwy2SVUkpgyAcNcGH1mPG+7xFCoPXF2e/3NIQYI47HIw0Xp65rGGNuP9KdpmkSgLeXOcZxnLR7R7HW5j7ZLvWJuNYaKaWipes62s2POOcm/19aqqqi3UzFuSDi3BBxbog4N0ScGyLODRHnhohzQ8S5IeLcyOllrTWGYUBd1zgcDrTdIk6nE/q+BwDcu/tGCAGbzQa4p5+bpqFNFrHb7RBjhLUWzrlb8JFulfQyE/JS994jxkjri6O1piHEGOG9p+HiKKWglAKexbnBdqmLODfYiufNzRjzJzvr3Bt8CGF2ty+NMebrHf5xoHO7wEyurEqp4qPvvc+rae70fL6yaq3zWVuK8/n8+sqqtc6jUoqu6/Koz/E84845Wr2YqqomM852cxNxbog4N0ScGyLODRHnhohzQ8S5IeLcEHFuTJKN6/UabdvSdou4Xq+/SjbOfUOyhMvl8jrZ+O4yx7+ml621GIaBjFV5xnGkIYQQsN1uabg4bdvmBwW2z8SffLxqD/ERoo8AAAAASUVORK5CYII=",NO="data:image/svg+xml,%3csvg%20width='33'%20height='27'%20viewBox='0%200%2033%2027'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group%201000002502'%3e%3cg%20id='Group%201000002501'%3e%3cpath%20id='Vector%20860'%20d='M5.4375%201.5H33'%20stroke='black'%20stroke-width='1.35'/%3e%3cpath%20id='Vector%20861'%20d='M5.4375%2013.5H33'%20stroke='black'%20stroke-width='1.35'/%3e%3cpath%20id='Vector%20862'%20d='M5.4375%2025.5H33'%20stroke='black'%20stroke-width='1.35'/%3e%3c/g%3e%3cg%20id='Group%201000002500'%3e%3cpath%20id='Vector%20863'%20d='M1.5%201.5H1.4999'%20stroke='black'%20stroke-width='1.35'%20stroke-linecap='round'/%3e%3cpath%20id='Vector%20864'%20d='M1.5%2013.5H1.4999'%20stroke='black'%20stroke-width='1.35'%20stroke-linecap='round'/%3e%3cpath%20id='Vector%20865'%20d='M1.5%2025.5H1.4999'%20stroke='black'%20stroke-width='1.35'%20stroke-linecap='round'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",BO="data:image/svg+xml,%3csvg%20width='36'%20height='21'%20viewBox='0%200%2036%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group%201000002491'%3e%3cpath%20id='Vector%20846'%20d='M33.5%207.13795H2L8.37079%201.12109'%20stroke='%2325251C'%20stroke-width='1.35'/%3e%3cpath%20id='Vector%20847'%20d='M2%2013.8621H33.5L27.1292%2019.8789'%20stroke='%2325251C'%20stroke-width='1.35'/%3e%3c/g%3e%3c/svg%3e",VO="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADiSURBVHgB7ZhhDoMgDIXLsoNwY7gh3KRbTTBk2VTaLnkxfX/0B7x+VijVRERMwHoQuJ7jhhkrkSml7QqfwQC0KgCtug9grZV672SVeIjXiqQA8pFKKduYnDO31lgrmSse4iWeRxpclwBnYy3kqscSoCaAde4yoDaQ9sFUgKsBLVlXA14NbF23JsAzAI9NZQb8BeIB5wb4DdIDzhXwE9IDbgaEP4tF933F0JsEusxAF2roow66WYButzwW/V8bVviWf0Ba4GbI90fT6bjBlXbK+HmkUwBaFYBWwQPuZQZV8Bl8AY2UTPJX2I2yAAAAAElFTkSuQmCC",$O="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='_레이어_1'%20data-name='레이어_1'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20viewBox='0%200%2040%2040'%3e%3c!--%20Generator:%20Adobe%20Illustrator%2029.6.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%202.1.1%20Build%20207)%20--%3e%3cpath%20d='M20,40C9,40,0,31,0,20S9,0,20,0s20,9,20,20-9,20-20,20ZM20,2C10.1,2,2,10.1,2,20s8.1,18,18,18,18-8.1,18-18S29.9,2,20,2Z'/%3e%3cpolygon%20points='23.8%2030.7%2012%2020%2023.8%209.3%2025.2%2010.7%2015%2020%2025.2%2029.3%2023.8%2030.7'/%3e%3c/svg%3e",HO="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='_레이어_1'%20data-name='레이어_1'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20viewBox='0%200%2040%2040'%3e%3c!--%20Generator:%20Adobe%20Illustrator%2029.6.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%202.1.1%20Build%20207)%20--%3e%3cpath%20d='M20,40C9,40,0,31,0,20S9,0,20,0s20,9,20,20-9,20-20,20ZM20,2C10.1,2,2,10.1,2,20s8.1,18,18,18,18-8.1,18-18S29.9,2,20,2Z'/%3e%3cpolygon%20points='16.2%2030.7%2014.8%2029.3%2025%2020%2014.8%2010.7%2016.2%209.3%2028%2020%2016.2%2030.7'/%3e%3c/svg%3e",qO="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='_레이어_1'%20data-name='레이어_1'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20viewBox='0%200%2040%2040'%3e%3c!--%20Generator:%20Adobe%20Illustrator%2029.6.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%202.1.1%20Build%20207)%20--%3e%3cdefs%3e%3cstyle%3e%20.st0%20{%20fill:%20%23cecece;%20}%20%3c/style%3e%3c/defs%3e%3cpath%20class='st0'%20d='M20,39h0c10.5,0,19-8.5,19-19h0C39,9.5,30.5,1,20,1h0C9.5,1,1,9.5,1,20h0c0,10.5,8.5,19,19,19Z'/%3e%3cpath%20d='M20,40C9,40,0,31,0,20S9,0,20,0s20,9,20,20-9,20-20,20ZM20,2C10.1,2,2,10.1,2,20s8.1,18,18,18,18-8.1,18-18S29.9,2,20,2Z'/%3e%3cpolygon%20points='23.8%2030.7%2012%2020%2023.8%209.3%2025.2%2010.7%2015%2020%2025.2%2029.3%2023.8%2030.7'/%3e%3c/svg%3e",GO="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='_레이어_1'%20data-name='레이어_1'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20viewBox='0%200%2040%2040'%3e%3c!--%20Generator:%20Adobe%20Illustrator%2029.6.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%202.1.1%20Build%20207)%20--%3e%3cdefs%3e%3cstyle%3e%20.st0%20{%20fill:%20%23cecece;%20}%20%3c/style%3e%3c/defs%3e%3cpath%20class='st0'%20d='M20,1h0c10.5,0,19,8.5,19,19h0c0,10.5-8.5,19-19,19h0C9.5,39,1,30.5,1,20h0C1,9.5,9.5,1,20,1Z'/%3e%3cpath%20d='M20,40C9,40,0,31,0,20S9,0,20,0s20,9,20,20-9,20-20,20ZM20,2C10.1,2,2,10.1,2,20s8.1,18,18,18,18-8.1,18-18S29.9,2,20,2Z'/%3e%3cpolygon%20points='16.2%2030.7%2014.8%2029.3%2025%2020%2014.8%2010.7%2016.2%209.3%2028%2020%2016.2%2030.7'/%3e%3c/svg%3e",FO=()=>{const i={height:"470px",width:"776px",playerVars:{autoplay:0}},t={height:"693.42px",width:"1200px",playerVars:{autoplay:0}},[r,a]=_.useState({title:"",name:"",youtubeid:"",title_s:"",time:"",id:""}),o=wr({query:"(max-width: 1024px)"}),u=wr({query:"(min-width: 1025px) and (max-width: 1440px)"}),c=wr({query:"(min-width: 1441px)"}),h=NO,f=UO,p=BO,g=VO,v=$O,x=HO,w=qO,S=GO,[T,E]=_.useState(v),[j,D]=_.useState(x),[M,V]=_.useState([1,0,0,0]),[P,R]=_.useState(0),[F,I]=_.useState("main"),[G,te]=_.useState("grid"),[he,Ae]=_.useState(!1),Ne=J=>{const ae=[0,0,0,0];ae[J]=1,console.log(ae),V(ae)},Fe=()=>{M[0]?r.name==="바바라"?r.id===0?a(Li[10]):a(Qi[r.id-1]):r.name==="이진솔"?r.id===0?a(Xi[10]):a(Li[r.id-1]):r.id!=0&&a(Xi[r.id-1]):M[1]?r.id!=0&&a(Xi[r.id-1]):M[2]?r.id!=0&&a(Li[r.id-1]):r.id!=0&&a(Qi[r.id-1])},qe=()=>{M[0]?r.name==="이선민"?r.id===10?a(Li[0]):a(Xi[r.id+1]):r.name==="이진솔"?r.id===10?a(Qi[0]):a(Li[r.id+1]):r.id!=7&&a(Qi[r.id+1]):M[1]?r.id!=10&&a(Xi[r.id+1]):M[2]?r.id!=10&&a(Li[r.id+1]):r.id!=7&&a(Qi[r.id+1])};return y.jsxs(y.Fragment,{children:[y.jsxs(iM,{children:[y.jsx(vb,{onClick:()=>{I("main"),navigate("/main/two",{replace:!0})},style:{borderTop:"none"},children:"고백한 것들"}),y.jsx(vb,{onClick:()=>{R(!P)},children:"인터뷰이"}),y.jsx(at,{children:P&&y.jsxs(ke.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3,ease:"easeInOut"},className:"absolute mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg",children:[y.jsx(rp,{onClick:()=>{I(he?"main":"leesunmin")},children:"이선민"}),y.jsx(rp,{onClick:()=>{I(he?"main":"leejinsol")},children:"이진솔"}),y.jsx(rp,{onClick:()=>{I(he?"main":"babara")},children:"바바라"})]})})]}),!he&&y.jsxs(tM,{isMobile:o,children:[F==="main"&&y.jsxs(nM,{children:[y.jsx(rc,{style:{left:"20px"},color:M[0],onClick:()=>{Ne(0)},children:"모두들"}),y.jsx(rc,{style:{left:"160px"},color:M[1],onClick:()=>{Ne(1)},children:"이선민"}),y.jsx(rc,{style:{left:"300px"},color:M[2],onClick:()=>{Ne(2)},children:"이진솔"}),y.jsx(rc,{style:{left:"440px"},color:M[3],onClick:()=>{Ne(3)},children:"바바라"}),y.jsxs(rM,{isMobile:o,onClick:()=>{te(G==="grid"?"list":"grid")},children:[y.jsx("img",{src:p}),G==="grid"?y.jsx("img",{src:h,style:{width:"31px",height:"24px"}}):y.jsx("img",{src:f,style:{width:"31px",height:"29px"}})]})]}),M[0]===1&&G==="grid"&&F==="main"&&y.jsx(R5,{setisoverlay:Ae,setoverlayinfo:a}),M[0]===1&&G==="list"&&F==="main"&&y.jsx(OO,{setisoverlay:Ae,setoverlayinfo:a}),M[1]===1&&G==="grid"&&F==="main"&&y.jsx(O5,{setisoverlay:Ae,setoverlayinfo:a}),M[1]===1&&G==="list"&&F==="main"&&y.jsx(aO,{setisoverlay:Ae,setoverlayinfo:a}),M[2]===1&&G==="grid"&&F==="main"&&y.jsx($5,{setisoverlay:Ae,setoverlayinfo:a}),M[2]===1&&G==="list"&&F==="main"&&y.jsx(pO,{setisoverlay:Ae,setoverlayinfo:a}),M[3]===1&&G==="grid"&&F==="main"&&y.jsx(Q5,{setisoverlay:Ae,setoverlayinfo:a}),M[3]===1&&G==="list"&&F==="main"&&y.jsx(AO,{setisoverlay:Ae,setoverlayinfo:a}),F==="leesunmin"&&y.jsx(UD,{setpagestate:I,setbtnclick:V}),F==="leejinsol"&&y.jsx(WD,{setpagestate:I,setbtnclick:V}),F==="babara"&&y.jsx(m5,{setpagestate:I,setbtnclick:V})]}),he&&o&&y.jsxs(WO,{children:[y.jsx("img",{src:g,style:{position:"absolute",left:"860px",top:"119px",zIndex:"999"},onClick:()=>{Ae(!1)}}),y.jsxs(eM,{children:[y.jsx("div",{style:{width:"740px",height:"65px",textAlign:"left",fontSize:"40px",fontWeight:"600",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:r.title}),y.jsxs("div",{style:{width:"776px",height:"35px",display:"flex",alignItems:"center",fontSize:"20px"},children:["인터뷰이 | ",r.name,"    ",r.time]})]}),y.jsx(JO,{children:y.jsx(xc,{opts:i,videoId:r.youtubeid})}),y.jsx(rs,{onClick:()=>{Fe()},style:{left:"816px",top:"708px",position:"absolute"},children:y.jsx("img",{src:T,alt:"Hover Image",onMouseEnter:()=>E(w),onMouseLeave:()=>E(v)})}),y.jsx(rs,{onClick:()=>{qe()},style:{left:"860px",top:"708px",position:"absolute"},children:y.jsx("img",{src:j,alt:"Hover Image2",onMouseEnter:()=>D(S),onMouseLeave:()=>D(x)})})]}),he&&u&&y.jsxs(XO,{children:[y.jsx("img",{src:g,style:{position:"absolute",left:"1284px",top:"119px",zIndex:"999"},onClick:()=>{Ae(!1)}}),y.jsxs(QO,{children:[y.jsx("div",{style:{width:"1160px",height:"65px",textAlign:"left",fontSize:"40px",fontWeight:"600",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:r.title}),y.jsxs("div",{style:{width:"1200px",height:"35px",display:"flex",alignItems:"center",fontSize:"20px"},children:["인터뷰이 | ",r.name,"    ",r.time]})]}),y.jsx(ZO,{children:y.jsx(xc,{opts:t,videoId:r.youtubeid})}),y.jsx(rs,{onClick:()=>{Fe()},style:{left:"1242px",top:"920px",position:"absolute"},children:y.jsx("img",{src:T,alt:"Hover Image",onMouseEnter:()=>E(w),onMouseLeave:()=>E(v)})}),y.jsx(rs,{onClick:()=>{qe()},style:{left:"1286px",top:"920px",position:"absolute"},children:y.jsx("img",{src:j,alt:"Hover Image2",onMouseEnter:()=>D(S),onMouseLeave:()=>D(x)})})]}),he&&c&&y.jsxs(IO,{children:[y.jsx("img",{src:g,style:{position:"absolute",left:"1522px",top:"119px",zIndex:"999"},onClick:()=>{Ae(!1)}}),y.jsxs(YO,{children:[y.jsx("div",{style:{width:"1150px",height:"65px",textAlign:"left",fontSize:"40px",fontWeight:"600",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:r.title}),y.jsxs("div",{style:{width:"1200px",height:"35px",display:"flex",alignItems:"center",fontSize:"20px"},children:["인터뷰이 | ",r.name,"    ",r.time]})]}),y.jsx(KO,{style:{left:"360.34"},children:y.jsx(xc,{opts:t,videoId:r.youtubeid})}),y.jsx(rs,{onClick:()=>{Fe()},style:{left:"1482px",top:"920px",position:"absolute"},children:y.jsx("img",{src:T,alt:"Hover Image",onMouseEnter:()=>E(w),onMouseLeave:()=>E(v)})}),y.jsx(rs,{onClick:()=>{qe()},style:{left:"1526px",top:"920px",position:"absolute"},children:y.jsx("img",{src:j,alt:"Hover Image2",onMouseEnter:()=>D(S),onMouseLeave:()=>D(x)})})]})]})},IO=O.div`
font-family: Gothic A1;
width:1920px;
height:880px;
position:relative;
padding-top:95px;
background-color:white;
z-index:9998;
`,YO=O.div`
position:absolute;
top:119px;
left:360.34px;
width:1200px;
height:100px;
`,KO=O.div`
position:absolute;
top:219px;
left:360.34px;
width:1200px;
height:693.42px;
`,XO=O.div`
font-family: Gothic A1;
width:1440px;
height:880px;
position:relative;
padding-top:95px;
background-color:white;
z-index:9998;
`,QO=O.div`
position:absolute;
top:119px;
left:120.5px;
width:1200px;
height:100px;
`,ZO=O.div`
position:absolute;
top:219px;
left:124px;
width:1200px;
height:693.42px;
`,WO=O.div`
font-family: Gothic A1;
width:1024px;
height:673px;
position:relative;
padding-top:95px;
background-color:white;
z-index:9998;
`,JO=O.div`
position:absolute;
top:220px;
left:124px;
width:776px;
height:470px;
`,eM=O.div`
position:absolute;
top:120px;
left:124px;
width:776px;
height:100px;
`,rs=O.div`
position:absolute;
width:40px;
height:40px;
top:1150px;
`,tM=O.div`
margin-left: 316px;
padding-top:95px;
height:auto;
background-color:white;
font-family: Gothic A1;
width: ${i=>i.isMobile?"708px":"calc(100vw - 316px)"};
`,iM=O.div`
position:fixed;
top:95px;
left:0px;
width:316px;
height:100%;
display:flex;
flex-direction:column;
z-index:9997;
background-color:none;
`,nM=O.div`
width:100%;
height:81px;
display:flex;
align-items:center;
position:relative;
`,rM=O.div`
position:fixed;
width:78px;
height:24px;
right:${i=>i.isMobile?"none":"2%"};
left:${i=>i.isMobile?"910px":"none"};
display: flex;
align-items: center;
gap: 10px;
z-index:1;
&:hover {
cursor:pointer;
}
`,vb=O.div`
width:296px;
background-color:white;
position:relative;
height:52px;
display:flex;
align-items:center;
font-size: 28px;
font-style: normal;
border-top: 1px solid black;

padding-left:19px;
font-weight: 400;
&:hover {
background-color:yellow;
cursor:pointer;
}
&::after {
content: "";
position: absolute;
top: 0;
right: 0;
width: 1px; /* border 두께 */
height: 80%; /* 위에서부터 80%만 적용 */
background-color: black; /* border 색상 */
}
`,rp=O.div`
width:241px;
height:52px;
display:flex;
align-items:center;
font-size: 28px;
font-style: normal;
font-weight: 400;
padding-left:74px;
&:hover {
background-color:yellow;
cursor:pointer;
}
`;O.div`
left:316px;
height:1105px;
diplay:flex;
justify-content:flex-end;
background-color:yellow;
position:absolute;
`;const rc=O.div`
width:116px;
height:36px;
position:absolute;
display:flex;
color:${i=>i.color?"black":"rgba(0, 0, 0, 0.2)"};
justify-content:center;
align-items:center;
font-size: 35px;
font-style: normal;
font-weight: 400;
&:hover {
    cursor:pointer;
  }
`,aM="modulepreload",sM=function(i){return"/"+i},xb={},Ds=function(t,r,a){let o=Promise.resolve();if(r&&r.length>0){let c=function(p){return Promise.all(p.map(g=>Promise.resolve(g).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),f=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));o=c(r.map(p=>{if(p=sM(p),p in xb)return;xb[p]=!0;const g=p.endsWith(".css"),v=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${v}`))return;const x=document.createElement("link");if(x.rel=g?"stylesheet":aM,g||(x.as="script"),x.crossOrigin="",x.href=p,f&&x.setAttribute("nonce",f),document.head.appendChild(x),g)return new Promise((w,S)=>{x.addEventListener("load",w),x.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${p}`)))})}))}function u(c){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=c,window.dispatchEvent(h),!h.defaultPrevented)throw c}return o.then(c=>{for(const h of c||[])h.status==="rejected"&&u(h.reason);return t().catch(u)})},oM=i=>{let t;return i?t=i:typeof fetch>"u"?t=(...r)=>Ds(async()=>{const{default:a}=await Promise.resolve().then(()=>Ns);return{default:a}},[]).then(({default:a})=>a(...r)):t=fetch,(...r)=>t(...r)};class Wm extends Error{constructor(t,r="FunctionsError",a){super(t),this.name=r,this.context=a}}class lM extends Wm{constructor(t){super("Failed to send a request to the Edge Function","FunctionsFetchError",t)}}class uM extends Wm{constructor(t){super("Relay Error invoking the Edge Function","FunctionsRelayError",t)}}class cM extends Wm{constructor(t){super("Edge Function returned a non-2xx status code","FunctionsHttpError",t)}}var Gp;(function(i){i.Any="any",i.ApNortheast1="ap-northeast-1",i.ApNortheast2="ap-northeast-2",i.ApSouth1="ap-south-1",i.ApSoutheast1="ap-southeast-1",i.ApSoutheast2="ap-southeast-2",i.CaCentral1="ca-central-1",i.EuCentral1="eu-central-1",i.EuWest1="eu-west-1",i.EuWest2="eu-west-2",i.EuWest3="eu-west-3",i.SaEast1="sa-east-1",i.UsEast1="us-east-1",i.UsWest1="us-west-1",i.UsWest2="us-west-2"})(Gp||(Gp={}));var dM=function(i,t,r,a){function o(u){return u instanceof r?u:new r(function(c){c(u)})}return new(r||(r=Promise))(function(u,c){function h(g){try{p(a.next(g))}catch(v){c(v)}}function f(g){try{p(a.throw(g))}catch(v){c(v)}}function p(g){g.done?u(g.value):o(g.value).then(h,f)}p((a=a.apply(i,t||[])).next())})};class fM{constructor(t,{headers:r={},customFetch:a,region:o=Gp.Any}={}){this.url=t,this.headers=r,this.region=o,this.fetch=oM(a)}setAuth(t){this.headers.Authorization=`Bearer ${t}`}invoke(t,r={}){var a;return dM(this,void 0,void 0,function*(){try{const{headers:o,method:u,body:c}=r;let h={},{region:f}=r;f||(f=this.region),f&&f!=="any"&&(h["x-region"]=f);let p;c&&(o&&!Object.prototype.hasOwnProperty.call(o,"Content-Type")||!o)&&(typeof Blob<"u"&&c instanceof Blob||c instanceof ArrayBuffer?(h["Content-Type"]="application/octet-stream",p=c):typeof c=="string"?(h["Content-Type"]="text/plain",p=c):typeof FormData<"u"&&c instanceof FormData?p=c:(h["Content-Type"]="application/json",p=JSON.stringify(c)));const g=yield this.fetch(`${this.url}/${t}`,{method:u||"POST",headers:Object.assign(Object.assign(Object.assign({},h),this.headers),o),body:p}).catch(S=>{throw new lM(S)}),v=g.headers.get("x-relay-error");if(v&&v==="true")throw new uM(g);if(!g.ok)throw new cM(g);let x=((a=g.headers.get("Content-Type"))!==null&&a!==void 0?a:"text/plain").split(";")[0].trim(),w;return x==="application/json"?w=yield g.json():x==="application/octet-stream"?w=yield g.blob():x==="text/event-stream"?w=g:x==="multipart/form-data"?w=yield g.formData():w=yield g.text(),{data:w,error:null}}catch(o){return{data:null,error:o}}})}}var Ot={},as={},ss={},os={},ls={},us={},hM=function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")},Os=hM();const pM=Os.fetch,f2=Os.fetch.bind(Os),h2=Os.Headers,mM=Os.Request,gM=Os.Response,Ns=Object.freeze(Object.defineProperty({__proto__:null,Headers:h2,Request:mM,Response:gM,default:f2,fetch:pM},Symbol.toStringTag,{value:"Module"})),yM=P_(Ns);var ac={},bb;function p2(){if(bb)return ac;bb=1,Object.defineProperty(ac,"__esModule",{value:!0});class i extends Error{constructor(r){super(r.message),this.name="PostgrestError",this.details=r.details,this.hint=r.hint,this.code=r.code}}return ac.default=i,ac}var wb;function m2(){if(wb)return us;wb=1;var i=us&&us.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(us,"__esModule",{value:!0});const t=i(yM),r=i(p2());class a{constructor(u){this.shouldThrowOnError=!1,this.method=u.method,this.url=u.url,this.headers=u.headers,this.schema=u.schema,this.body=u.body,this.shouldThrowOnError=u.shouldThrowOnError,this.signal=u.signal,this.isMaybeSingle=u.isMaybeSingle,u.fetch?this.fetch=u.fetch:typeof fetch>"u"?this.fetch=t.default:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(u,c){return this.headers=Object.assign({},this.headers),this.headers[u]=c,this}then(u,c){this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers["Accept-Profile"]=this.schema:this.headers["Content-Profile"]=this.schema),this.method!=="GET"&&this.method!=="HEAD"&&(this.headers["Content-Type"]="application/json");const h=this.fetch;let f=h(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async p=>{var g,v,x;let w=null,S=null,T=null,E=p.status,j=p.statusText;if(p.ok){if(this.method!=="HEAD"){const P=await p.text();P===""||(this.headers.Accept==="text/csv"||this.headers.Accept&&this.headers.Accept.includes("application/vnd.pgrst.plan+text")?S=P:S=JSON.parse(P))}const M=(g=this.headers.Prefer)===null||g===void 0?void 0:g.match(/count=(exact|planned|estimated)/),V=(v=p.headers.get("content-range"))===null||v===void 0?void 0:v.split("/");M&&V&&V.length>1&&(T=parseInt(V[1])),this.isMaybeSingle&&this.method==="GET"&&Array.isArray(S)&&(S.length>1?(w={code:"PGRST116",details:`Results contain ${S.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},S=null,T=null,E=406,j="Not Acceptable"):S.length===1?S=S[0]:S=null)}else{const M=await p.text();try{w=JSON.parse(M),Array.isArray(w)&&p.status===404&&(S=[],w=null,E=200,j="OK")}catch{p.status===404&&M===""?(E=204,j="No Content"):w={message:M}}if(w&&this.isMaybeSingle&&(!((x=w==null?void 0:w.details)===null||x===void 0)&&x.includes("0 rows"))&&(w=null,E=200,j="OK"),w&&this.shouldThrowOnError)throw new r.default(w)}return{error:w,data:S,count:T,status:E,statusText:j}});return this.shouldThrowOnError||(f=f.catch(p=>{var g,v,x;return{error:{message:`${(g=p==null?void 0:p.name)!==null&&g!==void 0?g:"FetchError"}: ${p==null?void 0:p.message}`,details:`${(v=p==null?void 0:p.stack)!==null&&v!==void 0?v:""}`,hint:"",code:`${(x=p==null?void 0:p.code)!==null&&x!==void 0?x:""}`},data:null,count:null,status:0,statusText:""}})),f.then(u,c)}returns(){return this}overrideTypes(){return this}}return us.default=a,us}var Sb;function g2(){if(Sb)return ls;Sb=1;var i=ls&&ls.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(ls,"__esModule",{value:!0});const t=i(m2());class r extends t.default{select(o){let u=!1;const c=(o??"*").split("").map(h=>/\s/.test(h)&&!u?"":(h==='"'&&(u=!u),h)).join("");return this.url.searchParams.set("select",c),this.headers.Prefer&&(this.headers.Prefer+=","),this.headers.Prefer+="return=representation",this}order(o,{ascending:u=!0,nullsFirst:c,foreignTable:h,referencedTable:f=h}={}){const p=f?`${f}.order`:"order",g=this.url.searchParams.get(p);return this.url.searchParams.set(p,`${g?`${g},`:""}${o}.${u?"asc":"desc"}${c===void 0?"":c?".nullsfirst":".nullslast"}`),this}limit(o,{foreignTable:u,referencedTable:c=u}={}){const h=typeof c>"u"?"limit":`${c}.limit`;return this.url.searchParams.set(h,`${o}`),this}range(o,u,{foreignTable:c,referencedTable:h=c}={}){const f=typeof h>"u"?"offset":`${h}.offset`,p=typeof h>"u"?"limit":`${h}.limit`;return this.url.searchParams.set(f,`${o}`),this.url.searchParams.set(p,`${u-o+1}`),this}abortSignal(o){return this.signal=o,this}single(){return this.headers.Accept="application/vnd.pgrst.object+json",this}maybeSingle(){return this.method==="GET"?this.headers.Accept="application/json":this.headers.Accept="application/vnd.pgrst.object+json",this.isMaybeSingle=!0,this}csv(){return this.headers.Accept="text/csv",this}geojson(){return this.headers.Accept="application/geo+json",this}explain({analyze:o=!1,verbose:u=!1,settings:c=!1,buffers:h=!1,wal:f=!1,format:p="text"}={}){var g;const v=[o?"analyze":null,u?"verbose":null,c?"settings":null,h?"buffers":null,f?"wal":null].filter(Boolean).join("|"),x=(g=this.headers.Accept)!==null&&g!==void 0?g:"application/json";return this.headers.Accept=`application/vnd.pgrst.plan+${p}; for="${x}"; options=${v};`,p==="json"?this:this}rollback(){var o;return((o=this.headers.Prefer)!==null&&o!==void 0?o:"").trim().length>0?this.headers.Prefer+=",tx=rollback":this.headers.Prefer="tx=rollback",this}returns(){return this}}return ls.default=r,ls}var Ab;function Jm(){if(Ab)return os;Ab=1;var i=os&&os.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(os,"__esModule",{value:!0});const t=i(g2());class r extends t.default{eq(o,u){return this.url.searchParams.append(o,`eq.${u}`),this}neq(o,u){return this.url.searchParams.append(o,`neq.${u}`),this}gt(o,u){return this.url.searchParams.append(o,`gt.${u}`),this}gte(o,u){return this.url.searchParams.append(o,`gte.${u}`),this}lt(o,u){return this.url.searchParams.append(o,`lt.${u}`),this}lte(o,u){return this.url.searchParams.append(o,`lte.${u}`),this}like(o,u){return this.url.searchParams.append(o,`like.${u}`),this}likeAllOf(o,u){return this.url.searchParams.append(o,`like(all).{${u.join(",")}}`),this}likeAnyOf(o,u){return this.url.searchParams.append(o,`like(any).{${u.join(",")}}`),this}ilike(o,u){return this.url.searchParams.append(o,`ilike.${u}`),this}ilikeAllOf(o,u){return this.url.searchParams.append(o,`ilike(all).{${u.join(",")}}`),this}ilikeAnyOf(o,u){return this.url.searchParams.append(o,`ilike(any).{${u.join(",")}}`),this}is(o,u){return this.url.searchParams.append(o,`is.${u}`),this}in(o,u){const c=Array.from(new Set(u)).map(h=>typeof h=="string"&&new RegExp("[,()]").test(h)?`"${h}"`:`${h}`).join(",");return this.url.searchParams.append(o,`in.(${c})`),this}contains(o,u){return typeof u=="string"?this.url.searchParams.append(o,`cs.${u}`):Array.isArray(u)?this.url.searchParams.append(o,`cs.{${u.join(",")}}`):this.url.searchParams.append(o,`cs.${JSON.stringify(u)}`),this}containedBy(o,u){return typeof u=="string"?this.url.searchParams.append(o,`cd.${u}`):Array.isArray(u)?this.url.searchParams.append(o,`cd.{${u.join(",")}}`):this.url.searchParams.append(o,`cd.${JSON.stringify(u)}`),this}rangeGt(o,u){return this.url.searchParams.append(o,`sr.${u}`),this}rangeGte(o,u){return this.url.searchParams.append(o,`nxl.${u}`),this}rangeLt(o,u){return this.url.searchParams.append(o,`sl.${u}`),this}rangeLte(o,u){return this.url.searchParams.append(o,`nxr.${u}`),this}rangeAdjacent(o,u){return this.url.searchParams.append(o,`adj.${u}`),this}overlaps(o,u){return typeof u=="string"?this.url.searchParams.append(o,`ov.${u}`):this.url.searchParams.append(o,`ov.{${u.join(",")}}`),this}textSearch(o,u,{config:c,type:h}={}){let f="";h==="plain"?f="pl":h==="phrase"?f="ph":h==="websearch"&&(f="w");const p=c===void 0?"":`(${c})`;return this.url.searchParams.append(o,`${f}fts${p}.${u}`),this}match(o){return Object.entries(o).forEach(([u,c])=>{this.url.searchParams.append(u,`eq.${c}`)}),this}not(o,u,c){return this.url.searchParams.append(o,`not.${u}.${c}`),this}or(o,{foreignTable:u,referencedTable:c=u}={}){const h=c?`${c}.or`:"or";return this.url.searchParams.append(h,`(${o})`),this}filter(o,u,c){return this.url.searchParams.append(o,`${u}.${c}`),this}}return os.default=r,os}var _b;function y2(){if(_b)return ss;_b=1;var i=ss&&ss.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(ss,"__esModule",{value:!0});const t=i(Jm());class r{constructor(o,{headers:u={},schema:c,fetch:h}){this.url=o,this.headers=u,this.schema=c,this.fetch=h}select(o,{head:u=!1,count:c}={}){const h=u?"HEAD":"GET";let f=!1;const p=(o??"*").split("").map(g=>/\s/.test(g)&&!f?"":(g==='"'&&(f=!f),g)).join("");return this.url.searchParams.set("select",p),c&&(this.headers.Prefer=`count=${c}`),new t.default({method:h,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}insert(o,{count:u,defaultToNull:c=!0}={}){const h="POST",f=[];if(this.headers.Prefer&&f.push(this.headers.Prefer),u&&f.push(`count=${u}`),c||f.push("missing=default"),this.headers.Prefer=f.join(","),Array.isArray(o)){const p=o.reduce((g,v)=>g.concat(Object.keys(v)),[]);if(p.length>0){const g=[...new Set(p)].map(v=>`"${v}"`);this.url.searchParams.set("columns",g.join(","))}}return new t.default({method:h,url:this.url,headers:this.headers,schema:this.schema,body:o,fetch:this.fetch,allowEmpty:!1})}upsert(o,{onConflict:u,ignoreDuplicates:c=!1,count:h,defaultToNull:f=!0}={}){const p="POST",g=[`resolution=${c?"ignore":"merge"}-duplicates`];if(u!==void 0&&this.url.searchParams.set("on_conflict",u),this.headers.Prefer&&g.push(this.headers.Prefer),h&&g.push(`count=${h}`),f||g.push("missing=default"),this.headers.Prefer=g.join(","),Array.isArray(o)){const v=o.reduce((x,w)=>x.concat(Object.keys(w)),[]);if(v.length>0){const x=[...new Set(v)].map(w=>`"${w}"`);this.url.searchParams.set("columns",x.join(","))}}return new t.default({method:p,url:this.url,headers:this.headers,schema:this.schema,body:o,fetch:this.fetch,allowEmpty:!1})}update(o,{count:u}={}){const c="PATCH",h=[];return this.headers.Prefer&&h.push(this.headers.Prefer),u&&h.push(`count=${u}`),this.headers.Prefer=h.join(","),new t.default({method:c,url:this.url,headers:this.headers,schema:this.schema,body:o,fetch:this.fetch,allowEmpty:!1})}delete({count:o}={}){const u="DELETE",c=[];return o&&c.push(`count=${o}`),this.headers.Prefer&&c.unshift(this.headers.Prefer),this.headers.Prefer=c.join(","),new t.default({method:u,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}}return ss.default=r,ss}var Go={},Fo={},Eb;function vM(){return Eb||(Eb=1,Object.defineProperty(Fo,"__esModule",{value:!0}),Fo.version=void 0,Fo.version="0.0.0-automated"),Fo}var Tb;function xM(){if(Tb)return Go;Tb=1,Object.defineProperty(Go,"__esModule",{value:!0}),Go.DEFAULT_HEADERS=void 0;const i=vM();return Go.DEFAULT_HEADERS={"X-Client-Info":`postgrest-js/${i.version}`},Go}var jb;function bM(){if(jb)return as;jb=1;var i=as&&as.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(as,"__esModule",{value:!0});const t=i(y2()),r=i(Jm()),a=xM();class o{constructor(c,{headers:h={},schema:f,fetch:p}={}){this.url=c,this.headers=Object.assign(Object.assign({},a.DEFAULT_HEADERS),h),this.schemaName=f,this.fetch=p}from(c){const h=new URL(`${this.url}/${c}`);return new t.default(h,{headers:Object.assign({},this.headers),schema:this.schemaName,fetch:this.fetch})}schema(c){return new o(this.url,{headers:this.headers,schema:c,fetch:this.fetch})}rpc(c,h={},{head:f=!1,get:p=!1,count:g}={}){let v;const x=new URL(`${this.url}/rpc/${c}`);let w;f||p?(v=f?"HEAD":"GET",Object.entries(h).filter(([T,E])=>E!==void 0).map(([T,E])=>[T,Array.isArray(E)?`{${E.join(",")}}`:`${E}`]).forEach(([T,E])=>{x.searchParams.append(T,E)})):(v="POST",w=h);const S=Object.assign({},this.headers);return g&&(S.Prefer=`count=${g}`),new r.default({method:v,url:x,headers:S,schema:this.schemaName,body:w,fetch:this.fetch,allowEmpty:!1})}}return as.default=o,as}var Rb;function wM(){if(Rb)return Ot;Rb=1;var i=Ot&&Ot.__importDefault||function(h){return h&&h.__esModule?h:{default:h}};Object.defineProperty(Ot,"__esModule",{value:!0}),Ot.PostgrestError=Ot.PostgrestBuilder=Ot.PostgrestTransformBuilder=Ot.PostgrestFilterBuilder=Ot.PostgrestQueryBuilder=Ot.PostgrestClient=void 0;const t=i(bM());Ot.PostgrestClient=t.default;const r=i(y2());Ot.PostgrestQueryBuilder=r.default;const a=i(Jm());Ot.PostgrestFilterBuilder=a.default;const o=i(g2());Ot.PostgrestTransformBuilder=o.default;const u=i(m2());Ot.PostgrestBuilder=u.default;const c=i(p2());return Ot.PostgrestError=c.default,Ot.default={PostgrestClient:t.default,PostgrestQueryBuilder:r.default,PostgrestFilterBuilder:a.default,PostgrestTransformBuilder:o.default,PostgrestBuilder:u.default,PostgrestError:c.default},Ot}var SM=wM();const AM=Ms(SM),{PostgrestClient:_M,PostgrestQueryBuilder:wz,PostgrestFilterBuilder:Sz,PostgrestTransformBuilder:Az,PostgrestBuilder:_z,PostgrestError:Ez}=AM,EM="2.11.2",TM={"X-Client-Info":`realtime-js/${EM}`},jM="1.0.0",v2=1e4,RM=1e3;var ws;(function(i){i[i.connecting=0]="connecting",i[i.open=1]="open",i[i.closing=2]="closing",i[i.closed=3]="closed"})(ws||(ws={}));var fi;(function(i){i.closed="closed",i.errored="errored",i.joined="joined",i.joining="joining",i.leaving="leaving"})(fi||(fi={}));var Ki;(function(i){i.close="phx_close",i.error="phx_error",i.join="phx_join",i.reply="phx_reply",i.leave="phx_leave",i.access_token="access_token"})(Ki||(Ki={}));var Fp;(function(i){i.websocket="websocket"})(Fp||(Fp={}));var la;(function(i){i.Connecting="connecting",i.Open="open",i.Closing="closing",i.Closed="closed"})(la||(la={}));class CM{constructor(){this.HEADER_LENGTH=1}decode(t,r){return t.constructor===ArrayBuffer?r(this._binaryDecode(t)):r(typeof t=="string"?JSON.parse(t):{})}_binaryDecode(t){const r=new DataView(t),a=new TextDecoder;return this._decodeBroadcast(t,r,a)}_decodeBroadcast(t,r,a){const o=r.getUint8(1),u=r.getUint8(2);let c=this.HEADER_LENGTH+2;const h=a.decode(t.slice(c,c+o));c=c+o;const f=a.decode(t.slice(c,c+u));c=c+u;const p=JSON.parse(a.decode(t.slice(c,t.byteLength)));return{ref:null,topic:h,event:f,payload:p}}}class x2{constructor(t,r){this.callback=t,this.timerCalc=r,this.timer=void 0,this.tries=0,this.callback=t,this.timerCalc=r}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}var tt;(function(i){i.abstime="abstime",i.bool="bool",i.date="date",i.daterange="daterange",i.float4="float4",i.float8="float8",i.int2="int2",i.int4="int4",i.int4range="int4range",i.int8="int8",i.int8range="int8range",i.json="json",i.jsonb="jsonb",i.money="money",i.numeric="numeric",i.oid="oid",i.reltime="reltime",i.text="text",i.time="time",i.timestamp="timestamp",i.timestamptz="timestamptz",i.timetz="timetz",i.tsrange="tsrange",i.tstzrange="tstzrange"})(tt||(tt={}));const Cb=(i,t,r={})=>{var a;const o=(a=r.skipTypes)!==null&&a!==void 0?a:[];return Object.keys(t).reduce((u,c)=>(u[c]=kM(c,i,t,o),u),{})},kM=(i,t,r,a)=>{const o=t.find(h=>h.name===i),u=o==null?void 0:o.type,c=r[i];return u&&!a.includes(u)?b2(u,c):Ip(c)},b2=(i,t)=>{if(i.charAt(0)==="_"){const r=i.slice(1,i.length);return zM(t,r)}switch(i){case tt.bool:return DM(t);case tt.float4:case tt.float8:case tt.int2:case tt.int4:case tt.int8:case tt.numeric:case tt.oid:return OM(t);case tt.json:case tt.jsonb:return MM(t);case tt.timestamp:return LM(t);case tt.abstime:case tt.date:case tt.daterange:case tt.int4range:case tt.int8range:case tt.money:case tt.reltime:case tt.text:case tt.time:case tt.timestamptz:case tt.timetz:case tt.tsrange:case tt.tstzrange:return Ip(t);default:return Ip(t)}},Ip=i=>i,DM=i=>{switch(i){case"t":return!0;case"f":return!1;default:return i}},OM=i=>{if(typeof i=="string"){const t=parseFloat(i);if(!Number.isNaN(t))return t}return i},MM=i=>{if(typeof i=="string")try{return JSON.parse(i)}catch(t){return console.log(`JSON parse error: ${t}`),i}return i},zM=(i,t)=>{if(typeof i!="string")return i;const r=i.length-1,a=i[r];if(i[0]==="{"&&a==="}"){let u;const c=i.slice(1,r);try{u=JSON.parse("["+c+"]")}catch{u=c?c.split(","):[]}return u.map(h=>b2(t,h))}return i},LM=i=>typeof i=="string"?i.replace(" ","T"):i,w2=i=>{let t=i;return t=t.replace(/^ws/i,"http"),t=t.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i,""),t.replace(/\/+$/,"")};class ap{constructor(t,r,a={},o=v2){this.channel=t,this.event=r,this.payload=a,this.timeout=o,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(t){this.timeout=t,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(t){this.payload=Object.assign(Object.assign({},this.payload),t)}receive(t,r){var a;return this._hasReceived(t)&&r((a=this.receivedResp)===null||a===void 0?void 0:a.response),this.recHooks.push({status:t,callback:r}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);const t=r=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=r,this._matchReceive(r)};this.channel._on(this.refEvent,{},t),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}trigger(t,r){this.refEvent&&this.channel._trigger(this.refEvent,{status:t,response:r})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:t,response:r}){this.recHooks.filter(a=>a.status===t).forEach(a=>a.callback(r))}_hasReceived(t){return this.receivedResp&&this.receivedResp.status===t}}var kb;(function(i){i.SYNC="sync",i.JOIN="join",i.LEAVE="leave"})(kb||(kb={}));class il{constructor(t,r){this.channel=t,this.state={},this.pendingDiffs=[],this.joinRef=null,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const a=(r==null?void 0:r.events)||{state:"presence_state",diff:"presence_diff"};this.channel._on(a.state,{},o=>{const{onJoin:u,onLeave:c,onSync:h}=this.caller;this.joinRef=this.channel._joinRef(),this.state=il.syncState(this.state,o,u,c),this.pendingDiffs.forEach(f=>{this.state=il.syncDiff(this.state,f,u,c)}),this.pendingDiffs=[],h()}),this.channel._on(a.diff,{},o=>{const{onJoin:u,onLeave:c,onSync:h}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(o):(this.state=il.syncDiff(this.state,o,u,c),h())}),this.onJoin((o,u,c)=>{this.channel._trigger("presence",{event:"join",key:o,currentPresences:u,newPresences:c})}),this.onLeave((o,u,c)=>{this.channel._trigger("presence",{event:"leave",key:o,currentPresences:u,leftPresences:c})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(t,r,a,o){const u=this.cloneDeep(t),c=this.transformState(r),h={},f={};return this.map(u,(p,g)=>{c[p]||(f[p]=g)}),this.map(c,(p,g)=>{const v=u[p];if(v){const x=g.map(E=>E.presence_ref),w=v.map(E=>E.presence_ref),S=g.filter(E=>w.indexOf(E.presence_ref)<0),T=v.filter(E=>x.indexOf(E.presence_ref)<0);S.length>0&&(h[p]=S),T.length>0&&(f[p]=T)}else h[p]=g}),this.syncDiff(u,{joins:h,leaves:f},a,o)}static syncDiff(t,r,a,o){const{joins:u,leaves:c}={joins:this.transformState(r.joins),leaves:this.transformState(r.leaves)};return a||(a=()=>{}),o||(o=()=>{}),this.map(u,(h,f)=>{var p;const g=(p=t[h])!==null&&p!==void 0?p:[];if(t[h]=this.cloneDeep(f),g.length>0){const v=t[h].map(w=>w.presence_ref),x=g.filter(w=>v.indexOf(w.presence_ref)<0);t[h].unshift(...x)}a(h,g,f)}),this.map(c,(h,f)=>{let p=t[h];if(!p)return;const g=f.map(v=>v.presence_ref);p=p.filter(v=>g.indexOf(v.presence_ref)<0),t[h]=p,o(h,p,f),p.length===0&&delete t[h]}),t}static map(t,r){return Object.getOwnPropertyNames(t).map(a=>r(a,t[a]))}static transformState(t){return t=this.cloneDeep(t),Object.getOwnPropertyNames(t).reduce((r,a)=>{const o=t[a];return"metas"in o?r[a]=o.metas.map(u=>(u.presence_ref=u.phx_ref,delete u.phx_ref,delete u.phx_ref_prev,u)):r[a]=o,r},{})}static cloneDeep(t){return JSON.parse(JSON.stringify(t))}onJoin(t){this.caller.onJoin=t}onLeave(t){this.caller.onLeave=t}onSync(t){this.caller.onSync=t}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}var Db;(function(i){i.ALL="*",i.INSERT="INSERT",i.UPDATE="UPDATE",i.DELETE="DELETE"})(Db||(Db={}));var Ob;(function(i){i.BROADCAST="broadcast",i.PRESENCE="presence",i.POSTGRES_CHANGES="postgres_changes",i.SYSTEM="system"})(Ob||(Ob={}));var Nn;(function(i){i.SUBSCRIBED="SUBSCRIBED",i.TIMED_OUT="TIMED_OUT",i.CLOSED="CLOSED",i.CHANNEL_ERROR="CHANNEL_ERROR"})(Nn||(Nn={}));class e0{constructor(t,r={config:{}},a){this.topic=t,this.params=r,this.socket=a,this.bindings={},this.state=fi.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=t.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:""},private:!1},r.config),this.timeout=this.socket.timeout,this.joinPush=new ap(this,Ki.join,this.params,this.timeout),this.rejoinTimer=new x2(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=fi.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(o=>o.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=fi.closed,this.socket._remove(this)}),this._onError(o=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,o),this.state=fi.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=fi.errored,this.rejoinTimer.scheduleTimeout())}),this._on(Ki.reply,{},(o,u)=>{this._trigger(this._replyEventName(u),o)}),this.presence=new il(this),this.broadcastEndpointURL=w2(this.socket.endPoint)+"/api/broadcast",this.private=this.params.config.private||!1}subscribe(t,r=this.timeout){var a,o;if(this.socket.isConnected()||this.socket.connect(),this.joinedOnce)throw"tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";{const{config:{broadcast:u,presence:c,private:h}}=this.params;this._onError(g=>t==null?void 0:t(Nn.CHANNEL_ERROR,g)),this._onClose(()=>t==null?void 0:t(Nn.CLOSED));const f={},p={broadcast:u,presence:c,postgres_changes:(o=(a=this.bindings.postgres_changes)===null||a===void 0?void 0:a.map(g=>g.filter))!==null&&o!==void 0?o:[],private:h};this.socket.accessTokenValue&&(f.access_token=this.socket.accessTokenValue),this.updateJoinPayload(Object.assign({config:p},f)),this.joinedOnce=!0,this._rejoin(r),this.joinPush.receive("ok",async({postgres_changes:g})=>{var v;if(this.socket.setAuth(),g===void 0){t==null||t(Nn.SUBSCRIBED);return}else{const x=this.bindings.postgres_changes,w=(v=x==null?void 0:x.length)!==null&&v!==void 0?v:0,S=[];for(let T=0;T<w;T++){const E=x[T],{filter:{event:j,schema:D,table:M,filter:V}}=E,P=g&&g[T];if(P&&P.event===j&&P.schema===D&&P.table===M&&P.filter===V)S.push(Object.assign(Object.assign({},E),{id:P.id}));else{this.unsubscribe(),t==null||t(Nn.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=S,t&&t(Nn.SUBSCRIBED);return}}).receive("error",g=>{t==null||t(Nn.CHANNEL_ERROR,new Error(JSON.stringify(Object.values(g).join(", ")||"error")))}).receive("timeout",()=>{t==null||t(Nn.TIMED_OUT)})}return this}presenceState(){return this.presence.state}async track(t,r={}){return await this.send({type:"presence",event:"track",payload:t},r.timeout||this.timeout)}async untrack(t={}){return await this.send({type:"presence",event:"untrack"},t)}on(t,r,a){return this._on(t,r,a)}async send(t,r={}){var a,o;if(!this._canPush()&&t.type==="broadcast"){const{event:u,payload:c}=t,f={method:"POST",headers:{Authorization:this.socket.accessTokenValue?`Bearer ${this.socket.accessTokenValue}`:"",apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:u,payload:c,private:this.private}]})};try{const p=await this._fetchWithTimeout(this.broadcastEndpointURL,f,(a=r.timeout)!==null&&a!==void 0?a:this.timeout);return await((o=p.body)===null||o===void 0?void 0:o.cancel()),p.ok?"ok":"error"}catch(p){return p.name==="AbortError"?"timed out":"error"}}else return new Promise(u=>{var c,h,f;const p=this._push(t.type,t,r.timeout||this.timeout);t.type==="broadcast"&&!(!((f=(h=(c=this.params)===null||c===void 0?void 0:c.config)===null||h===void 0?void 0:h.broadcast)===null||f===void 0)&&f.ack)&&u("ok"),p.receive("ok",()=>u("ok")),p.receive("error",()=>u("error")),p.receive("timeout",()=>u("timed out"))})}updateJoinPayload(t){this.joinPush.updatePayload(t)}unsubscribe(t=this.timeout){this.state=fi.leaving;const r=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(Ki.close,"leave",this._joinRef())};return this.rejoinTimer.reset(),this.joinPush.destroy(),new Promise(a=>{const o=new ap(this,Ki.leave,{},t);o.receive("ok",()=>{r(),a("ok")}).receive("timeout",()=>{r(),a("timed out")}).receive("error",()=>{a("error")}),o.send(),this._canPush()||o.trigger("ok",{})})}async _fetchWithTimeout(t,r,a){const o=new AbortController,u=setTimeout(()=>o.abort(),a),c=await this.socket.fetch(t,Object.assign(Object.assign({},r),{signal:o.signal}));return clearTimeout(u),c}_push(t,r,a=this.timeout){if(!this.joinedOnce)throw`tried to push '${t}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let o=new ap(this,t,r,a);return this._canPush()?o.send():(o.startTimeout(),this.pushBuffer.push(o)),o}_onMessage(t,r,a){return r}_isMember(t){return this.topic===t}_joinRef(){return this.joinPush.ref}_trigger(t,r,a){var o,u;const c=t.toLocaleLowerCase(),{close:h,error:f,leave:p,join:g}=Ki;if(a&&[h,f,p,g].indexOf(c)>=0&&a!==this._joinRef())return;let x=this._onMessage(c,r,a);if(r&&!x)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(c)?(o=this.bindings.postgres_changes)===null||o===void 0||o.filter(w=>{var S,T,E;return((S=w.filter)===null||S===void 0?void 0:S.event)==="*"||((E=(T=w.filter)===null||T===void 0?void 0:T.event)===null||E===void 0?void 0:E.toLocaleLowerCase())===c}).map(w=>w.callback(x,a)):(u=this.bindings[c])===null||u===void 0||u.filter(w=>{var S,T,E,j,D,M;if(["broadcast","presence","postgres_changes"].includes(c))if("id"in w){const V=w.id,P=(S=w.filter)===null||S===void 0?void 0:S.event;return V&&((T=r.ids)===null||T===void 0?void 0:T.includes(V))&&(P==="*"||(P==null?void 0:P.toLocaleLowerCase())===((E=r.data)===null||E===void 0?void 0:E.type.toLocaleLowerCase()))}else{const V=(D=(j=w==null?void 0:w.filter)===null||j===void 0?void 0:j.event)===null||D===void 0?void 0:D.toLocaleLowerCase();return V==="*"||V===((M=r==null?void 0:r.event)===null||M===void 0?void 0:M.toLocaleLowerCase())}else return w.type.toLocaleLowerCase()===c}).map(w=>{if(typeof x=="object"&&"ids"in x){const S=x.data,{schema:T,table:E,commit_timestamp:j,type:D,errors:M}=S;x=Object.assign(Object.assign({},{schema:T,table:E,commit_timestamp:j,eventType:D,new:{},old:{},errors:M}),this._getPayloadRecords(S))}w.callback(x,a)})}_isClosed(){return this.state===fi.closed}_isJoined(){return this.state===fi.joined}_isJoining(){return this.state===fi.joining}_isLeaving(){return this.state===fi.leaving}_replyEventName(t){return`chan_reply_${t}`}_on(t,r,a){const o=t.toLocaleLowerCase(),u={type:o,filter:r,callback:a};return this.bindings[o]?this.bindings[o].push(u):this.bindings[o]=[u],this}_off(t,r){const a=t.toLocaleLowerCase();return this.bindings[a]=this.bindings[a].filter(o=>{var u;return!(((u=o.type)===null||u===void 0?void 0:u.toLocaleLowerCase())===a&&e0.isEqual(o.filter,r))}),this}static isEqual(t,r){if(Object.keys(t).length!==Object.keys(r).length)return!1;for(const a in t)if(t[a]!==r[a])return!1;return!0}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(t){this._on(Ki.close,{},t)}_onError(t){this._on(Ki.error,{},r=>t(r))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(t=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=fi.joining,this.joinPush.resend(t))}_getPayloadRecords(t){const r={new:{},old:{}};return(t.type==="INSERT"||t.type==="UPDATE")&&(r.new=Cb(t.columns,t.record)),(t.type==="UPDATE"||t.type==="DELETE")&&(r.old=Cb(t.columns,t.old_record)),r}}const PM=()=>{},UM=typeof WebSocket<"u",NM=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class BM{constructor(t,r){var a;this.accessTokenValue=null,this.apiKey=null,this.channels=[],this.endPoint="",this.httpEndpoint="",this.headers=TM,this.params={},this.timeout=v2,this.heartbeatIntervalMs=3e4,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.ref=0,this.logger=PM,this.conn=null,this.sendBuffer=[],this.serializer=new CM,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.accessToken=null,this._resolveFetch=u=>{let c;return u?c=u:typeof fetch>"u"?c=(...h)=>Ds(async()=>{const{default:f}=await Promise.resolve().then(()=>Ns);return{default:f}},void 0).then(({default:f})=>f(...h)):c=fetch,(...h)=>c(...h)},this.endPoint=`${t}/${Fp.websocket}`,this.httpEndpoint=w2(t),r!=null&&r.transport?this.transport=r.transport:this.transport=null,r!=null&&r.params&&(this.params=r.params),r!=null&&r.headers&&(this.headers=Object.assign(Object.assign({},this.headers),r.headers)),r!=null&&r.timeout&&(this.timeout=r.timeout),r!=null&&r.logger&&(this.logger=r.logger),r!=null&&r.heartbeatIntervalMs&&(this.heartbeatIntervalMs=r.heartbeatIntervalMs);const o=(a=r==null?void 0:r.params)===null||a===void 0?void 0:a.apikey;if(o&&(this.accessTokenValue=o,this.apiKey=o),this.reconnectAfterMs=r!=null&&r.reconnectAfterMs?r.reconnectAfterMs:u=>[1e3,2e3,5e3,1e4][u-1]||1e4,this.encode=r!=null&&r.encode?r.encode:(u,c)=>c(JSON.stringify(u)),this.decode=r!=null&&r.decode?r.decode:this.serializer.decode.bind(this.serializer),this.reconnectTimer=new x2(async()=>{this.disconnect(),this.connect()},this.reconnectAfterMs),this.fetch=this._resolveFetch(r==null?void 0:r.fetch),r!=null&&r.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.worker=(r==null?void 0:r.worker)||!1,this.workerUrl=r==null?void 0:r.workerUrl}this.accessToken=(r==null?void 0:r.accessToken)||null}connect(){if(!this.conn){if(this.transport){this.conn=new this.transport(this.endpointURL(),void 0,{headers:this.headers});return}if(UM){this.conn=new WebSocket(this.endpointURL()),this.setupConnection();return}this.conn=new VM(this.endpointURL(),void 0,{close:()=>{this.conn=null}}),Ds(async()=>{const{default:t}=await import("./browser-EcSKA7Tq.js").then(r=>r.b);return{default:t}},[]).then(({default:t})=>{this.conn=new t(this.endpointURL(),void 0,{headers:this.headers}),this.setupConnection()})}}endpointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:jM}))}disconnect(t,r){this.conn&&(this.conn.onclose=function(){},t?this.conn.close(t,r??""):this.conn.close(),this.conn=null,this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.reset())}getChannels(){return this.channels}async removeChannel(t){const r=await t.unsubscribe();return this.channels.length===0&&this.disconnect(),r}async removeAllChannels(){const t=await Promise.all(this.channels.map(r=>r.unsubscribe()));return this.disconnect(),t}log(t,r,a){this.logger(t,r,a)}connectionState(){switch(this.conn&&this.conn.readyState){case ws.connecting:return la.Connecting;case ws.open:return la.Open;case ws.closing:return la.Closing;default:return la.Closed}}isConnected(){return this.connectionState()===la.Open}channel(t,r={config:{}}){const a=new e0(`realtime:${t}`,r,this);return this.channels.push(a),a}push(t){const{topic:r,event:a,payload:o,ref:u}=t,c=()=>{this.encode(t,h=>{var f;(f=this.conn)===null||f===void 0||f.send(h)})};this.log("push",`${r} ${a} (${u})`,o),this.isConnected()?c():this.sendBuffer.push(c)}async setAuth(t=null){let r=t||this.accessToken&&await this.accessToken()||this.accessTokenValue;if(r){let a=null;try{a=JSON.parse(atob(r.split(".")[1]))}catch{}if(a&&a.exp&&!(Math.floor(Date.now()/1e3)-a.exp<0))return this.log("auth",`InvalidJWTToken: Invalid value for JWT claim "exp" with value ${a.exp}`),Promise.reject(`InvalidJWTToken: Invalid value for JWT claim "exp" with value ${a.exp}`);this.accessTokenValue=r,this.channels.forEach(o=>{r&&o.updateJoinPayload({access_token:r}),o.joinedOnce&&o._isJoined()&&o._push(Ki.access_token,{access_token:r})})}}async sendHeartbeat(){var t;if(this.isConnected()){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection"),(t=this.conn)===null||t===void 0||t.close(RM,"hearbeat timeout");return}this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef}),this.setAuth()}}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(t=>t()),this.sendBuffer=[])}_makeRef(){let t=this.ref+1;return t===this.ref?this.ref=0:this.ref=t,this.ref.toString()}_leaveOpenTopic(t){let r=this.channels.find(a=>a.topic===t&&(a._isJoined()||a._isJoining()));r&&(this.log("transport",`leaving duplicate topic "${t}"`),r.unsubscribe())}_remove(t){this.channels=this.channels.filter(r=>r._joinRef()!==t._joinRef())}setupConnection(){this.conn&&(this.conn.binaryType="arraybuffer",this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=t=>this._onConnError(t),this.conn.onmessage=t=>this._onConnMessage(t),this.conn.onclose=t=>this._onConnClose(t))}_onConnMessage(t){this.decode(t.data,r=>{let{topic:a,event:o,payload:u,ref:c}=r;c&&c===this.pendingHeartbeatRef&&(this.pendingHeartbeatRef=null),this.log("receive",`${u.status||""} ${a} ${o} ${c&&"("+c+")"||""}`,u),this.channels.filter(h=>h._isMember(a)).forEach(h=>h._trigger(o,u,c)),this.stateChangeCallbacks.message.forEach(h=>h(r))})}async _onConnOpen(){if(this.log("transport",`connected to ${this.endpointURL()}`),this.flushSendBuffer(),this.reconnectTimer.reset(),!this.worker)this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this.sendHeartbeat(),this.heartbeatIntervalMs);else{this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const t=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(t),this.workerRef.onerror=r=>{this.log("worker","worker error",r.message),this.workerRef.terminate()},this.workerRef.onmessage=r=>{r.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}this.stateChangeCallbacks.open.forEach(t=>t())}_onConnClose(t){this.log("transport","close",t),this._triggerChanError(),this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.scheduleTimeout(),this.stateChangeCallbacks.close.forEach(r=>r(t))}_onConnError(t){this.log("transport",t.message),this._triggerChanError(),this.stateChangeCallbacks.error.forEach(r=>r(t))}_triggerChanError(){this.channels.forEach(t=>t._trigger(Ki.error))}_appendParams(t,r){if(Object.keys(r).length===0)return t;const a=t.match(/\?/)?"&":"?",o=new URLSearchParams(r);return`${t}${a}${o}`}_workerObjectUrl(t){let r;if(t)r=t;else{const a=new Blob([NM],{type:"application/javascript"});r=URL.createObjectURL(a)}return r}}class VM{constructor(t,r,a){this.binaryType="arraybuffer",this.onclose=()=>{},this.onerror=()=>{},this.onmessage=()=>{},this.onopen=()=>{},this.readyState=ws.connecting,this.send=()=>{},this.url=null,this.url=t,this.close=a.close}}class t0 extends Error{constructor(t){super(t),this.__isStorageError=!0,this.name="StorageError"}}function Lt(i){return typeof i=="object"&&i!==null&&"__isStorageError"in i}class $M extends t0{constructor(t,r){super(t),this.name="StorageApiError",this.status=r}toJSON(){return{name:this.name,message:this.message,status:this.status}}}class Yp extends t0{constructor(t,r){super(t),this.name="StorageUnknownError",this.originalError=r}}var HM=function(i,t,r,a){function o(u){return u instanceof r?u:new r(function(c){c(u)})}return new(r||(r=Promise))(function(u,c){function h(g){try{p(a.next(g))}catch(v){c(v)}}function f(g){try{p(a.throw(g))}catch(v){c(v)}}function p(g){g.done?u(g.value):o(g.value).then(h,f)}p((a=a.apply(i,t||[])).next())})};const S2=i=>{let t;return i?t=i:typeof fetch>"u"?t=(...r)=>Ds(async()=>{const{default:a}=await Promise.resolve().then(()=>Ns);return{default:a}},void 0).then(({default:a})=>a(...r)):t=fetch,(...r)=>t(...r)},qM=()=>HM(void 0,void 0,void 0,function*(){return typeof Response>"u"?(yield Ds(()=>Promise.resolve().then(()=>Ns),void 0)).Response:Response}),Kp=i=>{if(Array.isArray(i))return i.map(r=>Kp(r));if(typeof i=="function"||i!==Object(i))return i;const t={};return Object.entries(i).forEach(([r,a])=>{const o=r.replace(/([-_][a-z])/gi,u=>u.toUpperCase().replace(/[-_]/g,""));t[o]=Kp(a)}),t};var ga=function(i,t,r,a){function o(u){return u instanceof r?u:new r(function(c){c(u)})}return new(r||(r=Promise))(function(u,c){function h(g){try{p(a.next(g))}catch(v){c(v)}}function f(g){try{p(a.throw(g))}catch(v){c(v)}}function p(g){g.done?u(g.value):o(g.value).then(h,f)}p((a=a.apply(i,t||[])).next())})};const sp=i=>i.msg||i.message||i.error_description||i.error||JSON.stringify(i),GM=(i,t,r)=>ga(void 0,void 0,void 0,function*(){const a=yield qM();i instanceof a&&!(r!=null&&r.noResolveJson)?i.json().then(o=>{t(new $M(sp(o),i.status||500))}).catch(o=>{t(new Yp(sp(o),o))}):t(new Yp(sp(i),i))}),FM=(i,t,r,a)=>{const o={method:i,headers:(t==null?void 0:t.headers)||{}};return i==="GET"?o:(o.headers=Object.assign({"Content-Type":"application/json"},t==null?void 0:t.headers),a&&(o.body=JSON.stringify(a)),Object.assign(Object.assign({},o),r))};function _l(i,t,r,a,o,u){return ga(this,void 0,void 0,function*(){return new Promise((c,h)=>{i(r,FM(t,a,o,u)).then(f=>{if(!f.ok)throw f;return a!=null&&a.noResolveJson?f:f.json()}).then(f=>c(f)).catch(f=>GM(f,h,a))})})}function Uc(i,t,r,a){return ga(this,void 0,void 0,function*(){return _l(i,"GET",t,r,a)})}function vr(i,t,r,a,o){return ga(this,void 0,void 0,function*(){return _l(i,"POST",t,a,o,r)})}function IM(i,t,r,a,o){return ga(this,void 0,void 0,function*(){return _l(i,"PUT",t,a,o,r)})}function YM(i,t,r,a){return ga(this,void 0,void 0,function*(){return _l(i,"HEAD",t,Object.assign(Object.assign({},r),{noResolveJson:!0}),a)})}function A2(i,t,r,a,o){return ga(this,void 0,void 0,function*(){return _l(i,"DELETE",t,a,o,r)})}var ri=function(i,t,r,a){function o(u){return u instanceof r?u:new r(function(c){c(u)})}return new(r||(r=Promise))(function(u,c){function h(g){try{p(a.next(g))}catch(v){c(v)}}function f(g){try{p(a.throw(g))}catch(v){c(v)}}function p(g){g.done?u(g.value):o(g.value).then(h,f)}p((a=a.apply(i,t||[])).next())})};const KM={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},Mb={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};class XM{constructor(t,r={},a,o){this.url=t,this.headers=r,this.bucketId=a,this.fetch=S2(o)}uploadOrUpdate(t,r,a,o){return ri(this,void 0,void 0,function*(){try{let u;const c=Object.assign(Object.assign({},Mb),o);let h=Object.assign(Object.assign({},this.headers),t==="POST"&&{"x-upsert":String(c.upsert)});const f=c.metadata;typeof Blob<"u"&&a instanceof Blob?(u=new FormData,u.append("cacheControl",c.cacheControl),f&&u.append("metadata",this.encodeMetadata(f)),u.append("",a)):typeof FormData<"u"&&a instanceof FormData?(u=a,u.append("cacheControl",c.cacheControl),f&&u.append("metadata",this.encodeMetadata(f))):(u=a,h["cache-control"]=`max-age=${c.cacheControl}`,h["content-type"]=c.contentType,f&&(h["x-metadata"]=this.toBase64(this.encodeMetadata(f)))),o!=null&&o.headers&&(h=Object.assign(Object.assign({},h),o.headers));const p=this._removeEmptyFolders(r),g=this._getFinalPath(p),v=yield this.fetch(`${this.url}/object/${g}`,Object.assign({method:t,body:u,headers:h},c!=null&&c.duplex?{duplex:c.duplex}:{})),x=yield v.json();return v.ok?{data:{path:p,id:x.Id,fullPath:x.Key},error:null}:{data:null,error:x}}catch(u){if(Lt(u))return{data:null,error:u};throw u}})}upload(t,r,a){return ri(this,void 0,void 0,function*(){return this.uploadOrUpdate("POST",t,r,a)})}uploadToSignedUrl(t,r,a,o){return ri(this,void 0,void 0,function*(){const u=this._removeEmptyFolders(t),c=this._getFinalPath(u),h=new URL(this.url+`/object/upload/sign/${c}`);h.searchParams.set("token",r);try{let f;const p=Object.assign({upsert:Mb.upsert},o),g=Object.assign(Object.assign({},this.headers),{"x-upsert":String(p.upsert)});typeof Blob<"u"&&a instanceof Blob?(f=new FormData,f.append("cacheControl",p.cacheControl),f.append("",a)):typeof FormData<"u"&&a instanceof FormData?(f=a,f.append("cacheControl",p.cacheControl)):(f=a,g["cache-control"]=`max-age=${p.cacheControl}`,g["content-type"]=p.contentType);const v=yield this.fetch(h.toString(),{method:"PUT",body:f,headers:g}),x=yield v.json();return v.ok?{data:{path:u,fullPath:x.Key},error:null}:{data:null,error:x}}catch(f){if(Lt(f))return{data:null,error:f};throw f}})}createSignedUploadUrl(t,r){return ri(this,void 0,void 0,function*(){try{let a=this._getFinalPath(t);const o=Object.assign({},this.headers);r!=null&&r.upsert&&(o["x-upsert"]="true");const u=yield vr(this.fetch,`${this.url}/object/upload/sign/${a}`,{},{headers:o}),c=new URL(this.url+u.url),h=c.searchParams.get("token");if(!h)throw new t0("No token returned by API");return{data:{signedUrl:c.toString(),path:t,token:h},error:null}}catch(a){if(Lt(a))return{data:null,error:a};throw a}})}update(t,r,a){return ri(this,void 0,void 0,function*(){return this.uploadOrUpdate("PUT",t,r,a)})}move(t,r,a){return ri(this,void 0,void 0,function*(){try{return{data:yield vr(this.fetch,`${this.url}/object/move`,{bucketId:this.bucketId,sourceKey:t,destinationKey:r,destinationBucket:a==null?void 0:a.destinationBucket},{headers:this.headers}),error:null}}catch(o){if(Lt(o))return{data:null,error:o};throw o}})}copy(t,r,a){return ri(this,void 0,void 0,function*(){try{return{data:{path:(yield vr(this.fetch,`${this.url}/object/copy`,{bucketId:this.bucketId,sourceKey:t,destinationKey:r,destinationBucket:a==null?void 0:a.destinationBucket},{headers:this.headers})).Key},error:null}}catch(o){if(Lt(o))return{data:null,error:o};throw o}})}createSignedUrl(t,r,a){return ri(this,void 0,void 0,function*(){try{let o=this._getFinalPath(t),u=yield vr(this.fetch,`${this.url}/object/sign/${o}`,Object.assign({expiresIn:r},a!=null&&a.transform?{transform:a.transform}:{}),{headers:this.headers});const c=a!=null&&a.download?`&download=${a.download===!0?"":a.download}`:"";return u={signedUrl:encodeURI(`${this.url}${u.signedURL}${c}`)},{data:u,error:null}}catch(o){if(Lt(o))return{data:null,error:o};throw o}})}createSignedUrls(t,r,a){return ri(this,void 0,void 0,function*(){try{const o=yield vr(this.fetch,`${this.url}/object/sign/${this.bucketId}`,{expiresIn:r,paths:t},{headers:this.headers}),u=a!=null&&a.download?`&download=${a.download===!0?"":a.download}`:"";return{data:o.map(c=>Object.assign(Object.assign({},c),{signedUrl:c.signedURL?encodeURI(`${this.url}${c.signedURL}${u}`):null})),error:null}}catch(o){if(Lt(o))return{data:null,error:o};throw o}})}download(t,r){return ri(this,void 0,void 0,function*(){const o=typeof(r==null?void 0:r.transform)<"u"?"render/image/authenticated":"object",u=this.transformOptsToQueryString((r==null?void 0:r.transform)||{}),c=u?`?${u}`:"";try{const h=this._getFinalPath(t);return{data:yield(yield Uc(this.fetch,`${this.url}/${o}/${h}${c}`,{headers:this.headers,noResolveJson:!0})).blob(),error:null}}catch(h){if(Lt(h))return{data:null,error:h};throw h}})}info(t){return ri(this,void 0,void 0,function*(){const r=this._getFinalPath(t);try{const a=yield Uc(this.fetch,`${this.url}/object/info/${r}`,{headers:this.headers});return{data:Kp(a),error:null}}catch(a){if(Lt(a))return{data:null,error:a};throw a}})}exists(t){return ri(this,void 0,void 0,function*(){const r=this._getFinalPath(t);try{return yield YM(this.fetch,`${this.url}/object/${r}`,{headers:this.headers}),{data:!0,error:null}}catch(a){if(Lt(a)&&a instanceof Yp){const o=a.originalError;if([400,404].includes(o==null?void 0:o.status))return{data:!1,error:a}}throw a}})}getPublicUrl(t,r){const a=this._getFinalPath(t),o=[],u=r!=null&&r.download?`download=${r.download===!0?"":r.download}`:"";u!==""&&o.push(u);const h=typeof(r==null?void 0:r.transform)<"u"?"render/image":"object",f=this.transformOptsToQueryString((r==null?void 0:r.transform)||{});f!==""&&o.push(f);let p=o.join("&");return p!==""&&(p=`?${p}`),{data:{publicUrl:encodeURI(`${this.url}/${h}/public/${a}${p}`)}}}remove(t){return ri(this,void 0,void 0,function*(){try{return{data:yield A2(this.fetch,`${this.url}/object/${this.bucketId}`,{prefixes:t},{headers:this.headers}),error:null}}catch(r){if(Lt(r))return{data:null,error:r};throw r}})}list(t,r,a){return ri(this,void 0,void 0,function*(){try{const o=Object.assign(Object.assign(Object.assign({},KM),r),{prefix:t||""});return{data:yield vr(this.fetch,`${this.url}/object/list/${this.bucketId}`,o,{headers:this.headers},a),error:null}}catch(o){if(Lt(o))return{data:null,error:o};throw o}})}encodeMetadata(t){return JSON.stringify(t)}toBase64(t){return typeof Buffer<"u"?Buffer.from(t).toString("base64"):btoa(t)}_getFinalPath(t){return`${this.bucketId}/${t}`}_removeEmptyFolders(t){return t.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(t){const r=[];return t.width&&r.push(`width=${t.width}`),t.height&&r.push(`height=${t.height}`),t.resize&&r.push(`resize=${t.resize}`),t.format&&r.push(`format=${t.format}`),t.quality&&r.push(`quality=${t.quality}`),r.join("&")}}const QM="2.7.1",ZM={"X-Client-Info":`storage-js/${QM}`};var cs=function(i,t,r,a){function o(u){return u instanceof r?u:new r(function(c){c(u)})}return new(r||(r=Promise))(function(u,c){function h(g){try{p(a.next(g))}catch(v){c(v)}}function f(g){try{p(a.throw(g))}catch(v){c(v)}}function p(g){g.done?u(g.value):o(g.value).then(h,f)}p((a=a.apply(i,t||[])).next())})};class WM{constructor(t,r={},a){this.url=t,this.headers=Object.assign(Object.assign({},ZM),r),this.fetch=S2(a)}listBuckets(){return cs(this,void 0,void 0,function*(){try{return{data:yield Uc(this.fetch,`${this.url}/bucket`,{headers:this.headers}),error:null}}catch(t){if(Lt(t))return{data:null,error:t};throw t}})}getBucket(t){return cs(this,void 0,void 0,function*(){try{return{data:yield Uc(this.fetch,`${this.url}/bucket/${t}`,{headers:this.headers}),error:null}}catch(r){if(Lt(r))return{data:null,error:r};throw r}})}createBucket(t,r={public:!1}){return cs(this,void 0,void 0,function*(){try{return{data:yield vr(this.fetch,`${this.url}/bucket`,{id:t,name:t,public:r.public,file_size_limit:r.fileSizeLimit,allowed_mime_types:r.allowedMimeTypes},{headers:this.headers}),error:null}}catch(a){if(Lt(a))return{data:null,error:a};throw a}})}updateBucket(t,r){return cs(this,void 0,void 0,function*(){try{return{data:yield IM(this.fetch,`${this.url}/bucket/${t}`,{id:t,name:t,public:r.public,file_size_limit:r.fileSizeLimit,allowed_mime_types:r.allowedMimeTypes},{headers:this.headers}),error:null}}catch(a){if(Lt(a))return{data:null,error:a};throw a}})}emptyBucket(t){return cs(this,void 0,void 0,function*(){try{return{data:yield vr(this.fetch,`${this.url}/bucket/${t}/empty`,{},{headers:this.headers}),error:null}}catch(r){if(Lt(r))return{data:null,error:r};throw r}})}deleteBucket(t){return cs(this,void 0,void 0,function*(){try{return{data:yield A2(this.fetch,`${this.url}/bucket/${t}`,{},{headers:this.headers}),error:null}}catch(r){if(Lt(r))return{data:null,error:r};throw r}})}}class JM extends WM{constructor(t,r={},a){super(t,r,a)}from(t){return new XM(this.url,this.headers,t,this.fetch)}}const e8="2.49.4";let Qo="";typeof Deno<"u"?Qo="deno":typeof document<"u"?Qo="web":typeof navigator<"u"&&navigator.product==="ReactNative"?Qo="react-native":Qo="node";const t8={"X-Client-Info":`supabase-js-${Qo}/${e8}`},i8={headers:t8},n8={schema:"public"},r8={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},a8={};var s8=function(i,t,r,a){function o(u){return u instanceof r?u:new r(function(c){c(u)})}return new(r||(r=Promise))(function(u,c){function h(g){try{p(a.next(g))}catch(v){c(v)}}function f(g){try{p(a.throw(g))}catch(v){c(v)}}function p(g){g.done?u(g.value):o(g.value).then(h,f)}p((a=a.apply(i,t||[])).next())})};const o8=i=>{let t;return i?t=i:typeof fetch>"u"?t=f2:t=fetch,(...r)=>t(...r)},l8=()=>typeof Headers>"u"?h2:Headers,u8=(i,t,r)=>{const a=o8(r),o=l8();return(u,c)=>s8(void 0,void 0,void 0,function*(){var h;const f=(h=yield t())!==null&&h!==void 0?h:i;let p=new o(c==null?void 0:c.headers);return p.has("apikey")||p.set("apikey",i),p.has("Authorization")||p.set("Authorization",`Bearer ${f}`),a(u,Object.assign(Object.assign({},c),{headers:p}))})};var c8=function(i,t,r,a){function o(u){return u instanceof r?u:new r(function(c){c(u)})}return new(r||(r=Promise))(function(u,c){function h(g){try{p(a.next(g))}catch(v){c(v)}}function f(g){try{p(a.throw(g))}catch(v){c(v)}}function p(g){g.done?u(g.value):o(g.value).then(h,f)}p((a=a.apply(i,t||[])).next())})};function d8(i){return i.replace(/\/$/,"")}function f8(i,t){const{db:r,auth:a,realtime:o,global:u}=i,{db:c,auth:h,realtime:f,global:p}=t,g={db:Object.assign(Object.assign({},c),r),auth:Object.assign(Object.assign({},h),a),realtime:Object.assign(Object.assign({},f),o),global:Object.assign(Object.assign({},p),u),accessToken:()=>c8(this,void 0,void 0,function*(){return""})};return i.accessToken?g.accessToken=i.accessToken:delete g.accessToken,g}const _2="2.69.1",hs=30*1e3,Xp=3,op=Xp*hs,h8="http://localhost:9999",p8="supabase.auth.token",m8={"X-Client-Info":`gotrue-js/${_2}`},Qp="X-Supabase-Api-Version",E2={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},g8=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,y8=6e5;class i0 extends Error{constructor(t,r,a){super(t),this.__isAuthError=!0,this.name="AuthError",this.status=r,this.code=a}}function Re(i){return typeof i=="object"&&i!==null&&"__isAuthError"in i}class v8 extends i0{constructor(t,r,a){super(t,r,a),this.name="AuthApiError",this.status=r,this.code=a}}function x8(i){return Re(i)&&i.name==="AuthApiError"}class T2 extends i0{constructor(t,r){super(t),this.name="AuthUnknownError",this.originalError=r}}class Rr extends i0{constructor(t,r,a,o){super(t,a,o),this.name=r,this.status=a}}class gr extends Rr{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function b8(i){return Re(i)&&i.name==="AuthSessionMissingError"}class lp extends Rr{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class sc extends Rr{constructor(t){super(t,"AuthInvalidCredentialsError",400,void 0)}}class oc extends Rr{constructor(t,r=null){super(t,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=r}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}function w8(i){return Re(i)&&i.name==="AuthImplicitGrantRedirectError"}class zb extends Rr{constructor(t,r=null){super(t,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=r}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class Zp extends Rr{constructor(t,r){super(t,"AuthRetryableFetchError",r,void 0)}}function up(i){return Re(i)&&i.name==="AuthRetryableFetchError"}class Lb extends Rr{constructor(t,r,a){super(t,"AuthWeakPasswordError",r,"weak_password"),this.reasons=a}}class nl extends Rr{constructor(t){super(t,"AuthInvalidJwtError",400,"invalid_jwt")}}const Pb="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),Ub=` 	
\r=`.split(""),S8=(()=>{const i=new Array(128);for(let t=0;t<i.length;t+=1)i[t]=-1;for(let t=0;t<Ub.length;t+=1)i[Ub[t].charCodeAt(0)]=-2;for(let t=0;t<Pb.length;t+=1)i[Pb[t].charCodeAt(0)]=t;return i})();function j2(i,t,r){const a=S8[i];if(a>-1)for(t.queue=t.queue<<6|a,t.queuedBits+=6;t.queuedBits>=8;)r(t.queue>>t.queuedBits-8&255),t.queuedBits-=8;else{if(a===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(i)}"`)}}function Nb(i){const t=[],r=c=>{t.push(String.fromCodePoint(c))},a={utf8seq:0,codepoint:0},o={queue:0,queuedBits:0},u=c=>{E8(c,a,r)};for(let c=0;c<i.length;c+=1)j2(i.charCodeAt(c),o,u);return t.join("")}function A8(i,t){if(i<=127){t(i);return}else if(i<=2047){t(192|i>>6),t(128|i&63);return}else if(i<=65535){t(224|i>>12),t(128|i>>6&63),t(128|i&63);return}else if(i<=1114111){t(240|i>>18),t(128|i>>12&63),t(128|i>>6&63),t(128|i&63);return}throw new Error(`Unrecognized Unicode codepoint: ${i.toString(16)}`)}function _8(i,t){for(let r=0;r<i.length;r+=1){let a=i.charCodeAt(r);if(a>55295&&a<=56319){const o=(a-55296)*1024&65535;a=(i.charCodeAt(r+1)-56320&65535|o)+65536,r+=1}A8(a,t)}}function E8(i,t,r){if(t.utf8seq===0){if(i<=127){r(i);return}for(let a=1;a<6;a+=1)if((i>>7-a&1)===0){t.utf8seq=a;break}if(t.utf8seq===2)t.codepoint=i&31;else if(t.utf8seq===3)t.codepoint=i&15;else if(t.utf8seq===4)t.codepoint=i&7;else throw new Error("Invalid UTF-8 sequence");t.utf8seq-=1}else if(t.utf8seq>0){if(i<=127)throw new Error("Invalid UTF-8 sequence");t.codepoint=t.codepoint<<6|i&63,t.utf8seq-=1,t.utf8seq===0&&r(t.codepoint)}}function T8(i){const t=[],r={queue:0,queuedBits:0},a=o=>{t.push(o)};for(let o=0;o<i.length;o+=1)j2(i.charCodeAt(o),r,a);return new Uint8Array(t)}function j8(i){const t=[];return _8(i,r=>t.push(r)),new Uint8Array(t)}function R8(i){return Math.round(Date.now()/1e3)+i}function C8(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(i){const t=Math.random()*16|0;return(i=="x"?t:t&3|8).toString(16)})}const un=()=>typeof window<"u"&&typeof document<"u",ta={tested:!1,writable:!1},rl=()=>{if(!un())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(ta.tested)return ta.writable;const i=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(i,i),globalThis.localStorage.removeItem(i),ta.tested=!0,ta.writable=!0}catch{ta.tested=!0,ta.writable=!1}return ta.writable};function k8(i){const t={},r=new URL(i);if(r.hash&&r.hash[0]==="#")try{new URLSearchParams(r.hash.substring(1)).forEach((o,u)=>{t[u]=o})}catch{}return r.searchParams.forEach((a,o)=>{t[o]=a}),t}const R2=i=>{let t;return i?t=i:typeof fetch>"u"?t=(...r)=>Ds(async()=>{const{default:a}=await Promise.resolve().then(()=>Ns);return{default:a}},void 0).then(({default:a})=>a(...r)):t=fetch,(...r)=>t(...r)},D8=i=>typeof i=="object"&&i!==null&&"status"in i&&"ok"in i&&"json"in i&&typeof i.json=="function",C2=async(i,t,r)=>{await i.setItem(t,JSON.stringify(r))},lc=async(i,t)=>{const r=await i.getItem(t);if(!r)return null;try{return JSON.parse(r)}catch{return r}},uc=async(i,t)=>{await i.removeItem(t)};class Jc{constructor(){this.promise=new Jc.promiseConstructor((t,r)=>{this.resolve=t,this.reject=r})}}Jc.promiseConstructor=Promise;function cp(i){const t=i.split(".");if(t.length!==3)throw new nl("Invalid JWT structure");for(let a=0;a<t.length;a++)if(!g8.test(t[a]))throw new nl("JWT not in base64url format");return{header:JSON.parse(Nb(t[0])),payload:JSON.parse(Nb(t[1])),signature:T8(t[2]),raw:{header:t[0],payload:t[1]}}}async function O8(i){return await new Promise(t=>{setTimeout(()=>t(null),i)})}function M8(i,t){return new Promise((a,o)=>{(async()=>{for(let u=0;u<1/0;u++)try{const c=await i(u);if(!t(u,null,c)){a(c);return}}catch(c){if(!t(u,c)){o(c);return}}})()})}function z8(i){return("0"+i.toString(16)).substr(-2)}function L8(){const t=new Uint32Array(56);if(typeof crypto>"u"){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",a=r.length;let o="";for(let u=0;u<56;u++)o+=r.charAt(Math.floor(Math.random()*a));return o}return crypto.getRandomValues(t),Array.from(t,z8).join("")}async function P8(i){const r=new TextEncoder().encode(i),a=await crypto.subtle.digest("SHA-256",r),o=new Uint8Array(a);return Array.from(o).map(u=>String.fromCharCode(u)).join("")}async function U8(i){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),i;const r=await P8(i);return btoa(r).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function ds(i,t,r=!1){const a=L8();let o=a;r&&(o+="/PASSWORD_RECOVERY"),await C2(i,`${t}-code-verifier`,o);const u=await U8(a);return[u,a===u?"plain":"s256"]}const N8=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function B8(i){const t=i.headers.get(Qp);if(!t||!t.match(N8))return null;try{return new Date(`${t}T00:00:00.0Z`)}catch{return null}}function V8(i){if(!i)throw new Error("Missing exp claim");const t=Math.floor(Date.now()/1e3);if(i<=t)throw new Error("JWT has expired")}function $8(i){switch(i){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}var H8=function(i,t){var r={};for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&t.indexOf(a)<0&&(r[a]=i[a]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(i);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(i,a[o])&&(r[a[o]]=i[a[o]]);return r};const sa=i=>i.msg||i.message||i.error_description||i.error||JSON.stringify(i),q8=[502,503,504];async function Bb(i){var t;if(!D8(i))throw new Zp(sa(i),0);if(q8.includes(i.status))throw new Zp(sa(i),i.status);let r;try{r=await i.json()}catch(u){throw new T2(sa(u),u)}let a;const o=B8(i);if(o&&o.getTime()>=E2["2024-01-01"].timestamp&&typeof r=="object"&&r&&typeof r.code=="string"?a=r.code:typeof r=="object"&&r&&typeof r.error_code=="string"&&(a=r.error_code),a){if(a==="weak_password")throw new Lb(sa(r),i.status,((t=r.weak_password)===null||t===void 0?void 0:t.reasons)||[]);if(a==="session_not_found")throw new gr}else if(typeof r=="object"&&r&&typeof r.weak_password=="object"&&r.weak_password&&Array.isArray(r.weak_password.reasons)&&r.weak_password.reasons.length&&r.weak_password.reasons.reduce((u,c)=>u&&typeof c=="string",!0))throw new Lb(sa(r),i.status,r.weak_password.reasons);throw new v8(sa(r),i.status||500,a)}const G8=(i,t,r,a)=>{const o={method:i,headers:(t==null?void 0:t.headers)||{}};return i==="GET"?o:(o.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},t==null?void 0:t.headers),o.body=JSON.stringify(a),Object.assign(Object.assign({},o),r))};async function Le(i,t,r,a){var o;const u=Object.assign({},a==null?void 0:a.headers);u[Qp]||(u[Qp]=E2["2024-01-01"].name),a!=null&&a.jwt&&(u.Authorization=`Bearer ${a.jwt}`);const c=(o=a==null?void 0:a.query)!==null&&o!==void 0?o:{};a!=null&&a.redirectTo&&(c.redirect_to=a.redirectTo);const h=Object.keys(c).length?"?"+new URLSearchParams(c).toString():"",f=await F8(i,t,r+h,{headers:u,noResolveJson:a==null?void 0:a.noResolveJson},{},a==null?void 0:a.body);return a!=null&&a.xform?a==null?void 0:a.xform(f):{data:Object.assign({},f),error:null}}async function F8(i,t,r,a,o,u){const c=G8(t,a,o,u);let h;try{h=await i(r,Object.assign({},c))}catch(f){throw console.error(f),new Zp(sa(f),0)}if(h.ok||await Bb(h),a!=null&&a.noResolveJson)return h;try{return await h.json()}catch(f){await Bb(f)}}function yr(i){var t;let r=null;X8(i)&&(r=Object.assign({},i),i.expires_at||(r.expires_at=R8(i.expires_in)));const a=(t=i.user)!==null&&t!==void 0?t:i;return{data:{session:r,user:a},error:null}}function Vb(i){const t=yr(i);return!t.error&&i.weak_password&&typeof i.weak_password=="object"&&Array.isArray(i.weak_password.reasons)&&i.weak_password.reasons.length&&i.weak_password.message&&typeof i.weak_password.message=="string"&&i.weak_password.reasons.reduce((r,a)=>r&&typeof a=="string",!0)&&(t.data.weak_password=i.weak_password),t}function br(i){var t;return{data:{user:(t=i.user)!==null&&t!==void 0?t:i},error:null}}function I8(i){return{data:i,error:null}}function Y8(i){const{action_link:t,email_otp:r,hashed_token:a,redirect_to:o,verification_type:u}=i,c=H8(i,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),h={action_link:t,email_otp:r,hashed_token:a,redirect_to:o,verification_type:u},f=Object.assign({},c);return{data:{properties:h,user:f},error:null}}function K8(i){return i}function X8(i){return i.access_token&&i.refresh_token&&i.expires_in}var Q8=function(i,t){var r={};for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&t.indexOf(a)<0&&(r[a]=i[a]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(i);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(i,a[o])&&(r[a[o]]=i[a[o]]);return r};class Z8{constructor({url:t="",headers:r={},fetch:a}){this.url=t,this.headers=r,this.fetch=R2(a),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)}}async signOut(t,r="global"){try{return await Le(this.fetch,"POST",`${this.url}/logout?scope=${r}`,{headers:this.headers,jwt:t,noResolveJson:!0}),{data:null,error:null}}catch(a){if(Re(a))return{data:null,error:a};throw a}}async inviteUserByEmail(t,r={}){try{return await Le(this.fetch,"POST",`${this.url}/invite`,{body:{email:t,data:r.data},headers:this.headers,redirectTo:r.redirectTo,xform:br})}catch(a){if(Re(a))return{data:{user:null},error:a};throw a}}async generateLink(t){try{const{options:r}=t,a=Q8(t,["options"]),o=Object.assign(Object.assign({},a),r);return"newEmail"in a&&(o.new_email=a==null?void 0:a.newEmail,delete o.newEmail),await Le(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:o,headers:this.headers,xform:Y8,redirectTo:r==null?void 0:r.redirectTo})}catch(r){if(Re(r))return{data:{properties:null,user:null},error:r};throw r}}async createUser(t){try{return await Le(this.fetch,"POST",`${this.url}/admin/users`,{body:t,headers:this.headers,xform:br})}catch(r){if(Re(r))return{data:{user:null},error:r};throw r}}async listUsers(t){var r,a,o,u,c,h,f;try{const p={nextPage:null,lastPage:0,total:0},g=await Le(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(a=(r=t==null?void 0:t.page)===null||r===void 0?void 0:r.toString())!==null&&a!==void 0?a:"",per_page:(u=(o=t==null?void 0:t.perPage)===null||o===void 0?void 0:o.toString())!==null&&u!==void 0?u:""},xform:K8});if(g.error)throw g.error;const v=await g.json(),x=(c=g.headers.get("x-total-count"))!==null&&c!==void 0?c:0,w=(f=(h=g.headers.get("link"))===null||h===void 0?void 0:h.split(","))!==null&&f!==void 0?f:[];return w.length>0&&(w.forEach(S=>{const T=parseInt(S.split(";")[0].split("=")[1].substring(0,1)),E=JSON.parse(S.split(";")[1].split("=")[1]);p[`${E}Page`]=T}),p.total=parseInt(x)),{data:Object.assign(Object.assign({},v),p),error:null}}catch(p){if(Re(p))return{data:{users:[]},error:p};throw p}}async getUserById(t){try{return await Le(this.fetch,"GET",`${this.url}/admin/users/${t}`,{headers:this.headers,xform:br})}catch(r){if(Re(r))return{data:{user:null},error:r};throw r}}async updateUserById(t,r){try{return await Le(this.fetch,"PUT",`${this.url}/admin/users/${t}`,{body:r,headers:this.headers,xform:br})}catch(a){if(Re(a))return{data:{user:null},error:a};throw a}}async deleteUser(t,r=!1){try{return await Le(this.fetch,"DELETE",`${this.url}/admin/users/${t}`,{headers:this.headers,body:{should_soft_delete:r},xform:br})}catch(a){if(Re(a))return{data:{user:null},error:a};throw a}}async _listFactors(t){try{const{data:r,error:a}=await Le(this.fetch,"GET",`${this.url}/admin/users/${t.userId}/factors`,{headers:this.headers,xform:o=>({data:{factors:o},error:null})});return{data:r,error:a}}catch(r){if(Re(r))return{data:null,error:r};throw r}}async _deleteFactor(t){try{return{data:await Le(this.fetch,"DELETE",`${this.url}/admin/users/${t.userId}/factors/${t.id}`,{headers:this.headers}),error:null}}catch(r){if(Re(r))return{data:null,error:r};throw r}}}const W8={getItem:i=>rl()?globalThis.localStorage.getItem(i):null,setItem:(i,t)=>{rl()&&globalThis.localStorage.setItem(i,t)},removeItem:i=>{rl()&&globalThis.localStorage.removeItem(i)}};function $b(i={}){return{getItem:t=>i[t]||null,setItem:(t,r)=>{i[t]=r},removeItem:t=>{delete i[t]}}}function J8(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}const fs={debug:!!(globalThis&&rl()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")==="true")};class k2 extends Error{constructor(t){super(t),this.isAcquireTimeout=!0}}class e6 extends k2{}async function t6(i,t,r){fs.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire lock",i,t);const a=new globalThis.AbortController;return t>0&&setTimeout(()=>{a.abort(),fs.debug&&console.log("@supabase/gotrue-js: navigatorLock acquire timed out",i)},t),await Promise.resolve().then(()=>globalThis.navigator.locks.request(i,t===0?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:a.signal},async o=>{if(o){fs.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquired",i,o.name);try{return await r()}finally{fs.debug&&console.log("@supabase/gotrue-js: navigatorLock: released",i,o.name)}}else{if(t===0)throw fs.debug&&console.log("@supabase/gotrue-js: navigatorLock: not immediately available",i),new e6(`Acquiring an exclusive Navigator LockManager lock "${i}" immediately failed`);if(fs.debug)try{const u=await globalThis.navigator.locks.query();console.log("@supabase/gotrue-js: Navigator LockManager state",JSON.stringify(u,null,"  "))}catch(u){console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state",u)}return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),await r()}}))}J8();const i6={url:h8,storageKey:p8,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:m8,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1};async function Hb(i,t,r){return await r()}class ml{constructor(t){var r,a;this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log,this.instanceID=ml.nextInstanceID,ml.nextInstanceID+=1,this.instanceID>0&&un()&&console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");const o=Object.assign(Object.assign({},i6),t);if(this.logDebugMessages=!!o.debug,typeof o.debug=="function"&&(this.logger=o.debug),this.persistSession=o.persistSession,this.storageKey=o.storageKey,this.autoRefreshToken=o.autoRefreshToken,this.admin=new Z8({url:o.url,headers:o.headers,fetch:o.fetch}),this.url=o.url,this.headers=o.headers,this.fetch=R2(o.fetch),this.lock=o.lock||Hb,this.detectSessionInUrl=o.detectSessionInUrl,this.flowType=o.flowType,this.hasCustomAuthorizationHeader=o.hasCustomAuthorizationHeader,o.lock?this.lock=o.lock:un()&&(!((r=globalThis==null?void 0:globalThis.navigator)===null||r===void 0)&&r.locks)?this.lock=t6:this.lock=Hb,this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER,this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this)},this.persistSession?o.storage?this.storage=o.storage:rl()?this.storage=W8:(this.memoryStorage={},this.storage=$b(this.memoryStorage)):(this.memoryStorage={},this.storage=$b(this.memoryStorage)),un()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(u){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",u)}(a=this.broadcastChannel)===null||a===void 0||a.addEventListener("message",async u=>{this._debug("received broadcast notification from other tab or client",u),await this._notifyAllSubscribers(u.data.event,u.data.session,!1)})}this.initialize()}_debug(...t){return this.logDebugMessages&&this.logger(`GoTrueClient@${this.instanceID} (${_2}) ${new Date().toISOString()}`,...t),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(-1,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){var t;try{const r=k8(window.location.href);let a="none";if(this._isImplicitGrantCallback(r)?a="implicit":await this._isPKCECallback(r)&&(a="pkce"),un()&&this.detectSessionInUrl&&a!=="none"){const{data:o,error:u}=await this._getSessionFromURL(r,a);if(u){if(this._debug("#_initialize()","error detecting session from URL",u),w8(u)){const f=(t=u.details)===null||t===void 0?void 0:t.code;if(f==="identity_already_exists"||f==="identity_not_found"||f==="single_identity_not_deletable")return{error:u}}return await this._removeSession(),{error:u}}const{session:c,redirectType:h}=o;return this._debug("#_initialize()","detected session in URL",c,"redirect type",h),await this._saveSession(c),setTimeout(async()=>{h==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",c):await this._notifyAllSubscribers("SIGNED_IN",c)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(r){return Re(r)?{error:r}:{error:new T2("Unexpected error during initialization",r)}}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(t){var r,a,o;try{const u=await Le(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(a=(r=t==null?void 0:t.options)===null||r===void 0?void 0:r.data)!==null&&a!==void 0?a:{},gotrue_meta_security:{captcha_token:(o=t==null?void 0:t.options)===null||o===void 0?void 0:o.captchaToken}},xform:yr}),{data:c,error:h}=u;if(h||!c)return{data:{user:null,session:null},error:h};const f=c.session,p=c.user;return c.session&&(await this._saveSession(c.session),await this._notifyAllSubscribers("SIGNED_IN",f)),{data:{user:p,session:f},error:null}}catch(u){if(Re(u))return{data:{user:null,session:null},error:u};throw u}}async signUp(t){var r,a,o;try{let u;if("email"in t){const{email:g,password:v,options:x}=t;let w=null,S=null;this.flowType==="pkce"&&([w,S]=await ds(this.storage,this.storageKey)),u=await Le(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:x==null?void 0:x.emailRedirectTo,body:{email:g,password:v,data:(r=x==null?void 0:x.data)!==null&&r!==void 0?r:{},gotrue_meta_security:{captcha_token:x==null?void 0:x.captchaToken},code_challenge:w,code_challenge_method:S},xform:yr})}else if("phone"in t){const{phone:g,password:v,options:x}=t;u=await Le(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:g,password:v,data:(a=x==null?void 0:x.data)!==null&&a!==void 0?a:{},channel:(o=x==null?void 0:x.channel)!==null&&o!==void 0?o:"sms",gotrue_meta_security:{captcha_token:x==null?void 0:x.captchaToken}},xform:yr})}else throw new sc("You must provide either an email or phone number and a password");const{data:c,error:h}=u;if(h||!c)return{data:{user:null,session:null},error:h};const f=c.session,p=c.user;return c.session&&(await this._saveSession(c.session),await this._notifyAllSubscribers("SIGNED_IN",f)),{data:{user:p,session:f},error:null}}catch(u){if(Re(u))return{data:{user:null,session:null},error:u};throw u}}async signInWithPassword(t){try{let r;if("email"in t){const{email:u,password:c,options:h}=t;r=await Le(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:u,password:c,gotrue_meta_security:{captcha_token:h==null?void 0:h.captchaToken}},xform:Vb})}else if("phone"in t){const{phone:u,password:c,options:h}=t;r=await Le(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:u,password:c,gotrue_meta_security:{captcha_token:h==null?void 0:h.captchaToken}},xform:Vb})}else throw new sc("You must provide either an email or phone number and a password");const{data:a,error:o}=r;return o?{data:{user:null,session:null},error:o}:!a||!a.session||!a.user?{data:{user:null,session:null},error:new lp}:(a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",a.session)),{data:Object.assign({user:a.user,session:a.session},a.weak_password?{weakPassword:a.weak_password}:null),error:o})}catch(r){if(Re(r))return{data:{user:null,session:null},error:r};throw r}}async signInWithOAuth(t){var r,a,o,u;return await this._handleProviderSignIn(t.provider,{redirectTo:(r=t.options)===null||r===void 0?void 0:r.redirectTo,scopes:(a=t.options)===null||a===void 0?void 0:a.scopes,queryParams:(o=t.options)===null||o===void 0?void 0:o.queryParams,skipBrowserRedirect:(u=t.options)===null||u===void 0?void 0:u.skipBrowserRedirect})}async exchangeCodeForSession(t){return await this.initializePromise,this._acquireLock(-1,async()=>this._exchangeCodeForSession(t))}async _exchangeCodeForSession(t){const r=await lc(this.storage,`${this.storageKey}-code-verifier`),[a,o]=(r??"").split("/");try{const{data:u,error:c}=await Le(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:t,code_verifier:a},xform:yr});if(await uc(this.storage,`${this.storageKey}-code-verifier`),c)throw c;return!u||!u.session||!u.user?{data:{user:null,session:null,redirectType:null},error:new lp}:(u.session&&(await this._saveSession(u.session),await this._notifyAllSubscribers("SIGNED_IN",u.session)),{data:Object.assign(Object.assign({},u),{redirectType:o??null}),error:c})}catch(u){if(Re(u))return{data:{user:null,session:null,redirectType:null},error:u};throw u}}async signInWithIdToken(t){try{const{options:r,provider:a,token:o,access_token:u,nonce:c}=t,h=await Le(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:a,id_token:o,access_token:u,nonce:c,gotrue_meta_security:{captcha_token:r==null?void 0:r.captchaToken}},xform:yr}),{data:f,error:p}=h;return p?{data:{user:null,session:null},error:p}:!f||!f.session||!f.user?{data:{user:null,session:null},error:new lp}:(f.session&&(await this._saveSession(f.session),await this._notifyAllSubscribers("SIGNED_IN",f.session)),{data:f,error:p})}catch(r){if(Re(r))return{data:{user:null,session:null},error:r};throw r}}async signInWithOtp(t){var r,a,o,u,c;try{if("email"in t){const{email:h,options:f}=t;let p=null,g=null;this.flowType==="pkce"&&([p,g]=await ds(this.storage,this.storageKey));const{error:v}=await Le(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:h,data:(r=f==null?void 0:f.data)!==null&&r!==void 0?r:{},create_user:(a=f==null?void 0:f.shouldCreateUser)!==null&&a!==void 0?a:!0,gotrue_meta_security:{captcha_token:f==null?void 0:f.captchaToken},code_challenge:p,code_challenge_method:g},redirectTo:f==null?void 0:f.emailRedirectTo});return{data:{user:null,session:null},error:v}}if("phone"in t){const{phone:h,options:f}=t,{data:p,error:g}=await Le(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:h,data:(o=f==null?void 0:f.data)!==null&&o!==void 0?o:{},create_user:(u=f==null?void 0:f.shouldCreateUser)!==null&&u!==void 0?u:!0,gotrue_meta_security:{captcha_token:f==null?void 0:f.captchaToken},channel:(c=f==null?void 0:f.channel)!==null&&c!==void 0?c:"sms"}});return{data:{user:null,session:null,messageId:p==null?void 0:p.message_id},error:g}}throw new sc("You must provide either an email or phone number.")}catch(h){if(Re(h))return{data:{user:null,session:null},error:h};throw h}}async verifyOtp(t){var r,a;try{let o,u;"options"in t&&(o=(r=t.options)===null||r===void 0?void 0:r.redirectTo,u=(a=t.options)===null||a===void 0?void 0:a.captchaToken);const{data:c,error:h}=await Le(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},t),{gotrue_meta_security:{captcha_token:u}}),redirectTo:o,xform:yr});if(h)throw h;if(!c)throw new Error("An error occurred on token verification.");const f=c.session,p=c.user;return f!=null&&f.access_token&&(await this._saveSession(f),await this._notifyAllSubscribers(t.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",f)),{data:{user:p,session:f},error:null}}catch(o){if(Re(o))return{data:{user:null,session:null},error:o};throw o}}async signInWithSSO(t){var r,a,o;try{let u=null,c=null;return this.flowType==="pkce"&&([u,c]=await ds(this.storage,this.storageKey)),await Le(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in t?{provider_id:t.providerId}:null),"domain"in t?{domain:t.domain}:null),{redirect_to:(a=(r=t.options)===null||r===void 0?void 0:r.redirectTo)!==null&&a!==void 0?a:void 0}),!((o=t==null?void 0:t.options)===null||o===void 0)&&o.captchaToken?{gotrue_meta_security:{captcha_token:t.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:u,code_challenge_method:c}),headers:this.headers,xform:I8})}catch(u){if(Re(u))return{data:null,error:u};throw u}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async t=>{const{data:{session:r},error:a}=t;if(a)throw a;if(!r)throw new gr;const{error:o}=await Le(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:r.access_token});return{data:{user:null,session:null},error:o}})}catch(t){if(Re(t))return{data:{user:null,session:null},error:t};throw t}}async resend(t){try{const r=`${this.url}/resend`;if("email"in t){const{email:a,type:o,options:u}=t,{error:c}=await Le(this.fetch,"POST",r,{headers:this.headers,body:{email:a,type:o,gotrue_meta_security:{captcha_token:u==null?void 0:u.captchaToken}},redirectTo:u==null?void 0:u.emailRedirectTo});return{data:{user:null,session:null},error:c}}else if("phone"in t){const{phone:a,type:o,options:u}=t,{data:c,error:h}=await Le(this.fetch,"POST",r,{headers:this.headers,body:{phone:a,type:o,gotrue_meta_security:{captcha_token:u==null?void 0:u.captchaToken}}});return{data:{user:null,session:null,messageId:c==null?void 0:c.message_id},error:h}}throw new sc("You must provide either an email or phone number and a type")}catch(r){if(Re(r))return{data:{user:null,session:null},error:r};throw r}}async getSession(){return await this.initializePromise,await this._acquireLock(-1,async()=>this._useSession(async r=>r))}async _acquireLock(t,r){this._debug("#_acquireLock","begin",t);try{if(this.lockAcquired){const a=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),o=(async()=>(await a,await r()))();return this.pendingInLock.push((async()=>{try{await o}catch{}})()),o}return await this.lock(`lock:${this.storageKey}`,t,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const a=r();for(this.pendingInLock.push((async()=>{try{await a}catch{}})()),await a;this.pendingInLock.length;){const o=[...this.pendingInLock];await Promise.all(o),this.pendingInLock.splice(0,o.length)}return await a}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(t){this._debug("#_useSession","begin");try{const r=await this.__loadSession();return await t(r)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let t=null;const r=await lc(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",r),r!==null&&(this._isValidSession(r)?t=r:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!t)return{data:{session:null},error:null};const a=t.expires_at?t.expires_at*1e3-Date.now()<op:!1;if(this._debug("#__loadSession()",`session has${a?"":" not"} expired`,"expires_at",t.expires_at),!a){if(this.storage.isServer){let c=this.suppressGetSessionWarning;t=new Proxy(t,{get:(f,p,g)=>(!c&&p==="user"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),c=!0,this.suppressGetSessionWarning=!0),Reflect.get(f,p,g))})}return{data:{session:t},error:null}}const{session:o,error:u}=await this._callRefreshToken(t.refresh_token);return u?{data:{session:null},error:u}:{data:{session:o},error:null}}finally{this._debug("#__loadSession()","end")}}async getUser(t){return t?await this._getUser(t):(await this.initializePromise,await this._acquireLock(-1,async()=>await this._getUser()))}async _getUser(t){try{return t?await Le(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:t,xform:br}):await this._useSession(async r=>{var a,o,u;const{data:c,error:h}=r;if(h)throw h;return!(!((a=c.session)===null||a===void 0)&&a.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new gr}:await Le(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(u=(o=c.session)===null||o===void 0?void 0:o.access_token)!==null&&u!==void 0?u:void 0,xform:br})})}catch(r){if(Re(r))return b8(r)&&(await this._removeSession(),await uc(this.storage,`${this.storageKey}-code-verifier`)),{data:{user:null},error:r};throw r}}async updateUser(t,r={}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._updateUser(t,r))}async _updateUser(t,r={}){try{return await this._useSession(async a=>{const{data:o,error:u}=a;if(u)throw u;if(!o.session)throw new gr;const c=o.session;let h=null,f=null;this.flowType==="pkce"&&t.email!=null&&([h,f]=await ds(this.storage,this.storageKey));const{data:p,error:g}=await Le(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:r==null?void 0:r.emailRedirectTo,body:Object.assign(Object.assign({},t),{code_challenge:h,code_challenge_method:f}),jwt:c.access_token,xform:br});if(g)throw g;return c.user=p.user,await this._saveSession(c),await this._notifyAllSubscribers("USER_UPDATED",c),{data:{user:c.user},error:null}})}catch(a){if(Re(a))return{data:{user:null},error:a};throw a}}async setSession(t){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._setSession(t))}async _setSession(t){try{if(!t.access_token||!t.refresh_token)throw new gr;const r=Date.now()/1e3;let a=r,o=!0,u=null;const{payload:c}=cp(t.access_token);if(c.exp&&(a=c.exp,o=a<=r),o){const{session:h,error:f}=await this._callRefreshToken(t.refresh_token);if(f)return{data:{user:null,session:null},error:f};if(!h)return{data:{user:null,session:null},error:null};u=h}else{const{data:h,error:f}=await this._getUser(t.access_token);if(f)throw f;u={access_token:t.access_token,refresh_token:t.refresh_token,user:h.user,token_type:"bearer",expires_in:a-r,expires_at:a},await this._saveSession(u),await this._notifyAllSubscribers("SIGNED_IN",u)}return{data:{user:u.user,session:u},error:null}}catch(r){if(Re(r))return{data:{session:null,user:null},error:r};throw r}}async refreshSession(t){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._refreshSession(t))}async _refreshSession(t){try{return await this._useSession(async r=>{var a;if(!t){const{data:c,error:h}=r;if(h)throw h;t=(a=c.session)!==null&&a!==void 0?a:void 0}if(!(t!=null&&t.refresh_token))throw new gr;const{session:o,error:u}=await this._callRefreshToken(t.refresh_token);return u?{data:{user:null,session:null},error:u}:o?{data:{user:o.user,session:o},error:null}:{data:{user:null,session:null},error:null}})}catch(r){if(Re(r))return{data:{user:null,session:null},error:r};throw r}}async _getSessionFromURL(t,r){try{if(!un())throw new oc("No browser detected.");if(t.error||t.error_description||t.error_code)throw new oc(t.error_description||"Error in URL with unspecified error_description",{error:t.error||"unspecified_error",code:t.error_code||"unspecified_code"});switch(r){case"implicit":if(this.flowType==="pkce")throw new zb("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new oc("Not a valid implicit grant flow url.");break;default:}if(r==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!t.code)throw new zb("No code detected.");const{data:D,error:M}=await this._exchangeCodeForSession(t.code);if(M)throw M;const V=new URL(window.location.href);return V.searchParams.delete("code"),window.history.replaceState(window.history.state,"",V.toString()),{data:{session:D.session,redirectType:null},error:null}}const{provider_token:a,provider_refresh_token:o,access_token:u,refresh_token:c,expires_in:h,expires_at:f,token_type:p}=t;if(!u||!h||!c||!p)throw new oc("No session defined in URL");const g=Math.round(Date.now()/1e3),v=parseInt(h);let x=g+v;f&&(x=parseInt(f));const w=x-g;w*1e3<=hs&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${w}s, should have been closer to ${v}s`);const S=x-v;g-S>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",S,x,g):g-S<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",S,x,g);const{data:T,error:E}=await this._getUser(u);if(E)throw E;const j={provider_token:a,provider_refresh_token:o,access_token:u,expires_in:v,expires_at:x,refresh_token:c,token_type:p,user:T.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),{data:{session:j,redirectType:t.type},error:null}}catch(a){if(Re(a))return{data:{session:null,redirectType:null},error:a};throw a}}_isImplicitGrantCallback(t){return!!(t.access_token||t.error_description)}async _isPKCECallback(t){const r=await lc(this.storage,`${this.storageKey}-code-verifier`);return!!(t.code&&r)}async signOut(t={scope:"global"}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._signOut(t))}async _signOut({scope:t}={scope:"global"}){return await this._useSession(async r=>{var a;const{data:o,error:u}=r;if(u)return{error:u};const c=(a=o.session)===null||a===void 0?void 0:a.access_token;if(c){const{error:h}=await this.admin.signOut(c,t);if(h&&!(x8(h)&&(h.status===404||h.status===401||h.status===403)))return{error:h}}return t!=="others"&&(await this._removeSession(),await uc(this.storage,`${this.storageKey}-code-verifier`)),{error:null}})}onAuthStateChange(t){const r=C8(),a={id:r,callback:t,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",r),this.stateChangeEmitters.delete(r)}};return this._debug("#onAuthStateChange()","registered callback with id",r),this.stateChangeEmitters.set(r,a),(async()=>(await this.initializePromise,await this._acquireLock(-1,async()=>{this._emitInitialSession(r)})))(),{data:{subscription:a}}}async _emitInitialSession(t){return await this._useSession(async r=>{var a,o;try{const{data:{session:u},error:c}=r;if(c)throw c;await((a=this.stateChangeEmitters.get(t))===null||a===void 0?void 0:a.callback("INITIAL_SESSION",u)),this._debug("INITIAL_SESSION","callback id",t,"session",u)}catch(u){await((o=this.stateChangeEmitters.get(t))===null||o===void 0?void 0:o.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",t,"error",u),console.error(u)}})}async resetPasswordForEmail(t,r={}){let a=null,o=null;this.flowType==="pkce"&&([a,o]=await ds(this.storage,this.storageKey,!0));try{return await Le(this.fetch,"POST",`${this.url}/recover`,{body:{email:t,code_challenge:a,code_challenge_method:o,gotrue_meta_security:{captcha_token:r.captchaToken}},headers:this.headers,redirectTo:r.redirectTo})}catch(u){if(Re(u))return{data:null,error:u};throw u}}async getUserIdentities(){var t;try{const{data:r,error:a}=await this.getUser();if(a)throw a;return{data:{identities:(t=r.user.identities)!==null&&t!==void 0?t:[]},error:null}}catch(r){if(Re(r))return{data:null,error:r};throw r}}async linkIdentity(t){var r;try{const{data:a,error:o}=await this._useSession(async u=>{var c,h,f,p,g;const{data:v,error:x}=u;if(x)throw x;const w=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,t.provider,{redirectTo:(c=t.options)===null||c===void 0?void 0:c.redirectTo,scopes:(h=t.options)===null||h===void 0?void 0:h.scopes,queryParams:(f=t.options)===null||f===void 0?void 0:f.queryParams,skipBrowserRedirect:!0});return await Le(this.fetch,"GET",w,{headers:this.headers,jwt:(g=(p=v.session)===null||p===void 0?void 0:p.access_token)!==null&&g!==void 0?g:void 0})});if(o)throw o;return un()&&!(!((r=t.options)===null||r===void 0)&&r.skipBrowserRedirect)&&window.location.assign(a==null?void 0:a.url),{data:{provider:t.provider,url:a==null?void 0:a.url},error:null}}catch(a){if(Re(a))return{data:{provider:t.provider,url:null},error:a};throw a}}async unlinkIdentity(t){try{return await this._useSession(async r=>{var a,o;const{data:u,error:c}=r;if(c)throw c;return await Le(this.fetch,"DELETE",`${this.url}/user/identities/${t.identity_id}`,{headers:this.headers,jwt:(o=(a=u.session)===null||a===void 0?void 0:a.access_token)!==null&&o!==void 0?o:void 0})})}catch(r){if(Re(r))return{data:null,error:r};throw r}}async _refreshAccessToken(t){const r=`#_refreshAccessToken(${t.substring(0,5)}...)`;this._debug(r,"begin");try{const a=Date.now();return await M8(async o=>(o>0&&await O8(200*Math.pow(2,o-1)),this._debug(r,"refreshing attempt",o),await Le(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:t},headers:this.headers,xform:yr})),(o,u)=>{const c=200*Math.pow(2,o);return u&&up(u)&&Date.now()+c-a<hs})}catch(a){if(this._debug(r,"error",a),Re(a))return{data:{session:null,user:null},error:a};throw a}finally{this._debug(r,"end")}}_isValidSession(t){return typeof t=="object"&&t!==null&&"access_token"in t&&"refresh_token"in t&&"expires_at"in t}async _handleProviderSignIn(t,r){const a=await this._getUrlForProvider(`${this.url}/authorize`,t,{redirectTo:r.redirectTo,scopes:r.scopes,queryParams:r.queryParams});return this._debug("#_handleProviderSignIn()","provider",t,"options",r,"url",a),un()&&!r.skipBrowserRedirect&&window.location.assign(a),{data:{provider:t,url:a},error:null}}async _recoverAndRefresh(){var t;const r="#_recoverAndRefresh()";this._debug(r,"begin");try{const a=await lc(this.storage,this.storageKey);if(this._debug(r,"session from storage",a),!this._isValidSession(a)){this._debug(r,"session is not valid"),a!==null&&await this._removeSession();return}const o=((t=a.expires_at)!==null&&t!==void 0?t:1/0)*1e3-Date.now()<op;if(this._debug(r,`session has${o?"":" not"} expired with margin of ${op}s`),o){if(this.autoRefreshToken&&a.refresh_token){const{error:u}=await this._callRefreshToken(a.refresh_token);u&&(console.error(u),up(u)||(this._debug(r,"refresh failed with a non-retryable error, removing the session",u),await this._removeSession()))}}else await this._notifyAllSubscribers("SIGNED_IN",a)}catch(a){this._debug(r,"error",a),console.error(a);return}finally{this._debug(r,"end")}}async _callRefreshToken(t){var r,a;if(!t)throw new gr;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const o=`#_callRefreshToken(${t.substring(0,5)}...)`;this._debug(o,"begin");try{this.refreshingDeferred=new Jc;const{data:u,error:c}=await this._refreshAccessToken(t);if(c)throw c;if(!u.session)throw new gr;await this._saveSession(u.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",u.session);const h={session:u.session,error:null};return this.refreshingDeferred.resolve(h),h}catch(u){if(this._debug(o,"error",u),Re(u)){const c={session:null,error:u};return up(u)||await this._removeSession(),(r=this.refreshingDeferred)===null||r===void 0||r.resolve(c),c}throw(a=this.refreshingDeferred)===null||a===void 0||a.reject(u),u}finally{this.refreshingDeferred=null,this._debug(o,"end")}}async _notifyAllSubscribers(t,r,a=!0){const o=`#_notifyAllSubscribers(${t})`;this._debug(o,"begin",r,`broadcast = ${a}`);try{this.broadcastChannel&&a&&this.broadcastChannel.postMessage({event:t,session:r});const u=[],c=Array.from(this.stateChangeEmitters.values()).map(async h=>{try{await h.callback(t,r)}catch(f){u.push(f)}});if(await Promise.all(c),u.length>0){for(let h=0;h<u.length;h+=1)console.error(u[h]);throw u[0]}}finally{this._debug(o,"end")}}async _saveSession(t){this._debug("#_saveSession()",t),this.suppressGetSessionWarning=!0,await C2(this.storage,this.storageKey,t)}async _removeSession(){this._debug("#_removeSession()"),await uc(this.storage,this.storageKey),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const t=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{t&&un()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",t)}catch(r){console.error("removing visibilitychange callback failed",r)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const t=setInterval(()=>this._autoRefreshTokenTick(),hs);this.autoRefreshTicker=t,t&&typeof t=="object"&&typeof t.unref=="function"?t.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(t),setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const t=this.autoRefreshTicker;this.autoRefreshTicker=null,t&&clearInterval(t)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const t=Date.now();try{return await this._useSession(async r=>{const{data:{session:a}}=r;if(!a||!a.refresh_token||!a.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const o=Math.floor((a.expires_at*1e3-t)/hs);this._debug("#_autoRefreshTokenTick()",`access token expires in ${o} ticks, a tick lasts ${hs}ms, refresh threshold is ${Xp} ticks`),o<=Xp&&await this._callRefreshToken(a.refresh_token)})}catch(r){console.error("Auto refresh tick failed with error. This is likely a transient error.",r)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(t){if(t.isAcquireTimeout||t instanceof k2)this._debug("auto refresh token tick lock not available");else throw t}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!un()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>await this._onVisibilityChanged(!1),window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(t){console.error("_handleVisibilityChange",t)}}async _onVisibilityChanged(t){const r=`#_onVisibilityChanged(${t})`;this._debug(r,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),t||(await this.initializePromise,await this._acquireLock(-1,async()=>{if(document.visibilityState!=="visible"){this._debug(r,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(t,r,a){const o=[`provider=${encodeURIComponent(r)}`];if(a!=null&&a.redirectTo&&o.push(`redirect_to=${encodeURIComponent(a.redirectTo)}`),a!=null&&a.scopes&&o.push(`scopes=${encodeURIComponent(a.scopes)}`),this.flowType==="pkce"){const[u,c]=await ds(this.storage,this.storageKey),h=new URLSearchParams({code_challenge:`${encodeURIComponent(u)}`,code_challenge_method:`${encodeURIComponent(c)}`});o.push(h.toString())}if(a!=null&&a.queryParams){const u=new URLSearchParams(a.queryParams);o.push(u.toString())}return a!=null&&a.skipBrowserRedirect&&o.push(`skip_http_redirect=${a.skipBrowserRedirect}`),`${t}?${o.join("&")}`}async _unenroll(t){try{return await this._useSession(async r=>{var a;const{data:o,error:u}=r;return u?{data:null,error:u}:await Le(this.fetch,"DELETE",`${this.url}/factors/${t.factorId}`,{headers:this.headers,jwt:(a=o==null?void 0:o.session)===null||a===void 0?void 0:a.access_token})})}catch(r){if(Re(r))return{data:null,error:r};throw r}}async _enroll(t){try{return await this._useSession(async r=>{var a,o;const{data:u,error:c}=r;if(c)return{data:null,error:c};const h=Object.assign({friendly_name:t.friendlyName,factor_type:t.factorType},t.factorType==="phone"?{phone:t.phone}:{issuer:t.issuer}),{data:f,error:p}=await Le(this.fetch,"POST",`${this.url}/factors`,{body:h,headers:this.headers,jwt:(a=u==null?void 0:u.session)===null||a===void 0?void 0:a.access_token});return p?{data:null,error:p}:(t.factorType==="totp"&&(!((o=f==null?void 0:f.totp)===null||o===void 0)&&o.qr_code)&&(f.totp.qr_code=`data:image/svg+xml;utf-8,${f.totp.qr_code}`),{data:f,error:null})})}catch(r){if(Re(r))return{data:null,error:r};throw r}}async _verify(t){return this._acquireLock(-1,async()=>{try{return await this._useSession(async r=>{var a;const{data:o,error:u}=r;if(u)return{data:null,error:u};const{data:c,error:h}=await Le(this.fetch,"POST",`${this.url}/factors/${t.factorId}/verify`,{body:{code:t.code,challenge_id:t.challengeId},headers:this.headers,jwt:(a=o==null?void 0:o.session)===null||a===void 0?void 0:a.access_token});return h?{data:null,error:h}:(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+c.expires_in},c)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",c),{data:c,error:h})})}catch(r){if(Re(r))return{data:null,error:r};throw r}})}async _challenge(t){return this._acquireLock(-1,async()=>{try{return await this._useSession(async r=>{var a;const{data:o,error:u}=r;return u?{data:null,error:u}:await Le(this.fetch,"POST",`${this.url}/factors/${t.factorId}/challenge`,{body:{channel:t.channel},headers:this.headers,jwt:(a=o==null?void 0:o.session)===null||a===void 0?void 0:a.access_token})})}catch(r){if(Re(r))return{data:null,error:r};throw r}})}async _challengeAndVerify(t){const{data:r,error:a}=await this._challenge({factorId:t.factorId});return a?{data:null,error:a}:await this._verify({factorId:t.factorId,challengeId:r.id,code:t.code})}async _listFactors(){const{data:{user:t},error:r}=await this.getUser();if(r)return{data:null,error:r};const a=(t==null?void 0:t.factors)||[],o=a.filter(c=>c.factor_type==="totp"&&c.status==="verified"),u=a.filter(c=>c.factor_type==="phone"&&c.status==="verified");return{data:{all:a,totp:o,phone:u},error:null}}async _getAuthenticatorAssuranceLevel(){return this._acquireLock(-1,async()=>await this._useSession(async t=>{var r,a;const{data:{session:o},error:u}=t;if(u)return{data:null,error:u};if(!o)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:c}=cp(o.access_token);let h=null;c.aal&&(h=c.aal);let f=h;((a=(r=o.user.factors)===null||r===void 0?void 0:r.filter(v=>v.status==="verified"))!==null&&a!==void 0?a:[]).length>0&&(f="aal2");const g=c.amr||[];return{data:{currentLevel:h,nextLevel:f,currentAuthenticationMethods:g},error:null}}))}async fetchJwk(t,r={keys:[]}){let a=r.keys.find(c=>c.kid===t);if(a||(a=this.jwks.keys.find(c=>c.kid===t),a&&this.jwks_cached_at+y8>Date.now()))return a;const{data:o,error:u}=await Le(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(u)throw u;if(!o.keys||o.keys.length===0)throw new nl("JWKS is empty");if(this.jwks=o,this.jwks_cached_at=Date.now(),a=o.keys.find(c=>c.kid===t),!a)throw new nl("No matching signing key found in JWKS");return a}async getClaims(t,r={keys:[]}){try{let a=t;if(!a){const{data:w,error:S}=await this.getSession();if(S||!w.session)return{data:null,error:S};a=w.session.access_token}const{header:o,payload:u,signature:c,raw:{header:h,payload:f}}=cp(a);if(V8(u.exp),!o.kid||o.alg==="HS256"||!("crypto"in globalThis&&"subtle"in globalThis.crypto)){const{error:w}=await this.getUser(a);if(w)throw w;return{data:{claims:u,header:o,signature:c},error:null}}const p=$8(o.alg),g=await this.fetchJwk(o.kid,r),v=await crypto.subtle.importKey("jwk",g,p,!0,["verify"]);if(!await crypto.subtle.verify(p,v,c,j8(`${h}.${f}`)))throw new nl("Invalid JWT signature");return{data:{claims:u,header:o,signature:c},error:null}}catch(a){if(Re(a))return{data:null,error:a};throw a}}}ml.nextInstanceID=0;const n6=ml;class r6 extends n6{constructor(t){super(t)}}var a6=function(i,t,r,a){function o(u){return u instanceof r?u:new r(function(c){c(u)})}return new(r||(r=Promise))(function(u,c){function h(g){try{p(a.next(g))}catch(v){c(v)}}function f(g){try{p(a.throw(g))}catch(v){c(v)}}function p(g){g.done?u(g.value):o(g.value).then(h,f)}p((a=a.apply(i,t||[])).next())})};class s6{constructor(t,r,a){var o,u,c;if(this.supabaseUrl=t,this.supabaseKey=r,!t)throw new Error("supabaseUrl is required.");if(!r)throw new Error("supabaseKey is required.");const h=d8(t);this.realtimeUrl=`${h}/realtime/v1`.replace(/^http/i,"ws"),this.authUrl=`${h}/auth/v1`,this.storageUrl=`${h}/storage/v1`,this.functionsUrl=`${h}/functions/v1`;const f=`sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`,p={db:n8,realtime:a8,auth:Object.assign(Object.assign({},r8),{storageKey:f}),global:i8},g=f8(a??{},p);this.storageKey=(o=g.auth.storageKey)!==null&&o!==void 0?o:"",this.headers=(u=g.global.headers)!==null&&u!==void 0?u:{},g.accessToken?(this.accessToken=g.accessToken,this.auth=new Proxy({},{get:(v,x)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(x)} is not possible`)}})):this.auth=this._initSupabaseAuthClient((c=g.auth)!==null&&c!==void 0?c:{},this.headers,g.global.fetch),this.fetch=u8(r,this._getAccessToken.bind(this),g.global.fetch),this.realtime=this._initRealtimeClient(Object.assign({headers:this.headers,accessToken:this._getAccessToken.bind(this)},g.realtime)),this.rest=new _M(`${h}/rest/v1`,{headers:this.headers,schema:g.db.schema,fetch:this.fetch}),g.accessToken||this._listenForAuthEvents()}get functions(){return new fM(this.functionsUrl,{headers:this.headers,customFetch:this.fetch})}get storage(){return new JM(this.storageUrl,this.headers,this.fetch)}from(t){return this.rest.from(t)}schema(t){return this.rest.schema(t)}rpc(t,r={},a={}){return this.rest.rpc(t,r,a)}channel(t,r={config:{}}){return this.realtime.channel(t,r)}getChannels(){return this.realtime.getChannels()}removeChannel(t){return this.realtime.removeChannel(t)}removeAllChannels(){return this.realtime.removeAllChannels()}_getAccessToken(){var t,r;return a6(this,void 0,void 0,function*(){if(this.accessToken)return yield this.accessToken();const{data:a}=yield this.auth.getSession();return(r=(t=a.session)===null||t===void 0?void 0:t.access_token)!==null&&r!==void 0?r:null})}_initSupabaseAuthClient({autoRefreshToken:t,persistSession:r,detectSessionInUrl:a,storage:o,storageKey:u,flowType:c,lock:h,debug:f},p,g){const v={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new r6({url:this.authUrl,headers:Object.assign(Object.assign({},v),p),storageKey:u,autoRefreshToken:t,persistSession:r,detectSessionInUrl:a,storage:o,flowType:c,lock:h,debug:f,fetch:g,hasCustomAuthorizationHeader:"Authorization"in this.headers})}_initRealtimeClient(t){return new BM(this.realtimeUrl,Object.assign(Object.assign({},t),{params:Object.assign({apikey:this.supabaseKey},t==null?void 0:t.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((r,a)=>{this._handleTokenChanged(r,"CLIENT",a==null?void 0:a.access_token)})}_handleTokenChanged(t,r,a){(t==="TOKEN_REFRESHED"||t==="SIGNED_IN")&&this.changedAccessToken!==a?this.changedAccessToken=a:t==="SIGNED_OUT"&&(this.realtime.setAuth(),r=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}}const o6=(i,t,r)=>new s6(i,t,r),l6="https://ymsvypewizlgpoqicskk.supabase.co",u6="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inltc3Z5cGV3aXpsZ3BvcWljc2trIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5MDE2NTMsImV4cCI6MjA2MDQ3NzY1M30.Naozk6AYBIaZYdnyUJNsrUs4AYsgmJDmg1lZ3g1QAYI",Nc=o6(l6,u6),ia="/assets/plate4-DGDWuwbb.svg",na="/assets/plate5-D6lR5L-N.svg",ra="/assets/plate6-BWjVpw6C.svg",c6="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAlCAYAAAAeJYohAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAX7SURBVHgB5VnLTiNHFL3dfpvXwEAYHpEYYmYRNJlIJFGyGpQo2aFMFvALZGA1XwB8RPITLMk2s8g/sEPASDwisZkAbj/bnXPaVVZjd5sGt43RXOmqqtru8j117r11qxwTf3kC/R36PfRf6H/yOGRUbtr9MfCbjuMYUEmn088xPOIjpew/5+fSh0KbaZuf3SMjI6NBLxGssb29bWL4zvPSYwBNm5rBan1HTF6746p1dnZ2zP39fX5g+kw6B31vGMaPePkYrSP9IbR3Dvpetc1iKhJraux4X4xBU9BZ6AdpXS3qMVxnXn3/QUWxRlv8mKV+SCaTX6JNKdDGjZeXl5fjk5OTA0NDQ08TiQSD/iRgoiOCfkj3VjHbDixt/wE6Bs0Sm2jADHq1Aonx8fGhgYGBSTXZL9BT6TPQ6jeDYpZ6Go/Hf2YSGxwc/AzjwaWlpcQNWzlYXFxMojsEfQbNQV/GYrEV6SPQIZg9o81w5a9SqdQXJE8UYFEMuwkKCYsTOXBpBrdNxUuObducYBPjc5/fnysWi39nMpleZW/kSsP9TfFPUOew9S1tRt8ulUp2Pp+3gclBmDrw4psMr66uMmmln0Cy2ewUVogsv0I8f4uJ3qDPiXyZlrqLdQ10iARFYn5F+41iN0cMGI/kcrkUsWlSXIaxcgKXdhDcVXyxjBgomaZZxItFfFxB/xQTbkgA01LfFrrCNOeEF82h247ZDdqIfhlYCugXQFRxdna2fHBwYO/u7tJzW7ZSXXgkmK3RPpX6FvUC+gp6K9NRx3SIBNVgFkpmF7A4M6ywpqens8Si2G37AzEmMAV6DBN8joleYMVCgYZGBTpMgqItDTdGfwaqwSabqyx3UvEBTUFmi52fnyeurq4y1Wo1U6vVstAMJ0I7g+TwJ/pTPoayOPmpUCgc3bci026MBBVUQTG03kJPAbYMKaBvDQ8PFy4vLxmGVaV6cRrSUkbSSMrKyoo9OjpaBeAiYrqArGcxNiqVShktGQ6MaWZSzHOfRGaoBb8VLDzOjVmIhcVxAaMtgagKmPUF21a0e3MPo3tj9ejes3RvUdkb7W8SbUyHysb4bdeNMV5Akp1Wp6IsQ9HPje8iOpGxKGmAFk8ig3Yc0+rzu249C+hP0yaCVcWF2XH+0MdGNaGbvTXTIRPZsWbaz5g7gH3TBHZGM6tsC87G9wGtCpMW9/aAbuveopj2GqUP7xJi66Ebi9p6xJONI2PWT7z7NE9VXve+S0XmvXDwualoYVbHrBcsigruGIlOY7atKHZi6qDRAO1lWkLGtAIbNkG9xLhRVHDByay3ZOyaeK6CfN07DNMK6K0x62WWYEUxS7DKht6IBq0rMpUpNeivod9Je6aPJWTMiodZXS623GD0QpqZlrvX3r5goS0JSmdj/pbUi6V7g43LPUVVZOzae3t7ZYBzrq+vHVRigrLSgNH87BQlKCuyoDLUK+55lqcezF0GWLe6w3MLB/kSjnkVVn9Y5Jp0IB27BZleW1szDw8PzZOTk6RlWWlde8NgZtIUgLD2/kOCQesj3gnB8oiHcR6LViDYs7OzCr5jO/W6M6LNtjNplKGiihPxxLTUs3fQPt1wY1Uu5lSCGmPMRlEueiUm0Ymzvr4uFxcXAqYcqN7GODbBmAV2/sGz11K/O6PwILABsASNaKjwEFCAh1gA6zK7ublpb21tRcZspJmOAOHeMdwwmEhkrnvzeAmmebR0z6gAxcT2mguCZ38B7Ec8KzFm8cxC/Ltgp6amIonZZunKlQwvBWFoHIbHkcjSOKNmCZoxDYAsWrRn2QDrXiURLGOWRzxezczPz9ewcLY8BlHxZuqjJSsyqcd0jlWT2qsZ24u8TmXMci9X5WKym+ViV6oVFW/uJQIu9yu8RAAgS10iXIPVPFtUXBYuF/IAnceleRGL495URBmzPRXvvxrQLG5QRtBOYKt5xktyMs9nulyULhHQa3ErMvX/TopbzcTExKDUM/UA743RxntVG/ekHtWJjH/HYtsy4OIG7qw41ntxrZ+KiqhF33AYD3II+NTkf39IzNaLMJ53AAAAAElFTkSuQmCC",d6=SR`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-33.333% - 10px)); /* 3개 세트 중 1개 세트만큼 이동 */
  }
`,f6=()=>{const i=_.useRef(null),t=_.useRef(null),[r,a]=_.useState(""),[o,u]=_.useState(!1),c="식식은 섭식장애에 그저 '이런 병이 있습니다'에서 그치지 않습니다. '함께' 할 수 있도록 공간을 마련하는 것, 그것이 바로 식식의 종착점입니다. 섭식장애 문제에 함께 목소리를 내는 것이 어려운 일이 되지 않도록 '고백접시 돌리기'는 그런 생각에서 부터 시작하게 되었습니다. 세 명의 식구들로부터 온 접시를 전달 받은 순간부터, 당신도 우리의 식구!",[h,f]=_.useState([]),[p,g]=_.useState("작성자명"),[v,x]=_.useState(1),[w,S]=_.useState(window.innerWidth),[T,E]=_.useState({}),[j,D]=_.useState(!1),M=w<=768?3:w<=1024?6:9;_.useEffect(()=>{V()},[]);const V=async()=>{try{D(!0),console.log("메시지 불러오기 시작...");const{data:X,error:ne}=await Nc.from("cheering").select("*").order("created_at",{ascending:!1});if(ne)console.error("데이터 불러오기 오류 상세:",ne),console.error("에러 메시지:",ne.message),console.error("에러 코드:",ne.code),alert(`데이터를 불러오는 중 오류가 발생했습니다: ${ne.message}`);else{console.log("불러온 데이터:",X);const k=X.map((Q,oe)=>({id:Q.id,text:Q.text,writer:Q.name||"익명",plateType:oe%3+1,date:new Date(Q.created_at).toISOString().split("T")[0]}));console.log("변환된 데이터:",k),f(k)}}catch(X){console.error("데이터 불러오기 중 예외 발생:",X),alert(`데이터를 불러오는 중 오류가 발생했습니다: ${X.message||X}`)}finally{D(!1)}};_.useEffect(()=>{const X=()=>{S(window.innerWidth)};return window.addEventListener("resize",X),()=>{window.removeEventListener("resize",X)}},[]);const P=X=>{const ne=X.target.value;ne.replace(/\s/g,"").length<=180&&a(ne)},R=X=>{const ne=X.target.value;ne.replace(/\s/g,"").length<=8&&g(ne)},F=()=>{u(!0),r||a("")},I=()=>{u(!1),r.trim()||a("")},G=async()=>{if(!r.trim()){alert("메시지를 입력해주세요!");return}try{D(!0),console.log("저장할 데이터:",{name:p!=="작성자명"?p.trim():"익명",text:r.trim()});const{data:X,error:ne}=await Nc.from("cheering").insert([{name:p!=="작성자명"?p.trim():"익명",text:r.trim()}]).select();if(ne){console.error("데이터 저장 오류 상세:",ne),console.error("에러 메시지:",ne.message),console.error("에러 코드:",ne.code),alert(`메시지 저장 중 오류가 발생했습니다: ${ne.message}`);return}if(console.log("저장된 데이터:",X),X&&X.length>0){const k={id:X[0].id,text:X[0].text,writer:X[0].name||"익명",plateType:Math.floor(Math.random()*3)+1,date:new Date(X[0].created_at).toISOString().split("T")[0]};console.log("로컬 상태에 추가할 메시지:",k),f(Q=>[k,...Q]),x(1),a(""),p!=="작성자명"&&g("작성자명"),alert("고백접시가 등록되었습니다!")}}catch(X){console.error("메시지 저장 중 예외 발생:",X),alert(`메시지 저장 중 오류가 발생했습니다: ${X.message||X}`)}finally{D(!1)}},te=()=>{if(i.current){const X=i.current.getBoundingClientRect(),ne=window.scrollY+X.top;window.scrollTo({top:ne-95,behavior:"smooth"})}},he=X=>{E(ne=>({...ne,[X]:!ne[X]}))},Ae=()=>{const X=(v-1)*M,ne=X+M;return h.slice(X,ne).map((k,Q)=>({...k,plateType:(X+Q)%3+1}))},Ne=()=>Math.ceil(h.length/M),Fe=X=>{x(X)},qe=()=>{p==="작성자명"&&g("")},J=()=>{p.trim()||g("작성자명")},ae=()=>p==="작성자명"?8:8-p.replace(/\s/g,"").length;return y.jsxs(h6,{children:[y.jsxs(p6,{children:[y.jsx(m6,{children:"고백접시 돌리기"}),y.jsxs(g6,{children:[y.jsx(dp,{children:"식구들에게 남긴 응원의 메세지가"}),y.jsx(dp,{children:"담긴 고백접시입니다."}),y.jsx(dp,{children:"식구들과 함께 고백접시를 돌려볼까요?"})]})]}),y.jsx(y6,{children:y.jsx(v6,{children:y.jsxs(x6,{children:[y.jsx(Mt,{children:y.jsx(zt,{src:ia,alt:"Plate 1"})}),y.jsx(Mt,{children:y.jsx(zt,{src:na,alt:"Plate 2"})}),y.jsx(Mt,{children:y.jsx(zt,{src:ra,alt:"Plate 3"})}),y.jsx(Mt,{children:y.jsx(zt,{src:ia,alt:"Plate 1"})}),y.jsx(Mt,{children:y.jsx(zt,{src:na,alt:"Plate 2"})}),y.jsx(Mt,{children:y.jsx(zt,{src:ra,alt:"Plate 3"})}),y.jsx(Mt,{children:y.jsx(zt,{src:ia,alt:"Plate 1"})}),y.jsx(Mt,{children:y.jsx(zt,{src:na,alt:"Plate 2"})}),y.jsx(Mt,{children:y.jsx(zt,{src:ra,alt:"Plate 3"})}),y.jsx(Mt,{children:y.jsx(zt,{src:ia,alt:"Plate 1"})}),y.jsx(Mt,{children:y.jsx(zt,{src:na,alt:"Plate 2"})}),y.jsx(Mt,{children:y.jsx(zt,{src:ra,alt:"Plate 3"})}),y.jsx(Mt,{children:y.jsx(zt,{src:ia,alt:"Plate 1"})}),y.jsx(Mt,{children:y.jsx(zt,{src:na,alt:"Plate 2"})}),y.jsx(Mt,{children:y.jsx(zt,{src:ra,alt:"Plate 3"})}),y.jsx(Mt,{children:y.jsx(zt,{src:ia,alt:"Plate 1"})}),y.jsx(Mt,{children:y.jsx(zt,{src:na,alt:"Plate 2"})}),y.jsx(Mt,{children:y.jsx(zt,{src:ra,alt:"Plate 3"})})]})})}),y.jsx(b6,{ref:i,children:y.jsx(w6,{onClick:te,children:y.jsx(S6,{src:c6,alt:"Down Arrow"})})}),y.jsxs(A6,{children:[y.jsx(_6,{children:y.jsx(E6,{children:"고백접시 돌리기"})}),y.jsxs(T6,{children:[y.jsx(fp,{children:y.jsx(hp,{children:"❶ 고백접시 돌리기 버튼을 눌러 응원의 메세지를 남긴다."})}),y.jsx(fp,{children:y.jsx(hp,{children:"❷ 고백접시를 눌러 글을 읽어본다."})}),y.jsx(fp,{children:y.jsx(hp,{children:"❸ 든든한 마음과 함께 식식의 식구가 된다."})})]}),y.jsx(j6,{ref:t,children:y.jsxs(R6,{children:[y.jsxs(C6,{children:[y.jsx(k6,{children:"작성자"}),y.jsx(D6,{children:"|"}),y.jsx(O6,{value:p,onChange:R,onFocus:qe,onBlur:J,isfocused:p!=="작성자명"?"true":"false"}),p!=="작성자명"&&y.jsxs(M6,{children:[ae(),"자 남음"]})]}),y.jsx(z6,{placeholder:c,value:o||r?r:c,onChange:P,onFocus:F,onBlur:I,isfocused:o||r.length>0?"true":"false"}),(o||r)&&y.jsxs(L6,{children:[180-r.replace(/\s/g,"").length,"자 남음"]}),y.jsx(P6,{}),y.jsx(U6,{children:y.jsxs(N6,{onClick:G,disabled:j,children:[y.jsx(B6,{}),j?"등록 중...":"고백접시 돌리기"]})})]})}),j&&h.length===0?y.jsx(V6,{children:"메시지를 불러오는 중..."}):h.length>0?y.jsx($6,{children:y.jsx(H6,{windowWidth:w,children:Ae().map(X=>y.jsxs(q6,{onClick:()=>he(X.id),children:[y.jsx(G6,{src:X.plateType===1?ia:X.plateType===2?na:ra,alt:`Plate ${X.plateType}`}),y.jsxs(F6,{isClicked:T[X.id],children:[y.jsx(I6,{children:X.writer}),y.jsx(Y6,{children:X.text}),y.jsx(K6,{children:X.date})]})]},X.id))})}):null,h.length>0&&y.jsx(X6,{children:Array.from({length:Ne()},(X,ne)=>y.jsx(Q6,{className:v===ne+1?"active":"",onClick:()=>Fe(ne+1),children:ne+1},ne+1))})]})]})},h6=O.div`
  width: 100%;
  height: auto;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffff00;
  font-family: "Gothic A1", sans-serif;
`,p6=O.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0 80px;
  
  @media (max-width: 768px) {
    padding: 60px 0 40px;
  }
`,m6=O.h1`
  font-size: 100px;
  font-weight: 800; /* Gothic A1 Extra Bold */
  margin-bottom: 60px;
  text-align: center;
  color: #000;
  
  @media (max-width: 1440px) {
    font-size: 88px;
    margin-bottom: 50px;
  }
  
  @media (max-width: 1024px) {
    font-size: 72px;
    margin-bottom: 40px;
  }
  
  @media (max-width: 768px) {
    font-size: 56px;
    margin-bottom: 30px;
  }
`,g6=O.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`,dp=O.p`
  font-size: 36px;
  font-weight: 500; /* Gothic A1 Medium */
  line-height: 1.3;
  margin: 0;
  margin-bottom: 8px;
  text-align: center;
  color: #000;
  
  @media (max-width: 1440px) {
    font-size: 32px;
  }
  
  @media (max-width: 1024px) {
    font-size: 28px;
  }
  
  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 6px;
  }
`,y6=O.div`
  width: 100%;
  max-width: 1920px;
  background-color: #232323;
  padding: 0;
  overflow: hidden;
  position: relative;
  height: 303px;
  
  @media (max-width: 1920px) {
    max-width: 100%;
  }
  
  @media (max-width: 1440px) {
    height: 270px;
  }
  
  @media (max-width: 1024px) {
    height: 240px;
  }
  
  @media (max-width: 768px) {
    height: 200px;
  }
`,v6=O.div`
  width: 100%;
  overflow: visible;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 303px;
  padding: 0;
  
  @media (max-width: 1440px) {
    height: 270px;
  }
  
  @media (max-width: 1024px) {
    height: 240px;
  }
  
  @media (max-width: 768px) {
    height: 200px;
  }
`,x6=O.div`
  display: flex;
  align-items: center;
  width: 450%;
  animation: ${d6} 35s linear infinite;
  height: auto;
`,Mt=O.div`
  width: 220px;
  height: 220px;
  margin: 0 35px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 1440px) {
    width: 190px;
    height: 190px;
    margin: 0 30px;
  }
  
  @media (max-width: 1024px) {
    width: 160px;
    height: 160px;
    margin: 0 25px;
  }
  
  @media (max-width: 768px) {
    width: 130px;
    height: 130px;
    margin: 0 20px;
  }
`,zt=O.img`
  width: 120%;
  height: 120%;
  border-radius: 50%;
  object-fit: cover;
  background-color: white;
  border: 2px #232323;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`,b6=O.div`
  width: 100%;
  padding: 50px 0px;
  display: flex;
  justify-content: center;
  background-color: #ffff00;
  
  @media (max-width: 768px) {
    padding: 40px 0;
  }
`,w6=O.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(1.2);
  
  &:hover {
    transform: translateY(5px) scale(1.2);
    transition: transform 0.3s ease;
  }
`,S6=O.img`
  width: 48px;
  height: auto;
  
  @media (max-width: 1440px) {
    width: 44px;
  }
  
  @media (max-width: 1024px) {
    width: 40px;
  }
  
  @media (max-width: 768px) {
    width: 36px;
  }
`,A6=O.div`
  width: 90%;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 80px;
  
  @media (max-width: 768px) {
    width: 95%;
    padding: 0 0 60px;
  }
`,_6=O.div`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
  margin-top: 0px;
  
  @media (max-width: 768px) {
    margin-bottom: 40px;
    margin-top: 0px;
  }
`,E6=O.div`
  font-size: 22px;
  font-weight: 800; /* Gothic A1 Medium */
  padding: 12px 20px;
  background-color: white;
  border: 3px solid black;
  text-align: center;
  white-space: nowrap;
  
  @media (max-width: 1440px) {
    font-size: 20px;
    padding: 11px 18px;
  }
  
  @media (max-width: 1024px) {
    font-size: 18px;
    padding: 10px 16px;
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
    padding: 9px 14px;
  }
`,T6=O.div`
  margin-bottom: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
`,fp=O.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`,hp=O.div`
  font-size: 22px;
  font-weight: 600; /* Gothic A1 Semibold */
  text-align: center;
  
  @media (max-width: 1440px) {
    font-size: 20px;
  }
  
  @media (max-width: 1024px) {
    font-size: 18px;
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`,j6=O.div`
  width: 100%;
  margin-bottom: 0px;
  display: flex;
  justify-content: center;
  
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`,R6=O.div`
  width: 1420px;
  max-width: 90vw;
  height: 500px;
  background-color: white;
  border: 1px solid #000;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 1440px) {
    width: 1200px;
    height: 450px;
  }
  
  @media (max-width: 1024px) {
    width: 900px;
    height: 400px;
  }
  
  @media (max-width: 768px) {
    width: 90vw;
    height: 350px;
  }
`,C6=O.div`
  color: #000;
  display: flex;
  align-items: center;
  padding: 24px 32px;
  font-size: 24px;
  position: relative;
  
  @media (max-width: 1440px) {
    font-size: 22px;
    padding: 22px 30px;
  }
  
  @media (max-width: 1024px) {
    font-size: 20px;
    padding: 20px 28px;
  }
  
  @media (max-width: 768px) {
    font-size: 18px;
    padding: 18px 24px;
  }
`,k6=O.div`
  margin-right: 16px;
  font-weight: 800;
  
  @media (max-width: 768px) {
    margin-right: 14px;
  }
`,D6=O.span`
  margin: 0 12px;
  color: solid #000000;
  font-size: 24px;
  display: inline-flex;
  align-items: center;
  transform: scaleY(0.9) scaleX(0.9); /* 세로 70%, 가로 60%로 줄임 */
  
  @media (max-width: 1440px) {
    font-size: 22px;
  }
  
  @media (max-width: 1024px) {
    font-size: 20px;
  }
  
  @media (max-width: 768px) {
    font-size: 18px;
    transform: scaleY(0.6) scaleX(0.5); /* 모바일에서는 더 얇고 짧게 */
  }
`,O6=O.input`
  color: #000;
  font-size: 24px;
  font-weight: 400;
  border: none;
  outline: none;
  background: transparent;
  padding: 0;
  margin: 0;
  margin-left: 12px;
  
  @media (max-width: 768px) {
    margin-left: 14px;
  }
  
  @media (max-width: 1440px) {
    font-size: 22px;
  }
  
  @media (max-width: 1024px) {
    font-size: 20px;
  }
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
  
  &:focus {
    color: #000;
  }
`,M6=O.div`
  position: absolute;
  right: 32px;
  font-size: 16px;
  color: #777;
  
  @media (max-width: 1440px) {
    font-size: 15px;
    right: 30px;
  }
  
  @media (max-width: 1024px) {
    font-size: 14px;
    right: 28px;
  }
  
  @media (max-width: 768px) {
    font-size: 13px;
    right: 24px;
  }
`,z6=O.textarea`
  width: 100%;
  min-height: 280px;
  padding: 32px;
  border: none;
  resize: vertical;
  font-family: "Gothic A1", sans-serif;
  font-size: 24px;
  line-height: 1.6;
  margin: 0;
  box-sizing: border-box;
  display: block;
  color: ${i=>i.isfocused==="true"?"#000":"#777"};
  flex: 1;
  
  @media (max-width: 1440px) {
    min-height: 260px;
    padding: 30px;
    font-size: 22px;
  }
  
  @media (max-width: 1024px) {
    min-height: 240px;
    padding: 28px;
    font-size: 20px;
  }
  
  @media (max-width: 768px) {
    min-height: 220px;
    padding: 24px;
    font-size: 18px;
  }
  
  &:focus {
    outline: none;
    color: #000;
  }
`,L6=O.div`
  position: absolute;
  bottom: 80px;
  right: 32px;
  font-size: 16px;
  color: #777;
  
  @media (max-width: 1440px) {
    bottom: 75px;
    right: 30px;
    font-size: 15px;
  }
  
  @media (max-width: 1024px) {
    bottom: 70px;
    right: 28px;
    font-size: 14px;
  }
  
  @media (max-width: 768px) {
    bottom: 65px;
    right: 24px;
    font-size: 13px;
  }
`,P6=O.div`
  width: calc(100% - 64px);
  height: 1px;
  background-color: #000;
  margin: 0 32px;
  margin-top: auto;
  
  @media (max-width: 1440px) {
    width: calc(100% - 60px);
    margin: 0 30px auto 30px;
  }
  
  @media (max-width: 1024px) {
    width: calc(100% - 56px);
    margin: 0 28px auto 28px;
  }
  
  @media (max-width: 768px) {
    width: calc(100% - 48px);
    margin: 0 24px auto 24px;
  }
`,U6=O.div`
  display: flex;
  justify-content: flex-end;
  padding: 32px;
  margin: 0;
  
  @media (max-width: 1440px) {
    padding: 30px;
  }
  
  @media (max-width: 1024px) {
    padding: 28px;
  }
  
  @media (max-width: 768px) {
    padding: 24px;
  }
`,N6=O.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 0;
  background-color: transparent;
  color: black;
  border: none;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
  
  @media (max-width: 1440px) {
    font-size: 22px;
    padding: 15px 0;
  }
  
  @media (max-width: 1024px) {
    font-size: 20px;
    padding: 14px 0;
  }
  
  @media (max-width: 768px) {
    font-size: 18px;
    padding: 12px 0;
  }
  
  &:hover {
    opacity: 0.7;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,B6=O.span`
  width: 24px;
  height: 24px;
  background-color: black;
  border-radius: 50%;
  margin-right: 16px;
  display: inline-block;
  
  @media (max-width: 1440px) {
    width: 22px;
    height: 22px;
    margin-right: 15px;
  }
  
  @media (max-width: 1024px) {
    width: 20px;
    height: 20px;
    margin-right: 14px;
  }
  
  @media (max-width: 768px) {
    width: 18px;
    height: 18px;
    margin-right: 12px;
  }
`,V6=O.div`
  width: 100%;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  color: #000;
  margin: 60px 0;
  
  @media (max-width: 768px) {
    font-size: 20px;
    margin: 40px 0;
  }
`,$6=O.div`
  width: 100%;
  margin: 100px 0 60px;
  
  @media (max-width: 768px) {
    margin: 80px 0 50px;
  }
`,H6=O.div`
  display: grid;
  grid-template-columns: repeat(3, 546px);
  gap: 40px;
  width: 100%;
  justify-content: center;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 400px);
    gap: 30px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 320px);
    gap: 40px;
  }
`,q6=O.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  width: 546px;
  height: 546px;
  
  @media (max-width: 1440px) {
    width: 480px;
    height: 480px;
  }
  
  @media (max-width: 1024px) {
    width: 400px;
    height: 400px;
  }
  
  @media (max-width: 768px) {
    width: 320px;
    height: 320px;
  }
  
  &:hover {
    > div {
      opacity: 1;
    }
  }
`,G6=O.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  background-color: white;
  border: 3px solid #ffff00;
`,F6=O.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  opacity: ${i=>i.isClicked?1:0};
  transition: opacity 0.3s ease;
  padding: 8% 10%;
  box-sizing: border-box;
  border: 1px solid grey;
  
  &::after {
    content: '';
    position: absolute;
    top: 6.5%;
    left: 6.5%;
    right: 6.5%;
    bottom: 6.5%;
    border: 2px solid #444;
    border-radius: 50%;
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding: 10% 12%;
  }
`,I6=O.div`
  color: black;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  width: 100%;
  margin-bottom: auto;
  margin-top: 6%;
  
  @media (max-width: 1440px) {
    font-size: 19px;
  }
  
  @media (max-width: 1024px) {
    font-size: 18px;
  }
  
  @media (max-width: 768px) {
    font-size: 17px;
    margin-top: 5%;
  }
`,Y6=O.div`
  color: black;
  font-size: 18px;
  text-align: center;
  word-break: break-word;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 12;
  -webkit-box-orient: vertical;
  max-height: 65%;
  width: 100%;
  line-height: 1.4;
  margin: 0 auto;
  
  @media (max-width: 1440px) {
    font-size: 17px;
    -webkit-line-clamp: 11;
  }
  
  @media (max-width: 1024px) {
    font-size: 16px;
    -webkit-line-clamp: 10;
  }
  
  @media (max-width: 768px) {
    font-size: 15px;
    -webkit-line-clamp: 8;
  }
`,K6=O.div`
  color: black;
  font-size: 16px;
  text-align: center;
  width: 100%;
  margin-top: auto;
  margin-bottom: 6%;
  
  @media (max-width: 1440px) {
    font-size: 15px;
  }
  
  @media (max-width: 1024px) {
    font-size: 14px;
  }
  
  @media (max-width: 768px) {
    font-size: 13px;
    margin-bottom: 5%;
  }
`,X6=O.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    margin-top: 50px;
  }
`,Q6=O.div`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 12px 16px;
  background-color: #ffff00;
  border: 2px solid #000;
  font-size: 18px;
  cursor: pointer;
  
  @media (max-width: 1440px) {
    width: 44px;
    height: 44px;
    font-size: 17px;
    margin: 11px 15px;
  }
  
  @media (max-width: 1024px) {
    width: 40px;
    height: 40px;
    font-size: 16px;
    margin: 10px 14px;
  }
  
  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    font-size: 14px;
    margin: 8px 12px;
  }
  
  &.active {
    background-color: #000;
    color: #ffff00;
  }
`,Z6="/assets/sicksicklogo-VnwQuhca.png",W6="/assets/sicksickimg-CMigvUJA.png",J6="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAuCAYAAAC4e0AJAAABNUlEQVR4nO3Z0Q2CMBCA4V/jAI7ACK7gJK6mkziCbAAb6AbnAw+GAKWFXu+aeEkfSNrk+5u+cRBBqHSO1oA988fnmraFxyN+/0lNkjhtC9crfD7D9+0WcUgEsV6vF3I+I/Bb9/v6OXP8HDw2wBQfgscEmOFj4GsBJvgUeCigOH4LfCmgKH4PHJCmQd5vA3wOeNcZ3LwGvAheC66O14Sr4rXhavgScBV8KXh2fEl4VnxpeDa8BTwL3gq+G28J34W3hm/Ge4BvwnuBJ+M9wZPw3uDReI/wKLxX+CreMzyI9w5fxNcAn8XXAp/ga4KP8LXBR/jLpS74CN91A6IW+OTNpwZYwif4lABr+Cw+JsADfBEfCvACD+LnAjzBRZCDCEJg+n74PwrwfELThHaXnVU8DAHgCw7wBRANPW/4DWInAAAAAElFTkSuQmCC",ez="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAApCAYAAABOScuyAAAA9klEQVR4nNXYyw2EMAwE0CkhpVACpdIRpVDC7AHtKgtJyM8fDnNwZFlPlk8BCeay72AIIABuW75PM6jBfuMBnQSnsF7QN3AJ6wH9B67BWqPRg7VEoxdrhQYJrmsf1gINEjwOcFnegf7d8FvQiIs3oHF98I6+gb2jk2DP6CzYK7oI9oh+BHtDV4E9oavBXtBNYA/oZrA1ugtsie4GW6GHwBboYbA2egpYEz0NrIWeCtZATwdLo0XAkmgxsBRaFCyBFgfPRquAZ6BDOGeogUfQIZz/f6ob7kXHWBNwC/qKNQPXoFNYU3AJncOag1PoEtYFOEY/YUnwA+kwwM/ODrDVAAAAAElFTkSuQmCC",tz=()=>{const[i,t]=_.useState(!0),r=W6,a=J6,o=ez;return setTimeout(()=>{t(!1)},2500),y.jsx(y.Fragment,{children:y.jsx(at,{children:i&&y.jsx(ke.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.7,ease:"linear"},className:"absolute mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg",children:y.jsxs(iz,{children:[y.jsx("div",{style:{width:"95.71%",left:"2.4%",top:"15%",position:"absolute",aspectRatio:"1837.8/414.216"},children:y.jsx("img",{src:r,alt:"",style:{width:"100%",height:"100%"}})}),y.jsx("div",{style:{width:"16.35%",aspectRatio:"314/86",left:"35.26%",top:"70%",position:"absolute",fontSize:"3vw"},children:"밥짓는중..."}),y.jsx(ke.img,{style:{width:"3vw",aspectRatio:"1/1",left:"51.6%",top:"71%",position:"absolute"},src:a,alt:"Rotating Stick",className:"w-20 h-2",animate:{rotate:[0,-90,0,-90,0]},transition:{duration:4,repeat:1/0,ease:[.7,0,.2,1]}}),y.jsx(ke.img,{style:{width:"2.8vw",aspectRatio:"1/1",left:"54.6%",top:"71.3%",position:"absolute"},src:o,alt:"Rotating Stick",className:"w-20 h-2",animate:{rotate:[0,90,0,90,0]},transition:{duration:4,repeat:1/0,ease:[.7,0,.2,1]}}),y.jsx(ke.img,{style:{width:"3vw",aspectRatio:"1/1",left:"57.6%",top:"71%",position:"absolute"},src:a,alt:"Rotating Stick",className:"w-20 h-2",animate:{rotate:[0,-90,0,-90,0]},transition:{duration:4,repeat:1/0,ease:[.7,0,.2,1]}}),y.jsx(ke.img,{style:{width:"2.8vw",aspectRatio:"1/1",left:"60.6%",top:"71.3%",position:"absolute"},src:o,alt:"Rotating Stick",className:"w-20 h-2",animate:{rotate:[0,90,0,90,0]},transition:{duration:4,repeat:1/0,ease:[.7,0,.2,1]}}),y.jsx(ke.img,{style:{width:"3vw",aspectRatio:"1/1",left:"63.6%",top:"71%",position:"absolute"},src:a,alt:"Rotating Stick",className:"w-20 h-2",animate:{rotate:[0,-90,0,-90,0]},transition:{duration:4,repeat:1/0,ease:[.7,0,.2,1]}})]})})})})},iz=O.div`
width:100vw;
height:100vh;
background-color:yellow;
position:relative;
font-size: 57.886px;
font-style: normal;
font-weight: 800;
`,nz=()=>{_.useRef(null),_.useRef(!1),_.useRef(0),_.useRef(0),_.useRef(0),_.useRef(0);const[i,t]=_.useState(!sessionStorage.getItem("visited")),r=zs(),a=Z6;return _.useEffect(()=>{sessionStorage.getItem("visited")||(sessionStorage.setItem("visited","true"),setTimeout(()=>{t(!1)},3e3))},[]),y.jsx(y.Fragment,{children:i?y.jsx(tz,{}):y.jsxs(rz,{children:[y.jsx("div",{style:{position:"absolute",width:"45.9%",right:"26%",top:"5%",aspectRatio:"882.927/199"},children:y.jsx("img",{src:a,style:{width:"100%",height:"100%"},alt:"sicksick1"})}),y.jsx(az,{children:"식식은 섭식장애 인식 확산을 위한 당사자 고백 프로젝트입니다."}),y.jsxs(qb,{style:{left:"20%",textAlign:"center"},onClick:()=>r("/main/one",{replace:!1}),children:["①",y.jsx("br",{}),"섭식장애란",y.jsx("br",{}),"무엇일까?"]}),y.jsxs(qb,{style:{left:"52%",textAlign:"center"},onClick:()=>r("/main/two",{replace:!1}),children:["②",y.jsx("br",{}),"고백 들으러",y.jsx("br",{})," 가기"]})]})})},rz=O.div`
  width: 100vw;
  height: 100vh;
  position: relative;
 background-color: yellow;
`;O.div`
  width: 1920px;
  height: 1200px;
  background-color: yellow;
  position: relative;
`;const qb=O.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 28%;
  aspect-ratio:1/1;
  background-color: white;
  border: 2px solid #000;
  top: 40%;
  border-radius: 50%;
  font-size: 3vw;
  font-style: normal;
  line-height:136%;
  font-weight: 800;
  font-family: "Gothic A1";
  &:hover {
    background-color: black;
    border: 2px solid #ff0;
    color: yellow;
    transition: 0.3s ease-in;
    cursor: pointer;
  }
`,az=O.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  aspect-ratio:1430/33;
  width: 74.47%;
  left: 12.765%;
  top: 32%;
  font-size: 2vw;
  font-family: "Gothic A1";
  font-style: normal;
  font-weight: 800;
`,sz="/assets/sicksickbtn-Bp4oaUca.jpg",oz=()=>{const i=sz,a=Tr().pathname.split("/").pop();console.log(a);const[o,u]=_.useState([1,0,0]);console.log(o);const[c,h]=_.useState(window.innerWidth*.8),f=zs();_.useEffect(()=>{u(a==="one"?[1,0,0]:a==="two"?[0,1,0]:[0,0,1]),p()},[]);const p=()=>{const v=window.innerWidth;h(v*.75)};window.addEventListener("resize",()=>{p()});const g=v=>{const x=[0,0,0];x[v]=1,u(x),v===0?f("/main/one",{replace:!0}):v===1?f("/main/two",{replace:!0}):f("/main/three",{replace:!0})};return y.jsx(y.Fragment,{children:y.jsxs(Uw.Provider,{value:{setbtnclick:u},children:[y.jsxs(lz,{children:[y.jsx(cz,{onClick:()=>f("/",{replace:!0}),src:i}),y.jsxs(uz,{left:c,children:[y.jsx(pp,{clicked:o[0],onClick:()=>{window.scrollTo({top:0}),g(0)},style:{width:"70px"},children:"식식"}),y.jsx(pp,{clicked:o[1],onClick:()=>{window.scrollTo({top:0}),g(1)},children:"고백들"}),y.jsx(pp,{clicked:o[2],onClick:()=>{window.scrollTo({top:0}),g(2)},children:"연대하기"})]})]}),y.jsx(cT,{})]})})},lz=O.div`
position:fixed;
display: flex;
align-items: center;
flex-direction: row;
top:0;
left:0;
width:100%;
height:95px;
background-color:white;
border-bottom: 2px solid black;
z-index: 9999;
box-sizing: border-box;
`,pp=O.div`
width:100px;
height:21px;
display:flex;
align-items: center;
margin-right:30px;
justify-content:center;
font-size: 24px;
font-family: Gothic A1;
font-style: normal;
font-weight: ${i=>i.clicked?"800":"500"};
text-decoration: ${i=>i.clicked?"underline":"none"};
&:hover {
    text-decoration: underline;
    cursor:pointer;
    font-weight: 800;
  }
`,uz=O.div`
position:fixed;
right: 1%;
width:340px;
height:95px;
display:flex;
flex-direction:row;
align-items:center;
`,cz=O.img`
width:73px;
height:60px;
margin-left:19px;
&:hover {
    cursor:pointer;
  }
`,dz=()=>y.jsx(fz,{children:"하이이"}),fz=O.div`
background-color:red;
height:1105px;
width:1920px;
padding-top:95px;
`,hz="siksik2025",pz=()=>{const[i,t]=_.useState(""),[r,a]=_.useState(!1),[o,u]=_.useState([]);_.useEffect(()=>{if(!r)return;(async()=>{const{data:p,error:g}=await Nc.from("cheering").select("*").order("created_at",{ascending:!1});g?console.error("데이터 불러오기 오류:",g):u(p)})()},[r]);const c=async f=>{const{error:p}=await Nc.from("cheering").delete().eq("id",f);p?alert("삭제 실패"):u(o.filter(g=>g.id!==f))},h=()=>{i===hz?a(!0):alert("관리자 코드가 틀렸습니다.")};return r?y.jsxs("div",{style:{padding:"50px"},children:[y.jsx("h2",{children:"📋 등록된 고백 메시지 목록"}),o.length===0?y.jsx("p",{children:"등록된 메시지가 없습니다."}):y.jsx("ul",{children:o.map(f=>y.jsxs("li",{style:{marginBottom:"20px"},children:[y.jsx("strong",{children:f.name}),": ",f.text,y.jsx("button",{onClick:()=>c(f.id),style:{marginLeft:"10px",color:"red"},children:"삭제"})]},f.id))})]}):y.jsxs("div",{style:{padding:"50px",textAlign:"center"},children:[y.jsx("h2",{children:"🔐 관리자 인증"}),y.jsx("input",{type:"password",placeholder:"관리자 코드를 입력하세요",value:i,onChange:f=>t(f.target.value),style:{padding:"10px",width:"250px",fontSize:"16px"}}),y.jsx("br",{}),y.jsx("br",{}),y.jsx("button",{onClick:h,children:"확인"})]})},mz=LT([{path:"/admin",element:y.jsx(pz,{})},{path:"/",element:y.jsx(nz,{})},{path:"/main",element:y.jsx(oz,{}),children:[{path:"one",element:y.jsx(ZR,{})},{path:"two",element:y.jsx(FO,{})},{path:"three",element:y.jsx(f6,{})},{path:"overlay",element:y.jsx(dz,{})}]}]),gz=wR`
html, body, #root {
  width: 100%;
  height:100%;
  margin: 0;
  padding: 0;
 &::-webkit-scrollbar {
    width: 0px; /* 크롬, 사파리에서 스크롤바 숨기기 */
    height: 0px;
    display: none;
  }

}
`;function yz(){return y.jsxs(y.Fragment,{children:[y.jsx(gz,{}),y.jsx(KT,{router:mz})]})}F_.createRoot(document.getElementById("root")).render(y.jsx(_.StrictMode,{children:y.jsx(yz,{})}));export{Ms as g};
