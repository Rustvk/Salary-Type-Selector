import {combineReducers} from 'redux';
import salaryReducer from './salary';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
	salary: salaryReducer,
	form: formReducer
});