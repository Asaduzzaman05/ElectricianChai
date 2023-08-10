import React from 'react'
import './Loginn.css'
import image1 from './image/img1.jpeg'
import { Link } from 'react-router-dom'
export default function Loginn() {

 
  return (
        
    <div>

  
     <div className="wrapper">
        <div className="logo">
            <img src={image1} alt="electrisian"/>
        </div>
        <div className="text-center mt-4 name">
            Electrisian Chai
        </div>
        <form className="p-3 mt-3">
            <div className="form-field d-flex align-items-center">
                <span className="far fa-user"></span>
                <input type="text" name="userName" id="userName" placeholder="Username"/>
            </div>
            <div className="form-field d-flex align-items-center">
                <span className="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Password"/>
            </div>
            <button className="btn mt-3">Login</button>
        </form>
        <div className="text-center fs-6">
            <a href="#">Forget password?</a> or <Link to="/Signupp">Sign up</Link>
        </div>
    </div>
    </div>
  )
}
