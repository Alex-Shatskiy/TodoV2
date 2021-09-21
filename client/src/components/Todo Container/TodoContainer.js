import { BsPlusCircle } from "react-icons/bs/"

function TodoContainer() {
  return (
    <div className="TodosContainer">
      <div className="each-todo">
        <input type="checkbox" value="todo" />
        <label data-content="Get out of bed">Get out of bed</label>
      </div>
      <div className="each-todo">
        <input type="checkbox" value="todo" />
        <label data-content="Get out of bed">Get out of bed</label>
      </div>
      <div className="each-todo">
        <input type="checkbox" value="todo" />
        <label data-content="Get out of bed">Get out of bed</label>
      </div>
      <div className="each-todo">
        <input type="checkbox" value="todo" />
        <label data-content="Get out of bed">Get out of bed</label>
      </div>
      <div className="add-todo each-todo">
        <div>
          <BsPlusCircle size="4em" className="add-icon" />
          <p> Add Todo </p>
        </div>
      </div>
    </div>
  )
}

export default TodoContainer
