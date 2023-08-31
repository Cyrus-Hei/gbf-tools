function getPageDetails(callback) {
    chrome.scripting.executeScript({target: { tabId: tabs[0].id}, file: 'scrap.js' });
    chrome.runtime.onMessage.addListener(function(message) {
        callback(message);
    });
};