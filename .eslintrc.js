module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["react"],
  rules: { "react/prop-types": "off", "react/react-in-jsx-scope": "off" },
};
