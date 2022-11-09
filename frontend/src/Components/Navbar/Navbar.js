import React from 'react'
import './Navbar.css'

export default function Navbar(props) {
  return (
    <div className='flex-box'>
        <div className="items">Manage</div>
        <div className="items" onClick={props.add}>Add</div>
        {/* <div className="items"></div>
        <div className="items"></div>
        <div className="items"></div> */}
    </div>
  )
}
