import Button from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./productcard.style.scss";

const Productcard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart, setTotalQuantity } = useContext(CartContext);

  const addToCart = () => {
    addItemToCart(product);
    setTotalQuantity((prev) => {
      return prev + 1;
    });
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button buttonType="inverted" onClick={addToCart}>
        Add to Cart
      </Button>
    </div>
  );
};
export default Productcard;
