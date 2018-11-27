import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actions';
import './Lights.less';
import Light from '../SingleLight/Light';

class Lights extends Component {
	componentDidMount() {
		this.props.getCurrentValueInBITS();

		this.ticker();
		// console.log(this.ticker());
		// console.log(this.props.extracted);
	}

	ticker = () => {
		console.log(this.props.flagState);
		if (this.props.flagState) {
			setInterval(() => {
				this.props.getCurrentValueInBITS();
				console.log('ene raco');
			}, 3500);
			this.props.showState(!this.props.flagState);
		}
	};

	extractCurrentValue = () => {
		if (this.props.extracted !== null && this.props.extracted !== undefined) {
			const toBits = this.props.extracted.toString(2);
			return toBits.length >= 8 ? toBits : new Array(8 - toBits.length + 1).join('0') + toBits;
		}
	};

	componentWillUnmount() {
		console.log(clearInterval(this.ticker()));
		clearInterval(this.ticker());
	}

	render() {
		return (
			<div className="Lights">
				{this.extractCurrentValue().toString().split('').map((current, key) => {
					return <Light key={key} light={current} />;
				})}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		extracted: state.extracted.currentValue,
		flagState: state.updateFlag.flag,
		apiData: state.storeAPIData.currentValue
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getCurrentValueInBITS: () => dispatch({ type: actionTypes.GET_DECIMAL_VALUE }),
		showState: (newState) => dispatch(actionTypes.setFlag(newState))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Lights);
