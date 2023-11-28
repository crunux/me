import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    darkMode: 'class',
    theme: {
        screens: {
            'movil': '375px',
            'table': '640px',
            'laptop': '1024px',
            'desktop': '1440px',
        },
        extend: {
            fontFamily: {
                ubuntu: ['Ubuntu', 'sans-serif'],
                bungee: ['Bungee', 'sans-serif'],
                nunito: ['Nunito', 'sans-serif'],
            }
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
