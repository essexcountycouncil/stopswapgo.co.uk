import React from "react"
import { Router } from "@reach/router"
import Header from "../components/header/headerb"
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
      <Signup />
      <Footer />
    </>
  )
}