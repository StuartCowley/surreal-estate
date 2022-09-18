import React from "react";

import PropTypes from "prop-types";

// import "../styles/PropertyCard.css";

const PropertyCard = ({
  _id,
  title,
  type,
  city,
  bathrooms,
  bedrooms,
  price,
  email,
  onSaveProperty,
  userID,
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
      {userID && (
        <button
          type="button"
          onClick={() => onSaveProperty(_id)}
          className="save"
        >
          <i className="fas fa-star" />
          Save
        </button>
      )}
    </article>
  );
};

PropertyCard.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  bathrooms: PropTypes.string.isRequired,
  bedrooms: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  userID: PropTypes.string.isRequired,
  onSaveProperty: PropTypes.func.isRequired,
};

export default PropertyCard;
