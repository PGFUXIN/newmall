module.exports = {
  transpileDependencies: true,
  configureWebpack:{
    resolve:{
      extensions:['.js', '.json', '.jsx', '.css'],
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
