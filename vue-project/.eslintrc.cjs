/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  plugins: ["headers"],
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2021,
    sourceType: "module",
  },
  overrides: [
    {
      files: [".eslintrc.cjs"],
      rules: {
        "@typescript-eslint/naming-convention": "off",
      },
    },
  ],
  extends: [
    "plugin:vue/vue3-essential",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier/skip-formatting",
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
  ],
  rules: {
    "no-unused-vars": ["warn", { args: "none", ignoreRestSiblings: true }],
    eqeqeq: ["error", "always"],
    curly: ["error", "all"],
    semi: ["error", "always"],
    quotes: ["error", "double"],
    indent: [
      "error",
      2,
      {
        SwitchCase: 1,
      },
    ],
    "vue/multi-word-component-names": "off",
    "vue/no-mutating-props": "error",
    "vue/require-default-prop": "off",
    "vue/html-indent": ["error", 2],
    "linebreak-style": ["warn", "unix"],
    "vue/max-attributes-per-line": [
      "warn",
      {
        singleline: {
          max: 10,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    "brace-style": ["warn", "1tbs", { allowSingleLine: true }],
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        selector: "variable",
        format: ["camelCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "variable",
        modifiers: ["const"],
        format: ["camelCase", "UPPER_CASE"],
        leadingUnderscore: "allow",
      },
      {
        selector: "function",
        format: ["camelCase"],
      },
      {
        selector: "parameter",
        format: ["camelCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "objectLiteralProperty",
        format: null,
      },
      {
        selector: "memberLike",
        modifiers: ["public"],
        format: ["camelCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "interface",
        format: ["PascalCase"],
      },
      {
        selector: "enum",
        format: ["PascalCase"],
      },
      {
        selector: "enumMember",
        format: ["PascalCase"],
      },
      {
        selector: "class",
        format: ["PascalCase"],
      },
      {
        selector: "typeAlias",
        format: ["PascalCase"],
      },
    ],
    "headers/header-format": [
      "warn",
      {
        source: "string",
        content: "@file",
        enableVueSupport: true,
        trailingNewlines: 2,
      },
    ],
    "vue/singleline-html-element-content-newline": "off",
  },
};
