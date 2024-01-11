import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Shop from './pages/shop/Shop'
import Cart from './pages/cart/Cart'
import ShopContextProvider from './context/ShopContext'

function App() {
  return (
    <div className='App'>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' exact element={<Shop />} />
            <Route path='/cart' exact element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  )
}

export default App
