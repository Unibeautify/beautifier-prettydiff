import { newUnibeautify, Beautifier } from "unibeautify";
import beautifier from "../../src";
test(`should successfully beautify LESS text`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const text = `#header{color:black;.navigation{font-size:12px;}}`;
  const beautifierResult = `#header {\n\tcolor: black;\n\t.navigation {\n\t\tfont-size: 12px;\n\t}\n}`;
  return unibeautify
    .beautify({
      languageName: "Less",
      options: {
        Less: {
          indent_with_tabs: true,
        }
      },
      text
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});