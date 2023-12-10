import { defineConfig, presetUno, presetAttributify, presetIcons, presetTypography } from 'unocss';

export default defineConfig({
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
        presetTypography(),
    ]
})