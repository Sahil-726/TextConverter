import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';


export default function Navbar(props) {

 
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className={`container-fluid  navbar-${props.abc} bg-${props.abc}`}>
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.text}</Link>
        </li>
       
        <li className="nav-item">
          <Link to="nav-link disabled" aria-disabled="true">.</Link>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-success" type="submit">Search</button>
      </form> */}
    </div>
    <div className={`form-check form-switch text-${props.abc==="dark"? "light":"dark"}`}>
  <input className="form-check-input mx-2 my-2" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.pqr}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >{props.abc==="dark"?"Enable Light Mode":"Enable Dark Mode"}</label>
{/* <div class="btn-group">

  <button type="button" class="btn btn-danger dropdown-toggle mx-3" data-bs-toggle="dropdown" aria-expanded="false">
    Dark Modes
  </button>
  <ul class="dropdown-menu">
    <li><a className="dropdown-item"href="/" >green</a></li>
    <li><a className="dropdown-item" href="/">Red</a></li>
    <li><a className="dropdown-item" href="/">Yellow</a></li>
    <li><a className="dropdown-item" href="/">Pink</a></li>
  </ul>

</div> */}
</div>
  </div>
</nav>
  )
}
Navbar.propTypes={title:PropTypes.string.isRequired,
                 text :PropTypes.string};

// Navbar.defaultProps={title:"Set title here",
//             text :"Mohan"
// }
