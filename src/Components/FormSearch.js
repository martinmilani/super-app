import React from "react";
import { Formik, Form, Field } from "formik";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router-dom";

function FormSearch() {
  let history = useHistory();
  const [, dispatch] = useStateValue();

  const setSearchName = (name) => {
    dispatch({
      type: "SET_SEARCH_NAME",
      name: name,
    });
  };
  return (
    <div>
      <Formik
        initialValues={{
          searchName: "",
        }}
        validate={(values) => {
          const errors = {};

          if (!values.searchName) {
            errors.searchName = "A name is required";
          }

          return errors;
        }}
        onSubmit={(value) => {
          setSearchName(value.searchName);
          history.push("/search");
        }}
      >
        <div className="d-flex justify-content-center my-5">
          <Form className="col-10 col-md-5">
            <Field
              type="text"
              name="searchName"
              className="form-control form-control-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </Form>
        </div>
      </Formik>
    </div>
  );
}

export default FormSearch;
