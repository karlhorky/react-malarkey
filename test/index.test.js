'use strict';

import React from 'react';
import MalarkeyComponent from '../index';
import {describeWithDOM, mount, spyLifecycle} from 'enzyme';

import {expect} from 'chai';

describe('MalarkeyComponent', () => {
  describeWithDOM('MalarkeyComponent DOM', () => {
    it('should mount', () => {
      spyLifecycle(MalarkeyComponent);
      mount(<MalarkeyComponent />);
      expect(MalarkeyComponent.prototype.componentDidMount.calledOnce).to.be.true;
    });
  });
});
