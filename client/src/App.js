import logo from "./logo.svg"
import "./App.css"
import axios from "axios"
import { useEffect } from "react"

function App() {
  useEffect(() => {
    axios.post("/addTodo", {
      todo: "will this work?",
      completed: true,
      catagorie_id: 3,
    })
    axios.get("/getAllTodo").then((res) => console.log(res.data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
