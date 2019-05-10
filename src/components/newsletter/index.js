import React, {Component} from "react";
import "./styles.scss"


export default class NewsLetter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      aolEmail: true,
      formErrorMessage: null
    };
  }

  componentWillMount() {

  }

  handleChange = (e) => {
    this.setState({email: e.target.value, formErrorMessage: null})
  };

  handleSubmit = (e) => {
    if (this.handleValidation()) {
      alert("Subscribed to News Letter!");
      this.setState({formErrorMessage: null, email: ""});
    } else {
      let message = this.state.aolEmail ? " Not a valid AOL email" : "Invalid email address";
      this.setState({formErrorMessage: message});
    }
    e.preventDefault()

  };

  handleValidation = () => {
    if (this.state.aolEmail) {
      return /@aol\.com$/.test(this.state.email) ? true : false;
    } else {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email) ? true : false;
    }
  };


  emailType = () => {
    this.setState({aolEmail: !this.state.aolEmail, email: "", formErrorMessage: null});
  };

  render() {
    return (
      <section className="newsletter-signup-form">
        <h3 className="m-title aside-entries__title">Let us send you our Newsletter</h3>
        <div className="m-text">
          <p className="m-text-desc text-side-indent">Our editors will email you a roundup of their favourite stories
            from
            across AOL</p>
        </div>
        <div id="aol-newsletter" className="aol-newsletter">
          <form onSubmit={this.handleSubmit}>
            {this.state.aolEmail ? "Sign up using your AOL email or" : "Sign up using your personal email or"} <br/><a
            onClick={this.emailType} id="different-address"
            className="different-address">{this.state.aolEmail ? "use different address" : "use your AOL address"}</a>
            <input type="text"
                   placeholder={this.state.aolEmail ? "Enter your AOL email address" : "Enter different email address"}
                   className="email-input signup-email"
                   value={this.state.email} onChange={this.handleChange}/>
            <input
              type="submit" value="Sign Up"
              className="aol-btn secondary-btn button send-sail-throu-signup"
              id="send-sail-throu-signup"/>
          </form>
          <span className="formError">{this.state.formErrorMessage}</span>
        </div>
      </section>
    );
  }
}
