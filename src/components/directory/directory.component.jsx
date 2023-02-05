import DirecoryItem from "../directory-item/directory-item.component";
import './directory.style.scss'

const Directory = ({ categories }) => (
    <div className="categories-container">
        {categories.map((elem) => (
            <DirecoryItem key={elem.id} category={elem} />
        ))}
    </div>
);
export default Directory;