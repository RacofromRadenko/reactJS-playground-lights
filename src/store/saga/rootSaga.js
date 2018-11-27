import { put, takeEvery, call, all } from 'redux-saga/effects';

import * as actionTypes from '../actions/actions';
import axios from 'axios';

export function fetchRandomNumber() {
	const configOfApiCall = axios({
		headers: {
			'Content-Type': 'text/plain;charset=UTF-8'
		},
		// params: {
		// 	num: 1000,
		// 	min: 0,
		// 	max: 256,
		// 	col: 1,
		// 	base: 10,
		// 	format: 'plain',
		// 	rnd: 'new'
		// },
		params: {
			length: 1,
			type: 'uint8'
		},

		url: 'https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint8',
		method: 'GET'
	});

	return configOfApiCall;
}

export function* semaphoreWatcher() {
	yield takeEvery(actionTypes.GET_DECIMAL_VALUE, handleRequestForRandomDecimalNumbers);
	console.log(takeEvery(actionTypes.GET_DECIMAL_VALUE, handleRequestForRandomDecimalNumbers));
}

export function* handleRequestForRandomDecimalNumbers() {
	try {
		const response = yield call(fetchRandomNumber);

		const dataResponse = response.data.data[0];

		console.log('[DATA RESPONSE]', dataResponse);

		yield put({ type: actionTypes.DATA_FETCH_SUCCESS, responseData: dataResponse });
	} catch (error) {
		console.log('[Error]', error);
		yield put({ type: actionTypes.DATA_FETCH_FAILURE, error: error });
	}
}

export function* rootSaga() {
	yield all([ semaphoreWatcher() ]);
}

export default rootSaga;
