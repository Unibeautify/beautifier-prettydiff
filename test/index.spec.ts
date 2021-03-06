import { newUnibeautify, Beautifier } from "unibeautify";
import { beautifier, fixType } from "../src";
const prettydiff = require("prettydiff");
test("should successfully install beautifier", () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  expect(unibeautify.loadedBeautifiers.map(curr => curr.name)).toEqual([
    beautifier.name,
  ]);
});
test("should modify options to appropriate data type", () => {
  const options = {
    wrap: "asdf",
  };
  fixType(options, { wrap: 0 });
  expect(options.wrap).toEqual(0);
});
test("should validate prettydiff.language.auto is a function", () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const text = `function test(n){return n+1;}`;
  return unibeautify
    .beautify({
      languageName: "JavaScript",
      options: {
        JavaScript: {
          indent_char: " ",
          indent_size: 2,
        },
      },
      text,
    })
    .then(() => {
      expect(typeof prettydiff.api.language.auto).toBe("function");
    });
});
test("should validate prettydiff.language.auto is a function", () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const text = `function test(n){return n+1;}`;
  return unibeautify
    .beautify({
      languageName: "JavaScript",
      options: {
        JavaScript: {
          indent_char: " ",
          indent_size: 2,
        },
      },
      text,
    })
    .then(() => {
      expect(typeof prettydiff.options.lexer).toBe("string");
    });
});
test("should successfully beautify JavaScript text with 2 space indentation", () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const text = `function test(n){return n+1;}`;
  const beautifierResult = `function test(n) {\n  return n + 1;\n}`;
  return unibeautify
    .beautify({
      languageName: "JavaScript",
      options: {
        JavaScript: {
          indent_char: " ",
          indent_size: 2,
        },
      },
      text,
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});
test("should successfully beautify JavaScript text with double quotes", () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const text = `console.log('hello world');`;
  const beautifierResult = `console.log("hello world");`;
  return unibeautify
    .beautify({
      languageName: "JavaScript",
      options: {
        JavaScript: {
          indent_char: " ",
          indent_size: 2,
          quotes: "double",
        },
      },
      text,
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});
