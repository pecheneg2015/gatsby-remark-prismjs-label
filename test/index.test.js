import {describe, expect} from "@jest/globals";
const gatsbyRemarkCodeTitles = require("./../index.js");
const clearTitle = require("./../src/clearTitle.js");
const getTitle = require("./../src/getTitle.js");
const drawTemplate = require("./../src/drawTemplate.js");

describe("Get title", () => {
    test("it should return  title", () => {
        expect(getTitle("javascript:title=js", ":title=")).toEqual("js");
    });
    test("it should return null", () => {
        expect(getTitle("javascript:title1=js", ":title=")).toEqual(null);
        expect(getTitle("javascript:title=", ":title=")).toEqual(null);
    });
});

describe("Clear title", () => {
    test("it should return  javascript", () => {
        expect(clearTitle("javascript:title=js", ":title=")).toEqual("javascript");
    });
});

describe("Draw title", () => {
    test("it should return  div", () => {
        expect(drawTemplate("test")).toEqual("<div>test</div>");
    });
    test("it should return  p", () => {
        expect(drawTemplate("test",(test)=>{return `<p>${test}</p>`})).toEqual("<p>test</p>");
    });
});

describe("Test  gatsbyRemarkCodeTitles", () => {
    test("it should return  empty obj", () => {
        let data = {};
        data.markdownAST = {};
        expect(gatsbyRemarkCodeTitles(data)).toEqual({});
    });
    test("it should return  empty obj", () => {

        let mockData = {
            type: 'root',
            children: [
                {
                    type: 'code',
                    lang: 'json:title=test',
                    meta: null,
                    value: '{\n  "compilerOptions": {\n    ···\n    "allowJs": true\n  }\n}',
                    position: ""
                },
            ],
            position: {
                start: {line: 1, column: 1, offset: 0},
                end: {line: 71, column: 236, offset: 4787}
            }
        };

        let mockDataOutput = {
            type: 'root',
            children: [
                {
                    type: "html",
                    value: "<div>test</div>",
                    position: ""
                },
                {
                    type: 'code',
                    lang: 'json',
                    meta: null,
                    value: '{\n  "compilerOptions": {\n    ···\n    "allowJs": true\n  }\n}',
                    position: ""
                },
            ],
            position: {
                start: {line: 1, column: 1, offset: 0},
                end: {line: 71, column: 236, offset: 4787}
            }
        };
        let data = {};
        data.markdownAST = mockData;
        expect(gatsbyRemarkCodeTitles(data,{})).toEqual(mockDataOutput);
    });
});