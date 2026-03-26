import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import importHelpersPlugin from "eslint-plugin-import-helpers";
import prettierPlugin from "eslint-plugin-prettier";

const eslintConfig = [
  ...nextVitals,
  ...nextTs,
  {
    plugins: {
      prettier: prettierPlugin,
      "import-helpers": importHelpersPlugin,
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/react-in-jsx-scope": "off",
      "prettier/prettier": "error",
      "import-helpers/order-imports": [
        "warn",
        {
          newlinesBetween: "always",
          groups: [
            ["/^react/", "/^next/", "/@next/"],
            "/components/",
            "/^module/",
            "/^@shared/",
            "/absolute/",
            ["parent", "sibling", "index"],
          ],
          alphabetize: { order: "asc", ignoreCase: true },
        },
      ],
    },
  },
];

export default eslintConfig;
