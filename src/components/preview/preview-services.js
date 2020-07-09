import React from "react"
import cyclist from "./Chelmsford-station-cyclist.jpg"
import familyPicture from "./young-family-walking-park.jpg"
import ChallengeGoButton from "../challenge-go-button/challenge-go-button"
export default () =>
	<>

		<div className="previews">
			<div className="preview">
				<img src={cyclist} alt="Cyclist picture" />
				<div className="img-arrow"></div>
			</div>
			<div className="preview">
				<h3 className="sub-section-heading">Stop.Swap.WIN!</h3>
				<p>Want to win prizes for walking and cycling? Of course you do. Head over to our 60 Day Challenge
page to learn more and register for exclusive VIP access and early bird rewards.</p>
				<ChallengeGoButton/>
			</div>
		</div>

		<div className="previews">
			<div className="preview">
				<h3 className="sub-section-heading">Join our community</h3>
				<p>Join our community @stopswapgo for the latest events, news and journey planning info. We’ll also be sharing your stories and experiences of walking and cycling. Sign up to our newsletter (below) for regular Stop. Swap. <i>GO!</i> community, walking and cycling updates and details of how you can join our 60 Day Challenge to win prizes.</p>
				<ul className="social">
					<li>
						<a href="https://www.facebook.com/stopswapgo" className="facebook"><span className="fab fa-facebook-f"></span><span>Facebook</span></a></li><li>
						<a href="https://instagram.com/stopswapgo" className="instagram"><span className="fab fa-instagram"></span><span>Twitter</span></a></li>
				</ul>
			</div>
			<div className="preview">
				<img src={familyPicture} alt="Family picture" title="Join our community" />
				<div className="img-arrow"></div>
			</div>
		</div>
	</>