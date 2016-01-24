import HelloMessage from './components/HelloMessage';
import InfoBar from './components/InfoBar';
import * as ReactDOM from 'react-dom';
import * as React from 'react';

ReactDOM.render(<div><InfoBar/><HelloMessage name="John" /></div>, document.getElementById('container'));