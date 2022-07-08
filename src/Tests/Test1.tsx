import CSS from "csstype";
import { NavibarBack } from '../Index_page/Navbar/NaviBarBack';
import { Test } from "./components/Test";
import questionContent1 from "./Contents/QuestionContent1";
import resultContent1 from "./Contents/ResultContent1";

export function Test1() {

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

    const headline: CSS.Properties = {
        color: '#000000',
        fontFamily: 'Roboto Condensed',
        textShadow: '0px 0px 0px'
    }

    return (
        <body style={body}>
            <NavibarBack />
            <h1 style={headline}>What element are you?</h1>
            <Test questionContent={questionContent1} resultContent={resultContent1}></Test>
        </body>
    )
}