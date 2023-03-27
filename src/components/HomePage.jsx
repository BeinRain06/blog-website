import React from "react";
import { setIsSignedIn } from "../redux-reducer/userSlice";
import { useDispatch } from "react-redux";
import "./HomePage.css";

function HomePage() {
  const dispatch = useDispatch();

  const login = () => {
    dispatch(setIsSignedIn(true));
  };

  return (
    <div className="home_area">
      <div className="home_container">
        <div className="home_left_door">
          <div className="home_left">
            <h4 className="left_home_title">
              BoobyFist Entertainments and Informations
            </h4>
            <div className="visit">
              <p className="our_inside">
                You may like articles articles about Sports, Tech, Foods,
                gardens, art...
              </p>
            </div>
          </div>
        </div>
        <div className="home_right_door">
          <div className="home_right">
            <div className="circle_1"></div>
            <div>
              <div className="login_right">
                <div className="right_poster">
                  <h3>step_door</h3>
                  <button className="goo_login" onClick={() => login()}>
                    Google Login
                  </button>
                </div>
              </div>
            </div>
            <div className="circle_2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
