/*
 * Module dependencies
 */
import React, { Component }from "react";
import { render as ReactDOMRender} from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Pages from "./Pages/Containers/Pages.jsx";
import { addLocaleData, IntlProvider } from "react-intl";
import ES from "react-intl/locale-data/es";
import EN from "react-intl/locale-data/en";
import messages from "./messages.json";


/**
 * Clase cliente.
 *
 * @category   MyApp
 * @package    MyApp/Source
 */
class Client extends Component
{
	render()
	{

		addLocaleData([...ES, ...EN]);
		const local = (navigator.languages.indexOf("es") >= 0) ? "es" : "en";

		return (
					<IntlProvider locale={local} messages={messages[local]}>
			       		<BrowserRouter>
			       		    <Pages />
			       		</BrowserRouter>
					</IntlProvider>
			   );
	}
}

ReactDOMRender(<Client />, document.getElementById("render-target"));
