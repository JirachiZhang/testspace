// ==UserScript==
// @name         test3
// @namespace    http://tampermonkey.net/
// @version      2025-07-09
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @require      https://unpkg.com/babel/parser@7.28.0/lib/index.js
// @require      https://unpkg.com/babel/traverse@7.28.0/lib/index.js
// @require      https://unpkg.com/axios@1.3.6/dist/axios.min.js
// @require      https://unpkg.com/store.js@1.0.4/store.js
// @require      https://unpkg.com/jquery@3.6.4/dist/jquery.min.js
// @require      https://unpkg.com/jszip@3.1.5/dist/jszip.min.js
// @require      https://unpkg.com/file-saver@2.0.5/dist/FileSaver.min.js
// @require      https://unpkg.com/crypto-js@4.1.1/crypto-js.js
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// @license           MIT
// ==/UserScript==

(function() {
    'use strict';
    const DOM_READY = "DOMContentLoaded";
    const PAGE_LOADED = "load";
    const MOUSE_UP = "mouseup";
    const MOUSE_DOWN = "mousedown";
    const MOUSE_MOVE = "mousemove";
    const COPY = "copy";
    const SELECT_START = "selectstart";
    const CONTEXT_MENU = "contextmenu";
    const KEY_DOWN = "keydown";

    
    const url = 'https://hi77-overseas.mangafuna.xyz/static/websitefree/js20190704/comic_detail_pass202507081916.js';
    let astTree;

    axios.get(url)
            .then((response) => {
        astTree = parser.parse(response);
    });

    // AST代码
    let visitor = {
        StringLiteral({node}) {
            if (node.value !== node.extra.raw) {
                node.extra.raw = "'" + node.value + "'";
            }
        },
    }
    traverse(astTree, visitor);





})();
