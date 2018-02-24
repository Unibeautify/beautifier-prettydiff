import { newUnibeautify, Beautifier } from "unibeautify";
import beautifier from "../../src";
test(`should successfully beautify JavaScript text with assignments vertically aligned`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const longVar = `veryveryverylong`;
  const text = `function test(){a=1,${longVar}=2}`;
  const beautifierResult =
    `function test() {\n\ta` +
    " ".repeat(longVar.length) +
    `= 1,\n\t${longVar} = 2\n}`;
  return unibeautify
    .beautify({
      languageName: "JavaScript",
      options: {
        JavaScript: {
          align_assignments: true,
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
test(`should successfully beautify JavaScript text with assignments not vertially aligned`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const longVar = `veryveryverylong`;
  const text = `function test(){a=1,${longVar}=2}`;
  const beautifierResult = `function test() {\n\ta = 1,\n\t${longVar} = 2\n}`;
  return unibeautify
    .beautify({
      languageName: "JavaScript",
      options: {
        JavaScript: {
          align_assignments: false,
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
