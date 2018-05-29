import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App.js';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { configure } from 'enzyme';
import DisplayList from '../displayList';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const wrapper = shallow(<App />);

const wrapper2 = mount(<DisplayList items={['clean room', 'pay bills']} />);

describe('<App/>', () => {
  it('should return a list of two items', () => {
    wrapper.setState({
      items: ['clean room', 'pay bills']
    });
    expect(wrapper2.find('ul')).to.have.length(2);
  });
  it('should remove an item when li element is clicked', () => {
    wrapper
      .find('li')
      .at(1)
      .simulate('click');
    expect(wrapper.find('ul')).to.have.length(1);
  });
  /*** Challenge Check the H1 tags to make sure the heading is correct ***/
  /*** You can you this guide to help aide you http://airbnb.io/enzyme/docs/api/shallow.html  */
  /***http://airbnb.io/enzyme/docs/api/ShallowWrapper/find.html */
});
