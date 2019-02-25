/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["exports","../errors/RequestError","../errors/CancelError","../Deferred","../io-query","../_base/array","../_base/lang","../promise/Promise"],function(e,t,r,n,o,a,c,i){e.deepCopy=function(t,r){for(var n in r){var o=t[n],a=r[n];o!==a&&(o&&"object"==typeof o&&a&&"object"==typeof a?e.deepCopy(o,a):t[n]=a)}return t},e.deepCreate=function(t,r){r=r||{};var n,o,a=c.delegate(t);for(n in t)(o=t[n])&&"object"==typeof o&&(a[n]=e.deepCreate(o,r[n]));return e.deepCopy(a,r)};var u=Object.freeze||function(e){return e};function f(e){return u(e)}function s(e){return e.data||e.text}e.deferred=function(o,a,p,d,h,y){var l=new n(function(e){return a&&a(l,o),e&&(e instanceof t||e instanceof r)?e:new r("Request canceled",o)});l.response=o,l.isValid=p,l.isReady=d,l.handleResponse=h;var v=l.then(f).otherwise(function(e){throw e.response=o,e});e.notify&&v.then(c.hitch(e.notify,"emit","load"),c.hitch(e.notify,"emit","error"));var C=v.then(s),E=new i;for(var b in C)C.hasOwnProperty(b)&&(E[b]=C[b]);return E.response=v,u(E),y&&l.then(function(e){y.call(l,e)},function(e){y.call(l,o,e)}),l.promise=E,l.then=E.then,l},e.addCommonMethods=function(e,t){a.forEach(t||["GET","POST","PUT","DELETE"],function(t){e[("DELETE"===t?"DEL":t).toLowerCase()]=function(r,n){return(n=c.delegate(n||{})).method=t,e(r,n)}})},e.parseArgs=function(e,t,r){var n=t.data,a=t.query;return n&&!r&&"object"==typeof n&&(t.data=o.objectToQuery(n)),a?("object"==typeof a&&(a=o.objectToQuery(a)),t.preventCache&&(a+=(a?"&":"")+"request.preventCache="+ +new Date)):t.preventCache&&(a="request.preventCache="+ +new Date),e&&a&&(e+=(~e.indexOf("?")?"&":"?")+a),{url:e,options:t,getHeader:function(e){return null}}},e.checkStatus=function(e){return(e=e||0)>=200&&e<300||304===e||1223===e||!e}});
//# sourceMappingURL=../sourcemaps/request/util.js.map