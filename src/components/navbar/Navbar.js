import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render(){
    return(
      <div>
      <nav className="navbar justify-content-md-center navbar-expand-sm navbar-light bg-light">
  <ul className="navbar-nav">
    <li className="nav-item">
      <Link className="nav-link" to="/"><h2>HOME</h2></Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/about"><h2>ABOUT</h2></Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/beers"><h2>BEER</h2></Link>
    </li>
  </ul>
</nav>
      </div>
    );
  }
}
export default Navbar;
