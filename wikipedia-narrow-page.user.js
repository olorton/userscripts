// ==UserScript==
// @name        Wikipedia Narrow Page
// @namespace   https://github.com/olorton/
// @description Narrows the content of wikipedia pages so that they are easier to read on very wide screens.
// @author      Oliver Lorton
// @version     0.0.1
// @updateURL   https://raw.githubusercontent.com/olorton/userscripts/master/wikipedia-narrow-page.meta.js
// @downloadURL https://raw.githubusercontent.com/olorton/userscripts/master/wikipedia-narrow-page.user.js
// @supportURL  https://github.com/olorton/userscripts/issues
// @grant       none
// @match       https://*.wikipedia.org/*
// @match       http://*.wikipedia.org/*
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
#content {
    max-width: 800px ! important;
        margin-left: auto;
        margin-right: auto;
}
`);
