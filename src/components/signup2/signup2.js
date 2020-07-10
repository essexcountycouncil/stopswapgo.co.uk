import React from "react"

import ChallengeGoButton from "../challenge-go-button/challenge-go-button"

// This is only a temporary component, to be deleted when not in use any more
export default () =>
<section className="signup-background" aria-label="Subscribe to email" id="challenge">
  <div className="signup">
    <div className="mantra">
      <h2 class="strapline"><span>Stop.Swap.</span><i>WIN!</i></h2>
      <p>Stop. Swap. GO! wants to make getting around Essex on foot or by bike even more
rewarding. So we’re delighted to announce our 60 Day Challenge: your chance to
win awesome prizes like gift vouchers, walking and cycling accessories, and even a
brand new bike and accessories worth £1000!</p>
<p>Go to our 60 Day Challenge page to register for exclusive VIP access and see
how you could win these fantastic prizes.</p>
    </div>
   <ChallengeGoButton/>
  </div>
</section>