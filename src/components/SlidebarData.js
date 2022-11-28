import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "My Account",
    path: "/account",
    icon: <FaIcons.FaUser />,
    cName: "nav-text",
  },
  {
    title: "Bank Accounts",
    path: "/bank-accounts",
    icon: <AiIcons.AiFillBank />,
    cName: "nav-text"
  },
  {
    title: "Notifications",
    path: "/notifications",
    icon: <IoIcons.IoMdNotifications />,
    cName: "nav-text"
  },
  {
    title: "Logout",
    path: "/logout",
    icon: <IoIcons.IoMdLogOut />,
    cName: "nav-text"
  }
];
