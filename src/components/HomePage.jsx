import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home_area">
      <div className="home_container">
        <div className="home_left_door">
          <div className="home_left">
            <h3 className="left_home_title">
              BoobyFist Entertainments and Informations
            </h3>
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
                <div className="right_poster">image poster</div>
                <div className="goo_login">Google Login</div>
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
