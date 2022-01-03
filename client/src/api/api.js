import axios from 'axios'

const API = 'http://localhost:3000/api'

export const isUserRegistered = async (googleId) => axios.get(`${API}/check?googleId=${googleId}`)