import { useNavigate } from 'react-router-dom'

const AccoutSettings = () => {
    const navigate = useNavigate()

    const handleLogOut = () => {
        localStorage.removeItem('User')
        setTimeout(() => navigate('/'), 500 )
    }

    return (
        <>
            <h2>Account</h2>
            <button onClick={handleLogOut}>LogOut</button>
        </>
    )
}

export default AccoutSettings