import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
//import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as CgIcons from "react-icons/cg";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "My Profile",
    path: "#",
    icon: <CgIcons.CgProfile />,
    cName: "nav-text",
  },
  {
    title: "Security",
    path: "#",
    icon: <MdIcons.MdSecurity />,
    cName: "nav-text",
  },
  {
    title: "My Accommodation",
    path: "#",
    icon: <MdIcons.MdHotel />,
    cName: "nav-text",
  },
  {
    title: "Messages",
    path: "#",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  // {
  //   title: "Support",
  //   path: "/support",
  //   icon: <IoIcons.IoMdHelpCircle />,
  //   cName: "nav-text",
  // },
];
