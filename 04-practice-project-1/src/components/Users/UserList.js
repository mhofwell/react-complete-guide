import React from "react";
import Card from "../../UI/Card";
import './UserList.module.css';

const UserList = ({ users }) => {
  return (
    <Card>
      <ul>
        {users.map((user) => (
          <li>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default UserList;
