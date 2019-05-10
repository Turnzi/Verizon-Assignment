import React, {Component} from "react";
import "./styles.scss"
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
const { detect } = require('detect-browser');
const browser = detect();

export default class BrowserInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      cookies: null,
      browserInfo: {}
    }
  }

  componentWillMount() {
  }

  openModal = () => {
    this.setState({modalOpen: true, cookies: document.cookie , browserInfo: browser});
  };

  closeModal = () => {
    this.setState({modalOpen: false});
  };

  render() {
    return (
      <div className="l-rightrail-modules__section">
        <div className="m-make-homepage">
          <a onClick={this.openModal} className="m-side-nav__link"><span>Display browser information</span></a>
        </div>
        <Dialog
          open={this.state.modalOpen}
          onClose={this.closeModal}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Browser Information"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <b>Current cookie:</b> {this.state.cookies}<br />
              <b>Browser name:</b> {this.state.browserInfo.name}<br />
              <b>OS:</b> {this.state.browserInfo.os}<br />
              <b>Version:</b> {this.state.browserInfo.version}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.closeModal} color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
