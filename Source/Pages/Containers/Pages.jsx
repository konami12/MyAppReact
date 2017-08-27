/*
 * Module dependencies
 */
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Error404 from "./Error404.jsx";
import Home from "./Home.jsx";
import Post from "./Post.jsx";
import Profile from "./Profile.jsx";
import HeaderApp from "../../Shared/Containers/Header.jsx";

/**
 * Componente Listado de paginas
 *
 * @category   MyApp
 * @package    MyApp/Source
 * @subpackage Containers
 *
 */
class Pages extends Component
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
					<main className="application">
 					    <HeaderApp />
						<Switch>
							{/*HomePage*/}
							<Route component = {Home} exact path="/" />
							{/*Articulos*/}
							<Route component = {Post} exact path="/post/:id" />
							{/*Usuario*/}
							<Route component = {Profile} exact path="/user/:id" />
							{/*Pagin de error 404*/}
							<Route component = {Error404} />
						</Switch>
					</main>
			   );//return
	}//render

}//Pages

//Se realiza exportacion del component
export default Pages;
