import React, { useState, useEffect } from "react";
import axios from "axios";
/* import logo from "../logo.svg"; */
import {
  selectBlogData,
  selectIsSignedIn,
  selectSearchInput,
  setBlogData,
} from "../redux-reducer/userSlice";
import { useDispatch, useSelector } from "react-redux";
import "./BlogPage.css";

function BlogPage() {
  const [loading, setLoading] = useState(true);
  const blogData = useSelector(selectBlogData);
  const isSignedIn = useSelector(selectIsSignedIn);

  const dispatch = useDispatch();
  const searchInput = useSelector(selectSearchInput);
  const url = `https://gnews.io/api/v4/search?q=${searchInput}&lang=en&country=us&max=10&apikey=9f5f0589b618fcf4886faf620af6b8c9`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        dispatch(setBlogData(response.data));
        setLoading(false);
      } catch (error) {
        console.log(`error:${error}`);
      }
    };

    fetchData();
  }, [url, dispatch, searchInput]);

  return (
    <div
      className="blog_container"
      style={{ display: isSignedIn ? "block" : "none" }}
    >
      {loading ? (
        <h2 className="full_content">Loading...</h2>
      ) : (
        <h2 className="full_content">Bobby Results</h2>
      )}
      {isSignedIn && !loading ? (
        <div className="blog_content">
          {blogData?.articles?.map((insideData, index) => (
            <div className="box" key={index}>
              <a href={insideData.url} className="link_box">
                <div className="upper_box">
                  <img
                    src={insideData.image}
                    className="blog_img"
                    alt="error blogpage"
                  />
                  <h3 className="title_item">{insideData.title}</h3>
                  <div className="description_wrap">
                    <p className="description_article">
                      {insideData.description}
                    </p>
                  </div>
                </div>
                <span className="lower_box">{insideData.source.name}</span>
              </a>
            </div>
          ))}

          {blogData?.totalArticles === 0 && <h2>No Results Found</h2>}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default BlogPage;
