import {newUnibeautify, Beautifier} from "unibeautify";
import beautifier from "../src";
test("should successfully install beautifier", () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  expect(unibeautify.loadedBeautifiers.map(curr => curr.name)).toEqual([beautifier.name]);
});
test("should successfully beautify JavaScript text with 2 space indentation", () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const text = `function test(n){return n+1;}`;
  const beautifierResult = `function test(n) {\n  return n + 1;\n}`;
  return unibeautify.beautify({
    languageName: "JavaScript",
    options: {
      JavaScript: {
        indent_char: " ",
        indent_size: 2
      }
    },
    text
  }).then(results => {
    expect(results).toBe(beautifierResult);
  });
});
test("should successfully beautify JavaScript text with double quotes", () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const text = `console.log('hello world');`;
  const beautifierResult = `console.log("hello world");`;
  return unibeautify.beautify({
    languageName: "JavaScript",
    options: {
      JavaScript: {
        indent_char: " ",
        indent_size: 2,
        quotes: "double"
      }
    },
    text
  }).then(results => {
    expect(results).toBe(beautifierResult);
  });
});