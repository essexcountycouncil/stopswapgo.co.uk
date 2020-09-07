import React from "react"
import { Link } from 'gatsby'
import map from "./SSGG2SMapRouteFinal_V02_HarlowPassmores.png"
import Layout from "../../../../layout/routes"
import Breadcrumbs from "../../../../components/breadcrumbs/breadcrumbs"

const BasildonLower = () => (

	<Layout>
		<Breadcrumbs
			urlOne="/getting-to-school/routes/harlow"
			one="Schools in Harlow"
			two="Passmores Academy" />
	
		<h1>Passmores Academy</h1>
		<img src={map} alt="A map showing cycle and walking routes to and from Passmores Academy" title="A map showing cycle and walking routes to and from Passmores Academy" />
		<h2>Getting to and from Passmores Academy</h2>
		<p>These routes and maps are suggestions of how you could stop taking the car and swap to cycling, walking, or scooting to school. They don’t show every possible route and you could have fun finding a way that works for you. If you know a safe way that gets you there even quicker, that’s great! Take that route instead.</p>
		<h2>Address</h2>
		<p><a href="https://www.passmoresacademy.com/">Passmores Academy</a><br/>
		Tracyes Road<br/>
		Harlow<br/>
		Essex<br/>
		CM18 6JH</p>
		<h2>Heavy traffic zone</h2>
		<p>The highlighted heavy traffic zone on the map shows the area that will have the heaviest traffic at school time. By using alternate routes and a mix of walking and cycling, you can avoid sitting in traffic and being late.</p>
		<h2>Walking routes</h2>
		<p>The academy and surrounding area is very well served by footpaths and short-cuts. Tracyes Road has wide pavements on both sides and a zebra crossing right outside the front the academy. Traffic lights right next to the academy on Southern Way help people cross the main road.</p>
		<p>A number of <a href="https://www.harlow.gov.uk/parking/car-parks">Harlow Council car parks</a> allow you to park your car before walking the remaining distance. A free ticket valid for an hour must be displayed, otherwise a fine will be issued.</p>
		<h2>Cycling routes</h2>
		<p>As with walking, Harlow is well designed for cycling. Although Tracyes Road doesn’t have its own cycle lane, there is a cycleway alongside Southern Way in both directions on the academy side of the road. There’s also an off-road cycle path heading north from the academy, linking up with the rest of the Harlow cycle network, including into the town centre. The academy features on the <a href="https://www.essexhighways.org/getting-around/cycling/routes-and-maps.aspx">Harlow cycle map</a>.</p>
		<h2>Bus routes</h2>
		<p>Tracyes Road has a single bus service which links the outer suburbs with the town centre. Southern Way is extremely close to the school with a large number of bus services.</p>
	</Layout>
)

export default BasildonLower