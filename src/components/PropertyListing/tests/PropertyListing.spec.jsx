import React from 'react';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/dom';
import PropertyListing from '../PropertyListing';

// TODO: Make a more realistic fixture
// TDOD: Add dummy image asset
const DUMMY_PROPERTY = {
    id: 73864112,
    bedrooms: 3,
    summary: 'Property 1 Situated moments from the River Thames in Old Chelsea...',
    displayAddress: '1 CHEYNE WALK, CHELSEA, SW3',
    propertyType: 'Flat',
    price: 1950000,
    branchName: 'M2 Property, London',
    propertyUrl: '/property-for-sale/property-73864112.html',
    contactUrl: '/property-for-sale/contactBranch.html?propertyId=73864112',
    propertyTitle: '3 bedroom flat for sale',
    mainImage: 'img.jpg',
};

const handlers = [
    http.get('http://localhost:3000/api/properties', () => {
      return HttpResponse.json(Array(5).fill(DUMMY_PROPERTY));
    }),
];

const server = setupServer(...handlers);

describe('PropertyListing', () => {
    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    it('should show a loading state while waiting for a response from the api', async () => {
        render(<PropertyListing />);
        expect(screen.getByText(/Loading/)).toBeInTheDocument();
    });

    it('should show a no properties avaiable message when the api returns no results', async () => {
        server.use(
            http.get('http://localhost:3000/api/properties', () => {
              return HttpResponse.json([]);
            }),
          )
        render(<PropertyListing />);
        expect(await screen.findByRole('heading')).toHaveTextContent(/no properties/);
    });

    it('should show a no properties avaiable message when the api returns a server error', async () => {
        server.use(
            http.get('http://localhost:3000/api/properties', () => {
                return new HttpResponse(null, {status: 500});
            }),
        )
        render(<PropertyListing />);
        expect(await screen.findByRole('heading')).toHaveTextContent(/no properties/);
    });

    it('should render five property cards', async () => {
        render(<PropertyListing />);
        const propertiesList = await screen.findByRole('list');
        const propertyCards = within(propertiesList).getAllByRole('listitem');
        expect(propertyCards).toHaveLength(5);
    });
});
