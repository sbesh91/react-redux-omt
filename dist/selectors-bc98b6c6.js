define("./selectors-bc98b6c6.js",['exports'], (function (exports) { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function getAugmentedNamespace(n) {
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

	function n(n){for(var r=arguments.length,t=Array(r>1?r-1:0),e=1;e<r;e++)t[e-1]=arguments[e];throw Error("[Immer] minified error nr: "+n+(t.length?" "+t.map((function(n){return "'"+n+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function r(n){return !!n&&!!n[Q]}function t(n){var r;return !!n&&(function(n){if(!n||"object"!=typeof n)return !1;var r=Object.getPrototypeOf(n);if(null===r)return !0;var t=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return t===Object||"function"==typeof t&&Function.toString.call(t)===Z}(n)||Array.isArray(n)||!!n[L]||!!(null===(r=n.constructor)||void 0===r?void 0:r[L])||s(n)||v(n))}function i(n,r,t){void 0===t&&(t=!1),0===o(n)?(t?Object.keys:nn)(n).forEach((function(e){t&&"symbol"==typeof e||r(e,n[e],n);})):n.forEach((function(t,e){return r(e,t,n)}));}function o(n){var r=n[Q];return r?r.i>3?r.i-4:r.i:Array.isArray(n)?1:s(n)?2:v(n)?3:0}function u(n,r){return 2===o(n)?n.has(r):Object.prototype.hasOwnProperty.call(n,r)}function a(n,r){return 2===o(n)?n.get(r):n[r]}function f(n,r,t){var e=o(n);2===e?n.set(r,t):3===e?(n.delete(r),n.add(t)):n[r]=t;}function c(n,r){return n===r?0!==n||1/n==1/r:n!=n&&r!=r}function s(n){return X&&n instanceof Map}function v(n){return q&&n instanceof Set}function p(n){return n.o||n.t}function l(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var r=rn(n);delete r[Q];for(var t=nn(r),e=0;e<t.length;e++){var i=t[e],o=r[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(r[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:n[i]});}return Object.create(Object.getPrototypeOf(n),r)}function d(n,e){return void 0===e&&(e=!1),y(n)||r(n)||!t(n)?n:(o(n)>1&&(n.set=n.add=n.clear=n.delete=h),Object.freeze(n),e&&i(n,(function(n,r){return d(r,!0)}),!0),n)}function h(){n(2);}function y(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function b(r){var t=tn[r];return t||n(18,r),t}function m(n,r){tn[n]||(tn[n]=r);}function _(){return U}function j(n,r){r&&(b("Patches"),n.u=[],n.s=[],n.v=r);}function O(n){g(n),n.p.forEach(S),n.p=null;}function g(n){n===U&&(U=n.l);}function w(n){return U={p:[],l:U,h:n,m:!0,_:0}}function S(n){var r=n[Q];0===r.i||1===r.i?r.j():r.O=!0;}function P(r,e){e._=e.p.length;var i=e.p[0],o=void 0!==r&&r!==i;return e.h.g||b("ES5").S(e,r,o),o?(i[Q].P&&(O(e),n(4)),t(r)&&(r=M(e,r),e.l||x(e,r)),e.u&&b("Patches").M(i[Q].t,r,e.u,e.s)):r=M(e,i,[]),O(e),e.u&&e.v(e.u,e.s),r!==H?r:void 0}function M(n,r,t){if(y(r))return r;var e=r[Q];if(!e)return i(r,(function(i,o){return A(n,e,r,i,o,t)}),!0),r;if(e.A!==n)return r;if(!e.P)return x(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l(e.k):e.o;i(3===e.i?new Set(o):o,(function(r,i){return A(n,e,o,r,i,t)})),x(n,o,!1),t&&n.u&&b("Patches").R(e,t,n.u,n.s);}return e.o}function A(e,i,o,a,c,s){if(r(c)){var v=M(e,c,s&&i&&3!==i.i&&!u(i.D,a)?s.concat(a):void 0);if(f(o,a,v),!r(v))return;e.m=!1;}if(t(c)&&!y(c)){if(!e.h.F&&e._<1)return;M(e,c),i&&i.A.l||x(e,c);}}function x(n,r,t){void 0===t&&(t=!1),n.h.F&&n.m&&d(r,t);}function z(n,r){var t=n[Q];return (t?p(t):n)[r]}function I(n,r){if(r in n)for(var t=Object.getPrototypeOf(n);t;){var e=Object.getOwnPropertyDescriptor(t,r);if(e)return e;t=Object.getPrototypeOf(t);}}function k(n){n.P||(n.P=!0,n.l&&k(n.l));}function E(n){n.o||(n.o=l(n.t));}function R(n,r,t){var e=s(r)?b("MapSet").N(r,t):v(r)?b("MapSet").T(r,t):n.g?function(n,r){var t=Array.isArray(n),e={i:t?1:0,A:r?r.A:_(),P:!1,I:!1,D:{},l:r,t:n,k:null,o:null,j:null,C:!1},i=e,o=en;t&&(i=[e],o=on);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(r,t):b("ES5").J(r,t);return (t?t.A:_()).p.push(e),e}function D(e){return r(e)||n(22,e),function n(r){if(!t(r))return r;var e,u=r[Q],c=o(r);if(u){if(!u.P&&(u.i<4||!b("ES5").K(u)))return u.t;u.I=!0,e=F(r,c),u.I=!1;}else e=F(r,c);return i(e,(function(r,t){u&&a(u.t,r)===t||f(e,r,n(t));})),3===c?new Set(e):e}(e)}function F(n,r){switch(r){case 2:return new Map(n);case 3:return Array.from(n)}return l(n)}function N(){function t(n,r){var t=s[n];return t?t.enumerable=r:s[n]=t={configurable:!0,enumerable:r,get:function(){var r=this[Q];return en.get(r,n)},set:function(r){var t=this[Q];en.set(t,n,r);}},t}function e(n){for(var r=n.length-1;r>=0;r--){var t=n[r][Q];if(!t.P)switch(t.i){case 5:a(t)&&k(t);break;case 4:o(t)&&k(t);}}}function o(n){for(var r=n.t,t=n.k,e=nn(t),i=e.length-1;i>=0;i--){var o=e[i];if(o!==Q){var a=r[o];if(void 0===a&&!u(r,o))return !0;var f=t[o],s=f&&f[Q];if(s?s.t!==a:!c(f,a))return !0}}var v=!!r[Q];return e.length!==nn(r).length+(v?0:1)}function a(n){var r=n.k;if(r.length!==n.t.length)return !0;var t=Object.getOwnPropertyDescriptor(r,r.length-1);if(t&&!t.get)return !0;for(var e=0;e<r.length;e++)if(!r.hasOwnProperty(e))return !0;return !1}var s={};m("ES5",{J:function(n,r){var e=Array.isArray(n),i=function(n,r){if(n){for(var e=Array(r.length),i=0;i<r.length;i++)Object.defineProperty(e,""+i,t(i,!0));return e}var o=rn(r);delete o[Q];for(var u=nn(o),a=0;a<u.length;a++){var f=u[a];o[f]=t(f,n||!!o[f].enumerable);}return Object.create(Object.getPrototypeOf(r),o)}(e,n),o={i:e?5:4,A:r?r.A:_(),P:!1,I:!1,D:{},l:r,t:n,k:i,o:null,O:!1,C:!1};return Object.defineProperty(i,Q,{value:o,writable:!0}),i},S:function(n,t,o){o?r(t)&&t[Q].A===n&&e(n.p):(n.u&&function n(r){if(r&&"object"==typeof r){var t=r[Q];if(t){var e=t.t,o=t.k,f=t.D,c=t.i;if(4===c)i(o,(function(r){r!==Q&&(void 0!==e[r]||u(e,r)?f[r]||n(o[r]):(f[r]=!0,k(t)));})),i(e,(function(n){void 0!==o[n]||u(o,n)||(f[n]=!1,k(t));}));else if(5===c){if(a(t)&&(k(t),f.length=!0),o.length<e.length)for(var s=o.length;s<e.length;s++)f[s]=!1;else for(var v=e.length;v<o.length;v++)f[v]=!0;for(var p=Math.min(o.length,e.length),l=0;l<p;l++)o.hasOwnProperty(l)||(f[l]=!0),void 0===f[l]&&n(o[l]);}}}}(n.p[0]),e(n.p));},K:function(n){return 4===n.i?o(n):a(n)}});}var G,U,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,q="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H=W?Symbol.for("immer-nothing"):((G={})["immer-nothing"]=!0,G),L=W?Symbol.for("immer-draftable"):"__$immer_draftable",Q=W?Symbol.for("immer-state"):"__$immer_state",Z=""+Object.prototype.constructor,nn="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,rn=Object.getOwnPropertyDescriptors||function(n){var r={};return nn(n).forEach((function(t){r[t]=Object.getOwnPropertyDescriptor(n,t);})),r},tn={},en={get:function(n,r){if(r===Q)return n;var e=p(n);if(!u(e,r))return function(n,r,t){var e,i=I(r,t);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,e,r);var i=e[r];return n.I||!t(i)?i:i===z(n.t,r)?(E(n),n.o[r]=R(n.A.h,i,n)):i},has:function(n,r){return r in p(n)},ownKeys:function(n){return Reflect.ownKeys(p(n))},set:function(n,r,t){var e=I(p(n),r);if(null==e?void 0:e.set)return e.set.call(n.k,t),!0;if(!n.P){var i=z(p(n),r),o=null==i?void 0:i[Q];if(o&&o.t===t)return n.o[r]=t,n.D[r]=!1,!0;if(c(t,i)&&(void 0!==t||u(n.t,r)))return !0;E(n),k(n);}return n.o[r]===t&&"number"!=typeof t&&(void 0!==t||r in n.o)||(n.o[r]=t,n.D[r]=!0,!0)},deleteProperty:function(n,r){return void 0!==z(n.t,r)||r in n.t?(n.D[r]=!1,E(n),k(n)):delete n.D[r],n.o&&delete n.o[r],!0},getOwnPropertyDescriptor:function(n,r){var t=p(n),e=Reflect.getOwnPropertyDescriptor(t,r);return e?{writable:!0,configurable:1!==n.i||"length"!==r,enumerable:e.enumerable,value:t[r]}:e},defineProperty:function(){n(11);},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n(12);}},on={};i(en,(function(n,r){on[n]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)};})),on.deleteProperty=function(r,t){return on.set.call(this,r,t,void 0)},on.set=function(r,t,e){return en.set.call(this,r[0],t,e,r[0])};var un=function(){function e(r){var e=this;this.g=B,this.F=!0,this.produce=function(r,i,o){if("function"==typeof r&&"function"!=typeof i){var u=i;i=r;var a=e;return function(n){var r=this;void 0===n&&(n=u);for(var t=arguments.length,e=Array(t>1?t-1:0),o=1;o<t;o++)e[o-1]=arguments[o];return a.produce(n,(function(n){var t;return (t=i).call.apply(t,[r,n].concat(e))}))}}var f;if("function"!=typeof i&&n(6),void 0!==o&&"function"!=typeof o&&n(7),t(r)){var c=w(e),s=R(e,r,void 0),v=!0;try{f=i(s),v=!1;}finally{v?O(c):g(c);}return "undefined"!=typeof Promise&&f instanceof Promise?f.then((function(n){return j(c,o),P(n,c)}),(function(n){throw O(c),n})):(j(c,o),P(f,c))}if(!r||"object"!=typeof r){if(void 0===(f=i(r))&&(f=r),f===H&&(f=void 0),e.F&&d(f,!0),o){var p=[],l=[];b("Patches").M(r,f,p,l),o(p,l);}return f}n(21,r);},this.produceWithPatches=function(n,r){if("function"==typeof n)return function(r){for(var t=arguments.length,i=Array(t>1?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];return e.produceWithPatches(r,(function(r){return n.apply(void 0,[r].concat(i))}))};var t,i,o=e.produce(n,r,(function(n,r){t=n,i=r;}));return "undefined"!=typeof Promise&&o instanceof Promise?o.then((function(n){return [n,t,i]})):[o,t,i]},"boolean"==typeof(null==r?void 0:r.useProxies)&&this.setUseProxies(r.useProxies),"boolean"==typeof(null==r?void 0:r.autoFreeze)&&this.setAutoFreeze(r.autoFreeze);}var i=e.prototype;return i.createDraft=function(e){t(e)||n(8),r(e)&&(e=D(e));var i=w(this),o=R(this,e,void 0);return o[Q].C=!0,g(i),o},i.finishDraft=function(r,t){var e=r&&r[Q];var i=e.A;return j(i,t),P(void 0,i)},i.setAutoFreeze=function(n){this.F=n;},i.setUseProxies=function(r){r&&!B&&n(20),this.g=r;},i.applyPatches=function(n,t){var e;for(e=t.length-1;e>=0;e--){var i=t[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}e>-1&&(t=t.slice(e+1));var o=b("Patches").$;return r(n)?o(n,t):this.produce(n,(function(n){return o(n,t)}))},e}(),an=new un,fn=an.produce;an.produceWithPatches.bind(an);an.setAutoFreeze.bind(an);an.setUseProxies.bind(an);an.applyPatches.bind(an);an.createDraft.bind(an);an.finishDraft.bind(an);var produce = fn;

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
		defaultMemoize: defaultMemoize,
		defaultEqualityCheck: defaultEqualityCheck,
		createSelectorCreator: createSelectorCreator,
		createSelector: createSelector,
		createStructuredSelector: createStructuredSelector
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
	    return t(val) ? produce(val, function () {
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
	                if (r(previousState)) {
	                    var draft = previousState;
	                    var result = caseReducer(draft, action);
	                    if (result === void 0) {
	                        return previousState;
	                    }
	                    return result;
	                }
	                else if (!t(previousState)) {
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
	N();

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

	var dist = {exports: {}};

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
		
	} (dist, dist.exports));

	var createCachedSelector = /*@__PURE__*/getDefaultExportFromCjs(dist.exports);

	let selectors$1;
	const listeners = new Map();
	function initializeWorkerStore(store, s) {
	  selectors$1 = s;
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
	    const selector = selectors$1?.[value.selector]?.fn;
	    const params = value.params ?? [];
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
	const three = createSelector(one, state => state, (res, state) => {
	  return res + state.counterSliceReducer.counter * 2;
	});
	const four = createCachedSelector(state => state, (_, val) => val, three, (_, val, res) => {
	  return res * 3 - val;
	})({
	  keySelector: cacheByValue,
	  cacheObject: new dist.exports.LruMapCache({
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
	  five: createWorkerSelector("five", five)
	};

	exports.combineReducers = combineReducers;
	exports.configureStore = configureStore;
	exports.counterSliceReducer = counterSliceReducer;
	exports.counterStoreState = counterStoreState;
	exports.decrement = decrement;
	exports.getDefaultExportFromCjs = getDefaultExportFromCjs;
	exports.increment = increment;
	exports.initializeWorkerStore = initializeWorkerStore;
	exports.selectors = selectors;

}));
//# sourceMappingURL=selectors-bc98b6c6.js.map
