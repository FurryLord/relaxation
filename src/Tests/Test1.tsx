import { NavibarBack } from "../Index_page/Navbar/NaviBarBack"
import { Test } from "./components/Test"
import { questionContent1 } from "./Contents/QuestionContent1"
import { resultContent1 } from "./Contents/ResultContent1"
// @ts-ignore
import stylesMain from "../main.module.css"
// @ts-ignore
import stylesPsy from "./Psy.module.css"

// eslint-disable-next-line import/prefer-default-export
export function Test1() {
  return (
    <body className={stylesMain.body}>
      <NavibarBack />
      <h1 className={stylesPsy.headline}>What element are you?</h1>
      <Test questionContent={questionContent1} resultContent={resultContent1} />
    </body>
  )
}
