function injectCSS(path) {
    var style = document.createElement('link');
    style.rel = 'stylesheet';
    style.type = 'text/css';
    style.href = chrome.extension.getURL(path);
    (document.head||document.documentElement).appendChild(style);
}