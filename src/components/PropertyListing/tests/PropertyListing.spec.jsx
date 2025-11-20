import React from 'react';
import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/dom';
import PropertyListing from '../PropertyListing';

const mockProperties = [
    {
        id: 1,
        bedrooms: 2,
        summary: 'Summary for property 1.',
        displayAddress: '123 Dummy Street, Testville',
        propertyType: 'Detached',
        price: 100000,
        branchName: 'Test Branch',
        propertyUrl: '/property-for-sale/property-1.html',
        contactUrl: '/property-for-sale/contactBranch.html?propertyId=1',
        propertyTitle: '2 bedroom detached house for sale',
        mainImage: 'https://dummyimage.com/000000.jpg&text=Property+1',
    },
    {
        id: 2,
        bedrooms: 3,
        summary: 'Summary for property 2.',
        displayAddress: '456 Example Avenue, Mocktown',
        propertyType: 'Flat',
        price: 200000,
        branchName: 'Mock Branch',
        propertyUrl: '/property-for-sale/property-2.html',
        contactUrl: '/property-for-sale/contactBranch.html?propertyId=2',
        propertyTitle: '3 bedroom flat for sale',
        mainImage: 'https://dummyimage.com/000000.jpg&text=Property+2',
    },
];

describe('PropertyListing', () => {
    beforeEach(() => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockProperties),
            })
        );
    });

    afterEach(() => {
        jest.resetAllMocks();
    });
    it('should render the property cards correctly', async () => {
        render(<PropertyListing />);
        const propertiesList = screen.getByRole('list');
        const propertyCards = await within(propertiesList).findAllByRole('listitem');
        expect(propertyCards).toHaveLength(mockProperties.length);
    });
});
