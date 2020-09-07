import React from "react"
import { Link } from 'gatsby'
import map from "./SSGG2SMapRouteFinal_V01_HarlowStMark's.png"
import Layout from "../../../../layout/routes"
import Breadcrumbs from "../../../../components/breadcrumbs/breadcrumbs"

const BasildonLower = () => (

	<Layout>
		<Breadcrumbs
			urlOne="/getting-to-school/routes/harlow"
			one="Schools in Harlow"
			two="St Mark’s West Essex Catholic School" />
	
		<h1>St Mark’s West Essex Catholic School</h1>
		<img src={map} alt="A map showing cycle and walking routes to and from St Mark’s West Essex Catholic School" title="A map showing cycle and walking routes to and from St Mark’s West Essex Catholic School" />
		<h2>Getting to and from St Mark’s West Essex Catholic School</h2>
		<p>These routes and maps are suggestions of how you could stop taking the car and swap to cycling, walking, or scooting to school. They don’t show every possible route and you could have fun finding a way that works for you. If you know a safe way that gets you there even quicker, that’s great! Take that route instead.</p>
		<h2>Address</h2>
		<p><a href="https://www.st-marks.essex.sch.uk/">St Mark’s West Essex Catholic School</a><br/>
		Tripton Road<br/>
		Harlow<br/>
		Essex<br/>
		CM18 6AA</p>
		<h2>Heavy traffic zone</h2>
		<p>The highlighted heavy traffic zone on the map shows the area that will have the heaviest traffic at school time. By using alternate routes and a mix of walking and cycling, you can avoid sitting in traffic and being late for school.</p>
		<h2>Walking routes</h2>
		<p>Harlow, including Tye Green where the school is, is very well served by footpaths and short-cuts. There are many footpaths cutting through the housing estates, plus you can use a short-cut footpath through the park behind the school to get directly into the town centre.</p>
		<p>A number of <a href="https://www.harlow.gov.uk/parking/car-parks">Harlow Council car parks</a> allow you to park your car before walking the remaining distance.. A free ticket valid for an hour must be displayed, otherwise a fine will be issued.</p>
		<h2>Cycling routes</h2>
		<p>As with walking, Harlow is well designed for cycling. Although Tripton Road doesn’t have its own cycle lane, there are many off-road cycle tracks, cutting through Tye Green, alongside but separated from Second Avenue, and via the park behind the school. The school features on the <a href="https://www.essexhighways.org/getting-around/cycling/routes-and-maps.aspx">Harlow cycle map</a>.</p>
		<h2>Bus routes</h2>
		<p>Tripton Road has a single bus service, which runs in both directions between Latton Bush and the town centre. Second Avenue is extremely close to the school and has a large number of bus services. Harlow bus station is less than a mile walk away.</p>
	</Layout>
)

export default BasildonLower