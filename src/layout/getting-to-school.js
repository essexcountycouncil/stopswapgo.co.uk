import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../components/header/headerb"
import Banner from "../components/banner/banner"
import Footer from "../components/footer/footer"
import SEO from "../components/seo"

// SignupNewsletter is the component that uses integration directly to GovDelivery 
import SignupNewsletter from "../components/signup-newsletter/signup-newsletter"

// Signup is a dull redirect
import Signup from "../components/signup/signup"

export default ({ children }) => {

  const data = useStaticQuery(graphql`
    {
      contentfulGettingToSchoolLanding {
        title
        titleLine2
        titleLine3
        banner {
          file {
            url
          }
        }
      }
    }  
    `)  
  return (
    <>
      <SEO title="Stop.Swap.GO! - Essex County Council" />
      <Header />
      <section class="banner-background" role="img" aria-label="" title="" style={{ backgroundImage: `url(${data.contentfulGettingToSchoolLanding.banner.file.url})` }} >
        <div className="overlay"></div>
        <div className="banner-container">
          <div className="greeting">
            <div className="arrow">
              <h1 className="page-heading"><span className="one">{data.contentfulGettingToSchoolLanding.title}</span> <span className="two">{data.contentfulGettingToSchoolLanding.titleLine2}</span> <span className="three">{data.contentfulGettingToSchoolLanding.titleLine3}</span></h1>
            </div>
          </div>
        </div>  
        <div className="ms-ie-notification"><p>This website is not optimised for Internet Explorer, please switch browser for a better experience</p></div>  
      </section>

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