import React from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { useStateValue } from "../StateProvider";

function LoginForm() {
  let history = useHistory();
  const [, dispatch] = useStateValue();

  const openAlert = (error) => {
    dispatch({
      type: "OPEN_ALERT",
      alertMsg: error,
    });
  };

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem("token", value);
    } catch (error) {
      openAlert(error);
    }
    history.push("/home");
  };

  const getToken = async (email, password, setSubmitting) => {
    let url = "http://challenge-react.alkemy.org";

    try {
      let res = await Axios.post(url, { email, password });
      setLocalStorage(res.data.token);
    } catch (error) {
      openAlert(error.response.data.error);
      setSubmitting(false);
    }
  };

  const sendData = (values, setSubmitting) => {
    getToken(values.email, values.password, setSubmitting);
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validate={(values) => {
        const errors = {};

        if (!values.email) {
          errors.email = "Email is required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }

        if (!values.password) {
          errors.password = "Password is required";
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        return sendData(values, setSubmitting);
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className="mt-2 ">
          <h1 className="h3 mb-4 fw-normal text-center">Please sign in</h1>

          <div className="form-floating mb-4 w-100">
            <Field
              type="email"
              name="email"
              className={
                "form-control " +
                (errors.email && touched.password ? "is-invalid" : null)
              }
              placeholder="name@example.com"
            />
            <div className="invalid-feedback">{errors.email}</div>
          </div>

          <div className="form-floating mb-4 w-100">
            <Field
              type="password"
              name="password"
              className={
                "form-control " +
                (errors.password && touched.password ? "is-invalid" : null)
              }
              placeholder="Password"
            />

            <div className="invalid-feedback">{errors.password}</div>
          </div>

          {isSubmitting ? (
            <button
              className="w-100 btn btn-lg btn-primary d-flex justify-content-center align-items-center"
              type="button"
              disabled
            >
              <span
                className="spinner-border spinner-border-sm me-4"
                role="status"
                aria-hidden="true"
              ></span>
              Loading...
            </button>
          ) : (
            <button className="btn w-100 btn-primary" type="submit">
              Sign in
            </button>
          )}
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
