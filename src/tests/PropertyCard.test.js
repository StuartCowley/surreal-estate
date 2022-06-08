import React from "react";
import { render, screen } from "@testing-library/react";

import PropertyCard from "../components/PropertyCard";

describe("PropertyCard", () => {
  const validProps = {
    title: "Test Title",
    type: "Test Type",
    city: "Test City",
    bathrooms: 2,
    bedrooms: 3,
    price: 234995,
    email: "person@email.com",
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <PropertyCard
        title={validProps.title}
        type={validProps.type}
        city={validProps.city}
        bathrooms={validProps.bathrooms}
        bedrooms={validProps.bedrooms}
        price={validProps.price}
        email={validProps.email}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct values for props", () => {
    render(
      <PropertyCard
        title={validProps.title}
        type={validProps.type}
        city={validProps.city}
        bathrooms={validProps.bathrooms}
        bedrooms={validProps.bedrooms}
        price={validProps.price}
        email={validProps.email}
      />
    );

    const titleEl = screen.getByText(/test title/i);
    const typeEl = screen.getByText(/test type/i);
    const cityEl = screen.getByText(/test city/i);
    const bathroomsEl = screen.getByText(/bathrooms: 2/i);
    const bedroomsEl = screen.getByText(/bedrooms: 3/i);
    const priceEl = screen.getByText(/234995/i);
    const emailEl = screen.getByText(/person@email.com/i);

    expect(titleEl).toBeInTheDocument();
    expect(titleEl).toHaveClass("property-card__title");

    expect(typeEl).toBeInTheDocument();
    expect(typeEl).toHaveClass("property-card__type");

    expect(cityEl).toBeInTheDocument();
    expect(cityEl).toHaveClass("property-card__city");

    expect(bathroomsEl).toBeInTheDocument();
    expect(bathroomsEl).toHaveClass("property-card__bathrooms");

    expect(bedroomsEl).toBeInTheDocument();
    expect(bedroomsEl).toHaveClass("property-card__bedrooms");

    expect(priceEl).toBeInTheDocument();
    expect(priceEl).toHaveClass("property-card__price");

    expect(emailEl).toBeInTheDocument();
    expect(emailEl).toHaveClass("property-card__email");
  });
});
