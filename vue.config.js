module.exports = {
  devServer: {
    port: 8989,
  },
  productionSourceMap: false,
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'TS、JSX学习示例'
        return args
      })
  }
}