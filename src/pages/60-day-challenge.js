import React from "react"
import IndexLayout from "../layout/index-layout"
import GovDeliveryForm from "../components/govdelivery-form/govdelivery-form"

const Challenge = () => (
	<IndexLayout>
		<h1>60 Day Challenge</h1>
		<h2>Win prizes for walking and cycling with our 60 Day Challenge.</h2>

		<div className="notice">
			<p >Early bird VIP registrations for our 60 Day Challenge (launching 1 August 2020) are now open.
Register using the form and get ready to Stop. Swap. <i>GO!</i></p>
		</div>

		<div className="text-block">
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

			<p>It couldn’t be easier to Stop. Swap. WIN! and if you register early we’ll give you VIP access when the
			challenge starts. Plus, we’re giving the first 500 lucky VIPs who start Day 1 of their challenge an extra
prize as a thank you for supporting Stop. Swap. <i>GO!</i></p>

			<p>And that's not all.</p>


		</div>
		<div className="text-align-center">
			<p className="bold">**One lucky VIP will win a bike plus cycling accessories to the value of £1,000!**</p>

			<p>So, what are you waiting for? Fill in the form below and get ready to Stop. Swap. <i>GO!</i></p>
			<br/>
			<GovDeliveryForm id={"mid-data-signup-id"} formId="17087" style="button-dark" title="SUBMIT!" />
			
		</div>
		<h2>FAQs</h2>
		<p>You can find the 60 Day Challenge FAQs page <a href="/faq">here</a></p>
	</IndexLayout>
)

export default Challenge
