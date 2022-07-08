import CSS from "csstype";
import { TestTemplate } from "./TestTemplate";
import { Result } from "./Result";
import React, { Component } from 'react';

type MyProps = {
    questionContent: {
        question: string;
        answers: {
            type: string;
            content: string;
        }[];
    }[],
    resultContent: {
        result: string;
        description: string;
        imageURL: string;
    }[]
}

type MyState = {
    counter: number,
    questionId: number,
    question: string,
    answerOptions:
    {
        type: string,
        content: string
    }[],
    answer: string,
    answersCount: {
        Microsoft: number
        Nintendo: number
        Sony: number
    },
    result: string,
    description: string,
    imageURL: string
}

export class Test extends Component<MyProps, MyState> {
    constructor(props: MyProps) {
        super(props);

        this.state = {
            counter: 0,
            questionId: 1,
            question: '',
            answerOptions: [
                {
                    type: '',
                    content: ''
                },
                {
                    type: '',
                    content: ''
                },
                {
                    type: '',
                    content: ''
                },
                {
                    type: '',
                    content: ''
                }
            ],
            answer: '',
            answersCount: {
                Microsoft: 0,
                Nintendo: 0,
                Sony: 0
            },
            result: '',
            description: '',
            imageURL: ''
        };

        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    }

    componentDidMount() {
        this.setState({
            question: this.props.questionContent[0].question,
            answerOptions: this.props.questionContent[0].answers
        });
    }

    handleAnswerSelected(event: { currentTarget: { value: any; }; }) {
        this.setUserAnswer(event.currentTarget.value);

        if (this.state.questionId < this.props.questionContent.length) {
            setTimeout(() => this.setNextQuestion(), 300);
        } else {
            setTimeout(() => this.setResults(this.getResults()), 300);
        }
    }

    setUserAnswer(answer: keyof typeof this.state.answersCount) {
        this.setState((state, props) => ({
            answersCount: {
                ...state.answersCount,
                [answer]: (state.answersCount[answer] || 0) + 1
            },
            answer: answer
        }));
    }

    setNextQuestion() {
        const counter = this.state.counter + 1;
        const questionId = this.state.questionId + 1;

        this.setState({
            counter: counter,
            questionId: questionId,
            question: this.props.questionContent[counter].question,
            answerOptions: this.props.questionContent[counter].answers,
            answer: ''
        });
    }

    getResults() {
        const answersCount = this.state.answersCount;
        const answersCountKeys = Object.keys(answersCount);
        const answersCountValues = answersCountKeys.map(key => answersCount[key as keyof typeof answersCount]);
        const maxAnswerCount = Math.max.apply(null, answersCountValues);

        return answersCountKeys.filter(key => answersCount[key as keyof typeof answersCount] === maxAnswerCount);
    }

    setResults(result: string[]) {
        if (result.length === 1) {
            this.setState({ result: result[0] });
        } else {
            this.setState({ result: 'Undetermined' });
        }
    }

    renderQuiz() {
        return (
            <TestTemplate
                answer={this.state.answer}
                answerOptions={this.state.answerOptions}
                questionId={this.state.questionId}
                question={this.state.question}
                questionTotal={this.props.questionContent.length}
                onAnswerSelected={this.handleAnswerSelected}
            />
        );
    }

    renderResult() {
        for (let index = 0; index < this.props.resultContent.length; index++) {
            if (this.state.result === this.props.resultContent[index].result) {
                this.setState({ description: this.props.resultContent[index].description });
                this.setState({ imageURL: this.props.resultContent[index].imageURL });
            }
        }
        return <Result result={this.state.result} description={this.state.description}
            imageURL={this.state.imageURL} />;
    }

    testContainer: CSS.Properties = {
        position: 'absolute',
        top: '27vh',
        width: '74vw',
        height: '65vh',
        border: '0.01em solid #000000',
        background: '#FEEAC5',
        // filter: 'drop-shadow(-10px 10px 0px #000000)'

    }

    render() {
        return (
            <div style={this.testContainer}>
                {this.state.result ? this.renderResult() : this.renderQuiz()}
            </div>
        );
    }
}