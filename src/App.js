import React, { Component } from 'react';
import './App.less';
import Lights from './components/Lights/Lights';
import { connect } from 'react-redux';
import * as actionTypes from './store/actions/actions';

class App extends Component {
	state = {
		currentValue: 12
	};

	componentDidMount() {
		// this.tick();

		// this.props.getCurrentValueInBITS();
		setTimeout(() => {
			this.props.getCurrentValueInBITS();
		}, 600);

		console.log(this.props.extracted);
	}

	render() {
		return (
			<div className="App">
				<Lights currentValue={this.props.extracted.toString(2)} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		extracted: state.extracted.currentValue
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getCurrentValueInBITS: () => dispatch({ type: actionTypes.GET_DECIMAL_VALUE })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
