import React, { Component } from 'react';
import './Business.css';

export default function Business(props) {
    const {business} = props
    // this.defaultProps = {
    //   business: {
    //     name: 'Nenhum Resultado encontrado'
    //   }
    // }
    return (
      <div className="Business">
        <div className="image-container">
          <img src={business.imageSrc} alt="" />
        </div>
        <h2>{business.name}</h2>
        <div className="Business-information">
          <div className="Business-adress">
            <p>{business.address}</p>
            <p>{business.city}</p>
            <p>
              {business.state} {business.zipCode}
            </p>
          </div>
          <div className="Business-reviews">
            <h3>{business.category}</h3>
            <h3 className="rating">{business.rating} stars</h3>
            <p>{business.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    );
}