import { createContext, useState, useEffect } from "react"; 
import Swal from "sweetalert2";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  
//  added localStorage for cart items
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });
  
  // clear function for cart
  const clearCart=() =>{
    setCartItems([])
  }


  // change in cartItems will update localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    if (cartItems.some((item) => item.id === product.id)) {
      Swal.fire({
        title: "Opps!",
        text: "This item is already in the cart",
        icon: "warning",
        confirmButtonColor: "#3085d6",
      });
    } else {
      setCartItems((prevItems) => [...prevItems, product]);
      Swal.fire({
        title: "Added to Cart!",
        text: "The item has been added to your cart.",
        icon: "success"
      });
    }
  };

  const cartCount = cartItems.length;

  return (
    <CartContext.Provider value={{ addToCart, cartCount, cartItems, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};