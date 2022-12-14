import React from "react";
function Navbar() {
  return (
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">
            Look Sharp{" "}
            {/* <span>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ1MuEqIwPMIiQpntIeF3DdDuO2Q1vClavR1-n9hdaUA&s"
                alt=""
                className="csuImage"
              />
            </span> */}
          </a>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav">
            <li class="active">
              <a href="#">Home</a>
            </li>
            <li class="active">
              <a href="#">About</a>
            </li>
            <li class="active">
              <a href="#">Contact</a>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a href="#">
                <span class="glyphicon glyphicon-user"></span> Sign Up
              </a>
            </li>
            <li>
              <a href="#">
                <span class="glyphicon glyphicon-log-in"></span> Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
