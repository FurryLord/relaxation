import CSS from 'csstype'
import { useNavigate, useLocation } from 'react-router-dom'
import { NavibarBack } from '../../Index_page/Navbar/NaviBarBack'
// @ts-ignore
import styles from './gameStyle.module.css'

export function Question2() {
  const qu = require('./question.json')
  const navigate = useNavigate()

  return (
    <body className={styles.body}>
      <NavibarBack />
      <div className={styles.block}>
        <div className={styles.little_box_pass}>1</div>
        <div className={styles.little_box_now}>2</div>
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
          <p className={styles.p}>{qu.q2.question}</p>
        </div>

        <div className={styles.answer}>
          <div className={styles.box_answer} onClick={() => navigate('/home/Question3')}>
            <button className={styles.btn}>{qu.q2.answers.a}</button>
          </div>
          <div className={styles.box_answer} onClick={() => navigate('/home/GameOver')}>
            <button className={styles.btn}>{qu.q2.answers.b}</button>
          </div>
          <div className={styles.box_answer} onClick={() => navigate('/home/GameOver')}>
            <button className={styles.btn}>{qu.q2.answers.c}</button>
          </div>
          <div className={styles.box_answer} onClick={() => navigate('/home/GameOver')}>
            <button className={styles.btn}>{qu.q2.answers.d}</button>
          </div>
        </div>
      </div>
    </body>
  )
}
