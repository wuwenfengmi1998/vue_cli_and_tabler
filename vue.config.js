const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{ //配置跨域
      '/api':{
          target:'https://api.lmve.net',
          ws:true,
          changeOrigin:true,//允许跨域
          secure:true,

      }
  }
} 
})
