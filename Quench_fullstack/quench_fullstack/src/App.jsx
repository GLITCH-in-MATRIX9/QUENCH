import React from 'react'
import { Routes , Route, useRoutes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Connection from './pages/Connection'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='px-4 sm:px[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/connection' element={<Connection />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/place-order' element={<PlaceOrder/>}/>
        <Route path='/orders' element={<Orders/>}/>

      </Routes>
    </div>
  )
}

export default App
