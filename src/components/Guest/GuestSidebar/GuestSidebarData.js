import React from "react";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
//import * as IoIcons from "react-icons/io";
//import * as MdIcons from "react-icons/md";
//import * as VscIcons from "react-icons/vsc";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "My Profile",
    path: `/guest/profile`,
    icon: <CgIcons.CgProfile />,
    cName: "nav-text",
  },
  {
    title: "Inquiries",
    path: "#",
    icon: <RiIcons.RiQuestionnaireFill />,
    cName: "nav-text",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Make Inquiry",
        path: "/guest/inquiryform",
        icon: <AiIcons.AiOutlineForm />,
      },
      {
        title: "My Inquiries",
        path: "/guest/inquirylist",
        icon: <RiIcons.RiFileList3Line />,
      },
    ],
  },
];
