const React = require('react');
const ReactDOM = require('react-dom');

const LatestMovieReviewsContainer = require(
  './components/LatestMovieReviewsContainer'
);
const SearchableMovieReviewsContainer = require(
  './components/SearchableMovieReviewsContainer'
);

ReactDOM.render(
  <div className="app">
    <SearchableMovieReviewsContainer />
    <LatestMovieReviewsContainer />
  </div>,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!
