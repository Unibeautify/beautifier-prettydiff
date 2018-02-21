import { newUnibeautify, Beautifier } from "unibeautify";
import beautifier from "../../src";
test(`should successfully beautify CSS text with new lines between rules`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const text = `.className1{font-size:12pt;}.className2{font-weight:bold;}`;
  const beautifierResult = `.className1 {\n\tfont-size: 12pt;\n}\n\n.className2 {\n\tfont-weight: bold;\n}`;
  return unibeautify
    .beautify({
      languageName: "CSS",
      options: {
        CSS: {
          newline_between_rules: true,
          indent_with_tabs: true,
        },
      },
      text,
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});
test(`should successfully beautify CSS text without new lines between rules`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const text = `.className1{font-size:12pt;}.className2{font-weight:bold;}`;
  const beautifierResult = `.className1 {\n\tfont-size: 12pt;\n}\n.className2 {\n\tfont-weight: bold;\n}`;
  return unibeautify
    .beautify({
      languageName: "CSS",
      options: {
        CSS: {
          newline_between_rules: false,
          indent_with_tabs: true,
        },
      },
      text,
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});
