import { NavibarBack } from "../Index_page/Navbar/NaviBarBack"
import { Test } from "./components/Test"
import { questionContent2 } from "./Contents/QuestionContent2"
import { resultContent2 } from "./Contents/ResultContent2"
// @ts-ignore
import stylesMain from "../main.module.css"
// @ts-ignoreFА
import stylesPsy from "./Psy.module.css"

// eslint-disable-next-line import/prefer-default-export
export function Test2() {
  return (
    <body className={stylesMain.body}>
      <NavibarBack />
      <h1 className={stylesPsy.headline}>Your Hogwarts House</h1>
      <Test questionContent={questionContent2} resultContent={resultContent2} />
    </body>
  )
}
