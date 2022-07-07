const linkReducer = (state = "false", action: { type: any }) => {
    switch(action.type){
        case "COPY":
            return !state
    }
}
export default linkReducer