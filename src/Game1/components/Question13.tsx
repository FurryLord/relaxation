import CSS from 'csstype'
import { useNavigate, useLocation } from 'react-router-dom'
import { NavibarBack } from '../../Index_page/Navbar/NaviBarBack'
// @ts-ignore
import styles from './gameStyle.module.css'

export function Question13() {
  const qu = require('./question.json')
  const navigate = useNavigate()

  return (
    <body className={styles.body}>
      <NavibarBack />
      <div className={styles.block}>
        <div className={styles.little_box_pass} id='b1'>
          1
        </div>
        <div className={styles.little_box_pass} id='b2'>
          2
        </div>
        <div className={styles.little_box_pass} id='b3'>
          3
        </div>
        <div className={styles.little_box_pass} id='b4'>
          4
        </div>
        <div className={styles.little_box_pass} id='b5'>
          5
        </div>
        <div className={styles.little_box_pass} id='b6'>
          6
        </div>
        <div className={styles.little_box_pass} id='b7'>
          7
        </div>
        <div className={styles.little_box_pass} id='b8'>
          8
        </div>
        <div className={styles.little_box_pass} id='b9'>
          9
        </div>
        <div className={styles.little_box_pass} id='b10'>
          10
        </div>
        <div className={styles.little_box_pass} id='b11'>
          11
        </div>
        <div className={styles.little_box_pass} id='b12'>
          12
        </div>
        <div className={styles.little_box_now} id='b13'>
          13
        </div>
        <div className={styles.little_box} id='b14'>
          14
        </div>
        <div className={styles.little_box} id='b15'>
          15
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.question}>
          <p className={styles.p}>{qu.q13.question}</p>
        </div>

        <div className={styles.answer}>
          <div className={styles.box_answer} onClick={() => navigate('/home/GameOver')}>
            <button className={styles.btn}>{qu.q13.answers.a}</button>
          </div>
          <div className={styles.box_answer} onClick={() => navigate('/home/GameOver')}>
            <button className={styles.btn}>{qu.q13.answers.b}</button>
          </div>
          <div className={styles.box_answer} onClick={() => navigate('/home/Question14')}>
            <button className={styles.btn}>{qu.q13.answers.c}</button>
          </div>
          <div className={styles.box_answer} onClick={() => navigate('/home/GameOver')}>
            <button className={styles.btn}>{qu.q13.answers.d}</button>
          </div>
        </div>
      </div>
    </body>
  )
}
