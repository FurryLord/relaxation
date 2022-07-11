import { ChangeEvent, useEffect, useState } from "react"

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import { NavibarBack } from "../../Index_page/Navbar/NaviBarBack"
// @ts-ignore
import stylesMain from "../../main.module.css"
// @ts-ignore
import stylesMem from "../Mem.module.css"

const shuffleMemes = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    // eslint-disable-next-line no-param-reassign
    array[i] = array[j]
    // eslint-disable-next-line no-param-reassign
    array[j] = temp
  }
}

export function Meme() {
  const [memes, setMemes] = useState<any[]>([])
  const [memeIndex, setMemIndex] = useState<any[number]>(0)
  const [fields, setFields] = useState<any[]>([])

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

  const fetchMeme = () => {
    const currentMeme = memes[memeIndex]
    const formData = new FormData()

    formData.append("username", "ArseniRusin")
    formData.append("password", "1qaz1Qaz")
    formData.append("template_id", currentMeme.id)
    fields.forEach((element, index) =>
      formData.append(`boxes[${index}][text]`, element),
    )
    fetch("https://api.imgflip.com/caption_image", {
      method: "POST",
      body: formData,
    }).then((res) => {
      // eslint-disable-next-line no-shadow
      res.json().then((res) => {
        const saveURL = location.href
        console.log(saveURL)
        window.location.href = `${saveURL}/generated?url=${res.data.url}`
      })
    })
  }

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then((res) => {
      // eslint-disable-next-line no-shadow
      res.json().then((res) => {
        // eslint-disable-next-line no-underscore-dangle
        const _memes = res.data.memes
        shuffleMemes(_memes)
        setMemes(_memes)
      })
    })
  }, [])

  useEffect(() => {
    if (memes.length) {
      setFields(Array(memes[memeIndex].box_count).fill(""))
    }
  }, [memeIndex, memes])

  return memes.length ? (
    <body className={stylesMain.body}>
      <NavibarBack />
      <div className={stylesMem.MemContainer}>
        <div className={stylesMem.MemContent}>
          {fields.map((element, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <input
              onChange={(e) => updateField(e, index)}
              key={index}
              className={stylesMem.EnterButton}
            />
          ))}
          <button type='button' onClick={() => fetchMeme()} className={stylesMem.CreateButton}>
            Create!
          </button>
          <img src={memes[memeIndex].url} alt='meme' className={stylesMem.MemImage} />
          <button
            type='button'
            onClick={() => setMemIndex(memeIndex + 1)}
            className={stylesMem.NextButton}
          >
            Next
          </button>
        </div>
      </div>
    </body>
  ) : (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <></>
  )
}
