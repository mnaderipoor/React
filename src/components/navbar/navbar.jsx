import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-default navbar-dark bg ">
      <div className="container-fluid ">
        {!user && (
          <React.Fragment>
            <NavLink className="nav navbar-nav " to="/register">
              ثبت نام
            </NavLink>
            <NavLink className="nav navbar-nav " to="/login">
              ورود
            </NavLink>
          </React.Fragment>
        )}

        {user && (
          <React.Fragment>
            <NavLink className="nav navbar-nav " to="/profile">
              {user.name}
            </NavLink>
            <NavLink className="nav navbar-nav " to="/logout">
              خروج
            </NavLink>
          </React.Fragment>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
