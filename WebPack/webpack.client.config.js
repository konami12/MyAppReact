const PATH = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");
module.exports = {
					//Punto de entrada
					entry  : "./source/Client.js",
					output : {
								//Archivo de dalida
								filename : "app.js",
								path     : PATH.resolve(__dirname, "../built/statics")
							 },
					module : {
                                /*rules : [
                                    {
                                        test :/\.jsx?$/,
                                        loader : "eslint-loader"
                                    }
                                ],*/
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
														    presets : ["es2016", "es2017", "react"],
														    plugins : ["transform-es2015-modules-commonjs"]
		 												  }
											},
      										{
      										  test: /\.css$/,
											  exclude: /node_modules/,
      										  use: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader?modules"})
      										}
									 	  ]
							},
					target : "web",
					plugins: [
                        new ExtractTextPlugin({ filename: '../statics/styles.css'})
                    ]
				 };
