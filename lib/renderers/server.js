import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';

import App from '../components/App';
import StateApi from '../components/StateApi';
import config from '../config';

const serverRender = async () => {
  // have to specify host:port since server -> server call
  const resp = await axios.get(`http://${config.host}:${config.port}/data`);
  const store = new StateApi(resp.data);

  // const initialData = {
  //   articles: api.getArticles(),
  //   authors: api.getAuthors(),
  // };

  // now just pass a store, so store takes the responsibility of these things
  // before: <App initialData={initialData} />

  return {
    initialMarkup: ReactDOMServer.renderToString(
      <App store={store} />
    ),
    initialData: resp.data,
  }

  // return ReactDOMServer.renderToString(
  //   <App initialData={initialData} />
  // );
};

export default serverRender;
