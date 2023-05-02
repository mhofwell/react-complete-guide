import React, {useEffect, useState } from "react";
import useHTTP from "./hooks/useHTTP";
import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";

function App() {
  const [tasks, setTasks] = useState([]);
  // state updating functions are guaranteed by react, and so we don't need to add as a dep.
  /// alias used here for sendRequest
  const { isLoading, error, sendRequest } = useHTTP();

  useEffect(() => {

    const transformTasks = (tasksObj) => {
      const loadedTasks = [];
  
      for (const taskKey in tasksObj) {
        loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
      }
      setTasks(loadedTasks);
    };
    
    sendRequest({
      url: "https://react-http-7db30-default-rtdb.firebaseio.com/tasks.json"},
      transformTasks,
    );
  }, [sendRequest]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={sendRequest}
      />
    </React.Fragment>
  );
}

export default App;
