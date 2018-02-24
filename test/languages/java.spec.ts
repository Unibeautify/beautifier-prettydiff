import { newUnibeautify, Beautifier } from "unibeautify";
import beautifier from "../../src";
test(`should successfully beautify Java text without breaking chained methods`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const text = `public class Foo{public static void Main(String[] args){System.out.println("Hello World!");}}`;
  const beautifierResult = `public class Foo {\n\tpublic static void Main(String[] args) {\n\t\t\
System.out.println("Hello World!");\n\t}\n}`;
  return unibeautify
    .beautify({
      languageName: "Java",
      options: {
        Java: {
          indent_style: "tab",
          indent_size: 1,
          break_chained_methods: false,
        },
      },
      text,
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});
