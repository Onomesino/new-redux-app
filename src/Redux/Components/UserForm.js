import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { addUser } from "../slices/UserSlices";

const UserForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      id: uuid(),
      name: name,
      email: email,
    };

    dispatch(addUser(newUser));

    setName("");
    setEmail("");
  };
  return (
    <div>
      <h1>User List</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          placeholder="Enter Your Name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <br />
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter Your email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default UserForm;
