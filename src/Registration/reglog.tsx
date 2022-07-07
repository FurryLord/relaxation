import React from 'react'
import ReactDOM from 'react-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'


import CSS from "csstype";
import Login from './components/login.component'
import SignUp from './components/signup.component'
import { resolve } from 'node:path/win32';

export function Registration() {

  var xhr = new XMLHttpRequest();

let data = {
    "type": 'registrtion',
    "name": "egor",
    "surname": "lebedev",
    "email": "egor28476@gmail.com",
    "password": "12343211",
}

xhr.open('POST', 'http://localhost:1337', true);
xhr.setRequestHeader("Content-type", "application/json")
xhr.send(JSON.stringify(data));
xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 201)) {
        alert("User is cool");
    }
    else if (xhr.status == 403) {
        alert("User already exist");
    }
    else {
        console.log('fuck you!')
    }

}
  const navigate = useNavigate();
  const body: CSS.Properties = {
    backgroundColor: '#FEE9C6',
    /* Size */
    minHeight: '100vh',
    /* Display */
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',

    margin: '0',
    padding: '0'
};
const nav: CSS.Properties = {
  backgroundColor: '#FEE9C6',
  /* Size */
  width: '100%',
  height: 'fit-content',

  /* Display */
  display: 'flex',
  flexDirection: 'row',
  alignContent: 'center',
  justifyContent: 'flex-start',
  alignItems: 'center',


  /* Others */
  borderBottom: '2px solid #000000',
}
const logoBox: CSS.Properties = {
  backgroundColor: '#FEE9C6',

  height: 'fit-content',
  /* Display */
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  flexWrap: 'nowrap',
 
}
const logoText: CSS.Properties = {
  backgroundColor: '#FEE9C6',
  color: '#000000',
  fontFamily: 'Parisienne',
  fontSize: '48px',

  /* Size */
  height: 'fit-content',
  width: 'fit-content',

  /* Display */
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  placeContent: 'center',
  flexDirection: 'row',
  flexWrap: 'nowrap',

  /* Others */
  margin: '0',
  marginLeft: '15px',
  padding: '0',
}
const login_button:CSS.Properties = {
    width:"10%",
    color: "black",
    border: "black solid 2px",
    margin:'0',
    marginLeft:'2%',
    fontFamily: 'Roboto',
    fontWeight: '400', 
    textAlign:'center',
    padding:'0.3%',
    fontSize:'larger',
    backgroundColor:'#FEE9C6',
}
const reg_button:CSS.Properties = {
  width:"10%",
  color: "white",
  border: "black solid 2px",
  margin:'0',
  marginLeft:'1%',
  backgroundColor:'black',
  fontFamily: 'Roboto',
  fontWeight: '400', 
  textAlign:'center',
  padding:'0.3%',
  fontSize:'larger',

}
const inner:CSS.Properties = {
  width:'100%',
  height:'100%'
}

const outer: CSS.Properties ={
  width:'25%',
  display:'flex',
  marginTop:'10%',
  height:'50em',
}

  return (
   <body style={body}>
        <header style={nav}>
          <div style={logoBox}>
              <button onClick={() => navigate('/')} style={logoText}>Relaxacion</button>
          </div>
          <button style={login_button} onClick={()=>navigate('/reglog')}> Sign in</button>
            <button style={reg_button} onClick={()=>navigate('/reglog/sign-up')}> Sign up</button>
    </header>
    
        <div style={outer} className="outer">
          <div style={inner} className="inner">
            <Login/>
         
         
        </div>
      </div>
      </body>
  )
 
}
