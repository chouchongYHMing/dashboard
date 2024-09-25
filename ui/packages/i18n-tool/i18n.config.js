module.exports = {
    entry: ['/Users/dingwenjiang/workspace/private/tmp/karmada-dashboard/ui/apps/dashboard/src'],
    // Files or subdirectories to be excluded from processing
    exclude: [
        'node_modules/**',
        'scripts/**',
        'dist/**',
        'vite.config.ts',
        'tailwind.config.js',
        'postcss.config.js',
        '**/*.d.ts',
        'src/utils/i18n.tsx',
    ],
    localesDir: "/Users/dingwenjiang/workspace/private/tmp/karmada-dashboard/ui/apps/dashboard/locales",// Path to the original Chinese locales file
    originLang: "zh-CN",
    targetLangs: ["en-US"], // Target language code, e.g., 'en' (English), 'de' (German), 'jp' (Japanese), etc.
    // [i18n keygen]
    prefixKey: '',
    keygenAlgorithm: 'md5',
    showOriginKey: true,
    // [i18n import config]
    i18nImport: "import i18nInstance from '@/utils/i18n';",
    i18nObject: 'i18nInstance',
    i18nMethod: 't',
    // [i18n translate provider]
    translate: {
        type: 'baidu',
        appid: '20240426002035431',
        model: '',
        key: 'CBgSFH7dMNhyJ3gU2Vlj',
    },
};
