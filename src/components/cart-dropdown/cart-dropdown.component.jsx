import Button from "../button/button.component";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems, cartCount } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartCount ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <div className="cart-item-empty">Cart is Empty</div>
        )}
      </div>
      <Link to="/checkout">
        <Button>GO TO CHECKOUT </Button>
      </Link>
    </div>
  );
};
export default CartDropdown;
