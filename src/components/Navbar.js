import React from 'react'
import { Link } from 'react-router-dom'




export default function Navbar() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand text-white d-flex justify-content-end" to="/">Electrician chai</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavAltMarkup">
      <div className="navbar-nav ">
        <Link className="nav-link text-white" aria-current="page" to="./">Home</Link>
        <Link className="nav-link  text-white" to="./Experts">Experts</Link>
        <Link className="nav-link text-white" to="./Feature">Features</Link>
        <Link className="nav-link  text-white" to='./'>Contact Us</Link>
      </div>
    </div>
    <Link to="./Loginn"><button type="button" class="btn btn-sm btn-primary ">Login</button></Link>
  </div>
</nav>
    </div>
  )
}
