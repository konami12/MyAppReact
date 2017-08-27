/*
 * Module dependencies
 */
import React, { Component } from "react";
import Api from "../../Api.js";
import Post from "../../post/containers/Post.jsx";
import Loading from "../../shared/containers/Loading.jsx";
import styles from "./Pages.css";
import  { FormattedMessage } from "react-intl";

/**
 * Componente Home
 *
 * @category   MyApp
 * @package    MyApp\Source
 * @subpackage Containers
 *
 */
class Home extends Component
{
	/**
	 * Constructor.
	 */
	constructor(props)
	{
		super(props);
		this.Api = new Api();
		this.state = {
						loading : true,
						page    : 1,
						posts   : []
					 };

		this.pageInfinity = this.pageInfinity.bind(this);
	}//constructor

   //=====================================================//

	/**
	 * El componente esta cargaso y existe el dom
	 */
	async componentDidMount()
	{
		const posts = await this.Api.getListPost(this.props.page);
		this.setState({
			loading : false,
			posts,
			page    : this.state.page + 1
		});
		window.addEventListener("scroll", this.pageInfinity);
	}

   //=====================================================//

	/**
	 * Carga infinita de contenido
	 */
	pageInfinity()
	{
		if(this.state.loading){ return null};

		let scroll   = document.body.scrollHeight - window.innerHeight;
		let mvScroll = window.scrollY;

		if (mvScroll === scroll)
		{
			this.setState({loading:true}, async () => {
				const newPost = await this.Api.getListPost(this.state.page);
				this.setState({loading :false,
							   posts   : this.state.posts.concat(newPost),
							   page    : this.state.page+1});
			});
		}
		else
		{
			return null;
		}
	}

	componentWillMount() {
		//window.removeEventListener("scroll", this.pageInfinity);
	}


   //=====================================================//

	/**
	 * Permite renderizar el componente.
	 *
	 * @return React.Component.
	 */
	render()
	{
		return (
					<section name="homepage" className={styles.section}>
						<h1><FormattedMessage id="home"/></h1>
						<section>
							{this.state.loading && (<Loading/>)}
							{this.state.posts.map(post => <Post key={post.id} {...post} />)}
						</section>
					</section>
			   );//return
	}//render

}//Home

//Se realiza exportacion del component
export default Home;
