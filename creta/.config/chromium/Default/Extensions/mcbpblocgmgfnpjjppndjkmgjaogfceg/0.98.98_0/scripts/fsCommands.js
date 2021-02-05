/*
 FireShot - Webpage Screenshots and Annotations
 Copyright (C) 2007-2020 Evgeny Suslikov (evgeny@suslikov.ru)
*/
function openSettings(){lockItems();pluginCommand("openSettings");unlockItems()}function openExtensionPreferences(){chrome.tabs.create({url:"fsOptions.html"})}function openExtensionSettings(){openURL("chrome://extensions/?id="+chrome.runtime.id)}function doRegister(){openURL("https://getfireshot.com/buy.php")}function openDemoPage(){openURL("https://getfireshot.com/demo.php")}function openSupportPage(){openURL("https://getfireshot.com/sup/frm12.htm")}
function openAPIPage(){openURL("https://getfireshot.com/api.php")}function resumeEditing(){lockItems();pluginCommand("resumeEditing");unlockItems()}function captureLastUsedMode(){executeGrabber(getLastAction(),getLastMode())}function openCaptureSettings(){lockItems();pluginCommand("ieCaptureOptions");unlockItems()}function doUpgrade(){lockItems();pluginCommand("upgradeToPro");unlockItems()}
function doTrial(){gaTrack("UA-1025658-9","fireshot.com","DoTrialChrome");lockItems();pluginCommand("upgradeToProTrial");unlockItems()}function enterLicense(){lockItems();pluginCommand("enterLicense");unlockItems()}function openFile(){lockItems();pluginCommand("openFile");unlockItems()}function openClipboard(){lockItems();pluginCommand("openFromClipboard");unlockItems()}function notSupported(){openURL("https://getfireshot.com/not-supported.php")}
function showLicenseInfo(){lockItems();pluginCommand("showLicensingInfo");unlockItems()}function showAbout(){lockItems();pluginCommand("showAboutWindow");unlockItems()}function installNative(){getAdvancedFeaturesAvailable()?chrome.tabs.create({url:"fsNativeInstall.html"}):openURL("https://getfireshot.com/buy.php?SRC=ce-lite")}function openPermissionsPage(){fPermissionsPageOpened||(fPermissionsPageOpened=!0,chrome.tabs.create({url:"fsPermissions.html"}))}
function openGmailPermissionsPage(){chrome.tabs.create({url:"fsGmailPermissions.html"})}function openGmailComposer(){fInjectGmailScript=!0;chrome.tabs.create({url:"https://gmail.com"})}
function doTest(){chrome.tabs.query({currentWindow:!0,active:!0},function(a){0<a.length&&chrome.tabs.executeScript(a[0].id,{file:"scripts/fsLinks.js",runAt:"document_end"},function(){chrome.runtime.lastError?console.log(chrome.runtime.lastError):chrome.tabs.executeScript(a[0].id,{code:"var textGrabber = new TextGrabber(document.scrollingElement); textGrabber.doTests();",runAt:"document_start"},function(){})})})};