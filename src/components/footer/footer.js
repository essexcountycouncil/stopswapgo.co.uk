import React from "react"
import logo from "./seax.png"

export default () =>
  <footer id="main-footer" class="footer-container">
    <div class="footer-top">
      <div class="footer">
        <div class="nav">
          <ul class="nav-links">
            <li>
              <a href="https://www.essex.gov.uk/accessibility">Accessibility</a></li><li>
              <a href="https://www.essex.gov.uk/cookies">Cookies</a></li><li>
              <a href="https://www.essex.gov.uk/terms-conditions">Terms and conditions</a></li><li>
              <a href="https://www.essex.gov.uk/privacy-and-data-protection">Privacy and data protection</a></li><li>
              <a href="mailto:stop.swap.go@essex.gov.uk">Contact us</a></li>
          </ul>
          <ul class="social">
            <li>
              <a href="https://www.facebook.com/stopswapgo"><span class="fab fa-facebook-f"></span><span>Facebook</span></a></li><li>
              <a href="https://instagram.com/stopswapgo"><span class="fab fa-instagram"></span><span>Twitter</span></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer">
        <ul class="credits">
          <li class="copyright">© Essex County Council 2020</li>
          <li class="design-link"><a href="https://servicedesign.blog.essex.gov.uk/">Built by the Service Design Team</a></li>
          <li class="footer-logo">
            <a href="https://www.essex.gov.uk" class="logo-text seax">
              <img src={logo} width="36" height="30" alt="Essex County Council logo" />
              Essex.gov.uk
            </a>
          </li>
        </ul>  
      </div>
    </div>
  </footer>