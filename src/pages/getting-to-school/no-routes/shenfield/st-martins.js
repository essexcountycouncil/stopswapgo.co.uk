import React from "react"
import { Link } from 'gatsby'
import map from "./SSGG2SMapRouteFinal_V01_ShenfieldStMartin's.png"
import Layout from "../../../../layout/routes"
import Breadcrumbs from "../../../../components/breadcrumbs/breadcrumbs"

const StMartins = () => (

	<Layout>
		<Breadcrumbs
			urlOne="/getting-to-school/routes/shenfield"
			one="Schools in Shenfield"
			two="St Martin’s School" />
	
		<h1>St Martin’s School</h1>
		<img src={map} alt="A map showing cycle and walking routes to and from St Martin’s School" title="A map showing cycle and walking routes to and from St Martin’s School" />
		<h2>Getting to and from St Martin’s School</h2>
		<p>These routes and maps are suggestions of how you could stop taking the car and swap to cycling, walking, or scooting to school. They don’t show every possible route and you could have fun finding a way that works for you. If you know a safe way that gets you there even quicker, that’s great! Take that route instead.</p>
		<h2>Address</h2>
		<p><a href="https://www.st-martins.essex.sch.uk/">St Martin’s School</a><br/>
		Hanging Hill Lane<br/>
		Hutton<br/>
		Brentwood<br/>
		Essex<br/>
		CM13 2HG</p>
		<h2>Heavy traffic zone</h2>
		<p>The highlighted heavy traffic zone on the map shows the area that will have the heaviest traffic at school time. By using alternate routes and a mix of walking and cycling, you can avoid sitting in traffic and being late for school.</p>
		<h2>Walking routes</h2>
		<p>There are two pedestrian entrances to the school, both on Hanging Hill Lane, about 150 metres from one another. There are railings outside the front of the school, to help support road safety. You will find some footpath short-cuts in Hutton, allowing quicker access on foot, so it’s worth searching them out online.</p>
		<h2>Cycling routes</h2>
		<p>Although there are no cycle paths immediately around the school, Hanging Hill Lane does have long sight lines, helping anyone riding to or from the school on the road feel confident. The <a href="https://www.essexhighways.org/getting-around/cycling/routes-and-maps.aspx">Brentwood cycle map</a> covers other areas of Hutton, Shenfield and Brentwood.</p>
		<h2>Bus routes</h2>
		<p>St Martin’s has some bus services passing the front of the school. It’s less than a mile walk to Shenfield Station and high street, meaning it’s well connected with Brentwood, Ingatestone and Chelmsford, as well as some of the villages nearby.</p>
		<h2>Train routes</h2>
		<p>St Martin’s is about a 15 minute walk from Shenfield station, which is a major hub for trains in Essex. It has quick, direct lines to Brentwood, Chelmsford, Billericay and parts of north-east London. There are footpaths and pavements nearly all the way, and they’re on fairly quiet residential roads. Greater Anglia offer <a href="https://www.greateranglia.co.uk/tickets-fares/business-travel/schoolcollege-travel-discounts">discounts on train travel for students</a> at some schools.</p>

	</Layout>
)

export default StMartins