import { useNavigate } from "react-router-dom"
// @ts-ignore
import styles from "./Navbar.module.css"

// eslint-disable-next-line import/prefer-default-export
export function Navibar() {

  const navigate = useNavigate()

  return (
    <header className={styles.nav}>
      <div className={styles.logoBox}>
        {/* eslint-disable-next-line react/button-has-type */}
        <button onClick={() => navigate("/")} className={styles.logoText}>
          Relaxacion
        </button>
      </div>
    </header>
  )
}
