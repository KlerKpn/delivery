import { combineReducers } from 'redux'
import  restrReducer  from './restrReducer';
import dishReducer from './dishReducer'

export default combineReducers({
    restrReducer,
    dishReducer
})