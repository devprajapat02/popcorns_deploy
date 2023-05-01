import React from 'react'
import './styles/Navbar.css'

export default function Navbar() {
  return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-black bg-black" style={{height: "83px"}}>
            <img src="https://app.pepcorns.com/assets/img/logo.png" height="52%" style={{marginLeft: "45px"}}></img>
            <span className="navbar-brand mb-1 text-light" style={{fontSize: "15px", marginLeft: "29%"}}>Startups</span>
            <span className="navbar-brand mb-1 mr-auto text-light" style={{fontSize: "15px", marginLeft: "4%"}}>Raise Funding</span>
            <span className="navbar-brand mb-1 text-light" style={{fontSize: "15px", marginLeft: "4%"}}>Learn</span>
            <button id="login_btn" className="btn mb-1" style={{fontSize: "15px", marginLeft: "26%"}}>Login</button>
            <button id="register_btn" className="btn mb-1" style={{fontSize: "15px", marginLeft: "3%",}}>Get Started</button>
        </nav>

    </div>
  )
}
