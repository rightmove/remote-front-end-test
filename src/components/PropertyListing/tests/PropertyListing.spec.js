import React from 'react';
import { render, screen } from '@testing-library/react';
import PropertyListing from '../PropertyListing';
import PropertyCard from '../../PropertyCard';

describe('PropertyListing', () => {
  test('prop[erty list render without crashing', () => {
    render(<PropertyListing />);
  });

  test('initial Loading', () => {
    render(<PropertyListing />);
    const loading = screen.getByText(/Loading.../i);
    expect(loading).toBeInTheDocument();
  });

  test('Property Card renderred', async () => {
    render(<PropertyListing />);
    await render(<PropertyCard />);
  });
});
