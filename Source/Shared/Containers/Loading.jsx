/*
 * Module dependencies
 */
import React, { Component } from "react";
import  { FormattedMessage } from "react-intl";

/**
 * Componente para listar posts
 *
 * @category   MyApp
 * @package    MyApp/Shared
 * @subpackage Containers
 * 
 */
class Loading extends Component
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
					<h1>
						<FormattedMessage id="load"/>
					</h1>
			   );//return
	}//render

}//Loading

//Se realiza exportacion del component
export default Loading;