//STYLES
import styles from './styles.module.scss'
//IMAGES
import imagen from '../images/DE514271-1DCE-4691-A374-26C469E0F0C1.jpeg'
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

export default () => {
    const parser = new DOMParser();
    const notes = useSelector((state) => state.notes)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const [settings, setSettings] = useState(false)
    const [sidebar, setSidebar] = useState(true)
    const [changed, setChanged] = useState(false)

    const [thisNote, setThisNote] = useState(null)
    const [title, setTitle] = useState(null)
    const [body, setBody] = useState(null)

    const User = localStorage.getItem('User')
    const [userState, setUserState] = useState(JSON.parse(User))
    
    
    useEffect(() => {
        dispatch(fetchNotes(userState.googleId))
        if (!User) return navigate('/')
        const timer = window.setInterval(() => {
            if(changed && thisNote) {
                save(thisNote)
                setChanged(false);
            }
        }, 500);
        return () => {
        window.clearInterval(timer);
        };
    }, [navigate, thisNote, changed])


    const handleTitle = (e) => {
        setChanged(true)
        return setTitle(e.target.value)
    }

    const handleText = (e) => {
        setChanged(true)
        return setBody(e.target.value)
    }
    
    const selectNote = (noteId) => {
        const noteArray = [...notes].filter((note) => note._id == noteId ? note : null)
        const thisNote = noteArray[0]
        console.log(thisNote)
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
                                    <img src={userState?.imageUrl}/>
                                    <div className={styles.data}>
                                        <h1>{userState?.givenName}</h1>
                                        <h2>{userState?.email}</h2>
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
                                <div onClick={() => dispatch(createNotes(userState.googleId))} className={styles.textButton}>Create New Note +</div>
                                {
                                    notes?.length > 0
                                    ? notes.map((note) => {
                                        if(note.title !== ''){
                                            return <a key={note._id} onClick={() => selectNote(note._id)} html={note.title} dangerouslySetInnerHTML={{__html: note.title}}></a>
                                        } else {
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