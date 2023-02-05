import { useContext } from "react";
import { CategoriesContext } from "../../context/categories.contexts";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import "./categories-preview.styles.scss";
import { Fragment } from "react/cjs/react.production.min";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};
export default CategoriesPreview;
