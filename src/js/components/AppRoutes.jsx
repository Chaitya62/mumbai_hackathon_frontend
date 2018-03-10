import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import createLocation from './createLocation';
import locationFloor from './locationFloor';

const AppRoutes = (props) => {
  return (
    <div>
      <Route exact path='/' component={locationFloor} />
      <Route path='/floor' component={createLocation}/>		     
    </div>
  );
}

export default AppRoutes;
