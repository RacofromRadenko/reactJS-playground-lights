import * as actionTypes from '../../actions/actions';

const initialState = {
	currentValue: 255,
	flag: true
};

export const extractToBits = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_DECIMAL_VALUE:
			const randomValue = Math.floor(Math.random() * 255) + 0;

			return {
				...state,
				currentValue: randomValue
			};
		default:
			return state;
	}
};

export const updateFlagReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_FLAG:
			console.log(action.updateFlagState);
			return {
				...state,
				flag: action.updateFlagState
			};

		default:
			return state;
	}
};

export const storeAPIResultsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.DATA_FETCH_SUCCESS:
			console.log(action.responseData);

			return {
				...state,
				currentValue: action.responseData
			};

		case actionTypes.DATA_FETCH_FAILURE:
			console.log(action.error);

			return {
				...state,
				error: action.error
			};

		default:
			return state;
	}
};
