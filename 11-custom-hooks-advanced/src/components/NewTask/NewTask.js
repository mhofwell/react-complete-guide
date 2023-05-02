import useHTTP from "../../hooks/useHTTP";
import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const { isLoading, error, sendRequest } = useHTTP();

  // brings in Data from applyData(data);
  const transformTasks = (taskText, taskData) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };
    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText) => {
    sendRequest({
      method: "POST",
      url: "https://react-http-7db30-default-rtdb.firebaseio.com/tasks.json",
      headers: {
        "Content-Type": "application/json",
      },
      body: { text: taskText },
    }, transformTasks.bind(null, taskText));
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
