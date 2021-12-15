import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/userContext'
import { signOut } from '@firebase/auth'
import { useNavigate } from 'react-router'
import { auth } from '../firebase-config'

const NavBar = () => {
  const navigate = useNavigate()
  const { toggleModals } = useContext(UserContext)

  const logOut = async () => {
    try {
      await signOut(auth)
      navigate('/')
    } catch (err) {
      alert(
        'For some reasons, we cannot deconnect, please check your internet connexion and retry'
      )
      console.log(err)
    }
  }

  return (
    <nav className='navbar navbar-light bg-light px-4'>
      <Link to='/' className='navbar-brand'>
        AuthJS
      </Link>

      <div>
        <button
          onClick={() => toggleModals('signUp')}
          className='btn btn-primary'
        >
          Sign Up
        </button>
        <button
          onClick={() => toggleModals('signIn')}
          className='btn btn-primary ms-2'
        >
          Sign In
        </button>
        <button onClick={logOut} className='btn btn-danger ms-2'>
          Log Out
        </button>
      </div>
    </nav>
  )
}

export default NavBar
