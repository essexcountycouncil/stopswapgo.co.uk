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
    <section className="signup-background" aria-label="Subscribe to newsletter via email" id="challenge" >
      <div className="signup">
        <div className="mantra">
          <h2 className="strapline"><span>STOP.SWAP.SIGN UP!</span></h2>
          <form onSubmit={handleSubmit(onSubmit)} className="newsletterForm">

            {submitted ?
              (<div>

              </div>) :
              (<div>
                <div className="input-group-container-middle">
                  <ul>
                    {errors.email ? (<li className="errors">{errors.email?.message}</li>) : (null)}
                    {errors.agreement ? (<li className="errors">{errors.agreement?.message}</li>) : (null)}
                  </ul>
                </div>
                <div className="input-group-container-middle">
                  <label>Your full name*
                    <input
                      name="full_name"
                      className={"large-input" + (errors.email?.message ? " error" : "")}
                      type="text"
                      ref={register({
                        required: 'Full name required',
                        // pattern: {
                        //   value: EMAIL_REGEX,
                        //   message: 'Enter an email address in the correct format, like name@example.com',
                        // },
                      })}
                    />
                  </label>
                </div>
                <div className="input-group-container-middle">
                  <label>Your email address*
                    <input
                      name="email"
                      className={"large-input" + (errors.email?.message ? " error" : "")}
                      type="text"
                      ref={register({
                        required: 'Email address required',
                        pattern: {
                          value: EMAIL_REGEX,
                          message: 'Enter an email address in the correct format, like name@example.com',
                        },
                      })}
                    />
                  </label>
                </div>
                <div className="input-group-container-middle">
                  <label>Your postcode*
                    <input
                      name="postcode"
                      className={"large-input" + (errors.postcode?.message ? " error" : "")}
                      type="text"
                      ref={register({
                        required: 'Postcode address required',
                          // pattern: {
                          //   value: EMAIL_REGEX,
                          //   message: 'Enter an email address in the correct format, like name@example.com',
                          // },
                      })}
                    />
                  </label>
                </div>
                <div className="input-group-container-middle">
                  <label>Are you 18 years of age or older? Please note, only people aged 18 or over are able to take part in the 60 DC.
                    <div class="multiple-choice">
                      <input name="over_eighteen" value="294706" type="radio" ref={register({ required: true })}/>
                      <label>Yes</label>
                      <input name="over_eighteen" value="294707" type="radio" ref={register({ required: true })}/>
                      <label>No</label>
                    </div>
                  </label>
                </div>
                <div className="input-group-container-middle">
                  <label>What is the name of your local council?*
                    <div class="multiple-choice">
                      <select name="council" ref={register({
                        required: 'You must select a council',
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
                        <option value="294342">I'm not sure</option>
                        <option value="294343">None of these</option>
                      </select>
                    </div>
                  </label>
                </div>
                <div className="input-group-container-middle">
                  <label>
                    As part of your 60 Day Challenge you will be asked to share your daily trips with short notes or photos and videos. If you would be happy for us to then share your responses as part of our marketing to help us get more people walking and cycling, please specify here. We’ll contact you if you’ve won a prize or to share the latest news about Stop.Swap.GO!
                    Bonus: we will be giving away additional prizes to those who share as a ‘thank you’ for supporting Stop. Swap. GO!
                    <div class="multiple-choice">
                      <input name="consent_to_share" value="294328" type="radio" ref={register({ required: true })}/>
                      <label>Yes, you can share content I upload to the app</label>
                      <input name="consent_to_share" value="294329" type="radio" ref={register({ required: true })}/>
                      <label>No, please do not share my content</label>
                    </div>
                  </label>
                </div>

                <button type="submit" className={"button button-dark button-large" + (errors.email?.message ? " error" : "")}>SIGN UP!</button>

                <div className="disclaimer">
                  <p>Essex County Council is the controller of the personal information you submit here. We'll use the information you provide to keep you updated with Stop.Swap.<i>GO!</i> If it looks like you might be committing fraud or crime, the law may require us to share your information with the police or fraud investigation organisations. For more details about how we use your personal information, please read our <a href="https://subscriberhelp.granicus.com/s/article/Privacy" target="_blank" rel="noreferrer">data privacy policy</a>.</p>
                </div>
              </div>)}
          </form>
        </div>
      </div>
    </section>
  )
}