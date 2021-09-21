import TodoContainer from "./Todo Container/TodoContainer"

function Container() {
  return (
    <div className="Container">
      <div className="header-container">
        <div className="header-title">
          <span>Todo</span>
        </div>
        <div className="header-count">
          <span className="header-total">Total: 10</span>
          <span className="header-left">Amount Left: 10</span>
          <span className="header-completed">Amount Completed: 10</span>
        </div>
      </div>
      <TodoContainer />
    </div>
  )
}

export default Container
