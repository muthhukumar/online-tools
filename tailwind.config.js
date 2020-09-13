module.exports = {
    future: {
        purgeLayersByDefault: true,
    },
    purge: {
        enable: true,
        content: [
            './pages/**/*.js',
            './components/**/*.js',
            './components/*.js',
            './pages/*.js',
        ],
    },
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [],
};
