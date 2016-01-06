import React from 'react';
import malarkey from 'malarkey';

const MalarkeyComponent = React.createClass({
  getDefaultProps () {
    return {
      messages: [],
      options: {
        loop: true
      },
      sequence (m, messages) {
        messages.forEach(message => {
          m.type(message).pause().delete();
        });
      }
    };
  },

  componentDidMount () {
    const {messages, options, sequence} = this.props;
    const m = malarkey(this.node, options);
    sequence(m, messages);
  },

  render () {
    return <div ref={node => this.node = node} />;
  }
});

export default MalarkeyComponent;
