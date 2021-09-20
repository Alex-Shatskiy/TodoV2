import axios from "axios"
import { useEffect } from "react"
import NavBar from "./navbar"

function App() {
  useEffect(() => {
    // axios.post("/addTodo", {
    //   todo: "will this work?",
    //   completed: true,
    //   catagorie_id: 3,
    // })
    // axios.get("/getAllTodo").then((res) => console.log(res.data))
  }, [])

  return (
    <div className="App">
      <NavBar />
    </div>
  )
}

export default App
