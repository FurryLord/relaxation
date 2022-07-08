import CSS from 'csstype'
import { useNavigate, useLocation } from 'react-router-dom'
import { NavibarBack } from '../../Index_page/Navbar/NaviBarBack';



export function Question10() {
    const body: CSS.Properties = {
        backgroundColor: '#FEE9C6',
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


    const box: CSS.Properties = {
        position: 'absolute',
        width: '72vw',
        height:'57vh',
        display: "flex",
        flexWrap: "wrap",
        margin:'31vh auto',
        filter: "drop-shadow(-10px 10px 0px #000000)",
        
    }
     const little_box: CSS.Properties = {
        width: '2vw',
        height:'4vh',
        background: "#41A6E1",
        textAlign: "center",
        
    }

    const little_box_now: CSS.Properties = {
        width: '2vw',
        height:'4vh',
        background: "#41A6E1",
        textAlign: "center",
        border: "1px solid #000000",
        
    }

    const little_box_pass: CSS.Properties = {
        width: '2vw',
        height:'4vh',
        background: "#005DA3",
        textAlign: "center",
        
    }

     const block: CSS.Properties = {
        position: 'absolute',
        top: "22vh",
        width: '72vw',
        height:'4vh',
        display: "flex",
        justifyContent: "space-between",

    }


    const question: CSS.Properties = {
    
        width: '72vw',
        height:'28vh',
        background: "#41A6E1",
        border: "1px solid #000000",
    }

    const answer: CSS.Properties = {
        width: '72vw',
        height:'29vh',
        background: "#FEEAC5",
        border: "1px solid #000000",
        display: "flex",
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        justifyContent: "space-around",
        alignContent: 'space-evenly',
    }

   
   

    const box_answer: CSS.Properties = {
        // border: "1px solid #000000",
        width: '34vw',
        height:'8vh',
    }

    const btn: CSS.Properties = {
        color: "black",
        width: '34vw',
        height:'8vh',
        background: "#FEE9C6",
        border: "1px solid #000000"

    }


    let qu = require('./question.json')
    const navigate = useNavigate()


    return (
        <body style={body}>
            <NavibarBack />
            <div style={block}>
                <div style={little_box_pass} id="b1">1</div>
                <div style={little_box_pass} id="b2">2</div>
                <div style={little_box_pass} id="b3">3</div>
                <div style={little_box_pass} id="b4">4</div>
                <div style={little_box_pass} id="b5">5</div>
                <div style={little_box_pass} id="b6">6</div>
                <div style={little_box_pass} id="b7">7</div>
                <div style={little_box_pass} id="b8">8</div>
                <div style={little_box_pass} id="b9">9</div>
                <div style={little_box_now} id="b10">10</div>
                <div style={little_box} id="b11">11</div>
                <div style={little_box} id="b12">12</div>
                <div style={little_box} id="b13">13</div>
                <div style={little_box} id="b14">14</div>
                <div style={little_box} id="b15">15</div>
            </div>
            <div style={box}>
                <div style={question}>
                    <p>Question</p>
                    <p>{qu.q10.question}</p>
                </div>

                <div style={answer}>
                    <div style={box_answer} onClick={() => navigate('/home/GameOver')}>
                        <button style={btn}>{qu.q10.answers.a}</button>
                    </div>
                    <div style={box_answer} onClick={() => navigate('/home/Question11')}>
                        <button style={btn}>{qu.q10.answers.b}</button>
                    </div>
                    <div style={box_answer} onClick={() => navigate('/home/GameOver')}>
                        <button style={btn}>{qu.q10.answers.c}</button>
                    </div>
                    <div style={box_answer} onClick={() => navigate('/home/GameOver')}>
                        <button style={btn}>{qu.q10.answers.d}</button>
                    </div>
                </div>
            </div>
     
        </body>
        
    );
}