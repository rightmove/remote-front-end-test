import React from 'react';
import {shallow} from 'enzyme';
import App, {formatMoney} from '../App';

describe('App', () => {

    it('should render without crashing', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find('.App')).toHaveLength(1);
    });
});
