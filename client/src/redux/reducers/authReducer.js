import { AUTH } from "../Constants/types"

export default (user = {}, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('User', JSON.stringify({...action.userData}))
            console.log('test')
            console.log(JSON.stringify({...action.userData}))
            return action.userData
        default:
            return user
    }
}