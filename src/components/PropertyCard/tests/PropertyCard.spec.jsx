import React from 'react';
import { render, screen } from '@testing-library/react';
import PropertyCard from '../PropertyCard';

describe('PropertyCard', () => {
    const props = {
        summary: 'Superbly insulated, energy efficient, secure and virtually invisible',
        displayAddress: 'North Shire, TS13 4TJ',
        price: 500,
        branchName: '[branch/agent name]',
        propertyTitle: '2 Bed Hobbit Hole For Sale',
        mainImage: 'something.com/61AG4UpUoPL._SX300_QL70_.jpg',
    };

    it('should render property image', () => {
        render(<PropertyCard {...props} />);
        const image = screen.getByAltText('Property');
        expect(image.src).toContain('61AG4UpUoPL._SX300_QL70_.jpg');
    });

    it('should render property price', () => {
        render(<PropertyCard {...props} />);
        expect(screen.getByText('£ 500')).toBeInTheDocument();
    });

    it('should render property title', () => {
        render(<PropertyCard {...props} />);
        expect(screen.getByText('2 Bed Hobbit Hole For Sale')).toBeInTheDocument();
    });

    it('should render property address', () => {
        render(<PropertyCard {...props} />);
        expect(screen.getByText('North Shire, TS13 4TJ')).toBeInTheDocument();
    });

    it('should render property summary', () => {
        render(<PropertyCard {...props} />);

        expect(
            screen.getByText('Superbly insulated, energy efficient, secure and virtually invisible')
        ).toBeInTheDocument();
    });

    it('should render agent contact link', () => {
        render(<PropertyCard {...props} />);

        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', 'mailto:fakemail.fedtest@rightmove.co.uk');
        expect(link).toHaveTextContent('Contact [branch/agent name]');
    });
});
