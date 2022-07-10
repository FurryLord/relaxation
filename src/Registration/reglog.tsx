import React from "react"
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { useNavigate } from "react-router-dom"

import Login from "./components/login.component"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import stylesMain from "../main.module.css"
// @ts-ignore
import stylesReglog from "./Reglog.module.css"

// eslint-disable-next-line import/prefer-default-export
export function Registration() {
  const navigate = useNavigate()

  return (
    <main className={stylesMain.body}>
      <header className={stylesReglog.nav}>
        <div className={stylesReglog.logoBox}>
          {/* eslint-disable-next-line react/button-has-type */}
          <button onClick={() => navigate("/")} className={stylesReglog.logoText}>
            Relaxacion
          </button>
        </div>
        {/* eslint-disable-next-line camelcase,react/button-has-type */}
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
          <Login />
        </div>
      </div>
    </main>
  )
}
