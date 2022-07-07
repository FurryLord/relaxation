import { useNavigate } from 'react-router-dom'
import CSS from 'csstype'
// eslint-disable-next-line import/prefer-default-export
export function NavibarBack() {
    const navigate = useNavigate()
    const nav: CSS.Properties = {
        backgroundColor: '#FEE9C6',
        /* Size */
        width: '100%',
        height: 'fit-content',

        /* Display */
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'flex-start',
        alignItems: 'center',

        /* Others */
        borderBottom: '2px solid #000000',
    }
    const logoBox: CSS.Properties = {
        backgroundColor: '#FEE9C6',

        height: 'fit-content',
        width: 'fit-content',
        /* Display */
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        placeContent: 'center',
        flexDirection: 'row',
        flexWrap: 'nowrap',
    }
    const logoText: CSS.Properties = {
        backgroundColor: '#FEE9C6',
        color: '#000000',
        fontFamily: 'Parisienne',
        fontSize: '48px',

        /* Size */
        // height: 'fit-content',
        // width: 'fit-content',

        /* Display */
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        placeContent: 'center',
        flexDirection: 'row',
        flexWrap: 'nowrap',

        /* Others */
        margin: '0',
        marginLeft: '15px',
        padding: '0',
    }

    const HomeButton: CSS.Properties = {
        border: '1px solid #000000',
        width: 'fit-content',
        margin: '0% 0% 0% 5%',
        padding: '0% 13% 0% 13%',
        textAlign: 'center',


        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '1.5em',
        lineHeight: '2em',
        backgroundColor: '#FEE9C6',
        color: 'black'
    }

    return (
        <header style={nav}>
            <div style={logoBox}>
                <button onClick={() => navigate('/')} style={logoText}>Relaxacion</button>
                <button onClick={() => navigate('/home')} style={HomeButton} >Home</button>
            </div>
        </header>
    )
}