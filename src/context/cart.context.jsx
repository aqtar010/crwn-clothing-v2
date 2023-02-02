import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  decreaseItemQuantity: () => {},
  removeCartItem: () => {},
  totalAmount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  const [cartCount, setCartCount] = useState(0);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const newTotal = cartItems.reduce((totalAmount, cartItem) => {
      return totalAmount + cartItem.quantity * cartItem.price;
    }, 0);
    cartItems.forEach((existingCartItem) => {
      if (existingCartItem.quantity === 0) {
        removeCartItem(existingCartItem);
      }
    });
    setCartCount(newCartCount);
    setTotalAmount(newTotal);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems]);
  // eslint-disable-next-line no-unused-vars

  
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const decreaseItemQuantity = (itemDec) => {
    setCartItems(() => {
      const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === itemDec.id
      );

      if (existingCartItem.quantity >= 1) {
        return cartItems.map((cartItem) =>
          cartItem.id === itemDec.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      }
    });
  };

  const removeCartItem = (remitem) => {
    setCartItems(() => {
      const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === remitem.id
      );
      if (existingCartItem) {
        const newList = cartItems.filter((item) => {
          return item.id !== remitem.id;
        });
        return newList;
      }
    });
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    setCartCount,
    decreaseItemQuantity,
    removeCartItem,
    totalAmount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
