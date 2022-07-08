import CSS from "csstype";

type Result = {
    result: string;
    description: string;
    imageURL: string;
}

export function Result(props: Result) {
    const resultField: CSS.Properties = {
        height: '17vh',
        background: '#6ACD94',
        margin: '0',
        borderBottom: '0.01em solid #000000' 
    }

    const resultText: CSS.Properties = {
        fontSize: '24px',
        fontFamily: 'Roboto Condensed',
        paddingLeft: '2vw',
        paddingTop: '1vw'
    }

    const resultContent: CSS.Properties = {
        fontFamily: 'Roboto Condensed',
        fontSize: '40px',
        marginTop: '2vh',
        marginLeft: '2vw'
    }

    const resultDesription: CSS.Properties = {
        display: 'flex',
        height: '48vh',
        borderBottom: '0.01em solid #000000' 
    }

    const image: CSS.Properties = {
        height: '48vh',
        margin: '0',
        boxShadow: '0px 0px 0px black'
    }

    const descriptionContent: CSS.Properties = {
        margin: '2%',
        fontFamily: 'Roboto Condensed',
        fontSize: '24px'
    }

    const shadow: CSS.Properties = {
        background: '#FEEAC5',
        filter: 'drop-shadow(-10px 10px 0px #000000)'
    }

    return (
        <div style={shadow}>
            <div style={resultField}>
                <div style={resultText}>Result</div>
                <h2 style={resultContent}>You are - {props.result}</h2>
            </div>
            <div style={resultDesription}>
                <div>
                    <img style={image} src={props.imageURL}></img>
                </div>
                <div style={descriptionContent}>
                    {props.description}
                </div>
            </div>
        </div>
    );
}