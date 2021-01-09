import { ADD_TO_STASH } from './ActionTypes';

export function addToStash(el) {
    return {
        type: ADD_TO_STASH,
        payload: el
    }
}