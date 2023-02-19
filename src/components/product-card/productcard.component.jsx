import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import {Price,Name,ProductcardContainer,ProductFooter} from "./productcard.style.jsx";

const Productcard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addToCart = () => {
    addItemToCart(product);
  };

  return (
    <ProductcardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ProductFooter>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </ProductFooter>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addToCart}>
        Add to Cart 
      </Button>
    </ProductcardContainer>
  );
};
export default Productcard;
