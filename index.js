"use strict";

let test = {
    type: 'root',
    children: [
        {
            type: 'heading',
            depth: 2,
            children: "",
            position: "",
        },
        {type: 'paragraph', children: "", position: ""},
        {
            type: 'list',
            ordered: false,
            start: null,
            spread: false,
            children: "",
            position: ""
        },
        {
            type: 'code',
            lang: 'json:title=test',
            meta: null,
            value: '{\n  "compilerOptions": {\n    ···\n    "allowJs": true\n  }\n}',
            position: ""
        },
        {
            type: 'code',
            lang: 'javascript',
            meta: null,
            value: '/**\n' +
                ' * @param {number} x - A number param.\n' +
                ' * @param {number} y - A number param.\n' +
                ' * @returns {number} This is the result\n' +
                ' */\n' +
                'function add(x, y) {\n' +
                '  return x + y;\n' +
                '}\n' +
                '/** @typedef {{ prop1: string, prop2: string, prop3?: number }} SpecialType */\n' +
                '/** @typedef {(data: string, index?: number) => boolean} Predicate */',
            position: ""
        },
    ],
    position: {
        start: {line: 1, column: 1, offset: 0},
        end: {line: 71, column: 236, offset: 4787}
    }
}

let data = {};
data.markdownAST = test;

const getTitle = (lang, separator) => {
    let ind = lang.lastIndexOf(separator);
    let title = ind === -1 ? "" : lang.slice(ind + separator.length);
    return title.length > 0 ? title : null;
};

const clearTitle = (lang, separator) => {
    let ind = lang.lastIndexOf(separator);
    return ind === -1 ? lang : lang.slice(0, ind);
};

const drawTemplate = (title, templateGenerator) => {
    if (!templateGenerator) {
        return `<div>${title}</div>`;
    } else {
        return templateGenerator(title);
    }
};

let separator = ":title=";

function gatsbyRemarkCodeTitles(_ref, options) {
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


export {gatsbyRemarkCodeTitles, getTitle, clearTitle, drawTemplate};
// module.exports = gatsbyRemarkCodeTitles;

// gatsbyRemarkCodeTitles(data,{templateGenerator:(title)=>{return `<p>${title}</p>`}})

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
/*
     font: 100%/1.75 'Merriweather','Georgia',serif;
     font-family: 'Merriweather','Georgia',serif;
     font-weight: 400;
     font-kerning: normal;
     font-feature-settings: "kern", "liga", "clig", "calt";
     box-sizing: inherit;
     padding-top: 0;
     position: relative;
     margin: 0;
     padding: 0;
     top: 1.4rem;
     z-index: 2;
     left: 3rem;
     background: blue;
     width: fit-content;
     line-height: initial;
     padding-left: 6px;
     padding-right: 6px;
     padding-bottom: 2px;
     border-radius: 0 0  4px 4px;
     color: white;
      */