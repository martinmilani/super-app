import React from "react";
import LoginForm from "../Components/LoginForm";
import Logo from "../Components/Logo";
import ErrorAlert from "../Components/ErrorAlert";

function Login() {
  return (
    <div className="vh-100 vw-100">
      <main className="h-100 w-100 d-flex flex-column justify-content-center align-items-center">
        <ErrorAlert />
        <Logo />
        <LoginForm />
      </main>
    </div>
  );
}

export default Login;
