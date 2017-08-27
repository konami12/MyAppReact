const PATH = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
					//Punto de entrada
					entry  : "./source/server.js",
					output : {
								//Archivo de dalida
								filename : "index.js",
								path     : PATH.resolve(__dirname, '../built/server')
							 },
					module : {
                        rules : [
                            {
                                test :/\.jsx?$/,
                                loader : "eslint-loader"
                            }
                        ],
								//Opciones para la carga de archivos y configuraciones.
								loaders : [
											{
												test   : /\.json$/,
												loader : "json-loader"
											},
											{
												test    : /\.jsx?$/,
												loader  : "babel-loader",
												exclude : /(node_module)/,
												query   : {
														    presets: ["latest-minimal", "react"]
		 												  }
											},
      										{
      										  test: /\.css$/,
											  exclude: /node_modules/,
      										  use: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader?modules"})
      										}
									 	  ]
							},
					target : "node",
					plugins: [new ExtractTextPlugin({ filename: '../statics/styles.css'})]
				 };
