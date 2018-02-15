import { BeautifierOptions, OptionValues } from "unibeautify";

const commonOptions = {
  comments: [
    ["indent_comments"],
    (options: OptionValues): string => {
      if (options.indent_comments === false) {
        return "noindent";
      } else {
        return "indent";
      }
    }
  ],
  cssinsertlines: "newline_between_rules",
  endcomma: "end_with_comma",
  force: "force_indentation",
  inchar: [
    ["indent_with_tabs", "indent_char"],
    (options: OptionValues): string | undefined => {
      if (options.indent_with_tabs === true) {
        return "\t";
      } else {
        return options.indent_char;
      }
    }
  ],
  insize: [
    ["indent_with_tabs", "indent_size"],
    (options: OptionValues): number | undefined => {
      if (options.indent_with_tabs === true) {
        return 1;
      } else {
        return options.indent_size;
      }
    }
  ],
  methodchain: [
    ["break_chained_methods"],
    (options: OptionValues): boolean => {
      if (options.break_chained_methods === true) {
        return false;
      } else {
        return true;
      }
    }
  ],
  noleadzero: "no_leading_zero",
  preserve: [
    ["preserve_newlines"],
    (options: OptionValues): string => {
      if (options.preserve_newlines === true) {
        return "all";
      } else {
        return "none";
      }
    }
  ],
  quoteConvert: "quotes",
  space: "space_after_anon_function",
  ternaryline: [
    ["multiline_ternary"],
    (options: OptionValues): boolean | undefined => {
      switch (options.multiline_ternary) {
        case "always":
          return false;
        case "never":
          return true;
        default:
          return undefined;
      }
    }
  ],
  vertical: [
    ["align_assignments"],
    (options: OptionValues): string => {
      if (options.align_assignments === true) {
        return "all";
      } else {
        return "none";
      }
    }
  ],
  wrap: "wrap_line_length"
};

const options = {
  "C#": {
    ...commonOptions
  },
  ColdFusion: {
    ...commonOptions
  },
  CSS: {
    ...commonOptions
  },
  CSV: {
    ...commonOptions
  },
  EJS: {
    ...commonOptions
  },
  Handlebars: {
    ...commonOptions
  },
  HTML: {
    ...commonOptions
  },
  "HTML+ERB": {
    ...commonOptions
  },
  Less: {
    ...commonOptions
  },
  Java: {
    ...commonOptions
  },
  JavaScript: {
    ...commonOptions
  },
  JSON: {
    ...commonOptions
  },
  JSX: {
    ...commonOptions
  },
  Riot: {
    ...commonOptions
  },
  Sass: {
    ...commonOptions
  },
  SCSS: {
    ...commonOptions
  },
  Spacebars: {
    ...commonOptions
  },
  SVG: {
    ...commonOptions
  },  
  Swig: {
    ...commonOptions
  },
  "Titanium Style Sheets": {
    ...commonOptions
  },
  Twig: {
    ...commonOptions
  },
  TypeScript: {
    ...commonOptions
  },
  Visualforce: {
    ...commonOptions
  },
  XML: {
    ...commonOptions
  },
  XTemplate: {
    ...commonOptions
  }
};

export default options;