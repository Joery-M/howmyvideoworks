import { Config } from 'tailwindcss';
import primeui from 'tailwindcss-primeui';

export default {
    darkMode: 'selector',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
    theme: {
        extend: {}
    },
    plugins: [primeui]
} as Config;
