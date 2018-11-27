export const GET_DECIMAL_VALUE = 'GET_DECIMAL_VALUE';
export const DATA_FETCH_SUCCESS = 'DATA_FETCH_SUCCESS';
export const DATA_FETCH_FAILURE = 'DATA_FETCH_FAILURE';
export const STORE_DATA_TO_REDUX = 'STORE_DATA_TO_REDUX';
export const SET_FLAG = 'SET_FLAG';

export function setFlag(newState) {
	return {
		type: SET_FLAG,
		updateFlagState: newState
	};
}
