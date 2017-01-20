import 'whatwg-fetch'
const React = require('react');
const ReactDOM = require('react-dom');
function MovieReviews(props) {
    return (
      <div className="review-list">
        {props.reviews.map(function(review, idx) {
          return <li className="review" key={idx}>
            {review.display_title}:<br />
            {review.summary_short}
          </li>
        })}
      </div>
    )
}

MovieReviews.defaultProps={reviews: []}

module.exports = MovieReviews
