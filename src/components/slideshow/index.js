import React, {Component} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CircularProgress from '@material-ui/core/CircularProgress';
import {Carousel} from 'react-responsive-carousel';
import "./styles.scss";

export default class Slideshow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mainNews: [],
      isLoading: false
    }
  }

  componentDidMount() {
    this.setState({isLoading: true});
    let news = [];
    const url = "https://api.myjson.com/bins/152ni8";
    fetch(url)
      .then(results => {
        return results.json();
      }).then(res => {
      res.data.map((info) => {
        let id = info.id.toString();
        news.push(
          <div key={id}>
            <img src={info.image}/>
            <p className="legend title">{this.decodeHTML(info.title_a)}</p>
            <p id={id + 'more'} className="legend summary">{this.truncate(this.decodeHTML(info.summary))} <a
              onClick={() => this.readMore(id)}>Read more</a></p>
            <p id={id + 'less'} className="legend summary hide">{this.decodeHTML(info.summary)} <a
              onClick={() => this.readLess(id)}>Read less</a></p>
          </div>
        )
      });
      this.setState({mainNews: news, isLoading: false});
    });
  }
  decodeHTML = (html) => {
    let txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };

  readMore = (id) => {
    document.getElementById(id + 'more').classList.add("hide");
    document.getElementById(id + 'less').classList.remove("hide");

  };

  readLess = (id) => {
    document.getElementById(id + 'less').classList.add("hide");
    document.getElementById(id + 'more').classList.remove("hide");
  };

  truncate = (text) => {
    if (text.length > 50) {
      return text.substring(0, 50 - "...".length) + "...";
    } else {
      return text;
    }
  };

  render() {
    return (
      <section className="slideshow">
        <div className="slideshow-body">
          <div>
            <div className="placeholder">
              {this.state.isLoading ? <CircularProgress/> : <Carousel className="carousel">
                {this.state.mainNews}
              </Carousel>}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
