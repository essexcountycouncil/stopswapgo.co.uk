import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby'
import Helmet from "react-helmet"
import Layout from "../layout/getting-to-school"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
	{
	  contentfulGettingToSchoolLanding {
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
	    box3Title
	    box3TitleItalic
	    box3Content {
	      json
	    }
	    box3Image {
	      file {
	        url
	      }
	      title
	      description
	    }
	    box3ButtonLabel
	    box3ButtonUrl	
	    box4Title
	    box4TitleItalic
	    box4Content {
	      json
	    }
	    box4Image {
	      file {
	        url
	      }
	      title
	      description
	    }
	    box4ButtonLabel
	    box4ButtonUrl	        	    
	    social {
	      json
	    }	    	        
	  }
  }  
  `)	
  return (
    <Layout>
    <Helmet>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous" />
    </Helmet>
    <div className="mantra" id="get-ready">
      {documentToReactComponents(data.contentfulGettingToSchoolLanding.intro.json)}
    </div>

		<div className="previews previews-grey-border">
			<div className="preview">
				<h3 className="sub-section-heading strapline strapline-highlighted"><span>{data.contentfulGettingToSchoolLanding.box1Title}</span><i>{data.contentfulGettingToSchoolLanding.box1TitleItalic}</i></h3>
				<img src={`${data.contentfulGettingToSchoolLanding.box1Image.file.url}`} title={`${data.contentfulGettingToSchoolLanding.box1Image.title}`} alt={`${data.contentfulGettingToSchoolLanding.box1Image.description}`} />
				{documentToReactComponents(data.contentfulGettingToSchoolLanding.box1Content.json)}
		    <div className="button-container-middle">
		      <Link to={data.contentfulGettingToSchoolLanding.box1ButtonUrl} className="button button-dark button-large extra-space">{data.contentfulGettingToSchoolLanding.box1ButtonLabel}</Link>
		    </div>
			</div>
			<div className="preview">
				<h3 className="sub-section-heading strapline strapline-highlighted"><span>{data.contentfulGettingToSchoolLanding.box2Title}</span><i>{data.contentfulGettingToSchoolLanding.box2TitleItalic}</i></h3>
				<img src={`${data.contentfulGettingToSchoolLanding.box2Image.file.url}`} title={`${data.contentfulGettingToSchoolLanding.box2Image.title}`} alt={`${data.contentfulGettingToSchoolLanding.box2Image.description}`} />
				{documentToReactComponents(data.contentfulGettingToSchoolLanding.box2Content.json)}
				<div className="button-container-middle">
		      <Link to={data.contentfulGettingToSchoolLanding.box2ButtonUrl} className="button button-dark button-large extra-space">{data.contentfulGettingToSchoolLanding.box2ButtonLabel}</Link>
		    </div>				
			</div>			
		</div>


		<div className="previews previews-grey-border">
			<div className="preview">
				<h3 className="sub-section-heading strapline strapline-highlighted"><span>{data.contentfulGettingToSchoolLanding.box1Title}</span><i>{data.contentfulGettingToSchoolLanding.box1TitleItalic}</i></h3>
				<img src={`${data.contentfulGettingToSchoolLanding.box3Image.file.url}`} title={`${data.contentfulGettingToSchoolLanding.box3Image.title}`} alt={`${data.contentfulGettingToSchoolLanding.box3Image.description}`} />
				{documentToReactComponents(data.contentfulGettingToSchoolLanding.box3Content.json)}
		    <div className="button-container-middle">
		      <Link to={data.contentfulGettingToSchoolLanding.box3ButtonUrl} className="button button-dark button-large extra-space">{data.contentfulGettingToSchoolLanding.box3ButtonLabel}</Link>
		    </div>
			</div>
			<div className="preview">
				<h3 className="sub-section-heading strapline strapline-highlighted"><span>{data.contentfulGettingToSchoolLanding.box4Title}</span><i>{data.contentfulGettingToSchoolLanding.box4TitleItalic}</i></h3>
				<img src={`${data.contentfulGettingToSchoolLanding.box4Image.file.url}`} title={`${data.contentfulGettingToSchoolLanding.box4Image.title}`} alt={`${data.contentfulGettingToSchoolLanding.box4Image.description}`} />
				{documentToReactComponents(data.contentfulGettingToSchoolLanding.box4Content.json)}
				<div className="button-container-middle">
		      <Link to={data.contentfulGettingToSchoolLanding.box2ButtonUrl} className="button button-dark button-large extra-space">{data.contentfulGettingToSchoolLanding.box2ButtonLabel}</Link>
		    </div>				
			</div>			
		</div>		

		<div className="social">
			{documentToReactComponents(data.contentfulGettingToSchoolLanding.social.json)}
			<ul className="social-icons">
				<li>
					<a href="https://www.twitter.com/stopswapgoessex" className="twitter"><span className="fab fa-twitter" title="Twitter" aria-hidden="true"></span><span>Twitter</span></a></li><li>
					<a href="https://www.facebook.com/stopswapgo" className="facebook"><span className="fab fa-facebook-f" title="Facebook" aria-hidden="true"></span><span>Facebook</span></a></li><li>
					<a href="https://instagram.com/stopswapgo" className="instagram"><span className="fab fa-instagram" title="Instagram" aria-hidden="true"></span><span>Instagram</span></a></li>
			</ul>	
			<a className="twitter-timeline"  data-width="500" data-height="400" href="https://twitter.com/stopswapgoessex?ref_src=twsrc%5Etfw">Tweets by stopswapgoessex</a>
		</div>		

    </Layout>
      
  )
}

export default IndexPage
