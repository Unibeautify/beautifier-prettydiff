import { newUnibeautify, Beautifier } from "unibeautify";
import beautifier from "../../src";
test("should successfully beautify JSX text", () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const text = `export default class TestCase extends React.Component{render(){return\
( <div className={this.props.className} someAttr><div>Smth</div></div>);}}`;
  const beautifierResult = `export default class TestCase extends React.Component {\n\trender() {\n\t\treturn \
(\n\t\t\t<div className={\n\t\t\t\t\tthis.props.className\n\t\t\t\t}\n\t\t\t\tsomeAttr\
>\n\t\t\t\t<div>Smth</div>\n\t\t\t</div>\n\t\t);\n\t}\n}`;
  return unibeautify
    .beautify({
      languageName: "JSX",
      options: {
        JSX: {
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
