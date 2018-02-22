import { newUnibeautify, Beautifier } from "unibeautify";
import beautifier from "../../src";
test("should successfully beautify JSX text", () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const text = `export default class TestCase extends React.Component{render(){return\
( <div className={this.props.className} someAttr><div>Smth</div></div>);}}`;
  const beautifierResult = `export default class TestCase extends React.Component {\n\trender() {\n\t\treturn \
(<div className={this.props.className} someAttr="someAttr">\n\t\t\t<div>Smth</div>\n\t\t</div>);\n\t}\n}`;
  return unibeautify
    .beautify({
      languageName: "JSX",
      options: {
        JSX: {
          indent_with_tabs: true,
        },
      },
      text,
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});
