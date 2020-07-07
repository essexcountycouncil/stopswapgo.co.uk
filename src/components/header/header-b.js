import React from "react"
import logo from "./logo.png"

console.log(logo)

function Header() {
  return (
    <header class="header-background">
      <div class="header">
        <div class="nav">
          <div class="logo-wrap">
            <div class="logo">
              <img src={logo} width="250" height="70" alt="Stop Swap Go! logo" /> Coming Soon
            </div>
          </div>
      
        </div>
      </div>
    </header>
  )
}

export default Header