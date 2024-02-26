import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/home'

import Base from './template/base'
import CartPage from './pages/cart'
import CartSucessPage from './pages/cart/cart_success'

export function Router() {
  return (
    <Routes>
      <Route element={<Base />}>

        <Route path="/" element={<HomePage />} />
        <Route path='cart'>
          <Route path="/cart" element={<CartPage />} />
          <Route path="success" element={<CartSucessPage />} />
        </Route>
      </Route>
    </Routes>
  )
}
