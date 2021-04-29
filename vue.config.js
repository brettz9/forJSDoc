module.exports = {
  css: {
    sourceMap: true,
  },
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.module
      .rule('graphql')
      .test(/\.graphql$/)
      .use('graphql-tag/loader')
      .loader('graphql-tag/loader')
      .end();
  },
};
