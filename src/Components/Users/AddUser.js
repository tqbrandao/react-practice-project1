import React, { useState } from "react";
import "./AddUser.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const changeUsernameHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const changeAgeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    const userData = {
      username: enteredUsername,
      age: enteredAge,
    };
    // console.log(userData);

    props.onSaveUserData(userData);

    setEnteredAge("");
    setEnteredUsername("");
  };
  return (
    <div>
      <ErrorModal title="An error occurred" message="Something went wrong" />
      <Card className="add-user">
        <form onSubmit={addUserHandler}>
          <label> Username</label>
          <input
            type="text"
            value={enteredUsername}
            onChange={changeUsernameHandler}
          ></input>
          <label> Age (Years) </label>
          <input
            type="number"
            value={enteredAge}
            onChange={changeAgeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
