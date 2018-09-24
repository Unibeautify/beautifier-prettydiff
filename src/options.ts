import { OptionValues, BeautifierLanguageOptions } from "unibeautify";
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
  preserve: "max_preserve_newlines",
  quoteConvert: "quotes",
  wrap: "wrap_line_length",
};
const styleOptions: BeautifierLanguageOptions = {
  ...commonOptions,
  noleadzero: "no_leading_zero",
  cssinsertlines: "newline_between_rules",
};
delete (styleOptions as any).comments;

const markupOptions: BeautifierLanguageOptions = {
  ...commonOptions,
  force_indent: "force_indentation",
};
const scriptOptions: BeautifierLanguageOptions = {
  ...commonOptions,
  endcomma: "end_with_comma",
  space: "space_after_anon_function",
  methodchain: [
    ["break_chained_methods"],
    (options: OptionValues): boolean => {
      return !(options.break_chained_methods === true);
    },
  ],
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
};

const scriptBasicOptions: BeautifierLanguageOptions = {
  ...scriptOptions,
};
delete scriptBasicOptions.space;
delete scriptBasicOptions.endcomma;

const json5Options: BeautifierLanguageOptions = {
  ...commonOptions,
};
delete json5Options.wrap;

const jsonOptions: BeautifierLanguageOptions = {
  ...json5Options,
};
delete jsonOptions.comments;

const options = {
  Markup: markupOptions,
  Markdown: commonOptions,
  Script: scriptOptions,
  Style: styleOptions,
  JSON: jsonOptions,
  JSON5: json5Options,
  Common: commonOptions,
  BasicScript: scriptBasicOptions,
};
export default options;
