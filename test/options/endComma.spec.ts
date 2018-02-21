import { newUnibeautify, Beautifier } from "unibeautify";
import beautifier from "../../src";

test(`should successfully beautify JavaScript text with comma at end`, () => {
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
          end_with_comma: true
        }
      },
      text
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});

test(`should successfully beautify JavaScript text with no comma at end`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);

  const veryLongString = "very".repeat(10) + "longstring";
  const text = `["${veryLongString}","${veryLongString}",];`;
  const beautifierResult = `["${veryLongString}", "${veryLongString}"];`;

  return unibeautify
    .beautify({
      languageName: "JavaScript",
      options: {
        JavaScript: {
          end_with_comma: false
        }
      },
      text
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});