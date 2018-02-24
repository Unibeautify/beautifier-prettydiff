import { newUnibeautify, Beautifier } from "unibeautify";
import beautifier from "../../src";
test(`should successfully beautify C# text`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const text = `class Foo{static void Main(){Console.WriteLine("Hello World!");}}`;
  const beautifierResult = `class Foo {\n\tstatic void Main() {\n\t\tConsole.WriteLine("Hello World!");\n\t}\n}`;
  return unibeautify
    .beautify({
      languageName: "C#",
      options: {
        "C#": {
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
