import React from 'react';
import { render, screen } from '@testing-library/react';
import { within, waitFor } from '@testing-library/dom';
import crossFetch from 'cross-fetch';
import PropertyListing from '../PropertyListing';

jest.mock('cross-fetch', () => {
    // Full disclosure, I had to google this.
    return {
        __esModule: true,
        default: jest.fn()
    };
});

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
    mainImage:
        'https://media.rightmove.co.uk/dir/crop/10:9-16:9/38k/37655/53588679/37655_CAM170036_IMG_01_0000_max_476x317.jpg',
};

describe('PropertyListing', () => {
    it('should render five property cards', async () => {
        crossFetch.mockResolvedValueOnce({
            ok: true,
            json: () => Array(5)
                .fill(DUMMY_PROPERTY)
                .map((property, index) => ({
                    ...property,
                    id: index
                }))
        });
        render(<PropertyListing />);

        await waitFor(() => screen.getByRole('list'));
        const propertiesList = screen.getByRole('list');
        const propertyCards = await within(propertiesList).findAllByRole('listitem');
        expect(propertyCards).toHaveLength(5);
    });

    it('should display an error if request to get properties fails', async () => {
        crossFetch.mockResolvedValueOnce({
            ok: false
        });
        render(<PropertyListing />);

        await waitFor(() => screen.getByRole('alert'))
        expect(screen.getByRole('alert')).toHaveTextContent('Sorry, something has gone wrong.');
    });

});
