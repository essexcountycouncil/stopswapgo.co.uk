import React from "react"
import previewPicture from "./two-women-walking.jpg"
import schoolKids from "./school-kids.png"
import LargeButton from "../large-button/large-button"
import { Link } from 'gatsby'
export default () =>
	<div>

		<div className="previews previews-grey-border">

			<div className="preview">
				<h3 className="sub-section-heading strapline strapline-highlighted"><span>Stop.Swap.</span><i>WIN!</i></h3>
				<img src={previewPicture} alt="Two women walking through a leafy park" title="Two women walking" />
				<p>Want to win prizes for walking and cycling? Of course you do. Our 60 Day Challenge is now live and we’re giving you the chance to win Amazon gift cards, Love2Shop vouchers and more!</p>
				<p>To be in with a chance to win, hit the button to learn more and get your 60 Day Challenge started.</p>
				<p class="small"><Link to="/terms-and-conditions">Terms and conditions apply</Link></p>
				<LargeButton title="WIN!" url="/60-day-challenge" />
			</div>

			<div className="preview">
				<h3 className="sub-section-heading strapline strapline-highlighted"><span>Stop.Swap.</span><i>SCHOOL!</i></h3>
				<img src={schoolKids} alt="Two teenagers in school uniform walking through church grounds" title="Two school kids walking" />
				<p>Your child’s trip to school is a perfect time to get them walking, cycling, or scooting. Use us to help you plan and prepare for them travelling to school in September in a safer and healthy way.</p>
				<LargeButton title="SCHOOL!" url="/getting-to-school" />
			</div>

		</div>
	</div>