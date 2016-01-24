import * as React from 'react';

interface Props {
}

interface State {
}

class InfoBar extends React.Component<Props, State> {
  render() {
    return (
      <div id="info-bar-container">
        <div id="info-bar">
            <div id="namebar">
                <p>Alexander</p>
                <p>Fisher</p>
                <p>Programmer Extraordinaire</p>
            </div>
            <div id="socialbar">
                <a href="https://github.com/pixelshaded" target="_blank"><img src="img/git-icon.gif" alt="github"/></a>
                <a href="http://www.linkedin.com/in/alexanderffisher" target="_blank"><img src="img/linkedin.gif" alt="linkedin"/></a>
                <a href="https://twitter.com/pixelshaded" target="_blank"><img src="img/twitter-icon.jpg" alt="twitter"/></a>
            </div>
        </div>
      </div>
    );
  }
}

export default InfoBar;