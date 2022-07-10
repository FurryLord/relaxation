import React from "react"
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
        /*const { name } = response.json*/
        let saveURL = window.location.href
        console.log(saveURL)
        saveURL = saveURL.replace('/reglog/sign-up', '/reglog')
        console.log(saveURL)
        window.location.href = `${saveURL}`;
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
              type='text'
              {...register("name", {
                required: "this is a required",
                maxLength: {
                  value: 20,
                  message: "Max length is 2",
                },
              })}
            />
            {errors.name && <p className={stylesReglog.err}>{String(errors.name.message)}</p>}

            <input 
              className={stylesReglog.input}
              placeholder='Luo'
              type='text'
              {...register("surname", {
                required: {
                  value: true,
                  message: "this is required"
                },
              })}
            />
            {errors.surname && <p className={stylesReglog.err}>{String(errors.surname.message)}</p>}

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
            {errors.email && <p className={stylesReglog.err}>{String(errors.email.message)}</p>}
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
            {errors.password && <p className={stylesReglog.err}>{String(errors.password.message)}</p>}

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
