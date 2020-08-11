import React from 'react';
import {shallow} from 'enzyme';
import Header from '../Header';

describe('Header', () => {

    it('should render without crashing', () => {
        const wrapper = shallow(<Header/>);
        expect(wrapper.find('.Header')).toHaveLength(1);
    });

    it('should render logo', () => {
        const wrapper = shallow(<Header/>);
        expect(wrapper.find('img').props().src).toContain('rm-site--logo.svg');
    });
});
