import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as CgIcons from "react-icons/cg";
import * as RiIcons from "react-icons/ri";
// import * as IoIcons from "react-icons/io";

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
    title: "My Accommodations",
    path: "#",
    icon: <MdIcons.MdHotel />,
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
