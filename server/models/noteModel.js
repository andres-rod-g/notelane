import mongoose from 'mongoose'

const noteSchema = mongoose.Schema({
    title: String,
    content: String,
    created: Date,
    lastEdited: Date
})

const Note = mongoose.model('Notes', noteSchema)

export default Note;