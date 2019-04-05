import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';

import App from '../components/App';
import DataApi from '../components/StateApi';
import config from '../config';

const serverRender = async () => {
  // have to specify host:port since server -> server call
  const resp = await axios.get(`http://${config.host}:${config.port}/data`);
  const api = new DataApi(resp.data);

  const initialData = {
    articles: api.getArticles(),
    authors: api.getAuthors(),
  };

  return ReactDOMServer.renderToString(
    <App initialData={initialData} />
  );
};

export default serverRender;
