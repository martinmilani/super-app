import React from "react";
import { Redirect } from "react-router-dom";
import Main from "../Components/Main";

function Home({ authorized }) {
  if (!authorized) {
    return <Redirect to="login" />;
  }

  return (
    <div>
      <Main />
    </div>
  );
}

export default Home;
