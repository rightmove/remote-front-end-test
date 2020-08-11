import React from 'react';
import {shallow, mount} from 'enzyme';
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
    'Maisonette'
];

describe('MultiSelect', () => {

    it('should render all  options options and a label', () => {
        const wrapper = shallow(<MultiSelect options={propertyTypes} label='test label'/>);

        expect(wrapper.find('input')).toHaveLength(propertyTypes.length);
        wrapper.find('label').map((node, index) => {
            expect(node.text()).toEqual(propertyTypes[index])
        });
    });

    it('should call the callback when clicking on various option', () => {
        const onChange = jest.fn();
        const wrapper = mount(<MultiSelect options={propertyTypes} label='test label' onChange={onChange}/>);

        wrapper.find('input').at(0).simulate('change', {target: {checked: true, value: propertyTypes[0].toLowerCase()}});
        expect(onChange).toHaveBeenCalledWith(['flat']);
        onChange.mockClear();

        wrapper.find('input').at(3).simulate('change', {target: {checked: true, value: propertyTypes[3].toLowerCase()}});
        expect(onChange).toHaveBeenCalledWith(['flat', 'semi-detached']);
        onChange.mockClear();

        wrapper.find('input').at(5).simulate('change', {target: {checked: true, value: propertyTypes[5].toLowerCase()}});
        expect(onChange).toHaveBeenCalledWith (['flat', 'semi-detached', 'terraced']);
        onChange.mockClear();

        wrapper.find('input').at(3).simulate('change', {target: {checked: false, value: propertyTypes[3].toLowerCase()}});
        expect(onChange).toHaveBeenCalledWith(['flat', 'terraced']);
        onChange.mockClear();
    });
});
