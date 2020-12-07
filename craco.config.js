const CracoLessPlugin = require('craco-less');
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');
const path = require('path');

module.exports = {
  webpack:{
    configure: (webpackConfig, { env, paths }) => { 
      const wasmExtensionRegExp = /\.wasm$/;
      webpackConfig.resolve.extensions.push('.wasm');
      webpackConfig.module.rules.forEach(rule => {
        (rule.oneOf || []).forEach(oneOf => {
            if (oneOf.loader && oneOf.loader.indexOf('file-loader') >= 0) {
                oneOf.exclude.push(wasmExtensionRegExp);
            }
        });
      });
      webpackConfig.plugins = (webpackConfig.plugins || []).concat([
        new WasmPackPlugin({
          crateDirectory: path.resolve(__dirname, './src/hello-wasm/')
        })
      ]);
      return webpackConfig; 
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};