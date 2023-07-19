import React from "react";
import { useSelector } from "react-redux";
import User from "./User";

const UserList = () => {
  const state = useSelector((state) => {
    return state.userReducer;
  });
  //console.log(state);
  return (
    <div>
       {state.users.map((user) => {
        return <User key={user.id} user={user} />;
      })}
    </div>
  );
};

export default UserList;
