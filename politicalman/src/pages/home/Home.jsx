import React from 'react'
import MainBody from '../../components/mainBody/MainBody'
import MainContent from '../../components/mainContent/MainContent'
import NavbarBottom from '../../components/navbarBottom/NavbarBottom'
import NavbarTop from '../../components/navbarTop/NavbarTop'
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
        <div className="homeWrapper">
          <NavbarTop />
          <NavbarBottom />
          <MainContent />
          <MainBody />
        </div>
    </div>
  )
}

export default Home