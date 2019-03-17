import {
  Beautifier,
  Language,
  BeautifierBeautifyData,
  DependencyType,
  NodeDependency,
} from "unibeautify";
import * as readPkgUp from "read-pkg-up";
import options from "./options";
let application: any = {};
const { pkg } = readPkgUp.sync({ cwd: __dirname });
const fixType = (ops: any, defaults: any): void => {
  // Forcefully overwrites option settings if a wrong data type is used. This
  // solves a lot of application stability problems at no cost to the user
  // interface because the chosen option would likely not have worked anyways.
  const keys: string[] = Object.keys(ops);
  let index: number = keys.length;
  do {
    index = index - 1;
    if (
      typeof ops[keys[index]] !== typeof defaults[keys[index]] &&
      defaults[keys[index]] !== undefined
    ) {
      ops[keys[index]] = defaults[keys[index]];
    }
  } while (index > 0);
};
const beautifier: Beautifier = {
  name: "Pretty Diff",
  package: pkg,
  dependencies: [
    {
      type: DependencyType.Node,
      name: "PrettyDiff",
      package: "prettydiff",
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
      application = prettydiff;

      let lang: string = "auto";
      let lexer: string = "auto";
      let auto_lang: [string, string, string] = ["", "", ""];

      switch (language.name) {
        case "EJS":
        case "Twig":
          lang = "ejs";
          lexer = "markup";
          break;
        case "HTML+ERB":
          lang = "html_ruby";
          lexer = "markup";
          break;
        case "Handlebars":
        case "Mustache":
        case "Spacebars":
        case "Swig":
        case "Riot.js":
        case "XTemplate":
          lang = "handlebars";
          lexer = "markup";
          break;
        case "SGML":
        case "XML":
        case "Visualforce":
        case "SVG":
          lang = "xml";
          lexer = "markup";
          break;
        case "HTML":
        case "Coldfusion":
          lang = "html";
          lexer = "markup";
          break;
        case "JavaScript":
          lang = "javascript";
          lexer = "script";
          break;
        case "Java":
          lang = "java";
          lexer = "script";
          break;
        case "JSON":
        case "JSON5":
          lang = "json";
          lexer = "script";
          break;
        case "JSX":
          lang = "jsx";
          lexer = "script";
          break;
        // case "JSTL":   lang = "jsp";   break;
        case "C#":
          lang = "cs";
          lexer = "script";
          break;
        case "CSS":
          lang = "css";
          lexer = "style";
          break;
        case "Less":
          lang = "less";
          lexer = "style";
          break;
        case "SCSS":
          lang = "scss";
          lexer = "style";
          break;
        case "Titanium Style Sheets":
          lang = "tss";
          lexer = "script";
          break;
        case "TypeScript":
          lang = "ts";
          lexer = "script";
          break;
        default:
          auto_lang = prettydiff.api.language.auto(text, "javascript");
          lang = auto_lang[0];
          lexer = auto_lang[1];
      }
      fixType(options, prettydiff.defaults);
      const args = Object.assign(prettydiff.defaults, options, {
        language: lang,
        lexer: lexer,
        mode: "beautify",
        source: text,
      });
      const result = prettydiff.mode(args);
      return resolve(result);
    }) as any;
  },
};
export { beautifier, fixType, application };
export default beautifier;
