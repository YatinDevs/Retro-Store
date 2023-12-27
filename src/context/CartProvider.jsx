import React from "react";
import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

function cartReducer(cart, action) {
  console.log("cartReducer called..");

  switch (action.type) {
    case "ADD_ITEM": {
      return [...cart, action.payload];
    }
    case "INCREASE_QUANTITY": {
      const updatedItem = cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      return updatedItem;
    }
    case "DECREASE_QUANTITY": {
      const updatedItem = cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      return updatedItem;
    }
    case "REMOVE_ITEM": {
      return cart.filter((item) => item.id != action.payload.id);
    }
  }

  return cart;
}

function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addItemtoCart = (newCartItem) => {
    dispatch({ type: "ADD_ITEM", payload: newCartItem });
  };
  const removeItemfromCart = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id: id } });
  };
  const increaseQuantity = (id) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: { id: id } });
  };

  const decreaseQuantity = (id) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: { id: id } });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemtoCart,
        increaseQuantity,
        decreaseQuantity,
        removeItemfromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

export default CartProvider;
