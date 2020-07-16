import React from "react"
import { Link } from 'gatsby'


export default ({title, url}) =>
    <div className="button-container-middle">
      <Link to={url} className="button button-dark button-large extra-space">{title}</Link>
    </div>