import React from "react"
import { useStaticQuery, graphql } from "gatsby"
export default () =>
<div className="impact">
  <div className="hero campaign" style={{backgroundImage: "url("+node.image.file.url+")"}}>
    <div className="overlay"></div>
    <div className="overlay-box">
      <div className="overlay-content">
        <div className="content-heading"><a href={node.url}>{node.title}</a></div>
        <p>{node.teaser}</p>
      </div>
    </div>
  </div>
</div>