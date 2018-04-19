var webpack = require('webpack');
var path = require('path');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
// var cssExtract = new ExtractTextWebpackPlugin('css.css');

module.exports = {
	entry:{
		app:'./src/js/root.js'
		// vender:'React'
	},
	devServer: {
 		historyApiFallback: true
	},
	module:{
		rules:[
			{
				test:/\.js?$/,
				exclude:/(node_modules|bower_components)/,
				use:
				[
					{
						loader:'babel-loader',
						options:{
							presets:['es2015','react'],
							plugins:[
								'react-html-attrs',
								["import", { libraryName: "antd", style: "css" }]
							]
						}
					}
				]
				// loader:'babel-loader',
				// query:{
				// 	presets:['react','env']
				// }
			},
			{
				test:/\.css$/,
				use:ExtractTextWebpackPlugin.extract({
					use:'css-loader',
					fallback:'style-loader'
				})
			}
		]
	},
	optimization: {
	     splitChunks: {
	     chunks: "all", // 必须三选一： "initial" | "all"(默认就是all) | "async"
	     minSize: 0, // 最小尺寸，默认0
	     minChunks: 1, // 最小 chunk ，默认1
	     maxAsyncRequests: 1, // 最大异步请求数， 默认1
	     maxInitialRequests : 1, // 最大初始化请求书，默认1
	     cacheGroups:{ // 这里开始设置缓存的 chunks
	         priority: '0', // 缓存组优先级
	         vendor: { // key 为entry中定义的 入口名称
	             chunks: "initial", // 必须三选一： "initial" | "all" | "async"(默认就是异步)
	             test: /react|lodash/, // 正则规则验证，如果符合就提取 chunk
	             name: "vendor", // 要缓存的 分隔出来的 chunk 名称
	             minSize: 0,
	             minChunks: 1,
	             enforce: true,
	             maxAsyncRequests: 1, // 最大异步请求数， 默认1
	             maxInitialRequests : 1, // 最大初始化请求书，默认1
	             reuseExistingChunk: true // 可设置是否重用该chunk（查看源码没有发现默认值）
	        	 }
	     	}
 	 	}
 	},
 	plugins: [
 		new ExtractTextWebpackPlugin('css/style.css')
	],

	output:{
		path:__dirname+'/src/',
		filename:'bundle.js'
		// libraryTarget: "umd"
	}
}
