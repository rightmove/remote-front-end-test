import React from 'react';
import {shallow} from 'enzyme';
import SortAndFilter from '../SortAndFilter';

describe('SortAndFilter', () => {

    it('should render without crashing', () => {
        const wrapper = shallow(<SortAndFilter/>);
        expect(wrapper.find('.SortAndFilter')).toHaveLength(1);
    });
});
