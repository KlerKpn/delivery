import dishList from '../../assets/dishList/dishList'

const initialState = {
    data: dishList
}

export default function dishReducer(state = initialState, action) {
    switch (action.type) {
        case 1:
            
            break;
    
        default:
            return {...state}
    }
}