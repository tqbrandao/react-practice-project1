import React from "react";
import Button from "./Button";
import Card from "./Card";
import "./ErrorModal.css";

function ErrorModal(props) {
  return (
    <React.Fragment>
      <div className="backdrop" onClick={props.onDismiss} />
      <Card className="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <footer className="actions">
          <Button onClick={props.onDismiss}>I get it!</Button>
        </footer>
      </Card>
    </React.Fragment>
  );
}

export default ErrorModal;
