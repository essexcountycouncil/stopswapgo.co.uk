import React from "react"
import { Router } from "@reach/router"
import Header from "../components/header/headerb"
import Banner from "../components/banner/banner"
import Signup from "../components/signup/signup"
import Footer from "../components/footer/footer"
import SEO from "../components/seo"

export default ({ children }) => {

  return (
    <>
      <SEO title="Stop.Swap.GO! - Essex County Council" />
      <Header />
      <Router>
        <Banner path="/" />
      </Router>
      <main id="content">
        <div className="container">
          <div className="main only">
            <section className="content" aria-label="Main content area">
              <div>{children}</div>
            </section>
          </div>
        </div>
      </main>
      <Signup 
        tagline1="Stop.Swap." 
        tagline2="WIN!" 
        p1="Sign up to our 60 Day Challenge to win prizes for walking and cycling!"
        label="SIGN UP!"
        url="https://public.govdelivery.com/accounts/UKESSEX/signup/17087"/>
      <Footer />
    </>
  )
}