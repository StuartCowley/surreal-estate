import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

import PropertyCard from "./PropertyCard";
import Alert from "./Alert";

import "../styles/properties.css";
import SideBar from "./Sidebar";

const Properties = ({ userID }) => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });
  const { search } = useLocation();

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/PropertyListing/")
      .then((res) => {
        setProperties(res.data);
        setAlert({
          message: "",
        });
      })
      .catch(() => {
        setAlert({
          message: "Server error. Please try again later.",
        });
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing${search}`)
      .then(({ data }) => setProperties(data))
      .catch((err) => console.error(err));
  }, [search]);

  const handleSaveProperty = (propertyId) => {
    axios.post("http://localhost:4000/api/v1/Favourite", {
      propertyListing: propertyId,
      fbUserId: userID,
    });
  };

  return (
    <>
      <Alert message={alert.message} />
      <SideBar />
      <div className="properties">
        {properties.map((property) => (
          <div key={property._id} className="item">
            <PropertyCard
              {...property}
              userID={userID}
              onSaveProperty={handleSaveProperty}
            />
          </div>
        ))}
      </div>
    </>
  );
};

Properties.propTypes = {
  userID: PropTypes.string.isRequired,
};

export default Properties;
