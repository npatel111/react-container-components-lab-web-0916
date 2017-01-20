// const { fetch } = require('whatwg-fetch')//um just put this here to pass tests?
import 'whatwg-fetch'
const MovieReviews = require('./MovieReviews');

const React = require('react');
const ReactDOM = require('react-dom');
class LatestMovieReviewsContainer extends React.Component {
  constructor(){
    super()
    this.state = {reviews: []}
  }

  componentWillMount() {
   fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=60272acee61142479e18ad6ec41fc0f9')
     .then(res => res.json())
     .then(response => this.setState({ reviews: response.results }));
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

module.exports = LatestMovieReviewsContainer
