import React from 'react';
import malarkey from 'malarkey';

export default class Malarkey extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    const {messages, options, sequence} = this.props;
    const m = malarkey(this.node, options);
    sequence(m, messages);
  }

  render () {
    const {messages, staticRender} = this.props;
    if (staticRender) {
      // return a random message on static rendering
      return <span>{ messages[Math.floor(Math.random() * messages.length)] }</span>;
    }
    return <span ref={node => this.node = node} />;
  }
}

Malarkey.displayName = 'Malarkey';
Malarkey.defaultProps = {
  messages: [],
  options: {
    loop: true
  },
  sequence (m, messages) {
    messages.forEach(message => {
      m.type(message).pause().delete();
    });
  },
  staticRender: false
}
