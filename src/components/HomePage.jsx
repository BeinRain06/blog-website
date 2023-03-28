import React from "react";
import { setIsSignedIn } from "../redux-reducer/userSlice";
import { useDispatch } from "react-redux";
import { GoogleLogin } from "google-login";
import "./HomePage.css";

function HomePage() {
  const dispatch = useDispatch();
  const isSignedIn = useSelector(selectIsSignedIn);

  const login = (response) => {
    console.log(response);
    dispatch(setSignedIn(true));
    dispatch(setUserData(response.profileObj));
  };

  return (
    <div className="home_area" style={{ display: isSignedIn ? "none" : "" }}>
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
                  <GoogleLogin
                    clientId="581483113470-oqkkc1mg8srogu83q965h4i7k9lm9srh.apps.googleusercontent.com"
                    render={(renderProps) => (
                      <button
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        className="login__button"
                      >
                        Login with Google
                      </button>
                    )}
                    onSuccess={login}
                    onFailure={login}
                    isSignedIn={true}
                    cookiePolicy={"single_host_origin"}
                  />
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
