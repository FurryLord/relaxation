import { useNavigate } from "react-router-dom"
import { NavibarBack } from "../Index_page/Navbar/NaviBarBack"
// @ts-ignore
import stylesMain from "../main.module.css"
// @ts-ignore
import stylesPsy from "./Psy.module.css"

export function Catalog() {
  const navigate = useNavigate()
  const routeChangeTest1 = () => {
    const path = "/home/tests/1"
    navigate(path)
  }
  const routeChangeTest2 = () => {
    const path = "/home/tests/2"
    navigate(path)
  }

  return (
    <body className={stylesMain.body}>
      <NavibarBack />
      <main className={stylesMain.main}>
        <div className={stylesPsy.catalogueWrapper}>
          <h1 className={stylesPsy.headline}>Tests</h1>
          <div className={stylesPsy.container}>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
            <div role='button' className={stylesPsy.test} onClick={routeChangeTest1} tabIndex={0}>
              <div className={stylesPsy.namebox}>
                <p className={stylesPsy.text}>What element are you?</p>
              </div>
            </div>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
            <div role='button' className={stylesPsy.test} onClick={routeChangeTest2} tabIndex={0}>
              <div className={stylesPsy.namebox}>
                <p className={stylesPsy.text}>Your Hogwarts House</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </body>
  )
}
