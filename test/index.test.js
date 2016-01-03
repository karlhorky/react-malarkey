'use strict';

import React from 'react';
import MalarkeyComponent from '../index';
import {shallow, describeWithDOM, mount, spyLifecycle} from 'enzyme';

import {expect} from 'chai';

describe('MalarkeyComponent', () => {
  it('should render one <div />', () => {
    const wrapper = shallow(<MalarkeyComponent />);
    expect(wrapper.find('div')).to.have.length(1);
  });
});

describeWithDOM('MalarkeyComponent DOM', () => {
  it('should mount', () => {
    spyLifecycle(MalarkeyComponent);
    mount(<MalarkeyComponent />);
    expect(MalarkeyComponent.prototype.componentDidMount.calledOnce).to.be.true;
  });

  it('should render text from props', () => {
    const messages = ['a', 'b'];
    const wrapper = mount(<MalarkeyComponent messages={messages} />);
    const promise = new Promise(resolve => {
      setTimeout(() => { return resolve(wrapper.text()); }, 60);
    });
    return promise.then(message => {
      expect(message).to.equal(messages[0]);
    });
  });
});
