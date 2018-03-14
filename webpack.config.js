var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry:'./src/js/root.js',
	devtool: 'inline-source-map',
	module:{
		rules:[
			{
				test:/\.js?$/,
				exclude:path.resolve(__dirname,'./node_modules/'),
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
				use:[
					{loader:'style-loader'},
					{
						loader:'css-loader',
						// options:{
						// 	modules:true,
						// 	localIdentName:'[path][name]_[local]--[hash:base64:5]',
						// 	importLoaders:1
						// }
					}
				]
			}
		]
	},
	plugins:[

	],
	output:{
		path:__dirname+'/src/',
		filename:'bundle.js'
	}
}
