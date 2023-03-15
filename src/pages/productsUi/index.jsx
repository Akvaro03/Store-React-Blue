import ProductsAndFilters from '../../components/Products';
import styles from './ProductsUi.module.css'

function ProductsUi() {
    return (
        <> 
            <div className={styles.ContentProductsUi}>
                <ProductsAndFilters />
            </div>
        </>
    );
}

export default ProductsUi;