const withTypescript = require('@zeit/next-typescript')
const ForkTSCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = withTypescript({
    webpack(config, options) {
        if (options.isServer) {
            config.plugins.push(new ForkTSCheckerWebpackPlugin())
        }
        return config
    }
})
