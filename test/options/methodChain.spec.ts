import { newUnibeautify, Beautifier } from "unibeautify";
import beautifier from "../../src";
test(`should successfully beautify JavaScript text with breaks before the periods`, () => {
    const unibeautify = newUnibeautify();
    unibeautify.loadBeautifier(beautifier);
    // unibeautify:ignore-next-line
    const quote = '"';
    const text = `console.log(prettydiff.api.language.auto("asdf"));\n`;
    const beautifierResult = `console.log(prettydiff\n    .api\n    .language\n    .auto("asdf"));`;
    return unibeautify
      .beautify({
        languageName: "JavaScript",
        options: {
          JavaScript: {
            break_chained_methods: true,
          },
        },
        text,
      })
      .then(results => {
        expect(results).toBe(beautifierResult);
      });
  });
  test(`should successfully beautify JavaScript text without breaks before the periods`, () => {
    const unibeautify = newUnibeautify();
    unibeautify.loadBeautifier(beautifier);
    // unibeautify:ignore-next-line
    const quote = '"';
    const text = `console.log(prettydiff\n    .api\n    .language\n    .auto("asdf"));\n`;
    const beautifierResult = `console.log(prettydiff.api.language.auto("asdf"));`;
    return unibeautify
      .beautify({
        languageName: "JavaScript",
        options: {
          JavaScript: {
            break_chained_methods: false,
          },
        },
        text,
      })
      .then(results => {
        expect(results).toBe(beautifierResult);
      });
  });