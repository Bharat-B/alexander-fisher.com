import HelloMessage from './components/HelloMessage';
import InfoBar from './components/InfoBar';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './css/base.scss';

var element = (
  <div id='header'>
    <InfoBar/>
    <HelloMessage name='John' />
  </div>
);

ReactDOM.render(element, document.getElementsByTagName('body')[0]);