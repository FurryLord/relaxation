import CSS from "csstype";
import { Question } from './Question';
import { QuestionCount } from './QuestionCount';
import { AnswerOption } from './AnswerOption';
import { ChangeEventHandler } from 'react';

type Test = {
    question: string;
    questionId: number;
    questionTotal: number;
    answer: string;
    answerOptions:
    {
        type: string,
        content: string
    }[]
    onAnswerSelected: ChangeEventHandler<HTMLInputElement>;
}

type Key = {
    content: string;
    type: string;
}

export function TestTemplate(props: Test) {
    
    const questionField: CSS.Properties = {
        height: '17vh',
        background: '#6ACD94',
        margin: '0',
        borderBottom: '0.01em solid #000000' 
    }

    const answerOptions: CSS.Properties = {
        display: 'flex',
        flexWrap: 'wrap',
        height: '48vh',
        paddingLeft: '3%',
        alignContent: 'space-evenly',
    }

    return (
        <div key={props.questionId}>
            <div style={questionField}>
                <QuestionCount counter={props.questionId} total={props.questionTotal} />
                <Question content={props.question} />
            </div>
            <div style={answerOptions}>
                <AnswerOption answerType={props.answerOptions[0].type} onAnswerSelected={props.onAnswerSelected}
                    questionId={props.questionId} answerContent={props.answerOptions[0].content} />
                <AnswerOption answerType={props.answerOptions[1].type} onAnswerSelected={props.onAnswerSelected}
                    questionId={props.questionId} answerContent={props.answerOptions[1].content} />
                <AnswerOption answerType={props.answerOptions[2].type} onAnswerSelected={props.onAnswerSelected}
                    questionId={props.questionId} answerContent={props.answerOptions[2].content} />
                <AnswerOption answerType={props.answerOptions[3].type} onAnswerSelected={props.onAnswerSelected}
                    questionId={props.questionId} answerContent={props.answerOptions[3].content} />
            </div>
        </div>
    )
}