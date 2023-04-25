import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import CategoryPreview from "../../component/category-preview/category-preview.component";
import './shop.style.scss';
const Shop = () => {
    const { products } = useContext(ProductsContext);
    return (
        <div className='shop-container'>
            {products.map((key) => {
                const products = key.items;
                return <CategoryPreview key={key.title} title={key.title} products={products} />;
            })}
        </div>
    )
}
export default Shop;