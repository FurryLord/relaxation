import CSS from "csstype";
import { NavibarBack } from '../Index_page/Navbar/NaviBarBack';
import { Test } from "./components/Test";
// @ts-ignore
import questionContent1 from "./Contents/QuestionContent1";
import resultContent1 from "./Contents/ResultContent1";
// @ts-ignore
import backgroundRetro from "../img/background.png"

export function Test1() {

    const body: CSS.Properties = {
        /* Background */
        backgroundImage: `url(${backgroundRetro})`,
        backgroundBlendMode: "soft-light",
        backgroundSize: 'cover',
        backgroundPosition: '0 50vh',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        borderWidth: "none",
        borderStyle: "none",
        borderColor: "none",
        backgroundColor: '#FEEAC5',
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