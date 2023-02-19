import {
  CheckoutItemContainer,
  ImageContainer,
  ImagesDiv,
  PriceSpan,
  QuantitySpan,
  ArrowDiv,
  ValueSpan,
  RemoveButton,
} from "./checkout-item.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, decreaseItemQuantity, removeCartItem } =
    useContext(CartContext);
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <ImagesDiv src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <span className="name">{name}</span>
      <QuantitySpan>
        <ArrowDiv onClick={() => decreaseItemQuantity(cartItem)}>
          {" "}
          &#10094;
        </ArrowDiv>
        <ValueSpan>{quantity}</ValueSpan>
        <ArrowDiv onClick={() => addItemToCart(cartItem)}>&#10095;</ArrowDiv>
      </QuantitySpan>
      <PriceSpan>$ {price}</PriceSpan>
      <RemoveButton onClick={() => removeCartItem(cartItem)}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};
export default CheckoutItem;
