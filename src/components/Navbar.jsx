import React, { useRef } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import DeckIcon from "@mui/icons-material/Deck";
import { GoogleLogout } from "google-login";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsSignedIn,
  selectSearchInput,
  selectUserData,
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
  const userData = useSelector(selectUserData);

  const handleChange = (event) => {
    dispatch(setSearchInput(event.target.value));
  };

  const logout = () => {
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
        {isSignedIn && (
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
        )}
        <div className="user_space">
          {isSignedIn ? (
            <div className="avatar_wrap">
              <img
                className="avatar_img"
                src={userData?.imageUrl}
                alt={userData?.name}
              />
              <div className="signedInside">
                <h1 className="signedIn">{userData?.givenName}</h1>
                <GoogleLogout
                  clientId="581483113470-oqkkc1mg8srogu83q965h4i7k9lm9srh.apps.googleusercontent.com"
                  render={(renderProps) => (
                    <button
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      className="goo_logout"
                    >
                      Logout
                    </button>
                  )}
                  onLogoutSuccess={logout}
                />
              </div>
            </div>
          ) : (
            <div className="notSignedIn">
              <AccountCircleIcon />
              <h1 className="notSignedIn"> no user </h1>
            </div>
          )}
        </div>
        <div className="with_mobile">
          <button className="mobile_nav" onClick={addMenuContent}>
            <MenuIcon fontSize="medium" htmlColor="white" />
          </button>
          <div className="mob_nav_container" ref={navRef1}>
            <div className="mob_nav_content">
              {isSignedIn ? (
                <div className="avatar_nav_wrap">
                  <img
                    className="avatar_nav_img"
                    src={userData?.imageUrl}
                    alt={userData?.name}
                  />
                  <div className="signedInside">
                    <h1 className="signedIn">{userData?.givenName}</h1>
                    <GoogleLogout
                      clientId="581483113470-oqkkc1mg8srogu83q965h4i7k9lm9srh.apps.googleusercontent.com"
                      render={(renderProps) => (
                        <button
                          onClick={renderProps.onClick}
                          disabled={renderProps.disabled}
                          className="goo_logout"
                        >
                          Logout
                        </button>
                      )}
                      onLogoutSuccess={logout}
                    />
                  </div>
                </div>
              ) : (
                <div className="notSignedIn">
                  <AccountCircleIcon />
                  <h1 className="notSignedIn"> no user </h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
