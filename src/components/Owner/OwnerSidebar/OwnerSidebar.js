import React, { useState } from "react";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import { Link } from "react-router-dom";
import { SidebarData } from "./OwnerSidebarData";
import "../../Sidebar.css";
import { IconContext } from "react-icons";
import SubMenu from "./SubMenu";

function OwnerSidebar() {
  const [sidebar] = useState(true);

  return (
    <>
      <IconContext.Provider className="icon" value={{ color: "#51E2F5" }}>
        <nav className={sidebar ? "nav-menu sidebar active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <img
              className="user-dp"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRerBR3bfynBVdF2gjoii3i_8yI4KOdK5_cxw&usqp=CAU"
              alt="dp"
            />
            <h5 className="user-name" align="center">
              {" "}
              User Name
            </h5>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default OwnerSidebar;
