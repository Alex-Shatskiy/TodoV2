import { useState } from "react"

function NavBar() {
  const [toggle, setToggle] = useState("")

  const toggleNavBar = () => {
    if (toggle == "active") {
      setToggle("")
    } else {
      setToggle("active")
    }
  }

  return (
    <div className={`navbar ${toggle}`}>
      <nav>
        <div className={`title ${toggle}`}>Todo App</div>
        <a onClick={toggleNavBar} className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <div className={`navbar-links ${toggle}`}>
          <ul>
            <li>All</li>
            <li>Completed</li>
            <li>Not Done</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
