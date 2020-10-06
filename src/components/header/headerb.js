import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby'
import logo from "./SSG_Logo_Colour_3chevrons_RGB_b.svg"


function SubNav() {
  const data = useStaticQuery(graphql`
  {
    contentfulSubNav {
      subNav1Label
      subNav2Label
      subNav3Label
      subNav4Label
      subNav5Label                      
    }
  }
  `)
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
            <li><a href="/getting-to-school">{data.contentfulSubNav.subNav1Label}</a></li>
            <li><a href="/getting-to-school/prepare">{data.contentfulSubNav.subNav2Label}</a></li>
            <li><a href="/getting-to-school/routes">{data.contentfulSubNav.subNav3Label}</a></li>
            <li><a href="/getting-to-school/training">{data.contentfulSubNav.subNav4Label}</a></li>
            <li><a href="/getting-to-school/transport">{data.contentfulSubNav.subNav5Label}</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default SubNav