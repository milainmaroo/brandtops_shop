import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Shop from './pages/shop/Shop'
import Cart from './pages/cart/Cart'

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Shop />} />
          <Route path='/cart' exact element={<Cart />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
