import React from "react"
import logo from "./SSG_Logo_Colour_3chevrons_RGB.svg"


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
            <li><a href="/getting-to-school">Getting to school</a></li>
            <li><a href="/getting-to-school/useful-info">Useful info</a></li>
            <li><a href="/getting-to-school/faq">FAQ</a></li>
            <li><a href="/getting-to-school/maps">Maps</a></li>
            <li class="pipe">|</li>
            <li><a href="/">Back</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header