import React from "react"
import { Link } from 'gatsby'
import map from "./SSGG2S_RouteFinal_V01_ClactonClactonCountyHigh.png"
import Layout from "../../../../layout/routes"
import Breadcrumbs from "../../../../components/breadcrumbs/breadcrumbs"

const ClactonCountyHigh = () => (

	<Layout>
		<Breadcrumbs
			urlOne="/getting-to-school/routes/clacton-on-sea"
			one="Schools in Clacton-on-Sea"
			two="Clacton County High School" />
	
		<h1>Clacton County High School</h1>
		<img src={map} alt="A map showing cycle and walking routes to and from Clacton County High School" title="A map showing cycle and walking routes to and from Clacton County High School" />
		<h2>Getting to and from Clacton County High School</h2>
		<p>These routes and maps are suggestions of how you could stop taking the car and swap to cycling, walking, or scooting to school. They don’t show every possible route and you could have fun finding a way that works for you. If you know a safe way that gets you there even quicker, that’s great! Take that route instead.</p>
		<h2>Address</h2>
		<p><a href="http://www.countyhigh.org.uk/">Clacton County High School</a><br/>
		Walton Road<br/>
		Clacton-on-Sea<br/>
		Essex<br/>
		CO15 6DZ</p>
		<h2>Heavy traffic zone</h2>
		<p>The highlighted heavy traffic zone on the map shows the area that will have the heaviest traffic at school time. By using alternate routes and a mix of walking and cycling, you can avoid sitting in traffic and being late for school.</p>
		<h2>Walking routes</h2>
		<p>There’s lots of footpaths around County High, a perfect way to dodge the traffic and take a short-cut. The footbridge over the railway line provides the ideal non-traffic route to the school from the northern part of Clacton.</p>
		<h2>Cycling routes</h2>
		<p>Although there are steps rather than a ramp on the footbridge over the railway line, there aren’t many and it’s easy to carry your bike up and down. Not far away from the school, well under half a mile, is <a href="https://www.sustrans.org.uk/find-a-route-on-the-national-cycle-network/frinton-on-sea-to-clacton-on-sea#:~:text=The%20route%20starts%20at%20Frinton,%252C%20wide%20and%20traffic-free.">National Cycle Network route 150</a>, running from Clacton all the way up the coast to Walton-on-the-Naze. The school already has a strong cycling culture, and plenty of students do <a href="https://saferessexroads.org/road-users/cycling/">Bikeability Level 3</a>.</p>
		<h2>Bus routes</h2>
		<p>The school is close to the centre of Clacton, so lots of bus services pass nearby from all over town, as well as the surrounding villages. Being only two hundred metres or so from Skelmersdale Road is of benefit too, with a number of services passing along there which loop around Clacton and Holland.</p>
		<h2>Train routes</h2>
		<p>County High is well under half a mile from Clacton train station, which has regular services to Colchester, taking in Thorpe-le-Soken, Weeley and Great Bentley. Greater Anglia offer <a href="https://www.greateranglia.co.uk/tickets-fares/business-travel/schoolcollege-travel-discounts">discounts on train travel for students</a> at some schools.</p>
	</Layout>
)

export default ClactonCountyHigh