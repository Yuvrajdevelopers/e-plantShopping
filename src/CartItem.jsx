import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, removeItem } from "./CartSlice";

function CartItem({ onContinueShopping }) {

  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const calculateTotalCost = (item) => {
    return item.quantity * parseFloat(item.cost.substring(1));
  };

  const calculateTotalAmount = () => {

    return cartItems.reduce((total, item) => {
      return total + calculateTotalCost(item);
    }, 0);

  };

  const handleIncrement = (item) => {

    dispatch(updateQuantity({
      name: item.name,
      amount: item.quantity + 1
    }));

  };

  const handleDecrement = (item) => {

    if (item.quantity > 1) {

      dispatch(updateQuantity({
        name: item.name,
        amount: item.quantity - 1
      }));

    } else {

      dispatch(removeItem(item.name));

    }

  };

  const handleRemove = (item) => {

    dispatch(removeItem(item.name));

  };

  const handleCheckoutShopping = () => {

    alert("Coming Soon");

  };

  return (

    <div>

      <h2>Shopping Cart</h2>

      <h3>Total Cost: ${calculateTotalAmount()}</h3>

      {cartItems.map((item, index) => (

        <div key={index} className="cart-item">

          <img src={item.image} alt={item.name} width="100"/>

          <h3>{item.name}</h3>

          <p>Price: {item.cost}</p>

          <p>Subtotal: ${calculateTotalCost(item)}</p>

          <button onClick={() => handleIncrement(item)}>+</button>

          <button onClick={() => handleDecrement(item)}>-</button>

          <button onClick={() => handleRemove(item)}>Delete</button>

        </div>

      ))}

      <br/>

      <button onClick={onContinueShopping}>Continue Shopping</button>

      <button onClick={handleCheckoutShopping}>Checkout</button>

    </div>

  );

}

export default CartItem;