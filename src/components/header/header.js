import React from "react"
import logo from "./logo.png"


function Header() {
  return (
    <header className="header-background">
    <a className="skip-main" href="#content">Skip to main content</a>
      <div className="header">
        <div className="nav">
          <div className="logo-wrap">
            <a href="/" className="logo">
              <img src={logo} className="headerLogo" alt="logo" title="Stop Swap Go" />
            </a>
          </div>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About us</a></li>
            <li><a href="/get-started">Get started</a></li>
            <li><a href="/60-day-challenge">60 Day Challenge</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header