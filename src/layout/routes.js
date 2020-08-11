import React from "react"
import Header from "../components/header/headerb"
import Banner from "../components/banner/banner"
import Footer from "../components/footer/footer"
import SEO from "../components/seo"
import Back from "../components/breadcrumbs/breadcrumbs"

// SignupNewsletter is the component that uses integration directly to GovDelivery 
import SignupNewsletter from "../components/signup-newsletter/signup-newsletter"

// Signup is a dull redirect
import Signup from "../components/signup/signup"

export default ({ children }) => {

  return (
    <>
      <SEO title="Stop.Swap.GO! - Essex County Council" />
      <Header />
      <main id="content">
        <Back />
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