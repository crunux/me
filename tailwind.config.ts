import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                ubuntu: ['Ubuntu', 'sans-serif'],
                bungee: ['Bungee', 'sans-serif'],
                nunito: ['Nunito', 'sans-serif'],
            },
            colors: {
                // "color-primary": "oklch(0.72 0.12 195)",
                primary: "oklch(0.72 0.12 195)",
                "primary-foreground": "oklch(0.15 0.02 255)",
                secondary: "oklch(0.25 0.01 255)",
                "secondary-foreground": "oklch(0.85 0 0)",
                muted: "oklch(0.24 0.01 255)",
                "muted-foreground": "oklch(0.6 0.01 255)"
            },
        }
    },
    plugins: [],
    content: [
        'src/components/**/*.vue',
        'src/layouts/**/*.vue',
        'src/pages/**/*.vue',
        'src/plugins/**/*.js',
        'nuxt.config.js'
    ]
}
