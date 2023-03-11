import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Products from './components/Products'
import Cart from './components/Cart'

const App = () => {
  const [viewCart, setViewCart] = useState(false)
  const pageContent = viewCart ? <Cart /> : <Products />

  const content = (
    <div className='container'>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      {pageContent}
      <Footer viewCart={viewCart} />
    </div>
  )
  return content
}

export default App
