import * as React from "react";

export interface HelloProps { 
  compiler: string;
  framework: string;
}

export interface HelloState {

}

export class Hello extends React.Component<HelloProps, HelloState> {
  constructor(props: HelloProps) {
    super(props);
    this.state = {};
  }
  render() {
    return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
  }
}