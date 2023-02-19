import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import {
  CartIconContainer,
  ShoppingIconStyled,
  ItemCountStyled,
} from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIconStyled className="shopping-icon" />
      <ItemCountStyled>{cartCount}</ItemCountStyled>
    </CartIconContainer>
  );
};
export default CartIcon;
