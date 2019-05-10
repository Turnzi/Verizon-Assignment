import React, {Component} from "react";
import '../styles/App.scss';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {default as Slideshow} from "./slideshow";
import {default as DailyBuzz} from "./dailybuzz";
import {default as BrowserInfo} from "./browserinfo";
import {default as Articles} from "./articles";
import {default as NewsLetter} from "./newsletter";
import {default as Footer} from "./footer";


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      test: null
    }
  }

  componentWillMount() {
    this.setState({test: "what upppppp"});
  }

  render() {
    return (
      <div className="l-wrapper" id="container">
        <div className="l-main-container">
          <div className="l-main-rightrail-wrap">
            <div className="l-main l-main--rightrail">
              <Slideshow/>
              <DailyBuzz/>
            </div>
            <div className="l-rightrail">
              <div className="l-rightrail-modules">
                <div className="l-rightrail-modules__section-curtain "></div>
                <BrowserInfo/>
                <div className="l-rightrail-modules__section">
                  <Articles/>
                  <NewsLetter/>
                </div>
              </div>
            </div>

          </div>
        </div>
        <Footer/>
      </div>

    );
  }
}
