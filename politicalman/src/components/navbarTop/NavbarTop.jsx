import React, { useState } from 'react';
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { WiDayCloudy } from "react-icons/wi";
import { BiCalendar } from "react-icons/bi";
import { RiFacebookFill, RiTwitterFill } from "react-icons/ri";
import { FaYoutube, FaSearch } from "react-icons/fa";
import "./navbarTop.scss";

const NavbarTop = () => {
    const [showHamburgerMenu, setShowHamburgerMenu] = useState(true);
    const [showMenu, setShowMenu] = useState(false);

    function handleMenuClick() {
        setShowHamburgerMenu(!showHamburgerMenu);
        setShowMenu(!showMenu);
    }

    function handleMenuBlur() {
        setShowMenu(false);
    }

    return (
        <div className="navbarTop">
            <div className="navbarContainer">
                <div className="left">
                    <div className="menubar" onClick={handleMenuClick}>
                        {showHamburgerMenu ? <GiHamburgerMenu /> : <MdOutlineCloseFullscreen />}
                        <span>Menu</span>
                    </div>
                    {showMenu && (
                        <div className={`menu ${showMenu ? "show-menu" : ""}`} onClick={handleMenuBlur}>
                            <button className="close-button" onClick={() => setShowMenu(false)}>X</button>

                            <ul>
                                <li>Home</li>
                                <li>Politics</li>
                                <li>Business</li>
                                <li>Finance</li>
                                <li>Education</li>
                                <li>The Viewpoint</li>
                                <li>Link 3</li>
                                <li>Link 3</li>
                                <li>Link 3</li>
                                <li>Link 3</li>
                            </ul>
                        </div>
                    )}
                    <div className="item">
                        <WiDayCloudy style={{ fontSize: "18px" }} />
                        <span>21°C  </span>
                    </div>
                    <div className="item">
                        <BiCalendar style={{ fontSize: "18px" }} />
                        <span>Today Mon, 12 Jan 2023</span>
                    </div>
                </div>
                <img src="/assets/P-logo.jpg" alt="The Political Man Logo" className="center-image" />
                <div className="right">
                    <div className="item">
                        <FaSearch style={{ fontSize: "px" }} />
                    </div>
                    <div className="item">
                        <span>Login</span>
                    </div>
                    <div className="icons">
                        <RiFacebookFill style={{ fontSize: "20px" }} />
                        <RiTwitterFill style={{ fontSize: "20px" }} />
                        <FaYoutube style={{ fontSize: "20px" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarTop;
