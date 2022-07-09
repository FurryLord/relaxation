// @ts-ignore
import stylesPsy from "../Psy.module.css"

type Result = {
  result: string
  description: string
  imageURL: string
}

export function Result(props: Result) {
  return (
    <div className={stylesPsy.resultCard}>
      <div className={stylesPsy.resultField}>
        <div className={stylesPsy.resultText}>Result</div>
        <h2 className={stylesPsy.resultContent}>You are - {props.result}</h2>
      </div>
      <div className={stylesPsy.resultDescription}>
        <div>
          <img className={stylesPsy.resultImage} src={props.imageURL} alt='result img' />
        </div>
        <div className={stylesPsy.resultDescriptionContent}>{props.description}</div>
      </div>
    </div>
  )
}
