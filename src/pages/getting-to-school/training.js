import React, { useState } from "react"
import { useForm } from "react-hook-form";
import axios from "axios"
import { Link } from 'gatsby'
import Layout from "../../layout/layout-h2s-with-newsletter-no-banner"
import TrainingSubmissionThankyou from "../../components/training-submission-thankyou/training-submission-thankyou"

const Training = () => {
  const { register, handleSubmit, getValues, errors } = useForm();
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  function onSubmit(form) {
    const handleServerResponse = (ok, msg, form) => {
      setServerState({
        submitting: false,
        status: { ok, msg }
      });
      if (ok) {
        form.reset();
      }
    };
    const handleOnSubmit = e => {
      e.preventDefault();
      const form = e.target;
      setServerState({ submitting: true });
      axios({
        method: "post",
        url: "https://getform.io/f/12e9d628-1d0f-4be0-87f7-edf85363c31d",
        data: new FormData(form)
      })
        .then(r => {
          handleServerResponse(true, null, form);
        })
        .catch(r => {
          handleServerResponse(false, r.response.data.error, form);
        });
      };
    }
  return (
  	<Layout>
  		<h1>Training offer</h1>
      <p>Stop.Swap.<i>GO!</i> has teamed up with the <a href="https://saferessexroads.org/">Safer Essex Roads Partnership</a> to offer children going into Years 7 through to 13 cycling and walking training during the summer holidays!</p>
      <p>Using <a href="https://bikeability.org.uk/">Bikeability</a>, we’ll show your child how to keep safe on the roads and streets to make getting to school in September by walking, cycling, or scooting a breeze. The training takes place at our Park & Ride sites in Chelmsford and Colchester.</p>
      <p>The training will take place in small groups. We’ll make sure we keep everyone COVID-19 safe by running sessions according to which school your child is due to attend and ages.</p>
      <p>To get started, enter your details in the training request form and hit ‘Submit’:</p>

      <form onSubmit={handleSubmit(onSubmit)} className="form form-background newsletterForm">
        <div className="form-internal">
          <h3 className="sub-section-heading strapline strapline-highlighted"><span>Stop.Swap.</span><i>SIGNUP!</i></h3>

          <div className={"form-group group" + (errors.email?.message ? " error-block" : "")}>
            <label className="section-heading">Your email*</label>
            <span className="form-hint">(or your parent or guardian’s email if under 18)</span>
            {errors.email ? (<span className="error">{errors.email?.message}</span>) : (null)}
            <input 
              name="email"
              className={"large-input form-control" + (errors.email?.message ? " error" : "")}
              type="email" 
              ref={register({
                required: 'Enter an email address in the correct format, like name@example.com'
              })}
              />
          </div>

          <div className={"form-group group" + (errors.type_of_training?.message ? " error-block" : "")}>
            <fieldset>
              <legend>What type of training does the participant need?*</legend>
              {errors.type_of_training ? (<span className="error">{errors.type_of_training?.message}</span>) : (null)}
              <div className="multiple-choice">
                <input 
                  name="type_of_training"
                  className={"large-input form-control" + (errors.type_of_training?.message ? " error" : "")}
                  type="radio"
                  value="walking" 
                  ref={register({
                    required: 'Select the type of training you need'
                  })}
                  // so duplicating this on each checkbox is obv wrong, so stopped here Dom as not sure.
                  // also brough in react-hook-form and some variables which is also prob wrong :)
                  />
                <label>Walking</label>
              </div>
              <div className="multiple-choice">
                <input type="radio" value="no" name="type_of_training" />
                <label>Cycling</label>
              </div>
              <div className="multiple-choice">
                <input type="radio" value="walking_and_cycling" name="type_of_training" />
                <label>Both walking and cycling </label>
              </div>
            </fieldset>
          </div>

          <div className={"form-group group" + (errors.previous_training?.message ? " error-block" : "")}>
            <fieldset>
              <legend>Has the participant had any previous training with Safer Essex Roads Partnership?*</legend>
              {errors.previous_training ? (<span className="error">{errors.previous_training?.message}</span>) : (null)}
              <div className="multiple-choice">
                <input type="radio" value="walking" name="previous_training" />
                <label>Walking training</label>
              </div>
              <div className="multiple-choice">
                <input type="radio" value="cycling" name="previous_training" />
                <label>Cycling training</label>
              </div>
              <div className="multiple-choice">
                <input type="radio" value="walking_and_cycling" name="previous_training" />
                <label>Both walking and cycling training</label>
              </div>
              <div className="multiple-choice">
                <input type="radio" value="none" name="previous_training" />
                <label>No previous training</label>
              </div>
            </fieldset>
          </div>

          <div className={"form-group group" + (errors.equipment_owned?.message ? " error-block" : "")}>
            <fieldset>
              <legend>If the participant would like cycling training, do they own a bike and a bike helmet?</legend>
              {errors.equipment_owned ? (<span className="error">{errors.equipment_owned?.message}</span>) : (null)}
              <div className="multiple-choice">
                <input type="radio" value="bike_and_helmet" name="equipment_owned" />
                <label>Yes, both</label>
              </div>
              <div className="multiple-choice">
                <input type="radio" value="bike" name="equipment_owned" />
                <label>A bike but no helmet</label>
              </div>
              <div className="multiple-choice">
                <input type="radio" value="helmet" name="equipment_owned" />
                <label>A helmet but no bike</label>
              </div>
              <div className="multiple-choice">
                <input type="radio" value="none" name="equipment_owned" />
                <label>Neither a bike or a helmet</label>
              </div>
            </fieldset>
          </div>

          <div className={"form-group group" + (errors.school?.message ? " error-block" : "")}>
            <legend>What Essex school will the participant attend in September?*</legend>
            {errors.school ? (<span className="error">{errors.school?.message}</span>) : (null)}
            <input type="text" name="school" className="form-control" />
          </div>

          <div className={"form-group group" + (errors.year_group?.message ? " error-block" : "")}>
            <fieldset>
              <legend>What year group will you or your child be in?*</legend>
              {errors.year_group ? (<span className="error">{errors.year_group?.message}</span>) : (null)}
              <select name="year_group">
                <option value="" disabled selected>--Select year group--</option>
                <option value="year_7">Year 7</option>
                <option value="year_8">Year 8</option>
                <option value="year_9">Year 9</option>
                <option value="year_10">Year 10</option>
                <option value="year_11">Year 11</option>
                <option value="year_12">Year 12</option>
                <option value="year_13">Year 13</option>
              </select>
            </fieldset>
          </div>

          <button type="submit" className="button button-dark button-large extra-space">
            SUBMIT!
          </button>

          {serverState.status &&
            <>
            {serverState.status.ok ? <TrainingSubmissionThankyou /> : <p className="errorMsg">{serverState.status.msg}</p>}
           </>
          }
        </div>
      </form>


  		<p className="small">Please note, the Safer Essex Roads Partnership will use your information to administer Bikeability. Your information and personal information will be shared with the course instructors for the duration of the course. Information will be retained for the duration of eligibility for Bikeability services. For more information regarding your rights and our commitments visit our <Link to="https://www.essex.gov.uk/privacy-environment-and-transport">privacy notice</Link>.</p>
  	</Layout>
  )
}

export default Training
