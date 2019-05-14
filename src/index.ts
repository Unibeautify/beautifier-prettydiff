import {
  Beautifier,
  Language,
  BeautifierBeautifyData,
  DependencyType,
  NodeDependency,
} from "unibeautify";
import * as readPkgUp from "read-pkg-up";
import options from "./options";
const pkg = readPkgUp.sync({ cwd: __dirname })!.package;

export const beautifier: Beautifier = {
  name: "Pretty Diff",
  package: pkg,
  dependencies: [
    {
      type: DependencyType.Node,
      name: "PrettyDiff",
      package: "prettydiff2",
    },
  ],
  options: {
    "C#": options.BasicScript,
    ColdFusion: options.Markup,
    CSS: options.Style,
    EJS: options.Script,
    Handlebars: options.Markup,
    HTML: options.Markup,
    "HTML+ERB": options.Markup,
    Java: options.BasicScript,
    JavaScript: options.Script,
    JSON: options.JSON,
    JSON5: options.JSON5,
    JSX: options.Script,
    Less: options.Style,
    Riot: options.Script,
    SCSS: options.Style,
    Spacebars: options.Markup,
    SVG: options.Markup,
    Swig: options.Script,
    "Titanium Style Sheets": options.Style,
    Twig: options.Script,
    TypeScript: options.Script,
    Visualforce: options.Markup,
    XML: options.Markup,
    XTemplate: options.Markup,
  },
  beautify({ text, options, language, dependencies }: BeautifierBeautifyData) {
    return new Promise<string>((resolve, reject) => {
      const prettydiff = dependencies.get<NodeDependency>("PrettyDiff").package;
      let lang = "auto";
      switch (language.name) {
        case "EJS":
        case "Twig":
          lang = "ejs";
          break;
        case "HTML+ERB":
          lang = "html_ruby";
          break;
        case "Handlebars":
        case "Mustache":
        case "Spacebars":
        case "Swig":
        case "Riot.js":
        case "XTemplate":
          lang = "handlebars";
          break;
        case "SGML":
        case "XML":
        case "Visualforce":
        case "SVG":
          lang = "xml";
          break;
        case "HTML":
        case "Coldfusion":
          lang = "html";
          break;
        case "JavaScript":
          lang = "javascript";
          break;
        case "Java":
          lang = "java";
          break;
        case "JSON":
        case "JSON5":
          lang = "json";
          break;
        case "JSX":
          lang = "jsx";
          break;
        // case "JSTL":   lang = "jsp";   break;
        case "C#":
          lang = "cs";
          break;
        case "CSS":
          lang = "css";
          break;
        case "Less":
          lang = "less";
          break;
        case "SCSS":
          lang = "scss";
          break;
        case "Titanium Style Sheets":
          lang = "tss";
          break;
        case "TypeScript":
          lang = "ts";
          break;
        default:
          lang = "auto";
      }
      const args = Object.assign({}, options, {
        insize: options.insize || 2,
        source: text,
        lang: lang,
        mode: "beautify",
      });
      const result = prettydiff(args);
      return resolve(result);
    }) as any;
  },
};
export default beautifier;
