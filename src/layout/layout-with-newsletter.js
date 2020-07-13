import React from "react"
import { Router } from "@reach/router"
import Header from "../components/header/header"
import Banner from "../components/banner/banner"
import Footer from "../components/footer/footer"
import SEO from "../components/seo"
import Signup from "../components/signup/signup"

export default ({ children, hasSignUp }) => {

  return (
    <>
      <SEO title="Stop. Swap. GO! - Essex County Council" />
      <Header />
      <Router>
        <Banner path="/" />
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
      <Signup
        tagline1="Keep on moving"
        p1={["Sign up to our newsletter for the latest walking and cycling news, tips, and exclusive offers to keep moving. You’ll also be the first to hear about our 60 Day Challenge where you can win prizes for cycling and walking. Just pop in your name, email and hit ", <i>GO!</i>, " We’ll do the rest."]}
        label="GO!"
        url="https://public.govdelivery.com/accounts/UKESSEX/signup/16846" />
      <Footer />
    </>
  )
}