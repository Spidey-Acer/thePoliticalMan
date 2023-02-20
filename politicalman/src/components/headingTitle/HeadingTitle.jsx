import React from 'react'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'
import './headingTitle.scss'

const HeadingTitle = ({title}) => {
  return (
    <div className="headingTitle">
      <div className="heading">
        <span className="title">{title}</span>

        <div className="icon">
          <FaLongArrowAltLeft className='left' style={{fontSize: "20px"}}/>
          <span className="divider">/</span>
          <FaLongArrowAltRight className='right' style={{ fontSize: "20px" }} />
        </div>
      </div>
    </div>
  )
}

export default HeadingTitle