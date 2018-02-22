import { newUnibeautify, Beautifier } from "unibeautify";
import beautifier from "../../src";
test(`should successfully beautify SASS/SCSS text`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const text = `$primary-color:#333;body{color:$primary-color;}`;
  const beautifierResult = `$primary-color: #333;\nbody {\n\tcolor: $primary-color;\n}`;
  return unibeautify
    .beautify({
      languageName: "Sass",
      options: {
        Sass: {
          indent_with_tabs: true,
        },
      },
      text,
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});
