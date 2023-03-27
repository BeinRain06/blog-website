import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isSignedIn: false,
    searchInput: "art",
    blogData: null,
    userData: null,
  },
  reducers: {
    setIsSignedIn: (state, action) => {
      state.isSignedIn = action.payload;
    },
    setSearchInput: (state, action) => {
      state.searchInput = action.payload;
    },
    setBlogData: (state, action) => {
      state.blogData = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

//export action function changing initial state
export const { setIsSignedIn, setSearchInput, setBlogData, setUserData } =
  userSlice.actions;

// export current State (isSignedIn, searchInput, blogData, userData)
export const selectIsSignedIn = (state) => {
  return state.user.isSignedIn;
};
export const selectSearchInput = (state) => {
  return state.user.searchInput;
};
export const selectBlogData = (state) => {
  return state.user.blogData;
};
export const selectUserData = (state) => {
  return state.user.userData;
};

// export property reducer of our userSlice variable
const userReducer = userSlice.reducer;
export default userReducer;
