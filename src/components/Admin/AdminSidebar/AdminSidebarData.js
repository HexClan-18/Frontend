import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Accommodations",
    path: "/accommodations",
    icon: <MdIcons.MdHotel />,
    cName: "nav-text",
  },
  {
    title: "Users",
    path: "/users",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Payments",
    path: "/payments",
    icon: <MdIcons.MdPayment />,
    cName: "nav-text",
  },
  {
    title: "Inquiries",
    path: "/inquiries",
    icon: <RiIcons.RiQuestionnaireFill />,
    cName: "nav-text",
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <IoIcons.IoMdSettings />,
    cName: "nav-text",
  },
];
