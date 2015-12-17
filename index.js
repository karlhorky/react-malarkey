'use strict';

import React from 'react';
import Malarkey from 'malarkey';

const MalarkeyComponent = React.createClass({
  componentDidMount () {
    console.log('node', this.node);
  },

  render () {
    return (
      <div ref={node => this.node = node} />
    );
  }
});

export default MalarkeyComponent;
