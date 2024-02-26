
import { Products } from "@/@types/products";
import { createContext, useContext, useState } from "react";

type CartProviderProps = {
  children: ReactNode;
}

export type CartItem = {
  id: string | number
  img: string
  title: string
  price: string
}

export type CartContextData = {

}

const CartContext = createContext({});



export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const addProduct = (newProduct: CartItem) => { }
  const removeProduct = (id: string) => { }
  const updateProduct = () => { }
  const isInCart = (id: string) => { }


  return (
    <CartContext.Provider value={{
      cartItems,
      removeProduct,
      addProduct

    }}>
      {children}
    </CartContext.Provider>
  )
}



export function useCart() {
  const context = useContext(CartContext)

  if (!context)
    throw new Error('You must use Cart in order to consume this context.')

  return context
}
