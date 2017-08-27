/*
 * Module dependencies
 */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Api from "../../Api.js";
import styles from "./Post.css";
import  { FormattedMessage } from "react-intl";

/**
 * Componente para listar posts
 *
 * @category   MyApp
 * @package    MyApp/Post
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
		this.state = {
						comments : [],
						loading  : true,
						user     : {}
					 };
	}//constructor

   //=====================================================//

	/**
	 * El componente esta cargaso y existe el dom
	 */
	async componentDidMount()
	{

		const [user, comments] = await Promise.all([(!this.props.user) ? this.Api.getSingleUser(this.props.userId) : this.props.user,
												    (!this.props.comments) ? this.Api.getCommentsPost(this.props.id) : this.props.comments]);

		this.setState({
						loading:false,
						user,
						comments
					  });
	}//componentDidMount


	//=====================================================//

	/**
	 * Permite renderizar el componente.
	 *
	 * @return React.Component.
	 */
	render()
	{
		return (
				   <article id = {`post-${this.props.id}`} >

						<section className={styles.post}>
							<h3 className={styles.title}>
								<Link to={`/post/${this.props.id}`}>
									{this.props.title}
								</Link>
							</h3>
							<section>
								<p>{this.props.body}</p>
							</section>
							<footer>
								{!this.state.loading && (
									<span>
										El usuario <Link to = {`/user/${this.state.user.id}`}>{this.state.user.name} </Link>
										&nbsp;tiene <FormattedMessage id="total" values={{numero: this.state.comments.length}}/>
									</span>
								)}
							</footer>
						</section>
				   </article>

			   );//return
	}//render

}//Post

Post.propTypes = {
					id     : PropTypes.number,
					userId : PropTypes.number,
					title  : PropTypes.string,
					body   : PropTypes.string
                 };




//Se realiza exportacion del component
export default Post;
