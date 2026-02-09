/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#006ED0',
                    dark: '#005bb5',
                },
                darkblue: '#001B3D',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Montserrat', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
