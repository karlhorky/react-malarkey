'use strict';

import React from 'react';
import Malarkey from '../index';
import {shallow, describeWithDOM, mount, spyLifecycle} from 'enzyme';

import {expect} from 'chai';

describe('MalarkeyComponent', () => {
  it('should render one <span />', () => {
    const wrapper = shallow(<Malarkey />);
    expect(wrapper.find('span')).to.have.length(1);
  });
});

describeWithDOM('MalarkeyComponent DOM', () => {
  it('should mount', () => {
    spyLifecycle(Malarkey);
    mount(<Malarkey />);
    expect(Malarkey.prototype.componentDidMount.calledOnce).to.be.true;
  });

  it('should render text from props', () => {
    const messages = ['a', 'b'];
    const wrapper = mount(<Malarkey messages={messages} />);
    const promise = new Promise(resolve => {
      setTimeout(() => { return resolve(wrapper.text()); }, 60);
    });
    return promise.then(message => {
      expect(message).to.equal(messages[0]);
    });
  });

  it('should render static markup', () => {
    const messages = ['a'];
    const wrapper = mount(<Malarkey messages={messages} staticRender={true} />);
    expect(wrapper.text()).to.equal(messages[0]);
  });
});
