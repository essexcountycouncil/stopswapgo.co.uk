import React from "react"
import Header from "../components/header/headerb"
import Banner from "../components/banner/banner"
import Footer from "../components/footer/footer"
import SEO from "../components/seo"

// SignupNewsletter is the component that uses integration directly to GovDelivery 
import SignupNewsletter from "../components/signup-newsletter/signup-newsletter"

// Signup is a dull redirect
import Signup from "../components/signup/signup"

export default ({ children }) => {

  return (
    <>
      <SEO title="Stop.Swap.GO! - Essex County Council" />
      <Header />
      <Banner 
        heading1="Rethink"
        heading2="Your School"
        heading3="Run"
        ariaLabel="Girls walking to school"
        title="Girls walking to school"
        bannerbackground="banner-background getting-to-school"
        />
      <main id="content">
        <div className="container">
          <div className="main only">
            <section className="content" aria-label="Main content area">
              <div>{children}</div>
            </section>
          </div>
        </div>
      </main>
      <SignupNewsletter />
      <Footer />
    </>
  )
}