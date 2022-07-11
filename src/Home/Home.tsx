import { useNavigate } from "react-router-dom"

// eslint-disable-next-line import/extensions
import React from "react"
import { NavibarBack } from "../Index_page/Navbar/NaviBarBack"

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import stylesMain from "../main.module.css"
// @ts-ignore
import stylesHome from "./Home.module.css"

// eslint-disable-next-line import/prefer-default-export
export function Home() {
  const name = localStorage.getItem("name")
  console.log(name)
  const navigate = useNavigate()

  const routeChangeMeme = () => {
    const path = "/home/meme_page"
    navigate(path)
  }
  const routeChangePsy = () => {
    const path = "/home/tests"
    navigate(path)
  }
  const routeChangeLg = () => {
    const path = "/home/Game1"
    navigate(path)
  }

  return (
    <body className={stylesMain.body}>
      <NavibarBack />
      {/* eslint-disable-next-line react/button-has-type */}
      <main className={stylesMain.main}>
        <div className={stylesHome.HomeWrapper}>
          <p className={stylesHome.HomeInnerTitle}>
            Hello, 
            {' '}
            <span className={stylesHome.HomeInnerTitleName}>{name}</span>
            {" "}
          </p>
          <div className={stylesHome.HomeCatalogue}>
            {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events,react/button-has-type */}
            <button onClick={routeChangeMeme} className={stylesHome.HomeButtonMeme}>
              <p className={stylesHome.HomeButtonText}>Meme</p>
              <p className={stylesHome.HomeButtonText}>Generator</p>
            </button>
            {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events,react/button-has-type */}
            <button onClick={routeChangePsy} className={stylesHome.HomeButtonPsy}>
              <p className={stylesHome.HomeButtonText}>Psychological</p>
              <p className={stylesHome.HomeButtonText}>Tests</p>
            </button>
            {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events,react/button-has-type */}
            <button onClick={routeChangeLg} className={stylesHome.HomeButtonLg}>
              <p className={stylesHome.HomeButtonText}>Logic</p>
              <p className={stylesHome.HomeButtonText}>Game</p>
            </button>
          </div>
        </div>
      </main>
    </body>
  )
}
