import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends(
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended"
  ),
  {
    rules: {
      // 🧠 Tắt những rule gây khó khăn trong quá trình dev
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], // chỉ cảnh báo
      "prefer-const": "warn", // chỉ cảnh báo
      "react-hooks/exhaustive-deps": "warn",
    },
  },
];
