import React from "react"

const Banner = ({ siteTitle }) => (
  <section className="banner-background" role="img" aria-label="Ladies walking in the park" title="Ladies walking in the park">
    <div className="overlay"></div>
    <div className="banner-container">
      <div className="greeting">
	      <div className="arrow">
					<h1 className="page-heading"><span className="one">Rethink</span> <span className="two">Your Daily</span> <span className="three">Travel</span></h1>
	      </div>
      </div>
    </div>  
    <div className="ms-ie-notification"><p>This website is not optimised for Internet Explorer, please switch browser for a better experience</p></div>  
  </section>
)

export default Banner