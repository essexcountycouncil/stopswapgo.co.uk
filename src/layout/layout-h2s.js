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
        p1={["Stop.Swap.", <i>GO!</i>, " wants to make getting around Essex on foot or by bike even more rewarding. So we’re delighted to announce our 60 Day Challenge: your chance to win awesome prizes like gift vouchers, walking and cycling accessories, and even a brand new bike and accessories worth £1000!"]}
        p2="Go to our 60 Day Challenge page to register for exclusive VIP access and see how you could win these fantastic prizes."
        label="WIN!"
        url="/60-day-challenge" />
      <Footer />
    </>
  )
}