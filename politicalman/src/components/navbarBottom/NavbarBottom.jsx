import React, { useState, useRef, useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { WiDayCloudy } from "react-icons/wi";
import { BiCalendar } from "react-icons/bi";
import { FaHome } from 'react-icons/fa'
import "./navbarBottom.scss"
import SearchForm from "./SearchForm";


const NavbarBottom = () => {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef();


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

    const [showNavbarBottom, setShowNavbarBottom] = useState(true);

    useEffect(() => {
        let lastScrollTop = 0;
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                setShowNavbarBottom(false);
            } else {
                setShowNavbarBottom(true);
            }
            lastScrollTop = scrollTop;
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSubscribeClick = () => {
        window.open('/subscribe', '_blank');
    };



  return (
      <div className={`navbarBottom ${showNavbarBottom ? 'show' : 'hide'}`}>
        <div className="navbarBottomWrapper">

            <div className="left-item">
                  <div className="menubar" onClick={handleMenuClick}>
                      {showMenu ? <MdOutlineClose /> : <GiHamburgerMenu />}
                      <span>Menu</span>
                  </div>

                  {showMenu && (
                      <div
                          className={`menu ${showMenu ? "show-menu" : ""}`}
                          ref={menuRef}
                      >

                          <ul>
                              <li>County News</li>
                              <li>National News</li>
                              <li>East African News</li>
                              <li>African News</li>
                              <li>Opinion</li>
                              <li>Policy Briefs</li>
                              <li>Politricks</li>

                          </ul>

                          <div className="menu-icons">
                              <FaFacebook style={{ fontSize: "25px" }} />
                              <FaTwitter style={{ fontSize: "25px" }} />
                              <FaYoutube style={{ fontSize: "25px" }} />
                          </div>

                      </div>
                  )}

            

            </div>
            <div className="right-item">
                  <SearchForm />
            </div>
            <div>
                
            </div>
            
        </div>
    </div>
  )
}

export default NavbarBottom