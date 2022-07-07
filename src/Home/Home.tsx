import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line import/extensions
import { NavibarBack } from '../Index_page/Navbar/NaviBarBack';
// @ts-ignore
import backgroundRetro from "../img/background.png"
import CSS from "csstype";

// eslint-disable-next-line import/prefer-default-export
export function Home() {
    const navigate = useNavigate();
    const routeChangeMeme = () =>{
        let path = '/home/meme_page'
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
    const HomeWrapper: CSS.Properties = {
        /* Size */
        width: '100%',
        height: '95%',

        /* Display */
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'flex-start',
        alignItems: 'center',

        margin: '0',
        padding: '0',
        position: "relative",
    };

    const HomeInnerTitle: CSS.Properties = {
        color: '#000000',
        fontFamily: 'Roboto Condensed',
        fontSize: 'calc(20px + (36 - 20) * ((100vw - 280px) / (1920 - 280)))',
        margin: '2% 0 0 0',
    };
    const HomeInnerTitleName: CSS.Properties = {
        color: '#000000',
        fontFamily: 'Roboto Condensed',
        fontSize: 'calc(36px + (48 - 36) * ((100vw - 280px) / (1920 - 280)))',
    };
    const HomeCatalogue: CSS.Properties = {
        width: '100%',
        height: '100%',
        /* Display */
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    }
    const HomeButtonMeme: CSS.Properties = {
        background: '#D7A6D9',
        border: '5px solid #000000',
        boxShadow: '-15px 15px 0px #000000',
        borderRadius: '0px',

        height: 'calc(156px + (375 - 156) * ((100vw - 280px) / (1920 - 280)))',
        width: 'calc(156px + (480 - 156) * ((100vw - 280px) / (1920 - 280)))',

        /* Display */
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',

        margin: '1.25%',
        padding: '0',
    };
    const HomeButtonPsy: CSS.Properties = {
        background: '#6ACD94',
        border: '5px solid #000000',
        boxShadow: '-15px 15px 0px #000000',
        borderRadius: '0px',

        height: 'calc(156px + (375 - 156) * ((100vw - 280px) / (1920 - 280)))',
        width: 'calc(156px + (480 - 156) * ((100vw - 280px) / (1920 - 280)))',

        /* Display */
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',

        margin: '1.25%',
        padding: '0',
    };
    const HomeButtonLg: CSS.Properties = {
        background: '#41A6E1',
        border: '5px solid #000000',
        boxShadow: '-15px 15px 0px #000000',
        borderRadius: '0px',

        height: 'calc(156px + (375 - 156) * ((100vw - 280px) / (1920 - 280)))',
        width: 'calc(156px + (480 - 156) * ((100vw - 280px) / (1920 - 280)))',

        /* Display */
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',

        margin: '1.25%',
        padding: '0',
    };
    const HomeButtonText: CSS.Properties = {
        fontFamily: 'Roboto Condensed',
        fontSize: 'calc(36px + (48 - 36) * ((100vw - 280px) / (1920 - 280)))',
        fontWeight: 'bold',
        color: '#000000',
        /* Display */
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',

        margin: '0',
        padding: '0',
    };
    return (
        <body style={body}>
            <NavibarBack/>
            {/* eslint-disable-next-line react/button-has-type */}
            <main style={main}>
                <div style={HomeWrapper}>
                    <p style={HomeInnerTitle}>Hello, <span style={HomeInnerTitleName}>name!</span> </p>
                    <div style={HomeCatalogue}>
                        <button style={HomeButtonMeme} onClick={routeChangeMeme}>
                            <p style={HomeButtonText}>Meme</p>
                            <p style={HomeButtonText}>Generator</p>
                        </button>
                        <button style={HomeButtonPsy}>
                            <p style={HomeButtonText}>Psychological</p>
                            <p style={HomeButtonText}>Tests</p>
                        </button>
                        <button style={HomeButtonLg}>
                            <p style={HomeButtonText}>Logic</p>
                            <p style={HomeButtonText}>Games</p>
                        </button>
                    </div>
                </div>
            </main>
        </body>
    );
}