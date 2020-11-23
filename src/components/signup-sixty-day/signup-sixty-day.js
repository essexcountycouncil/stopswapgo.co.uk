import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SixtyDaySubmissionThankyou from "../sixty-day-submission-thankyou/sixty-day-submission-thankyou"
import { Link } from 'gatsby'
let axios = require('axios');
let jsonpAdapter = require('axios-jsonp');

export default function SignupSixtyDay() {
  const [submitted, setSubmitted] = useState('');
  const [checked, setChecked] = useState('');
  const [success, setSuccess] = useState('');
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
        setSuccess(true)
        setSubmitted(true)
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
        <div>
          <ul className="errors">

            {errors.agreement ? (<li className="error">{errors.agreement?.message}</li>) : (null)}
          </ul>
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
            })}
          />
        </div>
        <div className={"form-group group" + (errors.over_eighteen?.message ? " error-block" : "")}>
          <fieldset>
            <legend>Are you 13 years of age or older?</legend>
            <span className="form-hint"> Please note, only people aged 13 or over are able to take part in the 60 Day Challenge.</span>
            {errors.over_eighteen ? (<span className="error">{errors.over_eighteen?.message}</span>) : (null)}
            <div class="multiple-choice">
              <input 
                name="over_eighteen"
                id="over-eighteen"
                className={"large-input form-control" + (errors.over_eighteen?.message ? " error" : "")}
                value="294706" 
                type="checkbox" 
                ref={register({ 
                  required: 'Select yes only if you are 13 or older'
                })}/>
              <label for="over-eighteen">Yes</label>
            </div>
          </fieldset>
        </div>
        <div className={"form-group group" + (errors.council?.message ? " error-block" : "")}>
          <fieldset>
            <legend>What is the name of your local council?*</legend>
            <span className="form-hint">If you don’t know, you can <a href="https://www.gov.uk/find-local-council">find your local council</a> on GOV.UK. Please note, only people in the eligible Essex areas listed are able to take part in the 60 DC.</span>
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
            <p>As part of your 60 Day Challenge you will be asked to share your daily trips with short notes or photos and videos. If you would be happy for us to then share your responses as part of our marketing (Essex County Council broadcast channels such as websites, social media and e-newsletters) to help us get more people walking and cycling, please specify here. We’ll contact you if you’ve won a prize or to share the latest news about Stop.Swap.<i>GO!</i></p>
            {errors.consent_to_share ? (<span className="error">{errors.consent_to_share?.message}</span>) : (null)}
            <div class="multiple-choice">
              <input
                name="consent_to_share"
                id="consent-to-share-yes"
                value="294328"
                type="radio"
                ref={register({
                  required: "Select yes if we can share your content or select no if not"
                })}
              />
              <label for="consent-to-share-yes">Yes, you can share content I upload to the app</label>
            </div>
            <div class="multiple-choice">
              <input
                name="consent_to_share"
                id="consent-to-share-no"
                value="294329"
                type="radio"
                ref={register({
                  required: "Select yes if we can share your content or select no if not"
                })}
              />
              <label for="consent-to-share-no">No, please do not share my content</label>
            </div>
          </fieldset>
        </div>
        <div className={"form-group group" + (errors.consent_data_privacy?.message ? " error-block" : "")}>
          <fieldset>
            {errors.consent_data_privacy ? (<span className="error">{errors.consent_data_privacy?.message}</span>) : (null)}
            <div class="multiple-choice">
              <input 
                name="consent_data_privacy"
                id="conent-data-privacy"
                className={"large-input form-control" + (errors.consent_data_privacy?.message ? " error" : "")}
                value="294706" 
                type="checkbox" 
                ref={register({ 
                  required: 'Select the checkbox to consent to our data privacy policy'
                })}/>
              <label for="conent-data-privacy">By checking this box, you consent the data privacy polices of <a href="https://subscriberhelp.granicus.com/s/article/Privacy">GovDelivery</a> and <a href="https://www.essex.gov.uk/topic/privacy-and-data-protection">Essex County Council.</a></label>
            </div>
          </fieldset>
        </div>       

        <div className="button-container-middle">
          <button type="submit" className="button button-dark button-large">SIGNUP!</button>
        </div>

        { (submitted && success)
          ? <SixtyDaySubmissionThankyou />
          : <p></p>
        }

        <div className="disclaimer">
          <p>By submitting your contact details, you acknowledge the <Link to="/terms-and-conditions">terms and conditions for the 60 Day Challenge</Link>. Essex County Council is the controller of this personal information. If it looks like you might be committing fraud, we might have to share it with the police or fraud investigators. For more details about how we use your personal data, please read the <a href="https://subscriberhelp.granicus.com/s/article/Privacy">GovDelivery data privacy policy</a> and <a href="https://www.essex.gov.uk/topic/privacy-and-data-protection">Essex County Council’s data privacy policy.</a></p>
        </div>
      </form>
    </section>
  )
}