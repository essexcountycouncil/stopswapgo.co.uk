import React from "react"

export default ({ heading1, heading2, heading3, ariaLabel, title, bannerbackground }) =>
  <section class={bannerbackground} role="img" aria-label={ariaLabel} title={title}>
    <div className="overlay"></div>
    <div className="banner-container">
      <div className="greeting">
        <div className="arrow">
          <h1 className="page-heading"><span className="one">{heading1}</span> <span className="two">{heading2}</span> <span className="three">{heading3}</span></h1>
        </div>
      </div>
    </div>  
    <div className="ms-ie-notification"><p>This website is not optimised for Internet Explorer, please switch browser for a better experience</p></div>  
  </section>