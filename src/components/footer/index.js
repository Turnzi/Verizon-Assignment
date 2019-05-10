import React, {Component} from "react";
import "./styles.scss"


export default class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {

  }

  render() {
    return (
      <div className="l-footer-container">
        <footer>
          <div className="l-footer m-footer">
            <div className="m-footer__search-wrapper">
          <span>
        <a className="m-footer__search-wrapper_logo" href="https://www.aol.co.uk">
          <svg className="m-svg-aol-logo" viewBox="0 428.9 612 242.2" enableBackground="new 0 428.9 612 242.2">
          <g>
            <path className="m-svg-aol-logo__path" fill="#000100" d="M333.1,481.9c64.4,0,95.4,51,95.4,94.6c0,43.6-31,94.6-95.4,94.6s-95.4-51-95.4-94.6
            C237.9,532.9,268.8,481.9,333.1,481.9z M333.1,621.3c23,0,42.5-18.9,42.5-44.8c0-26-19.5-44.8-42.5-44.8s-42.3,18.9-42.3,44.8
            C290.8,602.3,310.3,621.3,333.1,621.3z"/>
            <g>
              <path className="m-svg-aol-logo__path" fill="#000100" d="M458.4,428.9h53.7V666h-53.7V428.9z"/>
            </g>
            <g>
              <g>
                <path className="m-svg-aol-logo__path" fill="#000100" d="M576.3,596.3c-19.7,0-35.6,15.9-35.6,35.7c0,19.7,15.9,35.6,35.6,35.6c19.7,0,35.7-15.9,35.7-35.6
                C611.8,612.2,595.9,596.3,576.3,596.3z"/>
              </g>
            </g>
            <path className="m-svg-aol-logo__path" fill="#000100" d="M141.2,428.9H93.5L0,666h63.3l12.4-34.3H158l11.5,34.3h63.9L141.2,428.9z M92.4,583.6l24.9-82.6l24.9,82.6
            H92.4z"/>
          </g>
        </svg>
      </a>
    </span>
            </div>
            <div className="m-footer__links">
              <div className="m-footer__links__row1 uk_footer">
                <a id="footer-link" href="http://corp.aol.co.uk/">ABOUT AOL</a>
                <a id="footer-link" href="https://help.aol.co.uk/contact/">CONTACT</a>
                <a id="footer-link" href="http://privacy.aol.co.uk/">PRIVACY POLICY</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
