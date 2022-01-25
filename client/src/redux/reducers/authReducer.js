import { AUTH } from "../Constants/types"

const AuthReducer = (user = {}, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('User', JSON.stringify({...action.userData}))
            return action.userData
        default:
            return user
    }
}

export default AuthReducer