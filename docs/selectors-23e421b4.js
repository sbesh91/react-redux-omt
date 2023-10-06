define(['exports'], (function (exports) { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function getAugmentedNamespace(n) {
	  if (n.__esModule) return n;
	  var f = n.default;
		if (typeof f == "function") {
			var a = function a () {
				if (this instanceof a) {
					var args = [null];
					args.push.apply(args, arguments);
					var Ctor = Function.bind.apply(f, args);
					return new Ctor();
				}
				return f.apply(this, arguments);
			};
			a.prototype = f.prototype;
	  } else a = {};
	  Object.defineProperty(a, '__esModule', {value: true});
		Object.keys(n).forEach(function (k) {
			var d = Object.getOwnPropertyDescriptor(n, k);
			Object.defineProperty(a, k, d.get ? d : {
				enumerable: true,
				get: function () {
					return n[k];
				}
			});
		});
		return a;
	}

	exports.reactExports = {};
	var react = {
	  get exports(){ return exports.reactExports; },
	  set exports(v){ exports.reactExports = v; },
	};

	var react_production_min = {};

	/**
	 * @license React
	 * react.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredReact_production_min;

	function requireReact_production_min () {
		if (hasRequiredReact_production_min) return react_production_min;
		hasRequiredReact_production_min = 1;
	var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return "function"===typeof a?a:null}
		var B={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}E.prototype.isReactComponent={};
		E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState");};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}var H=G.prototype=new F;
		H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
		function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f;}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return {$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
		function N(a,b){return {$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return "object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
		function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0;}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
		a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c);}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
		function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b;},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b;});-1===a._status&&(a._status=0,a._result=b);}if(1===a._status)return a._result.default;throw a._result;}
		var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};react_production_min.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments);},e);},count:function(a){var b=0;S(a,function(){b++;});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};react_production_min.Component=E;react_production_min.Fragment=p;
		react_production_min.Profiler=r;react_production_min.PureComponent=G;react_production_min.StrictMode=q;react_production_min.Suspense=w;react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;
		react_production_min.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
		for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g;}return {$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};react_production_min.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};react_production_min.createElement=M;react_production_min.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};react_production_min.createRef=function(){return {current:null}};
		react_production_min.forwardRef=function(a){return {$$typeof:v,render:a}};react_production_min.isValidElement=O;react_production_min.lazy=function(a){return {$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};react_production_min.memo=function(a,b){return {$$typeof:x,type:a,compare:void 0===b?null:b}};react_production_min.startTransition=function(a){var b=V.transition;V.transition={};try{a();}finally{V.transition=b;}};react_production_min.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.");};
		react_production_min.useCallback=function(a,b){return U.current.useCallback(a,b)};react_production_min.useContext=function(a){return U.current.useContext(a)};react_production_min.useDebugValue=function(){};react_production_min.useDeferredValue=function(a){return U.current.useDeferredValue(a)};react_production_min.useEffect=function(a,b){return U.current.useEffect(a,b)};react_production_min.useId=function(){return U.current.useId()};react_production_min.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};
		react_production_min.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};react_production_min.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};react_production_min.useMemo=function(a,b){return U.current.useMemo(a,b)};react_production_min.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};react_production_min.useRef=function(a){return U.current.useRef(a)};react_production_min.useState=function(a){return U.current.useState(a)};react_production_min.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};
		react_production_min.useTransition=function(){return U.current.useTransition()};react_production_min.version="18.2.0";
		return react_production_min;
	}

	(function (module) {

		{
		  module.exports = requireReact_production_min();
		}
	} (react));

	var React = /*@__PURE__*/getDefaultExportFromCjs(exports.reactExports);

	function n$1(n){for(var r=arguments.length,t=Array(r>1?r-1:0),e=1;e<r;e++)t[e-1]=arguments[e];throw Error("[Immer] minified error nr: "+n+(t.length?" "+t.map((function(n){return "'"+n+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function r$1(n){return !!n&&!!n[Q]}function t$1(n){var r;return !!n&&(function(n){if(!n||"object"!=typeof n)return !1;var r=Object.getPrototypeOf(n);if(null===r)return !0;var t=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return t===Object||"function"==typeof t&&Function.toString.call(t)===Z}(n)||Array.isArray(n)||!!n[L]||!!(null===(r=n.constructor)||void 0===r?void 0:r[L])||s$2(n)||v$2(n))}function i$2(n,r,t){void 0===t&&(t=!1),0===o$1(n)?(t?Object.keys:nn)(n).forEach((function(e){t&&"symbol"==typeof e||r(e,n[e],n);})):n.forEach((function(t,e){return r(e,t,n)}));}function o$1(n){var r=n[Q];return r?r.i>3?r.i-4:r.i:Array.isArray(n)?1:s$2(n)?2:v$2(n)?3:0}function u$2(n,r){return 2===o$1(n)?n.has(r):Object.prototype.hasOwnProperty.call(n,r)}function a$1(n,r){return 2===o$1(n)?n.get(r):n[r]}function f$1(n,r,t){var e=o$1(n);2===e?n.set(r,t):3===e?n.add(t):n[r]=t;}function c$1(n,r){return n===r?0!==n||1/n==1/r:n!=n&&r!=r}function s$2(n){return X&&n instanceof Map}function v$2(n){return q&&n instanceof Set}function p$1(n){return n.o||n.t}function l$1(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var r=rn(n);delete r[Q];for(var t=nn(r),e=0;e<t.length;e++){var i=t[e],o=r[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(r[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:n[i]});}return Object.create(Object.getPrototypeOf(n),r)}function d$2(n,e){return void 0===e&&(e=!1),y$2(n)||r$1(n)||!t$1(n)||(o$1(n)>1&&(n.set=n.add=n.clear=n.delete=h$1),Object.freeze(n),e&&i$2(n,(function(n,r){return d$2(r,!0)}),!0)),n}function h$1(){n$1(2);}function y$2(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function b$2(r){var t=tn[r];return t||n$1(18,r),t}function m$1(n,r){tn[n]||(tn[n]=r);}function _$1(){return U}function j$1(n,r){r&&(b$2("Patches"),n.u=[],n.s=[],n.v=r);}function O(n){g$2(n),n.p.forEach(S$1),n.p=null;}function g$2(n){n===U&&(U=n.l);}function w(n){return U={p:[],l:U,h:n,m:!0,_:0}}function S$1(n){var r=n[Q];0===r.i||1===r.i?r.j():r.O=!0;}function P(r,e){e._=e.p.length;var i=e.p[0],o=void 0!==r&&r!==i;return e.h.g||b$2("ES5").S(e,r,o),o?(i[Q].P&&(O(e),n$1(4)),t$1(r)&&(r=M(e,r),e.l||x$1(e,r)),e.u&&b$2("Patches").M(i[Q].t,r,e.u,e.s)):r=M(e,i,[]),O(e),e.u&&e.v(e.u,e.s),r!==H?r:void 0}function M(n,r,t){if(y$2(r))return r;var e=r[Q];if(!e)return i$2(r,(function(i,o){return A(n,e,r,i,o,t)}),!0),r;if(e.A!==n)return r;if(!e.P)return x$1(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l$1(e.k):e.o,u=o,a=!1;3===e.i&&(u=new Set(o),o.clear(),a=!0),i$2(u,(function(r,i){return A(n,e,o,r,i,t,a)})),x$1(n,o,!1),t&&n.u&&b$2("Patches").N(e,t,n.u,n.s);}return e.o}function A(e,i,o,a,c,s,v){if(r$1(c)){var p=M(e,c,s&&i&&3!==i.i&&!u$2(i.R,a)?s.concat(a):void 0);if(f$1(o,a,p),!r$1(p))return;e.m=!1;}else v&&o.add(c);if(t$1(c)&&!y$2(c)){if(!e.h.D&&e._<1)return;M(e,c),i&&i.A.l||x$1(e,c);}}function x$1(n,r,t){void 0===t&&(t=!1),!n.l&&n.h.D&&n.m&&d$2(r,t);}function z(n,r){var t=n[Q];return (t?p$1(t):n)[r]}function I(n,r){if(r in n)for(var t=Object.getPrototypeOf(n);t;){var e=Object.getOwnPropertyDescriptor(t,r);if(e)return e;t=Object.getPrototypeOf(t);}}function k(n){n.P||(n.P=!0,n.l&&k(n.l));}function E(n){n.o||(n.o=l$1(n.t));}function N(n,r,t){var e=s$2(r)?b$2("MapSet").F(r,t):v$2(r)?b$2("MapSet").T(r,t):n.g?function(n,r){var t=Array.isArray(n),e={i:t?1:0,A:r?r.A:_$1(),P:!1,I:!1,R:{},l:r,t:n,k:null,o:null,j:null,C:!1},i=e,o=en;t&&(i=[e],o=on);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(r,t):b$2("ES5").J(r,t);return (t?t.A:_$1()).p.push(e),e}function R(e){return r$1(e)||n$1(22,e),function n(r){if(!t$1(r))return r;var e,u=r[Q],c=o$1(r);if(u){if(!u.P&&(u.i<4||!b$2("ES5").K(u)))return u.t;u.I=!0,e=D(r,c),u.I=!1;}else e=D(r,c);return i$2(e,(function(r,t){u&&a$1(u.t,r)===t||f$1(e,r,n(t));})),3===c?new Set(e):e}(e)}function D(n,r){switch(r){case 2:return new Map(n);case 3:return Array.from(n)}return l$1(n)}function F(){function t(n,r){var t=s[n];return t?t.enumerable=r:s[n]=t={configurable:!0,enumerable:r,get:function(){var r=this[Q];return en.get(r,n)},set:function(r){var t=this[Q];en.set(t,n,r);}},t}function e(n){for(var r=n.length-1;r>=0;r--){var t=n[r][Q];if(!t.P)switch(t.i){case 5:a(t)&&k(t);break;case 4:o(t)&&k(t);}}}function o(n){for(var r=n.t,t=n.k,e=nn(t),i=e.length-1;i>=0;i--){var o=e[i];if(o!==Q){var a=r[o];if(void 0===a&&!u$2(r,o))return !0;var f=t[o],s=f&&f[Q];if(s?s.t!==a:!c$1(f,a))return !0}}var v=!!r[Q];return e.length!==nn(r).length+(v?0:1)}function a(n){var r=n.k;if(r.length!==n.t.length)return !0;var t=Object.getOwnPropertyDescriptor(r,r.length-1);if(t&&!t.get)return !0;for(var e=0;e<r.length;e++)if(!r.hasOwnProperty(e))return !0;return !1}var s={};m$1("ES5",{J:function(n,r){var e=Array.isArray(n),i=function(n,r){if(n){for(var e=Array(r.length),i=0;i<r.length;i++)Object.defineProperty(e,""+i,t(i,!0));return e}var o=rn(r);delete o[Q];for(var u=nn(o),a=0;a<u.length;a++){var f=u[a];o[f]=t(f,n||!!o[f].enumerable);}return Object.create(Object.getPrototypeOf(r),o)}(e,n),o={i:e?5:4,A:r?r.A:_$1(),P:!1,I:!1,R:{},l:r,t:n,k:i,o:null,O:!1,C:!1};return Object.defineProperty(i,Q,{value:o,writable:!0}),i},S:function(n,t,o){o?r$1(t)&&t[Q].A===n&&e(n.p):(n.u&&function n(r){if(r&&"object"==typeof r){var t=r[Q];if(t){var e=t.t,o=t.k,f=t.R,c=t.i;if(4===c)i$2(o,(function(r){r!==Q&&(void 0!==e[r]||u$2(e,r)?f[r]||n(o[r]):(f[r]=!0,k(t)));})),i$2(e,(function(n){void 0!==o[n]||u$2(o,n)||(f[n]=!1,k(t));}));else if(5===c){if(a(t)&&(k(t),f.length=!0),o.length<e.length)for(var s=o.length;s<e.length;s++)f[s]=!1;else for(var v=e.length;v<o.length;v++)f[v]=!0;for(var p=Math.min(o.length,e.length),l=0;l<p;l++)o.hasOwnProperty(l)||(f[l]=!0),void 0===f[l]&&n(o[l]);}}}}(n.p[0]),e(n.p));},K:function(n){return 4===n.i?o(n):a(n)}});}var G,U,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,q="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H=W?Symbol.for("immer-nothing"):((G={})["immer-nothing"]=!0,G),L=W?Symbol.for("immer-draftable"):"__$immer_draftable",Q=W?Symbol.for("immer-state"):"__$immer_state",Z=""+Object.prototype.constructor,nn="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,rn=Object.getOwnPropertyDescriptors||function(n){var r={};return nn(n).forEach((function(t){r[t]=Object.getOwnPropertyDescriptor(n,t);})),r},tn={},en={get:function(n,r){if(r===Q)return n;var e=p$1(n);if(!u$2(e,r))return function(n,r,t){var e,i=I(r,t);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,e,r);var i=e[r];return n.I||!t$1(i)?i:i===z(n.t,r)?(E(n),n.o[r]=N(n.A.h,i,n)):i},has:function(n,r){return r in p$1(n)},ownKeys:function(n){return Reflect.ownKeys(p$1(n))},set:function(n,r,t){var e=I(p$1(n),r);if(null==e?void 0:e.set)return e.set.call(n.k,t),!0;if(!n.P){var i=z(p$1(n),r),o=null==i?void 0:i[Q];if(o&&o.t===t)return n.o[r]=t,n.R[r]=!1,!0;if(c$1(t,i)&&(void 0!==t||u$2(n.t,r)))return !0;E(n),k(n);}return n.o[r]===t&&(void 0!==t||r in n.o)||Number.isNaN(t)&&Number.isNaN(n.o[r])||(n.o[r]=t,n.R[r]=!0),!0},deleteProperty:function(n,r){return void 0!==z(n.t,r)||r in n.t?(n.R[r]=!1,E(n),k(n)):delete n.R[r],n.o&&delete n.o[r],!0},getOwnPropertyDescriptor:function(n,r){var t=p$1(n),e=Reflect.getOwnPropertyDescriptor(t,r);return e?{writable:!0,configurable:1!==n.i||"length"!==r,enumerable:e.enumerable,value:t[r]}:e},defineProperty:function(){n$1(11);},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n$1(12);}},on={};i$2(en,(function(n,r){on[n]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)};})),on.deleteProperty=function(r,t){return on.set.call(this,r,t,void 0)},on.set=function(r,t,e){return en.set.call(this,r[0],t,e,r[0])};var un=function(){function e(r){var e=this;this.g=B,this.D=!0,this.produce=function(r,i,o){if("function"==typeof r&&"function"!=typeof i){var u=i;i=r;var a=e;return function(n){var r=this;void 0===n&&(n=u);for(var t=arguments.length,e=Array(t>1?t-1:0),o=1;o<t;o++)e[o-1]=arguments[o];return a.produce(n,(function(n){var t;return (t=i).call.apply(t,[r,n].concat(e))}))}}var f;if("function"!=typeof i&&n$1(6),void 0!==o&&"function"!=typeof o&&n$1(7),t$1(r)){var c=w(e),s=N(e,r,void 0),v=!0;try{f=i(s),v=!1;}finally{v?O(c):g$2(c);}return "undefined"!=typeof Promise&&f instanceof Promise?f.then((function(n){return j$1(c,o),P(n,c)}),(function(n){throw O(c),n})):(j$1(c,o),P(f,c))}if(!r||"object"!=typeof r){if(void 0===(f=i(r))&&(f=r),f===H&&(f=void 0),e.D&&d$2(f,!0),o){var p=[],l=[];b$2("Patches").M(r,f,p,l),o(p,l);}return f}n$1(21,r);},this.produceWithPatches=function(n,r){if("function"==typeof n)return function(r){for(var t=arguments.length,i=Array(t>1?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];return e.produceWithPatches(r,(function(r){return n.apply(void 0,[r].concat(i))}))};var t,i,o=e.produce(n,r,(function(n,r){t=n,i=r;}));return "undefined"!=typeof Promise&&o instanceof Promise?o.then((function(n){return [n,t,i]})):[o,t,i]},"boolean"==typeof(null==r?void 0:r.useProxies)&&this.setUseProxies(r.useProxies),"boolean"==typeof(null==r?void 0:r.autoFreeze)&&this.setAutoFreeze(r.autoFreeze);}var i=e.prototype;return i.createDraft=function(e){t$1(e)||n$1(8),r$1(e)&&(e=R(e));var i=w(this),o=N(this,e,void 0);return o[Q].C=!0,g$2(i),o},i.finishDraft=function(r,t){var e=r&&r[Q];var i=e.A;return j$1(i,t),P(void 0,i)},i.setAutoFreeze=function(n){this.D=n;},i.setUseProxies=function(r){r&&!B&&n$1(20),this.g=r;},i.applyPatches=function(n,t){var e;for(e=t.length-1;e>=0;e--){var i=t[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}e>-1&&(t=t.slice(e+1));var o=b$2("Patches").$;return r$1(n)?o(n,t):this.produce(n,(function(n){return o(n,t)}))},e}(),an=new un,fn=an.produce;an.produceWithPatches.bind(an);an.setAutoFreeze.bind(an);an.setUseProxies.bind(an);an.applyPatches.bind(an);an.createDraft.bind(an);an.finishDraft.bind(an);var produce = fn;

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	function ownKeys(object, enumerableOnly) {
	  var keys = Object.keys(object);

	  if (Object.getOwnPropertySymbols) {
	    var symbols = Object.getOwnPropertySymbols(object);

	    if (enumerableOnly) {
	      symbols = symbols.filter(function (sym) {
	        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
	      });
	    }

	    keys.push.apply(keys, symbols);
	  }

	  return keys;
	}

	function _objectSpread2(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i] != null ? arguments[i] : {};

	    if (i % 2) {
	      ownKeys(Object(source), true).forEach(function (key) {
	        _defineProperty(target, key, source[key]);
	      });
	    } else if (Object.getOwnPropertyDescriptors) {
	      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
	    } else {
	      ownKeys(Object(source)).forEach(function (key) {
	        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
	      });
	    }
	  }

	  return target;
	}

	/**
	 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
	 *
	 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
	 * during build.
	 * @param {number} code
	 */
	function formatProdErrorMessage(code) {
	  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
	}

	// Inlined version of the `symbol-observable` polyfill
	var $$observable = (function () {
	  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
	})();

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var randomString = function randomString() {
	  return Math.random().toString(36).substring(7).split('').join('.');
	};

	var ActionTypes = {
	  INIT: "@@redux/INIT" + randomString(),
	  REPLACE: "@@redux/REPLACE" + randomString(),
	  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
	    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
	  }
	};

	/**
	 * @param {any} obj The object to inspect.
	 * @returns {boolean} True if the argument appears to be a plain object.
	 */
	function isPlainObject$1(obj) {
	  if (typeof obj !== 'object' || obj === null) return false;
	  var proto = obj;

	  while (Object.getPrototypeOf(proto) !== null) {
	    proto = Object.getPrototypeOf(proto);
	  }

	  return Object.getPrototypeOf(obj) === proto;
	}

	/**
	 * @deprecated
	 *
	 * **We recommend using the `configureStore` method
	 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
	 *
	 * Redux Toolkit is our recommended approach for writing Redux logic today,
	 * including store setup, reducers, data fetching, and more.
	 *
	 * **For more details, please read this Redux docs page:**
	 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
	 *
	 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
	 * simplifies setup and helps avoid common bugs.
	 *
	 * You should not be using the `redux` core package by itself today, except for learning purposes.
	 * The `createStore` method from the core `redux` package will not be removed, but we encourage
	 * all users to migrate to using Redux Toolkit for all Redux code.
	 *
	 * If you want to use `createStore` without this visual deprecation warning, use
	 * the `legacy_createStore` import instead:
	 *
	 * `import { legacy_createStore as createStore} from 'redux'`
	 *
	 */

	function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;

	  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
	    throw new Error(formatProdErrorMessage(0) );
	  }

	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error(formatProdErrorMessage(1) );
	    }

	    return enhancer(createStore)(reducer, preloadedState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error(formatProdErrorMessage(2) );
	  }

	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;
	  /**
	   * This makes a shallow copy of currentListeners so we can use
	   * nextListeners as a temporary list while dispatching.
	   *
	   * This prevents any bugs around consumers calling
	   * subscribe/unsubscribe in the middle of a dispatch.
	   */

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }
	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */


	  function getState() {
	    if (isDispatching) {
	      throw new Error(formatProdErrorMessage(3) );
	    }

	    return currentState;
	  }
	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */


	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error(formatProdErrorMessage(4) );
	    }

	    if (isDispatching) {
	      throw new Error(formatProdErrorMessage(5) );
	    }

	    var isSubscribed = true;
	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);
	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      if (isDispatching) {
	        throw new Error(formatProdErrorMessage(6) );
	      }

	      isSubscribed = false;
	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	      currentListeners = null;
	    };
	  }
	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */


	  function dispatch(action) {
	    if (!isPlainObject$1(action)) {
	      throw new Error(formatProdErrorMessage(7) );
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error(formatProdErrorMessage(8) );
	    }

	    if (isDispatching) {
	      throw new Error(formatProdErrorMessage(9) );
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;

	    for (var i = 0; i < listeners.length; i++) {
	      var listener = listeners[i];
	      listener();
	    }

	    return action;
	  }
	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */


	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error(formatProdErrorMessage(10) );
	    }

	    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
	    // Any reducers that existed in both the new and old rootReducer
	    // will receive the previous state. This effectively populates
	    // the new state tree with any relevant data from the old one.

	    dispatch({
	      type: ActionTypes.REPLACE
	    });
	  }
	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/tc39/proposal-observable
	   */


	  function observable() {
	    var _ref;

	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object' || observer === null) {
	          throw new Error(formatProdErrorMessage(11) );
	        }

	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }

	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return {
	          unsubscribe: unsubscribe
	        };
	      }
	    }, _ref[$$observable] = function () {
	      return this;
	    }, _ref;
	  } // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.


	  dispatch({
	    type: ActionTypes.INIT
	  });
	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[$$observable] = observable, _ref2;
	}

	function assertReducerShape(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, {
	      type: ActionTypes.INIT
	    });

	    if (typeof initialState === 'undefined') {
	      throw new Error(formatProdErrorMessage(12) );
	    }

	    if (typeof reducer(undefined, {
	      type: ActionTypes.PROBE_UNKNOWN_ACTION()
	    }) === 'undefined') {
	      throw new Error(formatProdErrorMessage(13) );
	    }
	  });
	}
	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */


	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};

	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];

	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }

	  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same

	  var shapeAssertionError;

	  try {
	    assertReducerShape(finalReducers);
	  } catch (e) {
	    shapeAssertionError = e;
	  }

	  return function combination(state, action) {
	    if (state === void 0) {
	      state = {};
	    }

	    if (shapeAssertionError) {
	      throw shapeAssertionError;
	    }

	    var hasChanged = false;
	    var nextState = {};

	    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
	      var _key = finalReducerKeys[_i];
	      var reducer = finalReducers[_key];
	      var previousStateForKey = state[_key];
	      var nextStateForKey = reducer(previousStateForKey, action);

	      if (typeof nextStateForKey === 'undefined') {
	        action && action.type;
	        throw new Error(formatProdErrorMessage(14) );
	      }

	      nextState[_key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }

	    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
	    return hasChanged ? nextState : state;
	  };
	}

	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */
	function compose() {
	  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }

	  if (funcs.length === 1) {
	    return funcs[0];
	  }

	  return funcs.reduce(function (a, b) {
	    return function () {
	      return a(b.apply(void 0, arguments));
	    };
	  });
	}

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */

	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (createStore) {
	    return function () {
	      var store = createStore.apply(void 0, arguments);

	      var _dispatch = function dispatch() {
	        throw new Error(formatProdErrorMessage(15) );
	      };

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch() {
	          return _dispatch.apply(void 0, arguments);
	        }
	      };
	      var chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = compose.apply(void 0, chain)(store.dispatch);
	      return _objectSpread2(_objectSpread2({}, store), {}, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

	// Cache implementation based on Erik Rasmussen's `lru-memoize`:
	// https://github.com/erikras/lru-memoize
	var NOT_FOUND = 'NOT_FOUND';

	function createSingletonCache(equals) {
	  var entry;
	  return {
	    get: function get(key) {
	      if (entry && equals(entry.key, key)) {
	        return entry.value;
	      }

	      return NOT_FOUND;
	    },
	    put: function put(key, value) {
	      entry = {
	        key: key,
	        value: value
	      };
	    },
	    getEntries: function getEntries() {
	      return entry ? [entry] : [];
	    },
	    clear: function clear() {
	      entry = undefined;
	    }
	  };
	}

	function createLruCache(maxSize, equals) {
	  var entries = [];

	  function get(key) {
	    var cacheIndex = entries.findIndex(function (entry) {
	      return equals(key, entry.key);
	    }); // We found a cached entry

	    if (cacheIndex > -1) {
	      var entry = entries[cacheIndex]; // Cached entry not at top of cache, move it to the top

	      if (cacheIndex > 0) {
	        entries.splice(cacheIndex, 1);
	        entries.unshift(entry);
	      }

	      return entry.value;
	    } // No entry found in cache, return sentinel


	    return NOT_FOUND;
	  }

	  function put(key, value) {
	    if (get(key) === NOT_FOUND) {
	      // TODO Is unshift slow?
	      entries.unshift({
	        key: key,
	        value: value
	      });

	      if (entries.length > maxSize) {
	        entries.pop();
	      }
	    }
	  }

	  function getEntries() {
	    return entries;
	  }

	  function clear() {
	    entries = [];
	  }

	  return {
	    get: get,
	    put: put,
	    getEntries: getEntries,
	    clear: clear
	  };
	}

	var defaultEqualityCheck = function defaultEqualityCheck(a, b) {
	  return a === b;
	};
	function createCacheKeyComparator(equalityCheck) {
	  return function areArgumentsShallowlyEqual(prev, next) {
	    if (prev === null || next === null || prev.length !== next.length) {
	      return false;
	    } // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.


	    var length = prev.length;

	    for (var i = 0; i < length; i++) {
	      if (!equalityCheck(prev[i], next[i])) {
	        return false;
	      }
	    }

	    return true;
	  };
	}
	// defaultMemoize now supports a configurable cache size with LRU behavior,
	// and optional comparison of the result value with existing values
	function defaultMemoize(func, equalityCheckOrOptions) {
	  var providedOptions = typeof equalityCheckOrOptions === 'object' ? equalityCheckOrOptions : {
	    equalityCheck: equalityCheckOrOptions
	  };
	  var _providedOptions$equa = providedOptions.equalityCheck,
	      equalityCheck = _providedOptions$equa === void 0 ? defaultEqualityCheck : _providedOptions$equa,
	      _providedOptions$maxS = providedOptions.maxSize,
	      maxSize = _providedOptions$maxS === void 0 ? 1 : _providedOptions$maxS,
	      resultEqualityCheck = providedOptions.resultEqualityCheck;
	  var comparator = createCacheKeyComparator(equalityCheck);
	  var cache = maxSize === 1 ? createSingletonCache(comparator) : createLruCache(maxSize, comparator); // we reference arguments instead of spreading them for performance reasons

	  function memoized() {
	    var value = cache.get(arguments);

	    if (value === NOT_FOUND) {
	      // @ts-ignore
	      value = func.apply(null, arguments);

	      if (resultEqualityCheck) {
	        var entries = cache.getEntries();
	        var matchingEntry = entries.find(function (entry) {
	          return resultEqualityCheck(entry.value, value);
	        });

	        if (matchingEntry) {
	          value = matchingEntry.value;
	        }
	      }

	      cache.put(arguments, value);
	    }

	    return value;
	  }

	  memoized.clearCache = function () {
	    return cache.clear();
	  };

	  return memoized;
	}

	function getDependencies(funcs) {
	  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

	  if (!dependencies.every(function (dep) {
	    return typeof dep === 'function';
	  })) {
	    var dependencyTypes = dependencies.map(function (dep) {
	      return typeof dep === 'function' ? "function " + (dep.name || 'unnamed') + "()" : typeof dep;
	    }).join(', ');
	    throw new Error("createSelector expects all input-selectors to be functions, but received the following types: [" + dependencyTypes + "]");
	  }

	  return dependencies;
	}

	function createSelectorCreator(memoize) {
	  for (var _len = arguments.length, memoizeOptionsFromArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    memoizeOptionsFromArgs[_key - 1] = arguments[_key];
	  }

	  var createSelector = function createSelector() {
	    for (var _len2 = arguments.length, funcs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      funcs[_key2] = arguments[_key2];
	    }

	    var _recomputations = 0;

	    var _lastResult; // Due to the intricacies of rest params, we can't do an optional arg after `...funcs`.
	    // So, start by declaring the default value here.
	    // (And yes, the words 'memoize' and 'options' appear too many times in this next sequence.)


	    var directlyPassedOptions = {
	      memoizeOptions: undefined
	    }; // Normally, the result func or "output selector" is the last arg

	    var resultFunc = funcs.pop(); // If the result func is actually an _object_, assume it's our options object

	    if (typeof resultFunc === 'object') {
	      directlyPassedOptions = resultFunc; // and pop the real result func off

	      resultFunc = funcs.pop();
	    }

	    if (typeof resultFunc !== 'function') {
	      throw new Error("createSelector expects an output function after the inputs, but received: [" + typeof resultFunc + "]");
	    } // Determine which set of options we're using. Prefer options passed directly,
	    // but fall back to options given to createSelectorCreator.


	    var _directlyPassedOption = directlyPassedOptions,
	        _directlyPassedOption2 = _directlyPassedOption.memoizeOptions,
	        memoizeOptions = _directlyPassedOption2 === void 0 ? memoizeOptionsFromArgs : _directlyPassedOption2; // Simplifying assumption: it's unlikely that the first options arg of the provided memoizer
	    // is an array. In most libs I've looked at, it's an equality function or options object.
	    // Based on that, if `memoizeOptions` _is_ an array, we assume it's a full
	    // user-provided array of options. Otherwise, it must be just the _first_ arg, and so
	    // we wrap it in an array so we can apply it.

	    var finalMemoizeOptions = Array.isArray(memoizeOptions) ? memoizeOptions : [memoizeOptions];
	    var dependencies = getDependencies(funcs);
	    var memoizedResultFunc = memoize.apply(void 0, [function recomputationWrapper() {
	      _recomputations++; // apply arguments instead of spreading for performance.

	      return resultFunc.apply(null, arguments);
	    }].concat(finalMemoizeOptions)); // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.

	    var selector = memoize(function dependenciesChecker() {
	      var params = [];
	      var length = dependencies.length;

	      for (var i = 0; i < length; i++) {
	        // apply arguments instead of spreading and mutate a local list of params for performance.
	        // @ts-ignore
	        params.push(dependencies[i].apply(null, arguments));
	      } // apply arguments instead of spreading for performance.


	      _lastResult = memoizedResultFunc.apply(null, params);
	      return _lastResult;
	    });
	    Object.assign(selector, {
	      resultFunc: resultFunc,
	      memoizedResultFunc: memoizedResultFunc,
	      dependencies: dependencies,
	      lastResult: function lastResult() {
	        return _lastResult;
	      },
	      recomputations: function recomputations() {
	        return _recomputations;
	      },
	      resetRecomputations: function resetRecomputations() {
	        return _recomputations = 0;
	      }
	    });
	    return selector;
	  }; // @ts-ignore


	  return createSelector;
	}
	var createSelector = /* #__PURE__ */createSelectorCreator(defaultMemoize);
	// Manual definition of state and output arguments
	var createStructuredSelector = function createStructuredSelector(selectors, selectorCreator) {
	  if (selectorCreator === void 0) {
	    selectorCreator = createSelector;
	  }

	  if (typeof selectors !== 'object') {
	    throw new Error('createStructuredSelector expects first argument to be an object ' + ("where each property is a selector, instead received a " + typeof selectors));
	  }

	  var objectKeys = Object.keys(selectors);
	  var resultSelector = selectorCreator( // @ts-ignore
	  objectKeys.map(function (key) {
	    return selectors[key];
	  }), function () {
	    for (var _len3 = arguments.length, values = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	      values[_key3] = arguments[_key3];
	    }

	    return values.reduce(function (composition, value, index) {
	      composition[objectKeys[index]] = value;
	      return composition;
	    }, {});
	  });
	  return resultSelector;
	};

	var es = /*#__PURE__*/Object.freeze({
		__proto__: null,
		createSelector: createSelector,
		createSelectorCreator: createSelectorCreator,
		createStructuredSelector: createStructuredSelector,
		defaultEqualityCheck: defaultEqualityCheck,
		defaultMemoize: defaultMemoize
	});

	/** A function that accepts a potential "extra argument" value to be injected later,
	 * and returns an instance of the thunk middleware that uses that value
	 */
	function createThunkMiddleware(extraArgument) {
	  // Standard Redux middleware definition pattern:
	  // See: https://redux.js.org/tutorials/fundamentals/part-4-store#writing-custom-middleware
	  var middleware = function middleware(_ref) {
	    var dispatch = _ref.dispatch,
	        getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        // The thunk middleware looks for any functions that were passed to `store.dispatch`.
	        // If this "action" is really a function, call it and return the result.
	        if (typeof action === 'function') {
	          // Inject the store's `dispatch` and `getState` methods, as well as any "extra arg"
	          return action(dispatch, getState, extraArgument);
	        } // Otherwise, pass the action down the middleware chain as usual


	        return next(action);
	      };
	    };
	  };

	  return middleware;
	}

	var thunk = createThunkMiddleware(); // Attach the factory function so users can create a customized version
	// with whatever "extra arg" they want to inject into their thunks

	thunk.withExtraArgument = createThunkMiddleware;
	var thunkMiddleware = thunk;

	var __extends = (globalThis && globalThis.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        if (typeof b !== "function" && b !== null)
	            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __generator = (globalThis && globalThis.__generator) || function (thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [op[0] & 2, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	};
	var __spreadArray = (globalThis && globalThis.__spreadArray) || function (to, from) {
	    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
	        to[j] = from[i];
	    return to;
	};
	var __defProp = Object.defineProperty;
	var __defProps = Object.defineProperties;
	var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
	var __getOwnPropSymbols = Object.getOwnPropertySymbols;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __propIsEnum = Object.prototype.propertyIsEnumerable;
	var __defNormalProp = function (obj, key, value) { return key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value: value }) : obj[key] = value; };
	var __spreadValues = function (a, b) {
	    for (var prop in b || (b = {}))
	        if (__hasOwnProp.call(b, prop))
	            __defNormalProp(a, prop, b[prop]);
	    if (__getOwnPropSymbols)
	        for (var _i = 0, _c = __getOwnPropSymbols(b); _i < _c.length; _i++) {
	            var prop = _c[_i];
	            if (__propIsEnum.call(b, prop))
	                __defNormalProp(a, prop, b[prop]);
	        }
	    return a;
	};
	var __spreadProps = function (a, b) { return __defProps(a, __getOwnPropDescs(b)); };
	var __async = function (__this, __arguments, generator) {
	    return new Promise(function (resolve, reject) {
	        var fulfilled = function (value) {
	            try {
	                step(generator.next(value));
	            }
	            catch (e) {
	                reject(e);
	            }
	        };
	        var rejected = function (value) {
	            try {
	                step(generator.throw(value));
	            }
	            catch (e) {
	                reject(e);
	            }
	        };
	        var step = function (x) { return x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected); };
	        step((generator = generator.apply(__this, __arguments)).next());
	    });
	};
	var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function () {
	    if (arguments.length === 0)
	        return void 0;
	    if (typeof arguments[0] === "object")
	        return compose;
	    return compose.apply(null, arguments);
	};
	// src/isPlainObject.ts
	function isPlainObject(value) {
	    if (typeof value !== "object" || value === null)
	        return false;
	    var proto = Object.getPrototypeOf(value);
	    if (proto === null)
	        return true;
	    var baseProto = proto;
	    while (Object.getPrototypeOf(baseProto) !== null) {
	        baseProto = Object.getPrototypeOf(baseProto);
	    }
	    return proto === baseProto;
	}
	var MiddlewareArray = /** @class */ (function (_super) {
	    __extends(MiddlewareArray, _super);
	    function MiddlewareArray() {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i] = arguments[_i];
	        }
	        var _this = _super.apply(this, args) || this;
	        Object.setPrototypeOf(_this, MiddlewareArray.prototype);
	        return _this;
	    }
	    Object.defineProperty(MiddlewareArray, Symbol.species, {
	        get: function () {
	            return MiddlewareArray;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    MiddlewareArray.prototype.concat = function () {
	        var arr = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            arr[_i] = arguments[_i];
	        }
	        return _super.prototype.concat.apply(this, arr);
	    };
	    MiddlewareArray.prototype.prepend = function () {
	        var arr = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            arr[_i] = arguments[_i];
	        }
	        if (arr.length === 1 && Array.isArray(arr[0])) {
	            return new (MiddlewareArray.bind.apply(MiddlewareArray, __spreadArray([void 0], arr[0].concat(this))))();
	        }
	        return new (MiddlewareArray.bind.apply(MiddlewareArray, __spreadArray([void 0], arr.concat(this))))();
	    };
	    return MiddlewareArray;
	}(Array));
	function freezeDraftable(val) {
	    return t$1(val) ? produce(val, function () {
	    }) : val;
	}
	// src/getDefaultMiddleware.ts
	function isBoolean(x) {
	    return typeof x === "boolean";
	}
	function curryGetDefaultMiddleware() {
	    return function curriedGetDefaultMiddleware(options) {
	        return getDefaultMiddleware(options);
	    };
	}
	function getDefaultMiddleware(options) {
	    if (options === void 0) { options = {}; }
	    var _c = options.thunk, thunk = _c === void 0 ? true : _c; options.immutableCheck; options.serializableCheck;
	    var middlewareArray = new MiddlewareArray();
	    if (thunk) {
	        if (isBoolean(thunk)) {
	            middlewareArray.push(thunkMiddleware);
	        }
	        else {
	            middlewareArray.push(thunkMiddleware.withExtraArgument(thunk.extraArgument));
	        }
	    }
	    return middlewareArray;
	}
	// src/configureStore.ts
	var IS_PRODUCTION = "production" === "production";
	function configureStore(options) {
	    var curriedGetDefaultMiddleware = curryGetDefaultMiddleware();
	    var _c = options || {}, _d = _c.reducer, reducer = _d === void 0 ? void 0 : _d, _e = _c.middleware, middleware = _e === void 0 ? curriedGetDefaultMiddleware() : _e, _f = _c.devTools, devTools = _f === void 0 ? true : _f, _g = _c.preloadedState, preloadedState = _g === void 0 ? void 0 : _g, _h = _c.enhancers, enhancers = _h === void 0 ? void 0 : _h;
	    var rootReducer;
	    if (typeof reducer === "function") {
	        rootReducer = reducer;
	    }
	    else if (isPlainObject(reducer)) {
	        rootReducer = combineReducers(reducer);
	    }
	    else {
	        throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
	    }
	    var finalMiddleware = middleware;
	    if (typeof finalMiddleware === "function") {
	        finalMiddleware = finalMiddleware(curriedGetDefaultMiddleware);
	    }
	    var middlewareEnhancer = applyMiddleware.apply(void 0, finalMiddleware);
	    var finalCompose = compose;
	    if (devTools) {
	        finalCompose = composeWithDevTools(__spreadValues({
	            trace: !IS_PRODUCTION
	        }, typeof devTools === "object" && devTools));
	    }
	    var storeEnhancers = [middlewareEnhancer];
	    if (Array.isArray(enhancers)) {
	        storeEnhancers = __spreadArray([middlewareEnhancer], enhancers);
	    }
	    else if (typeof enhancers === "function") {
	        storeEnhancers = enhancers(storeEnhancers);
	    }
	    var composedEnhancer = finalCompose.apply(void 0, storeEnhancers);
	    return createStore(rootReducer, preloadedState, composedEnhancer);
	}
	// src/createAction.ts
	function createAction(type, prepareAction) {
	    function actionCreator() {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i] = arguments[_i];
	        }
	        if (prepareAction) {
	            var prepared = prepareAction.apply(void 0, args);
	            if (!prepared) {
	                throw new Error("prepareAction did not return an object");
	            }
	            return __spreadValues(__spreadValues({
	                type: type,
	                payload: prepared.payload
	            }, "meta" in prepared && { meta: prepared.meta }), "error" in prepared && { error: prepared.error });
	        }
	        return { type: type, payload: args[0] };
	    }
	    actionCreator.toString = function () { return "" + type; };
	    actionCreator.type = type;
	    actionCreator.match = function (action) { return action.type === type; };
	    return actionCreator;
	}
	// src/mapBuilders.ts
	function executeReducerBuilderCallback(builderCallback) {
	    var actionsMap = {};
	    var actionMatchers = [];
	    var defaultCaseReducer;
	    var builder = {
	        addCase: function (typeOrActionCreator, reducer) {
	            var type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
	            if (type in actionsMap) {
	                throw new Error("addCase cannot be called with two reducers for the same action type");
	            }
	            actionsMap[type] = reducer;
	            return builder;
	        },
	        addMatcher: function (matcher, reducer) {
	            actionMatchers.push({ matcher: matcher, reducer: reducer });
	            return builder;
	        },
	        addDefaultCase: function (reducer) {
	            defaultCaseReducer = reducer;
	            return builder;
	        }
	    };
	    builderCallback(builder);
	    return [actionsMap, actionMatchers, defaultCaseReducer];
	}
	// src/createReducer.ts
	function isStateFunction(x) {
	    return typeof x === "function";
	}
	function createReducer(initialState, mapOrBuilderCallback, actionMatchers, defaultCaseReducer) {
	    if (actionMatchers === void 0) { actionMatchers = []; }
	    var _c = typeof mapOrBuilderCallback === "function" ? executeReducerBuilderCallback(mapOrBuilderCallback) : [mapOrBuilderCallback, actionMatchers, defaultCaseReducer], actionsMap = _c[0], finalActionMatchers = _c[1], finalDefaultCaseReducer = _c[2];
	    var getInitialState;
	    if (isStateFunction(initialState)) {
	        getInitialState = function () { return freezeDraftable(initialState()); };
	    }
	    else {
	        var frozenInitialState_1 = freezeDraftable(initialState);
	        getInitialState = function () { return frozenInitialState_1; };
	    }
	    function reducer(state, action) {
	        if (state === void 0) { state = getInitialState(); }
	        var caseReducers = __spreadArray([
	            actionsMap[action.type]
	        ], finalActionMatchers.filter(function (_c) {
	            var matcher = _c.matcher;
	            return matcher(action);
	        }).map(function (_c) {
	            var reducer2 = _c.reducer;
	            return reducer2;
	        }));
	        if (caseReducers.filter(function (cr) { return !!cr; }).length === 0) {
	            caseReducers = [finalDefaultCaseReducer];
	        }
	        return caseReducers.reduce(function (previousState, caseReducer) {
	            if (caseReducer) {
	                if (r$1(previousState)) {
	                    var draft = previousState;
	                    var result = caseReducer(draft, action);
	                    if (result === void 0) {
	                        return previousState;
	                    }
	                    return result;
	                }
	                else if (!t$1(previousState)) {
	                    var result = caseReducer(previousState, action);
	                    if (result === void 0) {
	                        if (previousState === null) {
	                            return previousState;
	                        }
	                        throw Error("A case reducer on a non-draftable value must not return undefined");
	                    }
	                    return result;
	                }
	                else {
	                    return produce(previousState, function (draft) {
	                        return caseReducer(draft, action);
	                    });
	                }
	            }
	            return previousState;
	        }, state);
	    }
	    reducer.getInitialState = getInitialState;
	    return reducer;
	}
	function getType2(slice, actionKey) {
	    return slice + "/" + actionKey;
	}
	function createSlice(options) {
	    var name = options.name;
	    if (!name) {
	        throw new Error("`name` is a required option for createSlice");
	    }
	    if (typeof process !== "undefined" && "production" === "development") {
	        if (options.initialState === void 0) {
	            console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
	        }
	    }
	    var initialState = typeof options.initialState == "function" ? options.initialState : freezeDraftable(options.initialState);
	    var reducers = options.reducers || {};
	    var reducerNames = Object.keys(reducers);
	    var sliceCaseReducersByName = {};
	    var sliceCaseReducersByType = {};
	    var actionCreators = {};
	    reducerNames.forEach(function (reducerName) {
	        var maybeReducerWithPrepare = reducers[reducerName];
	        var type = getType2(name, reducerName);
	        var caseReducer;
	        var prepareCallback;
	        if ("reducer" in maybeReducerWithPrepare) {
	            caseReducer = maybeReducerWithPrepare.reducer;
	            prepareCallback = maybeReducerWithPrepare.prepare;
	        }
	        else {
	            caseReducer = maybeReducerWithPrepare;
	        }
	        sliceCaseReducersByName[reducerName] = caseReducer;
	        sliceCaseReducersByType[type] = caseReducer;
	        actionCreators[reducerName] = prepareCallback ? createAction(type, prepareCallback) : createAction(type);
	    });
	    function buildReducer() {
	        var _c = typeof options.extraReducers === "function" ? executeReducerBuilderCallback(options.extraReducers) : [options.extraReducers], _d = _c[0], extraReducers = _d === void 0 ? {} : _d, _e = _c[1], actionMatchers = _e === void 0 ? [] : _e, _f = _c[2], defaultCaseReducer = _f === void 0 ? void 0 : _f;
	        var finalCaseReducers = __spreadValues(__spreadValues({}, extraReducers), sliceCaseReducersByType);
	        return createReducer(initialState, function (builder) {
	            for (var key in finalCaseReducers) {
	                builder.addCase(key, finalCaseReducers[key]);
	            }
	            for (var _i = 0, actionMatchers_1 = actionMatchers; _i < actionMatchers_1.length; _i++) {
	                var m = actionMatchers_1[_i];
	                builder.addMatcher(m.matcher, m.reducer);
	            }
	            if (defaultCaseReducer) {
	                builder.addDefaultCase(defaultCaseReducer);
	            }
	        });
	    }
	    var _reducer;
	    return {
	        name: name,
	        reducer: function (state, action) {
	            if (!_reducer)
	                _reducer = buildReducer();
	            return _reducer(state, action);
	        },
	        actions: actionCreators,
	        caseReducers: sliceCaseReducersByName,
	        getInitialState: function () {
	            if (!_reducer)
	                _reducer = buildReducer();
	            return _reducer.getInitialState();
	        }
	    };
	}
	// src/nanoid.ts
	var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
	var nanoid = function (size) {
	    if (size === void 0) { size = 21; }
	    var id = "";
	    var i = size;
	    while (i--) {
	        id += urlAlphabet[Math.random() * 64 | 0];
	    }
	    return id;
	};
	// src/createAsyncThunk.ts
	var commonProperties = [
	    "name",
	    "message",
	    "stack",
	    "code"
	];
	var RejectWithValue = /** @class */ (function () {
	    function RejectWithValue(payload, meta) {
	        this.payload = payload;
	        this.meta = meta;
	    }
	    return RejectWithValue;
	}());
	var FulfillWithMeta = /** @class */ (function () {
	    function FulfillWithMeta(payload, meta) {
	        this.payload = payload;
	        this.meta = meta;
	    }
	    return FulfillWithMeta;
	}());
	var miniSerializeError = function (value) {
	    if (typeof value === "object" && value !== null) {
	        var simpleError = {};
	        for (var _i = 0, commonProperties_1 = commonProperties; _i < commonProperties_1.length; _i++) {
	            var property = commonProperties_1[_i];
	            if (typeof value[property] === "string") {
	                simpleError[property] = value[property];
	            }
	        }
	        return simpleError;
	    }
	    return { message: String(value) };
	};
	((function () {
	    function createAsyncThunk2(typePrefix, payloadCreator, options) {
	        var fulfilled = createAction(typePrefix + "/fulfilled", function (payload, requestId, arg, meta) { return ({
	            payload: payload,
	            meta: __spreadProps(__spreadValues({}, meta || {}), {
	                arg: arg,
	                requestId: requestId,
	                requestStatus: "fulfilled"
	            })
	        }); });
	        var pending = createAction(typePrefix + "/pending", function (requestId, arg, meta) { return ({
	            payload: void 0,
	            meta: __spreadProps(__spreadValues({}, meta || {}), {
	                arg: arg,
	                requestId: requestId,
	                requestStatus: "pending"
	            })
	        }); });
	        var rejected = createAction(typePrefix + "/rejected", function (error, requestId, arg, payload, meta) { return ({
	            payload: payload,
	            error: (options && options.serializeError || miniSerializeError)(error || "Rejected"),
	            meta: __spreadProps(__spreadValues({}, meta || {}), {
	                arg: arg,
	                requestId: requestId,
	                rejectedWithValue: !!payload,
	                requestStatus: "rejected",
	                aborted: (error == null ? void 0 : error.name) === "AbortError",
	                condition: (error == null ? void 0 : error.name) === "ConditionError"
	            })
	        }); });
	        var AC = typeof AbortController !== "undefined" ? AbortController : /** @class */ (function () {
	            function class_1() {
	                this.signal = {
	                    aborted: false,
	                    addEventListener: function () {
	                    },
	                    dispatchEvent: function () {
	                        return false;
	                    },
	                    onabort: function () {
	                    },
	                    removeEventListener: function () {
	                    },
	                    reason: void 0,
	                    throwIfAborted: function () {
	                    }
	                };
	            }
	            class_1.prototype.abort = function () {
	            };
	            return class_1;
	        }());
	        function actionCreator(arg) {
	            return function (dispatch, getState, extra) {
	                var requestId = (options == null ? void 0 : options.idGenerator) ? options.idGenerator(arg) : nanoid();
	                var abortController = new AC();
	                var abortReason;
	                function abort(reason) {
	                    abortReason = reason;
	                    abortController.abort();
	                }
	                var promise2 = function () {
	                    return __async(this, null, function () {
	                        var _a, _b, finalAction, conditionResult, abortedPromise, err_1, skipDispatch;
	                        return __generator(this, function (_c) {
	                            switch (_c.label) {
	                                case 0:
	                                    _c.trys.push([0, 4, , 5]);
	                                    conditionResult = (_a = options == null ? void 0 : options.condition) == null ? void 0 : _a.call(options, arg, { getState: getState, extra: extra });
	                                    if (!isThenable(conditionResult)) return [3 /*break*/, 2];
	                                    return [4 /*yield*/, conditionResult];
	                                case 1:
	                                    conditionResult = _c.sent();
	                                    _c.label = 2;
	                                case 2:
	                                    if (conditionResult === false || abortController.signal.aborted) {
	                                        throw {
	                                            name: "ConditionError",
	                                            message: "Aborted due to condition callback returning false."
	                                        };
	                                    }
	                                    abortedPromise = new Promise(function (_, reject) { return abortController.signal.addEventListener("abort", function () { return reject({
	                                        name: "AbortError",
	                                        message: abortReason || "Aborted"
	                                    }); }); });
	                                    dispatch(pending(requestId, arg, (_b = options == null ? void 0 : options.getPendingMeta) == null ? void 0 : _b.call(options, { requestId: requestId, arg: arg }, { getState: getState, extra: extra })));
	                                    return [4 /*yield*/, Promise.race([
	                                            abortedPromise,
	                                            Promise.resolve(payloadCreator(arg, {
	                                                dispatch: dispatch,
	                                                getState: getState,
	                                                extra: extra,
	                                                requestId: requestId,
	                                                signal: abortController.signal,
	                                                abort: abort,
	                                                rejectWithValue: function (value, meta) {
	                                                    return new RejectWithValue(value, meta);
	                                                },
	                                                fulfillWithValue: function (value, meta) {
	                                                    return new FulfillWithMeta(value, meta);
	                                                }
	                                            })).then(function (result) {
	                                                if (result instanceof RejectWithValue) {
	                                                    throw result;
	                                                }
	                                                if (result instanceof FulfillWithMeta) {
	                                                    return fulfilled(result.payload, requestId, arg, result.meta);
	                                                }
	                                                return fulfilled(result, requestId, arg);
	                                            })
	                                        ])];
	                                case 3:
	                                    finalAction = _c.sent();
	                                    return [3 /*break*/, 5];
	                                case 4:
	                                    err_1 = _c.sent();
	                                    finalAction = err_1 instanceof RejectWithValue ? rejected(null, requestId, arg, err_1.payload, err_1.meta) : rejected(err_1, requestId, arg);
	                                    return [3 /*break*/, 5];
	                                case 5:
	                                    skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;
	                                    if (!skipDispatch) {
	                                        dispatch(finalAction);
	                                    }
	                                    return [2 /*return*/, finalAction];
	                            }
	                        });
	                    });
	                }();
	                return Object.assign(promise2, {
	                    abort: abort,
	                    requestId: requestId,
	                    arg: arg,
	                    unwrap: function () {
	                        return promise2.then(unwrapResult);
	                    }
	                });
	            };
	        }
	        return Object.assign(actionCreator, {
	            pending: pending,
	            rejected: rejected,
	            fulfilled: fulfilled,
	            typePrefix: typePrefix
	        });
	    }
	    createAsyncThunk2.withTypes = function () { return createAsyncThunk2; };
	    return createAsyncThunk2;
	}))();
	function unwrapResult(action) {
	    if (action.meta && action.meta.rejectedWithValue) {
	        throw action.payload;
	    }
	    if (action.error) {
	        throw action.error;
	    }
	    return action.payload;
	}
	function isThenable(value) {
	    return value !== null && typeof value === "object" && typeof value.then === "function";
	}
	var alm = "listenerMiddleware";
	createAction(alm + "/add");
	createAction(alm + "/removeAll");
	createAction(alm + "/remove");
	var promise;
	typeof queueMicrotask === "function" ? queueMicrotask.bind(typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : globalThis) : function (cb) { return (promise || (promise = Promise.resolve())).then(cb).catch(function (err) { return setTimeout(function () {
	    throw err;
	}, 0); }); };
	// src/index.ts
	F();

	let counterStoreState = {
	  counter: 0
	};
	const counterSlice = createSlice({
	  name: "counter",
	  initialState: counterStoreState,
	  reducers: {
	    increment: produce((draft, action) => {
	      draft.counter += action.payload;
	    }),
	    decrement: produce((draft, action) => {
	      draft.counter -= action.payload;
	    })
	  }
	});
	const {
	  increment,
	  decrement
	} = counterSlice.actions;
	const counterSliceReducer = counterSlice.reducer;

	var distExports = {};
	var dist = {
	  get exports(){ return distExports; },
	  set exports(v){ distExports = v; },
	};

	var require$$0 = /*@__PURE__*/getAugmentedNamespace(es);

	(function (module, exports) {
		(function (global, factory) {
		  factory(exports, require$$0) ;
		})(commonjsGlobal, (function (exports, reselect) {
		  function isStringOrNumber(value) {
		    return typeof value === 'string' || typeof value === 'number';
		  }

		  var FlatObjectCache = /*#__PURE__*/function () {
		    function FlatObjectCache() {
		      this._cache = {};
		    }

		    var _proto = FlatObjectCache.prototype;

		    _proto.set = function set(key, selectorFn) {
		      this._cache[key] = selectorFn;
		    };

		    _proto.get = function get(key) {
		      return this._cache[key];
		    };

		    _proto.remove = function remove(key) {
		      delete this._cache[key];
		    };

		    _proto.clear = function clear() {
		      this._cache = {};
		    };

		    _proto.isValidCacheKey = function isValidCacheKey(cacheKey) {
		      return isStringOrNumber(cacheKey);
		    };

		    return FlatObjectCache;
		  }();

		  var defaultCacheCreator = FlatObjectCache;

		  var defaultCacheKeyValidator = function defaultCacheKeyValidator() {
		    return true;
		  };

		  function createCachedSelector() {
		    for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
		      funcs[_key] = arguments[_key];
		    }

		    return function (polymorphicOptions, legacyOptions) {
		      if (legacyOptions) {
		        throw new Error('[re-reselect] "options" as second argument is not supported anymore. Please provide an option object as single argument.');
		      }

		      var options = typeof polymorphicOptions === 'function' ? {
		        keySelector: polymorphicOptions
		      } : Object.assign({}, polymorphicOptions); // https://github.com/reduxjs/reselect/blob/v4.0.0/src/index.js#L54

		      var recomputations = 0;
		      var resultFunc = funcs.pop();
		      var dependencies = Array.isArray(funcs[0]) ? funcs[0] : [].concat(funcs);

		      var resultFuncWithRecomputations = function resultFuncWithRecomputations() {
		        recomputations++;
		        return resultFunc.apply(void 0, arguments);
		      };

		      funcs.push(resultFuncWithRecomputations);
		      var cache = options.cacheObject || new defaultCacheCreator();
		      var selectorCreator = options.selectorCreator || reselect.createSelector;
		      var isValidCacheKey = cache.isValidCacheKey || defaultCacheKeyValidator;

		      if (options.keySelectorCreator) {
		        options.keySelector = options.keySelectorCreator({
		          keySelector: options.keySelector,
		          inputSelectors: dependencies,
		          resultFunc: resultFunc
		        });
		      } // Application receives this function


		      var selector = function selector() {
		        var cacheKey = options.keySelector.apply(options, arguments);

		        if (isValidCacheKey(cacheKey)) {
		          var cacheResponse = cache.get(cacheKey);

		          if (cacheResponse === undefined) {
		            cacheResponse = selectorCreator.apply(void 0, funcs);
		            cache.set(cacheKey, cacheResponse);
		          }

		          return cacheResponse.apply(void 0, arguments);
		        }

		        console.warn("[re-reselect] Invalid cache key \"" + cacheKey + "\" has been returned by keySelector function.");
		        return undefined;
		      }; // Further selector methods


		      selector.getMatchingSelector = function () {
		        var cacheKey = options.keySelector.apply(options, arguments); // @NOTE It might update cache hit count in LRU-like caches

		        return cache.get(cacheKey);
		      };

		      selector.removeMatchingSelector = function () {
		        var cacheKey = options.keySelector.apply(options, arguments);
		        cache.remove(cacheKey);
		      };

		      selector.clearCache = function () {
		        cache.clear();
		      };

		      selector.resultFunc = resultFunc;
		      selector.dependencies = dependencies;
		      selector.cache = cache;

		      selector.recomputations = function () {
		        return recomputations;
		      };

		      selector.resetRecomputations = function () {
		        return recomputations = 0;
		      };

		      selector.keySelector = options.keySelector;
		      return selector;
		    };
		  }

		  function createStructuredCachedSelector(selectors) {
		    return reselect.createStructuredSelector(selectors, createCachedSelector);
		  }

		  function validateCacheSize(cacheSize) {
		    if (cacheSize === undefined) {
		      throw new Error('Missing the required property "cacheSize".');
		    }

		    if (!Number.isInteger(cacheSize) || cacheSize <= 0) {
		      throw new Error('The "cacheSize" property must be a positive integer value.');
		    }
		  }

		  var FifoObjectCache = /*#__PURE__*/function () {
		    function FifoObjectCache(_temp) {
		      var _ref = _temp === void 0 ? {} : _temp,
		          cacheSize = _ref.cacheSize;

		      validateCacheSize(cacheSize);
		      this._cache = {};
		      this._cacheOrdering = [];
		      this._cacheSize = cacheSize;
		    }

		    var _proto = FifoObjectCache.prototype;

		    _proto.set = function set(key, selectorFn) {
		      this._cache[key] = selectorFn;

		      this._cacheOrdering.push(key);

		      if (this._cacheOrdering.length > this._cacheSize) {
		        var earliest = this._cacheOrdering[0];
		        this.remove(earliest);
		      }
		    };

		    _proto.get = function get(key) {
		      return this._cache[key];
		    };

		    _proto.remove = function remove(key) {
		      var index = this._cacheOrdering.indexOf(key);

		      if (index > -1) {
		        this._cacheOrdering.splice(index, 1);
		      }

		      delete this._cache[key];
		    };

		    _proto.clear = function clear() {
		      this._cache = {};
		      this._cacheOrdering = [];
		    };

		    _proto.isValidCacheKey = function isValidCacheKey(cacheKey) {
		      return isStringOrNumber(cacheKey);
		    };

		    return FifoObjectCache;
		  }();

		  var LruObjectCache = /*#__PURE__*/function () {
		    function LruObjectCache(_temp) {
		      var _ref = _temp === void 0 ? {} : _temp,
		          cacheSize = _ref.cacheSize;

		      validateCacheSize(cacheSize);
		      this._cache = {};
		      this._cacheOrdering = [];
		      this._cacheSize = cacheSize;
		    }

		    var _proto = LruObjectCache.prototype;

		    _proto.set = function set(key, selectorFn) {
		      this._cache[key] = selectorFn;

		      this._registerCacheHit(key);

		      if (this._cacheOrdering.length > this._cacheSize) {
		        var earliest = this._cacheOrdering[0];
		        this.remove(earliest);
		      }
		    };

		    _proto.get = function get(key) {
		      this._registerCacheHit(key);

		      return this._cache[key];
		    };

		    _proto.remove = function remove(key) {
		      this._deleteCacheHit(key);

		      delete this._cache[key];
		    };

		    _proto.clear = function clear() {
		      this._cache = {};
		      this._cacheOrdering = [];
		    };

		    _proto._registerCacheHit = function _registerCacheHit(key) {
		      this._deleteCacheHit(key);

		      this._cacheOrdering.push(key);
		    };

		    _proto._deleteCacheHit = function _deleteCacheHit(key) {
		      var index = this._cacheOrdering.indexOf(key);

		      if (index > -1) {
		        this._cacheOrdering.splice(index, 1);
		      }
		    };

		    _proto.isValidCacheKey = function isValidCacheKey(cacheKey) {
		      return isStringOrNumber(cacheKey);
		    };

		    return LruObjectCache;
		  }();

		  var FlatMapCache = /*#__PURE__*/function () {
		    function FlatMapCache() {
		      this._cache = new Map();
		    }

		    var _proto = FlatMapCache.prototype;

		    _proto.set = function set(key, selectorFn) {
		      this._cache.set(key, selectorFn);
		    };

		    _proto.get = function get(key) {
		      return this._cache.get(key);
		    };

		    _proto.remove = function remove(key) {
		      this._cache["delete"](key);
		    };

		    _proto.clear = function clear() {
		      this._cache.clear();
		    };

		    return FlatMapCache;
		  }();

		  var FifoMapCache = /*#__PURE__*/function () {
		    function FifoMapCache(_temp) {
		      var _ref = _temp === void 0 ? {} : _temp,
		          cacheSize = _ref.cacheSize;

		      validateCacheSize(cacheSize);
		      this._cache = new Map();
		      this._cacheSize = cacheSize;
		    }

		    var _proto = FifoMapCache.prototype;

		    _proto.set = function set(key, selectorFn) {
		      this._cache.set(key, selectorFn);

		      if (this._cache.size > this._cacheSize) {
		        var earliest = this._cache.keys().next().value;

		        this.remove(earliest);
		      }
		    };

		    _proto.get = function get(key) {
		      return this._cache.get(key);
		    };

		    _proto.remove = function remove(key) {
		      this._cache["delete"](key);
		    };

		    _proto.clear = function clear() {
		      this._cache.clear();
		    };

		    return FifoMapCache;
		  }();

		  var LruMapCache = /*#__PURE__*/function () {
		    function LruMapCache(_temp) {
		      var _ref = _temp === void 0 ? {} : _temp,
		          cacheSize = _ref.cacheSize;

		      validateCacheSize(cacheSize);
		      this._cache = new Map();
		      this._cacheSize = cacheSize;
		    }

		    var _proto = LruMapCache.prototype;

		    _proto.set = function set(key, selectorFn) {
		      this._cache.set(key, selectorFn);

		      if (this._cache.size > this._cacheSize) {
		        var earliest = this._cache.keys().next().value;

		        this.remove(earliest);
		      }
		    };

		    _proto.get = function get(key) {
		      var value = this._cache.get(key); // Register cache hit


		      if (this._cache.has(key)) {
		        this.remove(key);

		        this._cache.set(key, value);
		      }

		      return value;
		    };

		    _proto.remove = function remove(key) {
		      this._cache["delete"](key);
		    };

		    _proto.clear = function clear() {
		      this._cache.clear();
		    };

		    return LruMapCache;
		  }();

		  exports.FifoMapCache = FifoMapCache;
		  exports.FifoObjectCache = FifoObjectCache;
		  exports.FlatMapCache = FlatMapCache;
		  exports.FlatObjectCache = FlatObjectCache;
		  exports.LruMapCache = LruMapCache;
		  exports.LruObjectCache = LruObjectCache;
		  exports.createCachedSelector = createCachedSelector;
		  exports.createStructuredCachedSelector = createStructuredCachedSelector;
		  exports["default"] = createCachedSelector;

		  Object.defineProperty(exports, '__esModule', { value: true });

		}));
		
	} (dist, distExports));

	var createCachedSelector = /*@__PURE__*/getDefaultExportFromCjs(distExports);

	var jsxRuntimeExports = {};
	var jsxRuntime = {
	  get exports(){ return jsxRuntimeExports; },
	  set exports(v){ jsxRuntimeExports = v; },
	};

	var reactJsxRuntime_production_min = {};

	/**
	 * @license React
	 * react-jsx-runtime.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredReactJsxRuntime_production_min;

	function requireReactJsxRuntime_production_min () {
		if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
		hasRequiredReactJsxRuntime_production_min = 1;
	var f=exports.reactExports,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
		function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
		return reactJsxRuntime_production_min;
	}

	(function (module) {

		{
		  module.exports = requireReactJsxRuntime_production_min();
		}
	} (jsxRuntime));

	var u$1 = /*@__PURE__*/getDefaultExportFromCjs(jsxRuntimeExports);

	var jsxDevRuntimeExports = {};
	var jsxDevRuntime = {
	  get exports(){ return jsxDevRuntimeExports; },
	  set exports(v){ jsxDevRuntimeExports = v; },
	};

	var reactJsxDevRuntime_production_min = {};

	/**
	 * @license React
	 * react-jsx-dev-runtime.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredReactJsxDevRuntime_production_min;

	function requireReactJsxDevRuntime_production_min () {
		if (hasRequiredReactJsxDevRuntime_production_min) return reactJsxDevRuntime_production_min;
		hasRequiredReactJsxDevRuntime_production_min = 1;
	var a=Symbol.for("react.fragment");reactJsxDevRuntime_production_min.Fragment=a;reactJsxDevRuntime_production_min.jsxDEV=void 0;
		return reactJsxDevRuntime_production_min;
	}

	(function (module) {

		{
		  module.exports = requireReactJsxDevRuntime_production_min();
		}
	} (jsxDevRuntime));

	var i$1 = /*@__PURE__*/getDefaultExportFromCjs(jsxDevRuntimeExports);

	var shimExports = {};
	var shim = {
	  get exports(){ return shimExports; },
	  set exports(v){ shimExports = v; },
	};

	var useSyncExternalStoreShim_production_min = {};

	/**
	 * @license React
	 * use-sync-external-store-shim.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredUseSyncExternalStoreShim_production_min;

	function requireUseSyncExternalStoreShim_production_min () {
		if (hasRequiredUseSyncExternalStoreShim_production_min) return useSyncExternalStoreShim_production_min;
		hasRequiredUseSyncExternalStoreShim_production_min = 1;
	var e=exports.reactExports;function h(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var k="function"===typeof Object.is?Object.is:h,l=e.useState,m=e.useEffect,n=e.useLayoutEffect,p=e.useDebugValue;function q(a,b){var d=b(),f=l({inst:{value:d,getSnapshot:b}}),c=f[0].inst,g=f[1];n(function(){c.value=d;c.getSnapshot=b;r(c)&&g({inst:c});},[a,d,b]);m(function(){r(c)&&g({inst:c});return a(function(){r(c)&&g({inst:c});})},[a]);p(d);return d}
		function r(a){var b=a.getSnapshot;a=a.value;try{var d=b();return !k(a,d)}catch(f){return !0}}function t(a,b){return b()}var u="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?t:q;useSyncExternalStoreShim_production_min.useSyncExternalStore=void 0!==e.useSyncExternalStore?e.useSyncExternalStore:u;
		return useSyncExternalStoreShim_production_min;
	}

	(function (module) {

		{
		  module.exports = requireUseSyncExternalStoreShim_production_min();
		}
	} (shim));

	function i(){throw new Error("Cycle detected")}function t(){if(!(s$1>1)){var i,t=!1;while(void 0!==r){var h=r;r=void 0;n++;while(void 0!==h){var o=h.o;h.o=void 0;h.f&=-3;if(!(8&h.f)&&d$1(h))try{h.c();}catch(h){if(!t){i=h;t=!0;}}h=o;}}n=0;s$1--;if(t)throw i}else s$1--;}var o=void 0,r=void 0,s$1=0,n=0,f=0;function v$1(i){if(void 0!==o){var t=i.n;if(void 0===t||t.t!==o){t={i:0,S:i,p:o.s,n:void 0,t:o,e:void 0,x:void 0,r:t};if(void 0!==o.s)o.s.n=t;o.s=t;i.n=t;if(32&o.f)i.S(t);return t}else if(-1===t.i){t.i=0;if(void 0!==t.n){t.n.p=t.p;if(void 0!==t.p)t.p.n=t.n;t.p=o.s;t.n=void 0;o.s.n=t;o.s=t;}return t}}}function e(i){this.v=i;this.i=0;this.n=void 0;this.t=void 0;}e.prototype.h=function(){return !0};e.prototype.S=function(i){if(this.t!==i&&void 0===i.e){i.x=this.t;if(void 0!==this.t)this.t.e=i;this.t=i;}};e.prototype.U=function(i){if(void 0!==this.t){var t=i.e,h=i.x;if(void 0!==t){t.x=h;i.e=void 0;}if(void 0!==h){h.e=t;i.x=void 0;}if(i===this.t)this.t=h;}};e.prototype.subscribe=function(i){var t=this;return p(function(){var h=t.value,o=32&this.f;this.f&=-33;try{i(h);}finally{this.f|=o;}})};e.prototype.valueOf=function(){return this.value};e.prototype.toString=function(){return this.value+""};e.prototype.peek=function(){return this.v};Object.defineProperty(e.prototype,"value",{get:function(){var i=v$1(this);if(void 0!==i)i.i=this.i;return this.v},set:function(h){if(h!==this.v){if(n>100)i();this.v=h;this.i++;f++;s$1++;try{for(var o=this.t;void 0!==o;o=o.x)o.t.N();}finally{t();}}}});function u(i){return new e(i)}function d$1(i){for(var t=i.s;void 0!==t;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return !0;return !1}function c(i){for(var t=i.s;void 0!==t;t=t.n){var h=t.S.n;if(void 0!==h)t.r=h;t.S.n=t;t.i=-1;if(void 0===t.n){i.s=t;break}}}function a(i){var t=i.s,h=void 0;while(void 0!==t){var o=t.p;if(-1===t.i){t.S.U(t);if(void 0!==o)o.n=t.n;if(void 0!==t.n)t.n.p=o;}else h=t;t.S.n=t.r;if(void 0!==t.r)t.r=void 0;t=o;}i.s=h;}function l(i){e.call(this,void 0);this.x=i;this.s=void 0;this.g=f-1;this.f=4;}(l.prototype=new e).h=function(){this.f&=-3;if(1&this.f)return !1;if(32==(36&this.f))return !0;this.f&=-5;if(this.g===f)return !0;this.g=f;this.f|=1;if(this.i>0&&!d$1(this)){this.f&=-2;return !0}var i=o;try{c(this);o=this;var t=this.x();if(16&this.f||this.v!==t||0===this.i){this.v=t;this.f&=-17;this.i++;}}catch(i){this.v=i;this.f|=16;this.i++;}o=i;a(this);this.f&=-2;return !0};l.prototype.S=function(i){if(void 0===this.t){this.f|=36;for(var t=this.s;void 0!==t;t=t.n)t.S.S(t);}e.prototype.S.call(this,i);};l.prototype.U=function(i){if(void 0!==this.t){e.prototype.U.call(this,i);if(void 0===this.t){this.f&=-33;for(var t=this.s;void 0!==t;t=t.n)t.S.U(t);}}};l.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var i=this.t;void 0!==i;i=i.x)i.t.N();}};l.prototype.peek=function(){if(!this.h())i();if(16&this.f)throw this.v;return this.v};Object.defineProperty(l.prototype,"value",{get:function(){if(1&this.f)i();var t=v$1(this);this.h();if(void 0!==t)t.i=this.i;if(16&this.f)throw this.v;return this.v}});function y$1(i){var h=i.u;i.u=void 0;if("function"==typeof h){s$1++;var r=o;o=void 0;try{h();}catch(t){i.f&=-2;i.f|=8;_(i);throw t}finally{o=r;t();}}}function _(i){for(var t=i.s;void 0!==t;t=t.n)t.S.U(t);i.x=void 0;i.s=void 0;y$1(i);}function g$1(i){if(o!==this)throw new Error("Out-of-order effect");a(this);o=i;this.f&=-2;if(8&this.f)_(this);t();}function b$1(i){this.x=i;this.u=void 0;this.s=void 0;this.o=void 0;this.f=32;}b$1.prototype.c=function(){var i=this.S();try{if(!(8&this.f)&&void 0!==this.x)this.u=this.x();}finally{i();}};b$1.prototype.S=function(){if(1&this.f)i();this.f|=1;this.f&=-9;y$1(this);c(this);s$1++;var t=o;o=this;return g$1.bind(this,t)};b$1.prototype.N=function(){if(!(2&this.f)){this.f|=2;this.o=r;r=this;}};b$1.prototype.d=function(){this.f|=8;if(!(1&this.f))_(this);};function p(i){var t=new b$1(i);try{t.c();}catch(i){t.d();throw i}return t.d.bind(t)}

	var s=[],m=Symbol.for("react.element"),v=Symbol.for("react.memo"),y=new WeakMap,b="function"==typeof Proxy,g={apply:function(n,r,e){var o=exports.reactExports.useMemo(h,s);shimExports.useSyncExternalStore(o.subscribe,o.getSnapshot,o.getSnapshot);var u=o.updater.S();try{return n.apply(r,e)}catch(n){throw n}finally{u();}}};function d(n){return y.get(n)||function(n){if(b){var r=new Proxy(n,g);y.set(n,r);y.set(r,r);return r}var t=function(){return g.apply(n,void 0,arguments)};y.set(n,t);y.set(t,t);return t}(n)}function h(){var n,r,t=0,e=p(function(){n=this;});n.c=function(){t=t+1|0;if(r)r();};return {updater:n,subscribe:function(n){r=n;return function(){t=t+1|0;r=void 0;e();}},getSnapshot:function(){return t}}}function x(n){if("function"!=typeof n)return n;else return function(t,e$1){var o=[].slice.call(arguments,2);if("function"==typeof t&&!(t instanceof exports.reactExports.Component))return n.call.apply(n,[n,d(t),e$1].concat(o));if(t&&"object"==typeof t&&t.$$typeof===v){t.type=d(t.type);return n.call.apply(n,[n,t,e$1].concat(o))}if("string"==typeof t&&e$1)for(var u in e$1){var i=e$1[u];if("children"!==u&&i instanceof e)e$1[u]=i.value;}return n.call.apply(n,[n,t,e$1].concat(o))}}var j=u$1,S=i$1;React.createElement=x(React.createElement);S.jsx&&(S.jsx=x(S.jsx));j.jsx&&(j.jsx=x(j.jsx));S.jsxs&&(S.jsxs=x(S.jsxs));j.jsxs&&(j.jsxs=x(j.jsxs));S.jsxDEV&&(S.jsxDEV=x(S.jsxDEV));j.jsxDEV&&(j.jsxDEV=x(j.jsxDEV));Object.defineProperties(e.prototype,{$$typeof:{configurable:!0,value:m},type:{configurable:!0,value:d(function(n){return n.data.value})},props:{configurable:!0,get:function(){return {data:this}}},ref:{configurable:!0,value:null}});function useSignal(n){return exports.reactExports.useMemo(function(){return u(n)},s)}function useSignalEffect(n){var r=exports.reactExports.useRef(n);r.current=n;exports.reactExports.useEffect(function(){return p(function(){return r.current()})},s);}

	var has = Object.prototype.hasOwnProperty;

	function find(iter, tar, key) {
		for (key of iter.keys()) {
			if (dequal(key, tar)) return key;
		}
	}

	function dequal(foo, bar) {
		var ctor, len, tmp;
		if (foo === bar) return true;

		if (foo && bar && (ctor=foo.constructor) === bar.constructor) {
			if (ctor === Date) return foo.getTime() === bar.getTime();
			if (ctor === RegExp) return foo.toString() === bar.toString();

			if (ctor === Array) {
				if ((len=foo.length) === bar.length) {
					while (len-- && dequal(foo[len], bar[len]));
				}
				return len === -1;
			}

			if (ctor === Set) {
				if (foo.size !== bar.size) {
					return false;
				}
				for (len of foo) {
					tmp = len;
					if (tmp && typeof tmp === 'object') {
						tmp = find(bar, tmp);
						if (!tmp) return false;
					}
					if (!bar.has(tmp)) return false;
				}
				return true;
			}

			if (ctor === Map) {
				if (foo.size !== bar.size) {
					return false;
				}
				for (len of foo) {
					tmp = len[0];
					if (tmp && typeof tmp === 'object') {
						tmp = find(bar, tmp);
						if (!tmp) return false;
					}
					if (!dequal(len[1], bar.get(tmp))) {
						return false;
					}
				}
				return true;
			}

			if (ctor === ArrayBuffer) {
				foo = new Uint8Array(foo);
				bar = new Uint8Array(bar);
			} else if (ctor === DataView) {
				if ((len=foo.byteLength) === bar.byteLength) {
					while (len-- && foo.getInt8(len) === bar.getInt8(len));
				}
				return len === -1;
			}

			if (ArrayBuffer.isView(foo)) {
				if ((len=foo.byteLength) === bar.byteLength) {
					while (len-- && foo[len] === bar[len]);
				}
				return len === -1;
			}

			if (!ctor || typeof foo === 'object') {
				len = 0;
				for (ctor in foo) {
					if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
					if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
				}
				return Object.keys(bar).length === len;
			}
		}

		return foo !== foo && bar !== bar;
	}

	/**
	 * @param value the value to be memoized (usually a dependency list)
	 * @returns a momoized version of the value as long as it remains deeply equal
	 */


	function useDeepCompareMemoize(value) {
	  var ref = exports.reactExports.useRef(value);
	  var signalRef = exports.reactExports.useRef(0);

	  if (!dequal(value, ref.current)) {
	    ref.current = value;
	    signalRef.current += 1;
	  } // eslint-disable-next-line react-hooks/exhaustive-deps


	  return exports.reactExports.useMemo(function () {
	    return ref.current;
	  }, [signalRef.current]);
	}

	function useDeepCompareEffect(callback, dependencies) {


	  return exports.reactExports.useEffect(callback, useDeepCompareMemoize(dependencies));
	}

	let worker;
	const workerEvent = new e(null);
	function initializeWorkerStoreListener(w) {
	  worker = w;
	  w.addEventListener("message", ({
	    data
	  }) => {
	    workerEvent.value = data;
	  });
	}
	function dispatch(action) {
	  worker?.postMessage({
	    type: "dispatch",
	    action
	  });
	}
	function useWorkerSelector(selector, options) {
	  const defaultValue = options?.defaultValue;
	  const params = options && "params" in options ? options.params : [];
	  const currentUuid = useSignal("");
	  const state = useSignal(defaultValue);
	  useSignalEffect(() => {
	    const data = workerEvent.value;
	    if (data && data.uuid === currentUuid.peek()) {
	      state.value = data.value;
	    }
	  });
	  useDeepCompareEffect(() => {
	    const uuid = crypto.randomUUID();
	    currentUuid.value = uuid;
	    worker?.postMessage({
	      type: "subscribe",
	      uuid,
	      selector: {
	        selector: selector.name,
	        params
	      }
	    });
	    return () => {
	      worker?.postMessage({
	        type: "unsubscribe",
	        uuid
	      });
	    };
	  }, [selector, params]);
	  return state;
	}

	const listeners = new Map();
	function initializeWorkerStore(store, selectors) {
	  addEventListener("message", ({
	    data
	  }) => {
	    switch (data.type) {
	      case "dispatch":
	        store.dispatch(data.action);
	        break;
	      case "subscribe":
	        listeners.set(data.uuid, data.selector);
	        runSelector(data.selector, data.uuid);
	        break;
	      case "unsubscribe":
	        listeners.delete(data.uuid);
	        break;
	    }
	  });
	  store.subscribe(() => {
	    listeners.forEach(runSelector);
	  });
	  function runSelector(value, key) {
	    const selector = selectors?.[value.selector]?.fn;
	    const params = value.params;
	    if (selector) {
	      const returnValue = selector(store.getState(), ...params);
	      postMessage({
	        uuid: key,
	        value: returnValue
	      });
	    }
	  }
	}
	function createWorkerSelector(name, selector) {
	  return {
	    name,
	    fn: selector
	  };
	}

	function cacheByValue(_, val) {
	  return "" + val || "";
	}
	function one(state) {
	  return state.counterSliceReducer.counter;
	}
	function two(state, hello) {
	  return `${hello} ${one(state) / 2}`;
	}
	const three = createSelector(one, state => state, (_, param) => param, (res, state, param) => {
	  return res + state.counterSliceReducer.counter * 2 + param;
	});
	const test = createSelector(three, (_, extra) => extra, (...args) => {
	  console.log(args);
	  return 2;
	});
	const four = createCachedSelector(state => state, (_, val) => val, three, (_, val, res) => {
	  return res * 3 - val;
	})({
	  keySelector: cacheByValue,
	  cacheObject: new distExports.LruMapCache({
	    cacheSize: 5
	  })
	});
	function five(state, one, two, three) {
	  return `${three}: ${state.counterSliceReducer.counter}, sum: ${one + two}`;
	}
	const selectors = {
	  one: createWorkerSelector("one", one),
	  two: createWorkerSelector("two", two),
	  three: createWorkerSelector("three", three),
	  four: createWorkerSelector("four", four),
	  five: createWorkerSelector("five", five),
	  test: createWorkerSelector("test", test)
	};

	exports.React = React;
	exports.combineReducers = combineReducers;
	exports.configureStore = configureStore;
	exports.counterSliceReducer = counterSliceReducer;
	exports.counterStoreState = counterStoreState;
	exports.decrement = decrement;
	exports.dispatch = dispatch;
	exports.increment = increment;
	exports.initializeWorkerStore = initializeWorkerStore;
	exports.initializeWorkerStoreListener = initializeWorkerStoreListener;
	exports.selectors = selectors;
	exports.useWorkerSelector = useWorkerSelector;

}));
//# sourceMappingURL=selectors-23e421b4.js.map
