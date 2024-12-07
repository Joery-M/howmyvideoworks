import pluginJs from '@eslint/js';
import pluginTailwind from 'eslint-plugin-tailwindcss';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginVue.configs['flat/essential'],
    ...pluginTailwind.configs['flat/recommended'],
    { files: ['**/*.vue'], languageOptions: { parserOptions: { parser: tseslint.parser } } }
];
