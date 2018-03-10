import React from 'react';
import ReactDOM from 'react-dom';
import {Route, HashRouter, IndexRoute} from 'react-router-dom';
import App from './components/App';

// load foundation-sites

//require('foundation-sites/dist/css/foundation.min.css');
require('applicationStyles/app.scss');

$(document).foundation();

ReactDOM.render(
  <HashRouter>
  <div>
    <App/>
  </div>
</HashRouter>, document.getElementById('app'));
