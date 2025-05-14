import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from './prettier.config.mjs';

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs,ts}'],
        plugins: {
            js,
            prettier,
        },
        rules: {
            ...js.configs.recommended.rules,
            'prettier/prettier': ['error', prettierConfig], // Enable Prettier as an ESLint rule
        },
        ignores: ['**/node_modules/**'],
    },
    {
        files: ['**/*.{js,mjs,cjs,ts}'],
        languageOptions: {
            globals: globals.node,
        },
    },
    // Add TypeScript ESLint recommended rules
    ...tseslint.configs.recommended,
]);
