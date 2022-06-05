import React, { useState } from "react";
import axios from "axios";

import "../styles/add-property.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      type: "",
      bedrooms: "",
      bathrooms: "",
      price: "",
      city: "Manchester",
      email: "",
    },
  };
  const [fields, setFields] = useState(initialState.fields);
  const handleAddProperty = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4000/api/v1/PropertyListing", fields)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFieldChange = (event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="add-property">
      <form className="add-property-form" onSubmit={handleAddProperty}>
        <div className="add-property-form__element">
          <label className="add-property-form__label" htmlFor="title">
            Property title
            <input
              className="add-property-form__input"
              placeholder="EG Small family house"
              id="title"
              name="title"
              value={fields.title}
              onChange={handleFieldChange}
            />
          </label>
        </div>

        <div className="add-property-form__element">
          <label className="add-property-form__label" htmlFor="type">
            Type of property
            <select
              className="add-property-form__select"
              id="type"
              name="type"
              value={fields.type}
              onChange={handleFieldChange}
              required
            >
              <option value="" disabled>
                Please select...
              </option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </label>
        </div>

        <div className="add-property-form__element">
          <label className="add-property-form__label" htmlFor="bedrooms">
            Number of bedrooms
            <input
              className="add-property-form__input"
              placeholder="No. of bedrooms"
              id="bedrooms"
              name="bedrooms"
              type="number"
              value={fields.bedrooms}
              onChange={handleFieldChange}
              required
            />
          </label>
        </div>

        <div className="add-property-form__element">
          <label className="add-property-form__label" htmlFor="bathrooms">
            Number of bathrooms
            <input
              className="add-property-form__input"
              placeholder="No. of bathrooms?"
              id="bathrooms"
              name="bathrooms"
              type="number"
              min="1"
              value={fields.bathrooms}
              onChange={handleFieldChange}
              required
            />
          </label>
        </div>

        <div className="add-property-form__element">
          <label className="add-property-form__label" htmlFor="price">
            Property price
            <input
              className="add-property-form__input"
              placeholder="Value in GBP"
              id="price"
              name="price"
              type="number"
              min="1"
              value={fields.price}
              onChange={handleFieldChange}
              required
            />
          </label>
        </div>

        <div className="add-property-form__element">
          <label className="add-property-form__label" htmlFor="city">
            Select location
            <select
              className="add-property-form__select"
              id="city"
              name="city"
              onChange={handleFieldChange}
            >
              <option value="" disabled defaultValue="">
                Please select...
              </option>
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </label>
        </div>

        <div className="add-property-form__element">
          <label
            id="email-label"
            className="add-property-form__label"
            htmlFor="email"
          >
            Contact email Address
            <input
              className="add-property-form__input"
              placeholder="person@email.com"
              id="email"
              name="email"
              type="email"
              value={fields.email}
              onChange={handleFieldChange}
              required
            />
          </label>
        </div>

        <button
          className="add-property-form__element add-property-form__button"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
