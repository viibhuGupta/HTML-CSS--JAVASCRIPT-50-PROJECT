/* eslint-disable no-unused-vars */

import React  from 'react'
import { Routes  , Route ,Link} from 'react-router-dom'
import About from './About'
import Home from './Home'
import Contact from './Contact'
import PageNotFound from './PageNotFound'

const PagesRoute = () => {
  return (
    <div className='justify-center gap-5 m-5 text-xl text-center'>

        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <br />
                <li>
                    <Link to="/about">About</Link>
                </li>
                <br />
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <br />
                <li>
                    <Link to="*">404</Link>
                </li>
                <br /> <br /> <br /> <br />
            </ul>
        </nav>
        
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    </div>
  )
}

export default PagesRoute