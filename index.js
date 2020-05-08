"use strict";

// const visit = require("unist-util-visit");
let separator = ":";
let test={
    type: 'root',
    children: [
      {
        type: 'heading',  
        depth: 2,
        children: "",
        position: "",
      },
      { type: 'paragraph', children: "", position: "" },
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
      start: { line: 1, column: 1, offset: 0 },
      end: { line: 71, column: 236, offset: 4787 }
    }
  }

  let data = {};
  data.markdownAST = test;

const titlePrefix = ":title="



// module.exports = 
function gatsbyRemarkCodeTitles(_ref, options) {
  const markdownAST = _ref.markdownAST;
  console.log(markdownAST)
  const customClassName = options.className;
//   visit(markdownAST, "code", (node, index) => {
//     const lang = node.lang || "";
//     const separatorIndex = lang.lastIndexOf(titlePrefix);
//     if (separatorIndex === -1) {
//       return;
//     }

//     const newLang = lang.slice(0, separatorIndex);
//     const title = lang.slice(separatorIndex + titlePrefix.length);

//     const className = ["gatsby-code-title"].concat(customClassName || []);
//     const titleNode = {
//       type: "html",
//       value: `
//         <div class="${className.join(" ").trim()}">
//           <span>${title}</span>
//         </div>
//        `
//     };

//     markdownAST.children.splice(index, 0, titleNode);
//     node.lang = newLang;
//   });
  return markdownAST;
};

gatsbyRemarkCodeTitles(data,{})
