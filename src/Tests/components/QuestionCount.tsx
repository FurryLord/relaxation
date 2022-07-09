// @ts-ignore
import stylesPsy from "../Psy.module.css"

type QuestionCount = {
  counter: number
  total: number
}

export function QuestionCount(count: QuestionCount) {
  return (
      <div className={stylesPsy.questionCount}>
      Question <span>{count.counter}</span> of <span>{count.total}</span>
    </div>
  )
}
