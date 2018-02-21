import { newUnibeautify, Beautifier } from "unibeautify";
import beautifier from "../../src";
test(`should successfully beautify TSS text`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const text = `".foo":{fontSize:'12dp'}`;
  const beautifierResult = `".foo" : {\n\tfontSize: '12dp'\n}`;
  return unibeautify
    .beautify({
      languageName: "Titanium Style Sheets",
      options: {
        "Titanium Style Sheets": {
          indent_with_tabs: true,
        }
      },
      text
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});