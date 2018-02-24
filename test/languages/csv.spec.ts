import { newUnibeautify, Beautifier } from "unibeautify";
import beautifier from "../../src";
test(`should successfully beautify CSV text`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const text = "value1,value2,value3,value4,value5,value6";
  const beautifierResult = [["value1", "value2", "value3", "value4", "value5", "value6"]];
  return unibeautify
    .beautify({
      languageName: "CSV",
      options: {
        CSV: {},
      },
      text,
    })
    .then(results => {
      expect(results).toEqual(beautifierResult);
    });
});