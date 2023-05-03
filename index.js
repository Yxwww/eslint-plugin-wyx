module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  overrides: [
    {
      extends: ["xo-typescript"],
      files: ["*.ts", "*.tsx"],
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "no-console": ["error", { allow: ["warn", "error"] }],
  },
  extends: ["xo", "prettier"],
};
