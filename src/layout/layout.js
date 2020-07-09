import React from "react"
import { Router } from "@reach/router"
import Header from "../components/header/header"
import SearchHome from "../components/search-home/search-home"
import Signup from "../components/signup/signup"
import Footer from "../components/footer/footer"

export default ({ children, hasSignUp }) => {

  return (
    <>
      <Header />
      <Router>
        <SearchHome path="/" />
      </Router>
      <main id="content">
        <div className="container">
          <div className="main only">
            <section className="content">
              <div>{children}</div>
            </section>
          </div>
        </div>
      </main>
      <Signup />
      <Footer />
    </>
  )
}