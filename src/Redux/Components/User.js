import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { editUser, deleteUser } from "../slices/UserSlices";
import { useDispatch } from "react-redux";
//import Style from './Style.css';

const User = (props) => {
  const { user } = props;
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = () => {
    handleModal();

    const newData = {
      id: user.id,
      name: name,
      email: email,
    };

    dispatch(editUser({ id: user.id, newData: newData }));
  };

  const handleDelete = () => {
    dispatch(deleteUser(user.id));
  };

  return (
    <div>
      <Modal show={showModal} onHide={handleModal} id="modal">
        <Modal.Header closeButton>
          <Modal.Title><h1>Edith User</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label>Name</label>
            <input
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
            />
            <br />
            <label>Email</label>
            <input
              placeholder="Enter your name"
              value={email}
              onChange={handleEmailChange}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <h2>{user.name}</h2>
      <h3>{user.email}</h3>

      <Button onClick={handleModal}>Edit</Button>
      <Button onClick={handleDelete} variant="danger">
        Delete
      </Button>
    </div>
  );
};
export default User;
