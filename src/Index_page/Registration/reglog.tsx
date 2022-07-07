import React from 'react'
import ReactDOM from 'react-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'



import Login from './components/login.component'
import SignUp from './components/signup.component'

export function Registration() {
  const navigate = useNavigate();
  

  return (
   
    <div className="App">
        <nav className="navbar navbar-expand-lg  fixed-top">
          <div className="container">
          
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                 <button onClick={()=>navigate('/reglog')}> Sign in</button>
                   
                 
                </li>
                <li className="nav-item">
                <button onClick={()=>navigate('/reglog/sign-up')}> Sign up</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="outer">
          <div className="inner">
            <Login/>
         
          </div>
        </div>
      </div>
     
  )
 
}

