const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([
  [
    {
      reactStrictMode: false,
      exportPathMap: function () {
        return {
          // Public Pages
          '/': { page: '/' },
        }
      },
    },
  ],
])
