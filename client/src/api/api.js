import axios from 'axios'

const API = 'https://notelane-backend.herokuapp.com/api'

export const isUserRegistered = async (userInfo) => axios.get(`${API}/auth?email=${userInfo.email}&name=${userInfo.givenName}&userImage=${userInfo.imageUrl}&googleId=${userInfo.googleId}`)

export const gettingNotes = async (googleId) => axios.get(`${API}/${googleId}/notes`);
export const creatingNotes = async (googleId) => axios.post(`${API}/${googleId}/notes`);
export const updatingNotes = async (noteId, data) => axios.put(`${API}/${noteId}/notes`, data);
export const removingNotes = async (noteId) => axios.delete(`${API}/${noteId}/notes`)