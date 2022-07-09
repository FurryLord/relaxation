import React, { Component } from "react"
import CSS from "csstype"
import { isPropertySignature } from "typescript"
import { useNavigate } from "react-router-dom"
import path from "path"
// @ts-ignore
import stylesReglog from "../Reglog.module.css"

export default class Login extends Component<any, any> {
  constructor(props: any) {
    // const navigate = useNavigate();
    super(props)
    this.state = { email: "", password: "" }
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
    const { email, password } = this.state

    const xhr = new XMLHttpRequest()

    const user = {
      type: "authorization",
      email: `${email}`,
      password: `${password}`,
    }

    xhr.open("POST", "https://relaxacion.egorleb.repl.co", true)
    xhr.setRequestHeader("Content-type", "application/json")
    xhr.send(JSON.stringify(user))

    fetch("https://relaxacion.egorleb.repl.co", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((response) => {
      if (response.status !== 201) {
        alert("There is no user with this email")
      }

      response.json().then((data) => {
        console.log(data.name)
        const { name } = data
        localStorage.setItem("name", name)
        let saveURL = window.location.href
        console.log(saveURL)
        saveURL = saveURL.replace('reglog', 'home')
        console.log(saveURL)
        window.location.href = `${saveURL}`;
      })
    })
  }

  render() {
    return (
      <div className='col-6'>
        <form className={stylesReglog.form}>
          <h3 className={stylesReglog.Log_in}>Log in</h3>

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

          <div className='form-group'>
            <input
              name='password'
              value={this.state.password}
              onChange={this.handleInputChange}
              className={stylesReglog.input}
              type='password'
              placeholder='Enter password'
            />
          </div>

          <button className={stylesReglog.enter} type='submit' onClick={this.handleSubmit}>
            Enter
          </button>
        </form>
      </div>
    )
  }
}
