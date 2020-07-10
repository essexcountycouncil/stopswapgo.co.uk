import React from "react"
import IndexLayout from "../layout/index-layout"
import NewsletterForm from "../components/newsletter-form/newsletter-form"

const Challenge = () => (
  <IndexLayout>
    <h1>60 Day Challenge</h1>
    <h2>Win prizes for walking and cycling with our 60 Day Challenge.</h2>
	<div className="text-block">
			<p>That&rsquo;s right. Swap to walking and cycling with our 60 Day Challenge and you could win fantastic
		prizes.</p>
				
				<p>Our 60 Day Challenge starts from <span>1 August 2020</span>. We&rsquo;ll be giving away loads of great prizes including
		gift vouchers, walking and cycling accessories – and even the chance to win yourself a bike.</p>
				
				<p>All you have to do to be in with a chance to win is sign up to the <span>60 Day Challenge</span>, download our
		app and share your daily walking and cycling trips with us. Hint: the more you walk and cycle over
		the 60 days, the more chances you&rsquo;ll have to win.</p>

				<p>It couldn&rsquo;t be easier to <span>Stop. Swap. WIN!</span> Early bird registrations open on <span>Monday 13 July</span> and we&rsquo;ll
				be giving the first 500 lucky VIPs on our waiting list an extra prize once they start their 60 Day
				Challenge. It&rsquo;s our way of saying thank you for supporting Stop. Swap. <i>GO!</i></p>
				
				<p>If you&rsquo;d like to be the first to hear when our waitlist goes live, sign up to our newsletter now and
		we&rsquo;ll ping you an update when we&rsquo;re ready to <i>GO!</i></p>
	</div>
	<NewsletterForm id={"mid-data-signup-id"}  style="button-dark"/>
    <h2>FAQs</h2>
	<p>You can find the 60 Day Challenge FAQs page <a href="/faq">here</a></p>
  </IndexLayout>
)

export default Challenge
