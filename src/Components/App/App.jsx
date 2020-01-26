import React, { Component } from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

const business = {
  imageSrc:
    'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90,
};

const businesses = [business, business, business, business, business, business];

export default class App extends Component {

  // this function will be passed by props and be called onSubmit, i guess...
  searchYelp(term, location, sortBy) {
    console.log(`params avaliable? : ${term} ${location} ${sortBy}`)
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={businesses}/>
      </div>
    );
  }
}
