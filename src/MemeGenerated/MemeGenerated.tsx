import { useNavigate, useLocation } from 'react-router-dom'
import { useClipboard } from 'use-clipboard-copy'
import React, { useState } from 'react'

import CSS from 'csstype'
import { Navibar } from '../Index_page/Navbar/Navibar'
import { NavibarBack } from '../Index_page/Navbar/NaviBarBack'

export function MemeGenerated() {

  const MemContainer: CSS.Properties = {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    
    width: '100%',
    height: 'max-content',
    background: '#FEEAC5',
  }

  const MemContent: CSS.Properties = {
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
    marginBottom: '2%'
  }

  const MakeButton: CSS.Properties = {
    background: '#A34AA7',
    border: '1px solid #000000',
    boxShadow: '-5px 5px 0px #000000',
    borderRadius: '60px',

    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '32px',
    lineHeight: '38px'
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
    marginBottom: '0px'
  }



  const [copied, setCopied] = useState(false)

  const clipboard = useClipboard()
  const navigate = useNavigate()
  const location = useLocation()
  // console.log(location)
  const url = new URLSearchParams(location.search).get('url')
  // console.log(url)

  const copyLink = () => {
    clipboard.copy(url)
    setCopied(true)
  }

  return (
    <>
      <NavibarBack />
      <div style={MemContainer}>
        <div style={MemContent}>
          <button onClick={() => navigate('/meme_page')} style={MakeButton}>
            Make more memes
          </button>
          {url && <img src={url} alt='meme' style={MemImage} />}
          <button onClick={copyLink} style={CopyButton}>
            {copied ? 'Link copied!' : 'Copy link'}
          </button>
        </div>
      </div>
    </>
  )
}
