import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line import/extensions
import { Navibar } from '../Navbar/Navibar';
import CSS from "csstype";

// @ts-ignore
import woman from "../img/woman.png";
// @ts-ignore
import backgroundRetro from "../img/background.png";

// eslint-disable-next-line import/prefer-default-export
export function Index() {
    const navigate = useNavigate();
    const routeChange = () =>{
        let path = '/reglog'
        navigate(path)
    }
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
    const main: CSS.Properties = {

        /* Size */
        height: '90vh',
        width: '100vw',

        /* Display */
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',

        margin: '0',
        padding: '0',
    };
    const GreetingWrapper: CSS.Properties = {
        /* Size */
        width: '85%',
        height: '95%',

        /* Display */
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',

        margin: '0',
        padding: '0',
        position: "relative",
    };

    const GreetingInnerCard1: CSS.Properties = {
        backgroundColor: '#F8A7A4',
        border: '1px solid #000000',

        /* Size */
        width: '95%',
        height: '85%',
        boxShadow: '0 0 0 0',
        margin: '0',
        padding: '0',
        top: '75px',
        right: '60px',
        zIndex: '1',
        position: 'absolute',
    };
    const GreetingInnerCard2: CSS.Properties = {
        backgroundColor: '#EF4E32',
        border: '1px solid #000000',

        /* Size */
        width: '95%',
        height: '85%',
        boxShadow: '0 0 0 0',
        margin: '0',
        padding: '0',

        top: '50px',
        right: '40px',
        zIndex: '2',
        position: 'absolute',
    };
    const GreetingInnerCard3: CSS.Properties = {
        backgroundColor: '#FFD203',
        border: '1px solid #000000',

        /* Size */
        width: '95%',
        height: '85%',
        boxShadow: '0 0 0 0',
        margin: '0',
        padding: '0',

        top: '25px',
        right: '20px',
        zIndex: '3',
        position: 'absolute',
    };
    const GreetingInnerCard4: CSS.Properties = {
        backgroundColor: '#FEEAC5',
        border: '1px solid #000000',

        /* Size */
        width: '95%',
        height: '85%',
        boxShadow: '0 0 0 0',
        margin: '0',
        padding: '0',

        top: '0',
        right: '0',
        zIndex: '4',
        position: 'absolute',
        /* Display */
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    };
    const GreetingInner: CSS.Properties = {
        width: '90%',
        height: '95%',

        padding: '0',
        margin: '0',
    };
    const GreetingInnerTitle: CSS.Properties = {
        color: '#000000',
        fontFamily: 'Roboto Condensed',
        fontSize: '48px',
        marginTop: '0',
    };
    const GreetingInnerText: CSS.Properties = {
        color: '#000000',
        fontFamily: 'Roboto Condensed',
        fontSize: '36px',
    };
    const GreetingInnerLogo: CSS.Properties = {
        color: '#000000',
        fontFamily: 'Parisienne',
        fontSize: '96px',
    };
    const GreetingInnerTextBold: CSS.Properties = {
        fontWeight: 'bold',
    };
    const GreetingButton: CSS.Properties = {
        background: '#F8A7A4',
        border: '5px solid #000000',
        boxShadow: '-5px 5px 0px #000000',
        borderRadius: '80px',

        height: '6rem',
        width: '16rem',

        fontFamily: 'Roboto',
        fontSize: '36px',
        color: '#000000',
    };
    const GreetingWoman: CSS.Properties = {
        boxShadow: '0 0 0 0',

        width: '25%',
        height: 'auto',

        position: "absolute",
        left: 0,
        bottom: 0,
        padding: '0 0 10px 10px'
    }
    return (
        <body style={body}>
            <Navibar/>
            {/* eslint-disable-next-line react/button-has-type */}
            <main style={main}>
                <div style={GreetingWrapper}>
                    <div style={GreetingInnerCard4}>
                        <div style={GreetingInner}>
                            <p style={GreetingInnerTitle} >Welcome to <span style={GreetingInnerLogo}>Relaxacion!</span></p>
                            <p style={GreetingInnerText}> Place where you can find yourself in <span style={GreetingInnerTextBold}>tests</span>,
                                stuck in <span style={GreetingInnerTextBold}>memes</span>,
                               and tense your <span style={GreetingInnerTextBold}>logic</span>.
                            </p>
                            <button style={GreetingButton} onClick={routeChange}>Play Now!</button>
                        </div>
                        <img style={GreetingWoman} src={woman}/>
                    </div>
                    <div style={GreetingInnerCard3}/>
                    <div style={GreetingInnerCard2}/>
                    <div style={GreetingInnerCard1}/>
                </div>
            </main>
        </body>
    );
}