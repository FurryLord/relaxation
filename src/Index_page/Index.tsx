import { useNavigate } from "react-router-dom"

// eslint-disable-next-line import/extensions
import CSS from "csstype"
import { Simulate } from "react-dom/test-utils"
import React from "react"
import { Navibar } from "./Navbar/Navibar"

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import woman from "../img/woman.png"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import backgroundRetro from "../img/background.png"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import backgroundCircle from "../img/dots.png"

// eslint-disable-next-line import/prefer-default-export
export function Index() {
  const [over, setOver] = React.useState(false)
  const navigate = useNavigate()
  const routeChange = () => {
    const path = "/reglog"
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
  const GreetingWrapper: CSS.Properties = {
    /* Size */
    width: "85%",
    height: "95%",

    /* Display */
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",

    margin: "0",
    padding: "0",
    position: "relative",
  }

  const GreetingInnerCard1: CSS.Properties = {
    backgroundColor: "#F8A7A4",
    border: "1px solid #000000",

    /* Size */
    width: "95%",
    height: "85%",
    boxShadow: "0 0 0 0",
    margin: "0",
    padding: "0",
    top: "75px",
    right: "60px",
    zIndex: "1",
    position: "absolute",
  }
  const GreetingInnerCard2: CSS.Properties = {
    backgroundColor: "#EF4E32",
    border: "1px solid #000000",

    /* Size */
    width: "95%",
    height: "85%",
    boxShadow: "0 0 0 0",
    margin: "0",
    padding: "0",

    top: "50px",
    right: "40px",
    zIndex: "2",
    position: "absolute",
  }
  const GreetingInnerCard3: CSS.Properties = {
    backgroundColor: "#FFD203",
    border: "1px solid #000000",

    /* Size */
    width: "95%",
    height: "85%",
    boxShadow: "0 0 0 0",
    margin: "0",
    padding: "0",

    top: "25px",
    right: "20px",
    zIndex: "3",
    position: "absolute",
  }
  const GreetingInnerCard4: CSS.Properties = {
    backgroundColor: "#FEEAC5",
    border: "1px solid #000000",

    /* Size */
    width: "95%",
    height: "85%",
    boxShadow: "0 0 0 0",
    margin: "0",
    padding: "0",

    top: "0",
    right: "0",
    zIndex: "4",
    position: "absolute",
    /* Display */
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  }
  const GreetingInner: CSS.Properties = {
    width: "90%",
    height: "95%",

    padding: "0",
    margin: "0",
  }
  const GreetingInnerTitle: CSS.Properties = {
    color: "#000000",
    fontFamily: "Roboto Condensed",
    fontSize: "calc(36px + (48 - 36) * ((100vw - 280px) / (1920 - 280)))",
    marginTop: "0",
  }
  const GreetingInnerText: CSS.Properties = {
    color: "#000000",
    fontFamily: "Roboto Condensed",
    fontSize: "calc(20px + (36 - 20) * ((100vw - 280px) / (1920 - 280)))",
  }
  const GreetingInnerLogo: CSS.Properties = {
    color: "#000000",
    fontFamily: "Parisienne",
    fontSize: "calc(64px + (96 - 64) * ((100vw - 280px) / (1920 - 280)))",
  }
  const GreetingInnerTextBold: CSS.Properties = {
    fontWeight: "bold",
  }
  const GreetingButton: CSS.Properties = {
    backgroundColor: "#F8A7A4",
    border: "5px solid #000000",
    boxShadow: "-5px 5px 0px #000000",
    borderRadius: "80px",

    height: "calc(90px + (96 - 90) * ((100vw - 280px) / (1920 - 280)))",
    width: "calc(256px + (356 - 256) * ((100vw - 280px) / (1920 - 280)))",

    fontFamily: "Roboto",
    fontSize: "calc(24px + (36 - 24) * ((100vw - 280px) / (1920 - 280)))",
    fontWeight: "bold",
    color: "#000000",
  }
  if (over) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    GreetingButton.backgroundImage = `url(${backgroundCircle})`
    GreetingButton.backgroundBlendMode = "soft-light"
    GreetingButton.backgroundSize = "contain"
    GreetingButton.backgroundAttachment = "fixed"
  } else {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    GreetingButton.backgroundColor = "#F8A7A4"
  }

  const GreetingWoman: CSS.Properties = {
    boxShadow: "0 0 0 0",

    width: "calc(200px + (350 - 200) * ((100vw - 280px) / (1920 - 280)))",
    height: "auto",

    position: "absolute",
    left: 0,
    bottom: 0,
    padding: "0 0 10px 10px",
  }
  return (
    <body style={body}>
      <Navibar />
      {/* eslint-disable-next-line react/button-has-type */}
      <main style={main}>
        <div style={GreetingWrapper}>
          <div style={GreetingInnerCard4}>
            <div style={GreetingInner}>
              <p style={GreetingInnerTitle}>
                Welcome to <span style={GreetingInnerLogo}>Relaxacion!</span>
              </p>
              <p style={GreetingInnerText}>
                Place where you can find yourself in{" "}
                <span style={GreetingInnerTextBold}>tests</span>, stuck in{" "}
                <span style={GreetingInnerTextBold}>memes</span>, and tense your{" "}
                <span style={GreetingInnerTextBold}>logic</span>.
              </p>
              {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events,react/button-has-type */}
              <button
                style={GreetingButton}
                onClick={routeChange}
                onMouseDown={() => setOver(true)}
                onMouseUp={() => setOver(false)}
                onMouseOver={() => setOver(true)}
                onMouseOut={() => setOver(false)}
              >
                {" "}
                Play Now!
              </button>
            </div>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img style={GreetingWoman} src={woman} />
          </div>
          <div style={GreetingInnerCard3} />
          <div style={GreetingInnerCard2} />
          <div style={GreetingInnerCard1} />
        </div>
      </main>
    </body>
  )
}
