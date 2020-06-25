import React from "react"

export default () =>
<section class="signup-background" aria-label="Subscribe to email">
  <div class="signup">
    <div class="mantra">
      <h2 class="strapline">Stop. Swap. WIN!</h2>
      <p>Want to win prizes for walking and cycling? Of course you do. Sign up to our newsletter and be the first to hear about our 60 Day Challenge. Just pop in your name, email and hit GO! We’ll do the rest.</p>
    </div>
    <form asp-controller="Home" asp-action="EmailSubscribe" method="get" class="form">
      <div class="group">
        <div class="signup-input">
          <label for="email">Enter your email address
            <input type="text" id="email" name="emailAddress" placeholder="Enter your email address" autocomplete="off" />
          </label>
        </div>
        <div class="signup-button" id="submitYourEmailAddress">
          <button type="submit" class="button subscribe" value="Subscribe">Go!</button>
        </div>
      </div>
    </form>
  </div>
</section>