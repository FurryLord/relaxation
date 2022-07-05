import { useNavigate, useLocation } from 'react-router-dom'
import { useClipboard } from 'use-clipboard-copy'
import React, { useState } from 'react'

import CSS from 'csstype'

export function MemeGenerated() {
  const container: CSS.Properties = {
    marginTop: '50px',
  }

  const copy: CSS.Properties = {
    backgroundColor: '#0275d8',
    marginTop: '20px',
  }

  const home: CSS.Properties = {
    backgroundColor: '#f0ad4e',
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
    <div style={container}>
      <button onClick={() => navigate('/meme_page')} style={home}>
        Make more memes
      </button>
      {url && <img src={url} alt='meme' />}
      <button onClick={copyLink} style={copy}>
        {copied ? 'Link copied!' : 'Copy link'}
      </button>
    </div>
  )
}
