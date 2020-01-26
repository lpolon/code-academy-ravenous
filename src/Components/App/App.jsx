import React, { Component } from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import { Yelp } from '../../util/Yelp';


// used to test static funcionality before actual API GET req.
// const business = {
//   imageSrc:
//     'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
//   name: 'MarginOtto Pizzeria',
//   address: '1010 Paddington Way',
//   city: 'Flavortown',
//   state: 'NY',
//   zipCode: '10101',
//   category: 'Italian',
//   rating: 4.5,
//   reviewCount: 90,
// };

// const businesses = [business, business, business, business, business, business];

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      businesses: [],
    };
    this.searchYelp = this.searchYelp.bind(this);
  }

  // this function will be passed by props and be called onSubmit, i guess...
  async searchYelp(term, location, sortBy) {
    const businesses = await Yelp.search(term, location, sortBy);
    this.setState({
      businesses
    })
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}
