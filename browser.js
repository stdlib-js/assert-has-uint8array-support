// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),n=Object.prototype.toString,o=Object.prototype.hasOwnProperty,e="function"==typeof Symbol?Symbol.toStringTag:"",r=t&&"symbol"==typeof Symbol.toStringTag?function(t){var r,i,f,l,y;if(null==t)return n.call(t);i=t[e],y=e,r=null!=(l=t)&&o.call(l,y);try{t[e]=void 0}catch(o){return n.call(t)}return f=n.call(t),r?t[e]=i:delete t[e],f}:function(t){return n.call(t)},i="function"==typeof Uint8Array,f="function"==typeof Uint8Array?Uint8Array:null;return function(){var t,n,o;if("function"!=typeof f)return!1;try{n=new f(n=[1,3.14,-3.14,256,257]),o=n,t=(i&&o instanceof Uint8Array||"[object Uint8Array]"===r(o))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).hasUint8ArraySupport=n();
//# sourceMappingURL=browser.js.map
