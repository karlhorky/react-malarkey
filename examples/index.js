import React from 'react';
import {render} from 'react-dom';
import Malarkey from 'react-malarkey';

const messages = [
  'JavaScript Professionals',
  'Expert Educators'
];

render(
  <Malarkey messages={messages} />,
  document.getElementById('root')
);
