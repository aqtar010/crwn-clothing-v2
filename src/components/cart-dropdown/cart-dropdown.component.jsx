import Button from "../button/button.component";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CartItem from "../cart-item/cart-item.component";
import {
  CartDropDownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
  const { cartItems, cartCount } = useContext(CartContext);
  return (
    <CartDropDownContainer>
      <CartItems>
        {cartCount ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Cart is Empty</EmptyMessage>
        )}
      </CartItems>
      <Link to="/checkout">
        <Button>GO TO CHECKOUT </Button>
      </Link>
    </CartDropDownContainer>
  );
};
export default CartDropdown;
