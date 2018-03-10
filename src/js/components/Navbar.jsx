import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div >
        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">React Timer</li>
              <li className="">
                <NavLink exact to="/" activeClassName="active-link">Timer</NavLink>
              </li>
              <li className="">
                <NavLink to="/countdown" activeClassName="active-link">Countdown</NavLink>
              </li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu">
              <h6 className='menu-text'>Created by
                <a href="http://Chaitya62.github.io" target="_blank">&nbsp;Chaitya Shah</a>
              </h6>
            </ul>

          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
