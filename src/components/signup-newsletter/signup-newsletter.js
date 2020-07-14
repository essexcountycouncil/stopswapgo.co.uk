import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function SignupNewsletter() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    const username = ''
    const password = ''
    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')

    const request = `<subscriber>
      <email>${data}</email>
      <send-notifications type='boolean'>false</send-notifications>
          <topics type='array'>
            <topic>
              <code>UKESSEX_568</code>
            </topic>
            <topic>
              <code>UKESSEX_</code>
            </topic>
          </topics>
        </subscriber>`

    axios.post('/api', request, {
      headers: {
        'Authorization': `Basic ${token}`,
        'Content-Type': 'application/xml'
      },
    })
    .then((response) => {
      console.log(response.data)
      console.log(response.status)
    })
    .catch((error) => {
      console.error(error)
    })
  };

  watch("email");

  return (
    <section className="signup-background" aria-label="Subscribe to email" id="challenge" >
      <div className="signup">
        <div className="mantra">
          <h2 className="strapline"><span>Keep on moving</span></h2>
          <p>Sign up to our newsletter for the latest walking and cycling news, tips, and exclusive offers to keep moving. You’ll also be the first to hear about our 60 Day Challenge where you can win prizes for cycling and walking. Just pop in your name, email and hit ", <i>GO!</i>, " We’ll do the rest.</p>
          <form onSubmit={handleSubmit(onSubmit)} className="newsletterForm">

            <div className={"input-group-container-middle"}>
              <label htmlFor="email">Email:</label>
              <p className="errors">{errors.email?.message}</p>
              <input
                name="email"
                className={errors.email?.message ? "error" : ""}
                type="text"
                ref={register({
                  required: 'Email address required',
                  pattern: {
                    value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: 'Invalid email address',
                  },
                })}
              />
            </div>
            <div className="">
              <button type="submit" className="button button-dark button-large extra-space">GO!</button>
            </div>
          </form>
        </div>
      </div>
    </section >
  )
}