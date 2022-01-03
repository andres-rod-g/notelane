import axios from 'axios'

const API = 'http://localhost:5000/api'

export const isUserRegistered = async (userInfo) => axios.get(`${API}/auth?email=${userInfo.email}&name=${userInfo.givenName}&userImage=${userInfo.imageUrl}&googleId=${userInfo.googleId}`)