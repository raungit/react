import React from "react";

function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary" style={{ paddingTop: 0, paddingBottom: 0 }}>
      <div
        className="container-fluid"
        style={{
          background: "rgb(33, 33, 33)",
          padding: "10px 20px",
        }}
      >
        <span
          className="navbar-brand mb-0"
          style={{ color: "white", fontSize: "1.8rem", fontFamily: "sans-serif" }}
        >
          Navbar
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
