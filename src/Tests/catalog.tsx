import CSS from 'csstype'
import { useNavigate } from 'react-router-dom'
import { NavibarBack } from '../Index_page/Navbar/NaviBarBack'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import backgroundRetro from '../img/background.png'

export function Catalog() {
  const navigate = useNavigate()
  const routeChangeTest1 = () => {
    const path = '/home/tests/1'
    navigate(path)
  }

  const routeChangeTest2 = () => {
    const path = '/home/tests/2'
    navigate(path)
  }

  const body: CSS.Properties = {
    /* Background */
    backgroundImage: `url(${backgroundRetro})`,
    backgroundBlendMode: 'soft-light',
    backgroundSize: 'cover',
    backgroundPosition: '0 50vh',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    borderWidth: 'none',
    borderStyle: 'none',
    borderColor: 'none',
    backgroundColor: '#FEEAC5',
    /* Size */
    minHeight: '100vh',
    /* Display */
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',

    margin: '0',
    padding: '0',
  }

  const headline: CSS.Properties = {
    color: '#000000',
    fontFamily: 'Roboto Condensed',
    textShadow: '0px 0px 0px',
  }

  const container: CSS.Properties = {
    display: 'flex',
    width: '70%',
    top: '30%',
    position: 'absolute',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    filter: 'drop-shadow(-5px 5px 0px #000000)',
  }

  const test: CSS.Properties = {
    boxSizing: 'border-box',
    position: 'relative',
    width: '22vw',
    height: '23vh',
    background: '#6ACD94',
    border: '1px solid #000000',
    cursor: 'pointer',
  }

  const namebox: CSS.Properties = {
    boxSizing: 'border-box',
    width: '100%',
    height: '5vh',
    position: 'absolute',
    bottom: '0',
    background: '#ffffff',
    borderTop: '1px solid #000000',
  }

  const text: CSS.Properties = {
    fontFamily: 'Roboto Condensed',
    fontSize: '24px',
    marginLeft: '4%',
  }

  return (
    <body style={body}>
      <NavibarBack />
      <h1 style={headline}>Tests</h1>
      <div style={container}>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div style={test} onClick={routeChangeTest1}>
          <div style={namebox}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a style={text}>What element are you?</a>
          </div>
        </div>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div style={test} onClick={routeChangeTest2}>
          <div style={namebox}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a style={text}>Your Hogwarts House</a>
          </div>
        </div>
      </div>
    </body>
  )
}
