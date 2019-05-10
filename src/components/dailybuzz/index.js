import React, { Component } from "react";
import "./styles.scss"


export default class DailyBuzz extends Component {

  constructor( props ) {
    super( props );
    this.state = {

    }
  }

  componentWillMount() {

  }
  render() {
    return (
      <div className="homepage-river">
        <div className="homepage-river-right">
          <section className="daily-buzz">
            <div className="list-post list-post-x1">
              <article className="list-post-item two-col">
                <div className="list-post-item-wrapper">
                  <div className="list-post-image">
                    <a className="list-post-link" href="https://www.aol.co.uk/">
                      <img
                        src="https://o.aolcdn.com/images/dims?  thumbnail=650%2C427&amp;image_uri=http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F385b818e7b8b75835735919cb6b0de2c%2F206550230%2Fmacca.jpg&amp;client=cbc79c14efcebee57402&amp;signature=c5dc96899c91f1323e1ef75f12bd13a51e2d87a8"/>
                    </a>
                  </div>
                  <div className="list-post-description">
                    <h3 className="list-post-title">
                      <a
                        href="https://www.aol.co.uk/video/view/paul-mccartney-returns-to-abbey-road-crossing/5b574046c2ec10728c256a24/">
                        Paul McCartney returns to iconic Abbey Road crossing
                      </a>
                    </h3>
                  </div>
                </div>
              </article>
              <article className="list-post-item two-col">
                <div className="list-post-item-wrapper">
                  <div className="list-post-image">
                    <a href="https://www.huffingtonpost.co.uk/">
                      <img
                        src="https://o.aolcdn.com/images/dims?thumbnail=650%2C427&amp;image_uri=http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F74f923070f989c520b79a0e997ec0b64%2F206550214%2Fhancock.jpg&amp;client=cbc79c14efcebee57402&amp;signature=d6416cd5721b6591f6335e25edf39a1ad371be0f"
                        className="list-post-img"/>
                    </a>
                  </div>
                  <div className="list-post-description">
                    <h3 className="list-post-title">
                      <a
                        href="https://www.huffingtonpost.co.uk/entry/matt-hancock-stockpiling-brexit_uk_5b57510ae4b0fd5c73c9525f">
                        Brexit: Government may begin stockpiling medicine
                      </a>
                    </h3>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
