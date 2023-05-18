import * as React from "react";
import Todo from "../models/todo";
import Todoitem from "./Todoitem";
import classes from "./Todos.module.css";

// Typedefs are great to copy and paste Props or Types into FC's<>
type Props = {
  // ? make props optional
  children?: React.ReactNode;
  items: Todo[];
  removeTodoHandler: (id: string) => void;
};

const Todos: React.FC<Props> = (props) => {

  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <Todoitem
          onRemoveTodo={props.removeTodoHandler.bind(null, item.id)}
          key={item.id}
          text={item.text}
        />
      ))}
    </ul>
  );
};

export default Todos;
// FC is function component. Its a generic type.
// This makes it clear that its a function that acts
// as a functional component.
// FC makes react understand this FC has a children prop.
// We can now merge our own props with built-in base props like children.

// We're using a generic type to set the explicit type.
// We merge the object in <{}> with base props.
