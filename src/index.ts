import {
  Beautifier,
  Language,
  BeautifierBeautifyData,
  DependencyType,
  NodeDependency,
} from "unibeautify";
import * as readPkgUp from "read-pkg-up";
import options from "./options";
const langdata = {
  lang: "auto",
  lexer: "auto"
};
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

      let auto_lang: [string, string, string] = ["", "", ""];

      switch (language.name) {
        case "EJS":
        case "Twig":
          langdata.lang = "ejs";
          langdata.lexer = "markup";
          break;
        case "HTML+ERB":
          langdata.lang = "html_ruby";
          langdata.lexer = "markup";
          break;
        case "Handlebars":
        case "Mustache":
        case "Spacebars":
        case "Swig":
        case "Riot.js":
        case "XTemplate":
          langdata.lang = "handlebars";
          langdata.lexer = "markup";
          break;
        case "SGML":
        case "XML":
        case "Visualforce":
        case "SVG":
          langdata.lang = "xml";
          langdata.lexer = "markup";
          break;
        case "HTML":
        case "Coldfusion":
          langdata.lang = "html";
          langdata.lexer = "markup";
          break;
        case "JavaScript":
          langdata.lang = "javascript";
          langdata.lexer = "script";
          break;
        case "Java":
          langdata.lang = "java";
          langdata.lexer = "script";
          break;
        case "JSON":
        case "JSON5":
          langdata.lang = "json";
          langdata.lexer = "script";
          break;
        case "JSX":
          langdata.lang = "jsx";
          langdata.lexer = "script";
          break;
        // case "JSTL":   lang = "jsp";   break;
        case "C#":
          langdata.lang = "cs";
          langdata.lexer = "script";
          break;
        case "CSS":
          langdata.lang = "css";
          langdata.lexer = "style";
          break;
        case "Less":
          langdata.lang = "less";
          langdata.lexer = "style";
          break;
        case "SCSS":
          langdata.lang = "scss";
          langdata.lexer = "style";
          break;
        case "Titanium Style Sheets":
          langdata.lang = "tss";
          langdata.lexer = "script";
          break;
        case "TypeScript":
          langdata.lang = "ts";
          langdata.lexer = "script";
          break;
        default:
          auto_lang = prettydiff.api.language.auto(text, "javascript");
          langdata.lang = auto_lang[0];
          langdata.lexer = auto_lang[1];
      }
      fixType(options, prettydiff.defaults);
      const args = Object.assign(prettydiff.defaults, options, {
        language: langdata.lang,
        lexer: langdata.lexer,
        mode: "beautify",
        source: text,
      });
      const result = prettydiff.mode(args);
      return resolve(result);
    }) as any;
  },
};
export { beautifier, fixType, langdata };
export default beautifier;
