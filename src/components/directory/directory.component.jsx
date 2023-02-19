import DirecoryItem from "../directory-item/directory-item.component";
import {CategoriesContainer} from './directory.style.jsx'

const Directory = ({ categories }) => (
    <CategoriesContainer>
        {categories.map((elem) => (
            <DirecoryItem key={elem.id} category={elem} />
        ))}
    </CategoriesContainer>
);
export default Directory;