import React, { Component } from "react"
import { isPropertySignature } from "typescript"
// @ts-ignore
import stylesReglog from "../Reglog.module.css"

export default class SignUpCom extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = { firstName: "", lastName: "", email: "", password: "" }
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
      type: "registratiom",
      name: `${firstName}`,
      surname: `${lastName}`,
      email: `${email}`,
      password: `${password}`,
    }
    fetch("https://relaxacion.egorleb.repl.co", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((response) => {
      if (response.status !== 201) {
        alert("User with this email already exist")
      } else {
        const { name } = response.json
        localStorage.setItem("name", name)
        window.location.href = "/#/reglog"
      }
    })
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit} className={stylesReglog.form}>
        {/* eslint-disable-next-line camelcase */}
        <p className={stylesReglog.Sign_up}>Register</p>

        <div>
          <input
            name='firstName'
            value={this.state.firstName}
            onChange={this.handleInputChange}
            className={stylesReglog.input}
            type='text'
            placeholder='First name'
          />
        </div>

        <div>
          <input
            name='lastName'
            value={this.state.lastName}
            onChange={this.handleInputChange}
            className={stylesReglog.input}
            type='text'
            placeholder='Last name'
          />
        </div>

        <div>
          <input
            name='email'
            value={this.state.email}
            onChange={this.handleInputChange}
            className={stylesReglog.input}
            type='email'
            placeholder='Enter email'
          />
        </div>

        <div>
          <input
            name='password'
            value={this.state.password}
            onChange={this.handleInputChange}
            className={stylesReglog.input}
            type='password'
            placeholder='Enter password'
          />
        </div>

        <button className={stylesReglog.enter} type='submit'>
          Register
        </button>
      </form>
    )
  }
}
