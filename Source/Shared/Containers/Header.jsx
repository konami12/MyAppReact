/*
 * Module dependencies
 */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.css";
import  { FormattedMessage } from "react-intl";
/**
 * Componente para listar posts
 *
 * @category   MyApp
 * @package    MyApp/Shared
 * @subpackage Containers
 *
 */
class Header extends Component
{

	/**
	 * Permite renderizar el componente.
	 *
	 * @return React.Component.
	 */
	render()
	{
		return (
					<header className={styles.header}>
					      <h1 className={styles.title}>
					        <FormattedMessage id="header" />
					      </h1>

					      <nav role="navigation" className={styles.navigation}>
					        <Link to="/" className={styles.link}>
					          Home
					        </Link>
					        <a className={styles.link} href="https://platzi.com" target="_blank">
					          Platzi
					        </a>
					      </nav>
					</header>
			   );//return
	}//render

}//Header

//Se realiza exportacion del component
export default Header;
