import React from "react";
import { render, screen } from "@testing-library/react";
import { within } from "@testing-library/dom";
import PropertyListing from "../PropertyListing";

describe("PropertyListing", () => {
  it("should render five property cards", () => {
    render(<PropertyListing />);
    const propertiesList = screen.getByRole("list");
    const propertyCards = within(propertiesList).getAllByRole("listitem");
    expect(propertyCards).toHaveLength(5);
  });
});
