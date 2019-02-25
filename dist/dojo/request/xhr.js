/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["../errors/RequestError","./watch","./handlers","./util","../has"],function(e,t,n,r,a){a.add("native-xhr",function(){return"undefined"!=typeof XMLHttpRequest}),a.add("dojo-force-activex-xhr",function(){return a("activex")&&!document.addEventListener&&"file:"===window.location.protocol}),a.add("native-xhr2",function(){if(a("native-xhr")){var e=new XMLHttpRequest;return void 0!==e.addEventListener&&("undefined"==typeof opera||void 0!==e.upload)}}),a.add("native-formdata",function(){return"undefined"!=typeof FormData}),a.add("native-response-type",function(){return a("native-xhr")&&void 0!==(new XMLHttpRequest).responseType}),a.add("native-xhr2-blob",function(){if(a("native-response-type")){var e=new XMLHttpRequest;e.open("GET","/",!0),e.responseType="blob";var t=e.responseType;return e.abort(),"blob"===t}});var o,s,i,d,u={blob:a("native-xhr2-blob")?"blob":"arraybuffer",document:"document",arraybuffer:"arraybuffer"};function c(t,a){var o=t.xhr;t.status=t.xhr.status;try{t.text=o.responseText}catch(e){}if("xml"===t.options.handleAs&&(t.data=o.responseXML),!a)try{n(t)}catch(e){a=e}a?this.reject(a):r.checkStatus(o.status)?this.resolve(t):(a=new e("Unable to load "+t.url+" status: "+o.status,t),this.reject(a))}function f(e){return this.xhr.getResponseHeader(e)}a("native-xhr2")?(o=function(e){return!this.isFulfilled()},d=function(e,t){t.xhr.abort()},i=function(t,n,r){function a(e){n.handleResponse(r)}function o(t){var a=t.target,o=new e("Unable to load "+r.url+" status: "+a.status,r);n.handleResponse(r,o)}function s(e){e.lengthComputable?(r.loaded=e.loaded,r.total=e.total,n.progress(r)):3===r.xhr.readyState&&(r.loaded=e.position,n.progress(r))}return t.addEventListener("load",a,!1),t.addEventListener("error",o,!1),t.addEventListener("progress",s,!1),function(){t.removeEventListener("load",a,!1),t.removeEventListener("error",o,!1),t.removeEventListener("progress",s,!1),t=null}}):(o=function(e){return e.xhr.readyState},s=function(e){return 4===e.xhr.readyState},d=function(e,t){var n=t.xhr,r=typeof n.abort;"function"!==r&&"object"!==r&&"unknown"!==r||n.abort()});var l,p={data:null,query:null,sync:!1,method:"GET"};function v(n,h,x){var y=a("native-formdata")&&h&&h.data&&h.data instanceof FormData,b=r.parseArgs(n,r.deepCreate(p,h),y);n=b.url,h=b.options;var w,m=r.deferred(b,d,o,s,c,function(){w&&w()}),L=b.xhr=v._create();if(!L)return m.cancel(new e("XHR was not created")),x?m:m.promise;b.getHeader=f,i&&(w=i(L,m,b));var X=h.data,T=!h.sync,H=h.method;try{L.open(H,n,T,h.user||l,h.password||l),h.withCredentials&&(L.withCredentials=h.withCredentials),a("native-response-type")&&h.handleAs in u&&(L.responseType=u[h.handleAs]);var M=h.headers,R=!y&&"application/x-www-form-urlencoded";if(M)for(var q in M)"content-type"===q.toLowerCase()?R=M[q]:M[q]&&L.setRequestHeader(q,M[q]);R&&!1!==R&&L.setRequestHeader("Content-Type",R),M&&"X-Requested-With"in M||L.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.notify&&r.notify.emit("send",b,m.promise.cancel),L.send(X)}catch(e){m.reject(e)}return t(m),L=null,x?m:m.promise}if(v._create=function(){throw new Error("XMLHTTP not available")},a("native-xhr")&&!a("dojo-force-activex-xhr"))v._create=function(){return new XMLHttpRequest};else if(a("activex"))try{new ActiveXObject("Msxml2.XMLHTTP"),v._create=function(){return new ActiveXObject("Msxml2.XMLHTTP")}}catch(e){try{new ActiveXObject("Microsoft.XMLHTTP"),v._create=function(){return new ActiveXObject("Microsoft.XMLHTTP")}}catch(e){}}return r.addCommonMethods(v),v});
//# sourceMappingURL=../sourcemaps/request/xhr.js.map