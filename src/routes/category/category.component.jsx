import {CategoryContainer,CategoryTitle} from "./category.styles.jsx";
import { Fragment, useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../context/categories.contexts";
import { useParams } from "react-router-dom";
import Productcard from "../../components/product-card/productcard.component";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <Productcard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};
export default Category;
