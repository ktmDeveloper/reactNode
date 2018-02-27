//initial content is needed if browser JS is turned off. And this also helps with SEO

import axios from 'axios';
import React from 'react';
import ReactDOMServer from 'react-dom/server'; //https://reactjs.org/docs/react-dom-server.html;
import App  from '../components/App';
import DataApi from '../DataApi';
import config from '../config';

const serverRender = async () => {
    const rawData = await axios.get(`http://${config.host}:${config.port}/data`); 
    const api = new DataApi(rawData.data);
    const initialData = {
        articles:api.getArticles(),
        authors:api.getAuthors()
    };
    return {
        initialData,
        initialMarkup:ReactDOMServer.renderToString(
                <App initialData={initialData}/> )
     };
   
};

export default serverRender;
