import React from "react"

export default ({action, body, url}) =>
<section className="signup-background" aria-label="Subscribe to email" id="challenge">
  <div className="signup">
    <div className="mantra">
      <h2 className="strapline"><span>Stop.Swap.</span><i>{action}</i></h2>
        <p>{body}</p>
    </div>
    <form id="data-signup-id" action={url} className="form">
      <div className="group">
        <div className="signup-button" id="submitYourEmailAddress">
          <button type="submit" className="button subscribe" value="Subscribe">{action}</button>
        </div>
      </div>
    </form>
  </div>
</section>