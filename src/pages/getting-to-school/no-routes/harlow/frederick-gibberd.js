import React from "react"
import { Link } from 'gatsby'
import map from "./SSGG2SMapRouteFinal_V01_HarlowSirFrederickGibberd.png"
import Layout from "../../../../layout/routes"
import Breadcrumbs from "../../../../components/breadcrumbs/breadcrumbs"

const FrederickGibberdCollege = () => (

	<Layout>
		<Breadcrumbs
			urlOne="/getting-to-school/routes/harlow"
			one="Schools in Harlow"
			two="Sir Frederick Gibberd College" />
	
		<h1>Sir Frederick Gibberd College</h1>
		<img src={map} alt="A map showing cycle and walking routes to and from Sir Frederick Gibberd College" title="A map showing cycle and walking routes to and from Sir Frederick Gibberd College" />
		<h2>Getting to and from Sir Frederick Gibberd College</h2>
		<p>These routes and maps are suggestions of how you could stop taking the car and swap to cycling, walking, or scooting to school. They don’t show every possible route and you could have fun finding a way that works for you. If you know a safe way that gets you there even quicker, that’s great! Take that route instead.</p>
		<h2>Address</h2>
		<p><a href="https://www.sirfrederickgibberdcollege.org/">Sir Frederick Gibberd College</a><br/>
		c/o Burnt Mill Academy<br/>
		First Avenue<br/>
		Harlow<br/>
		Essex<br/>
		CM20 2NR</p>
		<h2>Heavy traffic zone</h2>
		<p>The highlighted heavy traffic zone on the map shows the area that will have the heaviest traffic at college time. By using alternate routes and a mix of walking and cycling, you can avoid sitting in traffic and being late for college.</p>
		<h2>Walking routes</h2>
		<p>The college and surrounding area is very well served by footpaths and short-cuts. There are many footpaths cutting through the housing estates, plus you can use a short-cut footpath through the park behind the college to get to the town centre.</p>
		<p>A number of <a href="https://www.harlow.gov.uk/parking/car-parks">Harlow Council car parks</a> allow you to park your car before walking the remaining distance. A free ticket valid for an hour must be displayed, otherwise a fine will be issued.</p>
		<h2>Cycling routes</h2>
		<p>As with walking, Harlow is well designed for cycling. Although Tendring Road doesn’t have its own cycle lane, there are plenty of off-road routes heading into town from Passmores and the neighbouring suburbs of Great Parndon and Staple Tye. All three areas are well linked up, as shown on the <a href="https://www.essexhighways.org/getting-around/cycling/routes-and-maps.aspx">Harlow cycle map</a>.</p>
		<h2>Bus routes</h2>
		<p>Although there are no bus services outside the school, there are lots of services a short walk in either direction. These all head into the centre of Harlow and there are plenty of main roads towards town where the bus lane allows you to pass the traffic jams.</p>
	</Layout>
)

export default FrederickGibberdCollege