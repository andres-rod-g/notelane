import { FETCH_NOTES, NEW_NOTE, UPDATE_NOTE, REMOVE_NOTE } from "../Constants/types";

const NotesReducer = (notes = [], action) => {
    switch(action.type) {
        case FETCH_NOTES:
            return action.payload
        case NEW_NOTE:
            return [...notes, action.payload]
        case REMOVE_NOTE:
            let temp = [...notes]
            temp = temp.filter((e) => e._id !== action.noteId)
            return temp
        case UPDATE_NOTE:
            let temp2 = [...notes]
            let arr = temp2.map((e) => e._id === action.payload.noteId ? {...e, title: action.payload.data.title, content: action.payload.data.content} : e)
            console.log(arr)
            return arr
        default:
            return notes
    }
}

export default NotesReducer