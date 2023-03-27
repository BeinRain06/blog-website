import React, { useRef } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import DeckIcon from "@mui/icons-material/Deck";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsSignedIn,
  selectSearchInput,
  setIsSignedIn,
  setSearchInput,
  setUserData,
} from "../redux-reducer/userSlice";
import "./Navbar.css";

function Navbar() {
  const navRef1 = useRef();
  const dispatch = useDispatch();

  const searchInput = useSelector(selectSearchInput);
  const isSignedIn = useSelector(selectIsSignedIn);

  const handleChange = (event) => {
    dispatch(setSearchInput(event.target.value));
  };

  const resetDefaultState = () => {
    dispatch(setIsSignedIn(false));
    dispatch(setUserData(null));
    dispatch(selectSearchInput("art"));
  };

  const addMenuContent = () => {
    navRef1.current.classList.toggle("showcase");
  };

  return (
    <div className="nav_container">
      <div className="nav_content">
        <div className="logo_wrap">
          <h2>
            <span className="bob_fist">BobbyFist</span>
            <span>
              <DeckIcon />
            </span>
          </h2>
        </div>
        <div className="search_wrap">
          <form className="input_wrap">
            <input
              type="text"
              className="input_search"
              value={searchInput}
              placeholder="Search items..."
              onChange={handleChange}
            />
            <button className="btn_search">Search</button>
          </form>
        </div>
        <div className="user_space">
          {isSignedIn ? (
            <div className="avatar_wrap">
              <img src="" alt="error_avatar" className="avatar_img" />
              <p className="email">jdoe@gmail.com</p>
            </div>
          ) : (
            <AccountCircleIcon />
          )}
          <button className="goo_logout" onClick={() => resetDefaultState()}>
            Google Logout
          </button>
        </div>
        <div className="with_mobile">
          <button className="mobile_nav" onClick={addMenuContent}>
            <MenuIcon fontSize="medium" htmlColor="white" />
          </button>
          <div className="mob_nav_container" ref={navRef1}>
            <div className="mob_nav_content">
              {isSignedIn ? (
                <div className="avatar_nav_wrap">
                  <img src="" alt="error_avatar" className="avatar_nav_img" />
                  <p className="email_nav">jdoe@gmail.com</p>
                </div>
              ) : (
                <AccountCircleIcon />
              )}
              <button
                className="goo_logout"
                onClick={() => resetDefaultState()}
              >
                Google Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
