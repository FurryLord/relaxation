import { ChangeEventHandler } from 'react'
import CSS from 'csstype'

type AnswerOption = {
  answerType: string
  answerContent: string
  onAnswerSelected: ChangeEventHandler<HTMLInputElement>
  questionId: number
}

export function AnswerOption(option: AnswerOption) {
  const answerOption: CSS.Properties = {
    paddingBottom: '1%',
    width: '74vw',
    borderBottom: '1px solid #000000',
    marginRight: '2.5rem',
  }

  const radioButton: CSS.Properties = {
    position: 'absolute',

    width: '24px',
    height: '24px',
    content: '',
    display: 'inline-block',
    verticalAlign: 'middle',
    marginBottom: '0',
    marginTop: '0.4%',

    borderRadius: '50%',
    transition: 'all 0.2s',
    filter: 'drop-shadow(-1px 2px 0px #6ACD94)',
  }

  const radioCustomLabel: CSS.Properties = {
    display: 'inline - block',
    verticalAlign: 'middle',
    cursor: 'pointer',
    margin: '0',
    paddingLeft: '2.5rem',
    fontSize: '26px',
  }

  return (
    <div style={answerOption}>
      <input
        type='radio'
        style={radioButton}
        id={option.answerType}
        value={option.answerType}
        onChange={option.onAnswerSelected}
      />
      <label style={radioCustomLabel} htmlFor={option.answerType}>
        {option.answerContent}
      </label>
    </div>
  )
}
