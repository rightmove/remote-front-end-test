import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MultiSelect from '../MultiSelect';

const propertyTypes = [
    'Flat',
    'Apartment',
    'Penthouse',
    'Semi-Detached',
    'Detached',
    'Terraced',
    'Duplex',
    'Mews',
    'Boat',
    'Maisonette',
];

describe('MultiSelect', () => {
    it('should render all  options options and a label', () => {
        render(<MultiSelect options={propertyTypes} label="test label" />);

        const inputs = screen.getAllByRole('checkbox');
        expect(inputs).toHaveLength(propertyTypes.length);

        propertyTypes.forEach((propertyType) => {
            const input = screen.getByLabelText(propertyType);
            expect(input.value).toBe(propertyType.toLowerCase());
        });
    });

    it('should call the callback when clicking on various option', async () => {
        const onChange = () => {};
        const user = userEvent.setup();
        render(<MultiSelect options={propertyTypes} label="test label" onChange={onChange} />);

        const uncheckedFlatsCheckbox = screen.getByRole('checkbox', { name: 'Flat', checked: false });
        const uncheckedSemiDetachedCheckbox = screen.getByRole('checkbox', { name: 'Semi-Detached', checked: false });
        const uncheckedTerracedCheckbox = screen.getByRole('checkbox', { name: 'Terraced', checked: false });

        await user.click(uncheckedFlatsCheckbox);

        const checkedFlatsCheckbox = screen.getByRole('checkbox', { name: 'Flat', checked: true });
        expect(checkedFlatsCheckbox).toBeInTheDocument();
        expect(uncheckedSemiDetachedCheckbox).toBeInTheDocument();
        expect(uncheckedTerracedCheckbox).toBeInTheDocument();

        await user.click(uncheckedSemiDetachedCheckbox);

        const checkedSemiDetachedCheckbox = screen.getByRole('checkbox', { name: 'Semi-Detached', checked: true });
        expect(checkedFlatsCheckbox).toBeInTheDocument();
        expect(checkedSemiDetachedCheckbox).toBeInTheDocument();

        await user.click(uncheckedTerracedCheckbox);

        const checkedTerracedCheckbox = screen.getByRole('checkbox', { name: 'Terraced', checked: true });
        expect(checkedTerracedCheckbox).toBeInTheDocument();

        await user.click(checkedSemiDetachedCheckbox);

        expect(checkedFlatsCheckbox).toBeInTheDocument();
        expect(uncheckedSemiDetachedCheckbox).toBeInTheDocument();
        expect(checkedTerracedCheckbox).toBeInTheDocument();
    });
});
