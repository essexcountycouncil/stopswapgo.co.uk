// import React, { useState } from "react";
// import { useStaticQuery, graphql } from "gatsby"
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
// import { useForm } from "react-hook-form";

// let axios = require('axios');
// let jsonpAdapter = require('axios-jsonp');

export default function SignupNewsletter() {
  return null;
}

// export default function SignupNewsletter() {
//   const [submitted, setSubmitted] = useState('');
//   const [checked, setChecked] = useState('');
//   const { register, handleSubmit, getValues, errors } = useForm();

//   const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//   function onSubmit(form) {
//     const apiKey = process.env.GOV_DELIVERY_API_KEY;

//     axios({
//       url: `https://api.govdelivery.com/api/add_script_subscription?t=UKESSEX_568&c=&k=${apiKey}&e=${form.email}`,
//       adapter: jsonpAdapter,
//       callbackParamName: 'c'
//     }).then((response) => {
//       if (response.status === 200) {
//         console.log(response.data.message)
//       } else {
//         console.error("Error: ", response)
//       }
//       setSubmitted('true')
//     });
//   }

//   function clearSubmission() {
//     setSubmitted('')
//   }

//   const data = useStaticQuery(graphql`
//     {
//       contentfulNewsletterSignUp {
//         title
//         content {
//           json
//         }
//       }
//     }  
//     `)
//   return (
//     <section className="signup-background" aria-label="Subscribe to newsletter via email" id="challenge" >
//       <div className="signup">
//         <div className="mantra">
//           <h2 className="strapline"><span>{data.contentfulNewsletterSignUp.title}</span></h2>
//           {documentToReactComponents(data.contentfulNewsletterSignUp.content.json)}
//         </div>
//         <form onSubmit={handleSubmit(onSubmit)} className="form">
//             {submitted ?
//               (<div className="group">
//                 <div className="submitted">
//                   <p>You have successfully subscribed to our newsletter!</p>
//                   <button onClick={clearSubmission} className="button button-dark button-large extra-space">Add another email</button>
//                 </div>
//               </div>) :
//               (<div className="group">
//                 <div className="input-group-container-middle">
//                 {errors.email ? (
//                   <span className="error">{errors.email?.message}</span>
//                 ) : (null)}
//                 {errors.agreement ? (
//                   <span className="error">{errors.agreement?.message}</span>
//                 ) : (null)}
//                 </div>               
//                 <div className="signup-input">
//                   <label htmlFor="email">
//                     Enter your email address
//                     <input
//                       placeholder="Enter your email address"
//                       name="email"
//                       className={"" + (errors.email?.message ? " error" : "")}
//                       type="text"
//                       ref={register({
//                         required: 'Email address required',
//                         pattern: {
//                           value: EMAIL_REGEX,
//                           message: 'Enter an email address in the correct format, like name@example.com',
//                         },
//                       })}
//                     />
//                   </label>
//                 </div>
//                 <div className="signup-button">
//                   <button type="submit" className="button subscribe">SUBSCRIBE!</button>
//                 </div>
//                 <div className="multiple-choice">
//                   <div className={"checkbox" + (errors.agreement?.message ? " checkbox-error" : "")}>
//                     <input type="checkbox" id="agreement" name="agreement"
//                       checked={checked}
//                       onChange={() => setChecked(!checked)}
//                       ref={register({
//                         required: 'Select the checkbox to consent to our data privacy policy'
//                       })} />

//                     <label htmlFor="agreement">By checking this box, you consent to our <a href="https://subscriberhelp.granicus.com/s/article/Privacy" target="_blank" rel="noreferrer">data privacy policy</a></label>
//                   </div>
//                 </div>

//                 <div className="disclaimer">
//                   <p>Essex County Council is the controller of the personal information you submit here. We'll use the information you provide to keep you updated with Stop.Swap.<i>GO!</i> If it looks like you might be committing fraud or crime, the law may require us to share your information with the police or fraud investigation organisations. For more details about how we use your personal information, please read our <a href="https://subscriberhelp.granicus.com/s/article/Privacy" target="_blank" rel="noreferrer">data privacy policy</a>.</p>
//                 </div>                


//               </div>)}
//         </form>
//       </div>
//     </section>
//   )
// }