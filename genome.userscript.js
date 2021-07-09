// ==UserScript==
// @name         Genome Textarea WYSIWYG Editor
// @namespace    https://github.com/dgomesbr/genome-textarea-us
// @version      1.0
// @description  Make Genome Textarea WYSIWYG 
// @author       Ken Ng
// @match        https://web.whatsapp.com/
// @require      https://cdn.jsdelivr.net/npm/suneditor@latest/dist/suneditor.min.js
// @resource     SUNEDITOR_CSS https://cdn.jsdelivr.net/npm/suneditor@latest/dist/css/suneditor.min.css
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

/* jshint esversion: 6 */
(function () {
    ('use strict');

    const SUNEDITOR_CSS = GM_getResourceText("SUNEDITOR_CSS");
    GM_addStyle(SUNEDITOR_CSS);

    const GENOME_ELEM_TARGET = "textarea";

    const editor = SUNEDITOR.create((document.getElementById(GENOME_ELEM_TARGET)),
        {
            "textTags": {
                "bold": "b",
                "underline": "u",
                "italic": "i",
                "strike": "s"
            },
            "mode": "balloon",
            "rtl": false,
            "katex": "window.katex",
            "resizingBar": false,
            "showPathLabel": false,
            "font": [
                "Arial",
                "tahoma",
                "Courier New,Courier"
            ],
            "fontSize": [
                8,
                10,
                14,
                18,
                24,
                36
            ],
            "formats": [
                "p",
                "blockquote",
                "h1",
                "h2",
                "h3"
            ],
            "colorList": [
                [
                    "#ff0000",
                    "#ff5e00",
                    "#ffe400",
                    "#abf200"
                ],
                [
                    "#00d8ff",
                    "#0055ff",
                    "#6600ff",
                    "#ff00dd"
                ]
            ],
            "imageResizing": false,
            "imageHeightShow": false,
            "imageFileInput": false,
            "imageUrlInput": false,
            "videoResizing": false,
            "videoHeightShow": false,
            "videoFileInput": false,
            "videoUrlInput": false,
            "videoRatioShow": false,
            "audioUrlInput": false,
            "tabDisable": false,
            "lineHeights": [
                {
                    "text": "Single",
                    "value": 1
                },
                {
                    "text": "Double",
                    "value": 2
                }
            ],
            "paragraphStyles": [
                "spaced",
                {
                    "name": "Box",
                    "class": "__se__customClass"
                }
            ],
            "buttonList": [
                [
                    "undo",
                    "redo",
                    "font",
                    "fontSize",
                    "formatBlock",
                    "paragraphStyle",
                    "blockquote",
                    "bold",
                    "underline",
                    "italic",
                    "strike",
                    "subscript",
                    "superscript",
                    "fontColor",
                    "hiliteColor",
                    "textStyle",
                    "removeFormat",
                    "outdent",
                    "indent",
                    "align",
                    "horizontalRule",
                    "list",
                    "lineHeight",
                    "table",
                    "link"
                ]
            ],
            "lang": SUNEDITOR_LANG.en,
            "lang(In nodejs)": "en"
        });
})();
