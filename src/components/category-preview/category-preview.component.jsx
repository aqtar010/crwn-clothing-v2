import { Link } from "react-router-dom";
import Productcard from "../product-card/productcard.component";
import {CategoryPreviewContainer,Title,Preview} from "./category-preview.styles.jsx";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
      <Link to={title}>
        <Title>{title.toUpperCase()}</Title>
      </Link>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <Productcard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};
export default CategoryPreview;
