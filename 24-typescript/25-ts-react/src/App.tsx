import React from "react";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <Todos items={['Learn React', 'Learn TS']} />
    </div>
  );
}

export default App;

// compilation happnens manually when you set
// the TS project up with create-react-app template--typescript
