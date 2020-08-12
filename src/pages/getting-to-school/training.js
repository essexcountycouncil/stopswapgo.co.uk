import React, { useState } from "react"
import axios from "axios"
import { Link } from 'gatsby'
import Layout from "../../layout/layout-h2s-with-newsletter-no-banner"

const Training = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
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
        handleServerResponse(true, "Thanks!", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
    };
  return (
  	<Layout>
  		<h1>Training offer</h1>
      <p>Stop.Swap.GO! has teamed up with the <a href="https://saferessexroads.org/">Safer Essex Roads Partnership</a> to offer children going into Years 7 through to 13 cycling and walking training during the summer holidays!</p>
      <p>Using <a href="https://bikeability.org.uk/">Bikeability</a>, we’ll show your child how to keep safe on the roads and streets to make getting to school in September by walking, cycling, or scooting a breeze. The training takes place at our Park & Ride sites in Chelmsford and Colchester.</p>
      <p>The training will take place in small groups. We’ll make sure we keep everyone COVID-19 safe by running sessions according to which school your child is due to attend and ages.</p>
      <p>To get started, enter your details in the training request form and hit ‘Submit’:</p>

      <form onSubmit={handleOnSubmit} class="form">
        <h3>Stop.Swap.TRAINING!</h3>
        <div className="form-group group">
          <label>Your email*</label>
           <span class="form-hint">You or your parent or guardian’s email if under 18</span> 
          <input type="email" name="email" class="form-control" />
          {/*<br/>*/}
        </div>

        <div className="input-group-container-middle group">
          <fieldset>
            <legend>Would you like walking training?*</legend>
            <div class="multiple-choice">
              <input type="radio" value="yes" name="wants_walking_training" />
              <label>Yes</label>
            </div>
            <div class="multiple-choice">
              <input type="radio" value="no" name="wants_walking_training" />
              <label>No</label>
            </div>
          </fieldset>
          {/*<br/>*/}
        </div>

        <div className="input-group-container-middle group">
          <fieldset>
            <legend>Have you or your child had any previous walking training with South Essex Road Partnership?</legend>
            <div class="multiple-choice">
              <input type="radio" value="yes" name="has_walking_training_experience" />
              <label>Yes</label>
            </div>
            <div class="multiple-choice">
              <input type="radio" value="no" name="has_walking_training_experience" />
              <label>No</label>
            </div>
          </fieldset>
        </div>

        <div className="input-group-container-middle group">
          <fieldset>
            <legend>Would you like cycling training?*</legend>
            <div class="multiple-choice">
              <input type="radio" value="yes" name="wants_cycling_training" />
              <label>Yes</label>
            </div>
            <div class="multiple-choice">  
              <input type="radio" value="no" name="wants_cycling_training" />
              <label>No</label>
            </div>
          </fieldset>
        </div>

        <div className="input-group-container-middle group">        
          <fieldset>
            <legend>Do you own a bike?</legend>
            <div class="multiple-choice">
              <input type="radio" value="yes" name="owns_bike" />
              <label>Yes</label>
            </div>
            <div class="multiple-choice">
              <input type="radio" value="no" name="owns_bike" />
              <label>No</label>
            </div>
          </fieldset>
        </div>


        <div className="input-group-container-middle group">        
          <fieldset>
            <legend>Do you own a helmet?</legend>
            <div class="multiple-choice">
              <input type="radio" value="yes" name="owns_helmet" />
              <label>Yes</label>
            </div>
            <div class="multiple-choice">
              <input type="radio" value="no" name="owns_helmet" />
              <label>No</label>
            </div>
          </fieldset>
        </div>

        <div className="input-group-container-middle group">
          <fieldset>
            <legend>Have you or your child had any previous cycling training with South Essex Road Partnership?</legend>
            <div class="multiple-choice">
              <input type="radio" value="yes" name="has_cycling_training_experience" />
              <label>Yes</label>
            </div>
            <div class="multiple-choice">
              <input type="radio" value="no" name="has_cycling_training_experience" />
              <label>No</label>
            </div>
          </fieldset>
        </div>

        <div className="input-group-container-middle group">
          <label>What Essex school will you or your child attend in September?*</label>
          <input type="text" name="school" />
        </div>

        <div className="input-group-container-middle group">
          <fieldset>
            <legend>What year group will you or your child be in?*</legend>
            <div class="multiple-choice">
              <input type="radio" value="year_7" name="year_group" />
              <label>Year 7</label>
            </div>
            <div class="multiple-choice">
              <input type="radio" value="year_8" name="year_group" />
              <label>Year 8</label>
            </div>
            <div class="multiple-choice">
              <input type="radio" value="year_9" name="year_group" />
              <label>Year 9</label>
            </div>
            <div class="multiple-choice">
              <input type="radio" value="year_10" name="year_group" />
              <label>Year 10</label>
            </div>
            <div class="multiple-choice">
              <input type="radio" value="year_11" name="year_group" />
              <label>Year 11</label>
            </div>
            <div class="multiple-choice">
              <input type="radio" value="year_12" name="year_group" />
              <label>Year 12</label>
            </div>
            <div class="multiple-choice">
              <input type="radio" value="year_13" name="year_group" />
              <label>Year 13</label>
            </div>
          </fieldset>
        </div>

        <button type="submit" className="btn btn-primary" disabled={serverState.submitting}>
          Submit
        </button>
        {serverState.status && (
          <p className={!serverState.status.ok ? "errorMsg" : ""}>
            {serverState.status.msg}
          </p>
        )}
      </form>

  		<p class="small">Please note, the Safer Essex Roads Partnership will use your information to administer Bikeability. Your information and personal information will be shared with the course instructors for the duration of the course. Information will be retained for the duration of eligibility for Bikeability services. For more information regarding your rights and our commitments visit our <Link to="https://www.essex.gov.uk/privacy-environment-and-transport">privacy notice</Link>.</p>
  	</Layout>
  )
}

export default Training
