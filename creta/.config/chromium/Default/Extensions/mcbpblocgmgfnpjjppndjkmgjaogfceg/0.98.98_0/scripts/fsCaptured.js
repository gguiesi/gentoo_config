/*
 FireShot - Webpage Screenshots and Annotations
 Copyright (C) 2007-2020 Evgeny Suslikov (evgeny@suslikov.ru)
*/
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(a,d,e){a instanceof String&&(a=String(a));for(var f=a.length,b=0;b<f;b++){var h=a[b];if(d.call(e,h,b,a))return{i:b,v:h}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,d,e){a!=Array.prototype&&a!=Object.prototype&&(a[d]=e.value)};
$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(a,d,e,f){if(d){e=$jscomp.global;a=a.split(".");for(f=0;f<a.length-1;f++){var b=a[f];b in e||(e[b]={});e=e[b]}a=a[a.length-1];f=e[a];d=d(f);d!=f&&null!=d&&$jscomp.defineProperty(e,a,{configurable:!0,writable:!0,value:d})}};
$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,e){return $jscomp.findInternal(this,a,e).v}},"es6","es3");$jscomp.SYMBOL_PREFIX="jscomp_symbol_";$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.Symbol=function(){var a=0;return function(d){return $jscomp.SYMBOL_PREFIX+(d||"")+a++}}();
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.iterator;a||(a=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&$jscomp.defineProperty(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(a){var d=0;return $jscomp.iteratorPrototype(function(){return d<a.length?{done:!1,value:a[d++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(a){$jscomp.initSymbolIterator();a={next:a};a[$jscomp.global.Symbol.iterator]=function(){return this};return a};$jscomp.makeIterator=function(a){$jscomp.initSymbolIterator();var d=a[Symbol.iterator];return d?d.call(a):$jscomp.arrayIterator(a)};$jscomp.FORCE_POLYFILL_PROMISE=!1;
$jscomp.polyfill("Promise",function(a){function d(){this.batch_=null}function e(c){return c instanceof b?c:new b(function(a,b){a(c)})}if(a&&!$jscomp.FORCE_POLYFILL_PROMISE)return a;d.prototype.asyncExecute=function(c){null==this.batch_&&(this.batch_=[],this.asyncExecuteBatch_());this.batch_.push(c);return this};d.prototype.asyncExecuteBatch_=function(){var c=this;this.asyncExecuteFunction(function(){c.executeBatch_()})};var f=$jscomp.global.setTimeout;d.prototype.asyncExecuteFunction=function(c){f(c,
0)};d.prototype.executeBatch_=function(){for(;this.batch_&&this.batch_.length;){var c=this.batch_;this.batch_=[];for(var a=0;a<c.length;++a){var b=c[a];delete c[a];try{b()}catch(g){this.asyncThrow_(g)}}}this.batch_=null};d.prototype.asyncThrow_=function(c){this.asyncExecuteFunction(function(){throw c;})};var b=function(c){this.state_=0;this.result_=void 0;this.onSettledCallbacks_=[];var a=this.createResolveAndReject_();try{c(a.resolve,a.reject)}catch(l){a.reject(l)}};b.prototype.createResolveAndReject_=
function(){function a(a){return function(c){d||(d=!0,a.call(b,c))}}var b=this,d=!1;return{resolve:a(this.resolveTo_),reject:a(this.reject_)}};b.prototype.resolveTo_=function(a){if(a===this)this.reject_(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof b)this.settleSameAsPromise_(a);else{a:switch(typeof a){case "object":var c=null!=a;break a;case "function":c=!0;break a;default:c=!1}c?this.resolveToNonPromiseObj_(a):this.fulfill_(a)}};b.prototype.resolveToNonPromiseObj_=function(a){var c=
void 0;try{c=a.then}catch(l){this.reject_(l);return}"function"==typeof c?this.settleSameAsThenable_(c,a):this.fulfill_(a)};b.prototype.reject_=function(a){this.settle_(2,a)};b.prototype.fulfill_=function(a){this.settle_(1,a)};b.prototype.settle_=function(a,b){if(0!=this.state_)throw Error("Cannot settle("+a+", "+b|"): Promise already settled in state"+this.state_);this.state_=a;this.result_=b;this.executeOnSettledCallbacks_()};b.prototype.executeOnSettledCallbacks_=function(){if(null!=this.onSettledCallbacks_){for(var a=
this.onSettledCallbacks_,b=0;b<a.length;++b)a[b].call(),a[b]=null;this.onSettledCallbacks_=null}};var h=new d;b.prototype.settleSameAsPromise_=function(a){var b=this.createResolveAndReject_();a.callWhenSettled_(b.resolve,b.reject)};b.prototype.settleSameAsThenable_=function(a,b){var c=this.createResolveAndReject_();try{a.call(b,c.resolve,c.reject)}catch(g){c.reject(g)}};b.prototype.then=function(a,d){function c(a,b){return"function"==typeof a?function(b){try{g(a(b))}catch(t){e(t)}}:b}var g,e,f=new b(function(a,
b){g=a;e=b});this.callWhenSettled_(c(a,g),c(d,e));return f};b.prototype.catch=function(a){return this.then(void 0,a)};b.prototype.callWhenSettled_=function(a,b){function c(){switch(d.state_){case 1:a(d.result_);break;case 2:b(d.result_);break;default:throw Error("Unexpected state: "+d.state_);}}var d=this;null==this.onSettledCallbacks_?h.asyncExecute(c):this.onSettledCallbacks_.push(function(){h.asyncExecute(c)})};b.resolve=e;b.reject=function(a){return new b(function(b,c){c(a)})};b.race=function(a){return new b(function(b,
c){for(var d=$jscomp.makeIterator(a),f=d.next();!f.done;f=d.next())e(f.value).callWhenSettled_(b,c)})};b.all=function(a){var c=$jscomp.makeIterator(a),d=c.next();return d.done?e([]):new b(function(a,b){function g(b){return function(c){f[b]=c;h--;0==h&&a(f)}}var f=[],h=0;do f.push(void 0),h++,e(d.value).callWhenSettled_(g(f.length-1),b),d=c.next();while(!d.done)})};return b},"es6","es3");
window.addEventListener("load",function(){function a(){g.getAdvancedFeaturesAvailable()||$("#spnAdvancedFeaturesSection").hide();isWindows()&&$("#upgradeLink,#noflashgoadvanced,#noflashgoadvanced2,#noflashgoadvanced3").removeClass("hiddenInitially");isOpera()?$("#lnkOperaStore").hide():isEdge()?$("#lnkEdgeNew").hide():$("#lnkChromeStore").hide();$("a[href*='APPID']").each(function(){this.href=this.href.replace("APPID",getBrowserId())})}function d(){$("#btnPrint").click(e);$("#lnkOptions, #lnkOptions1").click(g.openExtensionPreferences);
$("#lnkInstallAdvanced, #lnkInstallAdvanced2, #lnkInstallAdvanced3, #lnkInstallAdvanced4").click(function(){g.installNative();return!1});$("#btnCloseAlert1").click(function(){localStorage.showAlert1=0});$("#btnSaveImage").click(function(){b(k.toDataURL("png"===getOption(cDefaultImageFormatPref,"png")?"image/png":"image/jpeg"),g.getFilenameLite()+"."+getOption(cDefaultImageFormatPref,"png"))});$("#btnSaveImagePDF").click(function(){var a=(new g.fsPDF(k,m)).toDataURL();b(a,g.getFilenameLite()+".pdf")});
$("#btnSendEmail").find("li").click(function(){var a=$(this).attr("value"),b=a;switch(a){case "png":a=k.toDataURL("image/png");break;case "jpg":a=k.toDataURL("image/jpeg");break;default:a=(new g.fsPDF(k,m)).toDataURL(),b="pdf"}b=g.getFilenameLite()+"."+b;a={to:"",subject:"Screenshots from FireShot",files:[{inline:"no",name:encodeURIComponent(b),data:a}]};g.openInGmail(JSON.stringify(a))});$("#btnClipboard").click(f)}function e(){var a=document.createElement("img");a.id="imgForPrinting";a.src=document.getElementById("imgResult").src;
a.onload=function(){$("div.container").addClass("noPrint");print();$("div.container").removeClass("noPrint");document.body.removeChild(a)};document.body.appendChild(a)}function f(){(function(a){return new Promise(function(b,c){try{a.toBlob(function(a){return b(a)})}catch(v){c(v)}})})(k).then(function(a){try{var b=new ClipboardItem(Object.defineProperty({},a.type,{value:a,enumerable:!0}));return navigator.clipboard.write([b])}catch(u){throw u;}}).then(function(){$("#divClipboardMessage").slideDown(200);
setTimeout(function(){$("#divClipboardMessage").slideUp(100)},2E3);"true"===getOption(cCloseTabAfterSaving)&&setTimeout(window.close,500)}).catch(function(a){getConsolePtr()(a);$("#modalCopyToClipboard").modal()})}function b(a,c,d){addDownloadsPermission(function(){p||(p=!0,chrome.downloads.onChanged.addListener(function(a){a.state&&"complete"==a.state.current&&("true"===getOption(cOpenFolderAterSavingPref)&&chrome.downloads.show(n),"true"===getOption(cCloseTabAfterSaving)&&window.close())}));var e=
getOption(cDefaultFolderPref,cDefaultFolderValue);""!==e&&(e+="/");fetch(a).then(function(a){return a.blob()}).then(function(f){return chrome.downloads.download({url:URL.createObjectURL(f),saveAs:"true"!==getOption(cNoFilenamePromptPref),filename:d?c:e+c,conflictAction:"overwrite"},function(e){chrome.runtime.lastError?d||b(a,c,!0):n=e})})})}function h(){$("#btnLike #btnDislike").unbind();$("#btnLike").click(function(){localStorage[cLikedPref]="true";$("#divLikeMessage").hide();c()});$("#btnDislike").click(function(){localStorage[cLikedPref]=
"false";$("#divLikeMessage").slideUp(100)});setTimeout(function(){$("#divLikeMessage").slideDown(300)},2E3)}function c(){$("#btnRate #btnRateLater").unbind();$("#btnRate").click(function(){localStorage[cRatedPref]="true";$("#divSendReview").slideUp(100);openURL("https://getfireshot.com/like.php?browser="+getBrowserId()+"&ver="+g.extVersion)});$("#btnRateLater").click(function(){$("#divSendReview").slideUp(100)});setTimeout(function(){$("#divSendReview").slideDown(300)},200)}function q(){if(isWindows()&&
localStorage[cPluginProModePref]&&void 0===localStorage.showAlert1)setTimeout(function(){$("#divAlert1").fadeIn(700)},1E3);else{var a="true"===getOption(cLikedPref,""),b=""!==getOption(cLikedPref,""),d="true"===getOption(cRatedPref,"false"),e=parseInt(getOption(cResultPageShownCntrPref,0));!b&&10<e?h():a&&!d&&0===e%50&&c()}}function l(){function a(){var a=document.getElementById("divImgResult"),b=a.getClientRects()[0],c=document.getElementById("divPanel").getClientRects()[0];b.y+b.height<c.y?($("#divImgResult").height($("#divPanel").height()),
$("#divImgResult").css("overflow-y",a.clientHeight<a.scrollHeight?"scroll":"hidden"),$("#divPanel").width($("#divImgResult").width())):($("#divImgResult").height("auto"),$("#divPanel").width($("#divContainer").width()-$("#divImgResult").width()-40));k.width<$(a).width()-20?($("#imgResult").css("width","auto"),$("#divImgResult").css("overflow-y",a.clientHeight<a.scrollHeight?"scroll":"hidden"),a.style.zoom=1.0000001,setTimeout(function(){a.style.zoom=1},50)):a.clientHeight>=a.scrollHeight&&($(a).css("overflow-y",
"hidden"),a.style.zoom=1.0000001,setTimeout(function(){a.style.zoom=1},50))}$(window).resize(a);$(window).scroll(function(){$("#divImgResult").offset().top<window.scrollY&&$("#divImgResult").height()>$("#divPanel").height()&&$("#divPanel").height()<window.innerHeight?($("#divPanel").addClass("fixed"),$("#divPanel").css({top:"15px"})):$("#divPanel").removeClass("fixed")});$("#divPreload").hide();$("#divContainer").show();document.getElementById("imgResult").onload=function(){setTimeout(a,10)};var b=
0===getOption(cTemplateNumberPref,1)%5;setTimeout(function(){$("#lnkSiteIndex").addClass("splashIn")},b?1800:1E3);isWindows()&&(b?setTimeout(function(){$("#divPromo").slideDown(300)},1E3):$("#divPromo").show());document.getElementById("imgResult").src=k.toDataURL("image/png");document.title=g.getFilenameLite()}var g=null,n,p=!1,k,m;(function(){try{i18nPrepare()}catch(r){logError(r.message)}localStorage[cResultPageShownCntrPref]=parseInt(getOption(cResultPageShownCntrPref,0))+1;chrome.runtime.getBackgroundPage(function(b){b&&
(g=b,k=g.capResult,m=g.capLinks,a(),d(),l(),q())})})()});
