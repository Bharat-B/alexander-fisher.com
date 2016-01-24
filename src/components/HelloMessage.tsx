import * as React from 'react';

interface Props {
  name: string;
}

interface State {

}

class HelloMessage extends React.Component<Props, State> {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

export default HelloMessage;