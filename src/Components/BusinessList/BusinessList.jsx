import React, { Component } from 'react';
import './Business.css';

import Business from '../Business/Business';

export default class BusinessList extends Component {
  render() {
    return (
      <div className="BusinessList">
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
      </div>
    );
  }
}
