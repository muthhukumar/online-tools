module.exports = {
    future: {
        purgeLayersByDefault: true,
    },
    purge: {
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
