import { combineReducers } from 'redux';
import { extractToBits } from './LightsReducers/LightReducer';
import { updateFlagReducer } from './LightsReducers/LightReducer';
import { storeAPIResultsReducer } from './LightsReducers/LightReducer';

export const rootReducer = combineReducers({
	extracted: extractToBits,
	updateFlag: updateFlagReducer,
	storeAPIData: storeAPIResultsReducer
});
