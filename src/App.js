import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import SignUpModal from './components/SignUpModal'
import SignInModal from './components/SignInModal'
import Private from './pages/Private/Private'
import PrivateHome from './pages/Private/PrivateHome/PrivateHome'

function App() {
  return (
    <>
      <SignUpModal />
      <SignInModal />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/private' element={<Private />}>
          <Route path='/private/private-home' element={<PrivateHome />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
