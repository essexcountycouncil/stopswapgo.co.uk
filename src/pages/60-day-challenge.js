import React from "react"
import LayoutWithNewsletter from "../layout/60-day"
import LargeButton from "../components/large-button/large-button"
import { Link } from 'gatsby'
import SignupSixtyDay from "../components/signup-sixty-day/signup-sixty-day"

const Challenge = () => (
	<LayoutWithNewsletter>
		<h1>Win prizes for walking and cycling with our 60 Day Challenge</h1>
		<div className="notice notice-middle">
			<h2 class="section-heading">Join people across Essex making the swap from driving to walking or cycling to win prizes.</h2>
			<p>Sign up now and get ready to Stop.Swap.<i>GO!</i></p>
		</div>
		<p>That&rsquo;s right. Swap to walking and cycling with our 60 Day Challenge and you could win fantastic prizes, including Love2Shop vouchers, Amazon gift cards and even the chance to win a bike and accessories to the value of £1,000!</p>
		<p>All you have to do to be in with a chance to win is take part in the 60 Day Challenge. It’s completely free and every trip counts. It doesn’t matter if you’re walking to work or simply cycling to the shops to pick up a pint of milk: tell us about your trip and you could win! It’s as simple as that.</p>
		<h2>Four simple steps to start your 60 Day Challenge</h2>
    <p>Remember, you need to be over 18 and live in an eligible Essex area to take part. If you are younger or don’t live in these areas you can still join the community on <a href="https://www.facebook.com/stopswapgo/">Facebook</a>, <a href="https://twitter.com/stopswapgoessex">Twitter</a> and <a href="https://www.instagram.com/stopswapgo/">Instagram</a>. If you do, let’s get you started!</p>
		<ol>
			<li>
        <p>Complete the sign up form below. Remember, you need to be an Essex resident and over 18 to take part!</p>
        <p>After you’ve submitted the form registration for our challenge smartphone app, called Indeemo, will open.</p>
      </li>
			<li>
        <p>Create an Indeemo account using the same email address you used to register for the 60 Day Challenge.</p>
        <p>You can either do this straight away or check your inbox for an email from us. We’ll automatically send you an email with the link within 24 hours of you signing up. Don’t forget to check your junk mail folder if you can’t find it in your inbox.</p>
      </li>
      <li>
        <p>Download the Indeemo app from a link on the page and log in to it via your smartphone.</p>
        <p>You can either do this straight away or check your inbox from an email from Indeemo. They’ll automatically send you an email shortly after registering. Again, don’t forget to check your junk mail folder.</p>
      </li>
      <li>
        <p>Follow the quick app tutorial and start your challenge!</p>
      </li>
		</ol>

		<h3>More about the 60 Day Challenge</h3>
		<p>
      For more information about the 60 Day Challenge, prizes and the Indeemo app, please visit our <Link to="/faq">FAQs page</Link>.
    </p>
    <SignupSixtyDay></SignupSixtyDay>
	</LayoutWithNewsletter>
)

export default Challenge
