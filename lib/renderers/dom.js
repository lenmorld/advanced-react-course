// client-side rendering

import React from 'react';
import ReactDOM from 'react-dom';

import StateApi from 'state-api';

import App from 'components/App';

const store = new StateApi(window.initialData);

// must get fetched data from server-side
// through exposed initialData from global window object
// with this, data is only fetched once, in window.object

ReactDOM.render(
  <App store={store} />, document.getElementById('root')
);
