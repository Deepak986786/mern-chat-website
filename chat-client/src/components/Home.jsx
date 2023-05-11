import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="header">
          <Navbar />
        </div>
        <div className="content">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="h-main">
            <p1>main content of home page here may be some content</p1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
