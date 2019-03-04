module.exports = {
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: 'http://php:8080/api/v1'
    // proxy: {
    //   '/api/v1': {
    //     target: 'http://localhost'
    //   }
    // }
  }
}
