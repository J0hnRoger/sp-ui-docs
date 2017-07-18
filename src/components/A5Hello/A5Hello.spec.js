import React from 'react'
import {shallow} from 'enzyme'
import A5Hello from './A5Hello'

test('A5Hello should render Hello <Message prop>', () => {
    const wrapper = shallow(<A5Hello message=" World" />)
    expect(wrapper.find('h3').text()).toBe("Hello World")
});