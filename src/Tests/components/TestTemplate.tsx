import { ChangeEventHandler } from "react"
import { Question } from "./Question"
import { QuestionCount } from "./QuestionCount"
import { AnswerOption } from "./AnswerOption"
// @ts-ignore
import stylesPsy from "../Psy.module.css"

type Test = {
  question: string
  questionId: number
  questionTotal: number
  // eslint-disable-next-line react/no-unused-prop-types
  answer: string
  answerOptions: {
    type: string
    content: string
  }[]
  onAnswerSelected: ChangeEventHandler<HTMLInputElement>
}

export function TestTemplate(props: Test) {
  return (
    <div key={props.questionId}>
      <div className={stylesPsy.questionField}>
        <QuestionCount counter={props.questionId} total={props.questionTotal} />
        <Question content={props.question} />
      </div>
      <div className={stylesPsy.answerOptions}>
        <AnswerOption
          answerType={props.answerOptions[0].type}
          onAnswerSelected={props.onAnswerSelected}
          questionId={props.questionId}
          answerContent={props.answerOptions[0].content}
        />
        <AnswerOption
          answerType={props.answerOptions[1].type}
          onAnswerSelected={props.onAnswerSelected}
          questionId={props.questionId}
          answerContent={props.answerOptions[1].content}
        />
        <AnswerOption
          answerType={props.answerOptions[2].type}
          onAnswerSelected={props.onAnswerSelected}
          questionId={props.questionId}
          answerContent={props.answerOptions[2].content}
        />
        <AnswerOption
          answerType={props.answerOptions[3].type}
          onAnswerSelected={props.onAnswerSelected}
          questionId={props.questionId}
          answerContent={props.answerOptions[3].content}
        />
      </div>
    </div>
  )
}
