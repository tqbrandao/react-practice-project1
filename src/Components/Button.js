import React, { Children } from "react";
import "./Button.css";

export default function Button(props) {
  return <button>{props.children}</button>;
}
