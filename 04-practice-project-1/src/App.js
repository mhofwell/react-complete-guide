import React, {useState} from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {

const [users, setUsers] = useState([]);

  const AddUserHandler = (user) => { 
    setUsers((users) => {
     return [...users, user]
    }); 


  };
  
  return (
    <>
      <AddUser AddUserHandler={AddUserHandler}/>
      {users.length > 0 ? <UserList users={users} /> : "" }
    </>
  );
}

export default App;

