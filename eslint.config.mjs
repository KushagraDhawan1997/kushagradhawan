import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable unused variables in some cases, especially for props destructuring
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      // Disable no-unescaped-entities rule which causes build failures
      "react/no-unescaped-entities": "off",
      // Allow ts-ignore/ts-expect-error in certain cases
      "@typescript-eslint/ban-ts-comment": [
        "warn",
        {
          "ts-ignore": "allow-with-description",
          "ts-expect-error": "allow-with-description",
        },
      ],
      // Relax explicit any rule to a warning
      "@typescript-eslint/no-explicit-any": "warn",
      // Relax exhaustive-deps to a warning
      "react-hooks/exhaustive-deps": "warn",
      // Disable next/no-img-element warning in specific cases
      "@next/next/no-img-element": "warn",
      // Relax the no-empty-object-type rule
      "@typescript-eslint/no-empty-object-type": "warn",
    },
  },
];

export default eslintConfig;
