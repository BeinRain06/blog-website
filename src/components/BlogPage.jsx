import React from "react";
import logo from "../logo.svg";
import "./BlogPage.css";

function BlogPage() {
  return (
    <div className="blog_container">
      <div className="blog_content">
        <div className="box">
          <div className="upper_box">
            <img src={logo} className="blog_img" alt="error blogpage" />
            <h3 className="title_item">Aquatica Area</h3>
            <div className="description_wrap">
              <p className="description_article">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe,
                similique.
              </p>
            </div>
          </div>
          <span className="lower_box">Meridian</span>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
