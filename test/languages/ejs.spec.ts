import { newUnibeautify, Beautifier } from "unibeautify";
import beautifier from "../../src";
test(`should successfully beautify EJS text`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const text = `<% if (user) { %><h2><%= user.name %></h2><% } %>`;
  const beautifierResult = `<% if (user) { %>\n\t<h2><%= user.name %></h2>\n<% } %>`;
  return unibeautify
    .beautify({
      languageName: "EJS",
      options: {
        EJS: {
          indent_with_tabs: true,
        },
      },
      text,
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});