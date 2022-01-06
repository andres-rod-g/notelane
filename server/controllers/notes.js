import Note from '../models/noteModel.js'

export const getNotes = async (req, res) => {
    const googleId = req.params.id

    Note.find({googleId}).sort({lastEdited: 'desc'}).exec((err, data) => {
        if (err) return console.log(err)
        res.send(data)
    })
}

export const postNote = async (req, res) => {
    const googleId = req.params.id

    const note = new Note({
        title: '',
        content: '',
        created: new Date(),
        lastEdited: new Date(),
        googleId
    })

    note.save()

    res.json(note)
}

export const updateNote = async (req, res) => {
    const noteId = req.params.noteId;
    const noteInfo = req.body;

    Note.findByIdAndUpdate(noteId, {title: noteInfo.title, content: noteInfo.content, lastEdited: new Date()}).exec((err, data) => {
        if (err) return console.log(err);
        res.json(data)
    })
}

export const removeNote = async (req, res) => {
    const noteId = req.params.noteId;
    console.log(noteId)
    console.log('removing note')
    Note.findOneAndDelete({_id: noteId}, (err, data) =>{
        if (err) return console.log(err)
        res.json({status: 'deleted'})
    })
}