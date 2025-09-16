import React from "react";

class WelcomeClass extends React.Component {
  render() {
    return <h2>Hello, {this.props.name}</h2>;
  }
}

export default WelcomeClass;