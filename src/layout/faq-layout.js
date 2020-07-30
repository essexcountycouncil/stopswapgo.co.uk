import React from "react"
import { Router } from "@reach/router"
import Header from "../components/header/header"
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
        p1="Want to win prizes for walking and cycling? Of course you do. Our 60 Day Challenge is now live and we’re giving you the chance to win Amazon gift cards, Love2Shop vouchers and more! To be in with a chance to win, hit the button to learn more and get your 60 Day Challenge started. Terms and conditions apply. "
        label="SIGN UP!"
        url="https://public.govdelivery.com/accounts/UKESSEX/signup/17087"/>
      <Footer />
    </>
  )
}