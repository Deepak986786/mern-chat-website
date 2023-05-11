import React from "react";
import './Sidebar.css'

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
       
          <div className="sidebar-title">
            <h1>Call Me </h1>
          </div>
          <div className="sidebar-content">
             <h3>Chats</h3>
            <div className="sidebar-item">
              <ul>
                <li>user1</li>
                <li>user2</li>
                <li>user3</li>
              </ul>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Sidebar;
