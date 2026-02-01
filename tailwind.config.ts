import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#ffffff",
                surface: "#f9f9f9", // Light Grey/White
                text: "#202020", // Deep Charcoal
                primary: "#007CC7", // Electric Blue
                secondary: "#FFDD44", // Sunny Yellow
                accent: "#DE354C", // Fiery Red
                success: "#4CAF50", // Verdant Green
                muted: "#9ca3af",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                heading: ["var(--font-outfit)", "sans-serif"],
            },
            boxShadow: {
                "pop": "4px 4px 0px 0px #202020",
                "pop-hover": "6px 6px 0px 0px #202020",
                "pop-bold": "8px 8px 0px 0px #202020",
            },
            backgroundImage: {
                "grid-pattern": "linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)",
            },
            animation: {
                "bounce-slow": "bounce 3s infinite",
                "float": "float 6s ease-in-out infinite",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
            },
        },
    },
    plugins: [
        typography,
    ],
};
export default config;
