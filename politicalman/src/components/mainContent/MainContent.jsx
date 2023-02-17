import React from 'react'
import { MdFlashOn } from 'react-icons/md'
import "./mainContent.scss"

const MainContent = () => {
  return (
    <div className="mainContent">
        <div className="col">
            <div className="row">
                <img src="assets/usUkraine.jpg" alt="Plitical news" />
                <a className="cat">Politics</a>
                <a className="icon"> <MdFlashOn style={{fontSize: "20px"}}/> </a>
                <div className="postInfo">
                    <ul className="nav">
                        <li>Peter Montana</li>
                        <li>1 hour ago</li>
                    </ul>
                    <h3>
                        Ukraine’s president says he’s ready to meet with Trump
                    </h3>
                </div>
            </div>
        </div>


        <div className="col">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <img src="assets/banner-02.jpg" alt="Banner Two" />
                        <a className="cat">
                            Travel
                        </a>
                        <a className="icon">
                            <MdFlashOn style={{fontSize: "20px"}}/>
                        </a>

                        <div className="postInfo">
                            <ul className="nav">
                                <li>Peter Montana</li>
                                <li>3 days ago</li>
                            </ul>
                            <h3>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptas.
                            </h3>
                          </div>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <img src="assets/banner-03.jpg" alt="Banner Three" />
                        <a className="cat">
                            Education
                        </a>
                        <a className="icon">
                            <MdFlashOn style={{fontSize: "20px"}}/>
                        </a>
                        <div className="postInfo">
                            <ul className="nav">
                                <li>Peter Montana</li>
                                <li>3 days ago</li>
                            </ul>
                            <h3>
                                Lorem ipsum dolor sit amet.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <img src="assets/banner-04.jpg" alt="Banner-4" />
                <a className="cat">
                            World
                </a>
                <a className="icon">
                    <MdFlashOn style={{fontSize: "20px"}}/>
                </a>
                  <div className="postInfo">
                        <ul className="nav">
                            <li>Peter Montana</li>
                            <li>3 days ago</li>
                        </ul>
                        <h3>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
                        </h3>
                </div>
                

            </div>
        </div>
    </div>
  )
}

export default MainContent