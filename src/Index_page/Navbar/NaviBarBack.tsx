import { useNavigate } from "react-router-dom"
import CSS from "csstype"
import React from "react"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import backgroundCircle from "../../img/dots.png"
// eslint-disable-next-line import/prefer-default-export
export function NavibarBack() {
  const navigate = useNavigate()
  const [over, setOver] = React.useState(false)

  const nav: CSS.Properties = {
    backgroundColor: "#FEE9C6",
    /* Size */
    width: "100%",
    height: "fit-content",

    /* Display */
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "flex-start",
    alignItems: "center",

    /* Others */
    borderBottom: "2px solid #000000",
  }
  const logoBox: CSS.Properties = {
    backgroundColor: "#FEE9C6",

    height: "fit-content",
    width: "fit-content",
    /* Display */
    display: "flex",
    alignContent: "center",
    justifyContent: "flex-start",
    alignItems: "center",
    placeContent: "center",
    flexDirection: "row",
    flexWrap: "nowrap",
  }
  const logoText: CSS.Properties = {
    backgroundColor: "#FEE9C6",
    color: "#000000",
    fontFamily: "Parisienne",
    fontSize: "48px",

    /* Size */
    height: "fit-content",
    width: "fit-content",

    /* Display */
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    placeContent: "center",
    flexDirection: "row",
    flexWrap: "nowrap",

    /* Others */
    margin: "0",
    marginLeft: "15px",
    padding: "0",
  }

  const HomeButton: CSS.Properties = {
    border: "1px solid #000000",
    width: "128px",
    margin: "0% 0% 0% 2%",
    padding: "0",
    textAlign: "center",

    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "1.5em",
    lineHeight: "2em",
    backgroundColor: "#FEE9C6",
    color: "black",
  }
  if (over) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    HomeButton.backgroundImage = `url(${backgroundCircle})`
    HomeButton.backgroundBlendMode = "soft-light"
    HomeButton.backgroundSize = "contain"
    HomeButton.backgroundAttachment = "fixed"
  } else {
    HomeButton.backgroundImage = "none"
  }
  return (
    <header style={nav}>
      <div style={logoBox}>
        {/* eslint-disable-next-line react/button-has-type */}
        <button onClick={() => navigate("/")} style={logoText}>
          Relaxacion
        </button>
      </div>
      {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events,react/button-has-type */}
      <button
        onMouseDown={() => setOver(true)}
        onMouseUp={() => setOver(false)}
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
        onClick={() => navigate("/home")}
        style={HomeButton}
      >
        Home
      </button>
    </header>
  )
}
