import { defineConfig, presetUno, presetAttributify, presetIcons, presetTypography } from 'unocss';

export default defineConfig({
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
        presetTypography(),
    ],
    shortcuts: {
        'text-color': 'text-[#2d2e2e] dark:text-[#d9d9d9]',
        'text-color-i': 'text-[#2d2e2e] dark:text-white',
        'borde-color': 'border-[#2d2e2e] dark:border-[#d9d9d9]',
        'card-bg-color': 'bg-[#dfdede] dark:bg-[#4a4b4b]',
        'section-bg-color': 'bg-[#c5c5c5] dark:bg-[#2d2e2e]',
        "color-primary": "#40CEF7",
        'scrollbar-base': 'scrollbar scrollbar-rounded scrollbar-track-color-[#dfdede] dark:scrollbar-track-color-[#4a4b4b] scrollbar-thumb-color-[#4a4b4b] dark:scrollbar-thumb-color-[#dfdede]'
    },
})