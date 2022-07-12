// import styles from './styles.module.css'

import { Route, Routes } from "react-router-dom"
import { Meme } from "../Meme/components/Meme"
// @ts-ignore
import { MemeGenerated } from "../Meme/components/MemeGenerated"
// @ts-ignore
import { Index } from "../Index_page/Index"
import { Registration } from "../Registration/reglog"
import Login from "../Registration/components/login.component"
import { Catalog } from "../Tests/catalog"
import { Test1 } from "../Tests/Test1"
import { Test2 } from "../Tests/Test2"
import { SignUp } from "../Registration/components/signup"
import { StartGame } from "../Game/StartGame"
import { Game } from "../Game/Game"
import { GameOver } from "../Game/GameOver"
import { Win } from "../Game/Win"
import { Home } from "../Home/Home"

// eslint-disable-next-line import/prefer-default-export
export function App() {
  return (
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/home/meme_page/generated' element={<MemeGenerated />} />
      <Route path='/home/meme_page' element={<Meme />} />
      <Route path='/reglog/*' element={<Registration />} />
      <Route path='/reglog/sign-in' element={<Login />} />
      <Route path='/reglog/sign-up' element={<SignUp />} />
      <Route path='/home' element={<Home />} />
      <Route path='/home/tests' element={<Catalog />} />
      <Route path='/home/tests/1' element={<Test1 />} />
      <Route path='/home/tests/2' element={<Test2 />} />
      <Route path='/home/game' element={<Game />} />
      <Route path='/home/startGame' element={<StartGame />} />
      <Route path='/home/win' element={<Win />} />
      <Route path='/home/gameOver' element={<GameOver />} />
    </Routes>
  )
}
