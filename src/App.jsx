
import { useState } from 'react'
import './App.css'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Home from './pages/Home'
import updatedItems from './data'
import { CartContext } from './contexts/CartContext'

function App() {

  const [shoes, setShoes] = useState(updatedItems)

  return (
    <CartContext value={shoes}>
      <Home />
      <Cart />
      <Checkout />
    </CartContext>
  )
}

export default App
