module.exports = {
  transpileDependencies: true,
  configureWebpack:{
    resolve:{
      extensions:['.js', '.json', '.jsx', '.css','.vue','.html'],
      alias:{
        assets:"@/assets",
        common:"@/common",
        components:"@/components",
        network:"@/network",
        view:"@/view"
      }
    }
  }
  // devServer: {
  //   host: '0.0.0.0',
  //   port: 6103,
  //   client: {
  //     webSocketURL: 'ws://0.0.0.0:8080/ws',
  //   },
  //   headers: {
  //     'Access-Control-Allow-Origin': '*',
  //   }
  // }
}
