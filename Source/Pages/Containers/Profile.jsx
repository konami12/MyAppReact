/*
 * Module dependencies
 */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Api from "../../Api.js";
import Post from "../../post/containers/Post.jsx";
import Loading from "../../shared/containers/Loading.jsx";
import styles from "./Pages.css";
/**
 * Componente Profile del usuario.
 *
 * @category   MyApp
 * @package    MyApp/Source
 * @subpackage Containers
 * 
 */
class Profile extends Component
{
	/**
	 * Constructor.
	 */
	constructor(props)
	{
		super(props);
		this.Api    = new Api();
		this.id     = props.match.params.id;
		this.state = {
						loading : true,
						posts   : [],
						user    : {}
					  };
	}//constructor

   //=====================================================//

	/**
	 * El componente esta cargaso y existe el dom
	 */
	async componentDidMount()
	{
		const [posts, user] = await Promise.all([this.Api.getUserPost(this.id),
												 this.Api.getSingleUser(this.id)]);
		this.setState({
			loading : false,
			posts,
			user 
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
		let element = <Loading />;

		if(!this.state.loading)
		{
			element = (
							<section name="profile" className={styles.section}>
								<h2>{this.state.user.name}</h2>
								<fieldset>
									<legend>Datos Basicos</legend>
									<div>
										<label>E-mail</label><br/>
										<input type="email" value={this.state.user.email} disabled/>
									</div>

									<div>
										<label>Username</label><br/>r
										<input type="text" value={this.state.user.username} disabled/>
									</div>

									<div>
										<label>Web Site</label><br/>
										<input type="text" value={this.state.user.website} disabled/>
									</div>

									<div>
										<label>Phone</label><br/>
										<input type="tel" value={this.state.user.phone} disabled/>
									</div>
								</fieldset>

								{this.state.user.address && (
								<fieldset>
									<legend>Direccion</legend>
									<div>
										<label>Calle</label><br/>
										<input type="text" value={this.state.user.address.street} disabled/>
									</div>
									<div>
										<label>Suite</label><br/>
										<input type="text" value={this.state.user.address.suite} disabled/>
									</div>
									<div>
										<label>Ciudad</label><br/>
										<input type="text" value={this.state.user.address.city} disabled/>
									</div>
									<div>
										<label>Codigo postal</label><br/>
										<input type="text" value={this.state.user.address.zipcode} disabled/>
									</div>

								</fieldset>
								)}
								<section>
									{this.state.posts.map(post => 
										<Post key={post.id} user={this.state.user} {...post}/>
									)}
								</section>
							</section>

					  );
		}


		return element;
	}//render

}//Profile

//Se realiza exportacion del component
export default Profile;