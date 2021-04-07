import React from "react";
import * as AiIcons from "react-icons/ai";
import * as VscIcons from "react-icons/vsc";
import * as CgIcons from "react-icons/cg";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "My Profile",
    path: "/guest/profile",
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
    title: "Feedbacks",
    path: "#",
    icon: <VscIcons.VscFeedback />,
    cName: "nav-text",
  },
  // {
  //   title: "My Payments",
  //   path: "/support",
  //   icon: <IoIcons.IoMdHelpCircle />,
  //   cName: "nav-text",
  // },
];
