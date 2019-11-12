 import { combineReducers } from 'redux'
import todos from './todos'
import showDialogs from './showDialogs'
 

export default combineReducers({
    todos,
    showDialogs,
})