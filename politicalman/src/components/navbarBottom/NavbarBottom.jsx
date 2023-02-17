import React from 'react'
import { useState, useEffect } from 'react'
import { FaHome } from 'react-icons/fa'
import "./navbarBottom.scss"


const NavbarBottom = () => {
    const [dropdownone, setDropdownone] = useState(false);

    const handleDropdownone = (e) => {
        setDropdownone(!dropdownone);
    }

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
                <div className="item" onClick={handleDropdownone}>
                <span className="glow-icon">
                    <FaHome style={{ fontSize: "30px" }}/>
                </span>

                { dropdownone && (
                    <div className="dropDownMenu1">
                        <span>
                            <a>County News</a>
                        </span>
                        <span>
                            <a>National News</a>
                        </span>
                        <span>
                            <a>East-African News</a>
                        </span>
                        <span>
                            <a>Africa News</a>
                        </span>
                        <span>
                            <a>World News</a>
                        </span>
                        <span>
                            <a>Opinions</a>
                        </span>
                        <span>
                            <a>Policy Briefs</a>
                        </span>
                    </div> 
                )}
            </div>

            </div>
            <div className="right-item">
                <div className="item">
                <button className="subscribe-button" onClick={handleSubscribeClick}>
                    Subscribe
                </button>
            </div>

            </div>
            <div>
                
            </div>
            
        </div>
    </div>
  )
}

export default NavbarBottom