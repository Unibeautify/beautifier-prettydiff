import {
  BeautifierOptions,
  OptionValues,
  BeautifierLanguageOptions,
} from "unibeautify";
const commonOptions: BeautifierLanguageOptions = {
  comments: [
    ["indent_comments"],
    (options: OptionValues): string => {
      if (options.indent_comments === false) {
        return "noindent";
      } else {
        return "indent";
      }
    },
  ],
  endcomma: "end_with_comma",
  inchar: [
    ["indent_with_tabs", "indent_char"],
    (options: OptionValues): string | undefined => {
      if (options.indent_with_tabs === true) {
        return "\t";
      } else {
        return options.indent_char;
      }
    },
  ],
  insize: [
    ["indent_with_tabs", "indent_size"],
    (options: OptionValues): number | undefined => {
      if (options.indent_with_tabs === true) {
        return 1;
      } else {
        return options.indent_size;
      }
    },
  ],
  methodchain: [
    ["break_chained_methods"],
    (options: OptionValues): boolean => {
      return !(options.break_chained_methods === true);
    },
  ],
  noleadzero: "no_leading_zero",
  preserve: "max_preserve_newlines",
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
    },
  ],
  vertical: [
    ["align_assignments"],
    (options: OptionValues): string => {
      if (options.align_assignments === true) {
        return "all";
      } else {
        return "none";
      }
    },
  ],
  wrap: "wrap_line_length",
};
const styleOptions: BeautifierLanguageOptions = {
  cssinsertlines: "newline_between_rules",
};
const markupOptions: BeautifierLanguageOptions = {
  force_indent: "force_indentation",
};
const options = {
  Markup: {
    ...commonOptions,
    ...markupOptions,
  },
  Markdown: {
    ...commonOptions,
  },
  Script: {
    ...commonOptions,
  },
  Style: {
    ...commonOptions,
    ...styleOptions,
  },
};
export default options;
