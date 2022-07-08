import React, { Component } from 'react'
import CSS from 'csstype'
import { isPropertySignature } from 'typescript'

export default class SignUpCom extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = { firstName: '', lastName: '', email: '', password: '' }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(event: { target: any }) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault()

    const { firstName, lastName, email, password } = this.state
    // alert(`
    //   ____Your Details____\n
    //   Email : ${email_}
    //   Password : ${password_}

    // `)

    const xhr = new XMLHttpRequest()

    const user = {
      type: 'registratiom',
      name: `${firstName}`,
      surname: `${lastName}`,
      email: `${email}`,
      password: `${password}`,
    }
    fetch('https://relaxacion.egorleb.repl.co', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then((response) => {
      if (response.status !== 201) {
        alert('User with this email already exist')
      } else {
        const { name } = response.json
        localStorage.setItem('name', name)
        window.location.href = '/reglog'
      }
    })
  }

  // xhr.open('POST', 'https://relaxacion.egorleb.repl.co', true);
  // xhr.setRequestHeader("Content-type", "application/json")
  //  xhr.send(JSON.stringify(user));
  //  xhr.onreadystatechange = () => {
  //     if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 201)) {
  //         alert("User is cool");
  //     }
  //     else if (xhr.status == 403) {
  //         alert("User already exist");
  //     }

  // }
  // alert(xhr.readyState)

  // }

  render() {
    const input: CSS.Properties = {
      width: '90%',
      margin: '5%',
      backgroundColor: '#FFFFFF',
      border: '1px solid #000000',
      borderRadius: '60px',
    }
    const form: CSS.Properties = {
      border: '0.005em solid #000000',
      padding: '0',
      display: 'block',
      outline: '0',
      marginTop: '0',
      // width:'100%',
      /* Background */
      // backgroundColor: '#000',
    }
    const enter: CSS.Properties = {
      width: '46%',
      margin: '4%',
      backgroundColor: '#000000',
      textAlign: 'center',
      borderRadius: '60px',
      marginLeft: '27%',
      height: '3em',
      fontSize: 'large',
      padding: '0',
    }
    // eslint-disable-next-line camelcase
    const Log_in: CSS.Properties = {
      backgroundColor: '#EF4E32',
      textAlign: 'center',
      padding: '2%',
      margin: '0',
      fontFamily: 'Roboto Condensed',
      fontWeight: '1000',
      fontSize: 'x-large',
    }

    return (
      <form onSubmit={this.handleSubmit} style={form}>
        {/* eslint-disable-next-line camelcase */}
        <p style={Log_in}>Register</p>

        <div>
          <input
            name='firstName'
            value={this.state.firstName}
            onChange={this.handleInputChange}
            style={input}
            type='text'
            placeholder='First name'
          />
        </div>

        <div>
          <input
            name='lastName'
            value={this.state.lastName}
            onChange={this.handleInputChange}
            style={input}
            type='text'
            placeholder='Last name'
          />
        </div>

        <div>
          <input
            name='email'
            value={this.state.email}
            onChange={this.handleInputChange}
            style={input}
            type='email'
            placeholder='Enter email'
          />
        </div>

        <div>
          <input
            name='password'
            value={this.state.password}
            onChange={this.handleInputChange}
            style={input}
            type='password'
            placeholder='Enter password'
          />
        </div>

        <button style={enter} type='submit'>
          Register
        </button>
      </form>
    )
  }
}
