import {BeautifierOptions, OptionValues} from "unibeautify";
const commonOptions = {
  inchar: [
    [
      "indent_with_tabs", "indent_char"
    ],
    (options : OptionValues): string | undefined => {
      if (options.indent_with_tabs === true) {
        return "\t";
      } else {
        return options.indent_char;
      }
    }
  ],
  insize: [
    [
      "indent_with_tabs", "indent_size"
    ],
    (options : OptionValues): number | undefined => {
      if (options.indent_with_tabs === true) {
        return 1;
      } else {
        return options.indent_size;
      }
    }
  ],
  preserve: [
    ["preserve_newlines"],
    (options : OptionValues): string => {
      if (options.preserve_newlines === true) {
        return "all";
      } else {
        return "none";
      }
    }
  ],
  cssinsertlines: "newline_between_rules",
  comments: [
    ["indent_comments"],
    (options : OptionValues): string => {
      if (options.indent_comments === false) {
        return "noindent";
      } else {
        return "indent";
      }
    }
  ],
  force: "force_indentation",
  quoteConvert: "quotes",
  vertical: [
    ["align_assignments"],
    (options : OptionValues): string => {
      if (options.align_assignments === true) {
        return "all";
      } else {
        return "none";
      }
    }
  ],
  wrap: "wrap_line_length",
  space: "space_after_anon_function",
  noleadzero: "no_leading_zero",
  endcomma: "end_with_comma",
  methodchain: [
    ["break_chained_methods"],
    (options : OptionValues): boolean => {
      if (options.break_chained_methods === true) {
        return false;
      } else {
        return true;
      }
    }
  ],
  ternaryline: [
    ["multiline_ternary"],
    (options : OptionValues): boolean | undefined => {
      switch (options.multiline_ternary) {
        case "always":
          return false;
        case "never":
          return true;
        default:
          return undefined;
      }
    }
  ]
};
const options = {
  CSV: true,
  ColdFusion: true,
  "HTML+ERB": true,
  EJS: true,
  HTML: true,
  Handlebars: true,
  XML: true,
  SVG: true,
  Spacebars: true,
  JSX: true,
  JavaScript: {
    ...commonOptions
  },
  Java: true,
  CSS: true,
  "C#": true,
  SCSS: true,
  Sass: true,
  JSON: true,
  "Titanium Style Sheets": true,
  TypeScript: true,
  Twig: true,
  Less: true,
  Swig: true,
  Visualforce: true,
  Riot: true,
  XTemplate: true
};
export default options;