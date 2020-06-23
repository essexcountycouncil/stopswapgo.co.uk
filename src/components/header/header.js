import React from "react"
import logo from "./seax.png"
console.log(logo)
function Header() {
  return (
    <header class="header-background">
      <div class="header">
        <div class="nav">
          <div class="logo-wrap">
            <a href="/" class="logo-text seax">
              <img src={logo} width="36" height="30" alt="Essex logo" />
               Essex.gov.uk
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header