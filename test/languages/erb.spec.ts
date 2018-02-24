import { newUnibeautify, Beautifier } from "unibeautify";
import beautifier from "../../src";
test(`should successfully beautify ERB text`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const text = `Hello <%= @name %>, today is <%= Time.now.strftime('%A') %>`;
  const beautifierResult = `Hello\n<%= @name %>, today is\n<%= Time.now.strftime('%A') %>`;
  return unibeautify
    .beautify({
      languageName: "HTML+ERB",
      options: {
        "HTML+ERB": {},
      },
      text,
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});