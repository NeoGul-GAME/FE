/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: ["selector"],
    theme: {
        extend: {
            keyframes: {
                "bounce-rotate": {
                    "0%, 100%": {
                        transform: "translateY(-0.8rem) rotate(-2deg)",
                        animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)"
                    },
                    "25%": {
                        transform: "translateY(-0.2rem) rotate(2deg)",
                        animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)"
                    },
                    "50%": {
                        transform: "translateY(0rem) rotate(2deg)",
                        animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)"
                    }
                }
            },
            animation: {
                "bounce-rotate": "bounce-rotate 2s infinite"
            }
        }
    },
    plugins: []
};
