import React from "react";
// add any needed imports here
import { useSelector } from 'react-redux'

function Users() {

  const users = useSelector(state => state.users)
  const count = useSelector(state => state.users.length)

  return (
    <div>
      <ul>
        Users!
        Total : {count}
        {users.map( user => {
          return <li key={user.username}>{user.username}</li>
        })}
        {/* Write code here that displays the usernames of all users in the Redux store */}
        {/* In addition, display the total number of users curently in the store */}
      </ul>
    </div>
  );
}

export default Users;
