import CSS from 'csstype'
import { NavibarBack } from '../../Index_page/Navbar/NaviBarBack';

export function Game(){

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

    const block: CSS.Properties = {
        position: 'absolute',
        top: "22vh",
        width: '72vw',
        height:'4vh',
        display: "flex",
        justifyContent: "space-between",

    }

    const little_box: CSS.Properties = {
        width: '2vw',
        height:'4vh',
        background: "#41A6E1",
        textAlign: "center",
        
    }

    const box_answer: CSS.Properties = {
        border: "1px solid #000000",
        width: '34vw',
        height:'8vh',
    }

    return ( 

        <body style={body}>
            <NavibarBack />
            <div style={block}>
                <div style={little_box} id="b1">1</div>
                <div style={little_box} id="b2">2</div>
                <div style={little_box} id="b3">3</div>
                <div style={little_box} id="b4">4</div>
                <div style={little_box} id="b5">5</div>
                <div style={little_box} id="b6">6</div>
                <div style={little_box} id="b7">7</div>
                <div style={little_box} id="b8">8</div>
                <div style={little_box} id="b9">9</div>
                <div style={little_box} id="b10">10</div>
                <div style={little_box} id="b11">11</div>
                <div style={little_box} id="b12">12</div>
                <div style={little_box} id="b13">13</div>
                <div style={little_box} id="b14">14</div>
                <div style={little_box} id="b15">15</div>
            </div>
            <div style={box}>
                <div style={question}>Question</div>
                <div style={answer}>
                    <div style={box_answer} id="a">a</div>
                    <div style={box_answer} id="b">b</div>
                    <div style={box_answer} id="c">c</div>
                    <div style={box_answer} id="d">d</div>
                    
                </div>
            </div>
            

        </body>

    );
}