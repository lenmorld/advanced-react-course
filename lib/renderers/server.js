// server-side rendering

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';

import DataApi from 'state-api';
import config from 'config';

import App from 'components/App';

// must also fetch data in server-rendering
// must make <App /> server-side friendly

const serverRender = async () => {

  // exactly as App's componentDidMount() except
  // the server-side absolute URL
  const resp = await axios.get(`http://${config.host}:${config.port}/data`);
  const api = new DataApi(resp.data);

  const initialData = {
    articles: api.getArticles(),
    authors: api.getAuthors(),
  };

  // console.log(initialData);

  // expose initialMarkup for dom.js renderer
  return {
    initialMarkup: ReactDOMServer.renderToString(
        <App initialData={initialData} dog={"doggie"} />
      ),
    initialData,
  }
};

export default serverRender;