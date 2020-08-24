import React from "react"
import { Link } from 'gatsby'
import Video from "../../components/video/video"
import transortVideo from "../../video/2020.07.16_Face_CoveringsV2_MP4_40s.mp4"
import Layout from "../../layout/layout-h2s-with-newsletter-no-banner"

const Transport = () => (
	<Layout>
	<h1>Taking part if your child has education transport from Essex County Council</h1>
	<p>We&rsquo;d love to see your child give walking, scooting, or cycling a go if that works for them. This will not affect your&nbsp;<a href="https://www.essex.gov.uk/school-transport/who-qualifies-for-home-to-school-transport">eligibility for education transport</a>&nbsp;as long as you continue to meet criteria.</p>
	<p>Due to the pandemic and in order to keep everyone safe there are some changes to how Essex County Council education transport is run. Essex County Council are following up-to-date government guidance but this may change come school term time. Be sure to check the most up to date government guidance.</p>
	<p>If you have any queries or concerns about transport which ECC do not pay for then you will need to contact one of the&nbsp;<Link to="/getting-to-school/bus-operators">local bus operators in Essex.</Link></p>
	<h2>Using a dedicated taxi, minibus or bus for education transport</h2>
	<p>A &lsquo;dedicated service&rsquo; is one that&rsquo;s not open to the public and just takes children to school. In order to keep everyone safe, there will be some changes you need to be aware of</p>
	<p>We are asking all children who can to wear a <a href="https://www.gov.uk/government/publications/how-to-wear-and-make-a-cloth-face-covering">face covering</a>. Some children are&nbsp;<a href="https://www.gov.uk/guidance/coronavirus-covid-19-safer-travel-guidance-for-passengers#exemptions-face-coverings">exempt from wearing face coverings</a>.</p>
	<p>Wearing a face covering helps keep everyone safe. It takes a bit of getting used to, but it&rsquo;s a simple measure most children can take. A face covering doesn&rsquo;t have to be a single use mask. It can be something you already have at home, like a scarf.&nbsp;<a href="https://www.gov.uk/government/publications/face-coverings-when-to-wear-one-and-how-to-make-your-own/face-coverings-when-to-wear-one-and-how-to-make-your-own#making-your-own-face-covering">Why not try making your own?</a></p>
	<p>Please make sure your child has a face covering and knows how to use it. This video shows you how to wear a face covering.</p>
	<Video 
		videoSrcURL={transortVideo}
		videoTitle="NHS video explaining how to stay safe during COVID-19"
	/>
	<p>Other changes you need to be aware of include:</p>
	<ul>
		<li>changes to how children get on the bus and where they can sit &ndash; social distancing is not required on dedicated school services so children might be asked to sit with their year group for example</li>
		<li>changes to pick up and drop off times</li>
		<li>enhanced cleaning</li>
	</ul>
	<p>These measures will vary by school and journey. So make sure your child listens to the transport operator taking them to and from school, and the school teachers.</p>
	<p>You&rsquo;ll get a letter by the second week of August that will have more information and the contact details of the operator running your service. Alternatively, you can&nbsp;<a href="https://www.stopswapgo.co.uk/getting-to-school/education-transport-operators">contact your transport operator</a>.</p>
	<p>Please be assured, the transport operators running these services will be following the latest government guidelines.</p>

	<h2>Using a ticket for a public bus or train for education transport</h2>
	<p>If your child gets a public bus, train, tube ticket, or oyster card from Essex County Council then&nbsp;<a href="https://www.gov.uk/guidance/coronavirus-covid-19-safer-travel-guidance-for-passengers#public-transport">government guidance on public transport</a>&nbsp;will apply, including social distancing and wearing a face covering.</p>
	<p>We know that public buses and trains will get far busier come September as they need to socially distance people. This could mean waiting longer for a bus. You could make your child leave for school much earlier, or get them to switch to walking, cycling, or scooting to avoid the problem for now.</p>
	<p>You should also check the operator&rsquo;s website for up to date details on the requirements of travelling on public transport and details on timetables and journeys.</p>
	</Layout>
	)

export default Transport
