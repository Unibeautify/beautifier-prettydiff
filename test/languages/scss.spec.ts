import { newUnibeautify, Beautifier } from "unibeautify";
import beautifier from "../../src";
test(`should successfully beautify SASS/SCSS text`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const text = `$primary-color:#333;body{color:$primary-color;}`;
  const beautifierResult = `$primary-color: #333;\nbody {\n\tcolor: $primary-color;\n}`;
  return unibeautify
    .beautify({
      languageName: "SCSS",
      options: {
        SCSS: {
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
