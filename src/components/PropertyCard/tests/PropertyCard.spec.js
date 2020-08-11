import React from 'react';
import {shallow, mount} from 'enzyme';
import PropertyCard from '../PropertyCard';

describe('PropertyCard', () => {

    const props = {
        summary: 'Superbly insulated, energy efficient, secure and virtually invisible',
        displayAddress: 'North Shire, TS13 4TJ',
        price: 500,
        branchName: '[branch/agent name]',
        propertyTitle: '2 Bed Hobbit Hole For Sale',
        mainImage: 'something.com/61AG4UpUoPL._SX300_QL70_.jpg'
    };

    it('should render without crashing', () => {
        const wrapper = shallow(<PropertyCard {...props}/>);
        expect(wrapper.find('.PropertyCard')).toHaveLength(1);
    });

    it('should render property image', () => {
        const wrapper = mount(<PropertyCard {...props}/>);
        expect(wrapper.find('img').props().src).toContain('61AG4UpUoPL._SX300_QL70_.jpg');
    });

    it('should render property price', () => {
        const wrapper = mount(<PropertyCard {...props}/>);
        expect(wrapper.find('.price').text()).toEqual('£ 500');
    });

    it('should render property title', () => {
        const wrapper = mount(<PropertyCard {...props}/>);
        expect(wrapper.find('.propertyTitle').text()).toEqual('2 Bed Hobbit Hole For Sale');
    });

    it('should render property address', () => {
        const wrapper = mount(<PropertyCard {...props}/>);
        expect(wrapper.find('.displayAddress').text()).toEqual('North Shire, TS13 4TJ');
    });

    it('should render property summary', () => {
        const wrapper = mount(<PropertyCard {...props}/>);
        expect(wrapper.find('.summary').text()).toContain('Superbly insulated, energy efficient, secure and virtually invisible');
    });

    it('should render agent contact link', () => {
        const wrapper = mount(<PropertyCard {...props}/>);
        expect(wrapper.find('.agentInfo a').props().href).toEqual('mailto:fakemail.fedtest@rightmove.co.uk');
        expect(wrapper.find('.agentInfo a').text()).toEqual('✉️Contact [branch/agent name]');
    });
});
