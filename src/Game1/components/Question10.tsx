import CSS from 'csstype'
import { useNavigate, useLocation } from 'react-router-dom'
import { NavibarBack } from '../../Index_page/Navbar/NaviBarBack'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import styles from './gameStyle.module.css'

// eslint-disable-next-line import/prefer-default-export
export function Question10() {
  // eslint-disable-next-line @typescript-eslint/no-var-requires,global-require
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
        <div className={styles.little_box_now} id='b10'>
          10
        </div>
        <div className={styles.little_box} id='b11'>
          11
        </div>
        <div className={styles.little_box} id='b12'>
          12
        </div>
        <div className={styles.little_box} id='b13'>
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
          <p className={styles.p}>{qu.q10.question}</p>
        </div>

        <div className={styles.answer}>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div className={styles.box_answer} onClick={() => navigate('/home/GameOver')}>
            {/* eslint-disable-next-line react/button-has-type */}
            <button className={styles.btn}>{qu.q10.answers.a}</button>
          </div>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div className={styles.box_answer} onClick={() => navigate('/home/Question11')}>
            {/* eslint-disable-next-line react/button-has-type */}
            <button className={styles.btn}>{qu.q10.answers.b}</button>
          </div>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div className={styles.box_answer} onClick={() => navigate('/home/GameOver')}>
            {/* eslint-disable-next-line react/button-has-type */}
            <button className={styles.btn}>{qu.q10.answers.c}</button>
          </div>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div className={styles.box_answer} onClick={() => navigate('/home/GameOver')}>
            {/* eslint-disable-next-line react/button-has-type */}
            <button className={styles.btn}>{qu.q10.answers.d}</button>
          </div>
        </div>
      </div>
    </body>
  )
}
