import React from "react";
import alkemyLogo from "../Assets/Imges/logo-header.png";

function Logo() {
  return (
    <div className="text-center my-4">
      <img className="mb-3" src={alkemyLogo} alt="alkemy logo" />
      <h4>Challenge Frontend </h4>
      <h5>REACT</h5>
    </div>
  );
}

export default Logo;
