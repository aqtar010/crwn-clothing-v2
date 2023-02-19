import {CheckOutContainer,HeaderBlock,CheckOutHeader,Total} from "./checkout.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckOut = () => {
  const {
    cartItems,
    totalAmount,
  } = useContext(CartContext);

  return (
    <CheckOutContainer>
      <CheckOutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckOutHeader>

      {cartItems.map((item) => {
        return (
          <CheckoutItem key={item.id} cartItem={item}/>
        );
      })}

      <Total>Total: $ {totalAmount}</Total>
    </CheckOutContainer>
  );
};
export default CheckOut;
