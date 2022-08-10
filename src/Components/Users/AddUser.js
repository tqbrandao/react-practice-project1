import React, { useState } from "react";
import "./AddUser.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const [error, setError] = useState();

  const changeUsernameHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const changeAgeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid age (>0)",
      });
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

  const buttonDismissHandler = () => {
    setError();
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onDismiss={buttonDismissHandler}
        />
      )}
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
    </React.Fragment>
  );
}

export default AddUser;
