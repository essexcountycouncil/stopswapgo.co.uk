import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../../components/header/header-bus"
import Footer from "../../components/footer/footer"
import SEO from "../../components/seo"

// SignupNewsletter is the component that uses integration directly to GovDelivery 
import SignupNewsletter from "../../components/signup-newsletter/signup-newsletter"


export default ({ children }) => {

  const data = useStaticQuery(graphql`
    {
      contentfulSsgBusLandingPage {
        title1
        title2
        title3
        banner {
          file {
            url
          }
          title
          description
        }
      }
    }  
    `)  
  return (
    <>
      <SEO title="Stop.Swap.GO! - Essex County Council" />
      <div role="banner">
        <Header />
        <section className="banner-background" aria-label="Stop Swap Go! mantra" title="" style={{ backgroundImage: `url(${data.contentfulSsgBusLandingPage.banner.file.url})` }} >
          <div className="overlay"></div>
          <div className="banner-container">
            <div className="greeting">
              <div className="arrow">
                <h1 className="page-heading">
                  <span className="one">{data.contentfulSsgBusLandingPage.title1}</span>
                  <span className="two">{data.contentfulSsgBusLandingPage.title2}</span>
                  <span className="three">{data.contentfulSsgBusLandingPage.title3}</span>
                </h1>
              </div>
            </div>
          </div>  
          <div className="ms-ie-notification"><p>This website is not optimised for Internet Explorer, please switch browser for a better experience</p></div>  
        </section>
      </div>

      <main id="content">
        <div className="container">
          <div className="main only">
            <section className="content">
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