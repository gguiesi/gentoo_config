/*
 FireShot - Webpage Screenshots and Annotations
 Copyright (C) 2007-2020 Evgeny Suslikov (evgeny@suslikov.ru)
*/
var cActionEdit=0,cActionSave=1,cActionClipboard=2,cActionEMail=3,cActionPaint=4,cActionUpload=5,cActionPrint=7,cActionBASE64Content=8,cActionSavePDF=10,cActionSendOneNote=11,cActionMultiPDF=12,cActionSilentAdd=13,cActionUpgrade=100,cActionSilentSave=101,cModeVisible=0,cModeEntire=1,cModeSelected=2,cModeBrowser=3,cModeTabs=4,cLastActionPref="lastAction",cLastModePref="lastMode",cShortcutPref="hotkey",cShortcutPrefVisible="hotkeyVisible",cShortcutPrefSelection="hotkeySelection",cShortcutPrefEntire=
"hotkeyEntire",cShortcutPrefBrowser="hotkeyBrowser",cShortcutPrefTabs="hotkeyTabs",cAPISupport="enableAPI",cDebugPref="fsDebug",cShortcutPrefVisibleAction="hotkeyVisibleAction",cShortcutPrefSelectionAction="hotkeySelectionAction",cShortcutPrefEntireAction="hotkeyEntireAction",cShortcutPrefBrowserAction="hotkeyBrowserAction",cShortcutPrefTabsAction="hotkeyTabsAction",cPluginProModePref="pluginProMode",cRegisteredPref="registeredMode",cFirstTimeRun="firstTimeRunFlag",cCurrentVersion="curVersion",cTemplatePref=
"filenameTemplate",cTemplateNumberPref="filenameNumber",cTemplateNumberPadCheckPref="filenameNumberPadCheck",cTemplateNumberPadValuePref="filenameNumberPadValue",cContextMenuIntegrationPref="contextMenuIntegration",cDefaultFolderPref="defaultFolderLite",cDefaultFolderValue="FireShot",cOpenFolderAterSavingPref="openFolderAfterSavingLite",cNoFilenamePromptPref="noFilenamePrompt",cCloseTabAfterSaving="closeTabAfterSavingLite",cUpdCheckIgnorePeriodPref="uCheck",cUpdEmitPref="uEmit",cUpdInfoURL="https://ssl.getfireshot.com/images/api/utm.gif?dummy=",
cOnlyLitePref="onlyLite",cForceNativeInstallEnabled="nativeInstall",cLikedPref="userLikedFireShot",cRatedPref="userRatedFireShot",cResultPageShownCntrPref="resultPageShown",cGUID="guid",cUpdGracePeriod=1296E6,cUpdMaxPeriod=2592E5,cUpdTimeCheckInterval=432E5,cUpdCheckDelay=6E5,cTemplateFilenameMaxLen="filenameMaxLen",cDefaultImageFormatPref="png",cQueuedBadgeURLPref="queuedBadgeURL",cShowSelectionHintPref="showSelectionHint.1",cAdvancedFeaturesAvailPref="advancedFeaturesAvailable",cAdvancedFeaturesCheckURL=
"https://ssl.getfireshot.com/images/api/chromefeatures.gif?dummy=",cDefaultShortcut=getOSFriendlyShortcut("Ctrl+Alt+Shift+Z"),cDefaultShortcutVisible=getOSFriendlyShortcut("Ctrl+Alt+Shift+X"),cDefaultShortcutSelection=getOSFriendlyShortcut("Ctrl+Alt+Shift+C"),cDefaultShortcutEntire=getOSFriendlyShortcut("Ctrl+Alt+Shift+V"),cDefaultShortcutBrowser=getOSFriendlyShortcut("Ctrl+Alt+Shift+B"),cDefaultShortcutTabs=getOSFriendlyShortcut("Ctrl+Alt+Shift+T"),cDefaultShortcutVisibleAction=0,cDefaultShortcutSelectionAction=
0,cDefaultShortcutEntireAction=0,cDefaultShortcutBrowserAction=0,cDefaultShortcutTabsAction=0,cDefaultTemplate="FireShot Capture %n - %t - %e",cNativeInstallerURLTemplate="https://getfireshot.com/downloads/%VERSION%/fireshot-chrome-plugin.exe",cCrashReportURL="https://screenshot-program.com/fireshot/crash_report.php",extensionId=chrome.runtime.id,isDebug="true"===localStorage[cDebugPref]||"legfpnnmhhnhjgekmmbkilmijnjoehne"==extensionId,isOldChromeVesion=!1;
(function(){var a=console.log;try{a("")}catch(b){isOldChromeVesion=!0}})();getConsolePtr()("Extension ID: "+extensionId);isOnlyLite()&&getConsolePtr()("Forcing Lite mode.");function isOnlyLite(){return"true"==localStorage[cOnlyLitePref]||"1"==localStorage[cOnlyLitePref]}function isNativeSupported(){return isOnlyLite()?!1:fsNativePlugin.ready}function getPlugin(){return isNativeSupported()?fsNativePlugin:getJSPlugin()}
function pluginCommand(a,b){try{b=b?b:{};var d=getPlugin();b.JSONCommand=a;if(isDebug)if(b.dataurl){var e=b.dataurl;b.dataurl="<cut>";getConsolePtr()("plugin command: "+a+" : "+JSON.stringify(b));b.dataurl=e}else getConsolePtr()("plugin command: "+a+" : "+JSON.stringify(b));return isNativeSupported()?d.launchJSON(b):d.launchFunction(a,b)}catch(c){return logError(c.message),!1}}function openURL(a){chrome.tabs.create({url:a})}function getOption(a,b){a=localStorage[a];return void 0===a?b:a}
function getConsolePtr(){return!isOldChromeVesion&&isDebug?console.log:function(){}}function logToConsole(a){if(isDebug){var b=new Date;console.log(b.getHours()+":"+b.getMinutes()+":"+b.getSeconds()+"."+b.getMilliseconds()+"   "+a)}}function logError(a){console.error("FireShot: "+a)}
function getSBHeight(a){if(a.scrollbars.visible){var b=a.document.createElement("div");b.setAttribute("style","position: fixed; margin: 0px; padding: 0px; border: none; visibility: hidden;  top: 0px; left: 0px; width: 1px; height: 100%; z-index: -1;");a.document.body.appendChild(b);var d=a.innerHeight-b.offsetHeight;a.document.body.removeChild(b);return 0<d&&40>d?d:0}return 0}function getExtension(){return chrome.extension.getBackgroundPage()}
function getShortcut(a){var b=[];a.ctrlKey&&b.push("control");a.altKey&&b.push("alt");a.metaKey&&b.push("meta");a.shiftKey&&b.push("shift");b=b.join("+");if(""===b||32>a.which)return"";b=getOSFriendlyShortcut(b.replace("alt","Alt").replace("shift","Shift").replace("control","Ctrl").replace("meta","Meta").replace("accel","Ctrl"))+"+";a=32==a.which?"Space":String.fromCharCode(a.which).toUpperCase();return b+a}
function getOSFriendlyShortcut(a){return isMac()?a.replace("Ctrl","Control").replace("Meta","Cmd"):a}function isWindows(){return-1!=navigator.appVersion.indexOf("Win")}function isMac(){return null!==navigator.platform.match(/^mac/i)}function isOpera(){return null!==navigator.appVersion.match(/OPR\/\d+\./i)||"pbjmgmedeliohhbaefhlplndokcbmjio"===extensionId}function isEdge(){return null!==navigator.appVersion.match(/edg\/\d+\./i)||"fcbmiimfkmkkkffjlopcpdlgclncnknm"===extensionId}
function getBrowserId(){return isOpera()?"op":isEdge()?"edge":"ch"}function i18nPrepare(){for(var a=document.createNodeIterator(document.documentElement,NodeFilter.SHOW_ELEMENT,function(a){return null===a.getAttribute("data-i18n")?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT},!1),b;b=a.nextNode();){var d=chrome.i18n.getMessage(b.getAttribute("data-i18n"));b.innerText=""!==d?d:"#"+b.innerText}}function gaTrack(a,b,d,e){}
function getFilenameLite(){function a(a,b,c){for(a=a.toString();a.length<c;)a=b+a;return a}var b=getOption(cTemplateFilenameMaxLen,100),d=0,e=getOption(cTemplateNumberPref,1);do{var c=getOption(cTemplatePref,cDefaultTemplate);var g=new Date,f=getExtension().tabURL,h=getExtension().tabTitle,k=(new URL(f)).hostname;c=c.replace(/%n/g,"true"===getOption(cTemplateNumberPadCheckPref,"true")?a(e,0,getOption(cTemplateNumberPadValuePref,3)):e);c=c.replace(/%y/g,g.getFullYear());c=c.replace(/%m/g,a(g.getMonth()+
1,0,2));c=c.replace(/%d/g,a(g.getDate(),0,2));c=c.replace(/%H/g,a(g.getHours(),0,2));c=c.replace(/%M/g,a(g.getMinutes(),0,2));c=c.replace(/%S/g,a(g.getSeconds(),0,2));1==d?f=f.substr(0,Math.max(14,b-c.length+1)):2==d?(f=f.replace(/(.*)\?.*/gi,"$1"),c=c.replace(/%u/g,f),h=h.substr(0,Math.max(14,b-c.length+1))+"_"):3==d&&(f=f.substr(0,(b-c.length)/2-1),c=c.replace(/%u/g,f),h=h.substr(0,b-c.length-1)+"_");c=c.replace(/%u/g,f);c=c.replace(/%t/g,h);c=c.replace(/%e/g,k);c=c.replace(/[:\/\\\*\?<>\|"]/g,
function(a){switch(a){case "<":return"{";case ">":return"}";case "|":return"-"}return"_"})}while(4>++d&&c.length>b);""===c&&(c="Untitled");localStorage[cTemplateNumberPref]=parseInt(e)+1;return c}function showBadge(a){localStorage[cQueuedBadgeURLPref]=a;chrome.browserAction.setBadgeText({text:a&&"undefined"!=a?"New":""});a&&getConsolePtr()("Setting badge for url: "+a)}function getLastAction(){return parseInt(getOption(cLastActionPref,cActionEdit))}
function getLastMode(){return parseInt(getOption(cLastModePref,cModeEntire))}function setLastActionAndMode(a,b){localStorage[cLastActionPref]=a;localStorage[cLastModePref]=b}function isProMode(){return"true"==localStorage[cPluginProModePref]}function getIntersection(a,b,d,e,c,g,f,h){return!(a+d<=c||c+f<=a||b+e<=g||g+h<=b)}function rectsIntersected(a,b){return a.left<b.left+b.width&&b.left<a.left+a.width&&a.top<b.top+b.height&&b.top<a.top+a.height}
function isChildOf(a,b){for(b=b.parentNode;b;){if(b==a)return!0;b=b.parentNode}return!1}
function difference(a,b){var d=[];if(!rectsIntersected(a,b))return[a];var e=a.top,c=a.height,g=a.left+a.width,f=a.top+a.height,h=b.left+b.width,k=b.top+b.height;b.top>a.top&&(d.push({left:a.left,top:a.top,width:a.width,height:b.top-a.top}),e=b.top,c-=b.top-a.top);k<f&&(d.push({left:a.left,top:k,width:a.width,height:f-k}),c=k-e);b.left>a.left&&d.push({left:a.left,top:e,width:b.left-a.left,height:c});h<g&&d.push({left:h,top:e,width:g-h,height:c});return d}
function isScrollableStyle(a){return a&&("scroll"==a.getPropertyValue("overflow")||"auto"==a.getPropertyValue("overflow")||"scroll"==a.getPropertyValue("overflow-y")||"auto"==a.getPropertyValue("overflow-y")||"scroll"==a.getPropertyValue("overflow-x")||"auto"==a.getPropertyValue("overflow-x"))&&"none"!=a.getPropertyValue("display")&&"hidden"!=a.getPropertyValue("visibility")}
function isOverflowed(a){return a&&"none"!==a.getPropertyValue("display")&&("hidden"===a.getPropertyValue("overflow")||"hidden"===a.getPropertyValue("overflow-y")||"auto"===a.getPropertyValue("overflow-y")||"scroll"==a.getPropertyValue("overflow-y")||"hidden"===a.getPropertyValue("overflow-x")||"auto"===a.getPropertyValue("overflow-x")||"scroll"==a.getPropertyValue("overflow-x"))}function getAdvancedFeaturesAvailable(){return!0}
function checkAdvancedFeatures(){advFeaturesChecked||(advFeaturesChecked=!0,getFeaturesFromSite())}function getFeaturesFromSite(){}
function checkAdvancedUpdates(){function a(){var c=new Image,d=new Date,e=Math.round(d.getTime()/864E5);c.onload=function(){localStorage[cUpdEmitPref]=d.getTime()+Math.round(Math.random()*cUpdMaxPeriod);getConsolePtr()("Update info available in "+(parseInt(localStorage[cUpdEmitPref])-d.getTime())/1E3+" seconds");b()};c.onerror=function(){setTimeout(a,cUpdTimeCheckInterval)};c.src=cUpdInfoURL+e;getConsolePtr()("Checking "+c.src)}function b(){var a=parseInt(getOption(cUpdEmitPref,"0")),c=a-(new Date).getTime();
a&&0>=c?(localStorage[cUpdCheckIgnorePeriodPref]="",localStorage[cUpdEmitPref]="",getConsolePtr()("Update!"),isProMode()||showBadge("https://getfireshot.com/updated.php?app="+getBrowserId()+"&src=ext&ver="+localStorage[cCurrentVersion]),checkAdvancedUpdates()):setTimeout(b,c+1E3)}if(isWindows()){getConsolePtr()("checkAdvancedUpdates");var d=parseInt(getOption(cUpdCheckIgnorePeriodPref,"0")),e=parseInt(getOption(cUpdEmitPref,"0")),c=(new Date).getTime();e?b():d?c>=d?setTimeout(a,Math.random()*cUpdCheckDelay):
setTimeout(arguments.callee,d-c+1E3):(localStorage[cUpdCheckIgnorePeriodPref]=c+cUpdGracePeriod,setTimeout(arguments.callee,cUpdGracePeriod+1E3))}}
function getJpegExtents(a){"data:image/jpeg;base64,"===a.substring(0,23)&&(a=atob(a.replace("data:image/jpeg;base64,","")));if(255!==a.charCodeAt(0)||216!==a.charCodeAt(1)||255!==a.charCodeAt(2)||224!==a.charCodeAt(3)||74!==a.charCodeAt(6)||70!==a.charCodeAt(7)||73!==a.charCodeAt(8)||70!==a.charCodeAt(9)||0!==a.charCodeAt(10))throw Error("getJpegSize requires a binary jpeg file");var b=256*a.charCodeAt(4)+a.charCodeAt(5);for(var d=4,e=a.length;d<e;){d+=b;if(255!==a.charCodeAt(d))throw Error("getJpegSize could not find the size of the image");
if(192===a.charCodeAt(d+1))return b=256*a.charCodeAt(d+5)+a.charCodeAt(d+6),a=256*a.charCodeAt(d+7)+a.charCodeAt(d+8),[a,b];d+=2;b=256*a.charCodeAt(d)+a.charCodeAt(d+1)}}function getLAShortcut(a){chrome.commands.getAll(function(b){b.forEach(function(b){"last-used-action"===b.name&&a(b.shortcut)})})}function isConsoleOpened(){var a=new Image,b=!1;Object.defineProperty(a,"id",{get:function(){b=!0}});console.log("%cFireShot console check.",a);return b}
function closestToInt(a){.009>Math.abs(a-Math.floor(a))&&(a=Math.floor(a));return a}function isAPIEnabled(){return"true"===getOption(cAPISupport,"false")}function enableAPI(a){localStorage[cAPISupport]=a}function tabsPermissionRequired(a){addTabsPermission(a,function(){getExtension().openPermissionsPage()})}
function addTabsPermission(a,b){chrome.permissions.contains({permissions:["tabs"],origins:["<all_urls>"]},function(d){if(d)a();else{var e=!0;getExtension().initAddedPermissionEvent(function(b){e&&b&&b.permissions&&0<b.permissions.length&&"tabs"===b.permissions[0]&&(e=!1,a())});chrome.permissions.request({permissions:["tabs"],origins:["<all_urls>"]},function(a){a||(e=!1,console.log("permissions not granted"),b&&b())})}})}
function initAddedPermissionEvent(a){chrome.permissions.onAdded.addListener(function(b){a(b)})}function addDownloadsPermission(a,b){chrome.permissions.contains({permissions:["downloads"]},function(d){d?a():chrome.permissions.request({permissions:["downloads"]},function(d){d?a():(console.log("permissions not granted"),b&&b())})})}function addGmailPermission(a,b){chrome.permissions.request({origins:["https://mail.google.com/*"]},function(d){d?a():b()})}
function initAPI(a){function b(){chrome.tabs.executeScript(null,{file:"scripts/fsAPIEvents.js",runAt:"document_start",allFrames:!0},function(){""!==chrome.runtime.lastError&&(chrome.runtime.lastError="")})}"tabSwitch"===a?chrome.permissions.request({permissions:["activeTab"],origins:["<all_urls>"]},function(a){""!==chrome.runtime.lastError&&(chrome.runtime.lastError="");a?b():getConsolePtr()("permissions not granted")}):b()}
function getNativeInstallerURL(){return cNativeInstallerURLTemplate.replace("%VERSION%",extVersion)}function isCustomBuild(){return"hpbicldbpgipcloiojdbchegbbjiobbm"==extensionId||"adpnodbfhlagloahhdhjggicnfcpggkm"==extensionId}function switchToLiteMode(){gaTrack("UA-1025658-9","fireshot.com","SwitchBackToLite");setLastActionAndMode(cActionSave,cModeEntire);fsNativePlugin.forceDisconnect();updateContextMenu()}
function fixObjectForOldChrome(a){isOldChromeVesion&&a.hasOwnProperty("frameId")&&delete a.frameId;return a}function getUUIDv4(){return"10000000-1000-4000-8000-100000000000".replace(/[018]/g,function(a){return(a^crypto.getRandomValues(new Uint8Array(1))[0]&15>>a/4).toString(16)})}
function sendCrashReport(a){a=JSON.parse(a);a="guid="+encodeURIComponent(getOption(cGUID,""))+"&stack="+encodeURIComponent(a.stack)+"&comment="+encodeURIComponent(a.comment)+"&contacts="+encodeURIComponent(a.contacts);var b=new XMLHttpRequest;b.open("POST",cCrashReportURL,!0);b.setRequestHeader("Content-Type","application/x-www-form-urlencoded");b.send(a)}
function getInfo(a,b){a=a.split("|");var d="guid="+encodeURIComponent(getOption(cGUID,""))+"&session="+encodeURIComponent(a[1]),e=new XMLHttpRequest;e.open("POST",a[0],!0);e.setRequestHeader("Content-Type","application/x-www-form-urlencoded");e.onreadystatechange=function(){this.readyState==XMLHttpRequest.DONE&&b(this.responseText)};e.send(d)};