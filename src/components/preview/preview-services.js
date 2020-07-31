import React from "react"
import previewPicture from "./two-women-walking.jpg"
import familyPicture from "./Website_Image.png"
import LargeButton from "../large-button/large-button"
import { Link } from 'gatsby'
export default () =>
	<div>

		<div className="previews">

			<div className="preview">
				<h3 className="sub-section-heading strapline strapline-highlighted"><span>Stop.Swap.</span><i>WIN!</i></h3>
				<div className="preview-grey-border">
				<img src={previewPicture} alt="Two women walking" title="Two women walking" />
					<p>Want to win prizes for walking and cycling? Of course you do. Our 60 Day Challenge is now live and we’re giving you the chance to win Amazon gift cards, Love2Shop vouchers and more!</p>
					<p>To be in with a chance to win, hit the button to learn more and get your 60 Day Challenge started.</p>
					<p class="small"><Link to="/terms-and-conditions">Terms and conditions apply</Link>.</p>
					<LargeButton title="WIN!" url="/60-day-challenge" /></div>
			</div>

			<div className="preview">
				<h3 className="sub-section-heading strapline strapline-highlighted"><span>Stop.Swap.</span><i>SHARE!</i></h3>
				<div className="preview-grey-border">
				<img src={familyPicture} alt="Mother, father and young child walking in a park" title="Mother, father and young child walking in a park" />
					<p>Join our community on social media and share your active travel stories, tips and tricks. We’ll also be posting live updates on our 60 Day Challenge – including details of our bonus challenges to win more prizes! Keep your eyes peeled, everyone.</p>
					<p>#StopSwapGo #StopSwapWin</p>
					<ul className="social">
						<li>
							<a href="https://www.twitter.com/stopswapgoessex" className="twitter"><span className="fab fa-twitter"></span><span>Twitter</span></a></li><li>
							<a href="https://www.facebook.com/stopswapgo" className="facebook"><span className="fab fa-facebook-f"></span><span>Facebook</span></a></li><li>
							<a href="https://instagram.com/stopswapgo" className="instagram"><span className="fab fa-instagram"></span><span>Instagram</span></a></li>
					</ul>
				</div></div>
		</div>
	</div>