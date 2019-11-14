 import { combineReducers } from 'redux'
import todos from './todos'
import showDialogs from './showDialogs'
import notes from './notes'
 

export default combineReducers({
    todos,
    showDialogs,
    notes,
})