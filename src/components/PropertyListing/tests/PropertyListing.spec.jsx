import React from 'react';
import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/dom';
import PropertyListing from '../PropertyListing';

describe('PropertyListing', () => {
    it('should render five property cards', async () => {
        render(<PropertyListing />);
        const propertiesList = screen.getByRole('list');
        const propertyCards = await within(propertiesList).findAllByRole('listitem');
        expect(propertyCards).toHaveLength(5);
    });
});
