import { Beautifier, Language, BeautifierBeautifyData } from "unibeautify";
const prettydiff = require("prettydiff2");
import options from "./options";
const pkg = require("../package.json");
export const beautifier: Beautifier = {
  name: "Pretty Diff",
  package: pkg,
  options: {
    "C#": options["C#"],
    ColdFusion: options.ColdFusion,
    CSS: options.CSS,
    CSV: options.CSV,
    EJS: options.EJS,
    Handlebars: options.Handlebars,
    HTML: options.HTML,
    "HTML+ERB": options["HTML+ERB"],
    Java: options.Java,
    JavaScript: options.JavaScript,
    JSON: options.JSON,
    JSX: options.JSX,
    Less: options.Less,
    Riot: options.Riot,
    Sass: options.Sass,
    SCSS: options.SCSS,
    Spacebars: options.Spacebars,
    SVG: options.SVG,
    Swig: options.Swig,
    "Titanium Style Sheets": options["Titanium Style Sheets"],
    Twig: options.Twig,
    TypeScript: options.TypeScript,
    Visualforce: options.Visualforce,
    XML: options.XML,
    XTemplate: options.XTemplate,
  },
  beautify(data: BeautifierBeautifyData) {
    return new Promise<string>((resolve, reject) => {
      let lang = "auto";
      switch (data.language.name) {
        case "CSV":
          lang = "csv";
          break;
        case "Coldfusion":
          lang = "html";
          break;
        case "EJS":
        case "Twig":
          lang = "ejs";
          break;
        case "ERB":
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
          lang = "markup";
          break;
        case "XML":
        case "Visualforce":
        case "SVG":
          lang = "xml";
          break;
        case "HTML":
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
        case "JSTL":
          lang = "jsp";
          break;
        case "C#":
          lang = "cs";
          break;
        case "CSS":
          lang = "css";
          break;
        case "LESS":
          lang = "less";
          break;
        case "SCSS":
        case "Sass":
          lang = "scss";
          break;
        case "TSS":
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
