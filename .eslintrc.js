module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base", "prettier", "plugin:node"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "linebreak-style": 0,
    "no-console": "off",
    "prettier/prettier": "error",
    "func-names": "off",
    "object-shorthadnd": "off",
    "cass-methods-use-this": "off",
    "single-quote": false,
  },
}
