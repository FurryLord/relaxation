import React, { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CSS from 'csstype'
import { Navibar } from '../Navbar/Navibar'
import { NavibarBack } from '../Navbar/NaviBarBack'

export function Meme() {


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

  const EnterButton: CSS.Properties = {
    background: '#FFFFFF',
    border: '2px solid #000000',
    borderRadius: '60px',

  }

  const skip: CSS.Properties = {
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

  const generate: CSS.Properties = {
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



  const [memes, setMemes] = useState<any[]>([])
  const [memeIndex, setMemIndex] = useState<any[number]>(0)
  const [captions, setCaptions] = useState<any[]>([])

  const navigate = useNavigate()

  const updateCaption = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const text = e.target.value
    setCaptions(
      captions.map((c, i) => {
        if (index === i) {
          return text
        }
        return c
      }),
    )
  }

  const shuffleMemes = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
  }

  const generateMeme = () => {
    const currentMeme = memes[memeIndex]
    const formData = new FormData()

    formData.append('username', 'ArseniRusin')
    formData.append('password', '1qaz1Qaz')
    formData.append('template_id', currentMeme.id)
    captions.forEach((c, index) =>
      // console.log(`boxes[${index}][text]`, c)
      formData.append(`boxes[${index}][text]`, c),
    )
    // formData.forEach((c) => console.log(c))
    fetch('https://api.imgflip.com/caption_image', {
      method: 'POST',
      body: formData,
    }).then((res) => {
      res.json().then((res) => {
        const saveURL = window.location.pathname
        console.log(saveURL)
        navigate(`${saveURL}/generated?url=${res.data.url}`)
      })
    })
  }

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes').then((res) => {
      res.json().then((res) => {
        const _memes = res.data.memes
        shuffleMemes(_memes)
        setMemes(_memes)
      })
    })
  }, [])

  useEffect(() => {
    if (memes.length) {
      setCaptions(Array(memes[memeIndex].box_count).fill(''))
    }
  }, [memeIndex, memes])

  // useEffect(() => {
  //     console.log(captions)
  // }, [captions])

  return memes.length ? (
    <><NavibarBack />
      <div style={MemContainer}>
        <div style={MemContent}>

          {captions.map((c, index) => (
            <input onChange={(e) => updateCaption(e, index)} key={index} style={EnterButton} />
          ))}
          <button onClick={() => generateMeme()} style={generate}>
            Generate
          </button>
          <img src={memes[memeIndex].url} alt='meme' style={MemImage} />
          <button onClick={() => setMemIndex(memeIndex + 1)} style={skip}>
            Skip
          </button>
        </div>
      </div>
    </>
  ) : (
    <></>
  )
}
