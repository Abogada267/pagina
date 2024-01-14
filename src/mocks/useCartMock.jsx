/* eslint-disable eol-last */
import { useContext, useEffect, useRef } from 'react'
import { CartContext } from '../Context/CartContext.jsx'
import { cartMock } from './cartMock.jsx'

const useCartMock = (shouldExecute) => {
  const { addItemToCart } = useContext(CartContext)
  const isFirstRun = useRef(true)

  useEffect(() => {
    if (shouldExecute && isFirstRun.current) {
      cartMock.map((item) => addItemToCart(item, 20))
      isFirstRun.current = false
    }
  }, [])
}

export default useCartMock