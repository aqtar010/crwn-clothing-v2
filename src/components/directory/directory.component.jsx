import CategoryItem from "../category-item/category-item.component";
import './directory.style.scss'

const Directory = ({ categories }) => (
    <div className="categories-container">
        {categories.map((elem) => (
            <CategoryItem key={elem.id} category={elem} />
        ))}
    </div>
);
export default Directory;