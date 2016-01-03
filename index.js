'use strict';

import React from 'react';
import Malarkey from 'malarkey';

const MalarkeyComponent = React.createClass({
  getDefaultProps () {
    return {
      messages: []
    };
  },

  componentDidMount () {
    const {messages} = this.props;
    const malarkeyNode = Malarkey(this.node);

    messages.forEach(message => {
      malarkeyNode.type(message);
    });
  },

  render () {
    return (
      <div ref={node => this.node = node} />
    );
  }
});

export default MalarkeyComponent;
