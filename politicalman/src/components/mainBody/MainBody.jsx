import React from 'react'
import { WorldNews } from '../../category'
import StyleOne from '../styleOne/StyleOne'
import StyleTwo from '../styleTwo/StyleTwo'
import Widget from '../widget/Widget'
import './mainBody.scss'


const MainBody = () => {
  return (
    <div className='mainBody'>
      <div className="mainBodyWrapper">
        <div className="item">
          <StyleOne {...WorldNews}/>
        </div>
        <div className="item">
          <StyleTwo />
        </div>
        <div className="item">
          <Widget />
        </div>
      </div>
    </div>
  )
}

export default MainBody