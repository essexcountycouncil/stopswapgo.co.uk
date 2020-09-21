import React from "react"
import { Link } from 'gatsby'
import map from "./G2S_CHELM_Moulsham - map.png"
import Layout from "../../../../layout/routes"
import Breadcrumbs from "../../../../components/breadcrumbs/breadcrumbs"

const MoulshamHigh = () => (

	<Layout>
		<Breadcrumbs
			urlOne="/getting-to-school/routes/chelmsford"
			one="Schools in Chelmsford"
			two="Moulsham High School" />
	
		<h1>Moulsham High School</h1>
		<img src={map} alt="A map showing cycle and walking routes to and from Moulsham High School" title="A map showing cycle and walking routes to and from Moulsham High School" />

		<h2>Getting to and from Moulsham High School</h2>
		<p>These routes and maps are suggestions of how you could stop taking the car and swap to cycling, walking, or scooting to school. They don’t show every possible route and you could have fun finding a way that works for you. If you know a safe way that gets you there even quicker, that’s great! Take that route instead.</p>

		<h2>Address</h2>
		<p><a href="https://www.moulshamhigh.org/">Moulsham High School</a>,<br/>
		Brian Close<br/>
		Chelmsford<br/>
		Essex<br/>
		CM2 9ES 
		</p>


		<h2>Heavy traffic zone</h2>
		<p>The highlighted heavy traffic zone on the map shows the area that will have the heaviest traffic at school time. By using alternate routes and a mix of walking and cycling, you can avoid sitting in traffic and being late for school.</p>

		<h2>Walking routes</h2>
		<p>The housing estate next to the school has lots of footpaths giving quick access to the school on foot. The main road nearby, Princes Road, has an underpass and a bridge, allowing safe crossing of the road from those directions. The <a href="https://www.essexhighways.org/getting-around/cycling/routes-and-maps.aspx">Chelmsford cycle map</a> also helps to plan walking journeys.</p>

		<h2>Cycling routes</h2>
		<p>Many of the short-cuts described above for walkers work for cyclists too. The underpass on Longstomps Avenue acts as part of <a href="https://osmaps.ordnancesurvey.co.uk/51.71813,0.47383,15">National Cycle Network route 13</a>. <a href="https://www.essexhighways.org/getting-around/cycling/routes-and-maps.aspx">The Chelmsford cycle map</a> helps with information on this route, both near the school and beyond.</p>

		<h2>Park &amp; Ride</h2>
		<p><a href="https://www.essexhighways.org/Transport-and-Roads/Getting-Around/Bus/Park-and-Ride.aspx">Park &amp; Ride at Chelmsford</a> could help you on your journey.</p>

		<h2>Bus routes</h2>
		<p>There are a couple of bus services passing along Gloucester Avenue in both directions very close to the school entrance, linking it with the wider Great Baddow area and Chelmsford city centre. There are also some services to and from the centre which weave through the residential estate on the far side of Princes Road, on the north side of the school. </p>

	</Layout>
)

export default MoulshamHigh