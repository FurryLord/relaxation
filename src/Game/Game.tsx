import { ChangeEvent, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { NavibarBack } from "../Index_page/Navbar/NaviBarBack"
import { Questions } from "./question"
// @ts-ignore
import styles from "./gameStyl.module.css"

type IQuestion = {
  question: string
  answers: {
    a: string
    b: string
    c: string
    d: string
  }
  correctS: string
  correctA: string
}

export function Game() {
  const [questions, setQuestions] = useState<IQuestion[]>(Questions)
  const [index, setIndex] = useState(0)

  const navigate = useNavigate()

  const change = (ans: string) => {
    if(questions[index].correctS === ans && index !== 14){
        setIndex(index + 1)
    } else if(questions[index].correctS === ans && index === 14){
        navigate("/home/win")
    }else{
        navigate("/home/gameOver")
    }
  }





  return (
    <body className={styles.body}>
      <NavibarBack />
      <div className={styles.block}>
        <div className={styles.little_box}>1</div>
        <div className={styles.little_box}>2</div>
        <div className={styles.little_box}>3</div>
        <div className={styles.little_box}>4</div>
        <div className={styles.little_box}>5</div>
        <div className={styles.little_box}>6</div>
        <div className={styles.little_box}>7</div>
        <div className={styles.little_box}>8</div>
        <div className={styles.little_box}>9</div>
        <div className={styles.little_box}>10</div>
        <div className={styles.little_box}>11</div>
        <div className={styles.little_box}>12</div>
        <div className={styles.little_box}>13</div>
        <div className={styles.little_box}>14</div>
        <div className={styles.little_box}>15</div>
      </div>

      <div className={styles.box}>

        <div className={styles.question}>
          <p className={styles.p}>
            {index + 1}
            {". "} 
            {questions[index].question}
          </p>
        </div>

        <div className={styles.answer}>
          <div className={styles.box_answer}>
            <button type='button' onClick={() => change("a")} className={styles.btn}>
              {questions[index].answers.a}
            </button>
          </div>

          <div className={styles.box_answer}>
            <button type='button' onClick={() => change("b")} className={styles.btn}>
              {questions[index].answers.b}
            </button>
          </div>

          <div className={styles.box_answer}>
            <button
              type='button'
              onClick={() => change("c")}
              className={styles.btn}
            >
              {questions[index].answers.c}
            </button>
          </div>

          <div className={styles.box_answer}>
            <button type='button' onClick={() => change("d")} className={styles.btn}>
              {questions[index].answers.d}
            </button>
          </div>
        </div>
      </div>
    </body>
  )
}
