import React from 'react';
import { shallow, mount } from 'enzyme';
import App, { formatMoney } from '../App';

global.fetch = jest.fn();

describe('App', () => {
    it('should render without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App')).toHaveLength(1);
    });

    it('fetches property data on load', () => {
        const wrapper = mount(<App />);
        wrapper.update();
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith(
            'http://localhost:3000/api/properties'
        );
    });
});
