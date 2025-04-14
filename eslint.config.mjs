import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: { globals: globals.node },
  },
  {
    ignores: [
      'node_modules/',
      'backstop_data/engine_scripts/',
      'backstop_data/html_report/',
      'backstop_data/bitmaps_test/',
    ],
  },
]);
