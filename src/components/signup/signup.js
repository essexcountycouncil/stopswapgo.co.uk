import React from "react"
import NewsletterForm from "../newsletter-form/newsletter-form"

export default () =>
<section className="signup-background" aria-label="Subscribe to email" id="challenge">
  <div className="signup">
    <div className="mantra">
      <h2 className="strapline"><span>Keep on moving</span></h2>
      <p>Sign up to our newsletter for the latest walking and cycling news, tips, and exclusive offers to keep moving. You’ll also be the first to hear about our 60 Day Challenge where you can win prizes for cycling and walking. Just pop in your name, email and hit <i>GO!</i> We’ll do the rest.</p>
    </div>
    <NewsletterForm id={"data-signup-id"} style=""/>
  </div>
</section>