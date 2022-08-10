import React from "react";
import "./UserList.css";
import Card from "../UI/Card";

function UserList(props) {
  return (
    <Card className={`user-list ${!props.isVisible && "hidden"}`}>
      <ul>
        {props.userData.map((user) => {
          return <li>{`${user.username} (${user.age} years old)`}</li>;
        })}
      </ul>
    </Card>
  );
}

export default UserList;
