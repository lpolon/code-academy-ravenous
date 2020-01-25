import React, { Component } from 'react';
import './SearchBar.css';

// https://www.yelp.com/developers/documentation/v3/business_search
const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count',
};

export default class SearchBar extends Component {
  renderSortByOptions() {
    return Object.keys(sortByOptions).map((e, i) => {
      // TODO: resolvi não passar esse valor para key
      const sortByOptionValue = e[e];
      return <li key={i}>{e}</li>;
    });
  }
  render() {
    return (
      <div className="SearchBar">
  <div className="SearchBar-sort-options">
    <ul>
    {this.renderSortByOptions()}
    </ul>
  </div>
  <div className="SearchBar-fields">
    <input placeholder="Search Businesses" />
    <input placeholder="Where?" />
  </div>
  <div className="SearchBar-submit">
    <a>Let's Go</a>
  </div>
</div>
    )
  }
}
