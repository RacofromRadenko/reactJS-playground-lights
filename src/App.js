import React, { Component } from 'react';
import './App.less';
import Lights from './components/Lights';

class App extends Component {

  state = {
    currentValue: null
  }


  componentDidMount() {
    this.tick();

  }


  tick = () => {
    this.setState({
      currentValue:Math.floor(Math.random() * 255) + 0  
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.currentValue}
        <Lights currentValue={this.state.currentValue} />
      </div>
    );
  }
}

export default App;
