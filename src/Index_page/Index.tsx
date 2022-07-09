import { useNavigate } from "react-router-dom"

// eslint-disable-next-line import/extensions
import CSS from "csstype"
import { Simulate } from "react-dom/test-utils"
import React from "react"
import { Navibar } from "./Navbar/Navibar"

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import woman from "../img/woman.png"
// @ts-ignore
import stylesMain from "../main.module.css"
// @ts-ignore
import stylesGreeting from "./Greeting.module.css"

// eslint-disable-next-line import/prefer-default-export
export function Index() {
  const navigate = useNavigate()
  const routeChange = () => {
    const path = "/reglog"
    navigate(path)
  }

  return (
    <body className={stylesMain.body}>
      <Navibar />
      {/* eslint-disable-next-line react/button-has-type */}
      <main className={stylesMain.main}>
        <div className={stylesGreeting.GreetingWrapper}>
          <div className={stylesGreeting.GreetingInnerCard4}>
            <div className={stylesGreeting.GreetingInner}>
              <p className={stylesGreeting.GreetingInnerTitle}>
                Welcome to <span className={stylesGreeting.GreetingInnerLogo}>Relaxacion!</span>
              </p>
              <p className={stylesGreeting.GreetingInnerText}>
                Place where you can find yourself in <strong>tests</strong>, stuck in{" "}
                <strong>memes</strong>, and tense your <strong>logic</strong>.
              </p>
              {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events,react/button-has-type */}
              <button onClick={routeChange} className={stylesGreeting.GreetingButton}>
                Play Now!
              </button>
            </div>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img className={stylesGreeting.GreetingWoman} src={woman} />
          </div>
          <div className={stylesGreeting.GreetingInnerCard3} />
          <div className={stylesGreeting.GreetingInnerCard2} />
          <div className={stylesGreeting.GreetingInnerCard1} />
        </div>
      </main>
    </body>
  )
}
