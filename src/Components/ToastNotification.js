import React from "react";
import { Row, Col, Toast } from "react-bootstrap";
import { useStateValue } from "../StateProvider";

function ToastNotification() {
  const [{ showToast, toastMsg }, dispatch] = useStateValue();
  const handleCloseToast = () => {
    dispatch({
      type: "CLOSE_TOAST",
    });
  };

  return (
    <Row>
      <Col xs={6}>
        <Toast
          animation={false}
          show={showToast}
          onClose={handleCloseToast}
          delay={2000}
          autohide
          style={{
            width: "300px",
            position: "fixed",
            top: "80px",
            right: "10px",
          }}
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">Success!</strong>
          </Toast.Header>
          <Toast.Body>{toastMsg}</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}

export default ToastNotification;
