import React from 'react'
import { Link } from 'react-router-dom'

import PrimaryPinkButton from './primary-pink-button'
import './header.css'

const Header = (props) => {
  return (
    <div className="header-header">
      <nav className="header-nav">
        <div className="header-container">
          <Link to="/" className="header-navlink large">
            Soft UI Design System
          </Link>
          <div className="header-menu">
            <Link to="/" className="header-navlink1 large">
              Home
            </Link>
            <Link to="/profile" className="header-navlink2 large">
              Profile
            </Link>
            <Link to="/coming-soon" className="header-navlink3 large">
              Coming Soon
            </Link>
          </div>
          <div className="header-container1">
            <div className="header-container2">
              <PrimaryPinkButton button="buy now"></PrimaryPinkButton>
            </div>
            <svg viewBox="0 0 1024 1024" className="header-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
