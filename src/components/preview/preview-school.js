import React from "react"
import mapPreview from "./map-of-routes.png"
import prepare from "./people-walking-with-masks.png"
import training from "./cyclists-training.png"
import transport from "./school-kids.png"
import LargeButton from "../large-button/large-button"
import { Link } from 'gatsby'
export default () =>
	<div>

		<div className="previews previews-grey-border">
			<div className="preview">
				<h3 className="sub-section-heading strapline strapline-highlighted"><span>Stop.Swap.</span><i>ROUTES!</i></h3>
				<img src={mapPreview} alt="A map of the walking and cycling routes around King Edward VI Grammar School" title="A map of the walking and cycling routes around King Edward VI Grammar School" />
				<p>Check out our maps for travel to schools and colleges. Find suggested drop off places to miss the heaviest traffic! Better yet, if you live within a 30 minute walk, why not walk, cycle, or scoot to school?</p>
				<LargeButton title="ROUTES!" url="/getting-to-school/routes" />
			</div>

			<div className="preview">
				<h3 className="sub-section-heading strapline strapline-highlighted"><span>Stop.Swap.</span><i>PREPARE!</i></h3>
				<img src={prepare} alt="A father and daughter wearing face masks as they walk through a town together" title="A father and daughter wearing face masks as they walk through a town together" />
				<p>Tips and ideas to help families swap from driving the car for walking, cycling or scooting to school or college.</p>
				<LargeButton title="PREPARE!" url="/getting-to-school/prepare" />
			</div>
		</div>

		<div className="previews previews-grey-border">
			<div className="preview">
				<h3 className="sub-section-heading strapline strapline-highlighted"><span>Stop.Swap.</span><i>TRAINING!</i></h3>
				<img src={training} alt="Two young boys and their father cycling on a busy road in helmets and safety vests" title="Two young boys and their father cycling on a busy road in helmets and safety vests" />
				<p>Children walking, scooting or cycling to school needs to be done safely. We’ve partnered up with the Safer Essex Roads Partnership to put together training throughout the summer holidays to get them ready to swap.</p>
				<LargeButton title="TRAINING!" url="/getting-to-school/training" />
			</div>

			<div className="preview">
				<h3 className="sub-section-heading strapline strapline-highlighted"><span>Stop.Swap.</span><i>TRANSPORT!</i></h3>
				<img src={transport} alt="Two teenagers in school uniform walking through church grounds" title="Two teenagers in school uniform walking through church grounds" />
				<p>We'd love to see all children move to walking and cycling to school and we're here to help.  Essex County Council provides statutory transport to some children and there are important Covid-related changes to be aware of.</p>
				<LargeButton title="TRANSPORT!" url="/getting-to-school/transport" />
			</div>			
		</div>
	</div>