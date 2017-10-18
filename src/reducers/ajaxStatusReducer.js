import * as types from '../actions/actionTypes';
import InitialState from './initialState';

export default function ajaxStatusReducer(state = InitialState.ajaxCallsInProgress, action) {
    switch (action.type) {
        case types.BEGIN_AJAX_CALL:
            return state;
        default:
            return state;
    }
}