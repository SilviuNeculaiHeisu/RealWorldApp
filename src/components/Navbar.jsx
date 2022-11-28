import React, { useState } from "react";

// ICONS
import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

import { IconContext } from "react-icons";

// ROUTING

import { Link } from "react-router-dom";

// DATA FILE
import { SidebarData } from "./SlidebarData";

// STYLES
import "./Navbar.css";

export default function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: "#333333" }}>
                {/* All the icons now are white */}
                <div className="navbar">
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>

                    <div className="appLogo">
                        <img id="logoImage" src="https://api.time.com/wp-content/uploads/2019/11/gettyimages-459761948.jpg" alt="logo" />
                        <h2 id="logoTitle">Real World App</h2>
                    </div>

                    <div className="new">
                        <button  id="newButton">$ NEW</button>
                        <span id="notifications">
                        <IconContext.Provider value={{ color: "#FFEA00", size: '2em' }}>
                            <IoIcons.IoMdNotifications/>
                        </IconContext.Provider>
                        </span>
                        <span id="badge">3</span>
                    </div>
                </div>
                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-menu-items" onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        <div className="userDisplay">
                            <img id="userImage" src="https://api.time.com/wp-content/uploads/2019/11/gettyimages-459761948.jpg" alt="banana"/>
                            <h4>Edgar J</h4>
                            <h4>@Katharina_Bernier</h4>
                        </div>

                        <div className="balance">
                            <h3>1,681.37</h3>
                            <p>Account Balance</p>
                        </div>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}