import React from "react"
import logo from "./seax.png"
import { Link } from 'gatsby'

export default () =>
  <footer id="main-footer" className="footer-container">
    <div className="footer-top">
      <div className="footer">
        <div className="nav">
          <ul className="nav-links">
            <li>
              <a href="https://www.essex.gov.uk/accessibility">Accessibility</a></li><li>
              <a href="https://www.essex.gov.uk/cookies">Cookies</a></li><li>
              <a href="https://www.essex.gov.uk/terms-conditions">Terms and conditions</a></li><li>
              <a href="https://www.essex.gov.uk/topic/privacy-and-data-protection">Privacy and data protection</a></li><li>
              <Link to="/terms-and-conditions">Competition terms and conditions</Link></li>
          </ul>
          <ul className="social">
            <li>
              <a href="https://www.twitter.com/stopswapgoessex"><span className="fab fa-twitter"></span><span>Twitter</span></a></li><li>
              <a href="https://www.facebook.com/stopswapgo"><span className="fab fa-facebook-f"></span><span>Facebook</span></a></li><li>
              <a href="https://instagram.com/stopswapgo"><span className="fab fa-instagram"></span><span>Instagram</span></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="footer">
        <ul className="credits">
          <li className="copyright">© Essex County Council 2020</li>
          <li className="design-link"><a href="https://servicetransformation.blog.essex.gov.uk">Built by the Service Transformation Team</a></li>
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