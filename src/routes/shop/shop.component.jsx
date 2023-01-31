import { useContext } from "react";
import { ProductContext } from "../../context/products.contexts";
import Productcard from "../../components/product-card/productcard.component";
import './shop.styles.scss'

const Shop = () => {
    const {products} =useContext(ProductContext)
  return (
    <div className="products-container">
      {products.map((product) => {
        return (
          <Productcard key={product.id} product={product}></Productcard>
        );
      })}
    </div>
  );
};
export default Shop;
