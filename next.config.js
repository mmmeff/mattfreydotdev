const path = require('path');
const withTypescript = require('@zeit/next-typescript')
const ForkTSCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = withTypescript({

    webpack(config, options) {
        if (options.isServer) {
            config.plugins.push(new ForkTSCheckerWebpackPlugin({
                tsconfig: path.join(__dirname, 'tsconfig.json')
            }))
        }

        return config
    }
})
