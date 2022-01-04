import { combineReducers } from 'redux'

import AuthReducer from './authReducer.js'
import NotesReducer from './notesReducer.js'

export default combineReducers({user: AuthReducer, notes: NotesReducer})