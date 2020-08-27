import React from "react"
import { Link } from 'gatsby'
import map from "./SSGG2SMapRouteFinal_V01_BrentwoodBecketKeys.png"
import Layout from "../../../../layout/routes"
import Breadcrumbs from "../../../../components/breadcrumbs/breadcrumbs"

const BecketKeys = () => (

	<Layout>
		<Breadcrumbs
			urlOne="/getting-to-school/routes/brentwood"
			one="Schools in Brentwood"
			two="Becket Keys School" />
	
		<h1>Becket Keys School</h1>
		<img src={map} alt="A map showing cycle and walking routes to and from Becket Keys School" title="A map showing cycle and walking routes to and from Becket Keys School" />
		<h2>Getting to and from Becket Keys School</h2>
		<p>These routes and maps are suggestions of how you could stop taking the car and swap to cycling, walking, or scooting to school. They don’t show every possible route and you could have fun finding a way that works for you. If you know a safe way that gets you there even quicker, that’s great! Take that route instead.</p>
		<h2>Address</h2>
		<p><a href="https://www.becketkeys.org/">Becket Keys School</a><br/>
		Sawyers Hall Lane<br/>
		Brentwood<br/>
		Essex<br/>
		CM15 9DA</p>
		<h2>Heavy traffic zone</h2>
		<p>The highlighted heavy traffic zone on the map shows the area that will have the heaviest traffic at school time. By using alternate routes and a mix of walking and cycling, you can avoid sitting in traffic and being late for school.</p>
		<h2>Walking routes</h2>
		<p>Sawyers Hall Lane has pavements on both sides. Whilst there are a lot of cars on the road, this means that traffic is slow moving, making it safer for crossing where needed. It’s very close to the centre of Brentwood too, which has lots of crossing facilities for pedestrians.</p>
		<h2>Cycling routes</h2>
		<p>Cycling is the quickest way for many students to get to school. For those students living in Shenfield, there is a cycle path cutting across a wooded area and joining Sawyers Hall Lane near the school. This means you can easily avoid Shenfield Road. The <a href="https://www.essexhighways.org/getting-around/cycling/routes-and-maps.aspx">Brentwood cycle map</a> will cover other areas of the town.</p>
		<h2>Bus routes</h2>
		<p>Being close to the centre of Brentwood, plenty of public bus services stop near the school on Shenfield Road, the High Street and Ongar Road. These provide direct connections with Shenfield, Ingatestone, Chelmsford and some of the villages north of town. The stops are well-placed, with waiting shelters and seats.</p>

	</Layout>
)

export default BecketKeys