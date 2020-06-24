import React from "react"
import logo from "./logo.png"
console.log(logo)
function Header() {
  return (
    <header class="header-background">
      <div class="header">
        <div class="nav">
          <div class="logo-wrap">
            <a href="/" class="logo-text">
              Stop.Swap.Go
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header