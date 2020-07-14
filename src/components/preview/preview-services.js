import React from "react"
import cyclistPicture from "./Website_Image2.png"
import familyPicture from "./Website_Image.png"
import LargeButton from "../large-button/large-button"
export default () =>
	<>

		<div className="previews">
			<div className="preview">
				<img src={cyclistPicture} alt="Cyclist" title="Win prizes walking and cycling"/>
			</div>
			<div className="preview">
				<h3 className="sub-section-heading strapline"><span>Stop.Swap.</span><i>WIN!</i></h3>
				<p>Want to win prizes for walking and cycling? Of course you do. Head over to our 60 Day Challenge
page to learn more and register for exclusive VIP access and early bird rewards.</p>
				<LargeButton title="WIN!" url="/60-day-challenge"/>
			</div>
		</div>

		<div className="previews">
			<div className="preview">
			<h3 className="sub-section-heading strapline"><span>Stop.Swap.</span><i>SHARE!</i></h3>
				<p>Follow us and share your active travel stories, tips and tricks. #StopSwapGo</p>
				<ul className="social">
					<li>
						<a href="https://www.twitter.com/stopswapgoessex" className="twitter"><span className="fab fa-twitter"></span><span>Twitter</span></a></li><li>
						<a href="https://www.facebook.com/stopswapgo" className="facebook"><span className="fab fa-facebook-f"></span><span>Facebook</span></a></li><li>
						<a href="https://instagram.com/stopswapgo" className="instagram"><span className="fab fa-instagram"></span><span>Instagram</span></a></li>
				</ul>
			</div>
			<div className="preview">
				<img src={familyPicture} alt="Family" title="Join our community" />
			</div>
		</div>
	</>