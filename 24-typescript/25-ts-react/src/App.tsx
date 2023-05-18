import React from "react";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import Newtodo from "./components/Newtodo";
import { useState } from "react";

function App() {
  const [todos, setTodo] = useState<Todo[]>([]);

  const AddTodoHandler = (text: string) => {
    const todo = new Todo(text);

    setTodo((prevState) => {
      return prevState.concat(todo);
    });
  };
  const onRemoveTodo = (todoId: string) => {
    setTodo((prevState) => {
      return prevState.filter(todo => todo.id !== todoId);
    })
  };

  return (
    <div className="App">
      <Newtodo onAddTodo={AddTodoHandler} />
      <Todos removeTodoHandler={onRemoveTodo} items={todos} />
    </div>
  );
}

export default App;

// compilation happnens manually when you set
// the TS project up with create-react-app template--typescript
