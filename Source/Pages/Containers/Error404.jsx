/*
 * Module dependencies
 */
import React, { Component } from "react";
import { Link } from "react-router-dom";

/**
 * Componente Error
 *
 * @category   MyApp
 * @package    MyApp/Source
 * @subpackage Containers
 * 
 */
class Error404 extends Component
{
	/**
	 * Constructor.
	 */
	constructor(props)
	{
		super(props);
	}//constructor

	//=====================================================//

	/**
	 * Permite renderizar el componente.
	 *
	 * @return React.Component.
	 */
	render()
	{
		return (
					<section name="error_404">
						<h1>Error 404</h1>
						<Link to = "/">Home</Link>
					</section>
			   );//return
	}//render

}//Error404

//Se realiza exportacion del component
export default Error404;