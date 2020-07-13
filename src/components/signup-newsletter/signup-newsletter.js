import React from "react"

export default class SignupNewsletter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {}
    }
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    // Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {

      if (true) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  newsletterSubmit(e) {
    e.preventDefault();
    if (this.handleValidation()) {
      alert("Form submitted");
    } else {
      alert("Form has errors.")
    }
  }

  render() {
    return (
      <section className="signup-background" aria-label="Subscribe to email" id="challenge" >
        <div className="signup">
          <div className="mantra">
            <h2 className="strapline"><span>Keep on moving</span></h2>
            <p>Sign up to our newsletter for the latest walking and cycling news, tips, and exclusive offers to keep moving. You’ll also be the first to hear about our 60 Day Challenge where you can win prizes for cycling and walking. Just pop in your name, email and hit ", <i>GO!</i>, " We’ll do the rest.</p>
            <form onSubmit={this.newsletterSubmit.bind(this)}>
              <input refs="email" type="text" size="30" placeholder="Email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} />
              <span style={{ color: "red" }}>{this.state.errors["email"]}</span>

              <div className="button-container-middle">
                <button type="submit" className="button button-dark button-large extra-space">GO!</button>
              </div>
            </form>
          </div>
        </div>
      </section >
    )
  }
}