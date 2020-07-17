import React, { useState } from "react";
import { useForm } from "react-hook-form";
let axios = require('axios');
let jsonpAdapter = require('axios-jsonp');

export default function SignupNewsletter() {
  const [submitted, setSubmitted] = useState('');
  const [checked, setChecked] = useState('');
  const { register, handleSubmit, getValues, errors } = useForm();

  const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  function onSubmit(form) {
    const apiKey = process.env.GOV_DELIVERY_API_KEY;

    axios({
      url: `https://api.govdelivery.com/api/add_script_subscription?t=UKESSEX_568&c=&k=${apiKey}&e=${form.email}`,
      adapter: jsonpAdapter,
      callbackParamName: 'c'
    }).then((response) => {
      if (response.status === 200) {
        console.log(response.data.message)
      } else {
        console.error("Error: ", response)
      }
      setSubmitted('true')
    });
  }

  function clearSubmission() {
    setSubmitted('')
  }

  return (
    <section className="signup-background" aria-label="Subscribe to newsletter via email" id="challenge" >
      <div className="signup">
        <div className="mantra">
          <h2 className="strapline"><span>Keep on moving</span></h2>
          <p>Subscribe to our newsletter for the latest walking and cycling news, tips, and exclusive offers to keep moving. You’ll also be the first to hear about our 60 Day Challenge where you can win prizes for cycling and walking</p>
          <form onSubmit={handleSubmit(onSubmit)} className="newsletterForm">

            {submitted ?
              (<div>
                <p className="submitted">You have successfully subscribed to our newsletter!</p>
                <button onClick={clearSubmission} className="button button-dark button-large extra-space">Add another email</button>
              </div>) :
              (<div>
                <div className="input-group-container-middle">
                  <ul>
                    {errors.email ? (<li className="errors">{errors.email?.message}</li>) : (null)}
                    {errors.agreement ? (<li className="errors">{errors.agreement?.message}</li>) : (null)}
                  </ul>
                </div>
                <div className="input-group-container-middle">
                  <input
                    name="email"
                    className={"large-input" + (errors.email?.message ? " error" : "")}
                    type="text"
                    ref={register({
                      required: 'Email address required',
                      pattern: {
                        value: EMAIL_REGEX,
                        message: 'Invalid email address entered',
                      },
                    })}
                  />
                  <button type="submit" className={"button button-dark button-large" + (errors.email?.message ? " error" : "")}>SUBSCRIBE!</button>

                </div>

                <div className="input-group-container-middle checkbox">
                  <input type="checkbox" id="agreement" name="agreement" className={(errors.agreement?.message ? " error" : "")}
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    ref={register({
                      required: 'Please provide consent to our data privacy policy'
                    })} />

                  <label htmlFor="agreement">By checking this box, you consent to our <a href="https://subscriberhelp.granicus.com/s/article/Privacy" target="_blank">data privacy policy</a></label>
                </div>

                <div className="disclaimer">
                  <p>Essex County Council is the controller of the personal information you submit here. We'll use the information you provide to keep you updated with Stop.Swap.<i>GO!</i> If it looks like you might be committing fraud or crime, the law may require us to share your information with the police or fraud investigation organisations. For more details about how we use your personal information, please read our <a href="https://subscriberhelp.granicus.com/s/article/Privacy" target="_blank">data privacy policy</a>.</p>
                </div>
              </div>)}
          </form>
        </div>
      </div>
    </section >
  )
}