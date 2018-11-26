import { combineReducers } from 'redux';
import { extractToBits } from './LightsReducers/LightReducer';

export const rootReducer = combineReducers({
	extracted: extractToBits
});
