import React from "react"

export default ({title, url}) =>
    <div className="button-container-middle">
      <a href={url} className="button button-dark button-large extra-space">{title}</a>
    </div>