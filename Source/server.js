/*
 * Module dependencies
 */
import { createServer } from "http";
// renderToStaticMarkup = muestra html como si no fuera creado por react
import { renderToString,  renderToStaticMarkup } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Layout from "./Pages/Components/Layout.jsx";
import Pages from "./Pages/Containers/Pages.jsx";
import React from "react";
import { IntlProvider } from "react-intl";
import messages from "./messages.json";




//==============================================================//

/**
 * Permite la creacion del servidor.
 *
 * @param ServerRequest  req => Peticion recivida.
 * @param ServerResponse res => Respuesta que manda el servidor.
 *
 * @return void.
 */
createServer( (req, res) => {

	const CTX  = {};
    const local = req.headers['accept-language'].indexOf("es") >= 0 ? "es" : "en";
	const HTML  = renderToString(<IntlProvider locale={local} messages={messages[local]}>
									<StaticRouter location={req.url} context={CTX}>
										<Pages/>
									</StaticRouter>
								</IntlProvider>);



	//Mandamos el encavezado para determinar que es un archivo tipo html
	res.setHeader("Content-type", "text/html");

	//sevalida que la url exista
	(CTX.url) ? res.writeHead(301, {Location : CTX.url}) : res.writeHead(404);

	//se manda la respuesta del servidor
	res.write(renderToStaticMarkup(<Layout content={HTML} title="Aplicacion" />));
	res.end();

}).listen(81, (error) =>(error) ? console.log(error) : console.log("El servidor esta montado 81 :)"));
