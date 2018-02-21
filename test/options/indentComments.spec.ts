import { newUnibeautify, Beautifier } from "unibeautify";
import beautifier from "../../src";
test(`should successfully beautify JavaScript text with comments indented`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const text = `function test(n){
/*this should indent*/return n+1;}`;
  const beautifierResult = `function test(n) {
    /* this should indent */
    return n + 1;
}`;
  return unibeautify
    .beautify({
      languageName: "JavaScript",
      options: {
        JavaScript: {
          indent_comments: true,
        },
      },
      text,
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});
test(`should successfully beautify JavaScript text with comments not indented`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const text = `function test(n){
/*this should not indent*/return n+1;}`;
  const beautifierResult = `function test(n) {
/* this should not indent */
    return n + 1;
}`;
  return unibeautify
    .beautify({
      languageName: "JavaScript",
      options: {
        JavaScript: {
          indent_comments: false,
        },
      },
      text,
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});
