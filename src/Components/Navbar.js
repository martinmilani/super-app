import React from "react";
import alkemyIcon from "../Assets/Imges/alkemy-icon.jpg";
import { useHistory, Link } from "react-router-dom";

function Header() {
  let history = useHistory();

  const logout = () => {
    console.log("logout");
    try {
      window.localStorage.removeItem("token");
      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="p-3 bg-white border-bottom">
      <div className="container px-0  px-sm-3  d-flex align-items-center justify-content-between">
        <div className="col-2 col-md-2">
          <Link to="/home">
            <img
              className=" img-icon img-fluid"
              src={alkemyIcon}
              alt="alkemy icon"
            />
          </Link>
        </div>
        <div className="d-flex col-5 col-md-2 justify-content-between">
          <Link className="text-decoration-none text-secondary me-2" to="/home">
            Home
          </Link>
          <a
            href="/#"
            className="text-decoration-none text-secondary"
            onClick={logout}
          >
            Logout
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
