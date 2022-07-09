// eslint-disable-next-line default-param-last
const linkReducer = (state = "false", action: { type: any }) => {
  switch (action.type) {
    case "COPY":
      return "Link copied!"
    default:
      return "copy"
  }
}
export default linkReducer
