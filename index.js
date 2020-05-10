"use strict";

// const visit = require("unist-util-visit");
let separator = ":";
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
            lang: 'json:label:test',
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

const titlePrefix = ":title="


module.exports = function gatsbyRemarkCodeTitles(_ref, options) {
    const markdownAST = _ref.markdownAST;

    const customClassName = options.className;
    if (markdownAST.type == 'root' && Array.isArray(markdownAST.children)) {
        for (let i = 0; i < markdownAST.children.length; i++) {
            // console.log(markdownAST.children[i].type)
            if (markdownAST.children[i].type == "code") {
                console.log(i)


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

                const titleNode = {
                    type: "html",
                    value: `
         <div class="gatsby-code-title">
           <span>test</span>
         </div>
        `,
                    position: ""
                };
                markdownAST.children.splice(i, 0, titleNode)
                i++
            }
        }

    }
    return markdownAST;
};

// gatsbyRemarkCodeTitles(data,{})
