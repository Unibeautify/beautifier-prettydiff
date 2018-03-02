import { Beautifier, Language, BeautifierBeautifyData } from "unibeautify";
import * as readPkgUp from "read-pkg-up";

const prettydiff = require("prettydiff2");
import options from "./options";

const { pkg } = readPkgUp.sync({ cwd: __dirname });

export const beautifier: Beautifier = {
  name: "Pretty Diff",
  package: pkg,
  options: {
    "C#": options.Script,
    ColdFusion: options.Markup,
    CSS: options.Style,
    // CSV: options.Common,
    EJS: options.Script,
    Handlebars: options.Markup,
    HTML: options.Markup,
    "HTML+ERB": options.Markup,
    Java: options.Script,
    JavaScript: options.Script,
    JSON: options.Style,
    JSX: options.Script,
    Less: options.Style,
    Riot: options.Script,
    Sass: options.Style,
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
  beautify(data: BeautifierBeautifyData) {
    return new Promise<string>((resolve, reject) => {
      let lang = "auto";
      switch (data.language.name) {
        //case "CSV":   lang = "csv";   break;
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
        case "Sass":
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
      const args = Object.assign({}, data.options, {
        source: data.text,
        lang: lang,
        mode: "beautify",
      });
      const result = prettydiff(args);
      return resolve(result);
    }) as any;
  },
};
export default beautifier;
