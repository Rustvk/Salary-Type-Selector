import {CHANGE_HINT} from './actionTypes';

export function changeHint(hoveredHintType?: string) {
    return {
        type: CHANGE_HINT,
        hoveredHintType
    }
}