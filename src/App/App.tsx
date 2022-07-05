// import styles from './styles.module.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react'
import { Meme } from '../Index_page/Meme/Meme'
import { MemeGenerated } from '../Index_page/MemeGenerated/MemeGenerated'
import { Index } from '../Index_page/Index'

export function App() {
  return (
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/meme_page/generated' element={<MemeGenerated />} />
      <Route path='/meme_page' element={<Meme />} />
    </Routes>
  )
}
