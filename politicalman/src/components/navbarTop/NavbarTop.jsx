import React, { useState, useRef, useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { RiFacebookFill, RiTwitterFill } from "react-icons/ri";
import {  FaSearch } from "react-icons/fa";
import "./navbarTop.scss";
import SearchForm from "../navbarBottom/SearchForm";

const NavbarTop = () => {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef();

    const handleSubscribeClick = () => {
        window.open('/subscribe', '_blank');
    };

    function handleMenuClick() {
        if (showMenu) {
            setShowMenu(false);
        } else {
            setShowMenu(true);
        }
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);

    return (
        <div className="navbarTop">
            <div className="navbarContainer">
                <div className="left">
                    <div className="logo">
                        <img src="/assets/P-logo.png" alt="Logo" />
                    </div>
                </div>
                <img
                    src="/assets/P-logo.jpg"
                    alt="The Political Man Logo"
                    className="center-image"
                />
                <div className="right">
                    <div className="item">
                        <FaSearch style={{ fontSize: "20px" }} />
                    </div>
                    <div className="item">
                        <span>Login</span>
                    </div>
                    <div className="icons">
                        <button className="subscribe-button" onClick={handleSubscribeClick}>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavbarTop;
