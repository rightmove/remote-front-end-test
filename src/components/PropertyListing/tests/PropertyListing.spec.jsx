import React from 'react';

import { screen, within } from '@testing-library/react';
import PropertyListing from '../PropertyListing';
import { renderWithClient } from '../../../testUtils';
import { server } from '../../../mocks/server';
import { handlers } from '../../../mocks/handlers';

describe('PropertyListing', () => {
    const setup = () => {
        return renderWithClient(<PropertyListing />);
    };

    describe('When data is fetched successfully', () => {
        it('should render five property cards', async () => {
            setup();
            const propertiesList = await screen.findByRole('list');
            const propertyCards = within(propertiesList).getAllByRole('listitem');
            expect(propertyCards).toHaveLength(5);
        });
    });

    describe('When data is loading', () => {
        it('should render correct copy', () => {
            setup();
            expect(screen.getByText('LOADING')).toBeInTheDocument();
        });
    });

    describe('When data fetch has failed', () => {
        it('should render correct copy', async () => {
            server.use(handlers.mockFetchPropertyListingFailure);

            setup();
            const errorMessage = await screen.findByText('Ooops! Something has gone wrong');
            expect(errorMessage).toBeInTheDocument();
        });
    });
});
