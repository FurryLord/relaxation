import React, { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CSS from 'csstype'

// @ts-ignore
import backgroundRetro from "../img/background.png"
import { NavibarBack } from '../Index_page/Navbar/NaviBarBack';

export function Meme() {

  const body: CSS.Properties = {
    /* Background */
    backgroundImage: `url(${backgroundRetro})`,
    backgroundBlendMode: "soft-light",
    backgroundSize: 'cover',
    backgroundPosition: '0 50vh',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    borderWidth: "none",
    borderStyle: "none",
    borderColor: "none",
    backgroundColor: '#FEEAC5',
    /* Size */
    minHeight: '100vh',
    /* Display */
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',

    margin: '0',
    padding: '0'
  };
  const MemContainer: CSS.Properties = {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',
    height: 'max-content',
  }

  const MemContent: CSS.Properties = {
    backgroundColor: '#FEEAC5',

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

  const NextButton: CSS.Properties = {
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

  const CreateButton: CSS.Properties = {
    background: '#D7A6D9',
    border: '3px solid #000000',
    boxShadow: '-5px 5px 0px #000000',
    borderRadius: '60px',

    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '32px',
    lineHeight: '38px',

    color: '#000000',
  }



  const [memes, setMemes] = useState<any[]>([])
  const [memeIndex, setMemIndex] = useState<any[number]>(0)
  const [fields, setFields] = useState<any[]>([])

  const navigate = useNavigate()

  const updateField = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const textMeme = e.target.value
    setFields(
      fields.map((element, i) => {
        if (index === i) {
          return textMeme
        }
        return element
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

  const fetchMeme = () => {
    const currentMeme = memes[memeIndex]
    const formData = new FormData()

    formData.append('username', 'ArseniRusin')
    formData.append('password', '1qaz1Qaz')
    formData.append('template_id', currentMeme.id)
    fields.forEach((element, index) =>
      // console.log(`boxes[${index}][text]`, c)
      formData.append(`boxes[${index}][text]`, element),
    )
    // formData.forEach((c) => console.log(c))
    fetch('https://api.imgflip.com/caption_image', {
      method: 'POST',
      body: formData,
    }).then((res) => {
      res.json().then((res) => {
        const saveURL = window.location.pathname
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
      setFields(Array(memes[memeIndex].box_count).fill(''))
    }
  }, [memeIndex, memes])


  return memes.length ? (
    <body style={body}>
      <NavibarBack />
      <div style={MemContainer}>
        <div style={MemContent}>

          {fields.map((element, index) => (
            <input onChange={(e) => updateField(e, index)} key={index} style={EnterButton} />
          ))}
          <button onClick={() => fetchMeme()} style={CreateButton}>
            Create!
          </button>
          <img src={memes[memeIndex].url} alt='meme' style={MemImage} />
          <button onClick={() => setMemIndex(memeIndex + 1)} style={NextButton}>
            Next
          </button>
        </div>
        {/*<img style={mainBackground} src={background}/>*/}
      </div>
    </body>
  ) : (
    <></>
  )
}
