import type { Config } from 'tailwindcss';
import Typography from '@tailwindcss/typography';

export default {
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
                primary: 'oklch(0.72 0.12 195)',
                'primary-foreground': 'oklch(0.15 0.02 255)',
                secondary: 'oklch(0.25 0.01 255)',
                'secondary-foreground': 'oklch(0.85 0 0)',
                muted: 'oklch(0.24 0.01 255)',
                'muted-foreground': 'oklch(0.6 0.01 255)',
                background: 'oklch(0.18 0.01 255)',
                foreground: 'oklch(0.93 0 0)',
                card: 'oklch(0.21 0.01 255)',
                'card-foreground': 'oklch(0.93 0 0)',
                popover: 'oklch(0.21 0.01 255)',
                'popover-foreground': 'oklch(0.93 0 0)',
                accent: 'oklch(0.72 0.12 195)',
                'accent-foreground': 'oklch(0.15 0.02 255)',
                destructive: 'oklch(0.577 0.245 27.325)',
                'destructive-foreground': 'oklch(0.577 0.245 27.325)',
                border: 'oklch(0.3 0.015 255)',
                input: 'oklch(0.3 0.015 255)',
                ring: 'oklch(0.72 0.12 195)',
                'chart-1': 'oklch(0.72 0.12 195)',
                'chart-2': 'oklch(0.6 0.118 184.704)',
                'chart-3': 'oklch(0.398 0.07 227.392)',
                'chart-4': 'oklch(0.828 0.189 84.429)',
                'chart-5': 'oklch(0.769 0.188 70.08)',
                radius: '0.5rem',
                sidebar: 'oklch(0.16 0.01 255)',
                'sidebar-foreground': 'oklch(0.93 0 0)',
                'sidebar-primary': 'oklch(0.72 0.12 195)',
                'sidebar-primary-foreground': 'oklch(0.15 0.02 255)',
                'sidebar-accent': 'oklch(0.25 0.01 255)',
                'sidebar-accent-foreground': 'oklch(0.93 0 0)',
                'sidebar-border': 'oklch(0.3 0.015 255)',
                'sidebar-ring': 'oklch(0.72 0.12 195)',
            },
        }
    },
    plugins: [
        Typography,
    ],
    content: [
        'app/components/**/*.vue',
        'app/layouts/**/*.vue',
        'app/pages/**/*.vue',
        'app/plugins/**/*.js',
        'nuxt.config.ts'
    ]
} satisfies Config;
