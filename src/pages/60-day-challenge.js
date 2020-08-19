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
		<h2>Four simple steps to starting your 60 Day Challenge:</h2>
		<ol>
			<li>
        <p>Complete the sign up form below. Remember, you need to be an Essex resident and over 18 to take part!</p>
        <p>After you’ve submitted the form you’ll see a link to our challenge smartphone app called Indeemo.</p>
      </li>
			<li>
        <p>Click the link and create an Indeemo account using the same email address you used to register for the 60 Day Challenge.</p>
        <p>You can either do this straight away using the link or check your inbox for an email from us. We’ll automatically send you an email with the link within 24 hours of you signing up. </p>
      </li>
      <li>
        <p>Download the Indeemo app and log in to it via your smartphone.</p>
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
