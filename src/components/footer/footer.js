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
              <Link to="/accessibility">Accessibility</Link></li><li>
              <a href="https://www.essex.gov.uk/cookies">Cookies</a></li><li>
              <a href="https://www.essex.gov.uk/terms-conditions">Terms and conditions</a></li><li>
              <a href="https://www.essex.gov.uk/topic/privacy-and-data-protection">Privacy and data protection</a></li><li>
              <Link to="/terms-and-conditions">Competition terms and conditions</Link></li>
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