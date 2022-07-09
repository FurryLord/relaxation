import CSS from "csstype"

type Question = {
  content: string
}

export function Question(props: Question) {
  const question: CSS.Properties = {
    fontFamily: "Roboto Condensed",
    fontSize: "40px",
    marginTop: "2vh",
    marginLeft: "2vw",
  }

  return <h2 style={question}>{props.content}</h2>
}
