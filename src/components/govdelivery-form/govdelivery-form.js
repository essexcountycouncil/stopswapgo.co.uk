import React, { Component } from 'react'

export default ({style, id, formId, title}) => 
    <form id={id} action={"https://public.govdelivery.com/accounts/UKESSEX/signup/"+formId} className="form">
    <div className="group">
      <div className="signup-button" id={"submitYourEmailAddress-"+formId}>
<button type="submit" className={style + " button button-large"} value="Subscribe">{title}</button>
      </div>
    </div>
  </form>
