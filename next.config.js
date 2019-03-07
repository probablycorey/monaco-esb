const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin")

module.exports =  {
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    })

    config.output.globalObject = 'self'

    config.plugins.push(new MonacoWebpackPlugin())
    console.log(JSON.stringify(config, null, 2))
    return config
  }
}
