import CSS from 'csstype'
import { useNavigate, useLocation } from 'react-router-dom'
import { NavibarBack } from '../../Index_page/Navbar/NaviBarBack';
// @ts-ignore
import styles from "./gameStyle.module.css";

export function Question7() {

    let qu = require('./question.json')
    const navigate = useNavigate()

    return (
        <body className={styles.body}>
            <NavibarBack />
            <div className={styles.block}>
                <div className={styles.little_box_pass} id="b1">1</div>
                <div className={styles.little_box_pass} id="b2">2</div>
                <div className={styles.little_box_pass} id="b3">3</div>
                <div className={styles.little_box_pass} id="b4">4</div>
                <div className={styles.little_box_pass} id="b5">5</div>
                <div className={styles.little_box_pass} id="b6">6</div>
                <div className={styles.little_box_now} id="b7">7</div>
                <div className={styles.little_box} id="b8">8</div>
                <div className={styles.little_box} id="b9">9</div>
                <div className={styles.little_box} id="b10">10</div>
                <div className={styles.little_box} id="b11">11</div>
                <div className={styles.little_box} id="b12">12</div>
                <div className={styles.little_box} id="b13">13</div>
                <div className={styles.little_box} id="b14">14</div>
                <div className={styles.little_box} id="b15">15</div>
            </div>
            <div className={styles.box}>
                <div className={styles.question}>
                    <h3 className={styles.h3}>Question</h3>
                    <p className={styles.p}>{qu.q7.question}</p>
                </div>

                <div className={styles.answer}>
                    <div className={styles.box_answer} onClick={() => navigate('/home/Question8')}>
                        <button className={styles.btn}>{qu.q7.answers.a}</button>
                    </div>
                    <div className={styles.box_answer} onClick={() => navigate('/home/GameOver')}>
                        <button className={styles.btn}>{qu.q7.answers.b}</button>
                    </div>
                    <div className={styles.box_answer} onClick={() => navigate('/home/GameOver')}>
                        <button className={styles.btn}>{qu.q7.answers.c}</button>
                    </div>
                    <div className={styles.box_answer} onClick={() => navigate('/home/GameOver')}>
                        <button className={styles.btn}>{qu.q7.answers.d}</button>
                    </div>
                </div>
            </div>
     
        </body>
        
    );
}