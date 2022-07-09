import React, { Component } from "react"
import CSS from "csstype"
import ReactDOM from "react-dom"
import { useNavigate } from "react-router-dom"


import { useForm } from "react-hook-form"
import { usePrettyPrintedState } from "../usePrettyPrintedState"


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import stylesMain from "../../main.module.css"
// @ts-ignore
import stylesReglog from "../Reglog.module.css"

// eslint-disable-next-line import/prefer-default-export
export function SignUp() {
  const navigate = useNavigate()

  const [submitValue, setSubmitValue] = usePrettyPrintedState()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  })
  const onSubmit = (data: any) => {
    data.type = "registration";
    console.log((data))
    localStorage.setItem("name", data.name)
    fetch("https://relaxacion.egorleb.repl.co", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.status !== 201) {
        alert("User with this email already exist")
      } else {
        const saveURL = `${window.location.protocol}//${window.location.host}`
        console.log(saveURL)
        window.location.href = `${saveURL}/#/reglog`
      }
    })
  }

  return (
    <body className={stylesMain.body}>
      <header className={stylesReglog.nav}>
        <div className={stylesReglog.logoBox}>
          {/* eslint-disable-next-line react/button-has-type */}
          <button onClick={() => navigate("/")} className={stylesReglog.logoText}>
            Relaxacion
          </button>
        </div>
        {/* eslint-disable-next-line react/button-has-type,camelcase */}
        <button className={stylesReglog.login_button} onClick={() => navigate("/reglog")}>
          {" "}
          Sign in
        </button>
        {/* eslint-disable-next-line camelcase,react/button-has-type */}
        <button className={stylesReglog.reg_button} onClick={() => navigate("/reglog/sign-up")}>
          {" "}
          Sign up
        </button>
      </header>

      <div className={stylesReglog.outer}>
        <div className={stylesReglog.inner}>
          <form className={stylesReglog.form} onSubmit={handleSubmit(onSubmit)}>
          <p className={stylesReglog.Sign_up}>Register</p>
            <input
              className={stylesReglog.input}
              placeholder='Bill'
              {...register("name", {
                required: "this is a required",
                maxLength: {
                  value: 20,
                  message: "Max length is 2",
                },
              })}
            />
            {errors.firstName && <p>{String(errors.firstName.message)}</p>}

            <input 
              className={stylesReglog.input}
              placeholder='Luo'
              {...register("surname", {
                required: "this is required",
               
              })}
            />
            {errors.lastName && <p>{String(errors.lastName.message)}</p>}

            <input
              className={stylesReglog.input}
              placeholder='bluebill1049@hotmail.com'
              type='text'
              {...register("email", {
                required: "this is required",
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && <p>{String(errors.email.message)}</p>}
             <input
              type="password"
               className={stylesReglog.input}
              {...register("password", {
                required: "this is required",
                minLength: {
                  value: 8,
                  message: "Min length is 8",
                },
              })}
            />
            {errors.Password && <p>{String(errors.Password.message)}</p>}

            <button className={stylesReglog.enter} type='submit'>Register</button>
            {submitValue}
          </form>
        </div>
      </div>
    </body>
  )
}
// eslint-disable-next-line no-shadow, @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
function props(props: any, any: any) {
  throw new Error("Function not implemented.")
}

// eslint-disable-next-line no-shadow, @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
function constructor(props: (props: any, any: any) => void, any: any) {
  throw new Error("Function not implemented.")
}
