import React from "react"
import LayoutWithNewsletter from "../layout/60-day"
import LargeButton from "../components/large-button/large-button"
import { Link } from 'gatsby'

const Challenge = () => (
	<LayoutWithNewsletter>
		<h1>Win prizes for walking and cycling with our 60 Day Challenge</h1>
		<div className="notice notice-middle">
			<p>Join people across Essex making the swap from driving to walking or cycling to win prizes. Sign up now and get ready to Stop. Swap. GO!</p>
		</div>
		<p>That&rsquo;s right. Swap to walking and cycling with our 60 Day Challenge and you could win fantastic prizes, including Love2Shop vouchers, Amazon gift cards and even the chance to win a bike and accessories to the value of £1,000!</p>
		<p>All you have to do to be in with a chance to win is take part in the 60 Day Challenge. It’s completely free and every trip counts. It doesn’t matter if you’re walking to work or simply cycling to the shops to pick up a pint of milk: tell us about your trip and you could win! It’s as simple as that.</p>
		<h2>Five simple steps to starting your 60 Day Challenge:</h2>
		<ol>
			<li>Hit the “Sign up” button to launch the registration form for the 60 Day Challenge and then enter your details</li>
			<li>Check your email inbox for an email from us containing the link to download our challenge smartphone app (it’s called “Indeemo”)</li>
			<li>Click the link and create an Indeemo account using the same email address you used to register for the 60 Day Challenge</li>
			<li>Download the Indeemo app and log in to it via your smartphone</li>
			<li>Follow the quick app tutorial and start your challenge!</li>
		</ol>
		<div className="text-align-center">
			<LargeButton title="SIGN UP!" url="https://public.govdelivery.com/accounts/UKESSEX/signup/17087"/>
		</div>
		<h3>More about the 60 Day Challenge</h3>
		<p>For more information about the 60 Day Challenge, prizes and the Indeemo app, please visit our <Link to="/faq">FAQs page</Link>.</p>
	</LayoutWithNewsletter>
)

export default Challenge
