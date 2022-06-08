import React from "react";

import PropTypes from "prop-types";

// import "../styles/PropertyCard.css";

const PropertyCard = ({
  title,
  type,
  city,
  bathrooms,
  bedrooms,
  price,
  email,
}) => {
  return (
    <article className="property-card">
      <p className="property-card__title">Title: {title}</p>
      <p className="property-card__type">Type: {type}</p>
      <p className="property-card__city">City: {city}</p>
      <p className="property-card__bathrooms">Bathrooms: {bathrooms}</p>
      <p className="property-card__bedrooms">Bedrooms: {bedrooms}</p>
      <p className="property-card__price">Price: {price}</p>
      <p className="property-card__email">Email: {email}</p>
    </article>
  );
};

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  bathrooms: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
};

export default PropertyCard;
