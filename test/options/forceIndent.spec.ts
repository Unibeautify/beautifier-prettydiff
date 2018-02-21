import { newUnibeautify, Beautifier } from "unibeautify";
import beautifier from "../../src";

test(`should successfully beautify HTML text by not force indenting`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);

  const text = `<div><p>Some text here, some text there</p></div>`;
  const beautifierResult = `<div>\n\t<p>Some text here, some text there</p>\n</div>`;

  return unibeautify
    .beautify({
      languageName: "HTML",
      options: {
        HTML: {
          indent_with_tabs: true,
          force_indentation: false,
        }
      },
      text
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});

test(`should successfully beautify HTML text by force indenting`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);

  const text = `<div><p>Some text here, some text there</p></div>`;
  const beautifierResult = `<div>\n\t<p>\n\t\tSome text here, some text there</p>\n</div>`;

  return unibeautify
    .beautify({
      languageName: "HTML",
      options: {
        HTML: {
          indent_with_tabs: true,
          force_indentation: true,
        }
      },
      text
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});