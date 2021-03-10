import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby'
import logo from "./SSG_Logo_Colour_3chevrons_RGB_b.svg"

const MainNav = () => {
  const data = useStaticQuery(graphql`
  {
    contentfulMainNav {
      nav1Label
      nav2Label
      nav3Label
      # nav4Label
      nav5Label                      
    }
  }
  `)
  return (
    <header className="header-background">
    <a className="skip-main" href="#content">Skip to main content</a>
      <div className="header">
        <nav className="nav" role="navigation">
          <div className="logo-wrap">
            <a href="/" className="logo">
              <img src={logo} className="headerLogo" alt="Stop. Swap. GO! logo" title="Stop Swap Go" />
            </a>
          </div>
          <ul className="nav-links">
            <li><a href="/">{data.contentfulMainNav.nav1Label}</a></li>
            <li><a href="/about-us">{data.contentfulMainNav.nav2Label}</a></li>
            <li><a href="/get-started">{data.contentfulMainNav.nav3Label}</a></li>
            <li className="pipe">|</li>
            <li><a href="/getting-to-school">{data.contentfulMainNav.nav5Label}</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default MainNav