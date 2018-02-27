//initial content is needed if browser JS is turned off. And this also helps with SEO

import axios from 'axios';
import React from 'react';
import ReactDOMServer from 'react-dom/server'; //https://reactjs.org/docs/react-dom-server.html;
import App  from '../components/App';
import StateApi from '../stateApi';
import config from '../config';

const serverRender = async () => {
    const rawData = await axios.get(`http://${config.host}:${config.port}/data`); 
    const store = new StateApi(rawData.data);
    
    // const initialData = {
    //     articles:api.getArticles(),
    //     authors:api.getAuthors()
    // };

    return {
        initialData: rawData.data,
        initialMarkup:ReactDOMServer.renderToString(
                <App store={store}/> )
     };
   
};

export default serverRender;
