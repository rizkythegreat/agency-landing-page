/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': [
                    '"Open Sans"',
                    'Arial',
                    'sans-serif',
                    ... defaultTheme.fontFamily.sans
                ]
            },
            colors: {
                'primary': '#2F6B4F',
                'black': '#2A2C3D',
                'gray': '#D9D9D9',
                'white': '#FFFFFF'
            }
        }
    },
    plugins: []
}
