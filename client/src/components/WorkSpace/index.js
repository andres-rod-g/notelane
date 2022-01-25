//STYLES
import styles from './styles.module.scss'
//COMPONENTS
import { Collapse, Fade } from 'react-bootstrap'
import ContentEditable from 'react-contenteditable'
import Settings from './settings/settings'
// HOOKS AND MORE
import { fetchNotes, createNotes, removeNote, updateNote } from '../../redux/actions/notesActions'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"
import {useDispatch, useSelector} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft, faSave, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const WorkSpace = () => {
    // NOTESSS
    const notes = useSelector((state) => state.notes)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const [settings, setSettings] = useState(false)
    const [sidebar, setSidebar] = useState(true)
    const [changed, setChanged] = useState(false)

    const [thisNote, setThisNote] = useState(null)
    const [title, setTitle] = useState(null)
    const [body, setBody] = useState(null)

    const User = JSON.parse(localStorage.getItem('User'))
    
    useEffect(() => {
        if (!User) return navigate('/')
        dispatch(fetchNotes(User.googleId))
        const timer = window.setInterval(() => {
            if(changed && thisNote) {
                save(thisNote)
                setChanged(false);
            }
        }, 500);
        return () => {
        window.clearInterval(timer);
        };
    })


    const handleTitle = (e) => {
        setChanged(true)
        return setTitle(e.target.value)
    }

    const handleText = (e) => {
        setChanged(true)
        return setBody(e.target.value)
    }
    
    const selectNote = (noteId) => {
        const noteArray = [...notes].filter((note) => note._id === noteId ? note : null)
        const thisNote = noteArray[0]
        setThisNote(noteId)
        setTitle(thisNote.title)
        setBody(thisNote.content)
    }
    
    const remove = (noteId) => {
        dispatch(removeNote(thisNote))
        setThisNote(null)
    }
    
    const save = (noteId) => {
        const payload = {
            title,
            content: body,
            lastEdited: new Date()
        }
        dispatch(updateNote(noteId, payload))
    }

    return (
        <Fade appear={true} in={true}>
            <div className={styles.workSpaceContainer}>
                <div style={{minWidth:'fit-content'}}>
                    <Collapse in={sidebar} dimension={'width'} styles={{height: '100vh', width: '400px'}}>
                        <div className={styles.sideBar}>
                            <div className={styles.profileSection}>
                                <div className={styles.profile}>
                                    <img src={User?.imageUrl} alt='userImage'/>
                                    <div className={styles.data}>
                                        <h1>{User?.givenName}</h1>
                                        <h2>{User?.email}</h2>
                                    </div>
                                </div>
                                <button onClick={() => setSettings(true)}>Settings</button>
                                {
                                    settings
                                        ? <Settings setSettings={setSettings}/>
                                        : null
                                }
                            </div>
                            <div className={styles.notesSection}>
                                <div onClick={() => dispatch(createNotes(User.googleId))} className={styles.textButton}>Create New Note +</div>
                                {
                                    notes?.length > 0
                                    ? notes.map((note) => {
                                        if(note.title !== ''){
                                            // eslint-disable-next-line
                                            return <a key={note._id} onClick={() => selectNote(note._id)} html={note.title} dangerouslySetInnerHTML={{__html: note.title}}></a>
                                        } else {
                                            // eslint-disable-next-line
                                            return <a key={note._id} onClick={() => selectNote(note._id)}>New Note</a>

                                        }
                                    })
                                    : null
                                }
                            </div>
                        </div>
                    </Collapse>
                </div>
                <div className={styles.bodyContainer}>
                    <div className={styles.toolBar}>
                        <button onClick={()=>setSidebar(!sidebar)}>
                            {
                                sidebar
                                    ? <FontAwesomeIcon icon={faChevronLeft}/>
                                    : <FontAwesomeIcon icon={faChevronRight}/>
                            }
                        </button>
                        {
                            thisNote
                                ?   <div>
                                        <button onClick={() => remove()}><FontAwesomeIcon icon={faTrashAlt}/></button>
                                        <button onClick={() => save(thisNote)}><FontAwesomeIcon icon={faSave}/></button>
                                    </div>
                                : null
                        }
                    </div>
                    <div className={styles.textBody}>
                        {
                            thisNote 
                                ?   <Fade appear={true} in={true}>
                                        <div>
                                            <h4>Title</h4>
                                            <ContentEditable spellCheck={false} className={styles.titleInput} html={title} onChange={handleTitle} placeholder='Title'/>
                                            <ContentEditable spellCheck={false} className={styles.textInput} html={body} onChange={handleText} placeholder='Write something!'/>    
                                        </div>
                                    </Fade>
                                : <Fade appear={true} in={true}><div><h1>Select one note.</h1></div></Fade>
                        }
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default WorkSpace;