// ==UserScript==
// @name         Traditional search to Perplexity
// @namespace    https://github.com/olorton/
// @version      2025-04-07
// @description  Reloads a google search in perplexity.ai
// @author       Oliver Lorton
// @updateURL    https://raw.githubusercontent.com/olorton/userscripts/master/trad-search-to-perplexity.meta.js
// @downloadURL  https://raw.githubusercontent.com/olorton/userscripts/master/trad-search-to-perplexity.user.js
// @supportURL   https://github.com/olorton/userscripts/issues
// @match        https://www.google.com/search*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function () {
    "use strict";

    const destination = "https://www.perplexity.ai/search/new";
    let query = "ERROR";

    document.addEventListener("keydown", function (e) {
        // Alt-r
        if (e.altKey && e.key === "r") {
            // Select the textarea with a specific aria-label value
            const textarea = document.querySelector(
                'textarea[aria-label="Search"]',
            );

            // Reload in Perplexity
            if (textarea && textarea.value.length > 0) {
                query = "?q=" + encodeURIComponent(textarea.value);
                let new_location = destination + query
                console.log("location: " + new_location);
                window.location.href = new_location;
            } else {
                console.log("location: " + destination);
                window.location.href = destination;
            }
        }
    });
})();
