import React, { Component } from 'react';
import './App.less';
import Lights from './components/Lights/Lights';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Lights />
			</div>
		);
	}
}

export default App;
