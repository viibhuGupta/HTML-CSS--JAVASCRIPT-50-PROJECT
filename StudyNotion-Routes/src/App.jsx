import { Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Contact from './pages/Contact'

function App() {


  return (
    <>
      <div>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/contact' element={<Contact />} />

``

        </Routes>
      </div>

    </>
  )
}

export default App
