import React, { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import CSS from 'csstype'

export function Meme() {
  const container: CSS.Properties = {
    marginTop: '50px',
  }

  const skip: CSS.Properties = {
    backgroundColor: '#f0ad4e',
  }

  const generate: CSS.Properties = {
    backgroundColor: '#0275d8',
  }

  const [memes, setMemes] = useState<any[]>([])
  const [memeIndex, setMemIndex] = useState<any[number]>(0)
  const [captions, setCaptions] = useState<any[]>([])

  const navigate = useNavigate()

  const updateCaption = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const text = e.target.value || ''
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
        navigate('/')
        navigate(`meme_page/generated?url=${res.data.url}`)
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
    <div style={container}>
      <button onClick={() => generateMeme()} style={generate}>
        Generate
      </button>
      <button onClick={() => setMemIndex(memeIndex + 1)} style={skip}>
        Skip
      </button>
      {captions.map((c, index) => (
        <input onChange={(e) => updateCaption(e, index)} key={index} />
      ))}
      <img src={memes[memeIndex].url} alt='meme' />
    </div>
  ) : (
    <></>
  )
}
