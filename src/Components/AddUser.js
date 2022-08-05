import React from "react";
import Card from "./Card";
import "./AddUser.css";
import Button from "./Button";

function AddUser() {
  return (
    <Card className="add-user">
      <label> Username</label>
      <input type="text" name="Username"></input>
      <label> Age (Years) </label>
      <input type="number" name="Username"></input>
      <Button>Add User</Button>
    </Card>
  );
}

export default AddUser;
