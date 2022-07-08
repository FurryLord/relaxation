import CSS from 'csstype'
import { useNavigate, useLocation } from 'react-router-dom'
import { NavibarBack } from '../../Index_page/Navbar/NaviBarBack';


export function GameOver() {
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
                <div style={little_box}>1</div>
                <div style={little_box}>2</div>
                <div style={little_box}>3</div>
                <div style={little_box}>4</div>
                <div style={little_box}>5</div>
                <div style={little_box}>6</div>
                <div style={little_box}>7</div>
                <div style={little_box}>8</div>
                <div style={little_box}>9</div>
                <div style={little_box}>10</div>
                <div style={little_box}>11</div>
                <div style={little_box}>12</div>
                <div style={little_box}>13</div>
                <div style={little_box}>14</div>
                <div style={little_box}>15</div>
            </div>
            <div style={box}>
                <div style={question}>
                    <p>You lose!</p>
                </div>

                <div style={answer}>
                    <div style={box_answer} id="a">
                        <button style={btn} onClick={() => navigate('/home/Game1')}>Start over!</button>
                    </div>   
                </div>
            </div>
        </body>
        
    );
}