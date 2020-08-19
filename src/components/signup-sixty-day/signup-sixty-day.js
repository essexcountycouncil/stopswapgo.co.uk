import React, { useState } from "react";
import { useForm } from "react-hook-form";
let axios = require('axios');
let jsonpAdapter = require('axios-jsonp');

export default function SignupSixtyDay() {
  const [submitted, setSubmitted] = useState('');
  const [checked, setChecked] = useState('');
  const { register, handleSubmit, getValues, errors } = useForm();

  const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  function onSubmit(form) {
    const apiKey = process.env.GOV_DELIVERY_API_KEY;

    axios({
      url: `https://api.govdelivery.com/api/add_script_subscription?t=UKESSEX_569&c=&k=${apiKey}&e=${form.email}&q_84487=${form.full_name}&q_84759=${form.postcode}&q_84959=${form.over_eighteen}&q_84762=${form.council}&q_84760=${form.consent_to_share}`,
      adapter: jsonpAdapter,
      callbackParamName: 'c'
    }).then((response) => {
      if (response.status === 200) {
        console.log(response.data.message)
        window.location = "https://register.indeemo.com/s/338325";
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
    <section className="form-background" aria-label="Subscribe to newsletter via email" id="challenge" >
      <form onSubmit={handleSubmit(onSubmit)} className="newsletterForm form">
        <h3 className="sub-section-heading strapline strapline-highlighted"><span>STOP.SWAP.</span><i>SIGNUP!</i></h3>
        <p className="warning">Note * indicates required answer</p>
        {submitted ?
          (<div>

          </div>) :
          (<div>
            <div>
              <ul className="errors">
                
                {errors.agreement ? (<li className="error">{errors.agreement?.message}</li>) : (null)}
              </ul>
            </div>
            <div className={"form-group group" + (errors.over_eighteen?.message ? " error-block" : "")}>
              <fieldset>
                <legend>Are you 18 years of age or older?</legend>
                <span className="form-hint"> Please note, only people aged 18 or over are able to take part in the 60 Day Challenge.</span>
                {errors.over_eighteen ? (<span className="error">{errors.over_eighteen?.message}</span>) : (null)}
                <div class="multiple-choice">
                  <input 
                    name="over_eighteen"
                    className={"large-input form-control" + (errors.over_eighteen?.message ? " error" : "")}
                    value="294706" 
                    type="checkbox" 
                    ref={register({ 
                      required: 'Select yes only if you are 18 or older'
                    })}/>
                  <label>Yes</label>
                </div>
              </fieldset>
            </div>            
            <div className={"form-group group" + (errors.full_name?.message ? " error-block" : "")}>
              <label className="section-heading">Your full name*</label>
              {errors.full_name ? (<span className="error">{errors.full_name?.message}</span>) : (null)}
              <input
                name="full_name"
                className={"large-input form-control" + (errors.full_name?.message ? " error" : "")}
                type="text"
                ref={register({
                  required: 'Enter your full name',
                  // pattern: {
                  //   value: EMAIL_REGEX,
                  //   message: 'Enter an email address in the correct format, like name@example.com',
                  // },
                })}
              />
            </div>
            <div className={"form-group group" + (errors.email?.message ? " error-block" : "")}>
              <label className="section-heading">Your email*</label>
              {errors.email ? (<span className="error">{errors.email?.message}</span>) : (null)}
              <input
                name="email"
                className={"large-input form-control" + (errors.email?.message ? " error" : "")}
                type="text"
                ref={register({
                  required: 'Your email address is required',
                  pattern: {
                    value: EMAIL_REGEX,
                    message: 'Enter an email address in the correct format, like name@example.com',
                  },
                })}
              />
            </div>
            <div className={"form-group group" + (errors.postcode?.message ? " error-block" : "")}>
              <label className="section-heading">Your postcode*</label>
              {errors.postcode ? (<span className="error">{errors.postcode?.message}</span>) : (null)}
              <input
                name="postcode"
                className={"large-input" + (errors.postcode?.message ? " error" : "")}
                type="text"
                ref={register({
                  required: 'Enter a real postcode',
                    // pattern: {
                    //   value: EMAIL_REGEX,
                    //   message: 'Enter an email address in the correct format, like name@example.com',
                    // },
                })}
              />
            </div>
            <div className={"form-group group" + (errors.council?.message ? " error-block" : "")}>
              <fieldset>
                <legend>What is the name of your local council?*</legend>
                <span className="form-hint">Please note, only people in the eligible Essex areas listed are able to take part in the 60 Day Challenge. If you don&rsquo;t know, you can <a href="https://www.gov.uk/find-local-council">find your local council</a> on GOV.UK</span>
                {errors.council ? (<span className="error">{errors.council?.message}</span>) : (null)}
                  <select 
                  name="council" 
                  className={"large-input" + (errors.council?.message ? " error" : "")}
                  ref={register({
                    required: 'Expand the list and select your local council',
                  })}>
                  <option value="" disabled selected>--Select your council--</option>
                  <option value="294330">Basildon</option>
                  <option value="294331">Braintree</option>
                  <option value="294332">Brentwood</option>
                  <option value="294333">Castle Point</option>
                  <option value="294334">Chelmsford</option>
                  <option value="294335">Colchester</option>
                  <option value="294336">Epping Forest</option>
                  <option value="294337">Harlow</option>
                  <option value="294338">Maldon</option>
                  <option value="294339">Rochford</option>
                  <option value="294340">Tendring</option>
                  <option value="294341">Uttlesford</option>
                </select>
              </fieldset>
            </div>
            <div className={"form-group group" + (errors.consent_to_share?.message ? " error-block" : "")}>
              <fieldset>
                <legend>Can we share your content?*</legend>
                <p>As part of your 60 Day Challenge you will be asked to share your daily trips with short notes or photos and videos. If you would be happy for us to then share your responses as part of our marketing to help us get more people walking and cycling, please specify here. We’ll contact you if you’ve won a prize or to share the latest news about Stop.Swap.<i>GO!</i></p>
                {errors.consent_to_share ? (<span className="error">{errors.consent_to_share?.message}</span>) : (null)}
                <div class="multiple-choice">
                  <input
                    name="consent_to_share"
                    value="294328"
                    type="radio"
                    ref={register({
                      required: "Select yes if we can share your content or select no if not"
                    })}
                  />
                  <label>Yes, you can share content I upload to the app</label>
                </div>
                <div class="multiple-choice">
                  <input
                    name="consent_to_share"
                    value="294329"
                    type="radio"
                    ref={register({
                      required: "Select yes if we can share your content or select no if not"
                    })}
                  />
                  <label>No, please do not share my content</label>
                </div>
              </fieldset>
            </div>

            <div className="button-container-middle">
              <button type="submit" className="button button-dark button-large">SIGNUP!</button>
            </div>

            <div className="disclaimer">
              <p>Essex County Council is the controller of the personal information you submit here. We'll use the information you provide to keep you updated with Stop.Swap.<i>GO!</i> If it looks like you might be committing fraud or crime, the law may require us to share your information with the police or fraud investigation organisations. For more details about how we use your personal information, please read our <a href="https://subscriberhelp.granicus.com/s/article/Privacy" target="_blank" rel="noreferrer">data privacy policy</a>.</p>
            </div>
          </div>)}
      </form>
    </section>
  )
}