// https://www.yelp.com/developers/documentation/v3/business_search
import { api } from './YelpApiKey'; // @ .gitignore

export const Yelp = {
  endpoint: 'https://api.yelp.com/v3/businesses/search',

  search(term, location, sortBy) {
    const options = {
      headers: {
        Authorization: `Bearer ${api.key}`,
      },
    };
    return fetch(
      `https://cors-anywhere.herokuapp.com/${this.endpoint}?term=${term}&location=${location}&sort_by=${sortBy}`,
      options
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (!jsonResponse.hasOwnProperty('businesses')) {
          return [];
        } else {
          return jsonResponse.businesses.map((business) => {
            const [{ title: category }] = business.categories;
            const {
              id,
              name,
              image_url: imageSrc,
              review_count: reviewCount,
              location: { address1: address, city, state, zip_code: zipCode },
              rating,
            } = business;
            return {
              id,
              name,
              imageSrc,
              category,
              reviewCount,
              address,
              city,
              state,
              zipCode,
              rating,
            };
          });
        }
      });
  },
};
