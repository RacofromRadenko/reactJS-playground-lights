import * as actionTypes from '../../actions/actions';

const initialState = {
	currentValue: Math.floor(Math.random() * 255) + 0
};

export const extractToBits = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_DECIMAL_VALUE:
			return {
				...state,
				currentValue: setTimeout(
					() => ({
						currentValue: state.currentValue
					}),
					600
				)
			};
		default:
			return state;
	}
};
