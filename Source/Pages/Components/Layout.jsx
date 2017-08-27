/*
 * Module dependencies
 */
import React,  { Component } from 'react';
import Header from "../../shared/containers/Header.jsx";

/**
 * Layout basico
 *
 * @category   MyApp
 * @package    MyApp\Source
 * @subpackage Components
 * 
 */
class Layout extends Component
{
    /**
     * Constructor.
     */
    constructor(props)
    {
        super(props);
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
                    <html lang="en">
                    <head>
                        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0"/>
                        <title>{this.props.title}</title>
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"/>
                        <link rel="stylesheet" href="http://localhost:82/styles.css"/>
                    </head>
                    <body>
                        <div id="render-target" dangerouslySetInnerHTML={{__html:this.props.content}}/>
                        <script src="http://localhost:82/app.js" /> 
                    </body>
                    </html>
               );
    }

}

//Se realiza exportacion del component
export default Layout;