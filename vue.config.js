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
}
