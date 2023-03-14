import useCart from "../hooks/useCart"
import { useState } from "react"
import CartLineItem from "./CartLineItem"

const Cart = () => {
  const [confirm, setConfirm] = useState(false)
  const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart()

  const onSubmitOrder = () => {
    dispatch({ type: REDUCER_ACTIONS.SUBMIT })
    setConfirm(true)
  }

  const pageContent = confirm 
    ? <h2>Thank you for your order</h2>
    : <>
        <ul className="cart">
          {cart.length ? (
            cart.map(item => {
            return (
              <CartLineItem 
                key={item.sku}
                item={item}
                dispatch={dispatch}
                REDUCER_ACTIONS={REDUCER_ACTIONS}
              />
            )
          })
          ) : (
            <p>Cart is empty</p>
          )}
        </ul>
        <div className="cart__totals">
          <p className="cart__titems">{totalItems} items</p>
          <p className="cart__tprice">{totalPrice}</p>
          <button 
            disabled={!totalItems} 
            className="cart__submit"
            onClick={onSubmitOrder}
          >
              Order
          </button>
        </div>
      </>
    
    const content = (
      <main className="main main--cart">
        {pageContent}
      </main>
    )


  return content
}

export default Cart
