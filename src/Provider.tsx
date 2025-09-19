"use client"

import { SessionProvider } from 'next-auth/react'
import React from 'react'
import CartContextProvider from './context/CartContext'
import WishlistContextProvider from './context/Wishlist'

function Provider({children}:{children:React.ReactNode}) {
  return (
    <SessionProvider>
      <CartContextProvider>
        <WishlistContextProvider>

        {children}
        </WishlistContextProvider>
      </CartContextProvider>
    </SessionProvider>
  )
}

export default Provider