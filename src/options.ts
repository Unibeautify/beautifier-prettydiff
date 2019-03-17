import { OptionValues, BeautifierLanguageOptions } from "unibeautify";
const commonOptions: BeautifierLanguageOptions = {
  comments: [
    ["indent_comments"],
    (options: OptionValues): boolean => {
      if (options.indent_comments === false) {
        return false;
      } else {
        return true;
      }
    },
  ],
  indent_char: [
    ["indent_style"],
    (options: OptionValues): string | undefined => {
      if (options.indent_style === "tab") {
        return "\t";
      } else if (options.indent_style === "space") {
        return " ";
      }
    },
  ],
  indent_size: "indent_size",
  preserve: "max_preserve_newlines",
  quote_convert: "quotes",
  wrap: "wrap_line_length",
};
const styleOptions: BeautifierLanguageOptions = {
  ...commonOptions,
  no_lead_zero: "no_leading_zero",
  css_insert_lines: "newline_between_rules",
};
delete (styleOptions as any).comments;

const markupOptions: BeautifierLanguageOptions = {
  ...commonOptions,
  force_indent: "force_indentation",
};
const scriptOptions: BeautifierLanguageOptions = {
  ...commonOptions,
  end_comma: [
    ["end_with_comma"],
    (options: OptionValues): string | undefined => {
      switch (options.end_with_comma) {
        case false:
          return "never";
        case true:
          return "always";
        default:
          return "none";
      }
    },
  ],
  space: "space_after_anon_function",
  method_chain: [
    ["break_chained_methods"],
    (options: OptionValues): number => {
      if (options.break_chained_methods === true) {
        return 3;
      }
      return 0;
    },
  ],
  ternary_line: [
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
    (options: OptionValues): boolean => {
      if (options.align_assignments === true) {
        return true;
      } else {
        return false;
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
