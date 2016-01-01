'use strict';

import React from 'react';
import expect from 'unexpected';
import MalarkeyComponent from '../index';
import {
  describeWithDOM,
  mount
} from 'enzyme';


describeWithDOM('MalarkeyComponent', () => {
  it('should mount', () => {
    mount(<MalarkeyComponent />);
  });
});
