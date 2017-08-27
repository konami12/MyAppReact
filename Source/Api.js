/*
 * Module dependencies
 */
import fetch from "isomorphic-fetch";

//url base de la api
const PATH = "https://jsonplaceholder.typicode.com";

/**
 * Clase par consumir el api.
 *
 * @category   MyApp
 * @package    MyApp/Source
 */
class Api
{
	/**
	 * Permite consequir los comentarios de un post.
	 *
	 * @param integer idPost  (Optional) Id del post.
	 *
	 * @return json.
	 */
	async getCommentsPost(idPost = 1)
	{
		let response = await fetch (`${PATH}/post/${idPost}/comments`);
		let data     = await response.json();
		return data;
	}//getCommentPost

	//==============================================//

	/**
	 * Permite manejar un paginado de post.
	 *
	 * @param integer page (Optional) Numero de la pagina.
	 *
	 * @return json.
	 */
	async getListPost(page = 1)
	{
		let response = await fetch (`${PATH}/posts?_page=${page}`);
		let data     = await response.json();
		return data;
	}//getListPost

	//==============================================//

	/**
	 * Permite consultar solo un post.
	 *
	 * @param integer idPost (Optional) Id del post que se desa consultar.
	 *
	 * @return json.
	 */
	async getSinglePost(idPost = 1)
	{
		let response = await fetch (`${PATH}/posts/${idPost}`);
		let data     = await response.json();
		return data;
	}//getSinglePost


	//==============================================//

	/**
	 * Permite consultar los post del usuario.
	 *
	 * @param integer idUser (Optional) Id del Usuario.
	 *
	 * @return json.
	 */
	async getUserPost(idUser = 1)
	{
		let response = await fetch (`${PATH}/posts?userId=${idUser}`);
		let data     = await response.json();
		return data;
	}//getSinglePost


	//==================== USER API =================//

	/**
	 * Consique los datos de un usuario.
	 *
	 * @param integer  (Optional) Id del usuario.
	 *
	 * @return json.
	 */
	async getSingleUser(idUser = 1)
	{
		let response = await fetch (`${PATH}/users/${idUser}`);
		let data     = await response.json();
		return data;
	}//getSingleUser

}//Api


//Se realiza exportacion del component
export default Api;
