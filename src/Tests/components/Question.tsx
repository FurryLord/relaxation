// @ts-ignore
import stylesPsy from "../Psy.module.css"

type Question = {
  content: string
}

export function Question(props: Question) {
  return (
    <h2 className={stylesPsy.question}> 
      {' '}
      {props.content}
      {' '}
    </h2>
)
}
