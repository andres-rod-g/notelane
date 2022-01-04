import axios from 'axios'

const API = 'http://192.168.20.21:5000/api'

export const isUserRegistered = async (userInfo) => axios.get(`${API}/auth?email=${userInfo.email}&name=${userInfo.givenName}&userImage=${userInfo.imageUrl}&googleId=${userInfo.googleId}`)

export const gettingNotes = async (googleId) => axios.get(`${API}/${googleId}/notes`);
export const creatingNotes = async (googleId) => axios.post(`${API}/${googleId}/notes`);
export const updatingNotes = async (noteId, data) => axios.put(`${API}/${noteId}/notes`, data);
export const removingNotes = async (noteId) => axios.delete(`${API}/${noteId}/notes`)