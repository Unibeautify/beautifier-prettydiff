import {
  BeautifierOptions,
  OptionValues,
  BeautifierLanguageOptions,
  BeautifierLanguageOptionComplex,
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
    ["indent_style"],
    (options: OptionValues): string | undefined => {
      if (options.indent_style === "tab") {
        return "\t";
      } else if (options.indent_style === "space") {
        return " ";
      }
    },
  ],
  insize: "indent_size",
  methodchain: [
    ["break_chained_methods"],
    (options: OptionValues): boolean => {
      return !(options.break_chained_methods === true);
    },
  ],
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
  ...commonOptions,
  noleadzero: "no_leading_zero",
  cssinsertlines: "newline_between_rules",
};
const markupOptions: BeautifierLanguageOptions = {
  ...commonOptions,
  force_indent: "force_indentation",
};
const options = {
  Markup: markupOptions,
  Markdown: commonOptions,
  Script: commonOptions,
  Style: styleOptions,
  Common: commonOptions,
};
export default options;
