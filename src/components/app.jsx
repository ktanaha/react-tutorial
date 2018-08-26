import React, { Component } from 'react';

import Greeting from './greeting';

class App extends Component {
  render() {
    return (
      <div>
        <Greeting name="bob" />
        <Greeting name="john" />
      </div>);
  }
}

export default App;
