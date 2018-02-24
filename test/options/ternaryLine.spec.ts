import { newUnibeautify, Beautifier } from "unibeautify";
import beautifier from "../../src";
test(`should successfully beautify JavaScript text with ternary statements on different lines`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const text = `var foo = bar > baz ? value1 : value2;`;
  const beautifierResult = `var foo = bar > baz\n      ? value1\n      : value2;`;
  return unibeautify
    .beautify({
      languageName: "JavaScript",
      options: {
        JavaScript: {
          multiline_ternary: "always",
          indent_style: "space",
          indent_size: 6,
        },
      },
      text,
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});
test(`should successfully beautify JavaScript text with ternary statements on the same line`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const text = `var foo = bar > baz\n\t? value1\n\t: value2;`;
  const beautifierResult = `var foo = bar > baz ? value1: value2;`;
  return unibeautify
    .beautify({
      languageName: "JavaScript",
      options: {
        JavaScript: {
          multiline_ternary: "never",
          indent_style: "tab",
        },
      },
      text,
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});
