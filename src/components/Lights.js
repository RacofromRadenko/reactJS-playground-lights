
import React from 'react';
import './Lights.less';


const Lights = (props) => {

    if(props.currentValue !== null) {

        let currentValue = props.currentValue.toString(2);
        console.log(currentValue)
    }


    return (
        <div className="Lights">

        </div>
    );
};

export default Lights;