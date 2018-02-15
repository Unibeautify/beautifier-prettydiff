import { Beautifier, Language, BeautifierBeautifyData } from "unibeautify";
const prettydiff = require("prettydiff2");

import options from "./options";

const pkg = require("../package.json");

export const beautifier: Beautifier = {
  name: "Pretty Diff",
  package: pkg,
  options: {
    CSV: options.CSV,
    ColdFusion: options.ColdFusion,
    "HTML+ERB": options[ "HTML+ERB" ],
    EJS: options.EJS,
    HTML: options.HTML,
    Handlebars: options.Handlebars,
    XML: options.XML,
    SVG: options.SVG,
    Spacebars: options.Spacebars,
    JSX: options.JSX,
    JavaScript: options.JavaScript,
    Java: options.Java,
    CSS: options.CSS,
    "C#": options[ "C#" ],
    SCSS: options.SCSS,
    Sass: options.Sass,
    JSON: options.JSON,
    "Titanium Style Sheets": options[ "Titanium Style Sheets" ],
    TypeScript: options.TypeScript,
    Twig: options.Twig,
    Less: options.Less,
    Swig: options.Swig,
    Visualforce: options.Visualforce,
    Riot: options.Riot,
    XTemplate: options.XTemplate
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
        mode: "beautify"
      });
      const result = prettydiff(args);
      return resolve(result);
    }) as any;
  }
};

export default beautifier;
