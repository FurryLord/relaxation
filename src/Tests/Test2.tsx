import CSS from 'csstype'
import { NavibarBack } from '../Index_page/Navbar/NaviBarBack'
import { Test } from './components/Test'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import questionContent2 from './Contents/QuestionContent2'
import resultContent2 from './Contents/ResultContent2'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import backgroundRetro from '../img/background.png'

// eslint-disable-next-line import/prefer-default-export
export function Test2() {
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

  return (
    <body style={body}>
      <NavibarBack />
      <h1 style={headline}>Your Hogwarts House</h1>
      <Test questionContent={questionContent2} resultContent={resultContent2} />
    </body>
  )
}
