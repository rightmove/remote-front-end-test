import React from 'react';
import {shallow} from 'enzyme';
import Dropdown from '../Dropdown';

describe('Dropdown', () => {

    it('should render three options options and a label', () => {
        const wrapper = shallow(<Dropdown options={[0, 100, 200]} label='test label'/>);
        expect(wrapper.find('option')).toHaveLength(3);
        expect(wrapper.find('label').childAt(0).text()).toEqual('test label');
    });

    it('should call the onChange when clicking on an option', () => {
        const onChange = jest.fn();
        const wrapper = shallow(<Dropdown options={[0, 100, 200]} label='test label' onChange={onChange}/>);

        wrapper.find('select').simulate('change', {target: { value : 'hello'}});

        expect(onChange).toHaveBeenCalledWith('hello');
        expect(onChange).toHaveBeenCalledTimes(1);
    });
});
