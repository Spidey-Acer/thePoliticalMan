import React from 'react'
import EditorsPick from '../../components/editorsPick/EditorsPick'
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
          <EditorsPick />
          <MainBody />
        </div>
    </div>
  )
}

export default Home