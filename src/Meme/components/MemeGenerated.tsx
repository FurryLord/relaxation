import { useNavigate, useLocation } from "react-router-dom"
import { useClipboard } from "use-clipboard-copy"
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector, useDispatch } from "react-redux"
import { copy } from "../actions/copy"
import { NavibarBack } from "../../Index_page/Navbar/NaviBarBack"
// @ts-ignore
import stylesMain from "../../main.module.css"
// @ts-ignore
import stylesMem from "../Mem.module.css"

export function MemeGenerated() {
  const counter = useSelector((state: any) => state.counter)
  const dispatch = useDispatch()

  const clipboard = useClipboard()
  const navigate = useNavigate()
  const location = useLocation()
  const url = new URLSearchParams(location.search).get("url")


  const copyLink = () => {
    clipboard.copy(url)
    dispatch(copy())
  }

  return (
    <body className={stylesMain.body}>
      <NavibarBack />
      <div className={stylesMem.MemContainer}>
        <div className={stylesMem.MemContent}>
          <button
            type='button'
            onClick={() => navigate("/home/meme_page")}
            className={stylesMem.MakeButton}
          >
            Make more memes
          </button>
          {url && <img src={url} alt='meme' className={stylesMem.MemImage} />}
          <button type='button' onClick={copyLink} className={stylesMem.CopyButton}>
            {counter}
          </button>
        </div>
      </div>
    </body>
  )
}
