import { ADD_TO_STASH, SET_COUNTER_ITEM } from './ActionTypes';


export function addToStash(result) {
    return {
        type: ADD_TO_STASH,
        payload: result
    }
}

export function stashCounterItem(value, id) {
    return (dispatch, getState) => {
        let stash = getState().dishReducer.stash
        if (value) {
            const item = getState().dishReducer.data.filter(el => el.id === id)
            stash.push(item[0])
        } else {
            const index = getState().dishReducer.stash.findIndex(e => e.id === id)
            console.log(index)
            const item = getState().dishReducer.stash
            item.splice(index, 1)
            stash = item
        }
        dispatch(setCounterItem(stash))
    }
}

export function setCounterItem(array) {
    return {
        type: SET_COUNTER_ITEM,
        payload: array
    }
}

// export function firstStashItem(result) {
//     return {
//         type: FIRST_STASH_ITEM,
//         payload: result
//     }
// }

// export function addStashFilter(element) {
//     return (dispatch, getState) => {
//         const data = getState().dishReducer.stash
//         let result
//         const arr = data.filter(item => item === element)
//         if (arr.length > 0) {
//             const count = arr.length + 1
//             const item = arr[0]
//             item.count = count
//             result = item
//             dispatch(addToStash(result))
//         } else {
//             Object.defineProperty(element, 'count', {
//                 writable: true,
//                 value: 1,
//                 enumerable: false
//             })
//             result = element
//             dispatch(firstStashItem(result))
//         }
//     }

// }