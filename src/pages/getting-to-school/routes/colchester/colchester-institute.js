import React from "react"
import { Link } from 'gatsby'
import map from "./G2S School Page - Col Institute - Map.png"
import Layout from "../../../../layout/routes"
import Breadcrumbs from "../../../../components/breadcrumbs/breadcrumbs"

const ColchesterInstitute = () => (
	<Layout>

		<Breadcrumbs
			urlOne="/getting-to-school/routes/colchester"
			one="Schools in Colchester"
			two="Getting to and from Colchester Institute" />

		<h1>Getting to and from Colchester Institute</h1>
		<img src={map} />

		<h2>Getting to and from Colchester Institute</h2>
		<p>These routes and maps are suggestions of how you could stop taking the car and swap to cycling, walking, or scooting to school. They don’t show every possible route and you could have fun finding a way that works for you. If you know a safe way that gets you there even quicker, that’s great! Take that route instead.</p>

		<h2>Address</h2>
		<p><a href="https://www.colchester.ac.uk/">Colchester Institute</a>,<br />
		Sheepen Road<br />
		Colchester<br />
		Essex<br />
		CO3 3LL
		</p>

		<h2>Heavy traffic zone</h2>
		<p>The highlighted heavy traffic zone on the map shows the area that will have the heaviest traffic at school time. By using alternate routes and a mix of walking and cycling, you can avoid sitting in traffic and being late for school.</p>

		<h2>Walking routes</h2>
		<p>The area around the Institute has lots of footpaths and, as it’s close to the centre of the city, many bus and train stops too. There are multiple entrances for pedestrians along the road, and nearby there are a number of underpasses and bridges which mean you don’t have to cross busy main roads. </p>

		<h2>Cycling routes</h2>
		<p>The part of Sheepen Road directly outside the front of the Institute is part a well-designed quiet cycle route. This comes from the Lexden suburb, through <a href="https://www.colchester.gov.uk/info/cbc-article/?catid=country-parks-and-local-nature-reserves&amp;amp;id=KA-01615">Hilly Fields nature reserve</a>, and onto the riverside path to Castle Park. There are marked off-road cycle paths heading towards the main station, around the side and back of the St Helena site. There are plenty of crossing facilities for bikes as well as walkers. <a href="https://www.essexhighways.org/getting-around/cycling/routes-and-maps.aspx">The Colchester cycle map</a> can show you other routes which may help.</p>

		<h2>Park &amp; Ride </h2>
		<p><a href="https://www.essexhighways.org/Transport-and-Roads/Getting-Around/Bus/Park-and-Ride.aspx">Park &amp; Ride at Colchester</a> could help you on your journey. </p>

		<h2>Bus routes</h2>
		<p>Although no public bus services go down Sheepen Road itself, quite a few go down Cymbelline Way and Westway. These are a very short walk from the Institute, and plenty more on the nearby routes into the town centre. The Institute is a very short walk from many bus services coming into Colchester.</p>

		<h2>Train routes</h2>
		<p>The Institute is well under a mile’s walk from mainline Colchester station. This provides quick access via the main East Anglian line to places like Manningtree, Witham, Marks Tey and Kelvedon. Greater Anglia offer <a href="https://www.greateranglia.co.uk/tickets-fares/business-travel/schoolcollege-travel-discounts">discounts on train travel for students</a> at some schools, chat to staff about this.</p>

	</Layout>
)

export default ColchesterInstitute