import React from "react"
import Layout from "../layout/layout"
import PreviewServices from "../components/preview/preview-services"
/*import PreviewNews from "../components/preview/preview-news"
import Impact from "../components/impact/impact"
*/
export default ({ data }) => {
  return (
    <Layout>
    <div class="mantra">
    	<h2 class="strapline">Get ready to Stop. Swap. GO!</h2>
    	<p>Hello! We’re making walking and cycling in Essex easier – and more rewarding – than ever. We’ve already seen people from all over Essex making the switch to walking and cycling. And whether you’re off to the shops, visiting friends or family, or getting to and from work, we’re here to help keep you moving.</p>
  	</div>
  	
  	<PreviewServices />

    </Layout>
  )
}