import { Link } from "react-router-dom";
import React from "react";

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Edureka Portal
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/Home">
                Home
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/Countries">
                Countries
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
  }