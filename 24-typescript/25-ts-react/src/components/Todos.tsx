import * as React from "react";

type Props = {
  // ? make props optional
  children?: React.ReactNode;
  items: string[];
};
const Todos: React.FC<Props> = ({ children, items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
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
