import { useNavigate } from "react-router-dom"

// eslint-disable-next-line import/extensions
import CSS from "csstype"
import React from "react"
import { NavibarBack } from "../Index_page/Navbar/NaviBarBack"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import backgroundRetro from "../img/background.png"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import backgroundCircle from "../img/dots.png"

// eslint-disable-next-line import/prefer-default-export
export function Home() {
  const name = localStorage.getItem("name")
  console.log(name)
  const [overMem, setOverMem] = React.useState(false)
  const [overPsy, setOverPsy] = React.useState(false)
  const [overLg, setOverLg] = React.useState(false)
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

  const body: CSS.Properties = {
    /* Background */
    backgroundImage: `url(${backgroundRetro})`,
    backgroundBlendMode: "soft-light",
    backgroundSize: "cover",
    backgroundPosition: "0 50vh",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    borderWidth: "none",
    borderStyle: "none",
    borderColor: "none",
    backgroundColor: "#FEEAC5",
    /* Size */
    minHeight: "100vh",
    /* Display */
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "flex-start",
    alignItems: "center",

    margin: "0",
    padding: "0",
  }
  const main: CSS.Properties = {
    /* Size */
    height: "90vh",
    width: "100vw",

    /* Display */
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",

    margin: "0",
    padding: "0",
  }
  const HomeWrapper: CSS.Properties = {
    /* Size */
    width: "100%",
    height: "95%",

    /* Display */
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "flex-start",
    alignItems: "center",

    margin: "0",
    padding: "0",
    position: "relative",
  }

  const HomeInnerTitle: CSS.Properties = {
    color: "#000000",
    fontFamily: "Roboto Condensed",
    fontSize: "calc(20px + (36 - 20) * ((100vw - 280px) / (1920 - 280)))",
    margin: "2% 0 0 0",
  }
  const HomeInnerTitleName: CSS.Properties = {
    color: "#000000",
    fontFamily: "Roboto Condensed",
    fontSize: "calc(36px + (48 - 36) * ((100vw - 280px) / (1920 - 280)))",
  }
  const HomeCatalogue: CSS.Properties = {
    width: "100%",
    height: "100%",
    /* Display */
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  }
  const HomeButtonMeme: CSS.Properties = {
    backgroundColor: "#D7A6D9",
    border: "5px solid #000000",
    boxShadow: "-15px 15px 0px #000000",
    borderRadius: "0px",

    height: "calc(156px + (375 - 156) * ((100vw - 280px) / (1920 - 280)))",
    width: "calc(156px + (480 - 156) * ((100vw - 280px) / (1920 - 280)))",

    /* Display */
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",

    margin: "1.25%",
    padding: "0",
  }
  const HomeButtonPsy: CSS.Properties = {
    backgroundColor: "#6ACD94",
    border: "5px solid #000000",
    boxShadow: "-15px 15px 0px #000000",
    borderRadius: "0px",

    height: "calc(156px + (375 - 156) * ((100vw - 280px) / (1920 - 280)))",
    width: "calc(156px + (480 - 156) * ((100vw - 280px) / (1920 - 280)))",

    /* Display */
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",

    margin: "1.25%",
    padding: "0",
  }
  const HomeButtonLg: CSS.Properties = {
    backgroundColor: "#41A6E1",
    border: "5px solid #000000",
    boxShadow: "-15px 15px 0px #000000",
    borderRadius: "0px",

    height: "calc(156px + (375 - 156) * ((100vw - 280px) / (1920 - 280)))",
    width: "calc(156px + (480 - 156) * ((100vw - 280px) / (1920 - 280)))",

    /* Display */
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",

    margin: "1.25%",
    padding: "0",
  }
  const HomeButtonText: CSS.Properties = {
    fontFamily: "Roboto Condensed",
    fontSize: "calc(36px + (48 - 36) * ((100vw - 280px) / (1920 - 280)))",
    fontWeight: "bold",
    color: "#000000",
    /* Display */
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",

    margin: "0",
    padding: "0",
  }
  const card: CSS.Properties = {
    height: "calc(156px + (375 - 156) * ((100vw - 280px) / (1920 - 280)))",
    width: "calc(156px + (480 - 156) * ((100vw - 280px) / (1920 - 280)))",
    position: "relative",
    perspective: "1000px",
  }
  if (overMem) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    HomeButtonMeme.backgroundImage = `url(${backgroundCircle})`
    HomeButtonMeme.backgroundBlendMode = "soft-light"
    HomeButtonMeme.backgroundSize = "contain"
    HomeButtonMeme.backgroundAttachment = "fixed"
  } else {
    HomeButtonMeme.backgroundImage = "none"
  }
  if (overPsy) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    HomeButtonPsy.backgroundImage = `url(${backgroundCircle})`
    HomeButtonPsy.backgroundBlendMode = "soft-light"
    HomeButtonPsy.backgroundSize = "contain"
    HomeButtonPsy.backgroundAttachment = "fixed"
  } else {
    HomeButtonPsy.backgroundImage = "none"
  }
  if (overLg) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    HomeButtonLg.backgroundImage = `url(${backgroundCircle})`
    HomeButtonLg.backgroundBlendMode = "soft-light"
    HomeButtonLg.backgroundSize = "contain"
    HomeButtonLg.backgroundAttachment = "fixed"
  } else {
    HomeButtonLg.backgroundImage = "none"
  }
  return (
    <body style={body}>
      <NavibarBack />
      {/* eslint-disable-next-line react/button-has-type */}
      <main style={main}>
        <div style={HomeWrapper}>
          <p style={HomeInnerTitle}>
            Hello, <span style={HomeInnerTitleName}>{name}</span>{" "}
          </p>
          <div style={HomeCatalogue}>
            {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events,react/button-has-type */}
            <button
              style={HomeButtonMeme}
              onMouseDown={() => setOverMem(true)}
              onMouseUp={() => setOverMem(false)}
              onMouseOver={() => setOverMem(true)}
              onMouseOut={() => setOverMem(false)}
              onClick={routeChangeMeme}
            >
              <p style={HomeButtonText}>Meme</p>
              <p style={HomeButtonText}>Generator</p>
            </button>
            {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events,react/button-has-type */}
            <button
              style={HomeButtonPsy}
              onMouseDown={() => setOverPsy(true)}
              onMouseUp={() => setOverPsy(false)}
              onMouseOver={() => setOverPsy(true)}
              onMouseOut={() => setOverPsy(false)}
              onClick={routeChangePsy}
            >
              <p style={HomeButtonText}>Psychological</p>
              <p style={HomeButtonText}>Tests</p>
            </button>
            {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events,react/button-has-type */}
            <button
              style={HomeButtonLg}
              onMouseDown={() => setOverLg(true)}
              onMouseUp={() => setOverLg(false)}
              onMouseOver={() => setOverLg(true)}
              onMouseOut={() => setOverLg(false)}
              onClick={routeChangeLg}
            >
              <p style={HomeButtonText}>Logic</p>
              <p style={HomeButtonText}>Game</p>
            </button>
          </div>
        </div>
      </main>
    </body>
  )
}
