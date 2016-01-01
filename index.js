'use strict';

import React from 'react';
import Malarkey from 'malarkey';

const MalarkeyComponent = React.createClass({
  componentDidMount () {
    console.log('node');
    Malarkey(this.node).type('JavaScript professionals').pause().delete().type('Something else');
  },

  render () {
    return (
      <div ref={node => this.node = node} />
    );
  }
});

export default MalarkeyComponent;
