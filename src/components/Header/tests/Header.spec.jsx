import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
    it('should render logo', () => {
        render(<Header />);
        const image = screen.getByAltText('Rightmove logo');
        expect(image.src).toContain('rm-site--logo.svg');
    });
});
