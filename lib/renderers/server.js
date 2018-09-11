// server-side rendering

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';

import StateApi from 'state-api';
import config from 'config';

import App from 'components/App';

const serverRender = async () => {

  // exactly as App's componentDidMount() except
  // the server-side absolute URL
  const resp = await axios.get(`http://${config.host}:${config.port}/data`);
  // const api = new DataApi(resp.data);

  // have a store
  const store = new StateApi(resp.data);

  // const initialData = {
  //   articles: api.getArticles(),
  //   authors: api.getAuthors(),
  // };

  // expose initialMarkup for dom.js renderer
  return {
    initialMarkup: ReactDOMServer.renderToString(
        <App store={store} />
      ),
    initialData: resp.data,
  }
};

export default serverRender;