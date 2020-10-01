import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import logo from "./seax.png"
import { Link } from 'gatsby'

const FooterNav = () => {
  const data = useStaticQuery(graphql`
  {
    contentfulFooterNav {
      nav1Label
      nav2Label
      nav3Label
      nav4Label
      nav5Label
      credit                   
    }
    currentBuildDate {
      currentDate
    }  
  }
  `)
  return (
  <footer id="main-footer" className="footer-container">
    <div className="footer-top">
      <div className="footer">
        <div className="nav">
          <ul className="nav-links">
            <li>
              <Link to="/accessibility">{data.contentfulFooterNav.nav1Label}</Link></li><li>
              <a href="https://www.essex.gov.uk/cookies">{data.contentfulFooterNav.nav2Label}</a></li><li>
              <a href="https://www.essex.gov.uk/terms-conditions">{data.contentfulFooterNav.nav3Label}</a></li><li>
              <a href="https://www.essex.gov.uk/topic/privacy-and-data-protection">{data.contentfulFooterNav.nav4Label}</a></li><li>
              <Link to="/terms-and-conditions">{data.contentfulFooterNav.nav5Label}</Link></li>
          </ul>
          <ul className="social-icons">
            <li>
              <a href="https://www.twitter.com/stopswapgoessex" className="twitter"><span className="fab fa-twitter" title="Twitter" aria-hidden="true"></span><span>Twitter</span></a></li><li>
            <a href="https://www.facebook.com/stopswapgo" className="facebook"><span className="fab fa-facebook-f" title="Facebook" aria-hidden="true"></span><span>Facebook</span></a></li><li>
            <a href="https://instagram.com/stopswapgo" className="instagram"><span className="fab fa-instagram" title="Instagram" aria-hidden="true"></span><span>Instagram</span></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="footer">
        <ul className="credits">
          <li className="copyright">© Essex County Council {data.currentBuildDate.currentDate}</li>
          <li className="design-link"><a href="https://servicetransformation.blog.essex.gov.uk">{data.contentfulFooterNav.credit}</a></li>
          <li className="footer-logo">
            <a href="https://www.essex.gov.uk" className="logo-text seax">
              <img src={logo} width="36" height="30" alt="Essex County Council logo" title="Essex County Council" />
              Essex.gov.uk
            </a>
          </li>
        </ul>  
      </div>
    </div>
  </footer>
  )
}

export default FooterNav
