import React, { Component } from 'react'
import logo from "./Logo.png"
import name from "./Name.png"
import {Link} from 'react-router-dom'


export default class NavBar extends Component {
  render() {
    return (
      
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#F7F0DE"}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/general"><img src={logo} className="mr-2" width="40px" height="30" alt=""/><img src={name} className="mr-3"  width="170px" height="30" alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/general" style={{color:"#1C1B1B"}}><b>Home</b></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about" style={{color:"#1C1B1B"}}><b>About</b></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Contact" style={{color:"#1C1B1B"}}><b>Contact us</b></Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <b style={{color:"#1C1B1B"}}>Category</b>
          </a>
          <ul className="dropdown-menu" style={{color:"#1C1B1B"}}>
            <li><Link className="dropdown-item" to="/general">General</Link></li>
            <li><Link className="dropdown-item" to="/business">Business</Link></li>
            <li><Link className="dropdown-item" to="/sport">Sport   <span className="badge text-bg-danger"> Hot</span></Link></li>
            <li><Link className="dropdown-item" to="/entertainment">Entertaiment</Link></li>
            <li><Link className="dropdown-item" to="/health">Health</Link></li>
            <li><Link className="dropdown-item" to="/science">Science</Link></li>
            <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
          </ul>
        </li>
      </ul>      
    </div>
  </div>
</nav>
      
    )
  }
}
