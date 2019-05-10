import React, {Component} from "react";
import "./styles.scss"


export default class Articles extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {

  }

  render() {
    return (
      <section className="module rhr-module">

        <h4 className="list-post-header-title">Read More</h4>
        <div className="list-post list-post-x1 side-title">

          <article className='list-post-item'>
            <div className='list-post-image'><a
              href='https://www.aol.co.uk/2018/07/24/guardiola-rules-out-manchester-city-move-for-pjanic/'
              title='Guardiola rules out Manchester City move for Pjanic'><img
              src="https://o.aolcdn.com/images/dims?thumbnail=144%2C95%2Cauto&amp;quality=80&amp;image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fresize%3D640%252C427%26image_uri%3Dhttp%253A%252F%252Fimages.performgroup.com%252Fdi%252Flibrary%252Fomnisport%252F9d%252F91%252Fmiralem-pjanic-cropped_7utl33yuo2eg1sjgozzavl0l6.jpg%253Ft%253D-851775956%26client%3Ds8fyf47wsyd98sdh%26signature%3D054a1cdc70a302aee4a71ba64b9dab582282d964&amp;client=cbc79c14efcebee57402&amp;signature=315492da09041a9fecaf43af29d2fd833fa6d82c"/></a>
            </div>
            <div
              className='list-post-description'>
              <h3 className='list-post-title'><a rel='bookmark' className='list-post-link'
                                             href='https://www.aol.co.uk/2018/07/24/guardiola-rules-out-manchester-city-move-for-pjanic/'> Guardiola
                rules out Manchester City move for Pjanic</a></h3>
            </div>
          </article>

          <article className='list-post-item'>
            <div className='list-post-image'><a rel='bookmark' className='list-post-link'
                                            href='https://www.aol.co.uk/2018/07/24/thiem-moves-past-moutet-as-monfils-halts-cecchinatos-momentum/'
                                            title='Thiem moves past Moutet as Monfils halts Cecchinato&#039;s momentum'><img
              src="https://o.aolcdn.com/images/dims?thumbnail=144%2C95%2Cauto&amp;quality=80&amp;image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fresize%3D640%252C427%26image_uri%3Dhttp%253A%252F%252Fimages.performgroup.com%252Fdi%252Flibrary%252Fomnisport%252Fcd%252F5d%252Fdominicthiem-cropped_10dlsbv8q9o2108gx8mnl9py5.jpg%253Ft%253D-854974892%26client%3Ds8fyf47wsyd98sdh%26signature%3D6a619543ad1378a6a62e96523b2cf1164afb2660&amp;client=cbc79c14efcebee57402&amp;signature=b09d4cb46eddc50cd3a654667ef72254d0f6fd12"/></a>
            </div>
            <div className='list-post-description'>
              <h3 className='list-post-title'><a rel='bookmark' className='list-post-link'
                                             href='https://www.aol.co.uk/2018/07/24/thiem-moves-past-moutet-as-monfils-halts-cecchinatos-momentum/'> Thiem
                moves past Moutet as Monfils halts Cecchinato's momentum</a></h3>
            </div>
          </article>
        </div>
      </section>
    );
  }
}
