import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
      <React.Fragment>
        <div class="container">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target="#navbar-menu"
            >
              <i class="fa fa-bars"></i>
            </button>

            <a class="navbar-brand" href="/home"></a>
          </div>
          <div class="" id="navbar-menu">
            <ul class="nav navbar-nav navbar-right">
              <li class="active scroll">
                <Link to="/home">Home</Link>
              </li>

              <li class="scroll">
                <Link to="/todo">ToDo</Link>
              </li>
              <li class="scroll">
                <Link to="/useful">Useful</Link>
              </li>

              <li class="scroll">
                <Link to="/events">Events</Link>
              </li>

              <li class="scroll">
                <Link to="/goals">Goals</Link>
              </li>

              <li class="button-holder">
                <button
                  type="button"
                  class="btn btn-blue navbar-btn"
                  data-toggle="modal"
                  data-target="#SignIn"
                >
                  Sign in
                </button>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
}

export default Header;