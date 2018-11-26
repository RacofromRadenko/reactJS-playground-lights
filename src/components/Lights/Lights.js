import React from 'react';
import './Lights.less';
import Light from '../SingleLight/Light';

const Lights = (props) => {
	console.log(props.currentValue);
	let extract = (function extractCurrentValue() {
		if (props.currentValue !== null && props.currentValue !== undefined) {
			const toBits = props.currentValue.toString(2);
			return toBits.length >= 8 ? toBits : new Array(8 - toBits.length + 1).join('0') + toBits;
		}
	})();

	return (
		<div className="Lights">
			{extract.toString().split('').map((current, key) => {
				return <Light key={key} light={current} />;
			})}
		</div>
	);
};

export default Lights;
