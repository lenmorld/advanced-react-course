import React from 'react';
import ReactDOM from 'react-dom';

import App from '../components/App';
import StateApi from '../components/StateApi';


const store = new StateApi(window.initialData);

// we already fetched it from server, use that one instead of empty {}
// const initialData = {
//   articles: {},
//   authors: {},
// };

// use window.initialData from index.ejs

// ReactDOM.render(
//   <App initialData={window.initialData} />, document.getElementById('root')
// );

ReactDOM.render(
  <App store={store} />, document.getElementById('root')
);