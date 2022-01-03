import { combineReducers } from 'redux'

import AuthReducer from './authReducer.js'

export default combineReducers({user: AuthReducer})