import { useNavigate } from "react-router-dom"
import { NavibarBack } from "../Index_page/Navbar/NaviBarBack"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import styles from "./gameStyl.module.css"

export function Win() {
  // eslint-disable-next-line @typescript-eslint/no-var-requires,global-require
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
        <div className={styles.little_box_pass} id='b13'>
          13
        </div>
        <div className={styles.little_box_pass} id='b14'>
          14
        </div>
        <div className={styles.little_box_pass} id='b15'>
          15
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.question}>
          <p className={styles.p}>You win!</p>
        </div>

        <div className={styles.answer}>
          <div className={styles.box_answer} id='a'>
            <button type='button' className={styles.btn} onClick={() => navigate("/home/startGame")}>
              Start again!
            </button>
          </div>
        </div>
      </div>
    </body>
  )
}
