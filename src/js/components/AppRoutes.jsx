import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import createLocation from './createLocation';


const AppRoutes = (props) => {
  return (
    <div>
      <Route exact path='/' component={createLocation}/>		     
    </div>
  );
}

export default AppRoutes;
