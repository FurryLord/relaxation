import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from "@reduxjs/toolkit"
// eslint-disable-next-line import/no-extraneous-dependencies
import { Provider } from "react-redux"
import { App } from "./App/App"
import reportWebVitals from "./reportWebVitals"
import linkReducer from "./Meme/reducer/counter"

const clientStore = configureStore(
  { reducer: { counter: linkReducer } },
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider store={clientStore}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
