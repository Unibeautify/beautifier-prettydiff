'use strict';
const prettydiff = require('prettydiff');
const wrapBeautifier = require('unibeautify-beautifier').wrapBeautifier;
const pkg = require('../package.json');

const Beautifier = {
  name: 'Pretty Diff',
  link: "https://github.com/prettydiff/prettydiff",
  options: {
    _: {
      inchar: [
        ["indent_with_tabs", "indent_char"], function(options) {
          if (options.indent_with_tabs === true) {
            return "\t";
          } else {
            return options.indent_char;
          }
        }
      ],
      insize: [
        ["indent_with_tabs", "indent_size"], function(options) {
          if (options.indent_with_tabs === true) {
            return 1;
          } else {
            return options.indent_size;
          }
        }
      ],
      objsort: function(objsort) {
        return objsort || false;
      },
      preserve: [
        ['preserve_newlines'], function(options) {
          if (options.preserve_newlines === true) {
            return "all";
          } else {
            return "none";
          }
        }
      ],
      cssinsertlines: "newline_between_rules",
      comments: [
        ["indent_comments"], function(options) {
          if (options.indent_comments === false) {
            return "noindent";
          } else {
            return "indent";
          }
        }
      ],
      force: "force_indentation",
      quoteConvert: "convert_quotes",
      vertical: [
        ['align_assignments'], function(options) {
          if (options.align_assignments === true) {
            return "all";
          } else {
            return "none";
          }
        }
      ],
      wrap: "wrap_line_length",
      space: "space_after_anon_function",
      noleadzero: "no_lead_zero",
      endcomma: "end_with_comma",
      methodchain: [
        ['break_chained_methods'], function(options) {
          if (options.break_chained_methods === true) {
            return false;
          } else {
            return true;
          }
        }
      ],
      ternaryline: "preserve_ternary_lines"
    },
    CSV: true,
    Coldfusion: true,
    ERB: true,
    EJS: true,
    HTML: true,
    Handlebars: true,
    XML: true,
    SVG: true,
    Spacebars: true,
    JSX: true,
    JavaScript: true,
    CSS: true,
    SCSS: true,
    Sass: true,
    JSON: true,
    TSS: true,
    Twig: true,
    LESS: true,
    Swig: true,
    Visualforce: true,
    "Riot.js": true,
    XTemplate: true
  },
  beautify(data) {
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
      case "JSON":
        lang = "json";
        break;
      case "JSX":
        lang = "jsx";
        break;
      case "JSTL":
        lang = "jsp";
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
      default:
        lang = "auto";
    }
    const args = Object.assign({}, data.options, {
      source: data.text,
      lang: lang,
      mode: "beautify"
    });
    const output = prettydiff.api(args);
    const result = output[0];
    return Promise.resolve(result);
  }
};

const config = {};

module.exports = wrapBeautifier(pkg, Beautifier, config);