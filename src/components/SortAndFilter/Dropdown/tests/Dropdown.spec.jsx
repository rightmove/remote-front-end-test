import React from 'react';
import Dropdown from '../Dropdown';
import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

describe('Dropdown', () => {
    it('should render three options options and a label', () => {
        render(<Dropdown options={[0, 100, 200]} label="test label" />);
        const select = screen.getByRole('combobox');
        const options = within(select).getAllByRole('option');
        expect(options).toHaveLength(3);

        const label = screen.getByText('test label');
        expect(label).toBeInTheDocument();
    });

    it('should correctly update the value', async () => {
        const onChange = () => {};
        render(<Dropdown options={[0, 100, 200]} label="test label" onChange={onChange} />);

        const select = screen.getByRole('combobox');

        await userEvent.selectOptions(select, ['200']);

        expect(screen.getByRole('option', { name: '0' }).selected).toBe(false);
        expect(screen.getByRole('option', { name: '100' }).selected).toBe(false);
        expect(screen.getByRole('option', { name: '200' }).selected).toBe(true);
    });
});
