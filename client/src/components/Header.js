import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    const loggedIn = this.props.user;
    const logConfirm = loggedIn ? "Logout" : "Login"
    return (
      <nav className="nav-bar">
        <ul>

          <Link to='/'>
            <li className="nav-li">Home</li>
          </Link>

          <Link to='/api/events'>
            <li className="nav-li">Trips</li>
          </Link>

          <Link to='/api/events/new'>
            <li className="nav-li">Trip preferences</li>
          </Link>

          <Link to='/api/auth/login'>
            <li className="nav-li">{logConfirm}</li>
          </Link>

          <Link to='/api/auth/register'>
            <li className="nav-li">Register</li>
          </Link>

        </ul>
      </nav>
    )
  }
}
