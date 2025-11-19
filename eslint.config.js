import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  {
    ignores: ["dist"],
  },
  ...tseslint.config({
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "react-refresh": reactRefresh,
    },
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
    },
  }),
];
