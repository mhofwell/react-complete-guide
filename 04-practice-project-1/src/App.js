import React, {useState} from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {

const [users, setUsers] = useState('');

  const AddUserHandler = ({user}) => {
   
  };
  
  return (
    <>
      <AddUser AddUserHandler={AddUserHandler}/>
      <UserList users={[]}/>
    </>
  );
}

export default App;

