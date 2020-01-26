import React, { Component } from 'react';
import './SearchBar.css';

// https://www.yelp.com/developers/documentation/v3/business_search

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match',
    };
    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count',
    };
    this.handleTermChange = this.handleTermChange.bind(this)
    this.handleLocationChange = this.handleLocationChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }
  // comportamento de highlight das opções
  getSortByClass(sortByOptions) {
    return this.state.sortBy === sortByOptions ? 'active' : '';
  }

  handleSortByChange(sortByOption) {
    this.setState({
      // TODO: por que?
      sortBy: sortByOption,
    });
  }

  handleTermChange(event) {
    this.setState({
      term: event.target.value,
    })
  }

  handleLocationChange(event) {
    this.setState({
      location: event.target.value,
    })
  }

  handleSearch(event) {
    event.preventDefault();
    const {term, location, sortBy} = this.state;
    this.props.searchYelp(term, location, sortBy)
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map((key, i) => {
      const sortByOptionValue = this.sortByOptions[key];
      return (
        <li
          key={i}
          className={this.getSortByClass(sortByOptionValue)}
          onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
        >
          {key}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className="SearchBar-fields">
          <input onChange={this.handleTermChange} value={this.state.term} placeholder="Search Businesses" />
          <input onChange={this.handleLocationChange} value={this.state.location} placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    );
  }
}
