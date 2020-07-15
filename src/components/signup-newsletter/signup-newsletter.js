import React, { useState } from "react";
import { useForm } from "react-hook-form";
const jsonp = require('jsonp');
let axios = require('axios');
let jsonpAdapter = require('axios-jsonp');
const https = require('https');

export default function SignupNewsletter() {
  const [submitted, setSubmitted] = useState('');
  const { register, handleSubmit, errors } = useForm();
  const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  function onSubmit(form) {
    const apiKey = process.env.GOV_DELIVERY_API_KEY;
  //  jsonp(`https://staging-api.govdelivery.com/api/add_script_subscription?t=UKESSEX_568&c=&k=${apiKey}&e=${form.email}`, null, (response) => {
   //   console.log(response);
   // });

    axios({
        url: `https://staging-api.govdelivery.com/api/add_script_subscription?t=UKESSEX_568&c=&k=${apiKey}&e=${form.email}`,
        adapter: jsonpAdapter,
        callbackParamName: 'c' // optional, 'callback' by default
    }).then((res) => {
      console.log("hi")
    });

    //setSubmitted('true')
  }

  return (
    <section className="signup-background" aria-label="Subscribe to newsletter via email" id="challenge" >
      <div className="signup">
        <div className="mantra">
          <h2 className="strapline"><span>Keep on moving</span></h2>
          <p>Sign up to our newsletter for the latest walking and cycling news, tips, and exclusive offers to keep moving. You’ll also be the first to hear about our 60 Day Challenge where you can win prizes for cycling and walking. Just pop in your name, email and hit <i>GO!</i> We’ll do the rest.</p>
          <form onSubmit={handleSubmit(onSubmit)} className="newsletterForm">

            {submitted ?
              (<div>
                <p className="submitted">You have successfully subscribed to our newsletter!</p>
                <button onClick={() => setSubmitted('')} className="button button-dark button-large extra-space">Add another email</button>
              </div>) :
              (<div>
                <div className="input-group-container-middle">
                  <label htmlFor="email">Email:</label>
                  <p className="errors">{errors.email?.message}</p>
                  <input
                    name="email"
                    className={errors.email?.message ? "error" : ""}
                    type="text"
                    onChange={() => setSubmitted('')}
                    ref={register({
                      required: 'Email address required',
                      pattern: {
                        value: EMAIL_REGEX,
                        message: 'Invalid email address',
                      },
                    })}
                  />
                </div>
                <div>
                  <button type="submit" className="button button-dark button-large extra-space">SIGN UP</button>
                </div>
              </div>)}
          </form>
        </div>
      </div>
    </section >
  )
}