import express from 'express'
const router = express.Router()

import {authSystem} from '../controllers/auth.js'
import {getNotes, postNote, removeNote, updateNote} from '../controllers/notes.js'

//AUTH
router.get('/auth', authSystem)  

//NOTES
router.get('/:id/notes', getNotes)
router.post('/:id/notes', postNote)
router.put('/:noteId/notes', updateNote)
router.delete('/:noteId/notes', removeNote)

export default router