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

    // setTodos and pass in a brand new array contaiing all current todos plus 1 more
    setTodos([...todos, newTodo]);
    setNewTodo("");
  }

  const handleTodoDelete = (delIdx) => {
    const filteredTodos = todos.filter((todo, i) => {
      return i !== delIdx;
    });
    
    setTodos(filteredTodos);

  };


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
        return <div>
          <span>{todo}</span>
          <button style={{marginLeft: "10px"}} onClick={(event) => {
            handleTodoDelete(i);
          }}>Delete</button>
        </div>
      })}
    </div>
  );
}

export default App;
