import { FETCH_NOTES, NEW_NOTE, UPDATE_NOTE, REMOVE_NOTE } from "../Constants/types";

import { gettingNotes, creatingNotes, updatingNotes, removingNotes } from "../../api/api";

export const fetchNotes = (googleId) => {
    return async (dispatch) => {
        const {data} = await gettingNotes(googleId)

        dispatch ({
            type: FETCH_NOTES,
            payload: data
        })
    }
}
export const createNotes = (googleId) => {
    return async (dispatch) => {
        const {data} = await creatingNotes(googleId)

        dispatch ({
            type: NEW_NOTE,
            payload: data
        })
    }
}

export const removeNote = (noteId) => {
    return async (dispatch) => {
        console.log(noteId)
        await removingNotes(noteId)
        
        dispatch ({
            type: REMOVE_NOTE, 
            noteId 
        })
    }
}

export const updateNote = (noteId, noteData) => {
    return async (dispatch) => {
        console.log("Updating")
        await updatingNotes(noteId, noteData)

        dispatch({
            type: UPDATE_NOTE,
            payload: {noteId, data: noteData}
        })
    }
}