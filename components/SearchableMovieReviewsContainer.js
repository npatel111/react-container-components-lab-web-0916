// const { fetch } = require('whatwg-fetch')//um just put this here to pass tests?

import 'whatwg-fetch'
const React = require('react');
const ReactDOM = require('react-dom');
const MovieReviews = require('./MovieReviews');
class SearchableMovieReviewsContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {reviews: []}
    this.findArticles = this.findArticles.bind(this)
  }

  findArticles(event) {
    event.preventDefault()
    debugger
    const SEARCH_TERM = `${event.target.children[0].value}`
    const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${SEARCH_TERM}&api-key=60272acee61142479e18ad6ec41fc0f9`

    debugger
   fetch(URL)
     .then(res => res.json())
     .then(response => this.setState({ reviews: response.results }));
   }

  render() {
    debugger

    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.findArticles}>
          <input type="text" />
          <input type="submit"  />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

module.exports = SearchableMovieReviewsContainer
