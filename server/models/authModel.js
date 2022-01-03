import mongoose from 'mongoose'

const authSchema = new mongoose.Schema({
    username: String,
    email: String,
    googleId: Number,
    userImage: String
})

const Users = mongoose.model('Users', authSchema)

export default Users;