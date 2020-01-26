import React, { Component } from 'react';
import './Business.css';

import Business from '../Business/Business';

export default function BusinessList(props) {
    const { businesses } = props;
    return (
      <div className="BusinessList">
        {businesses.map((business) => {
          return <Business key={business.id} business={business} />;
        })}
      </div>
    );
}