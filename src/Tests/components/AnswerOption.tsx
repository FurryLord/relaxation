import { ChangeEventHandler } from "react"
// @ts-ignore
import stylesPsy from "../Psy.module.css"

type AnswerOption = {
  answerType: string
  answerContent: string
  onAnswerSelected: ChangeEventHandler<HTMLInputElement>
  questionId: number
}

export function AnswerOption(option: AnswerOption) {
  return (
    <div className={stylesPsy.answerOption}>
      <input
        type='radio'
        className={stylesPsy.radioButton}
        id={option.answerType}
        value={option.answerType}
        onChange={option.onAnswerSelected}
      />
      <label className={stylesPsy.radioCustomLabel} htmlFor={option.answerType}>
        {option.answerContent}
      </label>
    </div>
  )
}
