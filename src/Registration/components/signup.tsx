import React, { Component } from "react"
import CSS from "csstype"
import ReactDOM from "react-dom"
import { useNavigate } from "react-router-dom"
import SignUpCom from "./signup.component"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import stylesMain from "../../main.module.css"
// @ts-ignore
import stylesReglog from "../Reglog.module.css"

// eslint-disable-next-line import/prefer-default-export
export function SignUp() {
  const navigate = useNavigate()

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
          <SignUpCom />
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
