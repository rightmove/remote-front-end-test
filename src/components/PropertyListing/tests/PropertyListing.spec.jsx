import React from 'react';
import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/dom';
import PropertyListing from '../PropertyListing';
import { fetchProperties } from '../../../services/propertyService';

jest.mock('../../../services/propertyService');

describe('PropertyListing', () => {
    it('should render property cards', async () => {

        fetchProperties.mockResolvedValue([
            { id: 1, name: 'Property 1' },
            { id: 2, name: 'Property 2' },
            { id: 3, name: 'Property 3' },
            { id: 4, name: 'Property 4' },
            { id: 5, name: 'Property 5' },
        ]);
            
        render(<PropertyListing />);

        const propertiesList = await screen.findByRole('list');
        const propertyCards = await within(propertiesList).findAllByRole('listitem');
        expect(propertyCards).toHaveLength(5);
    });
});
