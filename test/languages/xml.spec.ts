import { newUnibeautify, Beautifier } from "unibeautify";
import beautifier from "../../src";
test(`should successfully beautify XML text`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const text = `<email>\n\t\t\t<to>foo</to><from>bar</from><subject>Hello World!</subject></email>`;
  const beautifierResult = `<email>\n\t<to>foo</to>\n\t<from>bar</from>\n\t<subject>Hello World!</subject>\n</email>`;
  return unibeautify
    .beautify({
      languageName: "XML",
      options: {
        XML: {
          indent_with_tabs: true,
        }
      },
      text
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});