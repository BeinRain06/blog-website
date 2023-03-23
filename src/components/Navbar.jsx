import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav_container">
      <div className="nav_content">
        <div className="logo_wrap">
          <h2>
            <span>BobbyFist</span> <span>mui icon</span>
          </h2>
        </div>
        <div className="search_wrap">
          <form action="" className="input_wrap">
            <input type="text" className="input_search" />
            <button className="btn_search">Search</button>
          </form>
        </div>
        <div className="user_space">
          <div className="avatar_wrap">
            <img src="" alt="no found" />
            <p className="email">jdoe@gmail.com</p>
          </div>
          <div>Google Logout</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
