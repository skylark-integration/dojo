/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["../has","../_base/kernel"],function(e,r){"use strict";var t=document.createElement("div"),n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector,u=t.querySelectorAll,o=/([^\s,](?:"(?:\\.|[^"])+"|'(?:\\.|[^'])+'|[^,])*)/g;e.add("dom-matches-selector",!!n),e.add("dom-qsa",!!u);var a=function(e,t){if(f&&e.indexOf(",")>-1)return f(e,t);var n=t?t.ownerDocument||t:r.doc||document,o=(u?/^([\w]*)#([\w\-]+$)|^(\.)([\w\-\*]+$)|^(\w+$)/:/^([\w]*)#([\w\-]+)(?:\s+(.*))?$|(?:^|(>|.+\s+))([\w\-\*]+)(\S*$)/).exec(e);if(t=t||n,o){if(o[2]){if(!(l=r.byId?r.byId(o[2],n):n.getElementById(o[2]))||o[1]&&o[1]!=l.tagName.toLowerCase())return[];if(t!=n)for(var s=l;s!=t;)if(!(s=s.parentNode))return[];return o[3]?a(o[3],l):[l]}if(o[3]&&t.getElementsByClassName)return t.getElementsByClassName(o[4]);var l;if(o[5]){if(l=t.getElementsByTagName(o[5]),!o[4]&&!o[6])return l;e=(o[4]||"")+o[6]}}if(u)return 1===t.nodeType&&"object"!==t.nodeName.toLowerCase()?i(t,e,t.querySelectorAll):t.querySelectorAll(e);l||(l=t.getElementsByTagName("*"));for(var d=[],m=0,g=l.length;m<g;m++){var v=l[m];1==v.nodeType&&c(v,e,t)&&d.push(v)}return d},i=function(e,r,t){var n=e,u=e.getAttribute("id"),a=u||"__dojo__",i=e.parentNode,c=/^\s*[+~]/.test(r);if(c&&!i)return[];u?a=a.replace(/'/g,"\\$&"):e.setAttribute("id",a),c&&i&&(e=e.parentNode);for(var f=r.match(o),s=0;s<f.length;s++)f[s]="[id='"+a+"'] "+f[s];r=f.join(",");try{return t.call(e,r)}finally{u||n.removeAttribute("id")}};if(!e("dom-matches-selector"))var c=function(){var e="div"==t.tagName?"toLowerCase":"toUpperCase",r={"":function(r){return r=r[e](),function(e){return e.tagName==r}},".":function(e){var r=" "+e+" ";return function(t){return t.className.indexOf(e)>-1&&(" "+t.className+" ").indexOf(r)>-1}},"#":function(e){return function(r){return r.id==e}}},n={"^=":function(e,r){return 0==e.indexOf(r)},"*=":function(e,r){return e.indexOf(r)>-1},"$=":function(e,r){return e.substring(e.length-r.length,e.length)==r},"~=":function(e,r){return(" "+e+" ").indexOf(" "+r+" ")>-1},"|=":function(e,r){return 0==(e+"-").indexOf(r+"-")},"=":function(e,r){return e==r},"":function(e,r){return!0}};var u={};function o(e,r){return e?function(t,n){return r(t)&&e(t,n)}:r}return function(e,t,a){var i=u[t];if(!i){if(t.replace(/(?:\s*([> ])\s*)|(#|\.)?((?:\\.|[\w-])+)|\[\s*([\w-]+)\s*(.?=)?\s*("(?:\\.|[^"])+"|'(?:\\.|[^'])+'|(?:\\.|[^\]])*)\s*\]/g,function(e,t,u,a,c,f,s){return a?i=o(i,r[u||""](a.replace(/\\/g,""))):t?i=(" "==t?function(e){return function(r,t){for(;(r=r.parentNode)!=t;)if(e(r,t))return!0}}:function(e){return function(r,t){return r=r.parentNode,e?r!=t&&e(r,t):r==t}})(i):c&&(i=o(i,function(e,r,t){var u=r.charAt(0);'"'!=u&&"'"!=u||(r=r.slice(1,-1)),r=r.replace(/\\/g,"");var o=n[t||""];return function(t){var n=t.getAttribute(e);return n&&o(n,r)}}(c,s,f))),""}))throw new Error("Syntax error in query");if(!i)return!0;u[t]=i}return i(e,a)}}();if(!e("dom-qsa"))var f=function(e,r){for(var t=e.match(o),n=[],u=0;u<t.length;u++){(e=new String(t[u].replace(/\s*$/,""))).indexOf=escape;for(var i=a(e,r),c=0,f=i.length;c<f;c++){var s=i[c];n[s.sourceIndex]=s}}var l=[];for(u in n)l.push(n[u]);return l};return a.match=n?function(e,r,t){return t&&9!=t.nodeType?i(t,r,function(r){return n.call(e,r)}):n.call(e,r)}:c,a});
//# sourceMappingURL=../sourcemaps/selector/lite.js.map