import {CHANGE_HINT} from '../actions/actionTypes';
import {salaryState} from '../../interfaces/salary';

const TYPES = [
	{
		key: 'MONTH',
		title: 'Оклад за месяц',
		showInput: true,
		showTaxHint: true,
		selected: true
	},
	{
		key: 'SMIC',
		title: 'МРОТ',
		hideTax: true,
		typeHint: 'МРОТ - минимальный размер оплаты труда. Разных для разных регионов'
	},
	{
		key: 'DAY',
		title: 'Оплата за день',
		showInput: true,
		inputHint: 'в день'
	},
	{
		key: 'HOUR',
		title: 'Оплата за час',
		showInput: true,
		inputHint: 'в час'
	},
]

const initialState = {
	list: TYPES,
	hintShowed: false,
	inputValue: ''
};

export default function salaryReducer(
	state=initialState,
	action: {
		type: string;
		hoveredHintType?: string|null;
		inputValue?: any
	}
): salaryState {
	switch (action.type) {
		case CHANGE_HINT:
			return {
				...state,
				hoveredHintType: action.hoveredHintType
			};
		default:
			return state;
	}
}