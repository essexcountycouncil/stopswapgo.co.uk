import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby'
import logo from "./SSG_Logo_Colour_3chevrons_RGB_b.svg"

function BusNav() {
  const data = useStaticQuery(graphql`
  {
    contentfulSubNav(subNav1Label: {eq: "SSG! Bus"}) {
      subNav1Label
      subNav2Label
      subNav3Label
      subNav4Label
      subNav5Label
      subNav6Label
      subNav7Label
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
              <img src={logo} className="headerLogo" alt="logo" title="Stop Swap Go" />
            </a>
          </div>
          <ul className="nav-links">
            <li><a href="/bus">{data.contentfulSubNav.subNav1Label}</a></li>
            <li><a href="/bus/firstessex">{data.contentfulSubNav.subNav2Label}</a></li>
            <li><a href="/bus/arriva">{data.contentfulSubNav.subNav3Label}</a></li>
            <li><a href="/bus/hedingham">{data.contentfulSubNav.subNav4Label}</a></li>
            <li><a href="/bus/stephensons">{data.contentfulSubNav.subNav5Label}</a></li>
            <li><a href="/bus/faqs">{data.contentfulSubNav.subNav6Label}</a></li>
            <li><a href="/bus/terms-and-conditions">{data.contentfulSubNav.subNav7Label}</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default BusNav