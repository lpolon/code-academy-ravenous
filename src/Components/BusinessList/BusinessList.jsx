import React, { Component } from 'react';
import './Business.css';

import Business from '../Business/Business';

export default class BusinessList extends Component {
  render() {
    const { businesses } = this.props;
    return (
      <div className="BusinessList">
        {businesses.map((business, i) => {
          return <Business key={i} business={business} />;
        })}
      </div>
    );
  }
}
