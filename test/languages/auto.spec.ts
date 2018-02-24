import { newUnibeautify, Beautifier, Language } from "unibeautify";
import beautifier from "../../src";
import options from "../../src/options";
test(`should successfully beautify JavaScript through auto lang select`, () => {
  const unibeautify = newUnibeautify();
  const testLanguage: Language = {
    atomGrammars: [],
    extensions: ["test"],
    name: "TestLanguage",
    namespace: "test",
    sublimeSyntaxes: [],
    vscodeLanguages: []
  };
  unibeautify.loadLanguage(testLanguage);
  const testBeautifier = {
    ...beautifier,
    options: {
      [testLanguage.name]: options.Common,
    }
  };
  unibeautify.loadBeautifier(testBeautifier);
  const text = `function test(){console.log('hello world');}`;
  const beautifierResult = `function test() {\n\tconsole.log('hello world');\n}`;
  return unibeautify
    .beautify({
      languageName: testLanguage.name,
      options: {
        TestLanguage: {
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
