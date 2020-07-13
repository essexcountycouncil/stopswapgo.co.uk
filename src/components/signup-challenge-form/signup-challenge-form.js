import React from "react"
import LargeButton from "../large-button/large-button"

export default ({ tagline1, tagline2, p1, p2, url, label }) =>
  <section className="signup-background" aria-label="Subscribe to email" id="challenge">
    <div className="signup">
      <div className="mantra">
        <h2 className="strapline"><span>{tagline1}</span><i>{tagline2}</i></h2>
        <p>{p1}</p>
        <p>{p2}</p>
        <LargeButton title={label} url={url} />
      </div>
    </div>
  </section>