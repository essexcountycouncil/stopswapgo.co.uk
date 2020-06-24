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
    	<h2 class="strapline">It's time to rethink your commute</h2>
    	<p>Swap the way you commute for the joys of walking or cycling to work.</p>
  	</div>
  	
  	<PreviewServices />

    <div class="mantra">
    	<h2 class="strapline">It's time to rethink your commute</h2>
    	<p>Swap the way you commute for the joys of walking or cycling to work.</p>
  	</div>

		<div class="previews">
		  <div class="preview">
		    <h3 class="sub-section-heading">Here is a title</h3>
		    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
		  </div>  
		</div>

		<div class="previews">
		  <div class="preview right">
		    <h3 class="sub-section-heading">Here is a title</h3>
		    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
		  </div>  
		</div>

    </Layout>
  )
}