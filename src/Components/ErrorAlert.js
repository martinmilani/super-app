import React from "react";
import Alert from "react-bootstrap/Alert";
import { useStateValue } from "../StateProvider";

function ErrorAlert() {
  const [{ showAlert, alertMsg }, dispatch] = useStateValue();
  const closeAlert = () => {
    dispatch({
      type: "CLOSE_ALERT",
    });
  };

  return (
    <div className="container">
      <Alert
        variant="danger"
        show={showAlert}
        onClose={() => closeAlert()}
        dismissible
      >
        <Alert.Heading className="text-center">Ooops!</Alert.Heading>
        <p className="text-center mt-4">{alertMsg}</p>
      </Alert>
    </div>
  );
}

export default ErrorAlert;
