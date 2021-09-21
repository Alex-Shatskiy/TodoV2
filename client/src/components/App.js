import axios from "axios"
import { useEffect } from "react"
import Container from "./Container"
import NavBar from "./navbar"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container />
    </div>
  )
}

export default App
