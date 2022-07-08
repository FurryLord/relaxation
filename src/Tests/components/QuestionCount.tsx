import CSS from "csstype";

type QuestionCount = {
    counter: number;
    total: number;
}

export function QuestionCount(count: QuestionCount) {

    const questionCount: CSS.Properties = {
        fontSize: '24px',
        fontFamily: 'Roboto Condensed',
        paddingLeft: '2vw',
        paddingTop: '1vw'
    }
    return (
        <div style={questionCount}>
            Question <span>{count.counter}</span> of <span>{count.total}</span>
        </div>
    );
}