"use strict";

const clearTitle = require("./src/clearTitle");
const getTitle = require("./src/getTitle");
const drawTemplate = require("./src/drawTemplate");

let separator = ":title=";

module.exports = (_ref, options)=> {
    const markdownAST = _ref.markdownAST;
    if (!options)
        options = {};
    if (markdownAST.type == 'root' && Array.isArray(markdownAST.children)) {
        for (let i = 0; i < markdownAST.children.length; i++) {
            if (markdownAST.children[i].type == "code" && markdownAST.children[i].lang) {
                let title = getTitle(markdownAST.children[i].lang, separator);
                markdownAST.children[i].lang = clearTitle(markdownAST.children[i].lang, separator);
                if (title) {
                    let titleNode = {
                        type: "html",
                        value: drawTemplate(title, options.templateGenerator),
                        position: ""
                    };
                    markdownAST.children.splice(i, 0, titleNode)
                    i++
                }
            }
        }
    }
    return markdownAST;
};
/*

    margin-bottom: 0px;
    position: relative;
    top: 2.2rem;
    left: 80%;
    z-index: 2;
    width: auto;
    max-width: 20%;
    background: blanchedalmond;
    padding-left: 5px;
    padding-right: 5px;
    overflow: scroll;
    display: flex;

*/