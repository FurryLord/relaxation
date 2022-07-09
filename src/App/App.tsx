// import styles from './styles.module.css'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Meme } from "../Meme/Meme"
import { MemeGenerated } from "../Meme/MemeGenerated"
// @ts-ignore
import { Index } from "../Index_page/Index"
import { Registration } from "../Registration/reglog"
import Login from "../Registration/components/login.component"
import { Catalog } from "../Tests/catalog"
import { Test1 } from "../Tests/Test1"
import { Test2 } from "../Tests/Test2"
import { SignUp } from "../Registration/components/signup"
import { Game } from "../Game1/components/StartGame"
import { Question1 } from "../Game1/components/Question1"
import { Question2 } from "../Game1/components/Question2"
import { Question3 } from "../Game1/components/Question3"
import { Question4 } from "../Game1/components/Question4"
import { Question5 } from "../Game1/components/Question5"
import { Question6 } from "../Game1/components/Question6"
import { Question7 } from "../Game1/components/Question7"
import { Question8 } from "../Game1/components/Question8"
import { Question9 } from "../Game1/components/Question9"
import { Question10 } from "../Game1/components/Question10"
import { Question11 } from "../Game1/components/Question11"
import { Question12 } from "../Game1/components/Question12"
import { Question13 } from "../Game1/components/Question13"
import { Question14 } from "../Game1/components/Question14"
import { Question15 } from "../Game1/components/Question15"
import { GameOver } from "../Game1/components/GameOver"
import { Win } from "../Game1/components/Win"
import { Home } from "../Home/Home"

// eslint-disable-next-line import/prefer-default-export
export function App() {
  return (
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='home/meme_page/generated' element={<MemeGenerated />} />
      <Route path='home/meme_page' element={<Meme />} />
      <Route path='/reglog/*' element={<Registration />} />
      <Route path='/reglog/sign-in' element={<Login />} />
      <Route path='/reglog/sign-up' element={<SignUp />} />
      <Route path='/home' element={<Home />} />
      <Route path='/home/tests' element={<Catalog />} />
      <Route path='/home/tests/1' element={<Test1 />} />
      <Route path='/home/tests/2' element={<Test2 />} />
      <Route path='/home/Game1' element={<Game />} />
      <Route path='/home/Question1' element={<Question1 />} />
      <Route path='/home/Question2' element={<Question2 />} />
      <Route path='/home/Question3' element={<Question3 />} />
      <Route path='/home/Question4' element={<Question4 />} />
      <Route path='/home/Question5' element={<Question5 />} />
      <Route path='/home/Question6' element={<Question6 />} />
      <Route path='/home/Question7' element={<Question7 />} />
      <Route path='/home/Question8' element={<Question8 />} />
      <Route path='/home/Question9' element={<Question9 />} />
      <Route path='/home/Question10' element={<Question10 />} />
      <Route path='/home/Question11' element={<Question11 />} />
      <Route path='/home/Question12' element={<Question12 />} />
      <Route path='/home/Question13' element={<Question13 />} />
      <Route path='/home/Question14' element={<Question14 />} />
      <Route path='/home/Question15' element={<Question15 />} />
      <Route path='/home/Win' element={<Win />} />
      <Route path='/home/GameOver' element={<GameOver />} />
    </Routes>
  )
}
