import { newUnibeautify, Beautifier } from "unibeautify";
import beautifier from "../../src";
import options from "../../src/options";
test(`should successfully beautify JavaScript through auto lang select`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  beautifier.options.ActionScript = options.Script;
  const text = `function(){console.log('hello world');}`;
  const beautifierResult = `function () {\n\tconsole.log('hello world');\n}`;
  return unibeautify
    .beautify({
      languageName: "ActionScript",
      options: {
        ActionScript: {
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
