// chrome.runtime.sendMessage({
//     'title': document.title,
//     'url': window.location.href,
//     'summary': document.querySelectorAll('div.prt-stone')
// });

chrome.runtime.sendMessage({
    'title': document.title,
    'url': window.location.href,
    'summary': window.getSelection().toString()
});