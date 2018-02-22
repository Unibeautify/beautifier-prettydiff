import { newUnibeautify, Beautifier } from "unibeautify";
import beautifier from "../../src";
test(`should successfully beautify JavaScript text `, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const lineBreaks = "\n".repeat(10);
  const preserveLines = "\n".repeat(4);
  const text = `{"test1":1,${lineBreaks}"test2":2}`;
  const beautifierResult = `{\n\t"test1": 1,${preserveLines}\t"test2": 2\n}`;
  return unibeautify
    .beautify({
      languageName: "JSON",
      options: {
        JSON: {
          indent_with_tabs: true,
          max_preserve_newlines: 3,
        },
      },
      text,
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});
