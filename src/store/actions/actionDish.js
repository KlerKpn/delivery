import { ADD_TO_STASH } from './ActionTypes';


export function addToStash(result) {
    return {
        type: ADD_TO_STASH,
        payload: result
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