import { useNavigate } from "react-router-dom"
import React from "react"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import styles from "./Navbar.module.css"

// eslint-disable-next-line import/prefer-default-export
export function NavibarBack() {
  const navigate = useNavigate()

  return (
    <header className={styles.nav}>
      <div className={styles.logoBox}>
        {/* eslint-disable-next-line react/button-has-type */}
        <button onClick={() => navigate("/")} className={styles.logoText}>
          Relaxacion
        </button>
      </div>
      {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events,react/button-has-type */}
      <button onClick={() => navigate("/home")} className={styles.HomeButton}>
        Home
      </button>
    </header>
  )
}
