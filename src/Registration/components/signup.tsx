import React, { Component } from 'react'
import CSS from 'csstype'
import ReactDOM from 'react-dom'
import { useNavigate } from 'react-router-dom'
import SignUpCom from './signup.component'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import backgroundRetro from '../../img/background.png'

// eslint-disable-next-line import/prefer-default-export
export function SignUp() {
  const navigate = useNavigate()
  const body: CSS.Properties = {
    /* Background */
    backgroundImage: `url(${backgroundRetro})`,
    backgroundBlendMode: 'soft-light',
    backgroundSize: 'cover',
    backgroundPosition: '0 50vh',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    borderWidth: 'none',
    borderStyle: 'none',
    borderColor: 'none',
    backgroundColor: '#FEEAC5',

    /* Size */
    minHeight: '100vh',
    /* Display */
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',

    margin: '0',
    padding: '0',
  }
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
  // eslint-disable-next-line camelcase
  const login_button: CSS.Properties = {
    width: '10%',
    color: 'black',
    border: 'black solid 2px',
    margin: '0',
    marginLeft: '2%',
    fontFamily: 'Roboto',
    fontWeight: '400',
    textAlign: 'center',
    padding: '0.3%',
    fontSize: 'larger',
    backgroundColor: '#FEE9C6',
  }
  // eslint-disable-next-line camelcase
  const reg_button: CSS.Properties = {
    width: '10%',
    color: 'white',
    border: 'black solid 2px',
    margin: '0',
    marginLeft: '1%',
    backgroundColor: 'black',
    fontFamily: 'Roboto',
    fontWeight: '400',
    textAlign: 'center',
    padding: '0.3%',
    fontSize: 'larger',
  }
  const inner: CSS.Properties = {
    width: '100%',
    height: '100%',
  }

  const outer: CSS.Properties = {
    width: '25%',
    display: 'flex',
    marginTop: '10%',
    height: '50em',
    padding: '0',
    flex: 'none',
    order: '1',
    flexGrow: '0',
  }

  return (
    <body style={body}>
      <header style={nav}>
        <div style={logoBox}>
          {/* eslint-disable-next-line react/button-has-type */}
          <button onClick={() => navigate('/')} style={logoText}>
            Relaxacion
          </button>
        </div>
        {/* eslint-disable-next-line react/button-has-type,camelcase */}
        <button style={login_button} onClick={() => navigate('/reglog')}>
          {' '}
          Sign in
        </button>
        {/* eslint-disable-next-line camelcase,react/button-has-type */}
        <button style={reg_button} onClick={() => navigate('/reglog/sign-up')}>
          {' '}
          Sign up
        </button>
      </header>

      <div style={outer} className='outer'>
        <div style={inner} className='inner'>
          <SignUpCom />
        </div>
      </div>
    </body>
  )
}
// eslint-disable-next-line no-shadow, @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
function props(props: any, any: any) {
  throw new Error('Function not implemented.')
}

// eslint-disable-next-line no-shadow, @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
function constructor(props: (props: any, any: any) => void, any: any) {
  throw new Error('Function not implemented.')
}
