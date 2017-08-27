//se carga la configuracion del servidor
const SERVER = require("./WebPack/webpack.server.config.js");

//Se carga la configuracion del cliente
const CLIENT = require("./WebPack/webpack.client.config.js");

//se inicia la carga de configuracion.
module.exports = [SERVER, CLIENT];
