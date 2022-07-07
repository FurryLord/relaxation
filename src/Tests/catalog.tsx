import CSS from "csstype";
import { NavibarBack } from '../Index_page/Navbar/NaviBarBack';

export function Catalog() {

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

    const container: CSS.Properties = {
        display: 'flex',
        width: '90%',
        top: '30%',
        position: 'absolute',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        filter: 'drop-shadow(-5px 5px 0px #000000)'
    }

    const test: CSS.Properties = {
        boxSizing: 'border-box',
        position: 'relative',
        width: '22vw',
        height: '23vh',
        background: '#6ACD94',
        border: '1px solid #000000'
    }

    const namebox: CSS.Properties = {
        boxSizing: 'border-box',
        width: '100%',
        height: '5vh',
        position: 'absolute',
        bottom: '0',
        background: '#ffffff',
        borderTop: '1px solid #000000'
    }

    const text: CSS.Properties = {
        fontFamily: 'Inter',
        fontSize: '32px',
        marginLeft: '5%'
    }

    return (
        <body style={body}>
            <NavibarBack />
            <h1 style={headline}>Tests</h1>
            <div style={container}>
                <div style={test}>
                    <div style={namebox}>
                        <a style={text}>Test 1</a>
                    </div>
                </div>
                <div style={test}>
                    <div style={namebox}>
                        <a style={text}>Test 2</a>
                    </div>
                </div>
                <div style={test}>
                    <div style={namebox}>
                        <a style={text}>Test 3</a>
                    </div>
                </div>
            </div>
        </body>
    )
}