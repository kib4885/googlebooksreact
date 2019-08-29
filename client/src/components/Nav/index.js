import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar" className="navbar navbar-expand-lg">
  <a className="navbar-brand" href="/">Google Books</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="/saved">Saved</a>
    </div>
  </div>
</nav>
  );
}

export default Nav;