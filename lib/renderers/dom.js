// client-side rendering

import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/App';

// const initialData = {
//   articles: {},
//   authors: {},
// };

// must get fetched data from server-side
// through exposed initialData from global window object

// with this, data is only fetched once, in window.object

ReactDOM.render(
  <App initialData={window.initialData} />, document.getElementById('root')
);
