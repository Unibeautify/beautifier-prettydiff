import { newUnibeautify, Beautifier } from "unibeautify";
import beautifier from "../../src";

test(`should successfully beautify JavaScript text `, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);

  const veryLongString = "very".repeat(10) + "longstring";
  const text = `["${veryLongString}",\n"${veryLongString}"];`;
  const beautifierResult = `["${veryLongString}", "${veryLongString}",];`;

  return unibeautify
    .beautify({
      languageName: "JavaScript",
      options: {
        JavaScript: {

        }
      },
      text
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});