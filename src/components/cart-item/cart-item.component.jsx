import {CartItemsContainer,ImageContainer,ItemsDetails,NameContainer} from "./cart-item.styles.jsx";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemsContainer>
      <ImageContainer src={imageUrl} alt={`${name}`} />
      <ItemsDetails>
        <NameContainer>{name}</NameContainer>
        <span className="price">
          {quantity}x${price}
        </span>
      </ItemsDetails>
    </CartItemsContainer>
  );
};
export default CartItem;
