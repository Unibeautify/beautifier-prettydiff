import { newUnibeautify, Beautifier } from "unibeautify";
import beautifier from "../../src";
test(`should successfully beautify TypeScript text`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const text = `function greeter(person:string) {return "Hello, "+person;}`;
  const beautifierResult = `function greeter(person : string) {\n\treturn "Hello, " + person;\n}`;
  return unibeautify
    .beautify({
      languageName: "TypeScript",
      options: {
        TypeScript: {
          indent_with_tabs: true,
        }
      },
      text
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});