import React from "react"
import { Router } from "@reach/router"
import Header from "../components/header/header"
import Signup from "../components/signup/signup"
import Footer from "../components/footer/footer"
import SEO from "../components/seo"

export default ({ children }) => {

  return (
    <>
      <SEO title="Stop.Swap.GO! - Essex County Council" />
      <Header />
      <main id="content">
        <div className="container">
          <div className="main only">
            <section id="page" className="content" aria-label="Main content area">
              <div>{children}</div>
            </section>
          </div>
        </div>
      </main>
      <Signup 
        tagline1="Stop.Swap." 
        tagline2={[<i>WIN!</i>]}
        p1="Want to win prizes for walking and cycling? Of course you do. Our 60 Day Challenge is now live and we’re giving you the chance to win Amazon gift cards, Love2Shop vouchers and more!"
        p2="To be in with a chance to win, hit the button to learn more and get your 60 Day Challenge started."
        p3="Terms and conditions apply"
        p3link="/terms-and-conditions"
        label={[<i>WIN!</i>]}
        url="/60-day-challenge"/>
      <Footer />
    </>
  )
}