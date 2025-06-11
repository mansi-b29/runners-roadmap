import Button from "./components/StandardButtons";
import Alert from "./components/Alert";
import { useState } from "react";
import "./App.css";

function AppCopy() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div className="container">
      {" "}
      Hello
      {alertVisible && <Alert> my alert </Alert>}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}

export default AppCopy;
