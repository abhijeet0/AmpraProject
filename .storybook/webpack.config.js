const path = require("path");
module.exports = ({ config }) => {
  return {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.(ts|tsx)$/,
          use: [
            {
              loader: require.resolve("react-docgen-typescript-loader")
            }
          ]
        }
      ]
    },
    resolve: {
      ...config.resolve,
      extensions: [
        ...config.resolve.extensions,
        ".ts",
        ".tsx"
      ]
    }
  }
};