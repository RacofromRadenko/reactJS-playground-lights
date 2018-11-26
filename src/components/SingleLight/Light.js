import React from 'react';
import './Light.less';

const Light = (props) => {
	let element = parseInt(props.light);

	return <div className="Light" style={element === 1 ? { backgroundColor: 'green' } : { backgroundColor: 'red' }} />;
};

export default Light;
