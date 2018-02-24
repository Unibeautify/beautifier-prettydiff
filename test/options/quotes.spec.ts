import { newUnibeautify, Beautifier } from "unibeautify";
import beautifier from "../../src";
test(`should successfully beautify JavaScript text with single quotes`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const quote = "'";
  const text = `console.log('hello world');\nconsole.log("hello world");\n`;
  const beautifierResult = `console.log(${quote}hello world${quote});\nconsole.log(${quote}hello world${quote});\n`;
  return unibeautify
    .beautify({
      languageName: "JavaScript",
      options: {
        JavaScript: {
          quotes: "single",
        },
      },
      text,
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});
test(`should successfully beautify JavaScript text with double quotes`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const quote = "'";
  const text = `console.log('hello world');\nconsole.log("hello world");\n`;
  const beautifierResult = `console.log(${quote}hello world${quote});\nconsole.log(${quote}hello world${quote});\n`;
  return unibeautify
    .beautify({
      languageName: "JavaScript",
      options: {
        JavaScript: {
          quotes: "double",
        },
      },
      text,
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});
