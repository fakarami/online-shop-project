import { createContext, useEffect, useState } from "react";

export const shopContext = createContext(null);

export const ShopContextProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState();

  useEffect(() => {
    const data = localStorage.getItem("f-shop-cart");
    setCartItem(!!JSON.parse(data) ? JSON.parse(data) : []);
  }, []);

  useEffect(() => {
    if (cartItem !== undefined)
      localStorage.setItem("f-shop-cart", JSON.stringify(cartItem));
  }, [cartItem]);

  const addToCart = (itemId) => {
    !cartItem?.find((item) => item.id === itemId)
      ? setCartItem([...cartItem, { id: itemId, count: 1 }])
      : setCartItem(
          cartItem.map((item) =>
            item.id === itemId ? { ...item, count: item.count + 1 } : item
          )
        );
  };

  const removeFromCart = (idMahsoul) => {
    setCartItem(
      cartItem.map((item) =>
        item.id === idMahsoul
          ? { ...item, count: item.count === 0 ? 0 : item.count - 1 }
          : item
      )
    );
  };

  const resetCart = () => {
    setCartItem([]);
    localStorage.removeItem("f-shop-cart");
  };

  const contextValue = { cartItem, addToCart, removeFromCart, resetCart };
  return (
    <shopContext.Provider value={contextValue}>{children}</shopContext.Provider>
  );
};
