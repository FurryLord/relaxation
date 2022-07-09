import { useNavigate, useLocation } from 'react-router-dom'
import { useClipboard } from 'use-clipboard-copy'
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector, useDispatch } from 'react-redux'
import CSS from 'csstype'
import { copy } from './actions/copy'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import backgroundRetro from '../img/background.png'
import { NavibarBack } from '../Index_page/Navbar/NaviBarBack'

export function MemeGenerated() {
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
  const MemContainer: CSS.Properties = {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',
    height: 'max-content',
  }

  const MemContent: CSS.Properties = {
    /* Background */
    backgroundColor: '#FEEAC5',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: '2%',
    marginBottom: '2%',
    padding: '2% 5% 2% 5%',
    border: '1px solid #000000',
    width: 'max-content',
    height: 'max-content',
  }

  const MemImage: CSS.Properties = {
    height: 'max-content',
    width: 'max-content',
    marginTop: '2%',
    marginBottom: '2%',
  }

  const MakeButton: CSS.Properties = {
    background: '#D7A6D9',
    border: '3px solid #000000',
    boxShadow: '-5px 5px 0px #000000',
    borderRadius: '60px',

    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '32px',
    lineHeight: '38px',

    color: '#000000',
  }

  const CopyButton: CSS.Properties = {
    borderStyle: 'none',
    background: '#FEEAC5',

    color: 'black',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '32px',
    lineHeight: '38px',
    marginBottom: '0px',
  }

  const counter = useSelector((state: any) => state.counter)
  const dispatch = useDispatch()

  const clipboard = useClipboard()
  const navigate = useNavigate()
  const location = useLocation()
  // console.log(location)
  const url = new URLSearchParams(location.search).get('url')
  // console.log(url)

  const copyLink = () => {
    clipboard.copy(url)
    dispatch(copy())
  }

  return (
    <body style={body}>
      <NavibarBack />
      <div style={MemContainer}>
        <div style={MemContent}>
          <button type='button' onClick={() => navigate('/home/meme_page')} style={MakeButton}>
            Make more memes
          </button>
          {url && <img src={url} alt='meme' style={MemImage} />}
          <button type='button' onClick={copyLink} style={CopyButton}>
            {counter}
          </button>
        </div>
      </div>
    </body>
  )
}
