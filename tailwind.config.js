module.exports = {
    future: {
        purgeLayersByDefault: true,
    },
    purge: {
        enabled: true,
        layeres: ['utilities'],
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
