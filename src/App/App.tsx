// import styles from './styles.module.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react'
import { Meme } from '../Meme/Meme'
import { MemeGenerated } from '../Meme/MemeGenerated'
import { Index } from '../Index_page/Index'
import {Registration} from "../Registration/reglog"
import Login from "../Registration/components/login.component"
import SignUp from '../Registration/components/signup.component'

export function App() {
  return (
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/meme_page/generated' element={<MemeGenerated />} />
      <Route path='/meme_page' element={<Meme />} />
      <Route path='/reglog/*' element={<Registration />}></Route>
      <Route path="/reglog/sign-in" element={<Login />} />
      <Route path="/reglog/sign-up" element={<SignUp />} />
      
    </Routes>
  )
}
