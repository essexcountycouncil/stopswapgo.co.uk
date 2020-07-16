import React from "react"
import LayoutWithNewsletter from "../layout/layout-with-newsletter"
import LargeButton from "../components/large-button/large-button"
import { Link } from 'gatsby'

const Challenge = () => (
	<LayoutWithNewsletter>
		<h1>60 Day Challenge</h1>
		<h2>Win prizes for walking and cycling with our 60 Day Challenge.</h2>


		<div className="text-block">


			<div className="notice notice-middle">
				<h3>Early bird VIP registrations for our 60 Day Challenge (launching 1 August 2020) are now open.</h3>
				<p>Register using the form and get ready to Stop.Swap.<i>GO!</i></p>
			</div>
			<p>That&rsquo;s right. Swap to walking and cycling with our 60 Day Challenge and you could win fantastic
		prizes.</p>

			<p>Our 60 Day Challenge starts from <span>1 August 2020</span>. We&rsquo;ll be giving away loads of great prizes including
		gift vouchers, walking and cycling accessories – and even the chance to win yourself a bike.</p>

			<p>All you have to do to be in with a chance to win is:</p>
			<ul>
				<li>sign up to the <span>60 Day Challenge</span></li>
				<li>download our app, available from 1 August 2020</li>
				<li>share your daily walking and cycling trips with us. </li>
			</ul>
			<p>Hint: the more you walk and cycle over
		the 60 days, the more chances you&rsquo;ll have to win.</p>

			<p>It couldn’t be easier to Stop.Swap.<i>WIN!</i> and if you register early we’ll give you VIP access when the
			challenge starts. Plus, we’re giving the first 500 lucky VIPs who start Day 1 of their challenge a prize as a thank you for supporting Stop.Swap.<i>GO!</i></p>

			<p>And that's not all.</p>

			<div className="notice-middle">
				<h3>One lucky VIP will win a bike plus cycling accessories to the value of £1,000!</h3>
				<p>So, what are you waiting for? Sign up to our 60 Day Challenge and get ready to Stop.Swap.<i>GO!</i></p>
			</div>

		</div>
		<div className="text-align-center">
			<LargeButton title="SIGN UP!" url="https://public.govdelivery.com/accounts/UKESSEX/signup/17087"/>
		</div>
		<h2>More about the 60 Day Challenge</h2>
		<p>Find everything you need about the 60 Day Challenge on our  <Link to="/faq">FAQs page</Link></p>
	</LayoutWithNewsletter>
)

export default Challenge
