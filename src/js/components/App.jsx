import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar.jsx';
import AppRoutes from './AppRoutes.jsx';

const App = (props) => {
  return (

    <div>
      <div className="grid-x">
        <div className="medium-3 large-4 cell"></div>
        <div className="cell large-4 small-12 medium-6 small-centered">
          <AppRoutes/>
        </div>
        <div className="medium-3 large-4 cell"></div>
      </div>

    </div>
  );
}

export default App;
