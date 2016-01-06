import React from 'react';
import {render} from 'react-dom';
import MalarkeyComponent from 'react-malarkey';

const messages = [
  'JavaScript Professionals',
  'Expert Educators'
];

render(
  <MalarkeyComponent messages={messages} />,
  document.getElementById('root')
);
