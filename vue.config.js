const path = require('path');

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src"),
                "@components": path.resolve(__dirname, "src/components"),
                "@views": path.resolve(__dirname, "src/views"),
                "@assets": path.resolve(__dirname, "src/assets")
            },
        },

    },
};
