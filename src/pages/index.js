import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby'
import Helmet from "react-helmet"
import Layout from "../layout/home"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
	{
	  contentfulLanding {
	  	intro {
	  		json
	  	}
	    box1Title
	    box1TitleItalic
	    box1Content {
	      json
	    }
	    box1Image {
	      file {
	        url
	      }
	      title
	      description
	    }
	    box1ButtonLabel
	    box1ButtonUrl
	    box2Title
	    box2TitleItalic
	    box2Content {
	      json
	    }
	    box2Image {
	      file {
	        url
	      }
	      title
	      description
	    }
	    box2ButtonLabel
	    box2ButtonUrl	    
	    social {
	      json
	    }	    	        
	  }
  }  
  `)	
  return (
    <Layout>
    <Helmet>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossOrigin="anonymous" />
    </Helmet>
    <div className="mantra" id="get-ready">
      {documentToReactComponents(data.contentfulLanding.intro.json)}
    </div>

		<div className="previews previews-grey-border">
			<div className="preview">
				<h3 className="sub-section-heading strapline strapline-highlighted"><span>{data.contentfulLanding.box1Title}<i>{data.contentfulLanding.box1TitleItalic}</i></span></h3>
				<img src={`${data.contentfulLanding.box1Image.file.url}`} title={`${data.contentfulLanding.box1Image.title}`} alt="" />
				{documentToReactComponents(data.contentfulLanding.box1Content.json)}
		    <div className="button-container-middle">
		      <Link to={data.contentfulLanding.box1ButtonUrl} className="button button-dark button-large extra-space">{data.contentfulLanding.box1ButtonLabel}</Link>
		    </div>
			</div>
			<div className="preview">
				<h3 className="sub-section-heading strapline strapline-highlighted"><span>{data.contentfulLanding.box2Title}<i>{data.contentfulLanding.box2TitleItalic}</i></span></h3>
				<img src={`${data.contentfulLanding.box2Image.file.url}`} title={`${data.contentfulLanding.box2Image.title}`} alt="" />
				{documentToReactComponents(data.contentfulLanding.box2Content.json)}
				<div className="button-container-middle">
		      <Link to={data.contentfulLanding.box2ButtonUrl} className="button button-dark button-large extra-space">{data.contentfulLanding.box2ButtonLabel}</Link>
		    </div>				
			</div>			
		</div>

		<div className="social">
			{documentToReactComponents(data.contentfulLanding.social.json)}
			<ul className="social-icons">
				<li>
					<a href="https://www.twitter.com/stopswapgoessex" className="twitter"><span className="fab fa-twitter" title="Twitter" aria-hidden="true"></span><span>Twitter</span></a></li><li>
					<a href="https://www.facebook.com/stopswapgo" className="facebook"><span className="fab fa-facebook-f" title="Facebook" aria-hidden="true"></span><span>Facebook</span></a></li><li>
					<a href="https://instagram.com/stopswapgo" className="instagram"><span className="fab fa-instagram" title="Instagram" aria-hidden="true"></span><span>Instagram</span></a></li>
			</ul>
			<a className="twitter-timeline"  data-width="500" data-height="400" href="https://twitter.com/stopswapgoessex?ref_src=twsrc%5Etfw" data-tweet-limit="1">Tweets by stopswapgoessex</a>
		</div>		

    </Layout>
      
  )
}

export default IndexPage
