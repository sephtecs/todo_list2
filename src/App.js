import React, {useState} from 'react';
import './App.css';

function App() {
  const[newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();

    if (newTodo.length === 0) {
      return;
    }

    // 37:00 of the demo video is where things get tricky starting here at line 16 *** SAVED A ZIP FILE with a working APP in todo_list2 ***
    // be sure to have a good understanding of the connection between events and functions
    const todoItem = {
      text: newTodo,
      complete: false
    }

    // setTodos and pass in a brand new array contaiing all current todos plus 1 more
    setTodos([...todos, todoItem]);
    setNewTodo("");
  }

  const handleTodoDelete = (delIdx) => {
    const filteredTodos = todos.filter((_todo, i) => {
      return i !== delIdx;
    });
    
    setTodos(filteredTodos);

  };

const handleToggleComplete = (idx) => {
  const updatedTodos = todos.map((todo, i) => {
    if (idx === i) {
      todo.complete = !todo.complete;
      
      //To avoid mutating the todo directly, do this:
      // const updatedTodo = {... todo, complete: !todo.complete};
      // return updatedTodo;
    }

    return todo;
  });

  setTodos(updatedTodos);
}


  return (
    <div style={{textAlign: "center"}}>
      <form onSubmit={(event) => {
        handleNewTodoSubmit(event);
      }}>
        <input onChange = {(event) => {
          setNewTodo(event.target.value);
        }} type="text"
        value={newTodo} />
        <div>
          <button>Add</button>
        </div>
      </form>

      <hr />

      {todos.map((todo, i) => {
        const todoClasses = ["bold", "italic"];
        if(todo.complete) {
          todoClasses.push("line-through");
        }

        return <div key={i}>
          <input onChange={(event) => {
            handleToggleComplete(i);
          }} checked={todo.complete} type="checkbox" />
          <span className={todoClasses.join(" ")}>{todo.text}</span>
          <button style={{marginLeft: "10px"}} onClick={(event) => {
            handleTodoDelete(i);
          }}>Delete</button>
        </div>
      })}
    </div>
  );
}

export default App;
