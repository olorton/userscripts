// ==UserScript==
// @name        Hacker News Narrow Page
// @namespace   https://github.com/olorton/
// @description Narrows the content of Hacker News pages so that they are easier to read on very wide screens.
// @author      Oliver Lorton
// @version     0.1.0
// @updateURL   https://raw.githubusercontent.com/olorton/userscripts/master/hacker-news-narrow-page.meta.js
// @downloadURL https://raw.githubusercontent.com/olorton/userscripts/master/hacker-news-narrow-page.user.js
// @supportURL  https://github.com/olorton/userscripts/issues
// @grant       none
// @match       https://news.ycombinator.com/*
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle(`
#hnmain {
    max-width: 800px;
}
`);
