import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby'
import Helmet from "react-helmet"
import Layout from "../layout/getting-to-school"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
	{
	  contentfulGettingToSchool {
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
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossOrigin="anonymous" />
    </Helmet>
    <div className="mantra" id="get-ready">
      {documentToReactComponents(data.contentfulGettingToSchool.intro.json)}
    </div>

		<div className="previews previews-grey-border">
			<div className="preview">
				<h3 className="sub-section-heading strapline strapline-highlighted"><span>{data.contentfulGettingToSchool.box1Title}</span><i>{data.contentfulGettingToSchool.box1TitleItalic}</i></h3>
				<img src={`${data.contentfulGettingToSchool.box1Image.file.url}`} title={`${data.contentfulGettingToSchool.box1Image.title}`} alt="" />
				{documentToReactComponents(data.contentfulGettingToSchool.box1Content.json)}
		    <div className="button-container-middle">
		      <Link to={data.contentfulGettingToSchool.box1ButtonUrl} className="button button-dark button-large extra-space">{data.contentfulGettingToSchool.box1ButtonLabel}</Link>
		    </div>
			</div>
			<div className="preview">
				<h3 className="sub-section-heading strapline strapline-highlighted"><span>{data.contentfulGettingToSchool.box2Title}</span><i>{data.contentfulGettingToSchool.box2TitleItalic}</i></h3>
				<img src={`${data.contentfulGettingToSchool.box2Image.file.url}`} title={`${data.contentfulGettingToSchool.box2Image.title}`} alt="" />
				{documentToReactComponents(data.contentfulGettingToSchool.box2Content.json)}
				<div className="button-container-middle">
		      <Link to={data.contentfulGettingToSchool.box2ButtonUrl} className="button button-dark button-large extra-space">{data.contentfulGettingToSchool.box2ButtonLabel}</Link>
		    </div>				
			</div>			
		</div>


		<div className="previews previews-grey-border">
			<div className="preview">
				<h3 className="sub-section-heading strapline strapline-highlighted"><span>{data.contentfulGettingToSchool.box3Title}</span><i>{data.contentfulGettingToSchool.box3TitleItalic}</i></h3>
				<img src={`${data.contentfulGettingToSchool.box3Image.file.url}`} title={`${data.contentfulGettingToSchool.box3Image.title}`} alt="" />
				{documentToReactComponents(data.contentfulGettingToSchool.box3Content.json)}
		    <div className="button-container-middle">
		      <Link to={data.contentfulGettingToSchool.box3ButtonUrl} className="button button-dark button-large extra-space">{data.contentfulGettingToSchool.box3ButtonLabel}</Link>
		    </div>
			</div>
			<div className="preview">
				<h3 className="sub-section-heading strapline strapline-highlighted"><span>{data.contentfulGettingToSchool.box4Title}</span><i>{data.contentfulGettingToSchool.box4TitleItalic}</i></h3>
				<img src={`${data.contentfulGettingToSchool.box4Image.file.url}`} title={`${data.contentfulGettingToSchool.box4Image.title}`} alt="" />
				{documentToReactComponents(data.contentfulGettingToSchool.box4Content.json)}
				<div className="button-container-middle">
		      <Link to={data.contentfulGettingToSchool.box4ButtonUrl} className="button button-dark button-large extra-space">{data.contentfulGettingToSchool.box4ButtonLabel}</Link>
		    </div>				
			</div>			
		</div>		

		<div className="social">
			{documentToReactComponents(data.contentfulGettingToSchool.social.json)}
			<ul className="social-icons">
				<li>
					<a href="https://www.twitter.com/stopswapgoessex" className="twitter"><span className="fab fa-twitter" title="Twitter" aria-hidden="true"></span><span>Twitter</span></a></li><li>
					<a href="https://www.facebook.com/stopswapgo" className="facebook"><span className="fab fa-facebook-f" title="Facebook" aria-hidden="true"></span><span>Facebook</span></a></li><li>
					<a href="https://instagram.com/stopswapgo" className="instagram"><span className="fab fa-instagram" title="Instagram" aria-hidden="true"></span><span>Instagram</span></a></li>
			</ul>	
			<div tabindex="-10">
				<a className="twitter-timeline"  data-width="500" data-height="400" href="https://twitter.com/stopswapgoessex?ref_src=twsrc%5Etfw" data-tweet-limit="1">Tweets by stopswapgoessex</a>
			</div>
		</div>		

    </Layout>
      
  )
}

export default IndexPage
