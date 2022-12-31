module.exports = {
  webpack: {
    // Extend webpack config
    configure: (webpackConfig) => {
      // Get resolve from webpack config
      let resolve = webpackConfig.resolve;
      // Add fallback to resolve
      resolve.fallback = resolve.fallback || {};
      // Add querystring-es3 as a fallback for webpack
      resolve.fallback.querystring = require.resolve("querystring-es3");
      // Add resolve back to webpack config
      webpackConfig.resolve = resolve;

      // Return webpack config
      return webpackConfig;
    }
  }
}