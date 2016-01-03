import React from 'react';
import {render} from 'react-dom';
import MalarkeyComponent from 'react-malarkey';

const messages = [
  'JavaScript Professionals',
  'Something else'
];

render(
  <MalarkeyComponent messages={messages} />,
  document.getElementById('root')
);
