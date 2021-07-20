// ==UserScript==
// @name         Genome Textarea WYSIWYG Editor
// @namespace    https://github.com/dgomesbr/genome-textarea-us
// @version      1.0
// @description  Make Genome Textarea WYSIWYG
// @author       diegogm
// @match        *
// @include      *
// @require      https://cdn.jsdelivr.net/npm/medium-editor@latest/dist/js/medium-editor.min.js
// @resource     MEDIUM_EDITOR_CSS https://cdn.jsdelivr.net/npm/medium-editor@latest/dist/css/medium-editor.min.css
// @resource     THEME_CSS https://cdn.jsdelivr.net/npm/medium-editor@5.23.3/dist/css/themes/beagle.min.css
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

/* jshint esversion: 6 */
(function () {
    ('use strict');
    const MEDIUM_EDITOR_CSS = GM_getResourceText("MEDIUM_EDITOR_CSS");
    const THEME_CSS = GM_getResourceText("THEME_CSS");

    GM_addStyle(MEDIUM_EDITOR_CSS);
    GM_addStyle(THEME_CSS);

    let c = document.querySelector("[contenteditable]");
    var editor = new MediumEditor(c, {
        toolbar: {
            /* These are the default options for the toolbar,
           if nothing is passed this is what is used */
            allowMultiParagraphSelection: true,
            buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote'],
            diffLeft: 0,
            diffTop: -10,
            firstButtonClass: 'medium-editor-button-first',
            lastButtonClass: 'medium-editor-button-last',
            relativeContainer: null,
            standardizeSelectionStart: false,
            static: false,
            /* options which only apply when static is true */
            align: 'center',
            sticky: false,
            updateOnEmptySelection: false
        }
    });
    console.log(editor);
})();
