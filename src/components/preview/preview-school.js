import React from "react"
import mapPreview from "./map-of-routes.png"
import prepare from "./people-walking-with-masks.png"
import training from "./cyclists-training.png"
import transport from "./school-kids.png"
import LargeButton from "../large-button/large-button"
import DeactiveButton from "../large-button/deactive-button"
import { Link } from 'gatsby'
export default () =>
	<div>

		<div className="previews">

			<div className="preview">
				<h3 className="sub-section-heading strapline strapline-highlighted"><span>Stop.Swap.</span><i>ROUTES!</i></h3>
				<div className="preview-grey-border">
					<img src={mapPreview} alt="Two women walking" title="Two women walking" />
					<p>Check out our maps for travel to schools and colleges. Find suggested drop off places to miss the heaviest traffic! Better yet, if you live within a 30 minute walk, why not walk, cycle, or scoot to school?</p>
					<DeactiveButton title="Coming soon!" url="#" />
				</div>
			</div>

			<div className="preview">
				<h3 className="sub-section-heading strapline strapline-highlighted"><span>Stop.Swap.</span><i>PREPARE!</i></h3>
				<div className="preview-grey-border">
					<img src={prepare} alt="People walking with masks" title="People walking with masks" />
					<p>Tips and ideas to help families swap from driving them in the car for walking, cycling or scooting to school.</p>
					<LargeButton title="PREPARE!" url="/getting-to-school/prepare" />
				</div>
			</div>

			<div className="preview">
				<h3 className="sub-section-heading strapline strapline-highlighted"><span>Stop.Swap.</span><i>TRAINING!</i></h3>
				<div className="preview-grey-border">
					<img src={training} alt="Cyclists training" title="Cyclists training" />
					<p>Children walking, scooting or cycling to school needs to be done safely. We’ve partnered up with the Safer Essex Roads Partnership to put together training throughout the summer holidays to get them ready to swap.</p>
					<LargeButton title="TRAINING!" url="/getting-to-school/training" />
				</div>
			</div>

			<div className="preview">
				<h3 className="sub-section-heading strapline strapline-highlighted"><span>Stop.Swap.</span><i>TRANSPORT!</i></h3>
				<div className="preview-grey-border">
					<img src={transport} alt="Two school kids walking" title="Two school kids walking" />
					<p>We'd love to see all children move to walking and cycling to school and we're help to help.  Essex County Council provides statutory transport to some children and there are important Covid-related changes to be aware of.</p>
					<LargeButton title="TRANSPORT!" url="/getting-to-school/school-transport" />
				</div>
			</div>			

		</div>
	</div>