import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";

function App() {
  const [userData, setUserData] = useState([]);
  const saveUserDataHandler = (enteredUserData) => {
    const data = {
      ...enteredUserData,
      id: Math.random().toString(),
    };
    setUserData((prevState) => {
      return [data, ...prevState];
    });
  };
  console.log(userData);

  return (
    <div>
      <AddUser onSaveUserData={saveUserDataHandler} />
      <UserList userData={userData} isVisible={userData.length >= 1} />
    </div>
  );
}

export default App;
