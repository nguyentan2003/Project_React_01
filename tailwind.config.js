/** @type {import('tailwindcss').Config} */
module.exports = {
    corePlugins: {
        preflight: true,
    },
    mode: "jit",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                Poppins: ["Poppins", "sans-serif"],
                Inter: ["Inter", "sans-serif"],
            },
            colors: {
                tim: "#2D3134",
                desc: "#676A6C",
            },
        },
    },
    plugins: [],
};
