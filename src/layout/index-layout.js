import React from "react"
import { Router } from "@reach/router"
import Header from "../components/header/header"
import SearchHome from "../components/search-home/search-home"
import Signup from "../components/signup/signup"
import Footer from "../components/footer/footer"
import SEO from "../components/seo"

export default ({ children, hasSignUp }) => {

  return (
    <>
      <SEO title="Stop.Swap.GO! - Essex County Council" />
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
      <Signup action={"GO!"}
        url={"https://public.govdelivery.com/accounts/UKESSEX/signup/16846" }
        body={"Sign up to our newsletter for the latest walking and cycling news, tips, and exclusive offers to keep moving. You’ll also be the first to hear about our 60 Day Challenge where you can win prizes for cycling and walking. Just pop in your name, email and hit <i>GO!</i> We’ll do the rest."} />
      <Footer />
    </>
  )
}