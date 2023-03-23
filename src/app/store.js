import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux-reducer/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// apikey = '9f5f0589b618fcf4886faf620af6b8c9';

// url = `https://gnews.io/api/v4/search?q=${searchInput}&lang=en&country=us&max=10&apikey=9f5f0589b618fcf4886faf620af6b8c9`;
