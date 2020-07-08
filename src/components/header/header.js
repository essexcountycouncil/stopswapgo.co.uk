import React from "react"
import logo from "./logo.png"

console.log(logo)

function Header() {
  return (
    <header class="header-background">
      <div class="header">
        <div class="nav">
          <div class="logo-wrap">
            <a href="/" class="logo">
              <img src={logo} width="320" height="70" alt="Stop Swap Go! logo" />
            </a>
          </div>
          <ul class="nav-links">
            <li>
              <a href="/">Home</a></li><li>
              <a href="/get-started">Get started</a></li><li>
              <a href="/60-day-challenge">60 Day Challenge</a></li>
          </ul>        
        </div>
      </div>
    </header>
  )
}

export default Header