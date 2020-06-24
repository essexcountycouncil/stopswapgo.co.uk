import React from "react"

export default () =>
<section class="signup-background" aria-label="Subscribe to email">
  <div class="signup">
    <h2 class="strapline">Keep me updated</h2>
    <form asp-controller="Home" asp-action="EmailSubscribe" method="get" class="form">
      <div class="group">
        <div class="signup-input">
          <label for="email">Enter your email address
            <input type="text" id="email" name="emailAddress" placeholder="Enter your email address" autocomplete="off" />
          </label>
        </div>
        <div class="signup-button" id="submitYourEmailAddress">
          <button type="submit" class="button subscribe" value="Subscribe">I am interested</button>
        </div>
      </div>
    </form>
  </div>
</section>