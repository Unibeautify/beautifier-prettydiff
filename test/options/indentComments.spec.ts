import { newUnibeautify, Beautifier } from "unibeautify";
import beautifier from "../../src";
test(`should successfully beautify JavaScript text with comments indented`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const text = `function test(n){\n/*this should indent*/return n+1;}`;
  const beautifierResult = `function test(n) {\n\t/* this should indent */\n\treturn n + 1;\n}`;
  return unibeautify
    .beautify({
      languageName: "JavaScript",
      options: {
        JavaScript: {
          indent_comments: true,
          indent_style: "tab",
          indent_size: 1,
        },
      },
      text,
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});
test(`should successfully beautify JavaScript text with comments not indented`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const text = `function test(n){\n\t/* this should not indent */\n\treturn n + 1;\n}`;
  const beautifierResult = `function test(n) {\n/* this should not indent */\n\treturn n + 1;\n}`;
  return unibeautify
    .beautify({
      languageName: "JavaScript",
      options: {
        JavaScript: {
          indent_comments: false,
          indent_style: "tab",
          indent_size: 1,
        },
      },
      text,
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});
