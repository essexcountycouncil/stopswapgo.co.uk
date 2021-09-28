import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby'
import Helmet from "react-helmet"
import Layout from "../../layout/bus/home"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const BusIndexPage = () => {
  const data = useStaticQuery(graphql`
	{
    contentfulSsgBusLandingPage {
      banner {
        file {
          url
        }
        title
        description
      }
      mainDescription {
        json
      }
      box1Image {
        file {
          url
        }
        title
        description
      }
      box1Content {
        json
      }
      box1ButtonTable
      box1ButtonUrl
      box2Image {
        file {
          url
        }
        title
        description
      }
      box2Content {
        json
      }
      box2ButtonTable
      box2ButtonUrl
      box3Image {
        file {
          url
        }
        title
        description
      }
      box3Content {
        json
      }
      box3ButtonTable
      box3ButtonUrl
      box4ButtonTable
      box4ButtonUrl
      box4Image {
        file {
          url
        }
        title
        description
      }
      box4Content {
        json
      }
      box4ButtonTable
      box4ButtonUrl
    }
  } 
  `)
  return (
    <Layout>
      <Helmet>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossOrigin="anonymous" />
      </Helmet>
      <div className="mantra" id="get-ready">
        {documentToReactComponents(data.contentfulSsgBusLandingPage.mainDescription.json)}
      </div>

      <div className="previews previews-grey-border">
        <div className="preview">
          <h3 className="sub-section-heading strapline strapline-highlighted"><span>{data.contentfulSsgBusLandingPage.box1Title}<i>{data.contentfulSsgBusLandingPage.box1TitleItalic}</i></span></h3>
          <img src={`${data.contentfulSsgBusLandingPage.box1Image.file.url}`} title={`${data.contentfulSsgBusLandingPage.box1Image.title}`} alt="" />
          {documentToReactComponents(data.contentfulSsgBusLandingPage.box1Content.json)}
          <div className="button-container-middle">
            <Link to={data.contentfulSsgBusLandingPage.box1ButtonUrl} className="button button-dark button-large extra-space">{data.contentfulSsgBusLandingPage.box1ButtonTable}</Link>
          </div>
        </div>
        <div className="preview">
          <h3 className="sub-section-heading strapline strapline-highlighted"><span>{data.contentfulSsgBusLandingPage.box2Title}<i>{data.contentfulSsgBusLandingPage.box2TitleItalic}</i></span></h3>
          <img src={`${data.contentfulSsgBusLandingPage.box2Image.file.url}`} title={`${data.contentfulSsgBusLandingPage.box2Image.title}`} alt="" />
          {documentToReactComponents(data.contentfulSsgBusLandingPage.box2Content.json)}
          <div className="button-container-middle">
            <Link to={data.contentfulSsgBusLandingPage.box2ButtonUrl} className="button button-dark button-large extra-space">{data.contentfulSsgBusLandingPage.box2ButtonTable}</Link>
          </div>
        </div>
        <div className="preview">
          <h3 className="sub-section-heading strapline strapline-highlighted"><span>{data.contentfulSsgBusLandingPage.box3Title}<i>{data.contentfulSsgBusLandingPage.box3TitleItalic}</i></span></h3>
          <img src={`${data.contentfulSsgBusLandingPage.box3Image.file.url}`} title={`${data.contentfulSsgBusLandingPage.box3Image.title}`} alt="" />
          {documentToReactComponents(data.contentfulSsgBusLandingPage.box3Content.json)}
          <div className="button-container-middle">
            <Link to={data.contentfulSsgBusLandingPage.box3ButtonUrl} className="button button-dark button-large extra-space">{data.contentfulSsgBusLandingPage.box3ButtonTable}</Link>
          </div>
        </div>
        <div className="preview">
          <h3 className="sub-section-heading strapline strapline-highlighted"><span>{data.contentfulSsgBusLandingPage.box4Title}<i>{data.contentfulSsgBusLandingPage.box4TitleItalic}</i></span></h3>
          <img src={`${data.contentfulSsgBusLandingPage.box4Image.file.url}`} title={`${data.contentfulSsgBusLandingPage.box4Image.title}`} alt="" />
          {documentToReactComponents(data.contentfulSsgBusLandingPage.box4Content.json)}
          <div className="button-container-middle">
            <Link to={data.contentfulSsgBusLandingPage.box4ButtonUrl} className="button button-dark button-large extra-space">{data.contentfulSsgBusLandingPage.box4ButtonTable}</Link>
          </div>
        </div>
      </div>

      <div className="social">
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

export default BusIndexPage
