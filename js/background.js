// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
//   if (changeInfo.status === 'complete') {

//     // plugin__fullscreen.js
//     if (tab.url.indexOf('fullscreenmode=1') === 0) {
//       // chrome.scripting.executeScript({
//       //   target: { tabId: tab.id },
//       //   files: ["plugin__fullscreen.js"]
//       // });
//       chrome.tabs.executeScript(tabId, { file: 'plugin__fullscreen.js' });
//     }





//   }
// });

