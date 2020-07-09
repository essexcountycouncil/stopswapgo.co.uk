import React from "react"
import Helmet from "react-helmet"
import Layout from "../layout/layout"
import PreviewServices from "../components/preview/preview-services"
/*import PreviewNews from "../components/preview/preview-news"
import Impact from "../components/impact/impact"
*/


export default ({ data }) => {
  return (
    <Layout>
    <Helmet>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous" />
      <script  src="https://public.govdelivery.com/assets/Signup.js" data-account-code="UKESSEX" data-signup-id="16846"></script>
    </Helmet>
    <div class="mantra" id="get-ready">
    	<h2 class="strapline">Get ready to Stop.Swap.<i>GO!</i></h2>
    	<p>Hello! We’re making getting around Essex easier – and more rewarding – than ever.</p>
      <p>More and more of us are swapping from car to bus, bike or our own two feet. And whether you’re off to the shops, visiting friends or family, or getting to and from work, we’re here to help keep you moving.</p>
  	</div>
  	
  	<PreviewServices />

    </Layout>
  )
}