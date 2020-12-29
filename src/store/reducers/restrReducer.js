import restaurantsList from './../../assets/restaurantsList/restaurantsList';

const initialState = {
    data: restaurantsList
}

export default function restrReducer(state = initialState, action) {
    switch (action.type) {
        case 1:
            
            break;
    
        default:
            return {...state}
    }
}