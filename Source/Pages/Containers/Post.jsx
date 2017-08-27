/*
 * Module dependencies
 */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Api from "../../Api.js";
import PostBody from "../../post/containers/Post.jsx";
import Loading from "../../shared/containers/Loading.jsx";
import Comment from "../../comments/containers/Comments.jsx";
import styles from "./Pages.css";
/**
 * Componente Post
 *
 * @category   MyApp
 * @package    MyApp/Source
 * @subpackage Containers
 * 
 */
class Post extends Component
{
	/**
	 * Constructor.
	 */
	constructor(props)
	{
		super(props);
		this.Api   = new Api();
		this.id    = props.match.params.id;
		this.state = {
						loading  : true,
						post     : {},
						comments : {}  
  					 };
	}//constructor

	//=====================================================//
	
	/**
	 * El componente esta cargaso y existe el dom
	 */
	async componentDidMount()
	{

		const [post, comments] = await Promise.all([this.Api.getSinglePost(this.id),
			                                        this.Api.getCommentsPost(this.id)]);

		this.setState ({
						loading : false,
						post,
						comments
					  });

	}

	//=====================================================//

	/**
	 * Permite renderizar el componente.
	 *
	 * @return React.Component.
	 */
	render()
	{
		let element = <Loading />;


		if (!this.state.loading)
		{
			element = (<section name="post_detalle" className={styles.section}>
							<PostBody  comments={this.state.comments} {...this.state.post} />
						  	
						  	<section className={styles.comentario}>
						  		{this.state.comments.map(coment => <Comment {...coment} />)}
						  	</section>

					   </section>);
		}

		return element;
	}//render

}//Post

//Se realiza exportacion del component
export default Post;