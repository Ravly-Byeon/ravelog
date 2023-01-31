/*const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})*/


const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  chainWebpack: config => {
    config.module.rules.delete('eslint')
    config.plugin('html').tap(args => {
      args[0].title = 'RaVELOG';
      return args
    })
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        pathRewrite: {
          '^/api':''
        }
      },
    },
  },
  outputDir: "../backend/public",
});

