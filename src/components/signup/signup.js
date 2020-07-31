import React from "react"
import LargeButton from "../large-button/large-button"

export default ({ tagline1, tagline2, p1, p2, p3, p3link, url, label }) =>
  <section className="signup-background" aria-label="Subscribe to email" id="challenge">
    <div className="signup">
      <div className="mantra">
        <h2 className="strapline"><span>{tagline1}</span><i>{tagline2}</i></h2>
        <p>{p1}</p>
        <p>{p2}</p>
        <p class="small"><a href={p3link}>{p3}</a></p>
        <LargeButton title={label} url={url} />
      </div>
    </div>
  </section>