import { useState } from "react";
import "./styles.css";

function TodoItem(props) {
  return (
    <li>
      <input type="checkbox" onChange={props.onToggleTodo} />
      <span
        style={{
          textDecoration: props.isToggled ? "line-through" : "none",
        }}
      >
        {props.todo}
      </span>
      <button onClick={props.onRemove}>X</button>
    </li>
  );
}

function removeAtIndex(arr, index) {
  return arr.slice(0, index).concat(arr.slice(index + 1));
}

export default function App() {
  // Array destructuring
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [toggledTodos, setToggledTodos] = useState([]);

  function handleChange(event) {
    setValue(event.target.value);
  }

  function addTodo() {
    // // Not ok
    // todos = todos.concat(value);
    // setTodos(todos.push(value));
    // // Ok
    // setTodos([...todos, value]);
    setTodos(todos.concat(value));
  }

  //Newer way of writing the function nexJS
  // const handleRemove = () => {};

  function handleRemove(todoIndex) {
    const newTodos = removeAtIndex(todos, todoIndex);
    setTodos(newTodos);
  }

  function getIsToggled(index) {
    return toggledTodos.find((todoIndex) => index === todoIndex);
  }

  function handleToggleTodo(index) {
    let newTodos;
    const isToggled = getIsToggled(index);

    // If the item is toggled, we remove it from they array.
    if (isToggled) {
      newTodos = removeAtIndex(toggledTodos, index - 1);
    } else {
      // If the item isn't toggled, we add it to the array.
      newTodos = toggledTodos.concat(index);
    }

    setToggledTodos(newTodos);
  }

  // function renderTodo(todo, index) {
  //   return <li key={todo + index}>{todo}</li>;
  // }

  return (
    <div>
      <div>
        <input onChange={handleChange} />
        <button onClick={addTodo}>Dodaj</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={todo + index}
            todo={todo}
            isToggled={getIsToggled(index)}
            onRemove={() => handleRemove(index)}
            onToggleTodo={() => handleToggleTodo(index)}
          />
        ))}
      </ul>
    </div>
  );
}
{
  /* {todos.map(renderTodo)}
        {todos.map(function renderTodoInBody(todo, index) {
          return <li key={todo + index}>{todo}</li>;
        })}
        {todos.map((todo, index) => {
          var todoWith$ = "$" + todo;
          return <li key={todo + index}>{todoWith$}</li>;
        })}
        {todos.map((todo, index) => (
          <li key={todo + index}>{todo}</li>
        ))} */
}
