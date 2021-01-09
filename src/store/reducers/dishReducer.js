import dishList from '../../assets/dishList/dishList'
import { ADD_TO_STASH } from './../actions/ActionTypes';

const initialState = {
    data: dishList,
    stash: []
}

export default function dishReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_STASH:
            return {
                ...state,
                stash: [...state.stash, action.payload]
            }

        default:
            return { ...state }
    }
}

console.log(initialState.stash)