import styles from './styles.module.scss'

import imagen from '../images/DE514271-1DCE-4691-A374-26C469E0F0C1.jpeg'

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"
import { Collapse, Fade } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import ContentEditable from 'react-contenteditable'

import Settings from './settings/settings'

export default () => {
    const textPlaceHolder = 'Write Something!'
    const navigate = useNavigate()
    
    const [settings, setSettings] = useState(false)
    const [sidebar, setSidebar] = useState(true)
    const [title, setTitle] = useState(null)
    const [body, setBody] = useState(null)

    const [userState, setUserState] = useState(null)

    const User = localStorage.getItem('User')
    console.log(User)

    useEffect(() => {
        if (!User) return navigate('/')
        setUserState(JSON.parse(User))
    }, [navigate])

    const handleTitle = (e) => {
        return setTitle(e.target.value)
    }

    const handleText = (e) => {
        console.log(body)
         return setBody(e.target.value)
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
                                <button onClick={() => setSettings(!settings)}>Settings</button>
                                {
                                    settings
                                        ? <Settings/>
                                        : null
                                }
                            </div>
                            <div className={styles.notesSection}>
                                <div>Create New Note +</div>
                                <a>This from here is a note.</a>
                                <a>This from here is a note.</a>
                                <a>This from here is a note.</a>
                                <a>This from here is a note.</a>
                                <a>This from here is a note.</a>
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
                    </div>
                    <div className={styles.textBody}>
                        <h4>Title</h4>
                        <ContentEditable className={styles.titleInput} html={title} onChange={handleTitle} placeholder='Title'/>
                        <ContentEditable className={styles.textInput} html={body} onChange={handleText} placeholder='Write something!'/>
                    </div>
                </div>
            </div>
        </Fade>
    )
}