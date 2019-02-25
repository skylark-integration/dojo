/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
"undefined"!=typeof window&&(dojo.isBrowser=!0,dojo._name="browser",function(){dojo.baseUrl=dojo.config.baseUrl;var o=navigator,e=o.userAgent,n=o.appVersion,t=parseFloat(n);dojo.isMozilla=dojo.isMoz=t,dojo.isMoz&&(dojo.isFF=parseFloat(e.split("Firefox/")[1])||void 0),dojo.isQuirks="BackCompat"==document.compatMode,dojo.locale=dojo.config.locale||o.language.toLowerCase(),dojo._xhrObj=function(){return new XMLHttpRequest};var r=dojo._loadUri;dojo._loadUri=function(o,e){if(["file:","chrome:","resource:"].some(function(e){return 0==String(o).indexOf(e)})){var n=Components.classes["@mozilla.org/moz/jssubscript-loader;1"].getService(Components.interfaces.mozIJSSubScriptLoader).loadSubScript(o,dojo.global);return e&&e(n),!0}return r.apply(dojo,arguments)},dojo._isDocumentOk=function(o){var e=o.status||0;return e>=200&&e<300||304==e||1223==e||!e&&("file:"==location.protocol||"chrome:"==location.protocol)};dojo._getText=function(o,e){var n=dojo._xhrObj();if(dojo._Url&&(o=new dojo._Url(o).toString()),dojo.config.cacheBust&&(o+="",o+=(-1==o.indexOf("?")?"?":"&")+String(dojo.config.cacheBust).replace(/\W+/g,"")),["file:","chrome:","resource:"].some(function(e){return 0==String(o).indexOf(e)})){var t=Components.classes["@mozilla.org/network/io-service;1"].getService(Components.interfaces.nsIIOService),r=Components.classes["@mozilla.org/scriptableinputstream;1"].getService(Components.interfaces.nsIScriptableInputStream),i=t.newChannel(o,null,null).open();r.init(i);var d=r.read(i.available());return r.close(),i.close(),d}n.open("GET",o,!1);try{if(n.send(null),!dojo._isDocumentOk(n)){var a=Error("Unable to load "+o+" status:"+n.status);throw a.status=n.status,a.responseText=n.responseText,a}}catch(o){if(e)return null;throw o}return n.responseText},dojo._windowUnloaders=[],dojo.windowUnloaded=function(){for(var o=dojo._windowUnloaders;o.length;)o.pop()()},dojo.addOnWindowUnload=function(o,e){dojo._onto(dojo._windowUnloaders,o,e)};var i=[],d=null;dojo._defaultContext=[window,document],dojo.pushContext=function(o,e){var n,t=[dojo.global,dojo.doc];if(i.push(t),o||e){if(n=[o,e],!e&&dojo.isString(o)){var r=document.getElementById(o);r.contentDocument&&(n=[r.contentWindow,r.contentDocument])}}else n=dojo._defaultContext;return d=n,dojo.setContext.apply(dojo,n),t},dojo.popContext=function(){var o=d;return i.length?(dojo.setContext.apply(dojo,i.pop()),o):o},dojo._inContext=function(o,e,n){var t=dojo._toArray(arguments);n=t.pop(),1==t.length&&(e=null),dojo.pushContext(o,e);var r=n();return dojo.popContext(),r}}(),dojo._initFired=!1,dojo._loadInit=function(o){dojo._initFired=!0;var e=o&&o.type?o.type.toLowerCase():"load";arguments.callee.initialized||"domcontentloaded"!=e&&"load"!=e||(arguments.callee.initialized=!0,0==dojo._inFlightCount&&dojo._modulesLoaded())},dojo.config.afterOnLoad||window.addEventListener("DOMContentLoaded",function(o){dojo._loadInit(o)},!1)),function(){var o=dojo.config.modulePaths;if(o)for(var e in o)dojo.registerModulePath(e,o[e])}(),dojo.config.isDebug&&(console.log=function(o){Components.classes["@mozilla.org/consoleservice;1"].getService(Components.interfaces.nsIConsoleService).logStringMessage(o)},console.debug=function(){console.log(dojo._toArray(arguments).join(" "))});
//# sourceMappingURL=../sourcemaps/_base/configFirefoxExtension.js.map