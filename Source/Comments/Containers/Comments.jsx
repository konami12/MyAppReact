/*
 * Module dependencies
 */
import React, { Component } from "react";
import styles from "./Comments.css";

/**
 * Componente para listar posts
 *
 * @category   MyApp
 * @package    MyApp/Comments
 * @subpackage Containers
 * 
 */
class Comments extends Component
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
					<article className={styles.comentario}>
						<div>
							<h4>
								Comentario realizado por : 
								<a href={`mailto:${this.props.email}`}>{this.props.name}</a>
							</h4> 
						</div>
						<p>
							{this.props.body}
						</p>
					</article>
			   );//return
	}//render

}//Comments

//Se realiza exportacion del component
export default Comments;