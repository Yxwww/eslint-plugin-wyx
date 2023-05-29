module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "no-console": ["error", { allow: ["warn", "error"] }],
  },
  root: false,
  extends: ["prettier"],

  // Keep TS config seperated from JS files.
  overrides: [
    {
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
      ],
      files: ["*.ts", "*.tsx"],
    },
  ],
};
